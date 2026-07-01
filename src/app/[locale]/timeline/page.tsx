import { getTranslations } from "next-intl/server";
import { getTimelineEvents } from "@/repositories/timeline";
import type { Locale } from "@/types";
import TimelineItem from "@/components/museum/TimelineItem";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string }> };

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "timeline" });
  const fallbackLocale: Locale = ["sq", "en", "fr", "de", "ru", "pl"].includes(locale)
    ? (locale as Locale)
    : "en";
  const events = getTimelineEvents(fallbackLocale).length > 0
    ? getTimelineEvents(fallbackLocale)
    : getTimelineEvents("en");

  return (
    <>
      {/* Header */}
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

      {/* Timeline — dark stone wall so limestone plaques stand out */}
      <section className="stone-texture bg-museum-stone-800 py-16 px-4 md:py-24">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical gold line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-museum-gold/30" />

          <div className="flex flex-col">
            {events.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
