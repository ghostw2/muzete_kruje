"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { getExhibits } from "@/repositories/exhibits";
import type { Locale, Exhibit, Museum } from "@/types";
import ArtifactCard from "@/components/museum/ArtifactCard";
import SectionDivider from "@/components/museum/SectionDivider";

type MuseumFilter = Museum | "all";
type EraFilter = Exhibit["era"] | "all";
type TypeFilter = Exhibit["type"] | "all";



export default function CollectionsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = params.locale as string;
  const fallback: Locale = ["sq", "en", "fr", "de", "ru", "pl"].includes(locale)
    ? (locale as Locale)
    : "en";
  const exhibits = getExhibits(fallback).length > 0 ? getExhibits(fallback) : getExhibits("en");
  const t = useTranslations("collections");

  const initialMuseum = (searchParams.get("museum") as MuseumFilter) || "all";
  const [museumFilter, setMuseumFilter] = useState<MuseumFilter>(initialMuseum);
  const [eraFilter, setEraFilter] = useState<EraFilter>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  useEffect(() => {
    const m = searchParams.get("museum") as MuseumFilter;
    if (m) setMuseumFilter(m);
  }, [searchParams]);

  const filtered = exhibits.filter(
    (e) =>
      (museumFilter === "all" || e.museum === museumFilter) &&
      (eraFilter === "all" || e.era === eraFilter) &&
      (typeFilter === "all" || e.type === typeFilter)
  );

  const museumTabs: Array<{ value: MuseumFilter; label: string; icon: string }> = [
    { value: "all", label: t("filter_all"), icon: "◈" },
    { value: "skanderbeg", label: t("filter_skanderbeg"), icon: "⚔" },
    { value: "ethnographic", label: t("filter_ethnographic"), icon: "⌂" },
  ];

  const eras: Array<{ value: EraFilter; label: string }> = [
    { value: "all", label: t("filter_all") },
    { value: "ancient", label: t("era_ancient") },
    { value: "medieval", label: t("era_medieval") },
    { value: "ottoman", label: t("era_ottoman") },
    { value: "modern", label: t("era_modern") },
  ];

  const types: Array<{ value: TypeFilter; label: string }> = [
    { value: "all", label: t("filter_all") },
    { value: "weaponry", label: t("type_weaponry") },
    { value: "textiles", label: t("type_textiles") },
    { value: "documents", label: t("type_documents") },
    { value: "household", label: t("type_household") },
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

          {/* Museum tabs — primary filter */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {museumTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => { setMuseumFilter(tab.value); setEraFilter("all"); setTypeFilter("all"); }}
                className={`flex items-center gap-2 px-5 py-2.5 border font-body text-sm transition-colors ${
                  museumFilter === tab.value
                    ? "bg-museum-stone-950 text-museum-gold border-museum-gold/50"
                    : "border-museum-walnut/20 text-museum-walnut/60 hover:border-museum-gold/30 hover:text-museum-walnut"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Sub-filters */}
          <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-museum-walnut/10">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-body text-museum-walnut/40 text-xs uppercase tracking-widest mr-1">
                {t("filter_era")}:
              </span>
              {eras.map((era) => (
                <button
                  key={era.value}
                  onClick={() => setEraFilter(era.value)}
                  className={`px-3 py-1 text-xs font-body border transition-colors ${
                    eraFilter === era.value
                      ? "bg-museum-stone-950 text-museum-gold border-museum-gold/40"
                      : "border-museum-walnut/20 text-museum-walnut/60 hover:border-museum-gold/30"
                  }`}
                >
                  {era.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-body text-museum-walnut/40 text-xs uppercase tracking-widest mr-1">
                {t("filter_type")}:
              </span>
              {types.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setTypeFilter(type.value)}
                  className={`px-3 py-1 text-xs font-body border transition-colors ${
                    typeFilter === type.value
                      ? "bg-museum-stone-950 text-museum-gold border-museum-gold/40"
                      : "border-museum-walnut/20 text-museum-walnut/60 hover:border-museum-gold/30"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="font-body text-museum-walnut/40 text-xs mb-6">
            {filtered.length} artifact{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((exhibit) => (
              <ArtifactCard key={exhibit.id} exhibit={exhibit} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
