// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Agent {
  description?: string
  id?: string
  locale?: string
  name: string
  slug?: string
  status?: string
  stylePreset?: string
  systemPrompt?: string
  watermarkText?: string
  websiteUrl?: string
}

export interface AgentLoadMatch {
  id: string
}

export interface AgentCreateData {
  description?: string
  id?: string
  locale?: string
  name: string
  slug?: string
  status?: string
  stylePreset?: string
  systemPrompt?: string
  watermarkText?: string
  websiteUrl?: string
}

export interface AgentUpdateData {
  id: string
  description?: string
  locale?: string
  name?: string
  slug?: string
  status?: string
  stylePreset?: string
  systemPrompt?: string
  watermarkText?: string
  websiteUrl?: string
}

export interface AgentInfra {
  action: string
  chatId: string
  id?: string
  memeSlug: string
  metadata?: Record<string, any>
  payoutReference?: string
  payoutStatus?: string
  phoneOrChatId: string
  prompt: string
  proof?: Record<string, any>
  quotaBoostPerDay?: number
  scopes?: any[]
  userId?: string
  weekStart?: string
}

export interface AgentInfraLoadMatch {
  action?: string
  chatId?: string
  id: string
  memeSlug?: string
  metadata?: Record<string, any>
  payoutReference?: string
  payoutStatus?: string
  phoneOrChatId?: string
  prompt?: string
  proof?: Record<string, any>
  quotaBoostPerDay?: number
  scopes?: any[]
  userId?: string
  weekStart?: string

  // Selects a custom action instead of the plain load:
  //   'keys'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentInfraCreateData {
  action: string
  chatId: string
  id?: string
  memeSlug: string
  metadata?: Record<string, any>
  payoutReference?: string
  payoutStatus?: string
  phoneOrChatId: string
  prompt: string
  proof?: Record<string, any>
  quotaBoostPerDay?: number
  scopes?: any[]
  userId?: string
  weekStart?: string

  // Selects a custom action instead of the plain create:
  //   'keys'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentInfraRemoveMatch {
  agent_id: string
  key_id: string
}

export interface AiCaption {
  blockedTerms?: any[]
  canvasText: any[]
  captionCount?: number
  captionSets?: any[]
  entities?: any[]
  fallbackUsed?: boolean
  generationStrategy?: string
  locale?: string
  memeId?: string
  memeSlug?: string
  name: string
  ok?: boolean
  optionCount?: number
  ownerToken?: string
  providerId?: string
  referenceCaptions?: any[]
  rewriteNote?: string
  sceneSummary?: string
  templateDescription?: string
  templateName?: string
  templateTags?: any[]
  tone: string
  toneCues?: any[]
  trendKeywords?: any[]
  trendReferences?: any[]
  trendSignals?: any[]
  variationOffset?: number
  voiceRules?: any[]
}

export interface AiCaptionLoadMatch {
  blockedTerms?: any[]
  canvasText?: any[]
  captionCount?: number
  captionSets?: any[]
  entities?: any[]
  fallbackUsed?: boolean
  generationStrategy?: string
  locale?: string
  memeId?: string
  memeSlug?: string
  name?: string
  ok?: boolean
  optionCount?: number
  ownerToken?: string
  providerId?: string
  referenceCaptions?: any[]
  rewriteNote?: string
  sceneSummary?: string
  templateDescription?: string
  templateName?: string
  templateTags?: any[]
  tone?: string
  toneCues?: any[]
  trendKeywords?: any[]
  trendReferences?: any[]
  trendSignals?: any[]
  variationOffset?: number
  voiceRules?: any[]
}

