

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SodeomSearchSDK, BaseFeature, stdutil } from '../../..'

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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SODEOM_SEARCH_TEST_LIVE=TRUE.
  afterEach(liveDelay('SODEOM_SEARCH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SodeomSearchSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SODEOM_SEARCH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":true,"short":"Description or snippet of the search result","type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"link","req":true,"short":"URL of the search result","type":"`$STRING`","index$":1},{"active":true,"name":"title","req":true,"short":"Title of the search result","type":"`$STRING`","index$":2}],"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"privacy search","kind":"query","name":"q","orig":"q","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/search","json":"{\"operationId\":\"searchContent\",\"parameters\":[{\"description\":\"Search query text\",\"example\":\"privacy search\",\"in\":\"query\",\"name\":\"q\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Pagination page number\",\"example\":1,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"has_next\":true,\"has_prev\":false,\"page\":1,\"query\":\"privacy search\",\"results\":[{\"description\":\"Learn about privacy-focused search engines\",\"link\":\"https://example.com/privacy\",\"title\":\"Privacy Search Tools\"}],\"total_results\":10},\"schema\":{\"properties\":{\"has_next\":{\"description\":\"Indicates if there is a next page of results\",\"type\":\"boolean\"},\"has_prev\":{\"description\":\"Indicates if there is a previous page of results\",\"type\":\"boolean\"},\"page\":{\"description\":\"Current page number\",\"minimum\":1,\"type\":\"integer\"},\"query\":{\"description\":\"The search query that was executed\",\"type\":\"string\"},\"results\":{\"description\":\"Array of search results\",\"items\":{\"properties\":{\"description\":{\"description\":\"Description or snippet of the search result\",\"type\":\"string\"},\"link\":{\"description\":\"URL of the search result\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the search result\",\"type\":\"string\"}},\"required\":[\"title\",\"link\",\"description\"],\"type\":\"object\"},\"type\":\"array\"},\"total_results\":{\"description\":\"Total number of results on current page\",\"type\":\"integer\"}},\"required\":[\"results\",\"query\",\"page\",\"has_next\",\"has_prev\",\"total_results\"],\"type\":\"object\"}}},\"description\":\"Successful search results\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Missing q parameter\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request - Missing required query parameter\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Search provider or parsing errors\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error - Search provider or parsing errors\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/search","segments":[{"lit":"api"},{"lit":"search"}],"select":{"exist":["page","q"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SodeomSearchSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SODEOM_SEARCH_TEST_SEARCH_ENTID': idmap,
    'SODEOM_SEARCH_TEST_LIVE': 'FALSE',
    'SODEOM_SEARCH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SODEOM_SEARCH_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.SODEOM_SEARCH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SODEOM_SEARCH_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SodeomSearchSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
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
    explain: 'TRUE' === env.SODEOM_SEARCH_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
