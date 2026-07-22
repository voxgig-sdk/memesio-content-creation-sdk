<?php
declare(strict_types=1);

// MemesioContentCreation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MemesioContentCreationMakeContext
{
    public static function call(array $ctxmap, ?MemesioContentCreationContext $basectx): MemesioContentCreationContext
    {
        return new MemesioContentCreationContext($ctxmap, $basectx);
    }
}
