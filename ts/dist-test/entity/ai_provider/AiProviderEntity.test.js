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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AiProviderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.AiProvider();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_provider.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actorId": { "a": true, "h": "Actor Id", "n": "actorId", "r": false, "t": "`$STRING`", "key$": "actorId", "index$": 0 }, "correlationId": { "a": true, "h": "Correlation Id", "n": "correlationId", "r": false, "t": "`$STRING`", "key$": "correlationId", "index$": 1 }, "limit": { "a": true, "h": "Limit", "n": "limit", "r": false, "t": "`$NUMBER`", "key$": "limit", "index$": 2 }, "mappingMode": { "a": true, "h": "Mapping Mode", "n": "mappingMode", "r": false, "t": "`$STRING`", "key$": "mappingMode", "index$": 3 }, "maxSlots": { "a": true, "h": "Max Slots", "n": "maxSlots", "r": false, "t": "`$INTEGER`", "key$": "maxSlots", "index$": 4 }, "prompt": { "a": true, "h": "Prompt", "n": "prompt", "r": true, "t": "`$STRING`", "key$": "prompt", "index$": 5 }, "sourceImageUrl": { "a": true, "h": "Source Image Url", "n": "sourceImageUrl", "r": true, "t": "`$STRING`", "key$": "sourceImageUrl", "index$": 6 }, "texts": { "a": true, "h": "Texts", "n": "texts", "r": false, "t": "`$ARRAY`", "key$": "texts", "index$": 7 }, "trendSignals": { "a": true, "h": "Trend Signals", "n": "trendSignals", "r": false, "t": "`$ARRAY`", "key$": "trendSignals", "index$": 8 }, "workspaceId": { "a": true, "h": "Workspace Id", "n": "workspaceId", "r": false, "t": "`$STRING`", "key$": "workspaceId", "index$": 9 } }, "name": "ai_provider", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/ai/templates/detect", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/templates/detect", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "templates" }, { "lit": "detect" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/ai/templates/suggest", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/templates/suggest", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "templates" }, { "lit": "suggest" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/ai/providers/background-remove-benchmark", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "refresh", "or": "refresh", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/ai/providers/background-remove-benchmark", "q": { "exist": ["refresh"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "providers" }, { "lit": "background-remove-benchmark" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/ai/providers/face-swap-benchmark", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "refresh", "or": "refresh", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/ai/providers/face-swap-benchmark", "q": { "exist": ["refresh"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "providers" }, { "lit": "face-swap-benchmark" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/ai/memes/generate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/ai/memes/generate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "memes" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ai_provider", "name__orig": "ai_provider", "Name": "AiProvider", "name_": "ai_provider", "name-": "ai-provider", "NAME": "AI_PROVIDER", "index$": 5 }, { "active": true, "entity": "ai_provider", "key$": "BasicAiProviderFlow", "kind": "basic", "name": "BasicAiProviderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_provider_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "ai_provider_ref01", "srcdatavar": "ai_provider_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_provider_ref01" } }], "index$": 1 }] }, 'AiProvider', { "POST /api/ai/templates/detect": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceImageUrl"], "properties": { "sourceImageUrl": { "type": "string", "key$": "sourceImageUrl" }, "texts": { "type": "array", "items": { "type": "string" }, "maxItems": 2, "key$": "texts" }, "maxSlots": { "type": "integer", "minimum": 1, "maximum": 2, "key$": "maxSlots" }, "mappingMode": { "type": "string", "enum": ["single_or_split"], "key$": "mappingMode" }, "actorId": { "type": "string", "key$": "actorId" }, "workspaceId": { "type": "string", "key$": "workspaceId" }, "correlationId": { "type": "string", "key$": "correlationId" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Template detection payload" }, "400": { "description": "Validation error" }, "500": { "description": "Detection failure" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/ai/templates/suggest": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["prompt"], "properties": { "prompt": { "type": "string", "minLength": 1, "key$": "prompt" }, "trendSignals": { "type": "array", "items": { "type": "string" }, "maxItems": 20, "key$": "trendSignals" }, "limit": { "type": "number", "minimum": 1, "maximum": 60, "key$": "limit" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Template suggestion ranking payload" }, "400": { "description": "Validation error" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/ai/providers/background-remove-benchmark": { "protocol": "http", "responses": { "200": { "description": "Background-remove provider benchmark report" } }, "parameters": [{ "name": "refresh", "in": "query", "schema": { "type": "boolean" }, "index$": 0 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/ai/providers/face-swap-benchmark": { "protocol": "http", "responses": { "200": { "description": "Face-swap provider benchmark report" } }, "parameters": [{ "name": "refresh", "in": "query", "schema": { "type": "boolean" }, "index$": 0 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/ai/memes/generate": { "protocol": "http", "responses": { "200": { "description": "Current actor AI quota snapshot" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_provider_ref01_ent = client.AiProvider();
        let ai_provider_ref01_data = setup.data.new.ai_provider['ai_provider_ref01'];
        ai_provider_ref01_data = (await ai_provider_ref01_ent.create(ai_provider_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_provider_ref01_data);
        // LOAD
        const ai_provider_ref01_match_dt0 = {};
        const ai_provider_ref01_data_dt0 = (await ai_provider_ref01_ent.load(ai_provider_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != ai_provider_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_provider/AiProviderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_provider01', 'ai_provider02', 'ai_provider03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_PROVIDER_ENTID'];
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
//# sourceMappingURL=AiProviderEntity.test.js.map