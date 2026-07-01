export const locales = ["sq", "en", "fr", "de", "ru", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sq";

export const localeNames: Record<Locale, string> = {
  sq: "Shqip",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  pl: "Polski",
};

export const localeFlags: Record<Locale, string> = {
  sq: "🇦🇱",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  ru: "🇷🇺",
  pl: "🇵🇱",
};
