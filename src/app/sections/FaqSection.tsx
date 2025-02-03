import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
}

export default function FAQSection({ title, description, faqs }: FAQSectionProps) {
  return (
    <section className="py-6 md:py-16">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            {description}
          </p>
        </div>
        <div className="flex justify-center">
        <Accordion type="single" collapsible className="container w-full">
  {faqs.map((faq, index) => (
    <AccordionItem
      className={`${
        index === faqs.length - 1 ? '' : 'border-b-2 border-black'
      }`}
      key={index}
      value={`item-${index}`}
    >
      <AccordionTrigger className="text-lg md:text-xl lg:text-2xl py-10 font-semibold text-black data-[state=open]:text-[#01B7E8] ">
        <span className="font-normal">{index + 1}. {faq.question}</span>
      </AccordionTrigger>

      <AccordionContent className="text-base md:text-lg py-10 pt-0 lg:text-xl">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

        </div>
      </div>
    </section>
  );
}
