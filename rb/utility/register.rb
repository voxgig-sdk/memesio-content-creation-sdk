# MemesioContentCreation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MemesioContentCreationUtility.registrar = ->(u) {
  u.clean = MemesioContentCreationUtilities::Clean
  u.done = MemesioContentCreationUtilities::Done
  u.make_error = MemesioContentCreationUtilities::MakeError
  u.feature_add = MemesioContentCreationUtilities::FeatureAdd
  u.feature_hook = MemesioContentCreationUtilities::FeatureHook
  u.feature_init = MemesioContentCreationUtilities::FeatureInit
  u.fetcher = MemesioContentCreationUtilities::Fetcher
  u.make_fetch_def = MemesioContentCreationUtilities::MakeFetchDef
  u.make_context = MemesioContentCreationUtilities::MakeContext
  u.make_options = MemesioContentCreationUtilities::MakeOptions
  u.make_request = MemesioContentCreationUtilities::MakeRequest
  u.make_response = MemesioContentCreationUtilities::MakeResponse
  u.make_result = MemesioContentCreationUtilities::MakeResult
  u.make_point = MemesioContentCreationUtilities::MakePoint
  u.make_spec = MemesioContentCreationUtilities::MakeSpec
  u.make_url = MemesioContentCreationUtilities::MakeUrl
  u.param = MemesioContentCreationUtilities::Param
  u.prepare_auth = MemesioContentCreationUtilities::PrepareAuth
  u.prepare_body = MemesioContentCreationUtilities::PrepareBody
  u.prepare_headers = MemesioContentCreationUtilities::PrepareHeaders
  u.prepare_method = MemesioContentCreationUtilities::PrepareMethod
  u.prepare_params = MemesioContentCreationUtilities::PrepareParams
  u.prepare_path = MemesioContentCreationUtilities::PreparePath
  u.prepare_query = MemesioContentCreationUtilities::PrepareQuery
  u.result_basic = MemesioContentCreationUtilities::ResultBasic
  u.result_body = MemesioContentCreationUtilities::ResultBody
  u.result_headers = MemesioContentCreationUtilities::ResultHeaders
  u.transform_request = MemesioContentCreationUtilities::TransformRequest
  u.transform_response = MemesioContentCreationUtilities::TransformResponse
}
