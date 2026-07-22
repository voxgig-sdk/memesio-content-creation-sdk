# StandaloneAgentBootstrap entity test

require "minitest/autorun"
require "json"
require_relative "../MemesioContentCreation_sdk"
require_relative "runner"

class StandaloneAgentBootstrapEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    ent = testsdk.StandaloneAgentBootstrap(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = standalone_agent_bootstrap_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "standalone_agent_bootstrap." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    standalone_agent_bootstrap_ref01_ent = client.StandaloneAgentBootstrap(nil)
    standalone_agent_bootstrap_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.standalone_agent_bootstrap"), "standalone_agent_bootstrap_ref01"))

    standalone_agent_bootstrap_ref01_data_result = standalone_agent_bootstrap_ref01_ent.create(standalone_agent_bootstrap_ref01_data, nil)
    standalone_agent_bootstrap_ref01_data = Helpers.to_map(standalone_agent_bootstrap_ref01_data_result)
    assert !standalone_agent_bootstrap_ref01_data.nil?

  end
end

def standalone_agent_bootstrap_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "standalone_agent_bootstrap", "StandaloneAgentBootstrapTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MemesioContentCreationSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["standalone_agent_bootstrap01", "standalone_agent_bootstrap02", "standalone_agent_bootstrap03"],
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
  entid_env_raw = ENV["MEMESIOCONTENTCREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MEMESIOCONTENTCREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID" => idmap,
    "MEMESIOCONTENTCREATION_TEST_LIVE" => "FALSE",
    "MEMESIOCONTENTCREATION_TEST_EXPLAIN" => "FALSE",
    "MEMESIOCONTENTCREATION_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["MEMESIOCONTENTCREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID"])
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
