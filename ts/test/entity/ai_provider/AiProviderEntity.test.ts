

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actorId":{"a":true,"h":"Actor Id","n":"actorId","r":false,"t":"`$STRING`","key$":"actorId","index$":0},"correlationId":{"a":true,"h":"Correlation Id","n":"correlationId","r":false,"t":"`$STRING`","key$":"correlationId","index$":1},"limit":{"a":true,"h":"Limit","n":"limit","r":false,"t":"`$NUMBER`","key$":"limit","index$":2},"mappingMode":{"a":true,"h":"Mapping Mode","n":"mappingMode","r":false,"t":"`$STRING`","key$":"mappingMode","index$":3},"maxSlots":{"a":true,"h":"Max Slots","n":"maxSlots","r":false,"t":"`$INTEGER`","key$":"maxSlots","index$":4},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":true,"t":"`$STRING`","key$":"prompt","index$":5},"sourceImageUrl":{"a":true,"h":"Source Image Url","n":"sourceImageUrl","r":true,"t":"`$STRING`","key$":"sourceImageUrl","index$":6},"texts":{"a":true,"h":"Texts","n":"texts","r":false,"t":"`$ARRAY`","key$":"texts","index$":7},"trendSignals":{"a":true,"h":"Trend Signals","n":"trendSignals","r":false,"t":"`$ARRAY`","key$":"trendSignals","index$":8},"workspaceId":{"a":true,"h":"Workspace Id","n":"workspaceId","r":false,"t":"`$STRING`","key$":"workspaceId","index$":9}},"name":"ai_provider","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/ai/templates/detect","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/templates/detect","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"templates"},{"lit":"detect"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/ai/templates/suggest","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/templates/suggest","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"templates"},{"lit":"suggest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/ai/providers/background-remove-benchmark","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"refresh","or":"refresh","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/api/ai/providers/background-remove-benchmark","q":{"exist":["refresh"]},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"providers"},{"lit":"background-remove-benchmark"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/ai/providers/face-swap-benchmark","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"refresh","or":"refresh","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/api/ai/providers/face-swap-benchmark","q":{"exist":["refresh"]},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"providers"},{"lit":"face-swap-benchmark"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/ai/memes/generate","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/ai/memes/generate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"memes"},{"lit":"generate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ai_provider","name__orig":"ai_provider","Name":"AiProvider","name_":"ai_provider","name-":"ai-provider","NAME":"AI_PROVIDER","index$":5}, {"active":true,"entity":"ai_provider","key$":"BasicAiProviderFlow","kind":"basic","name":"BasicAiProviderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_provider_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ai_provider_ref01","srcdatavar":"ai_provider_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_provider_ref01"}}],"index$":1}]}, 'AiProvider', {"POST /api/ai/templates/detect":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["sourceImageUrl"],"properties":{"sourceImageUrl":{"type":"string","key$":"sourceImageUrl"},"texts":{"type":"array","items":{"type":"string"},"maxItems":2,"key$":"texts"},"maxSlots":{"type":"integer","minimum":1,"maximum":2,"key$":"maxSlots"},"mappingMode":{"type":"string","enum":["single_or_split"],"key$":"mappingMode"},"actorId":{"type":"string","key$":"actorId"},"workspaceId":{"type":"string","key$":"workspaceId"},"correlationId":{"type":"string","key$":"correlationId"}},"index$":1}}}},"responses":{"200":{"description":"Template detection payload"},"400":{"description":"Validation error"},"500":{"description":"Detection failure"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/templates/suggest":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["prompt"],"properties":{"prompt":{"type":"string","minLength":1,"key$":"prompt"},"trendSignals":{"type":"array","items":{"type":"string"},"maxItems":20,"key$":"trendSignals"},"limit":{"type":"number","minimum":1,"maximum":60,"key$":"limit"}},"index$":1}}}},"responses":{"200":{"description":"Template suggestion ranking payload"},"400":{"description":"Validation error"}},"parameters":[],"security":[{"DeveloperApiKeyAuth":[]},{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/ai/providers/background-remove-benchmark":{"protocol":"http","responses":{"200":{"description":"Background-remove provider benchmark report"}},"parameters":[{"name":"refresh","in":"query","schema":{"type":"boolean"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/ai/providers/face-swap-benchmark":{"protocol":"http","responses":{"200":{"description":"Face-swap provider benchmark report"}},"parameters":[{"name":"refresh","in":"query","schema":{"type":"boolean"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/ai/memes/generate":{"protocol":"http","responses":{"200":{"description":"Current actor AI quota snapshot"}},"parameters":[],"security":[{"DeveloperApiKeyAuth":[]},{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
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
  
