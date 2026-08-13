# MemesioContentCreation TypeScript SDK Reference

Complete API reference for the MemesioContentCreation TypeScript SDK.


## MemesioContentCreationSDK

### Constructor

```ts
new MemesioContentCreationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MemesioContentCreationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MemesioContentCreationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MemesioContentCreationSDK` instance in test mode.


### Instance Methods

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `AgentInfra(data?: object)`

Create a new `AgentInfra` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentInfraEntity` instance.

#### `AiCaption(data?: object)`

Create a new `AiCaption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiCaptionEntity` instance.

#### `AiJob(data?: object)`

Create a new `AiJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiJobEntity` instance.

#### `AiMemeGenerationSucceeded(data?: object)`

Create a new `AiMemeGenerationSucceeded` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiMemeGenerationSucceededEntity` instance.

#### `AiProvider(data?: object)`

Create a new `AiProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderEntity` instance.

#### `Analytics(data?: object)`

Create a new `Analytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `Billing(data?: object)`

Create a new `Billing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingEntity` instance.

#### `Collaboration(data?: object)`

Create a new `Collaboration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollaborationEntity` instance.

#### `Compliance(data?: object)`

Create a new `Compliance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComplianceEntity` instance.

#### `CreateMeme(data?: object)`

Create a new `CreateMeme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateMemeEntity` instance.

#### `DeveloperApi(data?: object)`

Create a new `DeveloperApi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeveloperApiEntity` instance.

#### `FreeCaptionMemeSuccess(data?: object)`

Create a new `FreeCaptionMemeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FreeCaptionMemeSuccessEntity` instance.

#### `FreeTemplateSearch(data?: object)`

Create a new `FreeTemplateSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FreeTemplateSearchEntity` instance.

#### `Generate(data?: object)`

Create a new `Generate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateEntity` instance.

#### `Growth(data?: object)`

Create a new `Growth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GrowthEntity` instance.

#### `ListMeme(data?: object)`

Create a new `ListMeme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMemeEntity` instance.

#### `Media(data?: object)`

Create a new `Media` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MediaEntity` instance.

#### `Meme(data?: object)`

Create a new `Meme` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemeEntity` instance.

#### `PublicTemplateMediaItem(data?: object)`

Create a new `PublicTemplateMediaItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicTemplateMediaItemEntity` instance.

#### `StandaloneAgentBootstrap(data?: object)`

Create a new `StandaloneAgentBootstrap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StandaloneAgentBootstrapEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `TemplateSearch(data?: object)`

Create a new `TemplateSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateSearchEntity` instance.

#### `TrendAlert(data?: object)`

Create a new `TrendAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrendAlertEntity` instance.

#### `UploadCaptionMemeSuccess(data?: object)`

Create a new `UploadCaptionMemeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadCaptionMemeSuccessEntity` instance.

#### `Video(data?: object)`

Create a new `Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MemesioContentCreationSDK.test()`.

**Returns:** `MemesioContentCreationSDK` instance in test mode.


---

## AgentEntity

