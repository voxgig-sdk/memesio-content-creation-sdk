# MemesioContentCreation Ruby SDK Reference

Complete API reference for the MemesioContentCreation Ruby SDK.


## MemesioContentCreationSDK

### Constructor

```ruby
require_relative 'MemesioContentCreation_sdk'

client = MemesioContentCreationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MemesioContentCreationSDK.test
```


### Instance Methods

#### `Agent(data = nil)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data = nil)`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data = nil)`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data = nil)`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data = nil)`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data = nil)`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data = nil)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data = nil)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data = nil)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data = nil)`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data = nil)`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data = nil)`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data = nil)`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data = nil)`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data = nil)`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data = nil)`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Growth(data = nil)`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `ListMeme(data = nil)`

Create a new `ListMeme` entity instance. Pass `nil` for no initial data.

#### `Media(data = nil)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data = nil)`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data = nil)`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data = nil)`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data = nil)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TemplateSearch(data = nil)`

Create a new `TemplateSearch` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data = nil)`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data = nil)`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data = nil)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AgentEntity

```ruby
agent = client.Agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `locale` | `String` | No |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | No |  |
| `status` | `String` | No |  |
| `style_preset` | `String` | No |  |
| `system_prompt` | `String` | No |  |
| `watermark_text` | `String` | No |  |
| `website_url` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Agent.create({
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Agent.load({ "id" => "agent_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Agent.update({
  "id" => "agent_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentInfraEntity

```ruby
agent_infra = client.AgentInfra
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `chat_id` | `String` | Yes |  |
| `meme_slug` | `String` | Yes |  |
| `metadata` | `Hash` | No |  |
| `payout_reference` | `String` | No |  |
| `payout_status` | `String` | No |  |
| `phone_or_chat_id` | `String` | Yes |  |
| `prompt` | `String` | Yes |  |
| `proof` | `Hash` | No |  |
| `quota_boost_per_day` | `Integer` | No |  |
| `scope` | `Array` | No |  |
| `user_id` | `String` | No |  |
| `week_start` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentInfra.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AgentInfra.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AgentInfra.remove({ "agent_id" => "agent_id", "key_id" => "key_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiCaptionEntity

```ruby
ai_caption = client.AiCaption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `Array` | No |  |
| `canvas_text` | `Array` | Yes |  |
| `caption_count` | `Integer` | No |  |
| `caption_set` | `Array` | No |  |
| `entity` | `Array` | No |  |
| `fallback_used` | `Boolean` | No |  |
| `generation_strategy` | `String` | No |  |
| `locale` | `String` | No |  |
| `meme_id` | `String` | No |  |
| `meme_slug` | `String` | No |  |
| `name` | `String` | Yes |  |
| `ok` | `Boolean` | No |  |
| `option_count` | `Integer` | No |  |
| `owner_token` | `String` | No |  |
| `provider_id` | `String` | No |  |
| `reference_caption` | `Array` | No |  |
| `rewrite_note` | `String` | No |  |
| `scene_summary` | `String` | No |  |
| `template_description` | `String` | No |  |
| `template_name` | `String` | No |  |
| `template_tag` | `Array` | No |  |
| `tone` | `String` | Yes |  |
| `tone_cue` | `Array` | No |  |
| `trend_keyword` | `Array` | No |  |
| `trend_reference` | `Array` | No |  |
| `trend_signal` | `Array` | No |  |
| `variation_offset` | `Integer` | No |  |
| `voice_rule` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiCaption.create({
  "canvas_text" => [], # Array
  "name" => "example_name", # String
  "tone" => "example_tone", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiCaption.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiJobEntity

```ruby
ai_job = client.AiJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `actor_id` | `String` | No |  |
| `after_state` | `Hash` | No |  |
| `attempt` | `Integer` | No |  |
| `before_state` | `Hash` | No |  |
| `brush_edit` | `Array` | No |  |
| `capability` | `String` | Yes |  |
| `celebrity_confidence` | `Float` | No |  |
| `consent_attested` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `detected_face_count` | `Float` | Yes |  |
| `edge_refinement` | `Float` | No |  |
| `estimated_cost_usd` | `Float` | No |  |
| `frame_time_m` | `Float` | No |  |
| `height` | `Float` | Yes |  |
| `id` | `String` | Yes |  |
| `input` | `Hash` | No |  |
| `layer_id` | `String` | Yes |  |
| `layer_type` | `String` | No |  |
| `max_attempt` | `Integer` | No |  |
| `max_face` | `Float` | No |  |
| `media_type` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `nsfw_score` | `Float` | No |  |
| `output` | `Hash` | No |  |
| `project_id` | `String` | Yes |  |
| `provider_id` | `String` | No |  |
| `reason` | `String` | No |  |
| `run_after_m` | `Integer` | No |  |
| `source_asset_url` | `String` | Yes |  |
| `source_face_index` | `Float` | No |  |
| `source_image_url` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `target_asset_url` | `String` | Yes |  |
| `target_face_index` | `Float` | No |  |
| `timeout_m` | `Integer` | No |  |
| `trace_id` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `version_id` | `String` | No |  |
| `width` | `Float` | Yes |  |
| `worker_id` | `String` | Yes |  |
| `workspace_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiJob.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiJob.load({ "id" => "ai_job_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```ruby
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `Boolean` | No |  |
| `caption` | `Array` | No |  |
| `caption_source` | `String` | No |  |
| `correlation_id` | `String` | No |  |
| `degraded_from_async` | `Boolean` | No |  |
| `editable_caption` | `Array` | No |  |
| `flow` | `String` | Yes |  |
| `image_url` | `String` | No |  |
| `mode` | `String` | Yes |  |
| `ok` | `Boolean` | Yes |  |
| `preferred_provider_id` | `String` | No |  |
| `prompt` | `String` | Yes |  |
| `rewrite_note` | `String` | No |  |
| `run_id` | `String` | No |  |
| `status` | `String` | Yes |  |
| `template_id` | `String` | No |  |
| `tone` | `String` | No |  |
| `tone_cue` | `Array` | No |  |
| `variant` | `Array` | Yes |  |
| `variant_count` | `Integer` | Yes |  |
| `workspace_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiMemeGenerationSucceeded.create({
  "flow" => "example_flow", # String
  "mode" => "example_mode", # String
  "ok" => true, # Boolean
  "prompt" => "example_prompt", # String
  "status" => "example_status", # String
  "variant" => [], # Array
  "variant_count" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiProviderEntity

```ruby
ai_provider = client.AiProvider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `String` | No |  |
| `correlation_id` | `String` | No |  |
| `limit` | `Float` | No |  |
| `mapping_mode` | `String` | No |  |
| `max_slot` | `Integer` | No |  |
| `prompt` | `String` | Yes |  |
| `source_image_url` | `String` | Yes |  |
| `text` | `Array` | No |  |
| `trend_signal` | `Array` | No |  |
| `workspace_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiProvider.create({
  "prompt" => "example_prompt", # String
  "source_image_url" => "example_source_image_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiProvider.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnalyticsEntity

```ruby
analytics = client.Analytics
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Analytics.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthEntity

```ruby
auth = client.Auth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | No |  |
| `email` | `String` | Yes |  |
| `password` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Auth.create({
  "email" => "example_email", # String
  "password" => "example_password", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillingEntity

```ruby
billing = client.Billing
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Billing.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CollaborationEntity

```ruby
collaboration = client.Collaboration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `String` | No |  |
| `message` | `String` | Yes |  |
| `project_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Collaboration.create({
  "message" => "example_message", # String
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Collaboration.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComplianceEntity

```ruby
compliance = client.Compliance
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Compliance.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateMemeEntity

```ruby
create_meme = client.CreateMeme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `Hash` | Yes |  |
| `caption` | `Array` | Yes |  |
| `generation_run_id` | `Object` | No |  |
| `generation_variant_id` | `Object` | No |  |
| `image_data_url` | `String` | Yes |  |
| `overlay` | `Array` | No |  |
| `source_image_url` | `String` | Yes |  |
| `template_slug` | `String` | No |  |
| `title` | `String` | No |  |
| `visibility` | `String` | No |  |
| `watermark` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateMeme.create({
  "canva" => {}, # Hash
  "caption" => [], # Array
  "image_data_url" => "example_image_data_url", # String
  "source_image_url" => "example_source_image_url", # String
  "watermark" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeveloperApiEntity

```ruby
developer_api = client.DeveloperApi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `Float` | No |  |
| `prompt` | `String` | Yes |  |
| `trend_signal` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DeveloperApi.create({
  "prompt" => "example_prompt", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DeveloperApi.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```ruby
free_caption_meme_success = client.FreeCaptionMemeSuccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Array` | Yes |  |
| `template_slug` | `String` | Yes |  |
| `title` | `String` | No |  |
| `visibility` | `String` | No |  |
| `watermark` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FreeCaptionMemeSuccess.create({
  "caption" => [], # Array
  "template_slug" => "example_template_slug", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FreeTemplateSearchEntity

```ruby
free_template_search = client.FreeTemplateSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `asset_byte` | `Object` | No |  |
| `asset_content_type` | `String` | No |  |
| `box_count` | `Integer` | Yes |  |
| `caption` | `Array` | Yes |  |
| `caption_count` | `Integer` | Yes |  |
| `description` | `String` | Yes |  |
| `duration_m` | `Object` | No |  |
| `example_image_url` | `Object` | No |  |
| `frame_count` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `media_type` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `poster_image_url` | `String` | No |  |
| `quality_status` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `source_template_id` | `Object` | Yes |  |
| `source_url` | `String` | No |  |
| `tag` | `Array` | No |  |
| `width` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.FreeTemplateSearch.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateEntity

```ruby
generate = client.Generate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Array` | No |  |
| `data` | `Hash` | Yes |  |
| `duration_m` | `Integer` | No |  |
| `fps` | `Integer` | No |  |
| `gif_slug` | `String` | No |  |
| `ok` | `Boolean` | Yes |  |
| `return_base64` | `Boolean` | No |  |
| `start_m` | `Integer` | No |  |
| `tag` | `Array` | No |  |
| `title` | `String` | No |  |
| `width_px` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Generate.create({
  "data" => {}, # Hash
  "ok" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GrowthEntity

```ruby
growth = client.Growth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | No |  |
| `action` | `String` | Yes |  |
| `actor_id` | `String` | No |  |
| `caption` | `String` | No |  |
| `code` | `String` | No |  |
| `external_account_id` | `String` | No |  |
| `handle` | `String` | No |  |
| `limit` | `Integer` | No |  |
| `log_exposure` | `Boolean` | No |  |
| `meme_slug` | `String` | No |  |
| `now` | `String` | No |  |
| `platform` | `String` | No |  |
| `profile` | `Array` | No |  |
| `share_slug` | `String` | No |  |
| `surface` | `String` | No |  |
| `week_start` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Growth.create({
  "action" => "example_action", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Growth.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListMemeEntity

```ruby
list_meme = client.ListMeme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `String` | Yes |  |
| `canonical_image_url` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `nsfw_status` | `String` | Yes |  |
| `share_slug` | `String` | Yes |  |
| `share_url` | `String` | Yes |  |
| `share_view` | `Integer` | Yes |  |
| `slug` | `String` | Yes |  |
| `tag` | `Array` | Yes |  |
| `template_slug` | `String` | Yes |  |
| `title` | `String` | Yes |  |
| `visibility` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListMeme.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MediaEntity

```ruby
media = client.Media
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `content_type` | `String` | No |  |
| `expires_in_second` | `Integer` | No |  |
| `owner_token` | `String` | No |  |
| `path` | `String` | No |  |
| `prefix` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Media.create({
  "action" => "example_action", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemeEntity

```ruby
meme = client.Meme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `String` | Yes |  |
| `canonical_image_url` | `String` | Yes |  |
| `canva` | `Hash` | Yes |  |
| `caption` | `Array` | Yes |  |
| `created_at` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `nsfw_status` | `String` | Yes |  |
| `overlay` | `Array` | Yes |  |
| `share_slug` | `String` | Yes |  |
| `share_url` | `String` | Yes |  |
| `share_view` | `Integer` | Yes |  |
| `slug` | `String` | Yes |  |
| `source_image_url` | `String` | Yes |  |
| `tag` | `Array` | Yes |  |
| `template_slug` | `String` | Yes |  |
| `title` | `String` | Yes |  |
| `visibility` | `String` | Yes |  |
| `watermark` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Meme.load({ "id" => "meme_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Meme.remove({ "id" => "meme_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```ruby
public_template_media_item = client.PublicTemplateMediaItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `asset_byte` | `Object` | No |  |
| `asset_content_type` | `String` | No |  |
| `box_count` | `Integer` | No |  |
| `caption` | `Array` | Yes |  |
| `caption_count` | `Integer` | No |  |
| `category` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `duration_m` | `Object` | No |  |
| `example_image_url` | `Object` | No |  |
| `frame_count` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `media_type` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `poster_image_url` | `String` | No |  |
| `preview_image_url` | `String` | No |  |
| `quality_status` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `source_template_id` | `Object` | Yes |  |
| `source_url` | `String` | No |  |
| `tag` | `Array` | Yes |  |
| `width` | `Object` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PublicTemplateMediaItem.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```ruby
standalone_agent_bootstrap = client.StandaloneAgentBootstrap
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `handle` | `String` | Yes |  |
| `locale` | `String` | No |  |
| `name` | `String` | Yes |  |
| `style_preset` | `String` | No |  |
| `system_prompt` | `String` | No |  |
| `watermark_text` | `String` | No |  |
| `website_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StandaloneAgentBootstrap.create({
  "handle" => "example_handle", # String
  "name" => "example_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateEntity

```ruby
template = client.Template
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `asset_byte` | `Object` | No |  |
| `asset_content_type` | `String` | No |  |
| `box_count` | `Integer` | No |  |
| `caption` | `Array` | No |  |
| `caption_count` | `Integer` | No |  |
| `category` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `duration_m` | `Integer` | No |  |
| `example_image_url` | `Object` | No |  |
| `fps` | `Integer` | No |  |
| `frame_count` | `Object` | No |  |
| `gif_slug` | `String` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `media_type` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `poster_image_url` | `String` | No |  |
| `preview_image_url` | `String` | No |  |
| `quality_status` | `String` | No |  |
| `return_base64` | `Boolean` | No |  |
| `slug` | `String` | Yes |  |
| `source_template_id` | `Object` | Yes |  |
| `source_url` | `String` | No |  |
| `start_m` | `Integer` | No |  |
| `tag` | `Array` | No |  |
| `title` | `String` | No |  |
| `width` | `Object` | Yes |  |
| `width_px` | `Integer` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Template.create({
  "slug" => "example_slug", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Template.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateSearchEntity

```ruby
template_search = client.TemplateSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `asset_byte` | `Object` | No |  |
| `asset_content_type` | `String` | No |  |
| `box_count` | `Integer` | No |  |
| `caption` | `Array` | Yes |  |
| `caption_count` | `Integer` | No |  |
| `category` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `duration_m` | `Object` | No |  |
| `example_image_url` | `Object` | No |  |
| `frame_count` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `image_url` | `String` | Yes |  |
| `media_type` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `poster_image_url` | `String` | No |  |
| `preview_image_url` | `String` | No |  |
| `quality_status` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `source_template_id` | `Object` | Yes |  |
| `source_url` | `String` | No |  |
| `tag` | `Array` | Yes |  |
| `width` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TemplateSearch.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrendAlertEntity

```ruby
trend_alert = client.TrendAlert
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `actor_id` | `String` | Yes |  |
| `aggressiveness` | `Float` | No |  |
| `alert_id` | `String` | Yes |  |
| `channel` | `Array` | No |  |
| `deliver_all_alert` | `Boolean` | No |  |
| `event` | `Hash` | No |  |
| `explicit_niche` | `Array` | No |  |
| `explicit_region` | `Array` | No |  |
| `explicit_source` | `Array` | No |  |
| `explicit_topic` | `Array` | No |  |
| `follower_count` | `Integer` | No |  |
| `niche` | `String` | No |  |
| `region` | `String` | No |  |
| `source` | `String` | No |  |
| `topic` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TrendAlert.create({
  "action" => "example_action", # String
  "actor_id" => "example_actor_id", # String
  "alert_id" => "example_alert_id", # String
  "topic" => "example_topic", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TrendAlert.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```ruby
upload_caption_meme_success = client.UploadCaptionMemeSuccess
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UploadCaptionMemeSuccess.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoEntity

```ruby
video = client.Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | No |  |
| `asset_id` | `String` | No |  |
| `at_m` | `Float` | No |  |
| `audio_asset_id` | `String` | No |  |
| `beat_offset_m` | `Integer` | No |  |
| `bitrate_kbp` | `Float` | No |  |
| `bpm` | `Integer` | No |  |
| `cancelled` | `Boolean` | No |  |
| `container` | `String` | No |  |
| `duration_m` | `Float` | No |  |
| `duration_second` | `Float` | Yes |  |
| `easing` | `String` | No |  |
| `error` | `String` | No |  |
| `frame_rate` | `Float` | No |  |
| `input_format` | `String` | Yes |  |
| `intensity` | `Float` | No |  |
| `job_id` | `String` | No |  |
| `locale` | `String` | No |  |
| `mime_type` | `String` | Yes |  |
| `name` | `String` | No |  |
| `offset_m` | `Float` | No |  |
| `output_preset_id` | `String` | Yes |  |
| `output_url` | `String` | No |  |
| `plan_tier` | `String` | Yes |  |
| `preset_id` | `String` | Yes |  |
| `progress_percent` | `Float` | No |  |
| `project` | `Hash` | No |  |
| `project_id` | `String` | No |  |
| `property` | `String` | No |  |
| `source_device_id` | `String` | No |  |
| `source_url` | `String` | No |  |
| `stage` | `String` | No |  |
| `start_m` | `Float` | No |  |
| `style_preset_id` | `String` | No |  |
| `sync_to_beat_grid` | `Boolean` | No |  |
| `tone` | `String` | No |  |
| `track_id` | `String` | No |  |
| `transcript` | `String` | No |  |
| `trend_keyword` | `Array` | No |  |
| `type` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `value` | `Float` | No |  |
| `watermark_enabled` | `Boolean` | No |  |
| `watermark_text` | `String` | No |  |
| `worker_id` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Video.create({
  "duration_second" => 1, # Float
  "input_format" => "example_input_format", # String
  "mime_type" => "example_mime_type", # String
  "output_preset_id" => "example_output_preset_id", # String
  "plan_tier" => "example_plan_tier", # String
  "preset_id" => "example_preset_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Video.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = MemesioContentCreationSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

