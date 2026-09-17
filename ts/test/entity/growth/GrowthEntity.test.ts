

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MemesioContentCreationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GrowthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Growth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'growth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"action","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"actorId","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"limit","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"logExposure","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"surface","req":false,"type":"`$STRING`","index$":4}],"name":"growth","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/growth/experiments/decision","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"decide\",\"history\"],\"type\":\"string\"},\"actorId\":{\"type\":\"string\"},\"limit\":{\"maximum\":2000,\"minimum\":1,\"type\":\"integer\"},\"logExposure\":{\"type\":\"boolean\"},\"surface\":{\"type\":\"string\"}},\"required\":[\"action\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Exposure history payload\"},\"201\":{\"description\":\"Decision payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/growth/experiments/decision","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"experiments"},{"lit":"decision"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/growth/lifecycle-messaging","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"preview\",\"run\",\"history\"],\"type\":\"string\"},\"limit\":{\"maximum\":200,\"minimum\":1,\"type\":\"integer\"},\"now\":{\"format\":\"date-time\",\"type\":\"string\"},\"profiles\":{\"items\":{\"properties\":{\"actorId\":{\"type\":\"string\"},\"aiJobs7d\":{\"minimum\":0,\"type\":\"integer\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"lastActiveAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"monthlyCreditsLimit\":{\"minimum\":0,\"type\":\"number\"},\"monthlyCreditsUsed\":{\"minimum\":0,\"type\":\"number\"},\"planTier\":{\"enum\":[\"free\",\"pro\",\"team\"],\"type\":\"string\"},\"publishes7d\":{\"minimum\":0,\"type\":\"integer\"}},\"required\":[\"actorId\",\"planTier\",\"createdAt\",\"lastActiveAt\",\"publishes7d\",\"aiJobs7d\",\"monthlyCreditsUsed\",\"monthlyCreditsLimit\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"action\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Preview/history payload\"},\"201\":{\"description\":\"Run payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/growth/lifecycle-messaging","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"lifecycle-messaging"}],"select":{"$action":"lifecycle_messaging"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"POST /api/growth/referrals","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"create\",\"redeem\"],\"type\":\"string\"},\"actorId\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"}},\"required\":[\"action\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Redeemed referral code\"},\"201\":{\"description\":\"Created referral code\"},\"400\":{\"description\":\"Invalid request\"},\"404\":{\"description\":\"Referral code not found\"},\"409\":{\"description\":\"Fraud/eligibility check failed\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/growth/referrals","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"referrals"}],"select":{"$action":"referral"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{},"contract":{"id":"POST /api/growth/social-publish","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountId\":{\"type\":\"string\"},\"action\":{\"enum\":[\"connect\",\"disconnect\",\"publish\"],\"type\":\"string\"},\"actorId\":{\"type\":\"string\"},\"caption\":{\"type\":\"string\"},\"externalAccountId\":{\"type\":\"string\"},\"handle\":{\"type\":\"string\"},\"memeSlug\":{\"type\":\"string\"},\"platform\":{\"enum\":[\"tiktok\",\"instagram_reels\",\"youtube_shorts\",\"x\"],\"type\":\"string\"}},\"required\":[\"action\",\"actorId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Disconnect response\"},\"201\":{\"description\":\"Connect/publish response\"},\"400\":{\"description\":\"Validation error\"},\"403\":{\"description\":\"Phase gate denied\"},\"404\":{\"description\":\"Account not found for disconnect\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/growth/social-publish","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"social-publish"}],"select":{"$action":"social_publish"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"POST /api/growth/trend-campaigns","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"publish\"],\"type\":\"string\"},\"limit\":{\"maximum\":12,\"minimum\":1,\"type\":\"integer\"},\"weekStart\":{\"pattern\":\"^\\\\\\\\d{4}-\\\\\\\\d{2}-\\\\\\\\d{2}$\",\"type\":\"string\"}},\"required\":[\"action\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Published weekly campaign pack\"},\"400\":{\"description\":\"Invalid request\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/growth/trend-campaigns","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"trend-campaigns"}],"select":{"$action":"trend_campaign"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"actor_id","orig":"actor_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"log_exposure","orig":"log_exposure","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"surface","orig":"surface","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/growth/experiments/decision","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"actorId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"surface\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"logExposure\",\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Experiment decisions payload\"},\"400\":{\"description\":\"Missing actor id\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/experiments/decision","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"experiments"},{"lit":"decision"}],"select":{"exist":["actor_id","log_exposure","surface"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"query","name":"published_only","orig":"published_only","reqd":false,"type":"`$BOOLEAN`"},{"active":true,"kind":"query","name":"week_start","orig":"week_start","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /api/growth/trend-campaigns","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"weekStart\",\"schema\":{\"pattern\":\"^\\\\\\\\d{4}-\\\\\\\\d{2}-\\\\\\\\d{2}$\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"maximum\":12,\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"publishedOnly\",\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Weekly campaign pack payload\"},\"404\":{\"description\":\"No published campaign pack found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/trend-campaigns","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"trend-campaigns"}],"select":{"$action":"trend_campaign","exist":["limit","published_only","week_start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"actor_id","orig":"actor_id","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"query","name":"publish_limit","orig":"publish_limit","reqd":false,"type":"`$INTEGER`"}]},"contract":{"id":"GET /api/growth/social-publish","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"actorId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"publishLimit\",\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Social publish state payload\"},\"400\":{\"description\":\"Missing actor id\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/social-publish","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"social-publish"}],"select":{"$action":"social_publish","exist":["actor_id","publish_limit"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"actor_id","orig":"actor_id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /api/growth/referrals","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"actorId\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Referral credit balance\"},\"400\":{\"description\":\"Missing actor identity\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/referrals","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"referrals"}],"select":{"$action":"referral","exist":["actor_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"GET /api/growth/lifecycle-messaging","json":"{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Lifecycle messaging config payload\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/lifecycle-messaging","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"lifecycle-messaging"}],"select":{"$action":"lifecycle_messaging"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4},{"active":true,"args":{},"contract":{"id":"GET /api/growth/viral-triggers","json":"{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Viral loop trigger payload\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/growth/viral-triggers","segments":[{"lit":"api"},{"lit":"growth"},{"lit":"viral-triggers"}],"select":{"$action":"viral_trigger"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"growth","name__orig":"growth","Name":"Growth","name_":"growth","name-":"growth","NAME":"GROWTH","index$":16}, {"active":true,"entity":"growth","key$":"BasicGrowthFlow","kind":"basic","name":"BasicGrowthFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"growth_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"growth_ref01","srcdatavar":"growth_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-growth_ref01"}}],"index$":1}]}, 'Growth')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const growth_ref01_ent = client.Growth()
    let growth_ref01_data = setup.data.new.growth['growth_ref01']

    growth_ref01_data = (await growth_ref01_ent.create(growth_ref01_data)).data()
    assert(null != growth_ref01_data)


    // LOAD
    const growth_ref01_match_dt0: any = {}
    const growth_ref01_data_dt0 = (await growth_ref01_ent.load(growth_ref01_match_dt0)).data()
    assert(null != growth_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/growth/GrowthTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MemesioContentCreationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['growth01','growth02','growth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MemesioContentCreationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MEMESIO_CONTENT_CREATION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