```ts
const agent = client.Agent()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Agent().create({
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Agent().load({ id: 'agent_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Agent().update({
  id: 'agent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentInfraEntity

```ts
const agent_infra = client.AgentInfra()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chatId` | `string` | Yes |  |
| `memeSlug` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `payoutReference` | `string` | No |  |
| `payoutStatus` | `string` | No |  |
| `phoneOrChatId` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `Record<string, any>` | No |  |
| `quotaBoostPerDay` | `number` | No |  |
| `scopes` | `any[]` | No |  |
| `userId` | `string` | No |  |
| `weekStart` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `keys` | `/api/v1/agents/{agentId}/keys` | `client.AgentInfra().create({ $action: 'keys', ... })` |
| `keys` | `/api/v1/agents/{agentId}/keys` | `client.AgentInfra().load({ $action: 'keys', ... })` |

An action returns that action's OWN response, which is not necessarily a
AgentInfra record — check the API definition for its shape.

```ts
const result = await client.AgentInfra().create({
  $action: 'keys',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentInfra().create({
  action: 'example_action',
  chatId: 'example_chatId',
  memeSlug: 'example_memeSlug',
  phoneOrChatId: 'example_phoneOrChatId',
  prompt: 'example_prompt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AgentInfra().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AgentInfra().remove({ agent_id: 'agent_id', key_id: 'key_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiCaptionEntity

```ts
const ai_caption = client.AiCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedTerms` | `any[]` | No |  |
| `canvasText` | `any[]` | Yes |  |
| `captionCount` | `number` | No |  |
| `captionSets` | `any[]` | No |  |
| `entities` | `any[]` | No |  |
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
| `referenceCaptions` | `any[]` | No |  |
| `rewriteNote` | `string` | No |  |
| `sceneSummary` | `string` | No |  |
| `templateDescription` | `string` | No |  |
| `templateName` | `string` | No |  |
| `templateTags` | `any[]` | No |  |
| `tone` | `string` | Yes |  |
| `toneCues` | `any[]` | No |  |
| `trendKeywords` | `any[]` | No |  |
| `trendReferences` | `any[]` | No |  |
| `trendSignals` | `any[]` | No |  |
| `variationOffset` | `number` | No |  |
| `voiceRules` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiCaption().create({
  canvasText: [],
  name: 'example_name',
  tone: 'example_tone',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiCaption().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiJobEntity

```ts
const ai_job = client.AiJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `afterState` | `Record<string, any>` | No |  |
| `attempts` | `number` | No |  |
| `beforeState` | `Record<string, any>` | No |  |
| `brushEdits` | `any[]` | No |  |
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
| `input` | `Record<string, any>` | No |  |
| `layerId` | `string` | Yes |  |
| `layerType` | `string` | No |  |
| `maxAttempts` | `number` | No |  |
| `maxFaces` | `number` | No |  |
| `mediaType` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `nsfwScore` | `number` | No |  |
| `output` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiJob().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiJob().load({ id: 'ai_job_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiMemeGenerationSucceededEntity

```ts
const ai_meme_generation_succeeded = client.AiMemeGenerationSucceeded()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowHeuristicFallback` | `boolean` | No |  |
| `captionSource` | `string` | No |  |
| `captions` | `any[]` | No |  |
| `correlationId` | `string` | No |  |
| `degradedFromAsync` | `boolean` | No |  |
| `editableCaptions` | `any[]` | No |  |
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
| `toneCues` | `any[]` | No |  |
| `variantCount` | `number` | Yes |  |
| `variants` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiMemeGenerationSucceeded().create({
  flow: 'example_flow',
  mode: 'example_mode',
  ok: true,
  prompt: 'example_prompt',
  status: 'example_status',
  variantCount: 1,
  variants: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderEntity

```ts
const ai_provider = client.AiProvider()
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
| `texts` | `any[]` | No |  |
| `trendSignals` | `any[]` | No |  |
| `workspaceId` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiProvider().create({
  prompt: 'example_prompt',
  sourceImageUrl: 'example_sourceImageUrl',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiProvider().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsEntity

```ts
const analytics = client.Analytics()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `metric_dictionary` | `/api/analytics/metric-dictionary` | `client.Analytics().load({ $action: 'metric_dictionary', ... })` |

An action returns that action's OWN response, which is not necessarily a
Analytics record — check the API definition for its shape.

```ts
const result = await client.Analytics().load({
  $action: 'metric_dictionary',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Analytics().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `displayName` | `string` | No |  |
| `email` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resend_verification` | `/api/auth/resend-verification` | `client.Auth().create({ $action: 'resend_verification', ... })` |
| `signup` | `/api/auth/signup` | `client.Auth().create({ $action: 'signup', ... })` |

An action returns that action's OWN response, which is not necessarily a
Auth record — check the API definition for its shape.

```ts
const result = await client.Auth().create({
  $action: 'resend_verification',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Auth().create({
  email: 'example_email',
  password: 'example_password',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingEntity

```ts
const billing = client.Billing()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `usage` | `/api/billing/usage` | `client.Billing().load({ $action: 'usage', ... })` |

An action returns that action's OWN response, which is not necessarily a
Billing record — check the API definition for its shape.

```ts
const result = await client.Billing().load({
  $action: 'usage',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Billing().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollaborationEntity

```ts
const collaboration = client.Collaboration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorId` | `string` | No |  |
| `message` | `string` | Yes |  |
| `projectId` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Collaboration().create({
  message: 'example_message',
  projectId: 'example_projectId',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Collaboration().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComplianceEntity

```ts
const compliance = client.Compliance()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `content_policy` | `/api/compliance/content-policy` | `client.Compliance().load({ $action: 'content_policy', ... })` |

An action returns that action's OWN response, which is not necessarily a
Compliance record — check the API definition for its shape.

```ts
const result = await client.Compliance().load({
  $action: 'content_policy',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Compliance().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateMemeEntity

```ts
const create_meme = client.CreateMeme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canvas` | `Record<string, any>` | Yes |  |
| `captions` | `any[]` | Yes |  |
| `generationRunId` | `string | null` | No |  |
| `generationVariantId` | `string | null` | No |  |
| `imageDataUrl` | `string` | Yes |  |
| `overlays` | `any[]` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `templateSlug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateMeme().create({
  canvas: {},
  captions: [],
  imageDataUrl: 'example_imageDataUrl',
  sourceImageUrl: 'example_sourceImageUrl',
  watermark: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeveloperApiEntity

```ts
const developer_api = client.DeveloperApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `number` | No |  |
| `prompt` | `string` | Yes |  |
| `trendSignals` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeveloperApi().create({
  prompt: 'example_prompt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeveloperApi().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FreeCaptionMemeSuccessEntity

```ts
const free_caption_meme_success = client.FreeCaptionMemeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions` | `any[]` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FreeCaptionMemeSuccess().create({
  captions: [],
  templateSlug: 'example_templateSlug',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FreeTemplateSearchEntity

```ts
const free_template_search = client.FreeTemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number | null` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | Yes |  |
| `captionCount` | `number` | Yes |  |
| `captions` | `any[]` | Yes |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number | null` | No |  |
| `exampleImageUrl` | `string | null` | No |  |
| `frameCount` | `number | null` | No |  |
| `height` | `number | null` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string | null` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `any[]` | No |  |
| `width` | `number | null` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FreeTemplateSearch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateEntity

```ts
const generate = client.Generate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base64` | `string` | No |  |
| `byteLength` | `number` | Yes |  |
| `captions` | `any[]` | No |  |
| `dataUrl` | `string` | No |  |
| `delayMs` | `number` | Yes |  |
| `durationMs` | `number` | No |  |
| `filename` | `string` | Yes |  |
| `fps` | `number` | No |  |
| `gifSlug` | `string` | Yes |  |
| `height` | `number` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `pages` | `number` | Yes |  |
| `parameters` | `Record<string, any>` | Yes |  |
| `returnBase64` | `boolean` | No |  |
| `sourceDurationMs` | `number` | Yes |  |
| `startMs` | `number` | No |  |
| `tags` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Generate().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GrowthEntity

```ts
const growth = client.Growth()
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
| `profiles` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `lifecycle_messaging` | `/api/growth/lifecycle-messaging` | `client.Growth().create({ $action: 'lifecycle_messaging', ... })` |
| `referral` | `/api/growth/referrals` | `client.Growth().create({ $action: 'referral', ... })` |
| `social_publish` | `/api/growth/social-publish` | `client.Growth().create({ $action: 'social_publish', ... })` |
| `trend_campaign` | `/api/growth/trend-campaigns` | `client.Growth().create({ $action: 'trend_campaign', ... })` |
| `lifecycle_messaging` | `/api/growth/lifecycle-messaging` | `client.Growth().load({ $action: 'lifecycle_messaging', ... })` |
| `referral` | `/api/growth/referrals` | `client.Growth().load({ $action: 'referral', ... })` |
| `social_publish` | `/api/growth/social-publish` | `client.Growth().load({ $action: 'social_publish', ... })` |
| `trend_campaign` | `/api/growth/trend-campaigns` | `client.Growth().load({ $action: 'trend_campaign', ... })` |
| `viral_trigger` | `/api/growth/viral-triggers` | `client.Growth().load({ $action: 'viral_trigger', ... })` |

An action returns that action's OWN response, which is not necessarily a
Growth record — check the API definition for its shape.

```ts
const result = await client.Growth().create({
  $action: 'lifecycle_messaging',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Growth().create({
  action: 'example_action',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Growth().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GrowthEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMemeEntity

```ts
const list_meme = client.ListMeme()
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
| `tags` | `any[]` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMeme().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MediaEntity

```ts
const media = client.Media()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `signed_url` | `/api/media/signed-url` | `client.Media().create({ $action: 'signed_url', ... })` |

An action returns that action's OWN response, which is not necessarily a
Media record — check the API definition for its shape.

```ts
const result = await client.Media().create({
  $action: 'signed_url',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Media().create({
  action: 'example_action',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MediaEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemeEntity

```ts
const meme = client.Meme()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `string` | Yes |  |
| `canonicalImageUrl` | `string` | Yes |  |
| `canvas` | `Record<string, any>` | Yes |  |
| `captions` | `any[]` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `nsfwStatus` | `string` | Yes |  |
| `overlays` | `any[]` | Yes |  |
| `shareSlug` | `string` | Yes |  |
| `shareUrl` | `string` | Yes |  |
| `shareViews` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `tags` | `any[]` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Meme().load({ id: 'meme_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Meme().remove({ id: 'meme_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicTemplateMediaItemEntity

```ts
const public_template_media_item = client.PublicTemplateMediaItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number | null` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `any[]` | Yes |  |
| `categories` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number | null` | No |  |
| `exampleImageUrl` | `string | null` | No |  |
| `frameCount` | `number | null` | No |  |
| `height` | `number | null` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string | null` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `any[]` | Yes |  |
| `width` | `number | null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PublicTemplateMediaItem().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StandaloneAgentBootstrapEntity

```ts
const standalone_agent_bootstrap = client.StandaloneAgentBootstrap()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StandaloneAgentBootstrap().create({
  handle: 'example_handle',
  name: 'example_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number | null` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `any[]` | No |  |
| `categories` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number` | No |  |
| `exampleImageUrl` | `string | null` | No |  |
| `fps` | `number` | No |  |
| `frameCount` | `number | null` | No |  |
| `gifSlug` | `string` | No |  |
| `height` | `number | null` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `returnBase64` | `boolean` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string | null` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `startMs` | `number` | No |  |
| `tags` | `any[]` | No |  |
| `title` | `string` | No |  |
| `width` | `number | null` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Template().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateSearchEntity

```ts
const template_search = client.TemplateSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | No |  |
| `assetBytes` | `number | null` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `number` | No |  |
| `captionCount` | `number` | No |  |
| `captions` | `any[]` | Yes |  |
| `categories` | `any[]` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `number | null` | No |  |
| `exampleImageUrl` | `string | null` | No |  |
| `frameCount` | `number | null` | No |  |
| `height` | `number | null` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `string | null` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `any[]` | Yes |  |
| `width` | `number | null` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TemplateSearch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrendAlertEntity

```ts
const trend_alert = client.TrendAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | Yes |  |
| `aggressiveness` | `number` | No |  |
| `alertId` | `string` | Yes |  |
| `channels` | `any[]` | No |  |
| `deliverAllAlerts` | `boolean` | No |  |
| `event` | `Record<string, any>` | No |  |
| `explicitNiches` | `any[]` | No |  |
| `explicitRegions` | `any[]` | No |  |
| `explicitSources` | `any[]` | No |  |
| `explicitTopics` | `any[]` | No |  |
| `followerCount` | `number` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TrendAlert().create({
  action: 'example_action',
  actorId: 'example_actorId',
  alertId: 'example_alertId',
  topic: 'example_topic',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TrendAlert().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadCaptionMemeSuccessEntity

```ts
const upload_caption_meme_success = client.UploadCaptionMemeSuccess()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UploadCaptionMemeSuccess().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoEntity

```ts
const video = client.Video()
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
| `project` | `Record<string, any>` | No |  |
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
| `trendKeywords` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `draft` | `/api/video/drafts` | `client.Video().create({ $action: 'draft', ... })` |
| `export_setting` | `/api/video/export-settings` | `client.Video().create({ $action: 'export_setting', ... })` |
| `format` | `/api/video/formats` | `client.Video().create({ $action: 'format', ... })` |
| `render_queue` | `/api/video/render-queue` | `client.Video().create({ $action: 'render_queue', ... })` |
| `subtitle` | `/api/video/subtitles` | `client.Video().create({ $action: 'subtitle', ... })` |
| `text_animation` | `/api/video/text-animations` | `client.Video().create({ $action: 'text_animation', ... })` |
| `timeline` | `/api/video/timeline` | `client.Video().create({ $action: 'timeline', ... })` |
| `audio_library` | `/api/video/audio-library` | `client.Video().load({ $action: 'audio_library', ... })` |
| `draft` | `/api/video/drafts` | `client.Video().load({ $action: 'draft', ... })` |
| `export_setting` | `/api/video/export-settings` | `client.Video().load({ $action: 'export_setting', ... })` |
| `format` | `/api/video/formats` | `client.Video().load({ $action: 'format', ... })` |
| `render_performance` | `/api/video/render-performance` | `client.Video().load({ $action: 'render_performance', ... })` |
| `render_queue` | `/api/video/render-queue` | `client.Video().load({ $action: 'render_queue', ... })` |
| `subtitle` | `/api/video/subtitles` | `client.Video().load({ $action: 'subtitle', ... })` |
| `text_animation` | `/api/video/text-animations` | `client.Video().load({ $action: 'text_animation', ... })` |
| `timeline` | `/api/video/timeline` | `client.Video().load({ $action: 'timeline', ... })` |

An action returns that action's OWN response, which is not necessarily a
Video record — check the API definition for its shape.

```ts
const result = await client.Video().create({
  $action: 'draft',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Video().create({
  durationSeconds: 1,
  inputFormat: 'example_inputFormat',
  mimeType: 'example_mimeType',
  outputPresetId: 'example_outputPresetId',
  planTier: 'example_planTier',
  presetId: 'example_presetId',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Video().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `MemesioContentCreationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new MemesioContentCreationSDK({
  feature: {
    test: { active: true },
  }
})
```

