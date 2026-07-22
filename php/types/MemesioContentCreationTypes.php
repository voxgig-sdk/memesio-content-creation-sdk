<?php
declare(strict_types=1);

// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Agent entity data model. */
class Agent
{
    public ?string $description = null;
    public ?string $locale = null;
    public string $name;
    public ?string $slug = null;
    public ?string $status = null;
    public ?string $style_preset = null;
    public ?string $system_prompt = null;
    public ?string $watermark_text = null;
    public ?string $website_url = null;
}

/** Request payload for Agent#load. */
class AgentLoadMatch
{
    public ?string $id = null;
}

/** Request payload for Agent#create. */
class AgentCreateData
{
    public ?string $description = null;
    public ?string $locale = null;
    public string $name;
    public ?string $slug = null;
    public ?string $status = null;
    public ?string $style_preset = null;
    public ?string $system_prompt = null;
    public ?string $watermark_text = null;
    public ?string $website_url = null;
}

/** Request payload for Agent#update. */
class AgentUpdateData
{
    public string $id;
}

/** AgentInfra entity data model. */
class AgentInfra
{
    public string $action;
    public string $chat_id;
    public string $meme_slug;
    public ?array $metadata = null;
    public ?string $payout_reference = null;
    public ?string $payout_status = null;
    public string $phone_or_chat_id;
    public string $prompt;
    public ?array $proof = null;
    public ?int $quota_boost_per_day = null;
    public ?array $scope = null;
    public ?string $user_id = null;
    public ?string $week_start = null;
}

/** Request payload for AgentInfra#load. */
class AgentInfraLoadMatch
{
    public ?string $action = null;
    public ?string $chat_id = null;
    public ?string $meme_slug = null;
    public ?array $metadata = null;
    public ?string $payout_reference = null;
    public ?string $payout_status = null;
    public ?string $phone_or_chat_id = null;
    public ?string $prompt = null;
    public ?array $proof = null;
    public ?int $quota_boost_per_day = null;
    public ?array $scope = null;
    public ?string $user_id = null;
    public ?string $week_start = null;
}

/** Request payload for AgentInfra#create. */
class AgentInfraCreateData
{
    public ?string $agent_id = null;
    public ?string $unlock_id = null;
}

/** Request payload for AgentInfra#remove. */
class AgentInfraRemoveMatch
{
    public string $agent_id;
    public string $key_id;
}

/** AiCaption entity data model. */
class AiCaption
{
    public ?array $blocked_term = null;
    public array $canvas_text;
    public ?int $caption_count = null;
    public ?array $caption_set = null;
    public ?array $entity = null;
    public ?bool $fallback_used = null;
    public ?string $generation_strategy = null;
    public ?string $locale = null;
    public ?string $meme_id = null;
    public ?string $meme_slug = null;
    public string $name;
    public ?bool $ok = null;
    public ?int $option_count = null;
    public ?string $owner_token = null;
    public ?string $provider_id = null;
    public ?array $reference_caption = null;
    public ?string $rewrite_note = null;
    public ?string $scene_summary = null;
    public ?string $template_description = null;
    public ?string $template_name = null;
    public ?array $template_tag = null;
    public string $tone;
    public ?array $tone_cue = null;
    public ?array $trend_keyword = null;
    public ?array $trend_reference = null;
    public ?array $trend_signal = null;
    public ?int $variation_offset = null;
    public ?array $voice_rule = null;
}

/** Request payload for AiCaption#load. */
class AiCaptionLoadMatch
{
    public ?array $blocked_term = null;
    public ?array $canvas_text = null;
    public ?int $caption_count = null;
    public ?array $caption_set = null;
    public ?array $entity = null;
    public ?bool $fallback_used = null;
    public ?string $generation_strategy = null;
    public ?string $locale = null;
    public ?string $meme_id = null;
    public ?string $meme_slug = null;
    public ?string $name = null;
    public ?bool $ok = null;
    public ?int $option_count = null;
    public ?string $owner_token = null;
    public ?string $provider_id = null;
    public ?array $reference_caption = null;
    public ?string $rewrite_note = null;
    public ?string $scene_summary = null;
    public ?string $template_description = null;
    public ?string $template_name = null;
    public ?array $template_tag = null;
    public ?string $tone = null;
    public ?array $tone_cue = null;
    public ?array $trend_keyword = null;
    public ?array $trend_reference = null;
    public ?array $trend_signal = null;
    public ?int $variation_offset = null;
    public ?array $voice_rule = null;
}

