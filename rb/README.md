# MemesioContentCreation Ruby SDK



The Ruby SDK for the MemesioContentCreation API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Agent` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "MemesioContentCreation_sdk"

client = MemesioContentCreationSDK.new({
  "apikey" => ENV["MEMESIO_CONTENT_CREATION_APIKEY"],
})
```

### 3. Load a publictemplatemediaitem

PublicTemplateMediaItem is nested under slug, so provide the `slug`.

```ruby
begin
  # load returns the bare PublicTemplateMediaItem record (raises on error).
  publictemplatemediaitem = client.PublicTemplateMediaItem.load({ "slug" => "example_slug" })
  puts publictemplatemediaitem
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the bare created Agent record.
created = client.Agent.create({ "name" => "example_name" })

# Update
client.Agent.update({ "id" => "example_id" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  agent = client.Agent.load({ "id" => "example_id" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = MemesioContentCreationSDK.test({
  "entity" => { "agent" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
agent = client.Agent.load({ "id" => "test01" })
puts agent
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = MemesioContentCreationSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MEMESIO_CONTENT_CREATION_TEST_LIVE=TRUE
MEMESIO_CONTENT_CREATION_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### MemesioContentCreationSDK

```ruby
require_relative "MemesioContentCreation_sdk"
client = MemesioContentCreationSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = MemesioContentCreationSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MemesioContentCreationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Agent` | `(data) -> AgentEntity` | Create an Agent entity instance. |
| `AgentInfra` | `(data) -> AgentInfraEntity` | Create an AgentInfra entity instance. |
| `AiCaption` | `(data) -> AiCaptionEntity` | Create an AiCaption entity instance. |
| `AiJob` | `(data) -> AiJobEntity` | Create an AiJob entity instance. |
| `AiMemeGenerationSucceeded` | `(data) -> AiMemeGenerationSucceededEntity` | Create an AiMemeGenerationSucceeded entity instance. |
| `AiProvider` | `(data) -> AiProviderEntity` | Create an AiProvider entity instance. |
| `Analytics` | `(data) -> AnalyticsEntity` | Create an Analytics entity instance. |
| `Auth` | `(data) -> AuthEntity` | Create an Auth entity instance. |
| `Billing` | `(data) -> BillingEntity` | Create a Billing entity instance. |
| `Collaboration` | `(data) -> CollaborationEntity` | Create a Collaboration entity instance. |
| `Compliance` | `(data) -> ComplianceEntity` | Create a Compliance entity instance. |
| `CreateMeme` | `(data) -> CreateMemeEntity` | Create a CreateMeme entity instance. |
| `DeveloperApi` | `(data) -> DeveloperApiEntity` | Create a DeveloperApi entity instance. |
| `FreeCaptionMemeSuccess` | `(data) -> FreeCaptionMemeSuccessEntity` | Create a FreeCaptionMemeSuccess entity instance. |
| `FreeTemplateSearch` | `(data) -> FreeTemplateSearchEntity` | Create a FreeTemplateSearch entity instance. |
| `Generate` | `(data) -> GenerateEntity` | Create a Generate entity instance. |
| `Growth` | `(data) -> GrowthEntity` | Create a Growth entity instance. |
| `ListMeme` | `(data) -> ListMemeEntity` | Create a ListMeme entity instance. |
| `Media` | `(data) -> MediaEntity` | Create a Media entity instance. |
| `Meme` | `(data) -> MemeEntity` | Create a Meme entity instance. |
| `PublicTemplateMediaItem` | `(data) -> PublicTemplateMediaItemEntity` | Create a PublicTemplateMediaItem entity instance. |
| `StandaloneAgentBootstrap` | `(data) -> StandaloneAgentBootstrapEntity` | Create a StandaloneAgentBootstrap entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `TemplateSearch` | `(data) -> TemplateSearchEntity` | Create a TemplateSearch entity instance. |
| `TrendAlert` | `(data) -> TrendAlertEntity` | Create a TrendAlert entity instance. |
| `UploadCaptionMemeSuccess` | `(data) -> UploadCaptionMemeSuccessEntity` | Create an UploadCaptionMemeSuccess entity instance. |
| `Video` | `(data) -> VideoEntity` | Create a Video entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `MemesioContentCreationError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `agent = client.Agent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `locale` | `String` |  |
| `name` | `String` |  |
| `slug` | `String` |  |
| `status` | `String` |  |
| `style_preset` | `String` |  |
| `system_prompt` | `String` |  |
| `watermark_text` | `String` |  |
| `website_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Agent record (raises on error).
agent = client.Agent.load({ "id" => "agent_id" })
```

#### Example: Create

```ruby
agent = client.Agent.create({
  "name" => "example_name", # String
})
```


### AgentInfra

Create an instance: `agent_infra = client.AgentInfra`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `chat_id` | `String` |  |
| `meme_slug` | `String` |  |
| `metadata` | `Hash` |  |
| `payout_reference` | `String` |  |
| `payout_status` | `String` |  |
| `phone_or_chat_id` | `String` |  |
| `prompt` | `String` |  |
| `proof` | `Hash` |  |
| `quota_boost_per_day` | `Integer` |  |
| `scope` | `Array` |  |
| `user_id` | `String` |  |
| `week_start` | `String` |  |

#### Example: Load

```ruby
# load returns the bare AgentInfra record (raises on error).
agent_infra = client.AgentInfra.load()
```

#### Example: Create

```ruby
agent_infra = client.AgentInfra.create({
})
```


### AiCaption

Create an instance: `ai_caption = client.AiCaption`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_term` | `Array` |  |
| `canvas_text` | `Array` |  |
| `caption_count` | `Integer` |  |
| `caption_set` | `Array` |  |
| `entity` | `Array` |  |
| `fallback_used` | `Boolean` |  |
| `generation_strategy` | `String` |  |
| `locale` | `String` |  |
| `meme_id` | `String` |  |
| `meme_slug` | `String` |  |
| `name` | `String` |  |
| `ok` | `Boolean` |  |
| `option_count` | `Integer` |  |
| `owner_token` | `String` |  |
| `provider_id` | `String` |  |
| `reference_caption` | `Array` |  |
| `rewrite_note` | `String` |  |
| `scene_summary` | `String` |  |
| `template_description` | `String` |  |
| `template_name` | `String` |  |
| `template_tag` | `Array` |  |
| `tone` | `String` |  |
| `tone_cue` | `Array` |  |
| `trend_keyword` | `Array` |  |
| `trend_reference` | `Array` |  |
| `trend_signal` | `Array` |  |
| `variation_offset` | `Integer` |  |
| `voice_rule` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare AiCaption record (raises on error).
ai_caption = client.AiCaption.load()
```

#### Example: Create

```ruby
ai_caption = client.AiCaption.create({
  "canvas_text" => [], # Array
  "name" => "example_name", # String
  "tone" => "example_tone", # String
})
```


### AiJob

Create an instance: `ai_job = client.AiJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `actor_id` | `String` |  |
| `after_state` | `Hash` |  |
| `attempt` | `Integer` |  |
| `before_state` | `Hash` |  |
| `brush_edit` | `Array` |  |
| `capability` | `String` |  |
| `celebrity_confidence` | `Float` |  |
| `consent_attested` | `Boolean` |  |
| `created_at` | `String` |  |
| `detected_face_count` | `Float` |  |
| `edge_refinement` | `Float` |  |
| `estimated_cost_usd` | `Float` |  |
| `frame_time_m` | `Float` |  |
| `height` | `Float` |  |
| `id` | `String` |  |
| `input` | `Hash` |  |
| `layer_id` | `String` |  |
| `layer_type` | `String` |  |
| `max_attempt` | `Integer` |  |
| `max_face` | `Float` |  |
| `media_type` | `String` |  |
| `metadata` | `Hash` |  |
| `nsfw_score` | `Float` |  |
| `output` | `Hash` |  |
| `project_id` | `String` |  |
| `provider_id` | `String` |  |
| `reason` | `String` |  |
| `run_after_m` | `Integer` |  |
| `source_asset_url` | `String` |  |
| `source_face_index` | `Float` |  |
| `source_image_url` | `String` |  |
| `status` | `String` |  |
| `target_asset_url` | `String` |  |
| `target_face_index` | `Float` |  |
| `timeout_m` | `Integer` |  |
| `trace_id` | `String` |  |
| `updated_at` | `String` |  |
| `version_id` | `String` |  |
| `width` | `Float` |  |
| `worker_id` | `String` |  |
| `workspace_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare AiJob record (raises on error).
ai_job = client.AiJob.load({ "id" => "ai_job_id" })
```

