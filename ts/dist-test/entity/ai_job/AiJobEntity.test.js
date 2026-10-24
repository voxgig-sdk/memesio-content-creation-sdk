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
(0, node_test_1.describe)('AiJobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.AiJob();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.MemesioContentCreationSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AiJob().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action": { "a": true, "h": "Action", "n": "action", "r": true, "t": "`$STRING`", "key$": "action", "index$": 0 }, "actorId": { "a": true, "h": "Actor Id", "n": "actorId", "r": false, "t": "`$STRING`", "key$": "actorId", "index$": 1 }, "afterState": { "a": true, "h": "After State", "n": "afterState", "r": false, "t": "`$OBJECT`", "key$": "afterState", "index$": 2 }, "attempts": { "a": true, "h": "Attempts", "n": "attempts", "r": false, "t": "`$INTEGER`", "key$": "attempts", "index$": 3 }, "beforeState": { "a": true, "h": "Before State", "n": "beforeState", "r": false, "t": "`$OBJECT`", "key$": "beforeState", "index$": 4 }, "brushEdits": { "a": true, "h": "Brush Edits", "n": "brushEdits", "r": false, "t": "`$ARRAY`", "key$": "brushEdits", "index$": 5 }, "capability": { "a": true, "h": "Capability", "n": "capability", "r": true, "t": "`$STRING`", "key$": "capability", "index$": 6 }, "celebrityConfidence": { "a": true, "h": "Celebrity Confidence", "n": "celebrityConfidence", "r": false, "t": "`$NUMBER`", "key$": "celebrityConfidence", "index$": 7 }, "consentAttested": { "a": true, "h": "Consent Attested", "n": "consentAttested", "r": false, "t": "`$BOOLEAN`", "key$": "consentAttested", "index$": 8 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "t": "`$STRING`", "key$": "createdAt", "index$": 9 }, "detectedFaceCount": { "a": true, "h": "Detected Face Count", "n": "detectedFaceCount", "r": true, "t": "`$NUMBER`", "key$": "detectedFaceCount", "index$": 10 }, "edgeRefinement": { "a": true, "h": "Edge Refinement", "n": "edgeRefinement", "r": false, "t": "`$NUMBER`", "key$": "edgeRefinement", "index$": 11 }, "frameTimeMs": { "a": true, "h": "Frame Time Ms", "n": "frameTimeMs", "r": false, "t": "`$NUMBER`", "key$": "frameTimeMs", "index$": 12 }, "height": { "a": true, "h": "Height", "n": "height", "r": true, "t": "`$NUMBER`", "key$": "height", "index$": 13 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 14 }, "input": { "a": true, "h": "Input", "n": "input", "r": false, "t": "`$OBJECT`", "key$": "input", "index$": 15 }, "layerId": { "a": true, "h": "Layer Id", "n": "layerId", "r": true, "t": "`$STRING`", "key$": "layerId", "index$": 16 }, "layerType": { "a": true, "h": "Layer Type", "n": "layerType", "r": false, "t": "`$STRING`", "key$": "layerType", "index$": 17 }, "maxAttempts": { "a": true, "h": "Max Attempts", "n": "maxAttempts", "r": false, "t": "`$INTEGER`", "key$": "maxAttempts", "index$": 18 }, "maxFaces": { "a": true, "h": "Max Faces", "n": "maxFaces", "r": false, "t": "`$NUMBER`", "key$": "maxFaces", "index$": 19 }, "mediaType": { "a": true, "h": "Media Type", "n": "mediaType", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "mediaType", "index$": 20 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "t": "`$OBJECT`", "key$": "metadata", "index$": 21 }, "nsfwScore": { "a": true, "h": "Nsfw Score", "n": "nsfwScore", "r": false, "t": "`$NUMBER`", "key$": "nsfwScore", "index$": 22 }, "projectId": { "a": true, "h": "Project Id", "n": "projectId", "r": true, "t": "`$STRING`", "key$": "projectId", "index$": 23 }, "runAfterMs": { "a": true, "h": "Run After Ms", "n": "runAfterMs", "r": false, "t": "`$INTEGER`", "key$": "runAfterMs", "index$": 24 }, "sourceAssetUrl": { "a": true, "h": "Source Asset Url", "n": "sourceAssetUrl", "r": true, "t": "`$STRING`", "key$": "sourceAssetUrl", "index$": 25 }, "sourceFaceIndex": { "a": true, "h": "Source Face Index", "n": "sourceFaceIndex", "r": false, "t": "`$NUMBER`", "key$": "sourceFaceIndex", "index$": 26 }, "sourceImageUrl": { "a": true, "h": "Source Image Url", "n": "sourceImageUrl", "r": true, "t": "`$STRING`", "key$": "sourceImageUrl", "index$": 27 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 28 }, "targetAssetUrl": { "a": true, "h": "Target Asset Url", "n": "targetAssetUrl", "r": true, "t": "`$STRING`", "key$": "targetAssetUrl", "index$": 29 }, "targetFaceIndex": { "a": true, "h": "Target Face Index", "n": "targetFaceIndex", "r": false, "t": "`$NUMBER`", "key$": "targetFaceIndex", "index$": 30 }, "timeoutMs": { "a": true, "h": "Timeout Ms", "n": "timeoutMs", "r": false, "t": "`$INTEGER`", "key$": "timeoutMs", "index$": 31 }, "traceId": { "a": true, "h": "Trace Id", "n": "traceId", "r": false, "t": "`$STRING`", "key$": "traceId", "index$": 32 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "t": "`$STRING`", "key$": "updatedAt", "index$": 33 }, "versionId": { "a": true, "h": "Version Id", "n": "versionId", "r": false, "t": "`$STRING`", "key$": "versionId", "index$": 34 }, "width": { "a": true, "h": "Width", "n": "width", "r": true, "t": "`$NUMBER`", "key$": "width", "index$": 35 }, "workspaceId": { "a": true, "h": "Workspace Id", "n": "workspaceId", "r": false, "t": "`$STRING`", "key$": "workspaceId", "index$": 36 } }, "id": { "field": "id", "name": "id" }, "name": "ai_job", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["reason"], "co": { "id": "POST /api/ai/jobs/{jobId}/cancel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "job_id", "or": "jobId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/ai/jobs/{jobId}/cancel", "q": { "$action": "cancel", "exist": ["job_id"] }, "r": { "param": { "jobId": "job_id" } }, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["estimatedCostUsd", "output", "providerId", "workerId"], "co": { "id": "POST /api/ai/jobs/{jobId}/complete", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "job_id", "or": "jobId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/ai/jobs/{jobId}/complete", "q": { "$action": "complete", "exist": ["job_id"] }, "r": { "param": { "jobId": "job_id" } }, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "complete" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["brushEdits", "edgeRefinement", "frameTimeMs", "height", "mediaType", "sourceAssetUrl", "width"], "co": { "id": "POST /api/ai/background-remove", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/background-remove", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "background-remove" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["action", "actorId", "afterState", "beforeState", "layerId", "layerType", "metadata", "projectId", "versionId"], "co": { "id": "POST /api/ai/edit-history", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/edit-history", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "edit-history" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "bf": ["actorId", "celebrityConfidence", "consentAttested", "detectedFaceCount", "frameTimeMs", "height", "mediaType", "nsfwScore", "sourceAssetUrl", "sourceFaceIndex", "targetAssetUrl", "targetFaceIndex", "width", "workspaceId"], "co": { "id": "POST /api/ai/face-swap", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/face-swap", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "face-swap" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "bf": ["maxFaces", "sourceImageUrl"], "co": { "id": "POST /api/ai/face-targets", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/face-targets", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "face-targets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "bf": ["actorId", "capability", "input", "maxAttempts", "runAfterMs", "timeoutMs", "traceId", "workspaceId"], "co": { "id": "POST /api/ai/jobs", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/jobs", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/ai/edit-history", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "from_version_id", "or": "fromVersionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "layer_id", "or": "layerId", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "mode", "or": "mode", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "project_id", "or": "projectId", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "to_version_id", "or": "toVersionId", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/api/ai/edit-history", "q": { "exist": ["layer_id", "project_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "edit-history" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/ai/jobs/{jobId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "jobId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/ai/jobs/{jobId}", "q": { "exist": ["id"] }, "r": { "param": { "jobId": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "jobs" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/ai/jobs", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "page_size", "or": "pageSize", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/ai/jobs", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ai_job", "name__orig": "ai_job", "Name": "AiJob", "name_": "ai_job", "name-": "ai-job", "NAME": "AI_JOB", "index$": 3 }, { "active": true, "entity": "ai_job", "key$": "BasicAiJobFlow", "kind": "basic", "name": "BasicAiJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_job_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "ai_job_ref01", "srcdatavar": "ai_job_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_job_ref01" } }], "index$": 1 }] }, 'AiJob', { "POST /api/ai/jobs/{jobId}/cancel": { "protocol": "http", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "properties": { "reason": { "type": "string", "maxLength": 300 } } } } } }, "parameters": [{ "name": "jobId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /api/ai/jobs/{jobId}/complete": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["workerId"], "properties": { "workerId": { "type": "string" }, "output": { "type": "object", "additionalProperties": true }, "estimatedCostUsd": { "type": "number", "minimum": 0 }, "providerId": { "type": "string" } } } } } }, "parameters": [{ "name": "jobId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /api/ai/background-remove": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceAssetUrl", "width", "height"], "properties": { "sourceAssetUrl": { "type": "string", "key$": "sourceAssetUrl" }, "mediaType": { "type": "string", "enum": ["image", "video_frame"], "key$": "mediaType" }, "frameTimeMs": { "type": "number", "minimum": 0, "key$": "frameTimeMs" }, "width": { "type": "number", "minimum": 1, "key$": "width" }, "height": { "type": "number", "minimum": 1, "key$": "height" }, "edgeRefinement": { "type": "number", "minimum": 0, "maximum": 1, "key$": "edgeRefinement" }, "brushEdits": { "type": "array", "items": { "type": "object", "required": ["mode", "x", "y", "radius"], "properties": { "mode": { "type": "string", "enum": [] }, "x": { "type": "number" }, "y": { "type": "number" }, "radius": { "type": "number", "minimum": 1 }, "intensity": { "type": "number", "minimum": 0.1, "maximum": 1 } } }, "key$": "brushEdits" } }, "index$": 1 } } } }, "parameters": [] }, "POST /api/ai/edit-history": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action", "projectId", "layerId"], "properties": { "action": { "type": "string", "enum": ["record", "rollback"], "key$": "action" }, "projectId": { "type": "string", "key$": "projectId" }, "layerId": { "type": "string", "key$": "layerId" }, "layerType": { "type": "string", "enum": ["face_swap", "background_remove", "caption"], "key$": "layerType" }, "beforeState": { "type": "object", "additionalProperties": true, "key$": "beforeState" }, "afterState": { "type": "object", "additionalProperties": true, "key$": "afterState" }, "versionId": { "type": "string", "key$": "versionId" }, "actorId": { "type": "string", "key$": "actorId" }, "metadata": { "type": "object", "additionalProperties": true, "key$": "metadata" } }, "index$": 1 } } } }, "parameters": [] }, "POST /api/ai/face-swap": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceAssetUrl", "targetAssetUrl", "mediaType", "width", "height", "detectedFaceCount"], "properties": { "sourceAssetUrl": { "type": "string", "key$": "sourceAssetUrl" }, "targetAssetUrl": { "type": "string", "key$": "targetAssetUrl" }, "mediaType": { "type": "string", "enum": ["image", "video_frame"], "key$": "mediaType" }, "width": { "type": "number", "minimum": 1, "key$": "width" }, "height": { "type": "number", "minimum": 1, "key$": "height" }, "detectedFaceCount": { "type": "number", "minimum": 1, "key$": "detectedFaceCount" }, "sourceFaceIndex": { "type": "number", "minimum": 0, "key$": "sourceFaceIndex" }, "targetFaceIndex": { "type": "number", "minimum": 0, "key$": "targetFaceIndex" }, "frameTimeMs": { "type": "number", "minimum": 0, "key$": "frameTimeMs" }, "consentAttested": { "type": "boolean", "key$": "consentAttested" }, "celebrityConfidence": { "type": "number", "minimum": 0, "maximum": 1, "key$": "celebrityConfidence" }, "nsfwScore": { "type": "number", "minimum": 0, "maximum": 1, "key$": "nsfwScore" }, "actorId": { "type": "string", "key$": "actorId" }, "workspaceId": { "type": "string", "key$": "workspaceId" } }, "index$": 1 } } } }, "parameters": [] }, "POST /api/ai/face-targets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["sourceImageUrl"], "properties": { "sourceImageUrl": { "type": "string", "key$": "sourceImageUrl" }, "maxFaces": { "type": "number", "minimum": 1, "maximum": 8, "key$": "maxFaces" } }, "index$": 1 } } } }, "parameters": [] }, "POST /api/ai/jobs": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["capability"], "properties": { "capability": { "type": "string", "enum": ["face_swap", "background_remove", "caption_generate"], "key$": "capability" }, "input": { "type": "object", "additionalProperties": true, "key$": "input" }, "maxAttempts": { "type": "integer", "minimum": 1, "maximum": 10, "key$": "maxAttempts" }, "timeoutMs": { "type": "integer", "minimum": 1000, "maximum": 300000, "key$": "timeoutMs" }, "runAfterMs": { "type": "integer", "minimum": 0, "key$": "runAfterMs" }, "traceId": { "type": "string", "pattern": "^[a-f0-9]{32}$", "key$": "traceId" }, "actorId": { "type": "string", "key$": "actorId" }, "workspaceId": { "type": "string", "key$": "workspaceId" } }, "x-ref": "#/components/schemas/AiJobSubmitRequest", "index$": 1 } } } }, "parameters": [] }, "GET /api/ai/edit-history": { "protocol": "http", "parameters": [{ "name": "projectId", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "layerId", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "mode", "in": "query", "schema": { "type": "string", "enum": ["list", "compare"] }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 500 }, "index$": 3 }, { "name": "fromVersionId", "in": "query", "schema": { "type": "string" }, "index$": 4 }, { "name": "toVersionId", "in": "query", "schema": { "type": "string" }, "index$": 5 }] }, "GET /api/ai/jobs/{jobId}": { "protocol": "http", "parameters": [{ "name": "jobId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /api/ai/jobs": { "protocol": "http", "parameters": [{ "name": "status", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "type": "integer", "minimum": 1 }, "index$": 1 }, { "name": "pageSize", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 50 }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_job_ref01_ent = client.AiJob();
        let ai_job_ref01_data = setup.data.new.ai_job['ai_job_ref01'];
        ai_job_ref01_data = (await ai_job_ref01_ent.create(ai_job_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_job_ref01_data.id);
        // LOAD
        const ai_job_ref01_match_dt0 = {};
        ai_job_ref01_match_dt0.id = ai_job_ref01_data.id;
        const ai_job_ref01_data_dt0 = (await ai_job_ref01_ent.load(ai_job_ref01_match_dt0)).data();
        (0, node_assert_1.default)(ai_job_ref01_data_dt0.id === ai_job_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_job/AiJobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_job01', 'ai_job02', 'ai_job03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID'];
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
//# sourceMappingURL=AiJobEntity.test.js.map