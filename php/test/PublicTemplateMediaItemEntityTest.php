<?php
declare(strict_types=1);

// PublicTemplateMediaItem entity test

require_once __DIR__ . '/../memesiocontentcreation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class PublicTemplateMediaItemEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MemesioContentCreationSDK::test(null, null);
        $ent = $testsdk->PublicTemplateMediaItem(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = public_template_media_item_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "public_template_media_item." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $public_template_media_item_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.public_template_media_item")));
        $public_template_media_item_ref01_data = null;
        if (count($public_template_media_item_ref01_data_raw) > 0) {
            $public_template_media_item_ref01_data = Helpers::to_map($public_template_media_item_ref01_data_raw[0][1]);
        }

        // LOAD
        $public_template_media_item_ref01_ent = $client->PublicTemplateMediaItem(null);
        $public_template_media_item_ref01_match_dt0 = [
            "id" => $public_template_media_item_ref01_data["id"],
        ];
        $public_template_media_item_ref01_data_dt0_loaded = $public_template_media_item_ref01_ent->load($public_template_media_item_ref01_match_dt0, null);
        $public_template_media_item_ref01_data_dt0_load_result = Helpers::to_map($public_template_media_item_ref01_data_dt0_loaded);
        $this->assertNotNull($public_template_media_item_ref01_data_dt0_load_result);
        $this->assertEquals($public_template_media_item_ref01_data_dt0_load_result["id"], $public_template_media_item_ref01_data["id"]);

    }
}

function public_template_media_item_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/public_template_media_item/PublicTemplateMediaItemTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MemesioContentCreationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["public_template_media_item01", "public_template_media_item02", "public_template_media_item03", "gif01", "gif02", "gif03", "template01", "template02", "template03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MEMESIOCONTENTCREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MEMESIOCONTENTCREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID" => $idmap,
        "MEMESIOCONTENTCREATION_TEST_LIVE" => "FALSE",
        "MEMESIOCONTENTCREATION_TEST_EXPLAIN" => "FALSE",
        "MEMESIOCONTENTCREATION_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MEMESIOCONTENTCREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID"]);
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
