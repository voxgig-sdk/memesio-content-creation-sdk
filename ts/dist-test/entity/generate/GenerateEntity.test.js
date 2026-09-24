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
(0, node_test_1.describe)('GenerateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.Generate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "base64": { "a": true, "h": "Base64", "n": "base64", "r": false, "t": "`$STRING`", "key$": "base64", "index$": 0 }, "byteLength": { "a": true, "h": "Byte Length", "n": "byteLength", "r": true, "t": "`$INTEGER`", "key$": "byteLength", "index$": 1 }, "captions": { "a": true, "h": "Captions", "n": "captions", "r": false, "t": "`$ARRAY`", "key$": "captions", "index$": 2 }, "dataUrl": { "a": true, "h": "Data Url", "n": "dataUrl", "r": false, "t": "`$STRING`", "key$": "dataUrl", "index$": 3 }, "delayMs": { "a": true, "h": "Delay Ms", "n": "delayMs", "r": true, "t": "`$INTEGER`", "key$": "delayMs", "index$": 4 }, "durationMs": { "a": true, "h": "Duration Ms", "n": "durationMs", "r": false, "t": "`$INTEGER`", "key$": "durationMs", "index$": 5 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": true, "t": "`$STRING`", "key$": "filename", "index$": 6 }, "fps": { "a": true, "h": "Fps", "n": "fps", "r": false, "t": "`$INTEGER`", "key$": "fps", "index$": 7 }, "gifSlug": { "a": true, "h": "Gif Slug", "n": "gifSlug", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Required for /api/v1/gifs/generate.", "t": "`$STRING`", "key$": "gifSlug", "index$": 8 }, "height": { "a": true, "h": "Height", "n": "height", "r": true, "t": "`$INTEGER`", "key$": "height", "index$": 9 }, "mimeType": { "a": true, "h": "Mime Type", "n": "mimeType", "r": true, "t": "`$STRING`", "key$": "mimeType", "index$": 10 }, "pages": { "a": true, "h": "Pages", "n": "pages", "r": true, "t": "`$INTEGER`", "key$": "pages", "index$": 11 }, "parameters": { "a": true, "h": "Parameters", "n": "parameters", "r": true, "t": "`$OBJECT`", "key$": "parameters", "index$": 12 }, "returnBase64": { "a": true, "h": "Return Base64", "n": "returnBase64", "r": false, "sh": "Only used by /api/v1/gifs/generate.", "t": "`$BOOLEAN`", "key$": "returnBase64", "index$": 13 }, "sourceDurationMs": { "a": true, "h": "Source Duration Ms", "n": "sourceDurationMs", "r": true, "t": "`$INTEGER`", "key$": "sourceDurationMs", "index$": 14 }, "startMs": { "a": true, "h": "Start Ms", "n": "startMs", "r": false, "t": "`$INTEGER`", "key$": "startMs", "index$": 15 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$ARRAY`", "key$": "tags", "index$": 16 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 17 }, "width": { "a": true, "h": "Width", "n": "width", "r": true, "t": "`$INTEGER`", "key$": "width", "index$": 18 }, "widthPx": { "a": true, "h": "Width Px", "n": "widthPx", "r": false, "t": "`$INTEGER`", "key$": "widthPx", "index$": 19 } }, "name": "generate", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/gifs/generate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/gifs/generate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "gifs" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "generate", "name__orig": "generate", "Name": "Generate", "name_": "generate", "name-": "generate", "NAME": "GENERATE", "index$": 15 }, { "active": true, "entity": "generate", "key$": "BasicGenerateFlow", "kind": "basic", "name": "BasicGenerateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generate_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Generate', { "POST /api/v1/gifs/generate": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "gifSlug": { "type": "string", "description": "Required for /api/v1/gifs/generate.", "key$": "gifSlug" }, "widthPx": { "type": "integer", "minimum": 100, "maximum": 480, "key$": "widthPx" }, "startMs": { "type": "integer", "minimum": 0, "key$": "startMs" }, "durationMs": { "type": "integer", "minimum": 100, "maximum": 24000, "key$": "durationMs" }, "fps": { "type": "integer", "minimum": 10, "maximum": 24, "key$": "fps" }, "title": { "type": "string", "maxLength": 120, "key$": "title" }, "tags": { "type": "array", "items": { "type": "string" }, "maxItems": 8, "key$": "tags" }, "captions": { "type": "array", "items": { "type": "object", "required": ["text"], "properties": { "id": { "type": "string", "maxLength": 80 }, "text": { "type": "string", "maxLength": 120 }, "x": { "type": "number", "minimum": 0, "maximum": 100 }, "y": { "type": "number", "minimum": 0, "maximum": 100 }, "fontSize": { "type": "number", "minimum": 14, "maximum": 64 }, "boxWidthPct": { "type": "number", "minimum": 20, "maximum": 100 }, "maxLines": { "type": "integer", "minimum": 1, "maximum": 4 }, "color": { "type": "string" }, "stroke": { "type": "string" }, "textAlign": { "type": "string", "enum": ["left", "center", "right"] }, "fontFamily": { "type": "string", "enum": ["impact", "arial", "poster"] } }, "x-ref": "#/components/schemas/GifCaptionInput" }, "maxItems": 4, "key$": "captions" }, "returnBase64": { "type": "boolean", "description": "Only used by /api/v1/gifs/generate.", "key$": "returnBase64" } }, "x-ref": "#/components/schemas/GenerateGifRequest", "index$": 1 } } } }, "responses": { "200": { "description": "Generated GIF metadata", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "data"], "properties": { "ok": { "type": "boolean", "const": true }, "data": { "type": "object", "required": ["gifSlug", "filename", "mimeType", "byteLength", "width", "height", "pages", "delayMs", "sourceDurationMs", "parameters"], "properties": { "gifSlug": { "type": "string", "key$": "gifSlug" }, "title": { "type": "string", "key$": "title" }, "filename": { "type": "string", "key$": "filename" }, "mimeType": { "type": "string", "const": "image/gif", "key$": "mimeType" }, "byteLength": { "type": "integer", "minimum": 1, "key$": "byteLength" }, "width": { "type": "integer", "minimum": 1, "key$": "width" }, "height": { "type": "integer", "minimum": 1, "key$": "height" }, "pages": { "type": "integer", "minimum": 1, "key$": "pages" }, "delayMs": { "type": "integer", "minimum": 1, "key$": "delayMs" }, "sourceDurationMs": { "type": "integer", "minimum": 0, "key$": "sourceDurationMs" }, "parameters": { "type": "object", "properties": { "gifSlug": { "type": "string", "description": "Required for /api/v1/gifs/generate.", "key$": "gifSlug" }, "widthPx": { "type": "integer", "minimum": 100, "maximum": 480, "key$": "widthPx" }, "startMs": { "type": "integer", "minimum": 0, "key$": "startMs" }, "durationMs": { "type": "integer", "minimum": 100, "maximum": 24000, "key$": "durationMs" }, "fps": { "type": "integer", "minimum": 10, "maximum": 24, "key$": "fps" }, "title": { "type": "string", "maxLength": 120, "key$": "title" }, "tags": { "type": "array", "items": { "type": "string" }, "maxItems": 8, "key$": "tags" }, "captions": { "type": "array", "items": { "type": "object", "required": ["text"], "properties": { "id": { "type": "string", "maxLength": 80 }, "text": { "type": "string", "maxLength": 120 }, "x": { "type": "number", "minimum": 0, "maximum": 100 }, "y": { "type": "number", "minimum": 0, "maximum": 100 }, "fontSize": { "type": "number", "minimum": 14, "maximum": 64 }, "boxWidthPct": { "type": "number", "minimum": 20, "maximum": 100 }, "maxLines": { "type": "integer", "minimum": 1, "maximum": 4 }, "color": { "type": "string" }, "stroke": { "type": "string" }, "textAlign": { "type": "string", "enum": ["left", "center", "right"] }, "fontFamily": { "type": "string", "enum": ["impact", "arial", "poster"] } }, "x-ref": "#/components/schemas/GifCaptionInput" }, "maxItems": 4, "key$": "captions" }, "returnBase64": { "type": "boolean", "description": "Only used by /api/v1/gifs/generate.", "key$": "returnBase64" } }, "x-ref": "#/components/schemas/GenerateGifRequest", "key$": "parameters" }, "base64": { "type": "string", "key$": "base64" }, "dataUrl": { "type": "string", "key$": "dataUrl" } }, "index$": 0 } }, "x-ref": "#/components/schemas/GenerateGifResponse" } } } }, "400": { "description": "Validation error" }, "404": { "description": "GIF template not found" }, "413": { "description": "Source or output GIF too large" }, "422": { "description": "Frame or pixel budget exceeded" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const generate_ref01_ent = client.Generate();
        let generate_ref01_data = setup.data.new.generate['generate_ref01'];
        generate_ref01_data = (await generate_ref01_ent.create(generate_ref01_data)).data();
        (0, node_assert_1.default)(null != generate_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generate/GenerateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generate01', 'generate02', 'generate03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_GENERATE_ENTID'];
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
//# sourceMappingURL=GenerateEntity.test.js.map