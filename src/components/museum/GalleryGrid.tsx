"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GalleryImage } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { images: GalleryImage[] };

// Wikimedia URLs are fetched directly by the browser (unoptimized).
// Local /images/* paths go through Next.js optimisation normally.
function isExternal(src: string) {
  return src.startsWith("http");
}

export default function GalleryGrid({ images }: Props) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const prev = useCallback(() => {
    if (!selected) return;
    const idx = images.indexOf(selected);
    setSelected(images[(idx - 1 + images.length) % images.length]);
  }, [selected, images]);

  const next = useCallback(() => {
    if (!selected) return;
    const idx = images.indexOf(selected);
    setSelected(images[(idx + 1) % images.length]);
  }, [selected, images]);

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelected(img)}
            className="w-full block overflow-hidden border border-museum-walnut/10 hover:border-museum-gold/40 hover:shadow-lg transition-all duration-200 group break-inside-avoid"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: `${img.width}/${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized={isExternal(img.src)}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="px-3 py-2 bg-museum-linen-100">
              <p className="font-caption text-museum-walnut/50 italic text-xs line-clamp-1 text-left">
                {img.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-5xl w-full bg-museum-stone-950 border-museum-gold/20 p-0">
          {selected && (
            <div className="relative flex flex-col">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: `${selected.width}/${selected.height}`,
                  maxHeight: "78vh",
                }}
              >
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  unoptimized={isExternal(selected.src)}
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Caption */}
              <div className="py-4 px-6 text-center border-t border-museum-gold/10">
                <p className="font-caption text-museum-linen-100/60 italic text-sm">
                  {selected.alt}
                </p>
                <p className="font-body text-museum-linen-100/30 text-xs mt-1">
                  © Wikimedia Commons · CC BY / CC BY-SA
                </p>
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-8 text-museum-linen-50/60 hover:text-museum-gold transition-colors p-1"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-8 text-museum-linen-50/60 hover:text-museum-gold transition-colors p-1"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
