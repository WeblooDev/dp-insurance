import { Button } from "@/components/ui/button";

interface ContactUsProps {
  title: string;
  backgroundImage: string;
  buttons?: Array<{ text: string; iconSrc?: string; variant?: "primary" | "secondary" }>;
}

export default function ContactUs({ title, backgroundImage, buttons }: ContactUsProps) {
  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center">
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
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {title}
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              size="lg"
              className={`flex items-center justify-center gap-2 rounded-[45px] transition-all duration-300
                ${
                  button.variant === "primary"
                    ? "!bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
                    : "border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
                }`}
            >
              {button.iconSrc && <img src={button.iconSrc} alt="" className="w-5 h-5" />}
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
