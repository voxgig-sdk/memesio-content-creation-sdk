# MemesioContentCreation TypeScript SDK Reference

Complete API reference for the MemesioContentCreation TypeScript SDK.


## MemesioContentCreationSDK

### Constructor

```ts
new MemesioContentCreationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MemesioContentCreationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MemesioContentCreationSDK` instance in test mode.


### Instance Methods

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `AgentInfra(data?: object)`

Create a new `AgentInfra` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentInfraEntity` instance.

#### `AiCaption(data?: object)`

Create a new `AiCaption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiCaptionEntity` instance.

#### `AiJob(data?: object)`

Create a new `AiJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiJobEntity` instance.

#### `AiMemeGenerationSucceeded(data?: object)`

Create a new `AiMemeGenerationSucceeded` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiMemeGenerationSucceededEntity` instance.

#### `AiProvider(data?: object)`

Create a new `AiProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderEntity` instance.

#### `Analytics(data?: object)`

Create a new `Analytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `Billing(data?: object)`

Create a new `Billing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingEntity` instance.

#### `Collaboration(data?: object)`

Create a new `Collaboration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollaborationEntity` instance.

#### `Compliance(data?: object)`

Create a new `Compliance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComplianceEntity` instance.

#### `CreateMeme(data?: object)`

Create a new `CreateMeme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateMemeEntity` instance.

#### `DeveloperApi(data?: object)`

Create a new `DeveloperApi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeveloperApiEntity` instance.

#### `FreeCaptionMemeSuccess(data?: object)`

Create a new `FreeCaptionMemeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FreeCaptionMemeSuccessEntity` instance.

#### `FreeTemplateSearch(data?: object)`

Create a new `FreeTemplateSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FreeTemplateSearchEntity` instance.

#### `Generate(data?: object)`

Create a new `Generate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateEntity` instance.

#### `Growth(data?: object)`

Create a new `Growth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GrowthEntity` instance.

#### `ListMeme(data?: object)`

Create a new `ListMeme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMemeEntity` instance.

#### `Media(data?: object)`

Create a new `Media` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MediaEntity` instance.

#### `Meme(data?: object)`

Create a new `Meme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemeEntity` instance.

#### `PublicTemplateMediaItem(data?: object)`

Create a new `PublicTemplateMediaItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicTemplateMediaItemEntity` instance.

#### `StandaloneAgentBootstrap(data?: object)`

