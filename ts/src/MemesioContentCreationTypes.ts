// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Agent {
  description?: string
  locale?: string
  name: string
  slug?: string
  status?: string
  style_preset?: string
  system_prompt?: string
  watermark_text?: string
  website_url?: string
}

export interface AgentLoadMatch {
  id?: string
}

export interface AgentCreateData {
  description?: string
  locale?: string
  name: string
  slug?: string
  status?: string
  style_preset?: string
  system_prompt?: string
  watermark_text?: string
  website_url?: string
}

export interface AgentUpdateData {
  id: string
}

export interface AgentInfra {
  action: string
  chat_id: string
  meme_slug: string
  metadata?: Record<string, any>
  payout_reference?: string
  payout_status?: string
  phone_or_chat_id: string
  prompt: string
  proof?: Record<string, any>
  quota_boost_per_day?: number
  scope?: any[]
  user_id?: string
  week_start?: string
}

export interface AgentInfraLoadMatch {
  action?: string
  chat_id?: string
  meme_slug?: string
  metadata?: Record<string, any>
  payout_reference?: string
  payout_status?: string
  phone_or_chat_id?: string
  prompt?: string
  proof?: Record<string, any>
  quota_boost_per_day?: number
  scope?: any[]
  user_id?: string
  week_start?: string
}

export interface AgentInfraCreateData {
  agent_id?: string
  unlock_id?: string
}

export interface AgentInfraRemoveMatch {
  agent_id: string
  key_id: string
}

export interface AiCaption {
  blocked_term?: any[]
  canvas_text: any[]
  caption_count?: number
  caption_set?: any[]
  entity?: any[]
  fallback_used?: boolean
  generation_strategy?: string
  locale?: string
  meme_id?: string
  meme_slug?: string
  name: string
  ok?: boolean
  option_count?: number
  owner_token?: string
  provider_id?: string
  reference_caption?: any[]
  rewrite_note?: string
  scene_summary?: string
  template_description?: string
  template_name?: string
  template_tag?: any[]
  tone: string
  tone_cue?: any[]
  trend_keyword?: any[]
  trend_reference?: any[]
  trend_signal?: any[]
  variation_offset?: number
  voice_rule?: any[]
}

export interface AiCaptionLoadMatch {
  blocked_term?: any[]
  canvas_text?: any[]
  caption_count?: number
  caption_set?: any[]
  entity?: any[]
  fallback_used?: boolean
  generation_strategy?: string
  locale?: string
  meme_id?: string
  meme_slug?: string
  name?: string
  ok?: boolean
  option_count?: number
  owner_token?: string
  provider_id?: string
  reference_caption?: any[]
  rewrite_note?: string
  scene_summary?: string
  template_description?: string
  template_name?: string
  template_tag?: any[]
  tone?: string
  tone_cue?: any[]
  trend_keyword?: any[]
  trend_reference?: any[]
  trend_signal?: any[]
  variation_offset?: number
  voice_rule?: any[]
}

export interface AiCaptionCreateData {
  blocked_term?: any[]
  canvas_text: any[]
  caption_count?: number
  caption_set?: any[]
  entity?: any[]
  fallback_used?: boolean
  generation_strategy?: string
  locale?: string
  meme_id?: string
  meme_slug?: string
  name: string
  ok?: boolean
  option_count?: number
  owner_token?: string
  provider_id?: string
  reference_caption?: any[]
  rewrite_note?: string
  scene_summary?: string
  template_description?: string
  template_name?: string
  template_tag?: any[]
  tone: string
  tone_cue?: any[]
  trend_keyword?: any[]
  trend_reference?: any[]
  trend_signal?: any[]
  variation_offset?: number
  voice_rule?: any[]
}

