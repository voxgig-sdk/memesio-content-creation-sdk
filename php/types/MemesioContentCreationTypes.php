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
    public ?string $stylePreset = null;
    public ?string $systemPrompt = null;
    public ?string $watermarkText = null;
    public ?string $websiteUrl = null;
}

/** Request payload for Agent#load. */
class AgentLoadMatch
{
    public string $id;
}

/** Request payload for Agent#create. */
class AgentCreateData
{
    public ?string $description = null;
    public ?string $locale = null;
    public string $name;
    public ?string $slug = null;
    public ?string $status = null;
    public ?string $stylePreset = null;
    public ?string $systemPrompt = null;
    public ?string $watermarkText = null;
    public ?string $websiteUrl = null;
}

/** Request payload for Agent#update. */
class AgentUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $locale = null;
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $status = null;
    public ?string $stylePreset = null;
    public ?string $systemPrompt = null;
    public ?string $watermarkText = null;
    public ?string $websiteUrl = null;
}

/** AgentInfra entity data model. */
class AgentInfra
{
    public string $action;
    public string $chatId;
    public string $memeSlug;
    public ?array $metadata = null;
    public ?string $payoutReference = null;
    public ?string $payoutStatus = null;
    public string $phoneOrChatId;
    public string $prompt;
    public ?array $proof = null;
    public ?int $quotaBoostPerDay = null;
    public ?array $scopes = null;
    public ?string $userId = null;
    public ?string $weekStart = null;
}

/** Request payload for AgentInfra#load. */
class AgentInfraLoadMatch
{
    public ?string $action = null;
    public ?string $chatId = null;
    public ?string $memeSlug = null;
    public ?array $metadata = null;
    public ?string $payoutReference = null;
    public ?string $payoutStatus = null;
    public ?string $phoneOrChatId = null;
    public ?string $prompt = null;
    public ?array $proof = null;
    public ?int $quotaBoostPerDay = null;
    public ?array $scopes = null;
    public ?string $userId = null;
    public ?string $weekStart = null;
}

/** Request payload for AgentInfra#create. */
class AgentInfraCreateData
{
    public string $action;
    public string $chatId;
    public string $memeSlug;
    public ?array $metadata = null;
    public ?string $payoutReference = null;
    public ?string $payoutStatus = null;
    public string $phoneOrChatId;
    public string $prompt;
    public ?array $proof = null;
    public ?int $quotaBoostPerDay = null;
    public ?array $scopes = null;
    public ?string $userId = null;
    public ?string $weekStart = null;
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
    public ?array $blockedTerms = null;
    public array $canvasText;
    public ?int $captionCount = null;
    public ?array $captionSets = null;
    public ?array $entities = null;
    public ?bool $fallbackUsed = null;
    public ?string $generationStrategy = null;
    public ?string $locale = null;
    public ?string $memeId = null;
    public ?string $memeSlug = null;
    public string $name;
    public ?bool $ok = null;
    public ?int $optionCount = null;
    public ?string $ownerToken = null;
    public ?string $providerId = null;
    public ?array $referenceCaptions = null;
    public ?string $rewriteNote = null;
    public ?string $sceneSummary = null;
    public ?string $templateDescription = null;
    public ?string $templateName = null;
    public ?array $templateTags = null;
    public string $tone;
    public ?array $toneCues = null;
    public ?array $trendKeywords = null;
    public ?array $trendReferences = null;
    public ?array $trendSignals = null;
    public ?int $variationOffset = null;
    public ?array $voiceRules = null;
}

/** Request payload for AiCaption#load. */
class AiCaptionLoadMatch
{
    public ?array $blockedTerms = null;
    public ?array $canvasText = null;
    public ?int $captionCount = null;
    public ?array $captionSets = null;
    public ?array $entities = null;
    public ?bool $fallbackUsed = null;
    public ?string $generationStrategy = null;
    public ?string $locale = null;
    public ?string $memeId = null;
    public ?string $memeSlug = null;
    public ?string $name = null;
    public ?bool $ok = null;
    public ?int $optionCount = null;
    public ?string $ownerToken = null;
    public ?string $providerId = null;
    public ?array $referenceCaptions = null;
    public ?string $rewriteNote = null;
    public ?string $sceneSummary = null;
    public ?string $templateDescription = null;
    public ?string $templateName = null;
    public ?array $templateTags = null;
    public ?string $tone = null;
    public ?array $toneCues = null;
    public ?array $trendKeywords = null;
    public ?array $trendReferences = null;
    public ?array $trendSignals = null;
    public ?int $variationOffset = null;
    public ?array $voiceRules = null;
}

