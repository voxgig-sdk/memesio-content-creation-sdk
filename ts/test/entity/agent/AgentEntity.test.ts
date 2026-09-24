

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"locale":{"a":true,"h":"Locale","n":"locale","r":false,"t":"`$STRING`","key$":"locale","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":3},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"t":"`$STRING`","key$":"slug","index$":4},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":5},"stylePreset":{"a":true,"h":"Style Preset","n":"stylePreset","r":false,"t":"`$STRING`","key$":"stylePreset","index$":6},"systemPrompt":{"a":true,"h":"System Prompt","n":"systemPrompt","r":false,"t":"`$STRING`","key$":"systemPrompt","index$":7},"watermarkText":{"a":true,"h":"Watermark Text","n":"watermarkText","r":false,"t":"`$STRING`","key$":"watermarkText","index$":8},"websiteUrl":{"a":true,"h":"Website Url","n":"websiteUrl","r":false,"t":"`$STRING`","key$":"websiteUrl","index$":9}},"id":{"field":"id","name":"id"},"name":"agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/agents","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/agents","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/agents/{agentId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"agent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/agents/{agentId}","q":{"exist":["id"]},"r":{"param":{"agentId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/agents","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/agents","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/agents/{agentId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"agent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/agents/{agentId}","q":{"exist":["id"]},"r":{"param":{"agentId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"agent","name__orig":"agent","Name":"Agent","name_":"agent","name-":"agent","NAME":"AGENT","index$":0}, {"active":true,"entity":"agent","key$":"BasicAgentFlow","kind":"basic","name":"BasicAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"index$":2}]}, 'Agent', {"POST /api/v1/agents":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"slug":{"type":"string","key$":"slug"},"name":{"type":"string","minLength":1,"maxLength":120,"key$":"name"},"description":{"type":"string","maxLength":1000,"key$":"description"},"websiteUrl":{"type":"string","maxLength":2000,"key$":"websiteUrl"},"systemPrompt":{"type":"string","maxLength":2000,"key$":"systemPrompt"},"watermarkText":{"type":"string","maxLength":160,"key$":"watermarkText"},"stylePreset":{"type":"string","maxLength":80,"key$":"stylePreset"},"locale":{"type":"string","maxLength":40,"key$":"locale"}},"index$":1}}}},"responses":{"201":{"description":"Agent profile created"},"400":{"description":"Validation error"},"401":{"description":"Authentication required"},"409":{"description":"Slug conflict"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/v1/agents/{agentId}":{"protocol":"http","responses":{"200":{"description":"Agent profile payload"},"401":{"description":"Authentication required"},"404":{"description":"Agent not found"}},"parameters":[{"name":"agentId","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/v1/agents":{"protocol":"http","responses":{"200":{"description":"Agent profile list payload"},"401":{"description":"Authentication required"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"PATCH /api/v1/agents/{agentId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":120,"key$":"name"},"description":{"type":"string","maxLength":1000,"key$":"description"},"websiteUrl":{"type":"string","maxLength":2000,"key$":"websiteUrl"},"systemPrompt":{"type":"string","maxLength":2000,"key$":"systemPrompt"},"watermarkText":{"type":"string","maxLength":160,"key$":"watermarkText"},"stylePreset":{"type":"string","maxLength":80,"key$":"stylePreset"},"locale":{"type":"string","maxLength":40,"key$":"locale"},"status":{"type":"string","enum":["active","disabled"],"key$":"status"}},"index$":1}}}},"responses":{"200":{"description":"Agent profile updated"},"401":{"description":"Authentication required"},"404":{"description":"Agent not found"}},"parameters":[{"name":"agentId","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
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
  
