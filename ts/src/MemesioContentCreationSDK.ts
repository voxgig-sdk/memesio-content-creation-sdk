// MemesioContentCreation Ts SDK

import { AgentEntity } from './entity/AgentEntity'
import { AgentInfraEntity } from './entity/AgentInfraEntity'
import { AiCaptionEntity } from './entity/AiCaptionEntity'
import { AiJobEntity } from './entity/AiJobEntity'
import { AiMemeGenerationSucceededEntity } from './entity/AiMemeGenerationSucceededEntity'
import { AiProviderEntity } from './entity/AiProviderEntity'
import { AnalyticsEntity } from './entity/AnalyticsEntity'
import { AuthEntity } from './entity/AuthEntity'
import { BillingEntity } from './entity/BillingEntity'
import { CollaborationEntity } from './entity/CollaborationEntity'
import { ComplianceEntity } from './entity/ComplianceEntity'
import { CreateMemeEntity } from './entity/CreateMemeEntity'
import { DeveloperApiEntity } from './entity/DeveloperApiEntity'
import { FreeCaptionMemeSuccessEntity } from './entity/FreeCaptionMemeSuccessEntity'
import { FreeTemplateSearchEntity } from './entity/FreeTemplateSearchEntity'
import { GenerateEntity } from './entity/GenerateEntity'
import { GrowthEntity } from './entity/GrowthEntity'
import { ListMemeEntity } from './entity/ListMemeEntity'
import { MediaEntity } from './entity/MediaEntity'
import { MemeEntity } from './entity/MemeEntity'
import { PublicTemplateMediaItemEntity } from './entity/PublicTemplateMediaItemEntity'
import { StandaloneAgentBootstrapEntity } from './entity/StandaloneAgentBootstrapEntity'
import { TemplateEntity } from './entity/TemplateEntity'
import { TemplateSearchEntity } from './entity/TemplateSearchEntity'
import { TrendAlertEntity } from './entity/TrendAlertEntity'
import { UploadCaptionMemeSuccessEntity } from './entity/UploadCaptionMemeSuccessEntity'
import { VideoEntity } from './entity/VideoEntity'

