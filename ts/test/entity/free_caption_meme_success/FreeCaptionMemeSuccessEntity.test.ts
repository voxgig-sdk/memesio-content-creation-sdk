

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


describe('FreeCaptionMemeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.FreeCaptionMemeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'free_caption_meme_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"captions","req":true,"type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"index$":0},{"active":true,"name":"templateSlug","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"visibility","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"watermark","req":false,"short":"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.","type":"`$OBJECT`","index$":4}],"name":"free_caption_meme_success","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/free/memes/caption","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captions\":{\"items\":{\"oneOf\":[{\"maxLength\":300,\"type\":\"string\"},{\"properties\":{\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"id\":{\"maxLength\":64,\"type\":\"string\"},\"maxLines\":{\"minimum\":1,\"type\":\"integer\"},\"text\":{\"maxLength\":300,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"}]},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"maxLength\":140,\"type\":\"string\"},\"visibility\":{\"enum\":[\"private\",\"public\"],\"type\":\"string\"},\"watermark\":{\"description\":\"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.\",\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"maximum\":3,\"minimum\":0.6,\"type\":\"number\"},\"text\":{\"maxLength\":64,\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"templateSlug\",\"captions\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"altText\":{\"type\":\"string\"},\"apiUrl\":{\"type\":\"string\"},\"canonicalImageUrl\":{\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"imageUrl\":{\"type\":\"string\"},\"ownerToken\":{\"type\":\"string\"},\"pageUrl\":{\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"visibility\":{\"enum\":[\"private\",\"public\"],\"type\":\"string\"},\"watermark\":{\"description\":\"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.\",\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"maximum\":3,\"minimum\":0.6,\"type\":\"number\"},\"text\":{\"maxLength\":64,\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"slug\",\"shareSlug\",\"templateSlug\",\"title\",\"visibility\",\"imageUrl\",\"canonicalImageUrl\",\"altText\",\"tags\",\"apiUrl\",\"pageUrl\",\"ownerToken\",\"captions\",\"watermark\"],\"type\":\"object\"},\"success\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"success\",\"data\"],\"type\":\"object\"}}},\"description\":\"Captioned meme created\"},\"400\":{\"description\":\"Validation error or unsupported template\"},\"401\":{\"description\":\"Invalid developer or agent API key\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/free/memes/caption","segments":[{"lit":"api"},{"lit":"free"},{"lit":"memes"},{"lit":"caption"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v1/memes/caption-template","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captions\":{\"items\":{\"oneOf\":[{\"maxLength\":300,\"type\":\"string\"},{\"properties\":{\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"id\":{\"maxLength\":64,\"type\":\"string\"},\"maxLines\":{\"minimum\":1,\"type\":\"integer\"},\"text\":{\"maxLength\":300,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"}]},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"maxLength\":140,\"type\":\"string\"},\"visibility\":{\"enum\":[\"private\",\"public\"],\"type\":\"string\"},\"watermark\":{\"description\":\"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.\",\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"maximum\":3,\"minimum\":0.6,\"type\":\"number\"},\"text\":{\"maxLength\":64,\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"templateSlug\",\"captions\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"altText\":{\"type\":\"string\"},\"apiUrl\":{\"type\":\"string\"},\"canonicalImageUrl\":{\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"imageUrl\":{\"type\":\"string\"},\"ownerToken\":{\"type\":\"string\"},\"pageUrl\":{\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"visibility\":{\"enum\":[\"private\",\"public\"],\"type\":\"string\"},\"watermark\":{\"description\":\"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.\",\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"maximum\":3,\"minimum\":0.6,\"type\":\"number\"},\"text\":{\"maxLength\":64,\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"slug\",\"shareSlug\",\"templateSlug\",\"title\",\"visibility\",\"imageUrl\",\"canonicalImageUrl\",\"altText\",\"tags\",\"apiUrl\",\"pageUrl\",\"ownerToken\",\"captions\",\"watermark\"],\"type\":\"object\"},\"success\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"success\",\"data\"],\"type\":\"object\"}}},\"description\":\"Captioned meme created\"},\"400\":{\"description\":\"Validation error or unsupported template\"},\"401\":{\"description\":\"Invalid API key when one is provided\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/memes/caption-template","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"memes"},{"lit":"caption-template"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"free_caption_meme_success","name__orig":"free_caption_meme_success","Name":"FreeCaptionMemeSuccess","name_":"free_caption_meme_success","name-":"free-caption-meme-success","NAME":"FREE_CAPTION_MEME_SUCCESS","index$":13}, {"active":true,"entity":"free_caption_meme_success","key$":"BasicFreeCaptionMemeSuccessFlow","kind":"basic","name":"BasicFreeCaptionMemeSuccessFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"free_caption_meme_success_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'FreeCaptionMemeSuccess')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const free_caption_meme_success_ref01_ent = client.FreeCaptionMemeSuccess()
    let free_caption_meme_success_ref01_data = setup.data.new.free_caption_meme_success['free_caption_meme_success_ref01']

    free_caption_meme_success_ref01_data = (await free_caption_meme_success_ref01_ent.create(free_caption_meme_success_ref01_data)).data()
    assert(null != free_caption_meme_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/free_caption_meme_success/FreeCaptionMemeSuccessTestData.json')

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
    ['free_caption_meme_success01','free_caption_meme_success02','free_caption_meme_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID']
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
  
