"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { slides } from "@/data/slides";

export default function HeroStatic() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [key, setKey] = useState(0); // Key to force re-animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % slides.length);
        setKey((prevKey) => prevKey + 1); // Force restart animation
        setFade(true);
      }, 500);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
{/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000" style={{ opacity: fade ? 1 : 0 }}>
        <Image
          key={key} // Forces the animation restart
          src={slides[currentImage]}
          alt=""
          fill
          className="object-cover scale-100 animate-zoomIn brightness-90" // Slightly darkened
          priority
        />
        {/* Semi-Transparent Black Overlay for Extra Darkness */}
        <div className="absolute inset-0 bg-black/10" /> {/* Adjust opacity (10% black) */}
      </div>

      {/* Content */}
      <div className="flex h-full justify-center md:justify-between gap-6 items-center flex-col relative z-10 p-4 md:p-12 md:pt-44 text-center">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="font-ivar mb-4 text-[40px] md:text-[50px] text-white">
        duPont REGISTRY Insurance
      </h2>


          <p className="mb-8 text-[20px] text-gray-200 max-w-[70%] ">
          Protect your luxury cars, jewelry, properties, yachts, and more with insurance designed for those who expect the best.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
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
            <a href="https://www.dupontregistry.com/insurance/get-quote">
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
      </div>
    </div>
  );
}