/** Request payload for AiCaption#create. */
class AiCaptionCreateData
{
    public ?array $blocked_term = null;
    public array $canvas_text;
    public ?int $caption_count = null;
    public ?array $caption_set = null;
    public ?array $entity = null;
    public ?bool $fallback_used = null;
    public ?string $generation_strategy = null;
    public ?string $locale = null;
    public ?string $meme_id = null;
    public ?string $meme_slug = null;
    public string $name;
    public ?bool $ok = null;
    public ?int $option_count = null;
    public ?string $owner_token = null;
    public ?string $provider_id = null;
    public ?array $reference_caption = null;
    public ?string $rewrite_note = null;
    public ?string $scene_summary = null;
    public ?string $template_description = null;
    public ?string $template_name = null;
    public ?array $template_tag = null;
    public string $tone;
    public ?array $tone_cue = null;
    public ?array $trend_keyword = null;
    public ?array $trend_reference = null;
    public ?array $trend_signal = null;
    public ?int $variation_offset = null;
    public ?array $voice_rule = null;
}

/** AiJob entity data model. */
class AiJob
{
    public string $action;
    public ?string $actor_id = null;
    public ?array $after_state = null;
    public ?int $attempt = null;
    public ?array $before_state = null;
    public ?array $brush_edit = null;
    public string $capability;
    public ?float $celebrity_confidence = null;
    public ?bool $consent_attested = null;
    public ?string $created_at = null;
    public float $detected_face_count;
    public ?float $edge_refinement = null;
    public ?float $estimated_cost_usd = null;
    public ?float $frame_time_m = null;
    public float $height;
    public string $id;
    public ?array $input = null;
    public string $layer_id;
    public ?string $layer_type = null;
    public ?int $max_attempt = null;
    public ?float $max_face = null;
    public ?string $media_type = null;
    public ?array $metadata = null;
    public ?float $nsfw_score = null;
    public ?array $output = null;
    public string $project_id;
    public ?string $provider_id = null;
    public ?string $reason = null;
    public ?int $run_after_m = null;
    public string $source_asset_url;
    public ?float $source_face_index = null;
    public string $source_image_url;
    public string $status;
    public string $target_asset_url;
    public ?float $target_face_index = null;
    public ?int $timeout_m = null;
    public ?string $trace_id = null;
    public ?string $updated_at = null;
    public ?string $version_id = null;
    public float $width;
    public string $worker_id;
    public ?string $workspace_id = null;
}

/** Request payload for AiJob#load. */
class AiJobLoadMatch
{
    public ?string $id = null;
}

/** Request payload for AiJob#create. */
class AiJobCreateData
{
    public ?string $job_id = null;
}

/** AiMemeGenerationSucceeded entity data model. */
class AiMemeGenerationSucceeded
{
    public ?bool $allow_heuristic_fallback = null;
    public ?array $caption = null;
    public ?string $caption_source = null;
    public ?string $correlation_id = null;
    public ?bool $degraded_from_async = null;
    public ?array $editable_caption = null;
    public string $flow;
    public ?string $image_url = null;
    public string $mode;
    public bool $ok;
    public ?string $preferred_provider_id = null;
    public string $prompt;
    public ?string $rewrite_note = null;
    public ?string $run_id = null;
    public string $status;
    public ?string $template_id = null;
    public ?string $tone = null;
    public ?array $tone_cue = null;
    public array $variant;
    public int $variant_count;
    public ?string $workspace_id = null;
}

