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
# @!attribute [rw] stylePreset
#   @return [String, nil]
#
# @!attribute [rw] systemPrompt
#   @return [String, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] websiteUrl
#   @return [String, nil]
Agent = Struct.new(
  :description,
  :locale,
  :name,
  :slug,
  :status,
  :stylePreset,
  :systemPrompt,
  :watermarkText,
  :websiteUrl,
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
# @!attribute [rw] stylePreset
#   @return [String, nil]
#
# @!attribute [rw] systemPrompt
#   @return [String, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] websiteUrl
#   @return [String, nil]
AgentCreateData = Struct.new(
  :description,
  :locale,
  :name,
  :slug,
  :status,
  :stylePreset,
  :systemPrompt,
  :watermarkText,
  :websiteUrl,
  keyword_init: true
)

# Request payload for Agent#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stylePreset
#   @return [String, nil]
#
# @!attribute [rw] systemPrompt
#   @return [String, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] websiteUrl
#   @return [String, nil]
AgentUpdateData = Struct.new(
  :id,
  :description,
  :locale,
  :name,
  :slug,
  :status,
  :stylePreset,
  :systemPrompt,
  :watermarkText,
  :websiteUrl,
  keyword_init: true
)

# AgentInfra entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] chatId
#   @return [String]
#
# @!attribute [rw] memeSlug
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] payoutReference
#   @return [String, nil]
#
# @!attribute [rw] payoutStatus
#   @return [String, nil]
#
# @!attribute [rw] phoneOrChatId
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] proof
#   @return [Hash, nil]
#
# @!attribute [rw] quotaBoostPerDay
#   @return [Integer, nil]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
AgentInfra = Struct.new(
  :action,
  :chatId,
  :memeSlug,
  :metadata,
  :payoutReference,
  :payoutStatus,
  :phoneOrChatId,
  :prompt,
  :proof,
  :quotaBoostPerDay,
  :scopes,
  :userId,
  :weekStart,
  keyword_init: true
)

# Request payload for AgentInfra#load.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] chatId
#   @return [String, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] payoutReference
#   @return [String, nil]
#
# @!attribute [rw] payoutStatus
#   @return [String, nil]
#
# @!attribute [rw] phoneOrChatId
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] proof
#   @return [Hash, nil]
#
# @!attribute [rw] quotaBoostPerDay
#   @return [Integer, nil]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
AgentInfraLoadMatch = Struct.new(
  :action,
  :chatId,
  :memeSlug,
  :metadata,
  :payoutReference,
  :payoutStatus,
  :phoneOrChatId,
  :prompt,
  :proof,
  :quotaBoostPerDay,
  :scopes,
  :userId,
  :weekStart,
  keyword_init: true
)

# Request payload for AgentInfra#create.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] unlock_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] chatId
#   @return [String]
#
# @!attribute [rw] memeSlug
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] payoutReference
#   @return [String, nil]
#
# @!attribute [rw] payoutStatus
#   @return [String, nil]
#
# @!attribute [rw] phoneOrChatId
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] proof
#   @return [Hash, nil]
#
# @!attribute [rw] quotaBoostPerDay
#   @return [Integer, nil]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
AgentInfraCreateData = Struct.new(
  :agent_id,
  :unlock_id,
  :action,
  :chatId,
  :memeSlug,
  :metadata,
  :payoutReference,
  :payoutStatus,
  :phoneOrChatId,
  :prompt,
  :proof,
  :quotaBoostPerDay,
  :scopes,
  :userId,
  :weekStart,
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
# @!attribute [rw] blockedTerms
#   @return [Array, nil]
#
# @!attribute [rw] canvasText
#   @return [Array]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionSets
#   @return [Array, nil]
#
# @!attribute [rw] entities
#   @return [Array, nil]
#
# @!attribute [rw] fallbackUsed
#   @return [Boolean, nil]
#
# @!attribute [rw] generationStrategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] memeId
#   @return [String, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] optionCount
#   @return [Integer, nil]
#
# @!attribute [rw] ownerToken
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] referenceCaptions
#   @return [Array, nil]
#
# @!attribute [rw] rewriteNote
#   @return [String, nil]
#
# @!attribute [rw] sceneSummary
#   @return [String, nil]
#
# @!attribute [rw] templateDescription
#   @return [String, nil]
#
# @!attribute [rw] templateName
#   @return [String, nil]
#
# @!attribute [rw] templateTags
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String]
#
# @!attribute [rw] toneCues
#   @return [Array, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] trendReferences
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] variationOffset
#   @return [Integer, nil]
#
# @!attribute [rw] voiceRules
#   @return [Array, nil]
AiCaption = Struct.new(
  :blockedTerms,
  :canvasText,
  :captionCount,
  :captionSets,
  :entities,
  :fallbackUsed,
  :generationStrategy,
  :locale,
  :memeId,
  :memeSlug,
  :name,
  :ok,
  :optionCount,
  :ownerToken,
  :providerId,
  :referenceCaptions,
  :rewriteNote,
  :sceneSummary,
  :templateDescription,
  :templateName,
  :templateTags,
  :tone,
  :toneCues,
  :trendKeywords,
  :trendReferences,
  :trendSignals,
  :variationOffset,
  :voiceRules,
  keyword_init: true
)

