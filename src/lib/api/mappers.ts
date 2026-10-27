/**
 * 백엔드 응답(types/api.ts) → 화면용 타입 변환
 * 응답 형태가 바뀌면 여기만 고치면 되고, 컴포넌트는 그대로 둠
 */
import { EXHIBITIONS } from "@/data/exhibitions";
import { FACULTY } from "@/data/faculty";
import type {
  BannerDto,
  CourseDto,
  CurriculumTrackDto,
  ExhibitionDetailDto,
  ExhibitionDto,
  FacultyDetailDto,
  FacultyDto,
  FacultyRecordDto,
  RecordType,
} from "@/types/api";
import type { BannerVideo } from "@/types/banner";
import type { CourseGroup, Track } from "@/types/curriculum";
import type { Exhibition } from "@/types/exhibition";
import type { CvEntry, Faculty, FacultyDetail } from "@/types/faculty";

const bySort = (a: { sort_order?: number }, b: { sort_order?: number }) =>
  (a.sort_order ?? 0) - (b.sort_order ?? 0);

/** null·빈 문자열 → undefined */
const opt = (v: string | null | undefined) => (v ? v : undefined);
const nonEmpty = <T>(list: T[]) => (list.length ? list : undefined);

/* ───────── 배너 ───────── */

export function toBannerVideo(dto: BannerDto): BannerVideo {
  return {
    id: String(dto.id),
    credit: opt(dto.credit),
    pc: { src: dto.pc_video_url, poster: dto.pc_poster_url },
    mo: { src: dto.mo_video_url, poster: dto.mo_poster_url },
  };
}

/* ───────── 커리큘럼 ───────── */

function flatCourses(courses: CurriculumTrackDto["courses"]): CourseDto[] {
  if (Array.isArray(courses)) return courses;
  return Object.entries(courses).flatMap(([grade, list]) =>
    list.map((c) => ({ ...c, grade: Number(grade) })),
  );
}

const gradeLabel = (grade: number) => (grade === 0 ? "공통" : `${grade}학년`);

export function toTrack(dto: CurriculumTrackDto): Track {
  const courses = flatCourses(dto.courses).sort(bySort);
  const group = (grade: number): CourseGroup | null => {
    const names = courses.filter((c) => c.grade === grade).map((c) => c.name);
    return names.length ? { label: gradeLabel(grade), courses: names } : null;
  };
  const column = (...grades: number[]) =>
    grades.map(group).filter((g): g is CourseGroup => g !== null);

  return {
    name: dto.name_ko,
    summary: dto.description ?? "",
    // 데스크톱 4열: [공통 + 1학년] [2학년] [3학년] [4학년] — 시안 구성
    columns: [column(0, 1), column(2), column(3), column(4)],
  };
}

/* ───────── 교수진 ───────── */

/** 사진 위치 보정·URL 해시용 slug 는 프론트에서만 관리 → 국문명으로 매칭 */
const LOCAL_FACULTY = new Map(FACULTY.map((f) => [f.nameKo, f]));

function flatRecords(records: FacultyDetailDto["records"] | undefined): FacultyRecordDto[] {
  if (!records) return [];
  if (Array.isArray(records)) return records;
  return Object.entries(records).flatMap(([type, list]) =>
    (list ?? []).map((r) => ({ ...r, record_type: type as RecordType })),
  );
}

const toCv = (r: FacultyRecordDto): CvEntry => ({
  year: r.year_label ?? (r.year ? String(r.year) : undefined),
  text: r.content,
});

