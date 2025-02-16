import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type DeleteBlockInput = Parameters<NotionClient["blocks"]["delete"]>[0];

export const NOTION_DELETE_BLOCK_TOOL = defineTool((z) => ({
  name: "notion_delete_block",
  description: "Delete a block in Notion.",
  inputSchema: {
    deleteOptions: z.custom<DeleteBlockInput>(),
  },
  handler: async (input) => {
    return await notionClient.blocks.delete(input.deleteOptions);
  },
}));
