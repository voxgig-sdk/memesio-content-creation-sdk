# MemesioContentCreation PHP SDK Reference

Complete API reference for the MemesioContentCreation PHP SDK.


## MemesioContentCreationSDK

### Constructor

```php
require_once __DIR__ . '/memesiocontentcreation_sdk.php';

$client = new MemesioContentCreationSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MemesioContentCreationSDK::test();
```


### Instance Methods

#### `Agent($data = null)`

Create a new `AgentEntity` instance. Pass `null` for no initial data.

#### `AgentInfra($data = null)`

Create a new `AgentInfraEntity` instance. Pass `null` for no initial data.

#### `AiCaption($data = null)`

Create a new `AiCaptionEntity` instance. Pass `null` for no initial data.

#### `AiJob($data = null)`

Create a new `AiJobEntity` instance. Pass `null` for no initial data.

#### `AiMemeGenerationSucceeded($data = null)`

Create a new `AiMemeGenerationSucceededEntity` instance. Pass `null` for no initial data.

#### `AiProvider($data = null)`

Create a new `AiProviderEntity` instance. Pass `null` for no initial data.

#### `Analytics($data = null)`

Create a new `AnalyticsEntity` instance. Pass `null` for no initial data.

#### `Auth($data = null)`

Create a new `AuthEntity` instance. Pass `null` for no initial data.

#### `Billing($data = null)`

Create a new `BillingEntity` instance. Pass `null` for no initial data.

#### `Collaboration($data = null)`

Create a new `CollaborationEntity` instance. Pass `null` for no initial data.

#### `Compliance($data = null)`

Create a new `ComplianceEntity` instance. Pass `null` for no initial data.

#### `CreateMeme($data = null)`

Create a new `CreateMemeEntity` instance. Pass `null` for no initial data.

#### `DeveloperApi($data = null)`

Create a new `DeveloperApiEntity` instance. Pass `null` for no initial data.

#### `FreeCaptionMemeSuccess($data = null)`

Create a new `FreeCaptionMemeSuccessEntity` instance. Pass `null` for no initial data.

#### `FreeTemplateSearch($data = null)`

Create a new `FreeTemplateSearchEntity` instance. Pass `null` for no initial data.

#### `Generate($data = null)`

Create a new `GenerateEntity` instance. Pass `null` for no initial data.

#### `Growth($data = null)`

Create a new `GrowthEntity` instance. Pass `null` for no initial data.

#### `ListMeme($data = null)`

Create a new `ListMemeEntity` instance. Pass `null` for no initial data.

#### `Media($data = null)`

Create a new `MediaEntity` instance. Pass `null` for no initial data.

#### `Meme($data = null)`

Create a new `MemeEntity` instance. Pass `null` for no initial data.

#### `PublicTemplateMediaItem($data = null)`

Create a new `PublicTemplateMediaItemEntity` instance. Pass `null` for no initial data.

#### `StandaloneAgentBootstrap($data = null)`

Create a new `StandaloneAgentBootstrapEntity` instance. Pass `null` for no initial data.

#### `Template($data = null)`

Create a new `TemplateEntity` instance. Pass `null` for no initial data.

#### `TemplateSearch($data = null)`

Create a new `TemplateSearchEntity` instance. Pass `null` for no initial data.

#### `TrendAlert($data = null)`

Create a new `TrendAlertEntity` instance. Pass `null` for no initial data.

#### `UploadCaptionMemeSuccess($data = null)`

Create a new `UploadCaptionMemeSuccessEntity` instance. Pass `null` for no initial data.

#### `Video($data = null)`

