# DeveloperApi entity test

require "minitest/autorun"
require "json"
require_relative "../MemesioContentCreation_sdk"
require_relative "runner"

class DeveloperApiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    ent = testsdk.DeveloperApi(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = developer_api_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "developer_api." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_DEVELOPER_API_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    developer_api_ref01_ent = client.DeveloperApi(nil)
    developer_api_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.developer_api"), "developer_api_ref01"))

    developer_api_ref01_data_result = developer_api_ref01_ent.create(developer_api_ref01_data, nil)
    developer_api_ref01_data = Helpers.to_map(developer_api_ref01_data_result)
    assert !developer_api_ref01_data.nil?

    # LOAD
    developer_api_ref01_match_dt0 = {}
    developer_api_ref01_data_dt0_loaded = developer_api_ref01_ent.load(developer_api_ref01_match_dt0, nil)
    assert !developer_api_ref01_data_dt0_loaded.nil?

  end
end

def developer_api_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "developer_api", "DeveloperApiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MemesioContentCreationSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["developer_api01", "developer_api02", "developer_api03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["MEMESIOCONTENTCREATION_TEST_DEVELOPER_API_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MEMESIOCONTENTCREATION_TEST_DEVELOPER_API_ENTID" => idmap,
    "MEMESIOCONTENTCREATION_TEST_LIVE" => "FALSE",
    "MEMESIOCONTENTCREATION_TEST_EXPLAIN" => "FALSE",
    "MEMESIOCONTENTCREATION_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["MEMESIOCONTENTCREATION_TEST_DEVELOPER_API_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MEMESIOCONTENTCREATION_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["MEMESIOCONTENTCREATION_APIKEY"],
      },
      extra || {},
    ])
    client = MemesioContentCreationSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MEMESIOCONTENTCREATION_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MEMESIOCONTENTCREATION_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
