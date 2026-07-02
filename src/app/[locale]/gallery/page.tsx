"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { getGalleryImages } from "@/repositories/gallery";
import type { GalleryImage } from "@/types";
import GalleryGrid from "@/components/museum/GalleryGrid";
import SectionDivider from "@/components/museum/SectionDivider";

type Category = GalleryImage["category"] | "all";



export default function GalleryPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("gallery");
  const [category, setCategory] = useState<Category>("all");

  const images =
    category === "all" ? getGalleryImages() : getGalleryImages(category);

  const tabs: Array<{ value: Category; label: string }> = [
    { value: "all", label: "All" },
    { value: "architecture", label: t("tab_architecture") },
    { value: "artifacts", label: t("tab_artifacts") },
    { value: "landscape", label: t("tab_landscape") },
    { value: "events", label: t("tab_events") },
  ];

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <h1 className="font-heading text-museum-linen-50 font-semibold mb-4" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            {t("heading")}
          </h1>
          <p className="font-caption text-museum-gold/80 italic text-lg">{t("subtitle")}</p>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-museum-linen-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setCategory(tab.value)}
                className={`px-4 py-2 text-sm font-body border transition-colors ${
                  category === tab.value
                    ? "bg-museum-stone-950 text-museum-gold border-museum-gold/40"
                    : "border-museum-walnut/20 text-museum-walnut/60 hover:border-museum-gold/30 hover:text-museum-walnut"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
