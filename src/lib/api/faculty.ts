import { cacheLife, cacheTag } from "next/cache";
import { FACULTY } from "@/data/faculty";
import type { FacultyDetailDto, FacultyDto } from "@/types/api";
import type { Faculty } from "@/types/faculty";
import { USE_MOCK, apiGet, apiGetOrNull } from "./client";
import { toFaculty } from "./mappers";

/**
 * 명세서 F-08, F-11~13 · GET /api/faculties + GET /api/faculties/{id}
 * 메인에서 카드 클릭 시 바로 모달을 띄우므로 상세까지 한 번에 불러옴 (캐시돼서 요청은 빌드·재검증 때만)
 */
export async function getFaculty(): Promise<Faculty[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("faculty");

  if (USE_MOCK) return FACULTY;
  const list = [...(await apiGet<FacultyDto[]>("/api/faculties"))].sort(
    (a, b) => a.sort_order - b.sort_order,
  );
  const details = await Promise.all(
    list.map((f) => apiGetOrNull<FacultyDetailDto>(`/api/faculties/${f.id}`)),
  );
  return list.map((f, i) => toFaculty(f, details[i]));
}
