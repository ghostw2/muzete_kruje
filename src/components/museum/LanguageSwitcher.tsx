"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Props = { locale: string };

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  }

  const current = locale as Locale;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-museum-linen-100/70 hover:text-museum-linen-50 transition-colors"
      >
        <span>{localeFlags[current]}</span>
        <span className="hidden sm:inline font-body">{localeNames[current]}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-museum-stone-800 border border-museum-gold/20 rounded shadow-xl z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-body text-left transition-colors ${
                loc === current
                  ? "text-museum-gold bg-museum-gold/10"
                  : "text-museum-linen-100/70 hover:text-museum-linen-50 hover:bg-museum-gold/5"
              }`}
            >
              <span>{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
