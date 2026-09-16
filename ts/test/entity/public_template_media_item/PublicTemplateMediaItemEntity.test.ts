

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


describe('PublicTemplateMediaItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.PublicTemplateMediaItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'public_template_media_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"animated","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"assetBytes","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1},{"active":true,"name":"assetContentType","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"boxCount","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"captionCount","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"captions","op":{"create":{"req":false,"type":"`$ARRAY`"}},"req":true,"type":"`$ARRAY`","index$":5},{"active":true,"name":"categories","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":7},{"active":true,"name":"durationMs","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":8},{"active":true,"name":"exampleImageUrl","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":9},{"active":true,"name":"fps","req":false,"type":"`$INTEGER`","index$":10},{"active":true,"name":"frameCount","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":11},{"active":true,"name":"gifSlug","req":false,"short":"Required for /api/v1/gifs/generate.","type":"`$STRING`","index$":12},{"active":true,"name":"height","req":true,"type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":13},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":14},{"active":true,"name":"imageUrl","req":true,"type":"`$STRING`","index$":15},{"active":true,"name":"mediaType","req":true,"type":"`$STRING`","index$":16},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":17},{"active":true,"name":"posterImageUrl","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"previewImageUrl","req":false,"type":"`$STRING`","index$":19},{"active":true,"name":"qualityStatus","req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"returnBase64","req":false,"short":"Only used by /api/v1/gifs/generate.","type":"`$BOOLEAN`","index$":21},{"active":true,"name":"slug","req":true,"type":"`$STRING`","index$":22},{"active":true,"name":"sourceTemplateId","req":true,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":23},{"active":true,"name":"sourceUrl","req":false,"type":"`$STRING`","index$":24},{"active":true,"name":"startMs","req":false,"type":"`$INTEGER`","index$":25},{"active":true,"name":"tags","op":{"create":{"req":false,"type":"`$ARRAY`"}},"req":true,"type":"`$ARRAY`","index$":26},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":27},{"active":true,"name":"width","req":true,"type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":28},{"active":true,"name":"widthPx","req":false,"type":"`$INTEGER`","index$":29}],"id":{"field":"id","name":"id"},"name":"public_template_media_item","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"slug","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/gifs/{slug}/generate","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"boxWidthPct\":{\"maximum\":100,\"minimum\":20,\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"maximum\":64,\"minimum\":14,\"type\":\"number\"},\"id\":{\"maxLength\":80,\"type\":\"string\"},\"maxLines\":{\"maximum\":4,\"minimum\":1,\"type\":\"integer\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"maxLength\":120,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"y\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"},\"maxItems\":4,\"type\":\"array\"},\"durationMs\":{\"maximum\":24000,\"minimum\":100,\"type\":\"integer\"},\"fps\":{\"maximum\":24,\"minimum\":10,\"type\":\"integer\"},\"gifSlug\":{\"description\":\"Required for /api/v1/gifs/generate.\",\"type\":\"string\"},\"returnBase64\":{\"description\":\"Only used by /api/v1/gifs/generate.\",\"type\":\"boolean\"},\"startMs\":{\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"type\":\"array\"},\"title\":{\"maxLength\":120,\"type\":\"string\"},\"widthPx\":{\"maximum\":480,\"minimum\":100,\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"image/gif\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Generated GIF bytes\"},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"GIF template not found\"},\"413\":{\"description\":\"Source or output GIF too large\"},\"422\":{\"description\":\"Frame or pixel budget exceeded\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/gifs/{slug}/generate","segments":[{"lit":"api"},{"lit":"gifs"},{"var":"slug"},{"lit":"generate"}],"select":{"$action":"generate","exist":["slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"slug","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"image","kind":"query","name":"media_type","orig":"media_type","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/templates/{slug}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mediaType\",\"schema\":{\"default\":\"image\",\"enum\":[\"image\",\"gif\",\"all\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"animated\":{\"type\":\"boolean\"},\"assetBytes\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"assetContentType\":{\"type\":\"string\"},\"boxCount\":{\"minimum\":0,\"type\":\"integer\"},\"captionCount\":{\"minimum\":0,\"type\":\"integer\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"categories\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":{\"type\":\"string\"},\"durationMs\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"exampleImageUrl\":{\"type\":[\"string\",\"null\"]},\"frameCount\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"height\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mediaType\":{\"enum\":[\"image\",\"gif\"],\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"posterImageUrl\":{\"type\":\"string\"},\"previewImageUrl\":{\"type\":\"string\"},\"qualityStatus\":{\"enum\":[\"approved\",\"quarantined\",\"rejected\",\"pending\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"sourceTemplateId\":{\"type\":[\"string\",\"null\"]},\"sourceUrl\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"width\":{\"type\":[\"number\",\"null\"]}},\"required\":[\"id\",\"sourceTemplateId\",\"slug\",\"name\",\"description\",\"mediaType\",\"imageUrl\",\"width\",\"height\",\"captions\",\"tags\"],\"type\":\"object\"}}},\"description\":\"Template details\"},\"400\":{\"description\":\"Invalid slug\"},\"404\":{\"description\":\"Template not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/templates/{slug}","segments":[{"lit":"api"},{"lit":"templates"},{"var":"slug"}],"select":{"exist":["media_type","slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"slug","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/gifs/{slug}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"animated\":{\"type\":\"boolean\"},\"assetBytes\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"assetContentType\":{\"type\":\"string\"},\"boxCount\":{\"minimum\":0,\"type\":\"integer\"},\"captionCount\":{\"minimum\":0,\"type\":\"integer\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"categories\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":{\"type\":\"string\"},\"durationMs\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"exampleImageUrl\":{\"type\":[\"string\",\"null\"]},\"frameCount\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"height\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mediaType\":{\"enum\":[\"image\",\"gif\"],\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"posterImageUrl\":{\"type\":\"string\"},\"previewImageUrl\":{\"type\":\"string\"},\"qualityStatus\":{\"enum\":[\"approved\",\"quarantined\",\"rejected\",\"pending\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"sourceTemplateId\":{\"type\":[\"string\",\"null\"]},\"sourceUrl\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"width\":{\"type\":[\"number\",\"null\"]}},\"required\":[\"id\",\"sourceTemplateId\",\"slug\",\"name\",\"description\",\"mediaType\",\"imageUrl\",\"width\",\"height\",\"captions\",\"tags\"],\"type\":\"object\"}}},\"description\":\"GIF template details\"},\"400\":{\"description\":\"Invalid slug\"},\"404\":{\"description\":\"GIF template not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/gifs/{slug}","segments":[{"lit":"api"},{"lit":"gifs"},{"var":"slug"}],"select":{"exist":["slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["gif"],["template"]]},"key$":"public_template_media_item","name__orig":"public_template_media_item","Name":"PublicTemplateMediaItem","name_":"public_template_media_item","name-":"public-template-media-item","NAME":"PUBLIC_TEMPLATE_MEDIA_ITEM","index$":20}, {"active":true,"entity":"public_template_media_item","key$":"BasicPublicTemplateMediaItemFlow","kind":"basic","name":"BasicPublicTemplateMediaItemFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"public_template_media_item_ref01"},"match":{"slug":"slug01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"public_template_media_item_ref01","srcdatavar":"public_template_media_item_ref01_data","suffix":"_dt0"},"match":{"id":"public_template_media_item01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-public_template_media_item_ref01"}}],"index$":1}]}, 'PublicTemplateMediaItem')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const public_template_media_item_ref01_ent = client.PublicTemplateMediaItem()
    let public_template_media_item_ref01_data = setup.data.new.public_template_media_item['public_template_media_item_ref01']
    public_template_media_item_ref01_data['slug'] = setup.idmap['slug01']

    public_template_media_item_ref01_data = (await public_template_media_item_ref01_ent.create(public_template_media_item_ref01_data)).data()
    assert(null != public_template_media_item_ref01_data.id)


    // LOAD
    const public_template_media_item_ref01_match_dt0: any = {}
    public_template_media_item_ref01_match_dt0.id = public_template_media_item_ref01_data.id
    const public_template_media_item_ref01_data_dt0 = (await public_template_media_item_ref01_ent.load(public_template_media_item_ref01_match_dt0)).data()
    assert(public_template_media_item_ref01_data_dt0.id === public_template_media_item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/public_template_media_item/PublicTemplateMediaItemTestData.json')

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
    ['public_template_media_item01','public_template_media_item02','public_template_media_item03','gif01','gif02','gif03','template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID']
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
  
