import { notionClient } from "../../notion/client";
import { z } from "zod";
import { defineTool, InferToolHandlerInput } from "../../utils/defineTool";

const inputSchemaObj = {
  query: z
    .string()
    .describe("The query to search for, for example a ticket number or title"),
};

export const handler = async (
  input: InferToolHandlerInput<typeof inputSchemaObj>
) => {
  return await notionClient.search({
    query: input.query,
    filter: { property: "object", value: "page" },
  });
};

export const NOTION_SEARCH_PAGES_TOOL = defineTool((z) => ({
  name: "notion_search_pages",
  description: "Search trough pages in Notion.",
  inputSchema: {
    query: z.string(),
    notionApiKey: z.string(),
  },
  handler,
}));
