import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type ListUsersInput = Parameters<NotionClient["users"]["list"]>[0];

export const NOTION_LIST_USERS_TOOL = defineTool((z) => ({
  name: "notion_list_users",
  description: "List all users in a Notion workspace.",
  inputSchema: {
    listOptions: z.custom<ListUsersInput>(),
  },
  handler: async (input) => {
    return await notionClient.users.list(input.listOptions);
  },
}));
