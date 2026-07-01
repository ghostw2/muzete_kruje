export type Locale = "sq" | "en" | "fr" | "de" | "ru" | "pl";

export type Museum = "ethnographic" | "skanderbeg";

export type Exhibit = {
  id: string;
  locale: Locale;
  slug: string;
  name: string;
  period: string;
  era: "ancient" | "medieval" | "ottoman" | "modern";
  type: "weaponry" | "textiles" | "documents" | "household";
  museum: Museum;
  description: string;
  imageUrl: string;
  provenance?: string;
  dimensions?: string;
};

export type TimelineEvent = {
  id: string;
  locale: Locale;
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export type NewsArticle = {
  id: string;
  locale: Locale;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string;
  imageUrl?: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "architecture" | "artifacts" | "events";
  museum?: Museum;
  width: number;
  height: number;
};
