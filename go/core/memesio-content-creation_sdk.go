package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/memesio-content-creation-sdk/go/utility/struct"
)

type MemesioContentCreationSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewMemesioContentCreationSDK(options map[string]any) *MemesioContentCreationSDK {
	sdk := &MemesioContentCreationSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *MemesioContentCreationSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *MemesioContentCreationSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *MemesioContentCreationSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *MemesioContentCreationSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *MemesioContentCreationSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *MemesioContentCreationSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *MemesioContentCreationSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("MemesioContentCreationSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *MemesioContentCreationSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *MemesioContentCreationSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("MemesioContentCreationSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Agent returns a Agent entity bound to this client.
// Idiomatic usage: client.Agent(nil).List(nil, nil) or
// client.Agent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Agent(data map[string]any) MemesioContentCreationEntity {
	return NewAgentEntityFunc(sdk, data)
}


// AgentInfra returns a AgentInfra entity bound to this client.
// Idiomatic usage: client.AgentInfra(nil).List(nil, nil) or
// client.AgentInfra(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) AgentInfra(data map[string]any) MemesioContentCreationEntity {
	return NewAgentInfraEntityFunc(sdk, data)
}


// AiCaption returns a AiCaption entity bound to this client.
// Idiomatic usage: client.AiCaption(nil).List(nil, nil) or
// client.AiCaption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) AiCaption(data map[string]any) MemesioContentCreationEntity {
	return NewAiCaptionEntityFunc(sdk, data)
}


// AiJob returns a AiJob entity bound to this client.
// Idiomatic usage: client.AiJob(nil).List(nil, nil) or
// client.AiJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) AiJob(data map[string]any) MemesioContentCreationEntity {
	return NewAiJobEntityFunc(sdk, data)
}


// AiMemeGenerationSucceeded returns a AiMemeGenerationSucceeded entity bound to this client.
// Idiomatic usage: client.AiMemeGenerationSucceeded(nil).List(nil, nil) or
// client.AiMemeGenerationSucceeded(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) AiMemeGenerationSucceeded(data map[string]any) MemesioContentCreationEntity {
	return NewAiMemeGenerationSucceededEntityFunc(sdk, data)
}


// AiProvider returns a AiProvider entity bound to this client.
// Idiomatic usage: client.AiProvider(nil).List(nil, nil) or
// client.AiProvider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) AiProvider(data map[string]any) MemesioContentCreationEntity {
	return NewAiProviderEntityFunc(sdk, data)
}


// Analytics returns a Analytics entity bound to this client.
// Idiomatic usage: client.Analytics(nil).List(nil, nil) or
// client.Analytics(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Analytics(data map[string]any) MemesioContentCreationEntity {
	return NewAnalyticsEntityFunc(sdk, data)
}


// Auth returns a Auth entity bound to this client.
// Idiomatic usage: client.Auth(nil).List(nil, nil) or
// client.Auth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Auth(data map[string]any) MemesioContentCreationEntity {
	return NewAuthEntityFunc(sdk, data)
}


// Billing returns a Billing entity bound to this client.
// Idiomatic usage: client.Billing(nil).List(nil, nil) or
// client.Billing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Billing(data map[string]any) MemesioContentCreationEntity {
	return NewBillingEntityFunc(sdk, data)
}


// Collaboration returns a Collaboration entity bound to this client.
// Idiomatic usage: client.Collaboration(nil).List(nil, nil) or
// client.Collaboration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Collaboration(data map[string]any) MemesioContentCreationEntity {
	return NewCollaborationEntityFunc(sdk, data)
}


// Compliance returns a Compliance entity bound to this client.
// Idiomatic usage: client.Compliance(nil).List(nil, nil) or
// client.Compliance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Compliance(data map[string]any) MemesioContentCreationEntity {
	return NewComplianceEntityFunc(sdk, data)
}


// CreateMeme returns a CreateMeme entity bound to this client.
// Idiomatic usage: client.CreateMeme(nil).List(nil, nil) or
// client.CreateMeme(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) CreateMeme(data map[string]any) MemesioContentCreationEntity {
	return NewCreateMemeEntityFunc(sdk, data)
}


// DeveloperApi returns a DeveloperApi entity bound to this client.
// Idiomatic usage: client.DeveloperApi(nil).List(nil, nil) or
// client.DeveloperApi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) DeveloperApi(data map[string]any) MemesioContentCreationEntity {
	return NewDeveloperApiEntityFunc(sdk, data)
}


