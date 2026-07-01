"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

type Props = { locale: string };

export default function Nav({ locale }: Props) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/museums`, label: t("museums") },
    { href: `/${locale}/timeline`, label: t("timeline") },
    { href: `/${locale}/collections`, label: t("collections") },
    { href: `/${locale}/gallery`, label: t("gallery") },
    { href: `/${locale}/news`, label: t("news") },
    { href: `/${locale}/visit`, label: t("visit") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  return (
    <header className="stone-texture sticky top-0 z-50 bg-museum-stone-950 border-b border-museum-gold/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo mark + wordmark */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-sm bg-museum-stone-800 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Muzeu Krujës">
                {/* Three merlons */}
                <rect x="7"  y="6" width="4" height="6" rx="0.4" fill="#c9a84c"/>
                <rect x="14" y="6" width="4" height="6" rx="0.4" fill="#c9a84c"/>
                <rect x="21" y="6" width="4" height="6" rx="0.4" fill="#c9a84c"/>
                {/* Tower body */}
                <rect x="7" y="12" width="18" height="12" fill="#c9a84c"/>
                {/* Narrow slit windows */}
                <rect x="9"    y="14.5" width="1.8" height="4" rx="0.3" fill="#2e2a24"/>
                <rect x="21.2" y="14.5" width="1.8" height="4" rx="0.3" fill="#2e2a24"/>
                {/* Gothic pointed arch gate */}
                <path d="M13.5 24 L13.5 21 C13.5 18.5 16 17 16 17 C16 17 18.5 18.5 18.5 21 L18.5 24 Z" fill="#2e2a24"/>
                {/* Base */}
                <rect x="5" y="24" width="22" height="2.5" rx="0.5" fill="#c9a84c"/>
              </svg>
            </div>
            <span className="font-heading text-museum-gold text-sm font-semibold tracking-[0.12em] uppercase leading-tight hidden sm:block group-hover:text-museum-gold/80 transition-colors">
              Muzeu Krujës
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-body tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-museum-gold"
                    : "text-museum-linen-100/70 hover:text-museum-linen-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <button
              className="xl:hidden text-museum-linen-100/70 hover:text-museum-linen-50"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="xl:hidden pb-4 border-t border-museum-gold/20 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-body tracking-wide transition-colors ${
                    isActive(link.href)
                      ? "text-museum-gold"
                      : "text-museum-linen-100/70 hover:text-museum-linen-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
