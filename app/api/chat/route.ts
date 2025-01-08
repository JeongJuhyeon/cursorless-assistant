import { createGoogleGenerativeAI as createGoogleStudio } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";
import { prompt } from "./prompt";

export async function POST(req: Request) {
  const { messages: userMessages, apiKey } = await req.json();
  const coreMessages = convertToCoreMessages(userMessages);
  const messages = prompt.format(coreMessages);

  const result = await streamText({
    model: createGoogleStudio({ apiKey })('gemini-2.0-flash-exp'),
    messages,
  });

  return result.toDataStreamResponse();
}