export interface AiCaptionCreateData {
  blockedTerms?: any[]
  canvasText: any[]
  captionCount?: number
  captionSets?: any[]
  entities?: any[]
  fallbackUsed?: boolean
  generationStrategy?: string
  locale?: string
  memeId?: string
  memeSlug?: string
  name: string
  ok?: boolean
  optionCount?: number
  ownerToken?: string
  providerId?: string
  referenceCaptions?: any[]
  rewriteNote?: string
  sceneSummary?: string
  templateDescription?: string
  templateName?: string
  templateTags?: any[]
  tone: string
  toneCues?: any[]
  trendKeywords?: any[]
  trendReferences?: any[]
  trendSignals?: any[]
  variationOffset?: number
  voiceRules?: any[]
}

export interface AiJob {
  action: string
  actorId?: string
  afterState?: Record<string, any>
  attempts?: number
  beforeState?: Record<string, any>
  brushEdits?: any[]
  capability: string
  celebrityConfidence?: number
  consentAttested?: boolean
  createdAt?: string
  detectedFaceCount: number
  edgeRefinement?: number
  estimatedCostUsd?: number
  frameTimeMs?: number
  height: number
  id: string
  input?: Record<string, any>
  layerId: string
  layerType?: string
  maxAttempts?: number
  maxFaces?: number
  mediaType?: string
  metadata?: Record<string, any>
  nsfwScore?: number
  output?: Record<string, any>
  projectId: string
  providerId?: string
  reason?: string
  runAfterMs?: number
  sourceAssetUrl: string
  sourceFaceIndex?: number
  sourceImageUrl: string
  status: string
  targetAssetUrl: string
  targetFaceIndex?: number
  timeoutMs?: number
  traceId?: string
  updatedAt?: string
  versionId?: string
  width: number
  workerId: string
  workspaceId?: string
}

export interface AiJobLoadMatch {
  id: string
}

export interface AiJobCreateData {
  action: string
  actorId?: string
  afterState?: Record<string, any>
  attempts?: number
  beforeState?: Record<string, any>
  brushEdits?: any[]
  capability: string
  celebrityConfidence?: number
  consentAttested?: boolean
  createdAt?: string
  detectedFaceCount: number
  edgeRefinement?: number
  estimatedCostUsd?: number
  frameTimeMs?: number
  height: number
  id: string
  input?: Record<string, any>
  layerId: string
  layerType?: string
  maxAttempts?: number
  maxFaces?: number
  mediaType?: string
  metadata?: Record<string, any>
  nsfwScore?: number
  output?: Record<string, any>
  projectId: string
  providerId?: string
  reason?: string
  runAfterMs?: number
  sourceAssetUrl: string
  sourceFaceIndex?: number
  sourceImageUrl: string
  status: string
  targetAssetUrl: string
  targetFaceIndex?: number
  timeoutMs?: number
  traceId?: string
  updatedAt?: string
  versionId?: string
  width: number
  workerId: string
  workspaceId?: string
}

export interface AiMemeGenerationSucceeded {
  allowHeuristicFallback?: boolean
  captionSource?: string
  captions?: any[]
  correlationId?: string
  degradedFromAsync?: boolean
  editableCaptions?: any[]
  flow: string
  imageUrl?: string
  mode: string
  ok: boolean
  preferredProviderId?: string
  prompt: string
  rewriteNote?: string
  runId?: string
  status: string
  templateId?: string
  tone?: string
  toneCues?: any[]
  variantCount: number
  variants: any[]
  workspaceId?: string
}

export interface AiMemeGenerationSucceededCreateData {
  allowHeuristicFallback?: boolean
  captionSource?: string
  captions?: any[]
  correlationId?: string
  degradedFromAsync?: boolean
  editableCaptions?: any[]
  flow: string
  imageUrl?: string
  mode: string
  ok: boolean
  preferredProviderId?: string
  prompt: string
  rewriteNote?: string
  runId?: string
  status: string
  templateId?: string
  tone?: string
  toneCues?: any[]
  variantCount: number
  variants: any[]
  workspaceId?: string
}

export interface AiProvider {
  actorId?: string
  correlationId?: string
  limit?: number
  mappingMode?: string
  maxSlots?: number
  prompt: string
  sourceImageUrl: string
  texts?: any[]
  trendSignals?: any[]
  workspaceId?: string
}

