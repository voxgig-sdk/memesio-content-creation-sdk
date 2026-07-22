# MemesioContentCreation Golang SDK Reference

Complete API reference for the MemesioContentCreation Golang SDK.


## MemesioContentCreationSDK

### Constructor

```go
func NewMemesioContentCreationSDK(options map[string]any) *MemesioContentCreationSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MemesioContentCreationSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MemesioContentCreationSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Agent(data map[string]any) MemesioContentCreationEntity`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data map[string]any) MemesioContentCreationEntity`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data map[string]any) MemesioContentCreationEntity`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data map[string]any) MemesioContentCreationEntity`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data map[string]any) MemesioContentCreationEntity`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data map[string]any) MemesioContentCreationEntity`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data map[string]any) MemesioContentCreationEntity`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data map[string]any) MemesioContentCreationEntity`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data map[string]any) MemesioContentCreationEntity`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data map[string]any) MemesioContentCreationEntity`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data map[string]any) MemesioContentCreationEntity`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data map[string]any) MemesioContentCreationEntity`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data map[string]any) MemesioContentCreationEntity`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data map[string]any) MemesioContentCreationEntity`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data map[string]any) MemesioContentCreationEntity`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Growth(data map[string]any) MemesioContentCreationEntity`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `ListMeme(data map[string]any) MemesioContentCreationEntity`

Create a new `ListMeme` entity instance. Pass `nil` for no initial data.

#### `Media(data map[string]any) MemesioContentCreationEntity`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data map[string]any) MemesioContentCreationEntity`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data map[string]any) MemesioContentCreationEntity`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data map[string]any) MemesioContentCreationEntity`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data map[string]any) MemesioContentCreationEntity`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TemplateSearch(data map[string]any) MemesioContentCreationEntity`

Create a new `TemplateSearch` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data map[string]any) MemesioContentCreationEntity`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data map[string]any) MemesioContentCreationEntity`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AgentEntity

