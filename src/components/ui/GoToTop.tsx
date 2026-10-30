"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./go-to-top.css";

/** Find the page background below the button, ignoring transparent layers. */
function backgroundIsDark(button: HTMLButtonElement) {
  const rect = button.getBoundingClientRect();
  const elements = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  const element = elements.find((item) => item.tagName !== "NEXTJS-PORTAL" && item !== button && !button.contains(item));

  for (let current = element; current; current = current.parentElement ?? undefined) {
    const color = getComputedStyle(current).backgroundColor;
    const match = color.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/);
    if (!match || (match[4] !== undefined && Number(match[4]) < 0.5)) continue;
    const [, red, green, blue] = match.map(Number);
    return red * 0.299 + green * 0.587 + blue * 0.114 < 128;
  }
  return false;
}

export function GoToTop() {
  const pathname = usePathname();
  const isExhibitionDetail = /^\/exhibitions\/[^/]+\/?$/.test(pathname);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const button = buttonRef.current;
      if (!button) return;
      setVisible(window.scrollY > Math.min(window.innerHeight * 0.5, 400));
      setDarkBackground(backgroundIsDark(button));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (isExhibitionDetail) return null;

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="페이지 맨 위로 이동"
      tabIndex={visible ? 0 : -1}
      data-visible={visible}
      data-dark-background={darkBackground}
      className="go-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
    >
      {/* Figma 화살표 원본을 지정된 방향으로 배치한다. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/go-to-top.svg" width="14.1366" height="14.1366" alt="" />
    </button>
  );
}
