# frozen_string_literal: true

# Typed models for the MemesioContentCreation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Agent entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] style_preset
#   @return [String, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
Agent = Struct.new(
  :description,
  :locale,
  :name,
  :slug,
  :status,
  :style_preset,
  :system_prompt,
  :watermark_text,
  :website_url,
  keyword_init: true
)

# Request payload for Agent#load.
#
# @!attribute [rw] id
#   @return [String, nil]
AgentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Agent#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] style_preset
#   @return [String, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
AgentCreateData = Struct.new(
  :description,
  :locale,
  :name,
  :slug,
  :status,
  :style_preset,
  :system_prompt,
  :watermark_text,
  :website_url,
  keyword_init: true
)

# Request payload for Agent#update.
#
# @!attribute [rw] id
#   @return [String]
AgentUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# AgentInfra entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] chat_id
#   @return [String]
#
# @!attribute [rw] meme_slug
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] payout_reference
#   @return [String, nil]
#
# @!attribute [rw] payout_status
#   @return [String, nil]
#
# @!attribute [rw] phone_or_chat_id
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] proof
#   @return [Hash, nil]
#
# @!attribute [rw] quota_boost_per_day
#   @return [Integer, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] week_start
#   @return [String, nil]
AgentInfra = Struct.new(
  :action,
  :chat_id,
  :meme_slug,
  :metadata,
  :payout_reference,
  :payout_status,
  :phone_or_chat_id,
  :prompt,
  :proof,
  :quota_boost_per_day,
  :scope,
  :user_id,
  :week_start,
  keyword_init: true
)

# Request payload for AgentInfra#load.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] chat_id
#   @return [String, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] payout_reference
#   @return [String, nil]
#
# @!attribute [rw] payout_status
#   @return [String, nil]
#
# @!attribute [rw] phone_or_chat_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] proof
#   @return [Hash, nil]
#
# @!attribute [rw] quota_boost_per_day
#   @return [Integer, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] week_start
#   @return [String, nil]
AgentInfraLoadMatch = Struct.new(
  :action,
  :chat_id,
  :meme_slug,
  :metadata,
  :payout_reference,
  :payout_status,
  :phone_or_chat_id,
  :prompt,
  :proof,
  :quota_boost_per_day,
  :scope,
  :user_id,
  :week_start,
  keyword_init: true
)

# Request payload for AgentInfra#create.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] unlock_id
#   @return [String, nil]
AgentInfraCreateData = Struct.new(
  :agent_id,
  :unlock_id,
  keyword_init: true
)

# Request payload for AgentInfra#remove.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] key_id
#   @return [String]
AgentInfraRemoveMatch = Struct.new(
  :agent_id,
  :key_id,
  keyword_init: true
)

# AiCaption entity data model.
#
# @!attribute [rw] blocked_term
#   @return [Array, nil]
#
# @!attribute [rw] canvas_text
#   @return [Array]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption_set
#   @return [Array, nil]
#
# @!attribute [rw] entity
#   @return [Array, nil]
#
# @!attribute [rw] fallback_used
#   @return [Boolean, nil]
#
# @!attribute [rw] generation_strategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] meme_id
#   @return [String, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] option_count
#   @return [Integer, nil]
#
# @!attribute [rw] owner_token
#   @return [String, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] reference_caption
#   @return [Array, nil]
#
# @!attribute [rw] rewrite_note
#   @return [String, nil]
#
# @!attribute [rw] scene_summary
#   @return [String, nil]
#
# @!attribute [rw] template_description
#   @return [String, nil]
#
# @!attribute [rw] template_name
#   @return [String, nil]
#
# @!attribute [rw] template_tag
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String]
#
# @!attribute [rw] tone_cue
#   @return [Array, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] trend_reference
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] variation_offset
#   @return [Integer, nil]
#
# @!attribute [rw] voice_rule
#   @return [Array, nil]
AiCaption = Struct.new(
  :blocked_term,
  :canvas_text,
  :caption_count,
  :caption_set,
  :entity,
  :fallback_used,
  :generation_strategy,
  :locale,
  :meme_id,
  :meme_slug,
  :name,
  :ok,
  :option_count,
  :owner_token,
  :provider_id,
  :reference_caption,
  :rewrite_note,
  :scene_summary,
  :template_description,
  :template_name,
  :template_tag,
  :tone,
  :tone_cue,
  :trend_keyword,
  :trend_reference,
  :trend_signal,
  :variation_offset,
  :voice_rule,
  keyword_init: true
)

