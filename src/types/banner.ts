/** 메인 배너 학생 작품 영상 한 편 */
export type BannerVideo = {
  id: string;
  /** 학생 이름 (크레딧) */
  credit?: string;
  /** PC(≥768px) — 세로 원본은 90° 회전해 가로로 인코딩한 파일 */
  pc: { src: string; poster: string };
  /** 모바일 — 원본 비율 */
  mo: { src: string; poster: string };
};
