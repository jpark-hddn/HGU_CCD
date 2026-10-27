"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { MOTION } from "./motion";
import "./intro-scene.css";

/** 검은 소개 영역 위로 다음 영역이 자연스럽게 올라오는 스크롤 효과. */
export function IntroScene({ children }: { children: ReactNode }) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 스크롤 애니메이션을 지원하지 않는 브라우저에서는 sticky로 겹침을 제공한다.
    if (CSS.supports("animation-timeline: view()") && CSS.supports("view-timeline-name: --intro-scene") && CSS.supports("animation-range: exit 0% exit 100%")) return;
    const boundary = boundaryRef.current;
    const scene = sceneRef.current;
    if (!boundary || !scene) return;

    const measure = () => {
      boundary.style.setProperty("--intro-scene-height", `${scene.offsetHeight}px`);
      boundary.style.setProperty("--intro-scene-distance", `${scene.offsetHeight * MOTION.scrollStrength}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boundaryRef}
      className="intro-scene-boundary relative z-0"
      style={{
        "--intro-strength-percent": `${MOTION.scrollStrength * 100}%`,
        "--intro-small-viewport-distance": `${MOTION.scrollStrength * 100}svh`,
        "--intro-viewport-distance": `${MOTION.scrollStrength * 100}vh`,
      } as CSSProperties}
    >
      <div ref={sceneRef} className="intro-scene-content bg-black">
        {children}
      </div>
    </div>
  );
}