# Request payload for AiCaption#load.
#
# @!attribute [rw] blockedTerms
#   @return [Array, nil]
#
# @!attribute [rw] canvasText
#   @return [Array, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionSets
#   @return [Array, nil]
#
# @!attribute [rw] entities
#   @return [Array, nil]
#
# @!attribute [rw] fallbackUsed
#   @return [Boolean, nil]
#
# @!attribute [rw] generationStrategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] memeId
#   @return [String, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] optionCount
#   @return [Integer, nil]
#
# @!attribute [rw] ownerToken
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] referenceCaptions
#   @return [Array, nil]
#
# @!attribute [rw] rewriteNote
#   @return [String, nil]
#
# @!attribute [rw] sceneSummary
#   @return [String, nil]
#
# @!attribute [rw] templateDescription
#   @return [String, nil]
#
# @!attribute [rw] templateName
#   @return [String, nil]
#
# @!attribute [rw] templateTags
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] toneCues
#   @return [Array, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] trendReferences
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] variationOffset
#   @return [Integer, nil]
#
# @!attribute [rw] voiceRules
#   @return [Array, nil]
AiCaptionLoadMatch = Struct.new(
  :blockedTerms,
  :canvasText,
  :captionCount,
  :captionSets,
  :entities,
  :fallbackUsed,
  :generationStrategy,
  :locale,
  :memeId,
  :memeSlug,
  :name,
  :ok,
  :optionCount,
  :ownerToken,
  :providerId,
  :referenceCaptions,
  :rewriteNote,
  :sceneSummary,
  :templateDescription,
  :templateName,
  :templateTags,
  :tone,
  :toneCues,
  :trendKeywords,
  :trendReferences,
  :trendSignals,
  :variationOffset,
  :voiceRules,
  keyword_init: true
)

# Request payload for AiCaption#create.
#
# @!attribute [rw] blockedTerms
#   @return [Array, nil]
#
# @!attribute [rw] canvasText
#   @return [Array]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionSets
#   @return [Array, nil]
#
# @!attribute [rw] entities
#   @return [Array, nil]
#
# @!attribute [rw] fallbackUsed
#   @return [Boolean, nil]
#
# @!attribute [rw] generationStrategy
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] memeId
#   @return [String, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] optionCount
#   @return [Integer, nil]
#
# @!attribute [rw] ownerToken
#   @return [String, nil]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] referenceCaptions
#   @return [Array, nil]
#
# @!attribute [rw] rewriteNote
#   @return [String, nil]
#
# @!attribute [rw] sceneSummary
#   @return [String, nil]
#
# @!attribute [rw] templateDescription
#   @return [String, nil]
#
# @!attribute [rw] templateName
#   @return [String, nil]
#
# @!attribute [rw] templateTags
#   @return [Array, nil]
#
# @!attribute [rw] tone
#   @return [String]
#
# @!attribute [rw] toneCues
#   @return [Array, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] trendReferences
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] variationOffset
#   @return [Integer, nil]
#
# @!attribute [rw] voiceRules
#   @return [Array, nil]
AiCaptionCreateData = Struct.new(
  :blockedTerms,
  :canvasText,
  :captionCount,
  :captionSets,
  :entities,
  :fallbackUsed,
  :generationStrategy,
  :locale,
  :memeId,
  :memeSlug,
  :name,
  :ok,
  :optionCount,
  :ownerToken,
  :providerId,
  :referenceCaptions,
  :rewriteNote,
  :sceneSummary,
  :templateDescription,
  :templateName,
  :templateTags,
  :tone,
  :toneCues,
  :trendKeywords,
  :trendReferences,
  :trendSignals,
  :variationOffset,
  :voiceRules,
  keyword_init: true
)

