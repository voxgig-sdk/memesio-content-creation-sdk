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
(0, node_test_1.describe)('StandaloneAgentBootstrapEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.StandaloneAgentBootstrap();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'standalone_agent_bootstrap.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 0 }, "handle": { "a": true, "h": "Handle", "n": "handle", "r": true, "t": "`$STRING`", "key$": "handle", "index$": 1 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": false, "t": "`$STRING`", "key$": "locale", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 3 }, "stylePreset": { "a": true, "h": "Style Preset", "n": "stylePreset", "r": false, "t": "`$STRING`", "key$": "stylePreset", "index$": 4 }, "systemPrompt": { "a": true, "h": "System Prompt", "n": "systemPrompt", "r": false, "t": "`$STRING`", "key$": "systemPrompt", "index$": 5 }, "watermarkText": { "a": true, "h": "Watermark Text", "n": "watermarkText", "r": false, "t": "`$STRING`", "key$": "watermarkText", "index$": 6 }, "websiteUrl": { "a": true, "h": "Website Url", "n": "websiteUrl", "r": false, "t": "`$STRING`", "key$": "websiteUrl", "index$": 7 } }, "name": "standalone_agent_bootstrap", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/agents/bootstrap", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/agents/bootstrap", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "bootstrap" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v1/agents/create-agent", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/agents/create-agent", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "create-agent" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "standalone_agent_bootstrap", "name__orig": "standalone_agent_bootstrap", "Name": "StandaloneAgentBootstrap", "name_": "standalone_agent_bootstrap", "name-": "standalone-agent-bootstrap", "NAME": "STANDALONE_AGENT_BOOTSTRAP", "index$": 21 }, { "active": true, "entity": "standalone_agent_bootstrap", "key$": "BasicStandaloneAgentBootstrapFlow", "kind": "basic", "name": "BasicStandaloneAgentBootstrapFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "standalone_agent_bootstrap_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'StandaloneAgentBootstrap', { "POST /api/v1/agents/bootstrap": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["handle", "name"], "properties": { "handle": { "type": "string", "minLength": 3, "maxLength": 80, "key$": "handle" }, "name": { "type": "string", "minLength": 1, "maxLength": 120, "key$": "name" }, "description": { "type": "string", "maxLength": 1000, "key$": "description" }, "websiteUrl": { "type": "string", "maxLength": 2000, "key$": "websiteUrl" }, "systemPrompt": { "type": "string", "maxLength": 2000, "key$": "systemPrompt" }, "watermarkText": { "type": "string", "maxLength": 160, "key$": "watermarkText" }, "stylePreset": { "type": "string", "maxLength": 80, "key$": "stylePreset" }, "locale": { "type": "string", "maxLength": 40, "key$": "locale" } }, "index$": 1 } } } }, "responses": { "201": { "description": "Standalone agent account created", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "accountType", "agent", "key"], "properties": { "ok": { "type": "boolean", "const": true }, "accountType": { "type": "string", "enum": ["standalone_agent", "standalone_agent_compat"] }, "agent": { "type": "object", "required": ["id", "slug", "name", "description", "websiteUrl", "systemPrompt", "watermarkText", "stylePreset", "locale", "premiumStatus", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "string" }, "slug": { "type": "string" }, "name": { "type": "string" }, "description": { "type": "string" }, "websiteUrl": { "type": ["string", "null"] }, "systemPrompt": { "type": ["string", "null"] }, "watermarkText": { "type": ["string", "null"] }, "stylePreset": { "type": ["string", "null"] }, "locale": { "type": ["string", "null"] }, "premiumStatus": { "type": "string", "enum": ["pending", "approved", "denied"] }, "status": { "type": "string", "enum": ["active", "disabled"] }, "createdAt": { "type": "string", "format": "date-time" }, "updatedAt": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/AgentProfile" }, "key": { "allOf": [{ "type": "object", "required": ["id", "keyPrefix", "scopes", "status", "createdAt", "revokedAt"], "properties": { "id": { "type": "string" }, "keyPrefix": { "type": "string" }, "scopes": { "type": "array", "items": { "type": "string", "enum": ["generate", "publish", "analytics", "admin"] } }, "status": { "type": "string", "enum": ["active", "revoked"] }, "createdAt": { "type": "string", "format": "date-time" }, "revokedAt": { "type": ["string", "null"], "format": "date-time" } } }, { "type": "object", "required": ["plaintextKey", "authMode"], "properties": { "plaintextKey": { "type": "string" }, "authMode": { "type": "string", "enum": ["agent", "developer"] } } }] } }, "x-ref": "#/components/schemas/StandaloneAgentBootstrapResponse" } } } }, "400": { "description": "Validation error" }, "409": { "description": "Handle conflict" }, "429": { "description": "Rate limit exceeded" }, "503": { "description": "Agent infra schema unavailable" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/v1/agents/create-agent": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["handle", "name"], "properties": { "handle": { "type": "string", "minLength": 3, "maxLength": 80, "key$": "handle" }, "name": { "type": "string", "minLength": 1, "maxLength": 120, "key$": "name" }, "description": { "type": "string", "maxLength": 1000, "key$": "description" }, "websiteUrl": { "type": "string", "maxLength": 2000, "key$": "websiteUrl" }, "systemPrompt": { "type": "string", "maxLength": 2000, "key$": "systemPrompt" }, "watermarkText": { "type": "string", "maxLength": 160, "key$": "watermarkText" }, "stylePreset": { "type": "string", "maxLength": 80, "key$": "stylePreset" }, "locale": { "type": "string", "maxLength": 40, "key$": "locale" } }, "index$": 1 } } } }, "responses": { "201": { "description": "Standalone agent account created", "content": { "application/json": { "schema": { "type": "object", "required": ["ok", "accountType", "agent", "key"], "properties": { "ok": { "type": "boolean", "const": true }, "accountType": { "type": "string", "enum": ["standalone_agent", "standalone_agent_compat"] }, "agent": { "type": "object", "required": ["id", "slug", "name", "description", "websiteUrl", "systemPrompt", "watermarkText", "stylePreset", "locale", "premiumStatus", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "string" }, "slug": { "type": "string" }, "name": { "type": "string" }, "description": { "type": "string" }, "websiteUrl": { "type": ["string", "null"] }, "systemPrompt": { "type": ["string", "null"] }, "watermarkText": { "type": ["string", "null"] }, "stylePreset": { "type": ["string", "null"] }, "locale": { "type": ["string", "null"] }, "premiumStatus": { "type": "string", "enum": ["pending", "approved", "denied"] }, "status": { "type": "string", "enum": ["active", "disabled"] }, "createdAt": { "type": "string", "format": "date-time" }, "updatedAt": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/AgentProfile" }, "key": { "allOf": [{ "type": "object", "required": ["id", "keyPrefix", "scopes", "status", "createdAt", "revokedAt"], "properties": { "id": { "type": "string" }, "keyPrefix": { "type": "string" }, "scopes": { "type": "array", "items": { "type": "string", "enum": ["generate", "publish", "analytics", "admin"] } }, "status": { "type": "string", "enum": ["active", "revoked"] }, "createdAt": { "type": "string", "format": "date-time" }, "revokedAt": { "type": ["string", "null"], "format": "date-time" } } }, { "type": "object", "required": ["plaintextKey", "authMode"], "properties": { "plaintextKey": { "type": "string" }, "authMode": { "type": "string", "enum": ["agent", "developer"] } } }] } }, "x-ref": "#/components/schemas/StandaloneAgentBootstrapResponse" } } } }, "400": { "description": "Validation error" }, "409": { "description": "Handle conflict" }, "429": { "description": "Rate limit exceeded" }, "503": { "description": "Agent infra schema unavailable" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const standalone_agent_bootstrap_ref01_ent = client.StandaloneAgentBootstrap();
        let standalone_agent_bootstrap_ref01_data = setup.data.new.standalone_agent_bootstrap['standalone_agent_bootstrap_ref01'];
        standalone_agent_bootstrap_ref01_data = (await standalone_agent_bootstrap_ref01_ent.create(standalone_agent_bootstrap_ref01_data)).data();
        (0, node_assert_1.default)(null != standalone_agent_bootstrap_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/standalone_agent_bootstrap/StandaloneAgentBootstrapTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['standalone_agent_bootstrap01', 'standalone_agent_bootstrap02', 'standalone_agent_bootstrap03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_STANDALONE_AGENT_BOOTSTRAP_ENTID'];
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
//# sourceMappingURL=StandaloneAgentBootstrapEntity.test.js.map