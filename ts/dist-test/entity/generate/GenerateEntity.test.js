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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "base64", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "byteLength", "req": true, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "captions", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "dataUrl", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "delayMs", "req": true, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "durationMs", "req": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "filename", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "fps", "req": false, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "gifSlug", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Required for /api/v1/gifs/generate.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "height", "req": true, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "name": "mimeType", "req": true, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "pages", "req": true, "type": "`$INTEGER`", "index$": 11 }, { "active": true, "name": "parameters", "req": true, "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "returnBase64", "req": false, "short": "Only used by /api/v1/gifs/generate.", "type": "`$BOOLEAN`", "index$": 13 }, { "active": true, "name": "sourceDurationMs", "req": true, "type": "`$INTEGER`", "index$": 14 }, { "active": true, "name": "startMs", "req": false, "type": "`$INTEGER`", "index$": 15 }, { "active": true, "name": "tags", "req": false, "type": "`$ARRAY`", "index$": 16 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "width", "req": true, "type": "`$INTEGER`", "index$": 18 }, { "active": true, "name": "widthPx", "req": false, "type": "`$INTEGER`", "index$": 19 }], "name": "generate", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/v1/gifs/generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"boxWidthPct\":{\"maximum\":100,\"minimum\":20,\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"maximum\":64,\"minimum\":14,\"type\":\"number\"},\"id\":{\"maxLength\":80,\"type\":\"string\"},\"maxLines\":{\"maximum\":4,\"minimum\":1,\"type\":\"integer\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"maxLength\":120,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"y\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"},\"maxItems\":4,\"type\":\"array\"},\"durationMs\":{\"maximum\":24000,\"minimum\":100,\"type\":\"integer\"},\"fps\":{\"maximum\":24,\"minimum\":10,\"type\":\"integer\"},\"gifSlug\":{\"description\":\"Required for /api/v1/gifs/generate.\",\"type\":\"string\"},\"returnBase64\":{\"description\":\"Only used by /api/v1/gifs/generate.\",\"type\":\"boolean\"},\"startMs\":{\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"type\":\"array\"},\"title\":{\"maxLength\":120,\"type\":\"string\"},\"widthPx\":{\"maximum\":480,\"minimum\":100,\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"base64\":{\"type\":\"string\"},\"byteLength\":{\"minimum\":1,\"type\":\"integer\"},\"dataUrl\":{\"type\":\"string\"},\"delayMs\":{\"minimum\":1,\"type\":\"integer\"},\"filename\":{\"type\":\"string\"},\"gifSlug\":{\"type\":\"string\"},\"height\":{\"minimum\":1,\"type\":\"integer\"},\"mimeType\":{\"const\":\"image/gif\",\"type\":\"string\"},\"pages\":{\"minimum\":1,\"type\":\"integer\"},\"parameters\":{\"properties\":{\"captions\":{\"items\":{\"properties\":{\"boxWidthPct\":{\"maximum\":100,\"minimum\":20,\"type\":\"number\"},\"color\":{\"type\":\"string\"},\"fontFamily\":{\"enum\":[\"impact\",\"arial\",\"poster\"],\"type\":\"string\"},\"fontSize\":{\"maximum\":64,\"minimum\":14,\"type\":\"number\"},\"id\":{\"maxLength\":80,\"type\":\"string\"},\"maxLines\":{\"maximum\":4,\"minimum\":1,\"type\":\"integer\"},\"stroke\":{\"type\":\"string\"},\"text\":{\"maxLength\":120,\"type\":\"string\"},\"textAlign\":{\"enum\":[\"left\",\"center\",\"right\"],\"type\":\"string\"},\"x\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"y\":{\"maximum\":100,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"text\"],\"type\":\"object\"},\"maxItems\":4,\"type\":\"array\"},\"durationMs\":{\"maximum\":24000,\"minimum\":100,\"type\":\"integer\"},\"fps\":{\"maximum\":24,\"minimum\":10,\"type\":\"integer\"},\"gifSlug\":{\"description\":\"Required for /api/v1/gifs/generate.\",\"type\":\"string\"},\"returnBase64\":{\"description\":\"Only used by /api/v1/gifs/generate.\",\"type\":\"boolean\"},\"startMs\":{\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"type\":\"array\"},\"title\":{\"maxLength\":120,\"type\":\"string\"},\"widthPx\":{\"maximum\":480,\"minimum\":100,\"type\":\"integer\"}},\"type\":\"object\"},\"sourceDurationMs\":{\"minimum\":0,\"type\":\"integer\"},\"title\":{\"type\":\"string\"},\"width\":{\"minimum\":1,\"type\":\"integer\"}},\"required\":[\"gifSlug\",\"filename\",\"mimeType\",\"byteLength\",\"width\",\"height\",\"pages\",\"delayMs\",\"sourceDurationMs\",\"parameters\"],\"type\":\"object\"},\"ok\":{\"const\":true,\"type\":\"boolean\"}},\"required\":[\"ok\",\"data\"],\"type\":\"object\"}}},\"description\":\"Generated GIF metadata\"},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"GIF template not found\"},\"413\":{\"description\":\"Source or output GIF too large\"},\"422\":{\"description\":\"Frame or pixel budget exceeded\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{\"DeveloperApiKeyAuth\":[]},{\"AgentApiKeyAuth\":[]},{}],\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/gifs/generate", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "gifs" }, { "lit": "generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "generate", "name__orig": "generate", "Name": "Generate", "name_": "generate", "name-": "generate", "NAME": "GENERATE", "index$": 15 }, { "active": true, "entity": "generate", "key$": "BasicGenerateFlow", "kind": "basic", "name": "BasicGenerateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "generate_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Generate');
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