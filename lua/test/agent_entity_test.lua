-- Agent entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("memesio-content-creation_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AgentEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Agent(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = agent_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "agent." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local agent_ref01_ent = client:Agent(nil)
    local agent_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.agent"), "agent_ref01"))

    local agent_ref01_data_result, err = agent_ref01_ent:create(agent_ref01_data, nil)
    assert.is_nil(err)
    agent_ref01_data = helpers.to_map(type(agent_ref01_data_result) == 'table' and agent_ref01_data_result.data_get and agent_ref01_data_result:data_get() or agent_ref01_data_result)
    assert.is_not_nil(agent_ref01_data)

    -- UPDATE
    local agent_ref01_data_up0_up = {
    }

    local agent_ref01_markdef_up0_name = "description"
    local agent_ref01_markdef_up0_value = "Mark01-agent_ref01_" .. tostring(setup.now)
    agent_ref01_data_up0_up[agent_ref01_markdef_up0_name] = agent_ref01_markdef_up0_value

    local agent_ref01_resdata_up0_result, err = agent_ref01_ent:update(agent_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local agent_ref01_resdata_up0 = helpers.to_map(type(agent_ref01_resdata_up0_result) == 'table' and agent_ref01_resdata_up0_result.data_get and agent_ref01_resdata_up0_result:data_get() or agent_ref01_resdata_up0_result)
    assert.is_not_nil(agent_ref01_resdata_up0)
    assert.are.equal(agent_ref01_resdata_up0[agent_ref01_markdef_up0_name], agent_ref01_markdef_up0_value)

    -- LOAD
    local agent_ref01_match_dt0 = {}
    local agent_ref01_data_dt0_loaded, err = agent_ref01_ent:load(agent_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(agent_ref01_data_dt0_loaded)

  end)
end)

function agent_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/agent/AgentTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read agent test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "agent01", "agent02", "agent03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID"] = idmap,
    ["MEMESIO_CONTENT_CREATION_TEST_LIVE"] = "FALSE",
    ["MEMESIO_CONTENT_CREATION_TEST_EXPLAIN"] = "FALSE",
    ["MEMESIO_CONTENT_CREATION_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["MEMESIO_CONTENT_CREATION_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["MEMESIO_CONTENT_CREATION_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["MEMESIO_CONTENT_CREATION_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
