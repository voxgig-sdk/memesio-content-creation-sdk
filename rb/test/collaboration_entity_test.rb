# Collaboration entity test

require "minitest/autorun"
require "json"
require_relative "../MemesioContentCreation_sdk"
require_relative "runner"

class CollaborationEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    ent = testsdk.Collaboration(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = MemesioContentCreationConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = MemesioContentCreationSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Collaboration(nil).load({ "page" => "x", "project_id" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = collaboration_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "collaboration." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # CREATE
    collaboration_ref01_ent = client.Collaboration(nil)
    collaboration_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.collaboration"), "collaboration_ref01"))

    collaboration_ref01_data_result = collaboration_ref01_ent.create(collaboration_ref01_data, nil)
    collaboration_ref01_data = Helpers.to_map(collaboration_ref01_data_result.respond_to?(:data_get) ? collaboration_ref01_data_result.data_get : collaboration_ref01_data_result)
    assert !collaboration_ref01_data.nil?

    # LOAD
    collaboration_ref01_match_dt0 = {}
    collaboration_ref01_data_dt0_loaded = collaboration_ref01_ent.load(collaboration_ref01_match_dt0, nil)
    assert !collaboration_ref01_data_dt0_loaded.nil?

  end
end

def collaboration_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "collaboration", "CollaborationTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MemesioContentCreationSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["collaboration01", "collaboration02", "collaboration03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID" => idmap,
    "MEMESIO_CONTENT_CREATION_TEST_LIVE" => "FALSE",
    "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN" => "FALSE",
    "MEMESIO_CONTENT_CREATION_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID"])
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
