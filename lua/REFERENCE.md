# MemesioContentCreation Lua SDK Reference

Complete API reference for the MemesioContentCreation Lua SDK.


## MemesioContentCreationSDK

### Constructor

```lua
local sdk = require("memesio-content-creation_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Agent(data)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data)`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data)`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data)`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data)`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data)`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data)`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data)`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data)`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data)`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data)`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data)`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data)`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Growth(data)`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `ListMeme(data)`

Create a new `ListMeme` entity instance. Pass `nil` for no initial data.

#### `Media(data)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data)`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data)`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data)`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TemplateSearch(data)`

Create a new `TemplateSearch` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data)`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data)`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AgentEntity

```lua
local agent = client:Agent(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Agent():create({
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Agent():load({ id = "agent_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Agent():update({
  id = "agent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentInfraEntity

```lua
local agent_infra = client:AgentInfra(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chat_id` | `string` | Yes |  |
| `meme_slug` | `string` | Yes |  |
| `metadata` | `table` | No |  |
| `payout_reference` | `string` | No |  |
| `payout_status` | `string` | No |  |
| `phone_or_chat_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `table` | No |  |
| `quota_boost_per_day` | `number` | No |  |
| `scope` | `table` | No |  |
| `user_id` | `string` | No |  |
| `week_start` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentInfra():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AgentInfra():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AgentInfra():remove({ agent_id = "agent_id", key_id = "key_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiCaptionEntity

```lua
local ai_caption = client:AiCaption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `table` | No |  |
| `canvas_text` | `table` | Yes |  |
| `caption_count` | `number` | No |  |
| `caption_set` | `table` | No |  |
| `entity` | `table` | No |  |
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
| `reference_caption` | `table` | No |  |
| `rewrite_note` | `string` | No |  |
| `scene_summary` | `string` | No |  |
| `template_description` | `string` | No |  |
| `template_name` | `string` | No |  |
| `template_tag` | `table` | No |  |
| `tone` | `string` | Yes |  |
| `tone_cue` | `table` | No |  |
| `trend_keyword` | `table` | No |  |
| `trend_reference` | `table` | No |  |
| `trend_signal` | `table` | No |  |
| `variation_offset` | `number` | No |  |
| `voice_rule` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiCaption():create({
  canvas_text = --[[ table ]],
  name = --[[ string ]],
  tone = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiCaption():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiJobEntity

```lua
local ai_job = client:AiJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | No |  |
| `after_state` | `table` | No |  |
| `attempt` | `number` | No |  |
| `before_state` | `table` | No |  |
| `brush_edit` | `table` | No |  |
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
| `input` | `table` | No |  |
| `layer_id` | `string` | Yes |  |
| `layer_type` | `string` | No |  |
| `max_attempt` | `number` | No |  |
| `max_face` | `number` | No |  |
| `media_type` | `string` | No |  |
| `metadata` | `table` | No |  |
| `nsfw_score` | `number` | No |  |
| `output` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiJob():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiJob():load({ id = "ai_job_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```lua
local ai_meme_generation_succeeded = client:AiMemeGenerationSucceeded(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `boolean` | No |  |
| `caption` | `table` | No |  |
| `caption_source` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `degraded_from_async` | `boolean` | No |  |
| `editable_caption` | `table` | No |  |
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
| `tone_cue` | `table` | No |  |
| `variant` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiMemeGenerationSucceeded():create({
  flow = --[[ string ]],
  mode = --[[ string ]],
  ok = --[[ boolean ]],
  prompt = --[[ string ]],
  status = --[[ string ]],
  variant = --[[ table ]],
  variant_count = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiProviderEntity

```lua
local ai_provider = client:AiProvider(nil)
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
| `text` | `table` | No |  |
| `trend_signal` | `table` | No |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiProvider():create({
  prompt = --[[ string ]],
  source_image_url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiProvider():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnalyticsEntity

```lua
local analytics = client:Analytics(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Analytics():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthEntity

```lua
local auth = client:Auth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Auth():create({
  email = --[[ string ]],
  password = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingEntity

```lua
local billing = client:Billing(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Billing():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollaborationEntity

```lua
local collaboration = client:Collaboration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `project_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Collaboration():create({
  message = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Collaboration():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComplianceEntity

```lua
local compliance = client:Compliance(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Compliance():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateMemeEntity

```lua
local create_meme = client:CreateMeme(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `table` | Yes |  |
| `caption` | `table` | Yes |  |
| `generation_run_id` | `any` | No |  |
| `generation_variant_id` | `any` | No |  |
| `image_data_url` | `string` | Yes |  |
| `overlay` | `table` | No |  |
| `source_image_url` | `string` | Yes |  |
| `template_slug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateMeme():create({
  canva = --[[ table ]],
  caption = --[[ table ]],
  image_data_url = --[[ string ]],
  source_image_url = --[[ string ]],
  watermark = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeveloperApiEntity

```lua
local developer_api = client:DeveloperApi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `trend_signal` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeveloperApi():create({
  prompt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeveloperApi():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```lua
local free_caption_meme_success = client:FreeCaptionMemeSuccess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `table` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FreeCaptionMemeSuccess():create({
  caption = --[[ table ]],
  template_slug = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FreeTemplateSearchEntity

```lua
local free_template_search = client:FreeTemplateSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | Yes |  |
| `caption` | `table` | Yes |  |
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
| `tag` | `table` | No |  |
| `width` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FreeTemplateSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateEntity

```lua
local generate = client:Generate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `table` | No |  |
| `data` | `table` | Yes |  |
| `duration_m` | `number` | No |  |
| `fps` | `number` | No |  |
| `gif_slug` | `string` | No |  |
| `ok` | `boolean` | Yes |  |
| `return_base64` | `boolean` | No |  |
| `start_m` | `number` | No |  |
| `tag` | `table` | No |  |
| `title` | `string` | No |  |
| `width_px` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Generate():create({
  data = --[[ table ]],
  ok = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GrowthEntity

```lua
local growth = client:Growth(nil)
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
| `profile` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Growth():create({
  action = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Growth():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListMemeEntity

```lua
local list_meme = client:ListMeme(nil)
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
| `tag` | `table` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListMeme():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MediaEntity

```lua
local media = client:Media(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Media():create({
  action = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemeEntity

```lua
local meme = client:Meme(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `string` | Yes |  |
| `canonical_image_url` | `string` | Yes |  |
| `canva` | `table` | Yes |  |
| `caption` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `nsfw_status` | `string` | Yes |  |
| `overlay` | `table` | Yes |  |
| `share_slug` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |
| `share_view` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `tag` | `table` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Meme():load({ id = "meme_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Meme():remove({ id = "meme_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```lua
local public_template_media_item = client:PublicTemplateMediaItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `table` | Yes |  |
| `caption_count` | `number` | No |  |
| `category` | `table` | No |  |
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
| `tag` | `table` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PublicTemplateMediaItem():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```lua
local standalone_agent_bootstrap = client:StandaloneAgentBootstrap(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StandaloneAgentBootstrap():create({
  handle = --[[ string ]],
  name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateEntity

```lua
local template = client:Template(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `table` | No |  |
| `caption_count` | `number` | No |  |
| `category` | `table` | No |  |
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
| `tag` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Template():create({
  slug = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Template():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateSearchEntity

```lua
local template_search = client:TemplateSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `number` | No |  |
| `caption` | `table` | Yes |  |
| `caption_count` | `number` | No |  |
| `category` | `table` | No |  |
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
| `tag` | `table` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TemplateSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrendAlertEntity

```lua
local trend_alert = client:TrendAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | Yes |  |
| `aggressiveness` | `number` | No |  |
| `alert_id` | `string` | Yes |  |
| `channel` | `table` | No |  |
| `deliver_all_alert` | `boolean` | No |  |
| `event` | `table` | No |  |
| `explicit_niche` | `table` | No |  |
| `explicit_region` | `table` | No |  |
| `explicit_source` | `table` | No |  |
| `explicit_topic` | `table` | No |  |
| `follower_count` | `number` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TrendAlert():create({
  action = --[[ string ]],
  actor_id = --[[ string ]],
  alert_id = --[[ string ]],
  topic = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TrendAlert():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```lua
local upload_caption_meme_success = client:UploadCaptionMemeSuccess(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UploadCaptionMemeSuccess():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoEntity

```lua
local video = client:Video(nil)
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
| `project` | `table` | No |  |
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
| `trend_keyword` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Video():create({
  duration_second = --[[ number ]],
  input_format = --[[ string ]],
  mime_type = --[[ string ]],
  output_preset_id = --[[ string ]],
  plan_tier = --[[ string ]],
  preset_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Video():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

