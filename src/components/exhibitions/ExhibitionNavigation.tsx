import Link from "next/link";
import type { Exhibition } from "@/types/exhibition";

type Adjacent = Pick<Exhibition, "year" | "name">;

function DirectionLink({ item, direction }: { item?: Adjacent; direction: "previous" | "next" }) {
  const previous = direction === "previous";
  const content = (
    <>
      {previous && <DirectionArrow direction={direction} />}
      <span>{previous ? "PREVIOUS" : "NEXT"}<span className="hidden lg:inline"> EXHIBITION</span></span>
      {!previous && <DirectionArrow direction={direction} />}
    </>
  );
  const className = `group relative flex items-center gap-[4.89px] font-telegraf text-[15.403px] leading-none uppercase text-[#a9a9a9] lg:gap-[5.714px] lg:text-[18px] ${previous ? "justify-start" : "justify-end"}`;

  if (!item) return <span aria-disabled="true" className={`${className} opacity-35`}>{content}</span>;
  return (
    <Link href={`/exhibitions/${item.year}`} aria-label={`${previous ? "이전" : "다음"} 전시: ${item.year} ${item.name}`} className={`${className} after:absolute after:inset-x-0 after:-inset-y-3 transition-colors hover:text-white focus-visible:text-white`}>
      {content}
    </Link>
  );
}

function DirectionArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <picture className={`shrink-0 transition-[filter] group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert ${direction === "previous" ? "rotate-180" : ""}`}>
      <source media="(min-width: 1080px)" srcSet={`/icons/exhibition-${direction}-desktop.svg`} />
      {/* Figma에서 받은 각 화면 크기의 아이콘을 원본 크기로 사용한다. */}
      <img src={`/icons/exhibition-${direction}-mobile.svg`} alt="" />
    </picture>
  );
}

export function ExhibitionNavigation({ previous, next }: { previous?: Adjacent; next?: Adjacent }) {
  return (
    <nav aria-label="이전 및 다음 전시" className="flex w-full items-center justify-between gap-4">
      <DirectionLink item={previous} direction="previous" />
      <DirectionLink item={next} direction="next" />
    </nav>
  );
}

export function AllExhibitionsLink() {
  return (
    <Link href="/exhibitions" className="group inline-flex items-center gap-[10px] self-start border border-white p-[10px] lg:px-[20px] lg:py-[16px] font-telegraf text-[20px] leading-none text-white uppercase lg:text-[22.86px] transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black motion-reduce:transition-none">
      <span aria-hidden="true" className="grid size-[22px] shrink-0 grid-cols-2 grid-rows-2 gap-[2px]">
        {[0, 1, 2, 3].map((square) => <span key={square} className="border-[1.29px] border-current" />)}
      </span>
      <span className="[text-box:trim-both_cap_alphabetic]">ALL EXHIBITION</span>
    </Link>
  );
}

/** PC 전시 상세의 양쪽 가장자리에 있는 이전/다음 전시 화살표. */
export function ExhibitionSideNavigation({ previous, next }: { previous?: Adjacent; next?: Adjacent }) {
  return (
    <nav aria-label="이전 및 다음 전시" className="pointer-events-none sticky top-1/2 z-20 h-0">
      {([previous, next] as const).map((item, index) => item && (
        <Link
          key={item.year}
          href={`/exhibitions/${item.year}`}
          aria-label={`${index === 0 ? "이전" : "다음"} 전시: ${item.year} ${item.name}`}
          className={`group pointer-events-auto absolute top-[-22px] flex h-[44px] w-[44px] items-center 2xl:top-[-30.2245px] 2xl:h-[60.449px] 2xl:w-[59.086px] justify-center border border-white bg-black transition-colors hover:bg-white focus-visible:bg-white motion-reduce:transition-none ${index === 0 ? "left-[8px] 2xl:left-[56px]" : "right-[8px] 2xl:right-[56px]"}`}
        >
          {/* Figma 원본 화살표 크기를 유지하고 이전 전시는 반대 방향으로 돌린다. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/exhibition-side-arrow.svg" alt="" className={`transition-[filter] group-hover:brightness-0 group-focus-visible:brightness-0 motion-reduce:transition-none ${index === 0 ? "rotate-180" : ""}`} />
        </Link>
      ))}
    </nav>
  );
}
