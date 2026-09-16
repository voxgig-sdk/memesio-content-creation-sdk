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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allowHeuristicFallback", "req": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "captionSource", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "captions", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "correlationId", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "degradedFromAsync", "req": false, "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "name": "editableCaptions", "req": false, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "flow", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "imageUrl", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "mode", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "ok", "req": true, "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "preferredProviderId", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "prompt", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "rewriteNote", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "runId", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "templateId", "req": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "tone", "req": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "toneCues", "req": false, "type": "`$ARRAY`", "index$": 17 }, { "active": true, "name": "variantCount", "op": { "create": { "req": false, "type": "`$NUMBER`" } }, "req": true, "type": "`$INTEGER`", "index$": 18 }, { "active": true, "name": "variants", "req": true, "type": "`$ARRAY`", "index$": 19 }, { "active": true, "name": "workspaceId", "req": false, "type": "`$STRING`", "index$": 20 }], "name": "ai_meme_generation_succeeded", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/ai/memes/generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"allowHeuristicFallback\":{\"type\":\"boolean\"},\"captionSource\":{\"enum\":[\"input\",\"prompt\"],\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"correlationId\":{\"type\":\"string\"},\"editableCaptions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"maxItems\":8,\"type\":\"array\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"preferredProviderId\":{\"enum\":[\"hyperswitch_vision\",\"onnx_local\",\"openai_vision\"],\"type\":\"string\"},\"prompt\":{\"maxLength\":500,\"minLength\":1,\"type\":\"string\"},\"rewriteNote\":{\"maxLength\":160,\"type\":\"string\"},\"templateId\":{\"type\":\"string\"},\"tone\":{\"enum\":[\"sarcastic\",\"deadpan\",\"wholesome\",\"absurd\",\"corporate\",\"dark-lite\",\"brand\"],\"type\":\"string\"},\"toneCues\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"variantCount\":{\"maximum\":5,\"minimum\":1,\"type\":\"number\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"degradedFromAsync\":{\"type\":\"boolean\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"ok\":{\"const\":true,\"type\":\"boolean\"},\"runId\":{\"type\":\"string\"},\"status\":{\"const\":\"succeeded\",\"type\":\"string\"},\"variantCount\":{\"minimum\":0,\"type\":\"integer\"},\"variants\":{\"items\":{\"properties\":{\"attempts\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"},\"captionGenerationStrategy\":{\"enum\":[\"openai\",\"heuristic\",\"provided\",null],\"type\":[\"string\",\"null\"]},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"editable\":{\"type\":\"boolean\"},\"estimatedCostUsd\":{\"minimum\":0,\"type\":\"number\"},\"fallbackUsed\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"memeUrl\":{\"type\":[\"string\",\"null\"]},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"pageUrl\":{\"type\":[\"string\",\"null\"]},\"providerId\":{\"type\":\"string\"},\"sourceImageUrl\":{\"type\":[\"string\",\"null\"]},\"templateName\":{\"type\":[\"string\",\"null\"]},\"templateSelectionStrategy\":{\"enum\":[\"provided_template\",\"provided_image\",\"library_search\",\"recommendation\",null],\"type\":[\"string\",\"null\"]},\"templateSlug\":{\"type\":[\"string\",\"null\"]},\"variantKind\":{\"enum\":[\"template_captioned\",\"rendered_image\"],\"type\":\"string\"}},\"required\":[\"id\",\"mode\",\"providerId\",\"variantKind\",\"memeUrl\",\"pageUrl\",\"templateName\",\"fallbackUsed\",\"attempts\",\"estimatedCostUsd\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"ok\",\"flow\",\"mode\",\"status\",\"variantCount\",\"variants\"],\"type\":\"object\"}}},\"description\":\"Meme variant generation payload\"},\"400\":{\"description\":\"Validation error\"},\"429\":{\"description\":\"Daily AI quota exceeded\"},\"500\":{\"description\":\"Provider execution failure\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/ai/memes/generate", "segments": [{ "lit": "api" }, { "lit": "ai" }, { "lit": "memes" }, { "lit": "generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/memes/generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"allowHeuristicFallback\":{\"type\":\"boolean\"},\"captionSource\":{\"enum\":[\"input\",\"prompt\"],\"type\":\"string\"},\"captions\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"correlationId\":{\"type\":\"string\"},\"editableCaptions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"maxItems\":8,\"type\":\"array\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"imageUrl\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"preferredProviderId\":{\"enum\":[\"hyperswitch_vision\",\"onnx_local\",\"openai_vision\"],\"type\":\"string\"},\"prompt\":{\"maxLength\":500,\"minLength\":1,\"type\":\"string\"},\"rewriteNote\":{\"maxLength\":160,\"type\":\"string\"},\"templateId\":{\"type\":\"string\"},\"tone\":{\"enum\":[\"sarcastic\",\"deadpan\",\"wholesome\",\"absurd\",\"corporate\",\"dark-lite\",\"brand\"],\"type\":\"string\"},\"toneCues\":{\"items\":{\"type\":\"string\"},\"maxItems\":6,\"type\":\"array\"},\"variantCount\":{\"maximum\":5,\"minimum\":1,\"type\":\"number\"},\"workspaceId\":{\"type\":\"string\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"degradedFromAsync\":{\"type\":\"boolean\"},\"flow\":{\"enum\":[\"text_to_meme\"],\"type\":\"string\"},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"ok\":{\"const\":true,\"type\":\"boolean\"},\"runId\":{\"type\":\"string\"},\"status\":{\"const\":\"succeeded\",\"type\":\"string\"},\"variantCount\":{\"minimum\":0,\"type\":\"integer\"},\"variants\":{\"items\":{\"properties\":{\"attempts\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"},\"captionGenerationStrategy\":{\"enum\":[\"openai\",\"heuristic\",\"provided\",null],\"type\":[\"string\",\"null\"]},\"captions\":{\"items\":{\"properties\":{\"backgroundColor\":{\"type\":\"string\"},\"backgroundEnabled\":{\"type\":\"boolean\"},\"backgroundOpacity\":{\"type\":\"number\"},\"boxHeightPct\":{\"type\":\"number\"},\"boxWidthPct\":{\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"exampleText\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"type\":\"number\"},\"hidden\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"letterSpacingEm\":{\"type\":\"number\"},\"lineHeight\":{\"type\":\"number\"},\"locked\":{\"type\":\"boolean\"},\"maxLines\":{\"type\":\"integer\"},\"paddingPct\":{\"type\":\"number\"},\"preferredCase\":{\"enum\":[\"uppercase\",\"sentence\",\"title\",\"preserve\"],\"type\":\"string\"},\"recommendedCharsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedCharsMin\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMax\":{\"minimum\":1,\"type\":\"integer\"},\"recommendedWordsMin\":{\"minimum\":1,\"type\":\"integer\"},\"rotationDeg\":{\"type\":\"number\"},\"semanticRole\":{\"enum\":[\"setup\",\"contrast\",\"punchline\",\"reaction\",\"label\"],\"type\":\"string\"},\"shadowStrength\":{\"type\":\"number\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"required\":[\"id\",\"text\",\"x\",\"y\",\"fontSize\"],\"type\":\"object\"},\"type\":\"array\"},\"editable\":{\"type\":\"boolean\"},\"estimatedCostUsd\":{\"minimum\":0,\"type\":\"number\"},\"fallbackUsed\":{\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"memeUrl\":{\"type\":[\"string\",\"null\"]},\"mode\":{\"enum\":[\"template\"],\"type\":\"string\"},\"pageUrl\":{\"type\":[\"string\",\"null\"]},\"providerId\":{\"type\":\"string\"},\"sourceImageUrl\":{\"type\":[\"string\",\"null\"]},\"templateName\":{\"type\":[\"string\",\"null\"]},\"templateSelectionStrategy\":{\"enum\":[\"provided_template\",\"provided_image\",\"library_search\",\"recommendation\",null],\"type\":[\"string\",\"null\"]},\"templateSlug\":{\"type\":[\"string\",\"null\"]},\"variantKind\":{\"enum\":[\"template_captioned\",\"rendered_image\"],\"type\":\"string\"}},\"required\":[\"id\",\"mode\",\"providerId\",\"variantKind\",\"memeUrl\",\"pageUrl\",\"templateName\",\"fallbackUsed\",\"attempts\",\"estimatedCostUsd\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"ok\",\"flow\",\"mode\",\"status\",\"variantCount\",\"variants\"],\"type\":\"object\"}}},\"description\":\"Meme variant generation payload\"},\"400\":{\"description\":\"Validation error\"},\"401\":{\"description\":\"Developer or agent API key required\"},\"429\":{\"description\":\"Daily AI quota exceeded\"},\"500\":{\"description\":\"Provider execution failure\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/memes/generate", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "memes" }, { "lit": "generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "ai_meme_generation_succeeded", "name__orig": "ai_meme_generation_succeeded", "Name": "AiMemeGenerationSucceeded", "name_": "ai_meme_generation_succeeded", "name-": "ai-meme-generation-succeeded", "NAME": "AI_MEME_GENERATION_SUCCEEDED", "index$": 4 }, { "active": true, "entity": "ai_meme_generation_succeeded", "key$": "BasicAiMemeGenerationSucceededFlow", "kind": "basic", "name": "BasicAiMemeGenerationSucceededFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ai_meme_generation_succeeded_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'AiMemeGenerationSucceeded');
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