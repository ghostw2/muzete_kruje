import { njoftimet, type Njoftim } from "@/data/njoftimet";

export function getAnnouncements(): Njoftim[] {
  return njoftimet
    .filter((n) => n.visible)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAnnouncementBySlug(slug: string): Njoftim | undefined {
  return njoftimet.find((n) => n.slug === slug);
}
