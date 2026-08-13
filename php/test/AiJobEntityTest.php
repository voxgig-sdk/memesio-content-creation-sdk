<?php
declare(strict_types=1);

// AiJob entity test

require_once __DIR__ . '/../memesiocontentcreation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AiJobEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MemesioContentCreationSDK::test(null, null);
        $ent = $testsdk->AiJob(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = ai_job_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ai_job." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $ai_job_ref01_ent = $client->AiJob(null);
        $ai_job_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.ai_job"), "ai_job_ref01"));

        $ai_job_ref01_data_result = $ai_job_ref01_ent->create($ai_job_ref01_data, null);
        $ai_job_ref01_data = Helpers::to_map(is_object($ai_job_ref01_data_result) && method_exists($ai_job_ref01_data_result, 'data_get') ? $ai_job_ref01_data_result->data_get() : $ai_job_ref01_data_result);
        $this->assertNotNull($ai_job_ref01_data);
        $this->assertNotNull($ai_job_ref01_data["id"]);

        // LOAD
        $ai_job_ref01_match_dt0 = [
            "id" => $ai_job_ref01_data["id"],
        ];
        $ai_job_ref01_data_dt0_loaded = $ai_job_ref01_ent->load($ai_job_ref01_match_dt0, null);
        $ai_job_ref01_data_dt0_load_result = Helpers::to_map(is_object($ai_job_ref01_data_dt0_loaded) && method_exists($ai_job_ref01_data_dt0_loaded, 'data_get') ? $ai_job_ref01_data_dt0_loaded->data_get() : $ai_job_ref01_data_dt0_loaded);
        $this->assertNotNull($ai_job_ref01_data_dt0_load_result);
        $this->assertEquals($ai_job_ref01_data_dt0_load_result["id"], $ai_job_ref01_data["id"]);

    }
}

function ai_job_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ai_job/AiJobTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MemesioContentCreationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ai_job01", "ai_job02", "ai_job03", "job01", "job02", "job03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID" => $idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE" => "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN" => "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["MEMESIO_CONTENT_CREATION_APIKEY"],
            ],
            $extra ?? [],
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
