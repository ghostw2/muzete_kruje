import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/museum/HeroSection";
import SectionDivider from "@/components/museum/SectionDivider";
import JsonLd from "@/components/museum/JsonLd";

type Props = { params: Promise<{ locale: string }> };

const quickLinks = [
  { key: "museums",     icon: "⚔",  href: "/museums" },
  { key: "timeline",    icon: "📜",  href: "/timeline" },
  { key: "collections", icon: "🏺",  href: "/collections" },
  { key: "visit",       icon: "📍",  href: "/visit" },
];


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: t("title") + " — Krujë, Shqipëri",
    description: t("tagline"),
    alternates: { canonical: "https://muzeukruje.vercel.app/" + locale },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t  = await getTranslations({ locale, namespace: "nav" });
  const tm = await getTranslations({ locale, namespace: "museums" });

  return (
    <>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Muzeu Historik dhe Etnografik, Krujë",
            "url": "https://muzeukruje.vercel.app",
            "logo": "https://muzeukruje.vercel.app/images/museum-logo.png",
            "telephone": "+35551122225",
            "email": "muzeu.gjkskenderbeu@yahoo.com",
            "sameAs": ["https://www.instagram.com/muzeumetkruje/"]
          },
          {
            "@type": "WebSite",
            "url": "https://muzeukruje.vercel.app",
            "name": "Muzeu Historik dhe Etnografik, Krujë",
            "inLanguage": ["sq","en","fr","de","ru","pl"]
          }
        ]
      }} />
      <HeroSection locale={locale} />
      <SectionDivider />

      {/* ── Two-museum preview ───────────────────────────── */}
      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-museum-walnut text-3xl sm:text-4xl font-semibold tracking-widest uppercase mb-3">
              {tm("heading")}
            </h2>
            <p className="font-caption text-museum-walnut/50 italic">{tm("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* ── Skanderbeg Museum ── */}
            <div className="group flex flex-col border border-museum-gold/30 overflow-hidden hover:border-museum-gold/60 transition-colors">
              {/* Featured image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/media/castle-night.jpg"
                  alt="Kështjella e Krujës natën"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Thumbnail strip */}
              <div className="grid grid-cols-2 h-24 border-t border-museum-gold/10">
                <div className="relative overflow-hidden border-r border-museum-gold/10">
                  <Image
                    src="/media/castle-day.jpg"
                    alt="Hyrja e kështjellës"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 delay-75"
                    sizes="25vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/museums-night.jpg"
                    alt="Të dy muzeumet natën"
                    fill
                    className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 delay-150"
                    sizes="25vw"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="bg-museum-linen-100 p-6 flex flex-col gap-3 flex-1">
                <p className="font-caption text-museum-walnut/40 italic text-xs">{tm("skanderbeg_period")}</p>
                <h3 className="font-heading text-museum-walnut text-xl font-semibold tracking-wide uppercase leading-snug">
                  {tm("skanderbeg_name")}
                </h3>
                <p className="font-body text-museum-walnut/60 text-sm leading-relaxed line-clamp-3">
                  {tm("skanderbeg_desc")}
                </p>
                <Link
                  href={`/${locale}/collections?museum=skanderbeg`}
                  className="self-start mt-1 px-5 py-2 border border-museum-gold/40 text-museum-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-gold/10 transition-colors"
                >
                  {tm("explore")} →
                </Link>
              </div>
            </div>

            {/* ── Ethnographic Museum ── */}
            <div className="group flex flex-col border border-museum-terracotta/30 overflow-hidden hover:border-museum-terracotta/60 transition-colors">
              {/* Featured image — interior painted room, show from top to capture murals */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/media/ethnographic-interior.jpg"
                  alt="Brendësia e Muzeut Etnografik — dhoma me piktura"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Thumbnail strip */}
              <div className="grid grid-cols-2 h-24 border-t border-museum-terracotta/10">
                <div className="relative overflow-hidden border-r border-museum-terracotta/10">
                  <Image
                    src="/media/ethnographic-museum.jpg"
                    alt="Fasada e Muzeut Etnografik"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 delay-75"
                    sizes="25vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/ethnographic-plaque.jpg"
                    alt="Pllaka — Banese Qytetare Krutane"
                    fill
                    className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 delay-150"
                    sizes="25vw"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="bg-museum-linen-100 p-6 flex flex-col gap-3 flex-1">
                <p className="font-caption text-museum-walnut/40 italic text-xs">{tm("ethnographic_period")}</p>
                <h3 className="font-heading text-museum-walnut text-xl font-semibold tracking-wide uppercase leading-snug">
                  {tm("ethnographic_name")}
                </h3>
                <p className="font-body text-museum-walnut/60 text-sm leading-relaxed line-clamp-3">
                  {tm("ethnographic_desc")}
                </p>
                <Link
                  href={`/${locale}/collections?museum=ethnographic`}
                  className="self-start mt-1 px-5 py-2 border border-museum-terracotta/40 text-museum-terracotta font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-terracotta/10 transition-colors"
                >
                  {tm("explore")} →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Quick navigation ─────────────────────────────── */}
      <section className="stone-texture bg-museum-stone-950 py-16 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="group flex flex-col items-center gap-3 p-6 border border-museum-gold/20 hover:border-museum-gold/50 hover:bg-museum-stone-800/60 transition-all text-center"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="font-heading text-museum-linen-100/70 group-hover:text-museum-gold text-xs tracking-widest uppercase transition-colors">
                  {t(link.key)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