#### Example: Create

```ruby
ai_job = client.AiJob.create({
})
```


### AiMemeGenerationSucceeded

Create an instance: `ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_heuristic_fallback` | `Boolean` |  |
| `caption` | `Array` |  |
| `caption_source` | `String` |  |
| `correlation_id` | `String` |  |
| `degraded_from_async` | `Boolean` |  |
| `editable_caption` | `Array` |  |
| `flow` | `String` |  |
| `image_url` | `String` |  |
| `mode` | `String` |  |
| `ok` | `Boolean` |  |
| `preferred_provider_id` | `String` |  |
| `prompt` | `String` |  |
| `rewrite_note` | `String` |  |
| `run_id` | `String` |  |
| `status` | `String` |  |
| `template_id` | `String` |  |
| `tone` | `String` |  |
| `tone_cue` | `Array` |  |
| `variant` | `Array` |  |
| `variant_count` | `Integer` |  |
| `workspace_id` | `String` |  |

#### Example: Create

```ruby
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded.create({
  "flow" => "example_flow", # String
  "mode" => "example_mode", # String
  "ok" => true, # Boolean
  "prompt" => "example_prompt", # String
  "status" => "example_status", # String
  "variant" => [], # Array
  "variant_count" => 1, # Integer
})
```


### AiProvider