# Request payload for AiCaption#load.
#
# @!attribute [rw] blocked_term
#   @return [Array, nil]
#
# @!attribute [rw] canvas_text
#   @return [Array, nil]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption_set
#   @return [Array, nil]
#
# @!attribute [rw] entity
#   @return [Array, nil]
#
# @!attribute [rw] fallback_used
#   @return [Boolean, nil]
#
# @!attribute [rw] generation_strategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] meme_id
#   @return [String, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] option_count
#   @return [Integer, nil]
#
# @!attribute [rw] owner_token
#   @return [String, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] reference_caption
#   @return [Array, nil]
#
# @!attribute [rw] rewrite_note
#   @return [String, nil]
#
# @!attribute [rw] scene_summary
#   @return [String, nil]
#
# @!attribute [rw] template_description
#   @return [String, nil]
#
# @!attribute [rw] template_name
#   @return [String, nil]
#
# @!attribute [rw] template_tag
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] tone_cue
#   @return [Array, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] trend_reference
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] variation_offset
#   @return [Integer, nil]
#
# @!attribute [rw] voice_rule
#   @return [Array, nil]
AiCaptionLoadMatch = Struct.new(
  :blocked_term,
  :canvas_text,
  :caption_count,
  :caption_set,
  :entity,
  :fallback_used,
  :generation_strategy,
  :locale,
  :meme_id,
  :meme_slug,
  :name,
  :ok,
  :option_count,
  :owner_token,
  :provider_id,
  :reference_caption,
  :rewrite_note,
  :scene_summary,
  :template_description,
  :template_name,
  :template_tag,
  :tone,
  :tone_cue,
  :trend_keyword,
  :trend_reference,
  :trend_signal,
  :variation_offset,
  :voice_rule,
  keyword_init: true
)

# Request payload for AiCaption#create.
#
# @!attribute [rw] blocked_term
#   @return [Array, nil]
#
# @!attribute [rw] canvas_text
#   @return [Array]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption_set
#   @return [Array, nil]
#
# @!attribute [rw] entity
#   @return [Array, nil]
#
# @!attribute [rw] fallback_used
#   @return [Boolean, nil]
#
# @!attribute [rw] generation_strategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] meme_id
#   @return [String, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] option_count
#   @return [Integer, nil]
#
# @!attribute [rw] owner_token
#   @return [String, nil]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] reference_caption
#   @return [Array, nil]
#
# @!attribute [rw] rewrite_note
#   @return [String, nil]
#
# @!attribute [rw] scene_summary
#   @return [String, nil]
#
# @!attribute [rw] template_description
#   @return [String, nil]
#
# @!attribute [rw] template_name
#   @return [String, nil]
#
# @!attribute [rw] template_tag
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String]
#
# @!attribute [rw] tone_cue
#   @return [Array, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] trend_reference
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] variation_offset
#   @return [Integer, nil]
#
# @!attribute [rw] voice_rule
#   @return [Array, nil]
AiCaptionCreateData = Struct.new(
  :blocked_term,
  :canvas_text,
  :caption_count,
  :caption_set,
  :entity,
  :fallback_used,
  :generation_strategy,
  :locale,
  :meme_id,
  :meme_slug,
  :name,
  :ok,
  :option_count,
  :owner_token,
  :provider_id,
  :reference_caption,
  :rewrite_note,
  :scene_summary,
  :template_description,
  :template_name,
  :template_tag,
  :tone,
  :tone_cue,
  :trend_keyword,
  :trend_reference,
  :trend_signal,
  :variation_offset,
  :voice_rule,
  keyword_init: true
)

# AiJob entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] after_state
#   @return [Hash, nil]
#
# @!attribute [rw] attempt
#   @return [Integer, nil]
#
# @!attribute [rw] before_state
#   @return [Hash, nil]
#
# @!attribute [rw] brush_edit
#   @return [Array, nil]
#
# @!attribute [rw] capability
#   @return [String]
#
# @!attribute [rw] celebrity_confidence
#   @return [Float, nil]
#
# @!attribute [rw] consent_attested
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] detected_face_count
#   @return [Float]
#
# @!attribute [rw] edge_refinement
#   @return [Float, nil]
#
# @!attribute [rw] estimated_cost_usd
#   @return [Float, nil]
#
# @!attribute [rw] frame_time_m
#   @return [Float, nil]
#
# @!attribute [rw] height
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] layer_id
#   @return [String]
#
# @!attribute [rw] layer_type
#   @return [String, nil]
#
# @!attribute [rw] max_attempt
#   @return [Integer, nil]
#
# @!attribute [rw] max_face
#   @return [Float, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nsfw_score
#   @return [Float, nil]
#
# @!attribute [rw] output
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] provider_id
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] run_after_m
#   @return [Integer, nil]
#
# @!attribute [rw] source_asset_url
#   @return [String]
#
# @!attribute [rw] source_face_index
#   @return [Float, nil]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target_asset_url
#   @return [String]
#
# @!attribute [rw] target_face_index
#   @return [Float, nil]
#
# @!attribute [rw] timeout_m
#   @return [Integer, nil]
#
# @!attribute [rw] trace_id
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version_id
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Float]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiJob = Struct.new(
  :action,
  :actor_id,
  :after_state,
  :attempt,
  :before_state,
  :brush_edit,
  :capability,
  :celebrity_confidence,
  :consent_attested,
  :created_at,
  :detected_face_count,
  :edge_refinement,
  :estimated_cost_usd,
  :frame_time_m,
  :height,
  :id,
  :input,
  :layer_id,
  :layer_type,
  :max_attempt,
  :max_face,
  :media_type,
  :metadata,
  :nsfw_score,
  :output,
  :project_id,
  :provider_id,
  :reason,
  :run_after_m,
  :source_asset_url,
  :source_face_index,
  :source_image_url,
  :status,
  :target_asset_url,
  :target_face_index,
  :timeout_m,
  :trace_id,
  :updated_at,
  :version_id,
  :width,
  :worker_id,
  :workspace_id,
  keyword_init: true
)

