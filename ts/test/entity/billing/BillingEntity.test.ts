

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


describe('BillingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Billing()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billing.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"billing","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/billing/usage","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"window_day","or":"window_day","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/billing/usage","q":{"$action":"usage","exist":["window_day","workspace_id"]},"r":{},"s":[{"lit":"api"},{"lit":"billing"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"billing","name__orig":"billing","Name":"Billing","name_":"billing","name-":"billing","NAME":"BILLING","index$":8}, {"active":true,"entity":"billing","key$":"BasicBillingFlow","kind":"basic","name":"BasicBillingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"billing_ref01","srcdatavar":"billing_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-billing_ref01"}}],"index$":0}]}, 'Billing', {"GET /api/billing/usage":{"protocol":"http","responses":{"200":{"description":"Usage snapshot"}},"parameters":[{"name":"workspaceId","in":"query","schema":{"type":"string"},"index$":0},{"name":"windowDays","in":"query","schema":{"type":"integer","minimum":1,"maximum":365},"index$":1}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let billing_ref01_data = Object.values(setup.data.existing.billing)[0] as any

    // LOAD
    const billing_ref01_ent = client.Billing()
    const billing_ref01_match_dt0: any = {}
    const billing_ref01_data_dt0 = (await billing_ref01_ent.load(billing_ref01_match_dt0)).data()
    assert(null != billing_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billing/BillingTestData.json')

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
    ['billing01','billing02','billing03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_BILLING_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_BILLING_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_BILLING_ENTID']
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
  
