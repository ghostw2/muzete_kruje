"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = { locale: string };

export default function HeroSection({ locale }: Props) {
  const t = useTranslations("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="stone-texture relative min-h-[calc(100vh-4rem)] bg-museum-stone-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Castle image — extended ±25% vertically so parallax translateY never reveals edges */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "-25%",
          bottom: "-25%",
          transform: `translateY(${scrollY * 0.22}px)`,
          willChange: "transform",
        }}
      >
        <Image
          src="/media/castle-hero.jpg"
          alt="Muzeu Historik Skënderbeu dhe Muzeu Etnografik — Kështjella e Krujës"
          fill
          className="object-cover object-[center_38%]"
          style={{ opacity: 0.45 }}
          priority
        />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,23,20,0.5)_50%,rgba(26,23,20,0.92)_100%)] pointer-events-none" />

      {/* Ambient background lettering — editorial depth layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading font-semibold uppercase text-museum-gold"
          style={{ fontSize: "clamp(5rem, 20vw, 18rem)", opacity: 0.032, letterSpacing: "0.28em", lineHeight: 1 }}
        >
          KRUJË
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16 bg-museum-gold/60" />
          <span className="text-museum-gold/60 text-sm">✦</span>
          <div className="h-px w-16 bg-museum-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-museum-linen-50 font-semibold leading-tight tracking-widest uppercase mb-4"
          style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.8rem)" }}
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="font-caption text-museum-gold text-xl sm:text-2xl italic mb-6"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="h-px w-32 bg-museum-gold/50 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="font-body text-museum-linen-100/60 text-sm sm:text-base mb-10 max-w-lg mx-auto leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={`/${locale}/museums`}
            className="px-8 py-3 border border-museum-gold/60 text-museum-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase hover:bg-museum-gold/10 hover:border-museum-gold transition-all duration-200"
          >
            {t("cta_explore")}
          </Link>
          <Link
            href={`/${locale}/visit`}
            className="px-8 py-3 border border-museum-linen-100/30 text-museum-linen-100/70 font-heading text-xs tracking-[0.2em] uppercase hover:bg-museum-linen-50/5 hover:border-museum-linen-100/50 hover:text-museum-linen-50 transition-all duration-200"
          >
            {t("cta_visit")}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-museum-linen-100/40"
      >
        <span className="font-body text-xs tracking-widest uppercase">{t("scroll")}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
