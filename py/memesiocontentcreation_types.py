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
    style_preset: str
    system_prompt: str
    watermark_text: str
    website_url: str


class AgentLoadMatch(TypedDict, total=False):
    id: str


class AgentCreateDataRequired(TypedDict):
    name: str


class AgentCreateData(AgentCreateDataRequired, total=False):
    description: str
    locale: str
    slug: str
    status: str
    style_preset: str
    system_prompt: str
    watermark_text: str
    website_url: str


class AgentUpdateData(TypedDict):
    id: str


class AgentInfraRequired(TypedDict):
    action: str
    chat_id: str
    meme_slug: str
    phone_or_chat_id: str
    prompt: str


class AgentInfra(AgentInfraRequired, total=False):
    metadata: dict
    payout_reference: str
    payout_status: str
    proof: dict
    quota_boost_per_day: int
    scope: list
    user_id: str
    week_start: str


class AgentInfraLoadMatch(TypedDict, total=False):
    action: str
    chat_id: str
    meme_slug: str
    metadata: dict
    payout_reference: str
    payout_status: str
    phone_or_chat_id: str
    prompt: str
    proof: dict
    quota_boost_per_day: int
    scope: list
    user_id: str
    week_start: str


class AgentInfraCreateData(TypedDict, total=False):
    agent_id: str
    unlock_id: str


class AgentInfraRemoveMatch(TypedDict):
    agent_id: str
    key_id: str


class AiCaptionRequired(TypedDict):
    canvas_text: list
    name: str
    tone: str


class AiCaption(AiCaptionRequired, total=False):
    blocked_term: list
    caption_count: int
    caption_set: list
    entity: list
    fallback_used: bool
    generation_strategy: str
    locale: str
    meme_id: str
    meme_slug: str
    ok: bool
    option_count: int
    owner_token: str
    provider_id: str
    reference_caption: list
    rewrite_note: str
    scene_summary: str
    template_description: str
    template_name: str
    template_tag: list
    tone_cue: list
    trend_keyword: list
    trend_reference: list
    trend_signal: list
    variation_offset: int
    voice_rule: list


class AiCaptionLoadMatch(TypedDict, total=False):
    blocked_term: list
    canvas_text: list
    caption_count: int
    caption_set: list
    entity: list
    fallback_used: bool
    generation_strategy: str
    locale: str
    meme_id: str
    meme_slug: str
    name: str
    ok: bool
    option_count: int
    owner_token: str
    provider_id: str
    reference_caption: list
    rewrite_note: str
    scene_summary: str
    template_description: str
    template_name: str
    template_tag: list
    tone: str
    tone_cue: list
    trend_keyword: list
    trend_reference: list
    trend_signal: list
    variation_offset: int
    voice_rule: list


class AiCaptionCreateDataRequired(TypedDict):
    canvas_text: list
    name: str
    tone: str


class AiCaptionCreateData(AiCaptionCreateDataRequired, total=False):
    blocked_term: list
    caption_count: int
    caption_set: list
    entity: list
    fallback_used: bool
    generation_strategy: str
    locale: str
    meme_id: str
    meme_slug: str
    ok: bool
    option_count: int
    owner_token: str
    provider_id: str
    reference_caption: list
    rewrite_note: str
    scene_summary: str
    template_description: str
    template_name: str
    template_tag: list
    tone_cue: list
    trend_keyword: list
    trend_reference: list
    trend_signal: list
    variation_offset: int
    voice_rule: list


class AiJobRequired(TypedDict):
    action: str
    capability: str
    detected_face_count: float
    height: float
    id: str
    layer_id: str
    project_id: str
    source_asset_url: str
    source_image_url: str
    status: str
    target_asset_url: str
    width: float
    worker_id: str


class AiJob(AiJobRequired, total=False):
    actor_id: str
    after_state: dict
    attempt: int
    before_state: dict
    brush_edit: list
    celebrity_confidence: float
    consent_attested: bool
    created_at: str
    edge_refinement: float
    estimated_cost_usd: float
    frame_time_m: float
    input: dict
    layer_type: str
    max_attempt: int
    max_face: float
    media_type: str
    metadata: dict
    nsfw_score: float
    output: dict
    provider_id: str
    reason: str
    run_after_m: int
    source_face_index: float
    target_face_index: float
    timeout_m: int
    trace_id: str
    updated_at: str
    version_id: str
    workspace_id: str


