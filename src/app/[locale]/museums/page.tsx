import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import SectionDivider from "@/components/museum/SectionDivider";
import JsonLd from "@/components/museum/JsonLd";

type Props = { params: Promise<{ locale: string }> };


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "museums" });
  return {
    title: t("heading"),
    description: t("subtitle"),
    alternates: { canonical: "https://qendramuzeore-kruje.com/" + locale + "/museums" },
  };
}

export default async function MuseumsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "museums" });

  return (
    <>

      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": ["Museum", "TouristAttraction", "LocalBusiness"],
          "name": "Muzeu Kombëtar Gjergj Kastrioti Skënderbeu",
          "description": "Muzeu Kombëtar Gjergj Kastrioti Skënderbeu ndodhet brenda kështjellës historike të Krujës, kushtuar heroit kombëtar Gjergj Kastrioti Skënderbeu.",
          "url": "https://qendramuzeore-kruje.com",
          "telephone": "+35551122225",
          "email": "muzeu.gjkskenderbeu@yahoo.com",
          "image": "https://qendramuzeore-kruje.com/images/castle-day.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sheshi Gjergj Kastrioti, Kështjella e Krujës",
            "addressLocality": "Krujë",
            "addressCountry": "AL"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 41.5097, "longitude": 19.7956 },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "19:00" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": ["Museum", "TouristAttraction", "LocalBusiness"],
          "name": "Muzeu Kombëtar Etnografik Krujë",
          "description": "Muzeu Kombëtar Etnografik Krujë ndodhet në kullën tradicionale shqiptare të shekullit XVIII dhe tregon jetën e Krujës nën periudhën osmane.",
          "url": "https://qendramuzeore-kruje.com",
          "telephone": "+35551122225",
          "email": "muzeu.gjkskenderbeu@yahoo.com",
          "image": "https://qendramuzeore-kruje.com/images/ethnographic-interior.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pazari i Vjetër, Krujë",
            "addressLocality": "Krujë",
            "addressCountry": "AL"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 41.5073, "longitude": 19.7947 },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "19:00" }
          ]
        }
      ]} />
      {/* ── Page header ─────────────────────────────────── */}
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <h1 className="font-heading text-museum-linen-50 font-semibold tracking-widest uppercase mb-4" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            {t("heading")}
          </h1>
          <p className="font-caption text-museum-gold/80 italic text-lg">{t("subtitle")}</p>
        </div>
      </section>

      {/* ── Full-bleed panorama with editorial text overlay ── */}
      <div className="relative w-full h-[65vh] min-h-[420px] overflow-hidden">
        <Image
          src="/media/skanderbeg-museum-night-aerial.jpg"
          alt="Muzeu Historik Kombëtar Gjergj Kastrioti Skënderbeu — natën, Krujë"
          fill
          className="object-cover object-[center_78%]"
          priority
        />
        {/* Dark gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-museum-stone-950/80 via-museum-stone-950/30 to-transparent" />
        {/* Bottom fade into linen section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-museum-linen-50 to-transparent" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-museum-stone-950/50 to-transparent" />

        {/* Editorial text — bottom-left, large fluid heading */}
        <div className="absolute bottom-12 left-0 px-8 md:px-16">
          <p className="font-caption text-museum-gold/75 italic text-xs tracking-[0.25em] uppercase mb-3">
            Krujë · Shqipëri · Est. 1981
          </p>
          <h2
            className="font-heading text-museum-linen-50 font-semibold uppercase leading-none tracking-wide"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
            }}
          >
            Kështjella<br />& Kulla
          </h2>
          <div className="mt-4 h-px w-14 bg-museum-gold/55" />
        </div>

        {/* Ambient large background text — right side */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <span
            className="font-heading font-semibold uppercase text-museum-linen-50"
            style={{ fontSize: "clamp(5rem, 16vw, 14rem)", opacity: 0.04, letterSpacing: "0.1em", lineHeight: 1 }}
          >
            1190
          </span>
        </div>
      </div>

      {/* ── Museum sections ──────────────────────────────── */}
      <section className="bg-museum-linen-50 pt-4 pb-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          {/* ── SKANDERBEG MUSEUM ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col gap-5">
              <span className="text-museum-gold text-3xl">⚔</span>
              <span className="font-caption text-museum-walnut/50 italic text-sm">{t("skanderbeg_period")}</span>
              <h2 className="font-heading text-museum-walnut text-3xl sm:text-4xl font-semibold tracking-wide uppercase leading-tight">
                {t("skanderbeg_name")}
              </h2>
              <p className="font-body text-museum-walnut/70 text-sm leading-relaxed">
                {t("skanderbeg_desc")}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href={`/${locale}/guides`}
                  className="self-start px-6 py-2.5 border border-museum-gold/50 text-museum-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-gold/10 transition-colors"
                >
                  {t("explore_guide")} →
                </Link>
                <Link
                  href={`/${locale}/guides`}
                  className="self-start px-6 py-2.5 border border-museum-gold/30 text-museum-gold/70 font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-gold/10 transition-colors"
                >
                  {t("audio_guide")} →
                </Link>
              </div>
            </div>

            {/* Images — large hero + 2 thumbnails below */}
            <div className="flex flex-col gap-2">
              {/* Hero photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/media/castle-day.jpg"
                  alt="Kështjella e Krujës — hyrja kryesore"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Two thumbnails */}
              <div className="grid grid-cols-2 gap-2 h-40">
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/skanderbeg-museum-night-glow.jpg"
                    alt="Muzeu Historik natën — i ndriçuar me ngjyrë portokalli"
                    fill
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/museum-battle-panorama.jpg"
                    alt="Panorama e betejës — ekspozitë brenda Muzeut Historik"
                    fill
                    className="object-cover object-[center_30%]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-museum-gold/20" />
            <span className="text-museum-gold/40 text-sm">✦</span>
            <div className="flex-1 h-px bg-museum-gold/20" />
          </div>

          {/* ── ETHNOGRAPHIC MUSEUM ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images — large hero + 2 thumbnails below */}
            <div className="flex flex-col gap-2 order-last lg:order-first">
              {/* Hero: interior — object-top shows the painted murals and ceiling */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/media/ethnographic-interior.jpg"
                  alt="Brendësia e Muzeut Etnografik — dhoma me piktura osmane"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Two thumbnails */}
              <div className="grid grid-cols-2 gap-2 h-40">
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/ethnographic-museum.jpg"
                    alt="Fasada e jashtme e Muzeut Etnografik"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/media/ethnographic-plaque.jpg"
                    alt="Pllaka — Banese Qytetare Krutane, Shek. XVIII"
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <span className="text-museum-terracotta text-3xl">⌂</span>
              <span className="font-caption text-museum-walnut/50 italic text-sm">{t("ethnographic_period")}</span>
              <h2 className="font-heading text-museum-walnut text-3xl sm:text-4xl font-semibold tracking-wide uppercase leading-tight">
                {t("ethnographic_name")}
              </h2>
              <p className="font-body text-museum-walnut/70 text-sm leading-relaxed">
                {t("ethnographic_desc")}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href={`/${locale}/guides`}
                  className="self-start px-6 py-2.5 border border-museum-terracotta/40 text-museum-terracotta font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-terracotta/10 transition-colors"
                >
                  {t("explore_guide")} →
                </Link>
                <Link
                  href={`/${locale}/etnografiku`}
                  className="self-start px-6 py-2.5 border border-museum-gold/40 text-museum-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-gold/10 transition-colors"
                >
                  {t("explore_rooms")} →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