export interface AiProviderLoadMatch {
  actorId?: string
  correlationId?: string
  limit?: number
  mappingMode?: string
  maxSlots?: number
  prompt?: string
  sourceImageUrl?: string
  texts?: any[]
  trendSignals?: any[]
  workspaceId?: string
}

export interface AiProviderCreateData {
  actorId?: string
  correlationId?: string
  limit?: number
  mappingMode?: string
  maxSlots?: number
  prompt: string
  sourceImageUrl: string
  texts?: any[]
  trendSignals?: any[]
  workspaceId?: string
}

export interface Analytics {
}

export interface AnalyticsLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'metric_dictionary'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Auth {
  displayName?: string
  email: string
  password: string
}

export interface AuthCreateData {
  displayName?: string
  email: string
  password: string

  // Selects a custom action instead of the plain create:
  //   'resend_verification' | 'signup'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Billing {
}

export interface BillingLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'usage'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Collaboration {
  authorId?: string
  message: string
  projectId: string
}

export interface CollaborationLoadMatch {
  authorId?: string
  message?: string
  projectId?: string
}

export interface CollaborationCreateData {
  authorId?: string
  message: string
  projectId: string
}

export interface Compliance {
}

export interface ComplianceLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'content_policy'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CreateMeme {
  canvas: Record<string, any>
  captions: any[]
  generationRunId?: string | null
  generationVariantId?: string | null
  imageDataUrl: string
  overlays?: any[]
  sourceImageUrl: string
  templateSlug?: string
  title?: string
  visibility?: string
  watermark: Record<string, any>
}

export interface CreateMemeCreateData {
  canvas: Record<string, any>
  captions: any[]
  generationRunId?: string | null
  generationVariantId?: string | null
  imageDataUrl: string
  overlays?: any[]
  sourceImageUrl: string
  templateSlug?: string
  title?: string
  visibility?: string
  watermark: Record<string, any>
}

export interface DeveloperApi {
  limit?: number
  prompt: string
  trendSignals?: any[]
}

export interface DeveloperApiLoadMatch {
  limit?: number
  prompt?: string
  trendSignals?: any[]
}

export interface DeveloperApiCreateData {
  limit?: number
  prompt: string
  trendSignals?: any[]
}

export interface FreeCaptionMemeSuccess {
  captions: any[]
  templateSlug: string
  title?: string
  visibility?: string
  watermark?: Record<string, any>
}

export interface FreeCaptionMemeSuccessCreateData {
  captions: any[]
  templateSlug: string
  title?: string
  visibility?: string
  watermark?: Record<string, any>
}

export interface FreeTemplateSearch {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount: number
  captionCount: number
  captions: any[]
  description: string
  durationMs?: number | null
  exampleImageUrl?: string | null
  frameCount?: number | null
  height: number | null
  id: string
  imageUrl: string
  mediaType: string
  name: string
  posterImageUrl?: string
  qualityStatus?: string
  slug: string
  sourceTemplateId: string | null
  sourceUrl?: string
  tags?: any[]
  width: number | null
}

export interface FreeTemplateSearchListMatch {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions?: any[]
  description?: string
  durationMs?: number | null
  exampleImageUrl?: string | null
  frameCount?: number | null
  height?: number | null
  id?: string
  imageUrl?: string
  mediaType?: string
  name?: string
  posterImageUrl?: string
  qualityStatus?: string
  slug?: string
  sourceTemplateId?: string | null
  sourceUrl?: string
  tags?: any[]
  width?: number | null
}

export interface Generate {
  base64?: string
  byteLength: number
  captions?: any[]
  dataUrl?: string
  delayMs: number
  durationMs?: number
  filename: string
  fps?: number
  gifSlug: string
  height: number
  mimeType: string
  pages: number
  parameters: Record<string, any>
  returnBase64?: boolean
  sourceDurationMs: number
  startMs?: number
  tags?: any[]
  title?: string
  width: number
  widthPx?: number
}

