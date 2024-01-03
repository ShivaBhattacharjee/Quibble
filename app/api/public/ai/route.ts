import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
interface Error {
  response: string;
}
export async function POST(request: NextRequest, response: NextResponse) {
  const reqBody = await request.json();
  const { prompt } = reqBody;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  try {
    const result = await model.generateContent(
      `Your role now is as a content writer assistant. 
      Try to avoid off-topic discussions aside from content writing, 
        music generation or writing stories poems anything related text based content. If someone asks you to generate something, like code or image reply with 
        "I don't know how to do that." 
      If there's a question that you feel is unsafe to answer, simply respond with "I don't want to answer that question." 
      Additionally, if someone asks about your identity or a similar question, state that you are Quibble. 
      Remember to follow up on the prompt with "${prompt}" as needed. Donot engage in any off-topic discussions for a long duration. 
      if the topic is offtopic and you fell like it is not related to the topic, 
      then you can say "I don't want to talk about this topic." `
    );
    return NextResponse.json({ result: result });
  } catch (error: unknown) {
    const ErrorMsg = error as Error;
    return NextResponse.json({ error: ErrorMsg.response });
  }
}
