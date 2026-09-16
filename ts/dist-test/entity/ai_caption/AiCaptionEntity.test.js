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
(0, node_test_1.describe)('AiCaptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.AiCaption();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_caption.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "blockedTerms", "req": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "canvasText", "req": true, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "captionCount", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "captionSets", "req": false, "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "entities", "req": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "fallbackUsed", "req": false, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "generationStrategy", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "locale", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "memeId", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "memeSlug", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "name", "req": true, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "ok", "req": false, "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "optionCount", "req": false, "type": "`$INTEGER`", "index$": 12 }, { "active": true, "name": "ownerToken", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "providerId", "req": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "referenceCaptions", "req": false, "type": "`$ARRAY`", "index$": 15 }, { "active": true, "name": "rewriteNote", "req": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "sceneSummary", "req": false, "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "templateDescription", "req": false, "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "templateName", "req": false, "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "templateTags", "req": false, "type": "`$ARRAY`", "index$": 20 }, { "active": true, "name": "tone", "req": true, "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "toneCues", "req": false, "type": "`$ARRAY`", "index$": 22 }, { "active": true, "name": "trendKeywords", "req": false, "type": "`$ARRAY`", "index$": 23 }, { "active": true, "name": "trendReferences", "req": false, "type": "`$ARRAY`", "index$": 24 }, { "active": true, "name": "trendSignals", "req": false, "type": "`$ARRAY`", "index$": 25 }, { "active": true, "name": "variationOffset", "req": false, "type": "`$INTEGER`", "index$": 26 }, { "active": true, "name": "voiceRules", "req": false, "type": "`$ARRAY`", "index$": 27 }], "name": "ai_caption", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captionCount\":{\"maximum\":7,\"minimum\":1,\"type\":\"integer\"},\"entities\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"memeId\":{\"type\":\"string\"},\"memeSlug\":{\"type\":\"string\"},\"optionCount\":{\"maximum\":5,\"minimum\":1,\"type\":\"integer\"},\"ownerToken\":{\"type\":\"string\"},\"referenceCaptions\":{\"items\":{\"type\":\"string\"},\"maxItems\":7,\"type\":\"array\"},\"rewriteNote\":{\"type\":\"string\"},\"sceneSummary\":{\"type\":\"string\"},\"tone\":{\"type\":\"string\"},\"toneCues\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"trendKeywords\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"trendReferences\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"variationOffset\":{\"maximum\":99,\"minimum\":0,\"type\":\"integer\"}},\"required\":[\"tone\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captionSets\":{\"items\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"text\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"score\":{\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"fallbackUsed\":{\"type\":\"boolean\"},\"generationStrategy\":{\"enum\":[\"openai\",\"heuristic\"],\"type\":\"string\"},\"ok\":{\"type\":\"boolean\"},\"providerId\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Caption generation + ranking payload with reroll quota snapshot\"},\"400\":{\"description\":\"Validation error\"},\"429\":{\"description\":\"Daily caption reroll quota exceeded\"}},\"security\":[{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/generate", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/moderate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Caption moderation payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/moderate", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "moderate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/prompt", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Caption prompt payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/prompt", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "prompt" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/rank", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Caption ranking payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/rank", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "rank" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/rewrite", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Caption rewrite payload\"},\"400\":{\"description\":\"Validation error\"}},\"security\":[{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/rewrite", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "rewrite" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/scene", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"canvasText\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"templateDescription\":{\"type\":\"string\"},\"templateName\":{\"type\":\"string\"},\"templateTags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"trendSignals\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"canvasText\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Scene understanding payload\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/scene", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "scene" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "active": true, "args": {}, "contract": { "id": "POST /api/ai/captions/tone-presets", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedTerms\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"locale\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"voiceRules\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Tone preset saved\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/captions/tone-presets", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "tone-presets" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "locale", "orig": "locale", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/ai/captions/tone-presets", "json": "{\"parameters\":[{\"in\":\"query\",\"name\":\"locale\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Tone preset list payload\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/ai/captions/tone-presets", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "tone-presets" }], "select": { "exist": ["locale"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/ai/captions/generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Current actor caption reroll quota snapshot\"}},\"security\":[{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/ai/captions/generate", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "captions" }, { "lit": "generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ai_caption", "name__orig": "ai_caption", "Name": "AiCaption", "name_": "ai_caption", "name-": "ai-caption", "NAME": "AI_CAPTION", "index$": 2 }, { "active": true, "entity": "ai_caption", "key$": "BasicAiCaptionFlow", "kind": "basic", "name": "BasicAiCaptionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ai_caption_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "ai_caption_ref01", "srcdatavar": "ai_caption_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_caption_ref01" } }], "index$": 1 }] }, 'AiCaption');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_caption_ref01_ent = client.AiCaption();
        let ai_caption_ref01_data = setup.data.new.ai_caption['ai_caption_ref01'];
        ai_caption_ref01_data = (await ai_caption_ref01_ent.create(ai_caption_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_caption_ref01_data);
        // LOAD
        const ai_caption_ref01_match_dt0 = {};
        const ai_caption_ref01_data_dt0 = (await ai_caption_ref01_ent.load(ai_caption_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != ai_caption_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_caption/AiCaptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_caption01', 'ai_caption02', 'ai_caption03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_CAPTION_ENTID'];
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
//# sourceMappingURL=AiCaptionEntity.test.js.map