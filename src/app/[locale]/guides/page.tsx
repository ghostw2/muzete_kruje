import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AudioPlayer from "@/components/museum/AudioPlayer";
import GuidesSubNav from "@/components/museum/GuidesSubNav";
import ImageCarousel from "@/components/museum/ImageCarousel";
import TranscriptToggle from "@/components/museum/TranscriptToggle";
import { getPavilions } from "@/repositories/pavilions";
import { etnografikuRooms } from "@/data/etnografiku";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const tG = await getTranslations({ locale, namespace: "guides" });
  const tP = await getTranslations({ locale, namespace: "pavilions" });

  const usesAlbanian = locale === "sq";
  const transcriptDir = path.join(process.cwd(), "public", "media", "audio", "transcripts");

  const pavilions = getPavilions().map((p) => {
    const transcriptFile = usesAlbanian ? p.transcriptAL : p.transcriptEN;
    let transcript = "";
    try {
      transcript = fs.readFileSync(path.join(transcriptDir, transcriptFile), "utf-8").trim();
    } catch {
      transcript = "";
    }
    return {
      ...p,
      audioSrc: `/media/audio/${usesAlbanian ? p.audioAL : p.audioEN}`,
      transcript,
    };
  });

  return (
    <>
      {/* ── Page header ── */}
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
            {tG("heading")}
          </h1>
          <p className="font-caption text-museum-gold/80 italic text-lg">{tG("subtitle")}</p>
        </div>
      </section>

      <GuidesSubNav audioLabel={tG("audio_section")} tourLabel={tG("tour_section")} />

      {/* ══════════════════════════════════════════
          SECTION 1 — AUDIO GUIDE (PAVILIONS)
      ══════════════════════════════════════════ */}
      <section id="audio-guide" className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-museum-gold/20" />
            <h2 className="font-heading text-museum-walnut text-sm font-semibold tracking-[0.25em] uppercase px-6">
              {tG("audio_section")}
            </h2>
            <div className="flex-1 h-px bg-museum-gold/20" />
          </div>
          <p className="font-caption text-museum-walnut/45 italic text-sm text-center mt-4">
            {tP("subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {pavilions.map((p, i) => {
            const nameKey = p.nameKey.split(".")[1] as Parameters<typeof tP>[0];
            const name = tP(nameKey);
            const langNote = usesAlbanian ? tP("transcript_lang_note_al") : tP("transcript_lang_note");

            return (
              <article key={p.id} className="border border-museum-gold/15 bg-museum-linen-100/50 overflow-hidden">
                <div className="grid lg:grid-cols-2 items-start">

                  {/* Content column */}
                  <div className={`p-8 sm:p-10 flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-museum-gold/40 text-xs tracking-widest shrink-0">
                        {String(p.order).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-museum-walnut text-2xl sm:text-3xl font-semibold tracking-wide uppercase">
                        {name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 bg-museum-stone-950/[0.03] border border-museum-gold/10">
                      <span className="font-body text-museum-walnut/40 text-xs tracking-wide shrink-0">
                        {tP("audio_label")}
                      </span>
                      <div className="flex-1">
                        <AudioPlayer
                          src={p.audioSrc}
                          playLabel={tP("play")}
                          pauseLabel={tP("pause")}
                        />
                      </div>
                    </div>

                    {p.transcript && (
                      <TranscriptToggle
                        transcript={p.transcript}
                        showLabel={tP("show_transcript")}
                        hideLabel={tP("hide_transcript")}
                        langNote={langNote}
                      />
                    )}
                  </div>

                  {/* Image column */}
                  {p.images.length > 0 && (
                    <div className={`lg:border-l border-museum-gold/10 ${i % 2 === 1 ? "lg:order-first" : ""}`}>
                      <ImageCarousel images={p.images} alt={name} />
                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Between-section divider ── */}
      <div className="stone-texture bg-museum-stone-950 py-10 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="flex-1 h-px bg-museum-gold/20" />
          <span className="text-museum-gold/40 text-sm">✦</span>
          <div className="flex-1 h-px bg-museum-gold/20" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 2 — ETHNOGRAPHIC MUSEUM TOUR
      ══════════════════════════════════════════ */}
      <section id="etnografiku" className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-museum-gold/20" />
            <h2 className="font-heading text-museum-walnut text-sm font-semibold tracking-[0.25em] uppercase">
              {tG("tour_section")}
            </h2>
            <div className="flex-1 h-px bg-museum-gold/20" />
          </div>
          <p className="font-caption text-museum-walnut/45 italic text-sm text-center mt-3">
            {tG("tour_subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {etnografikuRooms.map((room, i) => {
            const title = usesAlbanian ? room.titleAL : room.titleEN;
            const desc = usesAlbanian ? room.descAL : room.descEN;

            return (
              <article key={room.id} className="border border-museum-gold/15 bg-museum-linen-100/50 overflow-hidden">
                <div className="grid lg:grid-cols-2 items-start">

                  {/* Content column */}
                  <div className={`p-8 sm:p-10 flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-museum-gold/40 text-xs tracking-widest shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-museum-walnut text-2xl sm:text-3xl font-semibold tracking-wide uppercase">
                        {title}
                      </h3>
                    </div>
                    <p className="font-body text-museum-walnut/70 text-sm leading-relaxed whitespace-pre-line">
                      {desc}
                    </p>
                  </div>

                  {/* Image column */}
                  {room.images.length > 0 && (
                    <div className={`lg:border-l border-museum-gold/10 ${i % 2 === 1 ? "lg:order-first" : ""}`}>
                      <ImageCarousel images={room.images} alt={title} />
                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
