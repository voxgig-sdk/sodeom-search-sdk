<?php
declare(strict_types=1);

// SodeomSearch SDK utility: result_body

class SodeomSearchResultBody
{
    public static function call(SodeomSearchContext $ctx): ?SodeomSearchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