# AiJob entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] afterState
#   @return [Hash, nil]
#
# @!attribute [rw] attempts
#   @return [Integer, nil]
#
# @!attribute [rw] beforeState
#   @return [Hash, nil]
#
# @!attribute [rw] brushEdits
#   @return [Array, nil]
#
# @!attribute [rw] capability
#   @return [String]
#
# @!attribute [rw] celebrityConfidence
#   @return [Float, nil]
#
# @!attribute [rw] consentAttested
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] detectedFaceCount
#   @return [Float]
#
# @!attribute [rw] edgeRefinement
#   @return [Float, nil]
#
# @!attribute [rw] estimatedCostUsd
#   @return [Float, nil]
#
# @!attribute [rw] frameTimeMs
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
# @!attribute [rw] layerId
#   @return [String]
#
# @!attribute [rw] layerType
#   @return [String, nil]
#
# @!attribute [rw] maxAttempts
#   @return [Integer, nil]
#
# @!attribute [rw] maxFaces
#   @return [Float, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nsfwScore
#   @return [Float, nil]
#
# @!attribute [rw] output
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] runAfterMs
#   @return [Integer, nil]
#
# @!attribute [rw] sourceAssetUrl
#   @return [String]
#
# @!attribute [rw] sourceFaceIndex
#   @return [Float, nil]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetAssetUrl
#   @return [String]
#
# @!attribute [rw] targetFaceIndex
#   @return [Float, nil]
#
# @!attribute [rw] timeoutMs
#   @return [Integer, nil]
#
# @!attribute [rw] traceId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] versionId
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Float]
#
# @!attribute [rw] workerId
#   @return [String]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiJob = Struct.new(
  :action,
  :actorId,
  :afterState,
  :attempts,
  :beforeState,
  :brushEdits,
  :capability,
  :celebrityConfidence,
  :consentAttested,
  :createdAt,
  :detectedFaceCount,
  :edgeRefinement,
  :estimatedCostUsd,
  :frameTimeMs,
  :height,
  :id,
  :input,
  :layerId,
  :layerType,
  :maxAttempts,
  :maxFaces,
  :mediaType,
  :metadata,
  :nsfwScore,
  :output,
  :projectId,
  :providerId,
  :reason,
  :runAfterMs,
  :sourceAssetUrl,
  :sourceFaceIndex,
  :sourceImageUrl,
  :status,
  :targetAssetUrl,
  :targetFaceIndex,
  :timeoutMs,
  :traceId,
  :updatedAt,
  :versionId,
  :width,
  :workerId,
  :workspaceId,
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
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] afterState
#   @return [Hash, nil]
#
# @!attribute [rw] attempts
#   @return [Integer, nil]
#
# @!attribute [rw] beforeState
#   @return [Hash, nil]
#
# @!attribute [rw] brushEdits
#   @return [Array, nil]
#
# @!attribute [rw] capability
#   @return [String]
#
# @!attribute [rw] celebrityConfidence
#   @return [Float, nil]
#
# @!attribute [rw] consentAttested
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] detectedFaceCount
#   @return [Float]
#
# @!attribute [rw] edgeRefinement
#   @return [Float, nil]
#
# @!attribute [rw] estimatedCostUsd
#   @return [Float, nil]
#
# @!attribute [rw] frameTimeMs
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
# @!attribute [rw] layerId
#   @return [String]
#
# @!attribute [rw] layerType
#   @return [String, nil]
#
# @!attribute [rw] maxAttempts
#   @return [Integer, nil]
#
# @!attribute [rw] maxFaces
#   @return [Float, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nsfwScore
#   @return [Float, nil]
#
# @!attribute [rw] output
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String]
#
# @!attribute [rw] providerId
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] runAfterMs
#   @return [Integer, nil]
#
# @!attribute [rw] sourceAssetUrl
#   @return [String]
#
# @!attribute [rw] sourceFaceIndex
#   @return [Float, nil]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetAssetUrl
#   @return [String]
#
# @!attribute [rw] targetFaceIndex
#   @return [Float, nil]
#
# @!attribute [rw] timeoutMs
#   @return [Integer, nil]
#
# @!attribute [rw] traceId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] versionId
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Float]
#
# @!attribute [rw] workerId
#   @return [String]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiJobCreateData = Struct.new(
  :job_id,
  :action,
  :actorId,
  :afterState,
  :attempts,
  :beforeState,
  :brushEdits,
  :capability,
  :celebrityConfidence,
  :consentAttested,
  :createdAt,
  :detectedFaceCount,
  :edgeRefinement,
  :estimatedCostUsd,
  :frameTimeMs,
  :height,
  :id,
  :input,
  :layerId,
  :layerType,
  :maxAttempts,
  :maxFaces,
  :mediaType,
  :metadata,
  :nsfwScore,
  :output,
  :projectId,
  :providerId,
  :reason,
  :runAfterMs,
  :sourceAssetUrl,
  :sourceFaceIndex,
  :sourceImageUrl,
  :status,
  :targetAssetUrl,
  :targetFaceIndex,
  :timeoutMs,
  :traceId,
  :updatedAt,
  :versionId,
  :width,
  :workerId,
  :workspaceId,
  keyword_init: true
)

# AiMemeGenerationSucceeded entity data model.
#
# @!attribute [rw] allowHeuristicFallback
#   @return [Boolean, nil]
#
# @!attribute [rw] captionSource
#   @return [String, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] correlationId
#   @return [String, nil]
#
# @!attribute [rw] degradedFromAsync
#   @return [Boolean, nil]
#
# @!attribute [rw] editableCaptions
#   @return [Array, nil]
#
# @!attribute [rw] flow
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] preferredProviderId
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] rewriteNote
#   @return [String, nil]
#
# @!attribute [rw] runId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] templateId
#   @return [String, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] toneCues
#   @return [Array, nil]
#
# @!attribute [rw] variantCount
#   @return [Integer]
#
# @!attribute [rw] variants
#   @return [Array]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiMemeGenerationSucceeded = Struct.new(
  :allowHeuristicFallback,
  :captionSource,
  :captions,
  :correlationId,
  :degradedFromAsync,
  :editableCaptions,
  :flow,
  :imageUrl,
  :mode,
  :ok,
  :preferredProviderId,
  :prompt,
  :rewriteNote,
  :runId,
  :status,
  :templateId,
  :tone,
  :toneCues,
  :variantCount,
  :variants,
  :workspaceId,
  keyword_init: true
)

