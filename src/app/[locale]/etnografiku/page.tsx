import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ImageCarousel from "@/components/museum/ImageCarousel";
import { etnografikuRooms } from "@/data/etnografiku";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "etnografiku" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

export default async function EtnografikuPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "etnografiku" });
  const usesAlbanian = locale === "sq";

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
            Krujë · 1764
          </p>
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
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          {etnografikuRooms.map((room, i) => {
            const title = usesAlbanian ? room.titleAL : room.titleEN;
            const desc = usesAlbanian ? room.descAL : room.descEN;

            return (
              <div key={room.id}>
                {i > 0 && (
                  <div className="flex items-center gap-4 my-14">
                    <div className="flex-1 h-px bg-museum-gold/15" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/media/ornaments/Ornament1.svg" alt="" aria-hidden="true" className="w-6 opacity-25" />
                    <div className="flex-1 h-px bg-museum-gold/15" />
                  </div>
                )}

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-heading text-museum-gold/40 text-xs tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-museum-walnut text-2xl sm:text-3xl font-semibold tracking-wide uppercase">
                    {title}
                  </h2>
                </div>

                {room.images.length > 0 && (
                  <div className="mb-8">
                    <ImageCarousel images={room.images} alt={title} />
                  </div>
                )}

                <p className="font-body text-museum-walnut/70 text-sm leading-relaxed whitespace-pre-line">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
