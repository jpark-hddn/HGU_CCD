"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { LogoCcd } from "@/components/ui/LogoCcd";

const linkText = "font-pretendard text-[14px] uppercase leading-none tracking-[-0.02em]";

/** dark: 검정 배경(기본, 메인·전시 상세) / light: 흰 배경(전시 목록) */
type Tone = "dark" | "light";

export function Header({ tone = "dark" }: { tone?: Tone }) {
  const light = tone === "light";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1080 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`relative z-50 ${light ? "bg-white text-black" : "bg-black text-white"}`}>
      {/* Desktop (≥1080) */}
      <Container className="hidden h-[82px] items-center lg:flex">
        <div className="flex items-center gap-[60px]">
          <Link href="/" aria-label="HGU CCD 홈" className="text-current">
            <LogoCcd width={55.4848} />
          </Link>
          <nav aria-label="주요 메뉴">
            <ul className="flex items-center gap-[30px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`${linkText} hover:opacity-60`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      {/* Mobile / Tablet (<1080) */}
      <div className="flex h-[72px] items-center justify-between px-[23px] md:px-[60px] lg:hidden">
        <Link href="/" aria-label="HGU CCD 홈" className="text-current">
          <LogoCcd width={44.3855} />
        </Link>
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-m-2 grid size-[41px] place-items-center"
        >
          {open ? (
            <span aria-hidden className="relative block h-5 w-[25px]">
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          ) : (
            // 햄버거 — menu.svg 와 같은 25×22, 2px 선 3개 (색은 헤더 글자색)
            <span aria-hidden className="flex h-[22px] w-[25px] flex-col justify-between">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          data-lenis-prevent
          className={`fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto lg:hidden ${light ? "bg-white" : "bg-black"}`}
        >
          <nav aria-label="주요 메뉴" className="px-4 pt-6 pb-10 md:px-[60px]">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className={`border-b ${light ? "border-black/20" : "border-white/20"}`}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-telegraf text-[32px] leading-none tracking-[-0.03em] uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
