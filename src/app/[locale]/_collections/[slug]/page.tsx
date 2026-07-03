import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { getExhibitBySlug } from "@/repositories/exhibits";
import type { Locale } from "@/types";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function ExhibitDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const fallback: Locale = ["sq", "en", "fr", "de", "ru", "pl"].includes(locale)
    ? (locale as Locale)
    : "en";
  const exhibit = getExhibitBySlug(slug, fallback) ?? getExhibitBySlug(slug, "en");
  if (!exhibit) notFound();

  const t = await getTranslations({ locale, namespace: "common" });
  const tc = await getTranslations({ locale, namespace: "collections" });

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-16 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href={`/${locale}/collections`}
            className="inline-flex items-center gap-2 font-body text-museum-gold/70 text-sm hover:text-museum-gold transition-colors mb-6"
          >
            ← {t("back")}
          </Link>
          <span className="font-caption text-museum-terracotta italic text-sm block mb-2">
            {exhibit.period}
          </span>
          <h1 className="font-heading text-museum-linen-50 text-4xl sm:text-5xl font-semibold">
            {exhibit.name}
          </h1>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden border border-museum-walnut/10 shadow-lg">
            <Image
              src={exhibit.imageUrl}
              alt={exhibit.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-museum-walnut/80 leading-relaxed text-base">
              {exhibit.description}
            </p>

            <div className="border-t border-museum-walnut/10 pt-6 flex flex-col gap-4">
              {[
                { label: t("period"), value: exhibit.period },
                ...(exhibit.provenance
                  ? [{ label: t("provenance"), value: exhibit.provenance }]
                  : []),
                ...(exhibit.dimensions
                  ? [{ label: t("dimensions"), value: exhibit.dimensions }]
                  : []),
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="font-body text-museum-walnut/40 text-xs uppercase tracking-widest block mb-0.5">
                    {label}
                  </span>
                  <span className="font-caption text-museum-walnut italic text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