/** Request payload for AiCaption#create. */
class AiCaptionCreateData
{
    public ?array $blockedTerms = null;
    public array $canvasText;
    public ?int $captionCount = null;
    public ?array $captionSets = null;
    public ?array $entities = null;
    public ?bool $fallbackUsed = null;
    public ?string $generationStrategy = null;
    public ?string $locale = null;
    public ?string $memeId = null;
    public ?string $memeSlug = null;
    public string $name;
    public ?bool $ok = null;
    public ?int $optionCount = null;
    public ?string $ownerToken = null;
    public ?string $providerId = null;
    public ?array $referenceCaptions = null;
    public ?string $rewriteNote = null;
    public ?string $sceneSummary = null;
    public ?string $templateDescription = null;
    public ?string $templateName = null;
    public ?array $templateTags = null;
    public string $tone;
    public ?array $toneCues = null;
    public ?array $trendKeywords = null;
    public ?array $trendReferences = null;
    public ?array $trendSignals = null;
    public ?int $variationOffset = null;
    public ?array $voiceRules = null;
}

/** AiJob entity data model. */
class AiJob
{
    public string $action;
    public ?string $actorId = null;
    public ?array $afterState = null;
    public ?int $attempts = null;
    public ?array $beforeState = null;
    public ?array $brushEdits = null;
    public string $capability;
    public ?float $celebrityConfidence = null;
    public ?bool $consentAttested = null;
    public ?string $createdAt = null;
    public float $detectedFaceCount;
    public ?float $edgeRefinement = null;
    public ?float $estimatedCostUsd = null;
    public ?float $frameTimeMs = null;
    public float $height;
    public string $id;
    public ?array $input = null;
    public string $layerId;
    public ?string $layerType = null;
    public ?int $maxAttempts = null;
    public ?float $maxFaces = null;
    public ?string $mediaType = null;
    public ?array $metadata = null;
    public ?float $nsfwScore = null;
    public ?array $output = null;
    public string $projectId;
    public ?string $providerId = null;
    public ?string $reason = null;
    public ?int $runAfterMs = null;
    public string $sourceAssetUrl;
    public ?float $sourceFaceIndex = null;
    public string $sourceImageUrl;
    public string $status;
    public string $targetAssetUrl;
    public ?float $targetFaceIndex = null;
    public ?int $timeoutMs = null;
    public ?string $traceId = null;
    public ?string $updatedAt = null;
    public ?string $versionId = null;
    public float $width;
    public string $workerId;
    public ?string $workspaceId = null;
}

/** Request payload for AiJob#load. */
class AiJobLoadMatch
{
    public string $id;
}

/** Request payload for AiJob#create. */
class AiJobCreateData
{
    public string $action;
    public ?string $actorId = null;
    public ?array $afterState = null;
    public ?int $attempts = null;
    public ?array $beforeState = null;
    public ?array $brushEdits = null;
    public string $capability;
    public ?float $celebrityConfidence = null;
    public ?bool $consentAttested = null;
    public ?string $createdAt = null;
    public float $detectedFaceCount;
    public ?float $edgeRefinement = null;
    public ?float $estimatedCostUsd = null;
    public ?float $frameTimeMs = null;
    public float $height;
    public string $id;
    public ?array $input = null;
    public string $layerId;
    public ?string $layerType = null;
    public ?int $maxAttempts = null;
    public ?float $maxFaces = null;
    public ?string $mediaType = null;
    public ?array $metadata = null;
    public ?float $nsfwScore = null;
    public ?array $output = null;
    public string $projectId;
    public ?string $providerId = null;
    public ?string $reason = null;
    public ?int $runAfterMs = null;
    public string $sourceAssetUrl;
    public ?float $sourceFaceIndex = null;
    public string $sourceImageUrl;
    public string $status;
    public string $targetAssetUrl;
    public ?float $targetFaceIndex = null;
    public ?int $timeoutMs = null;
    public ?string $traceId = null;
    public ?string $updatedAt = null;
    public ?string $versionId = null;
    public float $width;
    public string $workerId;
    public ?string $workspaceId = null;
}

