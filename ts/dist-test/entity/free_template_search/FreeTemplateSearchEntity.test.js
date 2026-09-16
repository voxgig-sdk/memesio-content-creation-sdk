"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('FreeTemplateSearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.FreeTemplateSearch();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'free_template_search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "animated", "req": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "assetBytes", "req": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 1 }, { "active": true, "name": "assetContentType", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "boxCount", "req": true, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "captionCount", "req": true, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "captions", "req": true, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "description", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "durationMs", "req": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 7 }, { "active": true, "name": "exampleImageUrl", "req": false, "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 8 }, { "active": true, "name": "frameCount", "req": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 9 }, { "active": true, "name": "height", "req": true, "type": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "index$": 10 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "imageUrl", "req": true, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "mediaType", "req": true, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "name", "req": true, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "posterImageUrl", "req": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "qualityStatus", "req": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "slug", "req": true, "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "sourceTemplateId", "req": true, "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 18 }, { "active": true, "name": "sourceUrl", "req": false, "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "tags", "req": false, "type": "`$ARRAY`", "index$": 20 }, { "active": true, "name": "width", "req": true, "type": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "index$": 21 }], "id": { "field": "id", "name": "id" }, "name": "free_template_search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "image", "kind": "query", "name": "media_type", "orig": "media_type", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "mode", "orig": "mode", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "query", "orig": "query", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "tag", "orig": "tag", "reqd": false, "type": "`$STRING`", "index$": 7 }] }, "contract": { "id": "GET /api/free/templates", "json": "{\"parameters\":[{\"in\":\"query\",\"name\":\"query\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"tag\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"maximum\":50,\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"enum\":[\"curated\",\"trending\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mode\",\"schema\":{\"enum\":[\"lexical\",\"hybrid\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"mediaType\",\"schema\":{\"default\":\"image\",\"enum\":[\"image\",\"gif\",\"all\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"fallbackApplied\":{\"type\":\"boolean\"},\"items\":{\"items\":{\"properties\":{\"animated\":{\"type\":\"boolean\"},\"assetBytes\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"assetContentType\":{\"type\":\"string\"},\"boxCount\":{\"minimum\":0,\"type\":\"integer\"},\"captionCount\":{\"minimum\":0,\"type\":\"integer\"},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"description\":{\"type\":\"string\"},\"durationMs\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"exampleImageUrl\":{\"type\":[\"string\",\"null\"]},\"frameCount\":{\"minimum\":0,\"type\":[\"integer\",\"null\"]},\"height\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mediaType\":{\"enum\":[\"image\",\"gif\"],\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"posterImageUrl\":{\"type\":\"string\"},\"qualityStatus\":{\"enum\":[\"approved\",\"quarantined\",\"rejected\",\"pending\"],\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"sourceTemplateId\":{\"type\":[\"string\",\"null\"]},\"sourceUrl\":{\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"width\":{\"type\":[\"number\",\"null\"]}},\"required\":[\"id\",\"sourceTemplateId\",\"slug\",\"name\",\"description\",\"mediaType\",\"imageUrl\",\"width\",\"height\",\"captionCount\",\"boxCount\",\"captions\"],\"type\":\"object\"},\"type\":\"array\"},\"mediaType\":{\"enum\":[\"image\",\"gif\",\"all\"],\"type\":\"string\"},\"nextPage\":{\"minimum\":1,\"type\":[\"integer\",\"null\"]},\"page\":{\"minimum\":1,\"type\":\"integer\"},\"pageSize\":{\"minimum\":1,\"type\":\"integer\"},\"searchMode\":{\"enum\":[\"lexical\",\"hybrid\"],\"type\":\"string\"},\"total\":{\"minimum\":0,\"type\":\"integer\"}},\"required\":[\"items\",\"total\",\"nextPage\",\"page\",\"pageSize\"],\"type\":\"object\"}}},\"description\":\"Template search results\"},\"401\":{\"description\":\"Invalid developer or agent API key\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/free/templates", "segments": [{ "lit": "api" }, { "lit": "free" }, { "lit": "templates" }], "select": { "exist": ["media_type", "mode", "page", "page_size", "q", "query", "sort", "tag"] }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "free_template_search", "name__orig": "free_template_search", "Name": "FreeTemplateSearch", "name_": "free_template_search", "name-": "free-template-search", "NAME": "FREE_TEMPLATE_SEARCH", "index$": 14 }, { "active": true, "entity": "free_template_search", "key$": "BasicFreeTemplateSearchFlow", "kind": "basic", "name": "BasicFreeTemplateSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "free_template_search_ref01" } }], "index$": 0 }] }, 'FreeTemplateSearch');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let free_template_search_ref01_data = Object.values(setup.data.existing.free_template_search)[0];
        // LIST
        const free_template_search_ref01_ent = client.FreeTemplateSearch();
        const free_template_search_ref01_match = {};
        const free_template_search_ref01_list = (await free_template_search_ref01_ent.list(free_template_search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/free_template_search/FreeTemplateSearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['free_template_search01', 'free_template_search02', 'free_template_search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MemesioContentCreationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=FreeTemplateSearchEntity.test.js.map