export interface AiJob {
  action: string
  actor_id?: string
  after_state?: Record<string, any>
  attempt?: number
  before_state?: Record<string, any>
  brush_edit?: any[]
  capability: string
  celebrity_confidence?: number
  consent_attested?: boolean
  created_at?: string
  detected_face_count: number
  edge_refinement?: number
  estimated_cost_usd?: number
  frame_time_m?: number
  height: number
  id: string
  input?: Record<string, any>
  layer_id: string
  layer_type?: string
  max_attempt?: number
  max_face?: number
  media_type?: string
  metadata?: Record<string, any>
  nsfw_score?: number
  output?: Record<string, any>
  project_id: string
  provider_id?: string
  reason?: string
  run_after_m?: number
  source_asset_url: string
  source_face_index?: number
  source_image_url: string
  status: string
  target_asset_url: string
  target_face_index?: number
  timeout_m?: number
  trace_id?: string
  updated_at?: string
  version_id?: string
  width: number
  worker_id: string
  workspace_id?: string
}

export interface AiJobLoadMatch {
  id?: string
}

export interface AiJobCreateData {
  job_id?: string
}

export interface AiMemeGenerationSucceeded {
  allow_heuristic_fallback?: boolean
  caption?: any[]
  caption_source?: string
  correlation_id?: string
  degraded_from_async?: boolean
  editable_caption?: any[]
  flow: string
  image_url?: string
  mode: string
  ok: boolean
  preferred_provider_id?: string
  prompt: string
  rewrite_note?: string
  run_id?: string
  status: string
  template_id?: string
  tone?: string
  tone_cue?: any[]
  variant: any[]
  variant_count: number
  workspace_id?: string
}

export interface AiMemeGenerationSucceededCreateData {
  allow_heuristic_fallback?: boolean
  caption?: any[]
  caption_source?: string
  correlation_id?: string
  degraded_from_async?: boolean
  editable_caption?: any[]
  flow: string
  image_url?: string
  mode: string
  ok: boolean
  preferred_provider_id?: string
  prompt: string
  rewrite_note?: string
  run_id?: string
  status: string
  template_id?: string
  tone?: string
  tone_cue?: any[]
  variant: any[]
  variant_count: number
  workspace_id?: string
}

export interface AiProvider {
  actor_id?: string
  correlation_id?: string
  limit?: number
  mapping_mode?: string
  max_slot?: number
  prompt: string
  source_image_url: string
  text?: any[]
  trend_signal?: any[]
  workspace_id?: string
}

export interface AiProviderLoadMatch {
  actor_id?: string
  correlation_id?: string
  limit?: number
  mapping_mode?: string
  max_slot?: number
  prompt?: string
  source_image_url?: string
  text?: any[]
  trend_signal?: any[]
  workspace_id?: string
}

export interface AiProviderCreateData {
  actor_id?: string
  correlation_id?: string
  limit?: number
  mapping_mode?: string
  max_slot?: number
  prompt: string
  source_image_url: string
  text?: any[]
  trend_signal?: any[]
  workspace_id?: string
}

export interface Analytics {
}

export interface AnalyticsLoadMatch {
}

export interface Auth {
  display_name?: string
  email: string
  password: string
}

export interface AuthCreateData {
  display_name?: string
  email: string
  password: string
}

export interface Billing {
}

export interface BillingLoadMatch {
}

export interface Collaboration {
  author_id?: string
  message: string
  project_id: string
}

export interface CollaborationLoadMatch {
  author_id?: string
  message?: string
  project_id?: string
}

export interface CollaborationCreateData {
  author_id?: string
  message: string
  project_id: string
}

export interface Compliance {
}

export interface ComplianceLoadMatch {
}

export interface CreateMeme {
  canva: Record<string, any>
  caption: any[]
  generation_run_id?: any
  generation_variant_id?: any
  image_data_url: string
  overlay?: any[]
  source_image_url: string
  template_slug?: string
  title?: string
  visibility?: string
  watermark: Record<string, any>
}