# Request payload for AiJob#load.
#
# @!attribute [rw] id
#   @return [String, nil]
AiJobLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AiJob#create.
#
# @!attribute [rw] job_id
#   @return [String, nil]
AiJobCreateData = Struct.new(
  :job_id,
  keyword_init: true
)

# AiMemeGenerationSucceeded entity data model.
#
# @!attribute [rw] allow_heuristic_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_source
#   @return [String, nil]
#
# @!attribute [rw] correlation_id
#   @return [String, nil]
#
# @!attribute [rw] degraded_from_async
#   @return [Boolean, nil]
#
# @!attribute [rw] editable_caption
#   @return [Array, nil]
#
# @!attribute [rw] flow
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] preferred_provider_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] rewrite_note
#   @return [String, nil]
#
# @!attribute [rw] run_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] tone_cue
#   @return [Array, nil]
#
# @!attribute [rw] variant
#   @return [Array]
#
# @!attribute [rw] variant_count
#   @return [Integer]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiMemeGenerationSucceeded = Struct.new(
  :allow_heuristic_fallback,
  :caption,
  :caption_source,
  :correlation_id,
  :degraded_from_async,
  :editable_caption,
  :flow,
  :image_url,
  :mode,
  :ok,
  :preferred_provider_id,
  :prompt,
  :rewrite_note,
  :run_id,
  :status,
  :template_id,
  :tone,
  :tone_cue,
  :variant,
  :variant_count,
  :workspace_id,
  keyword_init: true
)

# Request payload for AiMemeGenerationSucceeded#create.
#
# @!attribute [rw] allow_heuristic_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_source
#   @return [String, nil]
#
# @!attribute [rw] correlation_id
#   @return [String, nil]
#
# @!attribute [rw] degraded_from_async
#   @return [Boolean, nil]
#
# @!attribute [rw] editable_caption
#   @return [Array, nil]
#
# @!attribute [rw] flow
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] preferred_provider_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] rewrite_note
#   @return [String, nil]
#
# @!attribute [rw] run_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] tone_cue
#   @return [Array, nil]
#
# @!attribute [rw] variant
#   @return [Array]
#
# @!attribute [rw] variant_count
#   @return [Integer]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiMemeGenerationSucceededCreateData = Struct.new(
  :allow_heuristic_fallback,
  :caption,
  :caption_source,
  :correlation_id,
  :degraded_from_async,
  :editable_caption,
  :flow,
  :image_url,
  :mode,
  :ok,
  :preferred_provider_id,
  :prompt,
  :rewrite_note,
  :run_id,
  :status,
  :template_id,
  :tone,
  :tone_cue,
  :variant,
  :variant_count,
  :workspace_id,
  keyword_init: true
)

# AiProvider entity data model.
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] correlation_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mapping_mode
#   @return [String, nil]
#
# @!attribute [rw] max_slot
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] text
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiProvider = Struct.new(
  :actor_id,
  :correlation_id,
  :limit,
  :mapping_mode,
  :max_slot,
  :prompt,
  :source_image_url,
  :text,
  :trend_signal,
  :workspace_id,
  keyword_init: true
)

# Request payload for AiProvider#load.
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] correlation_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mapping_mode
#   @return [String, nil]
#
# @!attribute [rw] max_slot
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] source_image_url
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiProviderLoadMatch = Struct.new(
  :actor_id,
  :correlation_id,
  :limit,
  :mapping_mode,
  :max_slot,
  :prompt,
  :source_image_url,
  :text,
  :trend_signal,
  :workspace_id,
  keyword_init: true
)

