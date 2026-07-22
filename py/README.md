# MemesioContentCreation Python SDK



The Python SDK for the MemesioContentCreation API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Agent()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from memesiocontentcreation_sdk import MemesioContentCreationSDK

client = MemesioContentCreationSDK({
    "apikey": os.environ.get("MEMESIO_CONTENT_CREATION_APIKEY"),
})
```

### 3. Load a publictemplatemediaitem

PublicTemplateMediaItem is nested under slug, so provide the `slug`.
`load()` returns the bare record (a `dict`) and raises on error.

```python
try:
    publictemplatemediaitem = client.PublicTemplateMediaItem().load({"slug": "example_slug"})
    print(publictemplatemediaitem)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the bare created record (a dict)
created = client.Agent().create({"name": "example_name"})

# Update
client.Agent().update({"id": "example_id"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    agent = client.Agent().load({"id": "example_id"})
    print(agent)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = MemesioContentCreationSDK.test()

# Entity ops return the bare record and raise on error.
agent = client.Agent().load({"id": "test01"})
# agent contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = MemesioContentCreationSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### MemesioContentCreationSDK

```python
from memesiocontentcreation_sdk import MemesioContentCreationSDK

client = MemesioContentCreationSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = MemesioContentCreationSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### MemesioContentCreationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `agent = client.Agent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `locale` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `status` | `str` |  |
| `style_preset` | `str` |  |
| `system_prompt` | `str` |  |
| `watermark_text` | `str` |  |
| `website_url` | `str` |  |

#### Example: Load

```python
agent = client.Agent().load({"id": "agent_id"})
```

#### Example: Create

```python
agent = client.Agent().create({
    "name": "example_name",  # str
})
```


### AgentInfra

Create an instance: `agent_infra = client.AgentInfra()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `chat_id` | `str` |  |
| `meme_slug` | `str` |  |
| `metadata` | `dict` |  |
| `payout_reference` | `str` |  |
| `payout_status` | `str` |  |
| `phone_or_chat_id` | `str` |  |
| `prompt` | `str` |  |
| `proof` | `dict` |  |
| `quota_boost_per_day` | `int` |  |
| `scope` | `list` |  |
| `user_id` | `str` |  |
| `week_start` | `str` |  |

#### Example: Load

```python
agent_infra = client.AgentInfra().load()
```

#### Example: Create

```python
agent_infra = client.AgentInfra().create({
})
```


### AiCaption

Create an instance: `ai_caption = client.AiCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_term` | `list` |  |
| `canvas_text` | `list` |  |
| `caption_count` | `int` |  |
| `caption_set` | `list` |  |
| `entity` | `list` |  |
| `fallback_used` | `bool` |  |
| `generation_strategy` | `str` |  |
| `locale` | `str` |  |
| `meme_id` | `str` |  |
| `meme_slug` | `str` |  |
| `name` | `str` |  |
| `ok` | `bool` |  |
| `option_count` | `int` |  |
| `owner_token` | `str` |  |
| `provider_id` | `str` |  |
| `reference_caption` | `list` |  |
| `rewrite_note` | `str` |  |
| `scene_summary` | `str` |  |
| `template_description` | `str` |  |
| `template_name` | `str` |  |
| `template_tag` | `list` |  |
| `tone` | `str` |  |
| `tone_cue` | `list` |  |
| `trend_keyword` | `list` |  |
| `trend_reference` | `list` |  |
| `trend_signal` | `list` |  |
| `variation_offset` | `int` |  |
| `voice_rule` | `list` |  |

#### Example: Load

```python
ai_caption = client.AiCaption().load()
```

#### Example: Create

```python
ai_caption = client.AiCaption().create({
    "canvas_text": [],  # list
    "name": "example_name",  # str
    "tone": "example_tone",  # str
})
```


### AiJob

Create an instance: `ai_job = client.AiJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `actor_id` | `str` |  |
| `after_state` | `dict` |  |
| `attempt` | `int` |  |
| `before_state` | `dict` |  |
| `brush_edit` | `list` |  |
| `capability` | `str` |  |
| `celebrity_confidence` | `float` |  |
| `consent_attested` | `bool` |  |
| `created_at` | `str` |  |
| `detected_face_count` | `float` |  |
| `edge_refinement` | `float` |  |
| `estimated_cost_usd` | `float` |  |
| `frame_time_m` | `float` |  |
| `height` | `float` |  |
| `id` | `str` |  |
| `input` | `dict` |  |
| `layer_id` | `str` |  |
| `layer_type` | `str` |  |
| `max_attempt` | `int` |  |
| `max_face` | `float` |  |
| `media_type` | `str` |  |
| `metadata` | `dict` |  |
| `nsfw_score` | `float` |  |
| `output` | `dict` |  |
| `project_id` | `str` |  |
| `provider_id` | `str` |  |
| `reason` | `str` |  |
| `run_after_m` | `int` |  |
| `source_asset_url` | `str` |  |
| `source_face_index` | `float` |  |
| `source_image_url` | `str` |  |
| `status` | `str` |  |
| `target_asset_url` | `str` |  |
| `target_face_index` | `float` |  |
| `timeout_m` | `int` |  |
| `trace_id` | `str` |  |
| `updated_at` | `str` |  |
| `version_id` | `str` |  |
| `width` | `float` |  |
| `worker_id` | `str` |  |
| `workspace_id` | `str` |  |

#### Example: Load

```python
ai_job = client.AiJob().load({"id": "ai_job_id"})
```

#### Example: Create

```python
ai_job = client.AiJob().create({
})
```


### AiMemeGenerationSucceeded

Create an instance: `ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_heuristic_fallback` | `bool` |  |
| `caption` | `list` |  |
| `caption_source` | `str` |  |
| `correlation_id` | `str` |  |
| `degraded_from_async` | `bool` |  |
| `editable_caption` | `list` |  |
| `flow` | `str` |  |
| `image_url` | `str` |  |
| `mode` | `str` |  |
| `ok` | `bool` |  |
| `preferred_provider_id` | `str` |  |
| `prompt` | `str` |  |
| `rewrite_note` | `str` |  |
| `run_id` | `str` |  |
| `status` | `str` |  |
| `template_id` | `str` |  |
| `tone` | `str` |  |
| `tone_cue` | `list` |  |
| `variant` | `list` |  |
| `variant_count` | `int` |  |
| `workspace_id` | `str` |  |

#### Example: Create

```python
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded().create({
    "flow": "example_flow",  # str
    "mode": "example_mode",  # str
    "ok": True,  # bool
    "prompt": "example_prompt",  # str
    "status": "example_status",  # str
    "variant": [],  # list
    "variant_count": 1,  # int
})
```


### AiProvider

Create an instance: `ai_provider = client.AiProvider()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `str` |  |
| `correlation_id` | `str` |  |
| `limit` | `float` |  |
| `mapping_mode` | `str` |  |
| `max_slot` | `int` |  |
| `prompt` | `str` |  |
| `source_image_url` | `str` |  |
| `text` | `list` |  |
| `trend_signal` | `list` |  |
| `workspace_id` | `str` |  |

#### Example: Load

```python
ai_provider = client.AiProvider().load()
```

#### Example: Create

```python
ai_provider = client.AiProvider().create({
    "prompt": "example_prompt",  # str
    "source_image_url": "example_source_image_url",  # str
})
```


### Analytics

Create an instance: `analytics = client.Analytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
analytics = client.Analytics().load()
```


### Auth

Create an instance: `auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` |  |
| `email` | `str` |  |
| `password` | `str` |  |

#### Example: Create

```python
auth = client.Auth().create({
    "email": "example_email",  # str
    "password": "example_password",  # str
})
```


### Billing

Create an instance: `billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
billing = client.Billing().load()
```


### Collaboration

Create an instance: `collaboration = client.Collaboration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `str` |  |
| `message` | `str` |  |
| `project_id` | `str` |  |

#### Example: Load

```python
collaboration = client.Collaboration().load()
```

#### Example: Create

```python
collaboration = client.Collaboration().create({
    "message": "example_message",  # str
    "project_id": "example_project_id",  # str
})
```


### Compliance

Create an instance: `compliance = client.Compliance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
compliance = client.Compliance().load()
```


### CreateMeme

Create an instance: `create_meme = client.CreateMeme()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canva` | `dict` |  |
| `caption` | `list` |  |
| `generation_run_id` | `Any` |  |
| `generation_variant_id` | `Any` |  |
| `image_data_url` | `str` |  |
| `overlay` | `list` |  |
| `source_image_url` | `str` |  |
| `template_slug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |
| `watermark` | `dict` |  |

#### Example: Create

```python
create_meme = client.CreateMeme().create({
    "canva": {},  # dict
    "caption": [],  # list
    "image_data_url": "example_image_data_url",  # str
    "source_image_url": "example_source_image_url",  # str
    "watermark": {},  # dict
})
```


### DeveloperApi

Create an instance: `developer_api = client.DeveloperApi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit` | `float` |  |
| `prompt` | `str` |  |
| `trend_signal` | `list` |  |

#### Example: Load

```python
developer_api = client.DeveloperApi().load()
```

#### Example: Create

```python
developer_api = client.DeveloperApi().create({
    "prompt": "example_prompt",  # str
})
```


### FreeCaptionMemeSuccess

Create an instance: `free_caption_meme_success = client.FreeCaptionMemeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `list` |  |
| `template_slug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |
| `watermark` | `dict` |  |

#### Example: Create

```python
free_caption_meme_success = client.FreeCaptionMemeSuccess().create({
    "caption": [],  # list
    "template_slug": "example_template_slug",  # str
})
```


### FreeTemplateSearch

Create an instance: `free_template_search = client.FreeTemplateSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `Any` |  |
| `asset_content_type` | `str` |  |
| `box_count` | `int` |  |
| `caption` | `list` |  |
| `caption_count` | `int` |  |
| `description` | `str` |  |
| `duration_m` | `Any` |  |
| `example_image_url` | `Any` |  |
| `frame_count` | `Any` |  |
| `height` | `Any` |  |
| `id` | `str` |  |
| `image_url` | `str` |  |
| `media_type` | `str` |  |
| `name` | `str` |  |
| `poster_image_url` | `str` |  |
| `quality_status` | `str` |  |
| `slug` | `str` |  |
| `source_template_id` | `Any` |  |
| `source_url` | `str` |  |
| `tag` | `list` |  |
| `width` | `Any` |  |

#### Example: List

```python
free_template_searchs = client.FreeTemplateSearch().list()
```


### Generate

Create an instance: `generate = client.Generate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `list` |  |
| `data` | `dict` |  |
| `duration_m` | `int` |  |
| `fps` | `int` |  |
| `gif_slug` | `str` |  |
| `ok` | `bool` |  |
| `return_base64` | `bool` |  |
| `start_m` | `int` |  |
| `tag` | `list` |  |
| `title` | `str` |  |
| `width_px` | `int` |  |

#### Example: Create

```python
generate = client.Generate().create({
    "data": {},  # dict
    "ok": True,  # bool
})
```


### Growth

Create an instance: `growth = client.Growth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `action` | `str` |  |
| `actor_id` | `str` |  |
| `caption` | `str` |  |
| `code` | `str` |  |
| `external_account_id` | `str` |  |
| `handle` | `str` |  |
| `limit` | `int` |  |
| `log_exposure` | `bool` |  |
| `meme_slug` | `str` |  |
| `now` | `str` |  |
| `platform` | `str` |  |
| `profile` | `list` |  |
| `share_slug` | `str` |  |
| `surface` | `str` |  |
| `week_start` | `str` |  |

#### Example: Load

```python
growth = client.Growth().load()
```

#### Example: Create

```python
growth = client.Growth().create({
    "action": "example_action",  # str
})
```


### ListMeme

Create an instance: `list_meme = client.ListMeme()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `str` |  |
| `canonical_image_url` | `str` |  |
| `created_at` | `str` |  |
| `image_url` | `str` |  |
| `nsfw_status` | `str` |  |
| `share_slug` | `str` |  |
| `share_url` | `str` |  |
| `share_view` | `int` |  |
| `slug` | `str` |  |
| `tag` | `list` |  |
| `template_slug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |

#### Example: List

```python
list_memes = client.ListMeme().list()
```


### Media

Create an instance: `media = client.Media()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `content_type` | `str` |  |
| `expires_in_second` | `int` |  |
| `owner_token` | `str` |  |
| `path` | `str` |  |
| `prefix` | `str` |  |

#### Example: Create

```python
media = client.Media().create({
    "action": "example_action",  # str
})
```


### Meme

Create an instance: `meme = client.Meme()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_text` | `str` |  |
| `canonical_image_url` | `str` |  |
| `canva` | `dict` |  |
| `caption` | `list` |  |
| `created_at` | `str` |  |
| `image_url` | `str` |  |
| `nsfw_status` | `str` |  |
| `overlay` | `list` |  |
| `share_slug` | `str` |  |
| `share_url` | `str` |  |
| `share_view` | `int` |  |
| `slug` | `str` |  |
| `source_image_url` | `str` |  |
| `tag` | `list` |  |
| `template_slug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |
| `watermark` | `dict` |  |

#### Example: Load

```python
meme = client.Meme().load({"id": "meme_id"})
```


### PublicTemplateMediaItem

Create an instance: `public_template_media_item = client.PublicTemplateMediaItem()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `Any` |  |
| `asset_content_type` | `str` |  |
| `box_count` | `int` |  |
| `caption` | `list` |  |
| `caption_count` | `int` |  |
| `category` | `list` |  |
| `description` | `str` |  |
| `duration_m` | `Any` |  |
| `example_image_url` | `Any` |  |
| `frame_count` | `Any` |  |
| `height` | `Any` |  |
| `id` | `str` |  |
| `image_url` | `str` |  |
| `media_type` | `str` |  |
| `name` | `str` |  |
| `poster_image_url` | `str` |  |
| `preview_image_url` | `str` |  |
| `quality_status` | `str` |  |
| `slug` | `str` |  |
| `source_template_id` | `Any` |  |
| `source_url` | `str` |  |
| `tag` | `list` |  |
| `width` | `Any` |  |

#### Example: Load

```python
public_template_media_item = client.PublicTemplateMediaItem().load({"slug": "slug"})
```


### StandaloneAgentBootstrap

Create an instance: `standalone_agent_bootstrap = client.StandaloneAgentBootstrap()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `handle` | `str` |  |
| `locale` | `str` |  |
| `name` | `str` |  |
| `style_preset` | `str` |  |
| `system_prompt` | `str` |  |
| `watermark_text` | `str` |  |
| `website_url` | `str` |  |

#### Example: Create

```python
standalone_agent_bootstrap = client.StandaloneAgentBootstrap().create({
    "handle": "example_handle",  # str
    "name": "example_name",  # str
})
```


### Template

Create an instance: `template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `Any` |  |
| `asset_content_type` | `str` |  |
| `box_count` | `int` |  |
| `caption` | `list` |  |
| `caption_count` | `int` |  |
| `category` | `list` |  |
| `description` | `str` |  |
| `duration_m` | `int` |  |
| `example_image_url` | `Any` |  |
| `fps` | `int` |  |
| `frame_count` | `Any` |  |
| `gif_slug` | `str` |  |
| `height` | `Any` |  |
| `id` | `str` |  |
| `image_url` | `str` |  |
| `media_type` | `str` |  |
| `name` | `str` |  |
| `poster_image_url` | `str` |  |
| `preview_image_url` | `str` |  |
| `quality_status` | `str` |  |
| `return_base64` | `bool` |  |
| `slug` | `str` |  |
| `source_template_id` | `Any` |  |
| `source_url` | `str` |  |
| `start_m` | `int` |  |
| `tag` | `list` |  |
| `title` | `str` |  |
| `width` | `Any` |  |
| `width_px` | `int` |  |

#### Example: List

```python
templates = client.Template().list()
```

#### Example: Create

```python
template = client.Template().create({
    "slug": "example_slug",  # str
})
```


### TemplateSearch

Create an instance: `template_search = client.TemplateSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `asset_byte` | `Any` |  |
| `asset_content_type` | `str` |  |
| `box_count` | `int` |  |
| `caption` | `list` |  |
| `caption_count` | `int` |  |
| `category` | `list` |  |
| `description` | `str` |  |
| `duration_m` | `Any` |  |
| `example_image_url` | `Any` |  |
| `frame_count` | `Any` |  |
| `height` | `Any` |  |
| `id` | `str` |  |
| `image_url` | `str` |  |
| `media_type` | `str` |  |
| `name` | `str` |  |
| `poster_image_url` | `str` |  |
| `preview_image_url` | `str` |  |
| `quality_status` | `str` |  |
| `slug` | `str` |  |
| `source_template_id` | `Any` |  |
| `source_url` | `str` |  |
| `tag` | `list` |  |
| `width` | `Any` |  |

#### Example: List

```python
template_searchs = client.TemplateSearch().list()
```


### TrendAlert

Create an instance: `trend_alert = client.TrendAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `actor_id` | `str` |  |
| `aggressiveness` | `float` |  |
| `alert_id` | `str` |  |
| `channel` | `list` |  |
| `deliver_all_alert` | `bool` |  |
| `event` | `dict` |  |
| `explicit_niche` | `list` |  |
| `explicit_region` | `list` |  |
| `explicit_source` | `list` |  |
| `explicit_topic` | `list` |  |
| `follower_count` | `int` |  |
| `niche` | `str` |  |
| `region` | `str` |  |
| `source` | `str` |  |
| `topic` | `str` |  |

#### Example: Load

```python
trend_alert = client.TrendAlert().load()
```

#### Example: Create

```python
trend_alert = client.TrendAlert().create({
    "action": "example_action",  # str
    "actor_id": "example_actor_id",  # str
    "alert_id": "example_alert_id",  # str
    "topic": "example_topic",  # str
})
```


### UploadCaptionMemeSuccess

Create an instance: `upload_caption_meme_success = client.UploadCaptionMemeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
upload_caption_meme_success = client.UploadCaptionMemeSuccess().create({
})
```


### Video

Create an instance: `video = client.Video()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `asset_id` | `str` |  |
| `at_m` | `float` |  |
| `audio_asset_id` | `str` |  |
| `beat_offset_m` | `int` |  |
| `bitrate_kbp` | `float` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `str` |  |
| `duration_m` | `float` |  |
| `duration_second` | `float` |  |
| `easing` | `str` |  |
| `error` | `str` |  |
| `frame_rate` | `float` |  |
| `input_format` | `str` |  |
| `intensity` | `float` |  |
| `job_id` | `str` |  |
| `locale` | `str` |  |
| `mime_type` | `str` |  |
| `name` | `str` |  |
| `offset_m` | `float` |  |
| `output_preset_id` | `str` |  |
| `output_url` | `str` |  |
| `plan_tier` | `str` |  |
| `preset_id` | `str` |  |
| `progress_percent` | `float` |  |
| `project` | `dict` |  |
| `project_id` | `str` |  |
| `property` | `str` |  |
| `source_device_id` | `str` |  |
| `source_url` | `str` |  |
| `stage` | `str` |  |
| `start_m` | `float` |  |
| `style_preset_id` | `str` |  |
| `sync_to_beat_grid` | `bool` |  |
| `tone` | `str` |  |
| `track_id` | `str` |  |
| `transcript` | `str` |  |
| `trend_keyword` | `list` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `value` | `float` |  |
| `watermark_enabled` | `bool` |  |
| `watermark_text` | `str` |  |
| `worker_id` | `str` |  |

#### Example: Load

```python
video = client.Video().load()
```

#### Example: Create

```python
video = client.Video().create({
    "duration_second": 1,  # float
    "input_format": "example_input_format",  # str
    "mime_type": "example_mime_type",  # str
    "output_preset_id": "example_output_preset_id",  # str
    "plan_tier": "example_plan_tier",  # str
    "preset_id": "example_preset_id",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── memesiocontentcreation_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`memesiocontentcreation_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
agent = client.Agent()
agent.load({"id": "example_id"})

# agent.data_get() now returns the agent data from the last load
# agent.match_get() returns the last match criteria
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
