# MemesioContentCreation Golang SDK Reference

Complete API reference for the MemesioContentCreation Golang SDK.


## MemesioContentCreationSDK

### Constructor

```go
func NewMemesioContentCreationSDK(options map[string]any) *MemesioContentCreationSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MemesioContentCreationSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MemesioContentCreationSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Agent(data map[string]any) MemesioContentCreationEntity`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentInfra(data map[string]any) MemesioContentCreationEntity`

Create a new `AgentInfra` entity instance. Pass `nil` for no initial data.

#### `AiCaption(data map[string]any) MemesioContentCreationEntity`

Create a new `AiCaption` entity instance. Pass `nil` for no initial data.

#### `AiJob(data map[string]any) MemesioContentCreationEntity`

Create a new `AiJob` entity instance. Pass `nil` for no initial data.

#### `AiMemeGenerationSucceeded(data map[string]any) MemesioContentCreationEntity`

Create a new `AiMemeGenerationSucceeded` entity instance. Pass `nil` for no initial data.

#### `AiProvider(data map[string]any) MemesioContentCreationEntity`

Create a new `AiProvider` entity instance. Pass `nil` for no initial data.

#### `Analytics(data map[string]any) MemesioContentCreationEntity`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Auth(data map[string]any) MemesioContentCreationEntity`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Billing(data map[string]any) MemesioContentCreationEntity`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `Collaboration(data map[string]any) MemesioContentCreationEntity`

Create a new `Collaboration` entity instance. Pass `nil` for no initial data.

#### `Compliance(data map[string]any) MemesioContentCreationEntity`

Create a new `Compliance` entity instance. Pass `nil` for no initial data.

#### `CreateMeme(data map[string]any) MemesioContentCreationEntity`

Create a new `CreateMeme` entity instance. Pass `nil` for no initial data.

#### `DeveloperApi(data map[string]any) MemesioContentCreationEntity`

Create a new `DeveloperApi` entity instance. Pass `nil` for no initial data.

#### `FreeCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity`

Create a new `FreeCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `FreeTemplateSearch(data map[string]any) MemesioContentCreationEntity`

Create a new `FreeTemplateSearch` entity instance. Pass `nil` for no initial data.

#### `Generate(data map[string]any) MemesioContentCreationEntity`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `Gif(data map[string]any) MemesioContentCreationEntity`

Create a new `Gif` entity instance. Pass `nil` for no initial data.

#### `Growth(data map[string]any) MemesioContentCreationEntity`

Create a new `Growth` entity instance. Pass `nil` for no initial data.

#### `Media(data map[string]any) MemesioContentCreationEntity`

Create a new `Media` entity instance. Pass `nil` for no initial data.

#### `Meme(data map[string]any) MemesioContentCreationEntity`

Create a new `Meme` entity instance. Pass `nil` for no initial data.

#### `PublicTemplateMediaItem(data map[string]any) MemesioContentCreationEntity`

Create a new `PublicTemplateMediaItem` entity instance. Pass `nil` for no initial data.

#### `StandaloneAgentBootstrap(data map[string]any) MemesioContentCreationEntity`

Create a new `StandaloneAgentBootstrap` entity instance. Pass `nil` for no initial data.

#### `Template(data map[string]any) MemesioContentCreationEntity`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TrendAlert(data map[string]any) MemesioContentCreationEntity`

Create a new `TrendAlert` entity instance. Pass `nil` for no initial data.

#### `UploadCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity`

Create a new `UploadCaptionMemeSuccess` entity instance. Pass `nil` for no initial data.

#### `Video(data map[string]any) MemesioContentCreationEntity`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AgentEntity

