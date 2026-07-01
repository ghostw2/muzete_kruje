import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { getNewsArticleBySlug } from "@/repositories/news";
import type { Locale } from "@/types";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function NewsDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const fallback: Locale = ["sq", "en", "fr", "de", "ru", "pl"].includes(locale)
    ? (locale as Locale)
    : "en";
  const article = getNewsArticleBySlug(slug, fallback) ?? getNewsArticleBySlug(slug, "en");
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "common" });
  const date = new Date(article.date).toLocaleDateString(locale === "sq" ? "sq-AL" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-16 px-4">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 font-body text-museum-gold/70 text-sm hover:text-museum-gold transition-colors mb-6"
          >
            ← {t("back")}
          </Link>
          <span className="font-caption text-museum-terracotta italic text-sm block mb-2">{date}</span>
          <h1 className="font-heading text-museum-linen-50 text-4xl sm:text-5xl font-semibold">
            {article.title}
          </h1>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {article.imageUrl && (
            <div className="relative w-full aspect-video mb-10 overflow-hidden border border-museum-walnut/10 shadow-lg">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none font-body text-museum-walnut/80 leading-relaxed">
            {article.body.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
