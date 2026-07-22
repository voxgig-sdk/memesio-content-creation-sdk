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

func TestAiJobEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiJob(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiJobEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
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
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_AI_JOB_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiJobRef01Ent := client.AiJob(nil)
		aiJobRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "ai_job"}, setup.data), "ai_job_ref01"))

		aiJobRef01DataResult, err := aiJobRef01Ent.Create(aiJobRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiJobRef01Data = core.ToMapAny(aiJobRef01DataResult)
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
		aiJobRef01DataDt0LoadResult := core.ToMapAny(aiJobRef01DataDt0Loaded)
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
	idmap := vs.Transform(
		[]any{"ai_job01", "ai_job02", "ai_job03", "job01", "job02", "job03"},
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
	entidEnvRaw := os.Getenv("MEMESIOCONTENTCREATION_TEST_AI_JOB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIOCONTENTCREATION_TEST_AI_JOB_ENTID": idmap,
		"MEMESIOCONTENTCREATION_TEST_LIVE":      "FALSE",
		"MEMESIOCONTENTCREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIOCONTENTCREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIOCONTENTCREATION_TEST_AI_JOB_ENTID"])
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
