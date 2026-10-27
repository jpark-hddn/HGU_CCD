"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MOTION, REDUCED_MOTION } from "./motion";
import "./block-reveal.css";

/** 줄 등장과 같은 속도로, 내용과 버튼을 포함한 블록을 아래에서 보여 준다. */
export function BlockReveal({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const completed = useRef(false);
  const [state, setState] = useState<"pending" | "idle" | "revealing" | "revealed">("pending");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    let observer: IntersectionObserver | undefined;

    const sync = () => {
      observer?.disconnect();
      if (completed.current) return;
      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        completed.current = true;
        setState("revealed");
        return;
      }
      setState("idle");
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("revealing");
          observer?.disconnect();
        }
      }, { threshold: MOTION.revealThreshold });
      observer.observe(element);
    };

    sync();
    reducedMotion.addEventListener("change", sync);
    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  const style = {
    "--reveal-duration": `${MOTION.revealDuration}ms`,
    "--reveal-delay": `${index * MOTION.blockStagger}ms`,
    "--reveal-easing": MOTION.revealEasing,
  } as CSSProperties;

  return (
    <div ref={ref} data-reveal={state === "pending" ? "pending" : "block"} data-block-reveal-state={state} style={style}>
      <div
        className="block-reveal-content"
        onAnimationEnd={(event) => {
          if (event.target !== event.currentTarget || event.animationName !== "line-reveal") return;
          completed.current = true;
          setState("revealed");
        }}
      >
        {children}
      </div>
    </div>
  );
}
