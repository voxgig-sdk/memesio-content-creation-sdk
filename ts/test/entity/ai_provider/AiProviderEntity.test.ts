

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


describe('AiProviderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.AiProvider()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_provider.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"actorId","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"correlationId","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"limit","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"name":"mappingMode","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"maxSlots","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"prompt","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"sourceImageUrl","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"texts","req":false,"type":"`$ARRAY`","index$":7},{"active":true,"name":"trendSignals","req":false,"type":"`$ARRAY`","index$":8},{"active":true,"name":"workspaceId","req":false,"type":"`$STRING`","index$":9}],"name":"ai_provider","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/ai/templates/detect","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"actorId\":{\"type\":\"string\"},\"correlationId\":{\"type\":\"string\"},\"mappingMode\":{\"enum\":[\"single_or_split\"],\"type\":\"string\"},\"maxSlots\":{\"maximum\":2,\"minimum\":1,\"type\":\"integer\"},\"sourceImageUrl\":{\"type\":\"string\"},\"texts\":{\"items\":{\"type\":\"string\"},\"maxItems\":2,\"type\":\"array\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"sourceImageUrl\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Template detection payload\"},\"400\":{\"description\":\"Validation error\"},\"500\":{\"description\":\"Detection failure\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/templates/detect","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"templates"},{"lit":"detect"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/ai/templates/suggest","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"limit\":{\"maximum\":60,\"minimum\":1,\"type\":\"number\"},\"prompt\":{\"minLength\":1,\"type\":\"string\"},\"trendSignals\":{\"items\":{\"type\":\"string\"},\"maxItems\":20,\"type\":\"array\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Template suggestion ranking payload\"},\"400\":{\"description\":\"Validation error\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/templates/suggest","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"templates"},{"lit":"suggest"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"refresh","orig":"refresh","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /api/ai/providers/background-remove-benchmark","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"refresh\",\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Background-remove provider benchmark report\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/providers/background-remove-benchmark","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"providers"},{"lit":"background-remove-benchmark"}],"select":{"exist":["refresh"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"refresh","orig":"refresh","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /api/ai/providers/face-swap-benchmark","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"refresh\",\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Face-swap provider benchmark report\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/providers/face-swap-benchmark","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"providers"},{"lit":"face-swap-benchmark"}],"select":{"exist":["refresh"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"GET /api/ai/memes/generate","json":"{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Current actor AI quota snapshot\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/memes/generate","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"memes"},{"lit":"generate"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ai_provider","name__orig":"ai_provider","Name":"AiProvider","name_":"ai_provider","name-":"ai-provider","NAME":"AI_PROVIDER","index$":5}, {"active":true,"entity":"ai_provider","key$":"BasicAiProviderFlow","kind":"basic","name":"BasicAiProviderFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ai_provider_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"ai_provider_ref01","srcdatavar":"ai_provider_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_provider_ref01"}}],"index$":1}]}, 'AiProvider')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_provider_ref01_ent = client.AiProvider()
    let ai_provider_ref01_data = setup.data.new.ai_provider['ai_provider_ref01']

    ai_provider_ref01_data = (await ai_provider_ref01_ent.create(ai_provider_ref01_data)).data()
    assert(null != ai_provider_ref01_data)


    // LOAD
    const ai_provider_ref01_match_dt0: any = {}
    const ai_provider_ref01_data_dt0 = (await ai_provider_ref01_ent.load(ai_provider_ref01_match_dt0)).data()
    assert(null != ai_provider_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_provider/AiProviderTestData.json')

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
    ['ai_provider01','ai_provider02','ai_provider03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID']
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
  
