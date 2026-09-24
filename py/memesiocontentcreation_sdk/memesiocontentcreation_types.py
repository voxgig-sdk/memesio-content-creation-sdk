# Typed models for the MemesioContentCreation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AgentRequired(TypedDict):
    name: str


class Agent(AgentRequired, total=False):
    description: str
    id: str
    locale: str
    slug: str
    status: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class AgentLoadMatch(TypedDict):
    id: str


class AgentCreateDataRequired(TypedDict):
    name: str


class AgentCreateData(AgentCreateDataRequired, total=False):
    description: str
    id: str
    locale: str
    slug: str
    status: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class AgentUpdateDataRequired(TypedDict):
    id: str


class AgentUpdateData(AgentUpdateDataRequired, total=False):
    description: str
    locale: str
    name: str
    slug: str
    status: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class AgentInfraRequired(TypedDict):
    action: str
    chatId: str
    memeSlug: str
    phoneOrChatId: str
    prompt: str


class AgentInfra(AgentInfraRequired, total=False):
    id: str
    metadata: dict
    payoutReference: str
    payoutStatus: str
    proof: dict
    quotaBoostPerDay: int
    userId: str
    weekStart: str


class AgentInfraLoadMatch(TypedDict, total=False):
    limit: int
    week_start: str


class AgentInfraCreateDataRequired(TypedDict):
    action: str
    chatId: str
    memeSlug: str
    phoneOrChatId: str
    prompt: str


class AgentInfraCreateData(AgentInfraCreateDataRequired, total=False):
    id: str
    metadata: dict
    payoutReference: str
    payoutStatus: str
    proof: dict
    quotaBoostPerDay: int
    userId: str
    weekStart: str


class AgentInfraRemoveMatch(TypedDict):
    agent_id: str
    key_id: str


class AiCaptionRequired(TypedDict):
    canvasText: list
    name: str
    tone: str


class AiCaption(AiCaptionRequired, total=False):
    blockedTerms: list
    captionCount: int
    captionSets: list
    entities: list
    fallbackUsed: bool
    generationStrategy: str
    locale: str
    memeId: str
    memeSlug: str
    ok: bool
    optionCount: int
    ownerToken: str
    providerId: str
    referenceCaptions: list
    rewriteNote: str
    sceneSummary: str
    templateDescription: str
    templateName: str
    templateTags: list
    toneCues: list
    trendKeywords: list
    trendReferences: list
    trendSignals: list
    variationOffset: int
    voiceRules: list


class AiCaptionLoadMatch(TypedDict, total=False):
    locale: str


class AiCaptionCreateDataRequired(TypedDict):
    canvasText: list
    name: str
    tone: str


class AiCaptionCreateData(AiCaptionCreateDataRequired, total=False):
    blockedTerms: list
    captionCount: int
    captionSets: list
    entities: list
    fallbackUsed: bool
    generationStrategy: str
    locale: str
    memeId: str
    memeSlug: str
    ok: bool
    optionCount: int
    ownerToken: str
    providerId: str
    referenceCaptions: list
    rewriteNote: str
    sceneSummary: str
    templateDescription: str
    templateName: str
    templateTags: list
    toneCues: list
    trendKeywords: list
    trendReferences: list
    trendSignals: list
    variationOffset: int
    voiceRules: list


class AiJobRequired(TypedDict):
    action: str
    capability: str
    detectedFaceCount: float
    height: float
    id: str
    layerId: str
    projectId: str
    sourceAssetUrl: str
    sourceImageUrl: str
    status: str
    targetAssetUrl: str
    width: float


class AiJob(AiJobRequired, total=False):
    actorId: str
    afterState: dict
    attempts: int
    beforeState: dict
    brushEdits: list
    celebrityConfidence: float
    consentAttested: bool
    createdAt: str
    edgeRefinement: float
    frameTimeMs: float
    input: dict
    layerType: str
    maxAttempts: int
    maxFaces: float
    mediaType: str
    metadata: dict
    nsfwScore: float
    runAfterMs: int
    sourceFaceIndex: float
    targetFaceIndex: float
    timeoutMs: int
    traceId: str
    updatedAt: str
    versionId: str
    workspaceId: str


