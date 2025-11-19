import { generatePaymentFaqs } from '@/ai/flows/generate-payment-faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export async function FaqSection() {
  let faqsData;
  try {
    faqsData = await generatePaymentFaqs({ topic: "general payment processing" });
  } catch (error) {
    console.error("Failed to generate FAQs:", error);
    faqsData = { faqs: [] };
  }

  const faqs = faqsData.faqs.map(faqString => {
    const [question, answer] = faqString.split('?');
    return { question: question ? `${question}?` : '', answer: answer || '' };
  }).filter(faq => faq.question && faq.answer);

  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Find answers to common questions about PayFlow.
      </p>

      {faqs.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-3/4 mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question.replace(/^\d+\.\s*/, '')}
              </AccordionTrigger>
              <AccordionContent>{faq.answer.trim()}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-muted-foreground">Could not load FAQs at the moment. Please try again later.</p>
      )}
    </section>
  );
}
