# MemesioContentCreation TypeScript SDK



The TypeScript SDK for the MemesioContentCreation API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Agent()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
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
// Create — returns the created Agent
const created = await client.Agent().create({
  name: 'example_name',
})

// Update
const updated = await client.Agent().update({
  id: 'example_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const agent = await client.Agent().load({ id: "example_id" })
  console.log(agent)
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

const agent = await client.Agent().load({ id: 'test01' })
// agent is a bare entity populated with mock response data
console.log(agent)
```

You can also use the instance method:

```ts
const client = new MemesioContentCreationSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Agent()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

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
| `style_preset` |  |
| `system_prompt` |  |
| `watermark_text` |  |
| `website_url` |  |

Operations: create, load, update.

API path: `/api/v1/agents`

#### AgentInfra

| Field | Description |
| --- | --- |
| `action` |  |
| `chat_id` |  |
| `meme_slug` |  |
| `metadata` |  |
| `payout_reference` |  |
| `payout_status` |  |
| `phone_or_chat_id` |  |
| `prompt` |  |
| `proof` |  |
| `quota_boost_per_day` |  |
| `scope` |  |
| `user_id` |  |
| `week_start` |  |

Operations: create, load, remove.

API path: `/api/v1/agents/{agentId}/channels/telegram/bind`

#### AiCaption

| Field | Description |
| --- | --- |
| `blocked_term` |  |
| `canvas_text` |  |
| `caption_count` |  |
| `caption_set` |  |
| `entity` |  |
| `fallback_used` |  |
| `generation_strategy` |  |
| `locale` |  |
| `meme_id` |  |
| `meme_slug` |  |
| `name` |  |
| `ok` |  |
| `option_count` |  |
| `owner_token` |  |
| `provider_id` |  |
| `reference_caption` |  |
| `rewrite_note` |  |
| `scene_summary` |  |
| `template_description` |  |
| `template_name` |  |
| `template_tag` |  |
| `tone` |  |
| `tone_cue` |  |
| `trend_keyword` |  |
| `trend_reference` |  |
| `trend_signal` |  |
| `variation_offset` |  |
| `voice_rule` |  |

Operations: create, load.

API path: `/api/ai/captions/generate`

#### AiJob

| Field | Description |
| --- | --- |
| `action` |  |
| `actor_id` |  |
| `after_state` |  |
| `attempt` |  |
| `before_state` |  |
| `brush_edit` |  |
| `capability` |  |
| `celebrity_confidence` |  |
| `consent_attested` |  |
| `created_at` |  |
| `detected_face_count` |  |
| `edge_refinement` |  |
| `estimated_cost_usd` |  |
| `frame_time_m` |  |
| `height` |  |
| `id` |  |
| `input` |  |
| `layer_id` |  |
| `layer_type` |  |
| `max_attempt` |  |
| `max_face` |  |
| `media_type` |  |
| `metadata` |  |
| `nsfw_score` |  |
| `output` |  |
| `project_id` |  |
| `provider_id` |  |
| `reason` |  |
| `run_after_m` |  |
| `source_asset_url` |  |
| `source_face_index` |  |
| `source_image_url` |  |
| `status` |  |
| `target_asset_url` |  |
| `target_face_index` |  |
| `timeout_m` |  |
| `trace_id` |  |
| `updated_at` |  |
| `version_id` |  |
| `width` |  |
| `worker_id` |  |
| `workspace_id` |  |

Operations: create, load.

API path: `/api/ai/jobs/{jobId}/cancel`

#### AiMemeGenerationSucceeded

| Field | Description |
| --- | --- |
| `allow_heuristic_fallback` |  |
| `caption` |  |
| `caption_source` |  |
| `correlation_id` |  |
| `degraded_from_async` |  |
| `editable_caption` |  |
| `flow` |  |
| `image_url` |  |
| `mode` |  |
| `ok` |  |
| `preferred_provider_id` |  |
| `prompt` |  |
| `rewrite_note` |  |
| `run_id` |  |
| `status` |  |
| `template_id` |  |
| `tone` |  |
| `tone_cue` |  |
| `variant` |  |
| `variant_count` |  |
| `workspace_id` |  |

Operations: create.

API path: `/api/ai/memes/generate`

#### AiProvider

| Field | Description |
| --- | --- |
| `actor_id` |  |
| `correlation_id` |  |
| `limit` |  |
| `mapping_mode` |  |
| `max_slot` |  |
| `prompt` |  |
| `source_image_url` |  |
| `text` |  |
| `trend_signal` |  |
| `workspace_id` |  |

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
| `display_name` |  |
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
| `author_id` |  |
| `message` |  |
| `project_id` |  |

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
| `canva` |  |
| `caption` |  |
| `generation_run_id` |  |
| `generation_variant_id` |  |
| `image_data_url` |  |
| `overlay` |  |
| `source_image_url` |  |
| `template_slug` |  |
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
| `trend_signal` |  |

Operations: create, load.

API path: `/api/v1/templates/ideas`

#### FreeCaptionMemeSuccess

| Field | Description |
| --- | --- |
| `caption` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: create.

API path: `/api/free/memes/caption`

#### FreeTemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
| `width` |  |

Operations: list.

API path: `/api/free/templates`

#### Generate

| Field | Description |
| --- | --- |
| `caption` |  |
| `data` |  |
| `duration_m` |  |
| `fps` |  |
| `gif_slug` |  |
| `ok` |  |
| `return_base64` |  |
| `start_m` |  |
| `tag` |  |
| `title` |  |
| `width_px` |  |

Operations: create.

API path: `/api/v1/gifs/generate`

#### Growth

| Field | Description |
| --- | --- |
| `account_id` |  |
| `action` |  |
| `actor_id` |  |
| `caption` |  |
| `code` |  |
| `external_account_id` |  |
| `handle` |  |
| `limit` |  |
| `log_exposure` |  |
| `meme_slug` |  |
| `now` |  |
| `platform` |  |
| `profile` |  |
| `share_slug` |  |
| `surface` |  |
| `week_start` |  |

Operations: create, load.

API path: `/api/growth/experiments/decision`

#### ListMeme

| Field | Description |
| --- | --- |
| `alt_text` |  |
| `canonical_image_url` |  |
| `created_at` |  |
| `image_url` |  |
| `nsfw_status` |  |
| `share_slug` |  |
| `share_url` |  |
| `share_view` |  |
| `slug` |  |
| `tag` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |

Operations: list.

API path: `/api/memes`

#### Media

| Field | Description |
| --- | --- |
| `action` |  |
| `content_type` |  |
| `expires_in_second` |  |
| `owner_token` |  |
| `path` |  |
| `prefix` |  |

Operations: create.

API path: `/api/media/signed-url`

#### Meme

| Field | Description |
| --- | --- |
| `alt_text` |  |
| `canonical_image_url` |  |
| `canva` |  |
| `caption` |  |
| `created_at` |  |
| `image_url` |  |
| `nsfw_status` |  |
| `overlay` |  |
| `share_slug` |  |
| `share_url` |  |
| `share_view` |  |
| `slug` |  |
| `source_image_url` |  |
| `tag` |  |
| `template_slug` |  |
| `title` |  |
| `visibility` |  |
| `watermark` |  |

Operations: load, remove.

API path: `/api/memes/{slug}`

#### PublicTemplateMediaItem

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
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
| `style_preset` |  |
| `system_prompt` |  |
| `watermark_text` |  |
| `website_url` |  |

Operations: create.

API path: `/api/v1/agents/bootstrap`

#### Template

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `fps` |  |
| `frame_count` |  |
| `gif_slug` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `return_base64` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `start_m` |  |
| `tag` |  |
| `title` |  |
| `width` |  |
| `width_px` |  |

Operations: create, list.

API path: `/api/gifs/{slug}/generate`

#### TemplateSearch

| Field | Description |
| --- | --- |
| `animated` |  |
| `asset_byte` |  |
| `asset_content_type` |  |
| `box_count` |  |
| `caption` |  |
| `caption_count` |  |
| `category` |  |
| `description` |  |
| `duration_m` |  |
| `example_image_url` |  |
| `frame_count` |  |
| `height` |  |
| `id` |  |
| `image_url` |  |
| `media_type` |  |
| `name` |  |
| `poster_image_url` |  |
| `preview_image_url` |  |
| `quality_status` |  |
| `slug` |  |
| `source_template_id` |  |
| `source_url` |  |
| `tag` |  |
| `width` |  |

Operations: list.

API path: `/api/gifs`

#### TrendAlert

| Field | Description |
| --- | --- |
| `action` |  |
| `actor_id` |  |
| `aggressiveness` |  |
| `alert_id` |  |
| `channel` |  |
| `deliver_all_alert` |  |
| `event` |  |
| `explicit_niche` |  |
| `explicit_region` |  |
| `explicit_source` |  |
| `explicit_topic` |  |
| `follower_count` |  |
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
| `asset_id` |  |
| `at_m` |  |
| `audio_asset_id` |  |
| `beat_offset_m` |  |
| `bitrate_kbp` |  |
| `bpm` |  |
| `cancelled` |  |
| `container` |  |
| `duration_m` |  |
| `duration_second` |  |
| `easing` |  |
| `error` |  |
| `frame_rate` |  |
| `input_format` |  |
| `intensity` |  |
| `job_id` |  |
| `locale` |  |
| `mime_type` |  |
| `name` |  |
| `offset_m` |  |
| `output_preset_id` |  |
| `output_url` |  |
| `plan_tier` |  |
| `preset_id` |  |
| `progress_percent` |  |
| `project` |  |
| `project_id` |  |
| `property` |  |
| `source_device_id` |  |
| `source_url` |  |
| `stage` |  |
| `start_m` |  |
| `style_preset_id` |  |
| `sync_to_beat_grid` |  |
| `tone` |  |
| `track_id` |  |
| `transcript` |  |
| `trend_keyword` |  |
| `type` |  |
| `updated_at` |  |
| `value` |  |
| `watermark_enabled` |  |
| `watermark_text` |  |
| `worker_id` |  |

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
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

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
| `chat_id` | `string` |  |
| `meme_slug` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `payout_reference` | `string` |  |
| `payout_status` | `string` |  |
| `phone_or_chat_id` | `string` |  |
| `prompt` | `string` |  |
| `proof` | `Record<string, any>` |  |
| `quota_boost_per_day` | `number` |  |
| `scope` | `any[]` |  |
| `user_id` | `string` |  |
| `week_start` | `string` |  |

#### Example: Load

```ts
const agent_infra = await client.AgentInfra().load()
```

#### Example: Create

```ts
const agent_infra = await client.AgentInfra().create({
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
| `blocked_term` | `any[]` |  |
| `canvas_text` | `any[]` |  |
| `caption_count` | `number` |  |
| `caption_set` | `any[]` |  |
| `entity` | `any[]` |  |
| `fallback_used` | `boolean` |  |
| `generation_strategy` | `string` |  |
| `locale` | `string` |  |
| `meme_id` | `string` |  |
| `meme_slug` | `string` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `option_count` | `number` |  |
| `owner_token` | `string` |  |
| `provider_id` | `string` |  |
| `reference_caption` | `any[]` |  |
| `rewrite_note` | `string` |  |
| `scene_summary` | `string` |  |
| `template_description` | `string` |  |
| `template_name` | `string` |  |
| `template_tag` | `any[]` |  |
| `tone` | `string` |  |
| `tone_cue` | `any[]` |  |
| `trend_keyword` | `any[]` |  |
| `trend_reference` | `any[]` |  |
| `trend_signal` | `any[]` |  |
| `variation_offset` | `number` |  |
| `voice_rule` | `any[]` |  |

#### Example: Load

```ts
const ai_caption = await client.AiCaption().load()
```

#### Example: Create

```ts
const ai_caption = await client.AiCaption().create({
  canvas_text: [],
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
| `actor_id` | `string` |  |
| `after_state` | `Record<string, any>` |  |
| `attempt` | `number` |  |
| `before_state` | `Record<string, any>` |  |
| `brush_edit` | `any[]` |  |
| `capability` | `string` |  |
| `celebrity_confidence` | `number` |  |
| `consent_attested` | `boolean` |  |
| `created_at` | `string` |  |
| `detected_face_count` | `number` |  |
| `edge_refinement` | `number` |  |
| `estimated_cost_usd` | `number` |  |
| `frame_time_m` | `number` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `input` | `Record<string, any>` |  |
| `layer_id` | `string` |  |
| `layer_type` | `string` |  |
| `max_attempt` | `number` |  |
| `max_face` | `number` |  |
| `media_type` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `nsfw_score` | `number` |  |
| `output` | `Record<string, any>` |  |
| `project_id` | `string` |  |
| `provider_id` | `string` |  |
| `reason` | `string` |  |
| `run_after_m` | `number` |  |
| `source_asset_url` | `string` |  |
| `source_face_index` | `number` |  |
| `source_image_url` | `string` |  |
| `status` | `string` |  |
| `target_asset_url` | `string` |  |
| `target_face_index` | `number` |  |
| `timeout_m` | `number` |  |
| `trace_id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `string` |  |
| `width` | `number` |  |
| `worker_id` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```ts
const ai_job = await client.AiJob().load({ id: 'ai_job_id' })
```

#### Example: Create

```ts
const ai_job = await client.AiJob().create({
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
| `allow_heuristic_fallback` | `boolean` |  |
| `caption` | `any[]` |  |
| `caption_source` | `string` |  |
| `correlation_id` | `string` |  |
| `degraded_from_async` | `boolean` |  |
| `editable_caption` | `any[]` |  |
| `flow` | `string` |  |
| `image_url` | `string` |  |
| `mode` | `string` |  |
| `ok` | `boolean` |  |
| `preferred_provider_id` | `string` |  |
| `prompt` | `string` |  |
| `rewrite_note` | `string` |  |
| `run_id` | `string` |  |
| `status` | `string` |  |
| `template_id` | `string` |  |
| `tone` | `string` |  |
| `tone_cue` | `any[]` |  |
| `variant` | `any[]` |  |
| `variant_count` | `number` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```ts
const ai_meme_generation_succeeded = await client.AiMemeGenerationSucceeded().create({
  flow: 'example_flow',
  mode: 'example_mode',
  ok: true,
  prompt: 'example_prompt',
  status: 'example_status',
  variant: [],
  variant_count: 1,
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
| `actor_id` | `string` |  |
| `correlation_id` | `string` |  |
| `limit` | `number` |  |
| `mapping_mode` | `string` |  |
| `max_slot` | `number` |  |
| `prompt` | `string` |  |
| `source_image_url` | `string` |  |
| `text` | `any[]` |  |
| `trend_signal` | `any[]` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```ts
const ai_provider = await client.AiProvider().load()
```

#### Example: Create

```ts
const ai_provider = await client.AiProvider().create({
  prompt: 'example_prompt',
  source_image_url: 'example_source_image_url',
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
| `display_name` | `string` |  |
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
| `author_id` | `string` |  |
| `message` | `string` |  |
| `project_id` | `string` |  |

#### Example: Load

```ts
const collaboration = await client.Collaboration().load()
```

#### Example: Create

```ts
const collaboration = await client.Collaboration().create({
  message: 'example_message',
  project_id: 'example_project_id',
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
| `canva` | `Record<string, any>` |  |
| `caption` | `any[]` |  |
| `generation_run_id` | `any` |  |
| `generation_variant_id` | `any` |  |
| `image_data_url` | `string` |  |
| `overlay` | `any[]` |  |
| `source_image_url` | `string` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `Record<string, any>` |  |

#### Example: Create

```ts
const create_meme = await client.CreateMeme().create({
  canva: {},
  caption: [],
  image_data_url: 'example_image_data_url',
  source_image_url: 'example_source_image_url',
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
| `trend_signal` | `any[]` |  |

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
| `caption` | `any[]` |  |
| `template_slug` | `string` |  |
| `title` | `string` |  |
| `visibility` | `string` |  |
| `watermark` | `Record<string, any>` |  |

#### Example: Create

```ts
const free_caption_meme_success = await client.FreeCaptionMemeSuccess().create({
  caption: [],
  template_slug: 'example_template_slug',
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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `any[]` |  |
| `caption_count` | `number` |  |
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
| `tag` | `any[]` |  |
| `width` | `any` |  |

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
| `caption` | `any[]` |  |
| `data` | `Record<string, any>` |  |
| `duration_m` | `number` |  |
| `fps` | `number` |  |
| `gif_slug` | `string` |  |
| `ok` | `boolean` |  |
| `return_base64` | `boolean` |  |
| `start_m` | `number` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `width_px` | `number` |  |

#### Example: Create

```ts
const generate = await client.Generate().create({
  data: {},
  ok: true,
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
| `account_id` | `string` |  |
| `action` | `string` |  |
| `actor_id` | `string` |  |
| `caption` | `string` |  |
| `code` | `string` |  |
| `external_account_id` | `string` |  |
| `handle` | `string` |  |
| `limit` | `number` |  |
| `log_exposure` | `boolean` |  |
| `meme_slug` | `string` |  |
| `now` | `string` |  |
| `platform` | `string` |  |
| `profile` | `any[]` |  |
| `share_slug` | `string` |  |
| `surface` | `string` |  |
| `week_start` | `string` |  |

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
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `number` |  |
| `slug` | `string` |  |
| `tag` | `any[]` |  |
| `template_slug` | `string` |  |
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
| `content_type` | `string` |  |
| `expires_in_second` | `number` |  |
| `owner_token` | `string` |  |
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
| `alt_text` | `string` |  |
| `canonical_image_url` | `string` |  |
| `canva` | `Record<string, any>` |  |
| `caption` | `any[]` |  |
| `created_at` | `string` |  |
| `image_url` | `string` |  |
| `nsfw_status` | `string` |  |
| `overlay` | `any[]` |  |
| `share_slug` | `string` |  |
| `share_url` | `string` |  |
| `share_view` | `number` |  |
| `slug` | `string` |  |
| `source_image_url` | `string` |  |
| `tag` | `any[]` |  |
| `template_slug` | `string` |  |
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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `any[]` |  |
| `caption_count` | `number` |  |
| `category` | `any[]` |  |
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
| `tag` | `any[]` |  |
| `width` | `any` |  |

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
| `style_preset` | `string` |  |
| `system_prompt` | `string` |  |
| `watermark_text` | `string` |  |
| `website_url` | `string` |  |

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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `any[]` |  |
| `caption_count` | `number` |  |
| `category` | `any[]` |  |
| `description` | `string` |  |
| `duration_m` | `number` |  |
| `example_image_url` | `any` |  |
| `fps` | `number` |  |
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
| `return_base64` | `boolean` |  |
| `slug` | `string` |  |
| `source_template_id` | `any` |  |
| `source_url` | `string` |  |
| `start_m` | `number` |  |
| `tag` | `any[]` |  |
| `title` | `string` |  |
| `width` | `any` |  |
| `width_px` | `number` |  |

#### Example: List

```ts
const templates = await client.Template().list()
```

#### Example: Create

```ts
const template = await client.Template().create({
  slug: 'example_slug',
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
| `asset_byte` | `any` |  |
| `asset_content_type` | `string` |  |
| `box_count` | `number` |  |
| `caption` | `any[]` |  |
| `caption_count` | `number` |  |
| `category` | `any[]` |  |
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
| `tag` | `any[]` |  |
| `width` | `any` |  |

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
| `actor_id` | `string` |  |
| `aggressiveness` | `number` |  |
| `alert_id` | `string` |  |
| `channel` | `any[]` |  |
| `deliver_all_alert` | `boolean` |  |
| `event` | `Record<string, any>` |  |
| `explicit_niche` | `any[]` |  |
| `explicit_region` | `any[]` |  |
| `explicit_source` | `any[]` |  |
| `explicit_topic` | `any[]` |  |
| `follower_count` | `number` |  |
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
  actor_id: 'example_actor_id',
  alert_id: 'example_alert_id',
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
| `asset_id` | `string` |  |
| `at_m` | `number` |  |
| `audio_asset_id` | `string` |  |
| `beat_offset_m` | `number` |  |
| `bitrate_kbp` | `number` |  |
| `bpm` | `number` |  |
| `cancelled` | `boolean` |  |
| `container` | `string` |  |
| `duration_m` | `number` |  |
| `duration_second` | `number` |  |
| `easing` | `string` |  |
| `error` | `string` |  |
| `frame_rate` | `number` |  |
| `input_format` | `string` |  |
| `intensity` | `number` |  |
| `job_id` | `string` |  |
| `locale` | `string` |  |
| `mime_type` | `string` |  |
| `name` | `string` |  |
| `offset_m` | `number` |  |
| `output_preset_id` | `string` |  |
| `output_url` | `string` |  |
| `plan_tier` | `string` |  |
| `preset_id` | `string` |  |
| `progress_percent` | `number` |  |
| `project` | `Record<string, any>` |  |
| `project_id` | `string` |  |
| `property` | `string` |  |
| `source_device_id` | `string` |  |
| `source_url` | `string` |  |
| `stage` | `string` |  |
| `start_m` | `number` |  |
| `style_preset_id` | `string` |  |
| `sync_to_beat_grid` | `boolean` |  |
| `tone` | `string` |  |
| `track_id` | `string` |  |
| `transcript` | `string` |  |
| `trend_keyword` | `any[]` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `value` | `number` |  |
| `watermark_enabled` | `boolean` |  |
| `watermark_text` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Load

```ts
const video = await client.Video().load()
```

#### Example: Create

```ts
const video = await client.Video().create({
  duration_second: 1,
  input_format: 'example_input_format',
  mime_type: 'example_mime_type',
  output_preset_id: 'example_output_preset_id',
  plan_tier: 'example_plan_tier',
  preset_id: 'example_preset_id',
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
const agent = client.Agent()
await agent.load({ id: "example_id" })

// agent.data() now returns the agent data from the last `load`
// agent.match() returns { id: "example_id" }
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
