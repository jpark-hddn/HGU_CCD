// 더미 데이터 — USE_MOCK 모드에서 src/lib/api 가 반환. 백엔드 연결 후엔 참고용.
import type { CourseGroup, Track } from "@/types/curriculum";

const COMMON: CourseGroup = {
  label: "공통",
  courses: [
    "Computer Graphic Design 1",
    "Computer Graphic Design 2",
    "스마트 기술 집중강좌",
    "개별연구",
  ],
};

const FIRST_YEAR: CourseGroup = {
  label: "1학년",
  courses: ["드로잉 기초 1", "드로잉 기초 2"],
};

// TODO: 트랙별 소개 문구로 교체 (현재 Figma 시안의 공통 문구)
const SUMMARY =
  "졸업 후 진출분야로는 방송국, 전문디자인 회사, 기업 연구소, 뉴미디어 분야, 광고업계, 영상분야 등의 디자인과 직접 관련된 분야뿐 아니라 간접적으로 관련된 다양한 분야 등 그 수요는 점차 증가하고 있습니다. 졸업 후 보다 원활한 사회진출을 위하여 본 학부에서는 디자인 연구소의 설립과 국제적인 디자인 교류를 추진 중에 있습니다.";

export const TRACKS: Track[] = [
  {
    name: "시각디자인",
    summary: SUMMARY,
    columns: [
      [COMMON, FIRST_YEAR],
      [
        {
          label: "2학년",
          courses: [
            "시각디자인 기초",
            "Typography Design 1",
            "Editorial Design",
            "색채학 및 산업색채",
            "Design Thinking",
            "3D Modeling & Printing",
            "일러스트레이션",
            "Digital Photography",
          ],
        },
      ],
      [
        {
          label: "3학년",
          courses: [
            "Design for Behavioral Change",
            "브랜드디자인방법론",
            "타임 앤 스페이스 디자인",
            "Digital Motion Graphic Design 1",
            "그래픽 디자인",
            "Advanced Editorial Design",
            "Design Practice",
            "디자인과 신앙",
            "디자인역사",
            "디자인 진로 탐색",
          ],
        },
      ],
      [
        {
          label: "4학년",
          courses: [
            "시각 캡스톤 디자인 1 (커뮤니케이션 디자인)",
            "시각 캡스톤 디자인 2 (커뮤니케이션 디자인)",
            "시각 캡스톤 디자인 1 (서비스 디자인)",
            "시각 캡스톤 디자인 2 (서비스 디자인)",
          ],
        },
      ],
    ],
  },
  {
    name: "제품디자인",
    summary: SUMMARY,
    columns: [
      [COMMON, FIRST_YEAR],
      [
        {
          label: "2학년",
          courses: [
            "제품디자인기초 1",
            "제품디자인기초 2",
            "디자인 프리젠테이션 1",
            "디자인 프리젠테이션 2",
            "3D Modeling & Printing",
            "색채학 및 산업색채",
            "Design Thinking",
            "Digital Photography",
          ],
        },
      ],
      [
        {
          label: "3학년",
          courses: [
            "Design Practice",
            "AI Native Design",
            "스마트인터페이스디자인",
            "스마트인터랙션디자인",
            "Human-Centered Design",
            "Design Studio 1",
            "Design Studio 2",
            "3D Modeling Design",
            "디자인 리서치&기획 1",
            "디자인 리서치&기획 2",
            "AI융합디자인 프로젝트",
            "UX Design",
            "디자인과 신앙",
            "디자인역사",
            "디자인 진로 탐색",
          ],
        },
      ],
      [
        {
          label: "4학년",
          courses: [
            "Capstone Design 1 (제품 및 서비스 디자인)",
            "제품 및 서비스 디자인 기획",
            "포스트캡스톤 - 제품 및 서비스 디자인",
            "Capstone Design 2 (Product Design)",
          ],
        },
      ],
    ],
  },
];
