"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { MOTION, REDUCED_MOTION } from "./motion";

type Part = { text: string; className: string };

/**
 * 브라우저가 실제로 줄바꿈한 위치를 글자 단위로 측정.
 * 글자 범위로 나누기 때문에 폰트·자간·줄바꿈·밑줄(부모 span 클래스)이 화면 크기와 상관없이 그대로 유지됨
 */
function measureLines(root: HTMLElement): Part[][] {
  const lines: { top: number; parts: Part[] }[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    const className = parent && parent !== root ? parent.className : "";
    const text = node.textContent ?? "";
    let offset = 0;
    for (const char of text) {
      range.setStart(node, offset);
      offset += char.length;
      range.setEnd(node, offset);
      const rect = range.getBoundingClientRect();
      if (!rect.width || !rect.height) continue; // 접힌 공백
      let line = lines.at(-1);
      if (!line || Math.abs(line.top - rect.top) > 2) {
        line = { top: rect.top, parts: [] };
        lines.push(line);
      }
      const prev = line.parts.at(-1);
      if (prev && prev.className === className) prev.text += char;
      else line.parts.push({ text: char, className });
    }
  }
  return lines.map((l) => l.parts);
}

type Mode = "pending" | "static" | "lines";

/**
 * 텍스트가 한 줄씩 아래에서 위로 올라오며 등장.
 * - 폰트 로드 전엔 숨김 (globals.css, 4초 지나면 그냥 보임)
 * - prefers-reduced-motion 이면 원문 그대로
 * - 스크린리더는 원문 한 덩어리만 읽음
 */
export function LineReveal<T extends ElementType = "p">({
  as,
  index = 0,
  className,
  children,
  ...rest
}: {
  as?: T;
  /** 같은 영역 안 블록 순서 — blockStagger 만큼 늦게 시작 */
  index?: number;
  className?: string;
  children: ReactNode;
  lang?: string;
  id?: string;
}) {
  const Tag: ElementType = as ?? "p";
  const ref = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<Mode>("pending");
  const [lines, setLines] = useState<Part[][]>([]);
  const [label, setLabel] = useState("");
  const [state, setState] = useState<"idle" | "revealing" | "revealed">("idle");
  const [measureId, setMeasureId] = useState(0);
  const width = useRef(0);

  // 폰트가 다 로드된 뒤 측정 시작 (reduced motion 이면 원문 그대로)
  useEffect(() => {
    const reduce = matchMedia(REDUCED_MOTION);
    let alive = true;
    const sync = () => {
      if (reduce.matches) {
        setMode("static");
        return;
      }
      document.fonts.ready.then(() => alive && setMeasureId((n) => n + 1)).catch(() => alive && setMode("static"));
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => {
      alive = false;
      reduce.removeEventListener("change", sync);
    };
  }, []);

  // 원문이 그려진 상태에서 줄 측정 → 줄 단위 마크업으로 교체 (페인트 전에 처리)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || measureId === 0 || mode === "lines") return;
    if (matchMedia(REDUCED_MOTION).matches) return;
    width.current = el.getBoundingClientRect().width;
    setLabel((el.textContent ?? "").replace(/\s+/g, " ").trim());
    setLines(measureLines(el));
    setMode("lines");
  }, [measureId, mode]);

  // 너비가 바뀌면 원문으로 되돌려 다시 측정
  useEffect(() => {
    const el = ref.current;
    if (!el || mode !== "lines") return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.target.getBoundingClientRect().width;
      if (Math.abs(w - width.current) > 0.5) {
        setMode("pending");
        setMeasureId((n) => n + 1);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [mode]);

  // 화면에 들어오면 등장 시작 → 끝나면 revealed 로 고정
  useEffect(() => {
    const el = ref.current;
    if (!el || mode !== "lines" || state !== "idle") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setState("revealing");
      },
      { threshold: MOTION.revealThreshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode, state]);

  useEffect(() => {
    if (state !== "revealing") return;
    const total =
      index * MOTION.blockStagger + MOTION.revealDuration + Math.max(0, lines.length - 1) * MOTION.lineStagger;
    const timer = setTimeout(() => setState("revealed"), total);
    return () => clearTimeout(timer);
  }, [state, index, lines.length]);

  if (mode !== "lines") {
    return (
      <Tag ref={ref} className={className} data-reveal={mode} {...rest}>
        {children}
      </Tag>
    );
  }

  const vars = {
    "--reveal-duration": `${MOTION.revealDuration}ms`,
    "--line-stagger": `${MOTION.lineStagger}ms`,
    "--reveal-delay": `${index * MOTION.blockStagger}ms`,
    "--reveal-easing": MOTION.revealEasing,
  } as CSSProperties;

  return (
    <Tag ref={ref} className={className} data-reveal="lines" data-reveal-state={state} style={vars} {...rest}>
      <span className="sr-only">{label}</span>
      {lines.map((parts, i) => (
        <span key={i} aria-hidden className="reveal-mask">
          <span className="reveal-line" style={{ "--line-index": i } as CSSProperties}>
            {parts.map((p, j) =>
              p.className ? (
                <span key={j} className={p.className}>
                  {p.text}
                </span>
              ) : (
                p.text
              ),
            )}
          </span>
        </span>
      ))}
    </Tag>
  );
}