# Request payload for AiMemeGenerationSucceeded#create.
#
# @!attribute [rw] allowHeuristicFallback
#   @return [Boolean, nil]
#
# @!attribute [rw] captionSource
#   @return [String, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] correlationId
#   @return [String, nil]
#
# @!attribute [rw] degradedFromAsync
#   @return [Boolean, nil]
#
# @!attribute [rw] editableCaptions
#   @return [Array, nil]
#
# @!attribute [rw] flow
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] preferredProviderId
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] rewriteNote
#   @return [String, nil]
#
# @!attribute [rw] runId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] templateId
#   @return [String, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] toneCues
#   @return [Array, nil]
#
# @!attribute [rw] variantCount
#   @return [Integer]
#
# @!attribute [rw] variants
#   @return [Array]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiMemeGenerationSucceededCreateData = Struct.new(
  :allowHeuristicFallback,
  :captionSource,
  :captions,
  :correlationId,
  :degradedFromAsync,
  :editableCaptions,
  :flow,
  :imageUrl,
  :mode,
  :ok,
  :preferredProviderId,
  :prompt,
  :rewriteNote,
  :runId,
  :status,
  :templateId,
  :tone,
  :toneCues,
  :variantCount,
  :variants,
  :workspaceId,
  keyword_init: true
)

# AiProvider entity data model.
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] correlationId
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mappingMode
#   @return [String, nil]
#
# @!attribute [rw] maxSlots
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] texts
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiProvider = Struct.new(
  :actorId,
  :correlationId,
  :limit,
  :mappingMode,
  :maxSlots,
  :prompt,
  :sourceImageUrl,
  :texts,
  :trendSignals,
  :workspaceId,
  keyword_init: true
)

# Request payload for AiProvider#load.
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] correlationId
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mappingMode
#   @return [String, nil]
#
# @!attribute [rw] maxSlots
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] sourceImageUrl
#   @return [String, nil]
#
# @!attribute [rw] texts
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiProviderLoadMatch = Struct.new(
  :actorId,
  :correlationId,
  :limit,
  :mappingMode,
  :maxSlots,
  :prompt,
  :sourceImageUrl,
  :texts,
  :trendSignals,
  :workspaceId,
  keyword_init: true
)

# Request payload for AiProvider#create.
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] correlationId
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] mappingMode
#   @return [String, nil]
#
# @!attribute [rw] maxSlots
#   @return [Integer, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] texts
#   @return [Array, nil]
#
# @!attribute [rw] trendSignals
#   @return [Array, nil]
#
# @!attribute [rw] workspaceId
#   @return [String, nil]
AiProviderCreateData = Struct.new(
  :actorId,
  :correlationId,
  :limit,
  :mappingMode,
  :maxSlots,
  :prompt,
  :sourceImageUrl,
  :texts,
  :trendSignals,
  :workspaceId,
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
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
Auth = Struct.new(
  :displayName,
  :email,
  :password,
  keyword_init: true
)

# Request payload for Auth#create.
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
AuthCreateData = Struct.new(
  :displayName,
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
# @!attribute [rw] authorId
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] projectId
#   @return [String]
Collaboration = Struct.new(
  :authorId,
  :message,
  :projectId,
  keyword_init: true
)

# Request payload for Collaboration#load.
#
# @!attribute [rw] authorId
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
CollaborationLoadMatch = Struct.new(
  :authorId,
  :message,
  :projectId,
  keyword_init: true
)

# Request payload for Collaboration#create.
#
# @!attribute [rw] authorId
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] projectId
#   @return [String]
CollaborationCreateData = Struct.new(
  :authorId,
  :message,
  :projectId,
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
# @!attribute [rw] canvas
#   @return [Hash]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] generationRunId
#   @return [Object, nil]
#
# @!attribute [rw] generationVariantId
#   @return [Object, nil]
#
# @!attribute [rw] imageDataUrl
#   @return [String]
#
# @!attribute [rw] overlays
#   @return [Array, nil]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] templateSlug
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
  :canvas,
  :captions,
  :generationRunId,
  :generationVariantId,
  :imageDataUrl,
  :overlays,
  :sourceImageUrl,
  :templateSlug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# Request payload for CreateMeme#create.
#
# @!attribute [rw] canvas
#   @return [Hash]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] generationRunId
#   @return [Object, nil]
#
# @!attribute [rw] generationVariantId
#   @return [Object, nil]
#
# @!attribute [rw] imageDataUrl
#   @return [String]
#
# @!attribute [rw] overlays
#   @return [Array, nil]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] templateSlug
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
  :canvas,
  :captions,
  :generationRunId,
  :generationVariantId,
  :imageDataUrl,
  :overlays,
  :sourceImageUrl,
  :templateSlug,
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
# @!attribute [rw] trendSignals
#   @return [Array, nil]
DeveloperApi = Struct.new(
  :limit,
  :prompt,
  :trendSignals,
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
# @!attribute [rw] trendSignals
#   @return [Array, nil]
DeveloperApiLoadMatch = Struct.new(
  :limit,
  :prompt,
  :trendSignals,
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
# @!attribute [rw] trendSignals
#   @return [Array, nil]
DeveloperApiCreateData = Struct.new(
  :limit,
  :prompt,
  :trendSignals,
  keyword_init: true
)

# FreeCaptionMemeSuccess entity data model.
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] templateSlug
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
  :captions,
  :templateSlug,
  :title,
  :visibility,
  :watermark,
  keyword_init: true
)

# Request payload for FreeCaptionMemeSuccess#create.
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] templateSlug
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
  :captions,
  :templateSlug,
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
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer]
#
# @!attribute [rw] captionCount
#   @return [Integer]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] durationMs
#   @return [Object, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object]
FreeTemplateSearch = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :description,
  :durationMs,
  :exampleImageUrl,
  :frameCount,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :qualityStatus,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :tags,
  :width,
  keyword_init: true
)

