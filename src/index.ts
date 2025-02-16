#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { NOTION_SEARCH_PAGES_TOOL } from "./tools/search/search_pages";
import { NOTION_SEARCH_TOOL } from "./tools/search/search";
import { initNotionClient } from "./notion/client";
import { NOTION_BLOCKS_TOOLS } from "./tools/blocks/index";
import { NOTION_DATABASE_TOOLS } from "./tools/database/index";
import { NOTION_PAGES_TOOLS } from "./tools/pages/index";
import { NOTION_COMMENTS_TOOLS } from "./tools/comments/index";
import { NOTION_USERS_TOOLS } from "./tools/users/index";

const args = process.argv;
const tokenIndex = args.indexOf("-t");
const token = tokenIndex !== -1 ? args[tokenIndex + 1] : undefined;

if (!token) {
  console.error("Error: Notion token (-t) is required");
  process.exit(1);
}

// Initialize the Notion client with the provided token
initNotionClient({ NOTION_TOKEN: token });

const tools = [
  NOTION_SEARCH_PAGES_TOOL,
  NOTION_SEARCH_TOOL,
  ...NOTION_BLOCKS_TOOLS,
  ...NOTION_DATABASE_TOOLS,
  ...NOTION_PAGES_TOOLS,
  ...NOTION_COMMENTS_TOOLS,
  ...NOTION_USERS_TOOLS,
];

const server = new McpServer({
  name: "sequential-thinking-server",
  version: "0.2.0",
});

tools.forEach((tool) => {
  server.tool(tool.name, tool.description, tool.inputSchema, tool.handler);
});

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Sequential Thinking MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
