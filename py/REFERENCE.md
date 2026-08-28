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
| `id` | `str` | No |  |
| `locale` | `str` | No |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | No |  |
| `status` | `str` | No |  |
| `stylePreset` | `str` | No |  |
| `systemPrompt` | `str` | No |  |
| `watermarkText` | `str` | No |  |
| `websiteUrl` | `str` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `description` | - | - | - |
| `id` | - | - | - |
| `locale` | - | - | - |
| `name` | - | - | Yes |
| `slug` | - | - | - |
| `status` | - | - | - |
| `stylePreset` | - | - | - |
| `systemPrompt` | - | - | - |
| `watermarkText` | - | - | - |
| `websiteUrl` | - | - | - |

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
| `chatId` | `str` | Yes |  |
| `id` | `str` | No |  |
| `memeSlug` | `str` | Yes |  |
| `metadata` | `dict` | No |  |
| `payoutReference` | `str` | No |  |
| `payoutStatus` | `str` | No |  |
| `phoneOrChatId` | `str` | Yes |  |
| `prompt` | `str` | Yes |  |
| `proof` | `dict` | No |  |
| `quotaBoostPerDay` | `int` | No |  |
| `scopes` | `list` | No |  |
| `userId` | `str` | No |  |
| `weekStart` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentInfra().create({
    "action": "example_action",  # str
    "chatId": "example_chatId",  # str
    "memeSlug": "example_memeSlug",  # str
    "phoneOrChatId": "example_phoneOrChatId",  # str
    "prompt": "example_prompt",  # str
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
| `blockedTerms` | `list` | No |  |
| `canvasText` | `list` | Yes |  |
| `captionCount` | `int` | No |  |
| `captionSets` | `list` | No |  |
| `entities` | `list` | No |  |
| `fallbackUsed` | `bool` | No |  |
| `generationStrategy` | `str` | No |  |
| `locale` | `str` | No |  |
| `memeId` | `str` | No |  |
| `memeSlug` | `str` | No |  |
| `name` | `str` | Yes |  |
| `ok` | `bool` | No |  |
| `optionCount` | `int` | No |  |
| `ownerToken` | `str` | No |  |
| `providerId` | `str` | No |  |
| `referenceCaptions` | `list` | No |  |
| `rewriteNote` | `str` | No |  |
| `sceneSummary` | `str` | No |  |
| `templateDescription` | `str` | No |  |
| `templateName` | `str` | No |  |
| `templateTags` | `list` | No |  |
| `tone` | `str` | Yes |  |
| `toneCues` | `list` | No |  |
| `trendKeywords` | `list` | No |  |
| `trendReferences` | `list` | No |  |
| `trendSignals` | `list` | No |  |
| `variationOffset` | `int` | No |  |
| `voiceRules` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiCaption().create({
    "canvasText": [],  # list
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
| `actorId` | `str` | No |  |
| `afterState` | `dict` | No |  |
| `attempts` | `int` | No |  |
| `beforeState` | `dict` | No |  |
| `brushEdits` | `list` | No |  |
| `capability` | `str` | Yes |  |
| `celebrityConfidence` | `float` | No |  |
| `consentAttested` | `bool` | No |  |
| `createdAt` | `str` | No |  |
| `detectedFaceCount` | `float` | Yes |  |
| `edgeRefinement` | `float` | No |  |
| `estimatedCostUsd` | `float` | No |  |
| `frameTimeMs` | `float` | No |  |
| `height` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `input` | `dict` | No |  |
| `layerId` | `str` | Yes |  |
| `layerType` | `str` | No |  |
| `maxAttempts` | `int` | No |  |
| `maxFaces` | `float` | No |  |
| `mediaType` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `nsfwScore` | `float` | No |  |
| `output` | `dict` | No |  |
| `projectId` | `str` | Yes |  |
| `providerId` | `str` | No |  |
| `reason` | `str` | No |  |
| `runAfterMs` | `int` | No |  |
| `sourceAssetUrl` | `str` | Yes |  |
| `sourceFaceIndex` | `float` | No |  |
| `sourceImageUrl` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `targetAssetUrl` | `str` | Yes |  |
| `targetFaceIndex` | `float` | No |  |
| `timeoutMs` | `int` | No |  |
| `traceId` | `str` | No |  |
| `updatedAt` | `str` | No |  |
| `versionId` | `str` | No |  |
| `width` | `float` | Yes |  |
| `workerId` | `str` | Yes |  |
| `workspaceId` | `str` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `action` | - | - |
| `actorId` | - | - |
| `afterState` | - | - |
| `attempts` | - | - |
| `beforeState` | - | - |
| `brushEdits` | - | - |
| `capability` | - | - |
| `celebrityConfidence` | - | - |
| `consentAttested` | - | - |
| `createdAt` | - | - |
| `detectedFaceCount` | - | - |
| `edgeRefinement` | - | - |
| `estimatedCostUsd` | - | - |
| `frameTimeMs` | - | - |
| `height` | - | - |
| `id` | - | - |
| `input` | - | - |
| `layerId` | - | - |
| `layerType` | - | - |
| `maxAttempts` | - | - |
| `maxFaces` | - | - |
| `mediaType` | - | Yes |
| `metadata` | - | - |
| `nsfwScore` | - | - |
| `output` | - | - |
| `projectId` | - | - |
| `providerId` | - | - |
| `reason` | - | - |
| `runAfterMs` | - | - |
| `sourceAssetUrl` | - | - |
| `sourceFaceIndex` | - | - |
| `sourceImageUrl` | - | - |
| `status` | - | - |
| `targetAssetUrl` | - | - |
| `targetFaceIndex` | - | - |
| `timeoutMs` | - | - |
| `traceId` | - | - |
| `updatedAt` | - | - |
| `versionId` | - | - |
| `width` | - | - |
| `workerId` | - | - |
| `workspaceId` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiJob().create({
    "action": "example_action",  # str
    "capability": "example_capability",  # str
    "detectedFaceCount": 1,  # float
    "height": 1,  # float
    "id": "example_id",  # str
    "layerId": "example_layerId",  # str
    "projectId": "example_projectId",  # str
    "sourceAssetUrl": "example_sourceAssetUrl",  # str
    "sourceImageUrl": "example_sourceImageUrl",  # str
    "status": "example_status",  # str
    "targetAssetUrl": "example_targetAssetUrl",  # str
    "width": 1,  # float
    "workerId": "example_workerId",  # str
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
| `allowHeuristicFallback` | `bool` | No |  |
| `captionSource` | `str` | No |  |
| `captions` | `list` | No |  |
| `correlationId` | `str` | No |  |
| `degradedFromAsync` | `bool` | No |  |
| `editableCaptions` | `list` | No |  |
| `flow` | `str` | Yes |  |
| `imageUrl` | `str` | No |  |
| `mode` | `str` | Yes |  |
| `ok` | `bool` | Yes |  |
| `preferredProviderId` | `str` | No |  |
| `prompt` | `str` | Yes |  |
| `rewriteNote` | `str` | No |  |
| `runId` | `str` | No |  |
| `status` | `str` | Yes |  |
| `templateId` | `str` | No |  |
| `tone` | `str` | No |  |
| `toneCues` | `list` | No |  |
| `variantCount` | `int` | Yes |  |
| `variants` | `list` | Yes |  |
| `workspaceId` | `str` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `allowHeuristicFallback` | - |
| `captionSource` | - |
| `captions` | - |
| `correlationId` | - |
| `degradedFromAsync` | - |
| `editableCaptions` | - |
| `flow` | Yes |
| `imageUrl` | - |
| `mode` | Yes |
| `ok` | - |
| `preferredProviderId` | - |
| `prompt` | - |
| `rewriteNote` | - |
| `runId` | - |
| `status` | - |
| `templateId` | - |
| `tone` | - |
| `toneCues` | - |
| `variantCount` | Yes |
| `variants` | - |
| `workspaceId` | - |

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
    "variantCount": 1,  # int
    "variants": [],  # list
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
| `actorId` | `str` | No |  |
| `correlationId` | `str` | No |  |
| `limit` | `float` | No |  |
| `mappingMode` | `str` | No |  |
| `maxSlots` | `int` | No |  |
| `prompt` | `str` | Yes |  |
| `sourceImageUrl` | `str` | Yes |  |
| `texts` | `list` | No |  |
| `trendSignals` | `list` | No |  |
| `workspaceId` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiProvider().create({
    "prompt": "example_prompt",  # str
    "sourceImageUrl": "example_sourceImageUrl",  # str
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
| `displayName` | `str` | No |  |
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
| `authorId` | `str` | No |  |
| `message` | `str` | Yes |  |
| `projectId` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Collaboration().create({
    "message": "example_message",  # str
    "projectId": "example_projectId",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Collaboration().load({"project_id": "project_id"})
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
| `canvas` | `dict` | Yes |  |
| `captions` | `list` | Yes |  |
| `generationRunId` | `str | None` | No |  |
| `generationVariantId` | `str | None` | No |  |
| `imageDataUrl` | `str` | Yes |  |
| `overlays` | `list` | No |  |
| `sourceImageUrl` | `str` | Yes |  |
| `templateSlug` | `str` | No |  |
| `title` | `str` | No |  |
| `visibility` | `str` | No |  |
| `watermark` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateMeme().create({
    "canvas": {},  # dict
    "captions": [],  # list
    "imageDataUrl": "example_imageDataUrl",  # str
    "sourceImageUrl": "example_sourceImageUrl",  # str
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
| `trendSignals` | `list` | No |  |

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
| `captions` | `list` | Yes |  |
| `templateSlug` | `str` | Yes |  |
| `title` | `str` | No |  |
| `visibility` | `str` | No |  |
| `watermark` | `dict` | No | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FreeCaptionMemeSuccess().create({
    "captions": [],  # list
    "templateSlug": "example_templateSlug",  # str
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
| `assetBytes` | `int | None` | No |  |
| `assetContentType` | `str` | No |  |
| `boxCount` | `int` | Yes |  |
| `captionCount` | `int` | Yes |  |
| `captions` | `list` | Yes |  |
| `description` | `str` | Yes |  |
| `durationMs` | `int | None` | No |  |
| `exampleImageUrl` | `str | None` | No |  |
| `frameCount` | `int | None` | No |  |
| `height` | `float | None` | Yes |  |
| `id` | `str` | Yes |  |
| `imageUrl` | `str` | Yes |  |
| `mediaType` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `posterImageUrl` | `str` | No |  |
| `qualityStatus` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `sourceTemplateId` | `str | None` | Yes |  |
| `sourceUrl` | `str` | No |  |
| `tags` | `list` | No |  |
| `width` | `float | None` | Yes |  |

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
| `base64` | `str` | No |  |
| `byteLength` | `int` | Yes |  |
| `captions` | `list` | No |  |
| `dataUrl` | `str` | No |  |
| `delayMs` | `int` | Yes |  |
| `durationMs` | `int` | No |  |
| `filename` | `str` | Yes |  |
| `fps` | `int` | No |  |
| `gifSlug` | `str` | Yes | Required for /api/v1/gifs/generate. |
| `height` | `int` | Yes |  |
| `mimeType` | `str` | Yes |  |
| `pages` | `int` | Yes |  |
| `parameters` | `dict` | Yes |  |
| `returnBase64` | `bool` | No | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `int` | Yes |  |
| `startMs` | `int` | No |  |
| `tags` | `list` | No |  |
| `title` | `str` | No |  |
| `width` | `int` | Yes |  |
| `widthPx` | `int` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `base64` | - |
| `byteLength` | - |
| `captions` | - |
| `dataUrl` | - |
| `delayMs` | - |
| `durationMs` | - |
| `filename` | - |
| `fps` | - |
| `gifSlug` | Yes |
| `height` | - |
| `mimeType` | - |
| `pages` | - |
| `parameters` | - |
| `returnBase64` | - |
| `sourceDurationMs` | - |
| `startMs` | - |
| `tags` | - |
| `title` | - |
| `width` | - |
| `widthPx` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Generate().create({
    "byteLength": 1,  # int
    "delayMs": 1,  # int
    "filename": "example_filename",  # str
    "gifSlug": "example_gifSlug",  # str
    "height": 1,  # int
    "mimeType": "example_mimeType",  # str
    "pages": 1,  # int
    "parameters": {},  # dict
    "sourceDurationMs": 1,  # int
    "width": 1,  # int
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
| `accountId` | `str` | No |  |
| `action` | `str` | Yes |  |
| `actorId` | `str` | No |  |
| `caption` | `str` | No |  |
| `code` | `str` | No |  |
| `externalAccountId` | `str` | No |  |
| `handle` | `str` | No |  |
| `limit` | `int` | No |  |
| `logExposure` | `bool` | No |  |
| `memeSlug` | `str` | No |  |
| `now` | `str` | No |  |
| `platform` | `str` | No |  |
| `profiles` | `list` | No |  |
| `shareSlug` | `str` | No |  |
| `surface` | `str` | No |  |
| `weekStart` | `str` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `accountId` | - | - |
| `action` | - | - |
| `actorId` | - | Yes |
| `caption` | - | - |
| `code` | - | - |
| `externalAccountId` | - | - |
| `handle` | - | - |
| `limit` | - | - |
| `logExposure` | - | - |
| `memeSlug` | - | - |
| `now` | - | - |
| `platform` | - | - |
| `profiles` | - | - |
| `shareSlug` | - | - |
| `surface` | - | - |
| `weekStart` | - | - |

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
result = client.Growth().load({"actor_id": "actor_id"})
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
| `altText` | `str` | Yes |  |
| `canonicalImageUrl` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `imageUrl` | `str` | Yes |  |
| `nsfwStatus` | `str` | Yes |  |
| `shareSlug` | `str` | Yes |  |
| `shareUrl` | `str` | Yes |  |
| `shareViews` | `int` | Yes |  |
| `slug` | `str` | Yes |  |
| `tags` | `list` | Yes |  |
| `templateSlug` | `str` | Yes |  |
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
| `contentType` | `str` | No |  |
| `expiresInSeconds` | `int` | No |  |
| `ownerToken` | `str` | No |  |
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
| `altText` | `str` | Yes |  |
| `canonicalImageUrl` | `str` | Yes |  |
| `canvas` | `dict` | Yes |  |
| `captions` | `list` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `id` | `str` | No |  |
| `imageUrl` | `str` | Yes |  |
| `nsfwStatus` | `str` | Yes |  |
| `overlays` | `list` | Yes |  |
| `shareSlug` | `str` | Yes |  |
| `shareUrl` | `str` | Yes |  |
| `shareViews` | `int` | Yes |  |
| `slug` | `str` | Yes |  |
| `sourceImageUrl` | `str` | Yes |  |
| `tags` | `list` | Yes |  |
| `templateSlug` | `str` | Yes |  |
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
| `assetBytes` | `int | None` | No |  |
| `assetContentType` | `str` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `list` | Yes |  |
| `categories` | `list` | No |  |
| `description` | `str` | Yes |  |
| `durationMs` | `int | None` | No |  |
| `exampleImageUrl` | `str | None` | No |  |
| `frameCount` | `int | None` | No |  |
| `height` | `float | None` | Yes |  |
| `id` | `str` | Yes |  |
| `imageUrl` | `str` | Yes |  |
| `mediaType` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `posterImageUrl` | `str` | No |  |
| `previewImageUrl` | `str` | No |  |
| `qualityStatus` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `sourceTemplateId` | `str | None` | Yes |  |
| `sourceUrl` | `str` | No |  |
| `tags` | `list` | Yes |  |
| `width` | `float | None` | Yes |  |

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
| `stylePreset` | `str` | No |  |
| `systemPrompt` | `str` | No |  |
| `watermarkText` | `str` | No |  |
| `websiteUrl` | `str` | No |  |

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
| `assetBytes` | `int | None` | No |  |
| `assetContentType` | `str` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `list` | No |  |
| `categories` | `list` | No |  |
| `description` | `str` | Yes |  |
| `durationMs` | `int` | No |  |
| `exampleImageUrl` | `str | None` | No |  |
| `fps` | `int` | No |  |
| `frameCount` | `int | None` | No |  |
| `gifSlug` | `str` | No | Required for /api/v1/gifs/generate. |
| `height` | `float | None` | Yes |  |
| `id` | `str` | Yes |  |
| `imageUrl` | `str` | Yes |  |
| `mediaType` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `posterImageUrl` | `str` | No |  |
| `previewImageUrl` | `str` | No |  |
| `qualityStatus` | `str` | No |  |
| `returnBase64` | `bool` | No | Only used by /api/v1/gifs/generate. |
| `slug` | `str` | Yes |  |
| `sourceTemplateId` | `str | None` | Yes |  |
| `sourceUrl` | `str` | No |  |
| `startMs` | `int` | No |  |
| `tags` | `list` | No |  |
| `title` | `str` | No |  |
| `width` | `float | None` | Yes |  |
| `widthPx` | `int` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `animated` | - | - |
| `assetBytes` | - | - |
| `assetContentType` | - | - |
| `boxCount` | - | - |
| `captionCount` | - | - |
| `captions` | Yes | - |
| `categories` | - | - |
| `description` | - | - |
| `durationMs` | - | - |
| `exampleImageUrl` | - | - |
| `fps` | - | - |
| `frameCount` | - | - |
| `gifSlug` | - | - |
| `height` | - | - |
| `id` | - | - |
| `imageUrl` | - | - |
| `mediaType` | - | - |
| `name` | - | - |
| `posterImageUrl` | - | - |
| `previewImageUrl` | - | - |
| `qualityStatus` | - | - |
| `returnBase64` | - | - |
| `slug` | - | - |
| `sourceTemplateId` | - | - |
| `sourceUrl` | - | - |
| `startMs` | - | - |
| `tags` | Yes | - |
| `title` | - | - |
| `width` | - | - |
| `widthPx` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Template().create({
    "slug": "example_slug",  # str
    "description": "example_description",  # str
    "height": 1,  # float | None
    "id": "example_id",  # str
    "imageUrl": "example_imageUrl",  # str
    "mediaType": "example_mediaType",  # str
    "name": "example_name",  # str
    "sourceTemplateId": "example_sourceTemplateId",  # str | None
    "width": 1,  # float | None
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
| `assetBytes` | `int | None` | No |  |
| `assetContentType` | `str` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `list` | Yes |  |
| `categories` | `list` | No |  |
| `description` | `str` | Yes |  |
| `durationMs` | `int | None` | No |  |
| `exampleImageUrl` | `str | None` | No |  |
| `frameCount` | `int | None` | No |  |
| `height` | `float | None` | Yes |  |
| `id` | `str` | Yes |  |
| `imageUrl` | `str` | Yes |  |
| `mediaType` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `posterImageUrl` | `str` | No |  |
| `previewImageUrl` | `str` | No |  |
| `qualityStatus` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `sourceTemplateId` | `str | None` | Yes |  |
| `sourceUrl` | `str` | No |  |
| `tags` | `list` | Yes |  |
| `width` | `float | None` | Yes |  |

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
| `actorId` | `str` | Yes |  |
| `aggressiveness` | `float` | No |  |
| `alertId` | `str` | Yes |  |
| `channels` | `list` | No |  |
| `deliverAllAlerts` | `bool` | No |  |
| `event` | `dict` | No |  |
| `explicitNiches` | `list` | No |  |
| `explicitRegions` | `list` | No |  |
| `explicitSources` | `list` | No |  |
| `explicitTopics` | `list` | No |  |
| `followerCount` | `int` | No |  |
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
    "actorId": "example_actorId",  # str
    "alertId": "example_alertId",  # str
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
| `assetId` | `str` | No |  |
| `atMs` | `float` | No |  |
| `audioAssetId` | `str` | No |  |
| `beatOffsetMs` | `int` | No |  |
| `bitrateKbps` | `float` | No |  |
| `bpm` | `int` | No |  |
| `cancelled` | `bool` | No |  |
| `container` | `str` | No |  |
| `durationMs` | `float` | No |  |
| `durationSeconds` | `float` | Yes |  |
| `easing` | `str` | No |  |
| `error` | `str` | No |  |
| `frameRate` | `float` | No |  |
| `inputFormat` | `str` | Yes |  |
| `intensity` | `float` | No |  |
| `jobId` | `str` | No |  |
| `locale` | `str` | No |  |
| `mimeType` | `str` | Yes |  |
| `name` | `str` | No |  |
| `offsetMs` | `float` | No |  |
| `outputPresetId` | `str` | Yes |  |
| `outputUrl` | `str` | No |  |
| `planTier` | `str` | Yes |  |
| `presetId` | `str` | Yes |  |
| `progressPercent` | `float` | No |  |
| `project` | `dict` | No |  |
| `projectId` | `str` | No |  |
| `property` | `str` | No |  |
| `sourceDeviceId` | `str` | No |  |
| `sourceUrl` | `str` | No |  |
| `stage` | `str` | No |  |
| `startMs` | `float` | No |  |
| `stylePresetId` | `str` | No |  |
| `syncToBeatGrid` | `bool` | No |  |
| `tone` | `str` | No |  |
| `trackId` | `str` | No |  |
| `transcript` | `str` | No |  |
| `trendKeywords` | `list` | No |  |
| `type` | `str` | No |  |
| `updatedAt` | `str` | No |  |
| `value` | `float` | No |  |
| `watermarkEnabled` | `bool` | No |  |
| `watermarkText` | `str` | No |  |
| `workerId` | `str` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `action` | - | Yes |
| `assetId` | - | - |
| `atMs` | - | - |
| `audioAssetId` | - | - |
| `beatOffsetMs` | - | - |
| `bitrateKbps` | - | - |
| `bpm` | - | - |
| `cancelled` | - | - |
| `container` | - | - |
| `durationMs` | - | - |
| `durationSeconds` | - | Yes |
| `easing` | - | - |
| `error` | - | - |
| `frameRate` | - | - |
| `inputFormat` | - | - |
| `intensity` | - | - |
| `jobId` | - | - |
| `locale` | - | - |
| `mimeType` | - | - |
| `name` | - | - |
| `offsetMs` | - | - |
| `outputPresetId` | - | Yes |
| `outputUrl` | - | - |
| `planTier` | - | Yes |
| `presetId` | - | - |
| `progressPercent` | - | - |
| `project` | - | - |
| `projectId` | - | - |
| `property` | - | - |
| `sourceDeviceId` | - | - |
| `sourceUrl` | - | - |
| `stage` | - | - |
| `startMs` | - | - |
| `stylePresetId` | - | - |
| `syncToBeatGrid` | - | - |
| `tone` | - | - |
| `trackId` | - | - |
| `transcript` | - | - |
| `trendKeywords` | - | - |
| `type` | - | - |
| `updatedAt` | - | - |
| `value` | - | - |
| `watermarkEnabled` | - | - |
| `watermarkText` | - | - |
| `workerId` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Video().create({
    "durationSeconds": 1,  # float
    "inputFormat": "example_inputFormat",  # str
    "mimeType": "example_mimeType",  # str
    "outputPresetId": "example_outputPresetId",  # str
    "planTier": "example_planTier",  # str
    "presetId": "example_presetId",  # str
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

