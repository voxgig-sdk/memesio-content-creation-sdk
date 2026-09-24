

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


describe('AnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Analytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'analytics.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"analytics","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/analytics/experiments/templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"template_id","or":"template_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/analytics/experiments/templates","q":{"exist":["template_id"]},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"experiments"},{"lit":"templates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/analytics/dashboards/backend-reliability","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"window_hour","or":"window_hour","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/analytics/dashboards/backend-reliability","q":{"exist":["window_hour"]},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"dashboards"},{"lit":"backend-reliability"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/analytics/alerts/backend","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/analytics/alerts/backend","q":{},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"alerts"},{"lit":"backend"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/analytics/anomalies/ai","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/analytics/anomalies/ai","q":{},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"anomalies"},{"lit":"ai"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/analytics/dashboards/activation-retention","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/analytics/dashboards/activation-retention","q":{},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"dashboards"},{"lit":"activation-retention"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /api/analytics/dashboards/feature-adoption","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/analytics/dashboards/feature-adoption","q":{},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"dashboards"},{"lit":"feature-adoption"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /api/analytics/metric-dictionary","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/analytics/metric-dictionary","q":{"$action":"metric_dictionary"},"r":{},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"metric-dictionary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"analytics","name__orig":"analytics","Name":"Analytics","name_":"analytics","name-":"analytics","NAME":"ANALYTICS","index$":6}, {"active":true,"entity":"analytics","key$":"BasicAnalyticsFlow","kind":"basic","name":"BasicAnalyticsFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"analytics_ref01","srcdatavar":"analytics_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-analytics_ref01"}}],"index$":0}]}, 'Analytics', {"GET /api/analytics/experiments/templates":{"protocol":"http","responses":{"200":{"description":"Pricing experiment templates payload"}},"parameters":[{"name":"templateId","in":"query","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/dashboards/backend-reliability":{"protocol":"http","responses":{"200":{"description":"Backend reliability dashboard + metrics snapshot payload"}},"parameters":[{"name":"windowHours","in":"query","schema":{"type":"integer","minimum":1,"maximum":168},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/alerts/backend":{"protocol":"http","responses":{"200":{"description":"Backend alerting summary payload"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/anomalies/ai":{"protocol":"http","responses":{"200":{"description":"AI anomaly detection summary"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/dashboards/activation-retention":{"protocol":"http","responses":{"200":{"description":"Dashboard spec payload"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/dashboards/feature-adoption":{"protocol":"http","responses":{"200":{"description":"Dashboard spec payload"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/analytics/metric-dictionary":{"protocol":"http","responses":{"200":{"description":"Metric dictionary payload"}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let analytics_ref01_data = Object.values(setup.data.existing.analytics)[0] as any

    // LOAD
    const analytics_ref01_ent = client.Analytics()
    const analytics_ref01_match_dt0: any = {}
    const analytics_ref01_data_dt0 = (await analytics_ref01_ent.load(analytics_ref01_match_dt0)).data()
    assert(null != analytics_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/analytics/AnalyticsTestData.json')

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
    ['analytics01','analytics02','analytics03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_ANALYTICS_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_ANALYTICS_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_ANALYTICS_ENTID']
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
  
