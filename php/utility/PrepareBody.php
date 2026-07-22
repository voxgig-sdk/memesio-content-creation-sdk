<?php
declare(strict_types=1);

// MemesioContentCreation SDK utility: prepare_body

class MemesioContentCreationPrepareBody
{
    public static function call(MemesioContentCreationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
