# MemesioContentCreation Ruby SDK Reference

Complete API reference for the MemesioContentCreation Ruby SDK.


## MemesioContentCreationSDK

### Constructor

```ruby
require_relative 'MemesioContentCreation_sdk'

client = MemesioContentCreationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MemesioContentCreationSDK.test
```


### Instance Methods

#### `Agent(data = nil)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data = nil)`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data = nil)`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data = nil)`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data = nil)`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data = nil)`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data = nil)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data = nil)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data = nil)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data = nil)`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data = nil)`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data = nil)`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data = nil)`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data = nil)`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data = nil)`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data = nil)`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Growth(data = nil)`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `ListMeme(data = nil)`

Create a new `ListMeme` entity instance. Pass `nil` for no initial data.

#### `Media(data = nil)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data = nil)`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data = nil)`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data = nil)`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data = nil)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TemplateSearch(data = nil)`

Create a new `TemplateSearch` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data = nil)`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data = nil)`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data = nil)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AgentEntity

```ruby
agent = client.Agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `locale` | `String` | No |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | No |  |
| `status` | `String` | No |  |
| `stylePreset` | `String` | No |  |
| `systemPrompt` | `String` | No |  |
| `watermarkText` | `String` | No |  |
| `websiteUrl` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Agent.create({
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Agent.load({ "id" => "agent_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Agent.update({
  "id" => "agent_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentInfraEntity

```ruby
agent_infra = client.AgentInfra
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `chatId` | `String` | Yes |  |
| `id` | `String` | No |  |
| `memeSlug` | `String` | Yes |  |
| `metadata` | `Hash` | No |  |
| `payoutReference` | `String` | No |  |
| `payoutStatus` | `String` | No |  |
| `phoneOrChatId` | `String` | Yes |  |
| `prompt` | `String` | Yes |  |
| `proof` | `Hash` | No |  |
| `quotaBoostPerDay` | `Integer` | No |  |
| `scopes` | `Array` | No |  |
| `userId` | `String` | No |  |
| `weekStart` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentInfra.create({
  "action" => "example_action", # String
  "chatId" => "example_chatId", # String
  "memeSlug" => "example_memeSlug", # String
  "phoneOrChatId" => "example_phoneOrChatId", # String
  "prompt" => "example_prompt", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AgentInfra.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AgentInfra.remove({ "agent_id" => "agent_id", "key_id" => "key_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiCaptionEntity

```ruby
ai_caption = client.AiCaption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedTerms` | `Array` | No |  |
| `canvasText` | `Array` | Yes |  |
| `captionCount` | `Integer` | No |  |
| `captionSets` | `Array` | No |  |
| `entities` | `Array` | No |  |
| `fallbackUsed` | `Boolean` | No |  |
| `generationStrategy` | `String` | No |  |
| `locale` | `String` | No |  |
| `memeId` | `String` | No |  |
| `memeSlug` | `String` | No |  |
| `name` | `String` | Yes |  |
| `ok` | `Boolean` | No |  |
| `optionCount` | `Integer` | No |  |
| `ownerToken` | `String` | No |  |
| `providerId` | `String` | No |  |
| `referenceCaptions` | `Array` | No |  |
| `rewriteNote` | `String` | No |  |
| `sceneSummary` | `String` | No |  |
| `templateDescription` | `String` | No |  |
| `templateName` | `String` | No |  |
| `templateTags` | `Array` | No |  |
| `tone` | `String` | Yes |  |
| `toneCues` | `Array` | No |  |
| `trendKeywords` | `Array` | No |  |
| `trendReferences` | `Array` | No |  |
| `trendSignals` | `Array` | No |  |
| `variationOffset` | `Integer` | No |  |
| `voiceRules` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiCaption.create({
  "canvasText" => [], # Array
  "name" => "example_name", # String
  "tone" => "example_tone", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiCaption.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiJobEntity

```ruby
ai_job = client.AiJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `actorId` | `String` | No |  |
| `afterState` | `Hash` | No |  |
| `attempts` | `Integer` | No |  |
| `beforeState` | `Hash` | No |  |
| `brushEdits` | `Array` | No |  |
| `capability` | `String` | Yes |  |
| `celebrityConfidence` | `Float` | No |  |
| `consentAttested` | `Boolean` | No |  |
| `createdAt` | `String` | No |  |
| `detectedFaceCount` | `Float` | Yes |  |
| `edgeRefinement` | `Float` | No |  |
| `estimatedCostUsd` | `Float` | No |  |
| `frameTimeMs` | `Float` | No |  |
| `height` | `Float` | Yes |  |
| `id` | `String` | Yes |  |
| `input` | `Hash` | No |  |
| `layerId` | `String` | Yes |  |
| `layerType` | `String` | No |  |
| `maxAttempts` | `Integer` | No |  |
| `maxFaces` | `Float` | No |  |
| `mediaType` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `nsfwScore` | `Float` | No |  |
| `output` | `Hash` | No |  |
| `projectId` | `String` | Yes |  |
| `providerId` | `String` | No |  |
| `reason` | `String` | No |  |
| `runAfterMs` | `Integer` | No |  |
| `sourceAssetUrl` | `String` | Yes |  |
| `sourceFaceIndex` | `Float` | No |  |
| `sourceImageUrl` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `targetAssetUrl` | `String` | Yes |  |
| `targetFaceIndex` | `Float` | No |  |
| `timeoutMs` | `Integer` | No |  |
| `traceId` | `String` | No |  |
| `updatedAt` | `String` | No |  |
| `versionId` | `String` | No |  |
| `width` | `Float` | Yes |  |
| `workerId` | `String` | Yes |  |
| `workspaceId` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiJob.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiJob.load({ "id" => "ai_job_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```ruby
ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowHeuristicFallback` | `Boolean` | No |  |
| `captionSource` | `String` | No |  |
| `captions` | `Array` | No |  |
| `correlationId` | `String` | No |  |
| `degradedFromAsync` | `Boolean` | No |  |
| `editableCaptions` | `Array` | No |  |
| `flow` | `String` | Yes |  |
| `imageUrl` | `String` | No |  |
| `mode` | `String` | Yes |  |
| `ok` | `Boolean` | Yes |  |
| `preferredProviderId` | `String` | No |  |
| `prompt` | `String` | Yes |  |
| `rewriteNote` | `String` | No |  |
| `runId` | `String` | No |  |
| `status` | `String` | Yes |  |
| `templateId` | `String` | No |  |
| `tone` | `String` | No |  |
| `toneCues` | `Array` | No |  |
| `variantCount` | `Integer` | Yes |  |
| `variants` | `Array` | Yes |  |
| `workspaceId` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiMemeGenerationSucceeded.create({
  "flow" => "example_flow", # String
  "mode" => "example_mode", # String
  "ok" => true, # Boolean
  "prompt" => "example_prompt", # String
  "status" => "example_status", # String
  "variantCount" => 1, # Integer
  "variants" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiProviderEntity

```ruby
ai_provider = client.AiProvider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actorId` | `String` | No |  |
| `correlationId` | `String` | No |  |
| `limit` | `Float` | No |  |
| `mappingMode` | `String` | No |  |
| `maxSlots` | `Integer` | No |  |
| `prompt` | `String` | Yes |  |
| `sourceImageUrl` | `String` | Yes |  |
| `texts` | `Array` | No |  |
| `trendSignals` | `Array` | No |  |
| `workspaceId` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiProvider.create({
  "prompt" => "example_prompt", # String
  "sourceImageUrl" => "example_sourceImageUrl", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiProvider.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnalyticsEntity

```ruby
analytics = client.Analytics
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Analytics.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthEntity

```ruby
auth = client.Auth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `displayName` | `String` | No |  |
| `email` | `String` | Yes |  |
| `password` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Auth.create({
  "email" => "example_email", # String
  "password" => "example_password", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillingEntity

```ruby
billing = client.Billing
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Billing.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CollaborationEntity

```ruby
collaboration = client.Collaboration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorId` | `String` | No |  |
| `message` | `String` | Yes |  |
| `projectId` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Collaboration.create({
  "message" => "example_message", # String
  "projectId" => "example_projectId", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Collaboration.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComplianceEntity

```ruby
compliance = client.Compliance
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Compliance.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateMemeEntity

```ruby
create_meme = client.CreateMeme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canvas` | `Hash` | Yes |  |
| `captions` | `Array` | Yes |  |
| `generationRunId` | `Object` | No |  |
| `generationVariantId` | `Object` | No |  |
| `imageDataUrl` | `String` | Yes |  |
| `overlays` | `Array` | No |  |
| `sourceImageUrl` | `String` | Yes |  |
| `templateSlug` | `String` | No |  |
| `title` | `String` | No |  |
| `visibility` | `String` | No |  |
| `watermark` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateMeme.create({
  "canvas" => {}, # Hash
  "captions" => [], # Array
  "imageDataUrl" => "example_imageDataUrl", # String
  "sourceImageUrl" => "example_sourceImageUrl", # String
  "watermark" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeveloperApiEntity

```ruby
developer_api = client.DeveloperApi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `Float` | No |  |
| `prompt` | `String` | Yes |  |
| `trendSignals` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DeveloperApi.create({
  "prompt" => "example_prompt", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DeveloperApi.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```ruby
free_caption_meme_success = client.FreeCaptionMemeSuccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions` | `Array` | Yes |  |
| `templateSlug` | `String` | Yes |  |
| `title` | `String` | No |  |
| `visibility` | `String` | No |  |
| `watermark` | `Hash` | No | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FreeCaptionMemeSuccess.create({
  "captions" => [], # Array
  "templateSlug" => "example_templateSlug", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FreeTemplateSearchEntity

```ruby
free_template_search = client.FreeTemplateSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `assetBytes` | `Object` | No |  |
| `assetContentType` | `String` | No |  |
| `boxCount` | `Integer` | Yes |  |
| `captionCount` | `Integer` | Yes |  |
| `captions` | `Array` | Yes |  |
| `description` | `String` | Yes |  |
| `durationMs` | `Object` | No |  |
| `exampleImageUrl` | `Object` | No |  |
| `frameCount` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `imageUrl` | `String` | Yes |  |
| `mediaType` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `posterImageUrl` | `String` | No |  |
| `qualityStatus` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `sourceTemplateId` | `Object` | Yes |  |
| `sourceUrl` | `String` | No |  |
| `tags` | `Array` | No |  |
| `width` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.FreeTemplateSearch.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateEntity

```ruby
generate = client.Generate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base64` | `String` | No |  |
| `byteLength` | `Integer` | Yes |  |
| `captions` | `Array` | No |  |
| `dataUrl` | `String` | No |  |
| `delayMs` | `Integer` | Yes |  |
| `durationMs` | `Integer` | No |  |
| `filename` | `String` | Yes |  |
| `fps` | `Integer` | No |  |
| `gifSlug` | `String` | Yes | Required for /api/v1/gifs/generate. |
| `height` | `Integer` | Yes |  |
| `mimeType` | `String` | Yes |  |
| `pages` | `Integer` | Yes |  |
| `parameters` | `Hash` | Yes |  |
| `returnBase64` | `Boolean` | No | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `Integer` | Yes |  |
| `startMs` | `Integer` | No |  |
| `tags` | `Array` | No |  |
| `title` | `String` | No |  |
| `width` | `Integer` | Yes |  |
| `widthPx` | `Integer` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Generate.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GrowthEntity

```ruby
growth = client.Growth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountId` | `String` | No |  |
| `action` | `String` | Yes |  |
| `actorId` | `String` | No |  |
| `caption` | `String` | No |  |
| `code` | `String` | No |  |
| `externalAccountId` | `String` | No |  |
| `handle` | `String` | No |  |
| `limit` | `Integer` | No |  |
| `logExposure` | `Boolean` | No |  |
| `memeSlug` | `String` | No |  |
| `now` | `String` | No |  |
| `platform` | `String` | No |  |
| `profiles` | `Array` | No |  |
| `shareSlug` | `String` | No |  |
| `surface` | `String` | No |  |
| `weekStart` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Growth.create({
  "action" => "example_action", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Growth.load({ "actor_id" => "actor_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListMemeEntity

```ruby
list_meme = client.ListMeme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `String` | Yes |  |
| `canonicalImageUrl` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `imageUrl` | `String` | Yes |  |
| `nsfwStatus` | `String` | Yes |  |
| `shareSlug` | `String` | Yes |  |
| `shareUrl` | `String` | Yes |  |
| `shareViews` | `Integer` | Yes |  |
| `slug` | `String` | Yes |  |
| `tags` | `Array` | Yes |  |
| `templateSlug` | `String` | Yes |  |
| `title` | `String` | Yes |  |
| `visibility` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListMeme.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MediaEntity

```ruby
media = client.Media
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `contentType` | `String` | No |  |
| `expiresInSeconds` | `Integer` | No |  |
| `ownerToken` | `String` | No |  |
| `path` | `String` | No |  |
| `prefix` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Media.create({
  "action" => "example_action", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemeEntity

```ruby
meme = client.Meme
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `String` | Yes |  |
| `canonicalImageUrl` | `String` | Yes |  |
| `canvas` | `Hash` | Yes |  |
| `captions` | `Array` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `id` | `String` | No |  |
| `imageUrl` | `String` | Yes |  |
| `nsfwStatus` | `String` | Yes |  |
| `overlays` | `Array` | Yes |  |
| `shareSlug` | `String` | Yes |  |
| `shareUrl` | `String` | Yes |  |
| `shareViews` | `Integer` | Yes |  |
| `slug` | `String` | Yes |  |
| `sourceImageUrl` | `String` | Yes |  |
| `tags` | `Array` | Yes |  |
| `templateSlug` | `String` | Yes |  |
| `title` | `String` | Yes |  |
| `visibility` | `String` | Yes |  |
| `watermark` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Meme.load({ "id" => "meme_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Meme.remove({ "id" => "meme_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```ruby
public_template_media_item = client.PublicTemplateMediaItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `assetBytes` | `Object` | No |  |
| `assetContentType` | `String` | No |  |
| `boxCount` | `Integer` | No |  |
| `captionCount` | `Integer` | No |  |
| `captions` | `Array` | Yes |  |
| `categories` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `durationMs` | `Object` | No |  |
| `exampleImageUrl` | `Object` | No |  |
| `fps` | `Integer` | No |  |
| `frameCount` | `Object` | No |  |
| `gifSlug` | `String` | No | Required for /api/v1/gifs/generate. |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `imageUrl` | `String` | Yes |  |
| `mediaType` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `posterImageUrl` | `String` | No |  |
| `previewImageUrl` | `String` | No |  |
| `qualityStatus` | `String` | No |  |
| `returnBase64` | `Boolean` | No | Only used by /api/v1/gifs/generate. |
| `slug` | `String` | Yes |  |
| `sourceTemplateId` | `Object` | Yes |  |
| `sourceUrl` | `String` | No |  |
| `startMs` | `Integer` | No |  |
| `tags` | `Array` | Yes |  |
| `title` | `String` | No |  |
| `width` | `Object` | Yes |  |
| `widthPx` | `Integer` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `animated` | - | - |
| `assetBytes` | - | - |
| `assetContentType` | - | - |
| `boxCount` | - | - |
| `captionCount` | - | - |
| `captions` | - | Yes |
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
| `tags` | - | Yes |
| `title` | - | - |
| `width` | - | - |
| `widthPx` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PublicTemplateMediaItem.create({
  "slug" => "example_slug", # String
  "captions" => [], # Array
  "description" => "example_description", # String
  "height" => 1, # Object
  "id" => "example_id", # String
  "imageUrl" => "example_imageUrl", # String
  "mediaType" => "example_mediaType", # String
  "name" => "example_name", # String
  "sourceTemplateId" => "example_sourceTemplateId", # Object
  "tags" => [], # Array
  "width" => 1, # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PublicTemplateMediaItem.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```ruby
standalone_agent_bootstrap = client.StandaloneAgentBootstrap
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `handle` | `String` | Yes |  |
| `locale` | `String` | No |  |
| `name` | `String` | Yes |  |
| `stylePreset` | `String` | No |  |
| `systemPrompt` | `String` | No |  |
| `watermarkText` | `String` | No |  |
| `websiteUrl` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StandaloneAgentBootstrap.create({
  "handle" => "example_handle", # String
  "name" => "example_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateEntity

```ruby
template = client.Template
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `assetBytes` | `Object` | No |  |
| `assetContentType` | `String` | No |  |
| `boxCount` | `Integer` | No |  |
| `captionCount` | `Integer` | No |  |
| `captions` | `Array` | Yes |  |
| `categories` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `durationMs` | `Object` | No |  |
| `exampleImageUrl` | `Object` | No |  |
| `frameCount` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `imageUrl` | `String` | Yes |  |
| `mediaType` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `posterImageUrl` | `String` | No |  |
| `previewImageUrl` | `String` | No |  |
| `qualityStatus` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `sourceTemplateId` | `Object` | Yes |  |
| `sourceUrl` | `String` | No |  |
| `tags` | `Array` | Yes |  |
| `width` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Template.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateSearchEntity

```ruby
template_search = client.TemplateSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `Boolean` | No |  |
| `assetBytes` | `Object` | No |  |
| `assetContentType` | `String` | No |  |
| `boxCount` | `Integer` | No |  |
| `captionCount` | `Integer` | No |  |
| `captions` | `Array` | Yes |  |
| `categories` | `Array` | No |  |
| `description` | `String` | Yes |  |
| `durationMs` | `Object` | No |  |
| `exampleImageUrl` | `Object` | No |  |
| `frameCount` | `Object` | No |  |
| `height` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `imageUrl` | `String` | Yes |  |
| `mediaType` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `posterImageUrl` | `String` | No |  |
| `previewImageUrl` | `String` | No |  |
| `qualityStatus` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `sourceTemplateId` | `Object` | Yes |  |
| `sourceUrl` | `String` | No |  |
| `tags` | `Array` | Yes |  |
| `width` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TemplateSearch.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrendAlertEntity

```ruby
trend_alert = client.TrendAlert
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `actorId` | `String` | Yes |  |
| `aggressiveness` | `Float` | No |  |
| `alertId` | `String` | Yes |  |
| `channels` | `Array` | No |  |
| `deliverAllAlerts` | `Boolean` | No |  |
| `event` | `Hash` | No |  |
| `explicitNiches` | `Array` | No |  |
| `explicitRegions` | `Array` | No |  |
| `explicitSources` | `Array` | No |  |
| `explicitTopics` | `Array` | No |  |
| `followerCount` | `Integer` | No |  |
| `niche` | `String` | No |  |
| `region` | `String` | No |  |
| `source` | `String` | No |  |
| `topic` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TrendAlert.create({
  "action" => "example_action", # String
  "actorId" => "example_actorId", # String
  "alertId" => "example_alertId", # String
  "topic" => "example_topic", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TrendAlert.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```ruby
upload_caption_meme_success = client.UploadCaptionMemeSuccess
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UploadCaptionMemeSuccess.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoEntity

```ruby
video = client.Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | No |  |
| `assetId` | `String` | No |  |
| `atMs` | `Float` | No |  |
| `audioAssetId` | `String` | No |  |
| `beatOffsetMs` | `Integer` | No |  |
| `bitrateKbps` | `Float` | No |  |
| `bpm` | `Integer` | No |  |
| `cancelled` | `Boolean` | No |  |
| `container` | `String` | No |  |
| `durationMs` | `Float` | No |  |
| `durationSeconds` | `Float` | Yes |  |
| `easing` | `String` | No |  |
| `error` | `String` | No |  |
| `frameRate` | `Float` | No |  |
| `inputFormat` | `String` | Yes |  |
| `intensity` | `Float` | No |  |
| `jobId` | `String` | No |  |
| `locale` | `String` | No |  |
| `mimeType` | `String` | Yes |  |
| `name` | `String` | No |  |
| `offsetMs` | `Float` | No |  |
| `outputPresetId` | `String` | Yes |  |
| `outputUrl` | `String` | No |  |
| `planTier` | `String` | Yes |  |
| `presetId` | `String` | Yes |  |
| `progressPercent` | `Float` | No |  |
| `project` | `Hash` | No |  |
| `projectId` | `String` | No |  |
| `property` | `String` | No |  |
| `sourceDeviceId` | `String` | No |  |
| `sourceUrl` | `String` | No |  |
| `stage` | `String` | No |  |
| `startMs` | `Float` | No |  |
| `stylePresetId` | `String` | No |  |
| `syncToBeatGrid` | `Boolean` | No |  |
| `tone` | `String` | No |  |
| `trackId` | `String` | No |  |
| `transcript` | `String` | No |  |
| `trendKeywords` | `Array` | No |  |
| `type` | `String` | No |  |
| `updatedAt` | `String` | No |  |
| `value` | `Float` | No |  |
| `watermarkEnabled` | `Boolean` | No |  |
| `watermarkText` | `String` | No |  |
| `workerId` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Video.create({
  "durationSeconds" => 1, # Float
  "inputFormat" => "example_inputFormat", # String
  "mimeType" => "example_mimeType", # String
  "outputPresetId" => "example_outputPresetId", # String
  "planTier" => "example_planTier", # String
  "presetId" => "example_presetId", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Video.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = MemesioContentCreationSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

