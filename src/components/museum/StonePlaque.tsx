import Image from "next/image";

// Fine surface grain — high-frequency noise simulating stone micro-texture
const GRAIN_FINE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Coarse subsurface variation — low-frequency turbulence for crystal/vein character
const GRAIN_COARSE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.28' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type Props = {
  year: string;
  title: string;
  body: string;
  imageUrl?: string;
};

// Bronze mounting bolt with Phillips-head screw detail
function Bolt({ corner }: { corner: string }) {
  return (
    <div className={`absolute ${corner}`} aria-hidden="true" style={{ width: 15, height: 15 }}>
      {/* Recessed socket shadow in the stone */}
      <div style={{
        position: "absolute", inset: -4, borderRadius: "50%",
        background: "radial-gradient(circle at 42% 38%, rgba(0,0,0,0.28) 0%, transparent 60%)",
      }} />
      {/* Bolt head — aged bronze with directional light */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background:
          "radial-gradient(circle at 32% 28%, #f0dcaa 0%, #c49838 30%, #8a6028 62%, #5a3e18 100%)",
        boxShadow:
          "inset 0 1px 2px rgba(255,255,255,0.45), " +
          "inset 0 -2px 3px rgba(0,0,0,0.60), " +
          "0 1px 4px rgba(0,0,0,0.55), " +
          "0 0 0 1px rgba(40,24,8,0.30)",
      }} />
      {/* Phillips head cross */}
      <svg viewBox="0 0 15 15" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <line x1="7.5" y1="3.5" x2="7.5" y2="11.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3.5" y1="7.5" x2="11.5" y2="7.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="7.5" y1="3.5" x2="7.5" y2="11.5" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function StonePlaque({ year, title, body, imageUrl }: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          // Organic colour pockets — natural limestone variation
          "radial-gradient(ellipse at 10% 15%, rgba(252,246,234,0.80) 0%, transparent 36%), " +
          "radial-gradient(ellipse at 88% 75%, rgba(238,230,214,0.70) 0%, transparent 40%), " +
          "radial-gradient(ellipse at 52% 96%, rgba(255,250,240,0.60) 0%, transparent 28%), " +
          // Sedimentary strata — faint horizontal banding of limestone beds
          "repeating-linear-gradient(180deg, transparent 0px, transparent 22px, rgba(0,0,0,0.016) 22px, rgba(0,0,0,0.016) 23px, transparent 23px, transparent 44px), " +
          // Base limestone: bright warm cream
          "linear-gradient(152deg, #ede8d8 0%, #ddd6c0 45%, #e8e2d0 100%)",
        // Chiseled edge: hard bright cut top-left, dark shadow bottom-right, then soft inner bevel
        boxShadow:
          "inset 4px 4px 0 rgba(255,255,255,0.65), " +
          "inset -4px -4px 0 rgba(0,0,0,0.20), " +
          "inset 9px 9px 18px rgba(255,255,255,0.14), " +
          "inset -7px -7px 15px rgba(0,0,0,0.10), " +
          "0 30px 75px rgba(0,0,0,0.62), " +
          "0 8px 22px rgba(0,0,0,0.36), " +
          "0 2px 5px rgba(0,0,0,0.22)",
        padding: "2rem 2.5rem 2.25rem",
      }}
    >
      {/* Aged patina — verdigris from bronze fittings bleeding into stone */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 16% 20%, rgba(95,135,85,0.15) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 80% 82%, rgba(115,150,95,0.10) 0%, transparent 46%)",
        }}
      />

      {/* Edge grime vignette — weathered dirt accumulates at perimeter */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(22,14,6,0.14) 100%)",
        }}
      />

      {/* Fine surface grain */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: GRAIN_FINE,
          opacity: 0.12,
          mixBlendMode: "multiply",
        }}
      />

      {/* Coarse crystal variation */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: GRAIN_COARSE,
          opacity: 0.055,
          mixBlendMode: "multiply",
        }}
      />

      {/* Carved inner border frame — groove chiseled into the face */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 13,
          border: "1.5px solid rgba(255,255,255,0.30)",
          boxShadow:
            "inset 0 0 0 1px rgba(0,0,0,0.12), " +
            "0 0 0 0.5px rgba(0,0,0,0.08)",
          pointerEvents: "none",
        }}
      />

      <Bolt corner="top-[7px] left-[7px]" />
      <Bolt corner="top-[7px] right-[7px]" />
      <Bolt corner="bottom-[7px] left-[7px]" />
      <Bolt corner="bottom-[7px] right-[7px]" />

      {/* Year — gilded incised lettering, light from upper-left */}
      <p
        className="relative font-heading font-semibold tracking-[0.22em] uppercase leading-none mb-2"
        style={{
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          color: "#b8873a",
          textShadow:
            "-1px -1px 0 rgba(255,244,200,0.52), " +
            "1px 2px 3px rgba(0,0,0,0.40), " +
            "0 0 14px rgba(184,135,58,0.16)",
        }}
      >
        {year}
      </p>

      {/* Engraved rule — gold with bevel */}
      <div
        className="relative mb-4"
        style={{
          height: "1px",
          width: "2.5rem",
          background: "linear-gradient(90deg, rgba(184,135,58,0.65), rgba(184,135,58,0.12))",
          boxShadow: "0 1px 0 rgba(255,255,255,0.22)",
        }}
      />

      {/* Title — carved smaller caps */}
      <h3
        className="relative font-heading font-semibold tracking-[0.15em] uppercase mb-3"
        style={{
          fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
          color: "#4a320e",
          textShadow:
            "-0.5px -0.5px 0 rgba(255,255,255,0.38), " +
            "0.5px 1px 2px rgba(0,0,0,0.32)",
          lineHeight: 1.35,
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className="relative font-body text-sm leading-relaxed"
        style={{ color: "rgba(61,43,31,0.72)" }}
      >
        {body}
      </p>

      {imageUrl && (
        <div
          className="relative mt-4 overflow-hidden aspect-video"
          style={{
            border: "1px solid rgba(184,135,58,0.24)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
    </div>
  );
}
