import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What payment methods do you support?",
    answer: "We support a wide range of payment methods, including all major credit and debit cards, UPI, net banking, and popular wallets."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-best security practices, including PCI DSS compliance and advanced fraud detection, to protect your transactions."
  },
  {
    question: "How long does it take to get set up?",
    answer: "You can get started in minutes. Our developer-friendly APIs and extensive documentation make integration a breeze."
  },
  {
    question: "Can I accept international payments?",
    answer: "Yes, you can accept payments from customers worldwide. We support over 100 currencies to help you go global."
  },
  {
    question: "What are the transaction fees?",
    answer: "We offer competitive and transparent pricing. Please visit our pricing page for detailed information on transaction fees."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Find answers to common questions about Razor Pay.
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
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-muted-foreground">Could not load FAQs at the moment. Please try again later.</p>
      )}
    </section>
  );
}
