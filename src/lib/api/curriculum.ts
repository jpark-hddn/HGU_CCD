import { cacheLife, cacheTag } from "next/cache";
import { TRACKS } from "@/data/curriculum";
import type { CurriculumTrackDto } from "@/types/api";
import type { Track } from "@/types/curriculum";
import { USE_MOCK, apiGet } from "./client";
import { toTrack } from "./mappers";

/** 명세서 F-06 · GET /api/curriculum */
export async function getTracks(): Promise<Track[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("curriculum");

  if (USE_MOCK) return TRACKS;
  const list = await apiGet<CurriculumTrackDto[]>("/api/curriculum");
  return [...list].sort((a, b) => a.sort_order - b.sort_order).map(toTrack);
}
