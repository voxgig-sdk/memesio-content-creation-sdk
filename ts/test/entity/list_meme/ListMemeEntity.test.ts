

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


describe('ListMemeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.ListMeme()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_meme.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"altText","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"canonicalImageUrl","req":true,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"createdAt","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"imageUrl","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"nsfwStatus","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"shareSlug","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"shareUrl","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"shareViews","req":true,"type":"`$INTEGER`","index$":7},{"active":true,"name":"slug","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"tags","req":true,"type":"`$ARRAY`","index$":9},{"active":true,"name":"templateSlug","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"title","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"visibility","req":true,"type":"`$STRING`","index$":12}],"name":"list_meme","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"exclude_template_clone","orig":"exclude_template_clone","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"include_nsfw","orig":"include_nsfw","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"official_only","orig":"official_only","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"query","name":"owner_token","orig":"owner_token","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"template_slug","orig":"template_slug","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"visibility","orig":"visibility","reqd":false,"type":"`$STRING`","index$":8}]},"contract":{"id":"GET /api/memes","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"query\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"templateSlug\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"visibility\",\"schema\":{\"enum\":[\"public\",\"private\",\"all\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"ownerToken\",\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"officialOnly\",\"schema\":{\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"excludeTemplateClones\",\"schema\":{\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"includeNsfw\",\"schema\":{\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"maximum\":50,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"altText\":{\"type\":\"string\"},\"canonicalImageUrl\":{\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"nsfwStatus\":{\"enum\":[\"clear\",\"flagged\"],\"type\":\"string\"},\"shareSlug\":{\"type\":\"string\"},\"shareUrl\":{\"type\":\"string\"},\"shareViews\":{\"minimum\":0,\"type\":\"integer\"},\"slug\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"templateSlug\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"visibility\":{\"enum\":[\"public\",\"private\"],\"type\":\"string\"}},\"required\":[\"slug\",\"shareSlug\",\"shareUrl\",\"title\",\"altText\",\"tags\",\"templateSlug\",\"visibility\",\"createdAt\",\"imageUrl\",\"canonicalImageUrl\",\"nsfwStatus\",\"shareViews\"],\"type\":\"object\"},\"type\":\"array\"},\"nextPage\":{\"type\":[\"integer\",\"null\"]},\"page\":{\"minimum\":1,\"type\":\"integer\"},\"pageSize\":{\"maximum\":50,\"minimum\":1,\"type\":\"integer\"},\"total\":{\"minimum\":0,\"type\":\"integer\"}},\"required\":[\"items\",\"total\",\"nextPage\",\"page\",\"pageSize\"],\"type\":\"object\"}}},\"description\":\"Meme search results\"},\"400\":{\"description\":\"Validation error\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/memes","segments":[{"lit":"api"},{"lit":"memes"}],"select":{"exist":["exclude_template_clone","include_nsfw","official_only","owner_token","page","page_size","query","template_slug","visibility"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_meme","name__orig":"list_meme","Name":"ListMeme","name_":"list_meme","name-":"list-meme","NAME":"LIST_MEME","index$":17}, {"active":true,"entity":"list_meme","key$":"BasicListMemeFlow","kind":"basic","name":"BasicListMemeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"list_meme_ref01"}}],"index$":0}]}, 'ListMeme')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_meme_ref01_data = Object.values(setup.data.existing.list_meme)[0] as any

    // LIST
    const list_meme_ref01_ent = client.ListMeme()
    const list_meme_ref01_match: any = {}

    const list_meme_ref01_list = (await list_meme_ref01_ent.list(list_meme_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_meme/ListMemeTestData.json')

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
    ['list_meme01','list_meme02','list_meme03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_LIST_MEME_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_LIST_MEME_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_LIST_MEME_ENTID']
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
  
