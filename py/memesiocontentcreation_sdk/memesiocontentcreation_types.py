# Typed models for the MemesioContentCreation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
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
    locale: str
    slug: str
    status: str
    stylePreset: str
    systemPrompt: str
    watermarkText: str
    websiteUrl: str


class AgentLoadMatch(TypedDict, total=False):
    id: str


class AgentCreateDataRequired(TypedDict):
    name: str


class AgentCreateData(AgentCreateDataRequired, total=False):
    description: str
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
    metadata: dict
    payoutReference: str
    payoutStatus: str
    proof: dict
    quotaBoostPerDay: int
    scopes: list
    userId: str
    weekStart: str


class AgentInfraLoadMatch(TypedDict, total=False):
    action: str
    chatId: str
    memeSlug: str
    metadata: dict
    payoutReference: str
    payoutStatus: str
    phoneOrChatId: str
    prompt: str
    proof: dict
    quotaBoostPerDay: int
    scopes: list
    userId: str
    weekStart: str


class AgentInfraCreateDataRequired(TypedDict):
    action: str
    chatId: str
    memeSlug: str
    phoneOrChatId: str
    prompt: str


class AgentInfraCreateData(AgentInfraCreateDataRequired, total=False):
    agent_id: str
    unlock_id: str
    metadata: dict
    payoutReference: str
    payoutStatus: str
    proof: dict
    quotaBoostPerDay: int
    scopes: list
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
    blockedTerms: list
    canvasText: list
    captionCount: int
    captionSets: list
    entities: list
    fallbackUsed: bool
    generationStrategy: str
    locale: str
    memeId: str
    memeSlug: str
    name: str
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
    tone: str
    toneCues: list
    trendKeywords: list
    trendReferences: list
    trendSignals: list
    variationOffset: int
    voiceRules: list


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
    workerId: str


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
    estimatedCostUsd: float
    frameTimeMs: float
    input: dict
    layerType: str
    maxAttempts: int
    maxFaces: float
    mediaType: str
    metadata: dict
    nsfwScore: float
    output: dict
    providerId: str
    reason: str
    runAfterMs: int
    sourceFaceIndex: float
    targetFaceIndex: float
    timeoutMs: int
    traceId: str
    updatedAt: str
    versionId: str
    workspaceId: str


class AiJobLoadMatch(TypedDict, total=False):
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
    workerId: str


class AiJobCreateData(AiJobCreateDataRequired, total=False):
    job_id: str
    actorId: str
    afterState: dict
    attempts: int
    beforeState: dict
    brushEdits: list
    celebrityConfidence: float
    consentAttested: bool
    createdAt: str
    edgeRefinement: float
    estimatedCostUsd: float
    frameTimeMs: float
    input: dict
    layerType: str
    maxAttempts: int
    maxFaces: float
    mediaType: str
    metadata: dict
    nsfwScore: float
    output: dict
    providerId: str
    reason: str
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
    actorId: str
    correlationId: str
    limit: float
    mappingMode: str
    maxSlots: int
    prompt: str
    sourceImageUrl: str
    texts: list
    trendSignals: list
    workspaceId: str


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


class AnalyticsLoadMatch(TypedDict):
    pass


class AuthRequired(TypedDict):
    email: str
    password: str


class Auth(AuthRequired, total=False):
    displayName: str


class AuthCreateDataRequired(TypedDict):
    email: str
    password: str


class AuthCreateData(AuthCreateDataRequired, total=False):
    displayName: str


class Billing(TypedDict):
    pass


class BillingLoadMatch(TypedDict):
    pass


class CollaborationRequired(TypedDict):
    message: str
    projectId: str


class Collaboration(CollaborationRequired, total=False):
    authorId: str


class CollaborationLoadMatch(TypedDict, total=False):
    authorId: str
    message: str
    projectId: str


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
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    captions: list
    description: str
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    posterImageUrl: str
    qualityStatus: str
    slug: str
    sourceTemplateId: str | None
    sourceUrl: str
    tags: list
    width: float | None


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


class GrowthRequired(TypedDict):
    action: str


class Growth(GrowthRequired, total=False):
    accountId: str
    actorId: str
    caption: str
    code: str
    externalAccountId: str
    handle: str
    limit: int
    logExposure: bool
    memeSlug: str
    now: str
    platform: str
    profiles: list
    shareSlug: str
    surface: str
    weekStart: str


class GrowthLoadMatch(TypedDict, total=False):
    accountId: str
    action: str
    actorId: str
    caption: str
    code: str
    externalAccountId: str
    handle: str
    limit: int
    logExposure: bool
    memeSlug: str
    now: str
    platform: str
    profiles: list
    shareSlug: str
    surface: str
    weekStart: str


class GrowthCreateDataRequired(TypedDict):
    action: str


class GrowthCreateData(GrowthCreateDataRequired, total=False):
    accountId: str
    actorId: str
    caption: str
    code: str
    externalAccountId: str
    handle: str
    limit: int
    logExposure: bool
    memeSlug: str
    now: str
    platform: str
    profiles: list
    shareSlug: str
    surface: str
    weekStart: str


class ListMeme(TypedDict):
    altText: str
    canonicalImageUrl: str
    createdAt: str
    imageUrl: str
    nsfwStatus: str
    shareSlug: str
    shareUrl: str
    shareViews: int
    slug: str
    tags: list
    templateSlug: str
    title: str
    visibility: str


class ListMemeListMatch(TypedDict, total=False):
    altText: str
    canonicalImageUrl: str
    createdAt: str
    imageUrl: str
    nsfwStatus: str
    shareSlug: str
    shareUrl: str
    shareViews: int
    slug: str
    tags: list
    templateSlug: str
    title: str
    visibility: str


