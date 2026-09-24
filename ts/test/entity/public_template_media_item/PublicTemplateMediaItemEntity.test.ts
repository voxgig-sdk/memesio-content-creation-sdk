

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


describe('PublicTemplateMediaItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.PublicTemplateMediaItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'public_template_media_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"animated":{"a":true,"h":"Animated","n":"animated","r":false,"t":"`$BOOLEAN`","key$":"animated","index$":0},"assetBytes":{"a":true,"h":"Asset Bytes","n":"assetBytes","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"assetBytes","index$":1},"assetContentType":{"a":true,"h":"Asset Content Type","n":"assetContentType","r":false,"t":"`$STRING`","key$":"assetContentType","index$":2},"boxCount":{"a":true,"h":"Box Count","n":"boxCount","r":false,"t":"`$INTEGER`","key$":"boxCount","index$":3},"captionCount":{"a":true,"h":"Caption Count","n":"captionCount","r":false,"t":"`$INTEGER`","key$":"captionCount","index$":4},"captions":{"a":true,"h":"Captions","n":"captions","r":true,"t":"`$ARRAY`","key$":"captions","index$":5},"categories":{"a":true,"h":"Categories","n":"categories","r":false,"t":"`$ARRAY`","key$":"categories","index$":6},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":7},"durationMs":{"a":true,"h":"Duration Ms","n":"durationMs","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"durationMs","index$":8},"exampleImageUrl":{"a":true,"h":"Example Image Url","n":"exampleImageUrl","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"exampleImageUrl","index$":9},"frameCount":{"a":true,"h":"Frame Count","n":"frameCount","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"frameCount","index$":10},"height":{"a":true,"h":"Height","n":"height","r":true,"t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"height","index$":11},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":12},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":true,"t":"`$STRING`","key$":"imageUrl","index$":13},"mediaType":{"a":true,"h":"Media Type","n":"mediaType","r":true,"t":"`$STRING`","key$":"mediaType","index$":14},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":15},"posterImageUrl":{"a":true,"h":"Poster Image Url","n":"posterImageUrl","r":false,"t":"`$STRING`","key$":"posterImageUrl","index$":16},"previewImageUrl":{"a":true,"h":"Preview Image Url","n":"previewImageUrl","r":false,"t":"`$STRING`","key$":"previewImageUrl","index$":17},"qualityStatus":{"a":true,"h":"Quality Status","n":"qualityStatus","r":false,"t":"`$STRING`","key$":"qualityStatus","index$":18},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":19},"sourceTemplateId":{"a":true,"h":"Source Template Id","n":"sourceTemplateId","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"sourceTemplateId","index$":20},"sourceUrl":{"a":true,"h":"Source Url","n":"sourceUrl","r":false,"t":"`$STRING`","key$":"sourceUrl","index$":21},"tags":{"a":true,"h":"Tags","n":"tags","r":true,"t":"`$ARRAY`","key$":"tags","index$":22},"width":{"a":true,"h":"Width","n":"width","r":true,"t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"width","index$":23}},"id":{"field":"id","name":"id"},"name":"public_template_media_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/gifs/{slug}/generate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/gifs/{slug}/generate","q":{"$action":"generate","exist":["slug"]},"r":{},"s":[{"lit":"api"},{"lit":"gifs"},{"var":"slug"},{"lit":"generate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/templates/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"image","k":"query","n":"media_type","or":"media_type","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/templates/{slug}","q":{"exist":["media_type","slug"]},"r":{},"s":[{"lit":"api"},{"lit":"templates"},{"var":"slug"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/gifs/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/gifs/{slug}","q":{"exist":["slug"]},"r":{},"s":[{"lit":"api"},{"lit":"gifs"},{"var":"slug"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.gif"],["$.main.kit.entity.template"]]},"key$":"public_template_media_item","name__orig":"public_template_media_item","Name":"PublicTemplateMediaItem","name_":"public_template_media_item","name-":"public-template-media-item","NAME":"PUBLIC_TEMPLATE_MEDIA_ITEM","index$":20}, {"active":true,"entity":"public_template_media_item","key$":"BasicPublicTemplateMediaItemFlow","kind":"basic","name":"BasicPublicTemplateMediaItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"public_template_media_item_ref01"},"m":{"slug":"slug01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"public_template_media_item_ref01","srcdatavar":"public_template_media_item_ref01_data","suffix":"_dt0"},"m":{"id":"public_template_media_item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-public_template_media_item_ref01"}}],"index$":1}]}, 'PublicTemplateMediaItem', {"POST /api/gifs/{slug}/generate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"gifSlug":{"type":"string","description":"Required for /api/v1/gifs/generate.","key$":"gifSlug"},"widthPx":{"type":"integer","minimum":100,"maximum":480,"key$":"widthPx"},"startMs":{"type":"integer","minimum":0,"key$":"startMs"},"durationMs":{"type":"integer","minimum":100,"maximum":24000,"key$":"durationMs"},"fps":{"type":"integer","minimum":10,"maximum":24,"key$":"fps"},"title":{"type":"string","maxLength":120,"key$":"title"},"tags":{"type":"array","items":{"type":"string"},"maxItems":8,"key$":"tags"},"captions":{"type":"array","items":{"type":"object","required":["text"],"properties":{"id":{"type":"string","maxLength":80},"text":{"type":"string","maxLength":120},"x":{"type":"number","minimum":0,"maximum":100},"y":{"type":"number","minimum":0,"maximum":100},"fontSize":{"type":"number","minimum":14,"maximum":64},"boxWidthPct":{"type":"number","minimum":20,"maximum":100},"maxLines":{"type":"integer","minimum":1,"maximum":4},"color":{"type":"string"},"stroke":{"type":"string"},"textAlign":{"type":"string","enum":["left","center","right"]},"fontFamily":{"type":"string","enum":["impact","arial","poster"]}},"x-ref":"#/components/schemas/GifCaptionInput"},"maxItems":4,"key$":"captions"},"returnBase64":{"type":"boolean","description":"Only used by /api/v1/gifs/generate.","key$":"returnBase64"}},"x-ref":"#/components/schemas/GenerateGifRequest"}}}},"responses":{"200":{"description":"Generated GIF bytes","content":{"image/gif":{"schema":{"type":"string","format":"binary"}}}},"400":{"description":"Validation error"},"404":{"description":"GIF template not found"},"413":{"description":"Source or output GIF too large"},"422":{"description":"Frame or pixel budget exceeded"},"429":{"description":"Rate limit exceeded"}},"parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"security":[{"DeveloperApiKeyAuth":[]},{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/templates/{slug}":{"protocol":"http","responses":{"200":{"description":"Template details","content":{"application/json":{"schema":{"type":"object","required":["id","sourceTemplateId","slug","name","description","mediaType","imageUrl","width","height","captions","tags"],"properties":{"id":{"type":"string","key$":"id"},"sourceTemplateId":{"type":["string","null"],"key$":"sourceTemplateId"},"slug":{"type":"string","key$":"slug"},"name":{"type":"string","key$":"name"},"description":{"type":"string","key$":"description"},"mediaType":{"enum":["image","gif"],"type":"string","key$":"mediaType"},"imageUrl":{"type":"string","key$":"imageUrl"},"sourceUrl":{"type":"string","key$":"sourceUrl"},"exampleImageUrl":{"type":["string","null"],"key$":"exampleImageUrl"},"previewImageUrl":{"type":"string","key$":"previewImageUrl"},"posterImageUrl":{"type":"string","key$":"posterImageUrl"},"width":{"type":["number","null"],"key$":"width"},"height":{"type":["number","null"],"key$":"height"},"captionCount":{"minimum":0,"type":"integer","key$":"captionCount"},"boxCount":{"minimum":0,"type":"integer","key$":"boxCount"},"captions":{"items":{"properties":{"backgroundColor":{"type":"string"},"backgroundEnabled":{"type":"boolean"},"backgroundOpacity":{"type":"number"},"boxHeightPct":{"type":"number"},"boxWidthPct":{"type":"number"},"color":{"type":"string"},"exampleText":{"type":"string"},"fontFamily":{"enum":["impact","arial","poster"],"type":"string"},"fontSize":{"type":"number"},"hidden":{"type":"boolean"},"id":{"type":"string"},"letterSpacingEm":{"type":"number"},"lineHeight":{"type":"number"},"locked":{"type":"boolean"},"maxLines":{"type":"integer"},"paddingPct":{"type":"number"},"preferredCase":{"enum":["uppercase","sentence","title","preserve"],"type":"string"},"recommendedCharsMax":{"minimum":1,"type":"integer"},"recommendedCharsMin":{"minimum":1,"type":"integer"},"recommendedWordsMax":{"minimum":1,"type":"integer"},"recommendedWordsMin":{"minimum":1,"type":"integer"},"rotationDeg":{"type":"number"},"semanticRole":{"enum":["setup","contrast","punchline","reaction","label"],"type":"string"},"shadowStrength":{"type":"number"},"stroke":{"type":"string"},"text":{"type":"string"},"textAlign":{"enum":["left","center","right"],"type":"string"},"x":{"type":"number"},"y":{"type":"number"}},"required":["id","text","x","y","fontSize"],"type":"object","x-ref":"#/components/schemas/MemeCaption"},"type":"array","key$":"captions"},"tags":{"items":{"type":"string"},"type":"array","key$":"tags"},"categories":{"items":{"type":"string"},"type":"array","key$":"categories"},"assetContentType":{"type":"string","key$":"assetContentType"},"animated":{"type":"boolean","key$":"animated"},"durationMs":{"minimum":0,"type":["integer","null"],"key$":"durationMs"},"frameCount":{"minimum":0,"type":["integer","null"],"key$":"frameCount"},"assetBytes":{"minimum":0,"type":["integer","null"],"key$":"assetBytes"},"qualityStatus":{"enum":["approved","quarantined","rejected","pending"],"type":"string","key$":"qualityStatus"}},"x-ref":"#/components/schemas/PublicTemplateMediaItem","index$":0}}}},"400":{"description":"Invalid slug"},"404":{"description":"Template not found"}},"parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"mediaType","in":"query","schema":{"type":"string","enum":["image","gif","all"],"default":"image"},"index$":1}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}},"GET /api/gifs/{slug}":{"protocol":"http","responses":{"200":{"description":"GIF template details","content":{"application/json":{"schema":{"type":"object","required":["id","sourceTemplateId","slug","name","description","mediaType","imageUrl","width","height","captions","tags"],"properties":{"id":{"type":"string","key$":"id"},"sourceTemplateId":{"type":["string","null"],"key$":"sourceTemplateId"},"slug":{"type":"string","key$":"slug"},"name":{"type":"string","key$":"name"},"description":{"type":"string","key$":"description"},"mediaType":{"enum":["image","gif"],"type":"string","key$":"mediaType"},"imageUrl":{"type":"string","key$":"imageUrl"},"sourceUrl":{"type":"string","key$":"sourceUrl"},"exampleImageUrl":{"type":["string","null"],"key$":"exampleImageUrl"},"previewImageUrl":{"type":"string","key$":"previewImageUrl"},"posterImageUrl":{"type":"string","key$":"posterImageUrl"},"width":{"type":["number","null"],"key$":"width"},"height":{"type":["number","null"],"key$":"height"},"captionCount":{"minimum":0,"type":"integer","key$":"captionCount"},"boxCount":{"minimum":0,"type":"integer","key$":"boxCount"},"captions":{"items":{"properties":{"backgroundColor":{"type":"string"},"backgroundEnabled":{"type":"boolean"},"backgroundOpacity":{"type":"number"},"boxHeightPct":{"type":"number"},"boxWidthPct":{"type":"number"},"color":{"type":"string"},"exampleText":{"type":"string"},"fontFamily":{"enum":["impact","arial","poster"],"type":"string"},"fontSize":{"type":"number"},"hidden":{"type":"boolean"},"id":{"type":"string"},"letterSpacingEm":{"type":"number"},"lineHeight":{"type":"number"},"locked":{"type":"boolean"},"maxLines":{"type":"integer"},"paddingPct":{"type":"number"},"preferredCase":{"enum":["uppercase","sentence","title","preserve"],"type":"string"},"recommendedCharsMax":{"minimum":1,"type":"integer"},"recommendedCharsMin":{"minimum":1,"type":"integer"},"recommendedWordsMax":{"minimum":1,"type":"integer"},"recommendedWordsMin":{"minimum":1,"type":"integer"},"rotationDeg":{"type":"number"},"semanticRole":{"enum":["setup","contrast","punchline","reaction","label"],"type":"string"},"shadowStrength":{"type":"number"},"stroke":{"type":"string"},"text":{"type":"string"},"textAlign":{"enum":["left","center","right"],"type":"string"},"x":{"type":"number"},"y":{"type":"number"}},"required":["id","text","x","y","fontSize"],"type":"object","x-ref":"#/components/schemas/MemeCaption"},"type":"array","key$":"captions"},"tags":{"items":{"type":"string"},"type":"array","key$":"tags"},"categories":{"items":{"type":"string"},"type":"array","key$":"categories"},"assetContentType":{"type":"string","key$":"assetContentType"},"animated":{"type":"boolean","key$":"animated"},"durationMs":{"minimum":0,"type":["integer","null"],"key$":"durationMs"},"frameCount":{"minimum":0,"type":["integer","null"],"key$":"frameCount"},"assetBytes":{"minimum":0,"type":["integer","null"],"key$":"assetBytes"},"qualityStatus":{"enum":["approved","quarantined","rejected","pending"],"type":"string","key$":"qualityStatus"}},"x-ref":"#/components/schemas/PublicTemplateMediaItem","index$":0}}}},"400":{"description":"Invalid slug"},"404":{"description":"GIF template not found"}},"parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const public_template_media_item_ref01_ent = client.PublicTemplateMediaItem()
    let public_template_media_item_ref01_data = setup.data.new.public_template_media_item['public_template_media_item_ref01']
    public_template_media_item_ref01_data['slug'] = setup.idmap['slug01']

    public_template_media_item_ref01_data = (await public_template_media_item_ref01_ent.create(public_template_media_item_ref01_data)).data()
    assert(null != public_template_media_item_ref01_data.id)


    // LOAD
    const public_template_media_item_ref01_match_dt0: any = {}
    public_template_media_item_ref01_match_dt0.id = public_template_media_item_ref01_data.id
    const public_template_media_item_ref01_data_dt0 = (await public_template_media_item_ref01_ent.load(public_template_media_item_ref01_match_dt0)).data()
    assert(public_template_media_item_ref01_data_dt0.id === public_template_media_item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/public_template_media_item/PublicTemplateMediaItemTestData.json')

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
    ['public_template_media_item01','public_template_media_item02','public_template_media_item03','gif01','gif02','gif03','template01','template02','template03','slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID']
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
  
