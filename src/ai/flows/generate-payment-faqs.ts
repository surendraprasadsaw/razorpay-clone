'use server';
/**
 * @fileOverview This file defines a Genkit flow to generate frequently asked questions (FAQs) related to payments.
 *
 * The flow takes a topic as input and returns a list of FAQs related to that topic.
 * @param {string} topic - The topic to generate FAQs for.
 * @returns {Promise<string[]>} - A promise that resolves to an array of FAQs.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqInputSchema = z.object({
  topic: z
    .string()
    .describe('The topic for which to generate frequently asked questions.'),
});
export type FaqInput = z.infer<typeof FaqInputSchema>;

const FaqOutputSchema = z.object({
  faqs: z.array(z.string()).describe('An array of frequently asked questions.'),
});
export type FaqOutput = z.infer<typeof FaqOutputSchema>;

export async function generatePaymentFaqs(input: FaqInput): Promise<FaqOutput> {
  return generatePaymentFaqsFlow(input);
}

const paymentFaqsPrompt = ai.definePrompt({
  name: 'paymentFaqsPrompt',
  input: {schema: FaqInputSchema},
  output: {schema: FaqOutputSchema},
  prompt: `You are a helpful customer support agent specializing in answering questions about payments.
  Generate a list of frequently asked questions related to the following topic: {{{topic}}}.
  The questions should be clear, concise, and address common concerns or inquiries that users may have.
  Format the output as a numbered list of questions.

  For each question, add a short and helpful answer after the question.

  Example:
  1. Question 1? Answer 1.
  2. Question 2? Answer 2.
`,
});

const generatePaymentFaqsFlow = ai.defineFlow(
  {
    name: 'generatePaymentFaqsFlow',
    inputSchema: FaqInputSchema,
    outputSchema: FaqOutputSchema,
  },
  async input => {
    const {output} = await paymentFaqsPrompt(input);
    return output!;
  }
);
