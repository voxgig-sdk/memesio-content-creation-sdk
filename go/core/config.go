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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "/",
			"auth": map[string]any{
				"prefix": "",
				"name": "x-developer-api-key",
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
				"gif": map[string]any{},
				"growth": map[string]any{},
				"media": map[string]any{},
				"meme": map[string]any{},
				"public_template_media_item": map[string]any{},
				"standalone_agent_bootstrap": map[string]any{},
				"template": map[string]any{},
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
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stylePreset",
						"title": "Style Preset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "systemPrompt",
						"title": "System Prompt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermarkText",
						"title": "Watermark Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "websiteUrl",
						"title": "Website Url",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/{agentId}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/agents/{agentId}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "chatId",
						"title": "Chat Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeSlug",
						"title": "Meme Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "payoutReference",
						"title": "Payout Reference",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payoutStatus",
						"title": "Payout Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phoneOrChatId",
						"title": "Phone Or Chat Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "proof",
						"title": "Proof",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "quotaBoostPerDay",
						"title": "Quota Boost Per Day",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "userId",
						"title": "User Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weekStart",
						"title": "Week Start",
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
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/channels/telegram/bind",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/channels/whatsapp/bind",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/unlocks/social-action",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/{agentId}/keys",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "keys",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/agents/unlocks/{unlockId}/approve",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "unlock_id",
											"orig": "unlock_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"unlock_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"names:generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"votes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"winner:close",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"telegram",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"rewards",
									"leaderboard",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "week_start",
											"orig": "week_start",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"week_start",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/agents/{agentId}/keys",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "keys",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"webhooks",
									"whatsapp",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/agents/{agentId}/keys/{keyId}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "key_id",
											"orig": "key_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
										"key_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.agent",
						},
						[]any{
							"$.main.kit.entity.agent",
						},
					},
				},
			},
			"ai_caption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blockedTerms",
						"title": "Blocked Terms",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "canvasText",
						"title": "Canvas Text",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "captionCount",
						"title": "Caption Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionSets",
						"title": "Caption Sets",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "entities",
						"title": "Entities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "fallbackUsed",
						"title": "Fallback Used",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "generationStrategy",
						"title": "Generation Strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeId",
						"title": "Meme Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memeSlug",
						"title": "Meme Slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ok",
						"title": "Ok",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "optionCount",
						"title": "Option Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ownerToken",
						"title": "Owner Token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "providerId",
						"title": "Provider Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceCaptions",
						"title": "Reference Captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rewriteNote",
						"title": "Rewrite Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sceneSummary",
						"title": "Scene Summary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateDescription",
						"title": "Template Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateName",
						"title": "Template Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templateTags",
						"title": "Template Tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tone",
						"title": "Tone",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "toneCues",
						"title": "Tone Cues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendKeywords",
						"title": "Trend Keywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendReferences",
						"title": "Trend References",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendSignals",
						"title": "Trend Signals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "variationOffset",
						"title": "Variation Offset",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "voiceRules",
						"title": "Voice Rules",
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"moderate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"prompt",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rank",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"rewrite",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"scene",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"tone-presets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"locale",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"captions",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "actorId",
						"title": "Actor Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "afterState",
						"title": "After State",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "attempts",
						"title": "Attempts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "beforeState",
						"title": "Before State",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "brushEdits",
						"title": "Brush Edits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "capability",
						"title": "Capability",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "celebrityConfidence",
						"title": "Celebrity Confidence",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "consentAttested",
						"title": "Consent Attested",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "detectedFaceCount",
						"title": "Detected Face Count",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "edgeRefinement",
						"title": "Edge Refinement",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "frameTimeMs",
						"title": "Frame Time Ms",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "layerId",
						"title": "Layer Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "layerType",
						"title": "Layer Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maxAttempts",
						"title": "Max Attempts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "maxFaces",
						"title": "Max Faces",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nsfwScore",
						"title": "Nsfw Score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "projectId",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "runAfterMs",
						"title": "Run After Ms",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sourceAssetUrl",
						"title": "Source Asset Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceFaceIndex",
						"title": "Source Face Index",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"title": "Source Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "targetAssetUrl",
						"title": "Target Asset Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "targetFaceIndex",
						"title": "Target Face Index",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "timeoutMs",
						"title": "Timeout Ms",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "traceId",
						"title": "Trace Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "versionId",
						"title": "Version Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "workspaceId",
						"title": "Workspace Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs/{jobId}/cancel",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"job_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/ai/jobs/{jobId}/complete",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "complete",
									"exist": []any{
										"job_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"background-remove",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"edit-history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"face-swap",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"face-targets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"edit-history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "from_version_id",
											"orig": "from_version_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "layer_id",
											"orig": "layer_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to_version_id",
											"orig": "to_version_id",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"status",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/ai/jobs/{jobId}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ai_meme_generation_succeeded": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowHeuristicFallback",
						"title": "Allow Heuristic Fallback",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "captionSource",
						"title": "Caption Source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "correlationId",
						"title": "Correlation Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "degradedFromAsync",
						"title": "Degraded From Async",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "editableCaptions",
						"title": "Editable Captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "flow",
						"title": "Flow",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "ok",
						"title": "Ok",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "preferredProviderId",
						"title": "Preferred Provider Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rewriteNote",
						"title": "Rewrite Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "runId",
						"title": "Run Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "templateId",
						"title": "Template Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tone",
						"title": "Tone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toneCues",
						"title": "Tone Cues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "variantCount",
						"title": "Variant Count",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "variants",
						"title": "Variants",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "workspaceId",
						"title": "Workspace Id",
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
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Actor Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "correlationId",
						"title": "Correlation Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mappingMode",
						"title": "Mapping Mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maxSlots",
						"title": "Max Slots",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceImageUrl",
						"title": "Source Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "texts",
						"title": "Texts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trendSignals",
						"title": "Trend Signals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "workspaceId",
						"title": "Workspace Id",
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
								"parts": []any{
									"api",
									"ai",
									"templates",
									"detect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"templates",
									"suggest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"providers",
									"background-remove-benchmark",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"providers",
									"face-swap-benchmark",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"ai",
									"memes",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
								"parts": []any{
									"api",
									"analytics",
									"experiments",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "template_id",
											"orig": "template_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"backend-reliability",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "window_hour",
											"orig": "window_hour",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"window_hour",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"alerts",
									"backend",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"anomalies",
									"ai",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"activation-retention",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"dashboards",
									"feature-adoption",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"analytics",
									"metric-dictionary",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "metric_dictionary",
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
				"fields": []any{},
				"name": "auth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"auth",
									"resend-verification",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "resend_verification",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"auth",
									"signup",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "signup",
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
								"parts": []any{
									"api",
									"billing",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "window_day",
											"orig": "window_day",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "usage",
									"exist": []any{
										"window_day",
										"workspace_id",
									},
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
						"title": "Author Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "projectId",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "collaboration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"collab",
									"comments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"collab",
									"comments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"project_id",
									},
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
								"parts": []any{
									"api",
									"compliance",
									"content-policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "content_policy",
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
						"title": "Canvas",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "generationRunId",
						"title": "Generation Run Id",
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
						"title": "Generation Variant Id",
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
						"title": "Image Data Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "overlays",
						"title": "Overlays",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceImageUrl",
						"title": "Source Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "templateSlug",
						"title": "Template Slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermark",
						"title": "Watermark",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "create_meme",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"memes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "trendSignals",
						"title": "Trend Signals",
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
								"parts": []any{
									"api",
									"v1",
									"templates",
									"ideas",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"memes",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "templateSlug",
						"title": "Template Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermark",
						"title": "Watermark",
						"type": "`$OBJECT`",
						"short": "Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark.",
					},
				},
				"name": "free_caption_meme_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"free",
									"memes",
									"caption",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-template",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"title": "Asset Bytes",
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
						"title": "Asset Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"title": "Box Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "captionCount",
						"title": "Caption Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "durationMs",
						"title": "Duration Ms",
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
						"title": "Example Image Url",
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
						"title": "Frame Count",
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
						"title": "Height",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "posterImageUrl",
						"title": "Poster Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"title": "Quality Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceTemplateId",
						"title": "Source Template Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
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
								"parts": []any{
									"api",
									"free",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "image",
										},
										map[string]any{
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Base64",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "byteLength",
						"title": "Byte Length",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dataUrl",
						"title": "Data Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "delayMs",
						"title": "Delay Ms",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "durationMs",
						"title": "Duration Ms",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filename",
						"title": "Filename",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fps",
						"title": "Fps",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "gifSlug",
						"title": "Gif Slug",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Required for /api/v1/gifs/generate.",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "mimeType",
						"title": "Mime Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "pages",
						"title": "Pages",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "returnBase64",
						"title": "Return Base64",
						"type": "`$BOOLEAN`",
						"short": "Only used by /api/v1/gifs/generate.",
					},
					map[string]any{
						"name": "sourceDurationMs",
						"title": "Source Duration Ms",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "startMs",
						"title": "Start Ms",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "widthPx",
						"title": "Width Px",
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
								"parts": []any{
									"api",
									"v1",
									"gifs",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"gif": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "animated",
						"title": "Animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"title": "Asset Bytes",
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
						"title": "Asset Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"title": "Box Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"title": "Caption Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "durationMs",
						"title": "Duration Ms",
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
						"title": "Example Image Url",
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
						"title": "Frame Count",
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
						"title": "Height",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "posterImageUrl",
						"title": "Poster Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"title": "Preview Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"title": "Quality Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceTemplateId",
						"title": "Source Template Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "gif",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"gifs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "actorId",
						"title": "Actor Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "logExposure",
						"title": "Log Exposure",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "surface",
						"title": "Surface",
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
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "referral",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"social-publish",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "social_publish",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "trend_campaign",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"experiments",
									"decision",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "log_exposure",
											"orig": "log_exposure",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "surface",
											"orig": "surface",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
										"log_exposure",
										"surface",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"trend-campaigns",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "published_only",
											"orig": "published_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "week_start",
											"orig": "week_start",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"social-publish",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "publish_limit",
											"orig": "publish_limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "social_publish",
									"exist": []any{
										"actor_id",
										"publish_limit",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"referrals",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "referral",
									"exist": []any{
										"actor_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"lifecycle-messaging",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "lifecycle_messaging",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"growth",
									"viral-triggers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "viral_trigger",
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
				"fields": []any{},
				"name": "media",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"media",
									"signed-url",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "signed_url",
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
						"title": "Alt Text",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "canonicalImageUrl",
						"title": "Canonical Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "canvas",
						"title": "Canvas",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nsfwStatus",
						"title": "Nsfw Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "overlays",
						"title": "Overlays",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "shareSlug",
						"title": "Share Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "shareUrl",
						"title": "Share Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "shareViews",
						"title": "Share Views",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceImageUrl",
						"title": "Source Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "templateSlug",
						"title": "Template Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "visibility",
						"title": "Visibility",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "watermark",
						"title": "Watermark",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "meme",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"memes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "exclude_template_clone",
											"orig": "exclude_template_clone",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_nsfw",
											"orig": "include_nsfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "official_only",
											"orig": "official_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "owner_token",
											"orig": "owner_token",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "template_slug",
											"orig": "template_slug",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "visibility",
											"orig": "visibility",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/memes/{slug}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "owner_token",
											"orig": "owner_token",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"owner_token",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/memes/{slug}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"title": "Asset Bytes",
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
						"title": "Asset Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"title": "Box Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"title": "Caption Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "durationMs",
						"title": "Duration Ms",
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
						"title": "Example Image Url",
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
						"title": "Frame Count",
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
						"title": "Height",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "posterImageUrl",
						"title": "Poster Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"title": "Preview Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"title": "Quality Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceTemplateId",
						"title": "Source Template Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
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
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "generate",
									"exist": []any{
										"slug",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"templates",
									"{slug}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "image",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"media_type",
										"slug",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"gifs",
									"{slug}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.gif",
						},
						[]any{
							"$.main.kit.entity.template",
						},
					},
				},
			},
			"standalone_agent_bootstrap": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "stylePreset",
						"title": "Style Preset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "systemPrompt",
						"title": "System Prompt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watermarkText",
						"title": "Watermark Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "websiteUrl",
						"title": "Website Url",
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"bootstrap",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"v1",
									"agents",
									"create-agent",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Animated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assetBytes",
						"title": "Asset Bytes",
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
						"title": "Asset Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "boxCount",
						"title": "Box Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captionCount",
						"title": "Caption Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "captions",
						"title": "Captions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "durationMs",
						"title": "Duration Ms",
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
						"title": "Example Image Url",
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
						"title": "Frame Count",
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
						"title": "Height",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "posterImageUrl",
						"title": "Poster Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewImageUrl",
						"title": "Preview Image Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "qualityStatus",
						"title": "Quality Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceTemplateId",
						"title": "Source Template Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
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
								"parts": []any{
									"api",
									"templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "media_type",
											"orig": "media_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "image",
										},
										map[string]any{
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "actorId",
						"title": "Actor Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "aggressiveness",
						"title": "Aggressiveness",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "alertId",
						"title": "Alert Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "channels",
						"title": "Channels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "deliverAllAlerts",
						"title": "Deliver All Alerts",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "event",
						"title": "Event",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "explicitNiches",
						"title": "Explicit Niches",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitRegions",
						"title": "Explicit Regions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitSources",
						"title": "Explicit Sources",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicitTopics",
						"title": "Explicit Topics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "followerCount",
						"title": "Follower Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "niche",
						"title": "Niche",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "trend_alert",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"delivery",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"feedback",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"preferences",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"triggers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "aggressiveness",
											"orig": "aggressiveness",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "follower_count",
											"orig": "follower_count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "niche",
											"orig": "niche",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preferred_niche",
											"orig": "preferred_niche",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "preferred_region",
											"orig": "preferred_region",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "topic",
											"orig": "topic",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"ranking",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "aggressiveness",
											"orig": "aggressiveness",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "follower_count",
											"orig": "follower_count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preferred_niche",
											"orig": "preferred_niche",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "preferred_region",
											"orig": "preferred_region",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "topic",
											"orig": "topic",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"feedback",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
										"limit",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"preferences",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"actor_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"delivery",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"ingestion",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"quality-report",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refresh",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"message-templates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "template_id",
											"orig": "template_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"connectors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"alerts",
									"triggers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
								"parts": []any{
									"api",
									"v1",
									"memes",
									"caption-upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video": map[string]any{
				"fields": []any{},
				"name": "video",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"drafts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "draft",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"export-settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "export_setting",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"formats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "format",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"render-queue",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "render_queue",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"subtitles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "subtitle",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"text-animations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "text_animation",
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"timeline",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "timeline",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"subtitles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "beat_offset_m",
											"orig": "beat_offset_m",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "bpm",
											"orig": "bpm",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "style_preset_id",
											"orig": "style_preset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sync_to_beat_grid",
											"orig": "sync_to_beat_grid",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "tone",
											"orig": "tone",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "transcript",
											"orig": "transcript",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "trend_keyword",
											"orig": "trend_keyword",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"audio-library",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "target_bpm",
											"orig": "target_bpm",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "tolerance_bpm",
											"orig": "tolerance_bpm",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"export-settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "bitrate_kbp",
											"orig": "bitrate_kbp",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "container",
											"orig": "container",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "preset_id",
											"orig": "preset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "watermark_enabled",
											"orig": "watermark_enabled",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "watermark_text",
											"orig": "watermark_text",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"formats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "duration_second",
											"orig": "duration_second",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "input_format",
											"orig": "input_format",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "mime_type",
											"orig": "mime_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "output_preset_id",
											"orig": "output_preset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"render-queue",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "plan_tier",
											"orig": "plan_tier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"text-animations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "duration_m",
											"orig": "duration_m",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "intensity",
											"orig": "intensity",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preset_id",
											"orig": "preset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_m",
											"orig": "start_m",
											"type": "`$NUMBER`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"drafts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "draft",
									"exist": []any{
										"limit",
										"project_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"timeline",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "timeline",
									"exist": []any{
										"limit",
										"project_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"api",
									"video",
									"render-performance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "refresh",
											"orig": "refresh",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "render_performance",
									"exist": []any{
										"refresh",
									},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
