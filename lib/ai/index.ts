import { openai, OpenAIProviderSettings } from '@ai-sdk/openai';
import { createOpenAI } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

// export const customModel = (apiIdentifier: string) => {
//   return wrapLanguageModel({
//     model: openai(apiIdentifier),
//     middleware: customMiddleware,
//   });
// };

export const customModel = (
  apiIdentifier: string
) => {
  const providerConfig = {
    baseURL: process.env.BASE_URL,
    apiKey: process.env.OPENAI_API_KEY, 
  }
  const provider = createOpenAI(providerConfig);
  return wrapLanguageModel({
    model: provider(apiIdentifier),
    middleware: customMiddleware,
  });
};
