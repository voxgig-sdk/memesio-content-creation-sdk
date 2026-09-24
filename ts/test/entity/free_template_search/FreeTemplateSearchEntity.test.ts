

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


describe('FreeTemplateSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEMESIO_CONTENT_CREATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MemesioContentCreationSDK.test()
    const ent = testsdk.FreeTemplateSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'free_template_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"animated":{"a":true,"h":"Animated","n":"animated","r":false,"t":"`$BOOLEAN`","key$":"animated","index$":0},"assetBytes":{"a":true,"h":"Asset Bytes","n":"assetBytes","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"assetBytes","index$":1},"assetContentType":{"a":true,"h":"Asset Content Type","n":"assetContentType","r":false,"t":"`$STRING`","key$":"assetContentType","index$":2},"boxCount":{"a":true,"h":"Box Count","n":"boxCount","r":true,"t":"`$INTEGER`","key$":"boxCount","index$":3},"captionCount":{"a":true,"h":"Caption Count","n":"captionCount","r":true,"t":"`$INTEGER`","key$":"captionCount","index$":4},"captions":{"a":true,"h":"Captions","n":"captions","r":true,"t":"`$ARRAY`","key$":"captions","index$":5},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":6},"durationMs":{"a":true,"h":"Duration Ms","n":"durationMs","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"durationMs","index$":7},"exampleImageUrl":{"a":true,"h":"Example Image Url","n":"exampleImageUrl","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"exampleImageUrl","index$":8},"frameCount":{"a":true,"h":"Frame Count","n":"frameCount","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"frameCount","index$":9},"height":{"a":true,"h":"Height","n":"height","r":true,"t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"height","index$":10},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":11},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":true,"t":"`$STRING`","key$":"imageUrl","index$":12},"mediaType":{"a":true,"h":"Media Type","n":"mediaType","r":true,"t":"`$STRING`","key$":"mediaType","index$":13},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":14},"posterImageUrl":{"a":true,"h":"Poster Image Url","n":"posterImageUrl","r":false,"t":"`$STRING`","key$":"posterImageUrl","index$":15},"qualityStatus":{"a":true,"h":"Quality Status","n":"qualityStatus","r":false,"t":"`$STRING`","key$":"qualityStatus","index$":16},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":17},"sourceTemplateId":{"a":true,"h":"Source Template Id","n":"sourceTemplateId","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"sourceTemplateId","index$":18},"sourceUrl":{"a":true,"h":"Source Url","n":"sourceUrl","r":false,"t":"`$STRING`","key$":"sourceUrl","index$":19},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"t":"`$ARRAY`","key$":"tags","index$":20},"width":{"a":true,"h":"Width","n":"width","r":true,"t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"width","index$":21}},"id":{"field":"id","name":"id"},"name":"free_template_search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/free/templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"image","k":"query","n":"media_type","or":"media_type","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"mode","or":"mode","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/api/free/templates","q":{"exist":["media_type","mode","page","page_size","q","query","sort","tag"]},"r":{},"s":[{"lit":"api"},{"lit":"free"},{"lit":"templates"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"free_template_search","name__orig":"free_template_search","Name":"FreeTemplateSearch","name_":"free_template_search","name-":"free-template-search","NAME":"FREE_TEMPLATE_SEARCH","index$":14}, {"active":true,"entity":"free_template_search","key$":"BasicFreeTemplateSearchFlow","kind":"basic","name":"BasicFreeTemplateSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"free_template_search_ref01"}}],"index$":0}]}, 'FreeTemplateSearch', {"GET /api/free/templates":{"protocol":"http","responses":{"200":{"description":"Template search results","content":{"application/json":{"schema":{"type":"object","required":["items","total","nextPage","page","pageSize"],"properties":{"mediaType":{"enum":["image","gif","all"],"key$":"mediaType","type":"string"},"searchMode":{"enum":["lexical","hybrid"],"key$":"searchMode","type":"string"},"fallbackApplied":{"key$":"fallbackApplied","type":"boolean"},"items":{"items":{"properties":{"animated":{"type":"boolean","key$":"animated"},"assetBytes":{"minimum":0,"type":["integer","null"],"key$":"assetBytes"},"assetContentType":{"type":"string","key$":"assetContentType"},"boxCount":{"minimum":0,"type":"integer","key$":"boxCount"},"captionCount":{"minimum":0,"type":"integer","key$":"captionCount"},"captions":{"items":{"properties":{"backgroundColor":{"type":"string"},"backgroundEnabled":{"type":"boolean"},"backgroundOpacity":{"type":"number"},"boxHeightPct":{"type":"number"},"boxWidthPct":{"type":"number"},"color":{"type":"string"},"exampleText":{"type":"string"},"fontFamily":{"enum":["impact","arial","poster"],"type":"string"},"fontSize":{"type":"number"},"hidden":{"type":"boolean"},"id":{"type":"string"},"letterSpacingEm":{"type":"number"},"lineHeight":{"type":"number"},"locked":{"type":"boolean"},"maxLines":{"type":"integer"},"paddingPct":{"type":"number"},"preferredCase":{"enum":["uppercase","sentence","title","preserve"],"type":"string"},"recommendedCharsMax":{"minimum":1,"type":"integer"},"recommendedCharsMin":{"minimum":1,"type":"integer"},"recommendedWordsMax":{"minimum":1,"type":"integer"},"recommendedWordsMin":{"minimum":1,"type":"integer"},"rotationDeg":{"type":"number"},"semanticRole":{"enum":["setup","contrast","punchline","reaction","label"],"type":"string"},"shadowStrength":{"type":"number"},"stroke":{"type":"string"},"text":{"type":"string"},"textAlign":{"enum":["left","center","right"],"type":"string"},"x":{"type":"number"},"y":{"type":"number"}},"required":["id","text","x","y","fontSize"],"type":"object","x-ref":"#/components/schemas/MemeCaption"},"type":"array","key$":"captions"},"description":{"type":"string","key$":"description"},"durationMs":{"minimum":0,"type":["integer","null"],"key$":"durationMs"},"exampleImageUrl":{"type":["string","null"],"key$":"exampleImageUrl"},"frameCount":{"minimum":0,"type":["integer","null"],"key$":"frameCount"},"height":{"type":["number","null"],"key$":"height"},"id":{"type":"string","key$":"id"},"imageUrl":{"type":"string","key$":"imageUrl"},"mediaType":{"enum":["image","gif"],"type":"string","key$":"mediaType"},"name":{"type":"string","key$":"name"},"posterImageUrl":{"type":"string","key$":"posterImageUrl"},"qualityStatus":{"enum":["approved","quarantined","rejected","pending"],"type":"string","key$":"qualityStatus"},"slug":{"type":"string","key$":"slug"},"sourceTemplateId":{"type":["string","null"],"key$":"sourceTemplateId"},"sourceUrl":{"type":"string","key$":"sourceUrl"},"tags":{"items":{"type":"string"},"type":"array","key$":"tags"},"width":{"type":["number","null"],"key$":"width"}},"required":["id","sourceTemplateId","slug","name","description","mediaType","imageUrl","width","height","captionCount","boxCount","captions"],"type":"object","index$":0},"key$":"items","type":"array"},"total":{"key$":"total","minimum":0,"type":"integer"},"nextPage":{"key$":"nextPage","minimum":1,"type":["integer","null"]},"page":{"key$":"page","minimum":1,"type":"integer"},"pageSize":{"key$":"pageSize","minimum":1,"type":"integer"}},"x-ref":"#/components/schemas/FreeTemplateSearchResponse"}}}},"401":{"description":"Invalid developer or agent API key"},"429":{"description":"Rate limit exceeded"}},"parameters":[{"name":"query","in":"query","schema":{"type":"string"},"index$":0},{"name":"q","in":"query","schema":{"type":"string"},"index$":1},{"name":"tag","in":"query","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","schema":{"type":"integer","minimum":1},"index$":3},{"name":"pageSize","in":"query","schema":{"type":"integer","minimum":1,"maximum":50},"index$":4},{"name":"sort","in":"query","schema":{"type":"string","enum":["curated","trending"]},"index$":5},{"name":"mode","in":"query","schema":{"type":"string","enum":["lexical","hybrid"]},"index$":6},{"name":"mediaType","in":"query","schema":{"type":"string","enum":["image","gif","all"],"default":"image"},"index$":7}],"security":[{"DeveloperApiKeyAuth":[]},{"AgentApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"DeveloperApiKeyAuth":{"type":"apiKey","in":"header","name":"x-developer-api-key","description":"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>."},"AgentApiKeyAuth":{"type":"apiKey","in":"header","name":"x-agent-api-key","description":"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let free_template_search_ref01_data = Object.values(setup.data.existing.free_template_search)[0] as any

    // LIST
    const free_template_search_ref01_ent = client.FreeTemplateSearch()
    const free_template_search_ref01_match: any = {}

    const free_template_search_ref01_list = (await free_template_search_ref01_ent.list(free_template_search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/free_template_search/FreeTemplateSearchTestData.json')

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
    ['free_template_search01','free_template_search02','free_template_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID': idmap,
    'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
    'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
    'MEMESIO_CONTENT_CREATION_APIKEY': '',
  })

  idmap = env['MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID']

  const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID']
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
  