/** Request payload for AiMemeGenerationSucceeded#create. */
class AiMemeGenerationSucceededCreateData
{
    public ?bool $allow_heuristic_fallback = null;
    public ?array $caption = null;
    public ?string $caption_source = null;
    public ?string $correlation_id = null;
    public ?bool $degraded_from_async = null;
    public ?array $editable_caption = null;
    public string $flow;
    public ?string $image_url = null;
    public string $mode;
    public bool $ok;
    public ?string $preferred_provider_id = null;
    public string $prompt;
    public ?string $rewrite_note = null;
    public ?string $run_id = null;
    public string $status;
    public ?string $template_id = null;
    public ?string $tone = null;
    public ?array $tone_cue = null;
    public array $variant;
    public int $variant_count;
    public ?string $workspace_id = null;
}

/** AiProvider entity data model. */
class AiProvider
{
    public ?string $actor_id = null;
    public ?string $correlation_id = null;
    public ?float $limit = null;
    public ?string $mapping_mode = null;
    public ?int $max_slot = null;
    public string $prompt;
    public string $source_image_url;
    public ?array $text = null;
    public ?array $trend_signal = null;
    public ?string $workspace_id = null;
}

/** Request payload for AiProvider#load. */
class AiProviderLoadMatch
{
    public ?string $actor_id = null;
    public ?string $correlation_id = null;
    public ?float $limit = null;
    public ?string $mapping_mode = null;
    public ?int $max_slot = null;
    public ?string $prompt = null;
    public ?string $source_image_url = null;
    public ?array $text = null;
    public ?array $trend_signal = null;
    public ?string $workspace_id = null;
}

/** Request payload for AiProvider#create. */
class AiProviderCreateData
{
    public ?string $actor_id = null;
    public ?string $correlation_id = null;
    public ?float $limit = null;
    public ?string $mapping_mode = null;
    public ?int $max_slot = null;
    public string $prompt;
    public string $source_image_url;
    public ?array $text = null;
    public ?array $trend_signal = null;
    public ?string $workspace_id = null;
}

/** Analytics entity data model. */
class Analytics
{
}

/** Request payload for Analytics#load. */
class AnalyticsLoadMatch
{
}

/** Auth entity data model. */
class Auth
{
    public ?string $display_name = null;
    public string $email;
    public string $password;
}

/** Request payload for Auth#create. */
class AuthCreateData
{
    public ?string $display_name = null;
    public string $email;
    public string $password;
}

/** Billing entity data model. */
class Billing
{
}

/** Request payload for Billing#load. */
class BillingLoadMatch
{
}

/** Collaboration entity data model. */
class Collaboration
{
    public ?string $author_id = null;
    public string $message;
    public string $project_id;
}

/** Request payload for Collaboration#load. */
class CollaborationLoadMatch
{
    public ?string $author_id = null;
    public ?string $message = null;
    public ?string $project_id = null;
}

/** Request payload for Collaboration#create. */
class CollaborationCreateData
{
    public ?string $author_id = null;
    public string $message;
    public string $project_id;
}

/** Compliance entity data model. */
class Compliance
{
}

/** Request payload for Compliance#load. */
class ComplianceLoadMatch
{
}

/** CreateMeme entity data model. */
class CreateMeme
{
    public array $canva;
    public array $caption;
    public mixed $generation_run_id = null;
    public mixed $generation_variant_id = null;
    public string $image_data_url;
    public ?array $overlay = null;
    public string $source_image_url;
    public ?string $template_slug = null;
    public ?string $title = null;
    public ?string $visibility = null;
    public array $watermark;
}

/** Request payload for CreateMeme#create. */
class CreateMemeCreateData
{
    public array $canva;
    public array $caption;
    public mixed $generation_run_id = null;
    public mixed $generation_variant_id = null;
    public string $image_data_url;
    public ?array $overlay = null;
    public string $source_image_url;
    public ?string $template_slug = null;
    public ?string $title = null;
    public ?string $visibility = null;
    public array $watermark;
}

/** DeveloperApi entity data model. */
class DeveloperApi
{
    public ?float $limit = null;
    public string $prompt;
    public ?array $trend_signal = null;
}

/** Request payload for DeveloperApi#load. */
class DeveloperApiLoadMatch
{
    public ?float $limit = null;
    public ?string $prompt = null;
    public ?array $trend_signal = null;
}