Create an instance: `ai_provider = client.AiProvider`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `String` |  |
| `correlation_id` | `String` |  |
| `limit` | `Float` |  |
| `mapping_mode` | `String` |  |
| `max_slot` | `Integer` |  |
| `prompt` | `String` |  |
| `source_image_url` | `String` |  |
| `text` | `Array` |  |
| `trend_signal` | `Array` |  |
| `workspace_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare AiProvider record (raises on error).
ai_provider = client.AiProvider.load()
```

#### Example: Create

```ruby
ai_provider = client.AiProvider.create({
  "prompt" => "example_prompt", # String
  "source_image_url" => "example_source_image_url", # String
})
```


### Analytics

Create an instance: `analytics = client.Analytics`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Analytics record (raises on error).
analytics = client.Analytics.load()
```


### Auth

Create an instance: `auth = client.Auth`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `String` |  |
| `email` | `String` |  |
| `password` | `String` |  |

#### Example: Create

```ruby
auth = client.Auth.create({
  "email" => "example_email", # String
  "password" => "example_password", # String
})
```


### Billing

Create an instance: `billing = client.Billing`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Billing record (raises on error).
billing = client.Billing.load()
```


### Collaboration

Create an instance: `collaboration = client.Collaboration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `String` |  |
| `message` | `String` |  |
| `project_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Collaboration record (raises on error).
collaboration = client.Collaboration.load()
```

#### Example: Create

```ruby
collaboration = client.Collaboration.create({
  "message" => "example_message", # String
  "project_id" => "example_project_id", # String
})
```


### Compliance

Create an instance: `compliance = client.Compliance`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Compliance record (raises on error).
compliance = client.Compliance.load()
```


### CreateMeme

Create an instance: `create_meme = client.CreateMeme`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canva` | `Hash` |  |
| `caption` | `Array` |  |
| `generation_run_id` | `Object` |  |
| `generation_variant_id` | `Object` |  |
| `image_data_url` | `String` |  |
| `overlay` | `Array` |  |
| `source_image_url` | `String` |  |
| `template_slug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Create