export interface GenerateCreateData {
  base64?: string
  byteLength: number
  captions?: any[]
  dataUrl?: string
  delayMs: number
  durationMs?: number
  filename: string
  fps?: number
  gifSlug: string
  height: number
  mimeType: string
  pages: number
  parameters: Record<string, any>
  returnBase64?: boolean
  sourceDurationMs: number
  startMs?: number
  tags?: any[]
  title?: string
  width: number
  widthPx?: number
}

export interface Growth {
  accountId?: string
  action: string
  actorId?: string
  caption?: string
  code?: string
  externalAccountId?: string
  handle?: string
  limit?: number
  logExposure?: boolean
  memeSlug?: string
  now?: string
  platform?: string
  profiles?: any[]
  shareSlug?: string
  surface?: string
  weekStart?: string
}

export interface GrowthLoadMatch {
  accountId?: string
  action?: string
  actorId?: string
  caption?: string
  code?: string
  externalAccountId?: string
  handle?: string
  limit?: number
  logExposure?: boolean
  memeSlug?: string
  now?: string
  platform?: string
  profiles?: any[]
  shareSlug?: string
  surface?: string
  weekStart?: string

  // Selects a custom action instead of the plain load:
  //   'lifecycle_messaging' | 'referral' | 'social_publish' | 'trend_campaign' | 'viral_trigger'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GrowthCreateData {
  accountId?: string
  action: string
  actorId?: string
  caption?: string
  code?: string
  externalAccountId?: string
  handle?: string
  limit?: number
  logExposure?: boolean
  memeSlug?: string
  now?: string
  platform?: string
  profiles?: any[]
  shareSlug?: string
  surface?: string
  weekStart?: string

  // Selects a custom action instead of the plain create:
  //   'lifecycle_messaging' | 'referral' | 'social_publish' | 'trend_campaign'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ListMeme {
  altText: string
  canonicalImageUrl: string
  createdAt: string
  imageUrl: string
  nsfwStatus: string
  shareSlug: string
  shareUrl: string
  shareViews: number
  slug: string
  tags: any[]
  templateSlug: string
  title: string
  visibility: string
}

export interface ListMemeListMatch {
  altText?: string
  canonicalImageUrl?: string
  createdAt?: string
  imageUrl?: string
  nsfwStatus?: string
  shareSlug?: string
  shareUrl?: string
  shareViews?: number
  slug?: string
  tags?: any[]
  templateSlug?: string
  title?: string
  visibility?: string
}

export interface Media {
  action: string
  contentType?: string
  expiresInSeconds?: number
  ownerToken?: string
  path?: string
  prefix?: string
}

export interface MediaCreateData {
  action: string
  contentType?: string
  expiresInSeconds?: number
  ownerToken?: string
  path?: string
  prefix?: string

  // Selects a custom action instead of the plain create:
  //   'signed_url'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Meme {
  altText: string
  canonicalImageUrl: string
  canvas: Record<string, any>
  captions: any[]
  createdAt: string
  id?: string
  imageUrl: string
  nsfwStatus: string
  overlays: any[]
  shareSlug: string
  shareUrl: string
  shareViews: number
  slug: string
  sourceImageUrl: string
  tags: any[]
  templateSlug: string
  title: string
  visibility: string
  watermark: Record<string, any>
}

export interface MemeLoadMatch {
  id: string
}

export interface MemeRemoveMatch {
  id: string
}

export interface PublicTemplateMediaItem {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions: any[]
  categories?: any[]
  description: string
  durationMs?: number | null
  exampleImageUrl?: string | null
  frameCount?: number | null
  height: number | null
  id: string
  imageUrl: string
  mediaType: string
  name: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  slug: string
  sourceTemplateId: string | null
  sourceUrl?: string
  tags: any[]
  width: number | null
}

