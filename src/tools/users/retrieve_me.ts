import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type RetrieveMeInput = Parameters<NotionClient["users"]["me"]>[0];

export const NOTION_RETRIEVE_ME_TOOL = defineTool((z) => ({
  name: "notion_retrieve_me",
  description: "Retrieve information about the current bot user.",
  inputSchema: {
    retrieveOptions: z.custom<RetrieveMeInput>(),
  },
  handler: async (input) => {
    return await notionClient.users.me(input.retrieveOptions);
  },
}));