```ruby
create_meme = client.CreateMeme.create({
  "canva" => {}, # Hash
  "caption" => [], # Array
  "image_data_url" => "example_image_data_url", # String
  "source_image_url" => "example_source_image_url", # String
  "watermark" => {}, # Hash
})
```


### DeveloperApi

Create an instance: `developer_api = client.DeveloperApi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit` | `Float` |  |
| `prompt` | `String` |  |
| `trend_signal` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare DeveloperApi record (raises on error).
developer_api = client.DeveloperApi.load()
```

#### Example: Create

```ruby
developer_api = client.DeveloperApi.create({
  "prompt" => "example_prompt", # String
})
```


### FreeCaptionMemeSuccess

Create an instance: `free_caption_meme_success = client.FreeCaptionMemeSuccess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Array` |  |
| `template_slug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Create

```ruby
free_caption_meme_success = client.FreeCaptionMemeSuccess.create({
  "caption" => [], # Array
  "template_slug" => "example_template_slug", # String
})
```


### FreeTemplateSearch

Create an instance: `free_template_search = client.FreeTemplateSearch`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `Boolean` |  |
| `asset_byte` | `Object` |  |
| `asset_content_type` | `String` |  |
| `box_count` | `Integer` |  |
| `caption` | `Array` |  |
| `caption_count` | `Integer` |  |
| `description` | `String` |  |
| `duration_m` | `Object` |  |
| `example_image_url` | `Object` |  |
| `frame_count` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `image_url` | `String` |  |
| `media_type` | `String` |  |
| `name` | `String` |  |
| `poster_image_url` | `String` |  |
| `quality_status` | `String` |  |
| `slug` | `String` |  |
| `source_template_id` | `Object` |  |
| `source_url` | `String` |  |
| `tag` | `Array` |  |
| `width` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of FreeTemplateSearch records (raises on error).
free_template_searchs = client.FreeTemplateSearch.list
```


### Generate

Create an instance: `generate = client.Generate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Array` |  |
| `data` | `Hash` |  |
| `duration_m` | `Integer` |  |
| `fps` | `Integer` |  |
| `gif_slug` | `String` |  |
| `ok` | `Boolean` |  |
| `return_base64` | `Boolean` |  |
| `start_m` | `Integer` |  |
| `tag` | `Array` |  |
| `title` | `String` |  |
| `width_px` | `Integer` |  |

#### Example: Create

```ruby
generate = client.Generate.create({
  "data" => {}, # Hash
  "ok" => true, # Boolean
})
```


### Growth

Create an instance: `growth = client.Growth`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `action` | `String` |  |
| `actor_id` | `String` |  |
| `caption` | `String` |  |
| `code` | `String` |  |
| `external_account_id` | `String` |  |
| `handle` | `String` |  |
| `limit` | `Integer` |  |
| `log_exposure` | `Boolean` |  |
| `meme_slug` | `String` |  |
| `now` | `String` |  |
| `platform` | `String` |  |
| `profile` | `Array` |  |
| `share_slug` | `String` |  |
| `surface` | `String` |  |
| `week_start` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Growth record (raises on error).
growth = client.Growth.load()
```

#### Example: Create

```ruby
growth = client.Growth.create({
  "action" => "example_action", # String
})
```


### ListMeme

Create an instance: `list_meme = client.ListMeme`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `String` |  |
| `canonical_image_url` | `String` |  |
| `created_at` | `String` |  |
| `image_url` | `String` |  |
| `nsfw_status` | `String` |  |
| `share_slug` | `String` |  |
| `share_url` | `String` |  |
| `share_view` | `Integer` |  |
| `slug` | `String` |  |
| `tag` | `Array` |  |
| `template_slug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListMeme records (raises on error).
list_memes = client.ListMeme.list
```


### Media

Create an instance: `media = client.Media`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `content_type` | `String` |  |
| `expires_in_second` | `Integer` |  |
| `owner_token` | `String` |  |
| `path` | `String` |  |
| `prefix` | `String` |  |

#### Example: Create

