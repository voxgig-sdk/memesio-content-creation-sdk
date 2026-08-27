package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MemesioContentCreation",
			"slug": "memesio-content-creation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "/",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"agent": map[string]any{},
				"agent_infra": map[string]any{},
				"ai_caption": map[string]any{},
				"ai_job": map[string]any{},
				"ai_meme_generation_succeeded": map[string]any{},
				"ai_provider": map[string]any{},
				"analytics": map[string]any{},
				"auth": map[string]any{},
				"billing": map[string]any{},
				"collaboration": map[string]any{},
				"compliance": map[string]any{},
				"create_meme": map[string]any{},
				"developer_api": map[string]any{},
				"free_caption_meme_success": map[string]any{},
				"free_template_search": map[string]any{},
				"generate": map[string]any{},
				"growth": map[string]any{},
				"list_meme": map[string]any{},
				"media": map[string]any{},
				"meme": map[string]any{},
				"public_template_media_item": map[string]any{},
				"standalone_agent_bootstrap": map[string]any{},
				"template": map[string]any{},
				"template_search": map[string]any{},
				"trend_alert": map[string]any{},
				"upload_caption_meme_success": map[string]any{},
				"video": map[string]any{},
			},
		},
		"entity": map[string]any{
			"agent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stylePreset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "systemPrompt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermarkText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "websiteUrl",
						"type": "`$STRING`",
					},
				},
				"name": "agent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents",
								"parts": []any{
									"api",
									"v1",
									"agents",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/{agentId}",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents",
								"parts": []any{
									"api",
									"v1",
									"agents",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/agents/{agentId}",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_infra": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "chatId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "payoutReference",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payoutStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phoneOrChatId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proof",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "quotaBoostPerDay",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scopes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "userId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weekStart",
						"type": "`$STRING`",
					},
				},
				"name": "agent_infra",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "agent_id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/channels/telegram/bind",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"channels",
									"telegram",
									"bind",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "agent_id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/channels/whatsapp/bind",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"channels",
									"whatsapp",
									"bind",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "agent_id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/unlocks/social-action",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"unlocks",
									"social-action",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/keys",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
									"keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"select": map[string]any{
									"$action": "keys",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "unlock_id",
											"orig": "unlock_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/unlocks/{unlockId}/approve",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"unlocks",
									"{unlock_id}",
									"approve",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"unlockId": "unlock_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"unlock_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/names:generate",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"names:generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/rewards/votes",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"votes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/rewards/winner:close",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"winner:close",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/webhooks/telegram",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"telegram",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/webhooks/whatsapp",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "week_start",
											"orig": "week_start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/rewards/leaderboard",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"leaderboard",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"week_start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/{agentId}/keys",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
									"keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"select": map[string]any{
									"$action": "keys",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/webhooks/whatsapp",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "agent_id",
											"orig": "agent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "key_id",
											"orig": "key_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/agents/{agentId}/keys/{keyId}",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"keys",
									"{key_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
										"keyId": "key_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
										"key_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"unlock",
						},
						[]any{
							"agent",
						},
						[]any{
							"agent",
							"key",
						},
					},
				},
			},
			"ai_caption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blockedTerms",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "canvasText",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "captionCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionSets",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "entities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "fallbackUsed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "generationStrategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeSlug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "optionCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ownerToken",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "providerId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceCaptions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rewriteNote",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sceneSummary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateDescription",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateTags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tone",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toneCues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendKeywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendReferences",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendSignals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "variationOffset",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "voiceRules",
						"type": "`$ARRAY`",
					},
				},
				"name": "ai_caption",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/generate",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/moderate",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"moderate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/prompt",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"prompt",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/rank",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rank",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/rewrite",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rewrite",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/scene",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"scene",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/tone-presets",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/captions/tone-presets",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
								},
								"select": map[string]any{
									"exist": []any{
										"locale",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/captions/generate",
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ai_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actorId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "afterState",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "attempts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "beforeState",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "brushEdits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "capability",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "celebrityConfidence",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "consentAttested",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "createdAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "detectedFaceCount",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "edgeRefinement",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "estimatedCostUsd",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "frameTimeMs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "input",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "layerId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "layerType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maxAttempts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "maxFaces",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mediaType",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nsfwScore",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "output",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "projectId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "providerId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "runAfterMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sourceAssetUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceFaceIndex",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "targetAssetUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "targetFaceIndex",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "timeoutMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "traceId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "versionId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "workerId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workspaceId",
						"type": "`$STRING`",
					},
				},
				"name": "ai_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "job_id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs/{jobId}/cancel",
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{job_id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "job_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "job_id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs/{jobId}/complete",
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{job_id}",
									"complete",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "job_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/background-remove",
								"parts": []any{
									"api",
									"ai",
									"background-remove",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/edit-history",
								"parts": []any{
									"api",
									"ai",
									"edit-history",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/face-swap",
								"parts": []any{
									"api",
									"ai",
									"face-swap",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/face-targets",
								"parts": []any{
									"api",
									"ai",
									"face-targets",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs",
								"parts": []any{
									"api",
									"ai",
									"jobs",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "from_version_id",
											"orig": "from_version_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "layer_id",
											"orig": "layer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "to_version_id",
											"orig": "to_version_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/edit-history",
								"parts": []any{
									"api",
									"ai",
									"edit-history",
								},
								"select": map[string]any{
									"exist": []any{
										"from_version_id",
										"layer_id",
										"limit",
										"mode",
										"project_id",
										"to_version_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/jobs",
								"parts": []any{
									"api",
									"ai",
									"jobs",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/jobs/{jobId}",
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"job",
						},
					},
				},
			},
			"ai_meme_generation_succeeded": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowHeuristicFallback",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "captionSource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "correlationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "degradedFromAsync",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "editableCaptions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "flow",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mode",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "preferredProviderId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewriteNote",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "runId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toneCues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "variantCount",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$NUMBER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "variants",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "workspaceId",
						"type": "`$STRING`",
					},
				},
				"name": "ai_meme_generation_succeeded",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/memes/generate",
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/memes/generate",
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ai_provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actorId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "correlationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mappingMode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maxSlots",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "texts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendSignals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "workspaceId",
						"type": "`$STRING`",
					},
				},
				"name": "ai_provider",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/templates/detect",
								"parts": []any{
									"api",
									"ai",
									"templates",
									"detect",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/templates/suggest",
								"parts": []any{
									"api",
									"ai",
									"templates",
									"suggest",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/providers/background-remove-benchmark",
								"parts": []any{
									"api",
									"ai",
									"providers",
									"background-remove-benchmark",
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/providers/face-swap-benchmark",
								"parts": []any{
									"api",
									"ai",
									"providers",
									"face-swap-benchmark",
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/memes/generate",
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics": map[string]any{
				"fields": []any{},
				"name": "analytics",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "template_id",
											"orig": "template_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/experiments/templates",
								"parts": []any{
									"api",
									"analytics",
									"experiments",
									"templates",
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "window_hour",
											"orig": "window_hour",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/dashboards/backend-reliability",
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"backend-reliability",
								},
								"select": map[string]any{
									"exist": []any{
										"window_hour",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/alerts/backend",
								"parts": []any{
									"api",
									"analytics",
									"alerts",
									"backend",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/anomalies/ai",
								"parts": []any{
									"api",
									"analytics",
									"anomalies",
									"ai",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/dashboards/activation-retention",
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"activation-retention",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/dashboards/feature-adoption",
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"feature-adoption",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/metric-dictionary",
								"parts": []any{
									"api",
									"analytics",
									"metric-dictionary",
								},
								"select": map[string]any{
									"$action": "metric_dictionary",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"auth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "password",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "auth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/auth/resend-verification",
								"parts": []any{
									"api",
									"auth",
									"resend-verification",
								},
								"select": map[string]any{
									"$action": "resend_verification",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/auth/signup",
								"parts": []any{
									"api",
									"auth",
									"signup",
								},
								"select": map[string]any{
									"$action": "signup",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billing": map[string]any{
				"fields": []any{},
				"name": "billing",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "window_day",
											"orig": "window_day",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/billing/usage",
								"parts": []any{
									"api",
									"billing",
									"usage",
								},
								"select": map[string]any{
									"$action": "usage",
									"exist": []any{
										"window_day",
										"workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"collaboration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authorId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "projectId",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "collaboration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/collab/comments",
								"parts": []any{
									"api",
									"collab",
									"comments",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/collab/comments",
								"parts": []any{
									"api",
									"collab",
									"comments",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"project_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"compliance": map[string]any{
				"fields": []any{},
				"name": "compliance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/compliance/content-policy",
								"parts": []any{
									"api",
									"compliance",
									"content-policy",
								},
								"select": map[string]any{
									"$action": "content_policy",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_meme": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "canvas",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "generationRunId",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "generationVariantId",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "imageDataUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overlays",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateSlug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermark",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "create_meme",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/memes",
								"parts": []any{
									"api",
									"memes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"developer_api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trendSignals",
						"type": "`$ARRAY`",
					},
				},
				"name": "developer_api",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/templates/ideas",
								"parts": []any{
									"api",
									"v1",
									"templates",
									"ideas",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/memes/generate",
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"free_caption_meme_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "templateSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermark",
						"short": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.",
						"type": "`$OBJECT`",
					},
				},
				"name": "free_caption_meme_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/free/memes/caption",
								"parts": []any{
									"api",
									"free",
									"memes",
									"caption",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/memes/caption-template",
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-template",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"free_template_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assetContentType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durationMs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "exampleImageUrl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "frameCount",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mediaType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "posterImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceTemplateId",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "sourceUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "free_template_search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "image",
											"kind": "query",
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/free/templates",
								"parts": []any{
									"api",
									"free",
									"templates",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "base64",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "byteLength",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dataUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "delayMs",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "durationMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filename",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fps",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "gifSlug",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Required for /api/v1/gifs/generate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mimeType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pages",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "parameters",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "returnBase64",
						"short": "Only used by /api/v1/gifs/generate.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sourceDurationMs",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "startMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "widthPx",
						"type": "`$INTEGER`",
					},
				},
				"name": "generate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/gifs/generate",
								"parts": []any{
									"api",
									"v1",
									"gifs",
									"generate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"growth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "action",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actorId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "caption",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalAccountId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "logExposure",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "memeSlug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "now",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "profiles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "shareSlug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "surface",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weekStart",
						"type": "`$STRING`",
					},
				},
				"name": "growth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/experiments/decision",
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/lifecycle-messaging",
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/referrals",
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
								"select": map[string]any{
									"$action": "referral",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/social-publish",
								"parts": []any{
									"api",
									"growth",
									"social-publish",
								},
								"select": map[string]any{
									"$action": "social_publish",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/trend-campaigns",
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
								},
								"select": map[string]any{
									"$action": "trend_campaign",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "log_exposure",
											"orig": "log_exposure",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "surface",
											"orig": "surface",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/experiments/decision",
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
										"log_exposure",
										"surface",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "published_only",
											"orig": "published_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "week_start",
											"orig": "week_start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/trend-campaigns",
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
								},
								"select": map[string]any{
									"$action": "trend_campaign",
									"exist": []any{
										"limit",
										"published_only",
										"week_start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "publish_limit",
											"orig": "publish_limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/social-publish",
								"parts": []any{
									"api",
									"growth",
									"social-publish",
								},
								"select": map[string]any{
									"$action": "social_publish",
									"exist": []any{
										"actor_id",
										"publish_limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/referrals",
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
								"select": map[string]any{
									"$action": "referral",
									"exist": []any{
										"actor_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/lifecycle-messaging",
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/viral-triggers",
								"parts": []any{
									"api",
									"growth",
									"viral-triggers",
								},
								"select": map[string]any{
									"$action": "viral_trigger",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_meme": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "altText",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canonicalImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nsfwStatus",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shareSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shareUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shareViews",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "templateSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "list_meme",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "exclude_template_clone",
											"orig": "exclude_template_clone",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_nsfw",
											"orig": "include_nsfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "official_only",
											"orig": "official_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "owner_token",
											"orig": "owner_token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "template_slug",
											"orig": "template_slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "visibility",
											"orig": "visibility",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/memes",
								"parts": []any{
									"api",
									"memes",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"media": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contentType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiresInSeconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ownerToken",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefix",
						"type": "`$STRING`",
					},
				},
				"name": "media",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/media/signed-url",
								"parts": []any{
									"api",
									"media",
									"signed-url",
								},
								"select": map[string]any{
									"$action": "signed_url",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"meme": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "altText",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canonicalImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canvas",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nsfwStatus",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overlays",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "shareSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shareUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shareViews",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "templateSlug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermark",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "meme",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "owner_token",
											"orig": "owner_token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/memes/{slug}",
								"parts": []any{
									"api",
									"memes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"owner_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/memes/{slug}",
								"parts": []any{
									"api",
									"memes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"public_template_media_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assetContentType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durationMs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "exampleImageUrl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "frameCount",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mediaType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "posterImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceTemplateId",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "sourceUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "public_template_media_item",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "image",
											"kind": "query",
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/templates/{slug}",
								"parts": []any{
									"api",
									"templates",
									"{slug}",
								},
								"select": map[string]any{
									"exist": []any{
										"media_type",
										"slug",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/gifs/{slug}",
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"gif",
						},
						[]any{
							"template",
						},
					},
				},
			},
			"standalone_agent_bootstrap": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stylePreset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "systemPrompt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermarkText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "websiteUrl",
						"type": "`$STRING`",
					},
				},
				"name": "standalone_agent_bootstrap",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/bootstrap",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"bootstrap",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/create-agent",
								"parts": []any{
									"api",
									"v1",
									"agents",
									"create-agent",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assetContentType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durationMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "exampleImageUrl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "fps",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "frameCount",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "gifSlug",
						"short": "Required for /api/v1/gifs/generate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mediaType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "posterImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "returnBase64",
						"short": "Only used by /api/v1/gifs/generate.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceTemplateId",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "sourceUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "startMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "widthPx",
						"type": "`$INTEGER`",
					},
				},
				"name": "template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/gifs/{slug}/generate",
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
									"generate",
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "image",
											"kind": "query",
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/templates",
								"parts": []any{
									"api",
									"templates",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"gif",
						},
					},
				},
			},
			"template_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assetContentType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durationMs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "exampleImageUrl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "frameCount",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mediaType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "posterImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceTemplateId",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "sourceUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "template_search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/gifs",
								"parts": []any{
									"api",
									"gifs",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"q",
										"query",
										"sort",
										"tag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trend_alert": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actorId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aggressiveness",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "alertId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "deliverAllAlerts",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "event",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "explicitNiches",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitRegions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitSources",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitTopics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "followerCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "niche",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topic",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "trend_alert",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/delivery",
								"parts": []any{
									"api",
									"alerts",
									"delivery",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/feedback",
								"parts": []any{
									"api",
									"alerts",
									"feedback",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/preferences",
								"parts": []any{
									"api",
									"alerts",
									"preferences",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/triggers",
								"parts": []any{
									"api",
									"alerts",
									"triggers",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "aggressiveness",
											"orig": "aggressiveness",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "follower_count",
											"orig": "follower_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "niche",
											"orig": "niche",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preferred_niche",
											"orig": "preferred_niche",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "preferred_region",
											"orig": "preferred_region",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts",
								"parts": []any{
									"api",
									"alerts",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "aggressiveness",
											"orig": "aggressiveness",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "follower_count",
											"orig": "follower_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preferred_niche",
											"orig": "preferred_niche",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "preferred_region",
											"orig": "preferred_region",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/ranking",
								"parts": []any{
									"api",
									"alerts",
									"ranking",
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
										"aggressiveness",
										"follower_count",
										"limit",
										"preferred_niche",
										"preferred_region",
										"topic",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/feedback",
								"parts": []any{
									"api",
									"alerts",
									"feedback",
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "actor_id",
											"orig": "actor_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/preferences",
								"parts": []any{
									"api",
									"alerts",
									"preferences",
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/delivery",
								"parts": []any{
									"api",
									"alerts",
									"delivery",
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/ingestion",
								"parts": []any{
									"api",
									"alerts",
									"ingestion",
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/quality-report",
								"parts": []any{
									"api",
									"alerts",
									"quality-report",
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "template_id",
											"orig": "template_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/message-templates",
								"parts": []any{
									"api",
									"alerts",
									"message-templates",
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/connectors",
								"parts": []any{
									"api",
									"alerts",
									"connectors",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/triggers",
								"parts": []any{
									"api",
									"alerts",
									"triggers",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"upload_caption_meme_success": map[string]any{
				"fields": []any{},
				"name": "upload_caption_meme_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/memes/caption-upload",
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-upload",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assetId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "atMs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "audioAssetId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "beatOffsetMs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bitrateKbps",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "bpm",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "cancelled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "container",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "durationMs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "durationSeconds",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$NUMBER`",
							},
						},
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "easing",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frameRate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "inputFormat",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "intensity",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "jobId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mimeType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offsetMs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "outputPresetId",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "outputUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "planTier",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "presetId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "progressPercent",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "project",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "projectId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "property",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceDeviceId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sourceUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "startMs",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "stylePresetId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "syncToBeatGrid",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trackId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transcript",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trendKeywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "watermarkEnabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "watermarkText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workerId",
						"type": "`$STRING`",
					},
				},
				"name": "video",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/drafts",
								"parts": []any{
									"api",
									"video",
									"drafts",
								},
								"select": map[string]any{
									"$action": "draft",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/export-settings",
								"parts": []any{
									"api",
									"video",
									"export-settings",
								},
								"select": map[string]any{
									"$action": "export_setting",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/formats",
								"parts": []any{
									"api",
									"video",
									"formats",
								},
								"select": map[string]any{
									"$action": "format",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/render-queue",
								"parts": []any{
									"api",
									"video",
									"render-queue",
								},
								"select": map[string]any{
									"$action": "render_queue",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/subtitles",
								"parts": []any{
									"api",
									"video",
									"subtitles",
								},
								"select": map[string]any{
									"$action": "subtitle",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/text-animations",
								"parts": []any{
									"api",
									"video",
									"text-animations",
								},
								"select": map[string]any{
									"$action": "text_animation",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/timeline",
								"parts": []any{
									"api",
									"video",
									"timeline",
								},
								"select": map[string]any{
									"$action": "timeline",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "beat_offset_m",
											"orig": "beat_offset_m",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "bpm",
											"orig": "bpm",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "style_preset_id",
											"orig": "style_preset_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sync_to_beat_grid",
											"orig": "sync_to_beat_grid",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "tone",
											"orig": "tone",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "transcript",
											"orig": "transcript",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "trend_keyword",
											"orig": "trend_keyword",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/subtitles",
								"parts": []any{
									"api",
									"video",
									"subtitles",
								},
								"select": map[string]any{
									"$action": "subtitle",
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "target_bpm",
											"orig": "target_bpm",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "tolerance_bpm",
											"orig": "tolerance_bpm",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/audio-library",
								"parts": []any{
									"api",
									"video",
									"audio-library",
								},
								"select": map[string]any{
									"$action": "audio_library",
									"exist": []any{
										"kind",
										"limit",
										"query",
										"tag",
										"target_bpm",
										"tolerance_bpm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "bitrate_kbp",
											"orig": "bitrate_kbp",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "container",
											"orig": "container",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "preset_id",
											"orig": "preset_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "watermark_enabled",
											"orig": "watermark_enabled",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "watermark_text",
											"orig": "watermark_text",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/export-settings",
								"parts": []any{
									"api",
									"video",
									"export-settings",
								},
								"select": map[string]any{
									"$action": "export_setting",
									"exist": []any{
										"bitrate_kbp",
										"container",
										"plan_tier",
										"preset_id",
										"watermark_enabled",
										"watermark_text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "duration_second",
											"orig": "duration_second",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "input_format",
											"orig": "input_format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mime_type",
											"orig": "mime_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "output_preset_id",
											"orig": "output_preset_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/formats",
								"parts": []any{
									"api",
									"video",
									"formats",
								},
								"select": map[string]any{
									"$action": "format",
									"exist": []any{
										"duration_second",
										"input_format",
										"mime_type",
										"output_preset_id",
										"plan_tier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/render-queue",
								"parts": []any{
									"api",
									"video",
									"render-queue",
								},
								"select": map[string]any{
									"$action": "render_queue",
									"exist": []any{
										"limit",
										"mode",
										"plan_tier",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "duration_m",
											"orig": "duration_m",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "intensity",
											"orig": "intensity",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preset_id",
											"orig": "preset_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_m",
											"orig": "start_m",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/text-animations",
								"parts": []any{
									"api",
									"video",
									"text-animations",
								},
								"select": map[string]any{
									"$action": "text_animation",
									"exist": []any{
										"duration_m",
										"intensity",
										"preset_id",
										"start_m",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/drafts",
								"parts": []any{
									"api",
									"video",
									"drafts",
								},
								"select": map[string]any{
									"$action": "draft",
									"exist": []any{
										"limit",
										"project_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/timeline",
								"parts": []any{
									"api",
									"video",
									"timeline",
								},
								"select": map[string]any{
									"$action": "timeline",
									"exist": []any{
										"limit",
										"project_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/video/render-performance",
								"parts": []any{
									"api",
									"video",
									"render-performance",
								},
								"select": map[string]any{
									"$action": "render_performance",
									"exist": []any{
										"refresh",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
