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
    updated, err := client.Agent(nil).Update(map[string]any{"id": "example_id"}, nil)
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
agent, err := client.Agent(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = agent
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

agent, err := client.Agent(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the returned mock data
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
| `"style_preset"` |  |
| `"system_prompt"` |  |
| `"watermark_text"` |  |
| `"website_url"` |  |

Operations: Create, Load, Update.

API path: `/api/v1/agents`

#### AgentInfra

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"chat_id"` |  |
| `"meme_slug"` |  |
| `"metadata"` |  |
| `"payout_reference"` |  |
| `"payout_status"` |  |
| `"phone_or_chat_id"` |  |
| `"prompt"` |  |
| `"proof"` |  |
| `"quota_boost_per_day"` |  |
| `"scope"` |  |
| `"user_id"` |  |
| `"week_start"` |  |

Operations: Create, Load, Remove.

API path: `/api/v1/agents/{agentId}/channels/telegram/bind`

#### AiCaption

| Field | Description |
| --- | --- |
| `"blocked_term"` |  |
| `"canvas_text"` |  |
| `"caption_count"` |  |
| `"caption_set"` |  |
| `"entity"` |  |
| `"fallback_used"` |  |
| `"generation_strategy"` |  |
| `"locale"` |  |
| `"meme_id"` |  |
| `"meme_slug"` |  |
| `"name"` |  |
| `"ok"` |  |
| `"option_count"` |  |
| `"owner_token"` |  |
| `"provider_id"` |  |
| `"reference_caption"` |  |
| `"rewrite_note"` |  |
| `"scene_summary"` |  |
| `"template_description"` |  |
| `"template_name"` |  |
| `"template_tag"` |  |
| `"tone"` |  |
| `"tone_cue"` |  |
| `"trend_keyword"` |  |
| `"trend_reference"` |  |
| `"trend_signal"` |  |
| `"variation_offset"` |  |
| `"voice_rule"` |  |

Operations: Create, Load.

API path: `/api/ai/captions/generate`

#### AiJob

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"actor_id"` |  |
| `"after_state"` |  |
| `"attempt"` |  |
| `"before_state"` |  |
| `"brush_edit"` |  |
| `"capability"` |  |
| `"celebrity_confidence"` |  |
| `"consent_attested"` |  |
| `"created_at"` |  |
| `"detected_face_count"` |  |
| `"edge_refinement"` |  |
| `"estimated_cost_usd"` |  |
| `"frame_time_m"` |  |
| `"height"` |  |
| `"id"` |  |
| `"input"` |  |
| `"layer_id"` |  |
| `"layer_type"` |  |
| `"max_attempt"` |  |
| `"max_face"` |  |
| `"media_type"` |  |
| `"metadata"` |  |
| `"nsfw_score"` |  |
| `"output"` |  |
| `"project_id"` |  |
| `"provider_id"` |  |
| `"reason"` |  |
| `"run_after_m"` |  |
| `"source_asset_url"` |  |
| `"source_face_index"` |  |
| `"source_image_url"` |  |
| `"status"` |  |
| `"target_asset_url"` |  |
| `"target_face_index"` |  |
| `"timeout_m"` |  |
| `"trace_id"` |  |
| `"updated_at"` |  |
| `"version_id"` |  |
| `"width"` |  |
| `"worker_id"` |  |
| `"workspace_id"` |  |

Operations: Create, Load.

API path: `/api/ai/jobs/{jobId}/cancel`

#### AiMemeGenerationSucceeded

| Field | Description |
| --- | --- |
| `"allow_heuristic_fallback"` |  |
| `"caption"` |  |
| `"caption_source"` |  |
| `"correlation_id"` |  |
| `"degraded_from_async"` |  |
| `"editable_caption"` |  |
| `"flow"` |  |
| `"image_url"` |  |
| `"mode"` |  |
| `"ok"` |  |
| `"preferred_provider_id"` |  |
| `"prompt"` |  |
| `"rewrite_note"` |  |
| `"run_id"` |  |
| `"status"` |  |
| `"template_id"` |  |
| `"tone"` |  |
| `"tone_cue"` |  |
| `"variant"` |  |
| `"variant_count"` |  |
| `"workspace_id"` |  |

Operations: Create.

API path: `/api/ai/memes/generate`

#### AiProvider

| Field | Description |
| --- | --- |
| `"actor_id"` |  |
| `"correlation_id"` |  |
| `"limit"` |  |
| `"mapping_mode"` |  |
| `"max_slot"` |  |
| `"prompt"` |  |
| `"source_image_url"` |  |
| `"text"` |  |
| `"trend_signal"` |  |
| `"workspace_id"` |  |

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
| `"display_name"` |  |
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
| `"author_id"` |  |
| `"message"` |  |
| `"project_id"` |  |

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
| `"canva"` |  |
| `"caption"` |  |
| `"generation_run_id"` |  |
| `"generation_variant_id"` |  |
| `"image_data_url"` |  |
| `"overlay"` |  |
| `"source_image_url"` |  |
| `"template_slug"` |  |
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
| `"trend_signal"` |  |

Operations: Create, Load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `"caption"` |  |
| `"template_slug"` |  |
| `"title"` |  |
| `"visibility"` |  |
| `"watermark"` |  |

Operations: Create.

API path: `/api/free/memes/caption`

#### FreeTemplateSearch

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"asset_byte"` |  |
| `"asset_content_type"` |  |
| `"box_count"` |  |
| `"caption"` |  |
| `"caption_count"` |  |
| `"description"` |  |
| `"duration_m"` |  |
| `"example_image_url"` |  |
| `"frame_count"` |  |
| `"height"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"media_type"` |  |
| `"name"` |  |
| `"poster_image_url"` |  |
| `"quality_status"` |  |
| `"slug"` |  |
| `"source_template_id"` |  |
| `"source_url"` |  |
| `"tag"` |  |
| `"width"` |  |

Operations: List.

API path: `/api/free/templates`

#### Generate

| Field | Description |
| --- | --- |
| `"caption"` |  |
| `"data"` |  |
| `"duration_m"` |  |
| `"fps"` |  |
| `"gif_slug"` |  |
| `"ok"` |  |
| `"return_base64"` |  |
| `"start_m"` |  |
| `"tag"` |  |
| `"title"` |  |
| `"width_px"` |  |

Operations: Create.

API path: `/api/v1/gifs/generate`

#### Growth

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"action"` |  |
| `"actor_id"` |  |
| `"caption"` |  |
| `"code"` |  |
| `"external_account_id"` |  |
| `"handle"` |  |
| `"limit"` |  |
| `"log_exposure"` |  |
| `"meme_slug"` |  |
| `"now"` |  |
| `"platform"` |  |
| `"profile"` |  |
| `"share_slug"` |  |
| `"surface"` |  |
| `"week_start"` |  |

Operations: Create, Load.

API path: `/api/growth/experiments/decision`

#### ListMeme

| Field | Description |
| --- | --- |
| `"alt_text"` |  |
| `"canonical_image_url"` |  |
| `"created_at"` |  |
| `"image_url"` |  |
| `"nsfw_status"` |  |
| `"share_slug"` |  |
| `"share_url"` |  |
| `"share_view"` |  |
| `"slug"` |  |
| `"tag"` |  |
| `"template_slug"` |  |
| `"title"` |  |
| `"visibility"` |  |

Operations: List.

API path: `/api/memes`

#### Media

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"content_type"` |  |
| `"expires_in_second"` |  |
| `"owner_token"` |  |
| `"path"` |  |
| `"prefix"` |  |

Operations: Create.

API path: `/api/media/signed-url`

#### Meme

| Field | Description |
| --- | --- |
| `"alt_text"` |  |
| `"canonical_image_url"` |  |
| `"canva"` |  |
| `"caption"` |  |
| `"created_at"` |  |
| `"image_url"` |  |
| `"nsfw_status"` |  |
| `"overlay"` |  |
| `"share_slug"` |  |
| `"share_url"` |  |
| `"share_view"` |  |
| `"slug"` |  |
| `"source_image_url"` |  |
| `"tag"` |  |
| `"template_slug"` |  |
| `"title"` |  |
| `"visibility"` |  |
| `"watermark"` |  |

Operations: Load, Remove.

API path: `/api/memes/{slug}`

#### PublicTemplateMediaItem

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"asset_byte"` |  |
| `"asset_content_type"` |  |
| `"box_count"` |  |
| `"caption"` |  |
| `"caption_count"` |  |
| `"category"` |  |
| `"description"` |  |
| `"duration_m"` |  |
| `"example_image_url"` |  |
| `"frame_count"` |  |
| `"height"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"media_type"` |  |
| `"name"` |  |
| `"poster_image_url"` |  |
| `"preview_image_url"` |  |
| `"quality_status"` |  |
| `"slug"` |  |
| `"source_template_id"` |  |
| `"source_url"` |  |
| `"tag"` |  |
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
| `"style_preset"` |  |
| `"system_prompt"` |  |
| `"watermark_text"` |  |
| `"website_url"` |  |

Operations: Create.

API path: `/api/v1/agents/bootstrap`

#### Template

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"asset_byte"` |  |
| `"asset_content_type"` |  |
| `"box_count"` |  |
| `"caption"` |  |
| `"caption_count"` |  |
| `"category"` |  |
| `"description"` |  |
| `"duration_m"` |  |
| `"example_image_url"` |  |
| `"fps"` |  |
| `"frame_count"` |  |
| `"gif_slug"` |  |
| `"height"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"media_type"` |  |
| `"name"` |  |
| `"poster_image_url"` |  |
| `"preview_image_url"` |  |
| `"quality_status"` |  |
| `"return_base64"` |  |
| `"slug"` |  |
| `"source_template_id"` |  |
| `"source_url"` |  |
| `"start_m"` |  |
| `"tag"` |  |
| `"title"` |  |
| `"width"` |  |
| `"width_px"` |  |

Operations: Create, List.

API path: `/api/gifs/{slug}/generate`

#### TemplateSearch

| Field | Description |
| --- | --- |
| `"animated"` |  |
| `"asset_byte"` |  |
| `"asset_content_type"` |  |
| `"box_count"` |  |
| `"caption"` |  |
| `"caption_count"` |  |
| `"category"` |  |
| `"description"` |  |
| `"duration_m"` |  |
| `"example_image_url"` |  |
| `"frame_count"` |  |
| `"height"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"media_type"` |  |
| `"name"` |  |
| `"poster_image_url"` |  |
| `"preview_image_url"` |  |
| `"quality_status"` |  |
| `"slug"` |  |
| `"source_template_id"` |  |
| `"source_url"` |  |
| `"tag"` |  |
| `"width"` |  |

Operations: List.

API path: `/api/gifs`

#### TrendAlert

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"actor_id"` |  |
| `"aggressiveness"` |  |
| `"alert_id"` |  |
| `"channel"` |  |
| `"deliver_all_alert"` |  |
| `"event"` |  |
| `"explicit_niche"` |  |
| `"explicit_region"` |  |
| `"explicit_source"` |  |
| `"explicit_topic"` |  |
| `"follower_count"` |  |
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
| `"asset_id"` |  |
| `"at_m"` |  |
| `"audio_asset_id"` |  |
| `"beat_offset_m"` |  |
| `"bitrate_kbp"` |  |
| `"bpm"` |  |
| `"cancelled"` |  |
| `"container"` |  |
| `"duration_m"` |  |
| `"duration_second"` |  |
| `"easing"` |  |
| `"error"` |  |
| `"frame_rate"` |  |
| `"input_format"` |  |
| `"intensity"` |  |
| `"job_id"` |  |
| `"locale"` |  |
| `"mime_type"` |  |
| `"name"` |  |
| `"offset_m"` |  |
| `"output_preset_id"` |  |
| `"output_url"` |  |
| `"plan_tier"` |  |
| `"preset_id"` |  |
| `"progress_percent"` |  |
| `"project"` |  |
| `"project_id"` |  |
| `"property"` |  |
| `"source_device_id"` |  |
| `"source_url"` |  |
| `"stage"` |  |
| `"start_m"` |  |
| `"style_preset_id"` |  |
| `"sync_to_beat_grid"` |  |
| `"tone"` |  |
| `"track_id"` |  |
| `"transcript"` |  |
| `"trend_keyword"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"value"` |  |
| `"watermark_enabled"` |  |
| `"watermark_text"` |  |
| `"worker_id"` |  |

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
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

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
| `chat_id` | `string` |  |
| `meme_slug` | `string` |  |
| `metadata` | `map[string]any` |  |
| `payout_reference` | `string` |  |
| `payout_status` | `string` |  |
| `phone_or_chat_id` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `map[string]any` |  |
| `quota_boost_per_day` | `int` |  |
| `scope` | `[]any` |  |
| `user_id` | `string` |  |
| `week_start` | `string` |  |

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
| `blocked_term` | `[]any` |  |
| `canvas_text` | `[]any` |  |
| `caption_count` | `int` |  |
| `caption_set` | `[]any` |  |
| `entity` | `[]any` |  |
| `fallback_used` | `bool` |  |
| `generation_strategy` | `string` |  |
| `locale` | `string` |  |
| `meme_id` | `string` |  |
| `meme_slug` | `string` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `option_count` | `int` |  |
| `owner_token` | `string` |  |
| `provider_id` | `string` |  |
| `reference_caption` | `[]any` |  |
| `rewrite_note` | `string` |  |
| `scene_summary` | `string` |  |
| `template_description` | `string` |  |
| `template_name` | `string` |  |
| `template_tag` | `[]any` |  |
| `tone` | `string` |  |
| `tone_cue` | `[]any` |  |
| `trend_keyword` | `[]any` |  |
| `trend_reference` | `[]any` |  |
| `trend_signal` | `[]any` |  |
| `variation_offset` | `int` |  |
| `voice_rule` | `[]any` |  |

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
    "canvas_text": []any{},
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
| `actor_id` | `string` |  |
| `after_state` | `map[string]any` |  |
| `attempt` | `int` |  |
| `before_state` | `map[string]any` |  |
| `brush_edit` | `[]any` |  |
| `capability` | `string` |  |
| `celebrity_confidence` | `float64` |  |
| `consent_attested` | `bool` |  |
| `created_at` | `string` |  |
| `detected_face_count` | `float64` |  |
| `edge_refinement` | `float64` |  |
| `estimated_cost_usd` | `float64` |  |
| `frame_time_m` | `float64` |  |
| `height` | `float64` |  |
| `id` | `string` |  |
| `input` | `map[string]any` |  |
| `layer_id` | `string` |  |
| `layer_type` | `string` |  |
| `max_attempt` | `int` |  |
| `max_face` | `float64` |  |
| `media_type` | `string` |  |
| `metadata` | `map[string]any` |  |
| `nsfw_score` | `float64` |  |
| `output` | `map[string]any` |  |
| `project_id` | `string` |  |
| `provider_id` | `string` |  |
| `reason` | `string` |  |
| `run_after_m` | `int` |  |
| `source_asset_url` | `string` |  |
| `source_face_index` | `float64` |  |
| `source_image_url` | `string` |  |
| `status` | `string` |  |
| `target_asset_url` | `string` |  |
| `target_face_index` | `float64` |  |
| `timeout_m` | `int` |  |
| `trace_id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `string` |  |
| `width` | `float64` |  |
| `worker_id` | `string` |  |
| `workspace_id` | `string` |  |

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
| `allow_heuristic_fallback` | `bool` |  |
| `caption` | `[]any` |  |
| `caption_source` | `string` |  |
| `correlation_id` | `string` |  |
| `degraded_from_async` | `bool` |  |
| `editable_caption` | `[]any` |  |
| `flow` | `string` |  |
| `image_url` | `string` |  |
| `mode` | `string` |  |
| `ok` | `bool` |  |
| `preferred_provider_id` | `string` |  |
| `prompt` | `string` |  |
| `rewrite_note` | `string` |  |
| `run_id` | `string` |  |
| `status` | `string` |  |
| `template_id` | `string` |  |
| `tone` | `string` |  |
| `tone_cue` | `[]any` |  |
| `variant` | `[]any` |  |
| `variant_count` | `int` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```go
result, err := client.AiMemeGenerationSucceeded(nil).Create(map[string]any{
    "flow": "example_flow",
    "mode": "example_mode",
    "ok": true,
    "prompt": "example_prompt",
    "status": "example_status",
    "variant": []any{},
    "variant_count": 1,
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
| `actor_id` | `string` |  |
| `correlation_id` | `string` |  |
| `limit` | `float64` |  |
| `mapping_mode` | `string` |  |
| `max_slot` | `int` |  |
| `prompt` | `string` |  |
| `source_image_url` | `string` |  |
| `text` | `[]any` |  |
| `trend_signal` | `[]any` |  |
| `workspace_id` | `string` |  |

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
    "source_image_url": "example_source_image_url",
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
| `display_name` | `string` |  |
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
| `author_id` | `string` |  |
| `message` | `string` |  |
| `project_id` | `string` |  |

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
    "project_id": "example_project_id",
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
| `canva` | `map[string]any` |  |
| `caption` | `[]any` |  |
| `generation_run_id` | `any` |  |
| `generation_variant_id` | `any` |  |
| `image_data_url` | `string` |  |
| `overlay` | `[]any` |  |
| `source_image_url` | `string` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.CreateMeme(nil).Create(map[string]any{
    "canva": map[string]any{},
    "caption": []any{},
    "image_data_url": "example_image_data_url",
    "source_image_url": "example_source_image_url",
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
| `trend_signal` | `[]any` |  |

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
| `caption` | `[]any` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.FreeCaptionMemeSuccess(nil).Create(map[string]any{
    "caption": []any{},
    "template_slug": "example_template_slug",
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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `[]any` |  |
| `caption_count` | `int` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `[]any` |  |
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
| `caption` | `[]any` |  |
| `data` | `map[string]any` |  |
| `duration_m` | `int` |  |
| `fps` | `int` |  |
| `gif_slug` | `string` |  |
| `ok` | `bool` |  |
| `return_base64` | `bool` |  |
| `start_m` | `int` |  |
| `tag` | `[]any` |  |
| `title` | `string` |  |
| `width_px` | `int` |  |

#### Example: Create

```go
result, err := client.Generate(nil).Create(map[string]any{
    "data": map[string]any{},
    "ok": true,
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
| `account_id` | `string` |  |
| `action` | `string` |  |
| `actor_id` | `string` |  |
| `caption` | `string` |  |
| `code` | `string` |  |
| `external_account_id` | `string` |  |
| `handle` | `string` |  |
| `limit` | `int` |  |
| `log_exposure` | `bool` |  |
| `meme_slug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profile` | `[]any` |  |
| `share_slug` | `string` |  |
| `surface` | `string` |  |
| `week_start` | `string` |  |

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
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `int` |  |
| `slug` | `string` |  |
| `tag` | `[]any` |  |
| `template_slug` | `string` |  |
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
| `content_type` | `string` |  |
| `expires_in_second` | `int` |  |
| `owner_token` | `string` |  |
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
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `canva` | `map[string]any` |  |
| `caption` | `[]any` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `overlay` | `[]any` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `int` |  |
| `slug` | `string` |  |
| `source_image_url` | `string` |  |
| `tag` | `[]any` |  |
| `template_slug` | `string` |  |
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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `[]any` |  |
| `caption_count` | `int` |  |
| `category` | `[]any` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `[]any` |  |
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
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `[]any` |  |
| `caption_count` | `int` |  |
| `category` | `[]any` |  |
| `description` | `string` |  |
| `duration_m` | `int` |  |
| `example_image_url` | `any` |  |
| `fps` | `int` |  |
| `frame_count` | `any` |  |
| `gif_slug` | `string` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `return_base64` | `bool` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `start_m` | `int` |  |
| `tag` | `[]any` |  |
| `title` | `string` |  |
| `width` | `any` |  |
| `width_px` | `int` |  |

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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `int` |  |
| `caption` | `[]any` |  |
| `caption_count` | `int` |  |
| `category` | `[]any` |  |
| `description` | `string` |  |
| `duration_m` | `any` |  |
| `example_image_url` | `any` |  |
| `frame_count` | `any` |  |
| `height` | `any` |  |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `poster_image_url` | `string` |  |
| `preview_image_url` | `string` |  |
| `quality_status` | `string` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `tag` | `[]any` |  |
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
| `actor_id` | `string` |  |
| `aggressiveness` | `float64` |  |
| `alert_id` | `string` |  |
| `channel` | `[]any` |  |
| `deliver_all_alert` | `bool` |  |
| `event` | `map[string]any` |  |
| `explicit_niche` | `[]any` |  |
| `explicit_region` | `[]any` |  |
| `explicit_source` | `[]any` |  |
| `explicit_topic` | `[]any` |  |
| `follower_count` | `int` |  |
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
    "actor_id": "example_actor_id",
    "alert_id": "example_alert_id",
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
| `asset_id` | `string` |  |
| `at_m` | `float64` |  |
| `audio_asset_id` | `string` |  |
| `beat_offset_m` | `int` |  |
| `bitrate_kbp` | `float64` |  |
| `bpm` | `int` |  |
| `cancelled` | `bool` |  |
| `container` | `string` |  |
| `duration_m` | `float64` |  |
| `duration_second` | `float64` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frame_rate` | `float64` |  |
| `input_format` | `string` |  |
| `intensity` | `float64` |  |
| `job_id` | `string` |  |
| `locale` | `string` |  |
| `mime_type` | `string` |  |
| `name` | `string` |  |
| `offset_m` | `float64` |  |
| `output_preset_id` | `string` |  |
| `output_url` | `string` |  |
| `plan_tier` | `string` |  |
| `preset_id` | `string` |  |
| `progress_percent` | `float64` |  |
| `project` | `map[string]any` |  |
| `project_id` | `string` |  |
| `property` | `string` |  |
| `source_device_id` | `string` |  |
| `source_url` | `string` |  |
| `stage` | `string` |  |
| `start_m` | `float64` |  |
| `style_preset_id` | `string` |  |
| `sync_to_beat_grid` | `bool` |  |
| `tone` | `string` |  |
| `track_id` | `string` |  |
| `transcript` | `string` |  |
| `trend_keyword` | `[]any` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `value` | `float64` |  |
| `watermark_enabled` | `bool` |  |
| `watermark_text` | `string` |  |
| `worker_id` | `string` |  |

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
    "duration_second": 1,
    "input_format": "example_input_format",
    "mime_type": "example_mime_type",
    "output_preset_id": "example_output_preset_id",
    "plan_tier": "example_plan_tier",
    "preset_id": "example_preset_id",
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
agent := client.Agent(nil)
agent.Load(map[string]any{"id": "example_id"}, nil)

// agent.Data() now returns the agent data from the last load
// agent.Match() returns the last match criteria
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
