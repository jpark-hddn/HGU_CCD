import type { Exhibition } from "@/types/exhibition";

/** "기간, 장소" 한 줄 — 둘 다 없으면 빈 문자열 */
export function dateVenue(item: Pick<Exhibition, "date" | "venue">) {
  return [item.date, item.venue].filter(Boolean).join(", ");
}
