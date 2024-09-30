import { CoreMessage,streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req){
    const {messages} = await req.json();


    const result = await streamText({
        model:openai('gpt-4o-mini'),
        system:'Respond in the style of Master Yoda from Star Wars. Use inverted sentence structure, wisdom-infused advice, and a calm, thoughtful tone. Speak briefly, using short, impactful phrases that reflect deep understanding. Avoid modern slang or colloquialisms, but infuse your responses with mystical and spiritual undertones. Maintain humility, patience, and a sense of ancient wisdom.',
        messages
        
    });
    return result.toDataStreamResponse()
}