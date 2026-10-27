"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { BannerVideo } from "@/types/banner";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(REDUCED_MOTION);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/** 영상 플레이리스트 — 한 편이 끝나면 다음 편으로, 마지막 다음엔 처음으로 */
export function HeroPlayer({ videos }: { videos: BannerVideo[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  const current = videos[index];
  const stopped = paused || reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (stopped) el.pause();
    else el.play().catch(() => {}); // 자동재생 차단 시 포스터 유지
  }, [index, stopped]);

  return (
    <>
      {/* 포스터 — 화면 크기별로 다른 이미지를 쓰려고 video poster 대신 picture 로 깔아둠 */}
      <picture key={`poster-${current.id}`}>
        <source media="(min-width: 768px)" srcSet={current.pc.poster} />
        <img src={current.mo.poster} alt="" className="absolute inset-0 block h-full w-full object-cover" />
      </picture>

      <video
        key={current.id}
        ref={ref}
        muted
        playsInline
        autoPlay={!stopped}
        preload="auto"
        onEnded={() => setIndex((i) => (i + 1) % videos.length)}
        aria-label={current.credit ? `학생 작품 영상 — ${current.credit}` : "학생 작품 영상"}
        className="absolute inset-0 block h-full w-full animate-[hero-fade_600ms_ease-out] object-cover"
      >
        <source media="(min-width: 768px)" src={current.pc.src} type="video/mp4" />
        <source src={current.mo.src} type="video/mp4" />
      </video>

      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "배너 영상 재생" : "배너 영상 일시정지"}
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100 md:right-6 md:bottom-6"
        >
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
              <path d="M2 1l9 5-9 5z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
              <path d="M2 1h3v10H2zM7 1h3v10H7z" fill="currentColor" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
