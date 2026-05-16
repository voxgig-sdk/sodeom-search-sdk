<?php
declare(strict_types=1);

// SodeomSearch SDK utility: prepare_headers

class SodeomSearchPrepareHeaders
{
    public static function call(SodeomSearchContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
