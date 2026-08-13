# MemesioContentCreation Golang SDK



The Golang SDK for the MemesioContentCreation API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Agent(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/memesio-content-creation-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/memesio-content-creation-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/memesio-content-creation-sdk/go=../memesio-content-creation-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/memesio-content-creation-sdk/go"
)

func main() {
    client := sdk.NewMemesioContentCreationSDK(map[string]any{
        "apikey": os.Getenv("MEMESIO_CONTENT_CREATION_APIKEY"),
    })

    // Load a single agent — the value is the loaded record.
    agent, err := client.Agent(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(agent)

    // Create a agent.
    created, err := client.Agent(nil).Create(map[string]any{"name": "example_name"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a agent.
    updated, err := client.Agent(nil).Update(map[string]any{"id": "example_id", "description": "example_description", "locale": "example_locale"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
trendalert, err := client.TrendAlert(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = trendalert
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

trendAlert, err := client.TrendAlert(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(trendAlert) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewMemesioContentCreationSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewMemesioContentCreationSDK

```go
func NewMemesioContentCreationSDK(options map[string]any) *MemesioContentCreationSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *MemesioContentCreationSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MemesioContentCreationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Agent` | `(data map[string]any) MemesioContentCreationEntity` | Create an Agent entity instance. |
| `AgentInfra` | `(data map[string]any) MemesioContentCreationEntity` | Create an AgentInfra entity instance. |
| `AiCaption` | `(data map[string]any) MemesioContentCreationEntity` | Create an AiCaption entity instance. |
| `AiJob` | `(data map[string]any) MemesioContentCreationEntity` | Create an AiJob entity instance. |
| `AiMemeGenerationSucceeded` | `(data map[string]any) MemesioContentCreationEntity` | Create an AiMemeGenerationSucceeded entity instance. |
| `AiProvider` | `(data map[string]any) MemesioContentCreationEntity` | Create an AiProvider entity instance. |
| `Analytics` | `(data map[string]any) MemesioContentCreationEntity` | Create an Analytics entity instance. |
| `Auth` | `(data map[string]any) MemesioContentCreationEntity` | Create an Auth entity instance. |
| `Billing` | `(data map[string]any) MemesioContentCreationEntity` | Create a Billing entity instance. |
| `Collaboration` | `(data map[string]any) MemesioContentCreationEntity` | Create a Collaboration entity instance. |
| `Compliance` | `(data map[string]any) MemesioContentCreationEntity` | Create a Compliance entity instance. |
| `CreateMeme` | `(data map[string]any) MemesioContentCreationEntity` | Create a CreateMeme entity instance. |
| `DeveloperApi` | `(data map[string]any) MemesioContentCreationEntity` | Create a DeveloperApi entity instance. |
| `FreeCaptionMemeSuccess` | `(data map[string]any) MemesioContentCreationEntity` | Create a FreeCaptionMemeSuccess entity instance. |
| `FreeTemplateSearch` | `(data map[string]any) MemesioContentCreationEntity` | Create a FreeTemplateSearch entity instance. |
| `Generate` | `(data map[string]any) MemesioContentCreationEntity` | Create a Generate entity instance. |
| `Growth` | `(data map[string]any) MemesioContentCreationEntity` | Create a Growth entity instance. |
| `ListMeme` | `(data map[string]any) MemesioContentCreationEntity` | Create a ListMeme entity instance. |
| `Media` | `(data map[string]any) MemesioContentCreationEntity` | Create a Media entity instance. |
| `Meme` | `(data map[string]any) MemesioContentCreationEntity` | Create a Meme entity instance. |
| `PublicTemplateMediaItem` | `(data map[string]any) MemesioContentCreationEntity` | Create a PublicTemplateMediaItem entity instance. |
| `StandaloneAgentBootstrap` | `(data map[string]any) MemesioContentCreationEntity` | Create a StandaloneAgentBootstrap entity instance. |
| `Template` | `(data map[string]any) MemesioContentCreationEntity` | Create a Template entity instance. |
| `TemplateSearch` | `(data map[string]any) MemesioContentCreationEntity` | Create a TemplateSearch entity instance. |
| `TrendAlert` | `(data map[string]any) MemesioContentCreationEntity` | Create a TrendAlert entity instance. |
| `UploadCaptionMemeSuccess` | `(data map[string]any) MemesioContentCreationEntity` | Create an UploadCaptionMemeSuccess entity instance. |
| `Video` | `(data map[string]any) MemesioContentCreationEntity` | Create a Video entity instance. |

### Entity interface (MemesioContentCreationEntity)

All entities implement the `MemesioContentCreationEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    agent, err := client.Agent(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // agent is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"locale"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"status"` |  |
| `"stylePreset"` |  |
| `"systemPrompt"` |  |
| `"watermarkText"` |  |
| `"websiteUrl"` |  |

Operations: Create, Load, Update.

API path: `/api/v1/agents`

#### AgentInfra

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"chatId"` |  |
| `"memeSlug"` |  |
| `"metadata"` |  |
| `"payoutReference"` |  |
| `"payoutStatus"` |  |
| `"phoneOrChatId"` |  |
| `"prompt"` |  |
| `"proof"` |  |
| `"quotaBoostPerDay"` |  |
| `"scopes"` |  |
| `"userId"` |  |
| `"weekStart"` |  |

Operations: Create, Load, Remove.

API path: `/api/v1/agents/{agentId}/channels/telegram/bind`

#### AiCaption

| Field | Description |
| --- | --- |
| `"blockedTerms"` |  |
| `"canvasText"` |  |
| `"captionCount"` |  |
| `"captionSets"` |  |
| `"entities"` |  |
| `"fallbackUsed"` |  |
| `"generationStrategy"` |  |
| `"locale"` |  |
| `"memeId"` |  |
| `"memeSlug"` |  |
| `"name"` |  |
| `"ok"` |  |
| `"optionCount"` |  |
| `"ownerToken"` |  |
| `"providerId"` |  |
| `"referenceCaptions"` |  |
| `"rewriteNote"` |  |
| `"sceneSummary"` |  |
| `"templateDescription"` |  |
| `"templateName"` |  |
| `"templateTags"` |  |
| `"tone"` |  |
| `"toneCues"` |  |
| `"trendKeywords"` |  |
| `"trendReferences"` |  |
| `"trendSignals"` |  |
| `"variationOffset"` |  |
| `"voiceRules"` |  |

Operations: Create, Load.

API path: `/api/ai/captions/generate`

#### AiJob

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"actorId"` |  |
| `"afterState"` |  |
| `"attempts"` |  |
| `"beforeState"` |  |
| `"brushEdits"` |  |
| `"capability"` |  |
| `"celebrityConfidence"` |  |
| `"consentAttested"` |  |
| `"createdAt"` |  |
| `"detectedFaceCount"` |  |
| `"edgeRefinement"` |  |
| `"estimatedCostUsd"` |  |
| `"frameTimeMs"` |  |
| `"height"` |  |
| `"id"` |  |
| `"input"` |  |
| `"layerId"` |  |
| `"layerType"` |  |
| `"maxAttempts"` |  |
| `"maxFaces"` |  |
| `"mediaType"` |  |
| `"metadata"` |  |
| `"nsfwScore"` |  |
| `"output"` |  |
| `"projectId"` |  |
| `"providerId"` |  |
| `"reason"` |  |
| `"runAfterMs"` |  |
| `"sourceAssetUrl"` |  |
| `"sourceFaceIndex"` |  |
| `"sourceImageUrl"` |  |
| `"status"` |  |
| `"targetAssetUrl"` |  |
| `"targetFaceIndex"` |  |
| `"timeoutMs"` |  |
| `"traceId"` |  |
| `"updatedAt"` |  |
| `"versionId"` |  |
| `"width"` |  |
| `"workerId"` |  |
| `"workspaceId"` |  |

Operations: Create, Load.

API path: `/api/ai/jobs/{jobId}/cancel`

#### AiMemeGenerationSucceeded

| Field | Description |
| --- | --- |
| `"allowHeuristicFallback"` |  |
| `"captionSource"` |  |
| `"captions"` |  |
| `"correlationId"` |  |
| `"degradedFromAsync"` |  |
| `"editableCaptions"` |  |
| `"flow"` |  |
| `"imageUrl"` |  |
| `"mode"` |  |
| `"ok"` |  |
| `"preferredProviderId"` |  |
| `"prompt"` |  |
| `"rewriteNote"` |  |
| `"runId"` |  |
| `"status"` |  |
| `"templateId"` |  |
| `"tone"` |  |
| `"toneCues"` |  |
| `"variantCount"` |  |
| `"variants"` |  |
| `"workspaceId"` |  |

Operations: Create.

API path: `/api/ai/memes/generate`

#### AiProvider

| Field | Description |
| --- | --- |
| `"actorId"` |  |
| `"correlationId"` |  |
| `"limit"` |  |
| `"mappingMode"` |  |
| `"maxSlots"` |  |
| `"prompt"` |  |
| `"sourceImageUrl"` |  |
| `"texts"` |  |
| `"trendSignals"` |  |
| `"workspaceId"` |  |

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
| `"displayName"` |  |
| `"email"` |  |
| `"password"` |  |

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
| `"authorId"` |  |
| `"message"` |  |
| `"projectId"` |  |

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
| `"canvas"` |  |
| `"captions"` |  |
| `"generationRunId"` |  |
| `"generationVariantId"` |  |
| `"imageDataUrl"` |  |
| `"overlays"` |  |
| `"sourceImageUrl"` |  |
| `"templateSlug"` |  |
| `"title"` |  |
| `"visibility"` |  |
| `"watermark"` |  |

Operations: Create.

API path: `/api/memes`

#### DeveloperApi

| Field | Description |
| --- | --- |
| `"limit"` |  |
| `"prompt"` |  |
| `"trendSignals"` |  |

Operations: Create, Load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `"captions"` |  |
| `"templateSlug"` |  |
| `"title"` |  |
| `"visibility"` |  |
| `"watermark"` |  |

Operations: Create.

API path: `/api/free/memes/caption`

#### FreeTemplateSearch

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"assetBytes"` |  |
| `"assetContentType"` |  |
| `"boxCount"` |  |
| `"captionCount"` |  |
| `"captions"` |  |
| `"description"` |  |
| `"durationMs"` |  |
| `"exampleImageUrl"` |  |
| `"frameCount"` |  |
| `"height"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"mediaType"` |  |
| `"name"` |  |
| `"posterImageUrl"` |  |
| `"qualityStatus"` |  |
| `"slug"` |  |
| `"sourceTemplateId"` |  |
| `"sourceUrl"` |  |
| `"tags"` |  |
| `"width"` |  |

Operations: List.

API path: `/api/free/templates`

#### Generate

| Field | Description |
| --- | --- |
| `"base64"` |  |
| `"byteLength"` |  |
| `"captions"` |  |
| `"dataUrl"` |  |
| `"delayMs"` |  |
| `"durationMs"` |  |
| `"filename"` |  |
| `"fps"` |  |
| `"gifSlug"` |  |
| `"height"` |  |
| `"mimeType"` |  |
| `"pages"` |  |
| `"parameters"` |  |
| `"returnBase64"` |  |
| `"sourceDurationMs"` |  |
| `"startMs"` |  |
| `"tags"` |  |
| `"title"` |  |
| `"width"` |  |
| `"widthPx"` |  |

Operations: Create.

API path: `/api/v1/gifs/generate`

#### Growth

| Field | Description |
| --- | --- |
| `"accountId"` |  |
| `"action"` |  |
| `"actorId"` |  |
| `"caption"` |  |
| `"code"` |  |
| `"externalAccountId"` |  |
| `"handle"` |  |
| `"limit"` |  |
| `"logExposure"` |  |
| `"memeSlug"` |  |
| `"now"` |  |
| `"platform"` |  |
| `"profiles"` |  |
| `"shareSlug"` |  |
| `"surface"` |  |
| `"weekStart"` |  |

Operations: Create, Load.

API path: `/api/growth/experiments/decision`

#### ListMeme

| Field | Description |
| --- | --- |
| `"altText"` |  |
| `"canonicalImageUrl"` |  |
| `"createdAt"` |  |
| `"imageUrl"` |  |
| `"nsfwStatus"` |  |
| `"shareSlug"` |  |
| `"shareUrl"` |  |
| `"shareViews"` |  |
| `"slug"` |  |
| `"tags"` |  |
| `"templateSlug"` |  |
| `"title"` |  |
| `"visibility"` |  |

Operations: List.

API path: `/api/memes`

#### Media

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"contentType"` |  |
| `"expiresInSeconds"` |  |
| `"ownerToken"` |  |
| `"path"` |  |
| `"prefix"` |  |

Operations: Create.

API path: `/api/media/signed-url`

#### Meme

| Field | Description |
| --- | --- |
| `"altText"` |  |
| `"canonicalImageUrl"` |  |
| `"canvas"` |  |
| `"captions"` |  |
| `"createdAt"` |  |
| `"imageUrl"` |  |
| `"nsfwStatus"` |  |
| `"overlays"` |  |
| `"shareSlug"` |  |
| `"shareUrl"` |  |
| `"shareViews"` |  |
| `"slug"` |  |
| `"sourceImageUrl"` |  |
| `"tags"` |  |
| `"templateSlug"` |  |
| `"title"` |  |
| `"visibility"` |  |
| `"watermark"` |  |

Operations: Load, Remove.

API path: `/api/memes/{slug}`

#### PublicTemplateMediaItem

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"assetBytes"` |  |
| `"assetContentType"` |  |
| `"boxCount"` |  |
| `"captionCount"` |  |
| `"captions"` |  |
| `"categories"` |  |
| `"description"` |  |
| `"durationMs"` |  |
| `"exampleImageUrl"` |  |
| `"frameCount"` |  |
| `"height"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"mediaType"` |  |
| `"name"` |  |
| `"posterImageUrl"` |  |
| `"previewImageUrl"` |  |
| `"qualityStatus"` |  |
| `"slug"` |  |
| `"sourceTemplateId"` |  |
| `"sourceUrl"` |  |
| `"tags"` |  |
| `"width"` |  |

Operations: Load.

API path: `/api/templates/{slug}`

#### StandaloneAgentBootstrap

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"handle"` |  |
| `"locale"` |  |
| `"name"` |  |
| `"stylePreset"` |  |
| `"systemPrompt"` |  |
| `"watermarkText"` |  |
| `"websiteUrl"` |  |

Operations: Create.

API path: `/api/v1/agents/bootstrap`

#### Template

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"assetBytes"` |  |
| `"assetContentType"` |  |
| `"boxCount"` |  |
| `"captionCount"` |  |
| `"captions"` |  |
| `"categories"` |  |
| `"description"` |  |
| `"durationMs"` |  |
| `"exampleImageUrl"` |  |
| `"fps"` |  |
| `"frameCount"` |  |
| `"gifSlug"` |  |
| `"height"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"mediaType"` |  |
| `"name"` |  |
| `"posterImageUrl"` |  |
| `"previewImageUrl"` |  |
| `"qualityStatus"` |  |
| `"returnBase64"` |  |
| `"slug"` |  |
| `"sourceTemplateId"` |  |
| `"sourceUrl"` |  |
| `"startMs"` |  |
| `"tags"` |  |
| `"title"` |  |
| `"width"` |  |
| `"widthPx"` |  |

Operations: Create, List.

API path: `/api/gifs/{slug}/generate`

#### TemplateSearch

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"assetBytes"` |  |
| `"assetContentType"` |  |
| `"boxCount"` |  |
| `"captionCount"` |  |
| `"captions"` |  |
| `"categories"` |  |
| `"description"` |  |
| `"durationMs"` |  |
| `"exampleImageUrl"` |  |
| `"frameCount"` |  |
| `"height"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"mediaType"` |  |
| `"name"` |  |
| `"posterImageUrl"` |  |
| `"previewImageUrl"` |  |
| `"qualityStatus"` |  |
| `"slug"` |  |
| `"sourceTemplateId"` |  |
| `"sourceUrl"` |  |
| `"tags"` |  |
| `"width"` |  |

Operations: List.

API path: `/api/gifs`

#### TrendAlert

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"actorId"` |  |
| `"aggressiveness"` |  |
| `"alertId"` |  |
| `"channels"` |  |
| `"deliverAllAlerts"` |  |
| `"event"` |  |
| `"explicitNiches"` |  |
| `"explicitRegions"` |  |
| `"explicitSources"` |  |
| `"explicitTopics"` |  |
| `"followerCount"` |  |
| `"niche"` |  |
| `"region"` |  |
| `"source"` |  |
| `"topic"` |  |

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
| `"action"` |  |
| `"assetId"` |  |
| `"atMs"` |  |
| `"audioAssetId"` |  |
| `"beatOffsetMs"` |  |
| `"bitrateKbps"` |  |
| `"bpm"` |  |
| `"cancelled"` |  |
| `"container"` |  |
| `"durationMs"` |  |
| `"durationSeconds"` |  |
| `"easing"` |  |
| `"error"` |  |
| `"frameRate"` |  |
| `"inputFormat"` |  |
| `"intensity"` |  |
| `"jobId"` |  |
| `"locale"` |  |
| `"mimeType"` |  |
| `"name"` |  |
| `"offsetMs"` |  |
| `"outputPresetId"` |  |
| `"outputUrl"` |  |
| `"planTier"` |  |
| `"presetId"` |  |
| `"progressPercent"` |  |
| `"project"` |  |
| `"projectId"` |  |
| `"property"` |  |
| `"sourceDeviceId"` |  |
| `"sourceUrl"` |  |
| `"stage"` |  |
| `"startMs"` |  |
| `"stylePresetId"` |  |
| `"syncToBeatGrid"` |  |
| `"tone"` |  |
| `"trackId"` |  |
| `"transcript"` |  |
| `"trendKeywords"` |  |
| `"type"` |  |
| `"updatedAt"` |  |
| `"value"` |  |
| `"watermarkEnabled"` |  |
| `"watermarkText"` |  |
| `"workerId"` |  |

Operations: Create, Load.

API path: `/api/video/drafts`



## Entities


### Agent

Create an instance: `agent := client.Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
agent, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the loaded record
```

#### Example: Create

```go
result, err := client.Agent(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AgentInfra

Create an instance: `agentInfra := client.AgentInfra(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `chatId` | `string` |  |
| `memeSlug` | `string` |  |
| `metadata` | `map[string]any` |  |
| `payoutReference` | `string` |  |
| `payoutStatus` | `string` |  |
| `phoneOrChatId` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `map[string]any` |  |
| `quotaBoostPerDay` | `int` |  |
| `scopes` | `[]any` |  |
| `userId` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```go
agentInfra, err := client.AgentInfra(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentInfra) // the loaded record
```

#### Example: Create

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


### AiCaption

Create an instance: `aiCaption := client.AiCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedTerms` | `[]any` |  |
| `canvasText` | `[]any` |  |
| `captionCount` | `int` |  |
| `captionSets` | `[]any` |  |
| `entities` | `[]any` |  |
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
| `referenceCaptions` | `[]any` |  |
| `rewriteNote` | `string` |  |
| `sceneSummary` | `string` |  |
| `templateDescription` | `string` |  |
| `templateName` | `string` |  |
| `templateTags` | `[]any` |  |
| `tone` | `string` |  |
| `toneCues` | `[]any` |  |
| `trendKeywords` | `[]any` |  |
| `trendReferences` | `[]any` |  |
| `trendSignals` | `[]any` |  |
| `variationOffset` | `int` |  |
| `voiceRules` | `[]any` |  |

#### Example: Load

```go
aiCaption, err := client.AiCaption(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiCaption) // the loaded record
```

#### Example: Create

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


### AiJob

Create an instance: `aiJob := client.AiJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actorId` | `string` |  |
| `afterState` | `map[string]any` |  |
| `attempts` | `int` |  |
| `beforeState` | `map[string]any` |  |
| `brushEdits` | `[]any` |  |
| `capability` | `string` |  |
| `celebrityConfidence` | `float64` |  |
| `consentAttested` | `bool` |  |
| `createdAt` | `string` |  |
| `detectedFaceCount` | `float64` |  |
| `edgeRefinement` | `float64` |  |
| `estimatedCostUsd` | `float64` |  |
| `frameTimeMs` | `float64` |  |
| `height` | `float64` |  |
| `id` | `string` |  |
| `input` | `map[string]any` |  |
| `layerId` | `string` |  |
| `layerType` | `string` |  |
| `maxAttempts` | `int` |  |
| `maxFaces` | `float64` |  |
| `mediaType` | `string` |  |
| `metadata` | `map[string]any` |  |
| `nsfwScore` | `float64` |  |
| `output` | `map[string]any` |  |
| `projectId` | `string` |  |
| `providerId` | `string` |  |
| `reason` | `string` |  |
| `runAfterMs` | `int` |  |
| `sourceAssetUrl` | `string` |  |
| `sourceFaceIndex` | `float64` |  |
| `sourceImageUrl` | `string` |  |
| `status` | `string` |  |
| `targetAssetUrl` | `string` |  |
| `targetFaceIndex` | `float64` |  |
| `timeoutMs` | `int` |  |
| `traceId` | `string` |  |
| `updatedAt` | `string` |  |
| `versionId` | `string` |  |
| `width` | `float64` |  |
| `workerId` | `string` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```go
aiJob, err := client.AiJob(nil).Load(map[string]any{"id": "ai_job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiJob) // the loaded record
```

#### Example: Create

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
    "workerId": "example_workerId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiMemeGenerationSucceeded

Create an instance: `aiMemeGenerationSucceeded := client.AiMemeGenerationSucceeded(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowHeuristicFallback` | `bool` |  |
| `captionSource` | `string` |  |
| `captions` | `[]any` |  |
| `correlationId` | `string` |  |
| `degradedFromAsync` | `bool` |  |
| `editableCaptions` | `[]any` |  |
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
| `toneCues` | `[]any` |  |
| `variantCount` | `int` |  |
| `variants` | `[]any` |  |
| `workspaceId` | `string` |  |

#### Example: Create

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


### AiProvider

Create an instance: `aiProvider := client.AiProvider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actorId` | `string` |  |
| `correlationId` | `string` |  |
| `limit` | `float64` |  |
| `mappingMode` | `string` |  |
| `maxSlots` | `int` |  |
| `prompt` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `texts` | `[]any` |  |
| `trendSignals` | `[]any` |  |
| `workspaceId` | `string` |  |

#### Example: Load

```go
aiProvider, err := client.AiProvider(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiProvider) // the loaded record
```

#### Example: Create

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


### Analytics

Create an instance: `analytics := client.Analytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
analytics, err := client.Analytics(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analytics) // the loaded record
```


### Auth

Create an instance: `auth := client.Auth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `displayName` | `string` |  |
| `email` | `string` |  |
| `password` | `string` |  |

#### Example: Create

```go
result, err := client.Auth(nil).Create(map[string]any{
    "email": "example_email",
    "password": "example_password",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Billing

Create an instance: `billing := client.Billing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
billing, err := client.Billing(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billing) // the loaded record
```


### Collaboration

Create an instance: `collaboration := client.Collaboration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorId` | `string` |  |
| `message` | `string` |  |
| `projectId` | `string` |  |

#### Example: Load

```go
collaboration, err := client.Collaboration(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(collaboration) // the loaded record
```

#### Example: Create

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


### Compliance

Create an instance: `compliance := client.Compliance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
compliance, err := client.Compliance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(compliance) // the loaded record
```


### CreateMeme

Create an instance: `createMeme := client.CreateMeme(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canvas` | `map[string]any` |  |
| `captions` | `[]any` |  |
| `generationRunId` | `any` |  |
| `generationVariantId` | `any` |  |
| `imageDataUrl` | `string` |  |
| `overlays` | `[]any` |  |
| `sourceImageUrl` | `string` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `map[string]any` |  |

#### Example: Create

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


### DeveloperApi

Create an instance: `developerApi := client.DeveloperApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `limit` | `float64` |  |
| `prompt` | `string` |  |
| `trendSignals` | `[]any` |  |

#### Example: Load

```go
developerApi, err := client.DeveloperApi(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(developerApi) // the loaded record
```

#### Example: Create

```go
result, err := client.DeveloperApi(nil).Create(map[string]any{
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FreeCaptionMemeSuccess

Create an instance: `freeCaptionMemeSuccess := client.FreeCaptionMemeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions` | `[]any` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `map[string]any` |  |

#### Example: Create

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


### FreeTemplateSearch

Create an instance: `freeTemplateSearch := client.FreeTemplateSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `assetBytes` | `any` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `[]any` |  |
| `description` | `string` |  |
| `durationMs` | `any` |  |
| `exampleImageUrl` | `any` |  |
| `frameCount` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `any` |  |
| `sourceUrl` | `string` |  |
| `tags` | `[]any` |  |
| `width` | `any` |  |

#### Example: List

```go
freeTemplateSearchs, err := client.FreeTemplateSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(freeTemplateSearchs) // the array of records
```


### Generate

Create an instance: `generate := client.Generate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base64` | `string` |  |
| `byteLength` | `int` |  |
| `captions` | `[]any` |  |
| `dataUrl` | `string` |  |
| `delayMs` | `int` |  |
| `durationMs` | `int` |  |
| `filename` | `string` |  |
| `fps` | `int` |  |
| `gifSlug` | `string` |  |
| `height` | `int` |  |
| `mimeType` | `string` |  |
| `pages` | `int` |  |
| `parameters` | `map[string]any` |  |
| `returnBase64` | `bool` |  |
| `sourceDurationMs` | `int` |  |
| `startMs` | `int` |  |
| `tags` | `[]any` |  |
| `title` | `string` |  |
| `width` | `int` |  |
| `widthPx` | `int` |  |

#### Example: Create

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


### Growth

Create an instance: `growth := client.Growth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `profiles` | `[]any` |  |
| `shareSlug` | `string` |  |
| `surface` | `string` |  |
| `weekStart` | `string` |  |

#### Example: Load

```go
growth, err := client.Growth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(growth) // the loaded record
```

#### Example: Create

```go
result, err := client.Growth(nil).Create(map[string]any{
    "action": "example_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ListMeme

Create an instance: `listMeme := client.ListMeme(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `tags` | `[]any` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |

#### Example: List

```go
listMemes, err := client.ListMeme(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listMemes) // the array of records
```


### Media

Create an instance: `media := client.Media(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.Media(nil).Create(map[string]any{
    "action": "example_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Meme

Create an instance: `meme := client.Meme(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `altText` | `string` |  |
| `canonicalImageUrl` | `string` |  |
| `canvas` | `map[string]any` |  |
| `captions` | `[]any` |  |
| `createdAt` | `string` |  |
| `imageUrl` | `string` |  |
| `nsfwStatus` | `string` |  |
| `overlays` | `[]any` |  |
| `shareSlug` | `string` |  |
| `shareUrl` | `string` |  |
| `shareViews` | `int` |  |
| `slug` | `string` |  |
| `sourceImageUrl` | `string` |  |
| `tags` | `[]any` |  |
| `templateSlug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `map[string]any` |  |

#### Example: Load

```go
meme, err := client.Meme(nil).Load(map[string]any{"id": "meme_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(meme) // the loaded record
```


### PublicTemplateMediaItem

Create an instance: `publicTemplateMediaItem := client.PublicTemplateMediaItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `assetBytes` | `any` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `[]any` |  |
| `categories` | `[]any` |  |
| `description` | `string` |  |
| `durationMs` | `any` |  |
| `exampleImageUrl` | `any` |  |
| `frameCount` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `any` |  |
| `sourceUrl` | `string` |  |
| `tags` | `[]any` |  |
| `width` | `any` |  |

#### Example: Load

```go
publicTemplateMediaItem, err := client.PublicTemplateMediaItem(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(publicTemplateMediaItem) // the loaded record
```


### StandaloneAgentBootstrap

Create an instance: `standaloneAgentBootstrap := client.StandaloneAgentBootstrap(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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


### Template

Create an instance: `template := client.Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `assetBytes` | `any` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `[]any` |  |
| `categories` | `[]any` |  |
| `description` | `string` |  |
| `durationMs` | `int` |  |
| `exampleImageUrl` | `any` |  |
| `fps` | `int` |  |
| `frameCount` | `any` |  |
| `gifSlug` | `string` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `returnBase64` | `bool` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `any` |  |
| `sourceUrl` | `string` |  |
| `startMs` | `int` |  |
| `tags` | `[]any` |  |
| `title` | `string` |  |
| `width` | `any` |  |
| `widthPx` | `int` |  |

#### Example: List

```go
templates, err := client.Template(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(templates) // the array of records
```

#### Example: Create

```go
result, err := client.Template(nil).Create(map[string]any{
    "slug": "example_slug",
    "description": "example_description",
    "height": "example_height",
    "id": "example_id",
    "imageUrl": "example_imageUrl",
    "mediaType": "example_mediaType",
    "name": "example_name",
    "sourceTemplateId": "example_sourceTemplateId",
    "width": "example_width",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TemplateSearch

Create an instance: `templateSearch := client.TemplateSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animated` | `bool` |  |
| `assetBytes` | `any` |  |
| `assetContentType` | `string` |  |
| `boxCount` | `int` |  |
| `captionCount` | `int` |  |
| `captions` | `[]any` |  |
| `categories` | `[]any` |  |
| `description` | `string` |  |
| `durationMs` | `any` |  |
| `exampleImageUrl` | `any` |  |
| `frameCount` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `imageUrl` | `string` |  |
| `mediaType` | `string` |  |
| `name` | `string` |  |
| `posterImageUrl` | `string` |  |
| `previewImageUrl` | `string` |  |
| `qualityStatus` | `string` |  |
| `slug` | `string` |  |
| `sourceTemplateId` | `any` |  |
| `sourceUrl` | `string` |  |
| `tags` | `[]any` |  |
| `width` | `any` |  |

#### Example: List

```go
templateSearchs, err := client.TemplateSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(templateSearchs) // the array of records
```


### TrendAlert

Create an instance: `trendAlert := client.TrendAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actorId` | `string` |  |
| `aggressiveness` | `float64` |  |
| `alertId` | `string` |  |
| `channels` | `[]any` |  |
| `deliverAllAlerts` | `bool` |  |
| `event` | `map[string]any` |  |
| `explicitNiches` | `[]any` |  |
| `explicitRegions` | `[]any` |  |
| `explicitSources` | `[]any` |  |
| `explicitTopics` | `[]any` |  |
| `followerCount` | `int` |  |
| `niche` | `string` |  |
| `region` | `string` |  |
| `source` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```go
trendAlert, err := client.TrendAlert(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(trendAlert) // the loaded record
```

#### Example: Create

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


### UploadCaptionMemeSuccess

Create an instance: `uploadCaptionMemeSuccess := client.UploadCaptionMemeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.UploadCaptionMemeSuccess(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Video

Create an instance: `video := client.Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `assetId` | `string` |  |
| `atMs` | `float64` |  |
| `audioAssetId` | `string` |  |
| `beatOffsetMs` | `int` |  |
| `bitrateKbps` | `float64` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `string` |  |
| `durationMs` | `float64` |  |
| `durationSeconds` | `float64` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frameRate` | `float64` |  |
| `inputFormat` | `string` |  |
| `intensity` | `float64` |  |
| `jobId` | `string` |  |
| `locale` | `string` |  |
| `mimeType` | `string` |  |
| `name` | `string` |  |
| `offsetMs` | `float64` |  |
| `outputPresetId` | `string` |  |
| `outputUrl` | `string` |  |
| `planTier` | `string` |  |
| `presetId` | `string` |  |
| `progressPercent` | `float64` |  |
| `project` | `map[string]any` |  |
| `projectId` | `string` |  |
| `property` | `string` |  |
| `sourceDeviceId` | `string` |  |
| `sourceUrl` | `string` |  |
| `stage` | `string` |  |
| `startMs` | `float64` |  |
| `stylePresetId` | `string` |  |
| `syncToBeatGrid` | `bool` |  |
| `tone` | `string` |  |
| `trackId` | `string` |  |
| `transcript` | `string` |  |
| `trendKeywords` | `[]any` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `value` | `float64` |  |
| `watermarkEnabled` | `bool` |  |
| `watermarkText` | `string` |  |
| `workerId` | `string` |  |

#### Example: Load

```go
video, err := client.Video(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(video) // the loaded record
```

#### Example: Create

```go
result, err := client.Video(nil).Create(map[string]any{
    "durationSeconds": 1,
    "inputFormat": "example_inputFormat",
    "mimeType": "example_mimeType",
    "outputPresetId": "example_outputPresetId",
    "planTier": "example_planTier",
    "presetId": "example_presetId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/memesio-content-creation-sdk/go/
├── memesio-content-creation.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/memesio-content-creation-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
trendalert := client.TrendAlert(nil)
trendalert.Load(nil, nil)

// trendalert.Data() now returns the trendalert data from the last load
// trendalert.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
