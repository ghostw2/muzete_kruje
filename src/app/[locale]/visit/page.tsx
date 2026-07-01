import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "visit" });
  return {
    title: t("heading") + " — Muzeu Historik dhe Etnografik Krujë",
    description: "Orari i hapjes, çmimet e biletave dhe udhëzimet për të arritur në Muzeun Historik Kombëtar Gjergj Kastrioti Skënderbeu dhe Muzeun Etnografik të Krujës.",
    alternates: { canonical: "https://muzeukruje.vercel.app/" + locale + "/visit" },
  };
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between items-baseline py-2.5 border-b border-museum-walnut/10 last:border-0">
      <span className="font-body text-museum-walnut/60 text-sm">{label}</span>
      <span className={`font-heading text-sm font-semibold tracking-wide ${muted ? "text-museum-terracotta" : "text-museum-walnut"}`}>
        {value}
      </span>
    </div>
  );
}

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i <= Math.round(score) ? "#c9a84c" : "none"} stroke="#c9a84c" strokeWidth="1.5">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
      <span className="font-heading text-museum-gold text-sm ml-1 font-semibold">{score.toFixed(1)}</span>
    </div>
  );
}

export default async function VisitPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "visit" });

  return (
    <>
      {/* ── Header ────────────────────────────────────────── */}
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <h1 className="font-heading text-museum-linen-50 font-semibold" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            {t("heading")}
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* ── Hours, Tickets, Accessibility + Directions ────── */}
      <section className="bg-museum-linen-50 py-16 px-4 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left: hours, tickets, accessibility */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-heading text-museum-walnut text-2xl mb-3 pb-2 border-b border-museum-gold/30">
                {t("hours_title")}
              </h2>
              <Row label={t("hours_weekdays")} value="09:00 – 17:00" />
              <Row label={t("hours_saturday")} value="10:00 – 16:00" />
              <Row label={t("hours_sunday")} value={t("hours_closed")} muted />
            </div>

            <div>
              <h2 className="font-heading text-museum-walnut text-2xl mb-3 pb-2 border-b border-museum-gold/30">
                {t("tickets_title")}
              </h2>
              <Row label={t("ticket_adult")} value="200 Lekë" />
              <Row label={t("ticket_student")} value="100 Lekë" />
              <Row label={t("ticket_child")} value={t("ticket_free")} />
            </div>

            <div>
              <h2 className="font-heading text-museum-walnut text-2xl mb-3 pb-2 border-b border-museum-gold/30">
                {t("accessibility_title")}
              </h2>
              <p className="font-body text-museum-walnut/70 text-sm leading-relaxed mt-2">
                {t("accessibility_text")}
              </p>
            </div>
          </div>

          {/* Right: directions */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-museum-walnut text-2xl mb-3 pb-2 border-b border-museum-gold/30">
                {t("directions_title")}
              </h2>
              <div className="flex flex-col">
                {[
                  t("directions_tirana"),
                  t("directions_bus"),
                  t("directions_taxi"),
                ].map((line) => (
                  <div key={line} className="flex gap-3 items-start py-2.5 border-b border-museum-walnut/10 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-museum-gold/60 mt-1.5 shrink-0" />
                    <span className="font-body text-museum-walnut/70 text-sm leading-relaxed">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact quick-info */}
            <div className="border border-museum-gold/20 p-5 bg-museum-linen-100/60">
              <h3 className="font-heading text-museum-walnut text-sm tracking-widest uppercase mb-3">{t("contact_label")}</h3>
              <div className="flex flex-col gap-1.5">
                <a href="tel:051122225" className="font-body text-sm text-museum-walnut/70 hover:text-museum-walnut transition-colors">☎ 0511 22225</a>
                <a href="mailto:muzeu.gjkskenderbeu@yahoo.com" className="font-body text-sm text-museum-walnut/70 hover:text-museum-walnut transition-colors break-all">✉ muzeu.gjkskenderbeu@yahoo.com</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* ── Dual Google Maps ──────────────────────────────── */}
      <section className="bg-museum-linen-50 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-museum-walnut text-2xl font-semibold tracking-widest uppercase mb-2">
              {t("location_title")}
            </h2>
            <p className="font-caption text-museum-walnut/50 italic text-sm">Sheshi Gjergj Kastrioti, Krujë, Albania</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Skanderbeg Museum map */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-museum-gold text-lg">⚔</span>
                <h3 className="font-heading text-museum-walnut text-base font-semibold tracking-wide uppercase">
                  Muzeu Historik Skënderbeu
                </h3>
              </div>
              <div className="overflow-hidden border border-museum-walnut/15">
                <iframe
                  src="https://maps.google.com/maps?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skenderbeg+Kruje+Albania&z=17&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Muzeu Historik Kombëtar Gjergj Kastrioti Skënderbeu"
                />
              </div>
              <a
                href="https://maps.google.com/maps?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skenderbeg+Kruje+Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-heading text-xs tracking-[0.15em] uppercase text-museum-gold hover:underline"
              >
                {t("map_open")}
              </a>
            </div>

            {/* Ethnographic Museum map */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-museum-terracotta text-lg">⌂</span>
                <h3 className="font-heading text-museum-walnut text-base font-semibold tracking-wide uppercase">
                  Muzeu Etnografik
                </h3>
              </div>
              <div className="overflow-hidden border border-museum-walnut/15">
                <iframe
                  src="https://maps.google.com/maps?q=Muzeu+Etnografik+Kruje+Albania&z=17&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Muzeu Etnografik Krujë"
                />
              </div>
              <a
                href="https://maps.google.com/maps?q=Muzeu+Etnografik+Kruje+Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-heading text-xs tracking-[0.15em] uppercase text-museum-terracotta hover:underline"
              >
                {t("map_open")}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Reviews ────────────────────────────────── */}
      <section className="stone-texture bg-museum-stone-950 py-16 px-4">
        <div className="relative z-10 max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-museum-gold/40" />
              <span className="text-museum-gold/60 text-xs">✦</span>
              <div className="h-px w-10 bg-museum-gold/40" />
            </div>
            <h2 className="font-heading text-museum-linen-50 font-semibold tracking-widest uppercase mb-2" style={{ fontSize: "clamp(1.5rem,3.5vw,2.2rem)" }}>
              {t("google_title")}
            </h2>
            <p className="font-caption text-museum-gold/60 italic text-sm">
              {t("google_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Skanderbeg Museum review card */}
            <div className="border border-museum-gold/20 bg-museum-stone-800/60 p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-museum-gold text-2xl mt-0.5">⚔</span>
                <div>
                  <h3 className="font-heading text-museum-linen-50 font-semibold tracking-wide uppercase text-sm leading-tight">
                    Muzeu Historik Kombëtar<br />Gjergj Kastrioti Skënderbeu
                  </h3>
                  <p className="font-caption text-museum-gold/50 italic text-xs mt-1">Krujë, Shqipëri</p>
                </div>
              </div>

              <StarRating score={4.5} />

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="https://www.google.com/search?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skanderbeg+Kruje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-museum-gold/40 text-museum-gold font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-gold/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {t("reviews_view")}
                </a>
                <a
                  href="https://www.google.com/search?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skanderbeg+Kruje#lrd=,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-museum-gold/20 text-museum-linen-100/50 font-heading text-xs tracking-[0.15em] uppercase hover:border-museum-gold/40 hover:text-museum-linen-100/80 transition-colors"
                >
                  ✎ {t("reviews_write")}
                </a>
              </div>
            </div>

            {/* Ethnographic Museum review card */}
            <div className="border border-museum-terracotta/20 bg-museum-stone-800/60 p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-museum-terracotta text-2xl mt-0.5">⌂</span>
                <div>
                  <h3 className="font-heading text-museum-linen-50 font-semibold tracking-wide uppercase text-sm leading-tight">
                    Muzeu Etnografik<br />Krujë
                  </h3>
                  <p className="font-caption text-museum-gold/50 italic text-xs mt-1">Pazari i Vjetër, Krujë, Shqipëri</p>
                </div>
              </div>

              <StarRating score={4.4} />

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="https://www.google.com/search?q=Muzeu+Etnografik+Kruje+Albania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-museum-terracotta/40 text-museum-terracotta font-heading text-xs tracking-[0.15em] uppercase hover:bg-museum-terracotta/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {t("reviews_view")}
                </a>
                <a
                  href="https://www.google.com/search?q=Muzeu+Etnografik+Kruje+Albania#lrd=,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-museum-terracotta/15 text-museum-linen-100/50 font-heading text-xs tracking-[0.15em] uppercase hover:border-museum-terracotta/35 hover:text-museum-linen-100/80 transition-colors"
                >
                  ✎ {t("reviews_write")}
                </a>
              </div>
            </div>

          </div>

          <p className="text-center font-body text-museum-linen-100/30 text-xs mt-8">
            {t("reviews_disclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
