import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type CreateCommentInput = Parameters<NotionClient["comments"]["create"]>[0];

export const NOTION_CREATE_COMMENT_TOOL = defineTool((z) => ({
  name: "notion_create_comment",
  description: "Create a new comment in Notion.",
  inputSchema: {
    createOptions: z.custom<CreateCommentInput>(),
  },
  handler: async (input) => {
    return await notionClient.comments.create(input.createOptions);
  },
}));
