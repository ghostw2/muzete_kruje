import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Exhibit } from "@/types";

function isExternal(src: string) {
  return src.startsWith("http");
}

type Props = { exhibit: Exhibit; locale: string };

export default function ArtifactCard({ exhibit, locale }: Props) {
  const t = useTranslations("collections");
  const tc = useTranslations("common");

  const museumLabel =
    exhibit.museum === "skanderbeg" ? "⚔ Muzeu Skënderbeu" : "⌂ Muzeu Etnografik";
  const museumColor =
    exhibit.museum === "skanderbeg"
      ? "text-museum-gold/70"
      : "text-museum-terracotta/70";

  return (
    <Link
      href={`/${locale}/collections/${exhibit.slug}`}
      className="group flex flex-col bg-museum-linen-100 border border-museum-walnut/10 hover:border-museum-gold/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-museum-stone-800">
        <Image
          src={exhibit.imageUrl}
          alt={exhibit.name}
          fill
          unoptimized={isExternal(exhibit.imageUrl)}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-caption text-museum-terracotta text-xs italic">
            {exhibit.period}
          </span>
          <span className={`font-body ${museumColor} text-xs`}>{museumLabel}</span>
        </div>

        <h3 className="font-heading text-museum-walnut text-xl font-semibold leading-snug group-hover:text-museum-bronze transition-colors">
          {exhibit.name}
        </h3>

        <p className="font-body text-museum-walnut/60 text-sm leading-relaxed line-clamp-3">
          {exhibit.description}
        </p>

        <span className="mt-auto pt-3 font-body text-museum-bronze text-xs tracking-wide uppercase border-t border-museum-walnut/10">
          {t("view_details")} →
        </span>
      </div>
    </Link>
  );
}
