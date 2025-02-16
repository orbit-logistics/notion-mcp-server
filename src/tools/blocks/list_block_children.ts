import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type ListBlockChildrenInput = Parameters<
  NotionClient["blocks"]["children"]["list"]
>[0];

export const NOTION_LIST_BLOCK_CHILDREN_TOOL = defineTool((z) => ({
  name: "notion_list_block_children",
  description: "List all children blocks of a block in Notion.",
  inputSchema: {
    listOptions: z.custom<ListBlockChildrenInput>(),
  },
  handler: async (input) => {
    return await notionClient.blocks.children.list(input.listOptions);
  },
}));
