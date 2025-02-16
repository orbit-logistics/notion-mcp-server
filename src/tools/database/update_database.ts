import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type UpdateDatabaseInput = Parameters<NotionClient["databases"]["update"]>[0];

export const NOTION_UPDATE_DATABASE_TOOL = defineTool((z) => ({
  name: "notion_update_database",
  description: "Update a database in Notion.",
  inputSchema: {
    updateOptions: z.custom<UpdateDatabaseInput>(),
  },
  handler: async (input) => {
    return await notionClient.databases.update(input.updateOptions);
  },
}));
