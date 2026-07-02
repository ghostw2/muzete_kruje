"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (images.length === 0) return null;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const single = images.length === 1;

  return (
    <div className="select-none">
      {/* Image frame */}
      <div className="relative overflow-hidden bg-museum-stone-900" style={{ aspectRatio: "4/3" }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            drag={single ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 50) {
                go(info.offset.x < 0 ? 1 : -1);
              }
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${alt} — ${index + 1} / ${images.length}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter */}
        {!single && (
          <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded bg-museum-stone-950/55 font-body text-museum-linen-50/70 text-xs tabular-nums">
            {index + 1} / {images.length}
          </div>
        )}

        {/* Arrows */}
        {!single && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-museum-stone-950/60 hover:bg-museum-stone-950/85 transition-colors"
            >
              <ChevronLeft size={18} className="text-museum-linen-50" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-museum-stone-950/60 hover:bg-museum-stone-950/85 transition-colors"
            >
              <ChevronRight size={18} className="text-museum-linen-50" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {!single && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "bg-museum-gold w-3"
                  : "bg-museum-gold/30 hover:bg-museum-gold/60 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
