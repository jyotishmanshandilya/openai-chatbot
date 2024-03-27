import openai from "@/utils/apiConfig";
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(req, res) {
    const { messages } = await req.json()

    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        stream:true,
    });
    
    const stream = OpenAIStream(chatCompletion);
    return new StreamingTextResponse(stream);
}