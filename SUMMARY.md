# Memesio API Contracts

Contract baseline for AI jobs, trend alerts, collaboration, and billing surfaces.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 26 entities and 117 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Agent

Results: Agent profile created; Agent profile payload; Agent profile list payload; Agent profile updated.

SDK operations: `create`, `load`, `update`.

### AgentInfra

Results: Telegram binding created/updated; WhatsApp binding created/updated; Unlock request submitted; Agent key created (plaintext returned once); Unlock approved; Name suggestions payload; Duplicate vote ignored; Vote accepted; Winner record created/updated; Webhook processed; Ignored non-message Telegram update; Ignored non-message event; Leaderboard payload; Agent key list payload; Verification challenge accepted; Key revoked.

SDK operations: `create`, `load`, `remove`.

### AiCaption

Results: Caption generation + ranking payload with reroll quota snapshot; Caption moderation payload; Caption prompt payload; Caption ranking payload; Caption rewrite payload; Scene understanding payload; Tone preset saved; Tone preset list payload; Current actor caption reroll quota snapshot.

SDK operations: `create`, `load`.

### AiJob

Results: Canceled; Completed job; Background removal result and mask stats; Rollback payload; Version recorded; Real-time face swap completed; Preview fallback served and async job queued; Face target detection payload; AI job created; Layer history payload; AI job list; AI job details.

SDK operations: `create`, `load`.

### AiMemeGenerationSucceeded

Results: Meme variant generation payload.

SDK operations: `create`.

### AiProvider

Results: Template detection payload; Template suggestion ranking payload; Background-remove provider benchmark report; Face-swap provider benchmark report; Current actor AI quota snapshot.

SDK operations: `create`, `load`.

### Analytics

Results: Pricing experiment templates payload; Backend reliability dashboard + metrics snapshot payload; Backend alerting summary payload; AI anomaly detection summary; Dashboard spec payload; Metric dictionary payload.

SDK operations: `load`.

### Auth

Results: Verification email sent; Account created and verification sent.

SDK operations: `create`.

### Billing

Results: Usage snapshot.

SDK operations: `load`.

### Collaboration

Results: Comment created; Comment list.

SDK operations: `create`, `load`.

### Compliance

Results: Content usage policy payload.

SDK operations: `load`.

### CreateMeme

Results: Meme stored.

SDK operations: `create`.

### DeveloperApi

Results: Template idea ranking payload; Current keyed actor AI quota snapshot.

SDK operations: `create`, `load`.

### FreeCaptionMemeSuccess

Results: Captioned meme created.

SDK operations: `create`.

Key fields to recognise:

- `watermark`: Caption API requests accept watermark input, but non-premium callers are forced to the default Memesio watermark. Premium callers can customize enabled, text, position, and scale.

### FreeTemplateSearch

Results: Template search results.

SDK operations: `list`.

### Generate

Results: Generated GIF metadata.

SDK operations: `create`.

Key fields to recognise:

- `gifSlug`: Required for /api/v1/gifs/generate.
- `returnBase64`: Only used by /api/v1/gifs/generate.

### Gif

Results: GIF template search results.

SDK operations: `list`.

### Growth

Results: Exposure history payload; Decision payload; Preview/history payload; Run payload; Redeemed referral code; Created referral code; Disconnect response; Connect/publish response; Published weekly campaign pack; Experiment decisions payload; Weekly campaign pack payload; Social publish state payload; Referral credit balance; Lifecycle messaging config payload; Viral loop trigger payload.

SDK operations: `create`, `load`.

### Media

Results: Signed URL generated; Signed upload URL generated.

SDK operations: `create`.

### Meme

Results: Meme search results; Meme details; Meme deleted.

SDK operations: `list`, `load`, `remove`.

### PublicTemplateMediaItem

Results: Generated GIF bytes; Template details; GIF template details.

SDK operations: `create`, `load`.

### StandaloneAgentBootstrap

Results: Standalone agent account created.

SDK operations: `create`.

### Template

Results: Template search results.

SDK operations: `list`.

### TrendAlert

Results: Trend alert delivery execution payload; Feedback stored and vector updated; Updated preference vector payload; Trigger execution payload; Trend alerts list; Ranked trend alerts payload; Trend feedback events payload; Preference vector payload; Trend alert delivery report payload; Trend ingestion output payload; Trend alert quality report payload; Trend alert message templates payload; Trend source connector contract payload; Trigger decision payload.

SDK operations: `create`, `load`.

### UploadCaptionMemeSuccess

Results: Uploaded meme created.

SDK operations: `create`.

### Video

Results: Draft resume payload; Draft saved payload; Export settings decision payload; Video job estimate payload; Queue mutation payload; Render job enqueued; No queued job available; Subtitle preview payload; Subtitles applied to timeline; Preview keyframes payload; Preset applied to timeline; Timeline updated; Timeline created; Subtitle style preset + preview payload; Audio library + beat sync suggestions payload; Export policy payload; Video format policy payload; Render queue payload; Text animation preset payload; Video draft payload; Timeline project payload; Video render performance summary payload.

