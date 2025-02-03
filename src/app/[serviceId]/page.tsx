import { getServiceById } from "@/data/service";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import ImageSection from '../sections/ImageSection';
import Request from "../sections/Request";
import WhyUs from '../sections/whyUs';
import SplitSection from '../sections/SplitSection';
import FAQSection from "../sections/FaqSection";
import HeroTemplate from "../sections/HeroTemplate";
import ContactUs from "../sections/ContactUs";

interface PageProps {
  params: { serviceId: string };
}

export default async function ServicePage({ params }: PageProps) {
  // ✅ Await params before using it
  const { serviceId } = await params; // Await the params object before using it

  // Fetch service data
  const service = await getServiceById(serviceId);

  // Handle missing service
  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {service.heroSection && (
        <HeroTemplate
          title={service.heroSection.title}
          description={service.heroSection.description}
          backgroundImage={service.heroSection.backgroundImage}
          buttons={service.heroSection.buttons}
        />
      )}

      {service.whyUsContent && (
        <WhyUs
          title={service.whyUsContent.title}
          description={service.whyUsContent.description}
          services={service.whyUsContent.services}
        />
      )}

      {service.imageSection && (
        <ImageSection
          imageUrl={service.imageSection.imageUrl}
          altText={service.imageSection.altText}
        />
      )}

      {service.splitSections?.map((splitSection, index) => (
        <SplitSection
          key={index}
          imageUrl={splitSection.imageUrl}
          content={splitSection.content}
          reverse={splitSection.reverse}
        />
      ))}

      {service.requestContent && (
        <Request
          title={service.requestContent.title}
          buttons={[{ text: "Get a Quote", variant: "primary" }]}
          backgroundImage={service.requestContent.backgroundImage}
        />
      )}

      {service.faqSection && (
        <FAQSection
          title={service.faqSection.title}
          description={service.faqSection.description}
          faqs={service.faqSection.faqs}
        />
      )}

      {service.contactUsContent && (
        <ContactUs
          title={service.contactUsContent.title}
          description={service.contactUsContent.description}
          backgroundImage={service.contactUsContent.backgroundImage}
        />
      )}
    </main>
  );
}
