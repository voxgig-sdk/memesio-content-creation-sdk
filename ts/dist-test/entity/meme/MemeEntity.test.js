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
(0, node_test_1.describe)('MemeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.Meme();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'meme.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "altText": { "a": true, "h": "Alt Text", "n": "altText", "r": true, "t": "`$STRING`", "key$": "altText", "index$": 0 }, "canonicalImageUrl": { "a": true, "h": "Canonical Image Url", "n": "canonicalImageUrl", "r": true, "t": "`$STRING`", "key$": "canonicalImageUrl", "index$": 1 }, "canvas": { "a": true, "h": "Canvas", "n": "canvas", "r": true, "t": "`$OBJECT`", "key$": "canvas", "index$": 2 }, "captions": { "a": true, "h": "Captions", "n": "captions", "r": true, "t": "`$ARRAY`", "key$": "captions", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "imageUrl": { "a": true, "h": "Image Url", "n": "imageUrl", "r": true, "t": "`$STRING`", "key$": "imageUrl", "index$": 6 }, "nsfwStatus": { "a": true, "h": "Nsfw Status", "n": "nsfwStatus", "r": true, "t": "`$STRING`", "key$": "nsfwStatus", "index$": 7 }, "overlays": { "a": true, "h": "Overlays", "n": "overlays", "r": true, "t": "`$ARRAY`", "key$": "overlays", "index$": 8 }, "shareSlug": { "a": true, "h": "Share Slug", "n": "shareSlug", "r": true, "t": "`$STRING`", "key$": "shareSlug", "index$": 9 }, "shareUrl": { "a": true, "h": "Share Url", "n": "shareUrl", "r": true, "t": "`$STRING`", "key$": "shareUrl", "index$": 10 }, "shareViews": { "a": true, "h": "Share Views", "n": "shareViews", "r": true, "t": "`$INTEGER`", "key$": "shareViews", "index$": 11 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": true, "t": "`$STRING`", "key$": "slug", "index$": 12 }, "sourceImageUrl": { "a": true, "h": "Source Image Url", "n": "sourceImageUrl", "r": true, "t": "`$STRING`", "key$": "sourceImageUrl", "index$": 13 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": true, "t": "`$ARRAY`", "key$": "tags", "index$": 14 }, "templateSlug": { "a": true, "h": "Template Slug", "n": "templateSlug", "r": true, "t": "`$STRING`", "key$": "templateSlug", "index$": 15 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "t": "`$STRING`", "key$": "title", "index$": 16 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": true, "t": "`$STRING`", "key$": "visibility", "index$": 17 }, "watermark": { "a": true, "h": "Watermark", "n": "watermark", "r": true, "t": "`$OBJECT`", "key$": "watermark", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "meme", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/memes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "exclude_template_clone", "or": "exclude_template_clone", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "include_nsfw", "or": "include_nsfw", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "official_only", "or": "official_only", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "owner_token", "or": "owner_token", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "template_slug", "or": "template_slug", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "visibility", "or": "visibility", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/api/memes", "q": { "exist": ["exclude_template_clone", "include_nsfw", "official_only", "owner_token", "page", "page_size", "query", "template_slug", "visibility"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "memes" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/memes/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "owner_token", "or": "owner_token", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/memes/{slug}", "q": { "exist": ["id", "owner_token"] }, "r": { "param": { "slug": "id" } }, "s": [{ "lit": "api" }, { "lit": "memes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/memes/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/memes/{slug}", "q": { "exist": ["id"] }, "r": { "param": { "slug": "id" } }, "s": [{ "lit": "api" }, { "lit": "memes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "meme", "name__orig": "meme", "Name": "Meme", "name_": "meme", "name-": "meme", "NAME": "MEME", "index$": 19 }, { "active": true, "entity": "meme", "key$": "BasicMemeFlow", "kind": "basic", "name": "BasicMemeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "meme_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "meme_ref01", "srcdatavar": "meme_ref01_data", "suffix": "_dt0" }, "m": { "id": "meme01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-meme_ref01" } }], "index$": 1 }] }, 'Meme', { "GET /api/memes": { "protocol": "http", "responses": { "200": { "description": "Meme search results", "content": { "application/json": { "schema": { "type": "object", "required": ["items", "total", "nextPage", "page", "pageSize"], "properties": { "items": { "items": { "properties": { "altText": { "type": "string", "key$": "altText" }, "canonicalImageUrl": { "type": "string", "key$": "canonicalImageUrl" }, "createdAt": { "format": "date-time", "type": "string", "key$": "createdAt" }, "imageUrl": { "type": "string", "key$": "imageUrl" }, "nsfwStatus": { "enum": ["clear", "flagged"], "type": "string", "key$": "nsfwStatus" }, "shareSlug": { "type": "string", "key$": "shareSlug" }, "shareUrl": { "type": "string", "key$": "shareUrl" }, "shareViews": { "minimum": 0, "type": "integer", "key$": "shareViews" }, "slug": { "type": "string", "key$": "slug" }, "tags": { "items": { "type": "string" }, "type": "array", "key$": "tags" }, "templateSlug": { "type": "string", "key$": "templateSlug" }, "title": { "type": "string", "key$": "title" }, "visibility": { "enum": ["public", "private"], "type": "string", "key$": "visibility" } }, "required": ["slug", "shareSlug", "shareUrl", "title", "altText", "tags", "templateSlug", "visibility", "createdAt", "imageUrl", "canonicalImageUrl", "nsfwStatus", "shareViews"], "type": "object", "x-ref": "#/components/schemas/MemeSummary", "index$": 0 }, "key$": "items", "type": "array" }, "total": { "key$": "total", "minimum": 0, "type": "integer" }, "nextPage": { "key$": "nextPage", "type": ["integer", "null"] }, "page": { "key$": "page", "minimum": 1, "type": "integer" }, "pageSize": { "key$": "pageSize", "maximum": 50, "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/ListMemesResponse" } } } }, "400": { "description": "Validation error" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [{ "name": "query", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "templateSlug", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "visibility", "in": "query", "schema": { "type": "string", "enum": ["public", "private", "all"] }, "index$": 2 }, { "name": "ownerToken", "in": "query", "schema": { "type": "string", "format": "uuid" }, "index$": 3 }, { "name": "officialOnly", "in": "query", "schema": { "type": "boolean" }, "index$": 4 }, { "name": "excludeTemplateClones", "in": "query", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "includeNsfw", "in": "query", "schema": { "type": "boolean" }, "index$": 6 }, { "name": "page", "in": "query", "schema": { "type": "integer", "minimum": 1 }, "index$": 7 }, { "name": "pageSize", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 50 }, "index$": 8 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/memes/{slug}": { "protocol": "http", "responses": { "200": { "description": "Meme details", "content": { "application/json": { "schema": { "allOf": [{ "type": "object", "required": ["slug", "shareSlug", "shareUrl", "title", "altText", "tags", "templateSlug", "visibility", "createdAt", "imageUrl", "canonicalImageUrl", "nsfwStatus", "shareViews"], "properties": { "slug": { "type": "string", "key$": "slug" }, "shareSlug": { "type": "string", "key$": "shareSlug" }, "shareUrl": { "type": "string", "key$": "shareUrl" }, "title": { "type": "string", "key$": "title" }, "altText": { "type": "string", "key$": "altText" }, "tags": { "items": { "type": "string" }, "type": "array", "key$": "tags" }, "templateSlug": { "type": "string", "key$": "templateSlug" }, "visibility": { "enum": ["public", "private"], "type": "string", "key$": "visibility" }, "createdAt": { "format": "date-time", "type": "string", "key$": "createdAt" }, "imageUrl": { "type": "string", "key$": "imageUrl" }, "canonicalImageUrl": { "type": "string", "key$": "canonicalImageUrl" }, "nsfwStatus": { "enum": ["clear", "flagged"], "type": "string", "key$": "nsfwStatus" }, "shareViews": { "minimum": 0, "type": "integer", "key$": "shareViews" } }, "x-ref": "#/components/schemas/MemeSummary", "index$": 0 }, { "type": "object", "required": ["sourceImageUrl", "captions", "overlays", "canvas", "watermark"], "properties": { "sourceImageUrl": { "type": "string", "key$": "sourceImageUrl" }, "captions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" }, "key$": "captions" }, "overlays": { "type": "array", "items": { "type": "object", "required": ["id", "label", "imageUrl", "x", "y", "widthPercent", "rotationDeg", "opacity"], "properties": { "id": { "type": "string" }, "label": { "type": "string" }, "imageUrl": { "type": "string" }, "sourceImageUrl": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "widthPercent": { "type": "number" }, "rotationDeg": { "type": "number" }, "opacity": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "flippedX": { "type": "boolean" }, "backgroundRemoved": { "type": "boolean" } }, "x-ref": "#/components/schemas/MemeOverlayImage" }, "key$": "overlays" }, "canvas": { "type": "object", "required": ["aspectRatio", "focusX", "focusY", "zoomPercent", "crop", "spacing", "guides", "sourceAdjustments", "layerOrder", "transform"], "properties": { "aspectRatio": { "type": "string", "enum": ["original", "1:1", "4:5", "16:9"] }, "focusX": { "type": "number" }, "focusY": { "type": "number" }, "zoomPercent": { "type": "number" }, "crop": { "type": "object", "required": ["x", "y", "width", "height"], "properties": { "x": { "type": "number" }, "y": { "type": "number" }, "width": { "type": "number" }, "height": { "type": "number" } } }, "spacing": { "type": "object", "additionalProperties": true }, "guides": { "type": "object", "additionalProperties": true }, "sourceAdjustments": { "type": "object", "additionalProperties": true }, "layerOrder": { "type": "array", "items": { "type": "string" } }, "transform": { "type": "object", "additionalProperties": true } }, "x-ref": "#/components/schemas/MemeCanvasConfig", "key$": "canvas" }, "watermark": { "type": "object", "required": ["enabled", "text", "position", "scale"], "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string" }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number" } }, "x-ref": "#/components/schemas/MemeWatermarkConfig", "key$": "watermark" } }, "index$": 1 }], "x-ref": "#/components/schemas/MemeDetailResponse" } } } }, "400": { "description": "Validation error" }, "403": { "description": "Private meme requires owner token" }, "404": { "description": "Meme not found" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [{ "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "ownerToken", "in": "query", "schema": { "type": "string", "format": "uuid" }, "index$": 1 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "DELETE /api/memes/{slug}": { "protocol": "http", "responses": { "200": { "description": "Meme deleted", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "deleted", "slug", "shareSlug"], "properties": { "ok": { "type": "boolean" }, "deleted": { "type": "boolean" }, "slug": { "type": "string" }, "shareSlug": { "type": "string" } }, "x-ref": "#/components/schemas/DeleteMemeResponse" } } } }, "400": { "description": "Invalid slug" }, "401": { "description": "Authentication required" }, "403": { "description": "Origin validation failed" }, "404": { "description": "Meme not found for the signed-in user" }, "429": { "description": "Rate limit exceeded" } }, "parameters": [{ "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let meme_ref01_data = Object.values(setup.data.existing.meme)[0];
        // LIST
        const meme_ref01_ent = client.Meme();
        const meme_ref01_match = {};
        const meme_ref01_list = (await meme_ref01_ent.list(meme_ref01_match)).map((e) => e.data());
        // LOAD
        const meme_ref01_match_dt0 = {};
        meme_ref01_match_dt0.id = meme_ref01_data.id;
        const meme_ref01_data_dt0 = (await meme_ref01_ent.load(meme_ref01_match_dt0)).data();
        (0, node_assert_1.default)(meme_ref01_data_dt0.id === meme_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/meme/MemeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['meme01', 'meme02', 'meme03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_MEME_ENTID'];
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
//# sourceMappingURL=MemeEntity.test.js.map