

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


describe('CreateMemeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.CreateMeme()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_meme.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"canvas","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"captions","req":true,"type":"`$ARRAY`","index$":1},{"active":true,"name":"generationRunId","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":2},{"active":true,"name":"generationVariantId","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"imageDataUrl","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"overlays","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"sourceImageUrl","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"templateSlug","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"visibility","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"watermark","req":true,"type":"`$OBJECT`","index$":10}],"name":"create_meme","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/memes","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"canvas\":{\"properties\":{\"aspectRatio\":{\"enum\":[\"original\",\"1:1\",\"4:5\",\"16:9\"],\"type\":\"string\"},\"crop\":{\"properties\":{\"height\":{\"type\":\"number\"},\"width\":{\"type\":\"number\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"x\",\"y\",\"width\",\"height\"],\"type\":\"object\"},\"focusX\":{\"type\":\"number\"},\"focusY\":{\"type\":\"number\"},\"guides\":{\"additionalProperties\":true,\"type\":\"object\"},\"layerOrder\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"sourceAdjustments\":{\"additionalProperties\":true,\"type\":\"object\"},\"spacing\":{\"additionalProperties\":true,\"type\":\"object\"},\"transform\":{\"additionalProperties\":true,\"type\":\"object\"},\"zoomPercent\":{\"type\":\"number\"}},\"required\":[\"aspectRatio\",\"focusX\",\"focusY\",\"zoomPercent\",\"crop\",\"spacing\",\"guides\",\"sourceAdjustments\",\"layerOrder\",\"transform\"],\"type\":\"object\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"generationRunId\":{\"type\":[\"string\",\"null\"]},\"generationVariantId\":{\"type\":[\"string\",\"null\"]},\"imageDataUrl\":{\"type\":\"string\"},\"overlays\":{\"items\":{\"properties\":{\"backgroundRemoved\":{\"type\":\"boolean\"},\"flippedX\":{\"type\":\"boolean\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"opacity\":{\"type\":\"number\"},\"rotationDeg\":{\"type\":\"number\"},\"sourceImageUrl\":{\"type\":\"string\"},\"widthPercent\":{\"type\":\"number\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"label\",\"imageUrl\",\"x\",\"y\",\"widthPercent\",\"rotationDeg\",\"opacity\"],\"type\":\"object\"},\"type\":\"array\"},\"sourceImageUrl\":{\"type\":\"string\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"maxLength\":140,\"type\":\"string\"},\"visibility\":{\"enum\":[\"public\",\"private\"],\"type\":\"string\"},\"watermark\":{\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"type\":\"number\"},\"text\":{\"type\":\"string\"}},\"required\":[\"enabled\",\"text\",\"position\",\"scale\"],\"type\":\"object\"}},\"required\":[\"sourceImageUrl\",\"captions\",\"imageDataUrl\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"altText\":{\"type\":\"string\"},\"canonicalImageUrl\":{\"type\":\"string\"},\"guestSessionId\":{\"type\":[\"string\",\"null\"]},\"imageUrl\":{\"type\":\"string\"},\"ownerToken\":{\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"},\"shareUrl\":{\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"visibility\":{\"enum\":[\"public\",\"private\"],\"type\":\"string\"}},\"required\":[\"slug\",\"shareSlug\",\"shareUrl\",\"imageUrl\",\"canonicalImageUrl\",\"altText\",\"tags\",\"ownerToken\",\"visibility\",\"guestSessionId\"],\"type\":\"object\"}}},\"description\":\"Meme stored\"},\"400\":{\"description\":\"Validation error\"},\"401\":{\"description\":\"Invalid guest session token\"},\"403\":{\"description\":\"Origin validation failed\"},\"409\":{\"description\":\"Idempotency conflict\"},\"422\":{\"description\":\"Validation blocked by content policy or unchanged template clone\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/memes","segments":[{"lit":"api"},{"lit":"memes"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_meme","name__orig":"create_meme","Name":"CreateMeme","name_":"create_meme","name-":"create-meme","NAME":"CREATE_MEME","index$":11}, {"active":true,"entity":"create_meme","key$":"BasicCreateMemeFlow","kind":"basic","name":"BasicCreateMemeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"create_meme_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'CreateMeme')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_meme_ref01_ent = client.CreateMeme()
    let create_meme_ref01_data = setup.data.new.create_meme['create_meme_ref01']

    create_meme_ref01_data = (await create_meme_ref01_ent.create(create_meme_ref01_data)).data()
    assert(null != create_meme_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_meme/CreateMemeTestData.json')

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
    ['create_meme01','create_meme02','create_meme03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID']
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
  
