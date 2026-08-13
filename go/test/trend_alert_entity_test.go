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

func TestTrendAlertEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TrendAlert(nil)
		if ent == nil {
			t.Fatal("expected non-nil TrendAlertEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := trend_alertBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "trend_alert." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_TREND_ALERT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		trendAlertRef01Ent := client.TrendAlert(nil)
		trendAlertRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "trend_alert"}, setup.data), "trend_alert_ref01"))

		trendAlertRef01DataResult, err := trendAlertRef01Ent.Create(trendAlertRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		trendAlertRef01Data = core.ToMapAny(entityData(trendAlertRef01DataResult))
		if trendAlertRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		trendAlertRef01MatchDt0 := map[string]any{}
		trendAlertRef01DataDt0Loaded, err := trendAlertRef01Ent.Load(trendAlertRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if trendAlertRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func trend_alertBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "trend_alert", "TrendAlertTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read trend_alert test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse trend_alert test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"trend_alert01", "trend_alert02", "trend_alert03"},
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
	entidEnvRaw := os.Getenv("MEMESIO_CONTENT_CREATION_TEST_TREND_ALERT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIO_CONTENT_CREATION_TEST_TREND_ALERT_ENTID": idmap,
		"MEMESIO_CONTENT_CREATION_TEST_LIVE":      "FALSE",
		"MEMESIO_CONTENT_CREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIO_CONTENT_CREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIO_CONTENT_CREATION_TEST_TREND_ALERT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["MEMESIO_CONTENT_CREATION_APIKEY"],
			},
			extra,
		})
		client = sdk.NewMemesioContentCreationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MEMESIO_CONTENT_CREATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
