"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { BannerVideo } from "@/types/banner";
import "./hero-player.css";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const FADE_SECONDS = 1.1;

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

/** 다음 영상을 미리 준비하고, 이전 영상 위로 부드럽게 겹쳐 보여 준다. */
export function HeroPlayer({ videos }: { videos: BannerVideo[] }) {
  const [slots, setSlots] = useState<[number, number]>([0, videos.length > 1 ? 1 : 0]);
  const [activeSlot, setActiveSlot] = useState(0);
  const [incomingSlot, setIncomingSlot] = useState<number | null>(null);
  const [ready, setReady] = useState<[boolean, boolean]>([false, false]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const transitionInProgress = useRef(false);
  const stoppedRef = useRef(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = videos[slots[activeSlot]];
  const stopped = paused || reducedMotion;

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
  }, []);

  // 일부 브라우저는 React가 연결되기 전에 첫 프레임을 불러올 수 있다.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setReady((value) => value.map((item, slot) => item || (videoRefs.current[slot]?.readyState ?? 0) >= 2) as [boolean, boolean]);
    });
    return () => cancelAnimationFrame(frame);
  }, [slots]);

  const finishTransition = useCallback((nextSlot: number) => {
    if (!transitionInProgress.current) return;
    transitionInProgress.current = false;
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    const previousSlot = 1 - nextSlot;
    setReady((value) => value.map((item, slot) => slot === previousSlot ? false : item) as [boolean, boolean]);
    setSlots((value) => value.map((item, slot) => slot === previousSlot ? (value[nextSlot] + 1) % videos.length : item) as [number, number]);
    setActiveSlot(nextSlot);
    setIncomingSlot(null);
  }, [videos.length]);

  const startTransition = useCallback(() => {
    if (videos.length < 2 || stoppedRef.current || transitionInProgress.current) return;
    const active = videoRefs.current[activeSlot];
    const nextSlot = 1 - activeSlot;
    const next = videoRefs.current[nextSlot];
    const ending = active && (active.ended || (Number.isFinite(active.duration) && active.duration - active.currentTime <= FADE_SECONDS));
    if (!ending || !next || next.readyState < 2) return;

    transitionInProgress.current = true;
    next.play().then(() => {
      if (stoppedRef.current) {
        next.pause();
        transitionInProgress.current = false;
        return;
      }
      setReady((value) => value.map((item, slot) => slot === nextSlot ? true : item) as [boolean, boolean]);
      setIncomingSlot(nextSlot);
      // 브라우저가 transitionend를 보내지 않아도 재생이 멈추지 않도록 한다.
      transitionTimer.current = setTimeout(() => finishTransition(nextSlot), 1300);
    }).catch(() => { transitionInProgress.current = false; });
  }, [activeSlot, finishTransition, videos.length]);

  useEffect(() => {
    stoppedRef.current = stopped;
    videoRefs.current.forEach((video, slot) => {
      if (!video) return;
      if (stopped || (slot !== activeSlot && slot !== incomingSlot)) video.pause();
      else if (!video.ended) video.play().catch(() => {});
    });
    if (!stopped && incomingSlot === null && videoRefs.current[activeSlot]?.ended) startTransition();
  }, [activeSlot, incomingSlot, slots, startTransition, stopped]);

  return (
    <>
      {/* 포스터 — 화면 크기별로 다른 이미지를 쓰려고 video poster 대신 picture 로 깔아둠 */}
      <picture key={`poster-${current.id}`}>
        <source media="(min-width: 768px)" srcSet={current.pc.poster} />
        <img src={current.mo.poster} alt="" className="absolute inset-0 block h-full w-full object-cover" />
      </picture>

      {(videos.length > 1 ? slots : [slots[0]]).map((videoIndex, slot) => {
        const video = videos[videoIndex];
        const visible = ready[slot] && (slot === activeSlot || slot === incomingSlot);
        return (
          <video
            key={`${slot}-${video.id}`}
            ref={(element) => { videoRefs.current[slot] = element; }}
            muted
            playsInline
            autoPlay={!stopped && slot === activeSlot}
            loop={videos.length === 1}
            preload="auto"
            onLoadedData={() => setReady((value) => value.map((item, i) => i === slot ? true : item) as [boolean, boolean])}
            onCanPlay={() => {
              setReady((value) => value.map((item, i) => i === slot ? true : item) as [boolean, boolean]);
              if (slot !== activeSlot) startTransition();
            }}
            onPlaying={() => setReady((value) => value.map((item, i) => i === slot ? true : item) as [boolean, boolean])}
            onTimeUpdate={() => { if (slot === activeSlot) startTransition(); }}
            onEnded={() => { if (slot === activeSlot) startTransition(); }}
            onTransitionEnd={(event) => {
              if (slot === incomingSlot && event.propertyName === "opacity") finishTransition(slot);
            }}
            aria-hidden={slot !== activeSlot}
            aria-label={video.credit ? `학생 작품 영상 — ${video.credit}` : "학생 작품 영상"}
            style={{ opacity: visible ? 1 : 0, zIndex: slot === incomingSlot ? 2 : slot === activeSlot ? 1 : 0 }}
            className="hero-video absolute inset-0 block h-full w-full object-cover"
          >
            <source media="(min-width: 768px)" src={video.pc.src} type="video/mp4" />
            <source src={video.mo.src} type="video/mp4" />
          </video>
        );
      })}

      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "배너 영상 재생" : "배너 영상 일시정지"}
          className="absolute right-3 bottom-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100 md:right-6 md:bottom-6"
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