/** AiMemeGenerationSucceeded entity data model. */
class AiMemeGenerationSucceeded
{
    public ?bool $allowHeuristicFallback = null;
    public ?string $captionSource = null;
    public ?array $captions = null;
    public ?string $correlationId = null;
    public ?bool $degradedFromAsync = null;
    public ?array $editableCaptions = null;
    public string $flow;
    public ?string $imageUrl = null;
    public string $mode;
    public bool $ok;
    public ?string $preferredProviderId = null;
    public string $prompt;
    public ?string $rewriteNote = null;
    public ?string $runId = null;
    public string $status;
    public ?string $templateId = null;
    public ?string $tone = null;
    public ?array $toneCues = null;
    public int $variantCount;
    public array $variants;
    public ?string $workspaceId = null;
}

/** Request payload for AiMemeGenerationSucceeded#create. */
class AiMemeGenerationSucceededCreateData
{
    public ?bool $allowHeuristicFallback = null;
    public ?string $captionSource = null;
    public ?array $captions = null;
    public ?string $correlationId = null;
    public ?bool $degradedFromAsync = null;
    public ?array $editableCaptions = null;
    public string $flow;
    public ?string $imageUrl = null;
    public string $mode;
    public bool $ok;
    public ?string $preferredProviderId = null;
    public string $prompt;
    public ?string $rewriteNote = null;
    public ?string $runId = null;
    public string $status;
    public ?string $templateId = null;
    public ?string $tone = null;
    public ?array $toneCues = null;
    public int $variantCount;
    public array $variants;
    public ?string $workspaceId = null;
}

/** AiProvider entity data model. */
class AiProvider
{
    public ?string $actorId = null;
    public ?string $correlationId = null;
    public ?float $limit = null;
    public ?string $mappingMode = null;
    public ?int $maxSlots = null;
    public string $prompt;
    public string $sourceImageUrl;
    public ?array $texts = null;
    public ?array $trendSignals = null;
    public ?string $workspaceId = null;
}

/** Request payload for AiProvider#load. */
class AiProviderLoadMatch
{
    public ?string $actorId = null;
    public ?string $correlationId = null;
    public ?float $limit = null;
    public ?string $mappingMode = null;
    public ?int $maxSlots = null;
    public ?string $prompt = null;
    public ?string $sourceImageUrl = null;
    public ?array $texts = null;
    public ?array $trendSignals = null;
    public ?string $workspaceId = null;
}

/** Request payload for AiProvider#create. */
class AiProviderCreateData
{
    public ?string $actorId = null;
    public ?string $correlationId = null;
    public ?float $limit = null;
    public ?string $mappingMode = null;
    public ?int $maxSlots = null;
    public string $prompt;
    public string $sourceImageUrl;
    public ?array $texts = null;
    public ?array $trendSignals = null;
    public ?string $workspaceId = null;
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
    public ?string $displayName = null;
    public string $email;
    public string $password;
}

/** Request payload for Auth#create. */
class AuthCreateData
{
    public ?string $displayName = null;
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
    public ?string $authorId = null;
    public string $message;
    public string $projectId;
}

/** Request payload for Collaboration#load. */
class CollaborationLoadMatch
{
    public ?string $authorId = null;
    public ?string $message = null;
    public ?string $projectId = null;
}

/** Request payload for Collaboration#create. */
class CollaborationCreateData
{
    public ?string $authorId = null;
    public string $message;
    public string $projectId;
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
    public array $canvas;
    public array $captions;
    public mixed $generationRunId = null;
    public mixed $generationVariantId = null;
    public string $imageDataUrl;
    public ?array $overlays = null;
    public string $sourceImageUrl;
    public ?string $templateSlug = null;
    public ?string $title = null;
    public ?string $visibility = null;
    public array $watermark;
}

/** Request payload for CreateMeme#create. */
class CreateMemeCreateData
{
    public array $canvas;
    public array $captions;
    public mixed $generationRunId = null;
    public mixed $generationVariantId = null;
    public string $imageDataUrl;
    public ?array $overlays = null;
    public string $sourceImageUrl;
    public ?string $templateSlug = null;
    public ?string $title = null;
    public ?string $visibility = null;
    public array $watermark;
}