```ruby
media = client.Media.create({
  "action" => "example_action", # String
})
```


### Meme

Create an instance: `meme = client.Meme`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `String` |  |
| `canonical_image_url` | `String` |  |
| `canva` | `Hash` |  |
| `caption` | `Array` |  |
| `created_at` | `String` |  |
| `image_url` | `String` |  |
| `nsfw_status` | `String` |  |
| `overlay` | `Array` |  |
| `share_slug` | `String` |  |
| `share_url` | `String` |  |
| `share_view` | `Integer` |  |
| `slug` | `String` |  |
| `source_image_url` | `String` |  |
| `tag` | `Array` |  |
| `template_slug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Meme record (raises on error).
meme = client.Meme.load({ "id" => "meme_id" })
```


### PublicTemplateMediaItem

Create an instance: `public_template_media_item = client.PublicTemplateMediaItem`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `Boolean` |  |
| `asset_byte` | `Object` |  |
| `asset_content_type` | `String` |  |
| `box_count` | `Integer` |  |
| `caption` | `Array` |  |
| `caption_count` | `Integer` |  |
| `category` | `Array` |  |
| `description` | `String` |  |
| `duration_m` | `Object` |  |
| `example_image_url` | `Object` |  |
| `frame_count` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `image_url` | `String` |  |
| `media_type` | `String` |  |
| `name` | `String` |  |
| `poster_image_url` | `String` |  |
| `preview_image_url` | `String` |  |
| `quality_status` | `String` |  |
| `slug` | `String` |  |
| `source_template_id` | `Object` |  |
| `source_url` | `String` |  |
| `tag` | `Array` |  |
| `width` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare PublicTemplateMediaItem record (raises on error).
public_template_media_item = client.PublicTemplateMediaItem.load({ "slug" => "slug" })
```


### StandaloneAgentBootstrap

Create an instance: `standalone_agent_bootstrap = client.StandaloneAgentBootstrap`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `handle` | `String` |  |
| `locale` | `String` |  |
| `name` | `String` |  |
| `style_preset` | `String` |  |
| `system_prompt` | `String` |  |
| `watermark_text` | `String` |  |
| `website_url` | `String` |  |

#### Example: Create

```ruby
standalone_agent_bootstrap = client.StandaloneAgentBootstrap.create({
  "handle" => "example_handle", # String
  "name" => "example_name", # String
})
```


### Template

Create an instance: `template = client.Template`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `Boolean` |  |
| `asset_byte` | `Object` |  |
| `asset_content_type` | `String` |  |
| `box_count` | `Integer` |  |
| `caption` | `Array` |  |
| `caption_count` | `Integer` |  |
| `category` | `Array` |  |
| `description` | `String` |  |
| `duration_m` | `Integer` |  |
| `example_image_url` | `Object` |  |
| `fps` | `Integer` |  |
| `frame_count` | `Object` |  |
| `gif_slug` | `String` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `image_url` | `String` |  |
| `media_type` | `String` |  |
| `name` | `String` |  |
| `poster_image_url` | `String` |  |
| `preview_image_url` | `String` |  |
| `quality_status` | `String` |  |
| `return_base64` | `Boolean` |  |
| `slug` | `String` |  |
| `source_template_id` | `Object` |  |
| `source_url` | `String` |  |
| `start_m` | `Integer` |  |
| `tag` | `Array` |  |
| `title` | `String` |  |
| `width` | `Object` |  |
| `width_px` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of Template records (raises on error).
templates = client.Template.list
```

#### Example: Create

```ruby
template = client.Template.create({
  "slug" => "example_slug", # String
})
```


### TemplateSearch

