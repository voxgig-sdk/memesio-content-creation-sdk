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
client:Agent():update({ id = created:data_get()["id"], description = "example_description", locale = "example_locale" })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local trendalert, err = client:TrendAlert():load()
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

local result, err = client:TrendAlert():load()
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
| `id` | `string` |  |
| `locale` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
| `stylePreset` | `string` |  |
| `systemPrompt` | `string` |  |
| `watermarkText` | `string` |  |
| `websiteUrl` | `string` |  |

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
| `chatId` | `string` |  |
| `id` | `string` |  |
| `memeSlug` | `string` |  |
| `metadata` | `table` |  |
| `payoutReference` | `string` |  |
| `payoutStatus` | `string` |  |
| `phoneOrChatId` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `table` |  |
| `quotaBoostPerDay` | `number` |  |
| `scopes` | `table` |  |
| `userId` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```lua
local agent_infra, err = client:AgentInfra():load()
```

#### Example: Create

```lua
local agent_infra, err = client:AgentInfra():create({
  action = "example_action", -- string
  chatId = "example_chatId", -- string
  memeSlug = "example_memeSlug", -- string
  phoneOrChatId = "example_phoneOrChatId", -- string
  prompt = "example_prompt", -- string
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
| `blockedTerms` | `table` |  |
| `canvasText` | `table` |  |
| `captionCount` | `number` |  |
| `captionSets` | `table` |  |
| `entities` | `table` |  |
| `fallbackUsed` | `boolean` |  |
| `generationStrategy` | `string` |  |
| `locale` | `string` |  |
| `memeId` | `string` |  |
| `memeSlug` | `string` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `optionCount` | `number` |  |
| `ownerToken` | `string` |  |
| `providerId` | `string` |  |
| `referenceCaptions` | `table` |  |
| `rewriteNote` | `string` |  |
| `sceneSummary` | `string` |  |
| `templateDescription` | `string` |  |
| `templateName` | `string` |  |
| `templateTags` | `table` |  |
| `tone` | `string` |  |
| `toneCues` | `table` |  |
| `trendKeywords` | `table` |  |
| `trendReferences` | `table` |  |
| `trendSignals` | `table` |  |
| `variationOffset` | `number` |  |
| `voiceRules` | `table` |  |

#### Example: Load

```lua
local ai_caption, err = client:AiCaption():load()
```

#### Example: Create

```lua
local ai_caption, err = client:AiCaption():create({
  canvasText = {}, -- table
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
| `actorId` | `string` |  |
| `afterState` | `table` |  |
| `attempts` | `number` |  |
| `beforeState` | `table` |  |
| `brushEdits` | `table` |  |
| `capability` | `string` |  |
| `celebrityConfidence` | `number` |  |
| `consentAttested` | `boolean` |  |
| `createdAt` | `string` |  |
| `detectedFaceCount` | `number` |  |
| `edgeRefinement` | `number` |  |
| `estimatedCostUsd` | `number` |  |
| `frameTimeMs` | `number` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `input` | `table` |  |
| `layerId` | `string` |  |
| `layerType` | `string` |  |
| `maxAttempts` | `number` |  |
| `maxFaces` | `number` |  |
| `mediaType` | `string` |  |
| `metadata` | `table` |  |
| `nsfwScore` | `number` |  |
| `output` | `table` |  |
| `projectId` | `string` |  |
| `providerId` | `string` |  |
| `reason` | `string` |  |
| `runAfterMs` | `number` |  |
| `sourceAssetUrl` | `string` |  |
| `sourceFaceIndex` | `number` |  |
| `sourceImageUrl` | `string` |  |
| `status` | `string` |  |
| `targetAssetUrl` | `string` |  |
| `targetFaceIndex` | `number` |  |
| `timeoutMs` | `number` |  |
| `traceId` | `string` |  |
| `updatedAt` | `string` |  |
| `versionId` | `string` |  |
| `width` | `number` |  |
| `workerId` | `string` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```lua
local ai_job, err = client:AiJob():load({ id = "ai_job_id" })
```

#### Example: Create

```lua
local ai_job, err = client:AiJob():create({
  action = "example_action", -- string
  capability = "example_capability", -- string
  detectedFaceCount = 1, -- number
  height = 1, -- number
  id = "example_id", -- string
  layerId = "example_layerId", -- string
  projectId = "example_projectId", -- string
  sourceAssetUrl = "example_sourceAssetUrl", -- string
  sourceImageUrl = "example_sourceImageUrl", -- string
  status = "example_status", -- string
  targetAssetUrl = "example_targetAssetUrl", -- string
  width = 1, -- number
  workerId = "example_workerId", -- string
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
| `allowHeuristicFallback` | `boolean` |  |
| `captionSource` | `string` |  |
| `captions` | `table` |  |
| `correlationId` | `string` |  |
| `degradedFromAsync` | `boolean` |  |
| `editableCaptions` | `table` |  |
| `flow` | `string` |  |
| `imageUrl` | `string` |  |
| `mode` | `string` |  |
| `ok` | `boolean` |  |
| `preferredProviderId` | `string` |  |
| `prompt` | `string` |  |
| `rewriteNote` | `string` |  |
| `runId` | `string` |  |
| `status` | `string` |  |
| `templateId` | `string` |  |
| `tone` | `string` |  |
| `toneCues` | `table` |  |
| `variantCount` | `number` |  |
| `variants` | `table` |  |
| `workspaceId` | `string` |  |

#### Example: Create

```lua
local ai_meme_generation_succeeded, err = client:AiMemeGenerationSucceeded():create({
  flow = "example_flow", -- string
  mode = "example_mode", -- string
  ok = true, -- boolean
  prompt = "example_prompt", -- string
  status = "example_status", -- string
  variantCount = 1, -- number
  variants = {}, -- table
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
| `actorId` | `string` |  |
| `correlationId` | `string` |  |
| `limit` | `number` |  |
| `mappingMode` | `string` |  |
| `maxSlots` | `number` |  |
| `prompt` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `texts` | `table` |  |
| `trendSignals` | `table` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```lua
local ai_provider, err = client:AiProvider():load()
```

#### Example: Create

```lua
local ai_provider, err = client:AiProvider():create({
  prompt = "example_prompt", -- string
  sourceImageUrl = "example_sourceImageUrl", -- string
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
| `displayName` | `string` |  |
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
| `authorId` | `string` |  |
| `message` | `string` |  |
| `projectId` | `string` |  |

#### Example: Load

```lua
local collaboration, err = client:Collaboration():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local collaboration, err = client:Collaboration():create({
  message = "example_message", -- string
  projectId = "example_projectId", -- string
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
| `canvas` | `table` |  |
| `captions` | `table` |  |
| `generationRunId` | `string|nil` |  |
| `generationVariantId` | `string|nil` |  |
| `imageDataUrl` | `string` |  |
| `overlays` | `table` |  |
| `sourceImageUrl` | `string` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `table` |  |

#### Example: Create

```lua
local create_meme, err = client:CreateMeme():create({
  canvas = {}, -- table
  captions = {}, -- table
  imageDataUrl = "example_imageDataUrl", -- string
  sourceImageUrl = "example_sourceImageUrl", -- string
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
| `trendSignals` | `table` |  |

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
| `captions` | `table` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `table` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

#### Example: Create

```lua
local free_caption_meme_success, err = client:FreeCaptionMemeSuccess():create({
  captions = {}, -- table
  templateSlug = "example_templateSlug", -- string
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
| `assetBytes` | `number|nil` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `table` |  |
| `description` | `string` |  |
| `durationMs` | `number|nil` |  |
| `exampleImageUrl` | `string|nil` |  |
| `frameCount` | `number|nil` |  |
| `height` | `number|nil` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string|nil` |  |
| `sourceUrl` | `string` |  |
| `tags` | `table` |  |
| `width` | `number|nil` |  |

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
| `base64` | `string` |  |
| `byteLength` | `number` |  |
| `captions` | `table` |  |
| `dataUrl` | `string` |  |
| `delayMs` | `number` |  |
| `durationMs` | `number` |  |
| `filename` | `string` |  |
| `fps` | `number` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `number` |  |
| `mimeType` | `string` |  |
| `pages` | `number` |  |
| `parameters` | `table` |  |
| `returnBase64` | `boolean` | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `number` |  |
| `startMs` | `number` |  |
| `tags` | `table` |  |
| `title` | `string` |  |
| `width` | `number` |  |
| `widthPx` | `number` |  |

#### Example: Create

```lua
local generate, err = client:Generate():create({
  byteLength = 1, -- number
  delayMs = 1, -- number
  filename = "example_filename", -- string
  gifSlug = "example_gifSlug", -- string
  height = 1, -- number
  mimeType = "example_mimeType", -- string
  pages = 1, -- number
  parameters = {}, -- table
  sourceDurationMs = 1, -- number
  width = 1, -- number
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
| `accountId` | `string` |  |
| `action` | `string` |  |
| `actorId` | `string` |  |
| `caption` | `string` |  |
| `code` | `string` |  |
| `externalAccountId` | `string` |  |
| `handle` | `string` |  |
| `limit` | `number` |  |
| `logExposure` | `boolean` |  |
| `memeSlug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profiles` | `table` |  |
| `shareSlug` | `string` |  |
| `surface` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```lua
local growth, err = client:Growth():load({ actor_id = "actor_id" })
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
| `altText` | `string` |  |
| `canonicalImageUrl` | `string` |  |
| `createdAt` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `number` |  |
| `slug` | `string` |  |
| `tags` | `table` |  |
| `templateSlug` | `string` |  |
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
| `contentType` | `string` |  |
| `expiresInSeconds` | `number` |  |
| `ownerToken` | `string` |  |
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
| `altText` | `string` |  |
| `canonicalImageUrl` | `string` |  |
| `canvas` | `table` |  |
| `captions` | `table` |  |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `overlays` | `table` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `number` |  |
| `slug` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `tags` | `table` |  |
| `templateSlug` | `string` |  |
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
| `assetBytes` | `number|nil` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `table` |  |
| `categories` | `table` |  |
| `description` | `string` |  |
| `durationMs` | `number|nil` |  |
| `exampleImageUrl` | `string|nil` |  |
| `frameCount` | `number|nil` |  |
| `height` | `number|nil` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string|nil` |  |
| `sourceUrl` | `string` |  |
| `tags` | `table` |  |
| `width` | `number|nil` |  |

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
| `stylePreset` | `string` |  |
| `systemPrompt` | `string` |  |
| `watermarkText` | `string` |  |
| `websiteUrl` | `string` |  |

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
| `assetBytes` | `number|nil` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `table` |  |
| `categories` | `table` |  |
| `description` | `string` |  |
| `durationMs` | `number` |  |
| `exampleImageUrl` | `string|nil` |  |
| `fps` | `number` |  |
| `frameCount` | `number|nil` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `number|nil` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `returnBase64` | `boolean` | Only used by /api/v1/gifs/generate. |
| `slug` | `string` |  |
| `sourceTemplateId` | `string|nil` |  |
| `sourceUrl` | `string` |  |
| `startMs` | `number` |  |
| `tags` | `table` |  |
| `title` | `string` |  |
| `width` | `number|nil` |  |
| `widthPx` | `number` |  |

#### Example: List

```lua
local templates, err = client:Template():list()
```

#### Example: Create

```lua
local template, err = client:Template():create({
  slug = "example_slug", -- string
  description = "example_description", -- string
  height = 1, -- number|nil
  id = "example_id", -- string
  imageUrl = "example_imageUrl", -- string
  mediaType = "example_mediaType", -- string
  name = "example_name", -- string
  sourceTemplateId = "example_sourceTemplateId", -- string|nil
  width = 1, -- number|nil
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
| `assetBytes` | `number|nil` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `table` |  |
| `categories` | `table` |  |
| `description` | `string` |  |
| `durationMs` | `number|nil` |  |
| `exampleImageUrl` | `string|nil` |  |
| `frameCount` | `number|nil` |  |
| `height` | `number|nil` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string|nil` |  |
| `sourceUrl` | `string` |  |
| `tags` | `table` |  |
| `width` | `number|nil` |  |

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
| `actorId` | `string` |  |
| `aggressiveness` | `number` |  |
| `alertId` | `string` |  |
| `channels` | `table` |  |
| `deliverAllAlerts` | `boolean` |  |
| `event` | `table` |  |
| `explicitNiches` | `table` |  |
| `explicitRegions` | `table` |  |
| `explicitSources` | `table` |  |
| `explicitTopics` | `table` |  |
| `followerCount` | `number` |  |
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
  actorId = "example_actorId", -- string
  alertId = "example_alertId", -- string
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
| `assetId` | `string` |  |
| `atMs` | `number` |  |
| `audioAssetId` | `string` |  |
| `beatOffsetMs` | `number` |  |
| `bitrateKbps` | `number` |  |
| `bpm` | `number` |  |
| `cancelled` | `boolean` |  |
| `container` | `string` |  |
| `durationMs` | `number` |  |
| `durationSeconds` | `number` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frameRate` | `number` |  |
| `inputFormat` | `string` |  |
| `intensity` | `number` |  |
| `jobId` | `string` |  |
| `locale` | `string` |  |
| `mimeType` | `string` |  |
| `name` | `string` |  |
| `offsetMs` | `number` |  |
| `outputPresetId` | `string` |  |
| `outputUrl` | `string` |  |
| `planTier` | `string` |  |
| `presetId` | `string` |  |
| `progressPercent` | `number` |  |
| `project` | `table` |  |
| `projectId` | `string` |  |
| `property` | `string` |  |
| `sourceDeviceId` | `string` |  |
| `sourceUrl` | `string` |  |
| `stage` | `string` |  |
| `startMs` | `number` |  |
| `stylePresetId` | `string` |  |
| `syncToBeatGrid` | `boolean` |  |
| `tone` | `string` |  |
| `trackId` | `string` |  |
| `transcript` | `string` |  |
| `trendKeywords` | `table` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `value` | `number` |  |
| `watermarkEnabled` | `boolean` |  |
| `watermarkText` | `string` |  |
| `workerId` | `string` |  |

#### Example: Load

```lua
local video, err = client:Video():load()
```

#### Example: Create

```lua
local video, err = client:Video():create({
  durationSeconds = 1, -- number
  inputFormat = "example_inputFormat", -- string
  mimeType = "example_mimeType", -- string
  outputPresetId = "example_outputPresetId", -- string
  planTier = "example_planTier", -- string
  presetId = "example_presetId", -- string
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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
local trendalert = client:TrendAlert()
trendalert:load()

-- trendalert:data_get() now returns the trendalert data from the last load
-- trendalert:match_get() returns the last match criteria
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
