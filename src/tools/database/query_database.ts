import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type QueryDatabaseInput = Parameters<NotionClient["databases"]["query"]>[0];

export const NOTION_QUERY_DATABASE_TOOL = defineTool((z) => ({
  name: "notion_query_database",
  description: "Query a database in Notion.",
  inputSchema: {
    queryOptions: z.custom<QueryDatabaseInput>(),
  },
  handler: async (input) => {
    return await notionClient.databases.query(input.queryOptions);
  },
}));
