# Graph Report - SiteDeVendasFL  (2026-07-03)

## Corpus Check
- 19 files · ~80,916 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 89 nodes · 75 edges · 15 communities (10 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9fadf154`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `What You Must Do When Invoked` - 11 edges
2. `/graphify` - 10 edges
3. `Instruções de Troca de Checkout` - 9 edges
4. `graphify reference: extra exports and benchmark` - 8 edges
5. `Step 3 - Extract entities and relationships` - 4 edges
6. `graphify reference: add a URL and watch a folder` - 3 edges
7. `graphify reference: commit hook and native CLAUDE.md integration` - 3 edges
8. `graphify reference: query, path, explain` - 3 edges
9. `graphify reference: incremental update and cluster-only` - 3 edges
10. `graphify reference: GitHub clone and cross-repo merge` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.20
Nodes (9): Após alterar, Arquivo a editar, Instruções de Troca de Checkout, Localização exata, Para ativar GGCHECKOUT, Para ativar HOTMART, REGRAS — NÃO VIOLAR, URLs (NUNCA ALTERAR) (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.20
Nodes (9): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Usage (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (14): Part A - Structural extraction for code files, Part B - Semantic extraction (parallel subagents), Part C - Merge AST + semantic into final extraction, Step 0 - GitHub repos and multi-path merge (only if a URL or several paths), Step 1 - Ensure graphify is installed, Step 2.5 - Video and audio (only if video files detected), Step 2 - Detect files, Step 3 - Extract entities and relationships (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 4 - "Community 4"
Cohesion: 0.29
Nodes (6): buildCommand, cleanUrls, headers, outputDirectory, redirects, trailingSlash

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (7): Arquitetura, Eventos de tracking, Meta Pixel + CAPI (deduplicação), Performance — padrões usados, Project overview, Sistema de checkout dinâmico, SITE_CONFIG — configuração centralizada

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 8 - "Community 8"
Cohesion: 0.50
Nodes (3): For /graphify explain, For /graphify path, graphify reference: query, path, explain

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **62 isolated node(s):** `crypto`, `VALID_EVENTS`, `buildCommand`, `outputDirectory`, `cleanUrls` (+57 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `What You Must Do When Invoked` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `/graphify` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `crypto`, `VALID_EVENTS`, `buildCommand` to the rest of the system?**
  _62 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._