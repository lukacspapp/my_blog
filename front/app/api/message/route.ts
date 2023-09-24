import { CHAT_BOT_PROMPT } from "../../../lib/constant";
import { ChatGPTMessage, OpenAIStream } from "../../../lib/openai-stream";
import { MessagesSchema } from "../../../lib/validator/message";

export async function POST(req: Request) {
  const { message } = await req.json();

  const parsedMessages = MessagesSchema.parse(message);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserInput ? 'user' : 'system',
    content: message.text,
  }))

  outboundMessages.unshift({
    role: 'system',
    content: CHAT_BOT_PROMPT,
  })

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: outboundMessages,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload);

  return new Response(stream);

}