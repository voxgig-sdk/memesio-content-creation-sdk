<?php
declare(strict_types=1);

// MemesioContentCreation SDK utility: result_body

class MemesioContentCreationResultBody
{
    public static function call(MemesioContentCreationContext $ctx): ?MemesioContentCreationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
