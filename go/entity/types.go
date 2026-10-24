// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/core"
)

// Agent is the typed data model for the agent entity.
type Agent struct {
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
}

// AgentCreateData is the typed request payload for Agent.CreateTyped.
type AgentCreateData struct {
	Description *string `json:"description,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
}

// AgentUpdateData is the typed request payload for Agent.UpdateTyped.
type AgentUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
}

// AgentInfra is the typed data model for the agent_infra entity.
type AgentInfra struct {
}

// AgentInfraLoadMatch is the typed request payload for AgentInfra.LoadTyped.
type AgentInfraLoadMatch struct {
	Limit *int `json:"limit,omitempty"`
	WeekStart *string `json:"week_start,omitempty"`
}

// AgentInfraCreateData is the typed request payload for AgentInfra.CreateTyped.
type AgentInfraCreateData struct {
	Action string `json:"action"`
	ChatId string `json:"chatId"`
	Id *string `json:"id,omitempty"`
	MemeSlug string `json:"memeSlug"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	PayoutReference *string `json:"payoutReference,omitempty"`
	PayoutStatus *string `json:"payoutStatus,omitempty"`
	PhoneOrChatId string `json:"phoneOrChatId"`
	Prompt string `json:"prompt"`
	Proof *map[string]any `json:"proof,omitempty"`
	QuotaBoostPerDay *int `json:"quotaBoostPerDay,omitempty"`
	UserId *string `json:"userId,omitempty"`
	WeekStart *string `json:"weekStart,omitempty"`
}

// AgentInfraRemoveMatch is the typed request payload for AgentInfra.RemoveTyped.
type AgentInfraRemoveMatch struct {
	AgentId string `json:"agent_id"`
	KeyId string `json:"key_id"`
}

// AiCaption is the typed data model for the ai_caption entity.
type AiCaption struct {
}

// AiCaptionLoadMatch is the typed request payload for AiCaption.LoadTyped.
type AiCaptionLoadMatch struct {
	BlockedTerms *[]any `json:"blockedTerms,omitempty"`
	CanvasText *[]any `json:"canvasText,omitempty"`
	CaptionCount *int `json:"captionCount,omitempty"`
	CaptionSets *[]any `json:"captionSets,omitempty"`
	Entities *[]any `json:"entities,omitempty"`
	FallbackUsed *bool `json:"fallbackUsed,omitempty"`
	GenerationStrategy *string `json:"generationStrategy,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MemeId *string `json:"memeId,omitempty"`
	MemeSlug *string `json:"memeSlug,omitempty"`
	Name *string `json:"name,omitempty"`
	Ok *bool `json:"ok,omitempty"`
	OptionCount *int `json:"optionCount,omitempty"`
	OwnerToken *string `json:"ownerToken,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	ReferenceCaptions *[]any `json:"referenceCaptions,omitempty"`
	RewriteNote *string `json:"rewriteNote,omitempty"`
	SceneSummary *string `json:"sceneSummary,omitempty"`
	TemplateDescription *string `json:"templateDescription,omitempty"`
	TemplateName *string `json:"templateName,omitempty"`
	TemplateTags *[]any `json:"templateTags,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCues *[]any `json:"toneCues,omitempty"`
	TrendKeywords *[]any `json:"trendKeywords,omitempty"`
	TrendReferences *[]any `json:"trendReferences,omitempty"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
	VariationOffset *int `json:"variationOffset,omitempty"`
	VoiceRules *[]any `json:"voiceRules,omitempty"`
}

// AiCaptionCreateData is the typed request payload for AiCaption.CreateTyped.
type AiCaptionCreateData struct {
	BlockedTerms *[]any `json:"blockedTerms,omitempty"`
	CanvasText []any `json:"canvasText"`
	CaptionCount *int `json:"captionCount,omitempty"`
	CaptionSets *[]any `json:"captionSets,omitempty"`
	Entities *[]any `json:"entities,omitempty"`
	FallbackUsed *bool `json:"fallbackUsed,omitempty"`
	GenerationStrategy *string `json:"generationStrategy,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MemeId *string `json:"memeId,omitempty"`
	MemeSlug *string `json:"memeSlug,omitempty"`
	Name string `json:"name"`
	Ok *bool `json:"ok,omitempty"`
	OptionCount *int `json:"optionCount,omitempty"`
	OwnerToken *string `json:"ownerToken,omitempty"`
	ProviderId *string `json:"providerId,omitempty"`
	ReferenceCaptions *[]any `json:"referenceCaptions,omitempty"`
	RewriteNote *string `json:"rewriteNote,omitempty"`
	SceneSummary *string `json:"sceneSummary,omitempty"`
	TemplateDescription *string `json:"templateDescription,omitempty"`
	TemplateName *string `json:"templateName,omitempty"`
	TemplateTags *[]any `json:"templateTags,omitempty"`
	Tone string `json:"tone"`
	ToneCues *[]any `json:"toneCues,omitempty"`
	TrendKeywords *[]any `json:"trendKeywords,omitempty"`
	TrendReferences *[]any `json:"trendReferences,omitempty"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
	VariationOffset *int `json:"variationOffset,omitempty"`
	VoiceRules *[]any `json:"voiceRules,omitempty"`
}

