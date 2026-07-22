<?php
declare(strict_types=1);

// MemesioContentCreation SDK exists test

require_once __DIR__ . '/../memesiocontentcreation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MemesioContentCreationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