/** DeveloperApi entity data model. */
class DeveloperApi
{
    public ?float $limit = null;
    public string $prompt;
    public ?array $trendSignals = null;
}

/** Request payload for DeveloperApi#load. */
class DeveloperApiLoadMatch
{
    public ?float $limit = null;
    public ?string $prompt = null;
    public ?array $trendSignals = null;
}

/** Request payload for DeveloperApi#create. */
class DeveloperApiCreateData
{
    public ?float $limit = null;
    public string $prompt;
    public ?array $trendSignals = null;
}

/** FreeCaptionMemeSuccess entity data model. */
class FreeCaptionMemeSuccess
{
    public array $captions;
    public string $templateSlug;
    public ?string $title = null;
    public ?string $visibility = null;
    public ?array $watermark = null;
}

/** Request payload for FreeCaptionMemeSuccess#create. */
class FreeCaptionMemeSuccessCreateData
{
    public array $captions;
    public string $templateSlug;
    public ?string $title = null;
    public ?string $visibility = null;
    public ?array $watermark = null;
}

/** FreeTemplateSearch entity data model. */
class FreeTemplateSearch
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public int $boxCount;
    public int $captionCount;
    public array $captions;
    public string $description;
    public mixed $durationMs = null;
    public mixed $exampleImageUrl = null;
    public mixed $frameCount = null;
    public mixed $height;
    public string $id;
    public string $imageUrl;
    public string $mediaType;
    public string $name;
    public ?string $posterImageUrl = null;
    public ?string $qualityStatus = null;
    public string $slug;
    public mixed $sourceTemplateId;
    public ?string $sourceUrl = null;
    public ?array $tags = null;
    public mixed $width;
}

/** Request payload for FreeTemplateSearch#list. */
class FreeTemplateSearchListMatch
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public ?array $captions = null;
    public ?string $description = null;
    public mixed $durationMs = null;
    public mixed $exampleImageUrl = null;
    public mixed $frameCount = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $mediaType = null;
    public ?string $name = null;
    public ?string $posterImageUrl = null;
    public ?string $qualityStatus = null;
    public ?string $slug = null;
    public mixed $sourceTemplateId = null;
    public ?string $sourceUrl = null;
    public ?array $tags = null;
    public mixed $width = null;
}

/** Generate entity data model. */
class Generate
{
    public ?string $base64 = null;
    public int $byteLength;
    public ?array $captions = null;
    public ?string $dataUrl = null;
    public int $delayMs;
    public ?int $durationMs = null;
    public string $filename;
    public ?int $fps = null;
    public string $gifSlug;
    public int $height;
    public string $mimeType;
    public int $pages;
    public array $parameters;
    public ?bool $returnBase64 = null;
    public int $sourceDurationMs;
    public ?int $startMs = null;
    public ?array $tags = null;
    public ?string $title = null;
    public int $width;
    public ?int $widthPx = null;
}

/** Request payload for Generate#create. */
class GenerateCreateData
{
    public ?string $base64 = null;
    public int $byteLength;
    public ?array $captions = null;
    public ?string $dataUrl = null;
    public int $delayMs;
    public ?int $durationMs = null;
    public string $filename;
    public ?int $fps = null;
    public string $gifSlug;
    public int $height;
    public string $mimeType;
    public int $pages;
    public array $parameters;
    public ?bool $returnBase64 = null;
    public int $sourceDurationMs;
    public ?int $startMs = null;
    public ?array $tags = null;
    public ?string $title = null;
    public int $width;
    public ?int $widthPx = null;
}

/** Growth entity data model. */
class Growth
{
    public ?string $accountId = null;
    public string $action;
    public ?string $actorId = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $externalAccountId = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $logExposure = null;
    public ?string $memeSlug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profiles = null;
    public ?string $shareSlug = null;
    public ?string $surface = null;
    public ?string $weekStart = null;
}