/** Request payload for DeveloperApi#create. */
class DeveloperApiCreateData
{
    public ?float $limit = null;
    public string $prompt;
    public ?array $trend_signal = null;
}

/** FreeCaptionMemeSuccess entity data model. */
class FreeCaptionMemeSuccess
{
    public array $caption;
    public string $template_slug;
    public ?string $title = null;
    public ?string $visibility = null;
    public ?array $watermark = null;
}

/** Request payload for FreeCaptionMemeSuccess#create. */
class FreeCaptionMemeSuccessCreateData
{
    public array $caption;
    public string $template_slug;
    public ?string $title = null;
    public ?string $visibility = null;
    public ?array $watermark = null;
}

/** FreeTemplateSearch entity data model. */
class FreeTemplateSearch
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public int $box_count;
    public array $caption;
    public int $caption_count;
    public string $description;
    public mixed $duration_m = null;
    public mixed $example_image_url = null;
    public mixed $frame_count = null;
    public mixed $height;
    public string $id;
    public string $image_url;
    public string $media_type;
    public string $name;
    public ?string $poster_image_url = null;
    public ?string $quality_status = null;
    public string $slug;
    public mixed $source_template_id;
    public ?string $source_url = null;
    public ?array $tag = null;
    public mixed $width;
}

/** Request payload for FreeTemplateSearch#list. */
class FreeTemplateSearchListMatch
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public ?array $caption = null;
    public ?int $caption_count = null;
    public ?string $description = null;
    public mixed $duration_m = null;
    public mixed $example_image_url = null;
    public mixed $frame_count = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $media_type = null;
    public ?string $name = null;
    public ?string $poster_image_url = null;
    public ?string $quality_status = null;
    public ?string $slug = null;
    public mixed $source_template_id = null;
    public ?string $source_url = null;
    public ?array $tag = null;
    public mixed $width = null;
}

/** Generate entity data model. */
class Generate
{
    public ?array $caption = null;
    public array $data;
    public ?int $duration_m = null;
    public ?int $fps = null;
    public ?string $gif_slug = null;
    public bool $ok;
    public ?bool $return_base64 = null;
    public ?int $start_m = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?int $width_px = null;
}

/** Request payload for Generate#create. */
class GenerateCreateData
{
    public ?array $caption = null;
    public array $data;
    public ?int $duration_m = null;
    public ?int $fps = null;
    public ?string $gif_slug = null;
    public bool $ok;
    public ?bool $return_base64 = null;
    public ?int $start_m = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?int $width_px = null;
}

/** Growth entity data model. */
class Growth
{
    public ?string $account_id = null;
    public string $action;
    public ?string $actor_id = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $external_account_id = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $log_exposure = null;
    public ?string $meme_slug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profile = null;
    public ?string $share_slug = null;
    public ?string $surface = null;
    public ?string $week_start = null;
}

/** Request payload for Growth#load. */
class GrowthLoadMatch
{
    public ?string $account_id = null;
    public ?string $action = null;
    public ?string $actor_id = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $external_account_id = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $log_exposure = null;
    public ?string $meme_slug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profile = null;
    public ?string $share_slug = null;
    public ?string $surface = null;
    public ?string $week_start = null;
}

/** Request payload for Growth#create. */
class GrowthCreateData
{
    public ?string $account_id = null;
    public string $action;
    public ?string $actor_id = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $external_account_id = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $log_exposure = null;
    public ?string $meme_slug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profile = null;
    public ?string $share_slug = null;
    public ?string $surface = null;
    public ?string $week_start = null;
}

/** ListMeme entity data model. */
class ListMeme
{
    public string $alt_text;
    public string $canonical_image_url;
    public string $created_at;
    public string $image_url;
    public string $nsfw_status;
    public string $share_slug;
    public string $share_url;
    public int $share_view;
    public string $slug;
    public array $tag;
    public string $template_slug;
    public string $title;
    public string $visibility;
}