# Request payload for AiProvider#create.
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] correlation_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mapping_mode
#   @return [String, nil]
#
# @!attribute [rw] max_slot
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] text
#   @return [Array, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
#
# @!attribute [rw] workspace_id
#   @return [String, nil]
AiProviderCreateData = Struct.new(
  :actor_id,
  :correlation_id,
  :limit,
  :mapping_mode,
  :max_slot,
  :prompt,
  :source_image_url,
  :text,
  :trend_signal,
  :workspace_id,
  keyword_init: true
)

# Analytics entity data model.
class Analytics
end

# Request payload for Analytics#load.
class AnalyticsLoadMatch
end

# Auth entity data model.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
Auth = Struct.new(
  :display_name,
  :email,
  :password,
  keyword_init: true
)

# Request payload for Auth#create.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
AuthCreateData = Struct.new(
  :display_name,
  :email,
  :password,
  keyword_init: true
)

# Billing entity data model.
class Billing
end

# Request payload for Billing#load.
class BillingLoadMatch
end

# Collaboration entity data model.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
Collaboration = Struct.new(
  :author_id,
  :message,
  :project_id,
  keyword_init: true
)

# Request payload for Collaboration#load.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
CollaborationLoadMatch = Struct.new(
  :author_id,
  :message,
  :project_id,
  keyword_init: true
)

# Request payload for Collaboration#create.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
CollaborationCreateData = Struct.new(
  :author_id,
  :message,
  :project_id,
  keyword_init: true
)

# Compliance entity data model.
class Compliance
end

# Request payload for Compliance#load.
class ComplianceLoadMatch
end

# CreateMeme entity data model.
#
# @!attribute [rw] canva
#   @return [Hash]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] generation_run_id
#   @return [Object, nil]
#
# @!attribute [rw] generation_variant_id
#   @return [Object, nil]
#
# @!attribute [rw] image_data_url
#   @return [String]
#
# @!attribute [rw] overlay
#   @return [Array, nil]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] template_slug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] watermark
#   @return [Hash]
CreateMeme = Struct.new(
  :canva,
  :caption,
  :generation_run_id,
  :generation_variant_id,
  :image_data_url,
  :overlay,
  :source_image_url,
  :template_slug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# Request payload for CreateMeme#create.
#
# @!attribute [rw] canva
#   @return [Hash]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] generation_run_id
#   @return [Object, nil]
#
# @!attribute [rw] generation_variant_id
#   @return [Object, nil]
#
# @!attribute [rw] image_data_url
#   @return [String]
#
# @!attribute [rw] overlay
#   @return [Array, nil]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] template_slug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] watermark
#   @return [Hash]
CreateMemeCreateData = Struct.new(
  :canva,
  :caption,
  :generation_run_id,
  :generation_variant_id,
  :image_data_url,
  :overlay,
  :source_image_url,
  :template_slug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# DeveloperApi entity data model.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
DeveloperApi = Struct.new(
  :limit,
  :prompt,
  :trend_signal,
  keyword_init: true
)

# Request payload for DeveloperApi#load.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
DeveloperApiLoadMatch = Struct.new(
  :limit,
  :prompt,
  :trend_signal,
  keyword_init: true
)

# Request payload for DeveloperApi#create.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] trend_signal
#   @return [Array, nil]
DeveloperApiCreateData = Struct.new(
  :limit,
  :prompt,
  :trend_signal,
  keyword_init: true
)

# FreeCaptionMemeSuccess entity data model.
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] template_slug
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] watermark
#   @return [Hash, nil]
FreeCaptionMemeSuccess = Struct.new(
  :caption,
  :template_slug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# Request payload for FreeCaptionMemeSuccess#create.
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] template_slug
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] watermark
#   @return [Hash, nil]
FreeCaptionMemeSuccessCreateData = Struct.new(
  :caption,
  :template_slug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# FreeTemplateSearch entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] caption_count
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] duration_m
#   @return [Object, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] media_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source_template_id
#   @return [Object]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object]
FreeTemplateSearch = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :description,
  :duration_m,
  :example_image_url,
  :frame_count,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :quality_status,
  :slug,
  :source_template_id,
  :source_url,
  :tag,
  :width,
  keyword_init: true
)

# Request payload for FreeTemplateSearch#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Object, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] source_template_id
#   @return [Object, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
FreeTemplateSearchListMatch = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :description,
  :duration_m,
  :example_image_url,
  :frame_count,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :quality_status,
  :slug,
  :source_template_id,
  :source_url,
  :tag,
  :width,
  keyword_init: true
)

# Generate entity data model.
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] duration_m
#   @return [Integer, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] gif_slug
#   @return [String, nil]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] return_base64
#   @return [Boolean, nil]
#
# @!attribute [rw] start_m
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width_px
#   @return [Integer, nil]
Generate = Struct.new(
  :caption,
  :data,
  :duration_m,
  :fps,
  :gif_slug,
  :ok,
  :return_base64,
  :start_m,
  :tag,
  :title,
  :width_px,
  keyword_init: true
)

