<?php
declare(strict_types=1);

// MemesioContentCreation SDK utility: result_headers

class MemesioContentCreationResultHeaders
{
    public static function call(MemesioContentCreationContext $ctx): ?MemesioContentCreationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
