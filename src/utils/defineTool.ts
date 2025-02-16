import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

export type InferToolHandlerInput<TInputSchema extends z.ZodRawShape> =
  z.objectOutputType<TInputSchema, z.ZodTypeAny>;

type ToolDefinition<TInputSchema extends z.ZodRawShape> = {
  name: string;
  description: string;
  inputSchema: TInputSchema;
  handler: (
    input: InferToolHandlerInput<TInputSchema>
  ) => Promise<Record<string, unknown>>;
};

export const defineTool = <TInputSchema extends z.ZodRawShape>(
  cb: (zod: typeof z) => ToolDefinition<TInputSchema>
) => {
  const tool = cb(z);

  const wrappedHandler = async (
    input: InferToolHandlerInput<TInputSchema>,
    _: RequestHandlerExtra
  ): Promise<CallToolResult> => {
    try {
      const result = await tool.handler(input);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  };

  return {
    ...tool,
    handler: wrappedHandler as ToolCallback<TInputSchema>,
  };
};