export interface CreateMemeCreateData {
  canva: Record<string, any>
  caption: any[]
  generation_run_id?: any
  generation_variant_id?: any
  image_data_url: string
  overlay?: any[]
  source_image_url: string
  template_slug?: string
  title?: string
  visibility?: string
  watermark: Record<string, any>
}

export interface DeveloperApi {
  limit?: number
  prompt: string
  trend_signal?: any[]
}

export interface DeveloperApiLoadMatch {
  limit?: number
  prompt?: string
  trend_signal?: any[]
}

export interface DeveloperApiCreateData {
  limit?: number
  prompt: string
  trend_signal?: any[]
}

export interface FreeCaptionMemeSuccess {
  caption: any[]
  template_slug: string
  title?: string
  visibility?: string
  watermark?: Record<string, any>
}

export interface FreeCaptionMemeSuccessCreateData {
  caption: any[]
  template_slug: string
  title?: string
  visibility?: string
  watermark?: Record<string, any>
}

export interface FreeTemplateSearch {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count: number
  caption: any[]
  caption_count: number
  description: string
  duration_m?: any
  example_image_url?: any
  frame_count?: any
  height: any
  id: string
  image_url: string
  media_type: string
  name: string
  poster_image_url?: string
  quality_status?: string
  slug: string
  source_template_id: any
  source_url?: string
  tag?: any[]
  width: any
}

export interface FreeTemplateSearchListMatch {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption?: any[]
  caption_count?: number
  description?: string
  duration_m?: any
  example_image_url?: any
  frame_count?: any
  height?: any
  id?: string
  image_url?: string
  media_type?: string
  name?: string
  poster_image_url?: string
  quality_status?: string
  slug?: string
  source_template_id?: any
  source_url?: string
  tag?: any[]
  width?: any
}

export interface Generate {
  caption?: any[]
  data: Record<string, any>
  duration_m?: number
  fps?: number
  gif_slug?: string
  ok: boolean
  return_base64?: boolean
  start_m?: number
  tag?: any[]
  title?: string
  width_px?: number
}

export interface GenerateCreateData {
  caption?: any[]
  data: Record<string, any>
  duration_m?: number
  fps?: number
  gif_slug?: string
  ok: boolean
  return_base64?: boolean
  start_m?: number
  tag?: any[]
  title?: string
  width_px?: number
}

export interface Growth {
  account_id?: string
  action: string
  actor_id?: string
  caption?: string
  code?: string
  external_account_id?: string
  handle?: string
  limit?: number
  log_exposure?: boolean
  meme_slug?: string
  now?: string
  platform?: string
  profile?: any[]
  share_slug?: string
  surface?: string
  week_start?: string
}

export interface GrowthLoadMatch {
  account_id?: string
  action?: string
  actor_id?: string
  caption?: string
  code?: string
  external_account_id?: string
  handle?: string
  limit?: number
  log_exposure?: boolean
  meme_slug?: string
  now?: string
  platform?: string
  profile?: any[]
  share_slug?: string
  surface?: string
  week_start?: string
}

export interface GrowthCreateData {
  account_id?: string
  action: string
  actor_id?: string
  caption?: string
  code?: string
  external_account_id?: string
  handle?: string
  limit?: number
  log_exposure?: boolean
  meme_slug?: string
  now?: string
  platform?: string
  profile?: any[]
  share_slug?: string
  surface?: string
  week_start?: string
}

export interface ListMeme {
  alt_text: string
  canonical_image_url: string
  created_at: string
  image_url: string
  nsfw_status: string
  share_slug: string
  share_url: string
  share_view: number
  slug: string
  tag: any[]
  template_slug: string
  title: string
  visibility: string
}

export interface ListMemeListMatch {
  alt_text?: string
  canonical_image_url?: string
  created_at?: string
  image_url?: string
  nsfw_status?: string
  share_slug?: string
  share_url?: string
  share_view?: number
  slug?: string
  tag?: any[]
  template_slug?: string
  title?: string
  visibility?: string
}