# Request payload for FreeTemplateSearch#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durationMs
#   @return [Object, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
FreeTemplateSearchListMatch = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :description,
  :durationMs,
  :exampleImageUrl,
  :frameCount,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :qualityStatus,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :tags,
  :width,
  keyword_init: true
)

# Generate entity data model.
#
# @!attribute [rw] base64
#   @return [String, nil]
#
# @!attribute [rw] byteLength
#   @return [Integer]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] dataUrl
#   @return [String, nil]
#
# @!attribute [rw] delayMs
#   @return [Integer]
#
# @!attribute [rw] durationMs
#   @return [Integer, nil]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] gifSlug
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] pages
#   @return [Integer]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] returnBase64
#   @return [Boolean, nil]
#
# @!attribute [rw] sourceDurationMs
#   @return [Integer]
#
# @!attribute [rw] startMs
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer]
#
# @!attribute [rw] widthPx
#   @return [Integer, nil]
Generate = Struct.new(
  :base64,
  :byteLength,
  :captions,
  :dataUrl,
  :delayMs,
  :durationMs,
  :filename,
  :fps,
  :gifSlug,
  :height,
  :mimeType,
  :pages,
  :parameters,
  :returnBase64,
  :sourceDurationMs,
  :startMs,
  :tags,
  :title,
  :width,
  :widthPx,
  keyword_init: true
)

# Request payload for Generate#create.
#
# @!attribute [rw] base64
#   @return [String, nil]
#
# @!attribute [rw] byteLength
#   @return [Integer]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] dataUrl
#   @return [String, nil]
#
# @!attribute [rw] delayMs
#   @return [Integer]
#
# @!attribute [rw] durationMs
#   @return [Integer, nil]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] gifSlug
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] pages
#   @return [Integer]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] returnBase64
#   @return [Boolean, nil]
#
# @!attribute [rw] sourceDurationMs
#   @return [Integer]
#
# @!attribute [rw] startMs
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer]
#
# @!attribute [rw] widthPx
#   @return [Integer, nil]
GenerateCreateData = Struct.new(
  :base64,
  :byteLength,
  :captions,
  :dataUrl,
  :delayMs,
  :durationMs,
  :filename,
  :fps,
  :gifSlug,
  :height,
  :mimeType,
  :pages,
  :parameters,
  :returnBase64,
  :sourceDurationMs,
  :startMs,
  :tags,
  :title,
  :width,
  :widthPx,
  keyword_init: true
)

# Growth entity data model.
#
# @!attribute [rw] accountId
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] externalAccountId
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] logExposure
#   @return [Boolean, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profiles
#   @return [Array, nil]
#
# @!attribute [rw] shareSlug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
Growth = Struct.new(
  :accountId,
  :action,
  :actorId,
  :caption,
  :code,
  :externalAccountId,
  :handle,
  :limit,
  :logExposure,
  :memeSlug,
  :now,
  :platform,
  :profiles,
  :shareSlug,
  :surface,
  :weekStart,
  keyword_init: true
)

# Request payload for Growth#load.
#
# @!attribute [rw] accountId
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] externalAccountId
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] logExposure
#   @return [Boolean, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profiles
#   @return [Array, nil]
#
# @!attribute [rw] shareSlug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
GrowthLoadMatch = Struct.new(
  :accountId,
  :action,
  :actorId,
  :caption,
  :code,
  :externalAccountId,
  :handle,
  :limit,
  :logExposure,
  :memeSlug,
  :now,
  :platform,
  :profiles,
  :shareSlug,
  :surface,
  :weekStart,
  keyword_init: true
)

# Request payload for Growth#create.
#
# @!attribute [rw] accountId
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] externalAccountId
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] logExposure
#   @return [Boolean, nil]
#
# @!attribute [rw] memeSlug
#   @return [String, nil]
#
# @!attribute [rw] now
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] profiles
#   @return [Array, nil]
#
# @!attribute [rw] shareSlug
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [String, nil]
#
# @!attribute [rw] weekStart
#   @return [String, nil]
GrowthCreateData = Struct.new(
  :accountId,
  :action,
  :actorId,
  :caption,
  :code,
  :externalAccountId,
  :handle,
  :limit,
  :logExposure,
  :memeSlug,
  :now,
  :platform,
  :profiles,
  :shareSlug,
  :surface,
  :weekStart,
  keyword_init: true
)

# ListMeme entity data model.
#
# @!attribute [rw] altText
#   @return [String]
#
# @!attribute [rw] canonicalImageUrl
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] nsfwStatus
#   @return [String]
#
# @!attribute [rw] shareSlug
#   @return [String]
#
# @!attribute [rw] shareUrl
#   @return [String]
#
# @!attribute [rw] shareViews
#   @return [Integer]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] templateSlug
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
ListMeme = Struct.new(
  :altText,
  :canonicalImageUrl,
  :createdAt,
  :imageUrl,
  :nsfwStatus,
  :shareSlug,
  :shareUrl,
  :shareViews,
  :slug,
  :tags,
  :templateSlug,
  :title,
  :visibility,
  keyword_init: true
)

