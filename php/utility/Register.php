<?php
declare(strict_types=1);

// SodeomSearch SDK utility registration

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

SodeomSearchUtility::setRegistrar(function (SodeomSearchUtility $u): void {
    $u->clean = [SodeomSearchClean::class, 'call'];
    $u->done = [SodeomSearchDone::class, 'call'];
    $u->make_error = [SodeomSearchMakeError::class, 'call'];
    $u->feature_add = [SodeomSearchFeatureAdd::class, 'call'];
    $u->feature_hook = [SodeomSearchFeatureHook::class, 'call'];
    $u->feature_init = [SodeomSearchFeatureInit::class, 'call'];
    $u->fetcher = [SodeomSearchFetcher::class, 'call'];
    $u->make_fetch_def = [SodeomSearchMakeFetchDef::class, 'call'];
    $u->make_context = [SodeomSearchMakeContext::class, 'call'];
    $u->make_options = [SodeomSearchMakeOptions::class, 'call'];
    $u->make_request = [SodeomSearchMakeRequest::class, 'call'];
    $u->make_response = [SodeomSearchMakeResponse::class, 'call'];
    $u->make_result = [SodeomSearchMakeResult::class, 'call'];
    $u->make_point = [SodeomSearchMakePoint::class, 'call'];
    $u->make_spec = [SodeomSearchMakeSpec::class, 'call'];
    $u->make_url = [SodeomSearchMakeUrl::class, 'call'];
    $u->param = [SodeomSearchParam::class, 'call'];
    $u->prepare_auth = [SodeomSearchPrepareAuth::class, 'call'];
    $u->prepare_body = [SodeomSearchPrepareBody::class, 'call'];
    $u->prepare_headers = [SodeomSearchPrepareHeaders::class, 'call'];
    $u->prepare_method = [SodeomSearchPrepareMethod::class, 'call'];
    $u->prepare_params = [SodeomSearchPrepareParams::class, 'call'];
    $u->prepare_path = [SodeomSearchPreparePath::class, 'call'];
    $u->prepare_query = [SodeomSearchPrepareQuery::class, 'call'];
    $u->result_basic = [SodeomSearchResultBasic::class, 'call'];
    $u->result_body = [SodeomSearchResultBody::class, 'call'];
    $u->result_headers = [SodeomSearchResultHeaders::class, 'call'];
    $u->transform_request = [SodeomSearchTransformRequest::class, 'call'];
    $u->transform_response = [SodeomSearchTransformResponse::class, 'call'];
});
