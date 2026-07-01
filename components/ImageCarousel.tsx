"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  accentColor?: string; // Tailwind class e.g. "bg-blue-600"
}

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 60 : -60, opacity: 0 }),
};

export default function ImageCarousel({ images, accentColor = "bg-secondary" }: ImageCarouselProps) {
  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const next = (current + newDirection + images.length) % images.length;
    setPage([next, newDirection]);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-4 select-none">
      {/* Phone frame wrapper */}
      <div className="relative w-[220px] sm:w-[260px] aspect-[9/16] rounded-[2rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden bg-black">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <m.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              sizes="(max-width: 640px) 220px, 260px"
              className="object-cover"
            />
          </m.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center shadow transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > current ? 1 : -1])}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? `${accentColor} w-5` : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center shadow transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Caption */}
      <p className="text-sm text-muted-foreground text-center">{images[current].alt}</p>
    </div>
  );
}