# Request payload for ListMeme#list.
#
# @!attribute [rw] altText
#   @return [String, nil]
#
# @!attribute [rw] canonicalImageUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] nsfwStatus
#   @return [String, nil]
#
# @!attribute [rw] shareSlug
#   @return [String, nil]
#
# @!attribute [rw] shareUrl
#   @return [String, nil]
#
# @!attribute [rw] shareViews
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] templateSlug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
ListMemeListMatch = Struct.new(
  :altText,
  :canonicalImageUrl,
  :createdAt,
  :imageUrl,
  :nsfwStatus,
  :shareSlug,
  :shareUrl,
  :shareViews,
  :slug,
  :tags,
  :templateSlug,
  :title,
  :visibility,
  keyword_init: true
)

# Media entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] contentType
#   @return [String, nil]
#
# @!attribute [rw] expiresInSeconds
#   @return [Integer, nil]
#
# @!attribute [rw] ownerToken
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
Media = Struct.new(
  :action,
  :contentType,
  :expiresInSeconds,
  :ownerToken,
  :path,
  :prefix,
  keyword_init: true
)

# Request payload for Media#create.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] contentType
#   @return [String, nil]
#
# @!attribute [rw] expiresInSeconds
#   @return [Integer, nil]
#
# @!attribute [rw] ownerToken
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
MediaCreateData = Struct.new(
  :action,
  :contentType,
  :expiresInSeconds,
  :ownerToken,
  :path,
  :prefix,
  keyword_init: true
)

# Meme entity data model.
#
# @!attribute [rw] altText
#   @return [String]
#
# @!attribute [rw] canonicalImageUrl
#   @return [String]
#
# @!attribute [rw] canvas
#   @return [Hash]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] nsfwStatus
#   @return [String]
#
# @!attribute [rw] overlays
#   @return [Array]
#
# @!attribute [rw] shareSlug
#   @return [String]
#
# @!attribute [rw] shareUrl
#   @return [String]
#
# @!attribute [rw] shareViews
#   @return [Integer]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] sourceImageUrl
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] templateSlug
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
  :altText,
  :canonicalImageUrl,
  :canvas,
  :captions,
  :createdAt,
  :imageUrl,
  :nsfwStatus,
  :overlays,
  :shareSlug,
  :shareUrl,
  :shareViews,
  :slug,
  :sourceImageUrl,
  :tags,
  :templateSlug,
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
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] durationMs
#   @return [Object, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] width
#   @return [Object]
PublicTemplateMediaItem = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :frameCount,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :tags,
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
# @!attribute [rw] stylePreset
#   @return [String, nil]
#
# @!attribute [rw] systemPrompt
#   @return [String, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] websiteUrl
#   @return [String, nil]
StandaloneAgentBootstrap = Struct.new(
  :description,
  :handle,
  :locale,
  :name,
  :stylePreset,
  :systemPrompt,
  :watermarkText,
  :websiteUrl,
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
# @!attribute [rw] stylePreset
#   @return [String, nil]
#
# @!attribute [rw] systemPrompt
#   @return [String, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] websiteUrl
#   @return [String, nil]
StandaloneAgentBootstrapCreateData = Struct.new(
  :description,
  :handle,
  :locale,
  :name,
  :stylePreset,
  :systemPrompt,
  :watermarkText,
  :websiteUrl,
  keyword_init: true
)

# Template entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] durationMs
#   @return [Integer, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] gifSlug
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] returnBase64
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Object]
#
# @!attribute [rw] widthPx
#   @return [Integer, nil]
Template = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :fps,
  :frameCount,
  :gifSlug,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :returnBase64,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :startMs,
  :tags,
  :title,
  :width,
  :widthPx,
  keyword_init: true
)

# Request payload for Template#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durationMs
#   @return [Integer, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] gifSlug
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] returnBase64
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
#
# @!attribute [rw] widthPx
#   @return [Integer, nil]
TemplateListMatch = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :fps,
  :frameCount,
  :gifSlug,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :returnBase64,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :startMs,
  :tags,
  :title,
  :width,
  :widthPx,
  keyword_init: true
)

# Request payload for Template#create.
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] durationMs
#   @return [Integer, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] fps
#   @return [Integer, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] gifSlug
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] returnBase64
#   @return [Boolean, nil]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Object]
#
# @!attribute [rw] widthPx
#   @return [Integer, nil]
TemplateCreateData = Struct.new(
  :slug,
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :fps,
  :frameCount,
  :gifSlug,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :returnBase64,
  :sourceTemplateId,
  :sourceUrl,
  :startMs,
  :tags,
  :title,
  :width,
  :widthPx,
  keyword_init: true
)

# TemplateSearch entity data model.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] durationMs
#   @return [Object, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array]
#
# @!attribute [rw] width
#   @return [Object]
TemplateSearch = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :frameCount,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :tags,
  :width,
  keyword_init: true
)

