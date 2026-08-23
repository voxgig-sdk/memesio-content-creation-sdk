<?php
declare(strict_types=1);

// MemesioContentCreation SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class MemesioContentCreationSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new MemesioContentCreationUtility();
        $this->_utility = $utility;

        $config = MemesioContentCreationConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = MemesioContentCreationHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = MemesioContentCreationHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!MemesioContentCreationFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, MemesioContentCreationFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return MemesioContentCreationUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = MemesioContentCreationHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = MemesioContentCreationHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = MemesioContentCreationHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new MemesioContentCreationSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new MemesioContentCreationError($op . "_allow",
                "MemesioContentCreationSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = MemesioContentCreationHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = MemesioContentCreationHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new MemesioContentCreationError("graphql_error",
                "MemesioContentCreationSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_agent = null;

    // Canonical facade: $client->Agent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent()
    // resolves here too.
    public function Agent($data = null)
    {
        require_once __DIR__ . '/entity/agent_entity.php';
        if ($data === null) {
            if ($this->_agent === null) {
                $this->_agent = new AgentEntity($this, null);
            }
            return $this->_agent;
        }
        return new AgentEntity($this, $data);
    }


    private $_agent_infra = null;

    // Canonical facade: $client->AgentInfra()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_infra()
    // resolves here too.
    public function AgentInfra($data = null)
    {
        require_once __DIR__ . '/entity/agent_infra_entity.php';
        if ($data === null) {
            if ($this->_agent_infra === null) {
                $this->_agent_infra = new AgentInfraEntity($this, null);
            }
            return $this->_agent_infra;
        }
        return new AgentInfraEntity($this, $data);
    }


    private $_ai_caption = null;

    // Canonical facade: $client->AiCaption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_caption()
    // resolves here too.
    public function AiCaption($data = null)
    {
        require_once __DIR__ . '/entity/ai_caption_entity.php';
        if ($data === null) {
            if ($this->_ai_caption === null) {
                $this->_ai_caption = new AiCaptionEntity($this, null);
            }
            return $this->_ai_caption;
        }
        return new AiCaptionEntity($this, $data);
    }


    private $_ai_job = null;

    // Canonical facade: $client->AiJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_job()
    // resolves here too.
    public function AiJob($data = null)
    {
        require_once __DIR__ . '/entity/ai_job_entity.php';
        if ($data === null) {
            if ($this->_ai_job === null) {
                $this->_ai_job = new AiJobEntity($this, null);
            }
            return $this->_ai_job;
        }
        return new AiJobEntity($this, $data);
    }


    private $_ai_meme_generation_succeeded = null;

    // Canonical facade: $client->AiMemeGenerationSucceeded()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_meme_generation_succeeded()
    // resolves here too.
    public function AiMemeGenerationSucceeded($data = null)
    {
        require_once __DIR__ . '/entity/ai_meme_generation_succeeded_entity.php';
        if ($data === null) {
            if ($this->_ai_meme_generation_succeeded === null) {
                $this->_ai_meme_generation_succeeded = new AiMemeGenerationSucceededEntity($this, null);
            }
            return $this->_ai_meme_generation_succeeded;
        }
        return new AiMemeGenerationSucceededEntity($this, $data);
    }


    private $_ai_provider = null;

    // Canonical facade: $client->AiProvider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_provider()
    // resolves here too.
    public function AiProvider($data = null)
    {
        require_once __DIR__ . '/entity/ai_provider_entity.php';
        if ($data === null) {
            if ($this->_ai_provider === null) {
                $this->_ai_provider = new AiProviderEntity($this, null);
            }
            return $this->_ai_provider;
        }
        return new AiProviderEntity($this, $data);
    }


    private $_analytics = null;

    // Canonical facade: $client->Analytics()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->analytics()
    // resolves here too.
    public function Analytics($data = null)
    {
        require_once __DIR__ . '/entity/analytics_entity.php';
        if ($data === null) {
            if ($this->_analytics === null) {
                $this->_analytics = new AnalyticsEntity($this, null);
            }
            return $this->_analytics;
        }
        return new AnalyticsEntity($this, $data);
    }


    private $_auth = null;

    // Canonical facade: $client->Auth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth()
    // resolves here too.
    public function Auth($data = null)
    {
        require_once __DIR__ . '/entity/auth_entity.php';
        if ($data === null) {
            if ($this->_auth === null) {
                $this->_auth = new AuthEntity($this, null);
            }
            return $this->_auth;
        }
        return new AuthEntity($this, $data);
    }


    private $_billing = null;

    // Canonical facade: $client->Billing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing()
    // resolves here too.
    public function Billing($data = null)
    {
        require_once __DIR__ . '/entity/billing_entity.php';
        if ($data === null) {
            if ($this->_billing === null) {
                $this->_billing = new BillingEntity($this, null);
            }
            return $this->_billing;
        }
        return new BillingEntity($this, $data);
    }


    private $_collaboration = null;

    // Canonical facade: $client->Collaboration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->collaboration()
    // resolves here too.
    public function Collaboration($data = null)
    {
        require_once __DIR__ . '/entity/collaboration_entity.php';
        if ($data === null) {
            if ($this->_collaboration === null) {
                $this->_collaboration = new CollaborationEntity($this, null);
            }
            return $this->_collaboration;
        }
        return new CollaborationEntity($this, $data);
    }


    private $_compliance = null;

    // Canonical facade: $client->Compliance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->compliance()
    // resolves here too.
    public function Compliance($data = null)
    {
        require_once __DIR__ . '/entity/compliance_entity.php';
        if ($data === null) {
            if ($this->_compliance === null) {
                $this->_compliance = new ComplianceEntity($this, null);
            }
            return $this->_compliance;
        }
        return new ComplianceEntity($this, $data);
    }


    private $_create_meme = null;

    // Canonical facade: $client->CreateMeme()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_meme()
    // resolves here too.
    public function CreateMeme($data = null)
    {
        require_once __DIR__ . '/entity/create_meme_entity.php';
        if ($data === null) {
            if ($this->_create_meme === null) {
                $this->_create_meme = new CreateMemeEntity($this, null);
            }
            return $this->_create_meme;
        }
        return new CreateMemeEntity($this, $data);
    }


    private $_developer_api = null;

    // Canonical facade: $client->DeveloperApi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->developer_api()
    // resolves here too.
    public function DeveloperApi($data = null)
    {
        require_once __DIR__ . '/entity/developer_api_entity.php';
        if ($data === null) {
            if ($this->_developer_api === null) {
                $this->_developer_api = new DeveloperApiEntity($this, null);
            }
            return $this->_developer_api;
        }
        return new DeveloperApiEntity($this, $data);
    }


    private $_free_caption_meme_success = null;

    // Canonical facade: $client->FreeCaptionMemeSuccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->free_caption_meme_success()
    // resolves here too.
    public function FreeCaptionMemeSuccess($data = null)
    {
        require_once __DIR__ . '/entity/free_caption_meme_success_entity.php';
        if ($data === null) {
            if ($this->_free_caption_meme_success === null) {
                $this->_free_caption_meme_success = new FreeCaptionMemeSuccessEntity($this, null);
            }
            return $this->_free_caption_meme_success;
        }
        return new FreeCaptionMemeSuccessEntity($this, $data);
    }


    private $_free_template_search = null;

    // Canonical facade: $client->FreeTemplateSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->free_template_search()
    // resolves here too.
    public function FreeTemplateSearch($data = null)
    {
        require_once __DIR__ . '/entity/free_template_search_entity.php';
        if ($data === null) {
            if ($this->_free_template_search === null) {
                $this->_free_template_search = new FreeTemplateSearchEntity($this, null);
            }
            return $this->_free_template_search;
        }
        return new FreeTemplateSearchEntity($this, $data);
    }


    private $_generate = null;

    // Canonical facade: $client->Generate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate()
    // resolves here too.
    public function Generate($data = null)
    {
        require_once __DIR__ . '/entity/generate_entity.php';
        if ($data === null) {
            if ($this->_generate === null) {
                $this->_generate = new GenerateEntity($this, null);
            }
            return $this->_generate;
        }
        return new GenerateEntity($this, $data);
    }


    private $_growth = null;

    // Canonical facade: $client->Growth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->growth()
    // resolves here too.
    public function Growth($data = null)
    {
        require_once __DIR__ . '/entity/growth_entity.php';
        if ($data === null) {
            if ($this->_growth === null) {
                $this->_growth = new GrowthEntity($this, null);
            }
            return $this->_growth;
        }
        return new GrowthEntity($this, $data);
    }


    private $_list_meme = null;

    // Canonical facade: $client->ListMeme()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_meme()
    // resolves here too.
    public function ListMeme($data = null)
    {
        require_once __DIR__ . '/entity/list_meme_entity.php';
        if ($data === null) {
            if ($this->_list_meme === null) {
                $this->_list_meme = new ListMemeEntity($this, null);
            }
            return $this->_list_meme;
        }
        return new ListMemeEntity($this, $data);
    }


    private $_media = null;

    // Canonical facade: $client->Media()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->media()
    // resolves here too.
    public function Media($data = null)
    {
        require_once __DIR__ . '/entity/media_entity.php';
        if ($data === null) {
            if ($this->_media === null) {
                $this->_media = new MediaEntity($this, null);
            }
            return $this->_media;
        }
        return new MediaEntity($this, $data);
    }


    private $_meme = null;

    // Canonical facade: $client->Meme()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meme()
    // resolves here too.
    public function Meme($data = null)
    {
        require_once __DIR__ . '/entity/meme_entity.php';
        if ($data === null) {
            if ($this->_meme === null) {
                $this->_meme = new MemeEntity($this, null);
            }
            return $this->_meme;
        }
        return new MemeEntity($this, $data);
    }


    private $_public_template_media_item = null;

    // Canonical facade: $client->PublicTemplateMediaItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_template_media_item()
    // resolves here too.
    public function PublicTemplateMediaItem($data = null)
    {
        require_once __DIR__ . '/entity/public_template_media_item_entity.php';
        if ($data === null) {
            if ($this->_public_template_media_item === null) {
                $this->_public_template_media_item = new PublicTemplateMediaItemEntity($this, null);
            }
            return $this->_public_template_media_item;
        }
        return new PublicTemplateMediaItemEntity($this, $data);
    }


    private $_standalone_agent_bootstrap = null;

    // Canonical facade: $client->StandaloneAgentBootstrap()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->standalone_agent_bootstrap()
    // resolves here too.
    public function StandaloneAgentBootstrap($data = null)
    {
        require_once __DIR__ . '/entity/standalone_agent_bootstrap_entity.php';
        if ($data === null) {
            if ($this->_standalone_agent_bootstrap === null) {
                $this->_standalone_agent_bootstrap = new StandaloneAgentBootstrapEntity($this, null);
            }
            return $this->_standalone_agent_bootstrap;
        }
        return new StandaloneAgentBootstrapEntity($this, $data);
    }


    private $_template = null;

    // Canonical facade: $client->Template()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->template()
    // resolves here too.
    public function Template($data = null)
    {
        require_once __DIR__ . '/entity/template_entity.php';
        if ($data === null) {
            if ($this->_template === null) {
                $this->_template = new TemplateEntity($this, null);
            }
            return $this->_template;
        }
        return new TemplateEntity($this, $data);
    }


    private $_template_search = null;

    // Canonical facade: $client->TemplateSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->template_search()
    // resolves here too.
    public function TemplateSearch($data = null)
    {
        require_once __DIR__ . '/entity/template_search_entity.php';
        if ($data === null) {
            if ($this->_template_search === null) {
                $this->_template_search = new TemplateSearchEntity($this, null);
            }
            return $this->_template_search;
        }
        return new TemplateSearchEntity($this, $data);
    }


    private $_trend_alert = null;

    // Canonical facade: $client->TrendAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trend_alert()
    // resolves here too.
    public function TrendAlert($data = null)
    {
        require_once __DIR__ . '/entity/trend_alert_entity.php';
        if ($data === null) {
            if ($this->_trend_alert === null) {
                $this->_trend_alert = new TrendAlertEntity($this, null);
            }
            return $this->_trend_alert;
        }
        return new TrendAlertEntity($this, $data);
    }


    private $_upload_caption_meme_success = null;

    // Canonical facade: $client->UploadCaptionMemeSuccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upload_caption_meme_success()
    // resolves here too.
    public function UploadCaptionMemeSuccess($data = null)
    {
        require_once __DIR__ . '/entity/upload_caption_meme_success_entity.php';
        if ($data === null) {
            if ($this->_upload_caption_meme_success === null) {
                $this->_upload_caption_meme_success = new UploadCaptionMemeSuccessEntity($this, null);
            }
            return $this->_upload_caption_meme_success;
        }
        return new UploadCaptionMemeSuccessEntity($this, $data);
    }


    private $_video = null;

    // Canonical facade: $client->Video()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video()
    // resolves here too.
    public function Video($data = null)
    {
        require_once __DIR__ . '/entity/video_entity.php';
        if ($data === null) {
            if ($this->_video === null) {
                $this->_video = new VideoEntity($this, null);
            }
            return $this->_video;
        }
        return new VideoEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new MemesioContentCreationSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
