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

func TestAgentInfraEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AgentInfra(nil)
		if ent == nil {
			t.Fatal("expected non-nil AgentInfraEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := agent_infraBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "agent_infra." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_AGENT_INFRA_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		agentInfraRef01Ent := client.AgentInfra(nil)
		agentInfraRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "agent_infra"}, setup.data), "agent_infra_ref01"))
		agentInfraRef01Data["agent_id"] = setup.idmap["agent01"]

		agentInfraRef01DataResult, err := agentInfraRef01Ent.Create(agentInfraRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		agentInfraRef01Data = core.ToMapAny(agentInfraRef01DataResult)
		if agentInfraRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		agentInfraRef01MatchDt0 := map[string]any{}
		agentInfraRef01DataDt0Loaded, err := agentInfraRef01Ent.Load(agentInfraRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if agentInfraRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		agentInfraRef01MatchRm0 := map[string]any{
			"id": agentInfraRef01Data["id"],
		}
		_, err = agentInfraRef01Ent.Remove(agentInfraRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func agent_infraBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "agent_infra", "AgentInfraTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read agent_infra test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse agent_infra test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"agent_infra01", "agent_infra02", "agent_infra03", "unlock01", "unlock02", "unlock03", "agent01", "agent02", "agent03", "key01", "key02", "key03"},
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
	entidEnvRaw := os.Getenv("MEMESIOCONTENTCREATION_TEST_AGENT_INFRA_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIOCONTENTCREATION_TEST_AGENT_INFRA_ENTID": idmap,
		"MEMESIOCONTENTCREATION_TEST_LIVE":      "FALSE",
		"MEMESIOCONTENTCREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIOCONTENTCREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIOCONTENTCREATION_TEST_AGENT_INFRA_ENTID"])
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
