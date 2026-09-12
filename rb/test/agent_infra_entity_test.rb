# AgentInfra entity test

require "minitest/autorun"
require "json"
require_relative "../MemesioContentCreation_sdk"
require_relative "runner"

class AgentInfraEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    ent = testsdk.AgentInfra(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = agent_infra_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "agent_infra." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    agent_infra_ref01_ent = client.AgentInfra(nil)
    agent_infra_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.agent_infra"), "agent_infra_ref01"))
    agent_infra_ref01_data["agent_id"] = setup[:idmap]["agent01"]

    agent_infra_ref01_data_result = agent_infra_ref01_ent.create(agent_infra_ref01_data, nil)
    agent_infra_ref01_data = Helpers.to_map(agent_infra_ref01_data_result.respond_to?(:data_get) ? agent_infra_ref01_data_result.data_get : agent_infra_ref01_data_result)
    assert !agent_infra_ref01_data.nil?
    assert !agent_infra_ref01_data["id"].nil?

    # LOAD
    agent_infra_ref01_match_dt0 = {
      "id" => agent_infra_ref01_data["id"],
    }
    agent_infra_ref01_data_dt0_loaded = agent_infra_ref01_ent.load(agent_infra_ref01_match_dt0, nil)
    agent_infra_ref01_data_dt0_load_result = Helpers.to_map(agent_infra_ref01_data_dt0_loaded.respond_to?(:data_get) ? agent_infra_ref01_data_dt0_loaded.data_get : agent_infra_ref01_data_dt0_loaded)
    assert !agent_infra_ref01_data_dt0_load_result.nil?
    assert_equal agent_infra_ref01_data_dt0_load_result["id"], agent_infra_ref01_data["id"]

    # REMOVE
    agent_infra_ref01_match_rm0 = {
      "id" => agent_infra_ref01_data["id"],
    }
    agent_infra_ref01_ent.remove(agent_infra_ref01_match_rm0, nil)

  end
end

def agent_infra_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "agent_infra", "AgentInfraTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MemesioContentCreationSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["agent_infra01", "agent_infra02", "agent_infra03", "unlock01", "unlock02", "unlock03", "agent01", "agent02", "agent03", "key01", "key02", "key03"],
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
  entid_env_raw = ENV["MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID" => idmap,
    "MEMESIO_CONTENT_CREATION_TEST_LIVE" => "FALSE",
    "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN" => "FALSE",
    "MEMESIO_CONTENT_CREATION_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["MEMESIO_CONTENT_CREATION_APIKEY"],
      },
      extra || {},
    ])
    client = MemesioContentCreationSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MEMESIO_CONTENT_CREATION_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
