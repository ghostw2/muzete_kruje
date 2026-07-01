export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        {/* Carved stone threshold line */}
        <path
          d="M0 12 L60 12 L80 4 L100 20 L120 4 L140 20 L160 12 L300 12 L320 4 L340 20 L360 4 L380 20 L400 12 L720 12 L740 4 L760 20 L780 4 L800 20 L820 12 L1060 12 L1080 4 L1100 20 L1120 4 L1140 20 L1160 12 L1340 12 L1360 4 L1380 20 L1400 4 L1420 20 L1440 12"
          stroke="#c9a84c"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path
          d="M0 12 L1440 12"
          stroke="#c9a84c"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />
      </svg>
    </div>
  );
}