Create a new `StandaloneAgentBootstrap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StandaloneAgentBootstrapEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `TemplateSearch(data?: object)`

Create a new `TemplateSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateSearchEntity` instance.

#### `TrendAlert(data?: object)`

Create a new `TrendAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrendAlertEntity` instance.

#### `UploadCaptionMemeSuccess(data?: object)`

Create a new `UploadCaptionMemeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadCaptionMemeSuccessEntity` instance.

#### `Video(data?: object)`

Create a new `Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MemesioContentCreationSDK.test()`.

**Returns:** `MemesioContentCreationSDK` instance in test mode.


---

## AgentEntity

```ts
const agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `locale` | `string` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | No |  |
| `status` | `string` | No |  |
| `style_preset` | `string` | No |  |
| `system_prompt` | `string` | No |  |
| `watermark_text` | `string` | No |  |
| `website_url` | `string` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `description` | - | - | - |
| `locale` | - | - | - |
| `name` | - | - | Yes |
| `slug` | - | - | - |
| `status` | - | - | - |
| `style_preset` | - | - | - |
| `system_prompt` | - | - | - |
| `watermark_text` | - | - | - |
| `website_url` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Agent().create({
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Agent().load({ id: 'agent_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Agent().update({
  id: 'agent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentInfraEntity

```ts
const agent_infra = client.AgentInfra()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chat_id` | `string` | Yes |  |
| `meme_slug` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `payout_reference` | `string` | No |  |
| `payout_status` | `string` | No |  |
| `phone_or_chat_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `Record<string, any>` | No |  |
| `quota_boost_per_day` | `number` | No |  |
| `scope` | `any[]` | No |  |
| `user_id` | `string` | No |  |
| `week_start` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentInfra().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AgentInfra().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AgentInfra().remove({ agent_id: 'agent_id', key_id: 'key_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiCaptionEntity

```ts
const ai_caption = client.AiCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `any[]` | No |  |
| `canvas_text` | `any[]` | Yes |  |
| `caption_count` | `number` | No |  |
| `caption_set` | `any[]` | No |  |
| `entity` | `any[]` | No |  |
| `fallback_used` | `boolean` | No |  |
| `generation_strategy` | `string` | No |  |
| `locale` | `string` | No |  |
| `meme_id` | `string` | No |  |
| `meme_slug` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `boolean` | No |  |
| `option_count` | `number` | No |  |
| `owner_token` | `string` | No |  |
| `provider_id` | `string` | No |  |
| `reference_caption` | `any[]` | No |  |
| `rewrite_note` | `string` | No |  |
| `scene_summary` | `string` | No |  |
| `template_description` | `string` | No |  |
| `template_name` | `string` | No |  |
| `template_tag` | `any[]` | No |  |
| `tone` | `string` | Yes |  |
| `tone_cue` | `any[]` | No |  |
| `trend_keyword` | `any[]` | No |  |
| `trend_reference` | `any[]` | No |  |
| `trend_signal` | `any[]` | No |  |
| `variation_offset` | `number` | No |  |
| `voice_rule` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiCaption().create({
  canvas_text: [],
  name: 'example_name',
  tone: 'example_tone',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiCaption().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiJobEntity

```ts
const ai_job = client.AiJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | No |  |
| `after_state` | `Record<string, any>` | No |  |
| `attempt` | `number` | No |  |
| `before_state` | `Record<string, any>` | No |  |
| `brush_edit` | `any[]` | No |  |
| `capability` | `string` | Yes |  |
| `celebrity_confidence` | `number` | No |  |
| `consent_attested` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `detected_face_count` | `number` | Yes |  |
| `edge_refinement` | `number` | No |  |
| `estimated_cost_usd` | `number` | No |  |
| `frame_time_m` | `number` | No |  |
| `height` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `Record<string, any>` | No |  |
| `layer_id` | `string` | Yes |  |
| `layer_type` | `string` | No |  |
| `max_attempt` | `number` | No |  |
| `max_face` | `number` | No |  |
| `media_type` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `nsfw_score` | `number` | No |  |
| `output` | `Record<string, any>` | No |  |
| `project_id` | `string` | Yes |  |
| `provider_id` | `string` | No |  |
| `reason` | `string` | No |  |
| `run_after_m` | `number` | No |  |
| `source_asset_url` | `string` | Yes |  |
| `source_face_index` | `number` | No |  |
| `source_image_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_asset_url` | `string` | Yes |  |
| `target_face_index` | `number` | No |  |
| `timeout_m` | `number` | No |  |
| `trace_id` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `version_id` | `string` | No |  |
| `width` | `number` | Yes |  |
| `worker_id` | `string` | Yes |  |
| `workspace_id` | `string` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `action` | - | - |
| `actor_id` | - | - |
| `after_state` | - | - |
| `attempt` | - | - |
| `before_state` | - | - |
| `brush_edit` | - | - |
| `capability` | - | - |
| `celebrity_confidence` | - | - |
| `consent_attested` | - | - |
| `created_at` | - | - |
| `detected_face_count` | - | - |
| `edge_refinement` | - | - |
| `estimated_cost_usd` | - | - |
| `frame_time_m` | - | - |
| `height` | - | - |
| `id` | - | - |
| `input` | - | - |
| `layer_id` | - | - |
| `layer_type` | - | - |
| `max_attempt` | - | - |
| `max_face` | - | - |
| `media_type` | - | Yes |
| `metadata` | - | - |
| `nsfw_score` | - | - |
| `output` | - | - |
| `project_id` | - | - |
| `provider_id` | - | - |
| `reason` | - | - |
| `run_after_m` | - | - |
| `source_asset_url` | - | - |
| `source_face_index` | - | - |
| `source_image_url` | - | - |
| `status` | - | - |
| `target_asset_url` | - | - |
| `target_face_index` | - | - |
| `timeout_m` | - | - |
| `trace_id` | - | - |
| `updated_at` | - | - |
| `version_id` | - | - |
| `width` | - | - |
| `worker_id` | - | - |
| `workspace_id` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiJob().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiJob().load({ id: 'ai_job_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiMemeGenerationSucceededEntity

```ts
const ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `boolean` | No |  |
| `caption` | `any[]` | No |  |
| `caption_source` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `degraded_from_async` | `boolean` | No |  |
| `editable_caption` | `any[]` | No |  |
| `flow` | `string` | Yes |  |
| `image_url` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `preferred_provider_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `rewrite_note` | `string` | No |  |
| `run_id` | `string` | No |  |
| `status` | `string` | Yes |  |
| `template_id` | `string` | No |  |
| `tone` | `string` | No |  |
| `tone_cue` | `any[]` | No |  |
| `variant` | `any[]` | Yes |  |
| `variant_count` | `number` | Yes |  |
| `workspace_id` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `allow_heuristic_fallback` | - |
| `caption` | - |
| `caption_source` | - |
| `correlation_id` | - |
| `degraded_from_async` | - |
| `editable_caption` | - |
| `flow` | Yes |
| `image_url` | - |
| `mode` | Yes |
| `ok` | - |
| `preferred_provider_id` | - |
| `prompt` | - |
| `rewrite_note` | - |
| `run_id` | - |
| `status` | - |
| `template_id` | - |
| `tone` | - |
| `tone_cue` | - |
| `variant` | - |
| `variant_count` | Yes |
| `workspace_id` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiMemeGenerationSucceeded().create({
  flow: 'example_flow',
  mode: 'example_mode',
  ok: true,
  prompt: 'example_prompt',
  status: 'example_status',
  variant: [],
  variant_count: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderEntity

```ts
const ai_provider = client.AiProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `limit` | `number` | No |  |
| `mapping_mode` | `string` | No |  |
| `max_slot` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `text` | `any[]` | No |  |
| `trend_signal` | `any[]` | No |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiProvider().create({
  prompt: 'example_prompt',
  source_image_url: 'example_source_image_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiProvider().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsEntity

```ts
const analytics = client.Analytics()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Analytics().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Auth().create({
  email: 'example_email',
  password: 'example_password',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingEntity

```ts
const billing = client.Billing()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Billing().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollaborationEntity

```ts
const collaboration = client.Collaboration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `project_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Collaboration().create({
  message: 'example_message',
  project_id: 'example_project_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Collaboration().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComplianceEntity

```ts
const compliance = client.Compliance()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Compliance().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateMemeEntity

```ts
const create_meme = client.CreateMeme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `Record<string, any>` | Yes |  |
| `caption` | `any[]` | Yes |  |
| `generation_run_id` | `any` | No |  |
| `generation_variant_id` | `any` | No |  |
| `image_data_url` | `string` | Yes |  |
| `overlay` | `any[]` | No |  |
| `source_image_url` | `string` | Yes |  |
| `template_slug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateMeme().create({
  canva: {},
  caption: [],
  image_data_url: 'example_image_data_url',
  source_image_url: 'example_source_image_url',
  watermark: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeveloperApiEntity

```ts
const developer_api = client.DeveloperApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `trend_signal` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeveloperApi().create({
  prompt: 'example_prompt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeveloperApi().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FreeCaptionMemeSuccessEntity

```ts
const free_caption_meme_success = client.FreeCaptionMemeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any[]` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FreeCaptionMemeSuccess().create({
  caption: [],
  template_slug: 'example_template_slug',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FreeTemplateSearchEntity

```ts
const free_template_search = client.FreeTemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | Yes |  |
| `caption` | `any[]` | Yes |  |
| `caption_count` | `number` | Yes |  |
| `description` | `string` | Yes |  |
| `duration_m` | `any` | No |  |
| `example_image_url` | `any` | No |  |
| `frame_count` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `any` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `any[]` | No |  |
| `width` | `any` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FreeTemplateSearch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateEntity

```ts
const generate = client.Generate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any[]` | No |  |
| `data` | `Record<string, any>` | Yes |  |
| `duration_m` | `number` | No |  |
| `fps` | `number` | No |  |
| `gif_slug` | `string` | No |  |
| `ok` | `boolean` | Yes |  |
| `return_base64` | `boolean` | No |  |
| `start_m` | `number` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `width_px` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Generate().create({
  data: {},
  ok: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GrowthEntity

```ts
const growth = client.Growth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No |  |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `code` | `string` | No |  |
| `external_account_id` | `string` | No |  |
| `handle` | `string` | No |  |
| `limit` | `number` | No |  |
| `log_exposure` | `boolean` | No |  |
| `meme_slug` | `string` | No |  |
| `now` | `string` | No |  |
| `platform` | `string` | No |  |
| `profile` | `any[]` | No |  |
| `share_slug` | `string` | No |  |
| `surface` | `string` | No |  |
| `week_start` | `string` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `account_id` | - | - |
| `action` | - | - |
| `actor_id` | - | Yes |
| `caption` | - | - |
| `code` | - | - |
| `external_account_id` | - | - |
| `handle` | - | - |
| `limit` | - | - |
| `log_exposure` | - | - |
| `meme_slug` | - | - |
| `now` | - | - |
| `platform` | - | - |
| `profile` | - | - |
| `share_slug` | - | - |
| `surface` | - | - |
| `week_start` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Growth().create({
  action: 'example_action',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Growth().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GrowthEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMemeEntity

```ts
const list_meme = client.ListMeme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `string` | Yes |  |
| `canonical_image_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `nsfw_status` | `string` | Yes |  |
| `share_slug` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |
| `share_view` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `tag` | `any[]` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMeme().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MediaEntity

```ts
const media = client.Media()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `content_type` | `string` | No |  |
| `expires_in_second` | `number` | No |  |
| `owner_token` | `string` | No |  |
| `path` | `string` | No |  |
| `prefix` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Media().create({
  action: 'example_action',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MediaEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemeEntity

```ts
const meme = client.Meme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `string` | Yes |  |
| `canonical_image_url` | `string` | Yes |  |
| `canva` | `Record<string, any>` | Yes |  |
| `caption` | `any[]` | Yes |  |
| `created_at` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `nsfw_status` | `string` | Yes |  |
| `overlay` | `any[]` | Yes |  |
| `share_slug` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |
| `share_view` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `tag` | `any[]` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Meme().load({ id: 'meme_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Meme().remove({ id: 'meme_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicTemplateMediaItemEntity

```ts
const public_template_media_item = client.PublicTemplateMediaItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `any[]` | Yes |  |
| `caption_count` | `number` | No |  |
| `category` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `any` | No |  |
| `example_image_url` | `any` | No |  |
| `frame_count` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `any` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `any[]` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PublicTemplateMediaItem().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StandaloneAgentBootstrapEntity

```ts
const standalone_agent_bootstrap = client.StandaloneAgentBootstrap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `handle` | `string` | Yes |  |
| `locale` | `string` | No |  |
| `name` | `string` | Yes |  |
| `style_preset` | `string` | No |  |
| `system_prompt` | `string` | No |  |
| `watermark_text` | `string` | No |  |
| `website_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StandaloneAgentBootstrap().create({
  handle: 'example_handle',
  name: 'example_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `any[]` | No |  |
| `caption_count` | `number` | No |  |
| `category` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `number` | No |  |
| `example_image_url` | `any` | No |  |
| `fps` | `number` | No |  |
| `frame_count` | `any` | No |  |
| `gif_slug` | `string` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `return_base64` | `boolean` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `any` | Yes |  |
| `source_url` | `string` | No |  |
| `start_m` | `number` | No |  |
| `tag` | `any[]` | No |  |
| `title` | `string` | No |  |
| `width` | `any` | Yes |  |
| `width_px` | `number` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `animated` | - | - |
| `asset_byte` | - | - |
| `asset_content_type` | - | - |
| `box_count` | - | - |
| `caption` | Yes | - |
| `caption_count` | - | - |
| `category` | - | - |
| `description` | - | - |
| `duration_m` | - | - |
| `example_image_url` | - | - |
| `fps` | - | - |
| `frame_count` | - | - |
| `gif_slug` | - | - |
| `height` | - | - |
| `id` | - | - |
| `image_url` | - | - |
| `media_type` | - | - |
| `name` | - | - |
| `poster_image_url` | - | - |
| `preview_image_url` | - | - |
| `quality_status` | - | - |
| `return_base64` | - | - |
| `slug` | - | - |
| `source_template_id` | - | - |
| `source_url` | - | - |
| `start_m` | - | - |
| `tag` | Yes | - |
| `title` | - | - |
| `width` | - | - |
| `width_px` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
  slug: 'example_slug',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Template().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateSearchEntity

```ts
const template_search = client.TemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `any[]` | Yes |  |
| `caption_count` | `number` | No |  |
| `category` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `any` | No |  |
| `example_image_url` | `any` | No |  |
| `frame_count` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `any` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `any[]` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TemplateSearch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrendAlertEntity

```ts
const trend_alert = client.TrendAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | Yes |  |
| `aggressiveness` | `number` | No |  |
| `alert_id` | `string` | Yes |  |
| `channel` | `any[]` | No |  |
| `deliver_all_alert` | `boolean` | No |  |
| `event` | `Record<string, any>` | No |  |
| `explicit_niche` | `any[]` | No |  |
| `explicit_region` | `any[]` | No |  |
| `explicit_source` | `any[]` | No |  |
| `explicit_topic` | `any[]` | No |  |
| `follower_count` | `number` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TrendAlert().create({
  action: 'example_action',
  actor_id: 'example_actor_id',
  alert_id: 'example_alert_id',
  topic: 'example_topic',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TrendAlert().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadCaptionMemeSuccessEntity

```ts
const upload_caption_meme_success = client.UploadCaptionMemeSuccess()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UploadCaptionMemeSuccess().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoEntity

```ts
const video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `asset_id` | `string` | No |  |
| `at_m` | `number` | No |  |
| `audio_asset_id` | `string` | No |  |
| `beat_offset_m` | `number` | No |  |
| `bitrate_kbp` | `number` | No |  |
| `bpm` | `number` | No |  |
| `cancelled` | `boolean` | No |  |
| `container` | `string` | No |  |
| `duration_m` | `number` | No |  |
| `duration_second` | `number` | Yes |  |
| `easing` | `string` | No |  |
| `error` | `string` | No |  |
| `frame_rate` | `number` | No |  |
| `input_format` | `string` | Yes |  |
| `intensity` | `number` | No |  |
| `job_id` | `string` | No |  |
| `locale` | `string` | No |  |
| `mime_type` | `string` | Yes |  |
| `name` | `string` | No |  |
| `offset_m` | `number` | No |  |
| `output_preset_id` | `string` | Yes |  |
| `output_url` | `string` | No |  |
| `plan_tier` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `progress_percent` | `number` | No |  |
| `project` | `Record<string, any>` | No |  |
| `project_id` | `string` | No |  |
| `property` | `string` | No |  |
| `source_device_id` | `string` | No |  |
| `source_url` | `string` | No |  |
| `stage` | `string` | No |  |
| `start_m` | `number` | No |  |
| `style_preset_id` | `string` | No |  |
| `sync_to_beat_grid` | `boolean` | No |  |
| `tone` | `string` | No |  |
| `track_id` | `string` | No |  |
| `transcript` | `string` | No |  |
| `trend_keyword` | `any[]` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `number` | No |  |
| `watermark_enabled` | `boolean` | No |  |
| `watermark_text` | `string` | No |  |
| `worker_id` | `string` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `action` | - | Yes |
| `asset_id` | - | - |
| `at_m` | - | - |
| `audio_asset_id` | - | - |
| `beat_offset_m` | - | - |
| `bitrate_kbp` | - | - |
| `bpm` | - | - |
| `cancelled` | - | - |
| `container` | - | - |
| `duration_m` | - | - |
| `duration_second` | - | Yes |
| `easing` | - | - |
| `error` | - | - |
| `frame_rate` | - | - |
| `input_format` | - | - |
| `intensity` | - | - |
| `job_id` | - | - |
| `locale` | - | - |
| `mime_type` | - | - |
| `name` | - | - |
| `offset_m` | - | - |
| `output_preset_id` | - | Yes |
| `output_url` | - | - |
| `plan_tier` | - | Yes |
| `preset_id` | - | - |
| `progress_percent` | - | - |
| `project` | - | - |
| `project_id` | - | - |
| `property` | - | - |
| `source_device_id` | - | - |
| `source_url` | - | - |
| `stage` | - | - |
| `start_m` | - | - |
| `style_preset_id` | - | - |
| `sync_to_beat_grid` | - | - |
| `tone` | - | - |
| `track_id` | - | - |
| `transcript` | - | - |
| `trend_keyword` | - | - |
| `type` | - | - |
| `updated_at` | - | - |
| `value` | - | - |
| `watermark_enabled` | - | - |
| `watermark_text` | - | - |
| `worker_id` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Video().create({
  duration_second: 1,
  input_format: 'example_input_format',
  mime_type: 'example_mime_type',
  output_preset_id: 'example_output_preset_id',
  plan_tier: 'example_plan_tier',
  preset_id: 'example_preset_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Video().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new MemesioContentCreationSDK({
  feature: {
    test: { active: true },
  }
})
```

