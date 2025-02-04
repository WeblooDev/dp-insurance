
import { getServices } from "@/data/service";
import Request from "./sections/Request";
import WhyUs from './sections/whyUs';
import ImageSection from './sections/ImageSection';
import SplitSection from "./sections/SplitSection";
import ContactUs from './sections/ContactUs';
import ServiceCard from "./sections/Template";
import FAQSection from './sections/FaqSection';
import HeroCarousel from "./sections/Hero";
import LineCall from './sections/LineCall';

export default async function Home() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-white flex flex-col gap-10">


        <HeroCarousel />



        <section className="w-full mx-auto px-4 sm:px-12 py-12">
        <div className="title flex self-center  justify-center pb-12 text-5xl ">
            <h1>What we Cover</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <LineCall
         title="Need Premium Insurance for Unique Needs?" />
         

      <ImageSection imageUrl="/formula.png" altText="Main Page Banner" />

      
      <WhyUs
        title="Why Choose Us?"
        description="We understand that your valuable assets deserve top-notch protection. That’s why we offer a wide range  of insurance options tailored to safeguard what matters most to you."
        services={[
          {
            image: "/why1.png",
            name: "Premiere Covergae Options",
            description: "Tailored insurance for luxury cars, jewelry, real estate, aviation, and yachts & watercraft-designed to fit your lifestyle."
          },
          {
            image: "/why2.png",
            name: "White Glove Service",
            description: "Seamless, discreet coverage with concierge support, from policy setup to claims assistance."
          },
          {
            image: "/why3.png",
            name: "Competitive Rates ",
            description: "Elite protection at competitive rates, ensuring the best value for your prized possessions."
          }
        ]}
      />

      <Request
        title="Request Your Exclusive Custom Insurance Quote"   
        buttons={[
          { text: "Get a Quote", variant: "primary" },
    
        ]}
        backgroundImage="/requestMainpage.png" // Ensure the image is in the `public/` folder
        />


        <SplitSection
            imageUrl="/manage.png"
            content={[
            { title: "Bespoke Policies", description: "Every asset is unique—your insurance should be too. Our custom policies provide precise coverage for your luxury lifestyle." },
            { title: "Effortless Claims", description: "When the unexpected happens, we make it right. Our streamlined claims process ensures fast, hassle-free resolutions." },
            { title: "Global Coverage", description: "Wherever life takes you, your assets are protected. We offer worldwide insurance solutions for ultimate peace of mind." }
            ]}
      />

        <FAQSection
                title="Frequently Asked Questions"
                description="Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team."
                faqs={[
                { question: "How do I get started?", answer: "Getting started is easy! Sign up, complete your profile, and start exploring." },
                { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, and bank transfers." },
                { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime. No contracts or cancellation fees." },
                { question: "Is there a mobile app available?", answer: "Yes, we have mobile apps for iOS and Android." },
                ]}
        />

        <ContactUs
            title="Request Your Complimetay Quote"
            description="When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events."
            backgroundImage="/contact.png"
           
        />

    

    </main>
  );
}
