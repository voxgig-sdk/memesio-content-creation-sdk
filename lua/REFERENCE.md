# MemesioContentCreation Lua SDK Reference

Complete API reference for the MemesioContentCreation Lua SDK.


## MemesioContentCreationSDK

### Constructor

```lua
local sdk = require("memesio-content-creation_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Agent(data)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data)`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data)`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data)`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data)`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data)`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data)`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data)`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data)`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data)`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data)`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data)`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data)`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Growth(data)`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `ListMeme(data)`

Create a new `ListMeme` entity instance. Pass `nil` for no initial data.

#### `Media(data)`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data)`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data)`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data)`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TemplateSearch(data)`

Create a new `TemplateSearch` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data)`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data)`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AgentEntity

```lua
local agent = client:Agent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
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
| `locale` | - | - | - |
| `name` | - | - | Yes |
| `slug` | - | - | - |
| `status` | - | - | - |
| `stylePreset` | - | - | - |
| `systemPrompt` | - | - | - |
| `watermarkText` | - | - | - |
| `websiteUrl` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Agent():create({
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Agent():load({ id = "agent_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Agent():update({
  id = "agent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentInfraEntity

```lua
local agent_infra = client:AgentInfra(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chatId` | `string` | Yes |  |
| `memeSlug` | `string` | Yes |  |
| `metadata` | `table` | No |  |
| `payoutReference` | `string` | No |  |
| `payoutStatus` | `string` | No |  |
| `phoneOrChatId` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `table` | No |  |
| `quotaBoostPerDay` | `number` | No |  |
| `scopes` | `table` | No |  |
| `userId` | `string` | No |  |
| `weekStart` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentInfra():create({
  action = --[[ string ]],
  chatId = --[[ string ]],
  memeSlug = --[[ string ]],
  phoneOrChatId = --[[ string ]],
  prompt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AgentInfra():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AgentInfra():remove({ agent_id = "agent_id", key_id = "key_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiCaptionEntity

```lua
local ai_caption = client:AiCaption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedTerms` | `table` | No |  |
| `canvasText` | `table` | Yes |  |
| `captionCount` | `number` | No |  |
| `captionSets` | `table` | No |  |
| `entities` | `table` | No |  |
| `fallbackUsed` | `boolean` | No |  |
| `generationStrategy` | `string` | No |  |
| `locale` | `string` | No |  |
| `memeId` | `string` | No |  |
| `memeSlug` | `string` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `boolean` | No |  |
| `optionCount` | `number` | No |  |
| `ownerToken` | `string` | No |  |
| `providerId` | `string` | No |  |
| `referenceCaptions` | `table` | No |  |
| `rewriteNote` | `string` | No |  |
| `sceneSummary` | `string` | No |  |
| `templateDescription` | `string` | No |  |
| `templateName` | `string` | No |  |
| `templateTags` | `table` | No |  |
| `tone` | `string` | Yes |  |
| `toneCues` | `table` | No |  |
| `trendKeywords` | `table` | No |  |
| `trendReferences` | `table` | No |  |
| `trendSignals` | `table` | No |  |
| `variationOffset` | `number` | No |  |
| `voiceRules` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiCaption():create({
  canvasText = --[[ table ]],
  name = --[[ string ]],
  tone = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiCaption():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiJobEntity

```lua
local ai_job = client:AiJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `afterState` | `table` | No |  |
| `attempts` | `number` | No |  |
| `beforeState` | `table` | No |  |
| `brushEdits` | `table` | No |  |
| `capability` | `string` | Yes |  |
| `celebrityConfidence` | `number` | No |  |
| `consentAttested` | `boolean` | No |  |
| `createdAt` | `string` | No |  |
| `detectedFaceCount` | `number` | Yes |  |
| `edgeRefinement` | `number` | No |  |
| `estimatedCostUsd` | `number` | No |  |
| `frameTimeMs` | `number` | No |  |
| `height` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `table` | No |  |
| `layerId` | `string` | Yes |  |
| `layerType` | `string` | No |  |
| `maxAttempts` | `number` | No |  |
| `maxFaces` | `number` | No |  |
| `mediaType` | `string` | No |  |
| `metadata` | `table` | No |  |
| `nsfwScore` | `number` | No |  |
| `output` | `table` | No |  |
| `projectId` | `string` | Yes |  |
| `providerId` | `string` | No |  |
| `reason` | `string` | No |  |
| `runAfterMs` | `number` | No |  |
| `sourceAssetUrl` | `string` | Yes |  |
| `sourceFaceIndex` | `number` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `targetAssetUrl` | `string` | Yes |  |
| `targetFaceIndex` | `number` | No |  |
| `timeoutMs` | `number` | No |  |
| `traceId` | `string` | No |  |
| `updatedAt` | `string` | No |  |
| `versionId` | `string` | No |  |
| `width` | `number` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiJob():create({
  action = --[[ string ]],
  capability = --[[ string ]],
  detectedFaceCount = --[[ number ]],
  height = --[[ number ]],
  id = --[[ string ]],
  layerId = --[[ string ]],
  projectId = --[[ string ]],
  sourceAssetUrl = --[[ string ]],
  sourceImageUrl = --[[ string ]],
  status = --[[ string ]],
  targetAssetUrl = --[[ string ]],
  width = --[[ number ]],
  workerId = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiJob():load({ id = "ai_job_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```lua
local ai_meme_generation_succeeded = client:AiMemeGenerationSucceeded(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowHeuristicFallback` | `boolean` | No |  |
| `captionSource` | `string` | No |  |
| `captions` | `table` | No |  |
| `correlationId` | `string` | No |  |
| `degradedFromAsync` | `boolean` | No |  |
| `editableCaptions` | `table` | No |  |
| `flow` | `string` | Yes |  |
| `imageUrl` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `preferredProviderId` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `rewriteNote` | `string` | No |  |
| `runId` | `string` | No |  |
| `status` | `string` | Yes |  |
| `templateId` | `string` | No |  |
| `tone` | `string` | No |  |
| `toneCues` | `table` | No |  |
| `variantCount` | `number` | Yes |  |
| `variants` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiMemeGenerationSucceeded():create({
  flow = --[[ string ]],
  mode = --[[ string ]],
  ok = --[[ boolean ]],
  prompt = --[[ string ]],
  status = --[[ string ]],
  variantCount = --[[ number ]],
  variants = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiProviderEntity

```lua
local ai_provider = client:AiProvider(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actorId` | `string` | No |  |
| `correlationId` | `string` | No |  |
| `limit` | `number` | No |  |
| `mappingMode` | `string` | No |  |
| `maxSlots` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `texts` | `table` | No |  |
| `trendSignals` | `table` | No |  |
| `workspaceId` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiProvider():create({
  prompt = --[[ string ]],
  sourceImageUrl = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiProvider():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnalyticsEntity

```lua
local analytics = client:Analytics(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Analytics():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthEntity

```lua
local auth = client:Auth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `displayName` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Auth():create({
  email = --[[ string ]],
  password = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingEntity

```lua
local billing = client:Billing(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Billing():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollaborationEntity

```lua
local collaboration = client:Collaboration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorId` | `string` | No |  |
| `message` | `string` | Yes |  |
| `projectId` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Collaboration():create({
  message = --[[ string ]],
  projectId = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Collaboration():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComplianceEntity

```lua
local compliance = client:Compliance(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Compliance():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateMemeEntity

```lua
local create_meme = client:CreateMeme(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canvas` | `table` | Yes |  |
| `captions` | `table` | Yes |  |
| `generationRunId` | `string|nil` | No |  |
| `generationVariantId` | `string|nil` | No |  |
| `imageDataUrl` | `string` | Yes |  |
| `overlays` | `table` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `templateSlug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateMeme():create({
  canvas = --[[ table ]],
  captions = --[[ table ]],
  imageDataUrl = --[[ string ]],
  sourceImageUrl = --[[ string ]],
  watermark = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeveloperApiEntity

```lua
local developer_api = client:DeveloperApi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `trendSignals` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeveloperApi():create({
  prompt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeveloperApi():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```lua
local free_caption_meme_success = client:FreeCaptionMemeSuccess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions` | `table` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FreeCaptionMemeSuccess():create({
  captions = --[[ table ]],
  templateSlug = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FreeTemplateSearchEntity

```lua
local free_template_search = client:FreeTemplateSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number|nil` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | Yes |  |
| `captionCount` | `number` | Yes |  |
| `captions` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number|nil` | No |  |
| `exampleImageUrl` | `string|nil` | No |  |
| `frameCount` | `number|nil` | No |  |
| `height` | `number|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string|nil` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `table` | No |  |
| `width` | `number|nil` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FreeTemplateSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateEntity

```lua
local generate = client:Generate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base64` | `string` | No |  |
| `byteLength` | `number` | Yes |  |
| `captions` | `table` | No |  |
| `dataUrl` | `string` | No |  |
| `delayMs` | `number` | Yes |  |
| `durationMs` | `number` | No |  |
| `filename` | `string` | Yes |  |
| `fps` | `number` | No |  |
| `gifSlug` | `string` | Yes |  |
| `height` | `number` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `pages` | `number` | Yes |  |
| `parameters` | `table` | Yes |  |
| `returnBase64` | `boolean` | No |  |
| `sourceDurationMs` | `number` | Yes |  |
| `startMs` | `number` | No |  |
| `tags` | `table` | No |  |
| `title` | `string` | No |  |
| `width` | `number` | Yes |  |
| `widthPx` | `number` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Generate():create({
  byteLength = --[[ number ]],
  delayMs = --[[ number ]],
  filename = --[[ string ]],
  gifSlug = --[[ string ]],
  height = --[[ number ]],
  mimeType = --[[ string ]],
  pages = --[[ number ]],
  parameters = --[[ table ]],
  sourceDurationMs = --[[ number ]],
  width = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GrowthEntity

```lua
local growth = client:Growth(nil)
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
| `limit` | `number` | No |  |
| `logExposure` | `boolean` | No |  |
| `memeSlug` | `string` | No |  |
| `now` | `string` | No |  |
| `platform` | `string` | No |  |
| `profiles` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Growth():create({
  action = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Growth():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListMemeEntity

```lua
local list_meme = client:ListMeme(nil)
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
| `shareViews` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `tags` | `table` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListMeme():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MediaEntity

```lua
local media = client:Media(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `contentType` | `string` | No |  |
| `expiresInSeconds` | `number` | No |  |
| `ownerToken` | `string` | No |  |
| `path` | `string` | No |  |
| `prefix` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Media():create({
  action = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemeEntity

```lua
local meme = client:Meme(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `string` | Yes |  |
| `canonicalImageUrl` | `string` | Yes |  |
| `canvas` | `table` | Yes |  |
| `captions` | `table` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `nsfwStatus` | `string` | Yes |  |
| `overlays` | `table` | Yes |  |
| `shareSlug` | `string` | Yes |  |
| `shareUrl` | `string` | Yes |  |
| `shareViews` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `tags` | `table` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Meme():load({ id = "meme_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Meme():remove({ id = "meme_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```lua
local public_template_media_item = client:PublicTemplateMediaItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number|nil` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `table` | Yes |  |
| `categories` | `table` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number|nil` | No |  |
| `exampleImageUrl` | `string|nil` | No |  |
| `frameCount` | `number|nil` | No |  |
| `height` | `number|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string|nil` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `table` | Yes |  |
| `width` | `number|nil` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PublicTemplateMediaItem():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```lua
local standalone_agent_bootstrap = client:StandaloneAgentBootstrap(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StandaloneAgentBootstrap():create({
  handle = --[[ string ]],
  name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateEntity

```lua
local template = client:Template(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number|nil` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `table` | No |  |
| `categories` | `table` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number` | No |  |
| `exampleImageUrl` | `string|nil` | No |  |
| `fps` | `number` | No |  |
| `frameCount` | `number|nil` | No |  |
| `gifSlug` | `string` | No |  |
| `height` | `number|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `returnBase64` | `boolean` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string|nil` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `startMs` | `number` | No |  |
| `tags` | `table` | No |  |
| `title` | `string` | No |  |
| `width` | `number|nil` | Yes |  |
| `widthPx` | `number` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Template():create({
  slug = --[[ string ]],
  description = --[[ string ]],
  height = --[[ number|nil ]],
  id = --[[ string ]],
  imageUrl = --[[ string ]],
  mediaType = --[[ string ]],
  name = --[[ string ]],
  sourceTemplateId = --[[ string|nil ]],
  width = --[[ number|nil ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Template():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateSearchEntity

```lua
local template_search = client:TemplateSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number|nil` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `table` | Yes |  |
| `categories` | `table` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number|nil` | No |  |
| `exampleImageUrl` | `string|nil` | No |  |
| `frameCount` | `number|nil` | No |  |
| `height` | `number|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string|nil` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `table` | Yes |  |
| `width` | `number|nil` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TemplateSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrendAlertEntity

```lua
local trend_alert = client:TrendAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | Yes |  |
| `aggressiveness` | `number` | No |  |
| `alertId` | `string` | Yes |  |
| `channels` | `table` | No |  |
| `deliverAllAlerts` | `boolean` | No |  |
| `event` | `table` | No |  |
| `explicitNiches` | `table` | No |  |
| `explicitRegions` | `table` | No |  |
| `explicitSources` | `table` | No |  |
| `explicitTopics` | `table` | No |  |
| `followerCount` | `number` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TrendAlert():create({
  action = --[[ string ]],
  actorId = --[[ string ]],
  alertId = --[[ string ]],
  topic = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TrendAlert():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```lua
local upload_caption_meme_success = client:UploadCaptionMemeSuccess(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UploadCaptionMemeSuccess():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoEntity

```lua
local video = client:Video(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `assetId` | `string` | No |  |
| `atMs` | `number` | No |  |
| `audioAssetId` | `string` | No |  |
| `beatOffsetMs` | `number` | No |  |
| `bitrateKbps` | `number` | No |  |
| `bpm` | `number` | No |  |
| `cancelled` | `boolean` | No |  |
| `container` | `string` | No |  |
| `durationMs` | `number` | No |  |
| `durationSeconds` | `number` | Yes |  |
| `easing` | `string` | No |  |
| `error` | `string` | No |  |
| `frameRate` | `number` | No |  |
| `inputFormat` | `string` | Yes |  |
| `intensity` | `number` | No |  |
| `jobId` | `string` | No |  |
| `locale` | `string` | No |  |
| `mimeType` | `string` | Yes |  |
| `name` | `string` | No |  |
| `offsetMs` | `number` | No |  |
| `outputPresetId` | `string` | Yes |  |
| `outputUrl` | `string` | No |  |
| `planTier` | `string` | Yes |  |
| `presetId` | `string` | Yes |  |
| `progressPercent` | `number` | No |  |
| `project` | `table` | No |  |
| `projectId` | `string` | No |  |
| `property` | `string` | No |  |
| `sourceDeviceId` | `string` | No |  |
| `sourceUrl` | `string` | No |  |
| `stage` | `string` | No |  |
| `startMs` | `number` | No |  |
| `stylePresetId` | `string` | No |  |
| `syncToBeatGrid` | `boolean` | No |  |
| `tone` | `string` | No |  |
| `trackId` | `string` | No |  |
| `transcript` | `string` | No |  |
| `trendKeywords` | `table` | No |  |
| `type` | `string` | No |  |
| `updatedAt` | `string` | No |  |
| `value` | `number` | No |  |
| `watermarkEnabled` | `boolean` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Video():create({
  durationSeconds = --[[ number ]],
  inputFormat = --[[ string ]],
  mimeType = --[[ string ]],
  outputPresetId = --[[ string ]],
  planTier = --[[ string ]],
  presetId = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Video():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

