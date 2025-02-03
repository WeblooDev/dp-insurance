import { Button } from "@/components/ui/button";

interface ContactUsProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function ContactUs({ title, description, backgroundImage }: ContactUsProps) {
  return (
    <section className="relative min-h-[600px] w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
     

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center flex flex-col justify-center items-center gap-12 w-full h-full p-18">
        <h1 className="text-3xl font-bold max-w-[500px] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {title}
        </h1>
        <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl dark:text-zinc-200 mb-8">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <ContactButton iconSrc="/emailicon.png" text="Email" className="border border-white !text-white !bg-transparent hover:bg-white hover:text-black" />
          <ContactButton text="Get a Quote" className="!bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90" />
          <ContactButton iconSrc="/phonecall.png" text="1-833-738-7668" className="border border-white !text-white !bg-transparent hover:bg-white hover:text-black" />
        </div>
      </div>
    </section>
  );
}

interface ContactButtonProps {
  iconSrc?: string;
  text: string;
  className?: string;
}

function ContactButton({ iconSrc, text, className }: ContactButtonProps) {
  return (
    <Button size="lg" className={`flex items-center justify-center gap-2 rounded-[45px] transition-all duration-300 ${className}`}>
      {iconSrc && <img src={iconSrc} alt={text} className="w-5 h-5" />}
      {text}
    </Button>
  );
}
