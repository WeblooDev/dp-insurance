import { Button } from "@/components/ui/button";

interface RequestProps {
  title: string;
  backgroundImage: string;
  buttonText?: string;
}

export default function Request({ title, backgroundImage, buttonText }: RequestProps) {
  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center my-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <h1 className="font-ivar text-[30px] md:text-[40px] text-white mb-6">{title}</h1>

        {/* Conditional Button Rendering */}
        {buttonText?.toLowerCase() === "email" ? (
          
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
          >
            <a href="mailto:info@example.com">
              <img src="/emailicon.svg" alt="Email Icon" />
              Email
            </a>
          </Button>
        ) : (
          <Button
            asChild
            size="lg"
            className="flex items-center justify-center gap-2 rounded-[45px] transition-all duration-300 !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
          >
            <a href="https://www.dupontregistry.com/insurance/get-quote">
              {buttonText || "Get a Quote"}
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
