import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type RetrieveBlockInput = Parameters<NotionClient["blocks"]["retrieve"]>[0];

export const NOTION_RETRIEVE_BLOCK_TOOL = defineTool((z) => ({
  name: "notion_retrieve_block",
  description: "Retrieve a block from Notion.",
  inputSchema: {
    retrieveOptions: z.custom<RetrieveBlockInput>(),
  },
  handler: async (input) => {
    return await notionClient.blocks.retrieve(input.retrieveOptions);
  },
}));
