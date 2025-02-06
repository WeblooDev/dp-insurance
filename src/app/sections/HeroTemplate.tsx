"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroTemplateProps {
  title: string;
  description: string;
  backgroundImage: string;
  showButtons?: boolean; // ✅ Added boolean prop (default false)
}

export default function HeroTemplate({ title, description, backgroundImage, showButtons = false }: HeroTemplateProps) {
  return (
<section className="relative h-[90vh] w-full overflow-hidden flex items-center md:justify-center md:flex">
{/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover "
        priority
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="container mx-auto flex flex-col h-full p-4 md:p-12 md:pt-40 justify-center lg:justify-between">
      
          <div className="flex flex-col items-center justify-center">
          <h2 className="font-ivar mb-4 text-[40px] md:text-[50px] text-white">{title}</h2>
          <p className="mb-8 text-[20px] text-gray-200 max-w-[70%]">{description}</p>
          </div>

          {showButtons && (
            <div className="flex gap-4 align-center justify-center sm:flex-row sm:gap-6">
              <Button
            asChild
            size="lg"
            className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
          >
            <a href="mailto:info@example.com">
              <img src="/emailicon.png" alt="Email Icon" />
              Email
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
          >
            <a href="https://www.dupontregistry.com/insurance/get-quote" target="_blank" rel="noopener noreferrer">
              Get Quote
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
          >
            <a href="tel:+123456789">
              <img src="/phonecall.png" alt="Phone Icon" />
              1-833-738-7668            </a>
          </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
