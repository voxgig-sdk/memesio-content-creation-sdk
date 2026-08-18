-- MemesioContentCreation SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("memesio-content-creation_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local MemesioContentCreationSDK = {}
MemesioContentCreationSDK.__index = MemesioContentCreationSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

MemesioContentCreationSDK._make_feature = _make_feature


function MemesioContentCreationSDK.new(options)
  local self = setmetatable({}, MemesioContentCreationSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function MemesioContentCreationSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function MemesioContentCreationSDK:get_utility()
  return Utility.copy(self._utility)
end


function MemesioContentCreationSDK:get_root_ctx()
  return self._rootctx
end


function MemesioContentCreationSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function MemesioContentCreationSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function MemesioContentCreationSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function MemesioContentCreationSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "MemesioContentCreationSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function MemesioContentCreationSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function MemesioContentCreationSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "MemesioContentCreationSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Agent():list() / client:Agent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Agent(data)
  local EntityMod = require("entity.agent_entity")
  if data == nil then
    if self._agent == nil then
      self._agent = EntityMod.new(self, nil)
    end
    return self._agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentInfra():list() / client:AgentInfra():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:AgentInfra(data)
  local EntityMod = require("entity.agent_infra_entity")
  if data == nil then
    if self._agent_infra == nil then
      self._agent_infra = EntityMod.new(self, nil)
    end
    return self._agent_infra
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiCaption():list() / client:AiCaption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:AiCaption(data)
  local EntityMod = require("entity.ai_caption_entity")
  if data == nil then
    if self._ai_caption == nil then
      self._ai_caption = EntityMod.new(self, nil)
    end
    return self._ai_caption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiJob():list() / client:AiJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:AiJob(data)
  local EntityMod = require("entity.ai_job_entity")
  if data == nil then
    if self._ai_job == nil then
      self._ai_job = EntityMod.new(self, nil)
    end
    return self._ai_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiMemeGenerationSucceeded():list() / client:AiMemeGenerationSucceeded():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:AiMemeGenerationSucceeded(data)
  local EntityMod = require("entity.ai_meme_generation_succeeded_entity")
  if data == nil then
    if self._ai_meme_generation_succeeded == nil then
      self._ai_meme_generation_succeeded = EntityMod.new(self, nil)
    end
    return self._ai_meme_generation_succeeded
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiProvider():list() / client:AiProvider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:AiProvider(data)
  local EntityMod = require("entity.ai_provider_entity")
  if data == nil then
    if self._ai_provider == nil then
      self._ai_provider = EntityMod.new(self, nil)
    end
    return self._ai_provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Analytics():list() / client:Analytics():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Analytics(data)
  local EntityMod = require("entity.analytics_entity")
  if data == nil then
    if self._analytics == nil then
      self._analytics = EntityMod.new(self, nil)
    end
    return self._analytics
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Auth():list() / client:Auth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Auth(data)
  local EntityMod = require("entity.auth_entity")
  if data == nil then
    if self._auth == nil then
      self._auth = EntityMod.new(self, nil)
    end
    return self._auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Billing():list() / client:Billing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Billing(data)
  local EntityMod = require("entity.billing_entity")
  if data == nil then
    if self._billing == nil then
      self._billing = EntityMod.new(self, nil)
    end
    return self._billing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Collaboration():list() / client:Collaboration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Collaboration(data)
  local EntityMod = require("entity.collaboration_entity")
  if data == nil then
    if self._collaboration == nil then
      self._collaboration = EntityMod.new(self, nil)
    end
    return self._collaboration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Compliance():list() / client:Compliance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Compliance(data)
  local EntityMod = require("entity.compliance_entity")
  if data == nil then
    if self._compliance == nil then
      self._compliance = EntityMod.new(self, nil)
    end
    return self._compliance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateMeme():list() / client:CreateMeme():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:CreateMeme(data)
  local EntityMod = require("entity.create_meme_entity")
  if data == nil then
    if self._create_meme == nil then
      self._create_meme = EntityMod.new(self, nil)
    end
    return self._create_meme
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeveloperApi():list() / client:DeveloperApi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:DeveloperApi(data)
  local EntityMod = require("entity.developer_api_entity")
  if data == nil then
    if self._developer_api == nil then
      self._developer_api = EntityMod.new(self, nil)
    end
    return self._developer_api
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FreeCaptionMemeSuccess():list() / client:FreeCaptionMemeSuccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:FreeCaptionMemeSuccess(data)
  local EntityMod = require("entity.free_caption_meme_success_entity")
  if data == nil then
    if self._free_caption_meme_success == nil then
      self._free_caption_meme_success = EntityMod.new(self, nil)
    end
    return self._free_caption_meme_success
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FreeTemplateSearch():list() / client:FreeTemplateSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:FreeTemplateSearch(data)
  local EntityMod = require("entity.free_template_search_entity")
  if data == nil then
    if self._free_template_search == nil then
      self._free_template_search = EntityMod.new(self, nil)
    end
    return self._free_template_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Generate():list() / client:Generate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Generate(data)
  local EntityMod = require("entity.generate_entity")
  if data == nil then
    if self._generate == nil then
      self._generate = EntityMod.new(self, nil)
    end
    return self._generate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Growth():list() / client:Growth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Growth(data)
  local EntityMod = require("entity.growth_entity")
  if data == nil then
    if self._growth == nil then
      self._growth = EntityMod.new(self, nil)
    end
    return self._growth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListMeme():list() / client:ListMeme():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:ListMeme(data)
  local EntityMod = require("entity.list_meme_entity")
  if data == nil then
    if self._list_meme == nil then
      self._list_meme = EntityMod.new(self, nil)
    end
    return self._list_meme
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Media():list() / client:Media():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Media(data)
  local EntityMod = require("entity.media_entity")
  if data == nil then
    if self._media == nil then
      self._media = EntityMod.new(self, nil)
    end
    return self._media
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Meme():list() / client:Meme():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Meme(data)
  local EntityMod = require("entity.meme_entity")
  if data == nil then
    if self._meme == nil then
      self._meme = EntityMod.new(self, nil)
    end
    return self._meme
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicTemplateMediaItem():list() / client:PublicTemplateMediaItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:PublicTemplateMediaItem(data)
  local EntityMod = require("entity.public_template_media_item_entity")
  if data == nil then
    if self._public_template_media_item == nil then
      self._public_template_media_item = EntityMod.new(self, nil)
    end
    return self._public_template_media_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StandaloneAgentBootstrap():list() / client:StandaloneAgentBootstrap():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:StandaloneAgentBootstrap(data)
  local EntityMod = require("entity.standalone_agent_bootstrap_entity")
  if data == nil then
    if self._standalone_agent_bootstrap == nil then
      self._standalone_agent_bootstrap = EntityMod.new(self, nil)
    end
    return self._standalone_agent_bootstrap
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Template():list() / client:Template():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Template(data)
  local EntityMod = require("entity.template_entity")
  if data == nil then
    if self._template == nil then
      self._template = EntityMod.new(self, nil)
    end
    return self._template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TemplateSearch():list() / client:TemplateSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:TemplateSearch(data)
  local EntityMod = require("entity.template_search_entity")
  if data == nil then
    if self._template_search == nil then
      self._template_search = EntityMod.new(self, nil)
    end
    return self._template_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TrendAlert():list() / client:TrendAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:TrendAlert(data)
  local EntityMod = require("entity.trend_alert_entity")
  if data == nil then
    if self._trend_alert == nil then
      self._trend_alert = EntityMod.new(self, nil)
    end
    return self._trend_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UploadCaptionMemeSuccess():list() / client:UploadCaptionMemeSuccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:UploadCaptionMemeSuccess(data)
  local EntityMod = require("entity.upload_caption_meme_success_entity")
  if data == nil then
    if self._upload_caption_meme_success == nil then
      self._upload_caption_meme_success = EntityMod.new(self, nil)
    end
    return self._upload_caption_meme_success
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Video():list() / client:Video():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MemesioContentCreationSDK:Video(data)
  local EntityMod = require("entity.video_entity")
  if data == nil then
    if self._video == nil then
      self._video = EntityMod.new(self, nil)
    end
    return self._video
  end
  return EntityMod.new(self, data)
end




function MemesioContentCreationSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = MemesioContentCreationSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return MemesioContentCreationSDK
