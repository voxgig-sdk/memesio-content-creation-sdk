

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


describe('MemeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Meme()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'meme.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"altText","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"canonicalImageUrl","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"canvas","req":true,"type":"`$OBJECT`","index$":2},{"active":true,"name":"captions","req":true,"type":"`$ARRAY`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"imageUrl","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"nsfwStatus","req":true,"type":"`$STRING`","index$":7},{"active":true,"name":"overlays","req":true,"type":"`$ARRAY`","index$":8},{"active":true,"name":"shareSlug","req":true,"type":"`$STRING`","index$":9},{"active":true,"name":"shareUrl","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"shareViews","req":true,"type":"`$INTEGER`","index$":11},{"active":true,"name":"slug","req":true,"type":"`$STRING`","index$":12},{"active":true,"name":"sourceImageUrl","req":true,"type":"`$STRING`","index$":13},{"active":true,"name":"tags","req":true,"type":"`$ARRAY`","index$":14},{"active":true,"name":"templateSlug","req":true,"type":"`$STRING`","index$":15},{"active":true,"name":"title","req":true,"type":"`$STRING`","index$":16},{"active":true,"name":"visibility","req":true,"type":"`$STRING`","index$":17},{"active":true,"name":"watermark","req":true,"type":"`$OBJECT`","index$":18}],"id":{"field":"id","name":"id"},"name":"meme","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"owner_token","orig":"owner_token","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/memes/{slug}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"ownerToken\",\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"altText\":{\"type\":\"string\"},\"canonicalImageUrl\":{\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"nsfwStatus\":{\"enum\":[\"clear\",\"flagged\"],\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"},\"shareUrl\":{\"type\":\"string\"},\"shareViews\":{\"minimum\":0,\"type\":\"integer\"},\"slug\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"visibility\":{\"enum\":[\"public\",\"private\"],\"type\":\"string\"}},\"required\":[\"slug\",\"shareSlug\",\"shareUrl\",\"title\",\"altText\",\"tags\",\"templateSlug\",\"visibility\",\"createdAt\",\"imageUrl\",\"canonicalImageUrl\",\"nsfwStatus\",\"shareViews\"],\"type\":\"object\"},{\"properties\":{\"canvas\":{\"properties\":{\"aspectRatio\":{\"enum\":[\"original\",\"1:1\",\"4:5\",\"16:9\"],\"type\":\"string\"},\"crop\":{\"properties\":{\"height\":{\"type\":\"number\"},\"width\":{\"type\":\"number\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"x\",\"y\",\"width\",\"height\"],\"type\":\"object\"},\"focusX\":{\"type\":\"number\"},\"focusY\":{\"type\":\"number\"},\"guides\":{\"additionalProperties\":true,\"type\":\"object\"},\"layerOrder\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"sourceAdjustments\":{\"additionalProperties\":true,\"type\":\"object\"},\"spacing\":{\"additionalProperties\":true,\"type\":\"object\"},\"transform\":{\"additionalProperties\":true,\"type\":\"object\"},\"zoomPercent\":{\"type\":\"number\"}},\"required\":[\"aspectRatio\",\"focusX\",\"focusY\",\"zoomPercent\",\"crop\",\"spacing\",\"guides\",\"sourceAdjustments\",\"layerOrder\",\"transform\"],\"type\":\"object\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"overlays\":{\"items\":{\"properties\":{\"backgroundRemoved\":{\"type\":\"boolean\"},\"flippedX\":{\"type\":\"boolean\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"opacity\":{\"type\":\"number\"},\"rotationDeg\":{\"type\":\"number\"},\"sourceImageUrl\":{\"type\":\"string\"},\"widthPercent\":{\"type\":\"number\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"label\",\"imageUrl\",\"x\",\"y\",\"widthPercent\",\"rotationDeg\",\"opacity\"],\"type\":\"object\"},\"type\":\"array\"},\"sourceImageUrl\":{\"type\":\"string\"},\"watermark\":{\"properties\":{\"enabled\":{\"type\":\"boolean\"},\"position\":{\"enum\":[\"top_left\",\"top_right\",\"bottom_left\",\"bottom_right\"],\"type\":\"string\"},\"scale\":{\"type\":\"number\"},\"text\":{\"type\":\"string\"}},\"required\":[\"enabled\",\"text\",\"position\",\"scale\"],\"type\":\"object\"}},\"required\":[\"sourceImageUrl\",\"captions\",\"overlays\",\"canvas\",\"watermark\"],\"type\":\"object\"}]}}},\"description\":\"Meme details\"},\"400\":{\"description\":\"Validation error\"},\"403\":{\"description\":\"Private meme requires owner token\"},\"404\":{\"description\":\"Meme not found\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/memes/{slug}","rename":{"param":{"slug":"id"}},"segments":[{"lit":"api"},{"lit":"memes"},{"var":"id"}],"select":{"exist":["id","owner_token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/memes/{slug}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"deleted\":{\"type\":\"boolean\"},\"ok\":{\"type\":\"boolean\"},\"shareSlug\":{\"type\":\"string\"},\"slug\":{\"type\":\"string\"}},\"required\":[\"ok\",\"deleted\",\"slug\",\"shareSlug\"],\"type\":\"object\"}}},\"description\":\"Meme deleted\"},\"400\":{\"description\":\"Invalid slug\"},\"401\":{\"description\":\"Authentication required\"},\"403\":{\"description\":\"Origin validation failed\"},\"404\":{\"description\":\"Meme not found for the signed-in user\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/memes/{slug}","rename":{"param":{"slug":"id"}},"segments":[{"lit":"api"},{"lit":"memes"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"meme","name__orig":"meme","Name":"Meme","name_":"meme","name-":"meme","NAME":"MEME","index$":19}, {"active":true,"entity":"meme","key$":"BasicMemeFlow","kind":"basic","name":"BasicMemeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"meme_ref01","srcdatavar":"meme_ref01_data","suffix":"_dt0"},"match":{"id":"meme01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-meme_ref01"}}],"index$":0}]}, 'Meme')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let meme_ref01_data = Object.values(setup.data.existing.meme)[0] as any

    // LOAD
    const meme_ref01_ent = client.Meme()
    const meme_ref01_match_dt0: any = {}
    meme_ref01_match_dt0.id = meme_ref01_data.id
    const meme_ref01_data_dt0 = (await meme_ref01_ent.load(meme_ref01_match_dt0)).data()
    assert(meme_ref01_data_dt0.id === meme_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/meme/MemeTestData.json')

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
    ['meme01','meme02','meme03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID']
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
  
