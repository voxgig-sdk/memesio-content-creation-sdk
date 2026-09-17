

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


describe('AiJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.AiJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"action","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"actorId","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"afterState","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"attempts","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"beforeState","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"brushEdits","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"capability","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"celebrityConfidence","req":false,"type":"`$NUMBER`","index$":7},{"active":true,"name":"consentAttested","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"format":"date-time","name":"createdAt","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"detectedFaceCount","req":true,"type":"`$NUMBER`","index$":10},{"active":true,"name":"edgeRefinement","req":false,"type":"`$NUMBER`","index$":11},{"active":true,"name":"frameTimeMs","req":false,"type":"`$NUMBER`","index$":12},{"active":true,"name":"height","req":true,"type":"`$NUMBER`","index$":13},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":14},{"active":true,"name":"input","req":false,"type":"`$OBJECT`","index$":15},{"active":true,"name":"layerId","req":true,"type":"`$STRING`","index$":16},{"active":true,"name":"layerType","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"maxAttempts","req":false,"type":"`$INTEGER`","index$":18},{"active":true,"name":"maxFaces","req":false,"type":"`$NUMBER`","index$":19},{"active":true,"name":"mediaType","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"metadata","req":false,"type":"`$OBJECT`","index$":21},{"active":true,"name":"nsfwScore","req":false,"type":"`$NUMBER`","index$":22},{"active":true,"name":"projectId","req":true,"type":"`$STRING`","index$":23},{"active":true,"name":"runAfterMs","req":false,"type":"`$INTEGER`","index$":24},{"active":true,"name":"sourceAssetUrl","req":true,"type":"`$STRING`","index$":25},{"active":true,"name":"sourceFaceIndex","req":false,"type":"`$NUMBER`","index$":26},{"active":true,"name":"sourceImageUrl","req":true,"type":"`$STRING`","index$":27},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":28},{"active":true,"name":"targetAssetUrl","req":true,"type":"`$STRING`","index$":29},{"active":true,"name":"targetFaceIndex","req":false,"type":"`$NUMBER`","index$":30},{"active":true,"name":"timeoutMs","req":false,"type":"`$INTEGER`","index$":31},{"active":true,"name":"traceId","req":false,"type":"`$STRING`","index$":32},{"active":true,"format":"date-time","name":"updatedAt","req":false,"type":"`$STRING`","index$":33},{"active":true,"name":"versionId","req":false,"type":"`$STRING`","index$":34},{"active":true,"name":"width","req":true,"type":"`$NUMBER`","index$":35},{"active":true,"name":"workspaceId","req":false,"type":"`$STRING`","index$":36}],"id":{"field":"id","name":"id"},"name":"ai_job","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"job_id","orig":"job_id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /api/ai/jobs/{jobId}/cancel","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"jobId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"reason\":{\"maxLength\":300,\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"200\":{\"description\":\"Canceled\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/jobs/{jobId}/cancel","rename":{"param":{"jobId":"job_id"}},"segments":[{"lit":"api"},{"lit":"ai"},{"lit":"jobs"},{"var":"job_id"},{"lit":"cancel"}],"select":{"$action":"cancel","exist":["job_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"job_id","orig":"job_id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /api/ai/jobs/{jobId}/complete","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"jobId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"estimatedCostUsd\":{\"minimum\":0,\"type\":\"number\"},\"output\":{\"additionalProperties\":true,\"type\":\"object\"},\"providerId\":{\"type\":\"string\"},\"workerId\":{\"type\":\"string\"}},\"required\":[\"workerId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Completed job\"},\"404\":{\"description\":\"Not found or not running\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/jobs/{jobId}/complete","rename":{"param":{"jobId":"job_id"}},"segments":[{"lit":"api"},{"lit":"ai"},{"lit":"jobs"},{"var":"job_id"},{"lit":"complete"}],"select":{"$action":"complete","exist":["job_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"POST /api/ai/background-remove","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"brushEdits\":{\"items\":{\"properties\":{\"intensity\":{\"maximum\":1,\"minimum\":0.1,\"type\":\"number\"},\"mode\":{\"enum\":[\"add\",\"erase\"],\"type\":\"string\"},\"radius\":{\"minimum\":1,\"type\":\"number\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"mode\",\"x\",\"y\",\"radius\"],\"type\":\"object\"},\"type\":\"array\"},\"edgeRefinement\":{\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"frameTimeMs\":{\"minimum\":0,\"type\":\"number\"},\"height\":{\"minimum\":1,\"type\":\"number\"},\"mediaType\":{\"enum\":[\"image\",\"video_frame\"],\"type\":\"string\"},\"sourceAssetUrl\":{\"type\":\"string\"},\"width\":{\"minimum\":1,\"type\":\"number\"}},\"required\":[\"sourceAssetUrl\",\"width\",\"height\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Background removal result and mask stats\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/background-remove","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"background-remove"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/ai/edit-history","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"record\",\"rollback\"],\"type\":\"string\"},\"actorId\":{\"type\":\"string\"},\"afterState\":{\"additionalProperties\":true,\"type\":\"object\"},\"beforeState\":{\"additionalProperties\":true,\"type\":\"object\"},\"layerId\":{\"type\":\"string\"},\"layerType\":{\"enum\":[\"face_swap\",\"background_remove\",\"caption\"],\"type\":\"string\"},\"metadata\":{\"additionalProperties\":true,\"type\":\"object\"},\"projectId\":{\"type\":\"string\"},\"versionId\":{\"type\":\"string\"}},\"required\":[\"action\",\"projectId\",\"layerId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Rollback payload\"},\"201\":{\"description\":\"Version recorded\"},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Version not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/edit-history","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"edit-history"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"POST /api/ai/face-swap","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"actorId\":{\"type\":\"string\"},\"celebrityConfidence\":{\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"consentAttested\":{\"type\":\"boolean\"},\"detectedFaceCount\":{\"minimum\":1,\"type\":\"number\"},\"frameTimeMs\":{\"minimum\":0,\"type\":\"number\"},\"height\":{\"minimum\":1,\"type\":\"number\"},\"mediaType\":{\"enum\":[\"image\",\"video_frame\"],\"type\":\"string\"},\"nsfwScore\":{\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"sourceAssetUrl\":{\"type\":\"string\"},\"sourceFaceIndex\":{\"minimum\":0,\"type\":\"number\"},\"targetAssetUrl\":{\"type\":\"string\"},\"targetFaceIndex\":{\"minimum\":0,\"type\":\"number\"},\"width\":{\"minimum\":1,\"type\":\"number\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"sourceAssetUrl\",\"targetAssetUrl\",\"mediaType\",\"width\",\"height\",\"detectedFaceCount\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Real-time face swap completed\"},\"202\":{\"description\":\"Preview fallback served and async job queued\"},\"403\":{\"description\":\"Blocked by content policy\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/face-swap","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"face-swap"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4},{"active":true,"args":{},"contract":{"id":"POST /api/ai/face-targets","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"maxFaces\":{\"maximum\":8,\"minimum\":1,\"type\":\"number\"},\"sourceImageUrl\":{\"type\":\"string\"}},\"required\":[\"sourceImageUrl\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Face target detection payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/face-targets","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"face-targets"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5},{"active":true,"args":{},"contract":{"id":"POST /api/ai/jobs","json":"{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"actorId\":{\"type\":\"string\"},\"capability\":{\"enum\":[\"face_swap\",\"background_remove\",\"caption_generate\"],\"type\":\"string\"},\"input\":{\"additionalProperties\":true,\"type\":\"object\"},\"maxAttempts\":{\"maximum\":10,\"minimum\":1,\"type\":\"integer\"},\"runAfterMs\":{\"minimum\":0,\"type\":\"integer\"},\"timeoutMs\":{\"maximum\":300000,\"minimum\":1000,\"type\":\"integer\"},\"traceId\":{\"pattern\":\"^[a-f0-9]{32}$\",\"type\":\"string\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"capability\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"AI job created\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/ai/jobs","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"jobs"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"from_version_id","orig":"from_version_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"layer_id","orig":"layer_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"mode","orig":"mode","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"to_version_id","orig":"to_version_id","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /api/ai/edit-history","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"layerId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mode\",\"schema\":{\"enum\":[\"list\",\"compare\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"maximum\":500,\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"fromVersionId\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"toVersionId\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Layer history payload\"},\"404\":{\"description\":\"Versions not found for comparison\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/edit-history","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"edit-history"}],"select":{"exist":["from_version_id","layer_id","limit","mode","project_id","to_version_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/ai/jobs","json":"{\"parameters\":[{\"in\":\"query\",\"name\":\"status\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"maximum\":50,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"AI job list\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/jobs","segments":[{"lit":"api"},{"lit":"ai"},{"lit":"jobs"}],"select":{"exist":["page","page_size","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"job_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/ai/jobs/{jobId}","json":"{\"parameters\":[{\"in\":\"path\",\"name\":\"jobId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attempts\":{\"type\":\"integer\"},\"capability\":{\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"maxAttempts\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"timeoutMs\":{\"type\":\"integer\"},\"traceId\":{\"pattern\":\"^[a-f0-9]{32}$\",\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"status\",\"capability\"],\"type\":\"object\"}}},\"description\":\"AI job details\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/ai/jobs/{jobId}","rename":{"param":{"jobId":"id"}},"segments":[{"lit":"api"},{"lit":"ai"},{"lit":"jobs"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["job"]]},"key$":"ai_job","name__orig":"ai_job","Name":"AiJob","name_":"ai_job","name-":"ai-job","NAME":"AI_JOB","index$":3}, {"active":true,"entity":"ai_job","key$":"BasicAiJobFlow","kind":"basic","name":"BasicAiJobFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ai_job_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"ai_job_ref01","srcdatavar":"ai_job_ref01_data","suffix":"_dt0"},"match":{"id":"ai_job01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_job_ref01"}}],"index$":1}]}, 'AiJob')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_job_ref01_ent = client.AiJob()
    let ai_job_ref01_data = setup.data.new.ai_job['ai_job_ref01']

    ai_job_ref01_data = (await ai_job_ref01_ent.create(ai_job_ref01_data)).data()
    assert(null != ai_job_ref01_data.id)


    // LOAD
    const ai_job_ref01_match_dt0: any = {}
    ai_job_ref01_match_dt0.id = ai_job_ref01_data.id
    const ai_job_ref01_data_dt0 = (await ai_job_ref01_ent.load(ai_job_ref01_match_dt0)).data()
    assert(ai_job_ref01_data_dt0.id === ai_job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_job/AiJobTestData.json')

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
    ['ai_job01','ai_job02','ai_job03','job01','job02','job03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID']
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
  