class AiJobLoadMatch(TypedDict, total=False):
    id: str


class AiJobCreateData(TypedDict, total=False):
    job_id: str


class AiMemeGenerationSucceededRequired(TypedDict):
    flow: str
    mode: str
    ok: bool
    prompt: str
    status: str
    variant: list
    variant_count: int


class AiMemeGenerationSucceeded(AiMemeGenerationSucceededRequired, total=False):
    allow_heuristic_fallback: bool
    caption: list
    caption_source: str
    correlation_id: str
    degraded_from_async: bool
    editable_caption: list
    image_url: str
    preferred_provider_id: str
    rewrite_note: str
    run_id: str
    template_id: str
    tone: str
    tone_cue: list
    workspace_id: str


class AiMemeGenerationSucceededCreateDataRequired(TypedDict):
    flow: str
    mode: str
    ok: bool
    prompt: str
    status: str
    variant: list
    variant_count: int


class AiMemeGenerationSucceededCreateData(AiMemeGenerationSucceededCreateDataRequired, total=False):
    allow_heuristic_fallback: bool
    caption: list
    caption_source: str
    correlation_id: str
    degraded_from_async: bool
    editable_caption: list
    image_url: str
    preferred_provider_id: str
    rewrite_note: str
    run_id: str
    template_id: str
    tone: str
    tone_cue: list
    workspace_id: str


class AiProviderRequired(TypedDict):
    prompt: str
    source_image_url: str


class AiProvider(AiProviderRequired, total=False):
    actor_id: str
    correlation_id: str
    limit: float
    mapping_mode: str
    max_slot: int
    text: list
    trend_signal: list
    workspace_id: str


class AiProviderLoadMatch(TypedDict, total=False):
    actor_id: str
    correlation_id: str
    limit: float
    mapping_mode: str
    max_slot: int
    prompt: str
    source_image_url: str
    text: list
    trend_signal: list
    workspace_id: str


class AiProviderCreateDataRequired(TypedDict):
    prompt: str
    source_image_url: str


class AiProviderCreateData(AiProviderCreateDataRequired, total=False):
    actor_id: str
    correlation_id: str
    limit: float
    mapping_mode: str
    max_slot: int
    text: list
    trend_signal: list
    workspace_id: str


class Analytics(TypedDict):
    pass


class AnalyticsLoadMatch(TypedDict):
    pass


class AuthRequired(TypedDict):
    email: str
    password: str


class Auth(AuthRequired, total=False):
    display_name: str


class AuthCreateDataRequired(TypedDict):
    email: str
    password: str


class AuthCreateData(AuthCreateDataRequired, total=False):
    display_name: str


class Billing(TypedDict):
    pass


class BillingLoadMatch(TypedDict):
    pass


class CollaborationRequired(TypedDict):
    message: str
    project_id: str


class Collaboration(CollaborationRequired, total=False):
    author_id: str


class CollaborationLoadMatch(TypedDict, total=False):
    author_id: str
    message: str
    project_id: str


class CollaborationCreateDataRequired(TypedDict):
    message: str
    project_id: str


class CollaborationCreateData(CollaborationCreateDataRequired, total=False):
    author_id: str


class Compliance(TypedDict):
    pass


class ComplianceLoadMatch(TypedDict):
    pass


class CreateMemeRequired(TypedDict):
    canva: dict
    caption: list
    image_data_url: str
    source_image_url: str
    watermark: dict


class CreateMeme(CreateMemeRequired, total=False):
    generation_run_id: Any
    generation_variant_id: Any
    overlay: list
    template_slug: str
    title: str
    visibility: str


class CreateMemeCreateDataRequired(TypedDict):
    canva: dict
    caption: list
    image_data_url: str
    source_image_url: str
    watermark: dict


