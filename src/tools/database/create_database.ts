import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type CreateDatabaseInput = Parameters<NotionClient["databases"]["create"]>[0];

export const NOTION_CREATE_DATABASE_TOOL = defineTool((z) => ({
  name: "notion_create_database",
  description: "Create a new database in Notion.",
  inputSchema: {
    createOptions: z.custom<CreateDatabaseInput>(),
  },
  handler: async (input) => {
    return await notionClient.databases.create(input.createOptions);
  },
}));
