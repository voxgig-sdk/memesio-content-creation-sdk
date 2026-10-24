"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/agents",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/agents/{agentId}",
        "args": [
            {
                "name": "id",
                "wire": "agentId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/agents",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent",
        "accessor": "Agent",
        "op": "update",
        "method": "PATCH",
        "path": "/api/v1/agents/{agentId}",
        "args": [
            {
                "name": "id",
                "wire": "agentId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent_infra",
        "accessor": "AgentInfra",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/agents/{agentId}/keys",
        "action": "keys",
        "args": [
            {
                "name": "id",
                "wire": "agentId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent_infra",
        "accessor": "AgentInfra",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/agents/unlocks/{unlockId}/approve",
        "args": [
            {
                "name": "unlock_id",
                "wire": "unlockId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent_infra",
        "accessor": "AgentInfra",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/agents/{agentId}/keys",
        "action": "keys",
        "args": [
            {
                "name": "id",
                "wire": "agentId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "agent_infra",
        "accessor": "AgentInfra",
        "op": "remove",
        "method": "DELETE",
        "path": "/api/v1/agents/{agentId}/keys/{keyId}",
        "args": [
            {
                "name": "agent_id",
                "wire": "agentId",
                "value": "p1"
            },
            {
                "name": "key_id",
                "wire": "keyId",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "ai_job",
        "accessor": "AiJob",
        "op": "create",
        "method": "POST",
        "path": "/api/ai/jobs/{jobId}/cancel",
        "action": "cancel",
        "args": [
            {
                "name": "job_id",
                "wire": "jobId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "ai_job",
        "accessor": "AiJob",
        "op": "create",
        "method": "POST",
        "path": "/api/ai/jobs/{jobId}/complete",
        "action": "complete",
        "args": [
            {
                "name": "job_id",
                "wire": "jobId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "ai_job",
        "accessor": "AiJob",
        "op": "load",
        "method": "GET",
        "path": "/api/ai/edit-history",
        "args": [],
        "select": {
            "layer_id": "v1",
            "project_id": "v1",
            "from_version_id": "v1",
            "limit": "v1",
            "mode": "v1",
            "to_version_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "projectId",
            "layerId",
            "mode",
            "limit",
            "fromVersionId",
            "toVersionId"
        ],
        "queryArgs": [
            {
                "name": "from_version_id",
                "wire": "fromVersionId"
            },
            {
                "name": "layer_id",
                "wire": "layerId"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "mode",
                "wire": "mode"
            },
            {
                "name": "project_id",
                "wire": "projectId"
            },
            {
                "name": "to_version_id",
                "wire": "toVersionId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "ai_job",
        "accessor": "AiJob",
        "op": "load",
        "method": "GET",
        "path": "/api/ai/jobs/{jobId}",
        "args": [
            {
                "name": "id",
                "wire": "jobId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": {
            "id": "x",
            "traceId": "x",
            "capability": "x",
            "status": "x",
            "attempts": 1,
            "maxAttempts": 1,
            "timeoutMs": 1,
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "ai_job",
        "accessor": "AiJob",
        "op": "load",
        "method": "GET",
        "path": "/api/ai/jobs",
        "args": [],
        "select": {
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "status",
            "page",
            "pageSize"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "pageSize"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "analytics",
        "accessor": "Analytics",
        "op": "load",
        "method": "GET",
        "path": "/api/analytics/metric-dictionary",
        "action": "metric_dictionary",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "create",
        "method": "POST",
        "path": "/api/auth/resend-verification",
        "action": "resend_verification",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "create",
        "method": "POST",
        "path": "/api/auth/signup",
        "action": "signup",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "billing",
        "accessor": "Billing",
        "op": "load",
        "method": "GET",
        "path": "/api/billing/usage",
        "action": "usage",
        "args": [],
        "select": {
            "window_day": "v1",
            "workspace_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "workspaceId",
            "windowDays"
        ],
        "queryArgs": [
            {
                "name": "window_day",
                "wire": "windowDays"
            },
            {
                "name": "workspace_id",
                "wire": "workspaceId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collaboration",
        "accessor": "Collaboration",
        "op": "create",
        "method": "POST",
        "path": "/api/collab/comments",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collaboration",
        "accessor": "Collaboration",
        "op": "load",
        "method": "GET",
        "path": "/api/collab/comments",
        "args": [],
        "select": {
            "project_id": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "projectId",
            "page",
            "pageSize"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "pageSize"
            },
            {
                "name": "project_id",
                "wire": "projectId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "compliance",
        "accessor": "Compliance",
        "op": "load",
        "method": "GET",
        "path": "/api/compliance/content-policy",
        "action": "content_policy",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "developer_api",
        "accessor": "DeveloperApi",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/templates/ideas",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-developer-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "developer_api",
        "accessor": "DeveloperApi",
        "op": "load",
        "method": "GET",
        "path": "/api/v1/memes/generate",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-developer-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "free_template_search",
        "accessor": "FreeTemplateSearch",
        "op": "list",
        "method": "GET",
        "path": "/api/free/templates",
        "args": [],
        "select": {
            "media_type": "image",
            "mode": "v1",
            "page": "v1",
            "page_size": "v1",
            "q": "v1",
            "query": "v1",
            "sort": "v1",
            "tag": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "q",
            "tag",
            "page",
            "pageSize",
            "sort",
            "mode",
            "mediaType"
        ],
        "queryArgs": [
            {
                "name": "media_type",
                "wire": "mediaType"
            },
            {
                "name": "mode",
                "wire": "mode"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "pageSize"
            },
            {
                "name": "q",
                "wire": "q"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "sort",
                "wire": "sort"
            },
            {
                "name": "tag",
                "wire": "tag"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "mediaType": "image",
            "searchMode": "lexical",
            "fallbackApplied": true,
            "items": [
                {
                    "id": "x",
                    "sourceTemplateId": "x",
                    "slug": "x",
                    "name": "x",
                    "description": "x",
                    "mediaType": "image",
                    "imageUrl": "x",
                    "sourceUrl": "x",
                    "exampleImageUrl": "x",
                    "width": 1,
                    "height": 1,
                    "captionCount": 1,
                    "boxCount": 1,
                    "captions": [
                        {
                            "id": "x",
                            "text": "x",
                            "x": 1,
                            "y": 1,
                            "fontSize": 1,
                            "rotationDeg": 1,
                            "hidden": true,
                            "locked": true,
                            "boxWidthPct": 1,
                            "boxHeightPct": 1,
                            "paddingPct": 1,
                            "maxLines": 1,
                            "lineHeight": 1,
                            "backgroundEnabled": true,
                            "backgroundColor": "x",
                            "backgroundOpacity": 1,
                            "letterSpacingEm": 1,
                            "shadowStrength": 1,
                            "color": "x",
                            "stroke": "x",
                            "fontFamily": "impact",
                            "textAlign": "left",
                            "semanticRole": "setup",
                            "preferredCase": "uppercase",
                            "exampleText": "x",
                            "recommendedWordsMin": 1,
                            "recommendedWordsMax": 1,
                            "recommendedCharsMin": 1,
                            "recommendedCharsMax": 1
                        }
                    ],
                    "tags": [
                        "x"
                    ],
                    "assetContentType": "x",
                    "animated": true,
                    "posterImageUrl": "x",
                    "durationMs": 1,
                    "frameCount": 1,
                    "assetBytes": 1,
                    "qualityStatus": "approved"
                }
            ],
            "total": 1,
            "nextPage": 1,
            "page": 1,
            "pageSize": 1
        },
        "idField": "id"
    },
    {
        "entity": "generate",
        "accessor": "Generate",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/gifs/generate",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": {
            "ok": true,
            "data": {
                "gifSlug": "x",
                "title": "x",
                "filename": "x",
                "mimeType": "x",
                "byteLength": 1,
                "width": 1,
                "height": 1,
                "pages": 1,
                "delayMs": 1,
                "sourceDurationMs": 1,
                "parameters": {
                    "gifSlug": "x",
                    "widthPx": 1,
                    "startMs": 1,
                    "durationMs": 1,
                    "fps": 1,
                    "title": "x",
                    "tags": [
                        "x"
                    ],
                    "captions": [
                        {
                            "id": "x",
                            "text": "x",
                            "x": 1,
                            "y": 1,
                            "fontSize": 1,
                            "boxWidthPct": 1,
                            "maxLines": 1,
                            "color": "x",
                            "stroke": "x",
                            "textAlign": "left",
                            "fontFamily": "impact"
                        }
                    ],
                    "returnBase64": true
                },
                "base64": "x",
                "dataUrl": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "create",
        "method": "POST",
        "path": "/api/growth/experiments/decision",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "create",
        "method": "POST",
        "path": "/api/growth/lifecycle-messaging",
        "action": "lifecycle_messaging",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "create",
        "method": "POST",
        "path": "/api/growth/referrals",
        "action": "referral",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "create",
        "method": "POST",
        "path": "/api/growth/social-publish",
        "action": "social_publish",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "create",
        "method": "POST",
        "path": "/api/growth/trend-campaigns",
        "action": "trend_campaign",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/experiments/decision",
        "args": [],
        "select": {
            "actor_id": "v1",
            "log_exposure": "v1",
            "surface": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "actorId",
            "surface",
            "logExposure"
        ],
        "queryArgs": [
            {
                "name": "actor_id",
                "wire": "actorId"
            },
            {
                "name": "log_exposure",
                "wire": "logExposure"
            },
            {
                "name": "surface",
                "wire": "surface"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/social-publish",
        "action": "social_publish",
        "args": [],
        "select": {
            "actor_id": "v1",
            "publish_limit": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "actorId",
            "publishLimit"
        ],
        "queryArgs": [
            {
                "name": "actor_id",
                "wire": "actorId"
            },
            {
                "name": "publish_limit",
                "wire": "publishLimit"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/lifecycle-messaging",
        "action": "lifecycle_messaging",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/referrals",
        "action": "referral",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [
            "actorId"
        ],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/trend-campaigns",
        "action": "trend_campaign",
        "args": [],
        "select": {
            "limit": "v1",
            "published_only": "v1",
            "week_start": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "weekStart",
            "limit",
            "publishedOnly"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "published_only",
                "wire": "publishedOnly"
            },
            {
                "name": "week_start",
                "wire": "weekStart"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "growth",
        "accessor": "Growth",
        "op": "load",
        "method": "GET",
        "path": "/api/growth/viral-triggers",
        "action": "viral_trigger",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "media",
        "accessor": "Media",
        "op": "create",
        "method": "POST",
        "path": "/api/media/signed-url",
        "action": "signed_url",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "meme",
        "accessor": "Meme",
        "op": "create",
        "method": "POST",
        "path": "/api/memes",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 201,
        "sample": {
            "slug": "x",
            "shareSlug": "x",
            "shareUrl": "x",
            "imageUrl": "x",
            "canonicalImageUrl": "x",
            "altText": "x",
            "tags": [
                "x"
            ],
            "ownerToken": "x",
            "visibility": "public",
            "guestSessionId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "meme",
        "accessor": "Meme",
        "op": "list",
        "method": "GET",
        "path": "/api/memes",
        "args": [],
        "select": {
            "exclude_template_clone": "v1",
            "include_nsfw": "v1",
            "official_only": "v1",
            "owner_token": "v1",
            "page": "v1",
            "page_size": "v1",
            "query": "v1",
            "template_slug": "v1",
            "visibility": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "templateSlug",
            "visibility",
            "ownerToken",
            "officialOnly",
            "excludeTemplateClones",
            "includeNsfw",
            "page",
            "pageSize"
        ],
        "queryArgs": [
            {
                "name": "exclude_template_clone",
                "wire": "excludeTemplateClones"
            },
            {
                "name": "include_nsfw",
                "wire": "includeNsfw"
            },
            {
                "name": "official_only",
                "wire": "officialOnly"
            },
            {
                "name": "owner_token",
                "wire": "ownerToken"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "pageSize"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "template_slug",
                "wire": "templateSlug"
            },
            {
                "name": "visibility",
                "wire": "visibility"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "items": [
                {
                    "slug": "x",
                    "shareSlug": "x",
                    "shareUrl": "x",
                    "title": "x",
                    "altText": "x",
                    "tags": [
                        "x"
                    ],
                    "templateSlug": "x",
                    "visibility": "public",
                    "createdAt": "2026-01-01T00:00:00Z",
                    "imageUrl": "x",
                    "canonicalImageUrl": "x",
                    "nsfwStatus": "clear",
                    "shareViews": 1
                }
            ],
            "total": 1,
            "nextPage": 1,
            "page": 1,
            "pageSize": 1
        },
        "idField": "id"
    },
    {
        "entity": "meme",
        "accessor": "Meme",
        "op": "load",
        "method": "GET",
        "path": "/api/memes/{slug}",
        "args": [
            {
                "name": "id",
                "wire": "slug",
                "value": "p1"
            }
        ],
        "select": {
            "owner_token": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "ownerToken"
        ],
        "queryArgs": [
            {
                "name": "owner_token",
                "wire": "ownerToken"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "slug": "x",
            "shareSlug": "x",
            "shareUrl": "x",
            "title": "x",
            "altText": "x",
            "tags": [
                "x"
            ],
            "templateSlug": "x",
            "visibility": "public",
            "createdAt": "2026-01-01T00:00:00Z",
            "imageUrl": "x",
            "canonicalImageUrl": "x",
            "nsfwStatus": "clear",
            "shareViews": 1,
            "sourceImageUrl": "x",
            "captions": [
                {
                    "id": "x",
                    "text": "x",
                    "x": 1,
                    "y": 1,
                    "fontSize": 1,
                    "rotationDeg": 1,
                    "hidden": true,
                    "locked": true,
                    "boxWidthPct": 1,
                    "boxHeightPct": 1,
                    "paddingPct": 1,
                    "maxLines": 1,
                    "lineHeight": 1,
                    "backgroundEnabled": true,
                    "backgroundColor": "x",
                    "backgroundOpacity": 1,
                    "letterSpacingEm": 1,
                    "shadowStrength": 1,
                    "color": "x",
                    "stroke": "x",
                    "fontFamily": "impact",
                    "textAlign": "left",
                    "semanticRole": "setup",
                    "preferredCase": "uppercase",
                    "exampleText": "x",
                    "recommendedWordsMin": 1,
                    "recommendedWordsMax": 1,
                    "recommendedCharsMin": 1,
                    "recommendedCharsMax": 1
                }
            ],
            "overlays": [
                {
                    "id": "x",
                    "label": "x",
                    "imageUrl": "x",
                    "sourceImageUrl": "x",
                    "x": 1,
                    "y": 1,
                    "widthPercent": 1,
                    "rotationDeg": 1,
                    "opacity": 1,
                    "hidden": true,
                    "locked": true,
                    "flippedX": true,
                    "backgroundRemoved": true
                }
            ],
            "canvas": {
                "aspectRatio": "original",
                "focusX": 1,
                "focusY": 1,
                "zoomPercent": 1,
                "crop": {
                    "x": 1,
                    "y": 1,
                    "width": 1,
                    "height": 1
                },
                "spacing": {},
                "guides": {},
                "sourceAdjustments": {},
                "layerOrder": [
                    "x"
                ],
                "transform": {}
            },
            "watermark": {
                "enabled": true,
                "text": "x",
                "position": "top_left",
                "scale": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "meme",
        "accessor": "Meme",
        "op": "remove",
        "method": "DELETE",
        "path": "/api/memes/{slug}",
        "args": [
            {
                "name": "id",
                "wire": "slug",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": {
            "ok": true,
            "deleted": true,
            "slug": "x",
            "shareSlug": "x"
        },
        "idField": "id"
    },
    {
        "entity": "public_template_media_item",
        "accessor": "PublicTemplateMediaItem",
        "op": "create",
        "method": "POST",
        "path": "/api/gifs/{slug}/generate",
        "action": "generate",
        "args": [
            {
                "name": "slug",
                "wire": "slug",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "image/gif"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "trend_alert",
        "accessor": "TrendAlert",
        "op": "load",
        "method": "GET",
        "path": "/api/alerts/preferences",
        "args": [],
        "select": {
            "actor_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "actorId"
        ],
        "queryArgs": [
            {
                "name": "actor_id",
                "wire": "actorId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "upload_caption_meme_success",
        "accessor": "UploadCaptionMemeSuccess",
        "op": "create",
        "method": "POST",
        "path": "/api/v1/memes/caption-upload",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-developer-api-key"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "ok": true,
            "data": {
                "slug": "x",
                "shareSlug": "x",
                "templateSlug": "x",
                "title": "x",
                "visibility": "private",
                "sourceImageUrl": "x",
                "imageUrl": "x",
                "canonicalImageUrl": "x",
                "altText": "x",
                "tags": [
                    "x"
                ],
                "apiUrl": "x",
                "pageUrl": "x",
                "ownerToken": "x",
                "captions": [
                    {
                        "id": "x",
                        "text": "x",
                        "x": 1,
                        "y": 1,
                        "fontSize": 1,
                        "boxWidthPct": 1,
                        "boxHeightPct": 1,
                        "maxLines": 1,
                        "textAlign": "left",
                        "fontFamily": "impact"
                    }
                ],
                "watermark": {
                    "enabled": true,
                    "text": "x",
                    "position": "top_left",
                    "scale": 1
                }
            }
        },
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/drafts",
        "action": "draft",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/export-settings",
        "action": "export_setting",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/formats",
        "action": "format",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/render-queue",
        "action": "render_queue",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/subtitles",
        "action": "subtitle",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/text-animations",
        "action": "text_animation",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "create",
        "method": "POST",
        "path": "/api/video/timeline",
        "action": "timeline",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/audio-library",
        "action": "audio_library",
        "args": [],
        "select": {
            "kind": "v1",
            "limit": "v1",
            "query": "v1",
            "tag": "v1",
            "target_bpm": "v1",
            "tolerance_bpm": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "query",
            "kind",
            "tag",
            "targetBpm",
            "toleranceBpm",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "kind",
                "wire": "kind"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "tag",
                "wire": "tag"
            },
            {
                "name": "target_bpm",
                "wire": "targetBpm"
            },
            {
                "name": "tolerance_bpm",
                "wire": "toleranceBpm"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/drafts",
        "action": "draft",
        "args": [],
        "select": {
            "limit": "v1",
            "project_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "projectId",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "project_id",
                "wire": "projectId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/export-settings",
        "action": "export_setting",
        "args": [],
        "select": {
            "bitrate_kbp": "v1",
            "container": "v1",
            "plan_tier": "v1",
            "preset_id": "v1",
            "watermark_enabled": "v1",
            "watermark_text": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "planTier",
            "presetId",
            "container",
            "bitrateKbps",
            "watermarkEnabled",
            "watermarkText"
        ],
        "queryArgs": [
            {
                "name": "bitrate_kbp",
                "wire": "bitrateKbps"
            },
            {
                "name": "container",
                "wire": "container"
            },
            {
                "name": "plan_tier",
                "wire": "planTier"
            },
            {
                "name": "preset_id",
                "wire": "presetId"
            },
            {
                "name": "watermark_enabled",
                "wire": "watermarkEnabled"
            },
            {
                "name": "watermark_text",
                "wire": "watermarkText"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/formats",
        "action": "format",
        "args": [],
        "select": {
            "duration_second": "v1",
            "input_format": "v1",
            "mime_type": "v1",
            "output_preset_id": "v1",
            "plan_tier": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "planTier",
            "inputFormat",
            "mimeType",
            "outputPresetId",
            "durationSeconds"
        ],
        "queryArgs": [
            {
                "name": "duration_second",
                "wire": "durationSeconds"
            },
            {
                "name": "input_format",
                "wire": "inputFormat"
            },
            {
                "name": "mime_type",
                "wire": "mimeType"
            },
            {
                "name": "output_preset_id",
                "wire": "outputPresetId"
            },
            {
                "name": "plan_tier",
                "wire": "planTier"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/render-performance",
        "action": "render_performance",
        "args": [],
        "select": {
            "refresh": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "refresh"
        ],
        "queryArgs": [
            {
                "name": "refresh",
                "wire": "refresh"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/render-queue",
        "action": "render_queue",
        "args": [],
        "select": {
            "limit": "v1",
            "mode": "v1",
            "plan_tier": "v1",
            "status": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "mode",
            "status",
            "planTier",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "mode",
                "wire": "mode"
            },
            {
                "name": "plan_tier",
                "wire": "planTier"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/subtitles",
        "action": "subtitle",
        "args": [],
        "select": {
            "beat_offset_m": "v1",
            "bpm": "v1",
            "locale": "v1",
            "style_preset_id": "v1",
            "sync_to_beat_grid": "v1",
            "tone": "v1",
            "transcript": "v1",
            "trend_keyword": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "transcript",
            "tone",
            "locale",
            "stylePresetId",
            "trendKeywords",
            "syncToBeatGrid",
            "bpm",
            "beatOffsetMs"
        ],
        "queryArgs": [
            {
                "name": "beat_offset_m",
                "wire": "beatOffsetMs"
            },
            {
                "name": "bpm",
                "wire": "bpm"
            },
            {
                "name": "locale",
                "wire": "locale"
            },
            {
                "name": "style_preset_id",
                "wire": "stylePresetId"
            },
            {
                "name": "sync_to_beat_grid",
                "wire": "syncToBeatGrid"
            },
            {
                "name": "tone",
                "wire": "tone"
            },
            {
                "name": "transcript",
                "wire": "transcript"
            },
            {
                "name": "trend_keyword",
                "wire": "trendKeywords"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/text-animations",
        "action": "text_animation",
        "args": [],
        "select": {
            "duration_m": "v1",
            "intensity": "v1",
            "preset_id": "v1",
            "start_m": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "presetId",
            "startMs",
            "durationMs",
            "intensity"
        ],
        "queryArgs": [
            {
                "name": "duration_m",
                "wire": "durationMs"
            },
            {
                "name": "intensity",
                "wire": "intensity"
            },
            {
                "name": "preset_id",
                "wire": "presetId"
            },
            {
                "name": "start_m",
                "wire": "startMs"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "video",
        "accessor": "Video",
        "op": "load",
        "method": "GET",
        "path": "/api/video/timeline",
        "action": "timeline",
        "args": [],
        "select": {
            "limit": "v1",
            "project_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "projectId",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "project_id",
                "wire": "projectId"
            }
        ],
        "auth": [],
        "status": 200,
        "sample": null,
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map