# Request payload for TemplateSearch#list.
#
# @!attribute [rw] animated
#   @return [Boolean, nil]
#
# @!attribute [rw] assetBytes
#   @return [Object, nil]
#
# @!attribute [rw] assetContentType
#   @return [String, nil]
#
# @!attribute [rw] boxCount
#   @return [Integer, nil]
#
# @!attribute [rw] captionCount
#   @return [Integer, nil]
#
# @!attribute [rw] captions
#   @return [Array, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] durationMs
#   @return [Object, nil]
#
# @!attribute [rw] exampleImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] frameCount
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] posterImageUrl
#   @return [String, nil]
#
# @!attribute [rw] previewImageUrl
#   @return [String, nil]
#
# @!attribute [rw] qualityStatus
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] sourceTemplateId
#   @return [Object, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] width
#   @return [Object, nil]
TemplateSearchListMatch = Struct.new(
  :animated,
  :assetBytes,
  :assetContentType,
  :boxCount,
  :captionCount,
  :captions,
  :categories,
  :description,
  :durationMs,
  :exampleImageUrl,
  :frameCount,
  :height,
  :id,
  :imageUrl,
  :mediaType,
  :name,
  :posterImageUrl,
  :previewImageUrl,
  :qualityStatus,
  :slug,
  :sourceTemplateId,
  :sourceUrl,
  :tags,
  :width,
  keyword_init: true
)

# TrendAlert entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] actorId
#   @return [String]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alertId
#   @return [String]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] deliverAllAlerts
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicitNiches
#   @return [Array, nil]
#
# @!attribute [rw] explicitRegions
#   @return [Array, nil]
#
# @!attribute [rw] explicitSources
#   @return [Array, nil]
#
# @!attribute [rw] explicitTopics
#   @return [Array, nil]
#
# @!attribute [rw] followerCount
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
  :actorId,
  :aggressiveness,
  :alertId,
  :channels,
  :deliverAllAlerts,
  :event,
  :explicitNiches,
  :explicitRegions,
  :explicitSources,
  :explicitTopics,
  :followerCount,
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
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alertId
#   @return [String, nil]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] deliverAllAlerts
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicitNiches
#   @return [Array, nil]
#
# @!attribute [rw] explicitRegions
#   @return [Array, nil]
#
# @!attribute [rw] explicitSources
#   @return [Array, nil]
#
# @!attribute [rw] explicitTopics
#   @return [Array, nil]
#
# @!attribute [rw] followerCount
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
  :actorId,
  :aggressiveness,
  :alertId,
  :channels,
  :deliverAllAlerts,
  :event,
  :explicitNiches,
  :explicitRegions,
  :explicitSources,
  :explicitTopics,
  :followerCount,
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
# @!attribute [rw] actorId
#   @return [String]
#
# @!attribute [rw] aggressiveness
#   @return [Float, nil]
#
# @!attribute [rw] alertId
#   @return [String]
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] deliverAllAlerts
#   @return [Boolean, nil]
#
# @!attribute [rw] event
#   @return [Hash, nil]
#
# @!attribute [rw] explicitNiches
#   @return [Array, nil]
#
# @!attribute [rw] explicitRegions
#   @return [Array, nil]
#
# @!attribute [rw] explicitSources
#   @return [Array, nil]
#
# @!attribute [rw] explicitTopics
#   @return [Array, nil]
#
# @!attribute [rw] followerCount
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
  :actorId,
  :aggressiveness,
  :alertId,
  :channels,
  :deliverAllAlerts,
  :event,
  :explicitNiches,
  :explicitRegions,
  :explicitSources,
  :explicitTopics,
  :followerCount,
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
# @!attribute [rw] assetId
#   @return [String, nil]
#
# @!attribute [rw] atMs
#   @return [Float, nil]
#
# @!attribute [rw] audioAssetId
#   @return [String, nil]
#
# @!attribute [rw] beatOffsetMs
#   @return [Integer, nil]
#
# @!attribute [rw] bitrateKbps
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
# @!attribute [rw] durationMs
#   @return [Float, nil]
#
# @!attribute [rw] durationSeconds
#   @return [Float]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frameRate
#   @return [Float, nil]
#
# @!attribute [rw] inputFormat
#   @return [String]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] jobId
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offsetMs
#   @return [Float, nil]
#
# @!attribute [rw] outputPresetId
#   @return [String]
#
# @!attribute [rw] outputUrl
#   @return [String, nil]
#
# @!attribute [rw] planTier
#   @return [String]
#
# @!attribute [rw] presetId
#   @return [String]
#
# @!attribute [rw] progressPercent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] sourceDeviceId
#   @return [String, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Float, nil]
#
# @!attribute [rw] stylePresetId
#   @return [String, nil]
#
# @!attribute [rw] syncToBeatGrid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] trackId
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermarkEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] workerId
#   @return [String, nil]
Video = Struct.new(
  :action,
  :assetId,
  :atMs,
  :audioAssetId,
  :beatOffsetMs,
  :bitrateKbps,
  :bpm,
  :cancelled,
  :container,
  :durationMs,
  :durationSeconds,
  :easing,
  :error,
  :frameRate,
  :inputFormat,
  :intensity,
  :jobId,
  :locale,
  :mimeType,
  :name,
  :offsetMs,
  :outputPresetId,
  :outputUrl,
  :planTier,
  :presetId,
  :progressPercent,
  :project,
  :projectId,
  :property,
  :sourceDeviceId,
  :sourceUrl,
  :stage,
  :startMs,
  :stylePresetId,
  :syncToBeatGrid,
  :tone,
  :trackId,
  :transcript,
  :trendKeywords,
  :type,
  :updatedAt,
  :value,
  :watermarkEnabled,
  :watermarkText,
  :workerId,
  keyword_init: true
)

