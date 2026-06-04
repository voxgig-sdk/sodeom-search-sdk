# SodeomSearch SDK

Query the web through Sodeom's privacy-focused search and get paginated JSON results

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Sodeom Search API

[Sodeom Search](https://sodeom.com) is an independent, privacy-focused search engine that exposes its web-search results through a small JSON HTTP API. The service is built by Abdul Hadi and emphasises no tracking, no user profiling, and no personalised advertising.

What you get from the API:

- A single `GET /api/search` endpoint that accepts a query string and an optional page number
- A JSON response containing a `results` array of objects with `title`, `link`, and `description` fields
- Pagination metadata including the echoed query, current page, next/previous page indicators, and a total result count

Operational notes: CORS is enabled, so the endpoint can be called directly from browser code. No authentication scheme is documented. The API returns HTTP 400 when the required `q` parameter is missing and HTTP 500 on backend provider or parsing failures. Rate limits are not published.

## Try it

**TypeScript**
```bash
npm install sodeom-search
```

**Python**
```bash
pip install sodeom-search-sdk
```

**PHP**
```bash
composer require voxgig/sodeom-search-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/sodeom-search-sdk/go
```

**Ruby**
```bash
gem install sodeom-search-sdk
```

**Lua**
```bash
luarocks install sodeom-search-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { SodeomSearchSDK } from 'sodeom-search'

const client = new SodeomSearchSDK({})

// List all searchs
const searchs = await client.Search().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o sodeom-search-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "sodeom-search": {
      "command": "/abs/path/to/sodeom-search-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Search** | Web search results retrieved via `GET /api/search?q={query}&page={n}`, returning a paginated list of title/link/description hits along with query and pagination metadata. | `/api/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from sodeomsearch_sdk import SodeomSearchSDK

client = SodeomSearchSDK({})

# List all searchs
searchs, err = client.Search(None).list(None, None)
```

### PHP

```php
<?php
require_once 'sodeomsearch_sdk.php';

$client = new SodeomSearchSDK([]);

// List all searchs
[$searchs, $err] = $client->Search(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/sodeom-search-sdk/go"

client := sdk.NewSodeomSearchSDK(map[string]any{})

// List all searchs
searchs, err := client.Search(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "SodeomSearch_sdk"

client = SodeomSearchSDK.new({})

# List all searchs
searchs, err = client.Search(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("sodeom-search_sdk")

local client = sdk.new({})

-- List all searchs
local searchs, err = client:Search(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SodeomSearchSDK.test()
const result = await client.Search().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SodeomSearchSDK.test(None, None)
result, err = client.Search(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SodeomSearchSDK::test(null, null);
[$result, $err] = $client->Search(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Search(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SodeomSearchSDK.test(nil, nil)
result, err = client.Search(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Search(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Sodeom Search API

- Upstream: [https://sodeom.com](https://sodeom.com)
- API docs: [https://sodeom.com/apis/search](https://sodeom.com/apis/search)

- No formal licence terms are published on the API documentation page
- Sodeom is presented as an independent privacy-focused search engine; check the project on GitHub (github.com/sodeom) for source-code licence details
- Treat as a third-party hosted service: review terms on the Sodeom site before production use

---

Generated from the Sodeom Search API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
