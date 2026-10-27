"use client";

import { useRef, type ReactNode } from "react";

/** 가로 스크롤 영역 — 트랙패드/휠은 기본 스크롤, 마우스는 드래그로 이동 */
export function ExhibitionRail({ id, children }: { id?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0 });

  return (
    <div
      ref={ref}
      id={id}
      role="region"
      aria-label="졸업 전시 목록 (가로 스크롤)"
      tabIndex={0}
      className="scrollbar-none flex w-full cursor-grab items-stretch gap-4 overflow-x-auto overscroll-x-contain select-none active:cursor-grabbing"
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        drag.current = { active: true, moved: false, startX: e.clientX, startLeft: ref.current.scrollLeft };
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d.active || !ref.current) return;
        const dx = e.clientX - d.startX;
        if (Math.abs(dx) > 4) d.moved = true;
        ref.current.scrollLeft = d.startLeft - dx;
      }}
      onPointerUp={() => (drag.current.active = false)}
      onPointerLeave={() => (drag.current.active = false)}
      onClickCapture={(e) => {
        if (drag.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          drag.current.moved = false;
        }
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}

/** Figma 253:1992 — 이전/다음 화살표 (30×30, 꺾쇠를 -45° 회전) */
function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <span aria-hidden className={`relative block size-[30px] ${dir === "prev" ? "-scale-x-100" : ""}`}>
      <span className="absolute top-[-1.83px] left-[1.56px] flex size-[33px] items-center justify-center">
        <span className="relative block size-[23.335px] -rotate-45">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/chevron.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
        </span>
      </span>
    </span>
  );
}

/** 가로 스크롤 영역을 한 화면의 80%씩 이동시키는 버튼 */
export function RailControls({ target }: { target: string }) {
  const move = (dir: 1 | -1) => {
    const el = document.getElementById(target);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button type="button" aria-controls={target} aria-label="이전 전시" onClick={() => move(-1)} className="hover:opacity-60">
        <Chevron dir="prev" />
      </button>
      <button type="button" aria-controls={target} aria-label="다음 전시" onClick={() => move(1)} className="hover:opacity-60">
        <Chevron dir="next" />
      </button>
    </div>
  );
}
