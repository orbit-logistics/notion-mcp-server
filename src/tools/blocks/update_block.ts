import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type UpdateBlockInput = Parameters<NotionClient["blocks"]["update"]>[0];

export const NOTION_UPDATE_BLOCK_TOOL = defineTool((z) => ({
  name: "notion_update_block",
  description: "Update a block in Notion.",
  inputSchema: {
    updateOptions: z.custom<UpdateBlockInput>(),
  },
  handler: async (input) => {
    return await notionClient.blocks.update(input.updateOptions);
  },
}));
