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
(0, node_test_1.describe)('FreeCaptionMemeSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.FreeCaptionMemeSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'free_caption_meme_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "captions": { "a": true, "h": "Captions", "n": "captions", "r": true, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "captions", "index$": 0 }, "templateSlug": { "a": true, "h": "Template Slug", "n": "templateSlug", "r": true, "t": "`$STRING`", "key$": "templateSlug", "index$": 1 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 2 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "t": "`$STRING`", "key$": "visibility", "index$": 3 }, "watermark": { "a": true, "h": "Watermark", "n": "watermark", "r": false, "sh": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.", "t": "`$OBJECT`", "key$": "watermark", "index$": 4 } }, "name": "free_caption_meme_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/free/memes/caption", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/free/memes/caption", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "free" }, { "lit": "memes" }, { "lit": "caption" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v1/memes/caption-template", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/memes/caption-template", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "memes" }, { "lit": "caption-template" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "free_caption_meme_success", "name__orig": "free_caption_meme_success", "Name": "FreeCaptionMemeSuccess", "name_": "free_caption_meme_success", "name-": "free-caption-meme-success", "NAME": "FREE_CAPTION_MEME_SUCCESS", "index$": 13 }, { "active": true, "entity": "free_caption_meme_success", "key$": "BasicFreeCaptionMemeSuccessFlow", "kind": "basic", "name": "BasicFreeCaptionMemeSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "free_caption_meme_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'FreeCaptionMemeSuccess', { "POST /api/free/memes/caption": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["templateSlug", "captions"], "properties": { "templateSlug": { "type": "string", "key$": "templateSlug" }, "captions": { "type": "array", "items": { "oneOf": [{ "type": "string", "maxLength": 300 }, { "type": "object", "required": ["text"], "properties": { "id": { "type": "string", "maxLength": 64 }, "text": { "type": "string", "maxLength": 300 }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "maxLines": { "type": "integer", "minimum": 1 }, "textAlign": { "type": "string", "enum": ["left", "center", "right"] }, "fontFamily": { "type": "string", "enum": ["impact", "arial", "poster"] } }, "x-ref": "#/components/schemas/CaptionInput" }] }, "key$": "captions" }, "title": { "type": "string", "maxLength": 140, "key$": "title" }, "visibility": { "type": "string", "enum": ["private", "public"], "key$": "visibility" }, "watermark": { "type": "object", "description": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.", "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string", "maxLength": 64 }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number", "minimum": 0.6, "maximum": 3 } }, "x-ref": "#/components/schemas/FreeMemeWatermark", "key$": "watermark" } }, "x-ref": "#/components/schemas/FreeCaptionMemeRequest", "index$": 1 } } } }, "responses": { "201": { "description": "Captioned meme created", "content": { "application/json": { "schema": { "type": "object", "required": ["success", "data"], "properties": { "success": { "type": "boolean", "const": true }, "data": { "type": "object", "required": ["slug", "shareSlug", "templateSlug", "title", "visibility", "imageUrl", "canonicalImageUrl", "altText", "tags", "apiUrl", "pageUrl", "ownerToken", "captions", "watermark"], "properties": { "slug": { "type": "string" }, "shareSlug": { "type": "string" }, "templateSlug": { "type": "string" }, "title": { "type": "string" }, "visibility": { "type": "string", "enum": ["private", "public"] }, "imageUrl": { "type": "string" }, "canonicalImageUrl": { "type": "string" }, "altText": { "type": "string" }, "tags": { "type": "array", "items": { "type": "string" } }, "apiUrl": { "type": "string" }, "pageUrl": { "type": "string" }, "ownerToken": { "type": "string" }, "captions": { "type": "array", "items": { "type": "string" } }, "watermark": { "type": "object", "description": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.", "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string", "maxLength": 64 }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number", "minimum": 0.6, "maximum": 3 } }, "x-ref": "#/components/schemas/FreeMemeWatermark" } } } }, "x-ref": "#/components/schemas/FreeCaptionMemeSuccessResponse" } } } }, "400": { "description": "Validation error or unsupported template" }, "401": { "description": "Invalid developer or agent API key" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/v1/memes/caption-template": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["templateSlug", "captions"], "properties": { "templateSlug": { "type": "string", "key$": "templateSlug" }, "captions": { "type": "array", "items": { "oneOf": [{ "type": "string", "maxLength": 300 }, { "type": "object", "required": ["text"], "properties": { "id": { "type": "string", "maxLength": 64 }, "text": { "type": "string", "maxLength": 300 }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "maxLines": { "type": "integer", "minimum": 1 }, "textAlign": { "type": "string", "enum": ["left", "center", "right"] }, "fontFamily": { "type": "string", "enum": ["impact", "arial", "poster"] } }, "x-ref": "#/components/schemas/CaptionInput" }] }, "key$": "captions" }, "title": { "type": "string", "maxLength": 140, "key$": "title" }, "visibility": { "type": "string", "enum": ["private", "public"], "key$": "visibility" }, "watermark": { "type": "object", "description": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.", "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string", "maxLength": 64 }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number", "minimum": 0.6, "maximum": 3 } }, "x-ref": "#/components/schemas/FreeMemeWatermark", "key$": "watermark" } }, "x-ref": "#/components/schemas/FreeCaptionMemeRequest", "index$": 1 } } } }, "responses": { "201": { "description": "Captioned meme created", "content": { "application/json": { "schema": { "type": "object", "required": ["success", "data"], "properties": { "success": { "type": "boolean", "const": true }, "data": { "type": "object", "required": ["slug", "shareSlug", "templateSlug", "title", "visibility", "imageUrl", "canonicalImageUrl", "altText", "tags", "apiUrl", "pageUrl", "ownerToken", "captions", "watermark"], "properties": { "slug": { "type": "string" }, "shareSlug": { "type": "string" }, "templateSlug": { "type": "string" }, "title": { "type": "string" }, "visibility": { "type": "string", "enum": ["private", "public"] }, "imageUrl": { "type": "string" }, "canonicalImageUrl": { "type": "string" }, "altText": { "type": "string" }, "tags": { "type": "array", "items": { "type": "string" } }, "apiUrl": { "type": "string" }, "pageUrl": { "type": "string" }, "ownerToken": { "type": "string" }, "captions": { "type": "array", "items": { "type": "string" } }, "watermark": { "type": "object", "description": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.", "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string", "maxLength": 64 }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number", "minimum": 0.6, "maximum": 3 } }, "x-ref": "#/components/schemas/FreeMemeWatermark" } } } }, "x-ref": "#/components/schemas/FreeCaptionMemeSuccessResponse" } } } }, "400": { "description": "Validation error or unsupported template" }, "401": { "description": "Invalid API key when one is provided" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const free_caption_meme_success_ref01_ent = client.FreeCaptionMemeSuccess();
        let free_caption_meme_success_ref01_data = setup.data.new.free_caption_meme_success['free_caption_meme_success_ref01'];
        free_caption_meme_success_ref01_data = (await free_caption_meme_success_ref01_ent.create(free_caption_meme_success_ref01_data)).data();
        (0, node_assert_1.default)(null != free_caption_meme_success_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/free_caption_meme_success/FreeCaptionMemeSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['free_caption_meme_success01', 'free_caption_meme_success02', 'free_caption_meme_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_FREE_CAPTION_MEME_SUCCESS_ENTID'];
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
//# sourceMappingURL=FreeCaptionMemeSuccessEntity.test.js.map