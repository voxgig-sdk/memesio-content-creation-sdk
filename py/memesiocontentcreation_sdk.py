# MemesioContentCreation SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import MemesioContentCreationUtility
from core.spec import MemesioContentCreationSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import MemesioContentCreationBaseFeature
from features import _make_feature


class MemesioContentCreationSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = MemesioContentCreationUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return MemesioContentCreationUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = MemesioContentCreationSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    def Agent(self, data=None) -> "AgentEntity":
        """Entity factory: client.Agent().list() / client.Agent().load({"id": ...})."""
        from entity.agent_entity import AgentEntity
        return AgentEntity(self, data)


    def AgentInfra(self, data=None) -> "AgentInfraEntity":
        """Entity factory: client.AgentInfra().list() / client.AgentInfra().load({"id": ...})."""
        from entity.agent_infra_entity import AgentInfraEntity
        return AgentInfraEntity(self, data)


    def AiCaption(self, data=None) -> "AiCaptionEntity":
        """Entity factory: client.AiCaption().list() / client.AiCaption().load({"id": ...})."""
        from entity.ai_caption_entity import AiCaptionEntity
        return AiCaptionEntity(self, data)


    def AiJob(self, data=None) -> "AiJobEntity":
        """Entity factory: client.AiJob().list() / client.AiJob().load({"id": ...})."""
        from entity.ai_job_entity import AiJobEntity
        return AiJobEntity(self, data)


    def AiMemeGenerationSucceeded(self, data=None) -> "AiMemeGenerationSucceededEntity":
        """Entity factory: client.AiMemeGenerationSucceeded().list() / client.AiMemeGenerationSucceeded().load({"id": ...})."""
        from entity.ai_meme_generation_succeeded_entity import AiMemeGenerationSucceededEntity
        return AiMemeGenerationSucceededEntity(self, data)


    def AiProvider(self, data=None) -> "AiProviderEntity":
        """Entity factory: client.AiProvider().list() / client.AiProvider().load({"id": ...})."""
        from entity.ai_provider_entity import AiProviderEntity
        return AiProviderEntity(self, data)


    def Analytics(self, data=None) -> "AnalyticsEntity":
        """Entity factory: client.Analytics().list() / client.Analytics().load({"id": ...})."""
        from entity.analytics_entity import AnalyticsEntity
        return AnalyticsEntity(self, data)


    def Auth(self, data=None) -> "AuthEntity":
        """Entity factory: client.Auth().list() / client.Auth().load({"id": ...})."""
        from entity.auth_entity import AuthEntity
        return AuthEntity(self, data)


    def Billing(self, data=None) -> "BillingEntity":
        """Entity factory: client.Billing().list() / client.Billing().load({"id": ...})."""
        from entity.billing_entity import BillingEntity
        return BillingEntity(self, data)


    def Collaboration(self, data=None) -> "CollaborationEntity":
        """Entity factory: client.Collaboration().list() / client.Collaboration().load({"id": ...})."""
        from entity.collaboration_entity import CollaborationEntity
        return CollaborationEntity(self, data)


    def Compliance(self, data=None) -> "ComplianceEntity":
        """Entity factory: client.Compliance().list() / client.Compliance().load({"id": ...})."""
        from entity.compliance_entity import ComplianceEntity
        return ComplianceEntity(self, data)


    def CreateMeme(self, data=None) -> "CreateMemeEntity":
        """Entity factory: client.CreateMeme().list() / client.CreateMeme().load({"id": ...})."""
        from entity.create_meme_entity import CreateMemeEntity
        return CreateMemeEntity(self, data)


    def DeveloperApi(self, data=None) -> "DeveloperApiEntity":
        """Entity factory: client.DeveloperApi().list() / client.DeveloperApi().load({"id": ...})."""
        from entity.developer_api_entity import DeveloperApiEntity
        return DeveloperApiEntity(self, data)


    def FreeCaptionMemeSuccess(self, data=None) -> "FreeCaptionMemeSuccessEntity":
        """Entity factory: client.FreeCaptionMemeSuccess().list() / client.FreeCaptionMemeSuccess().load({"id": ...})."""
        from entity.free_caption_meme_success_entity import FreeCaptionMemeSuccessEntity
        return FreeCaptionMemeSuccessEntity(self, data)


    def FreeTemplateSearch(self, data=None) -> "FreeTemplateSearchEntity":
        """Entity factory: client.FreeTemplateSearch().list() / client.FreeTemplateSearch().load({"id": ...})."""
        from entity.free_template_search_entity import FreeTemplateSearchEntity
        return FreeTemplateSearchEntity(self, data)


    def Generate(self, data=None) -> "GenerateEntity":
        """Entity factory: client.Generate().list() / client.Generate().load({"id": ...})."""
        from entity.generate_entity import GenerateEntity
        return GenerateEntity(self, data)


    def Growth(self, data=None) -> "GrowthEntity":
        """Entity factory: client.Growth().list() / client.Growth().load({"id": ...})."""
        from entity.growth_entity import GrowthEntity
        return GrowthEntity(self, data)


    def ListMeme(self, data=None) -> "ListMemeEntity":
        """Entity factory: client.ListMeme().list() / client.ListMeme().load({"id": ...})."""
        from entity.list_meme_entity import ListMemeEntity
        return ListMemeEntity(self, data)


    def Media(self, data=None) -> "MediaEntity":
        """Entity factory: client.Media().list() / client.Media().load({"id": ...})."""
        from entity.media_entity import MediaEntity
        return MediaEntity(self, data)


    def Meme(self, data=None) -> "MemeEntity":
        """Entity factory: client.Meme().list() / client.Meme().load({"id": ...})."""
        from entity.meme_entity import MemeEntity
        return MemeEntity(self, data)


    def PublicTemplateMediaItem(self, data=None) -> "PublicTemplateMediaItemEntity":
        """Entity factory: client.PublicTemplateMediaItem().list() / client.PublicTemplateMediaItem().load({"id": ...})."""
        from entity.public_template_media_item_entity import PublicTemplateMediaItemEntity
        return PublicTemplateMediaItemEntity(self, data)


    def StandaloneAgentBootstrap(self, data=None) -> "StandaloneAgentBootstrapEntity":
        """Entity factory: client.StandaloneAgentBootstrap().list() / client.StandaloneAgentBootstrap().load({"id": ...})."""
        from entity.standalone_agent_bootstrap_entity import StandaloneAgentBootstrapEntity
        return StandaloneAgentBootstrapEntity(self, data)


    def Template(self, data=None) -> "TemplateEntity":
        """Entity factory: client.Template().list() / client.Template().load({"id": ...})."""
        from entity.template_entity import TemplateEntity
        return TemplateEntity(self, data)


    def TemplateSearch(self, data=None) -> "TemplateSearchEntity":
        """Entity factory: client.TemplateSearch().list() / client.TemplateSearch().load({"id": ...})."""
        from entity.template_search_entity import TemplateSearchEntity
        return TemplateSearchEntity(self, data)


    def TrendAlert(self, data=None) -> "TrendAlertEntity":
        """Entity factory: client.TrendAlert().list() / client.TrendAlert().load({"id": ...})."""
        from entity.trend_alert_entity import TrendAlertEntity
        return TrendAlertEntity(self, data)


    def UploadCaptionMemeSuccess(self, data=None) -> "UploadCaptionMemeSuccessEntity":
        """Entity factory: client.UploadCaptionMemeSuccess().list() / client.UploadCaptionMemeSuccess().load({"id": ...})."""
        from entity.upload_caption_meme_success_entity import UploadCaptionMemeSuccessEntity
        return UploadCaptionMemeSuccessEntity(self, data)


    def Video(self, data=None) -> "VideoEntity":
        """Entity factory: client.Video().list() / client.Video().load({"id": ...})."""
        from entity.video_entity import VideoEntity
        return VideoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "MemesioContentCreationSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from entity.agent_entity import AgentEntity
    from entity.agent_infra_entity import AgentInfraEntity
    from entity.ai_caption_entity import AiCaptionEntity
    from entity.ai_job_entity import AiJobEntity
    from entity.ai_meme_generation_succeeded_entity import AiMemeGenerationSucceededEntity
    from entity.ai_provider_entity import AiProviderEntity
    from entity.analytics_entity import AnalyticsEntity
    from entity.auth_entity import AuthEntity
    from entity.billing_entity import BillingEntity
    from entity.collaboration_entity import CollaborationEntity
    from entity.compliance_entity import ComplianceEntity
    from entity.create_meme_entity import CreateMemeEntity
    from entity.developer_api_entity import DeveloperApiEntity
    from entity.free_caption_meme_success_entity import FreeCaptionMemeSuccessEntity
    from entity.free_template_search_entity import FreeTemplateSearchEntity
    from entity.generate_entity import GenerateEntity
    from entity.growth_entity import GrowthEntity
    from entity.list_meme_entity import ListMemeEntity
    from entity.media_entity import MediaEntity
    from entity.meme_entity import MemeEntity
    from entity.public_template_media_item_entity import PublicTemplateMediaItemEntity
    from entity.standalone_agent_bootstrap_entity import StandaloneAgentBootstrapEntity
    from entity.template_entity import TemplateEntity
    from entity.template_search_entity import TemplateSearchEntity
    from entity.trend_alert_entity import TrendAlertEntity
    from entity.upload_caption_meme_success_entity import UploadCaptionMemeSuccessEntity
    from entity.video_entity import VideoEntity
