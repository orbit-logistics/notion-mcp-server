import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type RetrieveDatabaseInput = Parameters<
  NotionClient["databases"]["retrieve"]
>[0];

export const NOTION_RETRIEVE_DATABASE_TOOL = defineTool((z) => ({
  name: "notion_retrieve_database",
  description: "Retrieve a database in Notion.",
  inputSchema: {
    retrieveOptions: z.custom<RetrieveDatabaseInput>(),
  },
  handler: async (input) => {
    return await notionClient.databases.retrieve(input.retrieveOptions);
  },
}));
