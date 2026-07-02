import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAnnouncements } from "@/repositories/njoftimet";
import AnnouncementCard from "@/components/museum/AnnouncementCard";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "njoftimet" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

export default async function NjoftiметPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "njoftimet" });
  const announcements = getAnnouncements();

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <h1
            className="font-heading text-museum-linen-50 font-semibold tracking-widest uppercase mb-4"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            {t("heading")}
          </h1>
          <p className="font-caption text-museum-gold/80 italic text-lg">{t("subtitle")}</p>
        </div>
      </section>

      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {announcements.length === 0 ? (
            <p className="font-body text-museum-walnut/50 italic text-center py-12">
              {t("no_items")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.map((item) => (
                <AnnouncementCard key={item.id} item={item} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
