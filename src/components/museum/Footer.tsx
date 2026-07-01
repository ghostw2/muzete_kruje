import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const t = useTranslations("nav");

  return (
    <footer className="stone-texture bg-museum-stone-950 border-t border-museum-gold/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand — with official logo */}
          <div className="flex flex-col gap-4">
            <div className="relative w-24 h-24">
              <Image
                src="/images/museum-logo.png"
                alt="Muzeu Historik Kombëtar Gjergj Kastrioti Skënderbeu dhe Etnografik - Krujë"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
            <div>
              <p className="font-heading text-museum-gold text-sm tracking-widest uppercase leading-snug">
                Muzeu Historik Kombëtar
              </p>
              <p className="font-heading text-museum-linen-100/50 text-xs tracking-wide uppercase mt-0.5">
                Gjergj Kastrioti Skënderbeu
              </p>
              <p className="font-caption text-museum-linen-100/40 italic text-xs mt-1">
                dhe Etnografik · Krujë
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-museum-linen-100/70 text-xs uppercase tracking-widest mb-3 font-body">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: `/${locale}/museums`, label: t("museums") },
                { href: `/${locale}/timeline`, label: t("timeline") },
                { href: `/${locale}/collections`, label: t("collections") },
                { href: `/${locale}/gallery`, label: t("gallery") },
                { href: `/${locale}/news`, label: t("news") },
                { href: `/${locale}/visit`, label: t("visit") },
                { href: `/${locale}/contact`, label: t("contact") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-museum-linen-100/50 hover:text-museum-gold transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-museum-linen-100/70 text-xs uppercase tracking-widest mb-3 font-body">
              Kontakti
            </h4>
            <address className="not-italic text-sm text-museum-linen-100/50 font-body space-y-1">
              <p>Sheshi Gjergj Kastrioti</p>
              <p>Krujë, Shqipëri</p>
              <p className="mt-2">
                <a href="tel:+355" className="hover:text-museum-gold transition-colors">
                  +355 (0)5 ...
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-museum-gold/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-museum-linen-100/30 text-xs font-body">
            © {new Date().getFullYear()} Muzeu Historik Kombëtar Gjergj Kastrioti Skënderbeu dhe Etnografik, Krujë
          </p>
          <span className="text-museum-gold/60 text-xs">✦</span>
        </div>
      </div>
    </footer>
  );
}
