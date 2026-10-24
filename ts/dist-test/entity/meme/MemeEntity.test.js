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
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('meme hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.MemesioContentCreationSDK.test(offline).Meme().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.MemesioContentCreationSDK.test(offline).Meme()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.MemesioContentCreationSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Meme().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.MemesioContentCreationSDK.test().Meme().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.MemesioContentCreationSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Meme().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Meme().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.MemesioContentCreationSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Meme().list({ "exclude_template_clone": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'meme.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "altText": { "a": true, "h": "Alt Text", "n": "altText", "r": true, "t": "`$STRING`", "key$": "altText", "index$": 0 }, "canonicalImageUrl": { "a": true, "h": "Canonical Image Url", "n": "canonicalImageUrl", "r": true, "t": "`$STRING`", "key$": "canonicalImageUrl", "index$": 1 }, "canvas": { "a": true, "h": "Canvas", "n": "canvas", "r": true, "t": "`$OBJECT`", "key$": "canvas", "index$": 2 }, "captions": { "a": true, "h": "Captions", "n": "captions", "r": true, "t": "`$ARRAY`", "key$": "captions", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "generationRunId": { "a": true, "h": "Generation Run Id", "n": "generationRunId", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "generationRunId", "index$": 5 }, "generationVariantId": { "a": true, "h": "Generation Variant Id", "n": "generationVariantId", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "generationVariantId", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 7 }, "imageDataUrl": { "a": true, "h": "Image Data Url", "n": "imageDataUrl", "r": true, "t": "`$STRING`", "key$": "imageDataUrl", "index$": 8 }, "imageUrl": { "a": true, "h": "Image Url", "n": "imageUrl", "r": true, "t": "`$STRING`", "key$": "imageUrl", "index$": 9 }, "nsfwStatus": { "a": true, "h": "Nsfw Status", "n": "nsfwStatus", "r": true, "t": "`$STRING`", "key$": "nsfwStatus", "index$": 10 }, "overlays": { "a": true, "h": "Overlays", "n": "overlays", "op": { "create": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$ARRAY`", "key$": "overlays", "index$": 11 }, "shareSlug": { "a": true, "h": "Share Slug", "n": "shareSlug", "r": true, "t": "`$STRING`", "key$": "shareSlug", "index$": 12 }, "shareUrl": { "a": true, "h": "Share Url", "n": "shareUrl", "r": true, "t": "`$STRING`", "key$": "shareUrl", "index$": 13 }, "shareViews": { "a": true, "h": "Share Views", "n": "shareViews", "r": true, "t": "`$INTEGER`", "key$": "shareViews", "index$": 14 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": true, "t": "`$STRING`", "key$": "slug", "index$": 15 }, "sourceImageUrl": { "a": true, "h": "Source Image Url", "n": "sourceImageUrl", "r": true, "t": "`$STRING`", "key$": "sourceImageUrl", "index$": 16 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": true, "t": "`$ARRAY`", "key$": "tags", "index$": 17 }, "templateSlug": { "a": true, "h": "Template Slug", "n": "templateSlug", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "templateSlug", "index$": 18 }, "title": { "a": true, "h": "Title", "n": "title", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "title", "index$": 19 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "visibility", "index$": 20 }, "watermark": { "a": true, "h": "Watermark", "n": "watermark", "r": true, "t": "`$OBJECT`", "key$": "watermark", "index$": 21 } }, "id": { "field": "id", "name": "id" }, "name": "meme", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["canvas", "captions", "generationRunId", "generationVariantId", "imageDataUrl", "overlays", "sourceImageUrl", "templateSlug", "title", "visibility", "watermark"], "co": { "id": "POST /api/memes", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/memes", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "memes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/memes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "exclude_template_clone", "or": "excludeTemplateClones", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "include_nsfw", "or": "includeNsfw", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "official_only", "or": "officialOnly", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "owner_token", "or": "ownerToken", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "page_size", "or": "pageSize", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "template_slug", "or": "templateSlug", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "visibility", "or": "visibility", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/api/memes", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "memes" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/memes/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "owner_token", "or": "ownerToken", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/memes/{slug}", "q": { "exist": ["id"] }, "r": { "param": { "slug": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "memes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/memes/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/memes/{slug}", "q": { "exist": ["id"] }, "r": { "param": { "slug": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "memes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "meme", "name__orig": "meme", "Name": "Meme", "name_": "meme", "name-": "meme", "NAME": "MEME", "index$": 17 }, { "active": true, "entity": "meme", "key$": "BasicMemeFlow", "kind": "basic", "name": "BasicMemeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "meme_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "meme_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "meme_ref01", "srcdatavar": "meme_ref01_data", "suffix": "_dt0" }, "m": { "id": "meme01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-meme_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "meme_ref01", "suffix": "_rm0" }, "m": { "id": "meme01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "meme_ref01" } }], "index$": 4 }] }, 'Meme', { "POST /api/memes": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceImageUrl", "captions", "imageDataUrl"], "properties": { "templateSlug": { "type": "string", "key$": "templateSlug" }, "sourceImageUrl": { "type": "string", "key$": "sourceImageUrl" }, "captions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "type": "string", "enum": [] }, "textAlign": { "type": "string", "enum": [] }, "semanticRole": { "type": "string", "enum": [] }, "preferredCase": { "type": "string", "enum": [] }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "type": "integer", "minimum": 1 }, "recommendedWordsMax": { "type": "integer", "minimum": 1 }, "recommendedCharsMin": { "type": "integer", "minimum": 1 }, "recommendedCharsMax": { "type": "integer", "minimum": 1 } }, "x-ref": "#/components/schemas/MemeCaption" }, "key$": "captions" }, "overlays": { "type": "array", "items": { "type": "object", "required": ["id", "label", "imageUrl", "x", "y", "widthPercent", "rotationDeg", "opacity"], "properties": { "id": { "type": "string" }, "label": { "type": "string" }, "imageUrl": { "type": "string" }, "sourceImageUrl": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "widthPercent": { "type": "number" }, "rotationDeg": { "type": "number" }, "opacity": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "flippedX": { "type": "boolean" }, "backgroundRemoved": { "type": "boolean" } }, "x-ref": "#/components/schemas/MemeOverlayImage" }, "key$": "overlays" }, "imageDataUrl": { "type": "string", "key$": "imageDataUrl" }, "visibility": { "type": "string", "enum": ["public", "private"], "key$": "visibility" }, "title": { "type": "string", "maxLength": 140, "key$": "title" }, "canvas": { "type": "object", "required": ["aspectRatio", "focusX", "focusY", "zoomPercent", "crop", "spacing", "guides", "sourceAdjustments", "layerOrder", "transform"], "properties": { "aspectRatio": { "type": "string", "enum": ["original", "1:1", "4:5", "16:9"] }, "focusX": { "type": "number" }, "focusY": { "type": "number" }, "zoomPercent": { "type": "number" }, "crop": { "type": "object", "required": ["x", "y", "width", "height"], "properties": { "x": {}, "y": {}, "width": {}, "height": {} } }, "spacing": { "type": "object", "additionalProperties": true }, "guides": { "type": "object", "additionalProperties": true }, "sourceAdjustments": { "type": "object", "additionalProperties": true }, "layerOrder": { "type": "array", "items": { "type": "string" } }, "transform": { "type": "object", "additionalProperties": true } }, "x-ref": "#/components/schemas/MemeCanvasConfig", "key$": "canvas" }, "watermark": { "type": "object", "required": ["enabled", "text", "position", "scale"], "properties": { "enabled": { "type": "boolean" }, "text": { "type": "string" }, "position": { "type": "string", "enum": ["top_left", "top_right", "bottom_left", "bottom_right"] }, "scale": { "type": "number" } }, "x-ref": "#/components/schemas/MemeWatermarkConfig", "key$": "watermark" }, "generationRunId": { "type": ["string", "null"], "key$": "generationRunId" }, "generationVariantId": { "type": ["string", "null"], "key$": "generationVariantId" } }, "index$": 1 } } } }, "parameters": [] }, "GET /api/memes": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "templateSlug", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "visibility", "in": "query", "schema": { "type": "string", "enum": ["public", "private", "all"] }, "index$": 2 }, { "name": "ownerToken", "in": "query", "schema": { "type": "string", "format": "uuid" }, "index$": 3 }, { "name": "officialOnly", "in": "query", "schema": { "type": "boolean" }, "index$": 4 }, { "name": "excludeTemplateClones", "in": "query", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "includeNsfw", "in": "query", "schema": { "type": "boolean" }, "index$": 6 }, { "name": "page", "in": "query", "schema": { "type": "integer", "minimum": 1 }, "index$": 7 }, { "name": "pageSize", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 50 }, "index$": 8 }] }, "GET /api/memes/{slug}": { "protocol": "http", "parameters": [{ "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "ownerToken", "in": "query", "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "DELETE /api/memes/{slug}": { "protocol": "http", "parameters": [{ "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const meme_ref01_ent = client.Meme();
        let meme_ref01_data = setup.data.new.meme['meme_ref01'];
        meme_ref01_data = (await meme_ref01_ent.create(meme_ref01_data)).data();
        (0, node_assert_1.default)(null != meme_ref01_data.id);
        // LIST
        const meme_ref01_match = {};
        const meme_ref01_list = (await meme_ref01_ent.list(meme_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(meme_ref01_list, { id: meme_ref01_data.id })));
        // LOAD
        const meme_ref01_match_dt0 = {};
        meme_ref01_match_dt0.id = meme_ref01_data.id;
        const meme_ref01_data_dt0 = (await meme_ref01_ent.load(meme_ref01_match_dt0)).data();
        (0, node_assert_1.default)(meme_ref01_data_dt0.id === meme_ref01_data.id);
        // REMOVE
        const meme_ref01_match_rm0 = { id: meme_ref01_data.id };
        await meme_ref01_ent.remove(meme_ref01_match_rm0);
        // LIST
        const meme_ref01_match_rt0 = {};
        const meme_ref01_list_rt0 = (await meme_ref01_ent.list(meme_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(meme_ref01_list_rt0, { id: meme_ref01_data.id })));
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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