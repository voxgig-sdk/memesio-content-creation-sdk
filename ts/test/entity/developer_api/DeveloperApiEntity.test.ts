

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MemesioContentCreationSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('DeveloperApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.DeveloperApi()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = MemesioContentCreationSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DeveloperApi().load({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'developer_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"limit":{"a":true,"h":"Limit","n":"limit","r":false,"t":"`$NUMBER`","key$":"limit","index$":0},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":true,"t":"`$STRING`","key$":"prompt","index$":1},"trendSignals":{"a":true,"h":"Trend Signals","n":"trendSignals","r":false,"t":"`$ARRAY`","key$":"trendSignals","index$":2}},"name":"developer_api","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["limit","prompt","trendSignals"],"co":{"id":"POST /api/v1/templates/ideas","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/templates/ideas","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"templates"},{"lit":"ideas"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/memes/generate","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/memes/generate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"memes"},{"lit":"generate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"developer_api","name__orig":"developer_api","Name":"DeveloperApi","name_":"developer_api","name-":"developer-api","NAME":"DEVELOPER_API","index$":11}, {"active":true,"entity":"developer_api","key$":"BasicDeveloperApiFlow","kind":"basic","name":"BasicDeveloperApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"developer_api_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"developer_api_ref01","srcdatavar":"developer_api_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-developer_api_ref01"}}],"index$":1}]}, 'DeveloperApi', {"POST /api/v1/templates/ideas":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["prompt"],"properties":{"prompt":{"type":"string","minLength":1,"key$":"prompt"},"trendSignals":{"type":"array","items":{"type":"string"},"maxItems":20,"key$":"trendSignals"},"limit":{"type":"number","minimum":1,"maximum":60,"key$":"limit"}},"index$":1}}}},"parameters":[]},"GET /api/v1/memes/generate":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const developer_api_ref01_ent = client.DeveloperApi()
    let developer_api_ref01_data = setup.data.new.developer_api['developer_api_ref01']

    developer_api_ref01_data = (await developer_api_ref01_ent.create(developer_api_ref01_data)).data()
    assert(null != developer_api_ref01_data)


    // LOAD
    const developer_api_ref01_match_dt0: any = {}
    const developer_api_ref01_data_dt0 = (await developer_api_ref01_ent.load(developer_api_ref01_match_dt0)).data()
    assert(null != developer_api_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/developer_api/DeveloperApiTestData.json')

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
    ['developer_api01','developer_api02','developer_api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_DEVELOPER_API_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_DEVELOPER_API_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_DEVELOPER_API_ENTID']
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
  
