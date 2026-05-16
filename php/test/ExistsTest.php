<?php
declare(strict_types=1);

// SodeomSearch SDK exists test

require_once __DIR__ . '/../sodeomsearch_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = SodeomSearchSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
