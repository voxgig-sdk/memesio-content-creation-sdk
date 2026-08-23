# MemesioContentCreation TypeScript SDK



The TypeScript SDK for the MemesioContentCreation API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Agent()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { MemesioContentCreationSDK } from '@voxgig-sdk/memesio-content-creation'

const client = new MemesioContentCreationSDK({
  apikey: process.env.MEMESIO_CONTENT_CREATION_APIKEY,
})
```

### 3. Load a publictemplatemediaitem

PublicTemplateMediaItem is nested under slug, so provide the `slug`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const publictemplatemediaitem = await client.PublicTemplateMediaItem().load({
    slug: 'example_slug',
  })
  console.log(publictemplatemediaitem)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Agent ENTITY (.data() for the record)
const created = await client.Agent().create({
  name: 'example_name',
})

// Update
const updated = await client.Agent().update({
  id: 'example_id',
  description: 'example_description',
  locale: 'example_locale',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const trendalert = await client.TrendAlert().load()
  console.log(trendalert)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = MemesioContentCreationSDK.test()

const trendalert = await client.TrendAlert().load()
// trendalert is the entity, populated with mock response data
// — call trendalert.data() for the record itself
console.log(trendalert)
```

You can also use the instance method:

```ts
const client = new MemesioContentCreationSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.TrendAlert()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new MemesioContentCreationSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### MemesioContentCreationSDK

#### Constructor

```ts
new MemesioContentCreationSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Agent(data?)` | `AgentEntity` | Create an Agent entity instance. |
| `AgentInfra(data?)` | `AgentInfraEntity` | Create an AgentInfra entity instance. |
| `AiCaption(data?)` | `AiCaptionEntity` | Create an AiCaption entity instance. |
| `AiJob(data?)` | `AiJobEntity` | Create an AiJob entity instance. |
| `AiMemeGenerationSucceeded(data?)` | `AiMemeGenerationSucceededEntity` | Create an AiMemeGenerationSucceeded entity instance. |
| `AiProvider(data?)` | `AiProviderEntity` | Create an AiProvider entity instance. |
| `Analytics(data?)` | `AnalyticsEntity` | Create an Analytics entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `Billing(data?)` | `BillingEntity` | Create a Billing entity instance. |
| `Collaboration(data?)` | `CollaborationEntity` | Create a Collaboration entity instance. |
| `Compliance(data?)` | `ComplianceEntity` | Create a Compliance entity instance. |
| `CreateMeme(data?)` | `CreateMemeEntity` | Create a CreateMeme entity instance. |
| `DeveloperApi(data?)` | `DeveloperApiEntity` | Create a DeveloperApi entity instance. |
| `FreeCaptionMemeSuccess(data?)` | `FreeCaptionMemeSuccessEntity` | Create a FreeCaptionMemeSuccess entity instance. |
| `FreeTemplateSearch(data?)` | `FreeTemplateSearchEntity` | Create a FreeTemplateSearch entity instance. |
| `Generate(data?)` | `GenerateEntity` | Create a Generate entity instance. |
| `Growth(data?)` | `GrowthEntity` | Create a Growth entity instance. |
| `ListMeme(data?)` | `ListMemeEntity` | Create a ListMeme entity instance. |
| `Media(data?)` | `MediaEntity` | Create a Media entity instance. |
| `Meme(data?)` | `MemeEntity` | Create a Meme entity instance. |
| `PublicTemplateMediaItem(data?)` | `PublicTemplateMediaItemEntity` | Create a PublicTemplateMediaItem entity instance. |
| `StandaloneAgentBootstrap(data?)` | `StandaloneAgentBootstrapEntity` | Create a StandaloneAgentBootstrap entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `TemplateSearch(data?)` | `TemplateSearchEntity` | Create a TemplateSearch entity instance. |
| `TrendAlert(data?)` | `TrendAlertEntity` | Create a TrendAlert entity instance. |
| `UploadCaptionMemeSuccess(data?)` | `UploadCaptionMemeSuccessEntity` | Create an UploadCaptionMemeSuccess entity instance. |
| `Video(data?)` | `VideoEntity` | Create a Video entity instance. |
| `tester(testopts?, sdkopts?)` | `MemesioContentCreationSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `MemesioContentCreationSDK.test(testopts?, sdkopts?)` | `MemesioContentCreationSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): MemesioContentCreationSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, load, update.

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

Operations: create, load, remove.

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

Operations: create, load.

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

Operations: create, load.

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

Operations: create.

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

Operations: create, load.

API path: `/api/ai/templates/detect`

#### Analytics

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/analytics/experiments/templates`