```go
agent := client.Agent(nil)
fmt.Println(agent.GetName()) // "agent"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Agent(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Agent(nil).Update(map[string]any{
    "id": "agent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentInfraEntity

```go
agentInfra := client.AgentInfra(nil)
fmt.Println(agentInfra.GetName()) // "agent_infra"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chat_id` | `string` | Yes |  |
| `meme_slug` | `string` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `payout_reference` | `string` | No |  |
| `payout_status` | `string` | No |  |
| `phone_or_chat_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `map[string]any` | No |  |
| `quota_boost_per_day` | `int` | No |  |
| `scope` | `[]any` | No |  |
| `user_id` | `string` | No |  |
| `week_start` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AgentInfra(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AgentInfra(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AgentInfra(nil).Remove(map[string]any{"agent_id": "agent_id", "key_id": "key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiCaptionEntity

```go
aiCaption := client.AiCaption(nil)
fmt.Println(aiCaption.GetName()) // "ai_caption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `[]any` | No |  |
| `canvas_text` | `[]any` | Yes |  |
| `caption_count` | `int` | No |  |
| `caption_set` | `[]any` | No |  |
| `entity` | `[]any` | No |  |
| `fallback_used` | `bool` | No |  |
| `generation_strategy` | `string` | No |  |
| `locale` | `string` | No |  |
| `meme_id` | `string` | No |  |
| `meme_slug` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `bool` | No |  |
| `option_count` | `int` | No |  |
| `owner_token` | `string` | No |  |
| `provider_id` | `string` | No |  |
| `reference_caption` | `[]any` | No |  |
| `rewrite_note` | `string` | No |  |
| `scene_summary` | `string` | No |  |
| `template_description` | `string` | No |  |
| `template_name` | `string` | No |  |
| `template_tag` | `[]any` | No |  |
| `tone` | `string` | Yes |  |
| `tone_cue` | `[]any` | No |  |
| `trend_keyword` | `[]any` | No |  |
| `trend_reference` | `[]any` | No |  |
| `trend_signal` | `[]any` | No |  |
| `variation_offset` | `int` | No |  |
| `voice_rule` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiCaption(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiCaption(nil).Create(map[string]any{
    "canvas_text": []any{},
    "name": "example_name",
    "tone": "example_tone",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiJobEntity

```go
aiJob := client.AiJob(nil)
fmt.Println(aiJob.GetName()) // "ai_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | No |  |
| `after_state` | `map[string]any` | No |  |
| `attempt` | `int` | No |  |
| `before_state` | `map[string]any` | No |  |
| `brush_edit` | `[]any` | No |  |
| `capability` | `string` | Yes |  |
| `celebrity_confidence` | `float64` | No |  |
| `consent_attested` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `detected_face_count` | `float64` | Yes |  |
| `edge_refinement` | `float64` | No |  |
| `estimated_cost_usd` | `float64` | No |  |
| `frame_time_m` | `float64` | No |  |
| `height` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `map[string]any` | No |  |
| `layer_id` | `string` | Yes |  |
| `layer_type` | `string` | No |  |
| `max_attempt` | `int` | No |  |
| `max_face` | `float64` | No |  |
| `media_type` | `string` | No |  |
| `metadata` | `map[string]any` | No |  |
| `nsfw_score` | `float64` | No |  |
| `output` | `map[string]any` | No |  |
| `project_id` | `string` | Yes |  |
| `provider_id` | `string` | No |  |
| `reason` | `string` | No |  |
| `run_after_m` | `int` | No |  |
| `source_asset_url` | `string` | Yes |  |
| `source_face_index` | `float64` | No |  |
| `source_image_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_asset_url` | `string` | Yes |  |
| `target_face_index` | `float64` | No |  |
| `timeout_m` | `int` | No |  |
| `trace_id` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `version_id` | `string` | No |  |
| `width` | `float64` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiJob(nil).Load(map[string]any{"id": "ai_job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiJob(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```go
aiMemeGenerationSucceeded := client.AiMemeGenerationSucceeded(nil)
fmt.Println(aiMemeGenerationSucceeded.GetName()) // "ai_meme_generation_succeeded"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `bool` | No |  |
| `caption` | `[]any` | No |  |
| `caption_source` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `degraded_from_async` | `bool` | No |  |
| `editable_caption` | `[]any` | No |  |
| `flow` | `string` | Yes |  |
| `image_url` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `preferred_provider_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `rewrite_note` | `string` | No |  |
| `run_id` | `string` | No |  |
| `status` | `string` | Yes |  |
| `template_id` | `string` | No |  |
| `tone` | `string` | No |  |
| `tone_cue` | `[]any` | No |  |
| `variant` | `[]any` | Yes |  |
| `variant_count` | `int` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiMemeGenerationSucceeded(nil).Create(map[string]any{
    "flow": "example_flow",
    "mode": "example_mode",
    "ok": true,
    "prompt": "example_prompt",
    "status": "example_status",
    "variant": []any{},
    "variant_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiProviderEntity

```go
aiProvider := client.AiProvider(nil)
fmt.Println(aiProvider.GetName()) // "ai_provider"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `limit` | `float64` | No |  |
| `mapping_mode` | `string` | No |  |
| `max_slot` | `int` | No |  |
| `prompt` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `text` | `[]any` | No |  |
| `trend_signal` | `[]any` | No |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiProvider(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiProvider(nil).Create(map[string]any{
    "prompt": "example_prompt",
    "source_image_url": "example_source_image_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsEntity

```go
analytics := client.Analytics(nil)
fmt.Println(analytics.GetName()) // "analytics"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Analytics(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthEntity

```go
auth := client.Auth(nil)
fmt.Println(auth.GetName()) // "auth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Auth(nil).Create(map[string]any{
    "email": "example_email",
    "password": "example_password",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingEntity

```go
billing := client.Billing(nil)
fmt.Println(billing.GetName()) // "billing"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Billing(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollaborationEntity

```go
collaboration := client.Collaboration(nil)
fmt.Println(collaboration.GetName()) // "collaboration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `project_id` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Collaboration(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Collaboration(nil).Create(map[string]any{
    "message": "example_message",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComplianceEntity

```go
compliance := client.Compliance(nil)
fmt.Println(compliance.GetName()) // "compliance"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Compliance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateMemeEntity

```go
createMeme := client.CreateMeme(nil)
fmt.Println(createMeme.GetName()) // "create_meme"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `map[string]any` | Yes |  |
| `caption` | `[]any` | Yes |  |
| `generation_run_id` | `any` | No |  |
| `generation_variant_id` | `any` | No |  |
| `image_data_url` | `string` | Yes |  |
| `overlay` | `[]any` | No |  |
| `source_image_url` | `string` | Yes |  |
| `template_slug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateMeme(nil).Create(map[string]any{
    "canva": map[string]any{},
    "caption": []any{},
    "image_data_url": "example_image_data_url",
    "source_image_url": "example_source_image_url",
    "watermark": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeveloperApiEntity

```go
developerApi := client.DeveloperApi(nil)
fmt.Println(developerApi.GetName()) // "developer_api"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `float64` | No |  |
| `prompt` | `string` | Yes |  |
| `trend_signal` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeveloperApi(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DeveloperApi(nil).Create(map[string]any{
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```go
freeCaptionMemeSuccess := client.FreeCaptionMemeSuccess(nil)
fmt.Println(freeCaptionMemeSuccess.GetName()) // "free_caption_meme_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `[]any` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FreeCaptionMemeSuccess(nil).Create(map[string]any{
    "caption": []any{},
    "template_slug": "example_template_slug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FreeTemplateSearchEntity

```go
freeTemplateSearch := client.FreeTemplateSearch(nil)
fmt.Println(freeTemplateSearch.GetName()) // "free_template_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | Yes |  |
| `caption` | `[]any` | Yes |  |
| `caption_count` | `int` | Yes |  |
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
| `tag` | `[]any` | No |  |
| `width` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FreeTemplateSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateEntity

```go
generate := client.Generate(nil)
fmt.Println(generate.GetName()) // "generate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `[]any` | No |  |
| `data` | `map[string]any` | Yes |  |
| `duration_m` | `int` | No |  |
| `fps` | `int` | No |  |
| `gif_slug` | `string` | No |  |
| `ok` | `bool` | Yes |  |
| `return_base64` | `bool` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `[]any` | No |  |
| `title` | `string` | No |  |
| `width_px` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Generate(nil).Create(map[string]any{
    "data": map[string]any{},
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GrowthEntity

```go
growth := client.Growth(nil)
fmt.Println(growth.GetName()) // "growth"
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
| `limit` | `int` | No |  |
| `log_exposure` | `bool` | No |  |
| `meme_slug` | `string` | No |  |
| `now` | `string` | No |  |
| `platform` | `string` | No |  |
| `profile` | `[]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Growth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Growth(nil).Create(map[string]any{
    "action": "example_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListMemeEntity

```go
listMeme := client.ListMeme(nil)
fmt.Println(listMeme.GetName()) // "list_meme"
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
| `share_view` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `tag` | `[]any` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListMeme(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MediaEntity

```go
media := client.Media(nil)
fmt.Println(media.GetName()) // "media"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `content_type` | `string` | No |  |
| `expires_in_second` | `int` | No |  |
| `owner_token` | `string` | No |  |
| `path` | `string` | No |  |
| `prefix` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Media(nil).Create(map[string]any{
    "action": "example_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemeEntity

```go
meme := client.Meme(nil)
fmt.Println(meme.GetName()) // "meme"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `string` | Yes |  |
| `canonical_image_url` | `string` | Yes |  |
| `canva` | `map[string]any` | Yes |  |
| `caption` | `[]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `nsfw_status` | `string` | Yes |  |
| `overlay` | `[]any` | Yes |  |
| `share_slug` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |
| `share_view` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `tag` | `[]any` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Meme(nil).Load(map[string]any{"id": "meme_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Meme(nil).Remove(map[string]any{"id": "meme_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```go
publicTemplateMediaItem := client.PublicTemplateMediaItem(nil)
fmt.Println(publicTemplateMediaItem.GetName()) // "public_template_media_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `[]any` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `[]any` | No |  |
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
| `tag` | `[]any` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PublicTemplateMediaItem(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```go
standaloneAgentBootstrap := client.StandaloneAgentBootstrap(nil)
fmt.Println(standaloneAgentBootstrap.GetName()) // "standalone_agent_bootstrap"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StandaloneAgentBootstrap(nil).Create(map[string]any{
    "handle": "example_handle",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TemplateEntity

```go
template := client.Template(nil)
fmt.Println(template.GetName()) // "template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `[]any` | No |  |
| `caption_count` | `int` | No |  |
| `category` | `[]any` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `int` | No |  |
| `example_image_url` | `any` | No |  |
| `fps` | `int` | No |  |
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
| `return_base64` | `bool` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `any` | Yes |  |
| `source_url` | `string` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `[]any` | No |  |
| `title` | `string` | No |  |
| `width` | `any` | Yes |  |
| `width_px` | `int` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Template(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Template(nil).Create(map[string]any{
    "slug": "example_slug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TemplateSearchEntity

```go
templateSearch := client.TemplateSearch(nil)
fmt.Println(templateSearch.GetName()) // "template_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `any` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `[]any` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `[]any` | No |  |
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
| `tag` | `[]any` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TemplateSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TrendAlertEntity

```go
trendAlert := client.TrendAlert(nil)
fmt.Println(trendAlert.GetName()) // "trend_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | Yes |  |
| `aggressiveness` | `float64` | No |  |
| `alert_id` | `string` | Yes |  |
| `channel` | `[]any` | No |  |
| `deliver_all_alert` | `bool` | No |  |
| `event` | `map[string]any` | No |  |
| `explicit_niche` | `[]any` | No |  |
| `explicit_region` | `[]any` | No |  |
| `explicit_source` | `[]any` | No |  |
| `explicit_topic` | `[]any` | No |  |
| `follower_count` | `int` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TrendAlert(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TrendAlert(nil).Create(map[string]any{
    "action": "example_action",
    "actor_id": "example_actor_id",
    "alert_id": "example_alert_id",
    "topic": "example_topic",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```go
uploadCaptionMemeSuccess := client.UploadCaptionMemeSuccess(nil)
fmt.Println(uploadCaptionMemeSuccess.GetName()) // "upload_caption_meme_success"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UploadCaptionMemeSuccess(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoEntity

```go
video := client.Video(nil)
fmt.Println(video.GetName()) // "video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `asset_id` | `string` | No |  |
| `at_m` | `float64` | No |  |
| `audio_asset_id` | `string` | No |  |
| `beat_offset_m` | `int` | No |  |
| `bitrate_kbp` | `float64` | No |  |
| `bpm` | `int` | No |  |
| `cancelled` | `bool` | No |  |
| `container` | `string` | No |  |
| `duration_m` | `float64` | No |  |
| `duration_second` | `float64` | Yes |  |
| `easing` | `string` | No |  |
| `error` | `string` | No |  |
| `frame_rate` | `float64` | No |  |
| `input_format` | `string` | Yes |  |
| `intensity` | `float64` | No |  |
| `job_id` | `string` | No |  |
| `locale` | `string` | No |  |
| `mime_type` | `string` | Yes |  |
| `name` | `string` | No |  |
| `offset_m` | `float64` | No |  |
| `output_preset_id` | `string` | Yes |  |
| `output_url` | `string` | No |  |
| `plan_tier` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `progress_percent` | `float64` | No |  |
| `project` | `map[string]any` | No |  |
| `project_id` | `string` | No |  |
| `property` | `string` | No |  |
| `source_device_id` | `string` | No |  |
| `source_url` | `string` | No |  |
| `stage` | `string` | No |  |
| `start_m` | `float64` | No |  |
| `style_preset_id` | `string` | No |  |
| `sync_to_beat_grid` | `bool` | No |  |
| `tone` | `string` | No |  |
| `track_id` | `string` | No |  |
| `transcript` | `string` | No |  |
| `trend_keyword` | `[]any` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `float64` | No |  |
| `watermark_enabled` | `bool` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Video(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Video(nil).Create(map[string]any{
    "duration_second": 1,
    "input_format": "example_input_format",
    "mime_type": "example_mime_type",
    "output_preset_id": "example_output_preset_id",
    "plan_tier": "example_plan_tier",
    "preset_id": "example_preset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewMemesioContentCreationSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

