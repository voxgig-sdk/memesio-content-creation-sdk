# MemesioContentCreation PHP SDK



The PHP SDK for the MemesioContentCreation API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Agent()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'memesiocontentcreation_sdk.php';

$client = new MemesioContentCreationSDK([
    "apikey" => getenv("MEMESIO_CONTENT_CREATION_APIKEY"),
]);
```

### 3. Load a publictemplatemediaitem

PublicTemplateMediaItem is nested under slug, so provide the `slug`.

```php
try {
    // load() returns the bare PublicTemplateMediaItem record (throws on error).
    $publictemplatemediaitem = $client->PublicTemplateMediaItem()->load(["slug" => "example_slug"]);
    print_r($publictemplatemediaitem);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the bare created Agent record.
$created = $client->Agent()->create(["name" => "example_name"]);

// Update
$client->Agent()->update(["id" => "example_id"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $agent = $client->Agent()->load(["id" => "example_id"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = MemesioContentCreationSDK::test([
    "entity" => ["agent" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$agent = $client->Agent()->load(["id" => "test01"]);
print_r($agent);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new MemesioContentCreationSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE
MEMESIO_CONTENT_CREATION_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### MemesioContentCreationSDK

```php
require_once 'memesiocontentcreation_sdk.php';
$client = new MemesioContentCreationSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = MemesioContentCreationSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### MemesioContentCreationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Agent` | `($data): AgentEntity` | Create an Agent entity instance. |
| `AgentInfra` | `($data): AgentInfraEntity` | Create an AgentInfra entity instance. |
| `AiCaption` | `($data): AiCaptionEntity` | Create an AiCaption entity instance. |
| `AiJob` | `($data): AiJobEntity` | Create an AiJob entity instance. |
| `AiMemeGenerationSucceeded` | `($data): AiMemeGenerationSucceededEntity` | Create an AiMemeGenerationSucceeded entity instance. |
| `AiProvider` | `($data): AiProviderEntity` | Create an AiProvider entity instance. |
| `Analytics` | `($data): AnalyticsEntity` | Create an Analytics entity instance. |
| `Auth` | `($data): AuthEntity` | Create an Auth entity instance. |
| `Billing` | `($data): BillingEntity` | Create a Billing entity instance. |
| `Collaboration` | `($data): CollaborationEntity` | Create a Collaboration entity instance. |
| `Compliance` | `($data): ComplianceEntity` | Create a Compliance entity instance. |
| `CreateMeme` | `($data): CreateMemeEntity` | Create a CreateMeme entity instance. |
| `DeveloperApi` | `($data): DeveloperApiEntity` | Create a DeveloperApi entity instance. |
| `FreeCaptionMemeSuccess` | `($data): FreeCaptionMemeSuccessEntity` | Create a FreeCaptionMemeSuccess entity instance. |
| `FreeTemplateSearch` | `($data): FreeTemplateSearchEntity` | Create a FreeTemplateSearch entity instance. |
| `Generate` | `($data): GenerateEntity` | Create a Generate entity instance. |
| `Growth` | `($data): GrowthEntity` | Create a Growth entity instance. |
| `ListMeme` | `($data): ListMemeEntity` | Create a ListMeme entity instance. |
| `Media` | `($data): MediaEntity` | Create a Media entity instance. |
| `Meme` | `($data): MemeEntity` | Create a Meme entity instance. |
| `PublicTemplateMediaItem` | `($data): PublicTemplateMediaItemEntity` | Create a PublicTemplateMediaItem entity instance. |
| `StandaloneAgentBootstrap` | `($data): StandaloneAgentBootstrapEntity` | Create a StandaloneAgentBootstrap entity instance. |
| `Template` | `($data): TemplateEntity` | Create a Template entity instance. |
| `TemplateSearch` | `($data): TemplateSearchEntity` | Create a TemplateSearch entity instance. |
| `TrendAlert` | `($data): TrendAlertEntity` | Create a TrendAlert entity instance. |
| `UploadCaptionMemeSuccess` | `($data): UploadCaptionMemeSuccessEntity` | Create an UploadCaptionMemeSuccess entity instance. |
| `Video` | `($data): VideoEntity` | Create a Video entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `description` |  |
| `locale` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
| `style_preset` |  |
| `system_prompt` |  |
| `watermark_text` |  |
| `website_url` |  |

Operations: Create, Load, Update.

API path: `/api/v1/agents`

#### AgentInfra

| Field | Description |
| --- | --- |
| `action` |  |
| `chat_id` |  |
| `meme_slug` |  |
| `metadata` |  |
| `payout_reference` |  |
| `payout_status` |  |
| `phone_or_chat_id` |  |
| `prompt` |  |
| `proof` |  |
| `quota_boost_per_day` |  |
| `scope` |  |
| `user_id` |  |
| `week_start` |  |

Operations: Create, Load, Remove.

API path: `/api/v1/agents/{agentId}/channels/telegram/bind`

#### AiCaption

| Field | Description |
| --- | --- |
| `blocked_term` |  |
| `canvas_text` |  |
| `caption_count` |  |
| `caption_set` |  |
| `entity` |  |
| `fallback_used` |  |
| `generation_strategy` |  |
| `locale` |  |
| `meme_id` |  |
| `meme_slug` |  |
| `name` |  |
| `ok` |  |
| `option_count` |  |
| `owner_token` |  |
| `provider_id` |  |
| `reference_caption` |  |
| `rewrite_note` |  |
| `scene_summary` |  |
| `template_description` |  |
| `template_name` |  |
| `template_tag` |  |
| `tone` |  |
| `tone_cue` |  |
| `trend_keyword` |  |
| `trend_reference` |  |
| `trend_signal` |  |
| `variation_offset` |  |
| `voice_rule` |  |

Operations: Create, Load.

API path: `/api/ai/captions/generate`

#### AiJob

| Field | Description |
| --- | --- |
| `action` |  |
| `actor_id` |  |
| `after_state` |  |
| `attempt` |  |
| `before_state` |  |
| `brush_edit` |  |
| `capability` |  |
| `celebrity_confidence` |  |
| `consent_attested` |  |
| `created_at` |  |
| `detected_face_count` |  |
| `edge_refinement` |  |
| `estimated_cost_usd` |  |
| `frame_time_m` |  |
| `height` |  |
| `id` |  |
| `input` |  |
| `layer_id` |  |
| `layer_type` |  |
| `max_attempt` |  |
| `max_face` |  |
| `media_type` |  |
| `metadata` |  |
| `nsfw_score` |  |
| `output` |  |
| `project_id` |  |
| `provider_id` |  |
| `reason` |  |
| `run_after_m` |  |
| `source_asset_url` |  |
| `source_face_index` |  |
| `source_image_url` |  |
| `status` |  |
| `target_asset_url` |  |
| `target_face_index` |  |
| `timeout_m` |  |
| `trace_id` |  |
| `updated_at` |  |
| `version_id` |  |
| `width` |  |
| `worker_id` |  |
| `workspace_id` |  |

Operations: Create, Load.

API path: `/api/ai/jobs/{jobId}/cancel`

#### AiMemeGenerationSucceeded

| Field | Description |
| --- | --- |
| `allow_heuristic_fallback` |  |
| `caption` |  |
| `caption_source` |  |
| `correlation_id` |  |
| `degraded_from_async` |  |
| `editable_caption` |  |
| `flow` |  |
| `image_url` |  |
| `mode` |  |
| `ok` |  |
| `preferred_provider_id` |  |
| `prompt` |  |
| `rewrite_note` |  |
| `run_id` |  |
| `status` |  |
| `template_id` |  |
| `tone` |  |
| `tone_cue` |  |
| `variant` |  |
| `variant_count` |  |
| `workspace_id` |  |

Operations: Create.

API path: `/api/ai/memes/generate`

#### AiProvider

| Field | Description |
| --- | --- |
| `actor_id` |  |
| `correlation_id` |  |
| `limit` |  |
| `mapping_mode` |  |
| `max_slot` |  |
| `prompt` |  |
| `source_image_url` |  |
| `text` |  |
| `trend_signal` |  |
| `workspace_id` |  |

Operations: Create, Load.

API path: `/api/ai/templates/detect`

#### Analytics

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/analytics/experiments/templates`

#### Auth

| Field | Description |
| --- | --- |
| `display_name` |  |
| `email` |  |
| `password` |  |

Operations: Create.

API path: `/api/auth/resend-verification`

#### Billing

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/billing/usage`

#### Collaboration

| Field | Description |
| --- | --- |
| `author_id` |  |
| `message` |  |
| `project_id` |  |

Operations: Create, Load.

API path: `/api/collab/comments`

#### Compliance

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/compliance/content-policy`

#### CreateMeme

| Field | Description |
| --- | --- |
| `canva` |  |
| `caption` |  |
| `generation_run_id` |  |
| `generation_variant_id` |  |
| `image_data_url` |  |
| `overlay` |  |
| `source_image_url` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: Create.

API path: `/api/memes`

#### DeveloperApi

| Field | Description |
| --- | --- |
| `limit` |  |
| `prompt` |  |
| `trend_signal` |  |

Operations: Create, Load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `caption` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: Create.

API path: `/api/free/memes/caption`

#### FreeTemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
| `width` |  |

Operations: List.

API path: `/api/free/templates`

#### Generate

| Field | Description |
| --- | --- |
| `caption` |  |
| `data` |  |
| `duration_m` |  |
| `fps` |  |
| `gif_slug` |  |
| `ok` |  |
| `return_base64` |  |
| `start_m` |  |
| `tag` |  |
| `title` |  |
| `width_px` |  |

Operations: Create.

API path: `/api/v1/gifs/generate`

#### Growth

| Field | Description |
| --- | --- |
| `account_id` |  |
| `action` |  |
| `actor_id` |  |
| `caption` |  |
| `code` |  |
| `external_account_id` |  |
| `handle` |  |
| `limit` |  |
| `log_exposure` |  |
| `meme_slug` |  |
| `now` |  |
| `platform` |  |
| `profile` |  |
| `share_slug` |  |
| `surface` |  |
| `week_start` |  |

Operations: Create, Load.

API path: `/api/growth/experiments/decision`

#### ListMeme

| Field | Description |
| --- | --- |
| `alt_text` |  |
| `canonical_image_url` |  |
| `created_at` |  |
| `image_url` |  |
| `nsfw_status` |  |
| `share_slug` |  |
| `share_url` |  |
| `share_view` |  |
| `slug` |  |
| `tag` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |

Operations: List.

API path: `/api/memes`

#### Media

| Field | Description |
| --- | --- |
| `action` |  |
| `content_type` |  |
| `expires_in_second` |  |
| `owner_token` |  |
| `path` |  |
| `prefix` |  |

Operations: Create.

API path: `/api/media/signed-url`

#### Meme

| Field | Description |
| --- | --- |
| `alt_text` |  |
| `canonical_image_url` |  |
| `canva` |  |
| `caption` |  |
| `created_at` |  |
| `image_url` |  |
| `nsfw_status` |  |
| `overlay` |  |
| `share_slug` |  |
| `share_url` |  |
| `share_view` |  |
| `slug` |  |
| `source_image_url` |  |
| `tag` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: Load, Remove.

API path: `/api/memes/{slug}`

#### PublicTemplateMediaItem

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
| `width` |  |

Operations: Load.

API path: `/api/templates/{slug}`

#### StandaloneAgentBootstrap

| Field | Description |
| --- | --- |
| `description` |  |
| `handle` |  |
| `locale` |  |
| `name` |  |
| `style_preset` |  |
| `system_prompt` |  |
| `watermark_text` |  |
| `website_url` |  |

Operations: Create.

API path: `/api/v1/agents/bootstrap`

#### Template

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `fps` |  |
| `frame_count` |  |
| `gif_slug` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `return_base64` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `start_m` |  |
| `tag` |  |
| `title` |  |
| `width` |  |
| `width_px` |  |

Operations: Create, List.

API path: `/api/gifs/{slug}/generate`

#### TemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
| `width` |  |

Operations: List.

API path: `/api/gifs`

#### TrendAlert

| Field | Description |
| --- | --- |
| `action` |  |
| `actor_id` |  |
| `aggressiveness` |  |
| `alert_id` |  |
| `channel` |  |
| `deliver_all_alert` |  |
| `event` |  |
| `explicit_niche` |  |
| `explicit_region` |  |
| `explicit_source` |  |
| `explicit_topic` |  |
| `follower_count` |  |
| `niche` |  |
| `region` |  |
| `source` |  |
| `topic` |  |

Operations: Create, Load.

API path: `/api/alerts/delivery`

#### UploadCaptionMemeSuccess

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v1/memes/caption-upload`

#### Video

| Field | Description |
| --- | --- |
| `action` |  |
| `asset_id` |  |
| `at_m` |  |
| `audio_asset_id` |  |
| `beat_offset_m` |  |
| `bitrate_kbp` |  |
| `bpm` |  |
| `cancelled` |  |
| `container` |  |
| `duration_m` |  |
| `duration_second` |  |
| `easing` |  |
| `error` |  |
| `frame_rate` |  |
| `input_format` |  |
| `intensity` |  |
| `job_id` |  |
| `locale` |  |
| `mime_type` |  |
| `name` |  |
| `offset_m` |  |
| `output_preset_id` |  |
| `output_url` |  |
| `plan_tier` |  |
| `preset_id` |  |
| `progress_percent` |  |
| `project` |  |
| `project_id` |  |
| `property` |  |
| `source_device_id` |  |
| `source_url` |  |
| `stage` |  |
| `start_m` |  |
| `style_preset_id` |  |
| `sync_to_beat_grid` |  |
| `tone` |  |
| `track_id` |  |
| `transcript` |  |
| `trend_keyword` |  |
| `type` |  |
| `updated_at` |  |
| `value` |  |
| `watermark_enabled` |  |
| `watermark_text` |  |
| `worker_id` |  |

Operations: Create, Load.

API path: `/api/video/drafts`



## Entities


### Agent

Create an instance: `$agent = $client->Agent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `locale` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Agent record (throws on error).
$agent = $client->Agent()->load(["id" => "agent_id"]);
```

#### Example: Create

```php
$agent = $client->Agent()->create([
    "name" => null, // string
]);
```


### AgentInfra

Create an instance: `$agent_infra = $client->AgentInfra();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `chat_id` | `string` |  |
| `meme_slug` | `string` |  |
| `metadata` | `array` |  |
| `payout_reference` | `string` |  |
| `payout_status` | `string` |  |
| `phone_or_chat_id` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `array` |  |
| `quota_boost_per_day` | `int` |  |
| `scope` | `array` |  |
| `user_id` | `string` |  |
| `week_start` | `string` |  |

#### Example: Load

```php
// load() returns the bare AgentInfra record (throws on error).
$agent_infra = $client->AgentInfra()->load();
```

#### Example: Create

```php
$agent_infra = $client->AgentInfra()->create([
]);
```


### AiCaption

Create an instance: `$ai_caption = $client->AiCaption();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_term` | `array` |  |
| `canvas_text` | `array` |  |
| `caption_count` | `int` |  |
| `caption_set` | `array` |  |
| `entity` | `array` |  |
| `fallback_used` | `bool` |  |
| `generation_strategy` | `string` |  |
| `locale` | `string` |  |
| `meme_id` | `string` |  |
| `meme_slug` | `string` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `option_count` | `int` |  |
| `owner_token` | `string` |  |
| `provider_id` | `string` |  |
| `reference_caption` | `array` |  |
| `rewrite_note` | `string` |  |
| `scene_summary` | `string` |  |
| `template_description` | `string` |  |
| `template_name` | `string` |  |
| `template_tag` | `array` |  |
| `tone` | `string` |  |
| `tone_cue` | `array` |  |
| `trend_keyword` | `array` |  |
| `trend_reference` | `array` |  |
| `trend_signal` | `array` |  |
| `variation_offset` | `int` |  |
| `voice_rule` | `array` |  |

#### Example: Load

```php
// load() returns the bare AiCaption record (throws on error).
$ai_caption = $client->AiCaption()->load();
```

#### Example: Create

```php
$ai_caption = $client->AiCaption()->create([
    "canvas_text" => null, // array
    "name" => null, // string
    "tone" => null, // string
]);
```


### AiJob

Create an instance: `$ai_job = $client->AiJob();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actor_id` | `string` |  |
| `after_state` | `array` |  |
| `attempt` | `int` |  |
| `before_state` | `array` |  |
| `brush_edit` | `array` |  |
| `capability` | `string` |  |
| `celebrity_confidence` | `float` |  |
| `consent_attested` | `bool` |  |
| `created_at` | `string` |  |
| `detected_face_count` | `float` |  |
| `edge_refinement` | `float` |  |
| `estimated_cost_usd` | `float` |  |
| `frame_time_m` | `float` |  |
| `height` | `float` |  |
| `id` | `string` |  |
| `input` | `array` |  |
| `layer_id` | `string` |  |
| `layer_type` | `string` |  |
| `max_attempt` | `int` |  |
| `max_face` | `float` |  |
| `media_type` | `string` |  |
| `metadata` | `array` |  |
| `nsfw_score` | `float` |  |
| `output` | `array` |  |
| `project_id` | `string` |  |
| `provider_id` | `string` |  |
| `reason` | `string` |  |
| `run_after_m` | `int` |  |
| `source_asset_url` | `string` |  |
| `source_face_index` | `float` |  |
| `source_image_url` | `string` |  |
| `status` | `string` |  |
| `target_asset_url` | `string` |  |
| `target_face_index` | `float` |  |
| `timeout_m` | `int` |  |
| `trace_id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `string` |  |
| `width` | `float` |  |
| `worker_id` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare AiJob record (throws on error).
$ai_job = $client->AiJob()->load(["id" => "ai_job_id"]);
```

#### Example: Create

```php
$ai_job = $client->AiJob()->create([
]);
```


### AiMemeGenerationSucceeded

Create an instance: `$ai_meme_generation_succeeded = $client->AiMemeGenerationSucceeded();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_heuristic_fallback` | `bool` |  |
| `caption` | `array` |  |
| `caption_source` | `string` |  |
| `correlation_id` | `string` |  |
| `degraded_from_async` | `bool` |  |
| `editable_caption` | `array` |  |
| `flow` | `string` |  |
| `image_url` | `string` |  |
| `mode` | `string` |  |
| `ok` | `bool` |  |
| `preferred_provider_id` | `string` |  |
| `prompt` | `string` |  |
| `rewrite_note` | `string` |  |
| `run_id` | `string` |  |
| `status` | `string` |  |
| `template_id` | `string` |  |
| `tone` | `string` |  |
| `tone_cue` | `array` |  |
| `variant` | `array` |  |
| `variant_count` | `int` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```php
$ai_meme_generation_succeeded = $client->AiMemeGenerationSucceeded()->create([
    "flow" => null, // string
    "mode" => null, // string
    "ok" => null, // bool
    "prompt" => null, // string
    "status" => null, // string
    "variant" => null, // array
    "variant_count" => null, // int
]);
```


### AiProvider

Create an instance: `$ai_provider = $client->AiProvider();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `string` |  |
| `correlation_id` | `string` |  |
| `limit` | `float` |  |
| `mapping_mode` | `string` |  |
| `max_slot` | `int` |  |
| `prompt` | `string` |  |
| `source_image_url` | `string` |  |
| `text` | `array` |  |
| `trend_signal` | `array` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare AiProvider record (throws on error).
$ai_provider = $client->AiProvider()->load();
```

#### Example: Create

```php
$ai_provider = $client->AiProvider()->create([
    "prompt" => null, // string
    "source_image_url" => null, // string
]);
```


### Analytics

Create an instance: `$analytics = $client->Analytics();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Analytics record (throws on error).
$analytics = $client->Analytics()->load();
```


### Auth

Create an instance: `$auth = $client->Auth();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `email` | `string` |  |
| `password` | `string` |  |

#### Example: Create

```php
$auth = $client->Auth()->create([
    "email" => null, // string
    "password" => null, // string
]);
```


### Billing

Create an instance: `$billing = $client->Billing();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Billing record (throws on error).
$billing = $client->Billing()->load();
```


### Collaboration

Create an instance: `$collaboration = $client->Collaboration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `message` | `string` |  |
| `project_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare Collaboration record (throws on error).
$collaboration = $client->Collaboration()->load();
```

#### Example: Create

```php
$collaboration = $client->Collaboration()->create([
    "message" => null, // string
    "project_id" => null, // string
]);
```


### Compliance

Create an instance: `$compliance = $client->Compliance();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Compliance record (throws on error).
$compliance = $client->Compliance()->load();
```


### CreateMeme

Create an instance: `$create_meme = $client->CreateMeme();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canva` | `array` |  |
| `caption` | `array` |  |
| `generation_run_id` | `mixed` |  |
| `generation_variant_id` | `mixed` |  |
| `image_data_url` | `string` |  |
| `overlay` | `array` |  |
| `source_image_url` | `string` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` |  |

#### Example: Create

```php
$create_meme = $client->CreateMeme()->create([
    "canva" => null, // array
    "caption" => null, // array
    "image_data_url" => null, // string
    "source_image_url" => null, // string
    "watermark" => null, // array
]);
```


### DeveloperApi

Create an instance: `$developer_api = $client->DeveloperApi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit` | `float` |  |
| `prompt` | `string` |  |
| `trend_signal` | `array` |  |

#### Example: Load

```php
// load() returns the bare DeveloperApi record (throws on error).
$developer_api = $client->DeveloperApi()->load();
```

#### Example: Create

```php
$developer_api = $client->DeveloperApi()->create([
    "prompt" => null, // string
]);
```


### FreeCaptionMemeSuccess

Create an instance: `$free_caption_meme_success = $client->FreeCaptionMemeSuccess();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `array` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` |  |

#### Example: Create

```php
$free_caption_meme_success = $client->FreeCaptionMemeSuccess()->create([
    "caption" => null, // array
    "template_slug" => null, // string
]);
```


### FreeTemplateSearch

Create an instance: `$free_template_search = $client->FreeTemplateSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `mixed` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `array` |  |
| `caption_count` | `int` |  |
| `description` | `string` |  |
| `duration_m` | `mixed` |  |
| `example_image_url` | `mixed` |  |
| `frame_count` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `mixed` |  |
| `source_url` | `string` |  |
| `tag` | `array` |  |
| `width` | `mixed` |  |

#### Example: List

```php
// list() returns an array of FreeTemplateSearch records (throws on error).
$free_template_searchs = $client->FreeTemplateSearch()->list();
```


### Generate

Create an instance: `$generate = $client->Generate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `array` |  |
| `data` | `array` |  |
| `duration_m` | `int` |  |
| `fps` | `int` |  |
| `gif_slug` | `string` |  |
| `ok` | `bool` |  |
| `return_base64` | `bool` |  |
| `start_m` | `int` |  |
| `tag` | `array` |  |
| `title` | `string` |  |
| `width_px` | `int` |  |

#### Example: Create

```php
$generate = $client->Generate()->create([
    "data" => null, // array
    "ok" => null, // bool
]);
```


### Growth

Create an instance: `$growth = $client->Growth();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `action` | `string` |  |
| `actor_id` | `string` |  |
| `caption` | `string` |  |
| `code` | `string` |  |
| `external_account_id` | `string` |  |
| `handle` | `string` |  |
| `limit` | `int` |  |
| `log_exposure` | `bool` |  |
| `meme_slug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profile` | `array` |  |
| `share_slug` | `string` |  |
| `surface` | `string` |  |
| `week_start` | `string` |  |

#### Example: Load

```php
// load() returns the bare Growth record (throws on error).
$growth = $client->Growth()->load();
```

#### Example: Create

```php
$growth = $client->Growth()->create([
    "action" => null, // string
]);
```


### ListMeme

Create an instance: `$list_meme = $client->ListMeme();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `int` |  |
| `slug` | `string` |  |
| `tag` | `array` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |

#### Example: List

```php
// list() returns an array of ListMeme records (throws on error).
$list_memes = $client->ListMeme()->list();
```


### Media

Create an instance: `$media = $client->Media();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `content_type` | `string` |  |
| `expires_in_second` | `int` |  |
| `owner_token` | `string` |  |
| `path` | `string` |  |
| `prefix` | `string` |  |

#### Example: Create

```php
$media = $client->Media()->create([
    "action" => null, // string
]);
```


### Meme

Create an instance: `$meme = $client->Meme();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `canva` | `array` |  |
| `caption` | `array` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `overlay` | `array` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `int` |  |
| `slug` | `string` |  |
| `source_image_url` | `string` |  |
| `tag` | `array` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` |  |

#### Example: Load

```php
// load() returns the bare Meme record (throws on error).
$meme = $client->Meme()->load(["id" => "meme_id"]);
```


### PublicTemplateMediaItem

Create an instance: `$public_template_media_item = $client->PublicTemplateMediaItem();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `mixed` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `array` |  |
| `caption_count` | `int` |  |
| `category` | `array` |  |
| `description` | `string` |  |
| `duration_m` | `mixed` |  |
| `example_image_url` | `mixed` |  |
| `frame_count` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `mixed` |  |
| `source_url` | `string` |  |
| `tag` | `array` |  |
| `width` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare PublicTemplateMediaItem record (throws on error).
$public_template_media_item = $client->PublicTemplateMediaItem()->load(["slug" => "slug"]);
```


### StandaloneAgentBootstrap

Create an instance: `$standalone_agent_bootstrap = $client->StandaloneAgentBootstrap();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `handle` | `string` |  |
| `locale` | `string` |  |
| `name` | `string` |  |
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

#### Example: Create

```php
$standalone_agent_bootstrap = $client->StandaloneAgentBootstrap()->create([
    "handle" => null, // string
    "name" => null, // string
]);
```


### Template

Create an instance: `$template = $client->Template();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `mixed` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `array` |  |
| `caption_count` | `int` |  |
| `category` | `array` |  |
| `description` | `string` |  |
| `duration_m` | `int` |  |
| `example_image_url` | `mixed` |  |
| `fps` | `int` |  |
| `frame_count` | `mixed` |  |
| `gif_slug` | `string` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `return_base64` | `bool` |  |
| `slug` | `string` |  |
| `source_template_id` | `mixed` |  |
| `source_url` | `string` |  |
| `start_m` | `int` |  |
| `tag` | `array` |  |
| `title` | `string` |  |
| `width` | `mixed` |  |
| `width_px` | `int` |  |

#### Example: List

```php
// list() returns an array of Template records (throws on error).
$templates = $client->Template()->list();
```

#### Example: Create

```php
$template = $client->Template()->create([
    "slug" => null, // string
]);
```


### TemplateSearch

Create an instance: `$template_search = $client->TemplateSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `mixed` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `array` |  |
| `caption_count` | `int` |  |
| `category` | `array` |  |
| `description` | `string` |  |
| `duration_m` | `mixed` |  |
| `example_image_url` | `mixed` |  |
| `frame_count` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `mixed` |  |
| `source_url` | `string` |  |
| `tag` | `array` |  |
| `width` | `mixed` |  |

#### Example: List

```php
// list() returns an array of TemplateSearch records (throws on error).
$template_searchs = $client->TemplateSearch()->list();
```


### TrendAlert

Create an instance: `$trend_alert = $client->TrendAlert();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actor_id` | `string` |  |
| `aggressiveness` | `float` |  |
| `alert_id` | `string` |  |
| `channel` | `array` |  |
| `deliver_all_alert` | `bool` |  |
| `event` | `array` |  |
| `explicit_niche` | `array` |  |
| `explicit_region` | `array` |  |
| `explicit_source` | `array` |  |
| `explicit_topic` | `array` |  |
| `follower_count` | `int` |  |
| `niche` | `string` |  |
| `region` | `string` |  |
| `source` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```php
// load() returns the bare TrendAlert record (throws on error).
$trend_alert = $client->TrendAlert()->load();
```

#### Example: Create

```php
$trend_alert = $client->TrendAlert()->create([
    "action" => null, // string
    "actor_id" => null, // string
    "alert_id" => null, // string
    "topic" => null, // string
]);
```


### UploadCaptionMemeSuccess

Create an instance: `$upload_caption_meme_success = $client->UploadCaptionMemeSuccess();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$upload_caption_meme_success = $client->UploadCaptionMemeSuccess()->create([
]);
```


### Video

Create an instance: `$video = $client->Video();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `asset_id` | `string` |  |
| `at_m` | `float` |  |
| `audio_asset_id` | `string` |  |
| `beat_offset_m` | `int` |  |
| `bitrate_kbp` | `float` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `string` |  |
| `duration_m` | `float` |  |
| `duration_second` | `float` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frame_rate` | `float` |  |
| `input_format` | `string` |  |
| `intensity` | `float` |  |
| `job_id` | `string` |  |
| `locale` | `string` |  |
| `mime_type` | `string` |  |
| `name` | `string` |  |
| `offset_m` | `float` |  |
| `output_preset_id` | `string` |  |
| `output_url` | `string` |  |
| `plan_tier` | `string` |  |
| `preset_id` | `string` |  |
| `progress_percent` | `float` |  |
| `project` | `array` |  |
| `project_id` | `string` |  |
| `property` | `string` |  |
| `source_device_id` | `string` |  |
| `source_url` | `string` |  |
| `stage` | `string` |  |
| `start_m` | `float` |  |
| `style_preset_id` | `string` |  |
| `sync_to_beat_grid` | `bool` |  |
| `tone` | `string` |  |
| `track_id` | `string` |  |
| `transcript` | `string` |  |
| `trend_keyword` | `array` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `value` | `float` |  |
| `watermark_enabled` | `bool` |  |
| `watermark_text` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare Video record (throws on error).
$video = $client->Video()->load();
```

#### Example: Create

```php
$video = $client->Video()->create([
    "duration_second" => null, // float
    "input_format" => null, // string
    "mime_type" => null, // string
    "output_preset_id" => null, // string
    "plan_tier" => null, // string
    "preset_id" => null, // string
]);
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── memesiocontentcreation_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`memesiocontentcreation_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$agent = $client->Agent();
$agent->load(["id" => "example_id"]);

// $agent->data_get() now returns the agent data from the last load
// $agent->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
