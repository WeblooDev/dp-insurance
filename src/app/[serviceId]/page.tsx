import { getServiceById, getServices } from "@/data/service";
import { notFound } from "next/navigation";
import Request from "../sections/Request";
import SplitSection from "../sections/SplitSection";
import FAQSection from "../sections/FaqSection";
import HeroTemplate from "../sections/HeroTemplate";
import ContactUs from "../sections/ContactUs";
import WhyUs from "../sections/whyUs";
import MediaSection from "../sections/ImageSection";
import ServiceCard from "../sections/Template";

// ✅ Fix: Ensure `params` is awaited
interface ServicePageProps {
  params: Promise<{ serviceId: string }>; // Ensure it's recognized as a Promise
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params; // ✅ Await the params
  const { serviceId } = resolvedParams; // ✅ Now it's a resolved object
  const services = await getServices();

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
          showButton={service.heroSection.showButton} 
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
        backgroundImage={service.requestContent.backgroundImage}
        buttonText={service.requestContent.buttonText} // Dynamically passing button text
      />
    )}


      {service.faqSection && (
        <FAQSection
          title={service.faqSection.title}
          description={service.faqSection.description}
          faqs={service.faqSection.faqs}
        />
      )}

<section className="w-full mx-auto pb-28 sm:px-12">
        <div className="title flex self-center  justify-center pb-12 text-5xl ">
            <h1 className="font-ivar text-[40px] tracking-tight ">Coverage Options</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-8">
        {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              imageUrl={service.backgroundImage || "/default-service.jpg"}
              index={index} // ✅ Pass the missing prop
            />
          ))}

        </div>
        </section>

{service.contactUsContent && (
  <ContactUs
    title={service.contactUsContent.title}
    description={service.contactUsContent.description}
    backgroundImage={service.contactUsContent.backgroundImage}
    showGetQuoteButton={service.contactUsContent.showGetQuoteButton} 
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
