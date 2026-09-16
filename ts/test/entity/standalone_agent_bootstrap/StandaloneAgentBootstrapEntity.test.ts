

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


describe('StandaloneAgentBootstrapEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.StandaloneAgentBootstrap()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'standalone_agent_bootstrap.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"handle","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"locale","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"stylePreset","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"systemPrompt","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"watermarkText","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"websiteUrl","req":false,"type":"`$STRING`","index$":7}],"name":"standalone_agent_bootstrap","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v1/agents/bootstrap","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"maxLength\":1000,\"type\":\"string\"},\"handle\":{\"maxLength\":80,\"minLength\":3,\"type\":\"string\"},\"locale\":{\"maxLength\":40,\"type\":\"string\"},\"name\":{\"maxLength\":120,\"minLength\":1,\"type\":\"string\"},\"stylePreset\":{\"maxLength\":80,\"type\":\"string\"},\"systemPrompt\":{\"maxLength\":2000,\"type\":\"string\"},\"watermarkText\":{\"maxLength\":160,\"type\":\"string\"},\"websiteUrl\":{\"maxLength\":2000,\"type\":\"string\"}},\"required\":[\"handle\",\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountType\":{\"enum\":[\"standalone_agent\",\"standalone_agent_compat\"],\"type\":\"string\"},\"agent\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"locale\":{\"type\":[\"string\",\"null\"]},\"name\":{\"type\":\"string\"},\"premiumStatus\":{\"enum\":[\"pending\",\"approved\",\"denied\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"status\":{\"enum\":[\"active\",\"disabled\"],\"type\":\"string\"},\"stylePreset\":{\"type\":[\"string\",\"null\"]},\"systemPrompt\":{\"type\":[\"string\",\"null\"]},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"watermarkText\":{\"type\":[\"string\",\"null\"]},\"websiteUrl\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"id\",\"slug\",\"name\",\"description\",\"websiteUrl\",\"systemPrompt\",\"watermarkText\",\"stylePreset\",\"locale\",\"premiumStatus\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"},\"key\":{\"allOf\":[{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"keyPrefix\":{\"type\":\"string\"},\"revokedAt\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"scopes\":{\"items\":{\"enum\":[\"generate\",\"publish\",\"analytics\",\"admin\"],\"type\":\"string\"},\"type\":\"array\"},\"status\":{\"enum\":[\"active\",\"revoked\"],\"type\":\"string\"}},\"required\":[\"id\",\"keyPrefix\",\"scopes\",\"status\",\"createdAt\",\"revokedAt\"],\"type\":\"object\"},{\"properties\":{\"authMode\":{\"enum\":[\"agent\",\"developer\"],\"type\":\"string\"},\"plaintextKey\":{\"type\":\"string\"}},\"required\":[\"plaintextKey\",\"authMode\"],\"type\":\"object\"}]},\"ok\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"ok\",\"accountType\",\"agent\",\"key\"],\"type\":\"object\"}}},\"description\":\"Standalone agent account created\"},\"400\":{\"description\":\"Validation error\"},\"409\":{\"description\":\"Handle conflict\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"503\":{\"description\":\"Agent infra schema unavailable\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/agents/bootstrap","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"lit":"bootstrap"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v1/agents/create-agent","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"maxLength\":1000,\"type\":\"string\"},\"handle\":{\"maxLength\":80,\"minLength\":3,\"type\":\"string\"},\"locale\":{\"maxLength\":40,\"type\":\"string\"},\"name\":{\"maxLength\":120,\"minLength\":1,\"type\":\"string\"},\"stylePreset\":{\"maxLength\":80,\"type\":\"string\"},\"systemPrompt\":{\"maxLength\":2000,\"type\":\"string\"},\"watermarkText\":{\"maxLength\":160,\"type\":\"string\"},\"websiteUrl\":{\"maxLength\":2000,\"type\":\"string\"}},\"required\":[\"handle\",\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountType\":{\"enum\":[\"standalone_agent\",\"standalone_agent_compat\"],\"type\":\"string\"},\"agent\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"locale\":{\"type\":[\"string\",\"null\"]},\"name\":{\"type\":\"string\"},\"premiumStatus\":{\"enum\":[\"pending\",\"approved\",\"denied\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"status\":{\"enum\":[\"active\",\"disabled\"],\"type\":\"string\"},\"stylePreset\":{\"type\":[\"string\",\"null\"]},\"systemPrompt\":{\"type\":[\"string\",\"null\"]},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"watermarkText\":{\"type\":[\"string\",\"null\"]},\"websiteUrl\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"id\",\"slug\",\"name\",\"description\",\"websiteUrl\",\"systemPrompt\",\"watermarkText\",\"stylePreset\",\"locale\",\"premiumStatus\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"},\"key\":{\"allOf\":[{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"keyPrefix\":{\"type\":\"string\"},\"revokedAt\":{\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"scopes\":{\"items\":{\"enum\":[\"generate\",\"publish\",\"analytics\",\"admin\"],\"type\":\"string\"},\"type\":\"array\"},\"status\":{\"enum\":[\"active\",\"revoked\"],\"type\":\"string\"}},\"required\":[\"id\",\"keyPrefix\",\"scopes\",\"status\",\"createdAt\",\"revokedAt\"],\"type\":\"object\"},{\"properties\":{\"authMode\":{\"enum\":[\"agent\",\"developer\"],\"type\":\"string\"},\"plaintextKey\":{\"type\":\"string\"}},\"required\":[\"plaintextKey\",\"authMode\"],\"type\":\"object\"}]},\"ok\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"ok\",\"accountType\",\"agent\",\"key\"],\"type\":\"object\"}}},\"description\":\"Standalone agent account created\"},\"400\":{\"description\":\"Validation error\"},\"409\":{\"description\":\"Handle conflict\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"503\":{\"description\":\"Agent infra schema unavailable\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/agents/create-agent","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"agents"},{"lit":"create-agent"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"standalone_agent_bootstrap","name__orig":"standalone_agent_bootstrap","Name":"StandaloneAgentBootstrap","name_":"standalone_agent_bootstrap","name-":"standalone-agent-bootstrap","NAME":"STANDALONE_AGENT_BOOTSTRAP","index$":21}, {"active":true,"entity":"standalone_agent_bootstrap","key$":"BasicStandaloneAgentBootstrapFlow","kind":"basic","name":"BasicStandaloneAgentBootstrapFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"standalone_agent_bootstrap_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'StandaloneAgentBootstrap')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const standalone_agent_bootstrap_ref01_ent = client.StandaloneAgentBootstrap()
    let standalone_agent_bootstrap_ref01_data = setup.data.new.standalone_agent_bootstrap['standalone_agent_bootstrap_ref01']

    standalone_agent_bootstrap_ref01_data = (await standalone_agent_bootstrap_ref01_ent.create(standalone_agent_bootstrap_ref01_data)).data()
    assert(null != standalone_agent_bootstrap_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/standalone_agent_bootstrap/StandaloneAgentBootstrapTestData.json')

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
    ['standalone_agent_bootstrap01','standalone_agent_bootstrap02','standalone_agent_bootstrap03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID']
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
  
