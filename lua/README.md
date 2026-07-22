# MemesioContentCreation Lua SDK



The Lua SDK for the MemesioContentCreation API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Agent()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("memesio-content-creation_sdk")

local client = sdk.new({
  apikey = os.getenv("MEMESIO_CONTENT_CREATION_APIKEY"),
})
```

### 3. Load a publictemplatemediaitem

PublicTemplateMediaItem is nested under slug, so provide the `slug`.

```lua
local publictemplatemediaitem, err = client:PublicTemplateMediaItem():load({ slug = "example_slug" })
if err then error(err) end
print(publictemplatemediaitem)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Agent():create({ name = "example_name" })
if err then error(err) end

-- Update
client:Agent():update({ id = "example_id" })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local agent, err = client:Agent():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Agent():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### MemesioContentCreationSDK

```lua
local sdk = require("memesio-content-creation_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MemesioContentCreationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local agent, err = client:Agent():load({ id = "example_id" })
    if err then error(err) end
    -- agent is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local agent = client:Agent(nil)`

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

```lua
local agent, err = client:Agent():load({ id = "agent_id" })
```

#### Example: Create

```lua
local agent, err = client:Agent():create({
  name = "example_name", -- string
})
```


### AgentInfra

Create an instance: `local agent_infra = client:AgentInfra(nil)`

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
| `metadata` | `table` |  |
| `payout_reference` | `string` |  |
| `payout_status` | `string` |  |
| `phone_or_chat_id` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `table` |  |
| `quota_boost_per_day` | `number` |  |
| `scope` | `table` |  |
| `user_id` | `string` |  |
| `week_start` | `string` |  |

#### Example: Load

```lua
local agent_infra, err = client:AgentInfra():load()
```

#### Example: Create

```lua
local agent_infra, err = client:AgentInfra():create({
})
```


### AiCaption

Create an instance: `local ai_caption = client:AiCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_term` | `table` |  |
| `canvas_text` | `table` |  |
| `caption_count` | `number` |  |
| `caption_set` | `table` |  |
| `entity` | `table` |  |
| `fallback_used` | `boolean` |  |
| `generation_strategy` | `string` |  |
| `locale` | `string` |  |
| `meme_id` | `string` |  |
| `meme_slug` | `string` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `option_count` | `number` |  |
| `owner_token` | `string` |  |
| `provider_id` | `string` |  |
| `reference_caption` | `table` |  |
| `rewrite_note` | `string` |  |
| `scene_summary` | `string` |  |
| `template_description` | `string` |  |
| `template_name` | `string` |  |
| `template_tag` | `table` |  |
| `tone` | `string` |  |
| `tone_cue` | `table` |  |
| `trend_keyword` | `table` |  |
| `trend_reference` | `table` |  |
| `trend_signal` | `table` |  |
| `variation_offset` | `number` |  |
| `voice_rule` | `table` |  |

#### Example: Load

```lua
local ai_caption, err = client:AiCaption():load()
```

#### Example: Create

```lua
local ai_caption, err = client:AiCaption():create({
  canvas_text = {}, -- table
  name = "example_name", -- string
  tone = "example_tone", -- string
})
```


### AiJob

