<?php
declare(strict_types=1);

// Collaboration entity test

require_once __DIR__ . '/../memesiocontentcreation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CollaborationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MemesioContentCreationSDK::test(null, null);
        $ent = $testsdk->Collaboration(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = collaboration_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "collaboration." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $collaboration_ref01_ent = $client->Collaboration(null);
        $collaboration_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.collaboration"), "collaboration_ref01"));

        $collaboration_ref01_data_result = $collaboration_ref01_ent->create($collaboration_ref01_data, null);
        $collaboration_ref01_data = Helpers::to_map(is_object($collaboration_ref01_data_result) && method_exists($collaboration_ref01_data_result, 'data_get') ? $collaboration_ref01_data_result->data_get() : $collaboration_ref01_data_result);
        $this->assertNotNull($collaboration_ref01_data);

        // LOAD
        $collaboration_ref01_match_dt0 = [];
        $collaboration_ref01_data_dt0_loaded = $collaboration_ref01_ent->load($collaboration_ref01_match_dt0, null);
        $this->assertNotNull($collaboration_ref01_data_dt0_loaded);

    }
}

function collaboration_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/collaboration/CollaborationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MemesioContentCreationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["collaboration01", "collaboration02", "collaboration03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID" => $idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE" => "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN" => "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["MEMESIO_CONTENT_CREATION_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        $client = new MemesioContentCreationSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MEMESIO_CONTENT_CREATION_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
