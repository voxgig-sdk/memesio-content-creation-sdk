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
(0, node_test_1.describe)('CreateMemeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.CreateMeme();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_meme.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "canvas": { "a": true, "h": "Canvas", "n": "canvas", "r": true, "t": "`$OBJECT`", "key$": "canvas", "index$": 0 }, "captions": { "a": true, "h": "Captions", "n": "captions", "r": true, "t": "`$ARRAY`", "key$": "captions", "index$": 1 }, "generationRunId": { "a": true, "h": "Generation Run Id", "n": "generationRunId", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "generationRunId", "index$": 2 }, "generationVariantId": { "a": true, "h": "Generation Variant Id", "n": "generationVariantId", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "generationVariantId", "index$": 3 }, "imageDataUrl": { "a": true, "h": "Image Data Url", "n": "imageDataUrl", "r": true, "t": "`$STRING`", "key$": "imageDataUrl", "index$": 4 }, "overlays": { "a": true, "h": "Overlays", "n": "overlays", "r": false, "t": "`$ARRAY`", "key$": "overlays", "index$": 5 }, "sourceImageUrl": { "a": true, "h": "Source Image Url", "n": "sourceImageUrl", "r": true, "t": "`$STRING`", "key$": "sourceImageUrl", "index$": 6 }, "templateSlug": { "a": true, "h": "Template Slug", "n": "templateSlug", "r": false, "t": "`$STRING`", "key$": "templateSlug", "index$": 7 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 8 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "t": "`$STRING`", "key$": "visibility", "index$": 9 }, "watermark": { "a": true, "h": "Watermark", "n": "watermark", "r": true, "t": "`$OBJECT`", "key$": "watermark", "index$": 10 } }, "name": "create_meme", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/memes", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/memes", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "memes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "create_meme", "name__orig": "create_meme", "Name": "CreateMeme", "name_": "create_meme", "name-": "create-meme", "NAME": "CREATE_MEME", "index$": 11 }, { "active": true, "entity": "create_meme", "key$": "BasicCreateMemeFlow", "kind": "basic", "name": "BasicCreateMemeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "create_meme_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CreateMeme', { "POST /api/memes": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceImageUrl", "captions", "imageDataUrl"], "properties": { "templateSlug": { "type": "string", "key$": "templateSlug" }, "sourceImageUrl": { "type": "string", "key$": "sourceImageUrl" }, "captions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" }, "key$": "captions" }, "overlays": { "type": "array", "items": { "type": "object", "required": ["id", "label", "imageUrl", "x", "y", "widthPercent", "rotationDeg", "opacity"], "properties": { "id": { "type": "string" }, "label": { "type": "string" }, "imageUrl": { "type": "string" }, "sourceImageUrl": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "widthPercent": { "type": "number" }, "rotationDeg": { "type": "number" }, "opacity": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "flippedX": { "type": "boolean" }, "backgroundRemoved": { "type": "boolean" } }, "x-ref": "#/components/schemas/MemeOverlayImage" }, "key$": "overlays" }, "imageDataUrl": { "type": "string", "key$": "imageDataUrl" }, "visibility": { "type": "string", "enum": ["public", "private"], "key$": "visibility" }, "title": { "type": "string", "maxLength": 140, "key$": "title" }, "canvas": { "type": "object", "required": ["aspectRatio", "focusX", "focusY", "zoomPercent", "crop", "spacing", "guides", "sourceAdjustments", "layerOrder", "transform"], "properties": { "aspectRatio": { "type": "string", "enum": ["original", "1:1", "4:5", "16:9"] }, "focusX": { "type": "number" }, "focusY": { "type": "number" }, "zoomPercent": { "type": "number" }, "crop": { "type": "object", "required": ["x", "y", "width", "height"], "properties": { "x": { "type": "number" }, "y": { "type": "number" }, "width": { "type": "number" }, "height": { "type": "number" } } }, "spacing": { "type": "object", "additionalProperties": true }, "guides": { "type": "object", "additionalProperties": true }, "sourceAdjustments": { "type": "object", "additionalProperties": true }, "layerOrder": { "type": "array", "items": { "type": "string" } }, "transform": { "type": "object", "additionalProperties": true } }, "x-ref": "#/components/schemas/MemeCanvasConfig", "key$": "canvas" }, "watermark": { "type": "object", "required": ["enabled", "text", "position", "scale"], "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string" }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number" } }, "x-ref": "#/components/schemas/MemeWatermarkConfig", "key$": "watermark" }, "generationRunId": { "type": ["string", "null"], "key$": "generationRunId" }, "generationVariantId": { "type": ["string", "null"], "key$": "generationVariantId" } }, "index$": 1 } } } }, "responses": { "201": { "description": "Meme stored", "content": { "application/json": { "schema": { "type": "object", "required": ["slug", "shareSlug", "shareUrl", "imageUrl", "canonicalImageUrl", "altText", "tags", "ownerToken", "visibility", "guestSessionId"], "properties": { "slug": { "type": "string" }, "shareSlug": { "type": "string" }, "shareUrl": { "type": "string" }, "imageUrl": { "type": "string" }, "canonicalImageUrl": { "type": "string" }, "altText": { "type": "string" }, "tags": { "type": "array", "items": { "type": "string" } }, "ownerToken": { "type": "string" }, "visibility": { "type": "string", "enum": ["public", "private"] }, "guestSessionId": { "type": ["string", "null"] } }, "x-ref": "#/components/schemas/CreateMemeResponse" } } } }, "400": { "description": "Validation error" }, "401": { "description": "Invalid guest session token" }, "403": { "description": "Origin validation failed" }, "409": { "description": "Idempotency conflict" }, "422": { "description": "Validation blocked by content policy or unchanged template clone" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_meme_ref01_ent = client.CreateMeme();
        let create_meme_ref01_data = setup.data.new.create_meme['create_meme_ref01'];
        create_meme_ref01_data = (await create_meme_ref01_ent.create(create_meme_ref01_data)).data();
        (0, node_assert_1.default)(null != create_meme_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_meme/CreateMemeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_meme01', 'create_meme02', 'create_meme03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_CREATE_MEME_ENTID'];
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
//# sourceMappingURL=CreateMemeEntity.test.js.map