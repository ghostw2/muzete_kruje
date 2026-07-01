import { getTranslations } from "next-intl/server";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string }> };

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

export default async function VisitPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "visit" });

  return (
    <>
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

          {/* Right: map, directions */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-museum-walnut text-2xl mb-3 pb-2 border-b border-museum-gold/30">
                {t("location_title")}
              </h2>
              <div className="overflow-hidden border border-museum-walnut/15 mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.4!2d19.7953!3d41.5097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fdb8b4b17f7e5%3A0x8b8b8b8b8b8b8b8b!2sKruj%C3%AB%20Castle!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Museum location"
                />
              </div>
              <p className="font-body text-museum-walnut/60 text-sm">
                Sheshi Gjergj Kastrioti, Krujë, Albania
              </p>
            </div>

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
          </div>

        </div>
      </section>
    </>
  );
}
