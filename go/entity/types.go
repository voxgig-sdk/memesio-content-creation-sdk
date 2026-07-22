// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Agent is the typed data model for the agent entity.
type Agent struct {
	Description *string `json:"description,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	StylePreset *string `json:"style_preset,omitempty"`
	SystemPrompt *string `json:"system_prompt,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// AgentCreateData is the typed request payload for Agent.CreateTyped.
type AgentCreateData struct {
	Description *string `json:"description,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	StylePreset *string `json:"style_preset,omitempty"`
	SystemPrompt *string `json:"system_prompt,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// AgentUpdateData is the typed request payload for Agent.UpdateTyped.
type AgentUpdateData struct {
	Id string `json:"id"`
}

// AgentInfra is the typed data model for the agent_infra entity.
type AgentInfra struct {
	Action string `json:"action"`
	ChatId string `json:"chat_id"`
	MemeSlug string `json:"meme_slug"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	PayoutReference *string `json:"payout_reference,omitempty"`
	PayoutStatus *string `json:"payout_status,omitempty"`
	PhoneOrChatId string `json:"phone_or_chat_id"`
	Prompt string `json:"prompt"`
	Proof *map[string]any `json:"proof,omitempty"`
	QuotaBoostPerDay *int `json:"quota_boost_per_day,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// AgentInfraLoadMatch is the typed request payload for AgentInfra.LoadTyped.
type AgentInfraLoadMatch struct {
	Action *string `json:"action,omitempty"`
	ChatId *string `json:"chat_id,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	PayoutReference *string `json:"payout_reference,omitempty"`
	PayoutStatus *string `json:"payout_status,omitempty"`
	PhoneOrChatId *string `json:"phone_or_chat_id,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	Proof *map[string]any `json:"proof,omitempty"`
	QuotaBoostPerDay *int `json:"quota_boost_per_day,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// AgentInfraCreateData is the typed request payload for AgentInfra.CreateTyped.
type AgentInfraCreateData struct {
	AgentId *string `json:"agent_id,omitempty"`
	UnlockId *string `json:"unlock_id,omitempty"`
}

// AgentInfraRemoveMatch is the typed request payload for AgentInfra.RemoveTyped.
type AgentInfraRemoveMatch struct {
	AgentId string `json:"agent_id"`
	KeyId string `json:"key_id"`
}

// AiCaption is the typed data model for the ai_caption entity.
type AiCaption struct {
	BlockedTerm *[]any `json:"blocked_term,omitempty"`
	CanvasText []any `json:"canvas_text"`
	CaptionCount *int `json:"caption_count,omitempty"`
	CaptionSet *[]any `json:"caption_set,omitempty"`
	Entity *[]any `json:"entity,omitempty"`
	FallbackUsed *bool `json:"fallback_used,omitempty"`
	GenerationStrategy *string `json:"generation_strategy,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MemeId *string `json:"meme_id,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Name string `json:"name"`
	Ok *bool `json:"ok,omitempty"`
	OptionCount *int `json:"option_count,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	ReferenceCaption *[]any `json:"reference_caption,omitempty"`
	RewriteNote *string `json:"rewrite_note,omitempty"`
	SceneSummary *string `json:"scene_summary,omitempty"`
	TemplateDescription *string `json:"template_description,omitempty"`
	TemplateName *string `json:"template_name,omitempty"`
	TemplateTag *[]any `json:"template_tag,omitempty"`
	Tone string `json:"tone"`
	ToneCue *[]any `json:"tone_cue,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	TrendReference *[]any `json:"trend_reference,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	VariationOffset *int `json:"variation_offset,omitempty"`
	VoiceRule *[]any `json:"voice_rule,omitempty"`
}

// AiCaptionLoadMatch is the typed request payload for AiCaption.LoadTyped.
type AiCaptionLoadMatch struct {
	BlockedTerm *[]any `json:"blocked_term,omitempty"`
	CanvasText *[]any `json:"canvas_text,omitempty"`
	CaptionCount *int `json:"caption_count,omitempty"`
	CaptionSet *[]any `json:"caption_set,omitempty"`
	Entity *[]any `json:"entity,omitempty"`
	FallbackUsed *bool `json:"fallback_used,omitempty"`
	GenerationStrategy *string `json:"generation_strategy,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MemeId *string `json:"meme_id,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Name *string `json:"name,omitempty"`
	Ok *bool `json:"ok,omitempty"`
	OptionCount *int `json:"option_count,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	ReferenceCaption *[]any `json:"reference_caption,omitempty"`
	RewriteNote *string `json:"rewrite_note,omitempty"`
	SceneSummary *string `json:"scene_summary,omitempty"`
	TemplateDescription *string `json:"template_description,omitempty"`
	TemplateName *string `json:"template_name,omitempty"`
	TemplateTag *[]any `json:"template_tag,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCue *[]any `json:"tone_cue,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	TrendReference *[]any `json:"trend_reference,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	VariationOffset *int `json:"variation_offset,omitempty"`
	VoiceRule *[]any `json:"voice_rule,omitempty"`
}

// AiCaptionCreateData is the typed request payload for AiCaption.CreateTyped.
type AiCaptionCreateData struct {
	BlockedTerm *[]any `json:"blocked_term,omitempty"`
	CanvasText []any `json:"canvas_text"`
	CaptionCount *int `json:"caption_count,omitempty"`
	CaptionSet *[]any `json:"caption_set,omitempty"`
	Entity *[]any `json:"entity,omitempty"`
	FallbackUsed *bool `json:"fallback_used,omitempty"`
	GenerationStrategy *string `json:"generation_strategy,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MemeId *string `json:"meme_id,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Name string `json:"name"`
	Ok *bool `json:"ok,omitempty"`
	OptionCount *int `json:"option_count,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	ReferenceCaption *[]any `json:"reference_caption,omitempty"`
	RewriteNote *string `json:"rewrite_note,omitempty"`
	SceneSummary *string `json:"scene_summary,omitempty"`
	TemplateDescription *string `json:"template_description,omitempty"`
	TemplateName *string `json:"template_name,omitempty"`
	TemplateTag *[]any `json:"template_tag,omitempty"`
	Tone string `json:"tone"`
	ToneCue *[]any `json:"tone_cue,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	TrendReference *[]any `json:"trend_reference,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	VariationOffset *int `json:"variation_offset,omitempty"`
	VoiceRule *[]any `json:"voice_rule,omitempty"`
}

// AiJob is the typed data model for the ai_job entity.
type AiJob struct {
	Action string `json:"action"`
	ActorId *string `json:"actor_id,omitempty"`
	AfterState *map[string]any `json:"after_state,omitempty"`
	Attempt *int `json:"attempt,omitempty"`
	BeforeState *map[string]any `json:"before_state,omitempty"`
	BrushEdit *[]any `json:"brush_edit,omitempty"`
	Capability string `json:"capability"`
	CelebrityConfidence *float64 `json:"celebrity_confidence,omitempty"`
	ConsentAttested *bool `json:"consent_attested,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DetectedFaceCount float64 `json:"detected_face_count"`
	EdgeRefinement *float64 `json:"edge_refinement,omitempty"`
	EstimatedCostUsd *float64 `json:"estimated_cost_usd,omitempty"`
	FrameTimeM *float64 `json:"frame_time_m,omitempty"`
	Height float64 `json:"height"`
	Id string `json:"id"`
	Input *map[string]any `json:"input,omitempty"`
	LayerId string `json:"layer_id"`
	LayerType *string `json:"layer_type,omitempty"`
	MaxAttempt *int `json:"max_attempt,omitempty"`
	MaxFace *float64 `json:"max_face,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NsfwScore *float64 `json:"nsfw_score,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	ProjectId string `json:"project_id"`
	ProviderId *string `json:"provider_id,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RunAfterM *int `json:"run_after_m,omitempty"`
	SourceAssetUrl string `json:"source_asset_url"`
	SourceFaceIndex *float64 `json:"source_face_index,omitempty"`
	SourceImageUrl string `json:"source_image_url"`
	Status string `json:"status"`
	TargetAssetUrl string `json:"target_asset_url"`
	TargetFaceIndex *float64 `json:"target_face_index,omitempty"`
	TimeoutM *int `json:"timeout_m,omitempty"`
	TraceId *string `json:"trace_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
	Width float64 `json:"width"`
	WorkerId string `json:"worker_id"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// AiJobLoadMatch is the typed request payload for AiJob.LoadTyped.
type AiJobLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// AiJobCreateData is the typed request payload for AiJob.CreateTyped.
type AiJobCreateData struct {
	JobId *string `json:"job_id,omitempty"`
}

// AiMemeGenerationSucceeded is the typed data model for the ai_meme_generation_succeeded entity.
type AiMemeGenerationSucceeded struct {
	AllowHeuristicFallback *bool `json:"allow_heuristic_fallback,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionSource *string `json:"caption_source,omitempty"`
	CorrelationId *string `json:"correlation_id,omitempty"`
	DegradedFromAsync *bool `json:"degraded_from_async,omitempty"`
	EditableCaption *[]any `json:"editable_caption,omitempty"`
	Flow string `json:"flow"`
	ImageUrl *string `json:"image_url,omitempty"`
	Mode string `json:"mode"`
	Ok bool `json:"ok"`
	PreferredProviderId *string `json:"preferred_provider_id,omitempty"`
	Prompt string `json:"prompt"`
	RewriteNote *string `json:"rewrite_note,omitempty"`
	RunId *string `json:"run_id,omitempty"`
	Status string `json:"status"`
	TemplateId *string `json:"template_id,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCue *[]any `json:"tone_cue,omitempty"`
	Variant []any `json:"variant"`
	VariantCount int `json:"variant_count"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// AiMemeGenerationSucceededCreateData is the typed request payload for AiMemeGenerationSucceeded.CreateTyped.
type AiMemeGenerationSucceededCreateData struct {
	AllowHeuristicFallback *bool `json:"allow_heuristic_fallback,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionSource *string `json:"caption_source,omitempty"`
	CorrelationId *string `json:"correlation_id,omitempty"`
	DegradedFromAsync *bool `json:"degraded_from_async,omitempty"`
	EditableCaption *[]any `json:"editable_caption,omitempty"`
	Flow string `json:"flow"`
	ImageUrl *string `json:"image_url,omitempty"`
	Mode string `json:"mode"`
	Ok bool `json:"ok"`
	PreferredProviderId *string `json:"preferred_provider_id,omitempty"`
	Prompt string `json:"prompt"`
	RewriteNote *string `json:"rewrite_note,omitempty"`
	RunId *string `json:"run_id,omitempty"`
	Status string `json:"status"`
	TemplateId *string `json:"template_id,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCue *[]any `json:"tone_cue,omitempty"`
	Variant []any `json:"variant"`
	VariantCount int `json:"variant_count"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// AiProvider is the typed data model for the ai_provider entity.
type AiProvider struct {
	ActorId *string `json:"actor_id,omitempty"`
	CorrelationId *string `json:"correlation_id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MappingMode *string `json:"mapping_mode,omitempty"`
	MaxSlot *int `json:"max_slot,omitempty"`
	Prompt string `json:"prompt"`
	SourceImageUrl string `json:"source_image_url"`
	Text *[]any `json:"text,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// AiProviderLoadMatch is the typed request payload for AiProvider.LoadTyped.
type AiProviderLoadMatch struct {
	ActorId *string `json:"actor_id,omitempty"`
	CorrelationId *string `json:"correlation_id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MappingMode *string `json:"mapping_mode,omitempty"`
	MaxSlot *int `json:"max_slot,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	SourceImageUrl *string `json:"source_image_url,omitempty"`
	Text *[]any `json:"text,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// AiProviderCreateData is the typed request payload for AiProvider.CreateTyped.
type AiProviderCreateData struct {
	ActorId *string `json:"actor_id,omitempty"`
	CorrelationId *string `json:"correlation_id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MappingMode *string `json:"mapping_mode,omitempty"`
	MaxSlot *int `json:"max_slot,omitempty"`
	Prompt string `json:"prompt"`
	SourceImageUrl string `json:"source_image_url"`
	Text *[]any `json:"text,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// Analytics is the typed data model for the analytics entity.
type Analytics struct {
}

// AnalyticsLoadMatch is the typed request payload for Analytics.LoadTyped.
type AnalyticsLoadMatch struct {
}

// Auth is the typed data model for the auth entity.
type Auth struct {
	DisplayName *string `json:"display_name,omitempty"`
	Email string `json:"email"`
	Password string `json:"password"`
}

// AuthCreateData is the typed request payload for Auth.CreateTyped.
type AuthCreateData struct {
	DisplayName *string `json:"display_name,omitempty"`
	Email string `json:"email"`
	Password string `json:"password"`
}

// Billing is the typed data model for the billing entity.
type Billing struct {
}

// BillingLoadMatch is the typed request payload for Billing.LoadTyped.
type BillingLoadMatch struct {
}

// Collaboration is the typed data model for the collaboration entity.
type Collaboration struct {
	AuthorId *string `json:"author_id,omitempty"`
	Message string `json:"message"`
	ProjectId string `json:"project_id"`
}

// CollaborationLoadMatch is the typed request payload for Collaboration.LoadTyped.
type CollaborationLoadMatch struct {
	AuthorId *string `json:"author_id,omitempty"`
	Message *string `json:"message,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// CollaborationCreateData is the typed request payload for Collaboration.CreateTyped.
type CollaborationCreateData struct {
	AuthorId *string `json:"author_id,omitempty"`
	Message string `json:"message"`
	ProjectId string `json:"project_id"`
}

// Compliance is the typed data model for the compliance entity.
type Compliance struct {
}

// ComplianceLoadMatch is the typed request payload for Compliance.LoadTyped.
type ComplianceLoadMatch struct {
}

// CreateMeme is the typed data model for the create_meme entity.
type CreateMeme struct {
	Canva map[string]any `json:"canva"`
	Caption []any `json:"caption"`
	GenerationRunId *any `json:"generation_run_id,omitempty"`
	GenerationVariantId *any `json:"generation_variant_id,omitempty"`
	ImageDataUrl string `json:"image_data_url"`
	Overlay *[]any `json:"overlay,omitempty"`
	SourceImageUrl string `json:"source_image_url"`
	TemplateSlug *string `json:"template_slug,omitempty"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark map[string]any `json:"watermark"`
}

// CreateMemeCreateData is the typed request payload for CreateMeme.CreateTyped.
type CreateMemeCreateData struct {
	Canva map[string]any `json:"canva"`
	Caption []any `json:"caption"`
	GenerationRunId *any `json:"generation_run_id,omitempty"`
	GenerationVariantId *any `json:"generation_variant_id,omitempty"`
	ImageDataUrl string `json:"image_data_url"`
	Overlay *[]any `json:"overlay,omitempty"`
	SourceImageUrl string `json:"source_image_url"`
	TemplateSlug *string `json:"template_slug,omitempty"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark map[string]any `json:"watermark"`
}

// DeveloperApi is the typed data model for the developer_api entity.
type DeveloperApi struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt string `json:"prompt"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
}

// DeveloperApiLoadMatch is the typed request payload for DeveloperApi.LoadTyped.
type DeveloperApiLoadMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
}

// DeveloperApiCreateData is the typed request payload for DeveloperApi.CreateTyped.
type DeveloperApiCreateData struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt string `json:"prompt"`
	TrendSignal *[]any `json:"trend_signal,omitempty"`
}

// FreeCaptionMemeSuccess is the typed data model for the free_caption_meme_success entity.
type FreeCaptionMemeSuccess struct {
	Caption []any `json:"caption"`
	TemplateSlug string `json:"template_slug"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark *map[string]any `json:"watermark,omitempty"`
}

// FreeCaptionMemeSuccessCreateData is the typed request payload for FreeCaptionMemeSuccess.CreateTyped.
type FreeCaptionMemeSuccessCreateData struct {
	Caption []any `json:"caption"`
	TemplateSlug string `json:"template_slug"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark *map[string]any `json:"watermark,omitempty"`
}

// FreeTemplateSearch is the typed data model for the free_template_search entity.
type FreeTemplateSearch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount int `json:"box_count"`
	Caption []any `json:"caption"`
	CaptionCount int `json:"caption_count"`
	Description string `json:"description"`
	DurationM *any `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"image_url"`
	MediaType string `json:"media_type"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"source_template_id"`
	SourceUrl *string `json:"source_url,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Width any `json:"width"`
}

// FreeTemplateSearchListMatch is the typed request payload for FreeTemplateSearch.ListTyped.
type FreeTemplateSearchListMatch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Description *string `json:"description,omitempty"`
	DurationM *any `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	Height *any `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Name *string `json:"name,omitempty"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SourceTemplateId *any `json:"source_template_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Width *any `json:"width,omitempty"`
}

// Generate is the typed data model for the generate entity.
type Generate struct {
	Caption *[]any `json:"caption,omitempty"`
	Data map[string]any `json:"data"`
	DurationM *int `json:"duration_m,omitempty"`
	Fps *int `json:"fps,omitempty"`
	GifSlug *string `json:"gif_slug,omitempty"`
	Ok bool `json:"ok"`
	ReturnBase64 *bool `json:"return_base64,omitempty"`
	StartM *int `json:"start_m,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	WidthPx *int `json:"width_px,omitempty"`
}

// GenerateCreateData is the typed request payload for Generate.CreateTyped.
type GenerateCreateData struct {
	Caption *[]any `json:"caption,omitempty"`
	Data map[string]any `json:"data"`
	DurationM *int `json:"duration_m,omitempty"`
	Fps *int `json:"fps,omitempty"`
	GifSlug *string `json:"gif_slug,omitempty"`
	Ok bool `json:"ok"`
	ReturnBase64 *bool `json:"return_base64,omitempty"`
	StartM *int `json:"start_m,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	WidthPx *int `json:"width_px,omitempty"`
}

// Growth is the typed data model for the growth entity.
type Growth struct {
	AccountId *string `json:"account_id,omitempty"`
	Action string `json:"action"`
	ActorId *string `json:"actor_id,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Code *string `json:"code,omitempty"`
	ExternalAccountId *string `json:"external_account_id,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"log_exposure,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Now *string `json:"now,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Profile *[]any `json:"profile,omitempty"`
	ShareSlug *string `json:"share_slug,omitempty"`
	Surface *string `json:"surface,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// GrowthLoadMatch is the typed request payload for Growth.LoadTyped.
type GrowthLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Action *string `json:"action,omitempty"`
	ActorId *string `json:"actor_id,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Code *string `json:"code,omitempty"`
	ExternalAccountId *string `json:"external_account_id,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"log_exposure,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Now *string `json:"now,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Profile *[]any `json:"profile,omitempty"`
	ShareSlug *string `json:"share_slug,omitempty"`
	Surface *string `json:"surface,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// GrowthCreateData is the typed request payload for Growth.CreateTyped.
type GrowthCreateData struct {
	AccountId *string `json:"account_id,omitempty"`
	Action string `json:"action"`
	ActorId *string `json:"actor_id,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Code *string `json:"code,omitempty"`
	ExternalAccountId *string `json:"external_account_id,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"log_exposure,omitempty"`
	MemeSlug *string `json:"meme_slug,omitempty"`
	Now *string `json:"now,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Profile *[]any `json:"profile,omitempty"`
	ShareSlug *string `json:"share_slug,omitempty"`
	Surface *string `json:"surface,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// ListMeme is the typed data model for the list_meme entity.
type ListMeme struct {
	AltText string `json:"alt_text"`
	CanonicalImageUrl string `json:"canonical_image_url"`
	CreatedAt string `json:"created_at"`
	ImageUrl string `json:"image_url"`
	NsfwStatus string `json:"nsfw_status"`
	ShareSlug string `json:"share_slug"`
	ShareUrl string `json:"share_url"`
	ShareView int `json:"share_view"`
	Slug string `json:"slug"`
	Tag []any `json:"tag"`
	TemplateSlug string `json:"template_slug"`
	Title string `json:"title"`
	Visibility string `json:"visibility"`
}

// ListMemeListMatch is the typed request payload for ListMeme.ListTyped.
type ListMemeListMatch struct {
	AltText *string `json:"alt_text,omitempty"`
	CanonicalImageUrl *string `json:"canonical_image_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	NsfwStatus *string `json:"nsfw_status,omitempty"`
	ShareSlug *string `json:"share_slug,omitempty"`
	ShareUrl *string `json:"share_url,omitempty"`
	ShareView *int `json:"share_view,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	TemplateSlug *string `json:"template_slug,omitempty"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// Media is the typed data model for the media entity.
type Media struct {
	Action string `json:"action"`
	ContentType *string `json:"content_type,omitempty"`
	ExpiresInSecond *int `json:"expires_in_second,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	Path *string `json:"path,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}

// MediaCreateData is the typed request payload for Media.CreateTyped.
type MediaCreateData struct {
	Action string `json:"action"`
	ContentType *string `json:"content_type,omitempty"`
	ExpiresInSecond *int `json:"expires_in_second,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	Path *string `json:"path,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}

// Meme is the typed data model for the meme entity.
type Meme struct {
	AltText string `json:"alt_text"`
	CanonicalImageUrl string `json:"canonical_image_url"`
	Canva map[string]any `json:"canva"`
	Caption []any `json:"caption"`
	CreatedAt string `json:"created_at"`
	ImageUrl string `json:"image_url"`
	NsfwStatus string `json:"nsfw_status"`
	Overlay []any `json:"overlay"`
	ShareSlug string `json:"share_slug"`
	ShareUrl string `json:"share_url"`
	ShareView int `json:"share_view"`
	Slug string `json:"slug"`
	SourceImageUrl string `json:"source_image_url"`
	Tag []any `json:"tag"`
	TemplateSlug string `json:"template_slug"`
	Title string `json:"title"`
	Visibility string `json:"visibility"`
	Watermark map[string]any `json:"watermark"`
}

// MemeLoadMatch is the typed request payload for Meme.LoadTyped.
type MemeLoadMatch struct {
	Id string `json:"id"`
}

// MemeRemoveMatch is the typed request payload for Meme.RemoveTyped.
type MemeRemoveMatch struct {
	Id string `json:"id"`
}

// PublicTemplateMediaItem is the typed data model for the public_template_media_item entity.
type PublicTemplateMediaItem struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption []any `json:"caption"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Category *[]any `json:"category,omitempty"`
	Description string `json:"description"`
	DurationM *any `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"image_url"`
	MediaType string `json:"media_type"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	PreviewImageUrl *string `json:"preview_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"source_template_id"`
	SourceUrl *string `json:"source_url,omitempty"`
	Tag []any `json:"tag"`
	Width any `json:"width"`
}

// PublicTemplateMediaItemLoadMatch is the typed request payload for PublicTemplateMediaItem.LoadTyped.
type PublicTemplateMediaItemLoadMatch struct {
	Slug string `json:"slug"`
}

// StandaloneAgentBootstrap is the typed data model for the standalone_agent_bootstrap entity.
type StandaloneAgentBootstrap struct {
	Description *string `json:"description,omitempty"`
	Handle string `json:"handle"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	StylePreset *string `json:"style_preset,omitempty"`
	SystemPrompt *string `json:"system_prompt,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// StandaloneAgentBootstrapCreateData is the typed request payload for StandaloneAgentBootstrap.CreateTyped.
type StandaloneAgentBootstrapCreateData struct {
	Description *string `json:"description,omitempty"`
	Handle string `json:"handle"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	StylePreset *string `json:"style_preset,omitempty"`
	SystemPrompt *string `json:"system_prompt,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// Template is the typed data model for the template entity.
type Template struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Category *[]any `json:"category,omitempty"`
	Description string `json:"description"`
	DurationM *int `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	Fps *int `json:"fps,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	GifSlug *string `json:"gif_slug,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"image_url"`
	MediaType string `json:"media_type"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	PreviewImageUrl *string `json:"preview_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	ReturnBase64 *bool `json:"return_base64,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"source_template_id"`
	SourceUrl *string `json:"source_url,omitempty"`
	StartM *int `json:"start_m,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	Width any `json:"width"`
	WidthPx *int `json:"width_px,omitempty"`
}

// TemplateListMatch is the typed request payload for Template.ListTyped.
type TemplateListMatch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Category *[]any `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	DurationM *int `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	Fps *int `json:"fps,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	GifSlug *string `json:"gif_slug,omitempty"`
	Height *any `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Name *string `json:"name,omitempty"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	PreviewImageUrl *string `json:"preview_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	ReturnBase64 *bool `json:"return_base64,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SourceTemplateId *any `json:"source_template_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	StartM *int `json:"start_m,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	Width *any `json:"width,omitempty"`
	WidthPx *int `json:"width_px,omitempty"`
}

// TemplateCreateData is the typed request payload for Template.CreateTyped.
type TemplateCreateData struct {
	Slug string `json:"slug"`
}

// TemplateSearch is the typed data model for the template_search entity.
type TemplateSearch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption []any `json:"caption"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Category *[]any `json:"category,omitempty"`
	Description string `json:"description"`
	DurationM *any `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"image_url"`
	MediaType string `json:"media_type"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	PreviewImageUrl *string `json:"preview_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"source_template_id"`
	SourceUrl *string `json:"source_url,omitempty"`
	Tag []any `json:"tag"`
	Width any `json:"width"`
}

// TemplateSearchListMatch is the typed request payload for TemplateSearch.ListTyped.
type TemplateSearchListMatch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetByte *any `json:"asset_byte,omitempty"`
	AssetContentType *string `json:"asset_content_type,omitempty"`
	BoxCount *int `json:"box_count,omitempty"`
	Caption *[]any `json:"caption,omitempty"`
	CaptionCount *int `json:"caption_count,omitempty"`
	Category *[]any `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	DurationM *any `json:"duration_m,omitempty"`
	ExampleImageUrl *any `json:"example_image_url,omitempty"`
	FrameCount *any `json:"frame_count,omitempty"`
	Height *any `json:"height,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Name *string `json:"name,omitempty"`
	PosterImageUrl *string `json:"poster_image_url,omitempty"`
	PreviewImageUrl *string `json:"preview_image_url,omitempty"`
	QualityStatus *string `json:"quality_status,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SourceTemplateId *any `json:"source_template_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Width *any `json:"width,omitempty"`
}

// TrendAlert is the typed data model for the trend_alert entity.
type TrendAlert struct {
	Action string `json:"action"`
	ActorId string `json:"actor_id"`
	Aggressiveness *float64 `json:"aggressiveness,omitempty"`
	AlertId string `json:"alert_id"`
	Channel *[]any `json:"channel,omitempty"`
	DeliverAllAlert *bool `json:"deliver_all_alert,omitempty"`
	Event *map[string]any `json:"event,omitempty"`
	ExplicitNiche *[]any `json:"explicit_niche,omitempty"`
	ExplicitRegion *[]any `json:"explicit_region,omitempty"`
	ExplicitSource *[]any `json:"explicit_source,omitempty"`
	ExplicitTopic *[]any `json:"explicit_topic,omitempty"`
	FollowerCount *int `json:"follower_count,omitempty"`
	Niche *string `json:"niche,omitempty"`
	Region *string `json:"region,omitempty"`
	Source *string `json:"source,omitempty"`
	Topic string `json:"topic"`
}

// TrendAlertLoadMatch is the typed request payload for TrendAlert.LoadTyped.
type TrendAlertLoadMatch struct {
	Action *string `json:"action,omitempty"`
	ActorId *string `json:"actor_id,omitempty"`
	Aggressiveness *float64 `json:"aggressiveness,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Channel *[]any `json:"channel,omitempty"`
	DeliverAllAlert *bool `json:"deliver_all_alert,omitempty"`
	Event *map[string]any `json:"event,omitempty"`
	ExplicitNiche *[]any `json:"explicit_niche,omitempty"`
	ExplicitRegion *[]any `json:"explicit_region,omitempty"`
	ExplicitSource *[]any `json:"explicit_source,omitempty"`
	ExplicitTopic *[]any `json:"explicit_topic,omitempty"`
	FollowerCount *int `json:"follower_count,omitempty"`
	Niche *string `json:"niche,omitempty"`
	Region *string `json:"region,omitempty"`
	Source *string `json:"source,omitempty"`
	Topic *string `json:"topic,omitempty"`
}

// TrendAlertCreateData is the typed request payload for TrendAlert.CreateTyped.
type TrendAlertCreateData struct {
	Action string `json:"action"`
	ActorId string `json:"actor_id"`
	Aggressiveness *float64 `json:"aggressiveness,omitempty"`
	AlertId string `json:"alert_id"`
	Channel *[]any `json:"channel,omitempty"`
	DeliverAllAlert *bool `json:"deliver_all_alert,omitempty"`
	Event *map[string]any `json:"event,omitempty"`
	ExplicitNiche *[]any `json:"explicit_niche,omitempty"`
	ExplicitRegion *[]any `json:"explicit_region,omitempty"`
	ExplicitSource *[]any `json:"explicit_source,omitempty"`
	ExplicitTopic *[]any `json:"explicit_topic,omitempty"`
	FollowerCount *int `json:"follower_count,omitempty"`
	Niche *string `json:"niche,omitempty"`
	Region *string `json:"region,omitempty"`
	Source *string `json:"source,omitempty"`
	Topic string `json:"topic"`
}

// UploadCaptionMemeSuccess is the typed data model for the upload_caption_meme_success entity.
type UploadCaptionMemeSuccess struct {
}

// UploadCaptionMemeSuccessCreateData is the typed request payload for UploadCaptionMemeSuccess.CreateTyped.
type UploadCaptionMemeSuccessCreateData struct {
}

// Video is the typed data model for the video entity.
type Video struct {
	Action *string `json:"action,omitempty"`
	AssetId *string `json:"asset_id,omitempty"`
	AtM *float64 `json:"at_m,omitempty"`
	AudioAssetId *string `json:"audio_asset_id,omitempty"`
	BeatOffsetM *int `json:"beat_offset_m,omitempty"`
	BitrateKbp *float64 `json:"bitrate_kbp,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Cancelled *bool `json:"cancelled,omitempty"`
	Container *string `json:"container,omitempty"`
	DurationM *float64 `json:"duration_m,omitempty"`
	DurationSecond float64 `json:"duration_second"`
	Easing *string `json:"easing,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameRate *float64 `json:"frame_rate,omitempty"`
	InputFormat string `json:"input_format"`
	Intensity *float64 `json:"intensity,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MimeType string `json:"mime_type"`
	Name *string `json:"name,omitempty"`
	OffsetM *float64 `json:"offset_m,omitempty"`
	OutputPresetId string `json:"output_preset_id"`
	OutputUrl *string `json:"output_url,omitempty"`
	PlanTier string `json:"plan_tier"`
	PresetId string `json:"preset_id"`
	ProgressPercent *float64 `json:"progress_percent,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Property *string `json:"property,omitempty"`
	SourceDeviceId *string `json:"source_device_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartM *float64 `json:"start_m,omitempty"`
	StylePresetId *string `json:"style_preset_id,omitempty"`
	SyncToBeatGrid *bool `json:"sync_to_beat_grid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	TrackId *string `json:"track_id,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *float64 `json:"value,omitempty"`
	WatermarkEnabled *bool `json:"watermark_enabled,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
}

// VideoLoadMatch is the typed request payload for Video.LoadTyped.
type VideoLoadMatch struct {
	Action *string `json:"action,omitempty"`
	AssetId *string `json:"asset_id,omitempty"`
	AtM *float64 `json:"at_m,omitempty"`
	AudioAssetId *string `json:"audio_asset_id,omitempty"`
	BeatOffsetM *int `json:"beat_offset_m,omitempty"`
	BitrateKbp *float64 `json:"bitrate_kbp,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Cancelled *bool `json:"cancelled,omitempty"`
	Container *string `json:"container,omitempty"`
	DurationM *float64 `json:"duration_m,omitempty"`
	DurationSecond *float64 `json:"duration_second,omitempty"`
	Easing *string `json:"easing,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameRate *float64 `json:"frame_rate,omitempty"`
	InputFormat *string `json:"input_format,omitempty"`
	Intensity *float64 `json:"intensity,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MimeType *string `json:"mime_type,omitempty"`
	Name *string `json:"name,omitempty"`
	OffsetM *float64 `json:"offset_m,omitempty"`
	OutputPresetId *string `json:"output_preset_id,omitempty"`
	OutputUrl *string `json:"output_url,omitempty"`
	PlanTier *string `json:"plan_tier,omitempty"`
	PresetId *string `json:"preset_id,omitempty"`
	ProgressPercent *float64 `json:"progress_percent,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Property *string `json:"property,omitempty"`
	SourceDeviceId *string `json:"source_device_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartM *float64 `json:"start_m,omitempty"`
	StylePresetId *string `json:"style_preset_id,omitempty"`
	SyncToBeatGrid *bool `json:"sync_to_beat_grid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	TrackId *string `json:"track_id,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *float64 `json:"value,omitempty"`
	WatermarkEnabled *bool `json:"watermark_enabled,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
}

// VideoCreateData is the typed request payload for Video.CreateTyped.
type VideoCreateData struct {
	Action *string `json:"action,omitempty"`
	AssetId *string `json:"asset_id,omitempty"`
	AtM *float64 `json:"at_m,omitempty"`
	AudioAssetId *string `json:"audio_asset_id,omitempty"`
	BeatOffsetM *int `json:"beat_offset_m,omitempty"`
	BitrateKbp *float64 `json:"bitrate_kbp,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Cancelled *bool `json:"cancelled,omitempty"`
	Container *string `json:"container,omitempty"`
	DurationM *float64 `json:"duration_m,omitempty"`
	DurationSecond float64 `json:"duration_second"`
	Easing *string `json:"easing,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameRate *float64 `json:"frame_rate,omitempty"`
	InputFormat string `json:"input_format"`
	Intensity *float64 `json:"intensity,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MimeType string `json:"mime_type"`
	Name *string `json:"name,omitempty"`
	OffsetM *float64 `json:"offset_m,omitempty"`
	OutputPresetId string `json:"output_preset_id"`
	OutputUrl *string `json:"output_url,omitempty"`
	PlanTier string `json:"plan_tier"`
	PresetId string `json:"preset_id"`
	ProgressPercent *float64 `json:"progress_percent,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Property *string `json:"property,omitempty"`
	SourceDeviceId *string `json:"source_device_id,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartM *float64 `json:"start_m,omitempty"`
	StylePresetId *string `json:"style_preset_id,omitempty"`
	SyncToBeatGrid *bool `json:"sync_to_beat_grid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	TrackId *string `json:"track_id,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeyword *[]any `json:"trend_keyword,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *float64 `json:"value,omitempty"`
	WatermarkEnabled *bool `json:"watermark_enabled,omitempty"`
	WatermarkText *string `json:"watermark_text,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
