# MemesioContentCreation PHP SDK Reference

Complete API reference for the MemesioContentCreation PHP SDK.


## MemesioContentCreationSDK

### Constructor

```php
require_once __DIR__ . '/memesiocontentcreation_sdk.php';

$client = new MemesioContentCreationSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MemesioContentCreationSDK::test();
```


### Instance Methods

#### `Agent($data = null)`

Create a new `AgentEntity` instance. Pass `null` for no initial data.

#### `AgentInfra($data = null)`

Create a new `AgentInfraEntity` instance. Pass `null` for no initial data.

#### `AiCaption($data = null)`

Create a new `AiCaptionEntity` instance. Pass `null` for no initial data.

#### `AiJob($data = null)`

Create a new `AiJobEntity` instance. Pass `null` for no initial data.

#### `AiMemeGenerationSucceeded($data = null)`

Create a new `AiMemeGenerationSucceededEntity` instance. Pass `null` for no initial data.

#### `AiProvider($data = null)`

Create a new `AiProviderEntity` instance. Pass `null` for no initial data.

#### `Analytics($data = null)`

Create a new `AnalyticsEntity` instance. Pass `null` for no initial data.

#### `Auth($data = null)`

Create a new `AuthEntity` instance. Pass `null` for no initial data.

#### `Billing($data = null)`

Create a new `BillingEntity` instance. Pass `null` for no initial data.

#### `Collaboration($data = null)`

Create a new `CollaborationEntity` instance. Pass `null` for no initial data.

#### `Compliance($data = null)`

Create a new `ComplianceEntity` instance. Pass `null` for no initial data.

#### `CreateMeme($data = null)`

Create a new `CreateMemeEntity` instance. Pass `null` for no initial data.

#### `DeveloperApi($data = null)`

Create a new `DeveloperApiEntity` instance. Pass `null` for no initial data.

#### `FreeCaptionMemeSuccess($data = null)`

Create a new `FreeCaptionMemeSuccessEntity` instance. Pass `null` for no initial data.

#### `FreeTemplateSearch($data = null)`

Create a new `FreeTemplateSearchEntity` instance. Pass `null` for no initial data.

#### `Generate($data = null)`

Create a new `GenerateEntity` instance. Pass `null` for no initial data.

#### `Growth($data = null)`

Create a new `GrowthEntity` instance. Pass `null` for no initial data.

#### `ListMeme($data = null)`

Create a new `ListMemeEntity` instance. Pass `null` for no initial data.

#### `Media($data = null)`

Create a new `MediaEntity` instance. Pass `null` for no initial data.

#### `Meme($data = null)`

Create a new `MemeEntity` instance. Pass `null` for no initial data.

#### `PublicTemplateMediaItem($data = null)`

Create a new `PublicTemplateMediaItemEntity` instance. Pass `null` for no initial data.

#### `StandaloneAgentBootstrap($data = null)`

Create a new `StandaloneAgentBootstrapEntity` instance. Pass `null` for no initial data.

#### `Template($data = null)`

Create a new `TemplateEntity` instance. Pass `null` for no initial data.

#### `TemplateSearch($data = null)`

Create a new `TemplateSearchEntity` instance. Pass `null` for no initial data.

#### `TrendAlert($data = null)`

Create a new `TrendAlertEntity` instance. Pass `null` for no initial data.

#### `UploadCaptionMemeSuccess($data = null)`

Create a new `UploadCaptionMemeSuccessEntity` instance. Pass `null` for no initial data.

#### `Video($data = null)`

