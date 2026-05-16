<?php
declare(strict_types=1);

// SodeomSearch SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SodeomSearchFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SodeomSearchBaseFeature();
            case "test":
                return new SodeomSearchTestFeature();
            default:
                return new SodeomSearchBaseFeature();
        }
    }
}