export type * from './MemesioContentCreationTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { MemesioContentCreationEntityBase } from './MemesioContentCreationEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class MemesioContentCreationSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
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
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('MemesioContentCreationSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
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
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('MemesioContentCreationSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('MemesioContentCreationSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Agent(entopts?: Record<string, any>) {
    const self = this
    return new AgentEntity(self, entopts)
  }


  // Entity access: `client.AgentInfra().list()` / `client.AgentInfra().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentInfra(entopts?: Record<string, any>) {
    const self = this
    return new AgentInfraEntity(self, entopts)
  }


  // Entity access: `client.AiCaption().list()` / `client.AiCaption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiCaption(entopts?: Record<string, any>) {
    const self = this
    return new AiCaptionEntity(self, entopts)
  }


  // Entity access: `client.AiJob().list()` / `client.AiJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiJob(entopts?: Record<string, any>) {
    const self = this
    return new AiJobEntity(self, entopts)
  }


  // Entity access: `client.AiMemeGenerationSucceeded().list()` / `client.AiMemeGenerationSucceeded().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiMemeGenerationSucceeded(entopts?: Record<string, any>) {
    const self = this
    return new AiMemeGenerationSucceededEntity(self, entopts)
  }


  // Entity access: `client.AiProvider().list()` / `client.AiProvider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiProvider(entopts?: Record<string, any>) {
    const self = this
    return new AiProviderEntity(self, entopts)
  }


  // Entity access: `client.Analytics().list()` / `client.Analytics().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Analytics(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsEntity(self, entopts)
  }


  // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Auth(entopts?: Record<string, any>) {
    const self = this
    return new AuthEntity(self, entopts)
  }


  // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Billing(entopts?: Record<string, any>) {
    const self = this
    return new BillingEntity(self, entopts)
  }


  // Entity access: `client.Collaboration().list()` / `client.Collaboration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collaboration(entopts?: Record<string, any>) {
    const self = this
    return new CollaborationEntity(self, entopts)
  }


  // Entity access: `client.Compliance().list()` / `client.Compliance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Compliance(entopts?: Record<string, any>) {
    const self = this
    return new ComplianceEntity(self, entopts)
  }


  // Entity access: `client.CreateMeme().list()` / `client.CreateMeme().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateMeme(entopts?: Record<string, any>) {
    const self = this
    return new CreateMemeEntity(self, entopts)
  }


  // Entity access: `client.DeveloperApi().list()` / `client.DeveloperApi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeveloperApi(entopts?: Record<string, any>) {
    const self = this
    return new DeveloperApiEntity(self, entopts)
  }


  // Entity access: `client.FreeCaptionMemeSuccess().list()` / `client.FreeCaptionMemeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FreeCaptionMemeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new FreeCaptionMemeSuccessEntity(self, entopts)
  }


  // Entity access: `client.FreeTemplateSearch().list()` / `client.FreeTemplateSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FreeTemplateSearch(entopts?: Record<string, any>) {
    const self = this
    return new FreeTemplateSearchEntity(self, entopts)
  }


  // Entity access: `client.Generate().list()` / `client.Generate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Generate(entopts?: Record<string, any>) {
    const self = this
    return new GenerateEntity(self, entopts)
  }


  // Entity access: `client.Growth().list()` / `client.Growth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Growth(entopts?: Record<string, any>) {
    const self = this
    return new GrowthEntity(self, entopts)
  }


  // Entity access: `client.ListMeme().list()` / `client.ListMeme().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListMeme(entopts?: Record<string, any>) {
    const self = this
    return new ListMemeEntity(self, entopts)
  }


  // Entity access: `client.Media().list()` / `client.Media().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Media(entopts?: Record<string, any>) {
    const self = this
    return new MediaEntity(self, entopts)
  }


  // Entity access: `client.Meme().list()` / `client.Meme().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meme(entopts?: Record<string, any>) {
    const self = this
    return new MemeEntity(self, entopts)
  }


  // Entity access: `client.PublicTemplateMediaItem().list()` / `client.PublicTemplateMediaItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicTemplateMediaItem(entopts?: Record<string, any>) {
    const self = this
    return new PublicTemplateMediaItemEntity(self, entopts)
  }


  // Entity access: `client.StandaloneAgentBootstrap().list()` / `client.StandaloneAgentBootstrap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StandaloneAgentBootstrap(entopts?: Record<string, any>) {
    const self = this
    return new StandaloneAgentBootstrapEntity(self, entopts)
  }


  // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Template(entopts?: Record<string, any>) {
    const self = this
    return new TemplateEntity(self, entopts)
  }


  // Entity access: `client.TemplateSearch().list()` / `client.TemplateSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TemplateSearch(entopts?: Record<string, any>) {
    const self = this
    return new TemplateSearchEntity(self, entopts)
  }


  // Entity access: `client.TrendAlert().list()` / `client.TrendAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrendAlert(entopts?: Record<string, any>) {
    const self = this
    return new TrendAlertEntity(self, entopts)
  }


  // Entity access: `client.UploadCaptionMemeSuccess().list()` / `client.UploadCaptionMemeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UploadCaptionMemeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UploadCaptionMemeSuccessEntity(self, entopts)
  }


  // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Video(entopts?: Record<string, any>) {
    const self = this
    return new VideoEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new MemesioContentCreationSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return MemesioContentCreationSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'MemesioContentCreation' }
  }

  toString() {
    return 'MemesioContentCreation ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = MemesioContentCreationSDK


export {
  stdutil,
  config,

  BaseFeature,
  MemesioContentCreationEntityBase,

  MemesioContentCreationSDK,
  SDK,
}