# Request payload for Generate#create.
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] duration_m
#   @return [Integer, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] gif_slug
#   @return [String, nil]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] return_base64
#   @return [Boolean, nil]
#
# @!attribute [rw] start_m
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width_px
#   @return [Integer, nil]
GenerateCreateData = Struct.new(
  :caption,
  :data,
  :duration_m,
  :fps,
  :gif_slug,
  :ok,
  :return_base64,
  :start_m,
  :tag,
  :title,
  :width_px,
  keyword_init: true
)

# Growth entity data model.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] external_account_id
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] log_exposure
#   @return [Boolean, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profile
#   @return [Array, nil]
#
# @!attribute [rw] share_slug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] week_start
#   @return [String, nil]
Growth = Struct.new(
  :account_id,
  :action,
  :actor_id,
  :caption,
  :code,
  :external_account_id,
  :handle,
  :limit,
  :log_exposure,
  :meme_slug,
  :now,
  :platform,
  :profile,
  :share_slug,
  :surface,
  :week_start,
  keyword_init: true
)

# Request payload for Growth#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] external_account_id
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] log_exposure
#   @return [Boolean, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profile
#   @return [Array, nil]
#
# @!attribute [rw] share_slug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] week_start
#   @return [String, nil]
GrowthLoadMatch = Struct.new(
  :account_id,
  :action,
  :actor_id,
  :caption,
  :code,
  :external_account_id,
  :handle,
  :limit,
  :log_exposure,
  :meme_slug,
  :now,
  :platform,
  :profile,
  :share_slug,
  :surface,
  :week_start,
  keyword_init: true
)

# Request payload for Growth#create.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] external_account_id
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] log_exposure
#   @return [Boolean, nil]
#
# @!attribute [rw] meme_slug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profile
#   @return [Array, nil]
#
# @!attribute [rw] share_slug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] week_start
#   @return [String, nil]
GrowthCreateData = Struct.new(
  :account_id,
  :action,
  :actor_id,
  :caption,
  :code,
  :external_account_id,
  :handle,
  :limit,
  :log_exposure,
  :meme_slug,
  :now,
  :platform,
  :profile,
  :share_slug,
  :surface,
  :week_start,
  keyword_init: true
)

# ListMeme entity data model.
#
# @!attribute [rw] alt_text
#   @return [String]
#
# @!attribute [rw] canonical_image_url
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] nsfw_status
#   @return [String]
#
# @!attribute [rw] share_slug
#   @return [String]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] share_view
#   @return [Integer]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] tag
#   @return [Array]
#
# @!attribute [rw] template_slug
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
ListMeme = Struct.new(
  :alt_text,
  :canonical_image_url,
  :created_at,
  :image_url,
  :nsfw_status,
  :share_slug,
  :share_url,
  :share_view,
  :slug,
  :tag,
  :template_slug,
  :title,
  :visibility,
  keyword_init: true
)

# Request payload for ListMeme#list.
#
# @!attribute [rw] alt_text
#   @return [String, nil]
#
# @!attribute [rw] canonical_image_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] nsfw_status
#   @return [String, nil]
#
# @!attribute [rw] share_slug
#   @return [String, nil]
#
# @!attribute [rw] share_url
#   @return [String, nil]
#
# @!attribute [rw] share_view
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] template_slug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
ListMemeListMatch = Struct.new(
  :alt_text,
  :canonical_image_url,
  :created_at,
  :image_url,
  :nsfw_status,
  :share_slug,
  :share_url,
  :share_view,
  :slug,
  :tag,
  :template_slug,
  :title,
  :visibility,
  keyword_init: true
)

# Media entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] expires_in_second
#   @return [Integer, nil]
#
# @!attribute [rw] owner_token
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
Media = Struct.new(
  :action,
  :content_type,
  :expires_in_second,
  :owner_token,
  :path,
  :prefix,
  keyword_init: true
)

# Request payload for Media#create.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] expires_in_second
#   @return [Integer, nil]
#
# @!attribute [rw] owner_token
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
MediaCreateData = Struct.new(
  :action,
  :content_type,
  :expires_in_second,
  :owner_token,
  :path,
  :prefix,
  keyword_init: true
)