export interface Media {
  action: string
  content_type?: string
  expires_in_second?: number
  owner_token?: string
  path?: string
  prefix?: string
}

export interface MediaCreateData {
  action: string
  content_type?: string
  expires_in_second?: number
  owner_token?: string
  path?: string
  prefix?: string
}

export interface Meme {
  alt_text: string
  canonical_image_url: string
  canva: Record<string, any>
  caption: any[]
  created_at: string
  image_url: string
  nsfw_status: string
  overlay: any[]
  share_slug: string
  share_url: string
  share_view: number
  slug: string
  source_image_url: string
  tag: any[]
  template_slug: string
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
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption: any[]
  caption_count?: number
  category?: any[]
  description: string
  duration_m?: any
  example_image_url?: any
  frame_count?: any
  height: any
  id: string
  image_url: string
  media_type: string
  name: string
  poster_image_url?: string
  preview_image_url?: string
  quality_status?: string
  slug: string
  source_template_id: any
  source_url?: string
  tag: any[]
  width: any
}

export interface PublicTemplateMediaItemLoadMatch {
  slug: string
}

export interface StandaloneAgentBootstrap {
  description?: string
  handle: string
  locale?: string
  name: string
  style_preset?: string
  system_prompt?: string
  watermark_text?: string
  website_url?: string
}

export interface StandaloneAgentBootstrapCreateData {
  description?: string
  handle: string
  locale?: string
  name: string
  style_preset?: string
  system_prompt?: string
  watermark_text?: string
  website_url?: string
}

export interface Template {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption?: any[]
  caption_count?: number
  category?: any[]
  description: string
  duration_m?: number
  example_image_url?: any
  fps?: number
  frame_count?: any
  gif_slug?: string
  height: any
  id: string
  image_url: string
  media_type: string
  name: string
  poster_image_url?: string
  preview_image_url?: string
  quality_status?: string
  return_base64?: boolean
  slug: string
  source_template_id: any
  source_url?: string
  start_m?: number
  tag?: any[]
  title?: string
  width: any
  width_px?: number
}

export interface TemplateListMatch {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption?: any[]
  caption_count?: number
  category?: any[]
  description?: string
  duration_m?: number
  example_image_url?: any
  fps?: number
  frame_count?: any
  gif_slug?: string
  height?: any
  id?: string
  image_url?: string
  media_type?: string
  name?: string
  poster_image_url?: string
  preview_image_url?: string
  quality_status?: string
  return_base64?: boolean
  slug?: string
  source_template_id?: any
  source_url?: string
  start_m?: number
  tag?: any[]
  title?: string
  width?: any
  width_px?: number
}

export interface TemplateCreateData {
  slug: string
}

export interface TemplateSearch {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption: any[]
  caption_count?: number
  category?: any[]
  description: string
  duration_m?: any
  example_image_url?: any
  frame_count?: any
  height: any
  id: string
  image_url: string
  media_type: string
  name: string
  poster_image_url?: string
  preview_image_url?: string
  quality_status?: string
  slug: string
  source_template_id: any
  source_url?: string
  tag: any[]
  width: any
}

export interface TemplateSearchListMatch {
  animated?: boolean
  asset_byte?: any
  asset_content_type?: string
  box_count?: number
  caption?: any[]
  caption_count?: number
  category?: any[]
  description?: string
  duration_m?: any
  example_image_url?: any
  frame_count?: any
  height?: any
  id?: string
  image_url?: string
  media_type?: string
  name?: string
  poster_image_url?: string
  preview_image_url?: string
  quality_status?: string
  slug?: string
  source_template_id?: any
  source_url?: string
  tag?: any[]
  width?: any
}

export interface TrendAlert {
  action: string
  actor_id: string
  aggressiveness?: number
  alert_id: string
  channel?: any[]
  deliver_all_alert?: boolean
  event?: Record<string, any>
  explicit_niche?: any[]
  explicit_region?: any[]
  explicit_source?: any[]
  explicit_topic?: any[]
  follower_count?: number
  niche?: string
  region?: string
  source?: string
  topic: string
}

