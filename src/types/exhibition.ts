export type Exhibition = {
  year: number;
  name: string;
  /** 기간·장소 — 오래된 전시는 기록이 없어 비어 있을 수 있음 */
  date?: string;
  venue?: string;
  /** 부제 2줄 (Helvetica Neue Medium) */
  subtitle: [string, string];
  /** 주제 성경 구절 (모바일 카드에 표시) */
  verse?: {
    ref: string;
    text: string;
    /** 영문 구절 (전시 목록·상세) */
    en?: { ref: string; text: string };
  };
  /** 온라인 전시 페이지 주소 — 있으면 상세에 GO TO ARCHIVE 버튼 표시 */
  archiveUrl?: string;
  /** 트랙 구분 없이 학부 전체로 기록된 지도교수 (2007년 이전 등) */
  advisors?: string[];
  /** 졸업생 명단 (트랙별). advisors 가 비면 졸업생만 표시 */
  alumni?: { track: string; advisors: string[]; graduates: string[] }[];
  /** 본문. emphasis = Pretendard Medium (성경 구절 등) */
  body: { text: string; emphasis?: boolean }[];
  /** 포스터 이미지 URL — 더미는 /images/..., 백엔드 연결 후엔 서버가 주는 URL */
  image: string;
  /**
   * [프론트 전용] 데스크톱 가로 스크롤 이미지 크기(px) — Figma 시안 값.
   * 백엔드 응답에 없으면 기본 크기로 표시됨.
   */
  size?: { width: number; height: number };
  /** [프론트 전용] 날짜와 장소를 줄바꿈으로 분리 (2016 시안) */
  venueOnNewLine?: boolean;
};
