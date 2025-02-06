import { getServiceById, getServices } from "@/data/service";
import { notFound } from "next/navigation";
import ImageSection from "../sections/ImageSection";
import Request from "../sections/Request";
import SplitSection from "../sections/SplitSection";
import FAQSection from "../sections/FaqSection";
import HeroTemplate from "../sections/HeroTemplate";
import ContactUs from "../sections/ContactUs";
import WhyUs from "../sections/whyUs";
import MediaSection from "../sections/ImageSection";

// ✅ Fix: Ensure `params` is awaited
interface ServicePageProps {
  params: Promise<{ serviceId: string }>; // Ensure it's recognized as a Promise
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params; // ✅ Await the params
  const { serviceId } = resolvedParams; // ✅ Now it's a resolved object

  if (!serviceId) {
    throw new Error("Service ID is missing! Check your URL.");
  }

  const service = await getServiceById(serviceId);

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
          showButtons={service.heroSection.showButtons} 
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
      <MediaSection
        mediaUrl={service.imageSection.mediaUrl}
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

// ✅ Fix: Ensure Next.js knows available service routes
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    serviceId: service.id,
  }));
}
