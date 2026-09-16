

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


describe('GenerateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Generate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'generate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"base64","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"byteLength","req":true,"type":"`$INTEGER`","index$":1},{"active":true,"name":"captions","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"dataUrl","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"delayMs","req":true,"type":"`$INTEGER`","index$":4},{"active":true,"name":"durationMs","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"filename","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"fps","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"gifSlug","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"Required for /api/v1/gifs/generate.","type":"`$STRING`","index$":8},{"active":true,"name":"height","req":true,"type":"`$INTEGER`","index$":9},{"active":true,"name":"mimeType","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"pages","req":true,"type":"`$INTEGER`","index$":11},{"active":true,"name":"parameters","req":true,"type":"`$OBJECT`","index$":12},{"active":true,"name":"returnBase64","req":false,"short":"Only used by /api/v1/gifs/generate.","type":"`$BOOLEAN`","index$":13},{"active":true,"name":"sourceDurationMs","req":true,"type":"`$INTEGER`","index$":14},{"active":true,"name":"startMs","req":false,"type":"`$INTEGER`","index$":15},{"active":true,"name":"tags","req":false,"type":"`$ARRAY`","index$":16},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"width","req":true,"type":"`$INTEGER`","index$":18},{"active":true,"name":"widthPx","req":false,"type":"`$INTEGER`","index$":19}],"name":"generate","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v1/gifs/generate","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"boxWidthPct\":{\"maximum\":100,\"minimum\":20,\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"maximum\":64,\"minimum\":14,\"type\":\"number\"},\"id\":{\"maxLength\":80,\"type\":\"string\"},\"maxLines\":{\"maximum\":4,\"minimum\":1,\"type\":\"integer\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"maxLength\":120,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"y\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"},\"maxItems\":4,\"type\":\"array\"},\"durationMs\":{\"maximum\":24000,\"minimum\":100,\"type\":\"integer\"},\"fps\":{\"maximum\":24,\"minimum\":10,\"type\":\"integer\"},\"gifSlug\":{\"description\":\"Required for /api/v1/gifs/generate.\",\"type\":\"string\"},\"returnBase64\":{\"description\":\"Only used by /api/v1/gifs/generate.\",\"type\":\"boolean\"},\"startMs\":{\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"type\":\"array\"},\"title\":{\"maxLength\":120,\"type\":\"string\"},\"widthPx\":{\"maximum\":480,\"minimum\":100,\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"base64\":{\"type\":\"string\"},\"byteLength\":{\"minimum\":1,\"type\":\"integer\"},\"dataUrl\":{\"type\":\"string\"},\"delayMs\":{\"minimum\":1,\"type\":\"integer\"},\"filename\":{\"type\":\"string\"},\"gifSlug\":{\"type\":\"string\"},\"height\":{\"minimum\":1,\"type\":\"integer\"},\"mimeType\":{\"const\":\"image/gif\",\"type\":\"string\"},\"pages\":{\"minimum\":1,\"type\":\"integer\"},\"parameters\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"boxWidthPct\":{\"maximum\":100,\"minimum\":20,\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"maximum\":64,\"minimum\":14,\"type\":\"number\"},\"id\":{\"maxLength\":80,\"type\":\"string\"},\"maxLines\":{\"maximum\":4,\"minimum\":1,\"type\":\"integer\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"maxLength\":120,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"y\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"},\"maxItems\":4,\"type\":\"array\"},\"durationMs\":{\"maximum\":24000,\"minimum\":100,\"type\":\"integer\"},\"fps\":{\"maximum\":24,\"minimum\":10,\"type\":\"integer\"},\"gifSlug\":{\"description\":\"Required for /api/v1/gifs/generate.\",\"type\":\"string\"},\"returnBase64\":{\"description\":\"Only used by /api/v1/gifs/generate.\",\"type\":\"boolean\"},\"startMs\":{\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"type\":\"array\"},\"title\":{\"maxLength\":120,\"type\":\"string\"},\"widthPx\":{\"maximum\":480,\"minimum\":100,\"type\":\"integer\"}},\"type\":\"object\"},\"sourceDurationMs\":{\"minimum\":0,\"type\":\"integer\"},\"title\":{\"type\":\"string\"},\"width\":{\"minimum\":1,\"type\":\"integer\"}},\"required\":[\"gifSlug\",\"filename\",\"mimeType\",\"byteLength\",\"width\",\"height\",\"pages\",\"delayMs\",\"sourceDurationMs\",\"parameters\"],\"type\":\"object\"},\"ok\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"ok\",\"data\"],\"type\":\"object\"}}},\"description\":\"Generated GIF metadata\"},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"GIF template not found\"},\"413\":{\"description\":\"Source or output GIF too large\"},\"422\":{\"description\":\"Frame or pixel budget exceeded\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/gifs/generate","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"gifs"},{"lit":"generate"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"generate","name__orig":"generate","Name":"Generate","name_":"generate","name-":"generate","NAME":"GENERATE","index$":15}, {"active":true,"entity":"generate","key$":"BasicGenerateFlow","kind":"basic","name":"BasicGenerateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"generate_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Generate')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const generate_ref01_ent = client.Generate()
    let generate_ref01_data = setup.data.new.generate['generate_ref01']

    generate_ref01_data = (await generate_ref01_ent.create(generate_ref01_data)).data()
    assert(null != generate_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/generate/GenerateTestData.json')

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
    ['generate01','generate02','generate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID']
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
  
