package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAgentEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAgentInfraEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAiCaptionEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAiJobEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAiMemeGenerationSucceededEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAiProviderEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAnalyticsEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewAuthEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewBillingEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewCollaborationEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewComplianceEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewCreateMemeEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewDeveloperApiEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewFreeCaptionMemeSuccessEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewFreeTemplateSearchEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewGenerateEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewGrowthEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewListMemeEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewMediaEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewMemeEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewPublicTemplateMediaItemEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewStandaloneAgentBootstrapEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewTemplateEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewTemplateSearchEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewTrendAlertEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewUploadCaptionMemeSuccessEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

var NewVideoEntityFunc func(client *MemesioContentCreationSDK, entopts map[string]any) MemesioContentCreationEntity