function toFacultyDetail(dto: FacultyDetailDto, records: FacultyRecordDto[]): FacultyDetail | undefined {
  const pick = (type: RecordType) => records.filter((r) => r.record_type === type).map(toCv);

  const publications = [
    { label: undefined, entries: pick("PUBLICATION") },
    { label: "Peer-reviewed Journal Articles", entries: pick("JOURNAL") },
    { label: "Proceeding _ Conference Presentations", entries: pick("CONFERENCE") },
  ].filter((p) => p.entries.length);

  const extra = [
    { title: "Affiliations", entries: pick("AFFILIATION") },
    { title: "Teaching", entries: pick("TEACHING") },
  ].filter((x) => x.entries.length);

  const contact =
    dto.office || dto.phone || dto.email
      ? { office: opt(dto.office), phone: opt(dto.phone), email: opt(dto.email) }
      : undefined;

  const detail: FacultyDetail = {
    // PC 모달 직함 줄 — "조교수 / 모빌리티디자인, 인간공학디자인". 전공 없으면 카드 직함 사용
    title: dto.specialty
      ? [dto.position_title, dto.specialty].filter(Boolean).join(" / ")
      : undefined,
    contact,
    intro: opt(dto.intro),
    major: nonEmpty(pick("EDUCATION")),
    researchInterest: opt(dto.research_interest),
    biography: nonEmpty(pick("CAREER")),
    awards: nonEmpty(pick("AWARD")),
    patents: nonEmpty(pick("PATENT")),
    publications: nonEmpty(publications),
    works: nonEmpty(pick("WORK")),
    extra: nonEmpty(extra),
  };

  // 상세 내용이 하나도 없으면 카드 클릭(모달) 비활성
  return Object.values(detail).some((v) => v !== undefined) ? detail : undefined;
}

export function toFaculty(dto: FacultyDto, detail?: FacultyDetailDto | null): Faculty {
  const local = LOCAL_FACULTY.get(dto.name_ko);
  const records = flatRecords(detail?.records).sort(bySort);
  const firstEducation = records.find((r) => r.record_type === "EDUCATION")?.content;

  return {
    slug: local?.slug ?? `f${dto.id}`,
    nameEn: dto.name_en ?? "",
    nameKo: dto.name_ko,
    position: opt(dto.position_title),
    education: dto.education_summary ?? firstEducation ?? "",
    image: dto.profile_image_url ?? local?.image ?? "",
    objectPosition: local?.objectPosition,
    detail: detail ? toFacultyDetail(detail, records) : undefined,
  };
}

/* ───────── 전시 ───────── */

/** 가로 스크롤 이미지 크기 등 Figma 시안 값은 프론트에서만 관리 → 연도로 매칭 */
const LOCAL_EXHIBITIONS = new Map(EXHIBITIONS.map((e) => [e.year, e]));

function parseDate(value: string | null) {
  const m = value?.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? { y: Number(m[1]), m: Number(m[2]), d: Number(m[3]) } : null;
}

/** "2026-11-04" ~ "2026-11-15" → "2026.11.4—11.15" (시안 표기) */
export function formatPeriod(start: string | null, end: string | null) {
  const s = parseDate(start);
  if (!s) return undefined;
  const head = `${s.y}.${s.m}.${s.d}`;
  const e = parseDate(end);
  if (!e || (e.y === s.y && e.m === s.m && e.d === s.d)) return head;
  const tail = e.y !== s.y ? `${e.y}.${e.m}.${e.d}` : `${e.m}.${e.d}`;
  return `${head}—${tail}`;
}

export function toExhibition(dto: ExhibitionDto | ExhibitionDetailDto): Exhibition {
  const local = LOCAL_EXHIBITIONS.get(dto.year);
  const participants = "participants" in dto ? dto.participants : [];

  const advisors = participants.filter((p) => !p.track).flatMap((p) => p.advisors);
  const alumni = participants
    .filter((p) => p.track)
    .map((p) => ({
      track: p.track!.name_en ?? p.track!.name_ko,
      advisors: p.advisors,
      graduates: p.graduates,
    }));

  const body = (dto.description ?? "")
    .split(/\n\s*\n/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({ text }));

  return {
    year: dto.year,
    name: dto.title_en,
    date: formatPeriod(dto.start_date, dto.end_date),
    venue: opt(dto.venue),
    subtitle: [
      dto.official_name ?? `${dto.year} 한동대학교 콘텐츠융합디자인학부 졸업 작품전`,
      dto.subtitle ?? (dto.title_ko ? `${dto.title_en} : ${dto.title_ko}` : dto.title_en),
    ],
    verse: dto.verse_text_ko
      ? {
          ref: dto.verse_ref_ko ?? "",
          text: dto.verse_text_ko,
          en: dto.verse_text_en ? { ref: dto.verse_ref_en ?? "", text: dto.verse_text_en } : undefined,
        }
      : undefined,
    archiveUrl: opt(dto.archive_url),
    advisors: nonEmpty(advisors),
    alumni: nonEmpty(alumni),
    body,
    image: dto.poster_image_url ?? local?.image ?? "",
    // [프론트 전용] 시안 값 유지
    size: local?.size,
    venueOnNewLine: local?.venueOnNewLine,
  };
}
