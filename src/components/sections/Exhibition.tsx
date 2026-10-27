import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { getExhibitions } from "@/lib/api/exhibitions";
import type { Exhibition as ExhibitionItem } from "@/types/exhibition";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dateVenue } from "@/lib/exhibition";
import { ExhibitionRail, RailControls } from "./ExhibitionRail";
import { DEFAULT_SIZE, ExhibitionMobileCard } from "./ExhibitionMobileCard";

const MORE_HREF = "/exhibitions";
const RAIL_ID = "exhibition-rail";
/** 메인 PC 레일에 보여줄 최신 작품 수 (전체는 /exhibitions) */
const RAIL_LIMIT = 10;

function Body({ body }: { body: ExhibitionItem["body"] }) {
  if (body.length === 1) {
    return <p className="text-[14px] leading-[1.2]">{body[0].text}</p>;
  }
  return (
    <div className="flex flex-col gap-2 text-[14px] leading-[1.4]">
      {body.map((p) => (
        <p key={p.text} className={p.emphasis ? "font-medium" : undefined}>
          {p.text}
        </p>
      ))}
    </div>
  );
}

function DesktopCard({ item }: { item: ExhibitionItem }) {
  const { width, height } = item.size ?? DEFAULT_SIZE;
  return (
    <article className="flex shrink-0 flex-col gap-4" style={{ width }}>
      {/* 포스터 클릭 → 전시 상세 (드래그로 스크롤한 경우 클릭은 ExhibitionRail 이 막음) */}
      <Link
        href={`/exhibitions/${item.year}`}
        draggable={false}
        aria-label={`${item.year} ${item.name} 전시 상세 보기`}
        className="group relative block shrink-0 overflow-hidden bg-neutral-100"
        style={{ width, height }}
      >
        <Image
          src={item.image}
          alt=""
          fill
          sizes={`${width}px`}
          className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          draggable={false}
        />
      </Link>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-telegraf text-[44px] leading-none uppercase 2xl:text-[48px]">
            {item.name}
            {item.venueOnNewLine ? (
              <>
                <br />
                {item.date}
                <br />
                {item.venue}
              </>
            ) : (
              dateVenue(item) && (
                <>
                  <br />
                  {dateVenue(item)}
                </>
              )
            )}
          </h3>
          <p className="font-helvetica text-[18px] leading-[1.2] font-medium tracking-[-0.02em]">
            {item.subtitle[0]}
            <br />
            {item.subtitle[1]}
          </p>
        </div>
        <Body body={item.body} />
      </div>
    </article>
  );
}

export async function Exhibition() {
  const exhibitions = await getExhibitions();

  return (
    <section aria-labelledby="exhibitions" className="scroll-mt-4">
      <SectionHeading
        id="exhibitions"
        title="Exhibition"
        aside={
          <>
            {/* Mobile: MORE ↗ */}
            <Link href={MORE_HREF} className="flex shrink-0 items-center gap-1 hover:opacity-70 md:hidden">
              <span className="font-telegraf text-[16px] leading-none text-accent uppercase [text-box:trim-both_cap_alphabetic]">
                More
              </span>
              <ArrowUpRight size={14} color="accent" />
            </Link>
            {/* Tablet+: ‹ › + MORE 버튼 */}
            <div className="hidden shrink-0 items-center gap-5 md:flex">
              <RailControls target={RAIL_ID} />
              <Link
                href={MORE_HREF}
                className="flex min-w-[160px] items-center justify-center border border-black px-5 py-4 font-telegraf text-[22.857px] leading-none uppercase transition-colors [text-box:trim-both_cap_alphabetic] hover:bg-black hover:text-white"
              >
                more
              </Link>
            </div>
          </>
        }
      />

      {/* Mobile: 최근 5개 세로 리스트 + 전체보기 */}
      <div className="mt-3 flex flex-col gap-6 md:hidden">
        <ul className="flex flex-col gap-2">
          {exhibitions.slice(0, 5).map((item) => (
            <li key={item.year} className="flex flex-col gap-2 border-b border-line pb-2">
              <ExhibitionMobileCard item={item} />
            </li>
          ))}
        </ul>
        <Link
          href={MORE_HREF}
          className="flex w-full items-center justify-center border border-black px-5 py-4 font-telegraf text-[16px] leading-none uppercase [text-box:trim-both_cap_alphabetic]"
        >
          전체보기
        </Link>
      </div>

      {/* Tablet+: 가로 스크롤 — 최신 10개 */}
      <div className="mt-5 hidden md:block">
        <ExhibitionRail id={RAIL_ID}>
          {exhibitions.slice(0, RAIL_LIMIT).map((item, i) => (
            <Fragment key={item.year}>
              {i > 0 && <span aria-hidden className="w-px shrink-0 self-stretch bg-line-soft" />}
              <DesktopCard item={item} />
            </Fragment>
          ))}
        </ExhibitionRail>
      </div>
    </section>
  );
}
