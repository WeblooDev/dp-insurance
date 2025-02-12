
import { getServices } from "@/data/service";
import Request from "./sections/Request";
import WhyUs from './sections/whyUs';
import SplitSection from "./sections/SplitSection";
import ContactUs from './sections/ContactUs';
import ServiceCard from "./sections/Template";
import FAQSection from './sections/FaqSection';
import HeroCarousel from "./sections/Hero";
import LineCall from './sections/LineCall';
import MediaSection from "./sections/ImageSection";

export default async function Home() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-white flex flex-col gap-10">


        <HeroCarousel />



        <section className="w-full mx-auto px-4 sm:px-12 py-12">
        <div className="title flex self-center  justify-center pb-12 text-5xl ">
            <h1 className="font-ivar text-[40px] tracking-tight ">What we Cover</h1>
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

        <LineCall
         title="Need Premium Insurance for Unique Needs?" />
         

         <MediaSection mediaUrl="/mainlanding.mp4" altText="Main Page Banner" />

      
      <WhyUs
        title="Why Choose Us?"
        description="We understand that your valuable assets deserve top-notch protection. That’s why we offer a wide range  of insurance options tailored to safeguard what matters most to you."
        services={[
          {
            image: "/why1.png",
            name: "Premiere coverage Options",
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
        buttonText="Request a Complimentary Review"
        backgroundImage="/requestMainpage.png" // Ensure the image is in the `public/` folder
        />


        <SplitSection
            imageUrl="/heroSplit-right.png"
            content={[
            { title: "Bespoke Policies", description: "Every asset is unique, and your insurance should reflect that. Our custom policies offer meticulous coverage tailored to your luxury lifestyle." },
            { title: "Claims Advocacy", description: "When the unexpected happens, We are committed to finding the best solution for you. Our claims process ensures fast and hassle-free resolutions." },
            { title: "Global Coverage", description: "Your assets are protected, wherever life takes you. We offer worldwide insurance solutions for ultimate peace of mind." }
            ]}
      />

        <FAQSection
                title="Frequently Asked Questions"
                description="Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy."
                faqs={[
                { question: "What is duPont REGISTRY insurance?", answer: "duPont Registry Insurance is a specialized insurance program designed to protect high-value assets, including luxury homes, exotic antique/classic cars, yachts, private aircraft, fine art, and collectibles. Our program is tailored for individuals who require premium coverage with concierge-level service. Whether you own a single high-value asset or a diverse collection, we provide customized insurance solutions to meet your unique needs." },
                
                { question: "What makes duPont Registry Insurance different from standard insurance providers?", answer: "Unlike traditional insurers, duPont REGISTRY Insurance partners with top-tier carriers specializing in high-net-worth coverage. Our policies offer: Agreed Value Coverage to ensure full payouts without depreciation. Worldwide Protection for assets like luxury homes and vehicles, couture collections, and fine art. Concierge Claims Service for a seamless, white-glove experience. Customizable Coverage designed for rare, collectible, and one-of-a-kind assets." },
                { question: "çHow do I get a quote for my luxury assets?",  answer: `
                
                  <p >Getting a quote is simple:</p>
                  <br/>
                  <p > Click the Get a Quote button on this page. </p>
                   <p > Our team will connect you with a high-net-worth insurance specialist to tailor a policy to your needs.</p>

                 

                 
              ` },
               
                ]}
        />

        <ContactUs
            title="Request Your Complimentary Quote"
            description="When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events."
            backgroundImage="/contact.png"
           showGetQuoteButton={true}
        />

    

    </main>
  );
};
