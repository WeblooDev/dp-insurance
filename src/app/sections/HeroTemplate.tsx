"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroTemplateProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttons?: Array<{ text: string; icon?: JSX.Element; variant?: "default" | "secondary" | "outline" }>;
}

export default function HeroTemplate({ title, description, backgroundImage, buttons }: HeroTemplateProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="container mx-auto flex flex-col justify-between h-full p-12 pt-40">
      
      <div>
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
            {description}
          </p>
     </div>

          {/* Buttons */}
          <div className="flex gap-4 align-center justify-center sm:flex-row sm:gap-6">
          {/* Email Button */}
          <Button
            size="lg"
            className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
          >
            <img src="/emailicon.png" alt="Email Icon" className="w-5 h-5" />
            Email
          </Button>

          {/* Get a Quote Button */}
          <Button
            size="lg"
            className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
          >
            Get a Quote
          </Button>

          {/* Phone Button */}
          <Button
            size="lg"
            className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
          >
            <img src="/phonecall.png" alt="Phone Icon" className="w-5 h-5" />
            1-833-738-7668
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