class CreateMemeCreateData(CreateMemeCreateDataRequired, total=False):
    generation_run_id: Any
    generation_variant_id: Any
    overlay: list
    template_slug: str
    title: str
    visibility: str


class DeveloperApiRequired(TypedDict):
    prompt: str


class DeveloperApi(DeveloperApiRequired, total=False):
    limit: float
    trend_signal: list


class DeveloperApiLoadMatch(TypedDict, total=False):
    limit: float
    prompt: str
    trend_signal: list


class DeveloperApiCreateDataRequired(TypedDict):
    prompt: str


class DeveloperApiCreateData(DeveloperApiCreateDataRequired, total=False):
    limit: float
    trend_signal: list


class FreeCaptionMemeSuccessRequired(TypedDict):
    caption: list
    template_slug: str


class FreeCaptionMemeSuccess(FreeCaptionMemeSuccessRequired, total=False):
    title: str
    visibility: str
    watermark: dict


class FreeCaptionMemeSuccessCreateDataRequired(TypedDict):
    caption: list
    template_slug: str


class FreeCaptionMemeSuccessCreateData(FreeCaptionMemeSuccessCreateDataRequired, total=False):
    title: str
    visibility: str
    watermark: dict


class FreeTemplateSearchRequired(TypedDict):
    box_count: int
    caption: list
    caption_count: int
    description: str
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    slug: str
    source_template_id: Any
    width: Any