export interface PublicTemplateMediaItemLoadMatch {
  slug: string
}

export interface StandaloneAgentBootstrap {
  description?: string
  handle: string
  locale?: string
  name: string
  stylePreset?: string
  systemPrompt?: string
  watermarkText?: string
  websiteUrl?: string
}

export interface StandaloneAgentBootstrapCreateData {
  description?: string
  handle: string
  locale?: string
  name: string
  stylePreset?: string
  systemPrompt?: string
  watermarkText?: string
  websiteUrl?: string
}

export interface Template {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions?: any[]
  categories?: any[]
  description: string
  durationMs?: number
  exampleImageUrl?: string | null
  fps?: number
  frameCount?: number | null
  gifSlug?: string
  height: number | null
  id: string
  imageUrl: string
  mediaType: string
  name: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  returnBase64?: boolean
  slug: string
  sourceTemplateId: string | null
  sourceUrl?: string
  startMs?: number
  tags?: any[]
  title?: string
  width: number | null
  widthPx?: number
}

export interface TemplateListMatch {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions?: any[]
  categories?: any[]
  description?: string
  durationMs?: number
  exampleImageUrl?: string | null
  fps?: number
  frameCount?: number | null
  gifSlug?: string
  height?: number | null
  id?: string
  imageUrl?: string
  mediaType?: string
  name?: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  returnBase64?: boolean
  slug?: string
  sourceTemplateId?: string | null
  sourceUrl?: string
  startMs?: number
  tags?: any[]
  title?: string
  width?: number | null
  widthPx?: number
}

export interface TemplateCreateData {
  slug: string
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions?: any[]
  categories?: any[]
  description: string
  durationMs?: number
  exampleImageUrl?: string | null
  fps?: number
  frameCount?: number | null
  gifSlug?: string
  height: number | null
  id: string
  imageUrl: string
  mediaType: string
  name: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  returnBase64?: boolean
  sourceTemplateId: string | null
  sourceUrl?: string
  startMs?: number
  tags?: any[]
  title?: string
  width: number | null
  widthPx?: number
}

export interface TemplateSearch {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions: any[]
  categories?: any[]
  description: string
  durationMs?: number | null
  exampleImageUrl?: string | null
  frameCount?: number | null
  height: number | null
  id: string
  imageUrl: string
  mediaType: string
  name: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  slug: string
  sourceTemplateId: string | null
  sourceUrl?: string
  tags: any[]
  width: number | null
}

export interface TemplateSearchListMatch {
  animated?: boolean
  assetBytes?: number | null
  assetContentType?: string
  boxCount?: number
  captionCount?: number
  captions?: any[]
  categories?: any[]
  description?: string
  durationMs?: number | null
  exampleImageUrl?: string | null
  frameCount?: number | null
  height?: number | null
  id?: string
  imageUrl?: string
  mediaType?: string
  name?: string
  posterImageUrl?: string
  previewImageUrl?: string
  qualityStatus?: string
  slug?: string
  sourceTemplateId?: string | null
  sourceUrl?: string
  tags?: any[]
  width?: number | null
}

export interface TrendAlert {
  action: string
  actorId: string
  aggressiveness?: number
  alertId: string
  channels?: any[]
  deliverAllAlerts?: boolean
  event?: Record<string, any>
  explicitNiches?: any[]
  explicitRegions?: any[]
  explicitSources?: any[]
  explicitTopics?: any[]
  followerCount?: number
  niche?: string
  region?: string
  source?: string
  topic: string
}

export interface TrendAlertLoadMatch {
  action?: string
  actorId?: string
  aggressiveness?: number
  alertId?: string
  channels?: any[]
  deliverAllAlerts?: boolean
  event?: Record<string, any>
  explicitNiches?: any[]
  explicitRegions?: any[]
  explicitSources?: any[]
  explicitTopics?: any[]
  followerCount?: number
  niche?: string
  region?: string
  source?: string
  topic?: string
}

