

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


describe('CollaborationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Collaboration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'collaboration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"authorId","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"message","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"projectId","req":true,"type":"`$STRING`","index$":2}],"name":"collaboration","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/collab/comments","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"authorId\":{\"type\":\"string\"},\"message\":{\"maxLength\":1500,\"minLength\":1,\"type\":\"string\"},\"projectId\":{\"type\":\"string\"}},\"required\":[\"projectId\",\"message\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Comment created\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/collab/comments","segments":[{"lit":"api"},{"lit":"collab"},{"lit":"comments"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/collab/comments","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Comment list\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/collab/comments","segments":[{"lit":"api"},{"lit":"collab"},{"lit":"comments"}],"select":{"exist":["page","page_size","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"collaboration","name__orig":"collaboration","Name":"Collaboration","name_":"collaboration","name-":"collaboration","NAME":"COLLABORATION","index$":9}, {"active":true,"entity":"collaboration","key$":"BasicCollaborationFlow","kind":"basic","name":"BasicCollaborationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"collaboration_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"collaboration_ref01","srcdatavar":"collaboration_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-collaboration_ref01"}}],"index$":1}]}, 'Collaboration')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const collaboration_ref01_ent = client.Collaboration()
    let collaboration_ref01_data = setup.data.new.collaboration['collaboration_ref01']

    collaboration_ref01_data = (await collaboration_ref01_ent.create(collaboration_ref01_data)).data()
    assert(null != collaboration_ref01_data)


    // LOAD
    const collaboration_ref01_match_dt0: any = {}
    const collaboration_ref01_data_dt0 = (await collaboration_ref01_ent.load(collaboration_ref01_match_dt0)).data()
    assert(null != collaboration_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/collaboration/CollaborationTestData.json')

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
    ['collaboration01','collaboration02','collaboration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_COLLABORATION_ENTID']
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
  