class AiJobLoadMatch(TypedDict):
    id: str


class AiJobCreateDataRequired(TypedDict):
    action: str
    capability: str
    detectedFaceCount: float
    height: float
    id: str
    layerId: str
    projectId: str
    sourceAssetUrl: str
    sourceImageUrl: str
    status: str
    targetAssetUrl: str
    width: float


class AiJobCreateData(AiJobCreateDataRequired, total=False):
    actorId: str
    afterState: dict
    attempts: int
    beforeState: dict
    brushEdits: list
    celebrityConfidence: float
    consentAttested: bool
    createdAt: str
    edgeRefinement: float
    frameTimeMs: float
    input: dict
    layerType: str
    maxAttempts: int
    maxFaces: float
    mediaType: str
    metadata: dict
    nsfwScore: float
    runAfterMs: int
    sourceFaceIndex: float
    targetFaceIndex: float
    timeoutMs: int
    traceId: str
    updatedAt: str
    versionId: str
    workspaceId: str


class AiMemeGenerationSucceededRequired(TypedDict):
    flow: str
    mode: str
    ok: bool
    prompt: str
    status: str
    variantCount: int
    variants: list


class AiMemeGenerationSucceeded(AiMemeGenerationSucceededRequired, total=False):
    allowHeuristicFallback: bool
    captionSource: str
    captions: list
    correlationId: str
    degradedFromAsync: bool
    editableCaptions: list
    imageUrl: str
    preferredProviderId: str
    rewriteNote: str
    runId: str
    templateId: str
    tone: str
    toneCues: list
    workspaceId: str


class AiMemeGenerationSucceededCreateDataRequired(TypedDict):
    flow: str
    mode: str
    ok: bool
    prompt: str
    status: str
    variantCount: int
    variants: list


class AiMemeGenerationSucceededCreateData(AiMemeGenerationSucceededCreateDataRequired, total=False):
    allowHeuristicFallback: bool
    captionSource: str
    captions: list
    correlationId: str
    degradedFromAsync: bool
    editableCaptions: list
    imageUrl: str
    preferredProviderId: str
    rewriteNote: str
    runId: str
    templateId: str
    tone: str
    toneCues: list
    workspaceId: str


class AiProviderRequired(TypedDict):
    prompt: str
    sourceImageUrl: str


class AiProvider(AiProviderRequired, total=False):
    actorId: str
    correlationId: str
    limit: float
    mappingMode: str
    maxSlots: int
    texts: list
    trendSignals: list
    workspaceId: str


class AiProviderLoadMatch(TypedDict, total=False):
    refresh: bool


class AiProviderCreateDataRequired(TypedDict):
    prompt: str
    sourceImageUrl: str


class AiProviderCreateData(AiProviderCreateDataRequired, total=False):
    actorId: str
    correlationId: str
    limit: float
    mappingMode: str
    maxSlots: int
    texts: list
    trendSignals: list
    workspaceId: str


class Analytics(TypedDict):
    pass


class AnalyticsLoadMatch(TypedDict, total=False):
    template_id: str


class Auth(TypedDict):
    pass


class AuthCreateData(TypedDict):
    pass


class Billing(TypedDict):
    pass


class BillingLoadMatch(TypedDict, total=False):
    window_day: int
    workspace_id: str


class CollaborationRequired(TypedDict):
    message: str
    projectId: str


class Collaboration(CollaborationRequired, total=False):
    authorId: str


class CollaborationLoadMatchRequired(TypedDict):
    project_id: str


class CollaborationLoadMatch(CollaborationLoadMatchRequired, total=False):
    page: int
    page_size: int


class CollaborationCreateDataRequired(TypedDict):
    message: str
    projectId: str


class CollaborationCreateData(CollaborationCreateDataRequired, total=False):
    authorId: str


class Compliance(TypedDict):
    pass


class ComplianceLoadMatch(TypedDict):
    pass


class CreateMemeRequired(TypedDict):
    canvas: dict
    captions: list
    imageDataUrl: str
    sourceImageUrl: str
    watermark: dict


