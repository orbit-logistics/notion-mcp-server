import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type ListDatabasesInput = Parameters<NotionClient["databases"]["list"]>[0];

export const NOTION_LIST_DATABASES_TOOL = defineTool((z) => ({
  name: "notion_list_databases",
  description: "List all databases in Notion (deprecated, use search instead).",
  inputSchema: {
    listOptions: z.custom<ListDatabasesInput>(),
  },
  handler: async (input) => {
    return await notionClient.databases.list(input.listOptions);
  },
}));
