"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WhyUsProps {
  title: string;
  description: string;
  services: Array<{ 
    image: string; 
    name: string; 
    description: string; 
    isDimmed?: boolean; 
    overlayImage?: string; // ✅ Accept overlay image
  }>;
}

export default function WhyUs({ title, description, services }: WhyUsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("why-us-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="why-us-section" className="w-full bg-background flex justify-center p-12 pb-12 px-4 sm:px-12">
      <div className="container px-4 md:px-6">
        {/* Main Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
        <h2 className="font-ivar text-[32px] md:text-[40px]">{title}</h2>
        <p className="text-[16px] w-full md:text-[18px] md:max-w-[900px] mx-auto">
        {description}
          </p>
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center space-y-4 gap-2"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className={`object-cover w-full h-full transition-all duration-300 ${
                    service.isDimmed ? "" : ""
                  }`}
                />
                {service.isDimmed && service.overlayImage && (
                  <img
                    src={service.overlayImage}
                    alt="Overlay"
                    className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </div>
              <h3 className="font-ivar text-[24px] md:text-[28px] text-center">{service.name}</h3>
              <div className="w-[50%] h-0.5 bg-[black] rounded-full" />
              <p className="text-center text-[16px] md:text-[18px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
