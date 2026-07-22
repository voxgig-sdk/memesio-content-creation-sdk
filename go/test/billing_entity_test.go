package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/memesio-content-creation-sdk/go"
	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/core"

	vs "github.com/voxgig-sdk/memesio-content-creation-sdk/go/utility/struct"
)

func TestBillingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Billing(nil)
		if ent == nil {
			t.Fatal("expected non-nil BillingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := billingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "billing." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_BILLING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		billingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.billing", setup.data)))
		var billingRef01Data map[string]any
		if len(billingRef01DataRaw) > 0 {
			billingRef01Data = core.ToMapAny(billingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = billingRef01Data

		// LOAD
		billingRef01Ent := client.Billing(nil)
		billingRef01MatchDt0 := map[string]any{}
		billingRef01DataDt0Loaded, err := billingRef01Ent.Load(billingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if billingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func billingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "billing", "BillingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read billing test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse billing test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"billing01", "billing02", "billing03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MEMESIOCONTENTCREATION_TEST_BILLING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIOCONTENTCREATION_TEST_BILLING_ENTID": idmap,
		"MEMESIOCONTENTCREATION_TEST_LIVE":      "FALSE",
		"MEMESIOCONTENTCREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIOCONTENTCREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIOCONTENTCREATION_TEST_BILLING_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MEMESIOCONTENTCREATION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["MEMESIOCONTENTCREATION_APIKEY"],
			},
			extra,
		})
		client = sdk.NewMemesioContentCreationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MEMESIOCONTENTCREATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MEMESIOCONTENTCREATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