```go
agent := client.Agent(nil)
fmt.Println(agent.GetName()) // "agent"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Agent(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Agent(nil).Update(map[string]any{
    "id": "agent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentInfraEntity

```go
agentInfra := client.AgentInfra(nil)
fmt.Println(agentInfra.GetName()) // "agent_infra"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `chatId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `memeSlug` | `string` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `payoutReference` | `string` | No |  |
| `payoutStatus` | `string` | No |  |
| `phoneOrChatId` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `proof` | `map[string]any` | No |  |
| `quotaBoostPerDay` | `int` | No |  |
| `userId` | `string` | No |  |
| `weekStart` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AgentInfra(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AgentInfra(nil).Create(map[string]any{
    "action": "example_action",
    "chatId": "example_chatId",
    "memeSlug": "example_memeSlug",
    "phoneOrChatId": "example_phoneOrChatId",
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AgentInfra(nil).Remove(map[string]any{"agent_id": "agent_id", "key_id": "key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentInfraEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiCaptionEntity

```go
aiCaption := client.AiCaption(nil)
fmt.Println(aiCaption.GetName()) // "ai_caption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedTerms` | `[]any` | No |  |
| `canvasText` | `[]any` | Yes |  |
| `captionCount` | `int` | No |  |
| `captionSets` | `[]any` | No |  |
| `entities` | `[]any` | No |  |
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
| `referenceCaptions` | `[]any` | No |  |
| `rewriteNote` | `string` | No |  |
| `sceneSummary` | `string` | No |  |
| `templateDescription` | `string` | No |  |
| `templateName` | `string` | No |  |
| `templateTags` | `[]any` | No |  |
| `tone` | `string` | Yes |  |
| `toneCues` | `[]any` | No |  |
| `trendKeywords` | `[]any` | No |  |
| `trendReferences` | `[]any` | No |  |
| `trendSignals` | `[]any` | No |  |
| `variationOffset` | `int` | No |  |
| `voiceRules` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiCaption(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiCaption(nil).Create(map[string]any{
    "canvasText": []any{},
    "name": "example_name",
    "tone": "example_tone",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiCaptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiJobEntity

```go
aiJob := client.AiJob(nil)
fmt.Println(aiJob.GetName()) // "ai_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `afterState` | `map[string]any` | No |  |
| `attempts` | `int` | No |  |
| `beforeState` | `map[string]any` | No |  |
| `brushEdits` | `[]any` | No |  |
| `capability` | `string` | Yes |  |
| `celebrityConfidence` | `float64` | No |  |
| `consentAttested` | `bool` | No |  |
| `createdAt` | `string` | No |  |
| `detectedFaceCount` | `float64` | Yes |  |
| `edgeRefinement` | `float64` | No |  |
| `frameTimeMs` | `float64` | No |  |
| `height` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `input` | `map[string]any` | No |  |
| `layerId` | `string` | Yes |  |
| `layerType` | `string` | No |  |
| `maxAttempts` | `int` | No |  |
| `maxFaces` | `float64` | No |  |
| `mediaType` | `string` | No |  |
| `metadata` | `map[string]any` | No |  |
| `nsfwScore` | `float64` | No |  |
| `projectId` | `string` | Yes |  |
| `runAfterMs` | `int` | No |  |
| `sourceAssetUrl` | `string` | Yes |  |
| `sourceFaceIndex` | `float64` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `targetAssetUrl` | `string` | Yes |  |
| `targetFaceIndex` | `float64` | No |  |
| `timeoutMs` | `int` | No |  |
| `traceId` | `string` | No |  |
| `updatedAt` | `string` | No |  |
| `versionId` | `string` | No |  |
| `width` | `float64` | Yes |  |
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
| `projectId` | - | - |
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
| `workspaceId` | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiJob(nil).Load(map[string]any{"id": "ai_job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiJob(nil).Create(map[string]any{
    "action": "example_action",
    "capability": "example_capability",
    "detectedFaceCount": 1,
    "height": 1,
    "id": "example_id",
    "layerId": "example_layerId",
    "projectId": "example_projectId",
    "sourceAssetUrl": "example_sourceAssetUrl",
    "sourceImageUrl": "example_sourceImageUrl",
    "status": "example_status",
    "targetAssetUrl": "example_targetAssetUrl",
    "width": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiMemeGenerationSucceededEntity

```go
aiMemeGenerationSucceeded := client.AiMemeGenerationSucceeded(nil)
fmt.Println(aiMemeGenerationSucceeded.GetName()) // "ai_meme_generation_succeeded"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowHeuristicFallback` | `bool` | No |  |
| `captionSource` | `string` | No |  |
| `captions` | `[]any` | No |  |
| `correlationId` | `string` | No |  |
| `degradedFromAsync` | `bool` | No |  |
| `editableCaptions` | `[]any` | No |  |
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
| `toneCues` | `[]any` | No |  |
| `variantCount` | `int` | Yes |  |
| `variants` | `[]any` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiMemeGenerationSucceeded(nil).Create(map[string]any{
    "flow": "example_flow",
    "mode": "example_mode",
    "ok": true,
    "prompt": "example_prompt",
    "status": "example_status",
    "variantCount": 1,
    "variants": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiMemeGenerationSucceededEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiProviderEntity

```go
aiProvider := client.AiProvider(nil)
fmt.Println(aiProvider.GetName()) // "ai_provider"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actorId` | `string` | No |  |
| `correlationId` | `string` | No |  |
| `limit` | `float64` | No |  |
| `mappingMode` | `string` | No |  |
| `maxSlots` | `int` | No |  |
| `prompt` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `texts` | `[]any` | No |  |
| `trendSignals` | `[]any` | No |  |
| `workspaceId` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiProvider(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiProvider(nil).Create(map[string]any{
    "prompt": "example_prompt",
    "sourceImageUrl": "example_sourceImageUrl",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsEntity

```go
analytics := client.Analytics(nil)
fmt.Println(analytics.GetName()) // "analytics"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Analytics(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthEntity

```go
auth := client.Auth(nil)
fmt.Println(auth.GetName()) // "auth"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Auth(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingEntity

```go
billing := client.Billing(nil)
fmt.Println(billing.GetName()) // "billing"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Billing(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollaborationEntity

```go
collaboration := client.Collaboration(nil)
fmt.Println(collaboration.GetName()) // "collaboration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorId` | `string` | No |  |
| `message` | `string` | Yes |  |
| `projectId` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Collaboration(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Collaboration(nil).Create(map[string]any{
    "message": "example_message",
    "projectId": "example_projectId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollaborationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComplianceEntity

```go
compliance := client.Compliance(nil)
fmt.Println(compliance.GetName()) // "compliance"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Compliance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComplianceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateMemeEntity

```go
createMeme := client.CreateMeme(nil)
fmt.Println(createMeme.GetName()) // "create_meme"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canvas` | `map[string]any` | Yes |  |
| `captions` | `[]any` | Yes |  |
| `generationRunId` | `any` | No |  |
| `generationVariantId` | `any` | No |  |
| `imageDataUrl` | `string` | Yes |  |
| `overlays` | `[]any` | No |  |
| `sourceImageUrl` | `string` | Yes |  |
| `templateSlug` | `string` | No |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateMeme(nil).Create(map[string]any{
    "canvas": map[string]any{},
    "captions": []any{},
    "imageDataUrl": "example_imageDataUrl",
    "sourceImageUrl": "example_sourceImageUrl",
    "watermark": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateMemeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeveloperApiEntity

```go
developerApi := client.DeveloperApi(nil)
fmt.Println(developerApi.GetName()) // "developer_api"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `float64` | No |  |
| `prompt` | `string` | Yes |  |
| `trendSignals` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeveloperApi(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DeveloperApi(nil).Create(map[string]any{
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeveloperApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FreeCaptionMemeSuccessEntity

```go
freeCaptionMemeSuccess := client.FreeCaptionMemeSuccess(nil)
fmt.Println(freeCaptionMemeSuccess.GetName()) // "free_caption_meme_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions` | `[]any` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | No |  |
| `visibility` | `string` | No |  |
| `watermark` | `map[string]any` | No | Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FreeCaptionMemeSuccess(nil).Create(map[string]any{
    "captions": []any{},
    "templateSlug": "example_templateSlug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FreeCaptionMemeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FreeTemplateSearchEntity

```go
freeTemplateSearch := client.FreeTemplateSearch(nil)
fmt.Println(freeTemplateSearch.GetName()) // "free_template_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `any` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | Yes |  |
| `captionCount` | `int` | Yes |  |
| `captions` | `[]any` | Yes |  |
| `description` | `string` | Yes |  |
| `durationMs` | `any` | No |  |
| `exampleImageUrl` | `any` | No |  |
| `frameCount` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `any` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `[]any` | No |  |
| `width` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FreeTemplateSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FreeTemplateSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateEntity

```go
generate := client.Generate(nil)
fmt.Println(generate.GetName()) // "generate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base64` | `string` | No |  |
| `byteLength` | `int` | Yes |  |
| `captions` | `[]any` | No |  |
| `dataUrl` | `string` | No |  |
| `delayMs` | `int` | Yes |  |
| `durationMs` | `int` | No |  |
| `filename` | `string` | Yes |  |
| `fps` | `int` | No |  |
| `gifSlug` | `string` | Yes | Required for /api/v1/gifs/generate. |
| `height` | `int` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `pages` | `int` | Yes |  |
| `parameters` | `map[string]any` | Yes |  |
| `returnBase64` | `bool` | No | Only used by /api/v1/gifs/generate. |
| `sourceDurationMs` | `int` | Yes |  |
| `startMs` | `int` | No |  |
| `tags` | `[]any` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Generate(nil).Create(map[string]any{
    "byteLength": 1,
    "delayMs": 1,
    "filename": "example_filename",
    "gifSlug": "example_gifSlug",
    "height": 1,
    "mimeType": "example_mimeType",
    "pages": 1,
    "parameters": map[string]any{},
    "sourceDurationMs": 1,
    "width": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GifEntity

```go
gif := client.Gif(nil)
fmt.Println(gif.GetName()) // "gif"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `any` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `[]any` | Yes |  |
| `categories` | `[]any` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `any` | No |  |
| `exampleImageUrl` | `any` | No |  |
| `frameCount` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `any` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `[]any` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gif(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GifEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GrowthEntity

```go
growth := client.Growth(nil)
fmt.Println(growth.GetName()) // "growth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | No |  |
| `limit` | `int` | No |  |
| `logExposure` | `bool` | No |  |
| `surface` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Growth(nil).Load(map[string]any{"actor_id": "actor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Growth(nil).Create(map[string]any{
    "action": "example_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GrowthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MediaEntity

```go
media := client.Media(nil)
fmt.Println(media.GetName()) // "media"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Media(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MediaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemeEntity

```go
meme := client.Meme(nil)
fmt.Println(meme.GetName()) // "meme"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altText` | `string` | Yes |  |
| `canonicalImageUrl` | `string` | Yes |  |
| `canvas` | `map[string]any` | Yes |  |
| `captions` | `[]any` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | No |  |
| `imageUrl` | `string` | Yes |  |
| `nsfwStatus` | `string` | Yes |  |
| `overlays` | `[]any` | Yes |  |
| `shareSlug` | `string` | Yes |  |
| `shareUrl` | `string` | Yes |  |
| `shareViews` | `int` | Yes |  |
| `slug` | `string` | Yes |  |
| `sourceImageUrl` | `string` | Yes |  |
| `tags` | `[]any` | Yes |  |
| `templateSlug` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `watermark` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Meme(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Meme(nil).Load(map[string]any{"id": "meme_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Meme(nil).Remove(map[string]any{"id": "meme_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicTemplateMediaItemEntity

```go
publicTemplateMediaItem := client.PublicTemplateMediaItem(nil)
fmt.Println(publicTemplateMediaItem.GetName()) // "public_template_media_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `any` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `[]any` | Yes |  |
| `categories` | `[]any` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `any` | No |  |
| `exampleImageUrl` | `any` | No |  |
| `frameCount` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `any` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `[]any` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PublicTemplateMediaItem(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PublicTemplateMediaItem(nil).Create(map[string]any{
    "slug": "example_slug",
    "captions": []any{},
    "description": "example_description",
    "height": 1,
    "id": "example_id",
    "imageUrl": "example_imageUrl",
    "mediaType": "example_mediaType",
    "name": "example_name",
    "sourceTemplateId": "example_sourceTemplateId",
    "tags": []any{},
    "width": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicTemplateMediaItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StandaloneAgentBootstrapEntity

```go
standaloneAgentBootstrap := client.StandaloneAgentBootstrap(nil)
fmt.Println(standaloneAgentBootstrap.GetName()) // "standalone_agent_bootstrap"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StandaloneAgentBootstrap(nil).Create(map[string]any{
    "handle": "example_handle",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StandaloneAgentBootstrapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TemplateEntity

```go
template := client.Template(nil)
fmt.Println(template.GetName()) // "template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animated` | `bool` | No |  |
| `assetBytes` | `any` | No |  |
| `assetContentType` | `string` | No |  |
| `boxCount` | `int` | No |  |
| `captionCount` | `int` | No |  |
| `captions` | `[]any` | Yes |  |
| `categories` | `[]any` | No |  |
| `description` | `string` | Yes |  |
| `durationMs` | `any` | No |  |
| `exampleImageUrl` | `any` | No |  |
| `frameCount` | `any` | No |  |
| `height` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `imageUrl` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `posterImageUrl` | `string` | No |  |
| `previewImageUrl` | `string` | No |  |
| `qualityStatus` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sourceTemplateId` | `any` | Yes |  |
| `sourceUrl` | `string` | No |  |
| `tags` | `[]any` | Yes |  |
| `width` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Template(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TrendAlertEntity

```go
trendAlert := client.TrendAlert(nil)
fmt.Println(trendAlert.GetName()) // "trend_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actorId` | `string` | Yes |  |
| `aggressiveness` | `float64` | No |  |
| `alertId` | `string` | Yes |  |
| `channels` | `[]any` | No |  |
| `deliverAllAlerts` | `bool` | No |  |
| `event` | `map[string]any` | No |  |
| `explicitNiches` | `[]any` | No |  |
| `explicitRegions` | `[]any` | No |  |
| `explicitSources` | `[]any` | No |  |
| `explicitTopics` | `[]any` | No |  |
| `followerCount` | `int` | No |  |
| `niche` | `string` | No |  |
| `region` | `string` | No |  |
| `source` | `string` | No |  |
| `topic` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TrendAlert(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TrendAlert(nil).Create(map[string]any{
    "action": "example_action",
    "actorId": "example_actorId",
    "alertId": "example_alertId",
    "topic": "example_topic",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrendAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadCaptionMemeSuccessEntity

```go
uploadCaptionMemeSuccess := client.UploadCaptionMemeSuccess(nil)
fmt.Println(uploadCaptionMemeSuccess.GetName()) // "upload_caption_meme_success"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UploadCaptionMemeSuccess(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadCaptionMemeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoEntity

```go
video := client.Video(nil)
fmt.Println(video.GetName()) // "video"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Video(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Video(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewMemesioContentCreationSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

