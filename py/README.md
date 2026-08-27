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
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    publictemplatemediaitem = client.PublicTemplateMediaItem().load({"slug": "example_slug"})
    print(publictemplatemediaitem)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Agent().create({"name": "example_name"})

# Update — the created record's id is a plain dict key
client.Agent().update({"id": created.data_get()["id"], "description": "example_description", "locale": "example_locale"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    trendalert = client.TrendAlert().load()
    print(trendalert)
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

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
trendalert = client.TrendAlert().load()
# trendalert contains the mock response record
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

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
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
| `id` |  |
| `locale` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
| `stylePreset` |  |
| `systemPrompt` |  |
| `watermarkText` |  |
| `websiteUrl` |  |

Operations: Create, Load, Update.

API path: `/api/v1/agents`

#### AgentInfra

| Field | Description |
| --- | --- |
| `action` |  |
| `chatId` |  |
| `id` |  |
| `memeSlug` |  |
| `metadata` |  |
| `payoutReference` |  |
| `payoutStatus` |  |
| `phoneOrChatId` |  |
| `prompt` |  |
| `proof` |  |
| `quotaBoostPerDay` |  |
| `scopes` |  |
| `userId` |  |
| `weekStart` |  |

Operations: Create, Load, Remove.

API path: `/api/v1/agents/{agentId}/channels/telegram/bind`

#### AiCaption

| Field | Description |
| --- | --- |
| `blockedTerms` |  |
| `canvasText` |  |
| `captionCount` |  |
| `captionSets` |  |
| `entities` |  |
| `fallbackUsed` |  |
| `generationStrategy` |  |
| `locale` |  |
| `memeId` |  |
| `memeSlug` |  |
| `name` |  |
| `ok` |  |
| `optionCount` |  |
| `ownerToken` |  |
| `providerId` |  |
| `referenceCaptions` |  |
| `rewriteNote` |  |
| `sceneSummary` |  |
| `templateDescription` |  |
| `templateName` |  |
| `templateTags` |  |
| `tone` |  |
| `toneCues` |  |
| `trendKeywords` |  |
| `trendReferences` |  |
| `trendSignals` |  |
| `variationOffset` |  |
| `voiceRules` |  |

Operations: Create, Load.

API path: `/api/ai/captions/generate`

#### AiJob

| Field | Description |
| --- | --- |
| `action` |  |
| `actorId` |  |
| `afterState` |  |
| `attempts` |  |
| `beforeState` |  |
| `brushEdits` |  |
| `capability` |  |
| `celebrityConfidence` |  |
| `consentAttested` |  |
| `createdAt` |  |
| `detectedFaceCount` |  |
| `edgeRefinement` |  |
| `estimatedCostUsd` |  |
| `frameTimeMs` |  |
| `height` |  |
| `id` |  |
| `input` |  |
| `layerId` |  |
| `layerType` |  |
| `maxAttempts` |  |
| `maxFaces` |  |
| `mediaType` |  |
| `metadata` |  |
| `nsfwScore` |  |
| `output` |  |
| `projectId` |  |
| `providerId` |  |
| `reason` |  |
| `runAfterMs` |  |
| `sourceAssetUrl` |  |
| `sourceFaceIndex` |  |
| `sourceImageUrl` |  |
| `status` |  |
| `targetAssetUrl` |  |
| `targetFaceIndex` |  |
| `timeoutMs` |  |
| `traceId` |  |
| `updatedAt` |  |
| `versionId` |  |
| `width` |  |
| `workerId` |  |
| `workspaceId` |  |

Operations: Create, Load.

API path: `/api/ai/jobs/{jobId}/cancel`

#### AiMemeGenerationSucceeded

| Field | Description |
| --- | --- |
| `allowHeuristicFallback` |  |
| `captionSource` |  |
| `captions` |  |
| `correlationId` |  |
| `degradedFromAsync` |  |
| `editableCaptions` |  |
| `flow` |  |
| `imageUrl` |  |
| `mode` |  |
| `ok` |  |
| `preferredProviderId` |  |
| `prompt` |  |
| `rewriteNote` |  |
| `runId` |  |
| `status` |  |
| `templateId` |  |
| `tone` |  |
| `toneCues` |  |
| `variantCount` |  |
| `variants` |  |
| `workspaceId` |  |

Operations: Create.

API path: `/api/ai/memes/generate`

#### AiProvider

| Field | Description |
| --- | --- |
| `actorId` |  |
| `correlationId` |  |
| `limit` |  |
| `mappingMode` |  |
| `maxSlots` |  |
| `prompt` |  |
| `sourceImageUrl` |  |
| `texts` |  |
| `trendSignals` |  |
| `workspaceId` |  |

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
| `displayName` |  |
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
| `authorId` |  |
| `message` |  |
| `projectId` |  |

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
| `canvas` |  |
| `captions` |  |
| `generationRunId` |  |
| `generationVariantId` |  |
| `imageDataUrl` |  |
| `overlays` |  |
| `sourceImageUrl` |  |
| `templateSlug` |  |
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
| `trendSignals` |  |

Operations: Create, Load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `captions` |  |
| `templateSlug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

Operations: Create.

API path: `/api/free/memes/caption`

#### FreeTemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `assetBytes` |  |
| `assetContentType` |  |
| `boxCount` |  |
| `captionCount` |  |
| `captions` |  |
| `description` |  |
| `durationMs` |  |
| `exampleImageUrl` |  |
| `frameCount` |  |
| `height` |  |
| `id` |  |
| `imageUrl` |  |
| `mediaType` |  |
| `name` |  |
| `posterImageUrl` |  |
| `qualityStatus` |  |
| `slug` |  |
| `sourceTemplateId` |  |
| `sourceUrl` |  |
| `tags` |  |
| `width` |  |

Operations: List.

API path: `/api/free/templates`

#### Generate

| Field | Description |
| --- | --- |
| `base64` |  |
| `byteLength` |  |
| `captions` |  |
| `dataUrl` |  |
| `delayMs` |  |
| `durationMs` |  |
| `filename` |  |
| `fps` |  |
| `gifSlug` | Required for /api/v1/gifs/generate. |
| `height` |  |
| `mimeType` |  |
| `pages` |  |
| `parameters` |  |
| `returnBase64` | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` |  |
| `startMs` |  |
| `tags` |  |
| `title` |  |
| `width` |  |
| `widthPx` |  |

Operations: Create.

API path: `/api/v1/gifs/generate`

#### Growth

| Field | Description |
| --- | --- |
| `accountId` |  |
| `action` |  |
| `actorId` |  |
| `caption` |  |
| `code` |  |
| `externalAccountId` |  |
| `handle` |  |
| `limit` |  |
| `logExposure` |  |
| `memeSlug` |  |
| `now` |  |
| `platform` |  |
| `profiles` |  |
| `shareSlug` |  |
| `surface` |  |
| `weekStart` |  |

Operations: Create, Load.

API path: `/api/growth/experiments/decision`

#### ListMeme

| Field | Description |
| --- | --- |
| `altText` |  |
| `canonicalImageUrl` |  |
| `createdAt` |  |
| `imageUrl` |  |
| `nsfwStatus` |  |
| `shareSlug` |  |
| `shareUrl` |  |
| `shareViews` |  |
| `slug` |  |
| `tags` |  |
| `templateSlug` |  |
| `title` |  |
| `visibility` |  |

Operations: List.

API path: `/api/memes`

#### Media

| Field | Description |
| --- | --- |
| `action` |  |
| `contentType` |  |
| `expiresInSeconds` |  |
| `ownerToken` |  |
| `path` |  |
| `prefix` |  |

Operations: Create.

API path: `/api/media/signed-url`

#### Meme

| Field | Description |
| --- | --- |
| `altText` |  |
| `canonicalImageUrl` |  |
| `canvas` |  |
| `captions` |  |
| `createdAt` |  |
| `id` |  |
| `imageUrl` |  |
| `nsfwStatus` |  |
| `overlays` |  |
| `shareSlug` |  |
| `shareUrl` |  |
| `shareViews` |  |
| `slug` |  |
| `sourceImageUrl` |  |
| `tags` |  |
| `templateSlug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: Load, Remove.

API path: `/api/memes/{slug}`

#### PublicTemplateMediaItem

| Field | Description |
| --- | --- |
| `animated` |  |
| `assetBytes` |  |
| `assetContentType` |  |
| `boxCount` |  |
| `captionCount` |  |
| `captions` |  |
| `categories` |  |
| `description` |  |
| `durationMs` |  |
| `exampleImageUrl` |  |
| `frameCount` |  |
| `height` |  |
| `id` |  |
| `imageUrl` |  |
| `mediaType` |  |
| `name` |  |
| `posterImageUrl` |  |
| `previewImageUrl` |  |
| `qualityStatus` |  |
| `slug` |  |
| `sourceTemplateId` |  |
| `sourceUrl` |  |
| `tags` |  |
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
| `stylePreset` |  |
| `systemPrompt` |  |
| `watermarkText` |  |
| `websiteUrl` |  |

Operations: Create.

API path: `/api/v1/agents/bootstrap`

#### Template

| Field | Description |
| --- | --- |
| `animated` |  |
| `assetBytes` |  |
| `assetContentType` |  |
| `boxCount` |  |
| `captionCount` |  |
| `captions` |  |
| `categories` |  |
| `description` |  |
| `durationMs` |  |
| `exampleImageUrl` |  |
| `fps` |  |
| `frameCount` |  |
| `gifSlug` | Required for /api/v1/gifs/generate. |
| `height` |  |
| `id` |  |
| `imageUrl` |  |
| `mediaType` |  |
| `name` |  |
| `posterImageUrl` |  |
| `previewImageUrl` |  |
| `qualityStatus` |  |
| `returnBase64` | Only used by /api/v1/gifs/generate. |
| `slug` |  |
| `sourceTemplateId` |  |
| `sourceUrl` |  |
| `startMs` |  |
| `tags` |  |
| `title` |  |
| `width` |  |
| `widthPx` |  |

Operations: Create, List.

API path: `/api/gifs/{slug}/generate`

#### TemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `assetBytes` |  |
| `assetContentType` |  |
| `boxCount` |  |
| `captionCount` |  |
| `captions` |  |
| `categories` |  |
| `description` |  |
| `durationMs` |  |
| `exampleImageUrl` |  |
| `frameCount` |  |
| `height` |  |
| `id` |  |
| `imageUrl` |  |
| `mediaType` |  |
| `name` |  |
| `posterImageUrl` |  |
| `previewImageUrl` |  |
| `qualityStatus` |  |
| `slug` |  |
| `sourceTemplateId` |  |
| `sourceUrl` |  |
| `tags` |  |
| `width` |  |

Operations: List.

API path: `/api/gifs`

#### TrendAlert

| Field | Description |
| --- | --- |
| `action` |  |
| `actorId` |  |
| `aggressiveness` |  |
| `alertId` |  |
| `channels` |  |
| `deliverAllAlerts` |  |
| `event` |  |
| `explicitNiches` |  |
| `explicitRegions` |  |
| `explicitSources` |  |
| `explicitTopics` |  |
| `followerCount` |  |
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
| `assetId` |  |
| `atMs` |  |
| `audioAssetId` |  |
| `beatOffsetMs` |  |
| `bitrateKbps` |  |
| `bpm` |  |
| `cancelled` |  |
| `container` |  |
| `durationMs` |  |
| `durationSeconds` |  |
| `easing` |  |
| `error` |  |
| `frameRate` |  |
| `inputFormat` |  |
| `intensity` |  |
| `jobId` |  |
| `locale` |  |
| `mimeType` |  |
| `name` |  |
| `offsetMs` |  |
| `outputPresetId` |  |
| `outputUrl` |  |
| `planTier` |  |
| `presetId` |  |
| `progressPercent` |  |
| `project` |  |
| `projectId` |  |
| `property` |  |
| `sourceDeviceId` |  |
| `sourceUrl` |  |
| `stage` |  |
| `startMs` |  |
| `stylePresetId` |  |
| `syncToBeatGrid` |  |
| `tone` |  |
| `trackId` |  |
| `transcript` |  |
| `trendKeywords` |  |
| `type` |  |
| `updatedAt` |  |
| `value` |  |
| `watermarkEnabled` |  |
| `watermarkText` |  |
| `workerId` |  |

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
| `id` | `str` |  |
| `locale` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `status` | `str` |  |
| `stylePreset` | `str` |  |
| `systemPrompt` | `str` |  |
| `watermarkText` | `str` |  |
| `websiteUrl` | `str` |  |

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
| `chatId` | `str` |  |
| `id` | `str` |  |
| `memeSlug` | `str` |  |
| `metadata` | `dict` |  |
| `payoutReference` | `str` |  |
| `payoutStatus` | `str` |  |
| `phoneOrChatId` | `str` |  |
| `prompt` | `str` |  |
| `proof` | `dict` |  |
| `quotaBoostPerDay` | `int` |  |
| `scopes` | `list` |  |
| `userId` | `str` |  |
| `weekStart` | `str` |  |

#### Example: Load

```python
agent_infra = client.AgentInfra().load({"id": "agent_infra_id"})
```

#### Example: Create

```python
agent_infra = client.AgentInfra().create({
    "action": "example_action",  # str
    "chatId": "example_chatId",  # str
    "memeSlug": "example_memeSlug",  # str
    "phoneOrChatId": "example_phoneOrChatId",  # str
    "prompt": "example_prompt",  # str
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
| `blockedTerms` | `list` |  |
| `canvasText` | `list` |  |
| `captionCount` | `int` |  |
| `captionSets` | `list` |  |
| `entities` | `list` |  |
| `fallbackUsed` | `bool` |  |
| `generationStrategy` | `str` |  |
| `locale` | `str` |  |
| `memeId` | `str` |  |
| `memeSlug` | `str` |  |
| `name` | `str` |  |
| `ok` | `bool` |  |
| `optionCount` | `int` |  |
| `ownerToken` | `str` |  |
| `providerId` | `str` |  |
| `referenceCaptions` | `list` |  |
| `rewriteNote` | `str` |  |
| `sceneSummary` | `str` |  |
| `templateDescription` | `str` |  |
| `templateName` | `str` |  |
| `templateTags` | `list` |  |
| `tone` | `str` |  |
| `toneCues` | `list` |  |
| `trendKeywords` | `list` |  |
| `trendReferences` | `list` |  |
| `trendSignals` | `list` |  |
| `variationOffset` | `int` |  |
| `voiceRules` | `list` |  |

#### Example: Load

```python
ai_caption = client.AiCaption().load()
```

#### Example: Create

```python
ai_caption = client.AiCaption().create({
    "canvasText": [],  # list
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
| `actorId` | `str` |  |
| `afterState` | `dict` |  |
| `attempts` | `int` |  |
| `beforeState` | `dict` |  |
| `brushEdits` | `list` |  |
| `capability` | `str` |  |
| `celebrityConfidence` | `float` |  |
| `consentAttested` | `bool` |  |
| `createdAt` | `str` |  |
| `detectedFaceCount` | `float` |  |
| `edgeRefinement` | `float` |  |
| `estimatedCostUsd` | `float` |  |
| `frameTimeMs` | `float` |  |
| `height` | `float` |  |
| `id` | `str` |  |
| `input` | `dict` |  |
| `layerId` | `str` |  |
| `layerType` | `str` |  |
| `maxAttempts` | `int` |  |
| `maxFaces` | `float` |  |
| `mediaType` | `str` |  |
| `metadata` | `dict` |  |
| `nsfwScore` | `float` |  |
| `output` | `dict` |  |
| `projectId` | `str` |  |
| `providerId` | `str` |  |
| `reason` | `str` |  |
| `runAfterMs` | `int` |  |
| `sourceAssetUrl` | `str` |  |
| `sourceFaceIndex` | `float` |  |
| `sourceImageUrl` | `str` |  |
| `status` | `str` |  |
| `targetAssetUrl` | `str` |  |
| `targetFaceIndex` | `float` |  |
| `timeoutMs` | `int` |  |
| `traceId` | `str` |  |
| `updatedAt` | `str` |  |
| `versionId` | `str` |  |
| `width` | `float` |  |
| `workerId` | `str` |  |
| `workspaceId` | `str` |  |

#### Example: Load

```python
ai_job = client.AiJob().load({"id": "ai_job_id"})
```

#### Example: Create

```python
ai_job = client.AiJob().create({
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


### AiMemeGenerationSucceeded

Create an instance: `ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowHeuristicFallback` | `bool` |  |
| `captionSource` | `str` |  |
| `captions` | `list` |  |
| `correlationId` | `str` |  |
| `degradedFromAsync` | `bool` |  |
| `editableCaptions` | `list` |  |
| `flow` | `str` |  |
| `imageUrl` | `str` |  |
| `mode` | `str` |  |
| `ok` | `bool` |  |
| `preferredProviderId` | `str` |  |
| `prompt` | `str` |  |
| `rewriteNote` | `str` |  |
| `runId` | `str` |  |
| `status` | `str` |  |
| `templateId` | `str` |  |
| `tone` | `str` |  |
| `toneCues` | `list` |  |
| `variantCount` | `int` |  |
| `variants` | `list` |  |
| `workspaceId` | `str` |  |

#### Example: Create

```python
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded().create({
    "flow": "example_flow",  # str
    "mode": "example_mode",  # str
    "ok": True,  # bool
    "prompt": "example_prompt",  # str
    "status": "example_status",  # str
    "variantCount": 1,  # int
    "variants": [],  # list
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
| `actorId` | `str` |  |
| `correlationId` | `str` |  |
| `limit` | `float` |  |
| `mappingMode` | `str` |  |
| `maxSlots` | `int` |  |
| `prompt` | `str` |  |
| `sourceImageUrl` | `str` |  |
| `texts` | `list` |  |
| `trendSignals` | `list` |  |
| `workspaceId` | `str` |  |

#### Example: Load

```python
ai_provider = client.AiProvider().load()
```

#### Example: Create

```python
ai_provider = client.AiProvider().create({
    "prompt": "example_prompt",  # str
    "sourceImageUrl": "example_sourceImageUrl",  # str
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
| `displayName` | `str` |  |
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
| `authorId` | `str` |  |
| `message` | `str` |  |
| `projectId` | `str` |  |

#### Example: Load

```python
collaboration = client.Collaboration().load()
```

#### Example: Create

```python
collaboration = client.Collaboration().create({
    "message": "example_message",  # str
    "projectId": "example_projectId",  # str
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
| `canvas` | `dict` |  |
| `captions` | `list` |  |
| `generationRunId` | `str | None` |  |
| `generationVariantId` | `str | None` |  |
| `imageDataUrl` | `str` |  |
| `overlays` | `list` |  |
| `sourceImageUrl` | `str` |  |
| `templateSlug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |
| `watermark` | `dict` |  |

#### Example: Create

```python
create_meme = client.CreateMeme().create({
    "canvas": {},  # dict
    "captions": [],  # list
    "imageDataUrl": "example_imageDataUrl",  # str
    "sourceImageUrl": "example_sourceImageUrl",  # str
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
| `trendSignals` | `list` |  |

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
| `captions` | `list` |  |
| `templateSlug` | `str` |  |
| `title` | `str` |  |
| `visibility` | `str` |  |
| `watermark` | `dict` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

#### Example: Create

```python
free_caption_meme_success = client.FreeCaptionMemeSuccess().create({
    "captions": [],  # list
    "templateSlug": "example_templateSlug",  # str
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
| `assetBytes` | `int | None` |  |
| `assetContentType` | `str` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `list` |  |
| `description` | `str` |  |
| `durationMs` | `int | None` |  |
| `exampleImageUrl` | `str | None` |  |
| `frameCount` | `int | None` |  |
| `height` | `float | None` |  |
| `id` | `str` |  |
| `imageUrl` | `str` |  |
| `mediaType` | `str` |  |
| `name` | `str` |  |
| `posterImageUrl` | `str` |  |
| `qualityStatus` | `str` |  |
| `slug` | `str` |  |
| `sourceTemplateId` | `str | None` |  |
| `sourceUrl` | `str` |  |
| `tags` | `list` |  |
| `width` | `float | None` |  |

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
| `base64` | `str` |  |
| `byteLength` | `int` |  |
| `captions` | `list` |  |
| `dataUrl` | `str` |  |
| `delayMs` | `int` |  |
| `durationMs` | `int` |  |
| `filename` | `str` |  |
| `fps` | `int` |  |
| `gifSlug` | `str` | Required for /api/v1/gifs/generate. |
| `height` | `int` |  |
| `mimeType` | `str` |  |
| `pages` | `int` |  |
| `parameters` | `dict` |  |
| `returnBase64` | `bool` | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `int` |  |
| `startMs` | `int` |  |
| `tags` | `list` |  |
| `title` | `str` |  |
| `width` | `int` |  |
| `widthPx` | `int` |  |

#### Example: Create

```python
generate = client.Generate().create({
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
| `accountId` | `str` |  |
| `action` | `str` |  |
| `actorId` | `str` |  |
| `caption` | `str` |  |
| `code` | `str` |  |
| `externalAccountId` | `str` |  |
| `handle` | `str` |  |
| `limit` | `int` |  |
| `logExposure` | `bool` |  |
| `memeSlug` | `str` |  |
| `now` | `str` |  |
| `platform` | `str` |  |
| `profiles` | `list` |  |
| `shareSlug` | `str` |  |
| `surface` | `str` |  |
| `weekStart` | `str` |  |

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
| `altText` | `str` |  |
| `canonicalImageUrl` | `str` |  |
| `createdAt` | `str` |  |
| `imageUrl` | `str` |  |
| `nsfwStatus` | `str` |  |
| `shareSlug` | `str` |  |
| `shareUrl` | `str` |  |
| `shareViews` | `int` |  |
| `slug` | `str` |  |
| `tags` | `list` |  |
| `templateSlug` | `str` |  |
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
| `contentType` | `str` |  |
| `expiresInSeconds` | `int` |  |
| `ownerToken` | `str` |  |
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
| `altText` | `str` |  |
| `canonicalImageUrl` | `str` |  |
| `canvas` | `dict` |  |
| `captions` | `list` |  |
| `createdAt` | `str` |  |
| `id` | `str` |  |
| `imageUrl` | `str` |  |
| `nsfwStatus` | `str` |  |
| `overlays` | `list` |  |
| `shareSlug` | `str` |  |
| `shareUrl` | `str` |  |
| `shareViews` | `int` |  |
| `slug` | `str` |  |
| `sourceImageUrl` | `str` |  |
| `tags` | `list` |  |
| `templateSlug` | `str` |  |
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
| `assetBytes` | `int | None` |  |
| `assetContentType` | `str` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `list` |  |
| `categories` | `list` |  |
| `description` | `str` |  |
| `durationMs` | `int | None` |  |
| `exampleImageUrl` | `str | None` |  |
| `frameCount` | `int | None` |  |
| `height` | `float | None` |  |
| `id` | `str` |  |
| `imageUrl` | `str` |  |
| `mediaType` | `str` |  |
| `name` | `str` |  |
| `posterImageUrl` | `str` |  |
| `previewImageUrl` | `str` |  |
| `qualityStatus` | `str` |  |
| `slug` | `str` |  |
| `sourceTemplateId` | `str | None` |  |
| `sourceUrl` | `str` |  |
| `tags` | `list` |  |
| `width` | `float | None` |  |

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
| `stylePreset` | `str` |  |
| `systemPrompt` | `str` |  |
| `watermarkText` | `str` |  |
| `websiteUrl` | `str` |  |

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
| `assetBytes` | `int | None` |  |
| `assetContentType` | `str` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `list` |  |
| `categories` | `list` |  |
| `description` | `str` |  |
| `durationMs` | `int` |  |
| `exampleImageUrl` | `str | None` |  |
| `fps` | `int` |  |
| `frameCount` | `int | None` |  |
| `gifSlug` | `str` | Required for /api/v1/gifs/generate. |
| `height` | `float | None` |  |
| `id` | `str` |  |
| `imageUrl` | `str` |  |
| `mediaType` | `str` |  |
| `name` | `str` |  |
| `posterImageUrl` | `str` |  |
| `previewImageUrl` | `str` |  |
| `qualityStatus` | `str` |  |
| `returnBase64` | `bool` | Only used by /api/v1/gifs/generate. |
| `slug` | `str` |  |
| `sourceTemplateId` | `str | None` |  |
| `sourceUrl` | `str` |  |
| `startMs` | `int` |  |
| `tags` | `list` |  |
| `title` | `str` |  |
| `width` | `float | None` |  |
| `widthPx` | `int` |  |

#### Example: List

```python
templates = client.Template().list()
```

#### Example: Create

```python
template = client.Template().create({
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
| `assetBytes` | `int | None` |  |
| `assetContentType` | `str` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `list` |  |
| `categories` | `list` |  |
| `description` | `str` |  |
| `durationMs` | `int | None` |  |
| `exampleImageUrl` | `str | None` |  |
| `frameCount` | `int | None` |  |
| `height` | `float | None` |  |
| `id` | `str` |  |
| `imageUrl` | `str` |  |
| `mediaType` | `str` |  |
| `name` | `str` |  |
| `posterImageUrl` | `str` |  |
| `previewImageUrl` | `str` |  |
| `qualityStatus` | `str` |  |
| `slug` | `str` |  |
| `sourceTemplateId` | `str | None` |  |
| `sourceUrl` | `str` |  |
| `tags` | `list` |  |
| `width` | `float | None` |  |

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
| `actorId` | `str` |  |
| `aggressiveness` | `float` |  |
| `alertId` | `str` |  |
| `channels` | `list` |  |
| `deliverAllAlerts` | `bool` |  |
| `event` | `dict` |  |
| `explicitNiches` | `list` |  |
| `explicitRegions` | `list` |  |
| `explicitSources` | `list` |  |
| `explicitTopics` | `list` |  |
| `followerCount` | `int` |  |
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
    "actorId": "example_actorId",  # str
    "alertId": "example_alertId",  # str
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
| `assetId` | `str` |  |
| `atMs` | `float` |  |
| `audioAssetId` | `str` |  |
| `beatOffsetMs` | `int` |  |
| `bitrateKbps` | `float` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `str` |  |
| `durationMs` | `float` |  |
| `durationSeconds` | `float` |  |
| `easing` | `str` |  |
| `error` | `str` |  |
| `frameRate` | `float` |  |
| `inputFormat` | `str` |  |
| `intensity` | `float` |  |
| `jobId` | `str` |  |
| `locale` | `str` |  |
| `mimeType` | `str` |  |
| `name` | `str` |  |
| `offsetMs` | `float` |  |
| `outputPresetId` | `str` |  |
| `outputUrl` | `str` |  |
| `planTier` | `str` |  |
| `presetId` | `str` |  |
| `progressPercent` | `float` |  |
| `project` | `dict` |  |
| `projectId` | `str` |  |
| `property` | `str` |  |
| `sourceDeviceId` | `str` |  |
| `sourceUrl` | `str` |  |
| `stage` | `str` |  |
| `startMs` | `float` |  |
| `stylePresetId` | `str` |  |
| `syncToBeatGrid` | `bool` |  |
| `tone` | `str` |  |
| `trackId` | `str` |  |
| `transcript` | `str` |  |
| `trendKeywords` | `list` |  |
| `type` | `str` |  |
| `updatedAt` | `str` |  |
| `value` | `float` |  |
| `watermarkEnabled` | `bool` |  |
| `watermarkText` | `str` |  |
| `workerId` | `str` |  |

#### Example: Load

```python
video = client.Video().load()
```

#### Example: Create

```python
video = client.Video().create({
    "durationSeconds": 1,  # float
    "inputFormat": "example_inputFormat",  # str
    "mimeType": "example_mimeType",  # str
    "outputPresetId": "example_outputPresetId",  # str
    "planTier": "example_planTier",  # str
    "presetId": "example_presetId",  # str
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
trendalert = client.TrendAlert()
trendalert.load()

# trendalert.data_get() now returns the trendalert data from the last load
# trendalert.match_get() returns the last match criteria
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
