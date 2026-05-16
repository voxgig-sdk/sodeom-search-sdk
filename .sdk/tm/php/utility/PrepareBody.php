<?php
declare(strict_types=1);

// SodeomSearch SDK utility: prepare_body

class SodeomSearchPrepareBody
{
    public static function call(SodeomSearchContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
