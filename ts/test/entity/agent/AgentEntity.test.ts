

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


describe('AgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Agent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"locale","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"slug","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"stylePreset","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"systemPrompt","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"watermarkText","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"websiteUrl","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"agent","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v1/agents","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"maxLength\":1000,\"type\":\"string\"},\"locale\":{\"maxLength\":40,\"type\":\"string\"},\"name\":{\"maxLength\":120,\"minLength\":1,\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"stylePreset\":{\"maxLength\":80,\"type\":\"string\"},\"systemPrompt\":{\"maxLength\":2000,\"type\":\"string\"},\"watermarkText\":{\"maxLength\":160,\"type\":\"string\"},\"websiteUrl\":{\"maxLength\":2000,\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Agent profile created\"},\"400\":{\"description\":\"Validation error\"},\"401\":{\"description\":\"Authentication required\"},\"409\":{\"description\":\"Slug conflict\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/agents","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"agent_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/agents/{agentId}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Agent profile payload\"},\"401\":{\"description\":\"Authentication required\"},\"404\":{\"description\":\"Agent not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/agents/{agentId}","rename":{"param":{"agentId":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /api/v1/agents","json":"{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Agent profile list payload\"},\"401\":{\"description\":\"Authentication required\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/agents","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"agent_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /api/v1/agents/{agentId}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"maxLength\":1000,\"type\":\"string\"},\"locale\":{\"maxLength\":40,\"type\":\"string\"},\"name\":{\"maxLength\":120,\"type\":\"string\"},\"status\":{\"enum\":[\"active\",\"disabled\"],\"type\":\"string\"},\"stylePreset\":{\"maxLength\":80,\"type\":\"string\"},\"systemPrompt\":{\"maxLength\":2000,\"type\":\"string\"},\"watermarkText\":{\"maxLength\":160,\"type\":\"string\"},\"websiteUrl\":{\"maxLength\":2000,\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Agent profile updated\"},\"401\":{\"description\":\"Authentication required\"},\"404\":{\"description\":\"Agent not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/api/v1/agents/{agentId}","rename":{"param":{"agentId":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"agent","name__orig":"agent","Name":"Agent","name_":"agent","name-":"agent","NAME":"AGENT","index$":0}, {"active":true,"entity":"agent","key$":"BasicAgentFlow","kind":"basic","name":"BasicAgentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"agent_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_up0","textfield":"description"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"index$":2}]}, 'Agent')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const agent_ref01_ent = client.Agent()
    let agent_ref01_data = setup.data.new.agent['agent_ref01']

    agent_ref01_data = (await agent_ref01_ent.create(agent_ref01_data)).data()
    assert(null != agent_ref01_data.id)


    // UPDATE
    const agent_ref01_data_up0: any = {}
    agent_ref01_data_up0.id = agent_ref01_data.id

    const agent_ref01_markdef_up0 = { name: 'description', value: 'Mark01-agent_ref01_' + setup.now }
    ;(agent_ref01_data_up0 as any)[agent_ref01_markdef_up0.name] = agent_ref01_markdef_up0.value

    const agent_ref01_resdata_up0 = (await agent_ref01_ent.update(agent_ref01_data_up0)).data()
    assert(agent_ref01_resdata_up0.id === agent_ref01_data_up0.id)

    assert((agent_ref01_resdata_up0 as any)[agent_ref01_markdef_up0.name] === agent_ref01_markdef_up0.value)


    // LOAD
    const agent_ref01_match_dt0: any = {}
    agent_ref01_match_dt0.id = agent_ref01_data.id
    const agent_ref01_data_dt0 = (await agent_ref01_ent.load(agent_ref01_match_dt0)).data()
    assert(agent_ref01_data_dt0.id === agent_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent/AgentTestData.json')

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
    ['agent01','agent02','agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AGENT_ENTID']
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
  