class CreateMeme(CreateMemeRequired, total=False):
    generationRunId: str | None
    generationVariantId: str | None
    overlays: list
    templateSlug: str
    title: str
    visibility: str


class CreateMemeCreateDataRequired(TypedDict):
    canvas: dict
    captions: list
    imageDataUrl: str
    sourceImageUrl: str
    watermark: dict


class CreateMemeCreateData(CreateMemeCreateDataRequired, total=False):
    generationRunId: str | None
    generationVariantId: str | None
    overlays: list
    templateSlug: str
    title: str
    visibility: str


class DeveloperApiRequired(TypedDict):
    prompt: str


class DeveloperApi(DeveloperApiRequired, total=False):
    limit: float
    trendSignals: list


class DeveloperApiLoadMatch(TypedDict, total=False):
    limit: float
    prompt: str
    trendSignals: list


class DeveloperApiCreateDataRequired(TypedDict):
    prompt: str


class DeveloperApiCreateData(DeveloperApiCreateDataRequired, total=False):
    limit: float
    trendSignals: list


class FreeCaptionMemeSuccessRequired(TypedDict):
    captions: list
    templateSlug: str


class FreeCaptionMemeSuccess(FreeCaptionMemeSuccessRequired, total=False):
    title: str
    visibility: str
    watermark: dict


class FreeCaptionMemeSuccessCreateDataRequired(TypedDict):
    captions: list
    templateSlug: str


class FreeCaptionMemeSuccessCreateData(FreeCaptionMemeSuccessCreateDataRequired, total=False):
    title: str
    visibility: str
    watermark: dict


class FreeTemplateSearchRequired(TypedDict):
    boxCount: int
    captionCount: int
    captions: list
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    slug: str
    sourceTemplateId: str | None
    width: float | None


