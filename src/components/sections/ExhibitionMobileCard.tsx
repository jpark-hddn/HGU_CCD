import Image from "next/image";
import type { Exhibition } from "@/types/exhibition";
import { dateVenue } from "@/lib/exhibition";

/** 백엔드 응답에 size 가 없을 때 쓰는 기본 포스터 크기 */
export const DEFAULT_SIZE = { width: 480, height: 680 };

/** 모바일 카드 — Figma 204:1516. 포스터 폭 160 고정, 높이는 원본 비율 */
export function ExhibitionMobileCard({ item }: { item: Exhibition }) {
  const { width, height } = item.size ?? DEFAULT_SIZE;
  return (
    <article className="flex gap-4">
      <div
        className="relative w-[160px] shrink-0 self-start overflow-hidden bg-black/20"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={item.image}
          alt={`${item.year} 졸업 작품전 ${item.name} 포스터`}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-5 font-telegraf uppercase">
        <div className="flex flex-col gap-1.5">
          <p className="text-[14px] leading-none tracking-[-0.02em]">{item.year}</p>
          <h3 className="text-[24px] leading-none">
            {item.name}
            {dateVenue(item) && (
              <>
                <br />
                {dateVenue(item)}
              </>
            )}
          </h3>
          <p className="text-[16px] leading-[1.2] tracking-[-0.02em]">{item.subtitle[1]}</p>
        </div>
        {item.verse && (
          <div className="flex flex-col gap-1 text-[12px] leading-[1.2] tracking-[-0.02em]">
            <p>{item.verse.ref}</p>
            <p className="whitespace-pre-line">{item.verse.text}</p>
          </div>
        )}
      </div>
    </article>
  );
}