Create an instance: `local ai_job = client:AiJob(nil)`

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
| `after_state` | `table` |  |
| `attempt` | `number` |  |
| `before_state` | `table` |  |
| `brush_edit` | `table` |  |
| `capability` | `string` |  |
| `celebrity_confidence` | `number` |  |
| `consent_attested` | `boolean` |  |
| `created_at` | `string` |  |
| `detected_face_count` | `number` |  |
| `edge_refinement` | `number` |  |
| `estimated_cost_usd` | `number` |  |
| `frame_time_m` | `number` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `input` | `table` |  |
| `layer_id` | `string` |  |
| `layer_type` | `string` |  |
| `max_attempt` | `number` |  |
| `max_face` | `number` |  |
| `media_type` | `string` |  |
| `metadata` | `table` |  |
| `nsfw_score` | `number` |  |
| `output` | `table` |  |
| `project_id` | `string` |  |
| `provider_id` | `string` |  |
| `reason` | `string` |  |
| `run_after_m` | `number` |  |
| `source_asset_url` | `string` |  |
| `source_face_index` | `number` |  |
| `source_image_url` | `string` |  |
| `status` | `string` |  |
| `target_asset_url` | `string` |  |
| `target_face_index` | `number` |  |
| `timeout_m` | `number` |  |
| `trace_id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `string` |  |
| `width` | `number` |  |
| `worker_id` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```lua
local ai_job, err = client:AiJob():load({ id = "ai_job_id" })
```

#### Example: Create

```lua
local ai_job, err = client:AiJob():create({
})
```


### AiMemeGenerationSucceeded

Create an instance: `local ai_meme_generation_succeeded = client:AiMemeGenerationSucceeded(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_heuristic_fallback` | `boolean` |  |
| `caption` | `table` |  |
| `caption_source` | `string` |  |
| `correlation_id` | `string` |  |
| `degraded_from_async` | `boolean` |  |
| `editable_caption` | `table` |  |
| `flow` | `string` |  |
| `image_url` | `string` |  |
| `mode` | `string` |  |
| `ok` | `boolean` |  |
| `preferred_provider_id` | `string` |  |
| `prompt` | `string` |  |
| `rewrite_note` | `string` |  |
| `run_id` | `string` |  |
| `status` | `string` |  |
| `template_id` | `string` |  |
| `tone` | `string` |  |
| `tone_cue` | `table` |  |
| `variant` | `table` |  |
| `variant_count` | `number` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```lua
local ai_meme_generation_succeeded, err = client:AiMemeGenerationSucceeded():create({
  flow = "example_flow", -- string
  mode = "example_mode", -- string
  ok = true, -- boolean
  prompt = "example_prompt", -- string
  status = "example_status", -- string
  variant = {}, -- table
  variant_count = 1, -- number
})
```


### AiProvider

Create an instance: `local ai_provider = client:AiProvider(nil)`

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
| `limit` | `number` |  |
| `mapping_mode` | `string` |  |
| `max_slot` | `number` |  |
| `prompt` | `string` |  |
| `source_image_url` | `string` |  |
| `text` | `table` |  |
| `trend_signal` | `table` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```lua
local ai_provider, err = client:AiProvider():load()
```

#### Example: Create

```lua
local ai_provider, err = client:AiProvider():create({
  prompt = "example_prompt", -- string
  source_image_url = "example_source_image_url", -- string
})
```


### Analytics

Create an instance: `local analytics = client:Analytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local analytics, err = client:Analytics():load()
```


### Auth

Create an instance: `local auth = client:Auth(nil)`

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

```lua
local auth, err = client:Auth():create({
  email = "example_email", -- string
  password = "example_password", -- string
})
```


### Billing

Create an instance: `local billing = client:Billing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local billing, err = client:Billing():load()
```


### Collaboration

Create an instance: `local collaboration = client:Collaboration(nil)`

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

```lua
local collaboration, err = client:Collaboration():load()
```

#### Example: Create

```lua
local collaboration, err = client:Collaboration():create({
  message = "example_message", -- string
  project_id = "example_project_id", -- string
})
```


### Compliance

Create an instance: `local compliance = client:Compliance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local compliance, err = client:Compliance():load()
```


### CreateMeme

Create an instance: `local create_meme = client:CreateMeme(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canva` | `table` |  |
| `caption` | `table` |  |
| `generation_run_id` | `any` |  |
| `generation_variant_id` | `any` |  |
| `image_data_url` | `string` |  |
| `overlay` | `table` |  |
| `source_image_url` | `string` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `table` |  |

#### Example: Create

```lua
local create_meme, err = client:CreateMeme():create({
  canva = {}, -- table
  caption = {}, -- table
  image_data_url = "example_image_data_url", -- string
  source_image_url = "example_source_image_url", -- string
  watermark = {}, -- table
})
```


### DeveloperApi

Create an instance: `local developer_api = client:DeveloperApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit` | `number` |  |
| `prompt` | `string` |  |
| `trend_signal` | `table` |  |

#### Example: Load

```lua
local developer_api, err = client:DeveloperApi():load()
```

#### Example: Create

```lua
local developer_api, err = client:DeveloperApi():create({
  prompt = "example_prompt", -- string
})
```


### FreeCaptionMemeSuccess

Create an instance: `local free_caption_meme_success = client:FreeCaptionMemeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `table` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `table` |  |

#### Example: Create

```lua
local free_caption_meme_success, err = client:FreeCaptionMemeSuccess():create({
  caption = {}, -- table
  template_slug = "example_template_slug", -- string
})
```


### FreeTemplateSearch

Create an instance: `local free_template_search = client:FreeTemplateSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `table` |  |
| `caption_count` | `number` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `table` |  |
| `width` | `any` |  |

#### Example: List

```lua
local free_template_searchs, err = client:FreeTemplateSearch():list()
```


### Generate

Create an instance: `local generate = client:Generate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `table` |  |
| `data` | `table` |  |
| `duration_m` | `number` |  |
| `fps` | `number` |  |
| `gif_slug` | `string` |  |
| `ok` | `boolean` |  |
| `return_base64` | `boolean` |  |
| `start_m` | `number` |  |
| `tag` | `table` |  |
| `title` | `string` |  |
| `width_px` | `number` |  |

#### Example: Create

```lua
local generate, err = client:Generate():create({
  data = {}, -- table
  ok = true, -- boolean
})
```


### Growth

Create an instance: `local growth = client:Growth(nil)`

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
| `limit` | `number` |  |
| `log_exposure` | `boolean` |  |
| `meme_slug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profile` | `table` |  |
| `share_slug` | `string` |  |
| `surface` | `string` |  |
| `week_start` | `string` |  |

#### Example: Load

```lua
local growth, err = client:Growth():load()
```

#### Example: Create

```lua
local growth, err = client:Growth():create({
  action = "example_action", -- string
})
```


### ListMeme

Create an instance: `local list_meme = client:ListMeme(nil)`

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
| `share_view` | `number` |  |
| `slug` | `string` |  |
| `tag` | `table` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |

#### Example: List

```lua
local list_memes, err = client:ListMeme():list()
```


### Media

Create an instance: `local media = client:Media(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `content_type` | `string` |  |
| `expires_in_second` | `number` |  |
| `owner_token` | `string` |  |
| `path` | `string` |  |
| `prefix` | `string` |  |

#### Example: Create

```lua
local media, err = client:Media():create({
  action = "example_action", -- string
})
```


### Meme

Create an instance: `local meme = client:Meme(nil)`

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
| `canva` | `table` |  |
| `caption` | `table` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `overlay` | `table` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `number` |  |
| `slug` | `string` |  |
| `source_image_url` | `string` |  |
| `tag` | `table` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `table` |  |

#### Example: Load

```lua
local meme, err = client:Meme():load({ id = "meme_id" })
```


### PublicTemplateMediaItem

Create an instance: `local public_template_media_item = client:PublicTemplateMediaItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `table` |  |
| `caption_count` | `number` |  |
| `category` | `table` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `table` |  |
| `width` | `any` |  |

#### Example: Load

```lua
local public_template_media_item, err = client:PublicTemplateMediaItem():load({ slug = "slug" })
```


### StandaloneAgentBootstrap

Create an instance: `local standalone_agent_bootstrap = client:StandaloneAgentBootstrap(nil)`

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

```lua
local standalone_agent_bootstrap, err = client:StandaloneAgentBootstrap():create({
  handle = "example_handle", -- string
  name = "example_name", -- string
})
```


### Template

Create an instance: `local template = client:Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `table` |  |
| `caption_count` | `number` |  |
| `category` | `table` |  |
| `description` | `string` |  |
| `duration_m` | `number` |  |
| `example_image_url` | `any` |  |
| `fps` | `number` |  |
| `frame_count` | `any` |  |
| `gif_slug` | `string` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `return_base64` | `boolean` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `start_m` | `number` |  |
| `tag` | `table` |  |
| `title` | `string` |  |
| `width` | `any` |  |
| `width_px` | `number` |  |

#### Example: List

```lua
local templates, err = client:Template():list()
```

#### Example: Create

```lua
local template, err = client:Template():create({
  slug = "example_slug", -- string
})
```


### TemplateSearch

Create an instance: `local template_search = client:TemplateSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `table` |  |
| `caption_count` | `number` |  |
| `category` | `table` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `table` |  |
| `width` | `any` |  |

#### Example: List

```lua
local template_searchs, err = client:TemplateSearch():list()
```


### TrendAlert

Create an instance: `local trend_alert = client:TrendAlert(nil)`

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
| `aggressiveness` | `number` |  |
| `alert_id` | `string` |  |
| `channel` | `table` |  |
| `deliver_all_alert` | `boolean` |  |
| `event` | `table` |  |
| `explicit_niche` | `table` |  |
| `explicit_region` | `table` |  |
| `explicit_source` | `table` |  |
| `explicit_topic` | `table` |  |
| `follower_count` | `number` |  |
| `niche` | `string` |  |
| `region` | `string` |  |
| `source` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```lua
local trend_alert, err = client:TrendAlert():load()
```

#### Example: Create

```lua
local trend_alert, err = client:TrendAlert():create({
  action = "example_action", -- string
  actor_id = "example_actor_id", -- string
  alert_id = "example_alert_id", -- string
  topic = "example_topic", -- string
})
```


### UploadCaptionMemeSuccess

Create an instance: `local upload_caption_meme_success = client:UploadCaptionMemeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local upload_caption_meme_success, err = client:UploadCaptionMemeSuccess():create({
})
```


### Video

Create an instance: `local video = client:Video(nil)`

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
| `at_m` | `number` |  |
| `audio_asset_id` | `string` |  |
| `beat_offset_m` | `number` |  |
| `bitrate_kbp` | `number` |  |
| `bpm` | `number` |  |
| `cancelled` | `boolean` |  |
| `container` | `string` |  |
| `duration_m` | `number` |  |
| `duration_second` | `number` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frame_rate` | `number` |  |
| `input_format` | `string` |  |
| `intensity` | `number` |  |
| `job_id` | `string` |  |
| `locale` | `string` |  |
| `mime_type` | `string` |  |
| `name` | `string` |  |
| `offset_m` | `number` |  |
| `output_preset_id` | `string` |  |
| `output_url` | `string` |  |
| `plan_tier` | `string` |  |
| `preset_id` | `string` |  |
| `progress_percent` | `number` |  |
| `project` | `table` |  |
| `project_id` | `string` |  |
| `property` | `string` |  |
| `source_device_id` | `string` |  |
| `source_url` | `string` |  |
| `stage` | `string` |  |
| `start_m` | `number` |  |
| `style_preset_id` | `string` |  |
| `sync_to_beat_grid` | `boolean` |  |
| `tone` | `string` |  |
| `track_id` | `string` |  |
| `transcript` | `string` |  |
| `trend_keyword` | `table` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `value` | `number` |  |
| `watermark_enabled` | `boolean` |  |
| `watermark_text` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Load

```lua
local video, err = client:Video():load()
```

#### Example: Create

```lua
local video, err = client:Video():create({
  duration_second = 1, -- number
  input_format = "example_input_format", -- string
  mime_type = "example_mime_type", -- string
  output_preset_id = "example_output_preset_id", -- string
  plan_tier = "example_plan_tier", -- string
  preset_id = "example_preset_id", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── memesio-content-creation_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`memesio-content-creation_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local agent = client:Agent()
agent:load({ id = "example_id" })

-- agent:data_get() now returns the agent data from the last load
-- agent:match_get() returns the last match criteria
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
