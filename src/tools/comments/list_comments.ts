import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type ListCommentsInput = Parameters<NotionClient["comments"]["list"]>[0];

export const NOTION_LIST_COMMENTS_TOOL = defineTool((z) => ({
  name: "notion_list_comments",
  description: "List all comments for a block in Notion.",
  inputSchema: {
    listOptions: z.custom<ListCommentsInput>(),
  },
  handler: async (input) => {
    return await notionClient.comments.list(input.listOptions);
  },
}));
