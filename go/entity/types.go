// Typed models for the MemesioContentCreation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/core"
)

// Agent is the typed data model for the agent entity.
type Agent struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
}

// AgentLoadMatch is the typed request payload for Agent.LoadTyped.
type AgentLoadMatch struct {
	Id string `json:"id"`
}

// AgentCreateData is the typed request payload for Agent.CreateTyped.
type AgentCreateData struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
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
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
}

// AgentInfra is the typed data model for the agent_infra entity.
type AgentInfra struct {
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
	Scopes *[]any `json:"scopes,omitempty"`
	UserId *string `json:"userId,omitempty"`
	WeekStart *string `json:"weekStart,omitempty"`
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
	Scopes *[]any `json:"scopes,omitempty"`
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

// AiCaptionLoadMatch is the typed request payload for AiCaption.LoadTyped.
type AiCaptionLoadMatch struct {
	Locale *string `json:"locale,omitempty"`
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
	Action string `json:"action"`
	ActorId *string `json:"actorId,omitempty"`
	AfterState *map[string]any `json:"afterState,omitempty"`
	Attempts *int `json:"attempts,omitempty"`
	BeforeState *map[string]any `json:"beforeState,omitempty"`
	BrushEdits *[]any `json:"brushEdits,omitempty"`
	Capability string `json:"capability"`
	CelebrityConfidence *float64 `json:"celebrityConfidence,omitempty"`
	ConsentAttested *bool `json:"consentAttested,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DetectedFaceCount float64 `json:"detectedFaceCount"`
	EdgeRefinement *float64 `json:"edgeRefinement,omitempty"`
	EstimatedCostUsd *float64 `json:"estimatedCostUsd,omitempty"`
	FrameTimeMs *float64 `json:"frameTimeMs,omitempty"`
	Height float64 `json:"height"`
	Id string `json:"id"`
	Input *map[string]any `json:"input,omitempty"`
	LayerId string `json:"layerId"`
	LayerType *string `json:"layerType,omitempty"`
	MaxAttempts *int `json:"maxAttempts,omitempty"`
	MaxFaces *float64 `json:"maxFaces,omitempty"`
	MediaType *string `json:"mediaType,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NsfwScore *float64 `json:"nsfwScore,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	ProjectId string `json:"projectId"`
	ProviderId *string `json:"providerId,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RunAfterMs *int `json:"runAfterMs,omitempty"`
	SourceAssetUrl string `json:"sourceAssetUrl"`
	SourceFaceIndex *float64 `json:"sourceFaceIndex,omitempty"`
	SourceImageUrl string `json:"sourceImageUrl"`
	Status string `json:"status"`
	TargetAssetUrl string `json:"targetAssetUrl"`
	TargetFaceIndex *float64 `json:"targetFaceIndex,omitempty"`
	TimeoutMs *int `json:"timeoutMs,omitempty"`
	TraceId *string `json:"traceId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	VersionId *string `json:"versionId,omitempty"`
	Width float64 `json:"width"`
	WorkerId string `json:"workerId"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
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
	Attempts *int `json:"attempts,omitempty"`
	BeforeState *map[string]any `json:"beforeState,omitempty"`
	BrushEdits *[]any `json:"brushEdits,omitempty"`
	Capability string `json:"capability"`
	CelebrityConfidence *float64 `json:"celebrityConfidence,omitempty"`
	ConsentAttested *bool `json:"consentAttested,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DetectedFaceCount float64 `json:"detectedFaceCount"`
	EdgeRefinement *float64 `json:"edgeRefinement,omitempty"`
	EstimatedCostUsd *float64 `json:"estimatedCostUsd,omitempty"`
	FrameTimeMs *float64 `json:"frameTimeMs,omitempty"`
	Height float64 `json:"height"`
	Id string `json:"id"`
	Input *map[string]any `json:"input,omitempty"`
	LayerId string `json:"layerId"`
	LayerType *string `json:"layerType,omitempty"`
	MaxAttempts *int `json:"maxAttempts,omitempty"`
	MaxFaces *float64 `json:"maxFaces,omitempty"`
	MediaType *string `json:"mediaType,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NsfwScore *float64 `json:"nsfwScore,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	ProjectId string `json:"projectId"`
	ProviderId *string `json:"providerId,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RunAfterMs *int `json:"runAfterMs,omitempty"`
	SourceAssetUrl string `json:"sourceAssetUrl"`
	SourceFaceIndex *float64 `json:"sourceFaceIndex,omitempty"`
	SourceImageUrl string `json:"sourceImageUrl"`
	Status string `json:"status"`
	TargetAssetUrl string `json:"targetAssetUrl"`
	TargetFaceIndex *float64 `json:"targetFaceIndex,omitempty"`
	TimeoutMs *int `json:"timeoutMs,omitempty"`
	TraceId *string `json:"traceId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	VersionId *string `json:"versionId,omitempty"`
	Width float64 `json:"width"`
	WorkerId string `json:"workerId"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiMemeGenerationSucceeded is the typed data model for the ai_meme_generation_succeeded entity.
type AiMemeGenerationSucceeded struct {
	AllowHeuristicFallback *bool `json:"allowHeuristicFallback,omitempty"`
	CaptionSource *string `json:"captionSource,omitempty"`
	Captions *[]any `json:"captions,omitempty"`
	CorrelationId *string `json:"correlationId,omitempty"`
	DegradedFromAsync *bool `json:"degradedFromAsync,omitempty"`
	EditableCaptions *[]any `json:"editableCaptions,omitempty"`
	Flow string `json:"flow"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Mode string `json:"mode"`
	Ok bool `json:"ok"`
	PreferredProviderId *string `json:"preferredProviderId,omitempty"`
	Prompt string `json:"prompt"`
	RewriteNote *string `json:"rewriteNote,omitempty"`
	RunId *string `json:"runId,omitempty"`
	Status string `json:"status"`
	TemplateId *string `json:"templateId,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCues *[]any `json:"toneCues,omitempty"`
	VariantCount int `json:"variantCount"`
	Variants []any `json:"variants"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiMemeGenerationSucceededCreateData is the typed request payload for AiMemeGenerationSucceeded.CreateTyped.
type AiMemeGenerationSucceededCreateData struct {
	AllowHeuristicFallback *bool `json:"allowHeuristicFallback,omitempty"`
	CaptionSource *string `json:"captionSource,omitempty"`
	Captions *[]any `json:"captions,omitempty"`
	CorrelationId *string `json:"correlationId,omitempty"`
	DegradedFromAsync *bool `json:"degradedFromAsync,omitempty"`
	EditableCaptions *[]any `json:"editableCaptions,omitempty"`
	Flow string `json:"flow"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Mode string `json:"mode"`
	Ok bool `json:"ok"`
	PreferredProviderId *string `json:"preferredProviderId,omitempty"`
	Prompt string `json:"prompt"`
	RewriteNote *string `json:"rewriteNote,omitempty"`
	RunId *string `json:"runId,omitempty"`
	Status string `json:"status"`
	TemplateId *string `json:"templateId,omitempty"`
	Tone *string `json:"tone,omitempty"`
	ToneCues *[]any `json:"toneCues,omitempty"`
	VariantCount int `json:"variantCount"`
	Variants []any `json:"variants"`
	WorkspaceId *string `json:"workspaceId,omitempty"`
}

// AiProvider is the typed data model for the ai_provider entity.
type AiProvider struct {
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

// AiProviderLoadMatch is the typed request payload for AiProvider.LoadTyped.
type AiProviderLoadMatch struct {
	Refresh *bool `json:"refresh,omitempty"`
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
	TemplateId *string `json:"template_id,omitempty"`
}

// Auth is the typed data model for the auth entity.
type Auth struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email string `json:"email"`
	Password string `json:"password"`
}

// AuthCreateData is the typed request payload for Auth.CreateTyped.
type AuthCreateData struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email string `json:"email"`
	Password string `json:"password"`
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
	AuthorId *string `json:"authorId,omitempty"`
	Message string `json:"message"`
	ProjectId string `json:"projectId"`
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

// CreateMeme is the typed data model for the create_meme entity.
type CreateMeme struct {
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

// CreateMemeCreateData is the typed request payload for CreateMeme.CreateTyped.
type CreateMemeCreateData struct {
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

// DeveloperApi is the typed data model for the developer_api entity.
type DeveloperApi struct {
	Limit *float64 `json:"limit,omitempty"`
	Prompt string `json:"prompt"`
	TrendSignals *[]any `json:"trendSignals,omitempty"`
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
	Captions []any `json:"captions"`
	TemplateSlug string `json:"templateSlug"`
	Title *string `json:"title,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watermark *map[string]any `json:"watermark,omitempty"`
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
	Animated *bool `json:"animated,omitempty"`
	AssetBytes *any `json:"assetBytes,omitempty"`
	AssetContentType *string `json:"assetContentType,omitempty"`
	BoxCount int `json:"boxCount"`
	CaptionCount int `json:"captionCount"`
	Captions []any `json:"captions"`
	Description string `json:"description"`
	DurationMs *any `json:"durationMs,omitempty"`
	ExampleImageUrl *any `json:"exampleImageUrl,omitempty"`
	FrameCount *any `json:"frameCount,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	MediaType string `json:"mediaType"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"posterImageUrl,omitempty"`
	QualityStatus *string `json:"qualityStatus,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"sourceTemplateId"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Width any `json:"width"`
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
	Base64 *string `json:"base64,omitempty"`
	ByteLength int `json:"byteLength"`
	Captions *[]any `json:"captions,omitempty"`
	DataUrl *string `json:"dataUrl,omitempty"`
	DelayMs int `json:"delayMs"`
	DurationMs *int `json:"durationMs,omitempty"`
	Filename string `json:"filename"`
	Fps *int `json:"fps,omitempty"`
	GifSlug string `json:"gifSlug"`
	Height int `json:"height"`
	MimeType string `json:"mimeType"`
	Pages int `json:"pages"`
	Parameters map[string]any `json:"parameters"`
	ReturnBase64 *bool `json:"returnBase64,omitempty"`
	SourceDurationMs int `json:"sourceDurationMs"`
	StartMs *int `json:"startMs,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	Width int `json:"width"`
	WidthPx *int `json:"widthPx,omitempty"`
}

// GenerateCreateData is the typed request payload for Generate.CreateTyped.
type GenerateCreateData struct {
	Base64 *string `json:"base64,omitempty"`
	ByteLength int `json:"byteLength"`
	Captions *[]any `json:"captions,omitempty"`
	DataUrl *string `json:"dataUrl,omitempty"`
	DelayMs int `json:"delayMs"`
	DurationMs *int `json:"durationMs,omitempty"`
	Filename string `json:"filename"`
	Fps *int `json:"fps,omitempty"`
	GifSlug string `json:"gifSlug"`
	Height int `json:"height"`
	MimeType string `json:"mimeType"`
	Pages int `json:"pages"`
	Parameters map[string]any `json:"parameters"`
	ReturnBase64 *bool `json:"returnBase64,omitempty"`
	SourceDurationMs int `json:"sourceDurationMs"`
	StartMs *int `json:"startMs,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	Width int `json:"width"`
	WidthPx *int `json:"widthPx,omitempty"`
}

// Growth is the typed data model for the growth entity.
type Growth struct {
	AccountId *string `json:"accountId,omitempty"`
	Action string `json:"action"`
	ActorId *string `json:"actorId,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Code *string `json:"code,omitempty"`
	ExternalAccountId *string `json:"externalAccountId,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"logExposure,omitempty"`
	MemeSlug *string `json:"memeSlug,omitempty"`
	Now *string `json:"now,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Profiles *[]any `json:"profiles,omitempty"`
	ShareSlug *string `json:"shareSlug,omitempty"`
	Surface *string `json:"surface,omitempty"`
	WeekStart *string `json:"weekStart,omitempty"`
}

// GrowthLoadMatch is the typed request payload for Growth.LoadTyped.
type GrowthLoadMatch struct {
	ActorId string `json:"actor_id"`
	LogExposure *bool `json:"log_exposure,omitempty"`
	Surface *string `json:"surface,omitempty"`
}

// GrowthCreateData is the typed request payload for Growth.CreateTyped.
type GrowthCreateData struct {
	AccountId *string `json:"accountId,omitempty"`
	Action string `json:"action"`
	ActorId *string `json:"actorId,omitempty"`
	Caption *string `json:"caption,omitempty"`
	Code *string `json:"code,omitempty"`
	ExternalAccountId *string `json:"externalAccountId,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LogExposure *bool `json:"logExposure,omitempty"`
	MemeSlug *string `json:"memeSlug,omitempty"`
	Now *string `json:"now,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Profiles *[]any `json:"profiles,omitempty"`
	ShareSlug *string `json:"shareSlug,omitempty"`
	Surface *string `json:"surface,omitempty"`
	WeekStart *string `json:"weekStart,omitempty"`
}

// ListMeme is the typed data model for the list_meme entity.
type ListMeme struct {
	AltText string `json:"altText"`
	CanonicalImageUrl string `json:"canonicalImageUrl"`
	CreatedAt string `json:"createdAt"`
	ImageUrl string `json:"imageUrl"`
	NsfwStatus string `json:"nsfwStatus"`
	ShareSlug string `json:"shareSlug"`
	ShareUrl string `json:"shareUrl"`
	ShareViews int `json:"shareViews"`
	Slug string `json:"slug"`
	Tags []any `json:"tags"`
	TemplateSlug string `json:"templateSlug"`
	Title string `json:"title"`
	Visibility string `json:"visibility"`
}

// ListMemeListMatch is the typed request payload for ListMeme.ListTyped.
type ListMemeListMatch struct {
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

// Media is the typed data model for the media entity.
type Media struct {
	Action string `json:"action"`
	ContentType *string `json:"contentType,omitempty"`
	ExpiresInSeconds *int `json:"expiresInSeconds,omitempty"`
	OwnerToken *string `json:"ownerToken,omitempty"`
	Path *string `json:"path,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}

// MediaCreateData is the typed request payload for Media.CreateTyped.
type MediaCreateData struct {
	Action string `json:"action"`
	ContentType *string `json:"contentType,omitempty"`
	ExpiresInSeconds *int `json:"expiresInSeconds,omitempty"`
	OwnerToken *string `json:"ownerToken,omitempty"`
	Path *string `json:"path,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}

// Meme is the typed data model for the meme entity.
type Meme struct {
	AltText string `json:"altText"`
	CanonicalImageUrl string `json:"canonicalImageUrl"`
	Canvas map[string]any `json:"canvas"`
	Captions []any `json:"captions"`
	CreatedAt string `json:"createdAt"`
	Id *string `json:"id,omitempty"`
	ImageUrl string `json:"imageUrl"`
	NsfwStatus string `json:"nsfwStatus"`
	Overlays []any `json:"overlays"`
	ShareSlug string `json:"shareSlug"`
	ShareUrl string `json:"shareUrl"`
	ShareViews int `json:"shareViews"`
	Slug string `json:"slug"`
	SourceImageUrl string `json:"sourceImageUrl"`
	Tags []any `json:"tags"`
	TemplateSlug string `json:"templateSlug"`
	Title string `json:"title"`
	Visibility string `json:"visibility"`
	Watermark map[string]any `json:"watermark"`
}

// MemeLoadMatch is the typed request payload for Meme.LoadTyped.
type MemeLoadMatch struct {
	Id string `json:"id"`
	OwnerToken *string `json:"owner_token,omitempty"`
}

// MemeRemoveMatch is the typed request payload for Meme.RemoveTyped.
type MemeRemoveMatch struct {
	Id string `json:"id"`
}

// PublicTemplateMediaItem is the typed data model for the public_template_media_item entity.
type PublicTemplateMediaItem struct {
	Animated *bool `json:"animated,omitempty"`
	AssetBytes *any `json:"assetBytes,omitempty"`
	AssetContentType *string `json:"assetContentType,omitempty"`
	BoxCount *int `json:"boxCount,omitempty"`
	CaptionCount *int `json:"captionCount,omitempty"`
	Captions []any `json:"captions"`
	Categories *[]any `json:"categories,omitempty"`
	Description string `json:"description"`
	DurationMs *any `json:"durationMs,omitempty"`
	ExampleImageUrl *any `json:"exampleImageUrl,omitempty"`
	FrameCount *any `json:"frameCount,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	MediaType string `json:"mediaType"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"posterImageUrl,omitempty"`
	PreviewImageUrl *string `json:"previewImageUrl,omitempty"`
	QualityStatus *string `json:"qualityStatus,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"sourceTemplateId"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	Tags []any `json:"tags"`
	Width any `json:"width"`
}

// PublicTemplateMediaItemLoadMatch is the typed request payload for PublicTemplateMediaItem.LoadTyped.
type PublicTemplateMediaItemLoadMatch struct {
	Slug string `json:"slug"`
	MediaType *string `json:"media_type,omitempty"`
}

// StandaloneAgentBootstrap is the typed data model for the standalone_agent_bootstrap entity.
type StandaloneAgentBootstrap struct {
	Description *string `json:"description,omitempty"`
	Handle string `json:"handle"`
	Locale *string `json:"locale,omitempty"`
	Name string `json:"name"`
	StylePreset *string `json:"stylePreset,omitempty"`
	SystemPrompt *string `json:"systemPrompt,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WebsiteUrl *string `json:"websiteUrl,omitempty"`
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

// Template is the typed data model for the template entity.
type Template struct {
	Animated *bool `json:"animated,omitempty"`
	AssetBytes *any `json:"assetBytes,omitempty"`
	AssetContentType *string `json:"assetContentType,omitempty"`
	BoxCount *int `json:"boxCount,omitempty"`
	CaptionCount *int `json:"captionCount,omitempty"`
	Captions *[]any `json:"captions,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Description string `json:"description"`
	DurationMs *int `json:"durationMs,omitempty"`
	ExampleImageUrl *any `json:"exampleImageUrl,omitempty"`
	Fps *int `json:"fps,omitempty"`
	FrameCount *any `json:"frameCount,omitempty"`
	GifSlug *string `json:"gifSlug,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	MediaType string `json:"mediaType"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"posterImageUrl,omitempty"`
	PreviewImageUrl *string `json:"previewImageUrl,omitempty"`
	QualityStatus *string `json:"qualityStatus,omitempty"`
	ReturnBase64 *bool `json:"returnBase64,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"sourceTemplateId"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	StartMs *int `json:"startMs,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	Width any `json:"width"`
	WidthPx *int `json:"widthPx,omitempty"`
}

// TemplateListMatch is the typed request payload for Template.ListTyped.
type TemplateListMatch struct {
	MediaType *string `json:"media_type,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Q *string `json:"q,omitempty"`
	Query *string `json:"query,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// TemplateCreateData is the typed request payload for Template.CreateTyped.
type TemplateCreateData struct {
	Slug string `json:"slug"`
	Animated *bool `json:"animated,omitempty"`
	AssetBytes *any `json:"assetBytes,omitempty"`
	AssetContentType *string `json:"assetContentType,omitempty"`
	BoxCount *int `json:"boxCount,omitempty"`
	CaptionCount *int `json:"captionCount,omitempty"`
	Captions *[]any `json:"captions,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Description string `json:"description"`
	DurationMs *int `json:"durationMs,omitempty"`
	ExampleImageUrl *any `json:"exampleImageUrl,omitempty"`
	Fps *int `json:"fps,omitempty"`
	FrameCount *any `json:"frameCount,omitempty"`
	GifSlug *string `json:"gifSlug,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	MediaType string `json:"mediaType"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"posterImageUrl,omitempty"`
	PreviewImageUrl *string `json:"previewImageUrl,omitempty"`
	QualityStatus *string `json:"qualityStatus,omitempty"`
	ReturnBase64 *bool `json:"returnBase64,omitempty"`
	SourceTemplateId any `json:"sourceTemplateId"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	StartMs *int `json:"startMs,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	Width any `json:"width"`
	WidthPx *int `json:"widthPx,omitempty"`
}

// TemplateSearch is the typed data model for the template_search entity.
type TemplateSearch struct {
	Animated *bool `json:"animated,omitempty"`
	AssetBytes *any `json:"assetBytes,omitempty"`
	AssetContentType *string `json:"assetContentType,omitempty"`
	BoxCount *int `json:"boxCount,omitempty"`
	CaptionCount *int `json:"captionCount,omitempty"`
	Captions []any `json:"captions"`
	Categories *[]any `json:"categories,omitempty"`
	Description string `json:"description"`
	DurationMs *any `json:"durationMs,omitempty"`
	ExampleImageUrl *any `json:"exampleImageUrl,omitempty"`
	FrameCount *any `json:"frameCount,omitempty"`
	Height any `json:"height"`
	Id string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	MediaType string `json:"mediaType"`
	Name string `json:"name"`
	PosterImageUrl *string `json:"posterImageUrl,omitempty"`
	PreviewImageUrl *string `json:"previewImageUrl,omitempty"`
	QualityStatus *string `json:"qualityStatus,omitempty"`
	Slug string `json:"slug"`
	SourceTemplateId any `json:"sourceTemplateId"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	Tags []any `json:"tags"`
	Width any `json:"width"`
}

// TemplateSearchListMatch is the typed request payload for TemplateSearch.ListTyped.
type TemplateSearchListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Q *string `json:"q,omitempty"`
	Query *string `json:"query,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// TrendAlert is the typed data model for the trend_alert entity.
type TrendAlert struct {
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
}

// Video is the typed data model for the video entity.
type Video struct {
	Action *string `json:"action,omitempty"`
	AssetId *string `json:"assetId,omitempty"`
	AtMs *float64 `json:"atMs,omitempty"`
	AudioAssetId *string `json:"audioAssetId,omitempty"`
	BeatOffsetMs *int `json:"beatOffsetMs,omitempty"`
	BitrateKbps *float64 `json:"bitrateKbps,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Cancelled *bool `json:"cancelled,omitempty"`
	Container *string `json:"container,omitempty"`
	DurationMs *float64 `json:"durationMs,omitempty"`
	DurationSeconds float64 `json:"durationSeconds"`
	Easing *string `json:"easing,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameRate *float64 `json:"frameRate,omitempty"`
	InputFormat string `json:"inputFormat"`
	Intensity *float64 `json:"intensity,omitempty"`
	JobId *string `json:"jobId,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MimeType string `json:"mimeType"`
	Name *string `json:"name,omitempty"`
	OffsetMs *float64 `json:"offsetMs,omitempty"`
	OutputPresetId string `json:"outputPresetId"`
	OutputUrl *string `json:"outputUrl,omitempty"`
	PlanTier string `json:"planTier"`
	PresetId string `json:"presetId"`
	ProgressPercent *float64 `json:"progressPercent,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	Property *string `json:"property,omitempty"`
	SourceDeviceId *string `json:"sourceDeviceId,omitempty"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartMs *float64 `json:"startMs,omitempty"`
	StylePresetId *string `json:"stylePresetId,omitempty"`
	SyncToBeatGrid *bool `json:"syncToBeatGrid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	TrackId *string `json:"trackId,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeywords *[]any `json:"trendKeywords,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Value *float64 `json:"value,omitempty"`
	WatermarkEnabled *bool `json:"watermarkEnabled,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WorkerId *string `json:"workerId,omitempty"`
}

// VideoLoadMatch is the typed request payload for Video.LoadTyped.
type VideoLoadMatch struct {
	BeatOffsetM *int `json:"beat_offset_m,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Locale *string `json:"locale,omitempty"`
	StylePresetId *string `json:"style_preset_id,omitempty"`
	SyncToBeatGrid *bool `json:"sync_to_beat_grid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeyword *string `json:"trend_keyword,omitempty"`
}

// VideoCreateData is the typed request payload for Video.CreateTyped.
type VideoCreateData struct {
	Action *string `json:"action,omitempty"`
	AssetId *string `json:"assetId,omitempty"`
	AtMs *float64 `json:"atMs,omitempty"`
	AudioAssetId *string `json:"audioAssetId,omitempty"`
	BeatOffsetMs *int `json:"beatOffsetMs,omitempty"`
	BitrateKbps *float64 `json:"bitrateKbps,omitempty"`
	Bpm *int `json:"bpm,omitempty"`
	Cancelled *bool `json:"cancelled,omitempty"`
	Container *string `json:"container,omitempty"`
	DurationMs *float64 `json:"durationMs,omitempty"`
	DurationSeconds float64 `json:"durationSeconds"`
	Easing *string `json:"easing,omitempty"`
	Error *string `json:"error,omitempty"`
	FrameRate *float64 `json:"frameRate,omitempty"`
	InputFormat string `json:"inputFormat"`
	Intensity *float64 `json:"intensity,omitempty"`
	JobId *string `json:"jobId,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MimeType string `json:"mimeType"`
	Name *string `json:"name,omitempty"`
	OffsetMs *float64 `json:"offsetMs,omitempty"`
	OutputPresetId string `json:"outputPresetId"`
	OutputUrl *string `json:"outputUrl,omitempty"`
	PlanTier string `json:"planTier"`
	PresetId string `json:"presetId"`
	ProgressPercent *float64 `json:"progressPercent,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	Property *string `json:"property,omitempty"`
	SourceDeviceId *string `json:"sourceDeviceId,omitempty"`
	SourceUrl *string `json:"sourceUrl,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartMs *float64 `json:"startMs,omitempty"`
	StylePresetId *string `json:"stylePresetId,omitempty"`
	SyncToBeatGrid *bool `json:"syncToBeatGrid,omitempty"`
	Tone *string `json:"tone,omitempty"`
	TrackId *string `json:"trackId,omitempty"`
	Transcript *string `json:"transcript,omitempty"`
	TrendKeywords *[]any `json:"trendKeywords,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Value *float64 `json:"value,omitempty"`
	WatermarkEnabled *bool `json:"watermarkEnabled,omitempty"`
	WatermarkText *string `json:"watermarkText,omitempty"`
	WorkerId *string `json:"workerId,omitempty"`
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