class MediaRequired(TypedDict):
    action: str


class Media(MediaRequired, total=False):
    contentType: str
    expiresInSeconds: int
    ownerToken: str
    path: str
    prefix: str


class MediaCreateDataRequired(TypedDict):
    action: str


class MediaCreateData(MediaCreateDataRequired, total=False):
    contentType: str
    expiresInSeconds: int
    ownerToken: str
    path: str
    prefix: str


class Meme(TypedDict):
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


class MemeLoadMatch(TypedDict):
    id: str


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


class PublicTemplateMediaItemLoadMatch(TypedDict):
    slug: str


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
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    slug: str
    sourceTemplateId: str | None
    width: float | None


class Template(TemplateRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    captions: list
    categories: list
    durationMs: int
    exampleImageUrl: str | None
    fps: int
    frameCount: int | None
    gifSlug: str
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    returnBase64: bool
    sourceUrl: str
    startMs: int
    tags: list
    title: str
    widthPx: int


class TemplateListMatch(TypedDict, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    captions: list
    categories: list
    description: str
    durationMs: int
    exampleImageUrl: str | None
    fps: int
    frameCount: int | None
    gifSlug: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    returnBase64: bool
    slug: str
    sourceTemplateId: str | None
    sourceUrl: str
    startMs: int
    tags: list
    title: str
    width: float | None
    widthPx: int


class TemplateCreateDataRequired(TypedDict):
    slug: str
    description: str
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    sourceTemplateId: str | None
    width: float | None


class TemplateCreateData(TemplateCreateDataRequired, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    captions: list
    categories: list
    durationMs: int
    exampleImageUrl: str | None
    fps: int
    frameCount: int | None
    gifSlug: str
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    returnBase64: bool
    sourceUrl: str
    startMs: int
    tags: list
    title: str
    widthPx: int


class TemplateSearchRequired(TypedDict):
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


class TemplateSearch(TemplateSearchRequired, total=False):
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


class TemplateSearchListMatch(TypedDict, total=False):
    animated: bool
    assetBytes: int | None
    assetContentType: str
    boxCount: int
    captionCount: int
    captions: list
    categories: list
    description: str
    durationMs: int | None
    exampleImageUrl: str | None
    frameCount: int | None
    height: float | None
    id: str
    imageUrl: str
    mediaType: str
    name: str
    posterImageUrl: str
    previewImageUrl: str
    qualityStatus: str
    slug: str
    sourceTemplateId: str | None
    sourceUrl: str
    tags: list
    width: float | None


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
    action: str
    actorId: str
    aggressiveness: float
    alertId: str
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


class VideoRequired(TypedDict):
    durationSeconds: float
    inputFormat: str
    mimeType: str
    outputPresetId: str
    planTier: str
    presetId: str


class Video(VideoRequired, total=False):
    action: str
    assetId: str
    atMs: float
    audioAssetId: str
    beatOffsetMs: int
    bitrateKbps: float
    bpm: int
    cancelled: bool
    container: str
    durationMs: float
    easing: str
    error: str
    frameRate: float
    intensity: float
    jobId: str
    locale: str
    name: str
    offsetMs: float
    outputUrl: str
    progressPercent: float
    project: dict
    projectId: str
    property: str
    sourceDeviceId: str
    sourceUrl: str
    stage: str
    startMs: float
    stylePresetId: str
    syncToBeatGrid: bool
    tone: str
    trackId: str
    transcript: str
    trendKeywords: list
    type: str
    updatedAt: str
    value: float
    watermarkEnabled: bool
    watermarkText: str
    workerId: str


class VideoLoadMatch(TypedDict, total=False):
    action: str
    assetId: str
    atMs: float
    audioAssetId: str
    beatOffsetMs: int
    bitrateKbps: float
    bpm: int
    cancelled: bool
    container: str
    durationMs: float
    durationSeconds: float
    easing: str
    error: str
    frameRate: float
    inputFormat: str
    intensity: float
    jobId: str
    locale: str
    mimeType: str
    name: str
    offsetMs: float
    outputPresetId: str
    outputUrl: str
    planTier: str
    presetId: str
    progressPercent: float
    project: dict
    projectId: str
    property: str
    sourceDeviceId: str
    sourceUrl: str
    stage: str
    startMs: float
    stylePresetId: str
    syncToBeatGrid: bool
    tone: str
    trackId: str
    transcript: str
    trendKeywords: list
    type: str
    updatedAt: str
    value: float
    watermarkEnabled: bool
    watermarkText: str
    workerId: str


class VideoCreateDataRequired(TypedDict):
    durationSeconds: float
    inputFormat: str
    mimeType: str
    outputPresetId: str
    planTier: str
    presetId: str


class VideoCreateData(VideoCreateDataRequired, total=False):
    action: str
    assetId: str
    atMs: float
    audioAssetId: str
    beatOffsetMs: int
    bitrateKbps: float
    bpm: int
    cancelled: bool
    container: str
    durationMs: float
    easing: str
    error: str
    frameRate: float
    intensity: float
    jobId: str
    locale: str
    name: str
    offsetMs: float
    outputUrl: str
    progressPercent: float
    project: dict
    projectId: str
    property: str
    sourceDeviceId: str
    sourceUrl: str
    stage: str
    startMs: float
    stylePresetId: str
    syncToBeatGrid: bool
    tone: str
    trackId: str
    transcript: str
    trendKeywords: list
    type: str
    updatedAt: str
    value: float
    watermarkEnabled: bool
    watermarkText: str
    workerId: str
