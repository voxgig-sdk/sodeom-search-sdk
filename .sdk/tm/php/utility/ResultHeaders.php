<?php
declare(strict_types=1);

// SodeomSearch SDK utility: result_headers

class SodeomSearchResultHeaders
{
    public static function call(SodeomSearchContext $ctx): ?SodeomSearchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
