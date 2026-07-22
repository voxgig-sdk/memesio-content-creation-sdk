# AiCaption entity test

require "minitest/autorun"
require "json"
require_relative "../MemesioContentCreation_sdk"
require_relative "runner"

class AiCaptionEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    ent = testsdk.AiCaption(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = ai_caption_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ai_caption." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MEMESIOCONTENTCREATION_TEST_AI_CAPTION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ai_caption_ref01_ent = client.AiCaption(nil)
    ai_caption_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ai_caption"), "ai_caption_ref01"))

    ai_caption_ref01_data_result = ai_caption_ref01_ent.create(ai_caption_ref01_data, nil)
    ai_caption_ref01_data = Helpers.to_map(ai_caption_ref01_data_result)
    assert !ai_caption_ref01_data.nil?

    # LOAD
    ai_caption_ref01_match_dt0 = {}
    ai_caption_ref01_data_dt0_loaded = ai_caption_ref01_ent.load(ai_caption_ref01_match_dt0, nil)
    assert !ai_caption_ref01_data_dt0_loaded.nil?

  end
end

def ai_caption_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ai_caption", "AiCaptionTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MemesioContentCreationSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ai_caption01", "ai_caption02", "ai_caption03"],
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
  entid_env_raw = ENV["MEMESIOCONTENTCREATION_TEST_AI_CAPTION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MEMESIOCONTENTCREATION_TEST_AI_CAPTION_ENTID" => idmap,
    "MEMESIOCONTENTCREATION_TEST_LIVE" => "FALSE",
    "MEMESIOCONTENTCREATION_TEST_EXPLAIN" => "FALSE",
    "MEMESIOCONTENTCREATION_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["MEMESIOCONTENTCREATION_TEST_AI_CAPTION_ENTID"])
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
