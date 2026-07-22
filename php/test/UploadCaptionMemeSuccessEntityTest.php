<?php
declare(strict_types=1);

// UploadCaptionMemeSuccess entity test

require_once __DIR__ . '/../memesiocontentcreation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class UploadCaptionMemeSuccessEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MemesioContentCreationSDK::test(null, null);
        $ent = $testsdk->UploadCaptionMemeSuccess(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = upload_caption_meme_success_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "upload_caption_meme_success." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $upload_caption_meme_success_ref01_ent = $client->UploadCaptionMemeSuccess(null);
        $upload_caption_meme_success_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.upload_caption_meme_success"), "upload_caption_meme_success_ref01"));

        $upload_caption_meme_success_ref01_data_result = $upload_caption_meme_success_ref01_ent->create($upload_caption_meme_success_ref01_data, null);
        $upload_caption_meme_success_ref01_data = Helpers::to_map($upload_caption_meme_success_ref01_data_result);
        $this->assertNotNull($upload_caption_meme_success_ref01_data);

    }
}

function upload_caption_meme_success_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/upload_caption_meme_success/UploadCaptionMemeSuccessTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MemesioContentCreationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["upload_caption_meme_success01", "upload_caption_meme_success02", "upload_caption_meme_success03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID" => $idmap,
        "MEMESIOCONTENTCREATION_TEST_LIVE" => "FALSE",
        "MEMESIOCONTENTCREATION_TEST_EXPLAIN" => "FALSE",
        "MEMESIOCONTENTCREATION_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MEMESIOCONTENTCREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MEMESIOCONTENTCREATION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["MEMESIOCONTENTCREATION_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new MemesioContentCreationSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["MEMESIOCONTENTCREATION_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MEMESIOCONTENTCREATION_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
