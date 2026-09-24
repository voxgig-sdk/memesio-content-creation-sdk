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
(0, node_test_1.describe)('AiMemeGenerationSucceededEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.AiMemeGenerationSucceeded();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_meme_generation_succeeded.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowHeuristicFallback": { "a": true, "h": "Allow Heuristic Fallback", "n": "allowHeuristicFallback", "r": false, "t": "`$BOOLEAN`", "key$": "allowHeuristicFallback", "index$": 0 }, "captionSource": { "a": true, "h": "Caption Source", "n": "captionSource", "r": false, "t": "`$STRING`", "key$": "captionSource", "index$": 1 }, "captions": { "a": true, "h": "Captions", "n": "captions", "r": false, "t": "`$ARRAY`", "key$": "captions", "index$": 2 }, "correlationId": { "a": true, "h": "Correlation Id", "n": "correlationId", "r": false, "t": "`$STRING`", "key$": "correlationId", "index$": 3 }, "degradedFromAsync": { "a": true, "h": "Degraded From Async", "n": "degradedFromAsync", "r": false, "t": "`$BOOLEAN`", "key$": "degradedFromAsync", "index$": 4 }, "editableCaptions": { "a": true, "h": "Editable Captions", "n": "editableCaptions", "r": false, "t": "`$ARRAY`", "key$": "editableCaptions", "index$": 5 }, "flow": { "a": true, "h": "Flow", "n": "flow", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "flow", "index$": 6 }, "imageUrl": { "a": true, "h": "Image Url", "n": "imageUrl", "r": false, "t": "`$STRING`", "key$": "imageUrl", "index$": 7 }, "mode": { "a": true, "h": "Mode", "n": "mode", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "mode", "index$": 8 }, "ok": { "a": true, "h": "Ok", "n": "ok", "r": true, "t": "`$BOOLEAN`", "key$": "ok", "index$": 9 }, "preferredProviderId": { "a": true, "h": "Preferred Provider Id", "n": "preferredProviderId", "r": false, "t": "`$STRING`", "key$": "preferredProviderId", "index$": 10 }, "prompt": { "a": true, "h": "Prompt", "n": "prompt", "r": true, "t": "`$STRING`", "key$": "prompt", "index$": 11 }, "rewriteNote": { "a": true, "h": "Rewrite Note", "n": "rewriteNote", "r": false, "t": "`$STRING`", "key$": "rewriteNote", "index$": 12 }, "runId": { "a": true, "h": "Run Id", "n": "runId", "r": false, "t": "`$STRING`", "key$": "runId", "index$": 13 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 14 }, "templateId": { "a": true, "h": "Template Id", "n": "templateId", "r": false, "t": "`$STRING`", "key$": "templateId", "index$": 15 }, "tone": { "a": true, "h": "Tone", "n": "tone", "r": false, "t": "`$STRING`", "key$": "tone", "index$": 16 }, "toneCues": { "a": true, "h": "Tone Cues", "n": "toneCues", "r": false, "t": "`$ARRAY`", "key$": "toneCues", "index$": 17 }, "variantCount": { "a": true, "h": "Variant Count", "n": "variantCount", "op": { "create": { "req": false, "type": "`$NUMBER`" } }, "r": true, "t": "`$INTEGER`", "key$": "variantCount", "index$": 18 }, "variants": { "a": true, "h": "Variants", "n": "variants", "r": true, "t": "`$ARRAY`", "key$": "variants", "index$": 19 }, "workspaceId": { "a": true, "h": "Workspace Id", "n": "workspaceId", "r": false, "t": "`$STRING`", "key$": "workspaceId", "index$": 20 } }, "name": "ai_meme_generation_succeeded", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/ai/memes/generate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/ai/memes/generate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "memes" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v1/memes/generate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/memes/generate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "memes" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "ai_meme_generation_succeeded", "name__orig": "ai_meme_generation_succeeded", "Name": "AiMemeGenerationSucceeded", "name_": "ai_meme_generation_succeeded", "name-": "ai-meme-generation-succeeded", "NAME": "AI_MEME_GENERATION_SUCCEEDED", "index$": 4 }, { "active": true, "entity": "ai_meme_generation_succeeded", "key$": "BasicAiMemeGenerationSucceededFlow", "kind": "basic", "name": "BasicAiMemeGenerationSucceededFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_meme_generation_succeeded_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'AiMemeGenerationSucceeded', { "POST /api/ai/memes/generate": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["prompt"], "properties": { "mode": { "type": "string", "enum": ["template"], "key$": "mode" }, "prompt": { "type": "string", "minLength": 1, "maxLength": 500, "key$": "prompt" }, "flow": { "type": "string", "enum": ["text_to_meme"], "key$": "flow" }, "captionSource": { "type": "string", "enum": ["input", "prompt"], "key$": "captionSource" }, "imageUrl": { "type": "string", "key$": "imageUrl" }, "templateId": { "type": "string", "key$": "templateId" }, "captions": { "type": "array", "items": { "type": "string" }, "maxItems": 6, "key$": "captions" }, "editableCaptions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" }, "maxItems": 8, "key$": "editableCaptions" }, "tone": { "type": "string", "enum": ["sarcastic", "deadpan", "wholesome", "absurd", "corporate", "dark-lite", "brand"], "key$": "tone" }, "toneCues": { "type": "array", "items": { "type": "string" }, "maxItems": 6, "key$": "toneCues" }, "rewriteNote": { "type": "string", "maxLength": 160, "key$": "rewriteNote" }, "allowHeuristicFallback": { "type": "boolean", "key$": "allowHeuristicFallback" }, "variantCount": { "type": "number", "minimum": 1, "maximum": 5, "key$": "variantCount" }, "preferredProviderId": { "type": "string", "enum": ["hyperswitch_vision", "onnx_local", "openai_vision"], "key$": "preferredProviderId" }, "workspaceId": { "type": "string", "key$": "workspaceId" }, "correlationId": { "type": "string", "key$": "correlationId" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Meme variant generation payload", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "flow", "mode", "status", "variantCount", "variants"], "properties": { "ok": { "type": "boolean", "const": true, "key$": "ok" }, "runId": { "type": "string", "key$": "runId" }, "flow": { "type": "string", "enum": ["text_to_meme"], "key$": "flow" }, "mode": { "type": "string", "enum": ["template"], "key$": "mode" }, "status": { "type": "string", "const": "succeeded", "key$": "status" }, "variantCount": { "type": "integer", "minimum": 0, "key$": "variantCount" }, "variants": { "type": "array", "items": { "type": "object", "required": ["id", "mode", "providerId", "variantKind", "memeUrl", "pageUrl", "templateName", "fallbackUsed", "attempts", "estimatedCostUsd"], "properties": { "id": { "type": "string" }, "mode": { "type": "string", "enum": ["template"] }, "providerId": { "type": "string" }, "variantKind": { "type": "string", "enum": ["template_captioned", "rendered_image"] }, "memeUrl": { "type": ["string", "null"] }, "pageUrl": { "type": ["string", "null"] }, "templateName": { "type": ["string", "null"] }, "templateSlug": { "type": ["string", "null"] }, "sourceImageUrl": { "type": ["string", "null"] }, "templateSelectionStrategy": { "type": ["string", "null"], "enum": ["provided_template", "provided_image", "library_search", "recommendation", null] }, "captionGenerationStrategy": { "type": ["string", "null"], "enum": ["openai", "heuristic", "provided", null] }, "captions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" } }, "editable": { "type": "boolean" }, "fallbackUsed": { "type": "boolean" }, "attempts": { "type": "array", "items": { "type": "object", "additionalProperties": true } }, "estimatedCostUsd": { "type": "number", "minimum": 0 } }, "x-ref": "#/components/schemas/MemeGenerationVariant" }, "key$": "variants" }, "degradedFromAsync": { "type": "boolean", "key$": "degradedFromAsync" } }, "x-ref": "#/components/schemas/AiMemeGenerationSucceededResponse", "index$": 0 } } } }, "400": { "description": "Validation error" }, "429": { "description": "Daily AI quota exceeded" }, "500": { "description": "Provider execution failure" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/v1/memes/generate": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["prompt"], "properties": { "mode": { "type": "string", "enum": ["template"], "key$": "mode" }, "prompt": { "type": "string", "minLength": 1, "maxLength": 500, "key$": "prompt" }, "flow": { "type": "string", "enum": ["text_to_meme"], "key$": "flow" }, "captionSource": { "type": "string", "enum": ["input", "prompt"], "key$": "captionSource" }, "imageUrl": { "type": "string", "key$": "imageUrl" }, "templateId": { "type": "string", "key$": "templateId" }, "captions": { "type": "array", "items": { "type": "string" }, "maxItems": 6, "key$": "captions" }, "editableCaptions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" }, "maxItems": 8, "key$": "editableCaptions" }, "tone": { "type": "string", "enum": ["sarcastic", "deadpan", "wholesome", "absurd", "corporate", "dark-lite", "brand"], "key$": "tone" }, "toneCues": { "type": "array", "items": { "type": "string" }, "maxItems": 6, "key$": "toneCues" }, "rewriteNote": { "type": "string", "maxLength": 160, "key$": "rewriteNote" }, "allowHeuristicFallback": { "type": "boolean", "key$": "allowHeuristicFallback" }, "variantCount": { "type": "number", "minimum": 1, "maximum": 5, "key$": "variantCount" }, "preferredProviderId": { "type": "string", "enum": ["hyperswitch_vision", "onnx_local", "openai_vision"], "key$": "preferredProviderId" }, "workspaceId": { "type": "string", "key$": "workspaceId" }, "correlationId": { "type": "string", "key$": "correlationId" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Meme variant generation payload", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "flow", "mode", "status", "variantCount", "variants"], "properties": { "ok": { "type": "boolean", "const": true, "key$": "ok" }, "runId": { "type": "string", "key$": "runId" }, "flow": { "type": "string", "enum": ["text_to_meme"], "key$": "flow" }, "mode": { "type": "string", "enum": ["template"], "key$": "mode" }, "status": { "type": "string", "const": "succeeded", "key$": "status" }, "variantCount": { "type": "integer", "minimum": 0, "key$": "variantCount" }, "variants": { "type": "array", "items": { "type": "object", "required": ["id", "mode", "providerId", "variantKind", "memeUrl", "pageUrl", "templateName", "fallbackUsed", "attempts", "estimatedCostUsd"], "properties": { "id": { "type": "string" }, "mode": { "type": "string", "enum": ["template"] }, "providerId": { "type": "string" }, "variantKind": { "type": "string", "enum": ["template_captioned", "rendered_image"] }, "memeUrl": { "type": ["string", "null"] }, "pageUrl": { "type": ["string", "null"] }, "templateName": { "type": ["string", "null"] }, "templateSlug": { "type": ["string", "null"] }, "sourceImageUrl": { "type": ["string", "null"] }, "templateSelectionStrategy": { "type": ["string", "null"], "enum": ["provided_template", "provided_image", "library_search", "recommendation", null] }, "captionGenerationStrategy": { "type": ["string", "null"], "enum": ["openai", "heuristic", "provided", null] }, "captions": { "type": "array", "items": { "type": "object", "required": ["id", "text", "x", "y", "fontSize"], "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "x": { "type": "number" }, "y": { "type": "number" }, "fontSize": { "type": "number" }, "rotationDeg": { "type": "number" }, "hidden": { "type": "boolean" }, "locked": { "type": "boolean" }, "boxWidthPct": { "type": "number" }, "boxHeightPct": { "type": "number" }, "paddingPct": { "type": "number" }, "maxLines": { "type": "integer" }, "lineHeight": { "type": "number" }, "backgroundEnabled": { "type": "boolean" }, "backgroundColor": { "type": "string" }, "backgroundOpacity": { "type": "number" }, "letterSpacingEm": { "type": "number" }, "shadowStrength": { "type": "number" }, "color": { "type": "string" }, "stroke": { "type": "string" }, "fontFamily": { "enum": ["impact", "arial", "poster"], "type": "string" }, "textAlign": { "enum": ["left", "center", "right"], "type": "string" }, "semanticRole": { "enum": ["setup", "contrast", "punchline", "reaction", "label"], "type": "string" }, "preferredCase": { "enum": ["uppercase", "sentence", "title", "preserve"], "type": "string" }, "exampleText": { "type": "string" }, "recommendedWordsMin": { "minimum": 1, "type": "integer" }, "recommendedWordsMax": { "minimum": 1, "type": "integer" }, "recommendedCharsMin": { "minimum": 1, "type": "integer" }, "recommendedCharsMax": { "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/MemeCaption" } }, "editable": { "type": "boolean" }, "fallbackUsed": { "type": "boolean" }, "attempts": { "type": "array", "items": { "type": "object", "additionalProperties": true } }, "estimatedCostUsd": { "type": "number", "minimum": 0 } }, "x-ref": "#/components/schemas/MemeGenerationVariant" }, "key$": "variants" }, "degradedFromAsync": { "type": "boolean", "key$": "degradedFromAsync" } }, "x-ref": "#/components/schemas/AiMemeGenerationSucceededResponse", "index$": 0 } } } }, "400": { "description": "Validation error" }, "401": { "description": "Developer or agent API key required" }, "429": { "description": "Daily AI quota exceeded" }, "500": { "description": "Provider execution failure" } }, "parameters": [], "security": [{ "DeveloperApiKeyAuth": [] }, { "AgentApiKeyAuth": [] }], "securitySource": "operation", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_meme_generation_succeeded_ref01_ent = client.AiMemeGenerationSucceeded();
        let ai_meme_generation_succeeded_ref01_data = setup.data.new.ai_meme_generation_succeeded['ai_meme_generation_succeeded_ref01'];
        ai_meme_generation_succeeded_ref01_data = (await ai_meme_generation_succeeded_ref01_ent.create(ai_meme_generation_succeeded_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_meme_generation_succeeded_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_meme_generation_succeeded/AiMemeGenerationSucceededTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_meme_generation_succeeded01', 'ai_meme_generation_succeeded02', 'ai_meme_generation_succeeded03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AI_MEME_GENERATION_SUCCEEDED_ENTID'];
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
//# sourceMappingURL=AiMemeGenerationSucceededEntity.test.js.map