Create an instance: `template_search = client.TemplateSearch`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `Boolean` |  |
| `asset_byte` | `Object` |  |
| `asset_content_type` | `String` |  |
| `box_count` | `Integer` |  |
| `caption` | `Array` |  |
| `caption_count` | `Integer` |  |
| `category` | `Array` |  |
| `description` | `String` |  |
| `duration_m` | `Object` |  |
| `example_image_url` | `Object` |  |
| `frame_count` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `image_url` | `String` |  |
| `media_type` | `String` |  |
| `name` | `String` |  |
| `poster_image_url` | `String` |  |
| `preview_image_url` | `String` |  |
| `quality_status` | `String` |  |
| `slug` | `String` |  |
| `source_template_id` | `Object` |  |
| `source_url` | `String` |  |
| `tag` | `Array` |  |
| `width` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of TemplateSearch records (raises on error).
template_searchs = client.TemplateSearch.list
```


### TrendAlert

Create an instance: `trend_alert = client.TrendAlert`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `actor_id` | `String` |  |
| `aggressiveness` | `Float` |  |
| `alert_id` | `String` |  |
| `channel` | `Array` |  |
| `deliver_all_alert` | `Boolean` |  |
| `event` | `Hash` |  |
| `explicit_niche` | `Array` |  |
| `explicit_region` | `Array` |  |
| `explicit_source` | `Array` |  |
| `explicit_topic` | `Array` |  |
| `follower_count` | `Integer` |  |
| `niche` | `String` |  |
| `region` | `String` |  |
| `source` | `String` |  |
| `topic` | `String` |  |

#### Example: Load

```ruby
# load returns the bare TrendAlert record (raises on error).
trend_alert = client.TrendAlert.load()
```

#### Example: Create

```ruby
trend_alert = client.TrendAlert.create({
  "action" => "example_action", # String
  "actor_id" => "example_actor_id", # String
  "alert_id" => "example_alert_id", # String
  "topic" => "example_topic", # String
})
```


### UploadCaptionMemeSuccess

Create an instance: `upload_caption_meme_success = client.UploadCaptionMemeSuccess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
upload_caption_meme_success = client.UploadCaptionMemeSuccess.create({
})
```


### Video

Create an instance: `video = client.Video`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `asset_id` | `String` |  |
| `at_m` | `Float` |  |
| `audio_asset_id` | `String` |  |
| `beat_offset_m` | `Integer` |  |
| `bitrate_kbp` | `Float` |  |
| `bpm` | `Integer` |  |
| `cancelled` | `Boolean` |  |
| `container` | `String` |  |
| `duration_m` | `Float` |  |
| `duration_second` | `Float` |  |
| `easing` | `String` |  |
| `error` | `String` |  |
| `frame_rate` | `Float` |  |
| `input_format` | `String` |  |
| `intensity` | `Float` |  |
| `job_id` | `String` |  |
| `locale` | `String` |  |
| `mime_type` | `String` |  |
| `name` | `String` |  |
| `offset_m` | `Float` |  |
| `output_preset_id` | `String` |  |
| `output_url` | `String` |  |
| `plan_tier` | `String` |  |
| `preset_id` | `String` |  |
| `progress_percent` | `Float` |  |
| `project` | `Hash` |  |
| `project_id` | `String` |  |
| `property` | `String` |  |
| `source_device_id` | `String` |  |
| `source_url` | `String` |  |
| `stage` | `String` |  |
| `start_m` | `Float` |  |
| `style_preset_id` | `String` |  |
| `sync_to_beat_grid` | `Boolean` |  |
| `tone` | `String` |  |
| `track_id` | `String` |  |
| `transcript` | `String` |  |
| `trend_keyword` | `Array` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |
| `value` | `Float` |  |
| `watermark_enabled` | `Boolean` |  |
| `watermark_text` | `String` |  |
| `worker_id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Video record (raises on error).
video = client.Video.load()
```

#### Example: Create

```ruby
video = client.Video.create({
  "duration_second" => 1, # Float
  "input_format" => "example_input_format", # String
  "mime_type" => "example_mime_type", # String
  "output_preset_id" => "example_output_preset_id", # String
  "plan_tier" => "example_plan_tier", # String
  "preset_id" => "example_preset_id", # String
})
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── MemesioContentCreation_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`MemesioContentCreation_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
agent = client.Agent
agent.load({ "id" => "example_id" })

# agent.data_get now returns the agent data from the last load
# agent.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
