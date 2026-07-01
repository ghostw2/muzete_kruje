"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { NewsArticle } from "@/types";

const GRAIN_FINE_N =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
const GRAIN_COARSE_N =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.28' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Bolt({ corner }: { corner: string }) {
  return (
    <div className={`absolute ${corner}`} aria-hidden="true" style={{ width: 15, height: 15 }}>
      <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "radial-gradient(circle at 42% 38%, rgba(0,0,0,0.28) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 32% 28%, #f0dcaa 0%, #c49838 30%, #8a6028 62%, #5a3e18 100%)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.45), inset 0 -2px 3px rgba(0,0,0,0.60), 0 1px 4px rgba(0,0,0,0.55), 0 0 0 1px rgba(40,24,8,0.30)" }} />
      <svg viewBox="0 0 15 15" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <line x1="7.5" y1="3.5" x2="7.5" y2="11.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3.5" y1="7.5" x2="11.5" y2="7.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

type Props = { article: NewsArticle; locale: string };

export default function NewsCard({ article, locale }: Props) {
  const t = useTranslations("news");
  const date = new Date(article.date).toLocaleDateString(
    locale === "sq" ? "sq-AL" : locale,
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link
      href={`/${locale}/news/${article.slug}`}
      className="group relative block overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background:
          "radial-gradient(ellipse at 10% 15%, rgba(252,246,234,0.80) 0%, transparent 36%), " +
          "radial-gradient(ellipse at 88% 75%, rgba(238,230,214,0.70) 0%, transparent 40%), " +
          "repeating-linear-gradient(180deg, transparent 0px, transparent 22px, rgba(0,0,0,0.016) 22px, rgba(0,0,0,0.016) 23px, transparent 23px, transparent 44px), " +
          "linear-gradient(152deg, #ede8d8 0%, #ddd6c0 45%, #e8e2d0 100%)",
        boxShadow:
          "inset 4px 4px 0 rgba(255,255,255,0.65), " +
          "inset -4px -4px 0 rgba(0,0,0,0.20), " +
          "inset 9px 9px 18px rgba(255,255,255,0.14), " +
          "inset -7px -7px 15px rgba(0,0,0,0.10), " +
          "0 28px 70px rgba(0,0,0,0.60), 0 7px 20px rgba(0,0,0,0.34)",
      }}
    >
      {/* Aged patina */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 16% 20%, rgba(95,135,85,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 82%, rgba(115,150,95,0.10) 0%, transparent 46%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(22,14,6,0.14) 100%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRAIN_FINE_N, opacity: 0.12, mixBlendMode: "multiply" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRAIN_COARSE_N, opacity: 0.055, mixBlendMode: "multiply" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 13, border: "1.5px solid rgba(255,255,255,0.30)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.08)", pointerEvents: "none" }} />
      <Bolt corner="top-[7px] left-[7px]" />
      <Bolt corner="top-[7px] right-[7px]" />
      <Bolt corner="bottom-[7px] left-[7px]" />
      <Bolt corner="bottom-[7px] right-[7px]" />

      <div className="relative flex flex-col sm:flex-row">
        {article.imageUrl && (
          <div className="relative w-full sm:w-48 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 12rem"
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute", inset: 0,
                background: "rgba(201,196,177,0.18)",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        )}

        <div className="flex flex-col gap-2 flex-1 px-6 pt-5 pb-7">
          <p
            className="font-heading font-semibold tracking-[0.18em] uppercase"
            style={{ fontSize: "0.68rem", color: "#b8873a", textShadow: "0 1px 0 rgba(255,255,255,0.35)" }}
          >
            {date}
          </p>
          <div className="h-px w-8" style={{ background: "rgba(184,135,58,0.38)" }} />
          <h3
            className="font-heading font-semibold tracking-[0.13em] uppercase leading-snug"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "#4a320e", textShadow: "0 1px 0 rgba(255,255,255,0.28)" }}
          >
            {article.title}
          </h3>
          <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "rgba(61,43,31,0.70)" }}>
            {article.excerpt}
          </p>
          <p
            className="font-body text-xs tracking-wider uppercase mt-1"
            style={{ color: "#b8873a", opacity: 0.80 }}
          >
            {t("read_more")} →
          </p>
        </div>
      </div>
    </Link>
  );
}
