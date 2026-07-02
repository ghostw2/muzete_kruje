"use client";

import { useEffect, useState } from "react";

type Props = {
  audioLabel: string;
  tourLabel: string;
};

export default function GuidesSubNav({ audioLabel, tourLabel }: Props) {
  const [active, setActive] = useState<"audio" | "tour">("audio");

  useEffect(() => {
    const sections = [
      { id: "audio-guide", key: "audio" as const },
      { id: "etnografiku", key: "tour" as const },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActive(match.key);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="stone-texture sticky top-16 z-40 bg-museum-stone-950 border-b border-museum-gold/20">
      <div className="max-w-4xl mx-auto px-4 flex">
        <button
          onClick={() => scrollTo("audio-guide")}
          className={`flex items-center gap-2 px-5 py-4 font-heading text-xs tracking-[0.2em] uppercase transition-colors border-b-2 ${
            active === "audio"
              ? "text-museum-gold border-museum-gold"
              : "text-museum-linen-100/50 border-transparent hover:text-museum-linen-50"
          }`}
        >
          <span aria-hidden="true">🎧</span>
          {audioLabel}
        </button>
        <button
          onClick={() => scrollTo("etnografiku")}
          className={`flex items-center gap-2 px-5 py-4 font-heading text-xs tracking-[0.2em] uppercase transition-colors border-b-2 ${
            active === "tour"
              ? "text-museum-gold border-museum-gold"
              : "text-museum-linen-100/50 border-transparent hover:text-museum-linen-50"
          }`}
        >
          <span aria-hidden="true">⌂</span>
          {tourLabel}
        </button>
      </div>
    </div>
  );
}
