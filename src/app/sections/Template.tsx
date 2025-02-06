"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  id: string;
  name: string;
  imageUrl: string;
  index: number;
}

export default function ServiceCard({ id, name, imageUrl, index }: ServiceCardProps) {
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

    const element = document.getElementById(`service-card-${id}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.div
      id={`service-card-${id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    >
      <Link href={`/${id}`} className="group relative block">
        <Card className="relative overflow-hidden h-[350px] cursor-pointer border-none rounded-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="font-ivar mb-4 text-[32px]  text-white ">{name}</h3>
            <span className="text-white underline">Learn More</span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
