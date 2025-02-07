"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroTemplateProps {
  title: string;
  description: string;
  backgroundImage: string;
  showButton?: boolean; // ✅ Only affects the "Get Quote" button
}

export default function HeroTemplate({ title, description, backgroundImage, showButton = false }: HeroTemplateProps) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center md:justify-center md:flex">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="container mx-auto gap-6 flex flex-col h-full p-4 md:p-12 md:pt-40 justify-center lg:justify-between">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-ivar mb-4 text-[40px] md:text-[50px] text-white">{title}</h2>
            <p className="mb-8 text-[16px]  text-white sm:text-[20px] max-w-full sm:max-w-[60%]">{description}</p>
            </div>

          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-6">
            {/* Email Button (Always Visible) */}
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

            {/* Get Quote Button (Conditional) */}
            {showButton && (
              <Button
                asChild
                size="lg"
                className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
              >
                <a href="https://www.dupontregistry.com/insurance/get-quote">
                  Get Quote
                </a>
              </Button>
            )}

            {/* Phone Button (Always Visible) */}
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
            >
              <a href="tel:+123456789">
                <img src="/phonecall.svg" alt="Phone Icon" />
                1-833-738-7668
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
