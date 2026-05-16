<?php
declare(strict_types=1);

// SodeomSearch SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SodeomSearchMakeContext
{
    public static function call(array $ctxmap, ?SodeomSearchContext $basectx): SodeomSearchContext
    {
        return new SodeomSearchContext($ctxmap, $basectx);
    }
}