# Meme entity data model.
#
# @!attribute [rw] alt_text
#   @return [String]
#
# @!attribute [rw] canonical_image_url
#   @return [String]
#
# @!attribute [rw] canva
#   @return [Hash]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] nsfw_status
#   @return [String]
#
# @!attribute [rw] overlay
#   @return [Array]
#
# @!attribute [rw] share_slug
#   @return [String]
#
# @!attribute [rw] share_url
#   @return [String]
#
# @!attribute [rw] share_view
#   @return [Integer]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source_image_url
#   @return [String]
#
# @!attribute [rw] tag
#   @return [Array]
#
# @!attribute [rw] template_slug
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
#
# @!attribute [rw] watermark
#   @return [Hash]
Meme = Struct.new(
  :alt_text,
  :canonical_image_url,
  :canva,
  :caption,
  :created_at,
  :image_url,
  :nsfw_status,
  :overlay,
  :share_slug,
  :share_url,
  :share_view,
  :slug,
  :source_image_url,
  :tag,
  :template_slug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# Request payload for Meme#load.
#
# @!attribute [rw] id
#   @return [String]
MemeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Meme#remove.
#
# @!attribute [rw] id
#   @return [String]
MemeRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# PublicTemplateMediaItem entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] duration_m
#   @return [Object, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] media_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] preview_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source_template_id
#   @return [Object]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array]
#
# @!attribute [rw] width
#   @return [Object]
PublicTemplateMediaItem = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :category,
  :description,
  :duration_m,
  :example_image_url,
  :frame_count,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :preview_image_url,
  :quality_status,
  :slug,
  :source_template_id,
  :source_url,
  :tag,
  :width,
  keyword_init: true
)

# Request payload for PublicTemplateMediaItem#load.
#
# @!attribute [rw] slug
#   @return [String]
PublicTemplateMediaItemLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# StandaloneAgentBootstrap entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] style_preset
#   @return [String, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
StandaloneAgentBootstrap = Struct.new(
  :description,
  :handle,
  :locale,
  :name,
  :style_preset,
  :system_prompt,
  :watermark_text,
  :website_url,
  keyword_init: true
)

# Request payload for StandaloneAgentBootstrap#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] style_preset
#   @return [String, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
StandaloneAgentBootstrapCreateData = Struct.new(
  :description,
  :handle,
  :locale,
  :name,
  :style_preset,
  :system_prompt,
  :watermark_text,
  :website_url,
  keyword_init: true
)

# Template entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] duration_m
#   @return [Integer, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] gif_slug
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] media_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] preview_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] return_base64
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source_template_id
#   @return [Object]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] start_m
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Object]
#
# @!attribute [rw] width_px
#   @return [Integer, nil]
Template = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :category,
  :description,
  :duration_m,
  :example_image_url,
  :fps,
  :frame_count,
  :gif_slug,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :preview_image_url,
  :quality_status,
  :return_base64,
  :slug,
  :source_template_id,
  :source_url,
  :start_m,
  :tag,
  :title,
  :width,
  :width_px,
  keyword_init: true
)

# Request payload for Template#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Integer, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] gif_slug
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] preview_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] return_base64
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] source_template_id
#   @return [Object, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] start_m
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
#
# @!attribute [rw] width_px
#   @return [Integer, nil]
TemplateListMatch = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :category,
  :description,
  :duration_m,
  :example_image_url,
  :fps,
  :frame_count,
  :gif_slug,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :preview_image_url,
  :quality_status,
  :return_base64,
  :slug,
  :source_template_id,
  :source_url,
  :start_m,
  :tag,
  :title,
  :width,
  :width_px,
  keyword_init: true
)

# Request payload for Template#create.
#
# @!attribute [rw] slug
#   @return [String]
TemplateCreateData = Struct.new(
  :slug,
  keyword_init: true
)

# TemplateSearch entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] duration_m
#   @return [Object, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String]
#
# @!attribute [rw] media_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] preview_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] source_template_id
#   @return [Object]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array]
#
# @!attribute [rw] width
#   @return [Object]
TemplateSearch = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :category,
  :description,
  :duration_m,
  :example_image_url,
  :frame_count,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :preview_image_url,
  :quality_status,
  :slug,
  :source_template_id,
  :source_url,
  :tag,
  :width,
  keyword_init: true
)

# Request payload for TemplateSearch#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] asset_byte
#   @return [Object, nil]
#
# @!attribute [rw] asset_content_type
#   @return [String, nil]
#
# @!attribute [rw] box_count
#   @return [Integer, nil]
#
# @!attribute [rw] caption
#   @return [Array, nil]
#
# @!attribute [rw] caption_count
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Object, nil]
#
# @!attribute [rw] example_image_url
#   @return [Object, nil]
#
# @!attribute [rw] frame_count
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] poster_image_url
#   @return [String, nil]
#
# @!attribute [rw] preview_image_url
#   @return [String, nil]
#
# @!attribute [rw] quality_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] source_template_id
#   @return [Object, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
TemplateSearchListMatch = Struct.new(
  :animated,
  :asset_byte,
  :asset_content_type,
  :box_count,
  :caption,
  :caption_count,
  :category,
  :description,
  :duration_m,
  :example_image_url,
  :frame_count,
  :height,
  :id,
  :image_url,
  :media_type,
  :name,
  :poster_image_url,
  :preview_image_url,
  :quality_status,
  :slug,
  :source_template_id,
  :source_url,
  :tag,
  :width,
  keyword_init: true
)

