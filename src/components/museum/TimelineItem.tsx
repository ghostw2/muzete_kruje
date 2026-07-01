"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types";
import StonePlaque from "./StonePlaque";

type Props = { event: TimelineEvent; index: number };

export default function TimelineItem({ event, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className={`relative flex items-start mb-10 md:mb-14 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Ghost year — large ambient text floating in the empty half */}
      <div className={`hidden md:flex flex-1 items-center overflow-hidden ${isEven ? "justify-end pr-4" : "justify-start pl-4"}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="font-heading font-semibold select-none pointer-events-none"
          aria-hidden="true"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            color: "rgba(201,168,76,0.10)",
            letterSpacing: "0.06em",
            lineHeight: 1,
          }}
        >
          {event.year}
        </motion.span>
      </div>

      {/* Connector dot on the gold vertical line */}
      <div className="hidden md:flex flex-col items-center shrink-0 w-10 mt-6">
        <div className="w-3 h-3 rounded-full bg-museum-gold ring-4 ring-museum-gold/25" />
      </div>

      {/* Plaque — fills one half */}
      <div className="flex-1 w-full md:px-3">
        <StonePlaque
          year={event.year}
          title={event.title}
          body={event.description}
          imageUrl={event.imageUrl}
        />
      </div>
    </motion.div>
  );
}