/** Request payload for ListMeme#list. */
class ListMemeListMatch
{
    public ?string $alt_text = null;
    public ?string $canonical_image_url = null;
    public ?string $created_at = null;
    public ?string $image_url = null;
    public ?string $nsfw_status = null;
    public ?string $share_slug = null;
    public ?string $share_url = null;
    public ?int $share_view = null;
    public ?string $slug = null;
    public ?array $tag = null;
    public ?string $template_slug = null;
    public ?string $title = null;
    public ?string $visibility = null;
}

/** Media entity data model. */
class Media
{
    public string $action;
    public ?string $content_type = null;
    public ?int $expires_in_second = null;
    public ?string $owner_token = null;
    public ?string $path = null;
    public ?string $prefix = null;
}

/** Request payload for Media#create. */
class MediaCreateData
{
    public string $action;
    public ?string $content_type = null;
    public ?int $expires_in_second = null;
    public ?string $owner_token = null;
    public ?string $path = null;
    public ?string $prefix = null;
}

/** Meme entity data model. */
class Meme
{
    public string $alt_text;
    public string $canonical_image_url;
    public array $canva;
    public array $caption;
    public string $created_at;
    public string $image_url;
    public string $nsfw_status;
    public array $overlay;
    public string $share_slug;
    public string $share_url;
    public int $share_view;
    public string $slug;
    public string $source_image_url;
    public array $tag;
    public string $template_slug;
    public string $title;
    public string $visibility;
    public array $watermark;
}

/** Request payload for Meme#load. */
class MemeLoadMatch
{
    public string $id;
}

/** Request payload for Meme#remove. */
class MemeRemoveMatch
{
    public string $id;
}

/** PublicTemplateMediaItem entity data model. */
class PublicTemplateMediaItem
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public array $caption;
    public ?int $caption_count = null;
    public ?array $category = null;
    public string $description;
    public mixed $duration_m = null;
    public mixed $example_image_url = null;
    public mixed $frame_count = null;
    public mixed $height;
    public string $id;
    public string $image_url;
    public string $media_type;
    public string $name;
    public ?string $poster_image_url = null;
    public ?string $preview_image_url = null;
    public ?string $quality_status = null;
    public string $slug;
    public mixed $source_template_id;
    public ?string $source_url = null;
    public array $tag;
    public mixed $width;
}

/** Request payload for PublicTemplateMediaItem#load. */
class PublicTemplateMediaItemLoadMatch
{
    public string $slug;
}

/** StandaloneAgentBootstrap entity data model. */
class StandaloneAgentBootstrap
{
    public ?string $description = null;
    public string $handle;
    public ?string $locale = null;
    public string $name;
    public ?string $style_preset = null;
    public ?string $system_prompt = null;
    public ?string $watermark_text = null;
    public ?string $website_url = null;
}

/** Request payload for StandaloneAgentBootstrap#create. */
class StandaloneAgentBootstrapCreateData
{
    public ?string $description = null;
    public string $handle;
    public ?string $locale = null;
    public string $name;
    public ?string $style_preset = null;
    public ?string $system_prompt = null;
    public ?string $watermark_text = null;
    public ?string $website_url = null;
}

/** Template entity data model. */
class Template
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public ?array $caption = null;
    public ?int $caption_count = null;
    public ?array $category = null;
    public string $description;
    public ?int $duration_m = null;
    public mixed $example_image_url = null;
    public ?int $fps = null;
    public mixed $frame_count = null;
    public ?string $gif_slug = null;
    public mixed $height;
    public string $id;
    public string $image_url;
    public string $media_type;
    public string $name;
    public ?string $poster_image_url = null;
    public ?string $preview_image_url = null;
    public ?string $quality_status = null;
    public ?bool $return_base64 = null;
    public string $slug;
    public mixed $source_template_id;
    public ?string $source_url = null;
    public ?int $start_m = null;
    public ?array $tag = null;
    public ?string $title = null;
    public mixed $width;
    public ?int $width_px = null;
}

