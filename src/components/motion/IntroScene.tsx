"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { MOTION } from "./motion";
import "./intro-scene.css";

/** 검은 소개 영역 위로 다음 영역이 자연스럽게 올라오는 스크롤 효과. */
export function IntroScene({ children }: { children: ReactNode }) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boundary = boundaryRef.current;
    const scene = sceneRef.current;
    const viewport = viewportRef.current;
    if (!boundary || !scene || !viewport) return;
    let lastWidth = window.innerWidth;

    const measure = () => {
      const zoom = parseFloat(getComputedStyle(document.body).zoom) || 1;
      const rect = boundary.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + scene.getBoundingClientRect().height;
      const start = window.innerWidth <= 1079 ? Math.max(top, bottom - viewport.getBoundingClientRect().height) : top;
      boundary.style.setProperty("--intro-scene-height", `${scene.offsetHeight}px`);
      boundary.style.setProperty("--intro-scene-distance", `${scene.offsetHeight * MOTION.scrollStrength}px`);
      boundary.style.setProperty("--intro-range-start", `${start / zoom}px`);
      boundary.style.setProperty("--intro-range-end", `${bottom / zoom}px`);
      boundary.style.setProperty("--intro-distance", `${(bottom - start) * MOTION.scrollStrength / zoom}px`);
    };
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      measure();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(scene);
    observer.observe(viewport);
    window.addEventListener("resize", onResize, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={boundaryRef}
      className="intro-scene-boundary relative z-0"
      style={{
        "--intro-small-viewport-distance": `${MOTION.scrollStrength * 100}svh`,
        "--intro-viewport-distance": `${MOTION.scrollStrength * 100}vh`,
      } as CSSProperties}
    >
      <div ref={viewportRef} className="intro-viewport-measure" aria-hidden="true" />
      <div ref={sceneRef} className="intro-scene-content bg-black">
        {children}
      </div>
    </div>
  );
}