export interface TrendAlertLoadMatch {
  action?: string
  actor_id?: string
  aggressiveness?: number
  alert_id?: string
  channel?: any[]
  deliver_all_alert?: boolean
  event?: Record<string, any>
  explicit_niche?: any[]
  explicit_region?: any[]
  explicit_source?: any[]
  explicit_topic?: any[]
  follower_count?: number
  niche?: string
  region?: string
  source?: string
  topic?: string
}

export interface TrendAlertCreateData {
  action: string
  actor_id: string
  aggressiveness?: number
  alert_id: string
  channel?: any[]
  deliver_all_alert?: boolean
  event?: Record<string, any>
  explicit_niche?: any[]
  explicit_region?: any[]
  explicit_source?: any[]
  explicit_topic?: any[]
  follower_count?: number
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
  asset_id?: string
  at_m?: number
  audio_asset_id?: string
  beat_offset_m?: number
  bitrate_kbp?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  duration_m?: number
  duration_second: number
  easing?: string
  error?: string
  frame_rate?: number
  input_format: string
  intensity?: number
  job_id?: string
  locale?: string
  mime_type: string
  name?: string
  offset_m?: number
  output_preset_id: string
  output_url?: string
  plan_tier: string
  preset_id: string
  progress_percent?: number
  project?: Record<string, any>
  project_id?: string
  property?: string
  source_device_id?: string
  source_url?: string
  stage?: string
  start_m?: number
  style_preset_id?: string
  sync_to_beat_grid?: boolean
  tone?: string
  track_id?: string
  transcript?: string
  trend_keyword?: any[]
  type?: string
  updated_at?: string
  value?: number
  watermark_enabled?: boolean
  watermark_text?: string
  worker_id?: string
}

export interface VideoLoadMatch {
  action?: string
  asset_id?: string
  at_m?: number
  audio_asset_id?: string
  beat_offset_m?: number
  bitrate_kbp?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  duration_m?: number
  duration_second?: number
  easing?: string
  error?: string
  frame_rate?: number
  input_format?: string
  intensity?: number
  job_id?: string
  locale?: string
  mime_type?: string
  name?: string
  offset_m?: number
  output_preset_id?: string
  output_url?: string
  plan_tier?: string
  preset_id?: string
  progress_percent?: number
  project?: Record<string, any>
  project_id?: string
  property?: string
  source_device_id?: string
  source_url?: string
  stage?: string
  start_m?: number
  style_preset_id?: string
  sync_to_beat_grid?: boolean
  tone?: string
  track_id?: string
  transcript?: string
  trend_keyword?: any[]
  type?: string
  updated_at?: string
  value?: number
  watermark_enabled?: boolean
  watermark_text?: string
  worker_id?: string
}

export interface VideoCreateData {
  action?: string
  asset_id?: string
  at_m?: number
  audio_asset_id?: string
  beat_offset_m?: number
  bitrate_kbp?: number
  bpm?: number
  cancelled?: boolean
  container?: string
  duration_m?: number
  duration_second: number
  easing?: string
  error?: string
  frame_rate?: number
  input_format: string
  intensity?: number
  job_id?: string
  locale?: string
  mime_type: string
  name?: string
  offset_m?: number
  output_preset_id: string
  output_url?: string
  plan_tier: string
  preset_id: string
  progress_percent?: number
  project?: Record<string, any>
  project_id?: string
  property?: string
  source_device_id?: string
  source_url?: string
  stage?: string
  start_m?: number
  style_preset_id?: string
  sync_to_beat_grid?: boolean
  tone?: string
  track_id?: string
  transcript?: string
  trend_keyword?: any[]
  type?: string
  updated_at?: string
  value?: number
  watermark_enabled?: boolean
  watermark_text?: string
  worker_id?: string
}

