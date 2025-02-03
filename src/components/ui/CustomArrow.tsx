"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface CustomArrowProps {
  onClick: () => void
  direction: "left" | "right"
}

export default function CustomArrow({ onClick, direction }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white bg-opacity-20 p-2 text-white transition hover:bg-opacity-50",
        direction === "left" ? "left-4" : "right-4"
      )}
    >
      <Image
        src={direction === "left" ? "/left.png" : "/right.png"}
        alt={`${direction} arrow`}
        width={24}
        height={24}
        className="object-contain"
      />
    </button>
  )
}