# TrendAlert entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actor_id
#   @return [String]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] channel
#   @return [Array, nil]
#
# @!attribute [rw] deliver_all_alert
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicit_niche
#   @return [Array, nil]
#
# @!attribute [rw] explicit_region
#   @return [Array, nil]
#
# @!attribute [rw] explicit_source
#   @return [Array, nil]
#
# @!attribute [rw] explicit_topic
#   @return [Array, nil]
#
# @!attribute [rw] follower_count
#   @return [Integer, nil]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [String]
TrendAlert = Struct.new(
  :action,
  :actor_id,
  :aggressiveness,
  :alert_id,
  :channel,
  :deliver_all_alert,
  :event,
  :explicit_niche,
  :explicit_region,
  :explicit_source,
  :explicit_topic,
  :follower_count,
  :niche,
  :region,
  :source,
  :topic,
  keyword_init: true
)

# Request payload for TrendAlert#load.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] actor_id
#   @return [String, nil]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alert_id
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [Array, nil]
#
# @!attribute [rw] deliver_all_alert
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicit_niche
#   @return [Array, nil]
#
# @!attribute [rw] explicit_region
#   @return [Array, nil]
#
# @!attribute [rw] explicit_source
#   @return [Array, nil]
#
# @!attribute [rw] explicit_topic
#   @return [Array, nil]
#
# @!attribute [rw] follower_count
#   @return [Integer, nil]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [String, nil]
TrendAlertLoadMatch = Struct.new(
  :action,
  :actor_id,
  :aggressiveness,
  :alert_id,
  :channel,
  :deliver_all_alert,
  :event,
  :explicit_niche,
  :explicit_region,
  :explicit_source,
  :explicit_topic,
  :follower_count,
  :niche,
  :region,
  :source,
  :topic,
  keyword_init: true
)

# Request payload for TrendAlert#create.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actor_id
#   @return [String]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] channel
#   @return [Array, nil]
#
# @!attribute [rw] deliver_all_alert
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicit_niche
#   @return [Array, nil]
#
# @!attribute [rw] explicit_region
#   @return [Array, nil]
#
# @!attribute [rw] explicit_source
#   @return [Array, nil]
#
# @!attribute [rw] explicit_topic
#   @return [Array, nil]
#
# @!attribute [rw] follower_count
#   @return [Integer, nil]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [String]
TrendAlertCreateData = Struct.new(
  :action,
  :actor_id,
  :aggressiveness,
  :alert_id,
  :channel,
  :deliver_all_alert,
  :event,
  :explicit_niche,
  :explicit_region,
  :explicit_source,
  :explicit_topic,
  :follower_count,
  :niche,
  :region,
  :source,
  :topic,
  keyword_init: true
)

# UploadCaptionMemeSuccess entity data model.
class UploadCaptionMemeSuccess
end

# Request payload for UploadCaptionMemeSuccess#create.
class UploadCaptionMemeSuccessCreateData
end

# Video entity data model.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] at_m
#   @return [Float, nil]
#
# @!attribute [rw] audio_asset_id
#   @return [String, nil]
#
# @!attribute [rw] beat_offset_m
#   @return [Integer, nil]
#
# @!attribute [rw] bitrate_kbp
#   @return [Float, nil]
#
# @!attribute [rw] bpm
#   @return [Integer, nil]
#
# @!attribute [rw] cancelled
#   @return [Boolean, nil]
#
# @!attribute [rw] container
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Float, nil]
#
# @!attribute [rw] duration_second
#   @return [Float]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] input_format
#   @return [String]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mime_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offset_m
#   @return [Float, nil]
#
# @!attribute [rw] output_preset_id
#   @return [String]
#
# @!attribute [rw] output_url
#   @return [String, nil]
#
# @!attribute [rw] plan_tier
#   @return [String]
#
# @!attribute [rw] preset_id
#   @return [String]
#
# @!attribute [rw] progress_percent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] source_device_id
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] start_m
#   @return [Float, nil]
#
# @!attribute [rw] style_preset_id
#   @return [String, nil]
#
# @!attribute [rw] sync_to_beat_grid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] track_id
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermark_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
Video = Struct.new(
  :action,
  :asset_id,
  :at_m,
  :audio_asset_id,
  :beat_offset_m,
  :bitrate_kbp,
  :bpm,
  :cancelled,
  :container,
  :duration_m,
  :duration_second,
  :easing,
  :error,
  :frame_rate,
  :input_format,
  :intensity,
  :job_id,
  :locale,
  :mime_type,
  :name,
  :offset_m,
  :output_preset_id,
  :output_url,
  :plan_tier,
  :preset_id,
  :progress_percent,
  :project,
  :project_id,
  :property,
  :source_device_id,
  :source_url,
  :stage,
  :start_m,
  :style_preset_id,
  :sync_to_beat_grid,
  :tone,
  :track_id,
  :transcript,
  :trend_keyword,
  :type,
  :updated_at,
  :value,
  :watermark_enabled,
  :watermark_text,
  :worker_id,
  keyword_init: true
)