class FreeTemplateSearch(FreeTemplateSearchRequired, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    duration_m: Any
    example_image_url: Any
    frame_count: Any
    poster_image_url: str
    quality_status: str
    source_url: str
    tag: list


class FreeTemplateSearchListMatch(TypedDict, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption: list
    caption_count: int
    description: str
    duration_m: Any
    example_image_url: Any
    frame_count: Any
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    poster_image_url: str
    quality_status: str
    slug: str
    source_template_id: Any
    source_url: str
    tag: list
    width: Any


class GenerateRequired(TypedDict):
    data: dict
    ok: bool


class Generate(GenerateRequired, total=False):
    caption: list
    duration_m: int
    fps: int
    gif_slug: str
    return_base64: bool
    start_m: int
    tag: list
    title: str
    width_px: int


class GenerateCreateDataRequired(TypedDict):
    data: dict
    ok: bool


class GenerateCreateData(GenerateCreateDataRequired, total=False):
    caption: list
    duration_m: int
    fps: int
    gif_slug: str
    return_base64: bool
    start_m: int
    tag: list
    title: str
    width_px: int


class GrowthRequired(TypedDict):
    action: str


class Growth(GrowthRequired, total=False):
    account_id: str
    actor_id: str
    caption: str
    code: str
    external_account_id: str
    handle: str
    limit: int
    log_exposure: bool
    meme_slug: str
    now: str
    platform: str
    profile: list
    share_slug: str
    surface: str
    week_start: str


class GrowthLoadMatch(TypedDict, total=False):
    account_id: str
    action: str
    actor_id: str
    caption: str
    code: str
    external_account_id: str
    handle: str
    limit: int
    log_exposure: bool
    meme_slug: str
    now: str
    platform: str
    profile: list
    share_slug: str
    surface: str
    week_start: str


class GrowthCreateDataRequired(TypedDict):
    action: str


class GrowthCreateData(GrowthCreateDataRequired, total=False):
    account_id: str
    actor_id: str
    caption: str
    code: str
    external_account_id: str
    handle: str
    limit: int
    log_exposure: bool
    meme_slug: str
    now: str
    platform: str
    profile: list
    share_slug: str
    surface: str
    week_start: str


class ListMeme(TypedDict):
    alt_text: str
    canonical_image_url: str
    created_at: str
    image_url: str
    nsfw_status: str
    share_slug: str
    share_url: str
    share_view: int
    slug: str
    tag: list
    template_slug: str
    title: str
    visibility: str


class ListMemeListMatch(TypedDict, total=False):
    alt_text: str
    canonical_image_url: str
    created_at: str
    image_url: str
    nsfw_status: str
    share_slug: str
    share_url: str
    share_view: int
    slug: str
    tag: list
    template_slug: str
    title: str
    visibility: str


class MediaRequired(TypedDict):
    action: str


class Media(MediaRequired, total=False):
    content_type: str
    expires_in_second: int
    owner_token: str
    path: str
    prefix: str


class MediaCreateDataRequired(TypedDict):
    action: str


class MediaCreateData(MediaCreateDataRequired, total=False):
    content_type: str
    expires_in_second: int
    owner_token: str
    path: str
    prefix: str


class Meme(TypedDict):
    alt_text: str
    canonical_image_url: str
    canva: dict
    caption: list
    created_at: str
    image_url: str
    nsfw_status: str
    overlay: list
    share_slug: str
    share_url: str
    share_view: int
    slug: str
    source_image_url: str
    tag: list
    template_slug: str
    title: str
    visibility: str
    watermark: dict


class MemeLoadMatch(TypedDict):
    id: str


class MemeRemoveMatch(TypedDict):
    id: str


class PublicTemplateMediaItemRequired(TypedDict):
    caption: list
    description: str
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    slug: str
    source_template_id: Any
    tag: list
    width: Any


class PublicTemplateMediaItem(PublicTemplateMediaItemRequired, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption_count: int
    category: list
    duration_m: Any
    example_image_url: Any
    frame_count: Any
    poster_image_url: str
    preview_image_url: str
    quality_status: str
    source_url: str


class PublicTemplateMediaItemLoadMatch(TypedDict):
    slug: str


class StandaloneAgentBootstrapRequired(TypedDict):
    handle: str
    name: str


class StandaloneAgentBootstrap(StandaloneAgentBootstrapRequired, total=False):
    description: str
    locale: str
    style_preset: str
    system_prompt: str
    watermark_text: str
    website_url: str


class StandaloneAgentBootstrapCreateDataRequired(TypedDict):
    handle: str
    name: str


class StandaloneAgentBootstrapCreateData(StandaloneAgentBootstrapCreateDataRequired, total=False):
    description: str
    locale: str
    style_preset: str
    system_prompt: str
    watermark_text: str
    website_url: str


class TemplateRequired(TypedDict):
    description: str
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    slug: str
    source_template_id: Any
    width: Any


class Template(TemplateRequired, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption: list
    caption_count: int
    category: list
    duration_m: int
    example_image_url: Any
    fps: int
    frame_count: Any
    gif_slug: str
    poster_image_url: str
    preview_image_url: str
    quality_status: str
    return_base64: bool
    source_url: str
    start_m: int
    tag: list
    title: str
    width_px: int


class TemplateListMatch(TypedDict, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption: list
    caption_count: int
    category: list
    description: str
    duration_m: int
    example_image_url: Any
    fps: int
    frame_count: Any
    gif_slug: str
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    poster_image_url: str
    preview_image_url: str
    quality_status: str
    return_base64: bool
    slug: str
    source_template_id: Any
    source_url: str
    start_m: int
    tag: list
    title: str
    width: Any
    width_px: int


class TemplateCreateData(TypedDict):
    slug: str


class TemplateSearchRequired(TypedDict):
    caption: list
    description: str
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    slug: str
    source_template_id: Any
    tag: list
    width: Any


class TemplateSearch(TemplateSearchRequired, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption_count: int
    category: list
    duration_m: Any
    example_image_url: Any
    frame_count: Any
    poster_image_url: str
    preview_image_url: str
    quality_status: str
    source_url: str


class TemplateSearchListMatch(TypedDict, total=False):
    animated: bool
    asset_byte: Any
    asset_content_type: str
    box_count: int
    caption: list
    caption_count: int
    category: list
    description: str
    duration_m: Any
    example_image_url: Any
    frame_count: Any
    height: Any
    id: str
    image_url: str
    media_type: str
    name: str
    poster_image_url: str
    preview_image_url: str
    quality_status: str
    slug: str
    source_template_id: Any
    source_url: str
    tag: list
    width: Any


class TrendAlertRequired(TypedDict):
    action: str
    actor_id: str
    alert_id: str
    topic: str


class TrendAlert(TrendAlertRequired, total=False):
    aggressiveness: float
    channel: list
    deliver_all_alert: bool
    event: dict
    explicit_niche: list
    explicit_region: list
    explicit_source: list
    explicit_topic: list
    follower_count: int
    niche: str
    region: str
    source: str


class TrendAlertLoadMatch(TypedDict, total=False):
    action: str
    actor_id: str
    aggressiveness: float
    alert_id: str
    channel: list
    deliver_all_alert: bool
    event: dict
    explicit_niche: list
    explicit_region: list
    explicit_source: list
    explicit_topic: list
    follower_count: int
    niche: str
    region: str
    source: str
    topic: str


class TrendAlertCreateDataRequired(TypedDict):
    action: str
    actor_id: str
    alert_id: str
    topic: str


class TrendAlertCreateData(TrendAlertCreateDataRequired, total=False):
    aggressiveness: float
    channel: list
    deliver_all_alert: bool
    event: dict
    explicit_niche: list
    explicit_region: list
    explicit_source: list
    explicit_topic: list
    follower_count: int
    niche: str
    region: str
    source: str


class UploadCaptionMemeSuccess(TypedDict):
    pass


class UploadCaptionMemeSuccessCreateData(TypedDict):
    pass


class VideoRequired(TypedDict):
    duration_second: float
    input_format: str
    mime_type: str
    output_preset_id: str
    plan_tier: str
    preset_id: str


class Video(VideoRequired, total=False):
    action: str
    asset_id: str
    at_m: float
    audio_asset_id: str
    beat_offset_m: int
    bitrate_kbp: float
    bpm: int
    cancelled: bool
    container: str
    duration_m: float
    easing: str
    error: str
    frame_rate: float
    intensity: float
    job_id: str
    locale: str
    name: str
    offset_m: float
    output_url: str
    progress_percent: float
    project: dict
    project_id: str
    property: str
    source_device_id: str
    source_url: str
    stage: str
    start_m: float
    style_preset_id: str
    sync_to_beat_grid: bool
    tone: str
    track_id: str
    transcript: str
    trend_keyword: list
    type: str
    updated_at: str
    value: float
    watermark_enabled: bool
    watermark_text: str
    worker_id: str


class VideoLoadMatch(TypedDict, total=False):
    action: str
    asset_id: str
    at_m: float
    audio_asset_id: str
    beat_offset_m: int
    bitrate_kbp: float
    bpm: int
    cancelled: bool
    container: str
    duration_m: float
    duration_second: float
    easing: str
    error: str
    frame_rate: float
    input_format: str
    intensity: float
    job_id: str
    locale: str
    mime_type: str
    name: str
    offset_m: float
    output_preset_id: str
    output_url: str
    plan_tier: str
    preset_id: str
    progress_percent: float
    project: dict
    project_id: str
    property: str
    source_device_id: str
    source_url: str
    stage: str
    start_m: float
    style_preset_id: str
    sync_to_beat_grid: bool
    tone: str
    track_id: str
    transcript: str
    trend_keyword: list
    type: str
    updated_at: str
    value: float
    watermark_enabled: bool
    watermark_text: str
    worker_id: str


class VideoCreateDataRequired(TypedDict):
    duration_second: float
    input_format: str
    mime_type: str
    output_preset_id: str
    plan_tier: str
    preset_id: str


class VideoCreateData(VideoCreateDataRequired, total=False):
    action: str
    asset_id: str
    at_m: float
    audio_asset_id: str
    beat_offset_m: int
    bitrate_kbp: float
    bpm: int
    cancelled: bool
    container: str
    duration_m: float
    easing: str
    error: str
    frame_rate: float
    intensity: float
    job_id: str
    locale: str
    name: str
    offset_m: float
    output_url: str
    progress_percent: float
    project: dict
    project_id: str
    property: str
    source_device_id: str
    source_url: str
    stage: str
    start_m: float
    style_preset_id: str
    sync_to_beat_grid: bool
    tone: str
    track_id: str
    transcript: str
    trend_keyword: list
    type: str
    updated_at: str
    value: float
    watermark_enabled: bool
    watermark_text: str
    worker_id: str
