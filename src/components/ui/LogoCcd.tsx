/**
 * CCD 심볼. 원본 SVG(fill=currentColor)를 마스크로 써서 색을 바꿀 수 있게 함.
 * 헤더: 55.48 × 50 (흰색), 모바일 헤더: 44.39 × 40, 푸터: 49.23 × 44.37 (검정)
 */
export function LogoCcd({
  width,
  className = "",
  label,
}: {
  width: number;
  className?: string;
  label?: string;
}) {
  const height = (width * 50) / 55.4848;
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        width,
        height,
        maskImage: "url(/images/common/logo-ccd.svg)",
        WebkitMaskImage: "url(/images/common/logo-ccd.svg)",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
