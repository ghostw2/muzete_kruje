import type { MetadataRoute } from "next";

const BASE = "https://qendramuzeore-kruje.com";
const LOCALES = ["sq", "en", "fr", "de", "ru", "pl"] as const;
const PAGES = [
  { path: "",             priority: 1.0, freq: "weekly"  },
  { path: "/museums",     priority: 0.9, freq: "monthly" },
  { path: "/timeline",    priority: 0.8, freq: "monthly" },
  { path: "/collections", priority: 0.8, freq: "monthly" },
  { path: "/gallery",     priority: 0.7, freq: "monthly" },
  { path: "/news",        priority: 0.7, freq: "weekly"  },
  { path: "/visit",       priority: 0.9, freq: "monthly" },
  { path: "/contact",     priority: 0.6, freq: "yearly"  },
  { path: "/about",       priority: 0.6, freq: "yearly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    PAGES.map(({ path, priority, freq }) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE}/${l}${path}`])
        ),
      },
    }))
  );
}
