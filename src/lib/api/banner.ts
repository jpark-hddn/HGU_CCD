import { cacheLife, cacheTag } from "next/cache";
import { BANNER_VIDEOS } from "@/data/banner";
import type { BannerDto } from "@/types/api";
import type { BannerVideo } from "@/types/banner";
import { USE_MOCK, apiGet } from "./client";
import { toBannerVideo } from "./mappers";

// 명세서에 없어서 백엔드에 추가 요청함 (banner 테이블 + GET /api/banners)
export async function getBannerVideos(): Promise<BannerVideo[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("banner");

  if (USE_MOCK) return BANNER_VIDEOS;
  const list = await apiGet<BannerDto[]>("/api/banners");
  return [...list].sort((a, b) => a.sort_order - b.sort_order).map(toBannerVideo);
}