Create a new `VideoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MemesioContentCreationUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AgentEntity

```php
$agent = $client->Agent();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Agent()->create([
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->load(["id" => "agent_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Agent()->update([
  "id" => "agent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentInfraEntity

```php
$agent_infra = $client->AgentInfra();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chat_id` | `string` | Yes |  |
| `meme_slug` | `string` | Yes |  |
| `metadata` | `array` | No |  |
| `payout_reference` | `string` | No |  |
| `payout_status` | `string` | No |  |
| `phone_or_chat_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `array` | No |  |
| `quota_boost_per_day` | `int` | No |  |
| `scope` | `array` | No |  |
| `user_id` | `string` | No |  |
| `week_start` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentInfra()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AgentInfra()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AgentInfra()->remove(["agent_id" => "agent_id", "key_id" => "key_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentInfraEntity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiCaptionEntity

```php
$ai_caption = $client->AiCaption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `array` | No |  |
| `canvas_text` | `array` | Yes |  |
| `caption_count` | `int` | No |  |
| `caption_set` | `array` | No |  |
| `entity` | `array` | No |  |
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
| `reference_caption` | `array` | No |  |
| `rewrite_note` | `string` | No |  |
| `scene_summary` | `string` | No |  |
| `template_description` | `string` | No |  |
| `template_name` | `string` | No |  |
| `template_tag` | `array` | No |  |
| `tone` | `string` | Yes |  |
| `tone_cue` | `array` | No |  |
| `trend_keyword` | `array` | No |  |
| `trend_reference` | `array` | No |  |
| `trend_signal` | `array` | No |  |
| `variation_offset` | `int` | No |  |
| `voice_rule` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiCaption()->create([
  "canvas_text" => null, // array
  "name" => null, // string
  "tone" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiCaption()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiCaptionEntity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiJobEntity

```php
$ai_job = $client->AiJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | No |  |
| `after_state` | `array` | No |  |
| `attempt` | `int` | No |  |
| `before_state` | `array` | No |  |
| `brush_edit` | `array` | No |  |
| `capability` | `string` | Yes |  |
| `celebrity_confidence` | `float` | No |  |
| `consent_attested` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `detected_face_count` | `float` | Yes |  |
| `edge_refinement` | `float` | No |  |
| `estimated_cost_usd` | `float` | No |  |
| `frame_time_m` | `float` | No |  |
| `height` | `float` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `array` | No |  |
| `layer_id` | `string` | Yes |  |
| `layer_type` | `string` | No |  |
| `max_attempt` | `int` | No |  |
| `max_face` | `float` | No |  |
| `media_type` | `string` | No |  |
| `metadata` | `array` | No |  |
| `nsfw_score` | `float` | No |  |
| `output` | `array` | No |  |
| `project_id` | `string` | Yes |  |
| `provider_id` | `string` | No |  |
| `reason` | `string` | No |  |
| `run_after_m` | `int` | No |  |
| `source_asset_url` | `string` | Yes |  |
| `source_face_index` | `float` | No |  |
| `source_image_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_asset_url` | `string` | Yes |  |
| `target_face_index` | `float` | No |  |
| `timeout_m` | `int` | No |  |
| `trace_id` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `version_id` | `string` | No |  |
| `width` | `float` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiJob()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiJob()->load(["id" => "ai_job_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiJobEntity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```php
$ai_meme_generation_succeeded = $client->AiMemeGenerationSucceeded();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `bool` | No |  |
| `caption` | `array` | No |  |
| `caption_source` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `degraded_from_async` | `bool` | No |  |
| `editable_caption` | `array` | No |  |
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
| `tone_cue` | `array` | No |  |
| `variant` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiMemeGenerationSucceeded()->create([
  "flow" => null, // string
  "mode" => null, // string
  "ok" => null, // bool
  "prompt" => null, // string
  "status" => null, // string
  "variant" => null, // array
  "variant_count" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiMemeGenerationSucceededEntity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiProviderEntity

```php
$ai_provider = $client->AiProvider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `string` | No |  |
| `correlation_id` | `string` | No |  |
| `limit` | `float` | No |  |
| `mapping_mode` | `string` | No |  |
| `max_slot` | `int` | No |  |
| `prompt` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `text` | `array` | No |  |
| `trend_signal` | `array` | No |  |
| `workspace_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiProvider()->create([
  "prompt" => null, // string
  "source_image_url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiProvider()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiProviderEntity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnalyticsEntity

```php
$analytics = $client->Analytics();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Analytics()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalyticsEntity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthEntity

```php
$auth = $client->Auth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Auth()->create([
  "email" => null, // string
  "password" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthEntity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingEntity

```php
$billing = $client->Billing();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Billing()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingEntity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CollaborationEntity

```php
$collaboration = $client->Collaboration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `project_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Collaboration()->create([
  "message" => null, // string
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Collaboration()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CollaborationEntity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComplianceEntity

```php
$compliance = $client->Compliance();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Compliance()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComplianceEntity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateMemeEntity

```php
$create_meme = $client->CreateMeme();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `array` | Yes |  |
| `caption` | `array` | Yes |  |
| `generation_run_id` | `mixed` | No |  |
| `generation_variant_id` | `mixed` | No |  |
| `image_data_url` | `string` | Yes |  |
| `overlay` | `array` | No |  |
| `source_image_url` | `string` | Yes |  |
| `template_slug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateMeme()->create([
  "canva" => null, // array
  "caption" => null, // array
  "image_data_url" => null, // string
  "source_image_url" => null, // string
  "watermark" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateMemeEntity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeveloperApiEntity

```php
$developer_api = $client->DeveloperApi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `float` | No |  |
| `prompt` | `string` | Yes |  |
| `trend_signal` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeveloperApi()->create([
  "prompt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeveloperApi()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeveloperApiEntity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```php
$free_caption_meme_success = $client->FreeCaptionMemeSuccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `array` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FreeCaptionMemeSuccess()->create([
  "caption" => null, // array
  "template_slug" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FreeCaptionMemeSuccessEntity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FreeTemplateSearchEntity

```php
$free_template_search = $client->FreeTemplateSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `mixed` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | Yes |  |
| `caption` | `array` | Yes |  |
| `caption_count` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `duration_m` | `mixed` | No |  |
| `example_image_url` | `mixed` | No |  |
| `frame_count` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `mixed` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `array` | No |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FreeTemplateSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FreeTemplateSearchEntity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateEntity

```php
$generate = $client->Generate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `array` | No |  |
| `data` | `array` | Yes |  |
| `duration_m` | `int` | No |  |
| `fps` | `int` | No |  |
| `gif_slug` | `string` | No |  |
| `ok` | `bool` | Yes |  |
| `return_base64` | `bool` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `array` | No |  |
| `title` | `string` | No |  |
| `width_px` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Generate()->create([
  "data" => null, // array
  "ok" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateEntity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GrowthEntity

```php
$growth = $client->Growth();
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
| `profile` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Growth()->create([
  "action" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Growth()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GrowthEntity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListMemeEntity

```php
$list_meme = $client->ListMeme();
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
| `tag` | `array` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListMeme()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListMemeEntity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MediaEntity

```php
$media = $client->Media();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Media()->create([
  "action" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MediaEntity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemeEntity

```php
$meme = $client->Meme();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `string` | Yes |  |
| `canonical_image_url` | `string` | Yes |  |
| `canva` | `array` | Yes |  |
| `caption` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `nsfw_status` | `string` | Yes |  |
| `overlay` | `array` | Yes |  |
| `share_slug` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |
| `share_view` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `source_image_url` | `string` | Yes |  |
| `tag` | `array` | Yes |  |
| `template_slug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Meme()->load(["id" => "meme_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Meme()->remove(["id" => "meme_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemeEntity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```php
$public_template_media_item = $client->PublicTemplateMediaItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `mixed` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `array` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `array` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `mixed` | No |  |
| `example_image_url` | `mixed` | No |  |
| `frame_count` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `mixed` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `array` | Yes |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PublicTemplateMediaItem()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicTemplateMediaItemEntity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```php
$standalone_agent_bootstrap = $client->StandaloneAgentBootstrap();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StandaloneAgentBootstrap()->create([
  "handle" => null, // string
  "name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StandaloneAgentBootstrapEntity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateEntity

```php
$template = $client->Template();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `mixed` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `array` | No |  |
| `caption_count` | `int` | No |  |
| `category` | `array` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `int` | No |  |
| `example_image_url` | `mixed` | No |  |
| `fps` | `int` | No |  |
| `frame_count` | `mixed` | No |  |
| `gif_slug` | `string` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `return_base64` | `bool` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `mixed` | Yes |  |
| `source_url` | `string` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `array` | No |  |
| `title` | `string` | No |  |
| `width` | `mixed` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Template()->create([
  "slug" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Template()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateEntity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateSearchEntity

```php
$template_search = $client->TemplateSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `mixed` | No |  |
| `asset_content_type` | `string` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `array` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `array` | No |  |
| `description` | `string` | Yes |  |
| `duration_m` | `mixed` | No |  |
| `example_image_url` | `mixed` | No |  |
| `frame_count` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `image_url` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `poster_image_url` | `string` | No |  |
| `preview_image_url` | `string` | No |  |
| `quality_status` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `source_template_id` | `mixed` | Yes |  |
| `source_url` | `string` | No |  |
| `tag` | `array` | Yes |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TemplateSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateSearchEntity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrendAlertEntity

```php
$trend_alert = $client->TrendAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actor_id` | `string` | Yes |  |
| `aggressiveness` | `float` | No |  |
| `alert_id` | `string` | Yes |  |
| `channel` | `array` | No |  |
| `deliver_all_alert` | `bool` | No |  |
| `event` | `array` | No |  |
| `explicit_niche` | `array` | No |  |
| `explicit_region` | `array` | No |  |
| `explicit_source` | `array` | No |  |
| `explicit_topic` | `array` | No |  |
| `follower_count` | `int` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TrendAlert()->create([
  "action" => null, // string
  "actor_id" => null, // string
  "alert_id" => null, // string
  "topic" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TrendAlert()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrendAlertEntity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```php
$upload_caption_meme_success = $client->UploadCaptionMemeSuccess();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UploadCaptionMemeSuccess()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadCaptionMemeSuccessEntity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoEntity

```php
$video = $client->Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `asset_id` | `string` | No |  |
| `at_m` | `float` | No |  |
| `audio_asset_id` | `string` | No |  |
| `beat_offset_m` | `int` | No |  |
| `bitrate_kbp` | `float` | No |  |
| `bpm` | `int` | No |  |
| `cancelled` | `bool` | No |  |
| `container` | `string` | No |  |
| `duration_m` | `float` | No |  |
| `duration_second` | `float` | Yes |  |
| `easing` | `string` | No |  |
| `error` | `string` | No |  |
| `frame_rate` | `float` | No |  |
| `input_format` | `string` | Yes |  |
| `intensity` | `float` | No |  |
| `job_id` | `string` | No |  |
| `locale` | `string` | No |  |
| `mime_type` | `string` | Yes |  |
| `name` | `string` | No |  |
| `offset_m` | `float` | No |  |
| `output_preset_id` | `string` | Yes |  |
| `output_url` | `string` | No |  |
| `plan_tier` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `progress_percent` | `float` | No |  |
| `project` | `array` | No |  |
| `project_id` | `string` | No |  |
| `property` | `string` | No |  |
| `source_device_id` | `string` | No |  |
| `source_url` | `string` | No |  |
| `stage` | `string` | No |  |
| `start_m` | `float` | No |  |
| `style_preset_id` | `string` | No |  |
| `sync_to_beat_grid` | `bool` | No |  |
| `tone` | `string` | No |  |
| `track_id` | `string` | No |  |
| `transcript` | `string` | No |  |
| `trend_keyword` | `array` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `float` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Video()->create([
  "duration_second" => null, // float
  "input_format" => null, // string
  "mime_type" => null, // string
  "output_preset_id" => null, // string
  "plan_tier" => null, // string
  "preset_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Video()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoEntity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new MemesioContentCreationSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

