export type ModelName = 'GPT-4o' | 'GPT-4' | 'Claude 3.5' | 'Gemini 1.5' | 'Llama 3.1';

export interface PromptItem {
  id: string;
  title: string;
  priceUSD: number;
  rating: number;
  model: ModelName;
  tags: string[];
  language: 'EN' | 'ZH';
  author: string;
  updatedAt: string;
}

export interface PromptDetail extends PromptItem {
  description: string;
  examples: Array<{ input: string; output: string }>;
  changelog: Array<{ version: string; date: string; notes: string[] }>;
  includes: string[];
}
