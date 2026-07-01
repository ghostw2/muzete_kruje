import { getTranslations } from "next-intl/server";
import SectionDivider from "@/components/museum/SectionDivider";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

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
            Rreth Muzeut
          </h1>
          <p className="font-caption text-museum-gold/80 italic text-lg mt-4">
            About the Museum
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-museum-linen-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="font-body text-museum-walnut/80 text-base leading-relaxed space-y-6">
            <p>
              The Historical and Ethnographic Museum of Krujë stands within the medieval walls of Krujë Castle,
              one of Albania&apos;s most significant historical sites. Founded in 1981, the museum preserves and
              presents over 3,000 artifacts spanning from Illyrian antiquity through the Ottoman period to the
              modern era.
            </p>
            <p>
              The museum encompasses two distinct but complementary collections. The Historical Museum traces
              the dramatic story of Gjergj Kastrioti Skanderbeg — the Albanian national hero who led 25 years
              of resistance against the Ottoman Empire from this very citadel between 1443 and 1468. Original
              weapons, documents, coins, and personal effects bring this pivotal chapter of history to life.
            </p>
            <p>
              The Ethnographic Museum occupies an 18th-century kulla — a traditional Albanian tower house
              characteristic of the region&apos;s architectural heritage. Its rooms are preserved as they would
              have appeared during the Ottoman period, with original furnishings, textiles, household objects,
              and tools that illuminate daily life in historic Krujë.
            </p>
            <blockquote className="border-l-2 border-museum-gold/40 pl-6 font-caption italic text-museum-walnut/60 text-lg my-8">
              "Kruja is not merely a city — it is the stone upon which Albanian identity was forged."
            </blockquote>
            <p>
              Together, both collections offer visitors an immersive encounter with Albanian history and culture,
              set against the breathtaking backdrop of the castle overlooking the Ishëm valley and the
              mountains of central Albania.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
