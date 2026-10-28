import Image from "next/image";
import Link from "next/link";
import type { Exhibition } from "@/types/exhibition";
import { DEFAULT_SIZE } from "@/components/sections/ExhibitionMobileCard";
import { dateVenue } from "@/lib/exhibition";

export function exhibitionHref(year: number) {
  return `/exhibitions/${year}`;
}

/** 전시별 포스터 프레임 — Figma PC 전시 목록 기준. */
const POSTER_FRAMES: Record<number, { width: number; height: number }> = {
  2026: { width: 534, height: 755 },
  2025: { width: 560, height: 787 },
  2024: { width: 560, height: 561 },
  2023: { width: 560, height: 792 },
  2022: { width: 560, height: 866 },
  2021: { width: 560, height: 314 },
  2020: { width: 560, height: 792 },
  2019: { width: 560, height: 713 },
  2018: { width: 560, height: 1119 },
  2017: { width: 560, height: 785 },
  2016: { width: 560, height: 793 },
};

/** 전시 목록 PC 한 행 — 포스터와 소개 전체를 눌러 상세로 이동한다. */
export function ExhibitionRow({ item }: { item: Exhibition }) {
  const { width, height } = POSTER_FRAMES[item.year] ?? item.size ?? DEFAULT_SIZE;
  const paragraphs = item.body.filter((p) => !p.emphasis);

  return (
    <Link
      href={exhibitionHref(item.year)}
      aria-label={`${item.year} ${item.name} 전시 상세 보기`}
      className={`flex justify-between gap-10 border-b border-line py-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] ${item.year === 2026 ? "items-center" : "items-start"}`}
    >
      <div className="flex w-1/2 max-w-[650px] min-w-0 flex-col gap-10 2xl:gap-[80px]">
        <h2 className="font-telegraf text-[40px] leading-none uppercase 2xl:text-[72px]">
          {item.name}
          {dateVenue(item) && (
            <>
              <br />
              {dateVenue(item)}
            </>
          )}
        </h2>
        <div className="flex flex-col gap-6">
          <p className="font-pretendard text-[20px] leading-normal font-medium tracking-[-0.02em] 2xl:text-[24px]">
            {item.subtitle[0]}
            <br />
            {item.subtitle[1]}
          </p>
          {paragraphs.map((p) => (
            <p key={p.text} className="font-pretendard text-[16px] leading-[1.4] 2xl:text-[20px]">
              {p.text}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`relative w-1/2 shrink-0 bg-white ${item.year === 2024 ? "border border-[#b2b2b2]" : ""}`}
        style={{ aspectRatio: `${width} / ${height}`, maxWidth: `${width}px` }}
      >
        <Image
          src={item.image}
          alt={`${item.year} 졸업 작품전 ${item.name} 포스터`}
          fill
          sizes="(min-width: 1280px) 560px, 50vw"
          className="object-cover"
        />
      </div>
    </Link>
  );
}
