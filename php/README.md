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
    // load() returns the ENTITY — call data_get() for the PublicTemplateMediaItem record (throws on error).
    $publictemplatemediaitem = $client->PublicTemplateMediaItem()->load(["slug" => "example_slug"]);
    print_r($publictemplatemediaitem);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Agent record.
$created = $client->Agent()->create(["name" => "example_name"]);

// Update
$client->Agent()->update(["id" => "example_id", "description" => "example_description", "locale" => "example_locale"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $trendalert = $client->TrendAlert()->load();
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

Create a mock client for unit testing — no server required:

```php
$client = MemesioContentCreationSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$trendalert = $client->TrendAlert()->load();
print_r($trendalert);
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `stylePreset` | `string` |  |
| `systemPrompt` | `string` |  |
| `watermarkText` | `string` |  |
| `websiteUrl` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Agent record (throws on error).
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
| `chatId` | `string` |  |
| `memeSlug` | `string` |  |
| `metadata` | `array` |  |
| `payoutReference` | `string` |  |
| `payoutStatus` | `string` |  |
| `phoneOrChatId` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `array` |  |
| `quotaBoostPerDay` | `int` |  |
| `scopes` | `array` |  |
| `userId` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentInfra record (throws on error).
$agent_infra = $client->AgentInfra()->load();
```

#### Example: Create

```php
$agent_infra = $client->AgentInfra()->create([
    "action" => null, // string
    "chatId" => null, // string
    "memeSlug" => null, // string
    "phoneOrChatId" => null, // string
    "prompt" => null, // string
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
| `blockedTerms` | `array` |  |
| `canvasText` | `array` |  |
| `captionCount` | `int` |  |
| `captionSets` | `array` |  |
| `entities` | `array` |  |
| `fallbackUsed` | `bool` |  |
| `generationStrategy` | `string` |  |
| `locale` | `string` |  |
| `memeId` | `string` |  |
| `memeSlug` | `string` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `optionCount` | `int` |  |
| `ownerToken` | `string` |  |
| `providerId` | `string` |  |
| `referenceCaptions` | `array` |  |
| `rewriteNote` | `string` |  |
| `sceneSummary` | `string` |  |
| `templateDescription` | `string` |  |
| `templateName` | `string` |  |
| `templateTags` | `array` |  |
| `tone` | `string` |  |
| `toneCues` | `array` |  |
| `trendKeywords` | `array` |  |
| `trendReferences` | `array` |  |
| `trendSignals` | `array` |  |
| `variationOffset` | `int` |  |
| `voiceRules` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiCaption record (throws on error).
$ai_caption = $client->AiCaption()->load();
```

#### Example: Create

```php
$ai_caption = $client->AiCaption()->create([
    "canvasText" => null, // array
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
| `actorId` | `string` |  |
| `afterState` | `array` |  |
| `attempts` | `int` |  |
| `beforeState` | `array` |  |
| `brushEdits` | `array` |  |
| `capability` | `string` |  |
| `celebrityConfidence` | `float` |  |
| `consentAttested` | `bool` |  |
| `createdAt` | `string` |  |
| `detectedFaceCount` | `float` |  |
| `edgeRefinement` | `float` |  |
| `estimatedCostUsd` | `float` |  |
| `frameTimeMs` | `float` |  |
| `height` | `float` |  |
| `id` | `string` |  |
| `input` | `array` |  |
| `layerId` | `string` |  |
| `layerType` | `string` |  |
| `maxAttempts` | `int` |  |
| `maxFaces` | `float` |  |
| `mediaType` | `string` |  |
| `metadata` | `array` |  |
| `nsfwScore` | `float` |  |
| `output` | `array` |  |
| `projectId` | `string` |  |
| `providerId` | `string` |  |
| `reason` | `string` |  |
| `runAfterMs` | `int` |  |
| `sourceAssetUrl` | `string` |  |
| `sourceFaceIndex` | `float` |  |
| `sourceImageUrl` | `string` |  |
| `status` | `string` |  |
| `targetAssetUrl` | `string` |  |
| `targetFaceIndex` | `float` |  |
| `timeoutMs` | `int` |  |
| `traceId` | `string` |  |
| `updatedAt` | `string` |  |
| `versionId` | `string` |  |
| `width` | `float` |  |
| `workerId` | `string` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiJob record (throws on error).
$ai_job = $client->AiJob()->load(["id" => "ai_job_id"]);
```

#### Example: Create

```php
$ai_job = $client->AiJob()->create([
    "action" => null, // string
    "capability" => null, // string
    "detectedFaceCount" => null, // float
    "height" => null, // float
    "id" => null, // string
    "layerId" => null, // string
    "projectId" => null, // string
    "sourceAssetUrl" => null, // string
    "sourceImageUrl" => null, // string
    "status" => null, // string
    "targetAssetUrl" => null, // string
    "width" => null, // float
    "workerId" => null, // string
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
| `allowHeuristicFallback` | `bool` |  |
| `captionSource` | `string` |  |
| `captions` | `array` |  |
| `correlationId` | `string` |  |
| `degradedFromAsync` | `bool` |  |
| `editableCaptions` | `array` |  |
| `flow` | `string` |  |
| `imageUrl` | `string` |  |
| `mode` | `string` |  |
| `ok` | `bool` |  |
| `preferredProviderId` | `string` |  |
| `prompt` | `string` |  |
| `rewriteNote` | `string` |  |
| `runId` | `string` |  |
| `status` | `string` |  |
| `templateId` | `string` |  |
| `tone` | `string` |  |
| `toneCues` | `array` |  |
| `variantCount` | `int` |  |
| `variants` | `array` |  |
| `workspaceId` | `string` |  |

#### Example: Create

```php
$ai_meme_generation_succeeded = $client->AiMemeGenerationSucceeded()->create([
    "flow" => null, // string
    "mode" => null, // string
    "ok" => null, // bool
    "prompt" => null, // string
    "status" => null, // string
    "variantCount" => null, // int
    "variants" => null, // array
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
| `actorId` | `string` |  |
| `correlationId` | `string` |  |
| `limit` | `float` |  |
| `mappingMode` | `string` |  |
| `maxSlots` | `int` |  |
| `prompt` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `texts` | `array` |  |
| `trendSignals` | `array` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiProvider record (throws on error).
$ai_provider = $client->AiProvider()->load();
```

#### Example: Create

```php
$ai_provider = $client->AiProvider()->create([
    "prompt" => null, // string
    "sourceImageUrl" => null, // string
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
// load() returns the ENTITY — call data_get() for the Analytics record (throws on error).
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
| `displayName` | `string` |  |
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
// load() returns the ENTITY — call data_get() for the Billing record (throws on error).
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
| `authorId` | `string` |  |
| `message` | `string` |  |
| `projectId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Collaboration record (throws on error).
$collaboration = $client->Collaboration()->load();
```

#### Example: Create

```php
$collaboration = $client->Collaboration()->create([
    "message" => null, // string
    "projectId" => null, // string
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
// load() returns the ENTITY — call data_get() for the Compliance record (throws on error).
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
| `canvas` | `array` |  |
| `captions` | `array` |  |
| `generationRunId` | `mixed` |  |
| `generationVariantId` | `mixed` |  |
| `imageDataUrl` | `string` |  |
| `overlays` | `array` |  |
| `sourceImageUrl` | `string` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` |  |

#### Example: Create

```php
$create_meme = $client->CreateMeme()->create([
    "canvas" => null, // array
    "captions" => null, // array
    "imageDataUrl" => null, // string
    "sourceImageUrl" => null, // string
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
| `trendSignals` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeveloperApi record (throws on error).
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
| `captions` | `array` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

#### Example: Create

```php
$free_caption_meme_success = $client->FreeCaptionMemeSuccess()->create([
    "captions" => null, // array
    "templateSlug" => null, // string
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
| `assetBytes` | `mixed` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `array` |  |
| `description` | `string` |  |
| `durationMs` | `mixed` |  |
| `exampleImageUrl` | `mixed` |  |
| `frameCount` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `mixed` |  |
| `sourceUrl` | `string` |  |
| `tags` | `array` |  |
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
| `base64` | `string` |  |
| `byteLength` | `int` |  |
| `captions` | `array` |  |
| `dataUrl` | `string` |  |
| `delayMs` | `int` |  |
| `durationMs` | `int` |  |
| `filename` | `string` |  |
| `fps` | `int` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `int` |  |
| `mimeType` | `string` |  |
| `pages` | `int` |  |
| `parameters` | `array` |  |
| `returnBase64` | `bool` | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `int` |  |
| `startMs` | `int` |  |
| `tags` | `array` |  |
| `title` | `string` |  |
| `width` | `int` |  |
| `widthPx` | `int` |  |

#### Example: Create

```php
$generate = $client->Generate()->create([
    "byteLength" => null, // int
    "delayMs" => null, // int
    "filename" => null, // string
    "gifSlug" => null, // string
    "height" => null, // int
    "mimeType" => null, // string
    "pages" => null, // int
    "parameters" => null, // array
    "sourceDurationMs" => null, // int
    "width" => null, // int
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
| `accountId` | `string` |  |
| `action` | `string` |  |
| `actorId` | `string` |  |
| `caption` | `string` |  |
| `code` | `string` |  |
| `externalAccountId` | `string` |  |
| `handle` | `string` |  |
| `limit` | `int` |  |
| `logExposure` | `bool` |  |
| `memeSlug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profiles` | `array` |  |
| `shareSlug` | `string` |  |
| `surface` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Growth record (throws on error).
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
| `altText` | `string` |  |
| `canonicalImageUrl` | `string` |  |
| `createdAt` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `int` |  |
| `slug` | `string` |  |
| `tags` | `array` |  |
| `templateSlug` | `string` |  |
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
| `contentType` | `string` |  |
| `expiresInSeconds` | `int` |  |
| `ownerToken` | `string` |  |
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
| `altText` | `string` |  |
| `canonicalImageUrl` | `string` |  |
| `canvas` | `array` |  |
| `captions` | `array` |  |
| `createdAt` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `overlays` | `array` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `int` |  |
| `slug` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `tags` | `array` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Meme record (throws on error).
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
| `assetBytes` | `mixed` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `array` |  |
| `categories` | `array` |  |
| `description` | `string` |  |
| `durationMs` | `mixed` |  |
| `exampleImageUrl` | `mixed` |  |
| `frameCount` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `mixed` |  |
| `sourceUrl` | `string` |  |
| `tags` | `array` |  |
| `width` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PublicTemplateMediaItem record (throws on error).
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
| `stylePreset` | `string` |  |
| `systemPrompt` | `string` |  |
| `watermarkText` | `string` |  |
| `websiteUrl` | `string` |  |

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
| `assetBytes` | `mixed` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `array` |  |
| `categories` | `array` |  |
| `description` | `string` |  |
| `durationMs` | `int` |  |
| `exampleImageUrl` | `mixed` |  |
| `fps` | `int` |  |
| `frameCount` | `mixed` |  |
| `gifSlug` | `string` | Required for /api/v1/gifs/generate. |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `returnBase64` | `bool` | Only used by /api/v1/gifs/generate. |
| `slug` | `string` |  |
| `sourceTemplateId` | `mixed` |  |
| `sourceUrl` | `string` |  |
| `startMs` | `int` |  |
| `tags` | `array` |  |
| `title` | `string` |  |
| `width` | `mixed` |  |
| `widthPx` | `int` |  |

#### Example: List

```php
// list() returns an array of Template records (throws on error).
$templates = $client->Template()->list();
```

#### Example: Create

```php
$template = $client->Template()->create([
    "slug" => null, // string
    "description" => null, // string
    "height" => null, // mixed
    "id" => null, // string
    "imageUrl" => null, // string
    "mediaType" => null, // string
    "name" => null, // string
    "sourceTemplateId" => null, // mixed
    "width" => null, // mixed
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
| `assetBytes` | `mixed` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `array` |  |
| `categories` | `array` |  |
| `description` | `string` |  |
| `durationMs` | `mixed` |  |
| `exampleImageUrl` | `mixed` |  |
| `frameCount` | `mixed` |  |
| `height` | `mixed` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `mixed` |  |
| `sourceUrl` | `string` |  |
| `tags` | `array` |  |
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
| `actorId` | `string` |  |
| `aggressiveness` | `float` |  |
| `alertId` | `string` |  |
| `channels` | `array` |  |
| `deliverAllAlerts` | `bool` |  |
| `event` | `array` |  |
| `explicitNiches` | `array` |  |
| `explicitRegions` | `array` |  |
| `explicitSources` | `array` |  |
| `explicitTopics` | `array` |  |
| `followerCount` | `int` |  |
| `niche` | `string` |  |
| `region` | `string` |  |
| `source` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TrendAlert record (throws on error).
$trend_alert = $client->TrendAlert()->load();
```

#### Example: Create

```php
$trend_alert = $client->TrendAlert()->create([
    "action" => null, // string
    "actorId" => null, // string
    "alertId" => null, // string
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
| `assetId` | `string` |  |
| `atMs` | `float` |  |
| `audioAssetId` | `string` |  |
| `beatOffsetMs` | `int` |  |
| `bitrateKbps` | `float` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `string` |  |
| `durationMs` | `float` |  |
| `durationSeconds` | `float` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frameRate` | `float` |  |
| `inputFormat` | `string` |  |
| `intensity` | `float` |  |
| `jobId` | `string` |  |
| `locale` | `string` |  |
| `mimeType` | `string` |  |
| `name` | `string` |  |
| `offsetMs` | `float` |  |
| `outputPresetId` | `string` |  |
| `outputUrl` | `string` |  |
| `planTier` | `string` |  |
| `presetId` | `string` |  |
| `progressPercent` | `float` |  |
| `project` | `array` |  |
| `projectId` | `string` |  |
| `property` | `string` |  |
| `sourceDeviceId` | `string` |  |
| `sourceUrl` | `string` |  |
| `stage` | `string` |  |
| `startMs` | `float` |  |
| `stylePresetId` | `string` |  |
| `syncToBeatGrid` | `bool` |  |
| `tone` | `string` |  |
| `trackId` | `string` |  |
| `transcript` | `string` |  |
| `trendKeywords` | `array` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `value` | `float` |  |
| `watermarkEnabled` | `bool` |  |
| `watermarkText` | `string` |  |
| `workerId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Video record (throws on error).
$video = $client->Video()->load();
```

#### Example: Create

```php
$video = $client->Video()->create([
    "durationSeconds" => null, // float
    "inputFormat" => null, // string
    "mimeType" => null, // string
    "outputPresetId" => null, // string
    "planTier" => null, // string
    "presetId" => null, // string
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
$trendalert = $client->TrendAlert();
$trendalert->load();

// $trendalert->data_get() now returns the trendalert data from the last load
// $trendalert->match_get() returns the last match criteria
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
