# @orbit-logistics/notion-mcp-server

[![smithery badge](https://smithery.ai/badge/@orbit-logistics/notion-mcp-server)](https://smithery.ai/server/@orbit-logistics/notion-mcp-server)

An MCP server that mirrors the entire Notion API SDK as a collection of tools, enabling Large Language Models (LLMs) to interact with Notion seamlessly.

## Overview

@orbit-logistics/notion-mcp-server is built on the Model Context Protocol (MCP) and exposes the full Notion API as tools that LLMs can use. This allows for operations such as reading, creating, updating, and deleting Notion pages directly through natural language instructions.

## Notion Integration Setup

Before using this server with Cursor or Claude Desktop, you must create a Notion integration and grant it access to your pages. Follow the instructions in the Notion documentation for creating an integration and adding the necessary permissions:

[Notion Integration Getting Started](https://developers.notion.com/docs/create-a-notion-integration#getting-started)

## Usage

### Installing via Smithery

To install Notion MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@orbit-logistics/notion-mcp-server):

```bash
npx -y @smithery/cli install @orbit-logistics/notion-mcp-server --client claude
```

### Using with Cursor

To integrate @orbit-logistics/notion-mcp-server with Cursor, follow these steps:

1. Open Cursor Settings.
2. Navigate to Features and scroll down to "MCP Servers".
3. Click on "Add new MCP server".
4. Enter a name of your choice and select "command" as the type.
5. In the command field, enter the following (replace `<notion_integration_token>` with your actual token):

```bash
npx -y @orbit-logistics/notion-mcp-server -t <notion_integration_token>
```

This command starts the server with your Notion integration token. Cursor will then use this MCP server to access Notion's API tools.

### Using with Claude Desktop

For Claude Desktop, MCP server configurations are stored in a JSON configuration file. Add the following entry to your `claude_desktop_config.json` (replace `<notion_integration_token>` with your actual token):

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sequential-thinking-test",
        "-t",
        "<notion_integration_token>"
      ]
    }
  }
}
```

This configuration allows Claude Desktop to invoke the notion MCP server for interactions with Notion.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request with your suggestions and improvements.
