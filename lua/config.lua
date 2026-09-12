-- MemesioContentCreation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "MemesioContentCreation",
      slug = "memesio-content-creation",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "/",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["agent"] = {},
        ["agent_infra"] = {},
        ["ai_caption"] = {},
        ["ai_job"] = {},
        ["ai_meme_generation_succeeded"] = {},
        ["ai_provider"] = {},
        ["analytics"] = {},
        ["auth"] = {},
        ["billing"] = {},
        ["collaboration"] = {},
        ["compliance"] = {},
        ["create_meme"] = {},
        ["developer_api"] = {},
        ["free_caption_meme_success"] = {},
        ["free_template_search"] = {},
        ["generate"] = {},
        ["growth"] = {},
        ["list_meme"] = {},
        ["media"] = {},
        ["meme"] = {},
        ["public_template_media_item"] = {},
        ["standalone_agent_bootstrap"] = {},
        ["template"] = {},
        ["template_search"] = {},
        ["trend_alert"] = {},
        ["upload_caption_meme_success"] = {},
        ["video"] = {},
      },
    },
    entity = {
      ["agent"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locale",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stylePreset",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "systemPrompt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watermarkText",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "websiteUrl",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "agent",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/agents/{agentId}",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/agents",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/api/v1/agents/{agentId}",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["agent_infra"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "chatId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "memeSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "payoutReference",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "payoutStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "phoneOrChatId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prompt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "proof",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "quotaBoostPerDay",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "scopes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "userId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weekStart",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "agent_infra",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "agent_id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/{agentId}/channels/telegram/bind",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "agent_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "agent_id",
                  },
                  {
                    ["lit"] = "channels",
                  },
                  {
                    ["lit"] = "telegram",
                  },
                  {
                    ["lit"] = "bind",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "agent_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "channels",
                  "telegram",
                  "bind",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "agent_id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/{agentId}/channels/whatsapp/bind",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "agent_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "agent_id",
                  },
                  {
                    ["lit"] = "channels",
                  },
                  {
                    ["lit"] = "whatsapp",
                  },
                  {
                    ["lit"] = "bind",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "agent_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "channels",
                  "whatsapp",
                  "bind",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "agent_id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/{agentId}/unlocks/social-action",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "agent_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "agent_id",
                  },
                  {
                    ["lit"] = "unlocks",
                  },
                  {
                    ["lit"] = "social-action",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "agent_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "unlocks",
                  "social-action",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/{agentId}/keys",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["select"] = {
                  ["$action"] = "keys",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                  "keys",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "unlock_id",
                      ["orig"] = "unlock_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/unlocks/{unlockId}/approve",
                ["rename"] = {
                  ["param"] = {
                    ["unlockId"] = "unlock_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "unlocks",
                  },
                  {
                    ["var"] = "unlock_id",
                  },
                  {
                    ["lit"] = "approve",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "unlock_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "unlocks",
                  "{unlock_id}",
                  "approve",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/names:generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "names:generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "names:generate",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/rewards/votes",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "rewards",
                  },
                  {
                    ["lit"] = "votes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "votes",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/rewards/winner:close",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "rewards",
                  },
                  {
                    ["lit"] = "winner:close",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "winner:close",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/webhooks/telegram",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["lit"] = "telegram",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "telegram",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/webhooks/whatsapp",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["lit"] = "whatsapp",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "whatsapp",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "week_start",
                      ["orig"] = "week_start",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/agents/rewards/leaderboard",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "rewards",
                  },
                  {
                    ["lit"] = "leaderboard",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "week_start",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "rewards",
                  "leaderboard",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/agents/{agentId}/keys",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["select"] = {
                  ["$action"] = "keys",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{id}",
                  "keys",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/agents/webhooks/whatsapp",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["lit"] = "whatsapp",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "webhooks",
                  "whatsapp",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "agent_id",
                      ["orig"] = "agent_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "key_id",
                      ["orig"] = "key_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/api/v1/agents/{agentId}/keys/{keyId}",
                ["rename"] = {
                  ["param"] = {
                    ["agentId"] = "agent_id",
                    ["keyId"] = "key_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["var"] = "agent_id",
                  },
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "key_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "agent_id",
                    "key_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "{agent_id}",
                  "keys",
                  "{key_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "unlock",
            },
            {
              "agent",
            },
            {
              "agent",
              "key",
            },
          },
        },
      },
      ["ai_caption"] = {
        ["fields"] = {
          {
            ["name"] = "blockedTerms",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "canvasText",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "captionCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captionSets",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "entities",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "fallbackUsed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "generationStrategy",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locale",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "memeId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "memeSlug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ok",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "optionCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "ownerToken",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "providerId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceCaptions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "rewriteNote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sceneSummary",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templateDescription",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templateName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templateTags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "tone",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "toneCues",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "trendKeywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "trendReferences",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "trendSignals",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "variationOffset",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "voiceRules",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "ai_caption",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "generate",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/moderate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "moderate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "moderate",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/prompt",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "prompt",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "prompt",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/rank",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "rank",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "rank",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/rewrite",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "rewrite",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "rewrite",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/scene",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "scene",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "scene",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/captions/tone-presets",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "tone-presets",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "tone-presets",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "locale",
                      ["orig"] = "locale",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/captions/tone-presets",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "tone-presets",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "locale",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "tone-presets",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/captions/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "captions",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "captions",
                  "generate",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ai_job"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actorId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "afterState",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "attempts",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "beforeState",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "brushEdits",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "capability",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "celebrityConfidence",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "consentAttested",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "detectedFaceCount",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "edgeRefinement",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "estimatedCostUsd",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "frameTimeMs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "input",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "layerId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "layerType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "maxAttempts",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "maxFaces",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "mediaType",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "nsfwScore",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "output",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "projectId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "providerId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "runAfterMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "sourceAssetUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceFaceIndex",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "sourceImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "targetAssetUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "targetFaceIndex",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "timeoutMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "traceId",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "updatedAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "versionId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "workerId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "workspaceId",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "ai_job",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "job_id",
                      ["orig"] = "job_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/jobs/{jobId}/cancel",
                ["rename"] = {
                  ["param"] = {
                    ["jobId"] = "job_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "jobs",
                  },
                  {
                    ["var"] = "job_id",
                  },
                  {
                    ["lit"] = "cancel",
                  },
                },
                ["select"] = {
                  ["$action"] = "cancel",
                  ["exist"] = {
                    "job_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "jobs",
                  "{job_id}",
                  "cancel",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "job_id",
                      ["orig"] = "job_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/jobs/{jobId}/complete",
                ["rename"] = {
                  ["param"] = {
                    ["jobId"] = "job_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "jobs",
                  },
                  {
                    ["var"] = "job_id",
                  },
                  {
                    ["lit"] = "complete",
                  },
                },
                ["select"] = {
                  ["$action"] = "complete",
                  ["exist"] = {
                    "job_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "jobs",
                  "{job_id}",
                  "complete",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/background-remove",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "background-remove",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "background-remove",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/edit-history",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "edit-history",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "edit-history",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/face-swap",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "face-swap",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "face-swap",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/face-targets",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "face-targets",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "face-targets",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/jobs",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "jobs",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "jobs",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "from_version_id",
                      ["orig"] = "from_version_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "layer_id",
                      ["orig"] = "layer_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mode",
                      ["orig"] = "mode",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "project_id",
                      ["orig"] = "project_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "to_version_id",
                      ["orig"] = "to_version_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/edit-history",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "edit-history",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "from_version_id",
                    "layer_id",
                    "limit",
                    "mode",
                    "project_id",
                    "to_version_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "edit-history",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/jobs",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "jobs",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "jobs",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "job_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/jobs/{jobId}",
                ["rename"] = {
                  ["param"] = {
                    ["jobId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "jobs",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "jobs",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "job",
            },
          },
        },
      },
      ["ai_meme_generation_succeeded"] = {
        ["fields"] = {
          {
            ["name"] = "allowHeuristicFallback",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "captionSource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "captions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "correlationId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "degradedFromAsync",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "editableCaptions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "flow",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mode",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ok",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "preferredProviderId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prompt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewriteNote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "runId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templateId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tone",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "toneCues",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "variantCount",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$NUMBER`",
              },
            },
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "variants",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "workspaceId",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "ai_meme_generation_succeeded",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/memes/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "memes",
                  "generate",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/memes/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "memes",
                  "generate",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ai_provider"] = {
        ["fields"] = {
          {
            ["name"] = "actorId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "correlationId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "mappingMode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "maxSlots",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "prompt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "texts",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "trendSignals",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "workspaceId",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "ai_provider",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/templates/detect",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "templates",
                  },
                  {
                    ["lit"] = "detect",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "templates",
                  "detect",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/ai/templates/suggest",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "templates",
                  },
                  {
                    ["lit"] = "suggest",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "templates",
                  "suggest",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/providers/background-remove-benchmark",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "providers",
                  },
                  {
                    ["lit"] = "background-remove-benchmark",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "providers",
                  "background-remove-benchmark",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/providers/face-swap-benchmark",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "providers",
                  },
                  {
                    ["lit"] = "face-swap-benchmark",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "providers",
                  "face-swap-benchmark",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ai/memes/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "ai",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "ai",
                  "memes",
                  "generate",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["analytics"] = {
        ["fields"] = {},
        ["name"] = "analytics",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "template_id",
                      ["orig"] = "template_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/experiments/templates",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "experiments",
                  },
                  {
                    ["lit"] = "templates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "template_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "experiments",
                  "templates",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "window_hour",
                      ["orig"] = "window_hour",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/dashboards/backend-reliability",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "dashboards",
                  },
                  {
                    ["lit"] = "backend-reliability",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "window_hour",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "dashboards",
                  "backend-reliability",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/alerts/backend",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "backend",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "alerts",
                  "backend",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/anomalies/ai",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "anomalies",
                  },
                  {
                    ["lit"] = "ai",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "anomalies",
                  "ai",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/dashboards/activation-retention",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "dashboards",
                  },
                  {
                    ["lit"] = "activation-retention",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "dashboards",
                  "activation-retention",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/dashboards/feature-adoption",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "dashboards",
                  },
                  {
                    ["lit"] = "feature-adoption",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "dashboards",
                  "feature-adoption",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/analytics/metric-dictionary",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "metric-dictionary",
                  },
                },
                ["select"] = {
                  ["$action"] = "metric_dictionary",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "analytics",
                  "metric-dictionary",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["auth"] = {
        ["fields"] = {
          {
            ["name"] = "displayName",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "email",
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "password",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "auth",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/resend-verification",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "resend-verification",
                  },
                },
                ["select"] = {
                  ["$action"] = "resend_verification",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "resend-verification",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/signup",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "signup",
                  },
                },
                ["select"] = {
                  ["$action"] = "signup",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "signup",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["billing"] = {
        ["fields"] = {},
        ["name"] = "billing",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "window_day",
                      ["orig"] = "window_day",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/billing/usage",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "billing",
                  },
                  {
                    ["lit"] = "usage",
                  },
                },
                ["select"] = {
                  ["$action"] = "usage",
                  ["exist"] = {
                    "window_day",
                    "workspace_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "billing",
                  "usage",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["collaboration"] = {
        ["fields"] = {
          {
            ["name"] = "authorId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "projectId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "collaboration",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/collab/comments",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "collab",
                  },
                  {
                    ["lit"] = "comments",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "collab",
                  "comments",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "project_id",
                      ["orig"] = "project_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/collab/comments",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "collab",
                  },
                  {
                    ["lit"] = "comments",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                    "project_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "collab",
                  "comments",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["compliance"] = {
        ["fields"] = {},
        ["name"] = "compliance",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/compliance/content-policy",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "compliance",
                  },
                  {
                    ["lit"] = "content-policy",
                  },
                },
                ["select"] = {
                  ["$action"] = "content_policy",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "compliance",
                  "content-policy",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["create_meme"] = {
        ["fields"] = {
          {
            ["name"] = "canvas",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "generationRunId",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "generationVariantId",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "imageDataUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "overlays",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "sourceImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templateSlug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watermark",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "create_meme",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/memes",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "memes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "memes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["developer_api"] = {
        ["fields"] = {
          {
            ["name"] = "limit",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "prompt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trendSignals",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "developer_api",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/templates/ideas",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "templates",
                  },
                  {
                    ["lit"] = "ideas",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "templates",
                  "ideas",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/memes/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "memes",
                  "generate",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["free_caption_meme_success"] = {
        ["fields"] = {
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
            ["union"] = {
              ["branches"] = 2,
              ["count"] = 1,
              ["depth"] = 1,
            },
          },
          {
            ["name"] = "templateSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watermark",
            ["short"] = "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "free_caption_meme_success",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/free/memes/caption",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "free",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "caption",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "api",
                  "free",
                  "memes",
                  "caption",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/memes/caption-template",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "caption-template",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "memes",
                  "caption-template",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["free_template_search"] = {
        ["fields"] = {
          {
            ["name"] = "animated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "assetBytes",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "assetContentType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "boxCount",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captionCount",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "exampleImageUrl",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "frameCount",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mediaType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "posterImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "qualityStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceTemplateId",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "sourceUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "free_template_search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "image",
                      ["kind"] = "query",
                      ["name"] = "media_type",
                      ["orig"] = "media_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mode",
                      ["orig"] = "mode",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/free/templates",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "free",
                  },
                  {
                    ["lit"] = "templates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "media_type",
                    "mode",
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "api",
                  "free",
                  "templates",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["generate"] = {
        ["fields"] = {
          {
            ["name"] = "base64",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "byteLength",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "dataUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delayMs",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "filename",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fps",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "gifSlug",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Required for /api/v1/gifs/generate.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "mimeType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pages",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "parameters",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "returnBase64",
            ["short"] = "Only used by /api/v1/gifs/generate.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "sourceDurationMs",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "startMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "widthPx",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "generate",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/gifs/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "gifs",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "gifs",
                  "generate",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["growth"] = {
        ["fields"] = {
          {
            ["name"] = "accountId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "action",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actorId",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "caption",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalAccountId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "handle",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "logExposure",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "memeSlug",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "now",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "platform",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "profiles",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "shareSlug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "surface",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weekStart",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "growth",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/growth/experiments/decision",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "experiments",
                  },
                  {
                    ["lit"] = "decision",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "experiments",
                  "decision",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/growth/lifecycle-messaging",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "lifecycle-messaging",
                  },
                },
                ["select"] = {
                  ["$action"] = "lifecycle_messaging",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "lifecycle-messaging",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/growth/referrals",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "referrals",
                  },
                },
                ["select"] = {
                  ["$action"] = "referral",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "referrals",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/growth/social-publish",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "social-publish",
                  },
                },
                ["select"] = {
                  ["$action"] = "social_publish",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "social-publish",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/growth/trend-campaigns",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "trend-campaigns",
                  },
                },
                ["select"] = {
                  ["$action"] = "trend_campaign",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "trend-campaigns",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "log_exposure",
                      ["orig"] = "log_exposure",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "surface",
                      ["orig"] = "surface",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/experiments/decision",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "experiments",
                  },
                  {
                    ["lit"] = "decision",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "actor_id",
                    "log_exposure",
                    "surface",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "experiments",
                  "decision",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "published_only",
                      ["orig"] = "published_only",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "week_start",
                      ["orig"] = "week_start",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/trend-campaigns",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "trend-campaigns",
                  },
                },
                ["select"] = {
                  ["$action"] = "trend_campaign",
                  ["exist"] = {
                    "limit",
                    "published_only",
                    "week_start",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "trend-campaigns",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "publish_limit",
                      ["orig"] = "publish_limit",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/social-publish",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "social-publish",
                  },
                },
                ["select"] = {
                  ["$action"] = "social_publish",
                  ["exist"] = {
                    "actor_id",
                    "publish_limit",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "social-publish",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/referrals",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "referrals",
                  },
                },
                ["select"] = {
                  ["$action"] = "referral",
                  ["exist"] = {
                    "actor_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "referrals",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/lifecycle-messaging",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "lifecycle-messaging",
                  },
                },
                ["select"] = {
                  ["$action"] = "lifecycle_messaging",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "lifecycle-messaging",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/growth/viral-triggers",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "growth",
                  },
                  {
                    ["lit"] = "viral-triggers",
                  },
                },
                ["select"] = {
                  ["$action"] = "viral_trigger",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "growth",
                  "viral-triggers",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list_meme"] = {
        ["fields"] = {
          {
            ["name"] = "altText",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "canonicalImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nsfwStatus",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shareSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shareUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shareViews",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "templateSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "list_meme",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude_template_clone",
                      ["orig"] = "exclude_template_clone",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "include_nsfw",
                      ["orig"] = "include_nsfw",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "official_only",
                      ["orig"] = "official_only",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "owner_token",
                      ["orig"] = "owner_token",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "template_slug",
                      ["orig"] = "template_slug",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "visibility",
                      ["orig"] = "visibility",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/memes",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "memes",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "exclude_template_clone",
                    "include_nsfw",
                    "official_only",
                    "owner_token",
                    "page",
                    "page_size",
                    "query",
                    "template_slug",
                    "visibility",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "api",
                  "memes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["media"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contentType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expiresInSeconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "ownerToken",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "path",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prefix",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "media",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/media/signed-url",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "media",
                  },
                  {
                    ["lit"] = "signed-url",
                  },
                },
                ["select"] = {
                  ["$action"] = "signed_url",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "media",
                  "signed-url",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["meme"] = {
        ["fields"] = {
          {
            ["name"] = "altText",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "canonicalImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "canvas",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nsfwStatus",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "overlays",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "shareSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shareUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shareViews",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceImageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "templateSlug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watermark",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "meme",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "owner_token",
                      ["orig"] = "owner_token",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/memes/{slug}",
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "owner_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "memes",
                  "{id}",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/api/memes/{slug}",
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "memes",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["public_template_media_item"] = {
        ["fields"] = {
          {
            ["name"] = "animated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "assetBytes",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "assetContentType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "boxCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captionCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captions",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "categories",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "exampleImageUrl",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "fps",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "frameCount",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "gifSlug",
            ["short"] = "Required for /api/v1/gifs/generate.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mediaType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "posterImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "previewImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "qualityStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "returnBase64",
            ["short"] = "Only used by /api/v1/gifs/generate.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceTemplateId",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "sourceUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "startMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "tags",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "widthPx",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "public_template_media_item",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/gifs/{slug}/generate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "gifs",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["select"] = {
                  ["$action"] = "generate",
                  ["exist"] = {
                    "slug",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "gifs",
                  "{slug}",
                  "generate",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "image",
                      ["kind"] = "query",
                      ["name"] = "media_type",
                      ["orig"] = "media_type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/templates/{slug}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "templates",
                  },
                  {
                    ["var"] = "slug",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "media_type",
                    "slug",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "templates",
                  "{slug}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/gifs/{slug}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "gifs",
                  },
                  {
                    ["var"] = "slug",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "slug",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "gifs",
                  "{slug}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "gif",
            },
            {
              "template",
            },
          },
        },
      },
      ["standalone_agent_bootstrap"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "handle",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locale",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stylePreset",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "systemPrompt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watermarkText",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "websiteUrl",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "standalone_agent_bootstrap",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/bootstrap",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "bootstrap",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "bootstrap",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/agents/create-agent",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "agents",
                  },
                  {
                    ["lit"] = "create-agent",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "agents",
                  "create-agent",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["template"] = {
        ["fields"] = {
          {
            ["name"] = "animated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "assetBytes",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "assetContentType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "boxCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captionCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "categories",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "exampleImageUrl",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "frameCount",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mediaType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "posterImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "previewImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "qualityStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceTemplateId",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "sourceUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "template",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "image",
                      ["kind"] = "query",
                      ["name"] = "media_type",
                      ["orig"] = "media_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mode",
                      ["orig"] = "mode",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/templates",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "templates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "media_type",
                    "mode",
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "api",
                  "templates",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["template_search"] = {
        ["fields"] = {
          {
            ["name"] = "animated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "assetBytes",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "assetContentType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "boxCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captionCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "captions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "categories",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "exampleImageUrl",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "frameCount",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mediaType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "posterImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "previewImageUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "qualityStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceTemplateId",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "sourceUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "template_search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/gifs",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "gifs",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                    "q",
                    "query",
                    "sort",
                    "tag",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "api",
                  "gifs",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["trend_alert"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actorId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "aggressiveness",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "alertId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "channels",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "deliverAllAlerts",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "event",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "explicitNiches",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "explicitRegions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "explicitSources",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "explicitTopics",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "followerCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "niche",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "topic",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "trend_alert",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/alerts/delivery",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "delivery",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "delivery",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/alerts/feedback",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "feedback",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "feedback",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/alerts/preferences",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "preferences",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "preferences",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/alerts/triggers",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "triggers",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "triggers",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "aggressiveness",
                      ["orig"] = "aggressiveness",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "follower_count",
                      ["orig"] = "follower_count",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "niche",
                      ["orig"] = "niche",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preferred_niche",
                      ["orig"] = "preferred_niche",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preferred_region",
                      ["orig"] = "preferred_region",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "source",
                      ["orig"] = "source",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "topic",
                      ["orig"] = "topic",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "aggressiveness",
                      ["orig"] = "aggressiveness",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "follower_count",
                      ["orig"] = "follower_count",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preferred_niche",
                      ["orig"] = "preferred_niche",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preferred_region",
                      ["orig"] = "preferred_region",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "topic",
                      ["orig"] = "topic",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/ranking",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "ranking",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "actor_id",
                    "aggressiveness",
                    "follower_count",
                    "limit",
                    "preferred_niche",
                    "preferred_region",
                    "topic",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "ranking",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/feedback",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "feedback",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "actor_id",
                    "limit",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "feedback",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "actor_id",
                      ["orig"] = "actor_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/preferences",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "preferences",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "actor_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "preferences",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/delivery",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "delivery",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "delivery",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/ingestion",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "ingestion",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "ingestion",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/quality-report",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "quality-report",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "quality-report",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "template_id",
                      ["orig"] = "template_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/message-templates",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "message-templates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "template_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "message-templates",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/connectors",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "connectors",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "connectors",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/alerts/triggers",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "alerts",
                  },
                  {
                    ["lit"] = "triggers",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "alerts",
                  "triggers",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["upload_caption_meme_success"] = {
        ["fields"] = {},
        ["name"] = "upload_caption_meme_success",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/v1/memes/caption-upload",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "memes",
                  },
                  {
                    ["lit"] = "caption-upload",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "memes",
                  "caption-upload",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["video"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "assetId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "atMs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "audioAssetId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "beatOffsetMs",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "bitrateKbps",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "bpm",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "cancelled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "container",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "durationMs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "durationSeconds",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$NUMBER`",
              },
            },
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "easing",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "error",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "frameRate",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "inputFormat",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "intensity",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "jobId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locale",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mimeType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "offsetMs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "outputPresetId",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "outputUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "planTier",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "presetId",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "progressPercent",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "project",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "projectId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "property",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceDeviceId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sourceUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "startMs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "stylePresetId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "syncToBeatGrid",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "tone",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trackId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "transcript",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trendKeywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "updatedAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "value",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "watermarkEnabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "watermarkText",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "workerId",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "video",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/drafts",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "drafts",
                  },
                },
                ["select"] = {
                  ["$action"] = "draft",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "drafts",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/export-settings",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "export-settings",
                  },
                },
                ["select"] = {
                  ["$action"] = "export_setting",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "export-settings",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/formats",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "formats",
                  },
                },
                ["select"] = {
                  ["$action"] = "format",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "formats",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/render-queue",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "render-queue",
                  },
                },
                ["select"] = {
                  ["$action"] = "render_queue",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "render-queue",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/subtitles",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "subtitles",
                  },
                },
                ["select"] = {
                  ["$action"] = "subtitle",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "subtitles",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/text-animations",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "text-animations",
                  },
                },
                ["select"] = {
                  ["$action"] = "text_animation",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "text-animations",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/video/timeline",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "timeline",
                  },
                },
                ["select"] = {
                  ["$action"] = "timeline",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "timeline",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "beat_offset_m",
                      ["orig"] = "beat_offset_m",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "bpm",
                      ["orig"] = "bpm",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "locale",
                      ["orig"] = "locale",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "style_preset_id",
                      ["orig"] = "style_preset_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sync_to_beat_grid",
                      ["orig"] = "sync_to_beat_grid",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tone",
                      ["orig"] = "tone",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "transcript",
                      ["orig"] = "transcript",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "trend_keyword",
                      ["orig"] = "trend_keyword",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/subtitles",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "subtitles",
                  },
                },
                ["select"] = {
                  ["$action"] = "subtitle",
                  ["exist"] = {
                    "beat_offset_m",
                    "bpm",
                    "locale",
                    "style_preset_id",
                    "sync_to_beat_grid",
                    "tone",
                    "transcript",
                    "trend_keyword",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "subtitles",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "kind",
                      ["orig"] = "kind",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "target_bpm",
                      ["orig"] = "target_bpm",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tolerance_bpm",
                      ["orig"] = "tolerance_bpm",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/audio-library",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "audio-library",
                  },
                },
                ["select"] = {
                  ["$action"] = "audio_library",
                  ["exist"] = {
                    "kind",
                    "limit",
                    "query",
                    "tag",
                    "target_bpm",
                    "tolerance_bpm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "audio-library",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "bitrate_kbp",
                      ["orig"] = "bitrate_kbp",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "container",
                      ["orig"] = "container",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "plan_tier",
                      ["orig"] = "plan_tier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preset_id",
                      ["orig"] = "preset_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "watermark_enabled",
                      ["orig"] = "watermark_enabled",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "watermark_text",
                      ["orig"] = "watermark_text",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/export-settings",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "export-settings",
                  },
                },
                ["select"] = {
                  ["$action"] = "export_setting",
                  ["exist"] = {
                    "bitrate_kbp",
                    "container",
                    "plan_tier",
                    "preset_id",
                    "watermark_enabled",
                    "watermark_text",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "export-settings",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "duration_second",
                      ["orig"] = "duration_second",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "input_format",
                      ["orig"] = "input_format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mime_type",
                      ["orig"] = "mime_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "output_preset_id",
                      ["orig"] = "output_preset_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "plan_tier",
                      ["orig"] = "plan_tier",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/formats",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "formats",
                  },
                },
                ["select"] = {
                  ["$action"] = "format",
                  ["exist"] = {
                    "duration_second",
                    "input_format",
                    "mime_type",
                    "output_preset_id",
                    "plan_tier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "formats",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mode",
                      ["orig"] = "mode",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "plan_tier",
                      ["orig"] = "plan_tier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/render-queue",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "render-queue",
                  },
                },
                ["select"] = {
                  ["$action"] = "render_queue",
                  ["exist"] = {
                    "limit",
                    "mode",
                    "plan_tier",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "render-queue",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "duration_m",
                      ["orig"] = "duration_m",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "intensity",
                      ["orig"] = "intensity",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preset_id",
                      ["orig"] = "preset_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start_m",
                      ["orig"] = "start_m",
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/text-animations",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "text-animations",
                  },
                },
                ["select"] = {
                  ["$action"] = "text_animation",
                  ["exist"] = {
                    "duration_m",
                    "intensity",
                    "preset_id",
                    "start_m",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "text-animations",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "project_id",
                      ["orig"] = "project_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/drafts",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "drafts",
                  },
                },
                ["select"] = {
                  ["$action"] = "draft",
                  ["exist"] = {
                    "limit",
                    "project_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "drafts",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "project_id",
                      ["orig"] = "project_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/timeline",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "timeline",
                  },
                },
                ["select"] = {
                  ["$action"] = "timeline",
                  ["exist"] = {
                    "limit",
                    "project_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "timeline",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "refresh",
                      ["orig"] = "refresh",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/video/render-performance",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "video",
                  },
                  {
                    ["lit"] = "render-performance",
                  },
                },
                ["select"] = {
                  ["$action"] = "render_performance",
                  ["exist"] = {
                    "refresh",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "video",
                  "render-performance",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
