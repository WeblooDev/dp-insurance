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
          <h1 className="font-ivar text-[30px] md:text-[40px]]">{title}</h1>
          <p className="mx-auto max-w-[700px] text-[16px] md:text-[18px] ">
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
      <AccordionTrigger className="py-10 text-black data-[state=open]:text-[#01B7E8] ">
        <span className=" text-left text-[18px] ">{index + 1}. {faq.question}</span>
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
