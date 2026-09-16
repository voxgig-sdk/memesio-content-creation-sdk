

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


describe('AiMemeGenerationSucceededEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.AiMemeGenerationSucceeded()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_meme_generation_succeeded.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allowHeuristicFallback","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"captionSource","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"captions","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"correlationId","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"degradedFromAsync","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"editableCaptions","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"flow","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"imageUrl","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"mode","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":9},{"active":true,"name":"preferredProviderId","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"prompt","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"rewriteNote","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"runId","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":14},{"active":true,"name":"templateId","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"tone","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"toneCues","req":false,"type":"`$ARRAY`","index$":17},{"active":true,"name":"variantCount","op":{"create":{"req":false,"type":"`$NUMBER`"}},"req":true,"type":"`$INTEGER`","index$":18},{"active":true,"name":"variants","req":true,"type":"`$ARRAY`","index$":19},{"active":true,"name":"workspaceId","req":false,"type":"`$STRING`","index$":20}],"name":"ai_meme_generation_succeeded","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/ai/memes/generate","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"allowHeuristicFallback\":{\"type\":\"boolean\"},\"captionSource\":{\"enum\":[\"input\",\"prompt\"],\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"correlationId\":{\"type\":\"string\"},\"editableCaptions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"maxItems\":8,\"type\":\"array\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"preferredProviderId\":{\"enum\":[\"hyperswitch_vision\",\"onnx_local\",\"openai_vision\"],\"type\":\"string\"},\"prompt\":{\"maxLength\":500,\"minLength\":1,\"type\":\"string\"},\"rewriteNote\":{\"maxLength\":160,\"type\":\"string\"},\"templateId\":{\"type\":\"string\"},\"tone\":{\"enum\":[\"sarcastic\",\"deadpan\",\"wholesome\",\"absurd\",\"corporate\",\"dark-lite\",\"brand\"],\"type\":\"string\"},\"toneCues\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"variantCount\":{\"maximum\":5,\"minimum\":1,\"type\":\"number\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"degradedFromAsync\":{\"type\":\"boolean\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"ok\":{\"const\":true,\"type\":\"boolean\"},\"runId\":{\"type\":\"string\"},\"status\":{\"const\":\"succeeded\",\"type\":\"string\"},\"variantCount\":{\"minimum\":0,\"type\":\"integer\"},\"variants\":{\"items\":{\"properties\":{\"attempts\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"},\"captionGenerationStrategy\":{\"enum\":[\"openai\",\"heuristic\",\"provided\",null],\"type\":[\"string\",\"null\"]},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"editable\":{\"type\":\"boolean\"},\"estimatedCostUsd\":{\"minimum\":0,\"type\":\"number\"},\"fallbackUsed\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"memeUrl\":{\"type\":[\"string\",\"null\"]},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"pageUrl\":{\"type\":[\"string\",\"null\"]},\"providerId\":{\"type\":\"string\"},\"sourceImageUrl\":{\"type\":[\"string\",\"null\"]},\"templateName\":{\"type\":[\"string\",\"null\"]},\"templateSelectionStrategy\":{\"enum\":[\"provided_template\",\"provided_image\",\"library_search\",\"recommendation\",null],\"type\":[\"string\",\"null\"]},\"templateSlug\":{\"type\":[\"string\",\"null\"]},\"variantKind\":{\"enum\":[\"template_captioned\",\"rendered_image\"],\"type\":\"string\"}},\"required\":[\"id\",\"mode\",\"providerId\",\"variantKind\",\"memeUrl\",\"pageUrl\",\"templateName\",\"fallbackUsed\",\"attempts\",\"estimatedCostUsd\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"ok\",\"flow\",\"mode\",\"status\",\"variantCount\",\"variants\"],\"type\":\"object\"}}},\"description\":\"Meme variant generation payload\"},\"400\":{\"description\":\"Validation error\"},\"429\":{\"description\":\"Daily AI quota exceeded\"},\"500\":{\"description\":\"Provider execution failure\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/memes/generate","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"memes"},{"lit":"generate"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v1/memes/generate","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"allowHeuristicFallback\":{\"type\":\"boolean\"},\"captionSource\":{\"enum\":[\"input\",\"prompt\"],\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"correlationId\":{\"type\":\"string\"},\"editableCaptions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"maxItems\":8,\"type\":\"array\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"preferredProviderId\":{\"enum\":[\"hyperswitch_vision\",\"onnx_local\",\"openai_vision\"],\"type\":\"string\"},\"prompt\":{\"maxLength\":500,\"minLength\":1,\"type\":\"string\"},\"rewriteNote\":{\"maxLength\":160,\"type\":\"string\"},\"templateId\":{\"type\":\"string\"},\"tone\":{\"enum\":[\"sarcastic\",\"deadpan\",\"wholesome\",\"absurd\",\"corporate\",\"dark-lite\",\"brand\"],\"type\":\"string\"},\"toneCues\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"variantCount\":{\"maximum\":5,\"minimum\":1,\"type\":\"number\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"degradedFromAsync\":{\"type\":\"boolean\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"ok\":{\"const\":true,\"type\":\"boolean\"},\"runId\":{\"type\":\"string\"},\"status\":{\"const\":\"succeeded\",\"type\":\"string\"},\"variantCount\":{\"minimum\":0,\"type\":\"integer\"},\"variants\":{\"items\":{\"properties\":{\"attempts\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"},\"captionGenerationStrategy\":{\"enum\":[\"openai\",\"heuristic\",\"provided\",null],\"type\":[\"string\",\"null\"]},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"editable\":{\"type\":\"boolean\"},\"estimatedCostUsd\":{\"minimum\":0,\"type\":\"number\"},\"fallbackUsed\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"memeUrl\":{\"type\":[\"string\",\"null\"]},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"pageUrl\":{\"type\":[\"string\",\"null\"]},\"providerId\":{\"type\":\"string\"},\"sourceImageUrl\":{\"type\":[\"string\",\"null\"]},\"templateName\":{\"type\":[\"string\",\"null\"]},\"templateSelectionStrategy\":{\"enum\":[\"provided_template\",\"provided_image\",\"library_search\",\"recommendation\",null],\"type\":[\"string\",\"null\"]},\"templateSlug\":{\"type\":[\"string\",\"null\"]},\"variantKind\":{\"enum\":[\"template_captioned\",\"rendered_image\"],\"type\":\"string\"}},\"required\":[\"id\",\"mode\",\"providerId\",\"variantKind\",\"memeUrl\",\"pageUrl\",\"templateName\",\"fallbackUsed\",\"attempts\",\"estimatedCostUsd\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"ok\",\"flow\",\"mode\",\"status\",\"variantCount\",\"variants\"],\"type\":\"object\"}}},\"description\":\"Meme variant generation payload\"},\"400\":{\"description\":\"Validation error\"},\"401\":{\"description\":\"Developer or agent API key required\"},\"429\":{\"description\":\"Daily AI quota exceeded\"},\"500\":{\"description\":\"Provider execution failure\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/memes/generate","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"memes"},{"lit":"generate"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"ai_meme_generation_succeeded","name__orig":"ai_meme_generation_succeeded","Name":"AiMemeGenerationSucceeded","name_":"ai_meme_generation_succeeded","name-":"ai-meme-generation-succeeded","NAME":"AI_MEME_GENERATION_SUCCEEDED","index$":4}, {"active":true,"entity":"ai_meme_generation_succeeded","key$":"BasicAiMemeGenerationSucceededFlow","kind":"basic","name":"BasicAiMemeGenerationSucceededFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ai_meme_generation_succeeded_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'AiMemeGenerationSucceeded')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_meme_generation_succeeded_ref01_ent = client.AiMemeGenerationSucceeded()
    let ai_meme_generation_succeeded_ref01_data = setup.data.new.ai_meme_generation_succeeded['ai_meme_generation_succeeded_ref01']

    ai_meme_generation_succeeded_ref01_data = (await ai_meme_generation_succeeded_ref01_ent.create(ai_meme_generation_succeeded_ref01_data)).data()
    assert(null != ai_meme_generation_succeeded_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_meme_generation_succeeded/AiMemeGenerationSucceededTestData.json')

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
    ['ai_meme_generation_succeeded01','ai_meme_generation_succeeded02','ai_meme_generation_succeeded03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID']
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
  
