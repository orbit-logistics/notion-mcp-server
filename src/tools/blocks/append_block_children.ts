import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type AppendBlockChildrenInput = Parameters<
  NotionClient["blocks"]["children"]["append"]
>[0];

export const NOTION_APPEND_BLOCK_CHILDREN_TOOL = defineTool((z) => ({
  name: "notion_append_block_children",
  description: "Append children blocks to a block in Notion.",
  inputSchema: {
    appendOptions: z.custom<AppendBlockChildrenInput>(),
  },
  handler: async (input) => {
    return await notionClient.blocks.children.append(input.appendOptions);
  },
}));
