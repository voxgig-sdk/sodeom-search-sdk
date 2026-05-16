# SodeomSearch SDK utility registration
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

SodeomSearchUtility.registrar = ->(u) {
  u.clean = SodeomSearchUtilities::Clean
  u.done = SodeomSearchUtilities::Done
  u.make_error = SodeomSearchUtilities::MakeError
  u.feature_add = SodeomSearchUtilities::FeatureAdd
  u.feature_hook = SodeomSearchUtilities::FeatureHook
  u.feature_init = SodeomSearchUtilities::FeatureInit
  u.fetcher = SodeomSearchUtilities::Fetcher
  u.make_fetch_def = SodeomSearchUtilities::MakeFetchDef
  u.make_context = SodeomSearchUtilities::MakeContext
  u.make_options = SodeomSearchUtilities::MakeOptions
  u.make_request = SodeomSearchUtilities::MakeRequest
  u.make_response = SodeomSearchUtilities::MakeResponse
  u.make_result = SodeomSearchUtilities::MakeResult
  u.make_point = SodeomSearchUtilities::MakePoint
  u.make_spec = SodeomSearchUtilities::MakeSpec
  u.make_url = SodeomSearchUtilities::MakeUrl
  u.param = SodeomSearchUtilities::Param
  u.prepare_auth = SodeomSearchUtilities::PrepareAuth
  u.prepare_body = SodeomSearchUtilities::PrepareBody
  u.prepare_headers = SodeomSearchUtilities::PrepareHeaders
  u.prepare_method = SodeomSearchUtilities::PrepareMethod
  u.prepare_params = SodeomSearchUtilities::PrepareParams
  u.prepare_path = SodeomSearchUtilities::PreparePath
  u.prepare_query = SodeomSearchUtilities::PrepareQuery
  u.result_basic = SodeomSearchUtilities::ResultBasic
  u.result_body = SodeomSearchUtilities::ResultBody
  u.result_headers = SodeomSearchUtilities::ResultHeaders
  u.transform_request = SodeomSearchUtilities::TransformRequest
  u.transform_response = SodeomSearchUtilities::TransformResponse
}
