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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const ai_jobEntityLiveStrict = true


func TestAiJobEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiJob(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiJobEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AiJob(nil).Load(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.MemesioContentCreationError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := ai_jobBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_job." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// CREATE
		aiJobRef01Ent := client.AiJob(nil)
		aiJobRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_job"}), "ai_job_ref01"))

		aiJobRef01DataResult, err := aiJobRef01Ent.Create(aiJobRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiJobRef01Data = core.ToMapAny(entityData(aiJobRef01DataResult))
		if aiJobRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiJobRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		aiJobRef01MatchDt0 := map[string]any{
			"id": aiJobRef01Data["id"],
		}
		aiJobRef01DataDt0Loaded, err := aiJobRef01Ent.Load(aiJobRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiJobRef01DataDt0LoadResult := core.ToMapAny(entityData(aiJobRef01DataDt0Loaded))
		if aiJobRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiJobRef01DataDt0LoadResult["id"] != aiJobRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ai_jobBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_job", "AiJobTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_job test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_job test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_job01", "ai_job02", "ai_job03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID": idmap,
		"MEMESIO_CONTENT_CREATION_TEST_LIVE":      "FALSE",
		"MEMESIO_CONTENT_CREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIO_CONTENT_CREATION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["MEMESIO_CONTENT_CREATION_APIKEY"],
			},
			extraOpts,
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
