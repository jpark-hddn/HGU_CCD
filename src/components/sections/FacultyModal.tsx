"use client";

/* eslint-disable @next/next/no-img-element -- 아이콘 SVG */
import Image from "next/image";
import Lenis from "lenis";
import { Children, useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { CvEntry, Faculty } from "@/types/faculty";
import { REDUCED_MOTION, SMOOTH_SCROLL_OPTIONS } from "@/components/motion/motion";
import { BlockReveal } from "@/components/motion/BlockReveal";
import { Container } from "@/components/ui/Container";
import { LogoCcd } from "@/components/ui/LogoCcd";

/** 섹션 제목 + 하단 구분선 (PC 26px / Mo 22px) */
function SectionTitle({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="faculty-reveal-mask">
      <div className="faculty-reveal-item flex flex-col gap-1.5 md:gap-2">
        <div className="flex items-center gap-1.5 md:gap-2">
          <h3 className="flex-1 font-telegraf text-[22px] leading-[1.06] md:text-[26px]">{children}</h3>
          {aside}
        </div>
        <hr className="border-0 border-t border-white/50 md:border-white" />
      </div>
    </div>
  );
}

/** 왼쪽 100px 연도 칸 + 내용 (간격 12px) — 연도가 빈 줄은 위 연도에 이어지는 항목 */
function EntryList({ entries }: { entries: CvEntry[] }) {
  return (
    <ul className="flex flex-col text-[14px] leading-[1.6] md:text-[16px]">
      {entries.map((e, i) => (
        <li key={i} className="faculty-reveal-mask">
          <span className="faculty-reveal-item flex gap-3">
            <span className="w-[100px] shrink-0">{e.year}</span>
            <span className="min-w-0 flex-1">{e.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`flex flex-col gap-2 ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}

/** Publications · Works — +/− 로 펼치고 접는 섹션 */
function Collapsible({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLElement | null>(null);
  const id = useId();
  return (
    <section className="flex flex-col">
      <SectionTitle
        aside={
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            aria-label={`${title} ${open ? "접기" : "펼치기"}`}
            onClick={() => {
              const nextOpen = !open;
              const items = panelRef.current?.querySelectorAll<HTMLElement>(".faculty-reveal-item") ?? [];
              items.forEach((item, index) => {
                item.style.setProperty("--expanded-item-delay", `${index * 55}ms`);
              });
              lastItemRef.current = items.length ? items[items.length - 1] : null;
              setRevealing(nextOpen && items.length > 0 && !window.matchMedia(REDUCED_MOTION).matches);
              setOpen(nextOpen);
            }}
            className="relative flex size-8 shrink-0 items-center justify-center hover:opacity-70 md:size-10"
          >
            <img
              src={open ? "/icons/minus-white.svg" : "/icons/plus-white.svg"}
              alt=""
              className="block w-[20.8px] md:w-[26px]"
            />
          </button>
        }
      >
        {title}
      </SectionTitle>
      <div
        id={id}
        ref={panelRef}
        data-expanded={open ? "true" : "false"}
        data-expanded-reveal={open && revealing ? "true" : undefined}
        className="faculty-expand"
        onAnimationEnd={(event) => {
          if (!(event.target instanceof HTMLElement) || !event.target.classList.contains("faculty-reveal-item") || event.animationName !== "faculty-line-reveal") return;
          event.stopPropagation();
          if (event.target === lastItemRef.current) setRevealing(false);
        }}
      >
        <div className="faculty-expand-inner" inert={!open} aria-hidden={!open}>
          <div className="flex flex-col gap-2 pt-2">{children}</div>
        </div>
      </div>
    </section>
  );
}

function FacultyDetails({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const firstSection = ref.current?.firstElementChild;
    if (!firstSection) return;
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setStart(true), 0);
      return () => clearTimeout(timer);
    }

    // 이름이 아니라 실제 첫 항목이 보일 때 전체 항목을 한 번에 시작한다.
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setStart(true);
        observer.disconnect();
      }
    });
    observer.observe(firstSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex min-w-0 flex-1 flex-col gap-10 md:gap-[60px]">
      {Children.toArray(children).map((section, index) => (
        <BlockReveal key={index} index={index} start={start}>{section}</BlockReveal>
      ))}
    </div>
  );
}

function Detail({ person }: { person: Faculty }) {
  const d = person.detail ?? {};
  const contact = d.contact
    ? ([
        ["연구실", d.contact.office],
        ["전화", d.contact.phone],
        ["E-mail", d.contact.email],
      ].filter(([, v]) => v) as [string, string][])
    : [];

  return (
    <div className="flex flex-col gap-[100px] lg:flex-row lg:items-start lg:gap-[60px] 2xl:gap-[180px]">
      {/* 왼쪽: 프로필 */}
      <div className="flex w-full flex-col gap-10 lg:w-[320px] lg:shrink-0 2xl:w-[420px]">
        <div className="flex flex-col gap-[22.873px]">
          <div className="relative aspect-[1122/1402] w-full overflow-hidden bg-neutral-800">
            {person.image && (
              <Image
                src={person.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 420px, (min-width: 1080px) 320px, 100vw"
                className="object-cover"
                style={{ objectPosition: person.objectPosition ?? "center" }}
              />
            )}
          </div>
          <div className="flex flex-col gap-3 leading-[1.2]">
            <div className="flex flex-col gap-1">
              <h2 className="font-telegraf text-[28px] leading-[1.06] md:text-[34px]">{person.nameEn}</h2>
              <p className="text-[24px] font-medium">{person.nameKo}</p>
            </div>
            {d.title ? (
              <>
                {person.position && <p className="text-[16px] font-medium md:hidden">{person.position}</p>}
                <p className="hidden text-[20px] font-medium md:block">{d.title}</p>
              </>
            ) : (
              person.position && <p className="text-[16px] font-medium md:text-[20px]">{person.position}</p>
            )}
          </div>
        </div>

        {contact.length > 0 && (
          <dl className="grid grid-cols-[auto_1fr] gap-x-10 text-[16px] leading-[1.4] text-[#a2a2a2] md:text-[18px]">
            {contact.map(([label, value]) => (
              <div key={label} className="contents">
                <dt>{label}</dt>
                <dd className="min-w-0 break-all">
                  {label === "E-mail" ? (
                    <a href={`mailto:${value}`} className="underline decoration-from-font hover:text-white">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {d.intro && (
          <p className="text-[13px] leading-[1.6] tracking-[-0.02em] md:text-[18px] md:leading-[1.4] md:tracking-normal">
            {d.intro}
          </p>
        )}
      </div>

      {/* 오른쪽: CV */}
      <FacultyDetails>
        {/* 시안 44:2926: Major → Research Interest → Biography → Awards → (기타) → Publications → Patent → Works */}
        <Section title="Major">
          {d.major?.length ? (
            d.major.some((m) => m.year) ? (
              <EntryList entries={d.major} />
            ) : (
              <ul className="text-[14px] leading-[1.6] md:text-[16px]">
                {d.major.map((m) => (
                  <li key={m.text} className="faculty-reveal-mask">
                    <span className="faculty-reveal-item block">{m.text}</span>
                  </li>
                ))}
              </ul>
            )
          ) : (
            <div className="faculty-reveal-mask">
              <p className="faculty-reveal-item text-[14px] leading-[1.6] md:text-[16px]">{person.education}</p>
            </div>
          )}
        </Section>
        {d.researchInterest && (
          <Section title="Research Interest">
            <div className="faculty-reveal-mask">
              <p className="faculty-reveal-item text-[14px] leading-[1.4] md:text-[16px]">{d.researchInterest}</p>
            </div>
          </Section>
        )}
        {d.biography?.length ? (
          <Section title="Biography">
            <EntryList entries={d.biography} />
          </Section>
        ) : null}
        {d.awards?.length ? (
          <Section title="Awards">
            <EntryList entries={d.awards} />
          </Section>
        ) : null}
        {d.extra?.map((sec) => (
          <Section key={sec.title} title={sec.title}>
            <EntryList entries={sec.entries} />
          </Section>
        ))}
        {d.publications?.length ? (
          <Collapsible title="Publications">
            {d.publications.map((group, i) => (
              <div key={group.label ?? i} className="flex flex-col gap-2">
                {group.label && (
                  <div className="faculty-reveal-mask">
                    <h4 className="faculty-reveal-item font-telegraf text-[14px] leading-[1.06] uppercase md:text-[16px]">{group.label}</h4>
                  </div>
                )}
                <EntryList entries={group.entries} />
                {group.note && (
                  <div className="faculty-reveal-mask">
                    <p className="faculty-reveal-item text-[14px] leading-[1.6] md:text-[16px]">{group.note}</p>
                  </div>
                )}
              </div>
            ))}
          </Collapsible>
        ) : null}
        {d.patents?.length ? (
          <Collapsible title="Patent">
            <EntryList entries={d.patents} />
          </Collapsible>
        ) : null}
        {d.works?.length ? (
          <Collapsible title="Works (Recent 5 years)">
            <EntryList entries={d.works} />
          </Collapsible>
        ) : null}
      </FacultyDetails>
    </div>
  );
}

/**
 * 교수 상세 모달 — Figma 6:264(처음 열었을 때) / 6:198(전체 펼침) / 6:2285(모바일)
 * <dialog> 로 포커스 가두기·ESC 닫기를 브라우저에 맡김
 */
export function FacultyModal({ person, onClose }: { person: Faculty | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (person && !el.open) {
      el.showModal();
      el.scrollTop = 0;
      // 열릴 때 닫기 버튼 대신 모달 자체에 포커스 (닫기 버튼에 포커스 테두리가 생기지 않게)
      el.focus();
    }
    if (!person && el.open) el.close();
  }, [person]);

  // 배경은 잠근 채 상세 창에서만 페이지와 같은 관성으로 스크롤한다.
  useEffect(() => {
    const dialog = ref.current;
    const content = contentRef.current;
    if (!person || !dialog || !content) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    let lenis: Lenis | undefined;
    const syncMotion = () => {
      lenis?.destroy();
      lenis = reducedMotion.matches
        ? undefined
        : new Lenis({ ...SMOOTH_SCROLL_OPTIONS, wrapper: dialog, content });
    };

    syncMotion();
    reducedMotion.addEventListener("change", syncMotion);
    return () => {
      reducedMotion.removeEventListener("change", syncMotion);
      lenis?.destroy();
    };
  }, [person]);

  // 열려 있는 동안 배경 스크롤 잠금
  useEffect(() => {
    if (!person) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prev;
    };
  }, [person]);

  return (
    <dialog
      ref={ref}
      data-lenis-prevent
      tabIndex={-1}
      aria-label={person ? `${person.nameKo} 교수 상세` : undefined}
      onClose={onClose}
      className="inset-0 m-0 h-full max-h-none w-full outline-none max-w-none overflow-y-auto overscroll-contain bg-black p-0 text-white backdrop:bg-black/60"
    >
      {person && (
        <div ref={contentRef}>
          {/* Mobile: 상단 바 (로고 + 닫기) */}
          <div className="sticky top-0 z-10 flex items-center justify-between bg-black px-[23px] py-4 md:hidden">
            <LogoCcd width={44.386} className="text-white" />
            <button type="button" onClick={onClose} aria-label="닫기" className="size-8">
              <img src="/icons/close.svg" alt="" className="block size-8" />
            </button>
          </div>
          {/* Tablet+: 오른쪽 위 닫기 */}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="fixed top-10 right-10 z-10 hidden size-[52px] hover:opacity-70 md:block"
          >
            <img src="/icons/close.svg" alt="" className="block size-[52px]" />
          </button>

          <Container className="pt-0 pb-[90px] md:pt-[124px] md:pb-[100px]">
            <Detail key={person.slug} person={person} />
          </Container>
        </div>
      )}
    </dialog>
  );
}
