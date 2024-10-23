import OpenAI from 'openai';

const openaiApiKey = process.env.OPENAI_KEY;

export const openai = new OpenAI({
  apiKey: openaiApiKey,
});