Create a new `VideoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MemesioContentCreationUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AgentEntity

```php
$agent = $client->Agent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `locale` | `string` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | No |  |
| `status` | `string` | No |  |
| `stylePreset` | `string` | No |  |
| `systemPrompt` | `string` | No |  |
| `watermarkText` | `string` | No |  |
| `websiteUrl` | `string` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Agent()->create([
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->load(["id" => "agent_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Agent()->update([
  "id" => "agent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentInfraEntity

```php
$agent_infra = $client->AgentInfra();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chatId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `memeSlug` | `string` | Yes |  |
| `metadata` | `array` | No |  |
| `payoutReference` | `string` | No |  |
| `payoutStatus` | `string` | No |  |
| `phoneOrChatId` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `array` | No |  |
| `quotaBoostPerDay` | `int` | No |  |
| `scopes` | `array` | No |  |
| `userId` | `string` | No |  |
| `weekStart` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentInfra()->create([
  "action" => null, // string
  "chatId" => null, // string
  "memeSlug" => null, // string
  "phoneOrChatId" => null, // string
  "prompt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AgentInfra()->load(["id" => "agent_infra_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AgentInfra()->remove(["agent_id" => "agent_id", "key_id" => "key_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentInfraEntity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiCaptionEntity

```php
$ai_caption = $client->AiCaption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedTerms` | `array` | No |  |
| `canvasText` | `array` | Yes |  |
| `captionCount` | `int` | No |  |
| `captionSets` | `array` | No |  |
| `entities` | `array` | No |  |
| `fallbackUsed` | `bool` | No |  |
| `generationStrategy` | `string` | No |  |
| `locale` | `string` | No |  |
| `memeId` | `string` | No |  |
| `memeSlug` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `bool` | No |  |
| `optionCount` | `int` | No |  |
| `ownerToken` | `string` | No |  |
| `providerId` | `string` | No |  |
| `referenceCaptions` | `array` | No |  |
| `rewriteNote` | `string` | No |  |
| `sceneSummary` | `string` | No |  |
| `templateDescription` | `string` | No |  |
| `templateName` | `string` | No |  |
| `templateTags` | `array` | No |  |
| `tone` | `string` | Yes |  |
| `toneCues` | `array` | No |  |
| `trendKeywords` | `array` | No |  |
| `trendReferences` | `array` | No |  |
| `trendSignals` | `array` | No |  |
| `variationOffset` | `int` | No |  |
| `voiceRules` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiCaption()->create([
  "canvasText" => null, // array
  "name" => null, // string
  "tone" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiCaption()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiCaptionEntity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiJobEntity

```php
$ai_job = $client->AiJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `afterState` | `array` | No |  |
| `attempts` | `int` | No |  |
| `beforeState` | `array` | No |  |
| `brushEdits` | `array` | No |  |
| `capability` | `string` | Yes |  |
| `celebrityConfidence` | `float` | No |  |
| `consentAttested` | `bool` | No |  |
| `createdAt` | `string` | No |  |
| `detectedFaceCount` | `float` | Yes |  |
| `edgeRefinement` | `float` | No |  |
| `estimatedCostUsd` | `float` | No |  |
| `frameTimeMs` | `float` | No |  |
| `height` | `float` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `array` | No |  |
| `layerId` | `string` | Yes |  |
| `layerType` | `string` | No |  |
| `maxAttempts` | `int` | No |  |
| `maxFaces` | `float` | No |  |
| `mediaType` | `string` | No |  |
| `metadata` | `array` | No |  |
| `nsfwScore` | `float` | No |  |
| `output` | `array` | No |  |
| `projectId` | `string` | Yes |  |
| `providerId` | `string` | No |  |
| `reason` | `string` | No |  |
| `runAfterMs` | `int` | No |  |
| `sourceAssetUrl` | `string` | Yes |  |
| `sourceFaceIndex` | `float` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `targetAssetUrl` | `string` | Yes |  |
| `targetFaceIndex` | `float` | No |  |
| `timeoutMs` | `int` | No |  |
| `traceId` | `string` | No |  |
| `updatedAt` | `string` | No |  |
| `versionId` | `string` | No |  |
| `width` | `float` | Yes |  |
| `workerId` | `string` | Yes |  |
| `workspaceId` | `string` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiJob()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiJob()->load(["id" => "ai_job_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiJobEntity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```php
$ai_meme_generation_succeeded = $client->AiMemeGenerationSucceeded();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowHeuristicFallback` | `bool` | No |  |
| `captionSource` | `string` | No |  |
| `captions` | `array` | No |  |
| `correlationId` | `string` | No |  |
| `degradedFromAsync` | `bool` | No |  |
| `editableCaptions` | `array` | No |  |
| `flow` | `string` | Yes |  |
| `imageUrl` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `preferredProviderId` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `rewriteNote` | `string` | No |  |
| `runId` | `string` | No |  |
| `status` | `string` | Yes |  |
| `templateId` | `string` | No |  |
| `tone` | `string` | No |  |
| `toneCues` | `array` | No |  |
| `variantCount` | `int` | Yes |  |
| `variants` | `array` | Yes |  |
| `workspaceId` | `string` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiMemeGenerationSucceeded()->create([
  "flow" => null, // string
  "mode" => null, // string
  "ok" => null, // bool
  "prompt" => null, // string
  "status" => null, // string
  "variantCount" => null, // int
  "variants" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiMemeGenerationSucceededEntity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiProviderEntity

```php
$ai_provider = $client->AiProvider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actorId` | `string` | No |  |
| `correlationId` | `string` | No |  |
| `limit` | `float` | No |  |
| `mappingMode` | `string` | No |  |
| `maxSlots` | `int` | No |  |
| `prompt` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `texts` | `array` | No |  |
| `trendSignals` | `array` | No |  |
| `workspaceId` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiProvider()->create([
  "prompt" => null, // string
  "sourceImageUrl" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiProvider()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiProviderEntity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnalyticsEntity

```php
$analytics = $client->Analytics();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Analytics()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalyticsEntity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthEntity

```php
$auth = $client->Auth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `displayName` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Auth()->create([
  "email" => null, // string
  "password" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthEntity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingEntity

```php
$billing = $client->Billing();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Billing()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingEntity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CollaborationEntity

```php
$collaboration = $client->Collaboration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorId` | `string` | No |  |
| `message` | `string` | Yes |  |
| `projectId` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Collaboration()->create([
  "message" => null, // string
  "projectId" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Collaboration()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CollaborationEntity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComplianceEntity

```php
$compliance = $client->Compliance();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Compliance()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComplianceEntity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateMemeEntity

```php
$create_meme = $client->CreateMeme();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canvas` | `array` | Yes |  |
| `captions` | `array` | Yes |  |
| `generationRunId` | `mixed` | No |  |
| `generationVariantId` | `mixed` | No |  |
| `imageDataUrl` | `string` | Yes |  |
| `overlays` | `array` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `templateSlug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateMeme()->create([
  "canvas" => null, // array
  "captions" => null, // array
  "imageDataUrl" => null, // string
  "sourceImageUrl" => null, // string
  "watermark" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateMemeEntity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeveloperApiEntity

```php
$developer_api = $client->DeveloperApi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `float` | No |  |
| `prompt` | `string` | Yes |  |
| `trendSignals` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeveloperApi()->create([
  "prompt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeveloperApi()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeveloperApiEntity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```php
$free_caption_meme_success = $client->FreeCaptionMemeSuccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions` | `array` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `array` | No | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FreeCaptionMemeSuccess()->create([
  "captions" => null, // array
  "templateSlug" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FreeCaptionMemeSuccessEntity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FreeTemplateSearchEntity

```php
$free_template_search = $client->FreeTemplateSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `mixed` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | Yes |  |
| `captionCount` | `int` | Yes |  |
| `captions` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `durationMs` | `mixed` | No |  |
| `exampleImageUrl` | `mixed` | No |  |
| `frameCount` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `mixed` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `array` | No |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FreeTemplateSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FreeTemplateSearchEntity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateEntity

```php
$generate = $client->Generate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base64` | `string` | No |  |
| `byteLength` | `int` | Yes |  |
| `captions` | `array` | No |  |
| `dataUrl` | `string` | No |  |
| `delayMs` | `int` | Yes |  |
| `durationMs` | `int` | No |  |
| `filename` | `string` | Yes |  |
| `fps` | `int` | No |  |
| `gifSlug` | `string` | Yes | Required for /api/v1/gifs/generate. |
| `height` | `int` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `pages` | `int` | Yes |  |
| `parameters` | `array` | Yes |  |
| `returnBase64` | `bool` | No | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `int` | Yes |  |
| `startMs` | `int` | No |  |
| `tags` | `array` | No |  |
| `title` | `string` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Generate()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateEntity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GrowthEntity

```php
$growth = $client->Growth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `string` | No |  |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `caption` | `string` | No |  |
| `code` | `string` | No |  |
| `externalAccountId` | `string` | No |  |
| `handle` | `string` | No |  |
| `limit` | `int` | No |  |
| `logExposure` | `bool` | No |  |
| `memeSlug` | `string` | No |  |
| `now` | `string` | No |  |
| `platform` | `string` | No |  |
| `profiles` | `array` | No |  |
| `shareSlug` | `string` | No |  |
| `surface` | `string` | No |  |
| `weekStart` | `string` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Growth()->create([
  "action" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Growth()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GrowthEntity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListMemeEntity

```php
$list_meme = $client->ListMeme();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `string` | Yes |  |
| `canonicalImageUrl` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `nsfwStatus` | `string` | Yes |  |
| `shareSlug` | `string` | Yes |  |
| `shareUrl` | `string` | Yes |  |
| `shareViews` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `tags` | `array` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListMeme()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListMemeEntity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MediaEntity

```php
$media = $client->Media();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `contentType` | `string` | No |  |
| `expiresInSeconds` | `int` | No |  |
| `ownerToken` | `string` | No |  |
| `path` | `string` | No |  |
| `prefix` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Media()->create([
  "action" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MediaEntity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemeEntity

```php
$meme = $client->Meme();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `string` | Yes |  |
| `canonicalImageUrl` | `string` | Yes |  |
| `canvas` | `array` | Yes |  |
| `captions` | `array` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | No |  |
| `imageUrl` | `string` | Yes |  |
| `nsfwStatus` | `string` | Yes |  |
| `overlays` | `array` | Yes |  |
| `shareSlug` | `string` | Yes |  |
| `shareUrl` | `string` | Yes |  |
| `shareViews` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `tags` | `array` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Meme()->load(["id" => "meme_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Meme()->remove(["id" => "meme_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemeEntity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```php
$public_template_media_item = $client->PublicTemplateMediaItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `mixed` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `array` | Yes |  |
| `categories` | `array` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `mixed` | No |  |
| `exampleImageUrl` | `mixed` | No |  |
| `frameCount` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `mixed` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `array` | Yes |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PublicTemplateMediaItem()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicTemplateMediaItemEntity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```php
$standalone_agent_bootstrap = $client->StandaloneAgentBootstrap();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `handle` | `string` | Yes |  |
| `locale` | `string` | No |  |
| `name` | `string` | Yes |  |
| `stylePreset` | `string` | No |  |
| `systemPrompt` | `string` | No |  |
| `watermarkText` | `string` | No |  |
| `websiteUrl` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StandaloneAgentBootstrap()->create([
  "handle" => null, // string
  "name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StandaloneAgentBootstrapEntity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateEntity

```php
$template = $client->Template();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `mixed` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `array` | No |  |
| `categories` | `array` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `int` | No |  |
| `exampleImageUrl` | `mixed` | No |  |
| `fps` | `int` | No |  |
| `frameCount` | `mixed` | No |  |
| `gifSlug` | `string` | No | Required for /api/v1/gifs/generate. |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `returnBase64` | `bool` | No | Only used by /api/v1/gifs/generate. |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `mixed` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `startMs` | `int` | No |  |
| `tags` | `array` | No |  |
| `title` | `string` | No |  |
| `width` | `mixed` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Template()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Template()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateEntity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateSearchEntity

```php
$template_search = $client->TemplateSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `mixed` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `array` | Yes |  |
| `categories` | `array` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `mixed` | No |  |
| `exampleImageUrl` | `mixed` | No |  |
| `frameCount` | `mixed` | No |  |
| `height` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `mixed` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `array` | Yes |  |
| `width` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TemplateSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateSearchEntity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrendAlertEntity

```php
$trend_alert = $client->TrendAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | Yes |  |
| `aggressiveness` | `float` | No |  |
| `alertId` | `string` | Yes |  |
| `channels` | `array` | No |  |
| `deliverAllAlerts` | `bool` | No |  |
| `event` | `array` | No |  |
| `explicitNiches` | `array` | No |  |
| `explicitRegions` | `array` | No |  |
| `explicitSources` | `array` | No |  |
| `explicitTopics` | `array` | No |  |
| `followerCount` | `int` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TrendAlert()->create([
  "action" => null, // string
  "actorId" => null, // string
  "alertId" => null, // string
  "topic" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TrendAlert()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrendAlertEntity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```php
$upload_caption_meme_success = $client->UploadCaptionMemeSuccess();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UploadCaptionMemeSuccess()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadCaptionMemeSuccessEntity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoEntity

```php
$video = $client->Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `assetId` | `string` | No |  |
| `atMs` | `float` | No |  |
| `audioAssetId` | `string` | No |  |
| `beatOffsetMs` | `int` | No |  |
| `bitrateKbps` | `float` | No |  |
| `bpm` | `int` | No |  |
| `cancelled` | `bool` | No |  |
| `container` | `string` | No |  |
| `durationMs` | `float` | No |  |
| `durationSeconds` | `float` | Yes |  |
| `easing` | `string` | No |  |
| `error` | `string` | No |  |
| `frameRate` | `float` | No |  |
| `inputFormat` | `string` | Yes |  |
| `intensity` | `float` | No |  |
| `jobId` | `string` | No |  |
| `locale` | `string` | No |  |
| `mimeType` | `string` | Yes |  |
| `name` | `string` | No |  |
| `offsetMs` | `float` | No |  |
| `outputPresetId` | `string` | Yes |  |
| `outputUrl` | `string` | No |  |
| `planTier` | `string` | Yes |  |
| `presetId` | `string` | Yes |  |
| `progressPercent` | `float` | No |  |
| `project` | `array` | No |  |
| `projectId` | `string` | No |  |
| `property` | `string` | No |  |
| `sourceDeviceId` | `string` | No |  |
| `sourceUrl` | `string` | No |  |
| `stage` | `string` | No |  |
| `startMs` | `float` | No |  |
| `stylePresetId` | `string` | No |  |
| `syncToBeatGrid` | `bool` | No |  |
| `tone` | `string` | No |  |
| `trackId` | `string` | No |  |
| `transcript` | `string` | No |  |
| `trendKeywords` | `array` | No |  |
| `type` | `string` | No |  |
| `updatedAt` | `string` | No |  |
| `value` | `float` | No |  |
| `watermarkEnabled` | `bool` | No |  |
| `watermarkText` | `string` | No |  |
| `workerId` | `string` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Video()->create([
  "durationSeconds" => null, // float
  "inputFormat" => null, // string
  "mimeType" => null, // string
  "outputPresetId" => null, // string
  "planTier" => null, // string
  "presetId" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Video()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoEntity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new MemesioContentCreationSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

