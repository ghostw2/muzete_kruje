import type { Locale, Exhibit, Museum } from "@/types";
import { exhibitsData } from "@/data/exhibits";

export function getExhibits(locale: Locale): Exhibit[] {
  return exhibitsData.filter((e) => e.locale === locale);
}

export function getExhibitsByMuseum(museum: Museum, locale: Locale): Exhibit[] {
  return exhibitsData.filter((e) => e.museum === museum && e.locale === locale);
}

export function getExhibitBySlug(slug: string, locale: Locale): Exhibit | undefined {
  return exhibitsData.find((e) => e.slug === slug && e.locale === locale);
}
