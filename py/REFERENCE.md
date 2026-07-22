# MemesioContentCreation Python SDK Reference

Complete API reference for the MemesioContentCreation Python SDK.


## MemesioContentCreationSDK

### Constructor

```python
from memesiocontentcreation_sdk import MemesioContentCreationSDK

client = MemesioContentCreationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MemesioContentCreationSDK.test()
```


### Instance Methods

#### `Agent(data=None)`

Create a new `AgentEntity` instance. Pass `None` for no initial data.

#### `AgentInfra(data=None)`

Create a new `AgentInfraEntity` instance. Pass `None` for no initial data.

#### `AiCaption(data=None)`

Create a new `AiCaptionEntity` instance. Pass `None` for no initial data.

#### `AiJob(data=None)`

Create a new `AiJobEntity` instance. Pass `None` for no initial data.

#### `AiMemeGenerationSucceeded(data=None)`

Create a new `AiMemeGenerationSucceededEntity` instance. Pass `None` for no initial data.

#### `AiProvider(data=None)`

Create a new `AiProviderEntity` instance. Pass `None` for no initial data.

#### `Analytics(data=None)`

Create a new `AnalyticsEntity` instance. Pass `None` for no initial data.

#### `Auth(data=None)`

Create a new `AuthEntity` instance. Pass `None` for no initial data.

#### `Billing(data=None)`

Create a new `BillingEntity` instance. Pass `None` for no initial data.

#### `Collaboration(data=None)`

Create a new `CollaborationEntity` instance. Pass `None` for no initial data.

#### `Compliance(data=None)`

Create a new `ComplianceEntity` instance. Pass `None` for no initial data.

#### `CreateMeme(data=None)`

Create a new `CreateMemeEntity` instance. Pass `None` for no initial data.

#### `DeveloperApi(data=None)`

Create a new `DeveloperApiEntity` instance. Pass `None` for no initial data.

#### `FreeCaptionMemeSuccess(data=None)`

Create a new `FreeCaptionMemeSuccessEntity` instance. Pass `None` for no initial data.

#### `FreeTemplateSearch(data=None)`

Create a new `FreeTemplateSearchEntity` instance. Pass `None` for no initial data.

#### `Generate(data=None)`

Create a new `GenerateEntity` instance. Pass `None` for no initial data.

#### `Growth(data=None)`

Create a new `GrowthEntity` instance. Pass `None` for no initial data.

#### `ListMeme(data=None)`

Create a new `ListMemeEntity` instance. Pass `None` for no initial data.

#### `Media(data=None)`

Create a new `MediaEntity` instance. Pass `None` for no initial data.

#### `Meme(data=None)`

Create a new `MemeEntity` instance. Pass `None` for no initial data.

#### `PublicTemplateMediaItem(data=None)`

Create a new `PublicTemplateMediaItemEntity` instance. Pass `None` for no initial data.

#### `StandaloneAgentBootstrap(data=None)`

Create a new `StandaloneAgentBootstrapEntity` instance. Pass `None` for no initial data.

#### `Template(data=None)`

Create a new `TemplateEntity` instance. Pass `None` for no initial data.

#### `TemplateSearch(data=None)`

Create a new `TemplateSearchEntity` instance. Pass `None` for no initial data.

#### `TrendAlert(data=None)`

Create a new `TrendAlertEntity` instance. Pass `None` for no initial data.

#### `UploadCaptionMemeSuccess(data=None)`

Create a new `UploadCaptionMemeSuccessEntity` instance. Pass `None` for no initial data.

#### `Video(data=None)`