export interface TrendAlertCreateData {
  action: string
  actorId: string
  aggressiveness?: number
  alertId: string
  channels?: any[]
  deliverAllAlerts?: boolean
  event?: Record<string, any>
  explicitNiches?: any[]
  explicitRegions?: any[]
  explicitSources?: any[]
  explicitTopics?: any[]
  followerCount?: number
  niche?: string
  region?: string
  source?: string
  topic: string
}

export interface UploadCaptionMemeSuccess {
}

export interface UploadCaptionMemeSuccessCreateData {
}

export interface Video {
  action?: string
  assetId?: string
  atMs?: number
  audioAssetId?: string
  beatOffsetMs?: number
  bitrateKbps?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  durationMs?: number
  durationSeconds: number
  easing?: string
  error?: string
  frameRate?: number
  inputFormat: string
  intensity?: number
  jobId?: string
  locale?: string
  mimeType: string
  name?: string
  offsetMs?: number
  outputPresetId: string
  outputUrl?: string
  planTier: string
  presetId: string
  progressPercent?: number
  project?: Record<string, any>
  projectId?: string
  property?: string
  sourceDeviceId?: string
  sourceUrl?: string
  stage?: string
  startMs?: number
  stylePresetId?: string
  syncToBeatGrid?: boolean
  tone?: string
  trackId?: string
  transcript?: string
  trendKeywords?: any[]
  type?: string
  updatedAt?: string
  value?: number
  watermarkEnabled?: boolean
  watermarkText?: string
  workerId?: string
}

export interface VideoLoadMatch {
  action?: string
  assetId?: string
  atMs?: number
  audioAssetId?: string
  beatOffsetMs?: number
  bitrateKbps?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  durationMs?: number
  durationSeconds?: number
  easing?: string
  error?: string
  frameRate?: number
  inputFormat?: string
  intensity?: number
  jobId?: string
  locale?: string
  mimeType?: string
  name?: string
  offsetMs?: number
  outputPresetId?: string
  outputUrl?: string
  planTier?: string
  presetId?: string
  progressPercent?: number
  project?: Record<string, any>
  projectId?: string
  property?: string
  sourceDeviceId?: string
  sourceUrl?: string
  stage?: string
  startMs?: number
  stylePresetId?: string
  syncToBeatGrid?: boolean
  tone?: string
  trackId?: string
  transcript?: string
  trendKeywords?: any[]
  type?: string
  updatedAt?: string
  value?: number
  watermarkEnabled?: boolean
  watermarkText?: string
  workerId?: string

  // Selects a custom action instead of the plain load:
  //   'audio_library' | 'draft' | 'export_setting' | 'format' | 'render_performance' | 'render_queue' | 'subtitle' | 'text_animation' | 'timeline'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VideoCreateData {
  action?: string
  assetId?: string
  atMs?: number
  audioAssetId?: string
  beatOffsetMs?: number
  bitrateKbps?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  durationMs?: number
  durationSeconds: number
  easing?: string
  error?: string
  frameRate?: number
  inputFormat: string
  intensity?: number
  jobId?: string
  locale?: string
  mimeType: string
  name?: string
  offsetMs?: number
  outputPresetId: string
  outputUrl?: string
  planTier: string
  presetId: string
  progressPercent?: number
  project?: Record<string, any>
  projectId?: string
  property?: string
  sourceDeviceId?: string
  sourceUrl?: string
  stage?: string
  startMs?: number
  stylePresetId?: string
  syncToBeatGrid?: boolean
  tone?: string
  trackId?: string
  transcript?: string
  trendKeywords?: any[]
  type?: string
  updatedAt?: string
  value?: number
  watermarkEnabled?: boolean
  watermarkText?: string
  workerId?: string

  // Selects a custom action instead of the plain create:
  //   'draft' | 'export_setting' | 'format' | 'render_queue' | 'subtitle' | 'text_animation' | 'timeline'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

