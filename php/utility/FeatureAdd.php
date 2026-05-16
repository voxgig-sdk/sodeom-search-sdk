<?php
declare(strict_types=1);

// SodeomSearch SDK utility: feature_add

class SodeomSearchFeatureAdd
{
    public static function call(SodeomSearchContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