# Request payload for Video#load.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] at_m
#   @return [Float, nil]
#
# @!attribute [rw] audio_asset_id
#   @return [String, nil]
#
# @!attribute [rw] beat_offset_m
#   @return [Integer, nil]
#
# @!attribute [rw] bitrate_kbp
#   @return [Float, nil]
#
# @!attribute [rw] bpm
#   @return [Integer, nil]
#
# @!attribute [rw] cancelled
#   @return [Boolean, nil]
#
# @!attribute [rw] container
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Float, nil]
#
# @!attribute [rw] duration_second
#   @return [Float, nil]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] input_format
#   @return [String, nil]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mime_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offset_m
#   @return [Float, nil]
#
# @!attribute [rw] output_preset_id
#   @return [String, nil]
#
# @!attribute [rw] output_url
#   @return [String, nil]
#
# @!attribute [rw] plan_tier
#   @return [String, nil]
#
# @!attribute [rw] preset_id
#   @return [String, nil]
#
# @!attribute [rw] progress_percent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] source_device_id
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] start_m
#   @return [Float, nil]
#
# @!attribute [rw] style_preset_id
#   @return [String, nil]
#
# @!attribute [rw] sync_to_beat_grid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] track_id
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermark_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
VideoLoadMatch = Struct.new(
  :action,
  :asset_id,
  :at_m,
  :audio_asset_id,
  :beat_offset_m,
  :bitrate_kbp,
  :bpm,
  :cancelled,
  :container,
  :duration_m,
  :duration_second,
  :easing,
  :error,
  :frame_rate,
  :input_format,
  :intensity,
  :job_id,
  :locale,
  :mime_type,
  :name,
  :offset_m,
  :output_preset_id,
  :output_url,
  :plan_tier,
  :preset_id,
  :progress_percent,
  :project,
  :project_id,
  :property,
  :source_device_id,
  :source_url,
  :stage,
  :start_m,
  :style_preset_id,
  :sync_to_beat_grid,
  :tone,
  :track_id,
  :transcript,
  :trend_keyword,
  :type,
  :updated_at,
  :value,
  :watermark_enabled,
  :watermark_text,
  :worker_id,
  keyword_init: true
)

# Request payload for Video#create.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] at_m
#   @return [Float, nil]
#
# @!attribute [rw] audio_asset_id
#   @return [String, nil]
#
# @!attribute [rw] beat_offset_m
#   @return [Integer, nil]
#
# @!attribute [rw] bitrate_kbp
#   @return [Float, nil]
#
# @!attribute [rw] bpm
#   @return [Integer, nil]
#
# @!attribute [rw] cancelled
#   @return [Boolean, nil]
#
# @!attribute [rw] container
#   @return [String, nil]
#
# @!attribute [rw] duration_m
#   @return [Float, nil]
#
# @!attribute [rw] duration_second
#   @return [Float]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] input_format
#   @return [String]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mime_type
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offset_m
#   @return [Float, nil]
#
# @!attribute [rw] output_preset_id
#   @return [String]
#
# @!attribute [rw] output_url
#   @return [String, nil]
#
# @!attribute [rw] plan_tier
#   @return [String]
#
# @!attribute [rw] preset_id
#   @return [String]
#
# @!attribute [rw] progress_percent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] source_device_id
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] start_m
#   @return [Float, nil]
#
# @!attribute [rw] style_preset_id
#   @return [String, nil]
#
# @!attribute [rw] sync_to_beat_grid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] track_id
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trend_keyword
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermark_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermark_text
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
VideoCreateData = Struct.new(
  :action,
  :asset_id,
  :at_m,
  :audio_asset_id,
  :beat_offset_m,
  :bitrate_kbp,
  :bpm,
  :cancelled,
  :container,
  :duration_m,
  :duration_second,
  :easing,
  :error,
  :frame_rate,
  :input_format,
  :intensity,
  :job_id,
  :locale,
  :mime_type,
  :name,
  :offset_m,
  :output_preset_id,
  :output_url,
  :plan_tier,
  :preset_id,
  :progress_percent,
  :project,
  :project_id,
  :property,
  :source_device_id,
  :source_url,
  :stage,
  :start_m,
  :style_preset_id,
  :sync_to_beat_grid,
  :tone,
  :track_id,
  :transcript,
  :trend_keyword,
  :type,
  :updated_at,
  :value,
  :watermark_enabled,
  :watermark_text,
  :worker_id,
  keyword_init: true
)

