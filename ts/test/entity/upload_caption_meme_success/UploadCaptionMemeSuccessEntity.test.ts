

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


describe('UploadCaptionMemeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.UploadCaptionMemeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upload_caption_meme_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"upload_caption_meme_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/memes/caption-upload","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/memes/caption-upload","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"memes"},{"lit":"caption-upload"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"upload_caption_meme_success","name__orig":"upload_caption_meme_success","Name":"UploadCaptionMemeSuccess","name_":"upload_caption_meme_success","name-":"upload-caption-meme-success","NAME":"UPLOAD_CAPTION_MEME_SUCCESS","index$":24}, {"active":true,"entity":"upload_caption_meme_success","key$":"BasicUploadCaptionMemeSuccessFlow","kind":"basic","name":"BasicUploadCaptionMemeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"upload_caption_meme_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'UploadCaptionMemeSuccess', {"POST /api/v1/memes/caption-upload":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","required":["file","captions"],"properties":{"file":{"type":"string","format":"binary"},"captions":{"type":"string","description":"JSON array of caption slot objects with text, x, y, boxWidthPct, boxHeightPct, fontSize, and alignment fields."},"title":{"type":"string","maxLength":140},"visibility":{"type":"string","enum":["private","public"]},"watermark":{"type":"string","description":"Optional JSON watermark object. Non-premium callers are forced to the default Memesio watermark; premium callers can customize enabled, text, position, and scale."}}}}}},"responses":{"201":{"description":"Uploaded meme created","content":{"application/json":{"schema":{"type":"object","required":["ok","data"],"properties":{"ok":{"type":"boolean","const":true},"data":{"type":"object","required":["slug","shareSlug","templateSlug","title","visibility","sourceImageUrl","imageUrl","canonicalImageUrl","altText","tags","apiUrl","pageUrl","ownerToken","captions","watermark"],"properties":{"slug":{"type":"string"},"shareSlug":{"type":"string"},"templateSlug":{"type":"string"},"title":{"type":"string"},"visibility":{"type":"string","enum":["private","public"]},"sourceImageUrl":{"type":"string"},"imageUrl":{"type":"string"},"canonicalImageUrl":{"type":"string"},"altText":{"type":"string"},"tags":{"type":"array","items":{"type":"string"}},"apiUrl":{"type":"string"},"pageUrl":{"type":"string"},"ownerToken":{"type":"string"},"captions":{"type":"array","items":{"type":"object","required":["text"],"properties":{"id":{"type":"string","maxLength":64},"text":{"type":"string","maxLength":300},"x":{"type":"number"},"y":{"type":"number"},"fontSize":{"type":"number"},"boxWidthPct":{"type":"number"},"boxHeightPct":{"type":"number"},"maxLines":{"type":"integer","minimum":1},"textAlign":{"type":"string","enum":["left","center","right"]},"fontFamily":{"type":"string","enum":["impact","arial","poster"]}},"x-ref":"#/components/schemas/CaptionInput"}},"watermark":{"type":"object","description":"Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.","properties":{"enabled":{"type":"boolean"},"text":{"type":"string","maxLength":64},"position":{"type":"string","enum":["top_left","top_right","bottom_left","bottom_right"]},"scale":{"type":"number","minimum":0.6,"maximum":3}},"x-ref":"#/components/schemas/FreeMemeWatermark"}}}},"x-ref":"#/components/schemas/UploadCaptionMemeSuccessResponse"}}}},"400":{"description":"Validation error"},"401":{"description":"Invalid API key when one is provided"},"415":{"description":"Unsupported upload content"},"429":{"description":"Rate limit exceeded"}},"parameters":[],"security":[{"DeveloperApiKeyAuth":[]},{"AgentApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const upload_caption_meme_success_ref01_ent = client.UploadCaptionMemeSuccess()
    let upload_caption_meme_success_ref01_data = setup.data.new.upload_caption_meme_success['upload_caption_meme_success_ref01']

    upload_caption_meme_success_ref01_data = (await upload_caption_meme_success_ref01_ent.create(upload_caption_meme_success_ref01_data)).data()
    assert(null != upload_caption_meme_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upload_caption_meme_success/UploadCaptionMemeSuccessTestData.json')

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
    ['upload_caption_meme_success01','upload_caption_meme_success02','upload_caption_meme_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_UPLOAD_CAPTION_MEME_SUCCESS_ENTID']
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
  
