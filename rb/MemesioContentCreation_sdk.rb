# MemesioContentCreation SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'MemesioContentCreation_types'


class MemesioContentCreationSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = MemesioContentCreationUtility.new
    @_utility = utility

    config = MemesioContentCreationConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = MemesioContentCreationHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = MemesioContentCreationHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, MemesioContentCreationFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    MemesioContentCreationUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = MemesioContentCreationHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = MemesioContentCreationHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = MemesioContentCreationHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = MemesioContentCreationSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue MemesioContentCreationError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = MemesioContentCreationHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = MemesioContentCreationHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Canonical facade: client.Agent.list / client.Agent.load({ "id" => ... })
  def Agent(data = nil)
    require_relative 'entity/agent_entity'
    AgentEntity.new(self, data)
  end


  # Canonical facade: client.AgentInfra.list / client.AgentInfra.load({ "id" => ... })
  def AgentInfra(data = nil)
    require_relative 'entity/agent_infra_entity'
    AgentInfraEntity.new(self, data)
  end


  # Canonical facade: client.AiCaption.list / client.AiCaption.load({ "id" => ... })
  def AiCaption(data = nil)
    require_relative 'entity/ai_caption_entity'
    AiCaptionEntity.new(self, data)
  end


  # Canonical facade: client.AiJob.list / client.AiJob.load({ "id" => ... })
  def AiJob(data = nil)
    require_relative 'entity/ai_job_entity'
    AiJobEntity.new(self, data)
  end


  # Canonical facade: client.AiMemeGenerationSucceeded.list / client.AiMemeGenerationSucceeded.load({ "id" => ... })
  def AiMemeGenerationSucceeded(data = nil)
    require_relative 'entity/ai_meme_generation_succeeded_entity'
    AiMemeGenerationSucceededEntity.new(self, data)
  end


  # Canonical facade: client.AiProvider.list / client.AiProvider.load({ "id" => ... })
  def AiProvider(data = nil)
    require_relative 'entity/ai_provider_entity'
    AiProviderEntity.new(self, data)
  end


  # Canonical facade: client.Analytics.list / client.Analytics.load({ "id" => ... })
  def Analytics(data = nil)
    require_relative 'entity/analytics_entity'
    AnalyticsEntity.new(self, data)
  end


  # Canonical facade: client.Auth.list / client.Auth.load({ "id" => ... })
  def Auth(data = nil)
    require_relative 'entity/auth_entity'
    AuthEntity.new(self, data)
  end


  # Canonical facade: client.Billing.list / client.Billing.load({ "id" => ... })
  def Billing(data = nil)
    require_relative 'entity/billing_entity'
    BillingEntity.new(self, data)
  end


  # Canonical facade: client.Collaboration.list / client.Collaboration.load({ "id" => ... })
  def Collaboration(data = nil)
    require_relative 'entity/collaboration_entity'
    CollaborationEntity.new(self, data)
  end


  # Canonical facade: client.Compliance.list / client.Compliance.load({ "id" => ... })
  def Compliance(data = nil)
    require_relative 'entity/compliance_entity'
    ComplianceEntity.new(self, data)
  end


  # Canonical facade: client.CreateMeme.list / client.CreateMeme.load({ "id" => ... })
  def CreateMeme(data = nil)
    require_relative 'entity/create_meme_entity'
    CreateMemeEntity.new(self, data)
  end


  # Canonical facade: client.DeveloperApi.list / client.DeveloperApi.load({ "id" => ... })
  def DeveloperApi(data = nil)
    require_relative 'entity/developer_api_entity'
    DeveloperApiEntity.new(self, data)
  end


  # Canonical facade: client.FreeCaptionMemeSuccess.list / client.FreeCaptionMemeSuccess.load({ "id" => ... })
  def FreeCaptionMemeSuccess(data = nil)
    require_relative 'entity/free_caption_meme_success_entity'
    FreeCaptionMemeSuccessEntity.new(self, data)
  end


  # Canonical facade: client.FreeTemplateSearch.list / client.FreeTemplateSearch.load({ "id" => ... })
  def FreeTemplateSearch(data = nil)
    require_relative 'entity/free_template_search_entity'
    FreeTemplateSearchEntity.new(self, data)
  end


  # Canonical facade: client.Generate.list / client.Generate.load({ "id" => ... })
  def Generate(data = nil)
    require_relative 'entity/generate_entity'
    GenerateEntity.new(self, data)
  end


  # Canonical facade: client.Growth.list / client.Growth.load({ "id" => ... })
  def Growth(data = nil)
    require_relative 'entity/growth_entity'
    GrowthEntity.new(self, data)
  end


  # Canonical facade: client.ListMeme.list / client.ListMeme.load({ "id" => ... })
  def ListMeme(data = nil)
    require_relative 'entity/list_meme_entity'
    ListMemeEntity.new(self, data)
  end


  # Canonical facade: client.Media.list / client.Media.load({ "id" => ... })
  def Media(data = nil)
    require_relative 'entity/media_entity'
    MediaEntity.new(self, data)
  end


  # Canonical facade: client.Meme.list / client.Meme.load({ "id" => ... })
  def Meme(data = nil)
    require_relative 'entity/meme_entity'
    MemeEntity.new(self, data)
  end


  # Canonical facade: client.PublicTemplateMediaItem.list / client.PublicTemplateMediaItem.load({ "id" => ... })
  def PublicTemplateMediaItem(data = nil)
    require_relative 'entity/public_template_media_item_entity'
    PublicTemplateMediaItemEntity.new(self, data)
  end


  # Canonical facade: client.StandaloneAgentBootstrap.list / client.StandaloneAgentBootstrap.load({ "id" => ... })
  def StandaloneAgentBootstrap(data = nil)
    require_relative 'entity/standalone_agent_bootstrap_entity'
    StandaloneAgentBootstrapEntity.new(self, data)
  end


  # Canonical facade: client.Template.list / client.Template.load({ "id" => ... })
  def Template(data = nil)
    require_relative 'entity/template_entity'
    TemplateEntity.new(self, data)
  end


  # Canonical facade: client.TemplateSearch.list / client.TemplateSearch.load({ "id" => ... })
  def TemplateSearch(data = nil)
    require_relative 'entity/template_search_entity'
    TemplateSearchEntity.new(self, data)
  end


  # Canonical facade: client.TrendAlert.list / client.TrendAlert.load({ "id" => ... })
  def TrendAlert(data = nil)
    require_relative 'entity/trend_alert_entity'
    TrendAlertEntity.new(self, data)
  end


  # Canonical facade: client.UploadCaptionMemeSuccess.list / client.UploadCaptionMemeSuccess.load({ "id" => ... })
  def UploadCaptionMemeSuccess(data = nil)
    require_relative 'entity/upload_caption_meme_success_entity'
    UploadCaptionMemeSuccessEntity.new(self, data)
  end


  # Canonical facade: client.Video.list / client.Video.load({ "id" => ... })
  def Video(data = nil)
    require_relative 'entity/video_entity'
    VideoEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = MemesioContentCreationSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