/** Request payload for Growth#load. */
class GrowthLoadMatch
{
    public ?string $accountId = null;
    public ?string $action = null;
    public ?string $actorId = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $externalAccountId = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $logExposure = null;
    public ?string $memeSlug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profiles = null;
    public ?string $shareSlug = null;
    public ?string $surface = null;
    public ?string $weekStart = null;
}

/** Request payload for Growth#create. */
class GrowthCreateData
{
    public ?string $accountId = null;
    public string $action;
    public ?string $actorId = null;
    public ?string $caption = null;
    public ?string $code = null;
    public ?string $externalAccountId = null;
    public ?string $handle = null;
    public ?int $limit = null;
    public ?bool $logExposure = null;
    public ?string $memeSlug = null;
    public ?string $now = null;
    public ?string $platform = null;
    public ?array $profiles = null;
    public ?string $shareSlug = null;
    public ?string $surface = null;
    public ?string $weekStart = null;
}

/** ListMeme entity data model. */
class ListMeme
{
    public string $altText;
    public string $canonicalImageUrl;
    public string $createdAt;
    public string $imageUrl;
    public string $nsfwStatus;
    public string $shareSlug;
    public string $shareUrl;
    public int $shareViews;
    public string $slug;
    public array $tags;
    public string $templateSlug;
    public string $title;
    public string $visibility;
}

/** Request payload for ListMeme#list. */
class ListMemeListMatch
{
    public ?string $altText = null;
    public ?string $canonicalImageUrl = null;
    public ?string $createdAt = null;
    public ?string $imageUrl = null;
    public ?string $nsfwStatus = null;
    public ?string $shareSlug = null;
    public ?string $shareUrl = null;
    public ?int $shareViews = null;
    public ?string $slug = null;
    public ?array $tags = null;
    public ?string $templateSlug = null;
    public ?string $title = null;
    public ?string $visibility = null;
}

/** Media entity data model. */
class Media
{
    public string $action;
    public ?string $contentType = null;
    public ?int $expiresInSeconds = null;
    public ?string $ownerToken = null;
    public ?string $path = null;
    public ?string $prefix = null;
}

/** Request payload for Media#create. */
class MediaCreateData
{
    public string $action;
    public ?string $contentType = null;
    public ?int $expiresInSeconds = null;
    public ?string $ownerToken = null;
    public ?string $path = null;
    public ?string $prefix = null;
}

/** Meme entity data model. */
class Meme
{
    public string $altText;
    public string $canonicalImageUrl;
    public array $canvas;
    public array $captions;
    public string $createdAt;
    public string $imageUrl;
    public string $nsfwStatus;
    public array $overlays;
    public string $shareSlug;
    public string $shareUrl;
    public int $shareViews;
    public string $slug;
    public string $sourceImageUrl;
    public array $tags;
    public string $templateSlug;
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
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public array $captions;
    public ?array $categories = null;
    public string $description;
    public mixed $durationMs = null;
    public mixed $exampleImageUrl = null;
    public mixed $frameCount = null;
    public mixed $height;
    public string $id;
    public string $imageUrl;
    public string $mediaType;
    public string $name;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public string $slug;
    public mixed $sourceTemplateId;
    public ?string $sourceUrl = null;
    public array $tags;
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
    public ?string $stylePreset = null;
    public ?string $systemPrompt = null;
    public ?string $watermarkText = null;
    public ?string $websiteUrl = null;
}

/** Request payload for StandaloneAgentBootstrap#create. */
class StandaloneAgentBootstrapCreateData
{
    public ?string $description = null;
    public string $handle;
    public ?string $locale = null;
    public string $name;
    public ?string $stylePreset = null;
    public ?string $systemPrompt = null;
    public ?string $watermarkText = null;
    public ?string $websiteUrl = null;
}

/** Template entity data model. */
class Template
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public ?array $captions = null;
    public ?array $categories = null;
    public string $description;
    public ?int $durationMs = null;
    public mixed $exampleImageUrl = null;
    public ?int $fps = null;
    public mixed $frameCount = null;
    public ?string $gifSlug = null;
    public mixed $height;
    public string $id;
    public string $imageUrl;
    public string $mediaType;
    public string $name;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public ?bool $returnBase64 = null;
    public string $slug;
    public mixed $sourceTemplateId;
    public ?string $sourceUrl = null;
    public ?int $startMs = null;
    public ?array $tags = null;
    public ?string $title = null;
    public mixed $width;
    public ?int $widthPx = null;
}

