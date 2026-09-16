

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


describe('TemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Template()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"animated","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"assetBytes","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1},{"active":true,"name":"assetContentType","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"boxCount","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"captionCount","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"captions","req":true,"type":"`$ARRAY`","index$":5},{"active":true,"name":"categories","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":7},{"active":true,"name":"durationMs","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":8},{"active":true,"name":"exampleImageUrl","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":9},{"active":true,"name":"frameCount","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":10},{"active":true,"name":"height","req":true,"type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":11},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":12},{"active":true,"name":"imageUrl","req":true,"type":"`$STRING`","index$":13},{"active":true,"name":"mediaType","req":true,"type":"`$STRING`","index$":14},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":15},{"active":true,"name":"posterImageUrl","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"previewImageUrl","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"qualityStatus","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"slug","req":true,"type":"`$STRING`","index$":19},{"active":true,"name":"sourceTemplateId","req":true,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":20},{"active":true,"name":"sourceUrl","req":false,"type":"`$STRING`","index$":21},{"active":true,"name":"tags","req":true,"type":"`$ARRAY`","index$":22},{"active":true,"name":"width","req":true,"type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":23}],"id":{"field":"id","name":"id"},"name":"template","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"image","kind":"query","name":"media_type","orig":"media_type","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"mode","orig":"mode","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"tag","orig":"tag","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /api/templates","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"query\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"tag\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"maximum\":60,\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"enum\":[\"curated\",\"trending\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mode\",\"schema\":{\"enum\":[\"lexical\",\"hybrid\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mediaType\",\"schema\":{\"default\":\"image\",\"enum\":[\"image\",\"gif\",\"all\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"fallbackApplied\":{\"type\":\"boolean\"},\"items\":{\"items\":{\"properties\":{\"animated\":{\"type\":\"boolean\"},\"assetBytes\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"assetContentType\":{\"type\":\"string\"},\"boxCount\":{\"minimum\":0,\"type\":\"integer\"},\"captionCount\":{\"minimum\":0,\"type\":\"integer\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"categories\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":{\"type\":\"string\"},\"durationMs\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"exampleImageUrl\":{\"type\":[\"string\",\"null\"]},\"frameCount\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"height\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mediaType\":{\"enum\":[\"image\",\"gif\"],\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"posterImageUrl\":{\"type\":\"string\"},\"previewImageUrl\":{\"type\":\"string\"},\"qualityStatus\":{\"enum\":[\"approved\",\"quarantined\",\"rejected\",\"pending\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"sourceTemplateId\":{\"type\":[\"string\",\"null\"]},\"sourceUrl\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"width\":{\"type\":[\"number\",\"null\"]}},\"required\":[\"id\",\"sourceTemplateId\",\"slug\",\"name\",\"description\",\"mediaType\",\"imageUrl\",\"width\",\"height\",\"captions\",\"tags\"],\"type\":\"object\"},\"type\":\"array\"},\"mediaType\":{\"enum\":[\"image\",\"gif\",\"all\"],\"type\":\"string\"},\"nextPage\":{\"minimum\":1,\"type\":[\"integer\",\"null\"]},\"page\":{\"minimum\":1,\"type\":\"integer\"},\"pageSize\":{\"minimum\":1,\"type\":\"integer\"},\"searchMode\":{\"enum\":[\"lexical\",\"hybrid\"],\"type\":\"string\"},\"total\":{\"minimum\":0,\"type\":\"integer\"}},\"required\":[\"items\",\"total\",\"nextPage\",\"page\",\"pageSize\"],\"type\":\"object\"}}},\"description\":\"Template search results\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/templates","segments":[{"lit":"api"},{"lit":"templates"}],"select":{"exist":["media_type","mode","page","page_size","q","query","sort","tag"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":22}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"template_ref01"}}],"index$":0}]}, 'Template')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let template_ref01_data = Object.values(setup.data.existing.template)[0] as any

    // LIST
    const template_ref01_ent = client.Template()
    const template_ref01_match: any = {}

    const template_ref01_list = (await template_ref01_ent.list(template_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/template/TemplateTestData.json')

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
    ['template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_TEMPLATE_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_TEMPLATE_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_TEMPLATE_ENTID']
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
  
