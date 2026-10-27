"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/site";
import { LineReveal } from "@/components/motion/LineReveal";
import { REDUCED_MOTION } from "@/components/motion/motion";
import { Container } from "@/components/ui/Container";
import { LogoCcd } from "@/components/ui/LogoCcd";
import "./mobile-menu-close.css";
import "./header-scroll.css";

const linkText = "font-pretendard text-[14px] uppercase leading-none tracking-[-0.02em]";

/** dark: 검정 배경(기본, 메인·전시 상세) / light: 흰 배경(전시 목록) */
type Tone = "dark" | "light";

export function Header({ tone = "dark" }: { tone?: Tone }) {
  const light = tone === "light";
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [hidden, setHidden] = useState(false);

  const startCloseSpin = () => {
    if (open && !window.matchMedia(REDUCED_MOTION).matches) setSpinning(true);
  };

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let turningPoint = previousY;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - previousY;
      if (Math.abs(delta) < 0.1) return;

      const nextDirection = delta > 0 ? 1 : -1;
      if (nextDirection !== direction) {
        direction = nextDirection;
        turningPoint = previousY;
      }
      previousY = y;

      if (open || y < 8) setHidden(false);
      else if (direction > 0 && y - turningPoint >= 12) setHidden(true);
      else if (direction < 0 && turningPoint - y >= 8) setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setSpinning(false); }
    };
    const onResize = () => {
      if (window.innerWidth >= 1080) { setOpen(false); setSpinning(false); }
    };
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
    <header
      data-header-hidden={hidden && !open ? "true" : undefined}
      data-menu-open={open ? "true" : undefined}
      onFocusCapture={() => setHidden(false)}
      className={`site-header sticky top-0 z-50 ${light ? "bg-white text-black" : "bg-black text-white"}`}
    >
      {/* Desktop (≥1080) */}
      <Container className="hidden h-[82px] items-center lg:flex">
        <div className="flex items-center gap-[60px]">
          <Link href="/" aria-label="HGU CCD 홈" className="text-current">
            <LogoCcd width={55.4848} />
          </Link>
          <nav aria-label="주요 메뉴">
            <ul className="flex items-center gap-[30px]">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} className={`block ${linkText} hover:opacity-60`}>
                    <LineReveal as="span" index={index} className="block">
                      {item.label}
                    </LineReveal>
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
          onClick={() => { setOpen((v) => !v); setSpinning(false); }}
          onPointerEnter={(event) => { if (event.pointerType !== "touch") startCloseSpin(); }}
          onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) startCloseSpin(); }}
          onAnimationEnd={(event) => { if (event.animationName === "mobile-close-spin") setSpinning(false); }}
          data-spinning={spinning ? "true" : undefined}
          className="-m-2 grid size-[41px] place-items-center"
        >
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 25 25" fill="none" className="mobile-close-icon block size-[25px]">
              <line className="mobile-close-backslash" x1="3.66" y1="3.66" x2="21.34" y2="21.34" stroke="currentColor" strokeWidth="2" pathLength={1} />
              <line className="mobile-close-slash" x1="21.34" y1="3.66" x2="3.66" y2="21.34" stroke="currentColor" strokeWidth="2" pathLength={1} />
            </svg>
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
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href} className={`border-b ${light ? "border-black/20" : "border-white/20"}`}>
                  <a
                    href={item.href}
                    onClick={() => { setOpen(false); setSpinning(false); }}
                    className="block py-4 font-telegraf text-[32px] leading-none tracking-[-0.03em] uppercase"
                  >
                    <LineReveal as="span" index={index} className="block">
                      {item.label}
                    </LineReveal>
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