Create a new `VideoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AgentEntity

```python
agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `locale` | `str` | No |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | No |  |
| `status` | `str` | No |  |
| `style_preset` | `str` | No |  |
| `system_prompt` | `str` | No |  |
| `watermark_text` | `str` | No |  |
| `website_url` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Agent().create({
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Agent().load({"id": "agent_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Agent().update({
    "id": "agent_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentInfraEntity

```python
agent_infra = client.AgentInfra()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `chat_id` | `str` | Yes |  |
| `meme_slug` | `str` | Yes |  |
| `metadata` | `dict` | No |  |
| `payout_reference` | `str` | No |  |
| `payout_status` | `str` | No |  |
| `phone_or_chat_id` | `str` | Yes |  |
| `prompt` | `str` | Yes |  |
| `proof` | `dict` | No |  |
| `quota_boost_per_day` | `int` | No |  |
| `scope` | `list` | No |  |
| `user_id` | `str` | No |  |
| `week_start` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentInfra().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AgentInfra().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AgentInfra().remove({"agent_id": "agent_id", "key_id": "key_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentInfraEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiCaptionEntity

```python
ai_caption = client.AiCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_term` | `list` | No |  |
| `canvas_text` | `list` | Yes |  |
| `caption_count` | `int` | No |  |
| `caption_set` | `list` | No |  |
| `entity` | `list` | No |  |
| `fallback_used` | `bool` | No |  |
| `generation_strategy` | `str` | No |  |
| `locale` | `str` | No |  |
| `meme_id` | `str` | No |  |
| `meme_slug` | `str` | No |  |
| `name` | `str` | Yes |  |
| `ok` | `bool` | No |  |
| `option_count` | `int` | No |  |
| `owner_token` | `str` | No |  |
| `provider_id` | `str` | No |  |
| `reference_caption` | `list` | No |  |
| `rewrite_note` | `str` | No |  |
| `scene_summary` | `str` | No |  |
| `template_description` | `str` | No |  |
| `template_name` | `str` | No |  |
| `template_tag` | `list` | No |  |
| `tone` | `str` | Yes |  |
| `tone_cue` | `list` | No |  |
| `trend_keyword` | `list` | No |  |
| `trend_reference` | `list` | No |  |
| `trend_signal` | `list` | No |  |
| `variation_offset` | `int` | No |  |
| `voice_rule` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiCaption().create({
    "canvas_text": [],  # list
    "name": "example_name",  # str
    "tone": "example_tone",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiCaption().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiCaptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiJobEntity

```python
ai_job = client.AiJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `actor_id` | `str` | No |  |
| `after_state` | `dict` | No |  |
| `attempt` | `int` | No |  |
| `before_state` | `dict` | No |  |
| `brush_edit` | `list` | No |  |
| `capability` | `str` | Yes |  |
| `celebrity_confidence` | `float` | No |  |
| `consent_attested` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `detected_face_count` | `float` | Yes |  |
| `edge_refinement` | `float` | No |  |
| `estimated_cost_usd` | `float` | No |  |
| `frame_time_m` | `float` | No |  |
| `height` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `input` | `dict` | No |  |
| `layer_id` | `str` | Yes |  |
| `layer_type` | `str` | No |  |
| `max_attempt` | `int` | No |  |
| `max_face` | `float` | No |  |
| `media_type` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `nsfw_score` | `float` | No |  |
| `output` | `dict` | No |  |
| `project_id` | `str` | Yes |  |
| `provider_id` | `str` | No |  |
| `reason` | `str` | No |  |
| `run_after_m` | `int` | No |  |
| `source_asset_url` | `str` | Yes |  |
| `source_face_index` | `float` | No |  |
| `source_image_url` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `target_asset_url` | `str` | Yes |  |
| `target_face_index` | `float` | No |  |
| `timeout_m` | `int` | No |  |
| `trace_id` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `version_id` | `str` | No |  |
| `width` | `float` | Yes |  |
| `worker_id` | `str` | Yes |  |
| `workspace_id` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiJob().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiJob().load({"id": "ai_job_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```python
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_heuristic_fallback` | `bool` | No |  |
| `caption` | `list` | No |  |
| `caption_source` | `str` | No |  |
| `correlation_id` | `str` | No |  |
| `degraded_from_async` | `bool` | No |  |
| `editable_caption` | `list` | No |  |
| `flow` | `str` | Yes |  |
| `image_url` | `str` | No |  |
| `mode` | `str` | Yes |  |
| `ok` | `bool` | Yes |  |
| `preferred_provider_id` | `str` | No |  |
| `prompt` | `str` | Yes |  |
| `rewrite_note` | `str` | No |  |
| `run_id` | `str` | No |  |
| `status` | `str` | Yes |  |
| `template_id` | `str` | No |  |
| `tone` | `str` | No |  |
| `tone_cue` | `list` | No |  |
| `variant` | `list` | Yes |  |
| `variant_count` | `int` | Yes |  |
| `workspace_id` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiMemeGenerationSucceeded().create({
    "flow": "example_flow",  # str
    "mode": "example_mode",  # str
    "ok": True,  # bool
    "prompt": "example_prompt",  # str
    "status": "example_status",  # str
    "variant": [],  # list
    "variant_count": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiProviderEntity

```python
ai_provider = client.AiProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `str` | No |  |
| `correlation_id` | `str` | No |  |
| `limit` | `float` | No |  |
| `mapping_mode` | `str` | No |  |
| `max_slot` | `int` | No |  |
| `prompt` | `str` | Yes |  |
| `source_image_url` | `str` | Yes |  |
| `text` | `list` | No |  |
| `trend_signal` | `list` | No |  |
| `workspace_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiProvider().create({
    "prompt": "example_prompt",  # str
    "source_image_url": "example_source_image_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiProvider().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnalyticsEntity

```python
analytics = client.Analytics()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Analytics().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthEntity

```python
auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | No |  |
| `email` | `str` | Yes |  |
| `password` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Auth().create({
    "email": "example_email",  # str
    "password": "example_password",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingEntity

```python
billing = client.Billing()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Billing().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CollaborationEntity

```python
collaboration = client.Collaboration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `str` | No |  |
| `message` | `str` | Yes |  |
| `project_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Collaboration().create({
    "message": "example_message",  # str
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Collaboration().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollaborationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComplianceEntity

```python
compliance = client.Compliance()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Compliance().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComplianceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateMemeEntity

```python
create_meme = client.CreateMeme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canva` | `dict` | Yes |  |
| `caption` | `list` | Yes |  |
| `generation_run_id` | `Any` | No |  |
| `generation_variant_id` | `Any` | No |  |
| `image_data_url` | `str` | Yes |  |
| `overlay` | `list` | No |  |
| `source_image_url` | `str` | Yes |  |
| `template_slug` | `str` | No |  |
| `title` | `str` | No |  |
| `visibility` | `str` | No |  |
| `watermark` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateMeme().create({
    "canva": {},  # dict
    "caption": [],  # list
    "image_data_url": "example_image_data_url",  # str
    "source_image_url": "example_source_image_url",  # str
    "watermark": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateMemeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeveloperApiEntity

```python
developer_api = client.DeveloperApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `float` | No |  |
| `prompt` | `str` | Yes |  |
| `trend_signal` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeveloperApi().create({
    "prompt": "example_prompt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeveloperApi().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeveloperApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```python
free_caption_meme_success = client.FreeCaptionMemeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `list` | Yes |  |
| `template_slug` | `str` | Yes |  |
| `title` | `str` | No |  |
| `visibility` | `str` | No |  |
| `watermark` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FreeCaptionMemeSuccess().create({
    "caption": [],  # list
    "template_slug": "example_template_slug",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FreeTemplateSearchEntity

```python
free_template_search = client.FreeTemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `Any` | No |  |
| `asset_content_type` | `str` | No |  |
| `box_count` | `int` | Yes |  |
| `caption` | `list` | Yes |  |
| `caption_count` | `int` | Yes |  |
| `description` | `str` | Yes |  |
| `duration_m` | `Any` | No |  |
| `example_image_url` | `Any` | No |  |
| `frame_count` | `Any` | No |  |
| `height` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `media_type` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `poster_image_url` | `str` | No |  |
| `quality_status` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `source_template_id` | `Any` | Yes |  |
| `source_url` | `str` | No |  |
| `tag` | `list` | No |  |
| `width` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FreeTemplateSearch().list()
for free_template_search in results:
    print(free_template_search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeTemplateSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateEntity

```python
generate = client.Generate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `list` | No |  |
| `data` | `dict` | Yes |  |
| `duration_m` | `int` | No |  |
| `fps` | `int` | No |  |
| `gif_slug` | `str` | No |  |
| `ok` | `bool` | Yes |  |
| `return_base64` | `bool` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `list` | No |  |
| `title` | `str` | No |  |
| `width_px` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Generate().create({
    "data": {},  # dict
    "ok": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GrowthEntity

```python
growth = client.Growth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | No |  |
| `action` | `str` | Yes |  |
| `actor_id` | `str` | No |  |
| `caption` | `str` | No |  |
| `code` | `str` | No |  |
| `external_account_id` | `str` | No |  |
| `handle` | `str` | No |  |
| `limit` | `int` | No |  |
| `log_exposure` | `bool` | No |  |
| `meme_slug` | `str` | No |  |
| `now` | `str` | No |  |
| `platform` | `str` | No |  |
| `profile` | `list` | No |  |
| `share_slug` | `str` | No |  |
| `surface` | `str` | No |  |
| `week_start` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Growth().create({
    "action": "example_action",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Growth().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GrowthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListMemeEntity

```python
list_meme = client.ListMeme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `str` | Yes |  |
| `canonical_image_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `nsfw_status` | `str` | Yes |  |
| `share_slug` | `str` | Yes |  |
| `share_url` | `str` | Yes |  |
| `share_view` | `int` | Yes |  |
| `slug` | `str` | Yes |  |
| `tag` | `list` | Yes |  |
| `template_slug` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `visibility` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListMeme().list()
for list_meme in results:
    print(list_meme)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMemeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MediaEntity

```python
media = client.Media()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `content_type` | `str` | No |  |
| `expires_in_second` | `int` | No |  |
| `owner_token` | `str` | No |  |
| `path` | `str` | No |  |
| `prefix` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Media().create({
    "action": "example_action",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemeEntity

```python
meme = client.Meme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_text` | `str` | Yes |  |
| `canonical_image_url` | `str` | Yes |  |
| `canva` | `dict` | Yes |  |
| `caption` | `list` | Yes |  |
| `created_at` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `nsfw_status` | `str` | Yes |  |
| `overlay` | `list` | Yes |  |
| `share_slug` | `str` | Yes |  |
| `share_url` | `str` | Yes |  |
| `share_view` | `int` | Yes |  |
| `slug` | `str` | Yes |  |
| `source_image_url` | `str` | Yes |  |
| `tag` | `list` | Yes |  |
| `template_slug` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `visibility` | `str` | Yes |  |
| `watermark` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Meme().load({"id": "meme_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Meme().remove({"id": "meme_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```python
public_template_media_item = client.PublicTemplateMediaItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `Any` | No |  |
| `asset_content_type` | `str` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `list` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `list` | No |  |
| `description` | `str` | Yes |  |
| `duration_m` | `Any` | No |  |
| `example_image_url` | `Any` | No |  |
| `frame_count` | `Any` | No |  |
| `height` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `media_type` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `poster_image_url` | `str` | No |  |
| `preview_image_url` | `str` | No |  |
| `quality_status` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `source_template_id` | `Any` | Yes |  |
| `source_url` | `str` | No |  |
| `tag` | `list` | Yes |  |
| `width` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PublicTemplateMediaItem().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```python
standalone_agent_bootstrap = client.StandaloneAgentBootstrap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `handle` | `str` | Yes |  |
| `locale` | `str` | No |  |
| `name` | `str` | Yes |  |
| `style_preset` | `str` | No |  |
| `system_prompt` | `str` | No |  |
| `watermark_text` | `str` | No |  |
| `website_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StandaloneAgentBootstrap().create({
    "handle": "example_handle",  # str
    "name": "example_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateEntity

```python
template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `Any` | No |  |
| `asset_content_type` | `str` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `list` | No |  |
| `caption_count` | `int` | No |  |
| `category` | `list` | No |  |
| `description` | `str` | Yes |  |
| `duration_m` | `int` | No |  |
| `example_image_url` | `Any` | No |  |
| `fps` | `int` | No |  |
| `frame_count` | `Any` | No |  |
| `gif_slug` | `str` | No |  |
| `height` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `media_type` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `poster_image_url` | `str` | No |  |
| `preview_image_url` | `str` | No |  |
| `quality_status` | `str` | No |  |
| `return_base64` | `bool` | No |  |
| `slug` | `str` | Yes |  |
| `source_template_id` | `Any` | Yes |  |
| `source_url` | `str` | No |  |
| `start_m` | `int` | No |  |
| `tag` | `list` | No |  |
| `title` | `str` | No |  |
| `width` | `Any` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Template().create({
    "slug": "example_slug",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Template().list()
for template in results:
    print(template)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateSearchEntity

```python
template_search = client.TemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `asset_byte` | `Any` | No |  |
| `asset_content_type` | `str` | No |  |
| `box_count` | `int` | No |  |
| `caption` | `list` | Yes |  |
| `caption_count` | `int` | No |  |
| `category` | `list` | No |  |
| `description` | `str` | Yes |  |
| `duration_m` | `Any` | No |  |
| `example_image_url` | `Any` | No |  |
| `frame_count` | `Any` | No |  |
| `height` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `image_url` | `str` | Yes |  |
| `media_type` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `poster_image_url` | `str` | No |  |
| `preview_image_url` | `str` | No |  |
| `quality_status` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `source_template_id` | `Any` | Yes |  |
| `source_url` | `str` | No |  |
| `tag` | `list` | Yes |  |
| `width` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TemplateSearch().list()
for template_search in results:
    print(template_search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrendAlertEntity

```python
trend_alert = client.TrendAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `actor_id` | `str` | Yes |  |
| `aggressiveness` | `float` | No |  |
| `alert_id` | `str` | Yes |  |
| `channel` | `list` | No |  |
| `deliver_all_alert` | `bool` | No |  |
| `event` | `dict` | No |  |
| `explicit_niche` | `list` | No |  |
| `explicit_region` | `list` | No |  |
| `explicit_source` | `list` | No |  |
| `explicit_topic` | `list` | No |  |
| `follower_count` | `int` | No |  |
| `niche` | `str` | No |  |
| `region` | `str` | No |  |
| `source` | `str` | No |  |
| `topic` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TrendAlert().create({
    "action": "example_action",  # str
    "actor_id": "example_actor_id",  # str
    "alert_id": "example_alert_id",  # str
    "topic": "example_topic",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TrendAlert().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrendAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```python
upload_caption_meme_success = client.UploadCaptionMemeSuccess()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UploadCaptionMemeSuccess().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoEntity

```python
video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | No |  |
| `asset_id` | `str` | No |  |
| `at_m` | `float` | No |  |
| `audio_asset_id` | `str` | No |  |
| `beat_offset_m` | `int` | No |  |
| `bitrate_kbp` | `float` | No |  |
| `bpm` | `int` | No |  |
| `cancelled` | `bool` | No |  |
| `container` | `str` | No |  |
| `duration_m` | `float` | No |  |
| `duration_second` | `float` | Yes |  |
| `easing` | `str` | No |  |
| `error` | `str` | No |  |
| `frame_rate` | `float` | No |  |
| `input_format` | `str` | Yes |  |
| `intensity` | `float` | No |  |
| `job_id` | `str` | No |  |
| `locale` | `str` | No |  |
| `mime_type` | `str` | Yes |  |
| `name` | `str` | No |  |
| `offset_m` | `float` | No |  |
| `output_preset_id` | `str` | Yes |  |
| `output_url` | `str` | No |  |
| `plan_tier` | `str` | Yes |  |
| `preset_id` | `str` | Yes |  |
| `progress_percent` | `float` | No |  |
| `project` | `dict` | No |  |
| `project_id` | `str` | No |  |
| `property` | `str` | No |  |
| `source_device_id` | `str` | No |  |
| `source_url` | `str` | No |  |
| `stage` | `str` | No |  |
| `start_m` | `float` | No |  |
| `style_preset_id` | `str` | No |  |
| `sync_to_beat_grid` | `bool` | No |  |
| `tone` | `str` | No |  |
| `track_id` | `str` | No |  |
| `transcript` | `str` | No |  |
| `trend_keyword` | `list` | No |  |
| `type` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `value` | `float` | No |  |
| `watermark_enabled` | `bool` | No |  |
| `watermark_text` | `str` | No |  |
| `worker_id` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Video().create({
    "duration_second": 1,  # float
    "input_format": "example_input_format",  # str
    "mime_type": "example_mime_type",  # str
    "output_preset_id": "example_output_preset_id",  # str
    "plan_tier": "example_plan_tier",  # str
    "preset_id": "example_preset_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Video().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MemesioContentCreationSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