// AiJob is the typed data model for the ai_job entity.
type AiJob struct {
}

// AiJobLoadMatch is the typed request payload for AiJob.LoadTyped.
type AiJobLoadMatch struct {
	Id string `json:"id"`
}

// AiJobCreateData is the typed request payload for AiJob.CreateTyped.
type AiJobCreateData struct {
	Action string `json:"action"`
	ActorId *string `json:"actorId,omitempty"`
	AfterState *map[string]any `json:"afterState,omitempty"`
	BeforeState *map[string]any `json:"beforeState,omitempty"`
	BrushEdits *[]any `json:"brushEdits,omitempty"`
	Capability string `json:"capability"`
	CelebrityConfidence *float64 `json:"celebrityConfidence,omitempty"`
	ConsentAttested *bool `json:"consentAttested,omitempty"`
	DetectedFaceCount float64 `json:"detectedFaceCount"`
	EdgeRefinement *float64 `json:"edgeRefinement,omitempty"`
	FrameTimeMs *float64 `json:"frameTimeMs,omitempty"`
	Height float64 `json:"height"`
	Input *map[string]any `json:"input,omitempty"`
	LayerId string `json:"layerId"`
	LayerType *string `json:"layerType,omitempty"`
	MaxAttempts *int `json:"maxAttempts,omitempty"`
	MaxFaces *float64 `json:"maxFaces,omitempty"`
	MediaType string `json:"mediaType"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NsfwScore *float64 `json:"nsfwScore,omitempty"`
	ProjectId string `json:"projectId"`
	RunAfterMs *int `json:"runAfterMs,omitempty"`
	SourceAssetUrl string `json:"sourceAssetUrl"`
	SourceFaceIndex *float64 `json:"sourceFaceIndex,omitempty"`
	SourceImageUrl string `json:"sourceImageUrl"`
	TargetAssetUrl string `json:"targetAssetUrl"`
	TargetFaceIndex *float64 `json:"targetFaceIndex,omitempty"`
	TimeoutMs *int `json:"timeoutMs,omitempty"`
	TraceId *string `json:"traceId,omitempty"`
	VersionId *string `json:"versionId,omitempty"`
	Width float64 `json:"width"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiMemeGenerationSucceeded is the typed data model for the ai_meme_generation_succeeded entity.
type AiMemeGenerationSucceeded struct {
}

// AiMemeGenerationSucceededCreateData is the typed request payload for AiMemeGenerationSucceeded.CreateTyped.
type AiMemeGenerationSucceededCreateData struct {
	AllowHeuristicFallback *bool `json:"allowHeuristicFallback,omitempty"`
	CaptionSource *string `json:"captionSource,omitempty"`
	Captions *[]any `json:"captions,omitempty"`
	CorrelationId *string `json:"correlationId,omitempty"`
	EditableCaptions *[]any `json:"editableCaptions,omitempty"`
	Flow *string `json:"flow,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Mode *string `json:"mode,omitempty"`
	PreferredProviderId *string `json:"preferredProviderId,omitempty"`
	Prompt string `json:"prompt"`
	RewriteNote *string `json:"rewriteNote,omitempty"`
	TemplateId *string `json:"templateId,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCues *[]any `json:"toneCues,omitempty"`
	VariantCount *int `json:"variantCount,omitempty"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiProvider is the typed data model for the ai_provider entity.
type AiProvider struct {
}

// AiProviderLoadMatch is the typed request payload for AiProvider.LoadTyped.
type AiProviderLoadMatch struct {
	ActorId *string `json:"actorId,omitempty"`
	CorrelationId *string `json:"correlationId,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MappingMode *string `json:"mappingMode,omitempty"`
	MaxSlots *int `json:"maxSlots,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	SourceImageUrl *string `json:"sourceImageUrl,omitempty"`
	Texts *[]any `json:"texts,omitempty"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiProviderCreateData is the typed request payload for AiProvider.CreateTyped.
type AiProviderCreateData struct {
	ActorId *string `json:"actorId,omitempty"`
	CorrelationId *string `json:"correlationId,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MappingMode *string `json:"mappingMode,omitempty"`
	MaxSlots *int `json:"maxSlots,omitempty"`
	Prompt string `json:"prompt"`
	SourceImageUrl string `json:"sourceImageUrl"`
	Texts *[]any `json:"texts,omitempty"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// Analytics is the typed data model for the analytics entity.
type Analytics struct {
}

// AnalyticsLoadMatch is the typed request payload for Analytics.LoadTyped.
type AnalyticsLoadMatch struct {
}

// Auth is the typed data model for the auth entity.
type Auth struct {
}

// AuthCreateData is the typed request payload for Auth.CreateTyped.
type AuthCreateData struct {
	DisplayName *any `json:"displayName,omitempty"`
	Email *any `json:"email,omitempty"`
	Password *any `json:"password,omitempty"`
}

// Billing is the typed data model for the billing entity.
type Billing struct {
}

// BillingLoadMatch is the typed request payload for Billing.LoadTyped.
type BillingLoadMatch struct {
	WindowDay *int `json:"window_day,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// Collaboration is the typed data model for the collaboration entity.
type Collaboration struct {
}

// CollaborationLoadMatch is the typed request payload for Collaboration.LoadTyped.
type CollaborationLoadMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	ProjectId string `json:"project_id"`
}

// CollaborationCreateData is the typed request payload for Collaboration.CreateTyped.
type CollaborationCreateData struct {
	AuthorId *string `json:"authorId,omitempty"`
	Message string `json:"message"`
	ProjectId string `json:"projectId"`
}

// Compliance is the typed data model for the compliance entity.
type Compliance struct {
}

// ComplianceLoadMatch is the typed request payload for Compliance.LoadTyped.
type ComplianceLoadMatch struct {
}

// DeveloperApi is the typed data model for the developer_api entity.
type DeveloperApi struct {
}

// DeveloperApiLoadMatch is the typed request payload for DeveloperApi.LoadTyped.
type DeveloperApiLoadMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
}

// DeveloperApiCreateData is the typed request payload for DeveloperApi.CreateTyped.
type DeveloperApiCreateData struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt string `json:"prompt"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
}

// FreeCaptionMemeSuccess is the typed data model for the free_caption_meme_success entity.
type FreeCaptionMemeSuccess struct {
}

// FreeCaptionMemeSuccessCreateData is the typed request payload for FreeCaptionMemeSuccess.CreateTyped.
type FreeCaptionMemeSuccessCreateData struct {
	Captions []any `json:"captions"`
	TemplateSlug string `json:"templateSlug"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark *map[string]any `json:"watermark,omitempty"`
}

// FreeTemplateSearch is the typed data model for the free_template_search entity.
type FreeTemplateSearch struct {
}

// FreeTemplateSearchListMatch is the typed request payload for FreeTemplateSearch.ListTyped.
type FreeTemplateSearchListMatch struct {
	MediaType *string `json:"media_type,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Q *string `json:"q,omitempty"`
	Query *string `json:"query,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// Generate is the typed data model for the generate entity.
type Generate struct {
}

// GenerateCreateData is the typed request payload for Generate.CreateTyped.
type GenerateCreateData struct {
	Captions *[]any `json:"captions,omitempty"`
	DurationMs *int `json:"durationMs,omitempty"`
	Fps *int `json:"fps,omitempty"`
	GifSlug *string `json:"gifSlug,omitempty"`
	ReturnBase64 *bool `json:"returnBase64,omitempty"`
	StartMs *int `json:"startMs,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	WidthPx *int `json:"widthPx,omitempty"`
}

// Growth is the typed data model for the growth entity.
type Growth struct {
}

// GrowthLoadMatch is the typed request payload for Growth.LoadTyped.
type GrowthLoadMatch struct {
	ActorId string `json:"actor_id"`
	LogExposure *bool `json:"log_exposure,omitempty"`
	Surface *string `json:"surface,omitempty"`
}

// GrowthCreateData is the typed request payload for Growth.CreateTyped.
type GrowthCreateData struct {
	Action string `json:"action"`
	ActorId *string `json:"actorId,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"logExposure,omitempty"`
	Surface *string `json:"surface,omitempty"`
}

// Media is the typed data model for the media entity.
type Media struct {
}

// MediaCreateData is the typed request payload for Media.CreateTyped.
type MediaCreateData struct {
	Action *any `json:"action,omitempty"`
	ContentType *any `json:"contentType,omitempty"`
	ExpiresInSeconds *any `json:"expiresInSeconds,omitempty"`
	OwnerToken *any `json:"ownerToken,omitempty"`
	Path *any `json:"path,omitempty"`
	Prefix *any `json:"prefix,omitempty"`
}

// Meme is the typed data model for the meme entity.
type Meme struct {
}

// MemeLoadMatch is the typed request payload for Meme.LoadTyped.
type MemeLoadMatch struct {
	Id string `json:"id"`
	OwnerToken *string `json:"owner_token,omitempty"`
}

// MemeListMatch is the typed request payload for Meme.ListTyped.
type MemeListMatch struct {
	ExcludeTemplateClone *bool `json:"exclude_template_clone,omitempty"`
	IncludeNsfw *bool `json:"include_nsfw,omitempty"`
	OfficialOnly *bool `json:"official_only,omitempty"`
	OwnerToken *string `json:"owner_token,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Query *string `json:"query,omitempty"`
	TemplateSlug *string `json:"template_slug,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// MemeCreateData is the typed request payload for Meme.CreateTyped.
type MemeCreateData struct {
	Canvas map[string]any `json:"canvas"`
	Captions []any `json:"captions"`
	GenerationRunId *any `json:"generationRunId,omitempty"`
	GenerationVariantId *any `json:"generationVariantId,omitempty"`
	ImageDataUrl string `json:"imageDataUrl"`
	Overlays *[]any `json:"overlays,omitempty"`
	SourceImageUrl string `json:"sourceImageUrl"`
	TemplateSlug *string `json:"templateSlug,omitempty"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark map[string]any `json:"watermark"`
}

// MemeRemoveMatch is the typed request payload for Meme.RemoveTyped.
type MemeRemoveMatch struct {
	Id string `json:"id"`
}

// PublicTemplateMediaItem is the typed data model for the public_template_media_item entity.
type PublicTemplateMediaItem struct {
}

// PublicTemplateMediaItemLoadMatch is the typed request payload for PublicTemplateMediaItem.LoadTyped.
type PublicTemplateMediaItemLoadMatch struct {
	Slug string `json:"slug"`
	MediaType *string `json:"media_type,omitempty"`
}

// PublicTemplateMediaItemListMatch is the typed request payload for PublicTemplateMediaItem.ListTyped.
type PublicTemplateMediaItemListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Q *string `json:"q,omitempty"`
	Query *string `json:"query,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// PublicTemplateMediaItemCreateData is the typed request payload for PublicTemplateMediaItem.CreateTyped.
type PublicTemplateMediaItemCreateData struct {
	Slug string `json:"slug"`
	Captions []any `json:"captions"`
	DurationMs *any `json:"durationMs,omitempty"`
	Tags []any `json:"tags"`
	Fps *any `json:"fps,omitempty"`
	GifSlug *any `json:"gifSlug,omitempty"`
	ReturnBase64 *any `json:"returnBase64,omitempty"`
	StartMs *any `json:"startMs,omitempty"`
	Title *any `json:"title,omitempty"`
	WidthPx *any `json:"widthPx,omitempty"`
}

// StandaloneAgentBootstrap is the typed data model for the standalone_agent_bootstrap entity.
type StandaloneAgentBootstrap struct {
}

// StandaloneAgentBootstrapCreateData is the typed request payload for StandaloneAgentBootstrap.CreateTyped.
type StandaloneAgentBootstrapCreateData struct {
	Description *string `json:"description,omitempty"`
	Handle string `json:"handle"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
}

// TrendAlert is the typed data model for the trend_alert entity.
type TrendAlert struct {
}

// TrendAlertLoadMatch is the typed request payload for TrendAlert.LoadTyped.
type TrendAlertLoadMatch struct {
	ActorId *string `json:"actor_id,omitempty"`
	Aggressiveness *float64 `json:"aggressiveness,omitempty"`
	FollowerCount *int `json:"follower_count,omitempty"`
	Niche *string `json:"niche,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PreferredNiche *string `json:"preferred_niche,omitempty"`
	PreferredRegion *string `json:"preferred_region,omitempty"`
	Query *string `json:"query,omitempty"`
	Region *string `json:"region,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Topic *string `json:"topic,omitempty"`
}

// TrendAlertCreateData is the typed request payload for TrendAlert.CreateTyped.
type TrendAlertCreateData struct {
	Action string `json:"action"`
	ActorId string `json:"actorId"`
	Aggressiveness *float64 `json:"aggressiveness,omitempty"`
	AlertId string `json:"alertId"`
	Channels *[]any `json:"channels,omitempty"`
	DeliverAllAlerts *bool `json:"deliverAllAlerts,omitempty"`
	Event *map[string]any `json:"event,omitempty"`
	ExplicitNiches *[]any `json:"explicitNiches,omitempty"`
	ExplicitRegions *[]any `json:"explicitRegions,omitempty"`
	ExplicitSources *[]any `json:"explicitSources,omitempty"`
	ExplicitTopics *[]any `json:"explicitTopics,omitempty"`
	FollowerCount *int `json:"followerCount,omitempty"`
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
	Captions string `json:"captions"`
	File string `json:"file"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark *string `json:"watermark,omitempty"`
}

// Video is the typed data model for the video entity.
type Video struct {
}

// VideoLoadMatch is the typed request payload for Video.LoadTyped.
type VideoLoadMatch struct {
	Kind *string `json:"kind,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Query *string `json:"query,omitempty"`
	Tag *string `json:"tag,omitempty"`
	TargetBpm *int `json:"target_bpm,omitempty"`
	ToleranceBpm *int `json:"tolerance_bpm,omitempty"`
}

// VideoCreateData is the typed request payload for Video.CreateTyped.
type VideoCreateData struct {
	Action *any `json:"action,omitempty"`
	AssetId *any `json:"assetId,omitempty"`
	AtMs *any `json:"atMs,omitempty"`
	AudioAssetId *any `json:"audioAssetId,omitempty"`
	BeatOffsetMs *any `json:"beatOffsetMs,omitempty"`
	BitrateKbps *any `json:"bitrateKbps,omitempty"`
	Bpm *any `json:"bpm,omitempty"`
	Cancelled *any `json:"cancelled,omitempty"`
	Container *any `json:"container,omitempty"`
	DurationMs *any `json:"durationMs,omitempty"`
	DurationSeconds *any `json:"durationSeconds,omitempty"`
	Easing *any `json:"easing,omitempty"`
	Error *any `json:"error,omitempty"`
	FrameRate *any `json:"frameRate,omitempty"`
	InputFormat *any `json:"inputFormat,omitempty"`
	Intensity *any `json:"intensity,omitempty"`
	JobId *any `json:"jobId,omitempty"`
	Locale *any `json:"locale,omitempty"`
	MimeType *any `json:"mimeType,omitempty"`
	Name *any `json:"name,omitempty"`
	OffsetMs *any `json:"offsetMs,omitempty"`
	OutputPresetId *any `json:"outputPresetId,omitempty"`
	OutputUrl *any `json:"outputUrl,omitempty"`
	PlanTier *any `json:"planTier,omitempty"`
	PresetId *any `json:"presetId,omitempty"`
	ProgressPercent *any `json:"progressPercent,omitempty"`
	Project *any `json:"project,omitempty"`
	ProjectId *any `json:"projectId,omitempty"`
	Property *any `json:"property,omitempty"`
	SourceDeviceId *any `json:"sourceDeviceId,omitempty"`
	SourceUrl *any `json:"sourceUrl,omitempty"`
	Stage *any `json:"stage,omitempty"`
	StartMs *any `json:"startMs,omitempty"`
	StylePresetId *any `json:"stylePresetId,omitempty"`
	SyncToBeatGrid *any `json:"syncToBeatGrid,omitempty"`
	Tone *any `json:"tone,omitempty"`
	TrackId *any `json:"trackId,omitempty"`
	Transcript *any `json:"transcript,omitempty"`
	TrendKeywords *any `json:"trendKeywords,omitempty"`
	Type *any `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Value *any `json:"value,omitempty"`
	WatermarkEnabled *any `json:"watermarkEnabled,omitempty"`
	WatermarkText *any `json:"watermarkText,omitempty"`
	WorkerId *any `json:"workerId,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
