import { Button } from "@/components/ui/button";


interface ContactUsProps {
  title: string;
  description: string;
  backgroundImage: string;
  showGetQuoteButton?: boolean; // ✅ Add the new prop
}

export default function ContactUs({ title, description, backgroundImage, showGetQuoteButton }: ContactUsProps) {
  return (
    <section className="relative min-h-[600px] w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center flex flex-col justify-center items-center gap-10 w-full h-full p-18">
        <h1 className="font-ivar text-[30px] md:text-[40px] text-white">{title}</h1>
        <p className="mx-auto max-w-[700px] text-[16px] md:text-[18px] text-white">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button asChild size="lg" className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black">
            <a href="mailto:info@example.com">
              <img src="/emailicon.svg" alt="Email Icon" />
              Email
            </a>
          </Button>

          {showGetQuoteButton && (
            <Button asChild size="lg" className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90">
              <a href="https://www.dupontregistry.com/insurance/get-quote">
                Request a Complimentary Review
              </a>
            </Button>
          )}

<div className="relative flex flex-col items-center">
            <Button
              asChild
              size="lg"
              className=" gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
            >
              <a href="tel:+123456789">
                <img src="/phonecall.svg" alt="Phone Icon" />
                1-833-738-7668
              </a>
              
              
            </Button>
            <span className="absolute bottom-[-30px] text-white text-sm mt-2">
              Speak with an advisor
            </span>
            
          </div>
        </div>
      </div>
    </section>
  );
}




