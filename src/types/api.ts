/**
 * 백엔드 응답 타입 — 「CCD 학부 홈페이지 기능 명세서 · ERD」(2026.10.16) 기준
 *
 * - 필드명은 명세서의 DB 컬럼명(snake_case)을 그대로 가정
 * - ★ 표시는 명세서에 없어서 백엔드에 추가 요청한 필드
 * - 화면용 타입(types/banner·curriculum·exhibition·faculty)으로의 변환은 lib/api/mappers.ts
 *
 * TODO(백엔드): 응답 JSON 예시 받으면 이 파일과 mappers.ts 만 맞추면 됨
 */

/* ───────── 공통 ───────── */

export type TrackDto = {
  id: number;
  /** VISUAL | PRODUCT */
  code: string;
  name_ko: string;
  /** Alumni 제목에 쓰임 (Visual Communication Design) */
  name_en: string | null;
  /** 모바일 커리큘럼 트랙 설명 */
  description: string | null;
  sort_order: number;
};

/* ───────── GET /api/banners ★ ───────── */

export type BannerDto = {
  id: number;
  /** 작가(학생) 이름 */
  credit: string | null;
  pc_video_url: string;
  pc_poster_url: string;
  mo_video_url: string;
  mo_poster_url: string;
  sort_order: number;
};

/* ───────── GET /api/curriculum ───────── */

export type CourseDto = {
  /** 0 = 공통, 1~4 = 학년 */
  grade: number;
  name: string;
  sort_order: number;
};

/** 과목은 배열로 오거나 학년별로 묶여(`{ "0": [...], "1": [...] }`) 올 수 있음 — 둘 다 처리 */
export type CurriculumTrackDto = TrackDto & {
  courses: CourseDto[] | Record<string, Omit<CourseDto, "grade">[]>;
};

/* ───────── GET /api/faculties, /api/faculties/{id} ───────── */

export type FacultyType = "PROFESSOR" | "EMERITUS" | "LECTURER";

export type FacultyDto = {
  id: number;
  track_id: number | null;
  name_ko: string;
  name_en: string | null;
  faculty_type: FacultyType;
  /** 카드 직함 — "부교수/ 학부장" */
  position_title: string | null;
  /** ★ 카드 학력 한 줄 — 없으면 EDUCATION 이력 첫 줄 사용 */
  education_summary?: string | null;
  profile_image_url: string | null;
  sort_order: number;
};

export type RecordType =
  | "EDUCATION"
  | "CAREER"
  | "AWARD"
  | "JOURNAL"
  | "CONFERENCE"
  | "PATENT"
  | "WORK"
  /** ★ 소제목 없는 논문 묶음 (학술지·학술대회 구분이 없는 교수님) */
  | "PUBLICATION"
  /** ★ */
  | "AFFILIATION"
  /** ★ */
  | "TEACHING";

export type FacultyRecordDto = {
  record_type: RecordType;
  year: number | null;
  /** 화면에 보이는 연도 문구 — "2019 - 2025" */
  year_label: string | null;
  content: string;
  sort_order: number;
};

export type FacultyDetailDto = FacultyDto & {
  /** "그래픽디자인, 서비스디자인" */
  specialty: string | null;
  office: string | null;
  phone: string | null;
  email: string | null;
  intro: string | null;
  research_interest: string | null;
  /** 배열로 오거나 record_type 별로 묶여 올 수 있음 — 둘 다 처리 */
  records: FacultyRecordDto[] | Partial<Record<RecordType, Omit<FacultyRecordDto, "record_type">[]>>;
};

/* ───────── GET /api/exhibitions, /api/exhibitions/{year} ───────── */

export type ExhibitionDto = {
  id: number;
  year: number;
  title_en: string;
  title_ko: string | null;
  /** "2026 한동대학교 콘텐츠융합디자인학부 졸업 작품전" */
  official_name: string | null;
  /** ★ 화면 둘째 줄 그대로 — "Filling to Flow : 채우심으로 말미암아" */
  subtitle?: string | null;
  /** "YYYY-MM-DD" */
  start_date: string | null;
  end_date: string | null;
  venue: string | null;
  verse_ref_ko: string | null;
  verse_text_ko: string | null;
  verse_ref_en: string | null;
  verse_text_en: string | null;
  /** 문단은 빈 줄로 구분 */
  description: string | null;
  poster_image_url: string | null;
  archive_url: string | null;
};

/** 트랙별 지도교수·졸업생. track 이 null 이면 학부 전체 지도교수 (2007년 이전) */
export type ExhibitionParticipantsDto = {
  track: Pick<TrackDto, "code" | "name_ko" | "name_en"> | null;
  /** ★ 교수 이름 — 퇴임 교수도 있어서 이름으로 받음 */
  advisors: string[];
  graduates: string[];
};

export type ExhibitionDetailDto = ExhibitionDto & {
  participants: ExhibitionParticipantsDto[];
};