/** Request payload for Template#list. */
class TemplateListMatch
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public ?array $captions = null;
    public ?array $categories = null;
    public ?string $description = null;
    public ?int $durationMs = null;
    public mixed $exampleImageUrl = null;
    public ?int $fps = null;
    public mixed $frameCount = null;
    public ?string $gifSlug = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $mediaType = null;
    public ?string $name = null;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public ?bool $returnBase64 = null;
    public ?string $slug = null;
    public mixed $sourceTemplateId = null;
    public ?string $sourceUrl = null;
    public ?int $startMs = null;
    public ?array $tags = null;
    public ?string $title = null;
    public mixed $width = null;
    public ?int $widthPx = null;
}

/** Request payload for Template#create. */
class TemplateCreateData
{
    public string $slug;
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public ?array $captions = null;
    public ?array $categories = null;
    public string $description;
    public ?int $durationMs = null;
    public mixed $exampleImageUrl = null;
    public ?int $fps = null;
    public mixed $frameCount = null;
    public ?string $gifSlug = null;
    public mixed $height;
    public string $id;
    public string $imageUrl;
    public string $mediaType;
    public string $name;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public ?bool $returnBase64 = null;
    public mixed $sourceTemplateId;
    public ?string $sourceUrl = null;
    public ?int $startMs = null;
    public ?array $tags = null;
    public ?string $title = null;
    public mixed $width;
    public ?int $widthPx = null;
}

/** TemplateSearch entity data model. */
class TemplateSearch
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public array $captions;
    public ?array $categories = null;
    public string $description;
    public mixed $durationMs = null;
    public mixed $exampleImageUrl = null;
    public mixed $frameCount = null;
    public mixed $height;
    public string $id;
    public string $imageUrl;
    public string $mediaType;
    public string $name;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public string $slug;
    public mixed $sourceTemplateId;
    public ?string $sourceUrl = null;
    public array $tags;
    public mixed $width;
}

/** Request payload for TemplateSearch#list. */
class TemplateSearchListMatch
{
    public ?bool $animated = null;
    public mixed $assetBytes = null;
    public ?string $assetContentType = null;
    public ?int $boxCount = null;
    public ?int $captionCount = null;
    public ?array $captions = null;
    public ?array $categories = null;
    public ?string $description = null;
    public mixed $durationMs = null;
    public mixed $exampleImageUrl = null;
    public mixed $frameCount = null;
    public mixed $height = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $mediaType = null;
    public ?string $name = null;
    public ?string $posterImageUrl = null;
    public ?string $previewImageUrl = null;
    public ?string $qualityStatus = null;
    public ?string $slug = null;
    public mixed $sourceTemplateId = null;
    public ?string $sourceUrl = null;
    public ?array $tags = null;
    public mixed $width = null;
}

/** TrendAlert entity data model. */
class TrendAlert
{
    public string $action;
    public string $actorId;
    public ?float $aggressiveness = null;
    public string $alertId;
    public ?array $channels = null;
    public ?bool $deliverAllAlerts = null;
    public ?array $event = null;
    public ?array $explicitNiches = null;
    public ?array $explicitRegions = null;
    public ?array $explicitSources = null;
    public ?array $explicitTopics = null;
    public ?int $followerCount = null;
    public ?string $niche = null;
    public ?string $region = null;
    public ?string $source = null;
    public string $topic;
}

/** Request payload for TrendAlert#load. */
class TrendAlertLoadMatch
{
    public ?string $action = null;
    public ?string $actorId = null;
    public ?float $aggressiveness = null;
    public ?string $alertId = null;
    public ?array $channels = null;
    public ?bool $deliverAllAlerts = null;
    public ?array $event = null;
    public ?array $explicitNiches = null;
    public ?array $explicitRegions = null;
    public ?array $explicitSources = null;
    public ?array $explicitTopics = null;
    public ?int $followerCount = null;
    public ?string $niche = null;
    public ?string $region = null;
    public ?string $source = null;
    public ?string $topic = null;
}