SDK operations: `create`, `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Agent | `create` | `POST /api/v1/agents` | See reference |
| Agent | `load` | `GET /api/v1/agents/{agentId}` | See reference |
| Agent | `load` | `GET /api/v1/agents` | See reference |
| Agent | `update` | `PATCH /api/v1/agents/{agentId}` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/{agentId}/channels/telegram/bind` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/{agentId}/channels/whatsapp/bind` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/{agentId}/unlocks/social-action` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/{agentId}/keys` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/unlocks/{unlockId}/approve` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/names:generate` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/rewards/votes` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/rewards/winner:close` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/webhooks/telegram` | See reference |
| AgentInfra | `create` | `POST /api/v1/agents/webhooks/whatsapp` | See reference |
| AgentInfra | `load` | `GET /api/v1/agents/rewards/leaderboard` | See reference |
| AgentInfra | `load` | `GET /api/v1/agents/{agentId}/keys` | See reference |
| AgentInfra | `load` | `GET /api/v1/agents/webhooks/whatsapp` | See reference |
| AgentInfra | `remove` | `DELETE /api/v1/agents/{agentId}/keys/{keyId}` | See reference |
| AiCaption | `create` | `POST /api/ai/captions/generate` | Not required |
| AiCaption | `create` | `POST /api/ai/captions/moderate` | See reference |
| AiCaption | `create` | `POST /api/ai/captions/prompt` | See reference |
| AiCaption | `create` | `POST /api/ai/captions/rank` | See reference |
| AiCaption | `create` | `POST /api/ai/captions/rewrite` | Not required |
| AiCaption | `create` | `POST /api/ai/captions/scene` | See reference |
| AiCaption | `create` | `POST /api/ai/captions/tone-presets` | See reference |
| AiCaption | `load` | `GET /api/ai/captions/tone-presets` | See reference |
| AiCaption | `load` | `GET /api/ai/captions/generate` | Not required |
| AiJob | `create` | `POST /api/ai/jobs/{jobId}/cancel` | See reference |
| AiJob | `create` | `POST /api/ai/jobs/{jobId}/complete` | See reference |
| AiJob | `create` | `POST /api/ai/background-remove` | See reference |
| AiJob | `create` | `POST /api/ai/edit-history` | See reference |
| AiJob | `create` | `POST /api/ai/face-swap` | See reference |
| AiJob | `create` | `POST /api/ai/face-targets` | See reference |
| AiJob | `create` | `POST /api/ai/jobs` | See reference |
| AiJob | `load` | `GET /api/ai/edit-history` | See reference |
| AiJob | `load` | `GET /api/ai/jobs` | See reference |
| AiJob | `load` | `GET /api/ai/jobs/{jobId}` | See reference |
| AiMemeGenerationSucceeded | `create` | `POST /api/ai/memes/generate` | Not required |
| AiMemeGenerationSucceeded | `create` | `POST /api/v1/memes/generate` | Required |
| AiProvider | `create` | `POST /api/ai/templates/detect` | See reference |
| AiProvider | `create` | `POST /api/ai/templates/suggest` | Not required |
| AiProvider | `load` | `GET /api/ai/providers/background-remove-benchmark` | See reference |
| AiProvider | `load` | `GET /api/ai/providers/face-swap-benchmark` | See reference |
| AiProvider | `load` | `GET /api/ai/memes/generate` | Not required |
| Analytics | `load` | `GET /api/analytics/experiments/templates` | See reference |
| Analytics | `load` | `GET /api/analytics/dashboards/backend-reliability` | See reference |
| Analytics | `load` | `GET /api/analytics/alerts/backend` | See reference |
| Analytics | `load` | `GET /api/analytics/anomalies/ai` | See reference |
| Analytics | `load` | `GET /api/analytics/dashboards/activation-retention` | See reference |
| Analytics | `load` | `GET /api/analytics/dashboards/feature-adoption` | See reference |
| Analytics | `load` | `GET /api/analytics/metric-dictionary` | See reference |
| Auth | `create` | `POST /api/auth/resend-verification` | See reference |
| Auth | `create` | `POST /api/auth/signup` | See reference |
| Billing | `load` | `GET /api/billing/usage` | See reference |
| Collaboration | `create` | `POST /api/collab/comments` | See reference |
| Collaboration | `load` | `GET /api/collab/comments` | See reference |
| Compliance | `load` | `GET /api/compliance/content-policy` | See reference |
| CreateMeme | `create` | `POST /api/memes` | See reference |
| DeveloperApi | `create` | `POST /api/v1/templates/ideas` | Required |
| DeveloperApi | `load` | `GET /api/v1/memes/generate` | Required |
| FreeCaptionMemeSuccess | `create` | `POST /api/free/memes/caption` | Required |
| FreeCaptionMemeSuccess | `create` | `POST /api/v1/memes/caption-template` | Required |
| FreeTemplateSearch | `list` | `GET /api/free/templates` | Not required |
| Generate | `create` | `POST /api/v1/gifs/generate` | Not required |
| Gif | `list` | `GET /api/gifs` | See reference |
| Growth | `create` | `POST /api/growth/experiments/decision` | See reference |
| Growth | `create` | `POST /api/growth/lifecycle-messaging` | See reference |
| Growth | `create` | `POST /api/growth/referrals` | See reference |
| Growth | `create` | `POST /api/growth/social-publish` | See reference |
| Growth | `create` | `POST /api/growth/trend-campaigns` | See reference |
| Growth | `load` | `GET /api/growth/experiments/decision` | See reference |
| Growth | `load` | `GET /api/growth/trend-campaigns` | See reference |
| Growth | `load` | `GET /api/growth/social-publish` | See reference |
| Growth | `load` | `GET /api/growth/referrals` | See reference |
| Growth | `load` | `GET /api/growth/lifecycle-messaging` | See reference |
| Growth | `load` | `GET /api/growth/viral-triggers` | See reference |
| Media | `create` | `POST /api/media/signed-url` | See reference |
| Meme | `list` | `GET /api/memes` | See reference |
| Meme | `load` | `GET /api/memes/{slug}` | See reference |
| Meme | `remove` | `DELETE /api/memes/{slug}` | See reference |
| PublicTemplateMediaItem | `create` | `POST /api/gifs/{slug}/generate` | Not required |
| PublicTemplateMediaItem | `load` | `GET /api/templates/{slug}` | See reference |
| PublicTemplateMediaItem | `load` | `GET /api/gifs/{slug}` | See reference |
| StandaloneAgentBootstrap | `create` | `POST /api/v1/agents/bootstrap` | See reference |
| StandaloneAgentBootstrap | `create` | `POST /api/v1/agents/create-agent` | See reference |
| Template | `list` | `GET /api/templates` | See reference |
| TrendAlert | `create` | `POST /api/alerts/delivery` | See reference |
| TrendAlert | `create` | `POST /api/alerts/feedback` | See reference |
| TrendAlert | `create` | `POST /api/alerts/preferences` | See reference |
| TrendAlert | `create` | `POST /api/alerts/triggers` | See reference |
| TrendAlert | `load` | `GET /api/alerts` | See reference |
| TrendAlert | `load` | `GET /api/alerts/ranking` | See reference |
| TrendAlert | `load` | `GET /api/alerts/feedback` | See reference |
| TrendAlert | `load` | `GET /api/alerts/preferences` | See reference |
| TrendAlert | `load` | `GET /api/alerts/delivery` | See reference |
| TrendAlert | `load` | `GET /api/alerts/ingestion` | See reference |
| TrendAlert | `load` | `GET /api/alerts/quality-report` | See reference |
| TrendAlert | `load` | `GET /api/alerts/message-templates` | See reference |
| TrendAlert | `load` | `GET /api/alerts/connectors` | See reference |
| TrendAlert | `load` | `GET /api/alerts/triggers` | See reference |
| UploadCaptionMemeSuccess | `create` | `POST /api/v1/memes/caption-upload` | Required |
| Video | `create` | `POST /api/video/drafts` | See reference |
| Video | `create` | `POST /api/video/export-settings` | See reference |
| Video | `create` | `POST /api/video/formats` | See reference |
| Video | `create` | `POST /api/video/render-queue` | See reference |
| Video | `create` | `POST /api/video/subtitles` | See reference |
| Video | `create` | `POST /api/video/text-animations` | See reference |
| Video | `create` | `POST /api/video/timeline` | See reference |
| Video | `load` | `GET /api/video/subtitles` | See reference |
| Video | `load` | `GET /api/video/audio-library` | See reference |
| Video | `load` | `GET /api/video/export-settings` | See reference |
| Video | `load` | `GET /api/video/formats` | See reference |
| Video | `load` | `GET /api/video/render-queue` | See reference |
| Video | `load` | `GET /api/video/text-animations` | See reference |
| Video | `load` | `GET /api/video/drafts` | See reference |
| Video | `load` | `GET /api/video/timeline` | See reference |
| Video | `load` | `GET /api/video/render-performance` | See reference |

## Connect to the API

- API server: `/`

The default credential is sent in the `x-developer-api-key` header.

Optional higher-rate free-tier auth. You can also send the key as Authorization: Bearer &lt;key&gt;.

Agent auth for free endpoints and agent-admin routes. You can also send the key as Authorization: Bearer &lt;key&gt;.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /api/ai/captions/generate`. For example:

```sh
curl --fail-with-body --silent --show-error '/api/ai/captions/generate'
```

Inspect the response using the AiCaption reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `memesio-content-creation_list`: List records for an entity. Supported entities: `free_template_search`, `gif`, `meme`, `template`.
- `memesio-content-creation_load`: Load one record for an entity. Supported entities: `agent`, `agent_infra`, `ai_caption`, `ai_job`, `ai_provider`, `analytics`, `billing`, `collaboration`, `compliance`, `developer_api`, `growth`, `meme`, `public_template_media_item`, `trend_alert`, `video`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

