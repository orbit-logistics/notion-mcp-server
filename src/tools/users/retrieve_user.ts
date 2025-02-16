import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type RetrieveUserInput = Parameters<NotionClient["users"]["retrieve"]>[0];

export const NOTION_RETRIEVE_USER_TOOL = defineTool((z) => ({
  name: "notion_retrieve_user",
  description: "Retrieve a user from Notion.",
  inputSchema: {
    retrieveOptions: z.custom<RetrieveUserInput>(),
  },
  handler: async (input) => {
    return await notionClient.users.retrieve(input.retrieveOptions);
  },
}));