/** Request payload for Template#list. */
class TemplateListMatch
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public ?array $caption = null;
    public ?int $caption_count = null;
    public ?array $category = null;
    public ?string $description = null;
    public ?int $duration_m = null;
    public mixed $example_image_url = null;
    public ?int $fps = null;
    public mixed $frame_count = null;
    public ?string $gif_slug = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $media_type = null;
    public ?string $name = null;
    public ?string $poster_image_url = null;
    public ?string $preview_image_url = null;
    public ?string $quality_status = null;
    public ?bool $return_base64 = null;
    public ?string $slug = null;
    public mixed $source_template_id = null;
    public ?string $source_url = null;
    public ?int $start_m = null;
    public ?array $tag = null;
    public ?string $title = null;
    public mixed $width = null;
    public ?int $width_px = null;
}

/** Request payload for Template#create. */
class TemplateCreateData
{
    public string $slug;
}

/** TemplateSearch entity data model. */
class TemplateSearch
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public array $caption;
    public ?int $caption_count = null;
    public ?array $category = null;
    public string $description;
    public mixed $duration_m = null;
    public mixed $example_image_url = null;
    public mixed $frame_count = null;
    public mixed $height;
    public string $id;
    public string $image_url;
    public string $media_type;
    public string $name;
    public ?string $poster_image_url = null;
    public ?string $preview_image_url = null;
    public ?string $quality_status = null;
    public string $slug;
    public mixed $source_template_id;
    public ?string $source_url = null;
    public array $tag;
    public mixed $width;
}

/** Request payload for TemplateSearch#list. */
class TemplateSearchListMatch
{
    public ?bool $animated = null;
    public mixed $asset_byte = null;
    public ?string $asset_content_type = null;
    public ?int $box_count = null;
    public ?array $caption = null;
    public ?int $caption_count = null;
    public ?array $category = null;
    public ?string $description = null;
    public mixed $duration_m = null;
    public mixed $example_image_url = null;
    public mixed $frame_count = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $media_type = null;
    public ?string $name = null;
    public ?string $poster_image_url = null;
    public ?string $preview_image_url = null;
    public ?string $quality_status = null;
    public ?string $slug = null;
    public mixed $source_template_id = null;
    public ?string $source_url = null;
    public ?array $tag = null;
    public mixed $width = null;
}

/** TrendAlert entity data model. */
class TrendAlert
{
    public string $action;
    public string $actor_id;
    public ?float $aggressiveness = null;
    public string $alert_id;
    public ?array $channel = null;
    public ?bool $deliver_all_alert = null;
    public ?array $event = null;
    public ?array $explicit_niche = null;
    public ?array $explicit_region = null;
    public ?array $explicit_source = null;
    public ?array $explicit_topic = null;
    public ?int $follower_count = null;
    public ?string $niche = null;
    public ?string $region = null;
    public ?string $source = null;
    public string $topic;
}

/** Request payload for TrendAlert#load. */
class TrendAlertLoadMatch
{
    public ?string $action = null;
    public ?string $actor_id = null;
    public ?float $aggressiveness = null;
    public ?string $alert_id = null;
    public ?array $channel = null;
    public ?bool $deliver_all_alert = null;
    public ?array $event = null;
    public ?array $explicit_niche = null;
    public ?array $explicit_region = null;
    public ?array $explicit_source = null;
    public ?array $explicit_topic = null;
    public ?int $follower_count = null;
    public ?string $niche = null;
    public ?string $region = null;
    public ?string $source = null;
    public ?string $topic = null;
}

/** Request payload for TrendAlert#create. */
class TrendAlertCreateData
{
    public string $action;
    public string $actor_id;
    public ?float $aggressiveness = null;
    public string $alert_id;
    public ?array $channel = null;
    public ?bool $deliver_all_alert = null;
    public ?array $event = null;
    public ?array $explicit_niche = null;
    public ?array $explicit_region = null;
    public ?array $explicit_source = null;
    public ?array $explicit_topic = null;
    public ?int $follower_count = null;
    public ?string $niche = null;
    public ?string $region = null;
    public ?string $source = null;
    public string $topic;
}

/** UploadCaptionMemeSuccess entity data model. */
class UploadCaptionMemeSuccess
{
}

