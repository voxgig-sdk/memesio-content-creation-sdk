package voxgigmemesiocontentcreationsdk

import (
	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/core"
	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/entity"
	"github.com/voxgig-sdk/memesio-content-creation-sdk/go/feature"
	_ "github.com/voxgig-sdk/memesio-content-creation-sdk/go/utility"
)

// Type aliases preserve external API.
type MemesioContentCreationSDK = core.MemesioContentCreationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MemesioContentCreationEntity = core.MemesioContentCreationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MemesioContentCreationError = core.MemesioContentCreationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAgentEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAgentEntity(client, entopts)
	}
	core.NewAgentInfraEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAgentInfraEntity(client, entopts)
	}
	core.NewAiCaptionEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAiCaptionEntity(client, entopts)
	}
	core.NewAiJobEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAiJobEntity(client, entopts)
	}
	core.NewAiMemeGenerationSucceededEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAiMemeGenerationSucceededEntity(client, entopts)
	}
	core.NewAiProviderEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAiProviderEntity(client, entopts)
	}
	core.NewAnalyticsEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAnalyticsEntity(client, entopts)
	}
	core.NewAuthEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewAuthEntity(client, entopts)
	}
	core.NewBillingEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewBillingEntity(client, entopts)
	}
	core.NewCollaborationEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewCollaborationEntity(client, entopts)
	}
	core.NewComplianceEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewComplianceEntity(client, entopts)
	}
	core.NewCreateMemeEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewCreateMemeEntity(client, entopts)
	}
	core.NewDeveloperApiEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewDeveloperApiEntity(client, entopts)
	}
	core.NewFreeCaptionMemeSuccessEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewFreeCaptionMemeSuccessEntity(client, entopts)
	}
	core.NewFreeTemplateSearchEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewFreeTemplateSearchEntity(client, entopts)
	}
	core.NewGenerateEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewGenerateEntity(client, entopts)
	}
	core.NewGrowthEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewGrowthEntity(client, entopts)
	}
	core.NewListMemeEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewListMemeEntity(client, entopts)
	}
	core.NewMediaEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewMediaEntity(client, entopts)
	}
	core.NewMemeEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewMemeEntity(client, entopts)
	}
	core.NewPublicTemplateMediaItemEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewPublicTemplateMediaItemEntity(client, entopts)
	}
	core.NewStandaloneAgentBootstrapEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewStandaloneAgentBootstrapEntity(client, entopts)
	}
	core.NewTemplateEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewTemplateEntity(client, entopts)
	}
	core.NewTemplateSearchEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewTemplateSearchEntity(client, entopts)
	}
	core.NewTrendAlertEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewTrendAlertEntity(client, entopts)
	}
	core.NewUploadCaptionMemeSuccessEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewUploadCaptionMemeSuccessEntity(client, entopts)
	}
	core.NewVideoEntityFunc = func(client *core.MemesioContentCreationSDK, entopts map[string]any) core.MemesioContentCreationEntity {
		return entity.NewVideoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMemesioContentCreationSDK = core.NewMemesioContentCreationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMemesioContentCreationSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MemesioContentCreationSDK  { return NewMemesioContentCreationSDK(nil) }
func Test() *MemesioContentCreationSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
