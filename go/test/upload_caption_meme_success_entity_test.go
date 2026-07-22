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

func TestUploadCaptionMemeSuccessEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UploadCaptionMemeSuccess(nil)
		if ent == nil {
			t.Fatal("expected non-nil UploadCaptionMemeSuccessEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := upload_caption_meme_successBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "upload_caption_meme_success." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		uploadCaptionMemeSuccessRef01Ent := client.UploadCaptionMemeSuccess(nil)
		uploadCaptionMemeSuccessRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "upload_caption_meme_success"}, setup.data), "upload_caption_meme_success_ref01"))

		uploadCaptionMemeSuccessRef01DataResult, err := uploadCaptionMemeSuccessRef01Ent.Create(uploadCaptionMemeSuccessRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		uploadCaptionMemeSuccessRef01Data = core.ToMapAny(uploadCaptionMemeSuccessRef01DataResult)
		if uploadCaptionMemeSuccessRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func upload_caption_meme_successBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "upload_caption_meme_success", "UploadCaptionMemeSuccessTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read upload_caption_meme_success test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse upload_caption_meme_success test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"upload_caption_meme_success01", "upload_caption_meme_success02", "upload_caption_meme_success03"},
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
	entidEnvRaw := os.Getenv("MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID": idmap,
		"MEMESIOCONTENTCREATION_TEST_LIVE":      "FALSE",
		"MEMESIOCONTENTCREATION_TEST_EXPLAIN":   "FALSE",
		"MEMESIOCONTENTCREATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID"])
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