/** Request payload for UploadCaptionMemeSuccess#create. */
class UploadCaptionMemeSuccessCreateData
{
}

/** Video entity data model. */
class Video
{
    public ?string $action = null;
    public ?string $asset_id = null;
    public ?float $at_m = null;
    public ?string $audio_asset_id = null;
    public ?int $beat_offset_m = null;
    public ?float $bitrate_kbp = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $duration_m = null;
    public float $duration_second;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frame_rate = null;
    public string $input_format;
    public ?float $intensity = null;
    public ?string $job_id = null;
    public ?string $locale = null;
    public string $mime_type;
    public ?string $name = null;
    public ?float $offset_m = null;
    public string $output_preset_id;
    public ?string $output_url = null;
    public string $plan_tier;
    public string $preset_id;
    public ?float $progress_percent = null;
    public ?array $project = null;
    public ?string $project_id = null;
    public ?string $property = null;
    public ?string $source_device_id = null;
    public ?string $source_url = null;
    public ?string $stage = null;
    public ?float $start_m = null;
    public ?string $style_preset_id = null;
    public ?bool $sync_to_beat_grid = null;
    public ?string $tone = null;
    public ?string $track_id = null;
    public ?string $transcript = null;
    public ?array $trend_keyword = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?float $value = null;
    public ?bool $watermark_enabled = null;
    public ?string $watermark_text = null;
    public ?string $worker_id = null;
}

/** Request payload for Video#load. */
class VideoLoadMatch
{
    public ?string $action = null;
    public ?string $asset_id = null;
    public ?float $at_m = null;
    public ?string $audio_asset_id = null;
    public ?int $beat_offset_m = null;
    public ?float $bitrate_kbp = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $duration_m = null;
    public ?float $duration_second = null;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frame_rate = null;
    public ?string $input_format = null;
    public ?float $intensity = null;
    public ?string $job_id = null;
    public ?string $locale = null;
    public ?string $mime_type = null;
    public ?string $name = null;
    public ?float $offset_m = null;
    public ?string $output_preset_id = null;
    public ?string $output_url = null;
    public ?string $plan_tier = null;
    public ?string $preset_id = null;
    public ?float $progress_percent = null;
    public ?array $project = null;
    public ?string $project_id = null;
    public ?string $property = null;
    public ?string $source_device_id = null;
    public ?string $source_url = null;
    public ?string $stage = null;
    public ?float $start_m = null;
    public ?string $style_preset_id = null;
    public ?bool $sync_to_beat_grid = null;
    public ?string $tone = null;
    public ?string $track_id = null;
    public ?string $transcript = null;
    public ?array $trend_keyword = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?float $value = null;
    public ?bool $watermark_enabled = null;
    public ?string $watermark_text = null;
    public ?string $worker_id = null;
}

/** Request payload for Video#create. */
class VideoCreateData
{
    public ?string $action = null;
    public ?string $asset_id = null;
    public ?float $at_m = null;
    public ?string $audio_asset_id = null;
    public ?int $beat_offset_m = null;
    public ?float $bitrate_kbp = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $duration_m = null;
    public float $duration_second;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frame_rate = null;
    public string $input_format;
    public ?float $intensity = null;
    public ?string $job_id = null;
    public ?string $locale = null;
    public string $mime_type;
    public ?string $name = null;
    public ?float $offset_m = null;
    public string $output_preset_id;
    public ?string $output_url = null;
    public string $plan_tier;
    public string $preset_id;
    public ?float $progress_percent = null;
    public ?array $project = null;
    public ?string $project_id = null;
    public ?string $property = null;
    public ?string $source_device_id = null;
    public ?string $source_url = null;
    public ?string $stage = null;
    public ?float $start_m = null;
    public ?string $style_preset_id = null;
    public ?bool $sync_to_beat_grid = null;
    public ?string $tone = null;
    public ?string $track_id = null;
    public ?string $transcript = null;
    public ?array $trend_keyword = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?float $value = null;
    public ?bool $watermark_enabled = null;
    public ?string $watermark_text = null;
    public ?string $worker_id = null;
}

