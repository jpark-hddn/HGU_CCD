import { ExhibitionPoster } from "./ExhibitionPoster";
import { AllExhibitionsLink, MobileExhibitionNavigation, ExhibitionSideNavigation } from "./ExhibitionNavigation";
import type { Exhibition } from "@/types/exhibition";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { Container } from "@/components/ui/Container";
import { DEFAULT_SIZE } from "@/components/sections/ExhibitionMobileCard";
import { dateVenue } from "@/lib/exhibition";

/** 온라인 전시로 가는 버튼 — archiveUrl 이 있을 때만. 모바일은 전체 너비 */
function ArchiveLink({ href, full = false }: { href: string; full?: boolean }) {
  // 외부 주소만 새 탭으로 (임시 "#" 은 그냥 링크)
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group flex items-center justify-center gap-[5.714px] border border-white px-5 py-4 text-white transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black motion-reduce:transition-none ${
        full ? "w-full" : "self-start"
      }`}
    >
      <span
        className={`font-telegraf leading-none uppercase [text-box:trim-both_cap_alphabetic] ${full ? "text-[20px]" : "text-[22.857px]"}`}
      >
        Online exhibition
      </span>
      <ArrowUpRight size={20} color="white" className="transition-[filter] group-hover:invert group-focus-visible:invert motion-reduce:transition-none" />
      {external && <span className="sr-only">(온라인 전시, 새 탭에서 열림)</span>}
    </a>
  );
}

/** 이름 목록 칸 (지도교수 / 졸업생) — 위에 라벨 + 구분선. 여러 열이면 세로 방향으로 채움 (가나다 순이 열 따라 내려감) */
function NameColumn({
  label,
  names,
  multi = false,
  className = "",
}: {
  label: string;
  names: string[];
  /** 졸업생: 모바일 3열 / PC 4열 */
  multi?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <p className="border-b border-white pb-1.5 lg:border-white/30">{label}</p>
      <ul className={multi ? "columns-3 gap-x-1.5 lg:columns-4" : undefined}>
        {names.map((name, i) => (
          <li key={`${name}-${i}`} className="break-inside-avoid">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Alumni — PC 251:1807 / 모바일 6:2393 등. 트랙별 지도교수 + 졸업생 (모바일 3열 / PC 4열)
 * 트랙 구분 없이 기록된 해(advisors)는 학부 지도교수를 먼저 보여주고 트랙엔 졸업생만
 */
function Alumni({ advisors, alumni = [] }: { advisors?: string[]; alumni?: Exhibition["alumni"] }) {
  const line = "border-white lg:border-white/50";
  const text = "text-[14px] leading-[1.4] lg:text-[16px] lg:leading-[1.6]";
  return (
    <section className="flex flex-col gap-1.5">
      <h2
        className={`border-b pb-1.5 font-telegraf text-[24px] leading-none tracking-[-0.03em] lg:border-b-0 lg:pb-0 lg:text-[40px] ${line}`}
      >
        Alumni
      </h2>
      {advisors?.length ? (
        <div className={`pt-1.5 lg:border-t ${line} ${text}`}>
          <NameColumn label="지도교수" names={advisors} />
        </div>
      ) : null}
      {alumni.map((group, i) => (
        <div
          key={group.track}
          className={`flex flex-col gap-1.5 pt-1.5 lg:border-t ${i > 0 || advisors?.length ? "border-t" : ""} ${line}`}
        >
          <h3 className={`border-b pb-1.5 font-telegraf text-[14px] leading-[1.4] lg:text-[22px] ${line}`}>
            {group.track}
          </h3>
          <div className={`flex gap-5 ${text}`}>
            {group.advisors.length > 0 && (
              <NameColumn label="지도교수" names={group.advisors} className="w-[103px] shrink-0 lg:w-[180px]" />
            )}
            {group.graduates.length > 0 && (
              <NameColumn label="졸업생" names={group.graduates} multi className="min-w-0 flex-1" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

/** 전시 상세 — Figma PC 46:8026(링크 있음) / 46:8183(링크 없음), 모바일 6:2393 등 연도별 시안 (검정 배경) */
export function ExhibitionDetail({ item, previous, next }: { item: Exhibition; previous?: Exhibition; next?: Exhibition }) {
  const { width, height } = item.size ?? DEFAULT_SIZE;
  const paragraphs = item.body.filter((p) => !p.emphasis);
  const alt = `${item.year} 졸업 작품전 ${item.name} 포스터`;

  return (
    <>
      {/* Mobile / Tablet (<1080) */}
      <article className="bg-black text-white lg:hidden">
        <ExhibitionPoster src={item.image} alt={alt} width={width} height={height} mobile />
        <MobileExhibitionNavigation previous={previous} next={next} />
        <Container className="flex flex-col gap-[51px] py-10">
          <header className="flex flex-col gap-4 border-b border-white pb-4">
            <h1 className="font-telegraf text-[40px] leading-none uppercase">
              {item.name}
              {dateVenue(item) && (
                <>
                  <br />
                  {dateVenue(item)}
                </>
              )}
            </h1>
            <div className="flex flex-col gap-2 font-telegraf">
              <p className="text-[14px] tracking-[-0.02em]">{item.subtitle[0]}</p>
              <p className="text-[20px] leading-[1.2] tracking-[-0.02em] uppercase">{item.subtitle[1]}</p>
            </div>
          </header>
          {item.verse && (
            <div className="flex flex-col gap-5">
              {item.verse.en && (
                <div className="flex flex-col gap-1.5 font-telegraf uppercase">
                  <p className="text-[12px] leading-none">{item.verse.en.ref}</p>
                  <p className="text-[22px] leading-[1.2]">{item.verse.en.text}</p>
                </div>
              )}
              <div className="flex flex-col gap-1.5">
                <p className="text-[12px] leading-none font-light">{item.verse.ref}</p>
                <p className="text-[14px] leading-[1.4] whitespace-pre-line">{item.verse.text}</p>
              </div>
            </div>
          )}
          {paragraphs.map((p) => (
            <p key={p.text} className="text-[16px] leading-[1.6] tracking-[-0.02em]">
              {p.text}
            </p>
          ))}
          {item.archiveUrl && <ArchiveLink href={item.archiveUrl} full />}
          {item.alumni?.length || item.advisors?.length ? (
            <Alumni advisors={item.advisors} alumni={item.alumni} />
          ) : null}
        </Container>
        <Container className="pt-2 pb-[21px]">
          <AllExhibitionsLink />
        </Container>
      </article>

      {/* Desktop (≥1080): 검정 배경 */}
      <article className="hidden bg-black text-white lg:block">
        <ExhibitionSideNavigation previous={previous} next={next} />
        <Container className="flex items-start justify-between gap-10 py-[100px]">
          <div className="flex w-1/2 max-w-[600px] min-w-0 flex-col gap-[100px]">
            <div className="flex flex-col gap-10">
              <h1 className="font-telegraf text-[48px] leading-none uppercase 2xl:text-[72px]">
                {item.name}
                {dateVenue(item) && (
                  <>
                    <br />
                    {dateVenue(item)}
                  </>
                )}
              </h1>
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
              {item.archiveUrl && <ArchiveLink href={item.archiveUrl} />}
            </div>
            {item.alumni?.length || item.advisors?.length ? (
              <Alumni advisors={item.advisors} alumni={item.alumni} />
            ) : null}
            <div className="-mt-8"><AllExhibitionsLink /></div>
          </div>
          <div className="flex w-1/2 max-w-[579px] shrink-0 flex-col gap-[20px]">
            <ExhibitionPoster src={item.image} alt={alt} width={width} height={height} />
          </div>
        </Container>
      </article>
    </>
  );
}
