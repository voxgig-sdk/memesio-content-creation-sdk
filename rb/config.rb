# MemesioContentCreation SDK configuration

module MemesioContentCreationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "MemesioContentCreation",
        "slug" => "memesio-content-creation",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "/",
        "auth" => {
          "prefix" => "",
          "name" => "x-developer-api-key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "agent" => {},
          "agent_infra" => {},
          "ai_caption" => {},
          "ai_job" => {},
          "ai_meme_generation_succeeded" => {},
          "ai_provider" => {},
          "analytics" => {},
          "auth" => {},
          "billing" => {},
          "collaboration" => {},
          "compliance" => {},
          "create_meme" => {},
          "developer_api" => {},
          "free_caption_meme_success" => {},
          "free_template_search" => {},
          "generate" => {},
          "gif" => {},
          "growth" => {},
          "media" => {},
          "meme" => {},
          "public_template_media_item" => {},
          "standalone_agent_bootstrap" => {},
          "template" => {},
          "trend_alert" => {},
          "upload_caption_meme_success" => {},
          "video" => {},
        },
      },
      "entity" => {
        "agent" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "locale",
              "title" => "Locale",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "update" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "stylePreset",
              "title" => "Style Preset",
              "type" => "`$STRING`",
            },
            {
              "name" => "systemPrompt",
              "title" => "System Prompt",
              "type" => "`$STRING`",
            },
            {
              "name" => "watermarkText",
              "title" => "Watermark Text",
              "type" => "`$STRING`",
            },
            {
              "name" => "websiteUrl",
              "title" => "Website Url",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "agent",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/agents/{agentId}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/agents",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/api/v1/agents/{agentId}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_infra" => {
          "fields" => [
            {
              "name" => "action",
              "title" => "Action",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "chatId",
              "title" => "Chat Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "memeSlug",
              "title" => "Meme Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "metadata",
              "title" => "Metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "payoutReference",
              "title" => "Payout Reference",
              "type" => "`$STRING`",
            },
            {
              "name" => "payoutStatus",
              "title" => "Payout Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "phoneOrChatId",
              "title" => "Phone Or Chat Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "prompt",
              "title" => "Prompt",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "proof",
              "title" => "Proof",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "quotaBoostPerDay",
              "title" => "Quota Boost Per Day",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "userId",
              "title" => "User Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "weekStart",
              "title" => "Week Start",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "agent_infra",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/{agentId}/channels/telegram/bind",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "channels",
                    },
                    {
                      "lit" => "telegram",
                    },
                    {
                      "lit" => "bind",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{agent_id}",
                    "channels",
                    "telegram",
                    "bind",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "agent_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/{agentId}/channels/whatsapp/bind",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "channels",
                    },
                    {
                      "lit" => "whatsapp",
                    },
                    {
                      "lit" => "bind",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{agent_id}",
                    "channels",
                    "whatsapp",
                    "bind",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "agent_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/{agentId}/unlocks/social-action",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "unlocks",
                    },
                    {
                      "lit" => "social-action",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{agent_id}",
                    "unlocks",
                    "social-action",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "agent_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/{agentId}/keys",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "keys",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{id}",
                    "keys",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "keys",
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/unlocks/{unlockId}/approve",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "unlocks",
                    },
                    {
                      "var" => "unlock_id",
                    },
                    {
                      "lit" => "approve",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "unlocks",
                    "{unlock_id}",
                    "approve",
                  ],
                  "rename" => {
                    "param" => {
                      "unlockId" => "unlock_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "unlock_id",
                        "orig" => "unlock_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "unlock_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/names:generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "names:generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "names:generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/rewards/votes",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "rewards",
                    },
                    {
                      "lit" => "votes",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "rewards",
                    "votes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/rewards/winner:close",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "rewards",
                    },
                    {
                      "lit" => "winner:close",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "rewards",
                    "winner:close",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/webhooks/telegram",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "lit" => "telegram",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "webhooks",
                    "telegram",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/webhooks/whatsapp",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "lit" => "whatsapp",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "webhooks",
                    "whatsapp",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/agents/rewards/leaderboard",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "rewards",
                    },
                    {
                      "lit" => "leaderboard",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "rewards",
                    "leaderboard",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "week_start",
                        "orig" => "week_start",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "week_start",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/agents/{agentId}/keys",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "keys",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{id}",
                    "keys",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "keys",
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/agents/webhooks/whatsapp",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "lit" => "whatsapp",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "webhooks",
                    "whatsapp",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/api/v1/agents/{agentId}/keys/{keyId}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "keys",
                    },
                    {
                      "var" => "key_id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "{agent_id}",
                    "keys",
                    "{key_id}",
                  ],
                  "rename" => {
                    "param" => {
                      "agentId" => "agent_id",
                      "keyId" => "key_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "key_id",
                        "orig" => "key_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                      "key_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.agent",
              ],
              [
                "$.main.kit.entity.agent",
              ],
            ],
          },
        },
        "ai_caption" => {
          "fields" => [
            {
              "name" => "blockedTerms",
              "title" => "Blocked Terms",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "canvasText",
              "title" => "Canvas Text",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "captionCount",
              "title" => "Caption Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captionSets",
              "title" => "Caption Sets",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "entities",
              "title" => "Entities",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "fallbackUsed",
              "title" => "Fallback Used",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "generationStrategy",
              "title" => "Generation Strategy",
              "type" => "`$STRING`",
            },
            {
              "name" => "locale",
              "title" => "Locale",
              "type" => "`$STRING`",
            },
            {
              "name" => "memeId",
              "title" => "Meme Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "memeSlug",
              "title" => "Meme Slug",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "optionCount",
              "title" => "Option Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "ownerToken",
              "title" => "Owner Token",
              "type" => "`$STRING`",
            },
            {
              "name" => "providerId",
              "title" => "Provider Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "referenceCaptions",
              "title" => "Reference Captions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "rewriteNote",
              "title" => "Rewrite Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "sceneSummary",
              "title" => "Scene Summary",
              "type" => "`$STRING`",
            },
            {
              "name" => "templateDescription",
              "title" => "Template Description",
              "type" => "`$STRING`",
            },
            {
              "name" => "templateName",
              "title" => "Template Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "templateTags",
              "title" => "Template Tags",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "tone",
              "title" => "Tone",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "toneCues",
              "title" => "Tone Cues",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "trendKeywords",
              "title" => "Trend Keywords",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "trendReferences",
              "title" => "Trend References",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "trendSignals",
              "title" => "Trend Signals",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "variationOffset",
              "title" => "Variation Offset",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "voiceRules",
              "title" => "Voice Rules",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "ai_caption",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/moderate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "moderate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "moderate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/prompt",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "prompt",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "prompt",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/rank",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "rank",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "rank",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/rewrite",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "rewrite",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "rewrite",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/scene",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "scene",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "scene",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/captions/tone-presets",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "tone-presets",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "tone-presets",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/captions/tone-presets",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "tone-presets",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "tone-presets",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "locale",
                        "orig" => "locale",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "locale",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/captions/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "captions",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "captions",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ai_job" => {
          "fields" => [
            {
              "name" => "action",
              "title" => "Action",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "actorId",
              "title" => "Actor Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "afterState",
              "title" => "After State",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "attempts",
              "title" => "Attempts",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "beforeState",
              "title" => "Before State",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "brushEdits",
              "title" => "Brush Edits",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "capability",
              "title" => "Capability",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "celebrityConfidence",
              "title" => "Celebrity Confidence",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "consentAttested",
              "title" => "Consent Attested",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "detectedFaceCount",
              "title" => "Detected Face Count",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "edgeRefinement",
              "title" => "Edge Refinement",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "frameTimeMs",
              "title" => "Frame Time Ms",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "input",
              "title" => "Input",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "layerId",
              "title" => "Layer Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "layerType",
              "title" => "Layer Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "maxAttempts",
              "title" => "Max Attempts",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "maxFaces",
              "title" => "Max Faces",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "metadata",
              "title" => "Metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "nsfwScore",
              "title" => "Nsfw Score",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "projectId",
              "title" => "Project Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "runAfterMs",
              "title" => "Run After Ms",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "sourceAssetUrl",
              "title" => "Source Asset Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceFaceIndex",
              "title" => "Source Face Index",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "sourceImageUrl",
              "title" => "Source Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "targetAssetUrl",
              "title" => "Target Asset Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "targetFaceIndex",
              "title" => "Target Face Index",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "timeoutMs",
              "title" => "Timeout Ms",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "traceId",
              "title" => "Trace Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "versionId",
              "title" => "Version Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "workspaceId",
              "title" => "Workspace Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "ai_job",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/jobs/{jobId}/cancel",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                    {
                      "lit" => "cancel",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "jobs",
                    "{job_id}",
                    "cancel",
                  ],
                  "rename" => {
                    "param" => {
                      "jobId" => "job_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "cancel",
                    "exist" => [
                      "job_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/jobs/{jobId}/complete",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                    {
                      "lit" => "complete",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "jobs",
                    "{job_id}",
                    "complete",
                  ],
                  "rename" => {
                    "param" => {
                      "jobId" => "job_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "complete",
                    "exist" => [
                      "job_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/background-remove",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "background-remove",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "background-remove",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/edit-history",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "edit-history",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "edit-history",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/face-swap",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "face-swap",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "face-swap",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/face-targets",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "face-targets",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "face-targets",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/jobs",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "jobs",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "jobs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/edit-history",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "edit-history",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "edit-history",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "from_version_id",
                        "orig" => "from_version_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "layer_id",
                        "orig" => "layer_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "project_id",
                        "orig" => "project_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "to_version_id",
                        "orig" => "to_version_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "from_version_id",
                      "layer_id",
                      "limit",
                      "mode",
                      "project_id",
                      "to_version_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/jobs",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "jobs",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "jobs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                      "page_size",
                      "status",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/jobs/{jobId}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "jobs",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "jobId" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ai_meme_generation_succeeded" => {
          "fields" => [
            {
              "name" => "allowHeuristicFallback",
              "title" => "Allow Heuristic Fallback",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "captionSource",
              "title" => "Caption Source",
              "type" => "`$STRING`",
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "correlationId",
              "title" => "Correlation Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "degradedFromAsync",
              "title" => "Degraded From Async",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "editableCaptions",
              "title" => "Editable Captions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "flow",
              "title" => "Flow",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "mode",
              "title" => "Mode",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "preferredProviderId",
              "title" => "Preferred Provider Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "prompt",
              "title" => "Prompt",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "rewriteNote",
              "title" => "Rewrite Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "runId",
              "title" => "Run Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "templateId",
              "title" => "Template Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "tone",
              "title" => "Tone",
              "type" => "`$STRING`",
            },
            {
              "name" => "toneCues",
              "title" => "Tone Cues",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "variantCount",
              "title" => "Variant Count",
              "type" => "`$INTEGER`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$NUMBER`",
                },
              },
            },
            {
              "name" => "variants",
              "title" => "Variants",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "workspaceId",
              "title" => "Workspace Id",
              "type" => "`$STRING`",
            },
          ],
          "name" => "ai_meme_generation_succeeded",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/memes/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "memes",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/memes/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "memes",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ai_provider" => {
          "fields" => [
            {
              "name" => "actorId",
              "title" => "Actor Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "correlationId",
              "title" => "Correlation Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "mappingMode",
              "title" => "Mapping Mode",
              "type" => "`$STRING`",
            },
            {
              "name" => "maxSlots",
              "title" => "Max Slots",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "prompt",
              "title" => "Prompt",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceImageUrl",
              "title" => "Source Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "texts",
              "title" => "Texts",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "trendSignals",
              "title" => "Trend Signals",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "workspaceId",
              "title" => "Workspace Id",
              "type" => "`$STRING`",
            },
          ],
          "name" => "ai_provider",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/templates/detect",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "lit" => "detect",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "templates",
                    "detect",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/ai/templates/suggest",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "lit" => "suggest",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "templates",
                    "suggest",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/providers/background-remove-benchmark",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "providers",
                    },
                    {
                      "lit" => "background-remove-benchmark",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "providers",
                    "background-remove-benchmark",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/providers/face-swap-benchmark",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "providers",
                    },
                    {
                      "lit" => "face-swap-benchmark",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "providers",
                    "face-swap-benchmark",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/ai/memes/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "ai",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "ai",
                    "memes",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "analytics" => {
          "fields" => [],
          "name" => "analytics",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/experiments/templates",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "experiments",
                    },
                    {
                      "lit" => "templates",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "experiments",
                    "templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "template_id",
                        "orig" => "template_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "template_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/dashboards/backend-reliability",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "dashboards",
                    },
                    {
                      "lit" => "backend-reliability",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "dashboards",
                    "backend-reliability",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "window_hour",
                        "orig" => "window_hour",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "window_hour",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/alerts/backend",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "backend",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "alerts",
                    "backend",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/anomalies/ai",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "anomalies",
                    },
                    {
                      "lit" => "ai",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "anomalies",
                    "ai",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/dashboards/activation-retention",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "dashboards",
                    },
                    {
                      "lit" => "activation-retention",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "dashboards",
                    "activation-retention",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/dashboards/feature-adoption",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "dashboards",
                    },
                    {
                      "lit" => "feature-adoption",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "dashboards",
                    "feature-adoption",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/analytics/metric-dictionary",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "analytics",
                    },
                    {
                      "lit" => "metric-dictionary",
                    },
                  ],
                  "parts" => [
                    "api",
                    "analytics",
                    "metric-dictionary",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "metric_dictionary",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "auth" => {
          "fields" => [],
          "name" => "auth",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/resend-verification",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "resend-verification",
                    },
                  ],
                  "parts" => [
                    "api",
                    "auth",
                    "resend-verification",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "resend_verification",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/signup",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "signup",
                    },
                  ],
                  "parts" => [
                    "api",
                    "auth",
                    "signup",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "signup",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "billing" => {
          "fields" => [],
          "name" => "billing",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/billing/usage",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "usage",
                    },
                  ],
                  "parts" => [
                    "api",
                    "billing",
                    "usage",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "window_day",
                        "orig" => "window_day",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "workspace_id",
                        "orig" => "workspace_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "usage",
                    "exist" => [
                      "window_day",
                      "workspace_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "collaboration" => {
          "fields" => [
            {
              "name" => "authorId",
              "title" => "Author Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "title" => "Message",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "projectId",
              "title" => "Project Id",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "collaboration",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/collab/comments",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "collab",
                    },
                    {
                      "lit" => "comments",
                    },
                  ],
                  "parts" => [
                    "api",
                    "collab",
                    "comments",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/collab/comments",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "collab",
                    },
                    {
                      "lit" => "comments",
                    },
                  ],
                  "parts" => [
                    "api",
                    "collab",
                    "comments",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "project_id",
                        "orig" => "project_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                      "page_size",
                      "project_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "compliance" => {
          "fields" => [],
          "name" => "compliance",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/compliance/content-policy",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "compliance",
                    },
                    {
                      "lit" => "content-policy",
                    },
                  ],
                  "parts" => [
                    "api",
                    "compliance",
                    "content-policy",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "content_policy",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "create_meme" => {
          "fields" => [
            {
              "name" => "canvas",
              "title" => "Canvas",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "generationRunId",
              "title" => "Generation Run Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "generationVariantId",
              "title" => "Generation Variant Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "imageDataUrl",
              "title" => "Image Data Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "overlays",
              "title" => "Overlays",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sourceImageUrl",
              "title" => "Source Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "templateSlug",
              "title" => "Template Slug",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
            },
            {
              "name" => "visibility",
              "title" => "Visibility",
              "type" => "`$STRING`",
            },
            {
              "name" => "watermark",
              "title" => "Watermark",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "name" => "create_meme",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/memes",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "memes",
                    },
                  ],
                  "parts" => [
                    "api",
                    "memes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "developer_api" => {
          "fields" => [
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "prompt",
              "title" => "Prompt",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "trendSignals",
              "title" => "Trend Signals",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "developer_api",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/templates/ideas",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "lit" => "ideas",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "templates",
                    "ideas",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/memes/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "memes",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "free_caption_meme_success" => {
          "fields" => [
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "templateSlug",
              "title" => "Template Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
            },
            {
              "name" => "visibility",
              "title" => "Visibility",
              "type" => "`$STRING`",
            },
            {
              "name" => "watermark",
              "title" => "Watermark",
              "type" => "`$OBJECT`",
              "short" => "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.",
            },
          ],
          "name" => "free_caption_meme_success",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/free/memes/caption",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "free",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "caption",
                    },
                  ],
                  "parts" => [
                    "api",
                    "free",
                    "memes",
                    "caption",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/memes/caption-template",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "caption-template",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "memes",
                    "caption-template",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "free_template_search" => {
          "fields" => [
            {
              "name" => "animated",
              "title" => "Animated",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "assetBytes",
              "title" => "Asset Bytes",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assetContentType",
              "title" => "Asset Content Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "boxCount",
              "title" => "Box Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "captionCount",
              "title" => "Caption Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "durationMs",
              "title" => "Duration Ms",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "exampleImageUrl",
              "title" => "Example Image Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "frameCount",
              "title" => "Frame Count",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "posterImageUrl",
              "title" => "Poster Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "qualityStatus",
              "title" => "Quality Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceTemplateId",
              "title" => "Source Template Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "sourceUrl",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "free_template_search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/free/templates",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "free",
                    },
                    {
                      "lit" => "templates",
                    },
                  ],
                  "parts" => [
                    "api",
                    "free",
                    "templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "media_type",
                        "orig" => "media_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "image",
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tag",
                        "orig" => "tag",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "generate" => {
          "fields" => [
            {
              "name" => "base64",
              "title" => "Base64",
              "type" => "`$STRING`",
            },
            {
              "name" => "byteLength",
              "title" => "Byte Length",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "dataUrl",
              "title" => "Data Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "delayMs",
              "title" => "Delay Ms",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "durationMs",
              "title" => "Duration Ms",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "filename",
              "title" => "Filename",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "fps",
              "title" => "Fps",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "gifSlug",
              "title" => "Gif Slug",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
              "short" => "Required for /api/v1/gifs/generate.",
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "mimeType",
              "title" => "Mime Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "pages",
              "title" => "Pages",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "parameters",
              "title" => "Parameters",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "returnBase64",
              "title" => "Return Base64",
              "type" => "`$BOOLEAN`",
              "short" => "Only used by /api/v1/gifs/generate.",
            },
            {
              "name" => "sourceDurationMs",
              "title" => "Source Duration Ms",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "startMs",
              "title" => "Start Ms",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "widthPx",
              "title" => "Width Px",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "generate",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/gifs/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "gifs",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "gifs",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "gif" => {
          "fields" => [
            {
              "name" => "animated",
              "title" => "Animated",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "assetBytes",
              "title" => "Asset Bytes",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assetContentType",
              "title" => "Asset Content Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "boxCount",
              "title" => "Box Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captionCount",
              "title" => "Caption Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "categories",
              "title" => "Categories",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "durationMs",
              "title" => "Duration Ms",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "exampleImageUrl",
              "title" => "Example Image Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "frameCount",
              "title" => "Frame Count",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "posterImageUrl",
              "title" => "Poster Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "previewImageUrl",
              "title" => "Preview Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "qualityStatus",
              "title" => "Quality Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceTemplateId",
              "title" => "Source Template Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "sourceUrl",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "gif",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/gifs",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "gifs",
                    },
                  ],
                  "parts" => [
                    "api",
                    "gifs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tag",
                        "orig" => "tag",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                      "page_size",
                      "q",
                      "query",
                      "sort",
                      "tag",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "growth" => {
          "fields" => [
            {
              "name" => "action",
              "title" => "Action",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "actorId",
              "title" => "Actor Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "logExposure",
              "title" => "Log Exposure",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "surface",
              "title" => "Surface",
              "type" => "`$STRING`",
            },
          ],
          "name" => "growth",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/growth/experiments/decision",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "experiments",
                    },
                    {
                      "lit" => "decision",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "experiments",
                    "decision",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/growth/lifecycle-messaging",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "lifecycle-messaging",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "lifecycle-messaging",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "lifecycle_messaging",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/growth/referrals",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "referrals",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "referrals",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "referral",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/growth/social-publish",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "social-publish",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "social-publish",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "social_publish",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/growth/trend-campaigns",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "trend-campaigns",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "trend-campaigns",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "trend_campaign",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/experiments/decision",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "experiments",
                    },
                    {
                      "lit" => "decision",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "experiments",
                    "decision",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "log_exposure",
                        "orig" => "log_exposure",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "surface",
                        "orig" => "surface",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "actor_id",
                      "log_exposure",
                      "surface",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/trend-campaigns",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "trend-campaigns",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "trend-campaigns",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "published_only",
                        "orig" => "published_only",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "week_start",
                        "orig" => "week_start",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "trend_campaign",
                    "exist" => [
                      "limit",
                      "published_only",
                      "week_start",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/social-publish",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "social-publish",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "social-publish",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "publish_limit",
                        "orig" => "publish_limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "social_publish",
                    "exist" => [
                      "actor_id",
                      "publish_limit",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/referrals",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "referrals",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "referrals",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "referral",
                    "exist" => [
                      "actor_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/lifecycle-messaging",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "lifecycle-messaging",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "lifecycle-messaging",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "lifecycle_messaging",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/growth/viral-triggers",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "growth",
                    },
                    {
                      "lit" => "viral-triggers",
                    },
                  ],
                  "parts" => [
                    "api",
                    "growth",
                    "viral-triggers",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "viral_trigger",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "media" => {
          "fields" => [],
          "name" => "media",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/media/signed-url",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "media",
                    },
                    {
                      "lit" => "signed-url",
                    },
                  ],
                  "parts" => [
                    "api",
                    "media",
                    "signed-url",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "signed_url",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "meme" => {
          "fields" => [
            {
              "name" => "altText",
              "title" => "Alt Text",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "canonicalImageUrl",
              "title" => "Canonical Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "canvas",
              "title" => "Canvas",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "nsfwStatus",
              "title" => "Nsfw Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "overlays",
              "title" => "Overlays",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "shareSlug",
              "title" => "Share Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "shareUrl",
              "title" => "Share Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "shareViews",
              "title" => "Share Views",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceImageUrl",
              "title" => "Source Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "templateSlug",
              "title" => "Template Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "visibility",
              "title" => "Visibility",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "watermark",
              "title" => "Watermark",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "meme",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/memes",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "memes",
                    },
                  ],
                  "parts" => [
                    "api",
                    "memes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "exclude_template_clone",
                        "orig" => "exclude_template_clone",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "include_nsfw",
                        "orig" => "include_nsfw",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "official_only",
                        "orig" => "official_only",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "owner_token",
                        "orig" => "owner_token",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "template_slug",
                        "orig" => "template_slug",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "visibility",
                        "orig" => "visibility",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/memes/{slug}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "memes",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "slug" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "slug",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "owner_token",
                        "orig" => "owner_token",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "owner_token",
                    ],
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/api/memes/{slug}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "memes",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "slug" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "slug",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "public_template_media_item" => {
          "fields" => [
            {
              "name" => "animated",
              "title" => "Animated",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "assetBytes",
              "title" => "Asset Bytes",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assetContentType",
              "title" => "Asset Content Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "boxCount",
              "title" => "Box Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captionCount",
              "title" => "Caption Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "categories",
              "title" => "Categories",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "durationMs",
              "title" => "Duration Ms",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "exampleImageUrl",
              "title" => "Example Image Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "frameCount",
              "title" => "Frame Count",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "posterImageUrl",
              "title" => "Poster Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "previewImageUrl",
              "title" => "Preview Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "qualityStatus",
              "title" => "Quality Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceTemplateId",
              "title" => "Source Template Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "sourceUrl",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "public_template_media_item",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/gifs/{slug}/generate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "gifs",
                    },
                    {
                      "var" => "slug",
                    },
                    {
                      "lit" => "generate",
                    },
                  ],
                  "parts" => [
                    "api",
                    "gifs",
                    "{slug}",
                    "generate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "slug",
                        "orig" => "slug",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "generate",
                    "exist" => [
                      "slug",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/templates/{slug}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "templates",
                    },
                    {
                      "var" => "slug",
                    },
                  ],
                  "parts" => [
                    "api",
                    "templates",
                    "{slug}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "slug",
                        "orig" => "slug",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "media_type",
                        "orig" => "media_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "image",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "media_type",
                      "slug",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/gifs/{slug}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "gifs",
                    },
                    {
                      "var" => "slug",
                    },
                  ],
                  "parts" => [
                    "api",
                    "gifs",
                    "{slug}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "slug",
                        "orig" => "slug",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "slug",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.gif",
              ],
              [
                "$.main.kit.entity.template",
              ],
            ],
          },
        },
        "standalone_agent_bootstrap" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
            },
            {
              "name" => "handle",
              "title" => "Handle",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "locale",
              "title" => "Locale",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "stylePreset",
              "title" => "Style Preset",
              "type" => "`$STRING`",
            },
            {
              "name" => "systemPrompt",
              "title" => "System Prompt",
              "type" => "`$STRING`",
            },
            {
              "name" => "watermarkText",
              "title" => "Watermark Text",
              "type" => "`$STRING`",
            },
            {
              "name" => "websiteUrl",
              "title" => "Website Url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "standalone_agent_bootstrap",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/bootstrap",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "bootstrap",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "bootstrap",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/agents/create-agent",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "lit" => "create-agent",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "agents",
                    "create-agent",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "template" => {
          "fields" => [
            {
              "name" => "animated",
              "title" => "Animated",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "assetBytes",
              "title" => "Asset Bytes",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assetContentType",
              "title" => "Asset Content Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "boxCount",
              "title" => "Box Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captionCount",
              "title" => "Caption Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "captions",
              "title" => "Captions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "categories",
              "title" => "Categories",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "durationMs",
              "title" => "Duration Ms",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "exampleImageUrl",
              "title" => "Example Image Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "frameCount",
              "title" => "Frame Count",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "posterImageUrl",
              "title" => "Poster Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "previewImageUrl",
              "title" => "Preview Image Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "qualityStatus",
              "title" => "Quality Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "slug",
              "title" => "Slug",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sourceTemplateId",
              "title" => "Source Template Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "sourceUrl",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "template",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/templates",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "templates",
                    },
                  ],
                  "parts" => [
                    "api",
                    "templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "media_type",
                        "orig" => "media_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "image",
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tag",
                        "orig" => "tag",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "trend_alert" => {
          "fields" => [
            {
              "name" => "action",
              "title" => "Action",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "actorId",
              "title" => "Actor Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "aggressiveness",
              "title" => "Aggressiveness",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "alertId",
              "title" => "Alert Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "channels",
              "title" => "Channels",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "deliverAllAlerts",
              "title" => "Deliver All Alerts",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "event",
              "title" => "Event",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "explicitNiches",
              "title" => "Explicit Niches",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "explicitRegions",
              "title" => "Explicit Regions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "explicitSources",
              "title" => "Explicit Sources",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "explicitTopics",
              "title" => "Explicit Topics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "followerCount",
              "title" => "Follower Count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "niche",
              "title" => "Niche",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "title" => "Region",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
            },
            {
              "name" => "topic",
              "title" => "Topic",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "trend_alert",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/alerts/delivery",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "delivery",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "delivery",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/alerts/feedback",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "feedback",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "feedback",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/alerts/preferences",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "preferences",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "preferences",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/alerts/triggers",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "triggers",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "triggers",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "aggressiveness",
                        "orig" => "aggressiveness",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "follower_count",
                        "orig" => "follower_count",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "niche",
                        "orig" => "niche",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preferred_niche",
                        "orig" => "preferred_niche",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preferred_region",
                        "orig" => "preferred_region",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "source",
                        "orig" => "source",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "topic",
                        "orig" => "topic",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/ranking",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "ranking",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "ranking",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "aggressiveness",
                        "orig" => "aggressiveness",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "follower_count",
                        "orig" => "follower_count",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preferred_niche",
                        "orig" => "preferred_niche",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preferred_region",
                        "orig" => "preferred_region",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "topic",
                        "orig" => "topic",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "actor_id",
                      "aggressiveness",
                      "follower_count",
                      "limit",
                      "preferred_niche",
                      "preferred_region",
                      "topic",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/feedback",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "feedback",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "feedback",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "actor_id",
                      "limit",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/preferences",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "preferences",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "preferences",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "actor_id",
                        "orig" => "actor_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "actor_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/delivery",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "delivery",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "delivery",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/ingestion",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "ingestion",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "ingestion",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/quality-report",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "quality-report",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "quality-report",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/message-templates",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "message-templates",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "message-templates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "template_id",
                        "orig" => "template_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "template_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/connectors",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "connectors",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "connectors",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/alerts/triggers",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "alerts",
                    },
                    {
                      "lit" => "triggers",
                    },
                  ],
                  "parts" => [
                    "api",
                    "alerts",
                    "triggers",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "upload_caption_meme_success" => {
          "fields" => [],
          "name" => "upload_caption_meme_success",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/memes/caption-upload",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "memes",
                    },
                    {
                      "lit" => "caption-upload",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "memes",
                    "caption-upload",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "video" => {
          "fields" => [],
          "name" => "video",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/drafts",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "drafts",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "drafts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "draft",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/export-settings",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "export-settings",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "export-settings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "export_setting",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/formats",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "formats",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "formats",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "format",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/render-queue",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "render-queue",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "render-queue",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "render_queue",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/subtitles",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "subtitles",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "subtitles",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "subtitle",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/text-animations",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "text-animations",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "text-animations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "text_animation",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/video/timeline",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "timeline",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "timeline",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "timeline",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/subtitles",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "subtitles",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "subtitles",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "beat_offset_m",
                        "orig" => "beat_offset_m",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "bpm",
                        "orig" => "bpm",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "locale",
                        "orig" => "locale",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "style_preset_id",
                        "orig" => "style_preset_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "sync_to_beat_grid",
                        "orig" => "sync_to_beat_grid",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tone",
                        "orig" => "tone",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "transcript",
                        "orig" => "transcript",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "trend_keyword",
                        "orig" => "trend_keyword",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "subtitle",
                    "exist" => [
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
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/audio-library",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "audio-library",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "audio-library",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "kind",
                        "orig" => "kind",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tag",
                        "orig" => "tag",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "target_bpm",
                        "orig" => "target_bpm",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "tolerance_bpm",
                        "orig" => "tolerance_bpm",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "audio_library",
                    "exist" => [
                      "kind",
                      "limit",
                      "query",
                      "tag",
                      "target_bpm",
                      "tolerance_bpm",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/export-settings",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "export-settings",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "export-settings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "bitrate_kbp",
                        "orig" => "bitrate_kbp",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "container",
                        "orig" => "container",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "plan_tier",
                        "orig" => "plan_tier",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preset_id",
                        "orig" => "preset_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "watermark_enabled",
                        "orig" => "watermark_enabled",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "watermark_text",
                        "orig" => "watermark_text",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "export_setting",
                    "exist" => [
                      "bitrate_kbp",
                      "container",
                      "plan_tier",
                      "preset_id",
                      "watermark_enabled",
                      "watermark_text",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/formats",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "formats",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "formats",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "duration_second",
                        "orig" => "duration_second",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "input_format",
                        "orig" => "input_format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "mime_type",
                        "orig" => "mime_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "output_preset_id",
                        "orig" => "output_preset_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "plan_tier",
                        "orig" => "plan_tier",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "format",
                    "exist" => [
                      "duration_second",
                      "input_format",
                      "mime_type",
                      "output_preset_id",
                      "plan_tier",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/render-queue",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "render-queue",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "render-queue",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "plan_tier",
                        "orig" => "plan_tier",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "render_queue",
                    "exist" => [
                      "limit",
                      "mode",
                      "plan_tier",
                      "status",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/text-animations",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "text-animations",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "text-animations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "duration_m",
                        "orig" => "duration_m",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "intensity",
                        "orig" => "intensity",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "preset_id",
                        "orig" => "preset_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "start_m",
                        "orig" => "start_m",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "text_animation",
                    "exist" => [
                      "duration_m",
                      "intensity",
                      "preset_id",
                      "start_m",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/drafts",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "drafts",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "drafts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "project_id",
                        "orig" => "project_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "draft",
                    "exist" => [
                      "limit",
                      "project_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/timeline",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "timeline",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "timeline",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "project_id",
                        "orig" => "project_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "timeline",
                    "exist" => [
                      "limit",
                      "project_id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/video/render-performance",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "video",
                    },
                    {
                      "lit" => "render-performance",
                    },
                  ],
                  "parts" => [
                    "api",
                    "video",
                    "render-performance",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "refresh",
                        "orig" => "refresh",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "render_performance",
                    "exist" => [
                      "refresh",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MemesioContentCreationFeatures.make_feature(name)
  end
end
