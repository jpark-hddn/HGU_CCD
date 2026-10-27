/**
 * 메인 인터랙션 값 — 참고 구현(jpark-hddn/HGU_CCD js/pages/home-motion.js)과 동일.
 * 레이아웃 스타일을 건드리지 않고 여기서만 조절
 */
export const MOTION = {
  /** 한 줄이 올라오는 시간 (ms) */
  revealDuration: 1000,
  /** 줄 사이 간격 (ms) */
  lineStagger: 70,
  /** 블록 사이 간격 (ms) — 제목 → 영문 → 국문 */
  blockStagger: 100,
  revealEasing: "cubic-bezier(.22, 1, .36, 1)",
  /** 화면에 8% 들어오면 시작 */
  revealThreshold: 0.08,
  /** 배너·소개 영역이 스크롤의 75% 속도로 움직임 (= 25% 만큼 아래로 밀림) */
  scrollStrength: 0.25,
} as const;

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/** 페이지와 교수 상세 창에서 같은 스크롤 느낌을 사용한다. */
export const SMOOTH_SCROLL_OPTIONS = {
  autoRaf: true,
  lerp: 0.075,
  smoothWheel: true,
  wheelMultiplier: 1,
  syncTouch: false,
} as const;
