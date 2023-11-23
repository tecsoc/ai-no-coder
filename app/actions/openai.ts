"use server";
import { AtcoderLank } from "@/datas/formDatas";
import OpenAI from "openai";
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions";

const openai = new OpenAI();

export const generateQuestion = async (atcoderLank: AtcoderLank, model: ChatCompletionCreateParamsBase['model'] = "gpt-4") => {  
  // const response = await openai.chat.completions.create({
  //   messages: [
  //     { role: 'system', content: 'あなたは競技プログラミングの問題をつくる人であり、競技プログラミングを学びたい人に適切な難易度の問題を提供します。あなたが出力するのは問題文のHTMLだけです' },
  //     { role: "user", content: `私はAtCoderの${atcoderLank}色です。そんな私に難しすぎず簡単すぎない問題を生成してくだいさい。` },
  //   ],
  //   model
  // });
  // return response.choices[0].message;
  return "問題文";
};