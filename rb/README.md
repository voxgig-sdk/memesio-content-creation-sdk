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
  # load returns the ENTITY — call data_get for the PublicTemplateMediaItem record (raises on error).
  publictemplatemediaitem = client.PublicTemplateMediaItem.load({ "slug" => "example_slug" })
  puts publictemplatemediaitem
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created Agent record.
created = client.Agent.create({ "name" => "example_name" })

# Update
client.Agent.update({ "id" => "example_id", "description" => "example_description", "locale" => "example_locale" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  trendalert = client.TrendAlert.load()
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

Create a mock client for unit testing — no server required:

```ruby
client = MemesioContentCreationSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
trendalert = client.TrendAlert.load()
puts trendalert
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
| `watermark` |  |

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
| `gifSlug` |  |
| `height` |  |
| `mimeType` |  |
| `pages` |  |
| `parameters` |  |
| `returnBase64` |  |
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
| `gifSlug` |  |
| `height` |  |
| `id` |  |
| `imageUrl` |  |
| `mediaType` |  |
| `name` |  |
| `posterImageUrl` |  |
| `previewImageUrl` |  |
| `qualityStatus` |  |
| `returnBase64` |  |
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
| `stylePreset` | `String` |  |
| `systemPrompt` | `String` |  |
| `watermarkText` | `String` |  |
| `websiteUrl` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Agent record (raises on error).
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
| `chatId` | `String` |  |
| `memeSlug` | `String` |  |
| `metadata` | `Hash` |  |
| `payoutReference` | `String` |  |
| `payoutStatus` | `String` |  |
| `phoneOrChatId` | `String` |  |
| `prompt` | `String` |  |
| `proof` | `Hash` |  |
| `quotaBoostPerDay` | `Integer` |  |
| `scopes` | `Array` |  |
| `userId` | `String` |  |
| `weekStart` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentInfra record (raises on error).
agent_infra = client.AgentInfra.load()
```

#### Example: Create

```ruby
agent_infra = client.AgentInfra.create({
  "action" => "example_action", # String
  "chatId" => "example_chatId", # String
  "memeSlug" => "example_memeSlug", # String
  "phoneOrChatId" => "example_phoneOrChatId", # String
  "prompt" => "example_prompt", # String
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
| `blockedTerms` | `Array` |  |
| `canvasText` | `Array` |  |
| `captionCount` | `Integer` |  |
| `captionSets` | `Array` |  |
| `entities` | `Array` |  |
| `fallbackUsed` | `Boolean` |  |
| `generationStrategy` | `String` |  |
| `locale` | `String` |  |
| `memeId` | `String` |  |
| `memeSlug` | `String` |  |
| `name` | `String` |  |
| `ok` | `Boolean` |  |
| `optionCount` | `Integer` |  |
| `ownerToken` | `String` |  |
| `providerId` | `String` |  |
| `referenceCaptions` | `Array` |  |
| `rewriteNote` | `String` |  |
| `sceneSummary` | `String` |  |
| `templateDescription` | `String` |  |
| `templateName` | `String` |  |
| `templateTags` | `Array` |  |
| `tone` | `String` |  |
| `toneCues` | `Array` |  |
| `trendKeywords` | `Array` |  |
| `trendReferences` | `Array` |  |
| `trendSignals` | `Array` |  |
| `variationOffset` | `Integer` |  |
| `voiceRules` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiCaption record (raises on error).
ai_caption = client.AiCaption.load()
```

#### Example: Create

```ruby
ai_caption = client.AiCaption.create({
  "canvasText" => [], # Array
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
| `actorId` | `String` |  |
| `afterState` | `Hash` |  |
| `attempts` | `Integer` |  |
| `beforeState` | `Hash` |  |
| `brushEdits` | `Array` |  |
| `capability` | `String` |  |
| `celebrityConfidence` | `Float` |  |
| `consentAttested` | `Boolean` |  |
| `createdAt` | `String` |  |
| `detectedFaceCount` | `Float` |  |
| `edgeRefinement` | `Float` |  |
| `estimatedCostUsd` | `Float` |  |
| `frameTimeMs` | `Float` |  |
| `height` | `Float` |  |
| `id` | `String` |  |
| `input` | `Hash` |  |
| `layerId` | `String` |  |
| `layerType` | `String` |  |
| `maxAttempts` | `Integer` |  |
| `maxFaces` | `Float` |  |
| `mediaType` | `String` |  |
| `metadata` | `Hash` |  |
| `nsfwScore` | `Float` |  |
| `output` | `Hash` |  |
| `projectId` | `String` |  |
| `providerId` | `String` |  |
| `reason` | `String` |  |
| `runAfterMs` | `Integer` |  |
| `sourceAssetUrl` | `String` |  |
| `sourceFaceIndex` | `Float` |  |
| `sourceImageUrl` | `String` |  |
| `status` | `String` |  |
| `targetAssetUrl` | `String` |  |
| `targetFaceIndex` | `Float` |  |
| `timeoutMs` | `Integer` |  |
| `traceId` | `String` |  |
| `updatedAt` | `String` |  |
| `versionId` | `String` |  |
| `width` | `Float` |  |
| `workerId` | `String` |  |
| `workspaceId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiJob record (raises on error).
ai_job = client.AiJob.load({ "id" => "ai_job_id" })
```

#### Example: Create

```ruby
ai_job = client.AiJob.create({
  "action" => "example_action", # String
  "capability" => "example_capability", # String
  "detectedFaceCount" => 1, # Float
  "height" => 1, # Float
  "id" => "example_id", # String
  "layerId" => "example_layerId", # String
  "projectId" => "example_projectId", # String
  "sourceAssetUrl" => "example_sourceAssetUrl", # String
  "sourceImageUrl" => "example_sourceImageUrl", # String
  "status" => "example_status", # String
  "targetAssetUrl" => "example_targetAssetUrl", # String
  "width" => 1, # Float
  "workerId" => "example_workerId", # String
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
| `allowHeuristicFallback` | `Boolean` |  |
| `captionSource` | `String` |  |
| `captions` | `Array` |  |
| `correlationId` | `String` |  |
| `degradedFromAsync` | `Boolean` |  |
| `editableCaptions` | `Array` |  |
| `flow` | `String` |  |
| `imageUrl` | `String` |  |
| `mode` | `String` |  |
| `ok` | `Boolean` |  |
| `preferredProviderId` | `String` |  |
| `prompt` | `String` |  |
| `rewriteNote` | `String` |  |
| `runId` | `String` |  |
| `status` | `String` |  |
| `templateId` | `String` |  |
| `tone` | `String` |  |
| `toneCues` | `Array` |  |
| `variantCount` | `Integer` |  |
| `variants` | `Array` |  |
| `workspaceId` | `String` |  |

#### Example: Create

```ruby
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded.create({
  "flow" => "example_flow", # String
  "mode" => "example_mode", # String
  "ok" => true, # Boolean
  "prompt" => "example_prompt", # String
  "status" => "example_status", # String
  "variantCount" => 1, # Integer
  "variants" => [], # Array
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
| `actorId` | `String` |  |
| `correlationId` | `String` |  |
| `limit` | `Float` |  |
| `mappingMode` | `String` |  |
| `maxSlots` | `Integer` |  |
| `prompt` | `String` |  |
| `sourceImageUrl` | `String` |  |
| `texts` | `Array` |  |
| `trendSignals` | `Array` |  |
| `workspaceId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiProvider record (raises on error).
ai_provider = client.AiProvider.load()
```

#### Example: Create

```ruby
ai_provider = client.AiProvider.create({
  "prompt" => "example_prompt", # String
  "sourceImageUrl" => "example_sourceImageUrl", # String
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
# load returns the ENTITY — call data_get for the Analytics record (raises on error).
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
| `displayName` | `String` |  |
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
# load returns the ENTITY — call data_get for the Billing record (raises on error).
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
| `authorId` | `String` |  |
| `message` | `String` |  |
| `projectId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Collaboration record (raises on error).
collaboration = client.Collaboration.load()
```

#### Example: Create

```ruby
collaboration = client.Collaboration.create({
  "message" => "example_message", # String
  "projectId" => "example_projectId", # String
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
# load returns the ENTITY — call data_get for the Compliance record (raises on error).
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
| `canvas` | `Hash` |  |
| `captions` | `Array` |  |
| `generationRunId` | `Object` |  |
| `generationVariantId` | `Object` |  |
| `imageDataUrl` | `String` |  |
| `overlays` | `Array` |  |
| `sourceImageUrl` | `String` |  |
| `templateSlug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Create

```ruby
create_meme = client.CreateMeme.create({
  "canvas" => {}, # Hash
  "captions" => [], # Array
  "imageDataUrl" => "example_imageDataUrl", # String
  "sourceImageUrl" => "example_sourceImageUrl", # String
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
| `trendSignals` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DeveloperApi record (raises on error).
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
| `captions` | `Array` |  |
| `templateSlug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Create

```ruby
free_caption_meme_success = client.FreeCaptionMemeSuccess.create({
  "captions" => [], # Array
  "templateSlug" => "example_templateSlug", # String
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
| `assetBytes` | `Object` |  |
| `assetContentType` | `String` |  |
| `boxCount` | `Integer` |  |
| `captionCount` | `Integer` |  |
| `captions` | `Array` |  |
| `description` | `String` |  |
| `durationMs` | `Object` |  |
| `exampleImageUrl` | `Object` |  |
| `frameCount` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `imageUrl` | `String` |  |
| `mediaType` | `String` |  |
| `name` | `String` |  |
| `posterImageUrl` | `String` |  |
| `qualityStatus` | `String` |  |
| `slug` | `String` |  |
| `sourceTemplateId` | `Object` |  |
| `sourceUrl` | `String` |  |
| `tags` | `Array` |  |
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
| `base64` | `String` |  |
| `byteLength` | `Integer` |  |
| `captions` | `Array` |  |
| `dataUrl` | `String` |  |
| `delayMs` | `Integer` |  |
| `durationMs` | `Integer` |  |
| `filename` | `String` |  |
| `fps` | `Integer` |  |
| `gifSlug` | `String` |  |
| `height` | `Integer` |  |
| `mimeType` | `String` |  |
| `pages` | `Integer` |  |
| `parameters` | `Hash` |  |
| `returnBase64` | `Boolean` |  |
| `sourceDurationMs` | `Integer` |  |
| `startMs` | `Integer` |  |
| `tags` | `Array` |  |
| `title` | `String` |  |
| `width` | `Integer` |  |
| `widthPx` | `Integer` |  |

#### Example: Create

```ruby
generate = client.Generate.create({
  "byteLength" => 1, # Integer
  "delayMs" => 1, # Integer
  "filename" => "example_filename", # String
  "gifSlug" => "example_gifSlug", # String
  "height" => 1, # Integer
  "mimeType" => "example_mimeType", # String
  "pages" => 1, # Integer
  "parameters" => {}, # Hash
  "sourceDurationMs" => 1, # Integer
  "width" => 1, # Integer
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
| `accountId` | `String` |  |
| `action` | `String` |  |
| `actorId` | `String` |  |
| `caption` | `String` |  |
| `code` | `String` |  |
| `externalAccountId` | `String` |  |
| `handle` | `String` |  |
| `limit` | `Integer` |  |
| `logExposure` | `Boolean` |  |
| `memeSlug` | `String` |  |
| `now` | `String` |  |
| `platform` | `String` |  |
| `profiles` | `Array` |  |
| `shareSlug` | `String` |  |
| `surface` | `String` |  |
| `weekStart` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Growth record (raises on error).
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
| `altText` | `String` |  |
| `canonicalImageUrl` | `String` |  |
| `createdAt` | `String` |  |
| `imageUrl` | `String` |  |
| `nsfwStatus` | `String` |  |
| `shareSlug` | `String` |  |
| `shareUrl` | `String` |  |
| `shareViews` | `Integer` |  |
| `slug` | `String` |  |
| `tags` | `Array` |  |
| `templateSlug` | `String` |  |
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
| `contentType` | `String` |  |
| `expiresInSeconds` | `Integer` |  |
| `ownerToken` | `String` |  |
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
| `altText` | `String` |  |
| `canonicalImageUrl` | `String` |  |
| `canvas` | `Hash` |  |
| `captions` | `Array` |  |
| `createdAt` | `String` |  |
| `imageUrl` | `String` |  |
| `nsfwStatus` | `String` |  |
| `overlays` | `Array` |  |
| `shareSlug` | `String` |  |
| `shareUrl` | `String` |  |
| `shareViews` | `Integer` |  |
| `slug` | `String` |  |
| `sourceImageUrl` | `String` |  |
| `tags` | `Array` |  |
| `templateSlug` | `String` |  |
| `title` | `String` |  |
| `visibility` | `String` |  |
| `watermark` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Meme record (raises on error).
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
| `assetBytes` | `Object` |  |
| `assetContentType` | `String` |  |
| `boxCount` | `Integer` |  |
| `captionCount` | `Integer` |  |
| `captions` | `Array` |  |
| `categories` | `Array` |  |
| `description` | `String` |  |
| `durationMs` | `Object` |  |
| `exampleImageUrl` | `Object` |  |
| `frameCount` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `imageUrl` | `String` |  |
| `mediaType` | `String` |  |
| `name` | `String` |  |
| `posterImageUrl` | `String` |  |
| `previewImageUrl` | `String` |  |
| `qualityStatus` | `String` |  |
| `slug` | `String` |  |
| `sourceTemplateId` | `Object` |  |
| `sourceUrl` | `String` |  |
| `tags` | `Array` |  |
| `width` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PublicTemplateMediaItem record (raises on error).
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
| `stylePreset` | `String` |  |
| `systemPrompt` | `String` |  |
| `watermarkText` | `String` |  |
| `websiteUrl` | `String` |  |

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
| `assetBytes` | `Object` |  |
| `assetContentType` | `String` |  |
| `boxCount` | `Integer` |  |
| `captionCount` | `Integer` |  |
| `captions` | `Array` |  |
| `categories` | `Array` |  |
| `description` | `String` |  |
| `durationMs` | `Integer` |  |
| `exampleImageUrl` | `Object` |  |
| `fps` | `Integer` |  |
| `frameCount` | `Object` |  |
| `gifSlug` | `String` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `imageUrl` | `String` |  |
| `mediaType` | `String` |  |
| `name` | `String` |  |
| `posterImageUrl` | `String` |  |
| `previewImageUrl` | `String` |  |
| `qualityStatus` | `String` |  |
| `returnBase64` | `Boolean` |  |
| `slug` | `String` |  |
| `sourceTemplateId` | `Object` |  |
| `sourceUrl` | `String` |  |
| `startMs` | `Integer` |  |
| `tags` | `Array` |  |
| `title` | `String` |  |
| `width` | `Object` |  |
| `widthPx` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of Template records (raises on error).
templates = client.Template.list
```

#### Example: Create

```ruby
template = client.Template.create({
  "slug" => "example_slug", # String
  "description" => "example_description", # String
  "height" => "example_height", # Object
  "id" => "example_id", # String
  "imageUrl" => "example_imageUrl", # String
  "mediaType" => "example_mediaType", # String
  "name" => "example_name", # String
  "sourceTemplateId" => "example_sourceTemplateId", # Object
  "width" => "example_width", # Object
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
| `assetBytes` | `Object` |  |
| `assetContentType` | `String` |  |
| `boxCount` | `Integer` |  |
| `captionCount` | `Integer` |  |
| `captions` | `Array` |  |
| `categories` | `Array` |  |
| `description` | `String` |  |
| `durationMs` | `Object` |  |
| `exampleImageUrl` | `Object` |  |
| `frameCount` | `Object` |  |
| `height` | `Object` |  |
| `id` | `String` |  |
| `imageUrl` | `String` |  |
| `mediaType` | `String` |  |
| `name` | `String` |  |
| `posterImageUrl` | `String` |  |
| `previewImageUrl` | `String` |  |
| `qualityStatus` | `String` |  |
| `slug` | `String` |  |
| `sourceTemplateId` | `Object` |  |
| `sourceUrl` | `String` |  |
| `tags` | `Array` |  |
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
| `actorId` | `String` |  |
| `aggressiveness` | `Float` |  |
| `alertId` | `String` |  |
| `channels` | `Array` |  |
| `deliverAllAlerts` | `Boolean` |  |
| `event` | `Hash` |  |
| `explicitNiches` | `Array` |  |
| `explicitRegions` | `Array` |  |
| `explicitSources` | `Array` |  |
| `explicitTopics` | `Array` |  |
| `followerCount` | `Integer` |  |
| `niche` | `String` |  |
| `region` | `String` |  |
| `source` | `String` |  |
| `topic` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TrendAlert record (raises on error).
trend_alert = client.TrendAlert.load()
```

#### Example: Create

```ruby
trend_alert = client.TrendAlert.create({
  "action" => "example_action", # String
  "actorId" => "example_actorId", # String
  "alertId" => "example_alertId", # String
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
| `assetId` | `String` |  |
| `atMs` | `Float` |  |
| `audioAssetId` | `String` |  |
| `beatOffsetMs` | `Integer` |  |
| `bitrateKbps` | `Float` |  |
| `bpm` | `Integer` |  |
| `cancelled` | `Boolean` |  |
| `container` | `String` |  |
| `durationMs` | `Float` |  |
| `durationSeconds` | `Float` |  |
| `easing` | `String` |  |
| `error` | `String` |  |
| `frameRate` | `Float` |  |
| `inputFormat` | `String` |  |
| `intensity` | `Float` |  |
| `jobId` | `String` |  |
| `locale` | `String` |  |
| `mimeType` | `String` |  |
| `name` | `String` |  |
| `offsetMs` | `Float` |  |
| `outputPresetId` | `String` |  |
| `outputUrl` | `String` |  |
| `planTier` | `String` |  |
| `presetId` | `String` |  |
| `progressPercent` | `Float` |  |
| `project` | `Hash` |  |
| `projectId` | `String` |  |
| `property` | `String` |  |
| `sourceDeviceId` | `String` |  |
| `sourceUrl` | `String` |  |
| `stage` | `String` |  |
| `startMs` | `Float` |  |
| `stylePresetId` | `String` |  |
| `syncToBeatGrid` | `Boolean` |  |
| `tone` | `String` |  |
| `trackId` | `String` |  |
| `transcript` | `String` |  |
| `trendKeywords` | `Array` |  |
| `type` | `String` |  |
| `updatedAt` | `String` |  |
| `value` | `Float` |  |
| `watermarkEnabled` | `Boolean` |  |
| `watermarkText` | `String` |  |
| `workerId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Video record (raises on error).
video = client.Video.load()
```

#### Example: Create

```ruby
video = client.Video.create({
  "durationSeconds" => 1, # Float
  "inputFormat" => "example_inputFormat", # String
  "mimeType" => "example_mimeType", # String
  "outputPresetId" => "example_outputPresetId", # String
  "planTier" => "example_planTier", # String
  "presetId" => "example_presetId", # String
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
trendalert = client.TrendAlert
trendalert.load()

# trendalert.data_get now returns the trendalert data from the last load
# trendalert.match_get returns the last match criteria
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
