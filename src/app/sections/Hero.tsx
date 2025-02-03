"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CustomArrow from "../../components/ui/CustomArrow";
import { useRef } from "react";
import { slides } from "@/data/slides"; 

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      container.scrollLeft -= container.offsetWidth;
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      container.scrollLeft += container.offsetWidth;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel className="relative w-full h-screen">
        <CarouselContent ref={carouselRef} className="h-screen flex overflow-x-scroll scroll-smooth no-scrollbar">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover brightness-50"
                  priority={index === 0}
                />

                <div className="flex h-full justify-between items-center flex-col relative z-10 p-12 pt-44">
                  <div className="flex flex-col items-center justify-center text-center gap-6">
                    <h2 className="font-ivar mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
                      {slide.title}
                    </h2>
                    <p className="mb-8  text-lg text-gray-200 sm:text-3xl">{slide.text}</p>
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                    <Button
                      size="lg"
                      className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
                    >
                      <img src="/emailicon.png" alt="" />
                      {slide.buttonText[0]}
                    </Button>
                    <Button
                      size="lg"
                      className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90"
                    >
                      {slide.buttonText[1]}
                    </Button>
                    <Button
                      size="lg"
                      className="gap-2 rounded-[45px] border border-white !text-white !bg-transparent hover:bg-white hover:text-black"
                    >
                      <img src="/phonecall.png" alt="" />
                      {slide.buttonText[2]}
                    </Button>
                  </div>

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom Arrows */}
      <CustomArrow direction="left" onClick={handlePrev} />
      <CustomArrow direction="right" onClick={handleNext} />
    </div>
  );
}