class FreeTemplateSearch(FreeTemplateSearchRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    posterImageUrl: str
    qualityStatus: str
    sourceUrl: str
    tags: list


class FreeTemplateSearchListMatch(TypedDict, total=False):
    media_type: str
    mode: str
    page: int
    page_size: int
    q: str
    query: str
    sort: str
    tag: str


class GenerateRequired(TypedDict):
    byteLength: int
    delayMs: int
    filename: str
    gifSlug: str
    height: int
    mimeType: str
    pages: int
    parameters: dict
    sourceDurationMs: int
    width: int


class Generate(GenerateRequired, total=False):
    base64: str
    captions: list
    dataUrl: str
    durationMs: int
    fps: int
    returnBase64: bool
    startMs: int
    tags: list
    title: str
    widthPx: int


class GenerateCreateDataRequired(TypedDict):
    byteLength: int
    delayMs: int
    filename: str
    gifSlug: str
    height: int
    mimeType: str
    pages: int
    parameters: dict
    sourceDurationMs: int
    width: int


class GenerateCreateData(GenerateCreateDataRequired, total=False):
    base64: str
    captions: list
    dataUrl: str
    durationMs: int
    fps: int
    returnBase64: bool
    startMs: int
    tags: list
    title: str
    widthPx: int


class GifRequired(TypedDict):
    captions: list
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    slug: str
    sourceTemplateId: str | None
    tags: list
    width: float | None


class Gif(GifRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    categories: list
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    sourceUrl: str


class GifListMatch(TypedDict, total=False):
    page: int
    page_size: int
    q: str
    query: str
    sort: str
    tag: str


class GrowthRequired(TypedDict):
    action: str


class Growth(GrowthRequired, total=False):
    actorId: str
    limit: int
    logExposure: bool
    surface: str


class GrowthLoadMatchRequired(TypedDict):
    actor_id: str


class GrowthLoadMatch(GrowthLoadMatchRequired, total=False):
    log_exposure: bool
    surface: str


class GrowthCreateDataRequired(TypedDict):
    action: str


class GrowthCreateData(GrowthCreateDataRequired, total=False):
    actorId: str
    limit: int
    logExposure: bool
    surface: str


class Media(TypedDict):
    pass


class MediaCreateData(TypedDict):
    pass


class MemeRequired(TypedDict):
    altText: str
    canonicalImageUrl: str
    canvas: dict
    captions: list
    createdAt: str
    imageUrl: str
    nsfwStatus: str
    overlays: list
    shareSlug: str
    shareUrl: str
    shareViews: int
    slug: str
    sourceImageUrl: str
    tags: list
    templateSlug: str
    title: str
    visibility: str
    watermark: dict


class Meme(MemeRequired, total=False):
    id: str


class MemeLoadMatchRequired(TypedDict):
    id: str


class MemeLoadMatch(MemeLoadMatchRequired, total=False):
    owner_token: str


class MemeListMatch(TypedDict, total=False):
    exclude_template_clone: bool
    include_nsfw: bool
    official_only: bool
    owner_token: str
    page: int
    page_size: int
    query: str
    template_slug: str
    visibility: str


class MemeRemoveMatch(TypedDict):
    id: str


class PublicTemplateMediaItemRequired(TypedDict):
    captions: list
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    slug: str
    sourceTemplateId: str | None
    tags: list
    width: float | None


class PublicTemplateMediaItem(PublicTemplateMediaItemRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    categories: list
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    sourceUrl: str


class PublicTemplateMediaItemLoadMatchRequired(TypedDict):
    slug: str


class PublicTemplateMediaItemLoadMatch(PublicTemplateMediaItemLoadMatchRequired, total=False):
    media_type: str


class PublicTemplateMediaItemCreateDataRequired(TypedDict):
    slug: str
    captions: list
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    sourceTemplateId: str | None
    tags: list
    width: float | None


class PublicTemplateMediaItemCreateData(PublicTemplateMediaItemCreateDataRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    categories: list
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    sourceUrl: str


class StandaloneAgentBootstrapRequired(TypedDict):
    handle: str
    name: str


class StandaloneAgentBootstrap(StandaloneAgentBootstrapRequired, total=False):
    description: str
    locale: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class StandaloneAgentBootstrapCreateDataRequired(TypedDict):
    handle: str
    name: str


class StandaloneAgentBootstrapCreateData(StandaloneAgentBootstrapCreateDataRequired, total=False):
    description: str
    locale: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class TemplateRequired(TypedDict):
    captions: list
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    slug: str
    sourceTemplateId: str | None
    tags: list
    width: float | None


class Template(TemplateRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    categories: list
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    sourceUrl: str


class TemplateListMatch(TypedDict, total=False):
    media_type: str
    mode: str
    page: int
    page_size: int
    q: str
    query: str
    sort: str
    tag: str


class TrendAlertRequired(TypedDict):
    action: str
    actorId: str
    alertId: str
    topic: str


class TrendAlert(TrendAlertRequired, total=False):
    aggressiveness: float
    channels: list
    deliverAllAlerts: bool
    event: dict
    explicitNiches: list
    explicitRegions: list
    explicitSources: list
    explicitTopics: list
    followerCount: int
    niche: str
    region: str
    source: str


class TrendAlertLoadMatch(TypedDict, total=False):
    actor_id: str
    aggressiveness: float
    follower_count: int
    niche: str
    page: int
    page_size: int
    preferred_niche: str
    preferred_region: str
    query: str
    region: str
    source: str
    status: str
    topic: str


class TrendAlertCreateDataRequired(TypedDict):
    action: str
    actorId: str
    alertId: str
    topic: str


class TrendAlertCreateData(TrendAlertCreateDataRequired, total=False):
    aggressiveness: float
    channels: list
    deliverAllAlerts: bool
    event: dict
    explicitNiches: list
    explicitRegions: list
    explicitSources: list
    explicitTopics: list
    followerCount: int
    niche: str
    region: str
    source: str


class UploadCaptionMemeSuccess(TypedDict):
    pass


class UploadCaptionMemeSuccessCreateData(TypedDict):
    pass


class Video(TypedDict):
    pass


class VideoLoadMatch(TypedDict, total=False):
    beat_offset_m: int
    bpm: int
    locale: str
    style_preset_id: str
    sync_to_beat_grid: bool
    tone: str
    transcript: str
    trend_keyword: str


class VideoCreateData(TypedDict):
    pass