// FreeCaptionMemeSuccess returns a FreeCaptionMemeSuccess entity bound to this client.
// Idiomatic usage: client.FreeCaptionMemeSuccess(nil).List(nil, nil) or
// client.FreeCaptionMemeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) FreeCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity {
	return NewFreeCaptionMemeSuccessEntityFunc(sdk, data)
}


// FreeTemplateSearch returns a FreeTemplateSearch entity bound to this client.
// Idiomatic usage: client.FreeTemplateSearch(nil).List(nil, nil) or
// client.FreeTemplateSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) FreeTemplateSearch(data map[string]any) MemesioContentCreationEntity {
	return NewFreeTemplateSearchEntityFunc(sdk, data)
}


// Generate returns a Generate entity bound to this client.
// Idiomatic usage: client.Generate(nil).List(nil, nil) or
// client.Generate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Generate(data map[string]any) MemesioContentCreationEntity {
	return NewGenerateEntityFunc(sdk, data)
}


// Growth returns a Growth entity bound to this client.
// Idiomatic usage: client.Growth(nil).List(nil, nil) or
// client.Growth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Growth(data map[string]any) MemesioContentCreationEntity {
	return NewGrowthEntityFunc(sdk, data)
}


// ListMeme returns a ListMeme entity bound to this client.
// Idiomatic usage: client.ListMeme(nil).List(nil, nil) or
// client.ListMeme(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) ListMeme(data map[string]any) MemesioContentCreationEntity {
	return NewListMemeEntityFunc(sdk, data)
}


// Media returns a Media entity bound to this client.
// Idiomatic usage: client.Media(nil).List(nil, nil) or
// client.Media(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Media(data map[string]any) MemesioContentCreationEntity {
	return NewMediaEntityFunc(sdk, data)
}


// Meme returns a Meme entity bound to this client.
// Idiomatic usage: client.Meme(nil).List(nil, nil) or
// client.Meme(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Meme(data map[string]any) MemesioContentCreationEntity {
	return NewMemeEntityFunc(sdk, data)
}


// PublicTemplateMediaItem returns a PublicTemplateMediaItem entity bound to this client.
// Idiomatic usage: client.PublicTemplateMediaItem(nil).List(nil, nil) or
// client.PublicTemplateMediaItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) PublicTemplateMediaItem(data map[string]any) MemesioContentCreationEntity {
	return NewPublicTemplateMediaItemEntityFunc(sdk, data)
}


// StandaloneAgentBootstrap returns a StandaloneAgentBootstrap entity bound to this client.
// Idiomatic usage: client.StandaloneAgentBootstrap(nil).List(nil, nil) or
// client.StandaloneAgentBootstrap(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) StandaloneAgentBootstrap(data map[string]any) MemesioContentCreationEntity {
	return NewStandaloneAgentBootstrapEntityFunc(sdk, data)
}


// Template returns a Template entity bound to this client.
// Idiomatic usage: client.Template(nil).List(nil, nil) or
// client.Template(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Template(data map[string]any) MemesioContentCreationEntity {
	return NewTemplateEntityFunc(sdk, data)
}


// TemplateSearch returns a TemplateSearch entity bound to this client.
// Idiomatic usage: client.TemplateSearch(nil).List(nil, nil) or
// client.TemplateSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) TemplateSearch(data map[string]any) MemesioContentCreationEntity {
	return NewTemplateSearchEntityFunc(sdk, data)
}


// TrendAlert returns a TrendAlert entity bound to this client.
// Idiomatic usage: client.TrendAlert(nil).List(nil, nil) or
// client.TrendAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) TrendAlert(data map[string]any) MemesioContentCreationEntity {
	return NewTrendAlertEntityFunc(sdk, data)
}


// UploadCaptionMemeSuccess returns a UploadCaptionMemeSuccess entity bound to this client.
// Idiomatic usage: client.UploadCaptionMemeSuccess(nil).List(nil, nil) or
// client.UploadCaptionMemeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) UploadCaptionMemeSuccess(data map[string]any) MemesioContentCreationEntity {
	return NewUploadCaptionMemeSuccessEntityFunc(sdk, data)
}


// Video returns a Video entity bound to this client.
// Idiomatic usage: client.Video(nil).List(nil, nil) or
// client.Video(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MemesioContentCreationSDK) Video(data map[string]any) MemesioContentCreationEntity {
	return NewVideoEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *MemesioContentCreationSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewMemesioContentCreationSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
