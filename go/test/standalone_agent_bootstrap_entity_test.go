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

func TestStandaloneAgentBootstrapEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StandaloneAgentBootstrap(nil)
		if ent == nil {
			t.Fatal("expected non-nil StandaloneAgentBootstrapEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := standalone_agent_bootstrapBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "standalone_agent_bootstrap." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		standaloneAgentBootstrapRef01Ent := client.StandaloneAgentBootstrap(nil)
		standaloneAgentBootstrapRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "standalone_agent_bootstrap"}, setup.data), "standalone_agent_bootstrap_ref01"))

		standaloneAgentBootstrapRef01DataResult, err := standaloneAgentBootstrapRef01Ent.Create(standaloneAgentBootstrapRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		standaloneAgentBootstrapRef01Data = core.ToMapAny(entityData(standaloneAgentBootstrapRef01DataResult))
		if standaloneAgentBootstrapRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func standalone_agent_bootstrapBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "standalone_agent_bootstrap", "StandaloneAgentBootstrapTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read standalone_agent_bootstrap test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse standalone_agent_bootstrap test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"standalone_agent_bootstrap01", "standalone_agent_bootstrap02", "standalone_agent_bootstrap03"},
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
	entidEnvRaw := os.Getenv("MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID": idmap,
		"MEMESIO_CONTENT_CREATION_TEST_LIVE":      "FALSE",
		"MEMESIO_CONTENT_CREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIO_CONTENT_CREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID"])
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
