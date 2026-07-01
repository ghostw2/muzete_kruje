import type { Locale, NewsArticle } from "@/types";
import { newsData } from "@/data/news";

export function getNewsArticles(locale: Locale): NewsArticle[] {
  return newsData
    .filter((a) => a.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsArticleBySlug(slug: string, locale: Locale): NewsArticle | undefined {
  return newsData.find((a) => a.slug === slug && a.locale === locale);
}
