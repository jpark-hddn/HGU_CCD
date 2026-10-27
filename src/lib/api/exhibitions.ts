import { cacheLife, cacheTag } from "next/cache";
import { EXHIBITIONS } from "@/data/exhibitions";
import type { ExhibitionDetailDto, ExhibitionDto } from "@/types/api";
import type { Exhibition } from "@/types/exhibition";
import { USE_MOCK, apiGet, apiGetOrNull } from "./client";
import { toExhibition } from "./mappers";

/** 명세서 F-09, F-15 · GET /api/exhibitions — 연도 역순 */
export async function getExhibitions(): Promise<Exhibition[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("exhibitions");

  if (USE_MOCK) return EXHIBITIONS;
  const list = await apiGet<ExhibitionDto[]>("/api/exhibitions");
  return list.map(toExhibition).sort((a, b) => b.year - a.year);
}

/**
 * 명세서 F-16~18 · 전시 상세
 * 페이지 주소가 /exhibitions/{year} 라서 연도로 조회 (명세서는 {id} — 연도 조회 추가 요청함)
 */
export async function getExhibition(year: number): Promise<Exhibition | null> {
  "use cache";
  cacheLife("hours");
  cacheTag("exhibitions", `exhibition-${year}`);

  if (USE_MOCK) return EXHIBITIONS.find((e) => e.year === year) ?? null;
  const dto = await apiGetOrNull<ExhibitionDetailDto>(`/api/exhibitions/${year}`);
  return dto ? toExhibition(dto) : null;
}
