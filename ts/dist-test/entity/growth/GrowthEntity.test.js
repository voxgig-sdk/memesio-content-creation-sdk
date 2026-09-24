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
(0, node_test_1.describe)('GrowthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEMESIO_CONTENT_CREATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MemesioContentCreationSDK.test();
        const ent = testsdk.Growth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'growth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action": { "a": true, "h": "Action", "n": "action", "r": true, "t": "`$STRING`", "key$": "action", "index$": 0 }, "actorId": { "a": true, "h": "Actor Id", "n": "actorId", "r": false, "t": "`$STRING`", "key$": "actorId", "index$": 1 }, "limit": { "a": true, "h": "Limit", "n": "limit", "r": false, "t": "`$INTEGER`", "key$": "limit", "index$": 2 }, "logExposure": { "a": true, "h": "Log Exposure", "n": "logExposure", "r": false, "t": "`$BOOLEAN`", "key$": "logExposure", "index$": 3 }, "surface": { "a": true, "h": "Surface", "n": "surface", "r": false, "t": "`$STRING`", "key$": "surface", "index$": 4 } }, "name": "growth", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/growth/experiments/decision", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/growth/experiments/decision", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "experiments" }, { "lit": "decision" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/growth/lifecycle-messaging", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/growth/lifecycle-messaging", "q": { "$action": "lifecycle_messaging" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "lifecycle-messaging" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/growth/referrals", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/growth/referrals", "q": { "$action": "referral" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "referrals" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/growth/social-publish", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/growth/social-publish", "q": { "$action": "social_publish" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "social-publish" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/growth/trend-campaigns", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/growth/trend-campaigns", "q": { "$action": "trend_campaign" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "trend-campaigns" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/growth/experiments/decision", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "actor_id", "or": "actor_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "log_exposure", "or": "log_exposure", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "surface", "or": "surface", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/growth/experiments/decision", "q": { "exist": ["actor_id", "log_exposure", "surface"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "experiments" }, { "lit": "decision" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/growth/trend-campaigns", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "published_only", "or": "published_only", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "week_start", "or": "week_start", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/growth/trend-campaigns", "q": { "$action": "trend_campaign", "exist": ["limit", "published_only", "week_start"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "trend-campaigns" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/growth/social-publish", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "actor_id", "or": "actor_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "publish_limit", "or": "publish_limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/growth/social-publish", "q": { "$action": "social_publish", "exist": ["actor_id", "publish_limit"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "social-publish" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/growth/referrals", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "actor_id", "or": "actor_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/growth/referrals", "q": { "$action": "referral", "exist": ["actor_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "referrals" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /api/growth/lifecycle-messaging", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/growth/lifecycle-messaging", "q": { "$action": "lifecycle_messaging" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "lifecycle-messaging" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "GET /api/growth/viral-triggers", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/growth/viral-triggers", "q": { "$action": "viral_trigger" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "growth" }, { "lit": "viral-triggers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "growth", "name__orig": "growth", "Name": "Growth", "name_": "growth", "name-": "growth", "NAME": "GROWTH", "index$": 17 }, { "active": true, "entity": "growth", "key$": "BasicGrowthFlow", "kind": "basic", "name": "BasicGrowthFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "growth_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "growth_ref01", "srcdatavar": "growth_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-growth_ref01" } }], "index$": 1 }] }, 'Growth', { "POST /api/growth/experiments/decision": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["decide", "history"], "key$": "action" }, "actorId": { "type": "string", "key$": "actorId" }, "surface": { "type": "string", "key$": "surface" }, "logExposure": { "type": "boolean", "key$": "logExposure" }, "limit": { "type": "integer", "minimum": 1, "maximum": 2000, "key$": "limit" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Exposure history payload" }, "201": { "description": "Decision payload" }, "400": { "description": "Validation error" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/growth/lifecycle-messaging": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["preview", "run", "history"] }, "now": { "type": "string", "format": "date-time" }, "limit": { "type": "integer", "minimum": 1, "maximum": 200 }, "profiles": { "type": "array", "items": { "type": "object", "required": ["actorId", "planTier", "createdAt", "lastActiveAt", "publishes7d", "aiJobs7d", "monthlyCreditsUsed", "monthlyCreditsLimit"], "properties": { "actorId": { "type": "string" }, "planTier": { "type": "string", "enum": ["free", "pro", "team"] }, "createdAt": { "type": "string", "format": "date-time" }, "lastActiveAt": { "type": "string", "format": "date-time" }, "publishes7d": { "type": "integer", "minimum": 0 }, "aiJobs7d": { "type": "integer", "minimum": 0 }, "monthlyCreditsUsed": { "type": "number", "minimum": 0 }, "monthlyCreditsLimit": { "type": "number", "minimum": 0 } } } } } } } } }, "responses": { "200": { "description": "Preview/history payload" }, "201": { "description": "Run payload" }, "400": { "description": "Validation error" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/growth/referrals": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["create", "redeem"] }, "actorId": { "type": "string" }, "shareSlug": { "type": "string" }, "code": { "type": "string" } } } } } }, "responses": { "200": { "description": "Redeemed referral code" }, "201": { "description": "Created referral code" }, "400": { "description": "Invalid request" }, "404": { "description": "Referral code not found" }, "409": { "description": "Fraud/eligibility check failed" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/growth/social-publish": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action", "actorId"], "properties": { "action": { "type": "string", "enum": ["connect", "disconnect", "publish"] }, "actorId": { "type": "string" }, "platform": { "type": "string", "enum": ["tiktok", "instagram_reels", "youtube_shorts", "x"] }, "handle": { "type": "string" }, "externalAccountId": { "type": "string" }, "accountId": { "type": "string" }, "memeSlug": { "type": "string" }, "caption": { "type": "string" } } } } } }, "responses": { "200": { "description": "Disconnect response" }, "201": { "description": "Connect/publish response" }, "400": { "description": "Validation error" }, "403": { "description": "Phase gate denied" }, "404": { "description": "Account not found for disconnect" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "POST /api/growth/trend-campaigns": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action"], "properties": { "action": { "type": "string", "enum": ["publish"] }, "weekStart": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }, "limit": { "type": "integer", "minimum": 1, "maximum": 12 } } } } } }, "responses": { "201": { "description": "Published weekly campaign pack" }, "400": { "description": "Invalid request" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/experiments/decision": { "protocol": "http", "responses": { "200": { "description": "Experiment decisions payload" }, "400": { "description": "Missing actor id" } }, "parameters": [{ "name": "actorId", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "surface", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "logExposure", "in": "query", "schema": { "type": "boolean" }, "index$": 2 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/trend-campaigns": { "protocol": "http", "responses": { "200": { "description": "Weekly campaign pack payload" }, "404": { "description": "No published campaign pack found" } }, "parameters": [{ "name": "weekStart", "in": "query", "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }, "index$": 0 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 12 }, "index$": 1 }, { "name": "publishedOnly", "in": "query", "schema": { "type": "boolean" }, "index$": 2 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/social-publish": { "protocol": "http", "responses": { "200": { "description": "Social publish state payload" }, "400": { "description": "Missing actor id" } }, "parameters": [{ "name": "actorId", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "publishLimit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 1 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/referrals": { "protocol": "http", "responses": { "200": { "description": "Referral credit balance" }, "400": { "description": "Missing actor identity" } }, "parameters": [{ "name": "actorId", "in": "query", "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/lifecycle-messaging": { "protocol": "http", "responses": { "200": { "description": "Lifecycle messaging config payload" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } }, "GET /api/growth/viral-triggers": { "protocol": "http", "responses": { "200": { "description": "Viral loop trigger payload" } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "DeveloperApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-developer-api-key", "description": "Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer <key>." }, "AgentApiKeyAuth": { "type": "apiKey", "in": "header", "name": "x-agent-api-key", "description": "Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer <key>." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const growth_ref01_ent = client.Growth();
        let growth_ref01_data = setup.data.new.growth['growth_ref01'];
        growth_ref01_data = (await growth_ref01_ent.create(growth_ref01_data)).data();
        (0, node_assert_1.default)(null != growth_ref01_data);
        // LOAD
        const growth_ref01_match_dt0 = {};
        const growth_ref01_data_dt0 = (await growth_ref01_ent.load(growth_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != growth_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/growth/GrowthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MemesioContentCreationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['growth01', 'growth02', 'growth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID': idmap,
        'MEMESIO_CONTENT_CREATION_TEST_LIVE': 'FALSE',
        'MEMESIO_CONTENT_CREATION_TEST_EXPLAIN': 'FALSE',
        'MEMESIO_CONTENT_CREATION_APIKEY': '',
    });
    idmap = env['MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID'];
    const live = 'TRUE' === env.MEMESIO_CONTENT_CREATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEMESIO_CONTENT_CREATION_TEST_GROWTH_ENTID'];
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
//# sourceMappingURL=GrowthEntity.test.js.map