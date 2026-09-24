

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


describe('AiCaptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.AiCaption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_caption.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blockedTerms":{"a":true,"h":"Blocked Terms","n":"blockedTerms","r":false,"t":"`$ARRAY`","key$":"blockedTerms","index$":0},"canvasText":{"a":true,"h":"Canvas Text","n":"canvasText","r":true,"t":"`$ARRAY`","key$":"canvasText","index$":1},"captionCount":{"a":true,"h":"Caption Count","n":"captionCount","r":false,"t":"`$INTEGER`","key$":"captionCount","index$":2},"captionSets":{"a":true,"h":"Caption Sets","n":"captionSets","r":false,"t":"`$ARRAY`","key$":"captionSets","index$":3},"entities":{"a":true,"h":"Entities","n":"entities","r":false,"t":"`$ARRAY`","key$":"entities","index$":4},"fallbackUsed":{"a":true,"h":"Fallback Used","n":"fallbackUsed","r":false,"t":"`$BOOLEAN`","key$":"fallbackUsed","index$":5},"generationStrategy":{"a":true,"h":"Generation Strategy","n":"generationStrategy","r":false,"t":"`$STRING`","key$":"generationStrategy","index$":6},"locale":{"a":true,"h":"Locale","n":"locale","r":false,"t":"`$STRING`","key$":"locale","index$":7},"memeId":{"a":true,"h":"Meme Id","n":"memeId","r":false,"t":"`$STRING`","key$":"memeId","index$":8},"memeSlug":{"a":true,"h":"Meme Slug","n":"memeSlug","r":false,"t":"`$STRING`","key$":"memeSlug","index$":9},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":10},"ok":{"a":true,"h":"Ok","n":"ok","r":false,"t":"`$BOOLEAN`","key$":"ok","index$":11},"optionCount":{"a":true,"h":"Option Count","n":"optionCount","r":false,"t":"`$INTEGER`","key$":"optionCount","index$":12},"ownerToken":{"a":true,"h":"Owner Token","n":"ownerToken","r":false,"t":"`$STRING`","key$":"ownerToken","index$":13},"providerId":{"a":true,"h":"Provider Id","n":"providerId","r":false,"t":"`$STRING`","key$":"providerId","index$":14},"referenceCaptions":{"a":true,"h":"Reference Captions","n":"referenceCaptions","r":false,"t":"`$ARRAY`","key$":"referenceCaptions","index$":15},"rewriteNote":{"a":true,"h":"Rewrite Note","n":"rewriteNote","r":false,"t":"`$STRING`","key$":"rewriteNote","index$":16},"sceneSummary":{"a":true,"h":"Scene Summary","n":"sceneSummary","r":false,"t":"`$STRING`","key$":"sceneSummary","index$":17},"templateDescription":{"a":true,"h":"Template Description","n":"templateDescription","r":false,"t":"`$STRING`","key$":"templateDescription","index$":18},"templateName":{"a":true,"h":"Template Name","n":"templateName","r":false,"t":"`$STRING`","key$":"templateName","index$":19},"templateTags":{"a":true,"h":"Template Tags","n":"templateTags","r":false,"t":"`$ARRAY`","key$":"templateTags","index$":20},"tone":{"a":true,"h":"Tone","n":"tone","r":true,"t":"`$STRING`","key$":"tone","index$":21},"toneCues":{"a":true,"h":"Tone Cues","n":"toneCues","r":false,"t":"`$ARRAY`","key$":"toneCues","index$":22},"trendKeywords":{"a":true,"h":"Trend Keywords","n":"trendKeywords","r":false,"t":"`$ARRAY`","key$":"trendKeywords","index$":23},"trendReferences":{"a":true,"h":"Trend References","n":"trendReferences","r":false,"t":"`$ARRAY`","key$":"trendReferences","index$":24},"trendSignals":{"a":true,"h":"Trend Signals","n":"trendSignals","r":false,"t":"`$ARRAY`","key$":"trendSignals","index$":25},"variationOffset":{"a":true,"h":"Variation Offset","n":"variationOffset","r":false,"t":"`$INTEGER`","key$":"variationOffset","index$":26},"voiceRules":{"a":true,"h":"Voice Rules","n":"voiceRules","r":false,"t":"`$ARRAY`","key$":"voiceRules","index$":27}},"name":"ai_caption","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/ai/captions/generate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/generate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"generate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/ai/captions/moderate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/moderate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"moderate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/ai/captions/prompt","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/prompt","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"prompt"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/ai/captions/rank","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/rank","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"rank"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /api/ai/captions/rewrite","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/rewrite","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"rewrite"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /api/ai/captions/scene","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/scene","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"scene"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /api/ai/captions/tone-presets","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/ai/captions/tone-presets","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"tone-presets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/ai/captions/tone-presets","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"locale","or":"locale","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/ai/captions/tone-presets","q":{"exist":["locale"]},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"tone-presets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/ai/captions/generate","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/ai/captions/generate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"ai"},{"lit":"captions"},{"lit":"generate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ai_caption","name__orig":"ai_caption","Name":"AiCaption","name_":"ai_caption","name-":"ai-caption","NAME":"AI_CAPTION","index$":2}, {"active":true,"entity":"ai_caption","key$":"BasicAiCaptionFlow","kind":"basic","name":"BasicAiCaptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_caption_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ai_caption_ref01","srcdatavar":"ai_caption_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_caption_ref01"}}],"index$":1}]}, 'AiCaption', {"POST /api/ai/captions/generate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["tone"],"properties":{"tone":{"type":"string","key$":"tone"},"memeId":{"type":"string","key$":"memeId"},"memeSlug":{"type":"string","key$":"memeSlug"},"ownerToken":{"type":"string","key$":"ownerToken"},"sceneSummary":{"type":"string","key$":"sceneSummary"},"entities":{"type":"array","items":{"type":"string"},"key$":"entities"},"toneCues":{"type":"array","items":{"type":"string"},"key$":"toneCues"},"trendReferences":{"type":"array","items":{"type":"string"},"key$":"trendReferences"},"trendKeywords":{"type":"array","items":{"type":"string"},"key$":"trendKeywords"},"rewriteNote":{"type":"string","key$":"rewriteNote"},"referenceCaptions":{"type":"array","items":{"type":"string"},"maxItems":7,"key$":"referenceCaptions"},"captionCount":{"type":"integer","minimum":1,"maximum":7,"key$":"captionCount"},"optionCount":{"type":"integer","minimum":1,"maximum":5,"key$":"optionCount"},"variationOffset":{"type":"integer","minimum":0,"maximum":99,"key$":"variationOffset"}},"index$":1}}}},"responses":{"200":{"description":"Caption generation + ranking payload with reroll quota snapshot","content":{"application/json":{"schema":{"type":"object","properties":{"ok":{"type":"boolean","key$":"ok"},"generationStrategy":{"type":"string","enum":["openai","heuristic"],"key$":"generationStrategy"},"providerId":{"type":"string","key$":"providerId"},"fallbackUsed":{"type":"boolean","key$":"fallbackUsed"},"captionSets":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"score":{"type":"number"},"captions":{"type":"array","items":{"type":"object","properties":{"text":{"type":"string"}}}}}},"key$":"captionSets"}},"index$":0}}}},"400":{"description":"Validation error"},"429":{"description":"Daily caption reroll quota exceeded"}},"parameters":[],"security":[{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/moderate":{"protocol":"http","responses":{"200":{"description":"Caption moderation payload"},"400":{"description":"Validation error"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/prompt":{"protocol":"http","responses":{"200":{"description":"Caption prompt payload"},"400":{"description":"Validation error"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/rank":{"protocol":"http","responses":{"200":{"description":"Caption ranking payload"},"400":{"description":"Validation error"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/rewrite":{"protocol":"http","responses":{"200":{"description":"Caption rewrite payload"},"400":{"description":"Validation error"}},"parameters":[],"security":[{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/scene":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["canvasText"],"properties":{"canvasText":{"type":"array","items":{"type":"string"},"key$":"canvasText"},"templateName":{"type":"string","key$":"templateName"},"templateDescription":{"type":"string","key$":"templateDescription"},"templateTags":{"type":"array","items":{"type":"string"},"key$":"templateTags"},"trendSignals":{"type":"array","items":{"type":"string"},"key$":"trendSignals"}},"index$":1}}}},"responses":{"200":{"description":"Scene understanding payload"},"400":{"description":"Validation error"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"POST /api/ai/captions/tone-presets":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","key$":"name"},"locale":{"type":"string","key$":"locale"},"voiceRules":{"type":"array","items":{"type":"string"},"key$":"voiceRules"},"blockedTerms":{"type":"array","items":{"type":"string"},"key$":"blockedTerms"}},"index$":1}}}},"responses":{"201":{"description":"Tone preset saved"},"400":{"description":"Validation error"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/ai/captions/tone-presets":{"protocol":"http","responses":{"200":{"description":"Tone preset list payload"}},"parameters":[{"name":"locale","in":"query","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/ai/captions/generate":{"protocol":"http","responses":{"200":{"description":"Current actor caption reroll quota snapshot"}},"parameters":[],"security":[{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_caption_ref01_ent = client.AiCaption()
    let ai_caption_ref01_data = setup.data.new.ai_caption['ai_caption_ref01']

    ai_caption_ref01_data = (await ai_caption_ref01_ent.create(ai_caption_ref01_data)).data()
    assert(null != ai_caption_ref01_data)


    // LOAD
    const ai_caption_ref01_match_dt0: any = {}
    const ai_caption_ref01_data_dt0 = (await ai_caption_ref01_ent.load(ai_caption_ref01_match_dt0)).data()
    assert(null != ai_caption_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_caption/AiCaptionTestData.json')

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
    ['ai_caption01','ai_caption02','ai_caption03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID']
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
  
