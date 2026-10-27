export type CourseGroup = { label: string; courses: string[] };

export type Track = {
  name: string;
  /** 모바일에서 과목 리스트 대신 보여주는 소개 문단 */
  summary: string;
  /** 데스크톱 4열 — 각 열은 1개 이상의 학년 그룹 */
  columns: CourseGroup[][];
};
