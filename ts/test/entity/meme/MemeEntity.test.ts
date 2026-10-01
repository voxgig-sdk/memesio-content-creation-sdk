

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


describe('MemeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.Meme()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'meme.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"altText":{"a":true,"h":"Alt Text","n":"altText","r":true,"t":"`$STRING`","key$":"altText","index$":0},"canonicalImageUrl":{"a":true,"h":"Canonical Image Url","n":"canonicalImageUrl","r":true,"t":"`$STRING`","key$":"canonicalImageUrl","index$":1},"canvas":{"a":true,"h":"Canvas","n":"canvas","r":true,"t":"`$OBJECT`","key$":"canvas","index$":2},"captions":{"a":true,"h":"Captions","n":"captions","r":true,"t":"`$ARRAY`","key$":"captions","index$":3},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":4},"generationRunId":{"a":true,"h":"Generation Run Id","n":"generationRunId","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"generationRunId","index$":5},"generationVariantId":{"a":true,"h":"Generation Variant Id","n":"generationVariantId","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"generationVariantId","index$":6},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":7},"imageDataUrl":{"a":true,"h":"Image Data Url","n":"imageDataUrl","r":true,"t":"`$STRING`","key$":"imageDataUrl","index$":8},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":true,"t":"`$STRING`","key$":"imageUrl","index$":9},"nsfwStatus":{"a":true,"h":"Nsfw Status","n":"nsfwStatus","r":true,"t":"`$STRING`","key$":"nsfwStatus","index$":10},"overlays":{"a":true,"h":"Overlays","n":"overlays","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"overlays","index$":11},"shareSlug":{"a":true,"h":"Share Slug","n":"shareSlug","r":true,"t":"`$STRING`","key$":"shareSlug","index$":12},"shareUrl":{"a":true,"h":"Share Url","n":"shareUrl","r":true,"t":"`$STRING`","key$":"shareUrl","index$":13},"shareViews":{"a":true,"h":"Share Views","n":"shareViews","r":true,"t":"`$INTEGER`","key$":"shareViews","index$":14},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":15},"sourceImageUrl":{"a":true,"h":"Source Image Url","n":"sourceImageUrl","r":true,"t":"`$STRING`","key$":"sourceImageUrl","index$":16},"tags":{"a":true,"h":"Tags","n":"tags","r":true,"t":"`$ARRAY`","key$":"tags","index$":17},"templateSlug":{"a":true,"h":"Template Slug","n":"templateSlug","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"templateSlug","index$":18},"title":{"a":true,"h":"Title","n":"title","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"title","index$":19},"visibility":{"a":true,"h":"Visibility","n":"visibility","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"visibility","index$":20},"watermark":{"a":true,"h":"Watermark","n":"watermark","r":true,"t":"`$OBJECT`","key$":"watermark","index$":21}},"id":{"field":"id","name":"id"},"name":"meme","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/memes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/memes","q":{},"r":{},"s":[{"lit":"api"},{"lit":"memes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/memes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"exclude_template_clone","or":"excludeTemplateClones","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"include_nsfw","or":"includeNsfw","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"official_only","or":"officialOnly","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"owner_token","or":"ownerToken","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"page_size","or":"pageSize","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"template_slug","or":"templateSlug","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"visibility","or":"visibility","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/api/memes","q":{"exist":["exclude_template_clone","include_nsfw","official_only","owner_token","page","page_size","query","template_slug","visibility"]},"r":{},"s":[{"lit":"api"},{"lit":"memes"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/memes/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"owner_token","or":"ownerToken","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/memes/{slug}","q":{"exist":["id","owner_token"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"api"},{"lit":"memes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/memes/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/memes/{slug}","q":{"exist":["id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"api"},{"lit":"memes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"meme","name__orig":"meme","Name":"Meme","name_":"meme","name-":"meme","NAME":"MEME","index$":17}, {"active":true,"entity":"meme","key$":"BasicMemeFlow","kind":"basic","name":"BasicMemeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"meme_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"meme_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"meme_ref01","srcdatavar":"meme_ref01_data","suffix":"_dt0"},"m":{"id":"meme01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-meme_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"meme_ref01","suffix":"_rm0"},"m":{"id":"meme01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"meme_ref01"}}],"index$":4}]}, 'Meme', {"POST /api/memes":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["sourceImageUrl","captions","imageDataUrl"],"properties":{"templateSlug":{"type":"string","key$":"templateSlug"},"sourceImageUrl":{"type":"string","key$":"sourceImageUrl"},"captions":{"type":"array","items":{"type":"object","required":["id","text","x","y","fontSize"],"properties":{"id":{"type":"string"},"text":{"type":"string"},"x":{"type":"number"},"y":{"type":"number"},"fontSize":{"type":"number"},"rotationDeg":{"type":"number"},"hidden":{"type":"boolean"},"locked":{"type":"boolean"},"boxWidthPct":{"type":"number"},"boxHeightPct":{"type":"number"},"paddingPct":{"type":"number"},"maxLines":{"type":"integer"},"lineHeight":{"type":"number"},"backgroundEnabled":{"type":"boolean"},"backgroundColor":{"type":"string"},"backgroundOpacity":{"type":"number"},"letterSpacingEm":{"type":"number"},"shadowStrength":{"type":"number"},"color":{"type":"string"},"stroke":{"type":"string"},"fontFamily":{"enum":[],"type":"string"},"textAlign":{"enum":[],"type":"string"},"semanticRole":{"enum":[],"type":"string"},"preferredCase":{"enum":[],"type":"string"},"exampleText":{"type":"string"},"recommendedWordsMin":{"minimum":1,"type":"integer"},"recommendedWordsMax":{"minimum":1,"type":"integer"},"recommendedCharsMin":{"minimum":1,"type":"integer"},"recommendedCharsMax":{"minimum":1,"type":"integer"}},"x-ref":"#/components/schemas/MemeCaption"},"key$":"captions"},"overlays":{"type":"array","items":{"type":"object","required":["id","label","imageUrl","x","y","widthPercent","rotationDeg","opacity"],"properties":{"id":{"type":"string"},"label":{"type":"string"},"imageUrl":{"type":"string"},"sourceImageUrl":{"type":"string"},"x":{"type":"number"},"y":{"type":"number"},"widthPercent":{"type":"number"},"rotationDeg":{"type":"number"},"opacity":{"type":"number"},"hidden":{"type":"boolean"},"locked":{"type":"boolean"},"flippedX":{"type":"boolean"},"backgroundRemoved":{"type":"boolean"}},"x-ref":"#/components/schemas/MemeOverlayImage"},"key$":"overlays"},"imageDataUrl":{"type":"string","key$":"imageDataUrl"},"visibility":{"type":"string","enum":["public","private"],"key$":"visibility"},"title":{"type":"string","maxLength":140,"key$":"title"},"canvas":{"type":"object","required":["aspectRatio","focusX","focusY","zoomPercent","crop","spacing","guides","sourceAdjustments","layerOrder","transform"],"properties":{"aspectRatio":{"type":"string","enum":["original","1:1","4:5","16:9"]},"focusX":{"type":"number"},"focusY":{"type":"number"},"zoomPercent":{"type":"number"},"crop":{"type":"object","required":["x","y","width","height"],"properties":{"x":{},"y":{},"width":{},"height":{}}},"spacing":{"type":"object","additionalProperties":true},"guides":{"type":"object","additionalProperties":true},"sourceAdjustments":{"type":"object","additionalProperties":true},"layerOrder":{"type":"array","items":{"type":"string"}},"transform":{"type":"object","additionalProperties":true}},"x-ref":"#/components/schemas/MemeCanvasConfig","key$":"canvas"},"watermark":{"type":"object","required":["enabled","text","position","scale"],"properties":{"enabled":{"type":"boolean"},"text":{"type":"string"},"position":{"type":"string","enum":["top_left","top_right","bottom_left","bottom_right"]},"scale":{"type":"number"}},"x-ref":"#/components/schemas/MemeWatermarkConfig","key$":"watermark"},"generationRunId":{"type":["string","null"],"key$":"generationRunId"},"generationVariantId":{"type":["string","null"],"key$":"generationVariantId"}},"index$":1}}}},"parameters":[]},"GET /api/memes":{"protocol":"http","parameters":[{"name":"query","in":"query","schema":{"type":"string"},"index$":0},{"name":"templateSlug","in":"query","schema":{"type":"string"},"index$":1},{"name":"visibility","in":"query","schema":{"type":"string","enum":["public","private","all"]},"index$":2},{"name":"ownerToken","in":"query","schema":{"type":"string","format":"uuid"},"index$":3},{"name":"officialOnly","in":"query","schema":{"type":"boolean"},"index$":4},{"name":"excludeTemplateClones","in":"query","schema":{"type":"boolean"},"index$":5},{"name":"includeNsfw","in":"query","schema":{"type":"boolean"},"index$":6},{"name":"page","in":"query","schema":{"type":"integer","minimum":1},"index$":7},{"name":"pageSize","in":"query","schema":{"type":"integer","minimum":1,"maximum":50},"index$":8}]},"GET /api/memes/{slug}":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"ownerToken","in":"query","schema":{"type":"string","format":"uuid"},"index$":1}]},"DELETE /api/memes/{slug}":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const meme_ref01_ent = client.Meme()
    let meme_ref01_data = setup.data.new.meme['meme_ref01']

    meme_ref01_data = (await meme_ref01_ent.create(meme_ref01_data)).data()
    assert(null != meme_ref01_data.id)


    // LIST
    const meme_ref01_match: any = {}

    const meme_ref01_list = (await meme_ref01_ent.list(meme_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(meme_ref01_list, { id: meme_ref01_data.id })))


    // LOAD
    const meme_ref01_match_dt0: any = {}
    meme_ref01_match_dt0.id = meme_ref01_data.id
    const meme_ref01_data_dt0 = (await meme_ref01_ent.load(meme_ref01_match_dt0)).data()
    assert(meme_ref01_data_dt0.id === meme_ref01_data.id)


    // REMOVE
    const meme_ref01_match_rm0: any = { id: meme_ref01_data.id }
    await meme_ref01_ent.remove(meme_ref01_match_rm0)
  

    // LIST
    const meme_ref01_match_rt0: any = {}

    const meme_ref01_list_rt0 = (await meme_ref01_ent.list(meme_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(meme_ref01_list_rt0, { id: meme_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/meme/MemeTestData.json')

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
    ['meme01','meme02','meme03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID']
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
  
