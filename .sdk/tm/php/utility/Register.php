<?php
declare(strict_types=1);

// MemesioContentCreation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MemesioContentCreationUtility::setRegistrar(function (MemesioContentCreationUtility $u): void {
    $u->clean = [MemesioContentCreationClean::class, 'call'];
    $u->done = [MemesioContentCreationDone::class, 'call'];
    $u->make_error = [MemesioContentCreationMakeError::class, 'call'];
    $u->feature_add = [MemesioContentCreationFeatureAdd::class, 'call'];
    $u->feature_hook = [MemesioContentCreationFeatureHook::class, 'call'];
    $u->feature_init = [MemesioContentCreationFeatureInit::class, 'call'];
    $u->fetcher = [MemesioContentCreationFetcher::class, 'call'];
    $u->make_fetch_def = [MemesioContentCreationMakeFetchDef::class, 'call'];
    $u->make_context = [MemesioContentCreationMakeContext::class, 'call'];
    $u->make_options = [MemesioContentCreationMakeOptions::class, 'call'];
    $u->make_request = [MemesioContentCreationMakeRequest::class, 'call'];
    $u->make_response = [MemesioContentCreationMakeResponse::class, 'call'];
    $u->make_result = [MemesioContentCreationMakeResult::class, 'call'];
    $u->make_point = [MemesioContentCreationMakePoint::class, 'call'];
    $u->make_spec = [MemesioContentCreationMakeSpec::class, 'call'];
    $u->make_url = [MemesioContentCreationMakeUrl::class, 'call'];
    $u->param = [MemesioContentCreationParam::class, 'call'];
    $u->prepare_auth = [MemesioContentCreationPrepareAuth::class, 'call'];
    $u->prepare_body = [MemesioContentCreationPrepareBody::class, 'call'];
    $u->prepare_headers = [MemesioContentCreationPrepareHeaders::class, 'call'];
    $u->prepare_method = [MemesioContentCreationPrepareMethod::class, 'call'];
    $u->prepare_params = [MemesioContentCreationPrepareParams::class, 'call'];
    $u->prepare_path = [MemesioContentCreationPreparePath::class, 'call'];
    $u->prepare_query = [MemesioContentCreationPrepareQuery::class, 'call'];
    $u->result_basic = [MemesioContentCreationResultBasic::class, 'call'];
    $u->result_body = [MemesioContentCreationResultBody::class, 'call'];
    $u->result_headers = [MemesioContentCreationResultHeaders::class, 'call'];
    $u->transform_request = [MemesioContentCreationTransformRequest::class, 'call'];
    $u->transform_response = [MemesioContentCreationTransformResponse::class, 'call'];
});