#### Auth

| Field | Description |
| --- | --- |
| `displayName` |  |
| `email` |  |
| `password` |  |

Operations: create.

API path: `/api/auth/resend-verification`

#### Billing

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/billing/usage`

#### Collaboration

| Field | Description |
| --- | --- |
| `authorId` |  |
| `message` |  |
| `projectId` |  |

Operations: create, load.

API path: `/api/collab/comments`

#### Compliance

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create.

API path: `/api/memes`

#### DeveloperApi

| Field | Description |
| --- | --- |
| `limit` |  |
| `prompt` |  |
| `trendSignals` |  |

Operations: create, load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `captions` |  |
| `templateSlug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

Operations: create.

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

Operations: list.

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

Operations: create.

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

Operations: create, load.

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

Operations: list.

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

Operations: create.

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

Operations: load, remove.

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

Operations: load.

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

Operations: create.

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

Operations: create, list.

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

Operations: list.

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

Operations: create, load.

API path: `/api/alerts/delivery`

#### UploadCaptionMemeSuccess

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, load.

API path: `/api/video/drafts`



## Entities


### Agent

Create an instance: `const agent = client.Agent()`

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
| `stylePreset` | `string` |  |
| `systemPrompt` | `string` |  |
| `watermarkText` | `string` |  |
| `websiteUrl` | `string` |  |

#### Example: Load

```ts
const agent = await client.Agent().load({ id: 'agent_id' })
```

#### Example: Create

```ts
const agent = await client.Agent().create({
  name: 'example_name',
})
```


### AgentInfra

Create an instance: `const agent_infra = client.AgentInfra()`

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
| `memeSlug` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `payoutReference` | `string` |  |
| `payoutStatus` | `string` |  |
| `phoneOrChatId` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `Record<string, any>` |  |
| `quotaBoostPerDay` | `number` |  |
| `scopes` | `any[]` |  |
| `userId` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```ts
const agent_infra = await client.AgentInfra().load()
```

#### Example: Create

```ts
const agent_infra = await client.AgentInfra().create({
  action: 'example_action',
  chatId: 'example_chatId',
  memeSlug: 'example_memeSlug',
  phoneOrChatId: 'example_phoneOrChatId',
  prompt: 'example_prompt',
})
```


### AiCaption

Create an instance: `const ai_caption = client.AiCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedTerms` | `any[]` |  |
| `canvasText` | `any[]` |  |
| `captionCount` | `number` |  |
| `captionSets` | `any[]` |  |
| `entities` | `any[]` |  |
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
| `referenceCaptions` | `any[]` |  |
| `rewriteNote` | `string` |  |
| `sceneSummary` | `string` |  |
| `templateDescription` | `string` |  |
| `templateName` | `string` |  |
| `templateTags` | `any[]` |  |
| `tone` | `string` |  |
| `toneCues` | `any[]` |  |
| `trendKeywords` | `any[]` |  |
| `trendReferences` | `any[]` |  |
| `trendSignals` | `any[]` |  |
| `variationOffset` | `number` |  |
| `voiceRules` | `any[]` |  |

#### Example: Load

```ts
const ai_caption = await client.AiCaption().load()
```

#### Example: Create

```ts
const ai_caption = await client.AiCaption().create({
  canvasText: [],
  name: 'example_name',
  tone: 'example_tone',
})
```


### AiJob

