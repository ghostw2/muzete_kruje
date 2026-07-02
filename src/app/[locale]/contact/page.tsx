"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import SectionDivider from "@/components/museum/SectionDivider";
import type { ReactNode } from "react";

const GRAIN_FINE_C =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
const GRAIN_COARSE_C =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.28' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function PlaqueScrew({ corner }: { corner: string }) {
  return (
    <div className={`absolute ${corner}`} aria-hidden="true" style={{ width: 15, height: 15 }}>
      <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "radial-gradient(circle at 42% 38%, rgba(0,0,0,0.28) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 32% 28%, #f0dcaa 0%, #c49838 30%, #8a6028 62%, #5a3e18 100%)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.45), inset 0 -2px 3px rgba(0,0,0,0.60), 0 1px 4px rgba(0,0,0,0.55), 0 0 0 1px rgba(40,24,8,0.30)" }} />
      <svg viewBox="0 0 15 15" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <line x1="7.5" y1="3.5" x2="7.5" y2="11.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3.5" y1="7.5" x2="11.5" y2="7.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ── Limestone plaque wrapper ───────────────────────────────────────────────
function Plaque({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="relative overflow-hidden p-6 h-full"
      style={{
        background:
          "radial-gradient(ellipse at 10% 15%, rgba(252,246,234,0.80) 0%, transparent 36%), " +
          "radial-gradient(ellipse at 88% 75%, rgba(238,230,214,0.70) 0%, transparent 40%), " +
          "repeating-linear-gradient(180deg, transparent 0px, transparent 22px, rgba(0,0,0,0.016) 22px, rgba(0,0,0,0.016) 23px, transparent 23px, transparent 44px), " +
          "linear-gradient(152deg, #ede8d8 0%, #ddd6c0 45%, #e8e2d0 100%)",
        boxShadow:
          "inset 4px 4px 0 rgba(255,255,255,0.65), " +
          "inset -4px -4px 0 rgba(0,0,0,0.20), " +
          "inset 9px 9px 18px rgba(255,255,255,0.14), " +
          "inset -7px -7px 15px rgba(0,0,0,0.10), " +
          "0 28px 70px rgba(0,0,0,0.60), 0 7px 20px rgba(0,0,0,0.34)",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 16% 20%, rgba(95,135,85,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 82%, rgba(115,150,95,0.10) 0%, transparent 46%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(22,14,6,0.14) 100%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRAIN_FINE_C, opacity: 0.12, mixBlendMode: "multiply" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: GRAIN_COARSE_C, opacity: 0.055, mixBlendMode: "multiply" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 13, border: "1.5px solid rgba(255,255,255,0.30)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.08)", pointerEvents: "none" }} />
      <PlaqueScrew corner="top-[7px] left-[7px]" />
      <PlaqueScrew corner="top-[7px] right-[7px]" />
      <PlaqueScrew corner="bottom-[7px] left-[7px]" />
      <PlaqueScrew corner="bottom-[7px] right-[7px]" />
      <div className="relative">
        <p className="font-heading font-semibold tracking-[0.22em] uppercase leading-none mb-1" style={{ fontSize: "1.35rem", color: "#b8873a", textShadow: "-1px -1px 0 rgba(255,244,200,0.52), 1px 2px 3px rgba(0,0,0,0.40), 0 0 14px rgba(184,135,58,0.16)" }}>
          {label}
        </p>
        <div className="mb-4 h-px w-10" style={{ background: "linear-gradient(90deg, rgba(184,135,58,0.65), rgba(184,135,58,0.12))", boxShadow: "0 1px 0 rgba(255,255,255,0.22)" }} />
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:muzeu.gjkskenderbeu@yahoo.com?subject=Mesazh nga ${form.name}&body=${encodeURIComponent(form.message)}%0A%0ADërguar nga: ${form.name} (${form.email})`;
  }

  // Recessed field style — inputs carved into the limestone plaque
  const fieldStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(0,0,0,0.07)",
    border: "1px solid rgba(184,135,58,0.28)",
    color: "#3d2b1f",
    outline: "none",
    padding: "0.75rem 1rem",
    fontFamily: "inherit",
    fontSize: "0.875rem",
  };
  const focusBorder = "1px solid rgba(184,135,58,0.65)";
  const blurBorder  = "1px solid rgba(184,135,58,0.28)";

  return (
    <>
      <section className="stone-texture bg-museum-stone-950 py-20 px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-museum-gold/40" />
            <span className="text-museum-gold/60 text-xs">✦</span>
            <div className="h-px w-12 bg-museum-gold/40" />
          </div>
          <h1 className="font-heading text-museum-linen-50 font-semibold" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            {t("heading")}
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* Stone wall with limestone plaques */}
      <section className="stone-texture bg-museum-stone-800 py-16 px-4 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">

          <Plaque label={t("contact_direct_title")}>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "☎",
                    label: t("phone_label"),
                    value: "0511 22225",
                    href: "tel:051122225",
                  },
                  {
                    icon: "✉",
                    label: "Email",
                    value: "muzeu.gjkskenderbeu@yahoo.com",
                    href: "mailto:muzeu.gjkskenderbeu@yahoo.com",
                  },
                  {
                    icon: "◈",
                    label: "Instagram",
                    value: "@muzeumetkruje",
                    href: "https://www.instagram.com/muzeumetkruje/",
                  },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 py-2.5 border-b last:border-0 group"
                    style={{ borderColor: "rgba(184,135,58,0.18)", textDecoration: "none" }}
                  >
                    <span style={{ color: "#b8873a", fontSize: "0.75rem", marginTop: "0.15rem", flexShrink: 0, opacity: 0.70 }}>{icon}</span>
                    <div>
                      <p className="font-heading tracking-[0.12em] uppercase" style={{ fontSize: "0.68rem", color: "#b8873a", opacity: 0.65 }}>{label}</p>
                      <p className="font-body text-xs leading-snug group-hover:underline" style={{ color: "#3d2b1f" }}>{value}</p>
                    </div>
                  </a>
                ))}
                <a
                  href="https://www.facebook.com/MuzeuEtnografikKruje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 py-2.5 border-b last:border-0 group"
                  style={{ borderColor: "rgba(184,135,58,0.18)", textDecoration: "none" }}
                >
                  <span style={{ color: "#b8873a", fontSize: "0.75rem", marginTop: "0.15rem", flexShrink: 0, opacity: 0.70 }}>◉</span>
                  <div>
                    <p className="font-heading tracking-[0.12em] uppercase" style={{ fontSize: "0.68rem", color: "#b8873a", opacity: 0.65 }}>Facebook</p>
                    <p className="font-body text-xs leading-snug group-hover:underline" style={{ color: "#3d2b1f" }}>Qendra Muzeore Krujë</p>
                  </div>
                </a>
              </div>

              {/* Lidhjet */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(184,135,58,0.18)" }}>
                <p className="font-heading tracking-[0.18em] uppercase mb-3" style={{ fontSize: "0.68rem", color: "#b8873a", opacity: 0.65 }}>{t("links_title")}</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "youtu.be", href: "https://www.youtube.com", icon: "▷" },
                    { label: "qendramuzeore-kruje.com", href: "https://qendramuzeore-kruje.com", icon: "◈" },
                    { label: "google.com", href: "https://maps.google.com/maps?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skenderbeg+Kruje+Albania", icon: "◎" },
                  ].map(({ label, href, icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
                      <span style={{ color: "#b8873a", fontSize: "0.7rem", opacity: 0.55 }}>{icon}</span>
                      <span className="font-body text-xs group-hover:underline" style={{ color: "#3d2b1f" }}>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Plaque>

          {/* Right: contact form */}
          <Plaque label={t("form_title")}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className="font-heading tracking-[0.16em] uppercase text-xs block mb-1.5" style={{ color: "#b8873a" }}>
                  {t("name")}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={fieldStyle}
                  onFocus={(e) => (e.target.style.border = focusBorder)}
                  onBlur={(e) => (e.target.style.border = blurBorder)}
                />
              </div>

              <div>
                <label className="font-heading tracking-[0.16em] uppercase text-xs block mb-1.5" style={{ color: "#b8873a" }}>
                  {t("email")}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={fieldStyle}
                  onFocus={(e) => (e.target.style.border = focusBorder)}
                  onBlur={(e) => (e.target.style.border = blurBorder)}
                />
              </div>

              <div>
                <label className="font-heading tracking-[0.16em] uppercase text-xs block mb-1.5" style={{ color: "#b8873a" }}>
                  {t("message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...fieldStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.border = focusBorder)}
                  onBlur={(e) => (e.target.style.border = blurBorder)}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 font-heading text-xs tracking-[0.20em] uppercase font-semibold transition-all duration-200"
                style={{ background: "rgba(0,0,0,0.22)", border: "1px solid rgba(184,135,58,0.45)", color: "#b8873a" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(184,135,58,0.15)"; e.currentTarget.style.border = "1px solid rgba(184,135,58,0.70)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.22)"; e.currentTarget.style.border = "1px solid rgba(184,135,58,0.45)"; }}
              >
                {t("send")}
              </button>

            </form>
          </Plaque>

        </div>
      </section>
    </>
  );
}
