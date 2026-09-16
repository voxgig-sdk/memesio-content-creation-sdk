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
(0, node_test_1.describe)('AgentInfraEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.AgentInfra();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_infra.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "action", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "chatId", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "memeSlug", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "metadata", "req": false, "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "payoutReference", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "payoutStatus", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "phoneOrChatId", "req": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "prompt", "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "proof", "req": false, "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "quotaBoostPerDay", "req": false, "type": "`$INTEGER`", "index$": 10 }, { "active": true, "name": "scopes", "req": false, "type": "`$ARRAY`", "index$": 11 }, { "active": true, "name": "userId", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "weekStart", "req": false, "type": "`$STRING`", "index$": 13 }], "id": { "field": "id", "name": "id" }, "name": "agent_infra", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "agent_id", "orig": "agent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v1/agents/{agentId}/channels/telegram/bind", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"chatId\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":true,\"type\":\"object\"},\"userId\":{\"type\":\"string\"}},\"required\":[\"chatId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Telegram binding created/updated\"},\"401\":{\"description\":\"Authentication required\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/{agentId}/channels/telegram/bind", "rename": { "param": { "agentId": "agent_id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "agent_id" }, { "lit": "channels" }, { "lit": "telegram" }, { "lit": "bind" }], "select": { "exist": ["agent_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "agent_id", "orig": "agent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v1/agents/{agentId}/channels/whatsapp/bind", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"metadata\":{\"additionalProperties\":true,\"type\":\"object\"},\"phoneOrChatId\":{\"type\":\"string\"},\"userId\":{\"type\":\"string\"}},\"required\":[\"phoneOrChatId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"WhatsApp binding created/updated\"},\"401\":{\"description\":\"Authentication required\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/{agentId}/channels/whatsapp/bind", "rename": { "param": { "agentId": "agent_id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "agent_id" }, { "lit": "channels" }, { "lit": "whatsapp" }, { "lit": "bind" }], "select": { "exist": ["agent_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "agent_id", "orig": "agent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v1/agents/{agentId}/unlocks/social-action", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"x_follow\"],\"type\":\"string\"},\"proof\":{\"additionalProperties\":true,\"type\":\"object\"}},\"required\":[\"action\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"description\":\"Unlock request submitted\"},\"401\":{\"description\":\"Agent API key required\"},\"403\":{\"description\":\"Insufficient key scope\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/{agentId}/unlocks/social-action", "rename": { "param": { "agentId": "agent_id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "agent_id" }, { "lit": "unlocks" }, { "lit": "social-action" }], "select": { "exist": ["agent_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "agent_id", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /api/v1/agents/{agentId}/keys", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"scopes\":{\"items\":{\"enum\":[\"generate\",\"publish\",\"analytics\",\"admin\"],\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"201\":{\"description\":\"Agent key created (plaintext returned once)\"},\"401\":{\"description\":\"Authentication required\"},\"404\":{\"description\":\"Agent not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/{agentId}/keys", "rename": { "param": { "agentId": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "id" }, { "lit": "keys" }], "select": { "$action": "keys", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "unlock_id", "orig": "unlock_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v1/agents/unlocks/{unlockId}/approve", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"unlockId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"quotaBoostPerDay\":{\"maximum\":20,\"minimum\":1,\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"200\":{\"description\":\"Unlock approved\"},\"403\":{\"description\":\"Admin authorization required\"},\"404\":{\"description\":\"Unlock not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/unlocks/{unlockId}/approve", "rename": { "param": { "unlockId": "unlock_id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "unlocks" }, { "var": "unlock_id" }, { "lit": "approve" }], "select": { "exist": ["unlock_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/agents/names:generate", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"prompt\":{\"maxLength\":300,\"minLength\":1,\"type\":\"string\"}},\"required\":[\"prompt\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Name suggestions payload\"},\"401\":{\"description\":\"Agent API key required\"},\"429\":{\"description\":\"Per-key name generation limit exceeded\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/names:generate", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "names:generate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/agents/rewards/votes", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"memeSlug\":{\"type\":\"string\"},\"weekStart\":{\"pattern\":\"^\\\\\\\\d{4}-\\\\\\\\d{2}-\\\\\\\\d{2}$\",\"type\":\"string\"}},\"required\":[\"memeSlug\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Duplicate vote ignored\"},\"201\":{\"description\":\"Vote accepted\"},\"400\":{\"description\":\"Validation error\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/rewards/votes", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "rewards" }, { "lit": "votes" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/agents/rewards/winner:close", "json": "{\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"payoutReference\":{\"type\":\"string\"},\"payoutStatus\":{\"enum\":[\"pending\",\"paid\"],\"type\":\"string\"},\"weekStart\":{\"pattern\":\"^\\\\\\\\d{4}-\\\\\\\\d{2}-\\\\\\\\d{2}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":false},\"responses\":{\"200\":{\"description\":\"Winner record created/updated\"},\"403\":{\"description\":\"Admin authorization required\"},\"404\":{\"description\":\"No votes for week\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/rewards/winner:close", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "rewards" }, { "lit": "winner:close" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 7 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/agents/webhooks/telegram", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Webhook processed\"},\"202\":{\"description\":\"Ignored non-message Telegram update\"},\"403\":{\"description\":\"Invalid webhook secret when configured\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/webhooks/telegram", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "webhooks" }, { "lit": "telegram" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 8 }, { "active": true, "args": {}, "contract": { "id": "POST /api/v1/agents/webhooks/whatsapp", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Webhook processed\"},\"202\":{\"description\":\"Ignored non-message event\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v1/agents/webhooks/whatsapp", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "webhooks" }, { "lit": "whatsapp" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 9 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "week_start", "orig": "week_start", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v1/agents/rewards/leaderboard", "json": "{\"parameters\":[{\"in\":\"query\",\"name\":\"weekStart\",\"schema\":{\"pattern\":\"^\\\\\\\\d{4}-\\\\\\\\d{2}-\\\\\\\\d{2}$\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Leaderboard payload\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v1/agents/rewards/leaderboard", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "rewards" }, { "lit": "leaderboard" }], "select": { "exist": ["limit", "week_start"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "agent_id", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "GET /api/v1/agents/{agentId}/keys", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Agent key list payload\"},\"401\":{\"description\":\"Authentication required\"},\"404\":{\"description\":\"Agent not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v1/agents/{agentId}/keys", "rename": { "param": { "agentId": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "id" }, { "lit": "keys" }], "select": { "$action": "keys", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v1/agents/webhooks/whatsapp", "json": "{\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Verification challenge accepted\"},\"403\":{\"description\":\"Invalid verify token\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v1/agents/webhooks/whatsapp", "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "lit": "webhooks" }, { "lit": "whatsapp" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "agent_id", "orig": "agent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "key_id", "orig": "key_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v1/agents/{agentId}/keys/{keyId}", "json": "{\"parameters\":[{\"in\":\"path\",\"name\":\"agentId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"keyId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Key revoked\"},\"401\":{\"description\":\"Authentication required\"},\"404\":{\"description\":\"Key not found\"}},\"securitySchemes\":{\"AgentApiKeyAuth\":{\"description\":\"Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-agent-api-key\",\"type\":\"apiKey\"},\"DeveloperApiKeyAuth\":{\"description\":\"Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>.\",\"in\":\"header\",\"name\":\"x-developer-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v1/agents/{agentId}/keys/{keyId}", "rename": { "param": { "agentId": "agent_id", "keyId": "key_id" } }, "segments": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "agents" }, { "var": "agent_id" }, { "lit": "keys" }, { "var": "key_id" }], "select": { "exist": ["agent_id", "key_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["unlock"], ["agent"], ["agent", "key"]] }, "key$": "agent_infra", "name__orig": "agent_infra", "Name": "AgentInfra", "name_": "agent_infra", "name-": "agent-infra", "NAME": "AGENT_INFRA", "index$": 1 }, { "active": true, "entity": "agent_infra", "key$": "BasicAgentInfraFlow", "kind": "basic", "name": "BasicAgentInfraFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "agent_infra_ref01" }, "match": { "agent_id": "agent01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "agent_infra_ref01", "srcdatavar": "agent_infra_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_infra_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "agent_infra_ref01", "suffix": "_rm0" }, "match": { "agent_id": "agent01", "id": "agent_infra01" }, "op": "remove", "spec": [], "valid": [], "index$": 2 }] }, 'AgentInfra');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const agent_infra_ref01_ent = client.AgentInfra();
        let agent_infra_ref01_data = setup.data.new.agent_infra['agent_infra_ref01'];
        agent_infra_ref01_data['agent_id'] = setup.idmap['agent01'];
        agent_infra_ref01_data = (await agent_infra_ref01_ent.create(agent_infra_ref01_data)).data();
        (0, node_assert_1.default)(null != agent_infra_ref01_data.id);
        // LOAD
        const agent_infra_ref01_match_dt0 = {};
        agent_infra_ref01_match_dt0.id = agent_infra_ref01_data.id;
        const agent_infra_ref01_data_dt0 = (await agent_infra_ref01_ent.load(agent_infra_ref01_match_dt0)).data();
        (0, node_assert_1.default)(agent_infra_ref01_data_dt0.id === agent_infra_ref01_data.id);
        // REMOVE
        const agent_infra_ref01_match_rm0 = { id: agent_infra_ref01_data.id };
        await agent_infra_ref01_ent.remove(agent_infra_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_infra/AgentInfraTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_infra01', 'agent_infra02', 'agent_infra03', 'unlock01', 'unlock02', 'unlock03', 'agent01', 'agent02', 'agent03', 'agent01', 'agent02', 'agent03', 'key01', 'key02', 'key03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID'];
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
//# sourceMappingURL=AgentInfraEntity.test.js.map