Create an instance: `const ai_job = client.AiJob()`

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
| `afterState` | `Record<string, any>` |  |
| `attempts` | `number` |  |
| `beforeState` | `Record<string, any>` |  |
| `brushEdits` | `any[]` |  |
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
| `input` | `Record<string, any>` |  |
| `layerId` | `string` |  |
| `layerType` | `string` |  |
| `maxAttempts` | `number` |  |
| `maxFaces` | `number` |  |
| `mediaType` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `nsfwScore` | `number` |  |
| `output` | `Record<string, any>` |  |
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

```ts
const ai_job = await client.AiJob().load({ id: 'ai_job_id' })
```

#### Example: Create

```ts
const ai_job = await client.AiJob().create({
  action: 'example_action',
  capability: 'example_capability',
  detectedFaceCount: 1,
  height: 1,
  id: 'example_id',
  layerId: 'example_layerId',
  projectId: 'example_projectId',
  sourceAssetUrl: 'example_sourceAssetUrl',
  sourceImageUrl: 'example_sourceImageUrl',
  status: 'example_status',
  targetAssetUrl: 'example_targetAssetUrl',
  width: 1,
  workerId: 'example_workerId',
})
```


### AiMemeGenerationSucceeded

Create an instance: `const ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowHeuristicFallback` | `boolean` |  |
| `captionSource` | `string` |  |
| `captions` | `any[]` |  |
| `correlationId` | `string` |  |
| `degradedFromAsync` | `boolean` |  |
| `editableCaptions` | `any[]` |  |
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
| `toneCues` | `any[]` |  |
| `variantCount` | `number` |  |
| `variants` | `any[]` |  |
| `workspaceId` | `string` |  |

#### Example: Create

```ts
const ai_meme_generation_succeeded = await client.AiMemeGenerationSucceeded().create({
  flow: 'example_flow',
  mode: 'example_mode',
  ok: true,
  prompt: 'example_prompt',
  status: 'example_status',
  variantCount: 1,
  variants: [],
})
```


### AiProvider

Create an instance: `const ai_provider = client.AiProvider()`

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
| `texts` | `any[]` |  |
| `trendSignals` | `any[]` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```ts
const ai_provider = await client.AiProvider().load()
```

#### Example: Create

```ts
const ai_provider = await client.AiProvider().create({
  prompt: 'example_prompt',
  sourceImageUrl: 'example_sourceImageUrl',
})
```


### Analytics

Create an instance: `const analytics = client.Analytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const analytics = await client.Analytics().load()
```


### Auth

Create an instance: `const auth = client.Auth()`

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

```ts
const auth = await client.Auth().create({
  email: 'example_email',
  password: 'example_password',
})
```


### Billing

Create an instance: `const billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const billing = await client.Billing().load()
```


### Collaboration

Create an instance: `const collaboration = client.Collaboration()`

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

```ts
const collaboration = await client.Collaboration().load()
```

#### Example: Create

```ts
const collaboration = await client.Collaboration().create({
  message: 'example_message',
  projectId: 'example_projectId',
})
```


### Compliance

Create an instance: `const compliance = client.Compliance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const compliance = await client.Compliance().load()
```


### CreateMeme

Create an instance: `const create_meme = client.CreateMeme()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canvas` | `Record<string, any>` |  |
| `captions` | `any[]` |  |
| `generationRunId` | `string | null` |  |
| `generationVariantId` | `string | null` |  |
| `imageDataUrl` | `string` |  |
| `overlays` | `any[]` |  |
| `sourceImageUrl` | `string` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `Record<string, any>` |  |

#### Example: Create

```ts
const create_meme = await client.CreateMeme().create({
  canvas: {},
  captions: [],
  imageDataUrl: 'example_imageDataUrl',
  sourceImageUrl: 'example_sourceImageUrl',
  watermark: {},
})
```


### DeveloperApi

Create an instance: `const developer_api = client.DeveloperApi()`

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
| `trendSignals` | `any[]` |  |

#### Example: Load

