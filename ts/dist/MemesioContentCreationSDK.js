"use strict";
// MemesioContentCreation Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.MemesioContentCreationSDK = exports.MemesioContentCreationEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AgentEntity_1 = require("./entity/AgentEntity");
const AgentInfraEntity_1 = require("./entity/AgentInfraEntity");
const AiCaptionEntity_1 = require("./entity/AiCaptionEntity");
const AiJobEntity_1 = require("./entity/AiJobEntity");
const AiMemeGenerationSucceededEntity_1 = require("./entity/AiMemeGenerationSucceededEntity");
const AiProviderEntity_1 = require("./entity/AiProviderEntity");
const AnalyticsEntity_1 = require("./entity/AnalyticsEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const BillingEntity_1 = require("./entity/BillingEntity");
const CollaborationEntity_1 = require("./entity/CollaborationEntity");
const ComplianceEntity_1 = require("./entity/ComplianceEntity");
const CreateMemeEntity_1 = require("./entity/CreateMemeEntity");
const DeveloperApiEntity_1 = require("./entity/DeveloperApiEntity");
const FreeCaptionMemeSuccessEntity_1 = require("./entity/FreeCaptionMemeSuccessEntity");
const FreeTemplateSearchEntity_1 = require("./entity/FreeTemplateSearchEntity");
const GenerateEntity_1 = require("./entity/GenerateEntity");
const GrowthEntity_1 = require("./entity/GrowthEntity");
const ListMemeEntity_1 = require("./entity/ListMemeEntity");
const MediaEntity_1 = require("./entity/MediaEntity");
const MemeEntity_1 = require("./entity/MemeEntity");
const PublicTemplateMediaItemEntity_1 = require("./entity/PublicTemplateMediaItemEntity");
const StandaloneAgentBootstrapEntity_1 = require("./entity/StandaloneAgentBootstrapEntity");
const TemplateEntity_1 = require("./entity/TemplateEntity");
const TemplateSearchEntity_1 = require("./entity/TemplateSearchEntity");
const TrendAlertEntity_1 = require("./entity/TrendAlertEntity");
const UploadCaptionMemeSuccessEntity_1 = require("./entity/UploadCaptionMemeSuccessEntity");
const VideoEntity_1 = require("./entity/VideoEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const MemesioContentCreationEntityBase_1 = require("./MemesioContentCreationEntityBase");
Object.defineProperty(exports, "MemesioContentCreationEntityBase", { enumerable: true, get: function () { return MemesioContentCreationEntityBase_1.MemesioContentCreationEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class MemesioContentCreationSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('MemesioContentCreationSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('MemesioContentCreationSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('MemesioContentCreationSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Agent(entopts) {
        const self = this;
        return new AgentEntity_1.AgentEntity(self, entopts);
    }
    // Entity access: `client.AgentInfra().list()` / `client.AgentInfra().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentInfra(entopts) {
        const self = this;
        return new AgentInfraEntity_1.AgentInfraEntity(self, entopts);
    }
    // Entity access: `client.AiCaption().list()` / `client.AiCaption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiCaption(entopts) {
        const self = this;
        return new AiCaptionEntity_1.AiCaptionEntity(self, entopts);
    }
    // Entity access: `client.AiJob().list()` / `client.AiJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiJob(entopts) {
        const self = this;
        return new AiJobEntity_1.AiJobEntity(self, entopts);
    }
    // Entity access: `client.AiMemeGenerationSucceeded().list()` / `client.AiMemeGenerationSucceeded().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiMemeGenerationSucceeded(entopts) {
        const self = this;
        return new AiMemeGenerationSucceededEntity_1.AiMemeGenerationSucceededEntity(self, entopts);
    }
    // Entity access: `client.AiProvider().list()` / `client.AiProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProvider(entopts) {
        const self = this;
        return new AiProviderEntity_1.AiProviderEntity(self, entopts);
    }
    // Entity access: `client.Analytics().list()` / `client.Analytics().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Analytics(entopts) {
        const self = this;
        return new AnalyticsEntity_1.AnalyticsEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Billing(entopts) {
        const self = this;
        return new BillingEntity_1.BillingEntity(self, entopts);
    }
    // Entity access: `client.Collaboration().list()` / `client.Collaboration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Collaboration(entopts) {
        const self = this;
        return new CollaborationEntity_1.CollaborationEntity(self, entopts);
    }
    // Entity access: `client.Compliance().list()` / `client.Compliance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Compliance(entopts) {
        const self = this;
        return new ComplianceEntity_1.ComplianceEntity(self, entopts);
    }
    // Entity access: `client.CreateMeme().list()` / `client.CreateMeme().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateMeme(entopts) {
        const self = this;
        return new CreateMemeEntity_1.CreateMemeEntity(self, entopts);
    }
    // Entity access: `client.DeveloperApi().list()` / `client.DeveloperApi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeveloperApi(entopts) {
        const self = this;
        return new DeveloperApiEntity_1.DeveloperApiEntity(self, entopts);
    }
    // Entity access: `client.FreeCaptionMemeSuccess().list()` / `client.FreeCaptionMemeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FreeCaptionMemeSuccess(entopts) {
        const self = this;
        return new FreeCaptionMemeSuccessEntity_1.FreeCaptionMemeSuccessEntity(self, entopts);
    }
    // Entity access: `client.FreeTemplateSearch().list()` / `client.FreeTemplateSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FreeTemplateSearch(entopts) {
        const self = this;
        return new FreeTemplateSearchEntity_1.FreeTemplateSearchEntity(self, entopts);
    }
    // Entity access: `client.Generate().list()` / `client.Generate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Generate(entopts) {
        const self = this;
        return new GenerateEntity_1.GenerateEntity(self, entopts);
    }
    // Entity access: `client.Growth().list()` / `client.Growth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Growth(entopts) {
        const self = this;
        return new GrowthEntity_1.GrowthEntity(self, entopts);
    }
    // Entity access: `client.ListMeme().list()` / `client.ListMeme().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListMeme(entopts) {
        const self = this;
        return new ListMemeEntity_1.ListMemeEntity(self, entopts);
    }
    // Entity access: `client.Media().list()` / `client.Media().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Media(entopts) {
        const self = this;
        return new MediaEntity_1.MediaEntity(self, entopts);
    }
    // Entity access: `client.Meme().list()` / `client.Meme().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Meme(entopts) {
        const self = this;
        return new MemeEntity_1.MemeEntity(self, entopts);
    }
    // Entity access: `client.PublicTemplateMediaItem().list()` / `client.PublicTemplateMediaItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicTemplateMediaItem(entopts) {
        const self = this;
        return new PublicTemplateMediaItemEntity_1.PublicTemplateMediaItemEntity(self, entopts);
    }
    // Entity access: `client.StandaloneAgentBootstrap().list()` / `client.StandaloneAgentBootstrap().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StandaloneAgentBootstrap(entopts) {
        const self = this;
        return new StandaloneAgentBootstrapEntity_1.StandaloneAgentBootstrapEntity(self, entopts);
    }
    // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Template(entopts) {
        const self = this;
        return new TemplateEntity_1.TemplateEntity(self, entopts);
    }
    // Entity access: `client.TemplateSearch().list()` / `client.TemplateSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TemplateSearch(entopts) {
        const self = this;
        return new TemplateSearchEntity_1.TemplateSearchEntity(self, entopts);
    }
    // Entity access: `client.TrendAlert().list()` / `client.TrendAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TrendAlert(entopts) {
        const self = this;
        return new TrendAlertEntity_1.TrendAlertEntity(self, entopts);
    }
    // Entity access: `client.UploadCaptionMemeSuccess().list()` / `client.UploadCaptionMemeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UploadCaptionMemeSuccess(entopts) {
        const self = this;
        return new UploadCaptionMemeSuccessEntity_1.UploadCaptionMemeSuccessEntity(self, entopts);
    }
    // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Video(entopts) {
        const self = this;
        return new VideoEntity_1.VideoEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new MemesioContentCreationSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return MemesioContentCreationSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'MemesioContentCreation' };
    }
    toString() {
        return 'MemesioContentCreation ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.MemesioContentCreationSDK = MemesioContentCreationSDK;
const SDK = MemesioContentCreationSDK;
exports.SDK = SDK;
//# sourceMappingURL=MemesioContentCreationSDK.js.map