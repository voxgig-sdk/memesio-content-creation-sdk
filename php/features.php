<?php
declare(strict_types=1);

// MemesioContentCreation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MemesioContentCreationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MemesioContentCreationBaseFeature();
            case "test":
                return new MemesioContentCreationTestFeature();
            default:
                return new MemesioContentCreationBaseFeature();
        }
    }
}