```ts
const developer_api = await client.DeveloperApi().load()
```

#### Example: Create

```ts
const developer_api = await client.DeveloperApi().create({
  prompt: 'example_prompt',
})
```


### FreeCaptionMemeSuccess

Create an instance: `const free_caption_meme_success = client.FreeCaptionMemeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions` | `any[]` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `Record<string, any>` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

#### Example: Create

```ts
const free_caption_meme_success = await client.FreeCaptionMemeSuccess().create({
  captions: [],
  templateSlug: 'example_templateSlug',
})
```


### FreeTemplateSearch

Create an instance: `const free_template_search = client.FreeTemplateSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `assetBytes` | `number | null` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `any[]` |  |
| `description` | `string` |  |
| `durationMs` | `number | null` |  |
| `exampleImageUrl` | `string | null` |  |
| `frameCount` | `number | null` |  |
| `height` | `number | null` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string | null` |  |
| `sourceUrl` | `string` |  |
| `tags` | `any[]` |  |
| `width` | `number | null` |  |

#### Example: List

```ts
const free_template_searchs = await client.FreeTemplateSearch().list()
```


### Generate

Create an instance: `const generate = client.Generate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base64` | `string` |  |
| `byteLength` | `number` |  |
| `captions` | `any[]` |  |
| `dataUrl` | `string` |  |
| `delayMs` | `number` |  |
| `durationMs` | `number` |  |
| `filename` | `string` |  |
| `fps` | `number` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `number` |  |
| `mimeType` | `string` |  |
| `pages` | `number` |  |
| `parameters` | `Record<string, any>` |  |
| `returnBase64` | `boolean` | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `number` |  |
| `startMs` | `number` |  |
| `tags` | `any[]` |  |
| `title` | `string` |  |
| `width` | `number` |  |
| `widthPx` | `number` |  |

#### Example: Create

```ts
const generate = await client.Generate().create({
  byteLength: 1,
  delayMs: 1,
  filename: 'example_filename',
  gifSlug: 'example_gifSlug',
  height: 1,
  mimeType: 'example_mimeType',
  pages: 1,
  parameters: {},
  sourceDurationMs: 1,
  width: 1,
})
```


### Growth

Create an instance: `const growth = client.Growth()`

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
| `profiles` | `any[]` |  |
| `shareSlug` | `string` |  |
| `surface` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```ts
const growth = await client.Growth().load()
```

#### Example: Create

```ts
const growth = await client.Growth().create({
  action: 'example_action',
})
```


### ListMeme

Create an instance: `const list_meme = client.ListMeme()`

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
| `tags` | `any[]` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |

#### Example: List

```ts
const list_memes = await client.ListMeme().list()
```


### Media

Create an instance: `const media = client.Media()`

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

```ts
const media = await client.Media().create({
  action: 'example_action',
})
```


### Meme

Create an instance: `const meme = client.Meme()`

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
| `canvas` | `Record<string, any>` |  |
| `captions` | `any[]` |  |
| `createdAt` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `overlays` | `any[]` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `number` |  |
| `slug` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `tags` | `any[]` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `Record<string, any>` |  |

#### Example: Load

```ts
const meme = await client.Meme().load({ id: 'meme_id' })
```


### PublicTemplateMediaItem

Create an instance: `const public_template_media_item = client.PublicTemplateMediaItem()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `assetBytes` | `number | null` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `any[]` |  |
| `categories` | `any[]` |  |
| `description` | `string` |  |
| `durationMs` | `number | null` |  |
| `exampleImageUrl` | `string | null` |  |
| `frameCount` | `number | null` |  |
| `height` | `number | null` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string | null` |  |
| `sourceUrl` | `string` |  |
| `tags` | `any[]` |  |
| `width` | `number | null` |  |

#### Example: Load

```ts
const public_template_media_item = await client.PublicTemplateMediaItem().load({ slug: 'slug' })
```


### StandaloneAgentBootstrap

Create an instance: `const standalone_agent_bootstrap = client.StandaloneAgentBootstrap()`

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

