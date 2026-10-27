/* eslint-disable @next/next/no-img-element */
import { ADDRESS, SOCIAL_LINKS } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { LogoCcd } from "@/components/ui/LogoCcd";

const FOLLOW = [
  { label: "Email", href: SOCIAL_LINKS.email },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Youtube", href: SOCIAL_LINKS.youtube },
];

const COPYRIGHT = "Handong Global University (c)2026";

function SchoolName({ className = "" }: { className?: string }) {
  return (
    <p className={`font-telegraf leading-none uppercase ${className}`}>
      School of
      <br />
      Contents
      <br />
      Convergence Design
    </p>
  );
}

function FollowList() {
  return (
    <ul className="font-telegraf text-[12px] leading-[1.2] tracking-[-0.01em]">
      {FOLLOW.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="hover:opacity-60">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Logos({ size, dark = false }: { size: "lg" | "sm"; dark?: boolean }) {
  const seal = size === "lg" ? 52 : 44;
  return (
    <div className={`flex items-center ${size === "lg" ? "gap-[17.6px]" : "gap-[10.83px]"}`}>
      <img
        src="/images/common/logo-hgu-seal.svg"
        alt="한동대학교"
        width={seal}
        height={seal}
        className={`block ${dark ? "invert" : ""}`}
      />
      <LogoCcd
        width={size === "lg" ? 49.2349 : 41.6601}
        className={dark ? "text-white" : "text-black"}
        label="콘텐츠융합디자인학부"
      />
    </div>
  );
}

/** dark: 검정 배경 — 전시 상세 페이지 (PC·모바일 모두) */
export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer className={`relative z-[1] ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Desktop (≥1080) */}
      <Container className="hidden pt-3 pb-[30px] lg:block">
        <hr className={`border-0 border-t ${dark ? "border-white/50" : "border-line"}`} />
        <div className="mt-2.5 flex flex-col gap-6">
          <div className="flex items-start justify-between gap-10">
            <SchoolName className="w-[235px] shrink-0 text-[14px] tracking-[-0.01em]" />
            <div className="flex items-start gap-10 font-telegraf text-[12px] tracking-[-0.01em] 2xl:gap-[145px]">
              <address className="flex w-[355px] flex-col gap-3 not-italic">
                <span className="leading-none">Address</span>
                <span className="leading-[1.2]">{ADDRESS.en}</span>
                <span lang="ko" className="leading-[1.4]">
                  {ADDRESS.ko}
                </span>
              </address>
              <div className="flex flex-col gap-3">
                <span className="leading-none whitespace-nowrap">Follow CCD</span>
                <FollowList />
              </div>
              <p className="leading-none whitespace-nowrap">{COPYRIGHT}</p>
            </div>
          </div>
          <Logos size="lg" dark={dark} />
        </div>
      </Container>

      {/* Mobile / Tablet (<1080) */}
      <Container className="pt-2 pb-[30px] lg:hidden">
        <hr className={`border-0 border-t ${dark ? "border-white" : "border-line"}`} />
        <div className="mt-3 flex flex-col gap-5">
          <SchoolName className="text-[18px] tracking-[-0.01em]" />
          <div className="flex gap-6">
            <address className="flex min-w-0 flex-1 flex-col gap-1 font-telegraf not-italic">
              <span className="text-[12px] leading-none tracking-[-0.01em]">Address</span>
              <hr className={`border-0 border-t ${dark ? "border-white" : "border-line"}`} />
              <span lang="ko" className="text-[11px] leading-[1.4] tracking-[-0.01em]">
                {ADDRESS.ko}
              </span>
            </address>
            <div className="flex min-w-0 flex-1 flex-col gap-1 font-telegraf">
              <span className="text-[12px] leading-none tracking-[-0.01em]">Follow CCD</span>
              <hr className={`border-0 border-t ${dark ? "border-white" : "border-line"}`} />
              <FollowList />
            </div>
          </div>
          <div className="flex items-end justify-between gap-4">
            <Logos size="sm" dark={dark} />
            <p className="font-telegraf text-[10px] leading-none tracking-[-0.01em]">{COPYRIGHT}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
