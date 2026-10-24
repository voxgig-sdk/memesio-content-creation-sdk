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
(0, node_test_1.describe)('VideoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.Video();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'video.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "video", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["action", "project", "projectId", "sourceDeviceId", "updatedAt"], "co": { "id": "POST /api/video/drafts", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/drafts", "q": { "$action": "draft" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "drafts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["bitrateKbps", "container", "planTier", "presetId", "watermarkEnabled", "watermarkText"], "co": { "id": "POST /api/video/export-settings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/export-settings", "q": { "$action": "export_setting" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "export-settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["durationSeconds", "inputFormat", "mimeType", "outputPresetId", "planTier"], "co": { "id": "POST /api/video/formats", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/formats", "q": { "$action": "format" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "formats" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["action", "cancelled", "durationSeconds", "error", "jobId", "outputPresetId", "outputUrl", "planTier", "progressPercent", "projectId", "stage", "workerId"], "co": { "id": "POST /api/video/render-queue", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/render-queue", "q": { "$action": "render_queue" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "render-queue" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "bf": ["action", "audioAssetId", "beatOffsetMs", "bpm", "locale", "projectId", "stylePresetId", "syncToBeatGrid", "tone", "trackId", "transcript", "trendKeywords"], "co": { "id": "POST /api/video/subtitles", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/subtitles", "q": { "$action": "subtitle" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "subtitles" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "bf": ["action", "durationMs", "intensity", "presetId", "projectId", "startMs", "trackId"], "co": { "id": "POST /api/video/text-animations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/text-animations", "q": { "$action": "text_animation" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "text-animations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "bf": ["action", "assetId", "atMs", "durationMs", "easing", "frameRate", "name", "offsetMs", "projectId", "property", "sourceUrl", "startMs", "trackId", "type", "value"], "co": { "id": "POST /api/video/timeline", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video/timeline", "q": { "$action": "timeline" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "timeline" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/video/audio-library", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "kind", "or": "kind", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "tag", "or": "tag", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "target_bpm", "or": "targetBpm", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "tolerance_bpm", "or": "toleranceBpm", "r": false, "t": "`$INTEGER`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/api/video/audio-library", "q": { "$action": "audio_library" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "audio-library" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/video/drafts", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "project_id", "or": "projectId", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/video/drafts", "q": { "$action": "draft" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "drafts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/video/export-settings", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "bitrate_kbp", "or": "bitrateKbps", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "k": "query", "n": "container", "or": "container", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "plan_tier", "or": "planTier", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "preset_id", "or": "presetId", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "watermark_enabled", "or": "watermarkEnabled", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "query", "n": "watermark_text", "or": "watermarkText", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/api/video/export-settings", "q": { "$action": "export_setting" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "export-settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/video/formats", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "duration_second", "or": "durationSeconds", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "k": "query", "n": "input_format", "or": "inputFormat", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "mime_type", "or": "mimeType", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "output_preset_id", "or": "outputPresetId", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "plan_tier", "or": "planTier", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/video/formats", "q": { "$action": "format" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "formats" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /api/video/render-performance", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "refresh", "or": "refresh", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/video/render-performance", "q": { "$action": "render_performance" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "render-performance" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "GET /api/video/render-queue", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "mode", "or": "mode", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "plan_tier", "or": "planTier", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/video/render-queue", "q": { "$action": "render_queue" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "render-queue" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "co": { "id": "GET /api/video/subtitles", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "beat_offset_m", "or": "beatOffsetMs", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "bpm", "or": "bpm", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "locale", "or": "locale", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "style_preset_id", "or": "stylePresetId", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "sync_to_beat_grid", "or": "syncToBeatGrid", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "query", "n": "tone", "or": "tone", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "transcript", "or": "transcript", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "trend_keyword", "or": "trendKeywords", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/video/subtitles", "q": { "$action": "subtitle" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "subtitles" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }, { "a": true, "co": { "id": "GET /api/video/text-animations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "duration_m", "or": "durationMs", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "k": "query", "n": "intensity", "or": "intensity", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "preset_id", "or": "presetId", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "start_m", "or": "startMs", "r": false, "t": "`$NUMBER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/video/text-animations", "q": { "$action": "text_animation" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "text-animations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 7 }, { "a": true, "co": { "id": "GET /api/video/timeline", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "project_id", "or": "projectId", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/video/timeline", "q": { "$action": "timeline" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "video" }, { "lit": "timeline" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 8 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "video", "name__orig": "video", "Name": "Video", "name_": "video", "name-": "video", "NAME": "VIDEO", "index$": 22 }, { "active": true, "entity": "video", "key$": "BasicVideoFlow", "kind": "basic", "name": "BasicVideoFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "video_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": { "ref": "video_ref01", "srcdatavar": "video_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-video_ref01" } }], "unreachable": true }] }, 'Video', { "POST /api/video/drafts": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "action": { "type": "string", "enum": ["save", "resume"] }, "project": { "type": "object", "additionalProperties": true }, "projectId": { "type": "string" }, "updatedAt": { "type": "string", "format": "date-time" }, "sourceDeviceId": { "type": "string" } } } } } }, "parameters": [] }, "POST /api/video/export-settings": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["planTier", "presetId"], "properties": { "planTier": { "type": "string", "enum": ["free", "pro", "team"] }, "presetId": { "type": "string" }, "container": { "type": "string" }, "bitrateKbps": { "type": "number", "minimum": 1 }, "watermarkEnabled": { "type": "boolean" }, "watermarkText": { "type": "string" } } } } } }, "parameters": [] }, "POST /api/video/formats": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["planTier", "inputFormat", "mimeType", "outputPresetId", "durationSeconds"], "properties": { "planTier": { "type": "string", "enum": ["free", "pro", "team"] }, "inputFormat": { "type": "string" }, "mimeType": { "type": "string" }, "outputPresetId": { "type": "string" }, "durationSeconds": { "type": "number", "minimum": 0.1 } } } } } }, "parameters": [] }, "POST /api/video/render-queue": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["enqueue", "claim_next", "progress", "complete", "fail"] }, "projectId": { "type": "string" }, "outputPresetId": { "type": "string" }, "planTier": { "type": "string", "enum": ["free", "pro", "team"] }, "durationSeconds": { "type": "number", "minimum": 0.1 }, "workerId": { "type": "string" }, "jobId": { "type": "string" }, "progressPercent": { "type": "number", "minimum": 0, "maximum": 100 }, "stage": { "type": "string" }, "outputUrl": { "type": "string" }, "error": { "type": "string" }, "cancelled": { "type": "boolean" } } } } } }, "parameters": [] }, "POST /api/video/subtitles": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "action": { "type": "string", "enum": ["preview", "apply"] }, "transcript": { "type": "string" }, "audioAssetId": { "type": "string" }, "tone": { "type": "string" }, "locale": { "type": "string" }, "stylePresetId": { "type": "string" }, "trendKeywords": { "type": "array", "items": { "type": "string" } }, "syncToBeatGrid": { "type": "boolean" }, "bpm": { "type": "integer", "minimum": 60, "maximum": 220 }, "beatOffsetMs": { "type": "integer", "minimum": -60000, "maximum": 60000 }, "projectId": { "type": "string" }, "trackId": { "type": "string" } } } } } }, "parameters": [] }, "POST /api/video/text-animations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["presetId"], "properties": { "action": { "type": "string", "enum": ["preview", "apply"] }, "presetId": { "type": "string" }, "startMs": { "type": "number", "minimum": 0 }, "durationMs": { "type": "number", "minimum": 1 }, "intensity": { "type": "number", "minimum": 0.2, "maximum": 2 }, "projectId": { "type": "string" }, "trackId": { "type": "string" } } } } } }, "parameters": [] }, "POST /api/video/timeline": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["create", "add_track", "add_asset", "attach_asset", "upsert_keyframe"] }, "projectId": { "type": "string" }, "durationMs": { "type": "number", "minimum": 1 }, "frameRate": { "type": "number", "minimum": 12, "maximum": 60 }, "type": { "type": "string", "enum": ["video", "audio", "sticker", "text", "overlay"] }, "name": { "type": "string" }, "sourceUrl": { "type": "string" }, "trackId": { "type": "string" }, "assetId": { "type": "string" }, "startMs": { "type": "number", "minimum": 0 }, "offsetMs": { "type": "number", "minimum": 0 }, "atMs": { "type": "number", "minimum": 0 }, "property": { "type": "string" }, "value": { "type": "number" }, "easing": { "type": "string", "enum": ["linear", "ease_in", "ease_out", "ease_in_out"] } } } } } }, "parameters": [] }, "GET /api/video/audio-library": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "kind", "in": "query", "schema": { "type": "string", "enum": ["meme_loop", "punchline"] }, "index$": 1 }, { "name": "tag", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "targetBpm", "in": "query", "schema": { "type": "integer", "minimum": 60, "maximum": 220 }, "index$": 3 }, { "name": "toleranceBpm", "in": "query", "schema": { "type": "integer", "minimum": 2, "maximum": 60 }, "index$": 4 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 5 }] }, "GET /api/video/drafts": { "protocol": "http", "parameters": [{ "name": "projectId", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 200 }, "index$": 1 }] }, "GET /api/video/export-settings": { "protocol": "http", "parameters": [{ "name": "planTier", "in": "query", "schema": { "type": "string", "enum": ["free", "pro", "team"] }, "index$": 0 }, { "name": "presetId", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "container", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "bitrateKbps", "in": "query", "schema": { "type": "number", "minimum": 1 }, "index$": 3 }, { "name": "watermarkEnabled", "in": "query", "schema": { "type": "boolean" }, "index$": 4 }, { "name": "watermarkText", "in": "query", "schema": { "type": "string" }, "index$": 5 }] }, "GET /api/video/formats": { "protocol": "http", "parameters": [{ "name": "planTier", "in": "query", "schema": { "type": "string", "enum": ["free", "pro", "team"] }, "index$": 0 }, { "name": "inputFormat", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "mimeType", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "outputPresetId", "in": "query", "schema": { "type": "string" }, "index$": 3 }, { "name": "durationSeconds", "in": "query", "schema": { "type": "number", "minimum": 0.1 }, "index$": 4 }] }, "GET /api/video/render-performance": { "protocol": "http", "parameters": [{ "name": "refresh", "in": "query", "schema": { "type": "boolean" }, "index$": 0 }] }, "GET /api/video/render-queue": { "protocol": "http", "parameters": [{ "name": "mode", "in": "query", "schema": { "type": "string", "enum": ["snapshot", "list"] }, "index$": 0 }, { "name": "status", "in": "query", "schema": { "type": "string", "enum": ["queued", "running", "completed", "failed", "cancelled"] }, "index$": 1 }, { "name": "planTier", "in": "query", "schema": { "type": "string", "enum": ["free", "pro", "team"] }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 500 }, "index$": 3 }] }, "GET /api/video/subtitles": { "protocol": "http", "parameters": [{ "name": "transcript", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "tone", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "locale", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "stylePresetId", "in": "query", "schema": { "type": "string" }, "index$": 3 }, { "name": "trendKeywords", "in": "query", "schema": { "type": "string" }, "index$": 4 }, { "name": "syncToBeatGrid", "in": "query", "schema": { "type": "boolean" }, "index$": 5 }, { "name": "bpm", "in": "query", "schema": { "type": "integer", "minimum": 60, "maximum": 220 }, "index$": 6 }, { "name": "beatOffsetMs", "in": "query", "schema": { "type": "integer", "minimum": -60000, "maximum": 60000 }, "index$": 7 }] }, "GET /api/video/text-animations": { "protocol": "http", "parameters": [{ "name": "presetId", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "startMs", "in": "query", "schema": { "type": "number", "minimum": 0 }, "index$": 1 }, { "name": "durationMs", "in": "query", "schema": { "type": "number", "minimum": 1 }, "index$": 2 }, { "name": "intensity", "in": "query", "schema": { "type": "number", "minimum": 0.2, "maximum": 2 }, "index$": 3 }] }, "GET /api/video/timeline": { "protocol": "http", "parameters": [{ "name": "projectId", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 200 }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let video_ref01_data = Object.values(setup.data.existing.video)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/video/VideoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['video01', 'video02', 'video03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_VIDEO_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_VIDEO_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_VIDEO_ENTID'];
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
//# sourceMappingURL=VideoEntity.test.js.map