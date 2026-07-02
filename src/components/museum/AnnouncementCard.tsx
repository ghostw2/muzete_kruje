import Image from "next/image";
import Link from "next/link";
import type { Njoftim } from "@/data/njoftimet";

type Props = {
  item: Njoftim;
  locale: string;
};

export default function AnnouncementCard({ item, locale }: Props) {
  const title = locale === "sq" ? item.titleAL : item.titleEN;
  const excerpt = locale === "sq" ? item.excerptAL : item.excerptEN;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(item.date));

  return (
    <article className="flex flex-col border-l-4 border-museum-gold/60 bg-museum-linen-50 shadow-sm overflow-hidden">
      {item.imageUrl && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <p className="font-caption text-museum-walnut/40 italic text-xs">{formattedDate}</p>
        <h3 className="font-heading text-museum-walnut text-base font-semibold tracking-wide uppercase leading-snug">
          {title}
        </h3>
        <p className="font-body text-museum-walnut/65 text-sm leading-relaxed flex-1">
          {excerpt}
        </p>
        <Link
          href={`/${locale}/njoftimet/${item.slug}`}
          className="self-start mt-2 font-heading text-museum-gold text-xs tracking-[0.15em] uppercase hover:text-museum-gold/70 transition-colors"
        >
          → Lexo më shumë
        </Link>
      </div>
    </article>
  );
}
