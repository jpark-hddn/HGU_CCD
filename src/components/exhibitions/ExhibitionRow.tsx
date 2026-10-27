import Image from "next/image";
import Link from "next/link";
import type { Exhibition } from "@/types/exhibition";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DEFAULT_SIZE } from "@/components/sections/ExhibitionMobileCard";
import { dateVenue } from "@/lib/exhibition";

export function exhibitionHref(year: number) {
  return `/exhibitions/${year}`;
}

/** 전시 목록 PC 한 행 — Figma 6:1231. reverse=true 면 포스터가 왼쪽 */
export function ExhibitionRow({ item, reverse }: { item: Exhibition; reverse: boolean }) {
  const { width, height } = item.size ?? DEFAULT_SIZE;
  const paragraphs = item.body.filter((p) => !p.emphasis);

  return (
    <article
      className={`flex items-start justify-between gap-10 py-[60px] 2xl:py-[100px] ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="flex w-1/2 max-w-[600px] min-w-0 flex-col gap-10">
        <h2 className="font-telegraf text-[40px] leading-none uppercase 2xl:text-[72px]">
          {item.name}
          {dateVenue(item) && (
            <>
              <br />
              {dateVenue(item)}
            </>
          )}
        </h2>
        <p className="font-helvetica text-[20px] leading-[1.2] font-medium tracking-[-0.02em] 2xl:text-[24px]">
          {item.subtitle[0]}
          <br />
          {item.subtitle[1]}
        </p>
        {item.verse && (
          <p className="text-[16px] leading-[1.4] font-medium 2xl:text-[18px]">
            {item.verse.text} ({item.verse.ref})
          </p>
        )}
        {item.verse?.en && (
          <p className="text-[16px] leading-[1.4] font-medium 2xl:text-[18px]">“{item.verse.en.text}”</p>
        )}
        {paragraphs.map((p) => (
          <p key={p.text} className="text-[16px] leading-[1.4] 2xl:text-[18px]">
            {p.text}
          </p>
        ))}
        <Link
          href={exhibitionHref(item.year)}
          className="flex items-center gap-[5.714px] self-start border border-black px-5 py-4 transition-colors hover:bg-black hover:text-white [&:hover_img]:invert"
        >
          <span className="font-telegraf text-[22.857px] leading-none uppercase [text-box:trim-both_cap_alphabetic]">
            Go to archive
          </span>
          <ArrowUpRight size={20} color="black" />
        </Link>
      </div>
      <div
        className="relative w-1/2 max-w-[600px] shrink-0 bg-neutral-100"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={item.image}
          alt={`${item.year} 졸업 작품전 ${item.name} 포스터`}
          fill
          sizes="(min-width: 1280px) 600px, 50vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