```ts
const standalone_agent_bootstrap = await client.StandaloneAgentBootstrap().create({
  handle: 'example_handle',
  name: 'example_name',
})
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `assetBytes` | `number | null` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `any[]` |  |
| `categories` | `any[]` |  |
| `description` | `string` |  |
| `durationMs` | `number` |  |
| `exampleImageUrl` | `string | null` |  |
| `fps` | `number` |  |
| `frameCount` | `number | null` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `number | null` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `returnBase64` | `boolean` | Only used by /api/v1/gifs/generate. |
| `slug` | `string` |  |
| `sourceTemplateId` | `string | null` |  |
| `sourceUrl` | `string` |  |
| `startMs` | `number` |  |
| `tags` | `any[]` |  |
| `title` | `string` |  |
| `width` | `number | null` |  |
| `widthPx` | `number` |  |

#### Example: List

```ts
const templates = await client.Template().list()
```

#### Example: Create

```ts
const template = await client.Template().create({
  slug: 'example_slug',
  description: 'example_description',
  height: 'example_height',
  id: 'example_id',
  imageUrl: 'example_imageUrl',
  mediaType: 'example_mediaType',
  name: 'example_name',
  sourceTemplateId: 'example_sourceTemplateId',
  width: 'example_width',
})
```


### TemplateSearch

Create an instance: `const template_search = client.TemplateSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `boolean` |  |
| `assetBytes` | `number | null` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `number` |  |
| `captionCount` | `number` |  |
| `captions` | `any[]` |  |
| `categories` | `any[]` |  |
| `description` | `string` |  |
| `durationMs` | `number | null` |  |
| `exampleImageUrl` | `string | null` |  |
| `frameCount` | `number | null` |  |
| `height` | `number | null` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `string | null` |  |
| `sourceUrl` | `string` |  |
| `tags` | `any[]` |  |
| `width` | `number | null` |  |

#### Example: List

```ts
const template_searchs = await client.TemplateSearch().list()
```


### TrendAlert

Create an instance: `const trend_alert = client.TrendAlert()`

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
| `channels` | `any[]` |  |
| `deliverAllAlerts` | `boolean` |  |
| `event` | `Record<string, any>` |  |
| `explicitNiches` | `any[]` |  |
| `explicitRegions` | `any[]` |  |
| `explicitSources` | `any[]` |  |
| `explicitTopics` | `any[]` |  |
| `followerCount` | `number` |  |
| `niche` | `string` |  |
| `region` | `string` |  |
| `source` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```ts
const trend_alert = await client.TrendAlert().load()
```

#### Example: Create

```ts
const trend_alert = await client.TrendAlert().create({
  action: 'example_action',
  actorId: 'example_actorId',
  alertId: 'example_alertId',
  topic: 'example_topic',
})
```


### UploadCaptionMemeSuccess

Create an instance: `const upload_caption_meme_success = client.UploadCaptionMemeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const upload_caption_meme_success = await client.UploadCaptionMemeSuccess().create({
})
```


### Video

Create an instance: `const video = client.Video()`

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
| `project` | `Record<string, any>` |  |
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
| `trendKeywords` | `any[]` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `value` | `number` |  |
| `watermarkEnabled` | `boolean` |  |
| `watermarkText` | `string` |  |
| `workerId` | `string` |  |

#### Example: Load

```ts
const video = await client.Video().load()
```

#### Example: Create

```ts
const video = await client.Video().create({
  durationSeconds: 1,
  inputFormat: 'example_inputFormat',
  mimeType: 'example_mimeType',
  outputPresetId: 'example_outputPresetId',
  planTier: 'example_planTier',
  presetId: 'example_presetId',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
memesio-content-creation/
├── src/
│   ├── MemesioContentCreationSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { MemesioContentCreationSDK } from '@voxgig-sdk/memesio-content-creation'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const trendalert = client.TrendAlert()
await trendalert.load()

// trendalert.data() now returns the trendalert data from the last `load`
// trendalert.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
