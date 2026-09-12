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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"lit": "telegram",
									},
									map[string]any{
										"lit": "bind",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"channels",
									"telegram",
									"bind",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "bind",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"channels",
									"whatsapp",
									"bind",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "unlocks",
									},
									map[string]any{
										"lit": "social-action",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{agent_id}",
									"unlocks",
									"social-action",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "keys",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
									"keys",
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
								"rename": map[string]any{
									"param": map[string]any{
										"unlockId": "unlock_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "unlocks",
									},
									map[string]any{
										"var": "unlock_id",
									},
									map[string]any{
										"lit": "approve",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"unlocks",
									"{unlock_id}",
									"approve",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/names:generate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "names:generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"names:generate",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/rewards/votes",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "rewards",
									},
									map[string]any{
										"lit": "votes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"votes",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/rewards/winner:close",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "rewards",
									},
									map[string]any{
										"lit": "winner:close",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"winner:close",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/webhooks/telegram",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "telegram",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"telegram",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/webhooks/whatsapp",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "whatsapp",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "rewards",
									},
									map[string]any{
										"lit": "leaderboard",
									},
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"leaderboard",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "keys",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"{id}",
									"keys",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/webhooks/whatsapp",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "whatsapp",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
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
								"rename": map[string]any{
									"param": map[string]any{
										"agentId": "agent_id",
										"keyId": "key_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "key_id",
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
								"parts": []any{
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/moderate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "moderate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"moderate",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/prompt",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "prompt",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"prompt",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/rank",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "rank",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rank",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/rewrite",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "rewrite",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rewrite",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/scene",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "scene",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"scene",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/captions/tone-presets",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "tone-presets",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "tone-presets",
									},
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/captions/generate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "captions",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
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
						"format": "date-time",
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
						"format": "date-time",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "job_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{job_id}",
									"cancel",
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
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "job_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "complete",
									},
								},
								"select": map[string]any{
									"$action": "complete",
									"exist": []any{
										"job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{job_id}",
									"complete",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/background-remove",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "background-remove",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"background-remove",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/edit-history",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "edit-history",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"edit-history",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/face-swap",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "face-swap",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"face-swap",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/face-targets",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "face-targets",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"face-targets",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"jobs",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "edit-history",
									},
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
								"parts": []any{
									"api",
									"ai",
									"edit-history",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "jobs",
									},
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
								"parts": []any{
									"api",
									"ai",
									"jobs",
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
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"api",
									"ai",
									"jobs",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/memes/generate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"lit": "detect",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"templates",
									"detect",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/templates/suggest",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"lit": "suggest",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"templates",
									"suggest",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "background-remove-benchmark",
									},
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
								"parts": []any{
									"api",
									"ai",
									"providers",
									"background-remove-benchmark",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "face-swap-benchmark",
									},
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
								"parts": []any{
									"api",
									"ai",
									"providers",
									"face-swap-benchmark",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/memes/generate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "experiments",
									},
									map[string]any{
										"lit": "templates",
									},
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
								"parts": []any{
									"api",
									"analytics",
									"experiments",
									"templates",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "backend-reliability",
									},
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
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"backend-reliability",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/alerts/backend",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "backend",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"analytics",
									"alerts",
									"backend",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/anomalies/ai",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "anomalies",
									},
									map[string]any{
										"lit": "ai",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"analytics",
									"anomalies",
									"ai",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/dashboards/activation-retention",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "activation-retention",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"activation-retention",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/dashboards/feature-adoption",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "feature-adoption",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"feature-adoption",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/analytics/metric-dictionary",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "metric-dictionary",
									},
								},
								"select": map[string]any{
									"$action": "metric_dictionary",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"analytics",
									"metric-dictionary",
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
						"format": "email",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "resend-verification",
									},
								},
								"select": map[string]any{
									"$action": "resend_verification",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"auth",
									"resend-verification",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/auth/signup",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "signup",
									},
								},
								"select": map[string]any{
									"$action": "signup",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"auth",
									"signup",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "usage",
									},
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
								"parts": []any{
									"api",
									"billing",
									"usage",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "collab",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"collab",
									"comments",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "collab",
									},
									map[string]any{
										"lit": "comments",
									},
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
								"parts": []any{
									"api",
									"collab",
									"comments",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "compliance",
									},
									map[string]any{
										"lit": "content-policy",
									},
								},
								"select": map[string]any{
									"$action": "content_policy",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"compliance",
									"content-policy",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "memes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"memes",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"lit": "ideas",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"templates",
									"ideas",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "free",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "caption",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"api",
									"free",
									"memes",
									"caption",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/memes/caption-template",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "caption-template",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-template",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "free",
									},
									map[string]any{
										"lit": "templates",
									},
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
								"parts": []any{
									"api",
									"free",
									"templates",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "gifs",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"api",
									"v1",
									"gifs",
									"generate",
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
						"format": "date-time",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "experiments",
									},
									map[string]any{
										"lit": "decision",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/lifecycle-messaging",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "lifecycle-messaging",
									},
								},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/referrals",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "referrals",
									},
								},
								"select": map[string]any{
									"$action": "referral",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/social-publish",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "social-publish",
									},
								},
								"select": map[string]any{
									"$action": "social_publish",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"social-publish",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/growth/trend-campaigns",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "trend-campaigns",
									},
								},
								"select": map[string]any{
									"$action": "trend_campaign",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "experiments",
									},
									map[string]any{
										"lit": "decision",
									},
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
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "trend-campaigns",
									},
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
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "social-publish",
									},
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
								"parts": []any{
									"api",
									"growth",
									"social-publish",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "referrals",
									},
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
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/lifecycle-messaging",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "lifecycle-messaging",
									},
								},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/growth/viral-triggers",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "growth",
									},
									map[string]any{
										"lit": "viral-triggers",
									},
								},
								"select": map[string]any{
									"$action": "viral_trigger",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"growth",
									"viral-triggers",
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
						"format": "date-time",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "memes",
									},
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
								"parts": []any{
									"api",
									"memes",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "media",
									},
									map[string]any{
										"lit": "signed-url",
									},
								},
								"select": map[string]any{
									"$action": "signed_url",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"media",
									"signed-url",
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
						"format": "date-time",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"api",
									"memes",
									"{id}",
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
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"api",
									"memes",
									"{id}",
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
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
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
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "public_template_media_item",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "gifs",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{
									"$action": "generate",
									"exist": []any{
										"slug",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
									"generate",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "templates",
									},
									map[string]any{
										"var": "slug",
									},
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
								"parts": []any{
									"api",
									"templates",
									"{slug}",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "gifs",
									},
									map[string]any{
										"var": "slug",
									},
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
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "bootstrap",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"bootstrap",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/create-agent",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"lit": "create-agent",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"agents",
									"create-agent",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "template",
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
								"orig": "/api/templates",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "templates",
									},
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
								"parts": []any{
									"api",
									"templates",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "gifs",
									},
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
								"parts": []any{
									"api",
									"gifs",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "delivery",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"delivery",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/feedback",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "feedback",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"feedback",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/preferences",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "preferences",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"preferences",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/alerts/triggers",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"triggers",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
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
								"parts": []any{
									"api",
									"alerts",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "ranking",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"ranking",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "feedback",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"feedback",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "preferences",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"preferences",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "delivery",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"delivery",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "ingestion",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"ingestion",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "quality-report",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"quality-report",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "message-templates",
									},
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
								"parts": []any{
									"api",
									"alerts",
									"message-templates",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/connectors",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "connectors",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"connectors",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/alerts/triggers",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "alerts",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"alerts",
									"triggers",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "memes",
									},
									map[string]any{
										"lit": "caption-upload",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-upload",
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
						"format": "date-time",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "drafts",
									},
								},
								"select": map[string]any{
									"$action": "draft",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"drafts",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/export-settings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "export-settings",
									},
								},
								"select": map[string]any{
									"$action": "export_setting",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"export-settings",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/formats",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "formats",
									},
								},
								"select": map[string]any{
									"$action": "format",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"formats",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/render-queue",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "render-queue",
									},
								},
								"select": map[string]any{
									"$action": "render_queue",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"render-queue",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/subtitles",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "subtitles",
									},
								},
								"select": map[string]any{
									"$action": "subtitle",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"subtitles",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/text-animations",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "text-animations",
									},
								},
								"select": map[string]any{
									"$action": "text_animation",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"text-animations",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/video/timeline",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "timeline",
									},
								},
								"select": map[string]any{
									"$action": "timeline",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"video",
									"timeline",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "subtitles",
									},
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
								"parts": []any{
									"api",
									"video",
									"subtitles",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "audio-library",
									},
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
								"parts": []any{
									"api",
									"video",
									"audio-library",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "export-settings",
									},
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
								"parts": []any{
									"api",
									"video",
									"export-settings",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "formats",
									},
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
								"parts": []any{
									"api",
									"video",
									"formats",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "render-queue",
									},
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
								"parts": []any{
									"api",
									"video",
									"render-queue",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "text-animations",
									},
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
								"parts": []any{
									"api",
									"video",
									"text-animations",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "drafts",
									},
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
								"parts": []any{
									"api",
									"video",
									"drafts",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "timeline",
									},
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
								"parts": []any{
									"api",
									"video",
									"timeline",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "render-performance",
									},
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
								"parts": []any{
									"api",
									"video",
									"render-performance",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
