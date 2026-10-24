package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/memesio-content-creation-sdk/go"
)

// ListArgs is what an agent sends to memesio-content-creation_list.
type ListArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: free_template_search | meme | public_template_media_item"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional filter map; omit it for the first page"`
}

// LoadArgs is what an agent sends to memesio-content-creation_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: agent | agent_infra | ai_caption | ai_job | ai_provider | analytics | billing | collaboration | compliance | developer_api | growth | meme | public_template_media_item | trend_alert"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.MemesioContentCreationSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "memesio-content-creation_list",
		Description: "List records from MemesioContentCreation. Args: entity, query (optional filter map; omit it for the first page). Returns the first page of records as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[ListArgs]("free_template_search", "meme", "public_template_media_item"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args ListArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "list", args.Entity, args.Query)
	})
	mcp.AddTool(server, &mcp.Tool{
		Name:        "memesio-content-creation_load",
		Description: "Load one record from MemesioContentCreation. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("agent", "agent_infra", "ai_caption", "ai_job", "ai_provider", "analytics", "billing", "collaboration", "compliance", "developer_api", "growth", "meme", "public_template_media_item", "trend_alert"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.MemesioContentCreationSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.MemesioContentCreationSDK, name string) (sdk.MemesioContentCreationEntity, error) {
	switch strings.ToLower(name) {
	case "agent":
		return client.Agent(nil), nil
	case "agent_infra":
		return client.AgentInfra(nil), nil
	case "ai_caption":
		return client.AiCaption(nil), nil
	case "ai_job":
		return client.AiJob(nil), nil
	case "ai_meme_generation_succeeded":
		return client.AiMemeGenerationSucceeded(nil), nil
	case "ai_provider":
		return client.AiProvider(nil), nil
	case "analytics":
		return client.Analytics(nil), nil
	case "auth":
		return client.Auth(nil), nil
	case "billing":
		return client.Billing(nil), nil
	case "collaboration":
		return client.Collaboration(nil), nil
	case "compliance":
		return client.Compliance(nil), nil
	case "developer_api":
		return client.DeveloperApi(nil), nil
	case "free_caption_meme_success":
		return client.FreeCaptionMemeSuccess(nil), nil
	case "free_template_search":
		return client.FreeTemplateSearch(nil), nil
	case "generate":
		return client.Generate(nil), nil
	case "growth":
		return client.Growth(nil), nil
	case "media":
		return client.Media(nil), nil
	case "meme":
		return client.Meme(nil), nil
	case "public_template_media_item":
		return client.PublicTemplateMediaItem(nil), nil
	case "standalone_agent_bootstrap":
		return client.StandaloneAgentBootstrap(nil), nil
	case "trend_alert":
		return client.TrendAlert(nil), nil
	case "upload_caption_meme_success":
		return client.UploadCaptionMemeSuccess(nil), nil
	case "video":
		return client.Video(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}
