"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { MOTION, REDUCED_MOTION } from "./motion";

/**
 * 배너 + 소개(검정) 영역. 스크롤보다 느리게 움직여서 아래 흰 섹션이 위로 덮으며 올라옴.
 * 일반 스크롤 그대로 — 휠 가로채기·스냅·추가 높이 없음. 흰 섹션은 relative z-[1] + 배경색 필요
 */
export function IntroScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;
    const reduce = matchMedia(REDUCED_MOTION);

    let frame = 0;
    let layoutFrame = 0;
    let shift = 0; // 화면 기준 px
    let top = 0;
    let bottom = 0;
    let start = 0;

    // body zoom(1280~1919px) 안에서 transform 은 zoom 배율이 곱해지므로 나눠서 적용
    const pageZoom = () => parseFloat(getComputedStyle(document.body).zoom) || 1;

    const update = () => {
      frame = 0;
      const travel = Math.max(0, Math.min(scrollY - start, bottom - start));
      shift = travel * MOTION.scrollStrength;
      scene.style.transform = `translate3d(0, ${(shift / pageZoom()).toFixed(3)}px, 0)`;
    };

    const measure = () => {
      layoutFrame = 0;
      const rect = scene.getBoundingClientRect();
      top = rect.top + scrollY - shift;
      bottom = top + rect.height;
      const mobile = matchMedia(`(max-width: ${MOTION.mobileMaxWidth}px)`).matches;
      // 모바일은 긴 소개글이 화면에 다 들어온 다음부터 겹치기 시작
      start = mobile ? Math.max(top, bottom - innerHeight) : top;
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (!layoutFrame) layoutFrame = requestAnimationFrame(measure);
    };

    let ro: ResizeObserver | null = null;
    const enable = () => {
      scene.style.willChange = "transform";
      measure();
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onResize, { passive: true });
      ro = new ResizeObserver(onResize);
      ro.observe(scene);
    };
    const disable = () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(layoutFrame);
      frame = layoutFrame = 0;
      shift = 0;
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      ro?.disconnect();
      scene.style.removeProperty("transform");
      scene.style.removeProperty("will-change");
    };
    const sync = () => {
      disable();
      if (!reduce.matches) enable();
    };

    sync();
    reduce.addEventListener("change", sync);
    return () => {
      reduce.removeEventListener("change", sync);
      disable();
    };
  }, []);

  return (
    <div ref={ref} className="relative z-0 bg-black">
      {children}
    </div>
  );
}
