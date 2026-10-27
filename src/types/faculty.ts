export type Faculty = {
  /** URL·이미지 파일명에 쓰는 고유 키 (예: lee-joongsup) */
  slug: string;
  nameEn: string;
  nameKo: string;
  /** 직함 — 카드에 "국문명, 직함" 으로 표시. 없으면 국문명만 */
  position?: string;
  /** 대표 학력/경력 한 줄 */
  education: string;
  /** 프로필 사진 URL — 더미는 /images/..., 백엔드 연결 후엔 서버가 주는 URL */
  image: string;
  /** [프론트 전용] 사진 위치 보정 (object-position) */
  objectPosition?: string;
  /** 상세 모달 정보 */
  detail?: FacultyDetail;
};

/** CV 한 줄 — 왼쪽 연도 칸 + 내용 */
export type CvEntry = { year?: string; text: string };

/** 교수 상세(모달) 정보. 없는 항목은 화면에서 생략 */
export type FacultyDetail = {
  /** PC 모달 직함 줄 (없으면 카드 직함) */
  title?: string;
  contact?: { office?: string; phone?: string; email?: string };
  /** 소개 문단 */
  intro?: string;
  /** 없으면 카드의 education 한 줄을 표시 */
  major?: CvEntry[];
  researchInterest?: string;
  biography?: CvEntry[];
  awards?: CvEntry[];
  patents?: CvEntry[];
  /** label: 소분류 (Peer-reviewed Journal Articles 등). 없으면 제목 없이 목록만 */
  publications?: { label?: string; entries: CvEntry[]; note?: string }[];
  works?: CvEntry[];
  /** 시트에 자유롭게 추가된 항목 (Affiliations, Teaching 등) — Awards 다음에 표시 */
  extra?: { title: string; entries: CvEntry[] }[];
};
