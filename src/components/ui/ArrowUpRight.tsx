/* eslint-disable @next/next/no-img-element -- 아이콘 SVG는 최적화 대상이 아님 */

const SRC = {
  white: "/icons/arrow-up-right.svg",
  black: "/icons/arrow-up-right-black.svg",
  accent: "/icons/arrow-up-right-red.svg",
} as const;

/**
 * Figma: 가로 화살표(→)를 -45° 회전시켜 정사각 박스에 클리핑한 아이콘.
 * size 14(헤더·모바일 More) / 20(데스크톱 More) 기준 비율 그대로 스케일.
 */
export function ArrowUpRight({
  size = 14,
  color = "black",
  className = "",
}: {
  size?: number;
  color?: keyof typeof SRC;
  className?: string;
}) {
  const k = size / 14;
  return (
    <span
      aria-hidden
      className={`relative inline-block shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute flex items-center justify-center"
        style={{ left: -2.78 * k, top: -3 * k, width: 19.569 * k, height: 19.569 * k }}
      >
        <span className="relative block -rotate-45" style={{ width: 13.361 * k, height: 14.314 * k }}>
          <img
            src={SRC[color]}
            alt=""
            className="absolute block max-w-none"
            style={{ left: 0, top: "-2.23%", width: "104.77%", height: "104.46%" }}
          />
        </span>
      </span>
    </span>
  );
}
