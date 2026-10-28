"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Exhibition } from "@/types/exhibition";
import { DEFAULT_SIZE } from "@/components/sections/ExhibitionMobileCard";
import { exhibitionHref } from "./ExhibitionRow";

const PAGE = 10;

/** 영문 제목의 반복을 빼고 한글 부제가 있을 때만 보여준다. */
function koreanSubtitle(subtitle: string) {
  return subtitle.split(/[:：]/).map((part) => part.trim()).find((part) => /[가-힣]/.test(part));
}

function MobileExhibitionCard({ item, first }: { item: Exhibition; first: boolean }) {
  const { width, height } = item.size ?? DEFAULT_SIZE;
  const subtitle = koreanSubtitle(item.subtitle[1]);
  const school = item.subtitle[0].replace(/(한동대학교)\s+/, "$1\n");
  const date = item.date?.replace(/[—–]/g, "-") || String(item.year);
  const nearSquare = width / height >= 0.9;

  return (
    <article className="flex gap-3">
      <div className="relative h-[203px] w-[140px] shrink-0 overflow-hidden bg-white">
        <Image
          src={item.image}
          alt={`${item.year} 졸업 작품전 ${item.name} 포스터`}
          fill
          sizes="140px"
          className={nearSquare ? "object-contain object-top" : "object-cover"}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 font-telegraf text-black">
        <div className="flex flex-col gap-0.5 leading-none">
          <p className={`text-[13px] tracking-[-0.02em] ${first ? "flex min-h-[17px] items-center" : ""}`}>{date}</p>
          <h2 className="text-[28px] uppercase [overflow-wrap:anywhere]">{item.name}</h2>
        </div>
        <div>
          {subtitle ? <p className="text-[14px] leading-[1.4]">{subtitle}</p> : <div aria-hidden="true" className="h-[19.6px]" />}
          <p className="mt-[19.6px] whitespace-pre-line text-[12px] leading-[1.4] tracking-[-0.02em]">{school}</p>
        </div>
      </div>
    </article>
  );
}

/** 전시 목록 모바일 — Figma 452:2362. 남은 항목이 있을 때만 MORE 버튼. */
export function ExhibitionListMobile({ items }: { items: Exhibition[] }) {
  const [count, setCount] = useState(PAGE);
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-5">
        {items.slice(0, count).map((item, index) => (
          <li key={item.year} className="border-b border-line pb-5">
            <Link href={exhibitionHref(item.year)} className="block" aria-label={`${item.year} ${item.name} 전시 상세 보기`}>
              <MobileExhibitionCard item={item} first={index === 0} />
            </Link>
          </li>
        ))}
      </ul>
      {count < items.length && (
        <button
          type="button"
          onClick={() => setCount((c) => c + PAGE)}
          className="flex w-full items-center justify-center border border-black px-5 py-4 font-telegraf text-[20px] leading-none uppercase [text-box:trim-both_cap_alphabetic]"
        >
          more
        </button>
      )}
    </div>
  );
}
