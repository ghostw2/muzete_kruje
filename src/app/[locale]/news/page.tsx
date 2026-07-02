import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getNewsArticles } from "@/repositories/news";
import type { Locale } from "@/types";
import NewsCard from "@/components/museum/NewsCard";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string }> };


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  return {
    title: t("heading"),
    description: t("subtitle"),
    alternates: { canonical: "https://qendramuzeore-kruje.com/" + locale + "/news" },
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  const fallback: Locale = ["sq", "en", "fr", "de", "ru", "pl"].includes(locale)
    ? (locale as Locale)
    : "en";
  const articles = getNewsArticles(fallback).length > 0
    ? getNewsArticles(fallback)
    : getNewsArticles("en");

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

      <section className="stone-texture bg-museum-stone-800 py-12 px-4 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
