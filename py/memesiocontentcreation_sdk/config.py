# MemesioContentCreation SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MemesioContentCreation",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "/",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "agent": {},
                "agent_infra": {},
                "ai_caption": {},
                "ai_job": {},
                "ai_meme_generation_succeeded": {},
                "ai_provider": {},
                "analytics": {},
                "auth": {},
                "billing": {},
                "collaboration": {},
                "compliance": {},
                "create_meme": {},
                "developer_api": {},
                "free_caption_meme_success": {},
                "free_template_search": {},
                "generate": {},
                "growth": {},
                "list_meme": {},
                "media": {},
                "meme": {},
                "public_template_media_item": {},
                "standalone_agent_bootstrap": {},
                "template": {},
                "template_search": {},
                "trend_alert": {},
                "upload_caption_meme_success": {},
                "video": {},
            },
        },
        "entity": {
      "agent": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "locale",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "slug",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "stylePreset",
            "type": "`$STRING`",
          },
          {
            "name": "systemPrompt",
            "type": "`$STRING`",
          },
          {
            "name": "watermarkText",
            "type": "`$STRING`",
          },
          {
            "name": "websiteUrl",
            "type": "`$STRING`",
          },
        ],
        "name": "agent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/agents/{agentId}",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "agentId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/agents",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/api/v1/agents/{agentId}",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "agentId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "agent_infra": {
        "fields": [
          {
            "name": "action",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "chatId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "memeSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "metadata",
            "type": "`$OBJECT`",
          },
          {
            "name": "payoutReference",
            "type": "`$STRING`",
          },
          {
            "name": "payoutStatus",
            "type": "`$STRING`",
          },
          {
            "name": "phoneOrChatId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "prompt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "proof",
            "type": "`$OBJECT`",
          },
          {
            "name": "quotaBoostPerDay",
            "type": "`$INTEGER`",
          },
          {
            "name": "scopes",
            "type": "`$ARRAY`",
          },
          {
            "name": "userId",
            "type": "`$STRING`",
          },
          {
            "name": "weekStart",
            "type": "`$STRING`",
          },
        ],
        "name": "agent_infra",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "agent_id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/{agentId}/channels/telegram/bind",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "channels",
                  "telegram",
                  "bind",
                ],
                "rename": {
                  "param": {
                    "agentId": "agent_id",
                  },
                },
                "select": {
                  "exist": [
                    "agent_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "agent_id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/{agentId}/channels/whatsapp/bind",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "channels",
                  "whatsapp",
                  "bind",
                ],
                "rename": {
                  "param": {
                    "agentId": "agent_id",
                  },
                },
                "select": {
                  "exist": [
                    "agent_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "agent_id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/{agentId}/unlocks/social-action",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "unlocks",
                  "social-action",
                ],
                "rename": {
                  "param": {
                    "agentId": "agent_id",
                  },
                },
                "select": {
                  "exist": [
                    "agent_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/{agentId}/keys",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                  "keys",
                ],
                "rename": {
                  "param": {
                    "agentId": "id",
                  },
                },
                "select": {
                  "$action": "keys",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "unlock_id",
                      "orig": "unlock_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/unlocks/{unlockId}/approve",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "unlocks",
                  "{unlock_id}",
                  "approve",
                ],
                "rename": {
                  "param": {
                    "unlockId": "unlock_id",
                  },
                },
                "select": {
                  "exist": [
                    "unlock_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/names:generate",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "names:generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/rewards/votes",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "votes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/rewards/winner:close",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "winner:close",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/webhooks/telegram",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "telegram",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/webhooks/whatsapp",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "whatsapp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "week_start",
                      "orig": "week_start",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/agents/rewards/leaderboard",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "leaderboard",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "week_start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/agents/{agentId}/keys",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                  "keys",
                ],
                "rename": {
                  "param": {
                    "agentId": "id",
                  },
                },
                "select": {
                  "$action": "keys",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/agents/webhooks/whatsapp",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "whatsapp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "agent_id",
                      "orig": "agent_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "key_id",
                      "orig": "key_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v1/agents/{agentId}/keys/{keyId}",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "keys",
                  "{key_id}",
                ],
                "rename": {
                  "param": {
                    "agentId": "agent_id",
                    "keyId": "key_id",
                  },
                },
                "select": {
                  "exist": [
                    "agent_id",
                    "key_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "unlock",
            ],
            [
              "agent",
            ],
            [
              "agent",
              "key",
            ],
          ],
        },
      },
      "ai_caption": {
        "fields": [
          {
            "name": "blockedTerms",
            "type": "`$ARRAY`",
          },
          {
            "name": "canvasText",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "captionCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captionSets",
            "type": "`$ARRAY`",
          },
          {
            "name": "entities",
            "type": "`$ARRAY`",
          },
          {
            "name": "fallbackUsed",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "generationStrategy",
            "type": "`$STRING`",
          },
          {
            "name": "locale",
            "type": "`$STRING`",
          },
          {
            "name": "memeId",
            "type": "`$STRING`",
          },
          {
            "name": "memeSlug",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "optionCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "ownerToken",
            "type": "`$STRING`",
          },
          {
            "name": "providerId",
            "type": "`$STRING`",
          },
          {
            "name": "referenceCaptions",
            "type": "`$ARRAY`",
          },
          {
            "name": "rewriteNote",
            "type": "`$STRING`",
          },
          {
            "name": "sceneSummary",
            "type": "`$STRING`",
          },
          {
            "name": "templateDescription",
            "type": "`$STRING`",
          },
          {
            "name": "templateName",
            "type": "`$STRING`",
          },
          {
            "name": "templateTags",
            "type": "`$ARRAY`",
          },
          {
            "name": "tone",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "toneCues",
            "type": "`$ARRAY`",
          },
          {
            "name": "trendKeywords",
            "type": "`$ARRAY`",
          },
          {
            "name": "trendReferences",
            "type": "`$ARRAY`",
          },
          {
            "name": "trendSignals",
            "type": "`$ARRAY`",
          },
          {
            "name": "variationOffset",
            "type": "`$INTEGER`",
          },
          {
            "name": "voiceRules",
            "type": "`$ARRAY`",
          },
        ],
        "name": "ai_caption",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/generate",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/moderate",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "moderate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/prompt",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "prompt",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/rank",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "rank",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/rewrite",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "rewrite",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/scene",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "scene",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/captions/tone-presets",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "tone-presets",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "locale",
                      "orig": "locale",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/captions/tone-presets",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "tone-presets",
                ],
                "select": {
                  "exist": [
                    "locale",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/captions/generate",
                "parts": [
                  "api",
                  "ai",
                  "captions",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ai_job": {
        "fields": [
          {
            "name": "action",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "actorId",
            "type": "`$STRING`",
          },
          {
            "name": "afterState",
            "type": "`$OBJECT`",
          },
          {
            "name": "attempts",
            "type": "`$INTEGER`",
          },
          {
            "name": "beforeState",
            "type": "`$OBJECT`",
          },
          {
            "name": "brushEdits",
            "type": "`$ARRAY`",
          },
          {
            "name": "capability",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "celebrityConfidence",
            "type": "`$NUMBER`",
          },
          {
            "name": "consentAttested",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "createdAt",
            "type": "`$STRING`",
          },
          {
            "name": "detectedFaceCount",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "edgeRefinement",
            "type": "`$NUMBER`",
          },
          {
            "name": "estimatedCostUsd",
            "type": "`$NUMBER`",
          },
          {
            "name": "frameTimeMs",
            "type": "`$NUMBER`",
          },
          {
            "name": "height",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "input",
            "type": "`$OBJECT`",
          },
          {
            "name": "layerId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "layerType",
            "type": "`$STRING`",
          },
          {
            "name": "maxAttempts",
            "type": "`$INTEGER`",
          },
          {
            "name": "maxFaces",
            "type": "`$NUMBER`",
          },
          {
            "name": "mediaType",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "metadata",
            "type": "`$OBJECT`",
          },
          {
            "name": "nsfwScore",
            "type": "`$NUMBER`",
          },
          {
            "name": "output",
            "type": "`$OBJECT`",
          },
          {
            "name": "projectId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "providerId",
            "type": "`$STRING`",
          },
          {
            "name": "reason",
            "type": "`$STRING`",
          },
          {
            "name": "runAfterMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "sourceAssetUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceFaceIndex",
            "type": "`$NUMBER`",
          },
          {
            "name": "sourceImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "targetAssetUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "targetFaceIndex",
            "type": "`$NUMBER`",
          },
          {
            "name": "timeoutMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "traceId",
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "type": "`$STRING`",
          },
          {
            "name": "versionId",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "workerId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "workspaceId",
            "type": "`$STRING`",
          },
        ],
        "name": "ai_job",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "job_id",
                      "orig": "job_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/jobs/{jobId}/cancel",
                "parts": [
                  "api",
                  "ai",
                  "jobs",
                  "{job_id}",
                  "cancel",
                ],
                "rename": {
                  "param": {
                    "jobId": "job_id",
                  },
                },
                "select": {
                  "exist": [
                    "job_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "job_id",
                      "orig": "job_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/jobs/{jobId}/complete",
                "parts": [
                  "api",
                  "ai",
                  "jobs",
                  "{job_id}",
                  "complete",
                ],
                "rename": {
                  "param": {
                    "jobId": "job_id",
                  },
                },
                "select": {
                  "exist": [
                    "job_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/background-remove",
                "parts": [
                  "api",
                  "ai",
                  "background-remove",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/edit-history",
                "parts": [
                  "api",
                  "ai",
                  "edit-history",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/face-swap",
                "parts": [
                  "api",
                  "ai",
                  "face-swap",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/face-targets",
                "parts": [
                  "api",
                  "ai",
                  "face-targets",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/jobs",
                "parts": [
                  "api",
                  "ai",
                  "jobs",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "from_version_id",
                      "orig": "from_version_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "layer_id",
                      "orig": "layer_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "project_id",
                      "orig": "project_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "to_version_id",
                      "orig": "to_version_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/edit-history",
                "parts": [
                  "api",
                  "ai",
                  "edit-history",
                ],
                "select": {
                  "exist": [
                    "from_version_id",
                    "layer_id",
                    "limit",
                    "mode",
                    "project_id",
                    "to_version_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/jobs",
                "parts": [
                  "api",
                  "ai",
                  "jobs",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "job_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/jobs/{jobId}",
                "parts": [
                  "api",
                  "ai",
                  "jobs",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "jobId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "job",
            ],
          ],
        },
      },
      "ai_meme_generation_succeeded": {
        "fields": [
          {
            "name": "allowHeuristicFallback",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "captionSource",
            "type": "`$STRING`",
          },
          {
            "name": "captions",
            "type": "`$ARRAY`",
          },
          {
            "name": "correlationId",
            "type": "`$STRING`",
          },
          {
            "name": "degradedFromAsync",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "editableCaptions",
            "type": "`$ARRAY`",
          },
          {
            "name": "flow",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "mode",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "preferredProviderId",
            "type": "`$STRING`",
          },
          {
            "name": "prompt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rewriteNote",
            "type": "`$STRING`",
          },
          {
            "name": "runId",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "templateId",
            "type": "`$STRING`",
          },
          {
            "name": "tone",
            "type": "`$STRING`",
          },
          {
            "name": "toneCues",
            "type": "`$ARRAY`",
          },
          {
            "name": "variantCount",
            "op": {
              "create": {
                "type": "`$NUMBER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "variants",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "workspaceId",
            "type": "`$STRING`",
          },
        ],
        "name": "ai_meme_generation_succeeded",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/memes/generate",
                "parts": [
                  "api",
                  "ai",
                  "memes",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/memes/generate",
                "parts": [
                  "api",
                  "v1",
                  "memes",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ai_provider": {
        "fields": [
          {
            "name": "actorId",
            "type": "`$STRING`",
          },
          {
            "name": "correlationId",
            "type": "`$STRING`",
          },
          {
            "name": "limit",
            "type": "`$NUMBER`",
          },
          {
            "name": "mappingMode",
            "type": "`$STRING`",
          },
          {
            "name": "maxSlots",
            "type": "`$INTEGER`",
          },
          {
            "name": "prompt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "texts",
            "type": "`$ARRAY`",
          },
          {
            "name": "trendSignals",
            "type": "`$ARRAY`",
          },
          {
            "name": "workspaceId",
            "type": "`$STRING`",
          },
        ],
        "name": "ai_provider",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/templates/detect",
                "parts": [
                  "api",
                  "ai",
                  "templates",
                  "detect",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/ai/templates/suggest",
                "parts": [
                  "api",
                  "ai",
                  "templates",
                  "suggest",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/providers/background-remove-benchmark",
                "parts": [
                  "api",
                  "ai",
                  "providers",
                  "background-remove-benchmark",
                ],
                "select": {
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/providers/face-swap-benchmark",
                "parts": [
                  "api",
                  "ai",
                  "providers",
                  "face-swap-benchmark",
                ],
                "select": {
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/ai/memes/generate",
                "parts": [
                  "api",
                  "ai",
                  "memes",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "analytics": {
        "fields": [],
        "name": "analytics",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "template_id",
                      "orig": "template_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/experiments/templates",
                "parts": [
                  "api",
                  "analytics",
                  "experiments",
                  "templates",
                ],
                "select": {
                  "exist": [
                    "template_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "window_hour",
                      "orig": "window_hour",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/dashboards/backend-reliability",
                "parts": [
                  "api",
                  "analytics",
                  "dashboards",
                  "backend-reliability",
                ],
                "select": {
                  "exist": [
                    "window_hour",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/alerts/backend",
                "parts": [
                  "api",
                  "analytics",
                  "alerts",
                  "backend",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/anomalies/ai",
                "parts": [
                  "api",
                  "analytics",
                  "anomalies",
                  "ai",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/dashboards/activation-retention",
                "parts": [
                  "api",
                  "analytics",
                  "dashboards",
                  "activation-retention",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/dashboards/feature-adoption",
                "parts": [
                  "api",
                  "analytics",
                  "dashboards",
                  "feature-adoption",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/analytics/metric-dictionary",
                "parts": [
                  "api",
                  "analytics",
                  "metric-dictionary",
                ],
                "select": {
                  "$action": "metric_dictionary",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "auth": {
        "fields": [
          {
            "name": "displayName",
            "type": "`$STRING`",
          },
          {
            "name": "email",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "password",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "auth",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/resend-verification",
                "parts": [
                  "api",
                  "auth",
                  "resend-verification",
                ],
                "select": {
                  "$action": "resend_verification",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/signup",
                "parts": [
                  "api",
                  "auth",
                  "signup",
                ],
                "select": {
                  "$action": "signup",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "billing": {
        "fields": [],
        "name": "billing",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "window_day",
                      "orig": "window_day",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/billing/usage",
                "parts": [
                  "api",
                  "billing",
                  "usage",
                ],
                "select": {
                  "$action": "usage",
                  "exist": [
                    "window_day",
                    "workspace_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "collaboration": {
        "fields": [
          {
            "name": "authorId",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "projectId",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "collaboration",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/collab/comments",
                "parts": [
                  "api",
                  "collab",
                  "comments",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "project_id",
                      "orig": "project_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/collab/comments",
                "parts": [
                  "api",
                  "collab",
                  "comments",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                    "project_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "compliance": {
        "fields": [],
        "name": "compliance",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/compliance/content-policy",
                "parts": [
                  "api",
                  "compliance",
                  "content-policy",
                ],
                "select": {
                  "$action": "content_policy",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "create_meme": {
        "fields": [
          {
            "name": "canvas",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "generationRunId",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "generationVariantId",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "imageDataUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "overlays",
            "type": "`$ARRAY`",
          },
          {
            "name": "sourceImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "templateSlug",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "visibility",
            "type": "`$STRING`",
          },
          {
            "name": "watermark",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "create_meme",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/memes",
                "parts": [
                  "api",
                  "memes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "developer_api": {
        "fields": [
          {
            "name": "limit",
            "type": "`$NUMBER`",
          },
          {
            "name": "prompt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "trendSignals",
            "type": "`$ARRAY`",
          },
        ],
        "name": "developer_api",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/templates/ideas",
                "parts": [
                  "api",
                  "v1",
                  "templates",
                  "ideas",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/memes/generate",
                "parts": [
                  "api",
                  "v1",
                  "memes",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "free_caption_meme_success": {
        "fields": [
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 1,
            },
          },
          {
            "name": "templateSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "visibility",
            "type": "`$STRING`",
          },
          {
            "name": "watermark",
            "type": "`$OBJECT`",
          },
        ],
        "name": "free_caption_meme_success",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/free/memes/caption",
                "parts": [
                  "api",
                  "free",
                  "memes",
                  "caption",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/memes/caption-template",
                "parts": [
                  "api",
                  "v1",
                  "memes",
                  "caption-template",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "free_template_search": {
        "fields": [
          {
            "name": "animated",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assetBytes",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "assetContentType",
            "type": "`$STRING`",
          },
          {
            "name": "boxCount",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "captionCount",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "durationMs",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "exampleImageUrl",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "frameCount",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "height",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "mediaType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "posterImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "qualityStatus",
            "type": "`$STRING`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceTemplateId",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "sourceUrl",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "width",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
        ],
        "name": "free_template_search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "image",
                      "kind": "query",
                      "name": "media_type",
                      "orig": "media_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/free/templates",
                "parts": [
                  "api",
                  "free",
                  "templates",
                ],
                "select": {
                  "exist": [
                    "media_type",
                    "mode",
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate": {
        "fields": [
          {
            "name": "base64",
            "type": "`$STRING`",
          },
          {
            "name": "byteLength",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "captions",
            "type": "`$ARRAY`",
          },
          {
            "name": "dataUrl",
            "type": "`$STRING`",
          },
          {
            "name": "delayMs",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "durationMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "filename",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "fps",
            "type": "`$INTEGER`",
          },
          {
            "name": "gifSlug",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "mimeType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "pages",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "parameters",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "returnBase64",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "sourceDurationMs",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "startMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "widthPx",
            "type": "`$INTEGER`",
          },
        ],
        "name": "generate",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/gifs/generate",
                "parts": [
                  "api",
                  "v1",
                  "gifs",
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "growth": {
        "fields": [
          {
            "name": "accountId",
            "type": "`$STRING`",
          },
          {
            "name": "action",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "actorId",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "caption",
            "type": "`$STRING`",
          },
          {
            "name": "code",
            "type": "`$STRING`",
          },
          {
            "name": "externalAccountId",
            "type": "`$STRING`",
          },
          {
            "name": "handle",
            "type": "`$STRING`",
          },
          {
            "name": "limit",
            "type": "`$INTEGER`",
          },
          {
            "name": "logExposure",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "memeSlug",
            "type": "`$STRING`",
          },
          {
            "name": "now",
            "type": "`$STRING`",
          },
          {
            "name": "platform",
            "type": "`$STRING`",
          },
          {
            "name": "profiles",
            "type": "`$ARRAY`",
          },
          {
            "name": "shareSlug",
            "type": "`$STRING`",
          },
          {
            "name": "surface",
            "type": "`$STRING`",
          },
          {
            "name": "weekStart",
            "type": "`$STRING`",
          },
        ],
        "name": "growth",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/growth/experiments/decision",
                "parts": [
                  "api",
                  "growth",
                  "experiments",
                  "decision",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/growth/lifecycle-messaging",
                "parts": [
                  "api",
                  "growth",
                  "lifecycle-messaging",
                ],
                "select": {
                  "$action": "lifecycle_messaging",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/growth/referrals",
                "parts": [
                  "api",
                  "growth",
                  "referrals",
                ],
                "select": {
                  "$action": "referral",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/growth/social-publish",
                "parts": [
                  "api",
                  "growth",
                  "social-publish",
                ],
                "select": {
                  "$action": "social_publish",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/growth/trend-campaigns",
                "parts": [
                  "api",
                  "growth",
                  "trend-campaigns",
                ],
                "select": {
                  "$action": "trend_campaign",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "log_exposure",
                      "orig": "log_exposure",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "surface",
                      "orig": "surface",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/experiments/decision",
                "parts": [
                  "api",
                  "growth",
                  "experiments",
                  "decision",
                ],
                "select": {
                  "exist": [
                    "actor_id",
                    "log_exposure",
                    "surface",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "published_only",
                      "orig": "published_only",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "week_start",
                      "orig": "week_start",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/trend-campaigns",
                "parts": [
                  "api",
                  "growth",
                  "trend-campaigns",
                ],
                "select": {
                  "$action": "trend_campaign",
                  "exist": [
                    "limit",
                    "published_only",
                    "week_start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "publish_limit",
                      "orig": "publish_limit",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/social-publish",
                "parts": [
                  "api",
                  "growth",
                  "social-publish",
                ],
                "select": {
                  "$action": "social_publish",
                  "exist": [
                    "actor_id",
                    "publish_limit",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/referrals",
                "parts": [
                  "api",
                  "growth",
                  "referrals",
                ],
                "select": {
                  "$action": "referral",
                  "exist": [
                    "actor_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/lifecycle-messaging",
                "parts": [
                  "api",
                  "growth",
                  "lifecycle-messaging",
                ],
                "select": {
                  "$action": "lifecycle_messaging",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/growth/viral-triggers",
                "parts": [
                  "api",
                  "growth",
                  "viral-triggers",
                ],
                "select": {
                  "$action": "viral_trigger",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_meme": {
        "fields": [
          {
            "name": "altText",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "canonicalImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nsfwStatus",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "shareSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "shareUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "shareViews",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "templateSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "visibility",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "list_meme",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "exclude_template_clone",
                      "orig": "exclude_template_clone",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "include_nsfw",
                      "orig": "include_nsfw",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "official_only",
                      "orig": "official_only",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "owner_token",
                      "orig": "owner_token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "template_slug",
                      "orig": "template_slug",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "visibility",
                      "orig": "visibility",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/memes",
                "parts": [
                  "api",
                  "memes",
                ],
                "select": {
                  "exist": [
                    "exclude_template_clone",
                    "include_nsfw",
                    "official_only",
                    "owner_token",
                    "page",
                    "page_size",
                    "query",
                    "template_slug",
                    "visibility",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "media": {
        "fields": [
          {
            "name": "action",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "contentType",
            "type": "`$STRING`",
          },
          {
            "name": "expiresInSeconds",
            "type": "`$INTEGER`",
          },
          {
            "name": "ownerToken",
            "type": "`$STRING`",
          },
          {
            "name": "path",
            "type": "`$STRING`",
          },
          {
            "name": "prefix",
            "type": "`$STRING`",
          },
        ],
        "name": "media",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/media/signed-url",
                "parts": [
                  "api",
                  "media",
                  "signed-url",
                ],
                "select": {
                  "$action": "signed_url",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "meme": {
        "fields": [
          {
            "name": "altText",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "canonicalImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "canvas",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nsfwStatus",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "overlays",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "shareSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "shareUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "shareViews",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceImageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "templateSlug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "visibility",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "watermark",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "meme",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "owner_token",
                      "orig": "owner_token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/memes/{slug}",
                "parts": [
                  "api",
                  "memes",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "owner_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/memes/{slug}",
                "parts": [
                  "api",
                  "memes",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "public_template_media_item": {
        "fields": [
          {
            "name": "animated",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assetBytes",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "assetContentType",
            "type": "`$STRING`",
          },
          {
            "name": "boxCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captionCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "categories",
            "type": "`$ARRAY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "durationMs",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "exampleImageUrl",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "frameCount",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "height",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "mediaType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "posterImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "previewImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "qualityStatus",
            "type": "`$STRING`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceTemplateId",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "sourceUrl",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "width",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
        ],
        "name": "public_template_media_item",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "image",
                      "kind": "query",
                      "name": "media_type",
                      "orig": "media_type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/templates/{slug}",
                "parts": [
                  "api",
                  "templates",
                  "{slug}",
                ],
                "select": {
                  "exist": [
                    "media_type",
                    "slug",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/gifs/{slug}",
                "parts": [
                  "api",
                  "gifs",
                  "{slug}",
                ],
                "select": {
                  "exist": [
                    "slug",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "gif",
            ],
            [
              "template",
            ],
          ],
        },
      },
      "standalone_agent_bootstrap": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "handle",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "locale",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "stylePreset",
            "type": "`$STRING`",
          },
          {
            "name": "systemPrompt",
            "type": "`$STRING`",
          },
          {
            "name": "watermarkText",
            "type": "`$STRING`",
          },
          {
            "name": "websiteUrl",
            "type": "`$STRING`",
          },
        ],
        "name": "standalone_agent_bootstrap",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/bootstrap",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "bootstrap",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/agents/create-agent",
                "parts": [
                  "api",
                  "v1",
                  "agents",
                  "create-agent",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "template": {
        "fields": [
          {
            "name": "animated",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assetBytes",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "assetContentType",
            "type": "`$STRING`",
          },
          {
            "name": "boxCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captionCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captions",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "type": "`$ARRAY`",
          },
          {
            "name": "categories",
            "type": "`$ARRAY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "durationMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "exampleImageUrl",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "fps",
            "type": "`$INTEGER`",
          },
          {
            "name": "frameCount",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "gifSlug",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "mediaType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "posterImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "previewImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "qualityStatus",
            "type": "`$STRING`",
          },
          {
            "name": "returnBase64",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceTemplateId",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "sourceUrl",
            "type": "`$STRING`",
          },
          {
            "name": "startMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "tags",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "widthPx",
            "type": "`$INTEGER`",
          },
        ],
        "name": "template",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/gifs/{slug}/generate",
                "parts": [
                  "api",
                  "gifs",
                  "{slug}",
                  "generate",
                ],
                "select": {
                  "exist": [
                    "slug",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "image",
                      "kind": "query",
                      "name": "media_type",
                      "orig": "media_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/templates",
                "parts": [
                  "api",
                  "templates",
                ],
                "select": {
                  "exist": [
                    "media_type",
                    "mode",
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "gif",
            ],
          ],
        },
      },
      "template_search": {
        "fields": [
          {
            "name": "animated",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assetBytes",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "assetContentType",
            "type": "`$STRING`",
          },
          {
            "name": "boxCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captionCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "captions",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "categories",
            "type": "`$ARRAY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "durationMs",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "exampleImageUrl",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "frameCount",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "height",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "mediaType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "posterImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "previewImageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "qualityStatus",
            "type": "`$STRING`",
          },
          {
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "sourceTemplateId",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "sourceUrl",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "width",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
          },
        ],
        "name": "template_search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/gifs",
                "parts": [
                  "api",
                  "gifs",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "trend_alert": {
        "fields": [
          {
            "name": "action",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "actorId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "aggressiveness",
            "type": "`$NUMBER`",
          },
          {
            "name": "alertId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "channels",
            "type": "`$ARRAY`",
          },
          {
            "name": "deliverAllAlerts",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "event",
            "type": "`$OBJECT`",
          },
          {
            "name": "explicitNiches",
            "type": "`$ARRAY`",
          },
          {
            "name": "explicitRegions",
            "type": "`$ARRAY`",
          },
          {
            "name": "explicitSources",
            "type": "`$ARRAY`",
          },
          {
            "name": "explicitTopics",
            "type": "`$ARRAY`",
          },
          {
            "name": "followerCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "niche",
            "type": "`$STRING`",
          },
          {
            "name": "region",
            "type": "`$STRING`",
          },
          {
            "name": "source",
            "type": "`$STRING`",
          },
          {
            "name": "topic",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "trend_alert",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/alerts/delivery",
                "parts": [
                  "api",
                  "alerts",
                  "delivery",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/alerts/feedback",
                "parts": [
                  "api",
                  "alerts",
                  "feedback",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/alerts/preferences",
                "parts": [
                  "api",
                  "alerts",
                  "preferences",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/alerts/triggers",
                "parts": [
                  "api",
                  "alerts",
                  "triggers",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "aggressiveness",
                      "orig": "aggressiveness",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "follower_count",
                      "orig": "follower_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "niche",
                      "orig": "niche",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "preferred_niche",
                      "orig": "preferred_niche",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "preferred_region",
                      "orig": "preferred_region",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "source",
                      "orig": "source",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "topic",
                      "orig": "topic",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts",
                "parts": [
                  "api",
                  "alerts",
                ],
                "select": {
                  "exist": [
                    "actor_id",
                    "aggressiveness",
                    "follower_count",
                    "niche",
                    "page",
                    "page_size",
                    "preferred_niche",
                    "preferred_region",
                    "query",
                    "region",
                    "source",
                    "status",
                    "topic",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "aggressiveness",
                      "orig": "aggressiveness",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "follower_count",
                      "orig": "follower_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "preferred_niche",
                      "orig": "preferred_niche",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "preferred_region",
                      "orig": "preferred_region",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "topic",
                      "orig": "topic",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/ranking",
                "parts": [
                  "api",
                  "alerts",
                  "ranking",
                ],
                "select": {
                  "exist": [
                    "actor_id",
                    "aggressiveness",
                    "follower_count",
                    "limit",
                    "preferred_niche",
                    "preferred_region",
                    "topic",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/feedback",
                "parts": [
                  "api",
                  "alerts",
                  "feedback",
                ],
                "select": {
                  "exist": [
                    "actor_id",
                    "limit",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "actor_id",
                      "orig": "actor_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/preferences",
                "parts": [
                  "api",
                  "alerts",
                  "preferences",
                ],
                "select": {
                  "exist": [
                    "actor_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/delivery",
                "parts": [
                  "api",
                  "alerts",
                  "delivery",
                ],
                "select": {
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/ingestion",
                "parts": [
                  "api",
                  "alerts",
                  "ingestion",
                ],
                "select": {
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/quality-report",
                "parts": [
                  "api",
                  "alerts",
                  "quality-report",
                ],
                "select": {
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "template_id",
                      "orig": "template_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/message-templates",
                "parts": [
                  "api",
                  "alerts",
                  "message-templates",
                ],
                "select": {
                  "exist": [
                    "template_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/connectors",
                "parts": [
                  "api",
                  "alerts",
                  "connectors",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/alerts/triggers",
                "parts": [
                  "api",
                  "alerts",
                  "triggers",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "upload_caption_meme_success": {
        "fields": [],
        "name": "upload_caption_meme_success",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/memes/caption-upload",
                "parts": [
                  "api",
                  "v1",
                  "memes",
                  "caption-upload",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "video": {
        "fields": [
          {
            "name": "action",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "assetId",
            "type": "`$STRING`",
          },
          {
            "name": "atMs",
            "type": "`$NUMBER`",
          },
          {
            "name": "audioAssetId",
            "type": "`$STRING`",
          },
          {
            "name": "beatOffsetMs",
            "type": "`$INTEGER`",
          },
          {
            "name": "bitrateKbps",
            "type": "`$NUMBER`",
          },
          {
            "name": "bpm",
            "type": "`$INTEGER`",
          },
          {
            "name": "cancelled",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "container",
            "type": "`$STRING`",
          },
          {
            "name": "durationMs",
            "type": "`$NUMBER`",
          },
          {
            "name": "durationSeconds",
            "op": {
              "create": {
                "type": "`$NUMBER`",
              },
            },
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "easing",
            "type": "`$STRING`",
          },
          {
            "name": "error",
            "type": "`$STRING`",
          },
          {
            "name": "frameRate",
            "type": "`$NUMBER`",
          },
          {
            "name": "inputFormat",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "intensity",
            "type": "`$NUMBER`",
          },
          {
            "name": "jobId",
            "type": "`$STRING`",
          },
          {
            "name": "locale",
            "type": "`$STRING`",
          },
          {
            "name": "mimeType",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "offsetMs",
            "type": "`$NUMBER`",
          },
          {
            "name": "outputPresetId",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "outputUrl",
            "type": "`$STRING`",
          },
          {
            "name": "planTier",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "presetId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "progressPercent",
            "type": "`$NUMBER`",
          },
          {
            "name": "project",
            "type": "`$OBJECT`",
          },
          {
            "name": "projectId",
            "type": "`$STRING`",
          },
          {
            "name": "property",
            "type": "`$STRING`",
          },
          {
            "name": "sourceDeviceId",
            "type": "`$STRING`",
          },
          {
            "name": "sourceUrl",
            "type": "`$STRING`",
          },
          {
            "name": "stage",
            "type": "`$STRING`",
          },
          {
            "name": "startMs",
            "type": "`$NUMBER`",
          },
          {
            "name": "stylePresetId",
            "type": "`$STRING`",
          },
          {
            "name": "syncToBeatGrid",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "tone",
            "type": "`$STRING`",
          },
          {
            "name": "trackId",
            "type": "`$STRING`",
          },
          {
            "name": "transcript",
            "type": "`$STRING`",
          },
          {
            "name": "trendKeywords",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "type": "`$NUMBER`",
          },
          {
            "name": "watermarkEnabled",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "watermarkText",
            "type": "`$STRING`",
          },
          {
            "name": "workerId",
            "type": "`$STRING`",
          },
        ],
        "name": "video",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/drafts",
                "parts": [
                  "api",
                  "video",
                  "drafts",
                ],
                "select": {
                  "$action": "draft",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/export-settings",
                "parts": [
                  "api",
                  "video",
                  "export-settings",
                ],
                "select": {
                  "$action": "export_setting",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/formats",
                "parts": [
                  "api",
                  "video",
                  "formats",
                ],
                "select": {
                  "$action": "format",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/render-queue",
                "parts": [
                  "api",
                  "video",
                  "render-queue",
                ],
                "select": {
                  "$action": "render_queue",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/subtitles",
                "parts": [
                  "api",
                  "video",
                  "subtitles",
                ],
                "select": {
                  "$action": "subtitle",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/text-animations",
                "parts": [
                  "api",
                  "video",
                  "text-animations",
                ],
                "select": {
                  "$action": "text_animation",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/video/timeline",
                "parts": [
                  "api",
                  "video",
                  "timeline",
                ],
                "select": {
                  "$action": "timeline",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "beat_offset_m",
                      "orig": "beat_offset_m",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "bpm",
                      "orig": "bpm",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "locale",
                      "orig": "locale",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "style_preset_id",
                      "orig": "style_preset_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sync_to_beat_grid",
                      "orig": "sync_to_beat_grid",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "tone",
                      "orig": "tone",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "transcript",
                      "orig": "transcript",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "trend_keyword",
                      "orig": "trend_keyword",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/subtitles",
                "parts": [
                  "api",
                  "video",
                  "subtitles",
                ],
                "select": {
                  "$action": "subtitle",
                  "exist": [
                    "beat_offset_m",
                    "bpm",
                    "locale",
                    "style_preset_id",
                    "sync_to_beat_grid",
                    "tone",
                    "transcript",
                    "trend_keyword",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "kind",
                      "orig": "kind",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "target_bpm",
                      "orig": "target_bpm",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "tolerance_bpm",
                      "orig": "tolerance_bpm",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/audio-library",
                "parts": [
                  "api",
                  "video",
                  "audio-library",
                ],
                "select": {
                  "$action": "audio_library",
                  "exist": [
                    "kind",
                    "limit",
                    "query",
                    "tag",
                    "target_bpm",
                    "tolerance_bpm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "bitrate_kbp",
                      "orig": "bitrate_kbp",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "container",
                      "orig": "container",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "plan_tier",
                      "orig": "plan_tier",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "preset_id",
                      "orig": "preset_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "watermark_enabled",
                      "orig": "watermark_enabled",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "watermark_text",
                      "orig": "watermark_text",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/export-settings",
                "parts": [
                  "api",
                  "video",
                  "export-settings",
                ],
                "select": {
                  "$action": "export_setting",
                  "exist": [
                    "bitrate_kbp",
                    "container",
                    "plan_tier",
                    "preset_id",
                    "watermark_enabled",
                    "watermark_text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "duration_second",
                      "orig": "duration_second",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "input_format",
                      "orig": "input_format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "mime_type",
                      "orig": "mime_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "output_preset_id",
                      "orig": "output_preset_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "plan_tier",
                      "orig": "plan_tier",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/formats",
                "parts": [
                  "api",
                  "video",
                  "formats",
                ],
                "select": {
                  "$action": "format",
                  "exist": [
                    "duration_second",
                    "input_format",
                    "mime_type",
                    "output_preset_id",
                    "plan_tier",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "plan_tier",
                      "orig": "plan_tier",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/render-queue",
                "parts": [
                  "api",
                  "video",
                  "render-queue",
                ],
                "select": {
                  "$action": "render_queue",
                  "exist": [
                    "limit",
                    "mode",
                    "plan_tier",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "duration_m",
                      "orig": "duration_m",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "intensity",
                      "orig": "intensity",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "preset_id",
                      "orig": "preset_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "start_m",
                      "orig": "start_m",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/text-animations",
                "parts": [
                  "api",
                  "video",
                  "text-animations",
                ],
                "select": {
                  "$action": "text_animation",
                  "exist": [
                    "duration_m",
                    "intensity",
                    "preset_id",
                    "start_m",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "project_id",
                      "orig": "project_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/drafts",
                "parts": [
                  "api",
                  "video",
                  "drafts",
                ],
                "select": {
                  "$action": "draft",
                  "exist": [
                    "limit",
                    "project_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "project_id",
                      "orig": "project_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/timeline",
                "parts": [
                  "api",
                  "video",
                  "timeline",
                ],
                "select": {
                  "$action": "timeline",
                  "exist": [
                    "limit",
                    "project_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "refresh",
                      "orig": "refresh",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/video/render-performance",
                "parts": [
                  "api",
                  "video",
                  "render-performance",
                ],
                "select": {
                  "$action": "render_performance",
                  "exist": [
                    "refresh",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
