import type { Locale, TimelineEvent } from "@/types";
import { timelineData } from "@/data/timeline";

export function getTimelineEvents(locale: Locale): TimelineEvent[] {
  return timelineData.filter((e) => e.locale === locale);
}
