"use client";

import { useState } from "react";

type Props = {
  transcript: string;
  langNote: string;
  showLabel: string;
  hideLabel: string;
};

export default function TranscriptToggle({ transcript, langNote, showLabel, hideLabel }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className="font-caption text-museum-walnut/35 text-xs italic mb-2">{langNote}</p>
      <div className="relative">
        <p
          className={`font-body text-museum-walnut/70 text-sm leading-relaxed whitespace-pre-line ${
            !expanded ? "line-clamp-5" : ""
          }`}
        >
          {transcript}
        </p>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-museum-linen-50 to-transparent pointer-events-none" />
        )}
      </div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 font-heading text-xs tracking-widest uppercase text-museum-gold/70 hover:text-museum-gold underline-offset-4 hover:underline transition-colors"
      >
        {expanded ? hideLabel : showLabel}
      </button>
    </div>
  );
}
