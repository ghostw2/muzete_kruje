import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { njoftimet } from "@/data/njoftimet";
import { getAnnouncementBySlug } from "@/repositories/njoftimet";
import { locales } from "@/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return njoftimet.flatMap((n) =>
    locales.map((locale) => ({ locale, slug: n.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getAnnouncementBySlug(slug);
  if (!item) return {};
  return {
    title: locale === "sq" ? item.titleAL : item.titleEN,
  };
}

export default async function NjoftimDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "njoftimet" });
  const item = getAnnouncementBySlug(slug);
  if (!item) notFound();

  const title = locale === "sq" ? item.titleAL : item.titleEN;
  const body = locale === "sq" ? item.bodyAL : item.bodyEN;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(item.date));

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <p className="font-caption text-museum-gold/60 text-xs tracking-[0.25em] uppercase mb-4">
            {formattedDate}
          </p>
          <h1
            className="font-heading text-museum-linen-50 font-semibold tracking-widest uppercase mb-4"
            style={{ fontSize: "clamp(1.6rem,4vw,3rem)" }}
          >
            {title}
          </h1>
        </div>
      </section>

      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {item.imageUrl && (
            <div className="relative aspect-[16/9] overflow-hidden mb-10">
              <Image
                src={item.imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}

          <div className="font-body text-museum-walnut/80 text-sm leading-relaxed whitespace-pre-line">
            {body}
          </div>

          <div className="mt-12 pt-6 border-t border-museum-gold/20">
            <Link
              href={`/${locale}/njoftimet`}
              className="font-heading text-museum-gold text-xs tracking-[0.15em] uppercase hover:text-museum-gold/70 transition-colors"
            >
              ← {t("back")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