# Request payload for Video#load.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] assetId
#   @return [String, nil]
#
# @!attribute [rw] atMs
#   @return [Float, nil]
#
# @!attribute [rw] audioAssetId
#   @return [String, nil]
#
# @!attribute [rw] beatOffsetMs
#   @return [Integer, nil]
#
# @!attribute [rw] bitrateKbps
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
# @!attribute [rw] durationMs
#   @return [Float, nil]
#
# @!attribute [rw] durationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frameRate
#   @return [Float, nil]
#
# @!attribute [rw] inputFormat
#   @return [String, nil]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] jobId
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mimeType
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offsetMs
#   @return [Float, nil]
#
# @!attribute [rw] outputPresetId
#   @return [String, nil]
#
# @!attribute [rw] outputUrl
#   @return [String, nil]
#
# @!attribute [rw] planTier
#   @return [String, nil]
#
# @!attribute [rw] presetId
#   @return [String, nil]
#
# @!attribute [rw] progressPercent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] sourceDeviceId
#   @return [String, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Float, nil]
#
# @!attribute [rw] stylePresetId
#   @return [String, nil]
#
# @!attribute [rw] syncToBeatGrid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] trackId
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermarkEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] workerId
#   @return [String, nil]
VideoLoadMatch = Struct.new(
  :action,
  :assetId,
  :atMs,
  :audioAssetId,
  :beatOffsetMs,
  :bitrateKbps,
  :bpm,
  :cancelled,
  :container,
  :durationMs,
  :durationSeconds,
  :easing,
  :error,
  :frameRate,
  :inputFormat,
  :intensity,
  :jobId,
  :locale,
  :mimeType,
  :name,
  :offsetMs,
  :outputPresetId,
  :outputUrl,
  :planTier,
  :presetId,
  :progressPercent,
  :project,
  :projectId,
  :property,
  :sourceDeviceId,
  :sourceUrl,
  :stage,
  :startMs,
  :stylePresetId,
  :syncToBeatGrid,
  :tone,
  :trackId,
  :transcript,
  :trendKeywords,
  :type,
  :updatedAt,
  :value,
  :watermarkEnabled,
  :watermarkText,
  :workerId,
  keyword_init: true
)

# Request payload for Video#create.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] assetId
#   @return [String, nil]
#
# @!attribute [rw] atMs
#   @return [Float, nil]
#
# @!attribute [rw] audioAssetId
#   @return [String, nil]
#
# @!attribute [rw] beatOffsetMs
#   @return [Integer, nil]
#
# @!attribute [rw] bitrateKbps
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
# @!attribute [rw] durationMs
#   @return [Float, nil]
#
# @!attribute [rw] durationSeconds
#   @return [Float]
#
# @!attribute [rw] easing
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] frameRate
#   @return [Float, nil]
#
# @!attribute [rw] inputFormat
#   @return [String]
#
# @!attribute [rw] intensity
#   @return [Float, nil]
#
# @!attribute [rw] jobId
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offsetMs
#   @return [Float, nil]
#
# @!attribute [rw] outputPresetId
#   @return [String]
#
# @!attribute [rw] outputUrl
#   @return [String, nil]
#
# @!attribute [rw] planTier
#   @return [String]
#
# @!attribute [rw] presetId
#   @return [String]
#
# @!attribute [rw] progressPercent
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [String, nil]
#
# @!attribute [rw] sourceDeviceId
#   @return [String, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] startMs
#   @return [Float, nil]
#
# @!attribute [rw] stylePresetId
#   @return [String, nil]
#
# @!attribute [rw] syncToBeatGrid
#   @return [Boolean, nil]
#
# @!attribute [rw] tone
#   @return [String, nil]
#
# @!attribute [rw] trackId
#   @return [String, nil]
#
# @!attribute [rw] transcript
#   @return [String, nil]
#
# @!attribute [rw] trendKeywords
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] watermarkEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] watermarkText
#   @return [String, nil]
#
# @!attribute [rw] workerId
#   @return [String, nil]
VideoCreateData = Struct.new(
  :action,
  :assetId,
  :atMs,
  :audioAssetId,
  :beatOffsetMs,
  :bitrateKbps,
  :bpm,
  :cancelled,
  :container,
  :durationMs,
  :durationSeconds,
  :easing,
  :error,
  :frameRate,
  :inputFormat,
  :intensity,
  :jobId,
  :locale,
  :mimeType,
  :name,
  :offsetMs,
  :outputPresetId,
  :outputUrl,
  :planTier,
  :presetId,
  :progressPercent,
  :project,
  :projectId,
  :property,
  :sourceDeviceId,
  :sourceUrl,
  :stage,
  :startMs,
  :stylePresetId,
  :syncToBeatGrid,
  :tone,
  :trackId,
  :transcript,
  :trendKeywords,
  :type,
  :updatedAt,
  :value,
  :watermarkEnabled,
  :watermarkText,
  :workerId,
  keyword_init: true
)

