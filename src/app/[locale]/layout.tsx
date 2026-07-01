import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { cinzel, lora, inter } from "@/lib/fonts";
import { routing } from "@/i18n/routing";
import Nav from "@/components/museum/Nav";
import Footer from "@/components/museum/Footer";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const BASE = "https://muzeukruje.vercel.app";
const LOCALES = ["sq", "en", "fr", "de", "ru", "pl"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const title = `${t("title")} — Krujë, Shqipëri`;
  const description = `${t("tagline")} Muzeu Historik Kombëtar Gjergj Kastrioti Skënderbeu dhe Muzeu Etnografik, Krujë, Shqipëri.`;
  const url = `${BASE}/${locale}`;

  return {
    metadataBase: new URL(BASE),
    title: { default: title, template: `%s | Muzeu Krujë` },
    description,
    keywords: [
      "Muzeu Krujë", "Skanderbeg Museum", "Muzeu Etnografik Krujë",
      "Gjergj Kastrioti Skënderbeu", "Krujë Albania", "museum Albania",
      "Muzeu Historik Kombëtar", "kështjella Krujës",
    ],
    authors: [{ name: "Muzeu Historik dhe Etnografik, Krujë" }],
    openGraph: {
      type: "website",
      locale,
      url,
      siteName: "Muzeu Historik dhe Etnografik, Krujë",
      title,
      description,
      images: [{
        url: "/images/ethnographic-interior.jpg",
        width: 2560,
        height: 1707,
        alt: "Brendësia e Muzeut Etnografik Krujë — dhoma osmane e shekullit XVIII",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/ethnographic-interior.jpg"],
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE}/${l}`])
      ),
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${cinzel.variable} ${lora.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
