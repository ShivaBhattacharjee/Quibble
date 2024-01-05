import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

interface Error {
  response: string;
}
export async function POST(request: NextRequest, response: NextResponse) {
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];
  const reqBody = await request.json();
  const { prompt } = reqBody;
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings,
  });
  try {
    const result = await model.generateContent(`${prompt} `);
    return NextResponse.json({ result: result });
  } catch (error: unknown) {
    const ErrorMsg = error as Error;
    return NextResponse.json({ error: ErrorMsg.response });
  }
}