/** Request payload for TrendAlert#create. */
class TrendAlertCreateData
{
    public string $action;
    public string $actorId;
    public ?float $aggressiveness = null;
    public string $alertId;
    public ?array $channels = null;
    public ?bool $deliverAllAlerts = null;
    public ?array $event = null;
    public ?array $explicitNiches = null;
    public ?array $explicitRegions = null;
    public ?array $explicitSources = null;
    public ?array $explicitTopics = null;
    public ?int $followerCount = null;
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
    public ?string $assetId = null;
    public ?float $atMs = null;
    public ?string $audioAssetId = null;
    public ?int $beatOffsetMs = null;
    public ?float $bitrateKbps = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $durationMs = null;
    public float $durationSeconds;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frameRate = null;
    public string $inputFormat;
    public ?float $intensity = null;
    public ?string $jobId = null;
    public ?string $locale = null;
    public string $mimeType;
    public ?string $name = null;
    public ?float $offsetMs = null;
    public string $outputPresetId;
    public ?string $outputUrl = null;
    public string $planTier;
    public string $presetId;
    public ?float $progressPercent = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?string $property = null;
    public ?string $sourceDeviceId = null;
    public ?string $sourceUrl = null;
    public ?string $stage = null;
    public ?float $startMs = null;
    public ?string $stylePresetId = null;
    public ?bool $syncToBeatGrid = null;
    public ?string $tone = null;
    public ?string $trackId = null;
    public ?string $transcript = null;
    public ?array $trendKeywords = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?float $value = null;
    public ?bool $watermarkEnabled = null;
    public ?string $watermarkText = null;
    public ?string $workerId = null;
}

/** Request payload for Video#load. */
class VideoLoadMatch
{
    public ?string $action = null;
    public ?string $assetId = null;
    public ?float $atMs = null;
    public ?string $audioAssetId = null;
    public ?int $beatOffsetMs = null;
    public ?float $bitrateKbps = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $durationMs = null;
    public ?float $durationSeconds = null;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frameRate = null;
    public ?string $inputFormat = null;
    public ?float $intensity = null;
    public ?string $jobId = null;
    public ?string $locale = null;
    public ?string $mimeType = null;
    public ?string $name = null;
    public ?float $offsetMs = null;
    public ?string $outputPresetId = null;
    public ?string $outputUrl = null;
    public ?string $planTier = null;
    public ?string $presetId = null;
    public ?float $progressPercent = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?string $property = null;
    public ?string $sourceDeviceId = null;
    public ?string $sourceUrl = null;
    public ?string $stage = null;
    public ?float $startMs = null;
    public ?string $stylePresetId = null;
    public ?bool $syncToBeatGrid = null;
    public ?string $tone = null;
    public ?string $trackId = null;
    public ?string $transcript = null;
    public ?array $trendKeywords = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?float $value = null;
    public ?bool $watermarkEnabled = null;
    public ?string $watermarkText = null;
    public ?string $workerId = null;
}

/** Request payload for Video#create. */
class VideoCreateData
{
    public ?string $action = null;
    public ?string $assetId = null;
    public ?float $atMs = null;
    public ?string $audioAssetId = null;
    public ?int $beatOffsetMs = null;
    public ?float $bitrateKbps = null;
    public ?int $bpm = null;
    public ?bool $cancelled = null;
    public ?string $container = null;
    public ?float $durationMs = null;
    public float $durationSeconds;
    public ?string $easing = null;
    public ?string $error = null;
    public ?float $frameRate = null;
    public string $inputFormat;
    public ?float $intensity = null;
    public ?string $jobId = null;
    public ?string $locale = null;
    public string $mimeType;
    public ?string $name = null;
    public ?float $offsetMs = null;
    public string $outputPresetId;
    public ?string $outputUrl = null;
    public string $planTier;
    public string $presetId;
    public ?float $progressPercent = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?string $property = null;
    public ?string $sourceDeviceId = null;
    public ?string $sourceUrl = null;
    public ?string $stage = null;
    public ?float $startMs = null;
    public ?string $stylePresetId = null;
    public ?bool $syncToBeatGrid = null;
    public ?string $tone = null;
    public ?string $trackId = null;
    public ?string $transcript = null;
    public ?array $trendKeywords = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?float $value = null;
    public ?bool $watermarkEnabled = null;
    public ?string $watermarkText = null;
    public ?string $workerId = null;
}

