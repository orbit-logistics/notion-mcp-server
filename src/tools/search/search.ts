import { z } from "zod";
import { notionClient } from "../../notion/client";
import { defineTool, InferToolHandlerInput } from "../../utils/defineTool";

const searchSchema = {
  query: z
    .string()
    .optional()
    .describe("The search query string to match against page content"),
  sort: z
    .object({
      timestamp: z
        .literal("last_edited_time")
        .describe("Sort by last edited time"),
      direction: z.enum(["ascending", "descending"]).describe("Sort direction"),
    })
    .optional()
    .describe("Sort options for the search results"),
  start_cursor: z
    .string()
    .optional()
    .describe(
      "Cursor to start from for pagination, use from the previous search results to get next page."
    ),
  page_size: z
    .number()
    .min(1)
    .max(100)
    .default(10)
    .optional()
    .describe("Number of results to return per page (1-100)"),
  filter: z
    .object({
      property: z.literal("object").describe("Property to filter on"),
      value: z
        .enum(["page", "database"])
        .describe(
          "Defines if you want to filter for pages or database entries"
        ),
    })
    .optional()
    .describe("Filter options for the search results"),
};

export const NOTION_SEARCH_TOOL = defineTool((z) => ({
  name: "notion_search",
  description: "Search through Notion with fine-grained control.",
  inputSchema: searchSchema,
  handler: async (input: InferToolHandlerInput<typeof searchSchema>) => {
    return await notionClient.search(input);
  },
}));
