// 더미 데이터 — USE_MOCK 모드에서 src/lib/api 가 반환. 백엔드 연결 후엔 참고용.
// 이름·직책·학력·순서: 교수진 정보 스프레드시트 '메인페이지' 시트 기준 (직책별 가나다 순, 학부장 맨 앞)
// 사진: 드라이브 '교수진 사진_1차 생성본' (26명 전체)
import type { Faculty } from "@/types/faculty";
import { FACULTY_DETAILS } from "./faculty-detail";

const LIST: Omit<Faculty, "detail">[] = [
  {
    slug: "lee-joongsup", nameEn: "Joongsup Lee", nameKo: "이중섭", position: "부교수/ 학부장",
    education: "Graphic Design M.F.A., Iowa State Univ., IA, US.",
    image: "/images/faculty/lee-joongsup.jpg",
  },
  {
    slug: "park-chansong", nameEn: "Chansong Park", nameKo: "박찬송", position: "조교수",
    education: "Transportation Design M.F.A., Umeå Inst. of Design, Sweden",
    image: "/images/faculty/park-chansong.jpg",
  },
  {
    slug: "lee-eunjong", nameEn: "Eun jong Lee", nameKo: "이은종", position: "교수/ 디자인연구소장",
    education: "KAIST, Industrial Design, Ph.D. (coursework completed)",
    image: "/images/faculty/lee-eunjong.jpg",
  },
  {
    slug: "yi-jaesun", nameEn: "Jae-Sun Yi", nameKo: "이재선", position: "교수",
    education: "Communication Design, M.S., Pratt Institute, NY, US",
    image: "/images/faculty/yi-jaesun.jpg",
  },
    {
    slug: "ju-youngmin", nameEn: "Youngmin Ju", nameKo: "주영민", position: "부교수",
    education: "Hongik University, Industrial Design, M.F.A.",
    image: "/images/faculty/ju-youngmin.jpg",
  },
  {
    slug: "choi-inwook", nameEn: "InWook Choi", nameKo: "최인욱", position: "교수/ HUSS미래디자인 사업단 단장",
    education: "Computer Graphics Design, M.F.A., Rochester Inst. of Tech., NY, US.",
    image: "/images/faculty/choi-inwook.jpg",
  },
  {
    slug: "lee-joohyun", nameEn: "Joohyun Lee", nameKo: "이주현", position: "초빙교수",
    education: "Graphic Design, M.A., Boston university, MA, US.",
    image: "/images/faculty/lee-joohyun.jpg",
  },
  {
    slug: "lee-jingu", nameEn: "Jin Gu Lee", nameKo: "이진구", position: "명예교수",
    education: "Hongik University, Advertising & Public Relations, Ph.D.",
    image: "/images/faculty/lee-jingu.jpg",
  },
  {
    slug: "cho-wonchol", nameEn: "Wonchol Cho", nameKo: "조원철", position: "명예교수",
    education: "Transportation Design M.A., Royal College of Art, U.K.",
    image: "/images/faculty/cho-wonchol.jpg",
  },
  {
    slug: "park-jangho", nameEn: "Park Jangho", nameKo: "박장호", position: "겸임교수",
    education: "Graphic Design M.A., School of the Art Inst. of Chicago, IL, US.",
    image: "/images/faculty/park-jangho.jpg",
  },
  {
    slug: "lee-junghoon", nameEn: "Lee Jeonghun", nameKo: "이정훈", position: "겸임교수",
    education: "Design Management, M.B.A., Aalto University, Finland",
    image: "/images/faculty/lee-junghoon.jpg",
  },
  {
    slug: "choi-sooshin", nameEn: "Sooshin Choi", nameKo: "최수신", position: "겸임교수",
    education: "Hongik University, Industrial Design, M.F.A.",
    image: "/images/faculty/choi-sooshin.jpg",
  },
  {
    slug: "kim-onyu", nameEn: "Kim Onyu", nameKo: "김온유", position: "객원교수",
    education: "Graphic Design M.F.A., California Inst. of the Arts, CA, US.",
    image: "/images/faculty/kim-onyu.jpg",
  },
  {
    slug: "shin-wonseok", nameEn: "Shin Wonseok", nameKo: "신원석", position: "객원교수",
    education: "Handong Global University, Culture & Media Design, M.E.",
    image: "/images/faculty/shin-wonseok.jpg",
  },
  {
    slug: "kim-hyungsoo", nameEn: "Kim Hyungsu", nameKo: "김형수", position: "강사",
    education: "Transportation Design M.F.A., Umeå Inst. of Design, Sweden",
    image: "/images/faculty/kim-hyungsoo.jpg",
  },
  {
    slug: "park-yena", nameEn: "Park Yena", nameKo: "박예나", position: "강사",
    education: "Paju Typography Institute (PaTI), Visual Communication Design",
    image: "/images/faculty/park-yena.jpg",
  },
  {
    slug: "son-sungchan", nameEn: "SeongChan Son", nameKo: "손성찬", position: "강사",
    education: "Landscape Design. Ph.D cand., Polytechnic Univ. of Catalonia, Spain",
    image: "/images/faculty/son-sungchan.jpg",
  },
  {
    slug: "song-yeeun", nameEn: "Song Yeeun", nameKo: "송예은", position: "강사",
    education: "UX Design M.Sc., Technische Hochschule Ingolstadt, German",
    image: "/images/faculty/song-yeeun.jpg",
  },
  {
    slug: "lee-youngsuk", nameEn: "Lee Yongseok", nameKo: "이용석", position: "강사",
    education: "CEO, COVENANT Inc. (Branding Agency)",
    image: "/images/faculty/lee-youngsuk.jpg",
  },
  {
    slug: "jang-inhee", nameEn: "Jang Inhui", nameKo: "장인희", position: "강사",
    education: "Hongik University, Painting, Ph.D.",
    image: "/images/faculty/jang-inhee.jpg",
  },
  {
    slug: "jang-hyunggyu", nameEn: "Jang Hyeonggyu", nameKo: "장형규", position: "강사",
    education: "Handong Global University, Culture & Media Design, M.E.",
    image: "/images/faculty/jang-hyunggyu.jpg",
  },
  {
    slug: "jung-kyungil", nameEn: "Jeong Gyeongil", nameKo: "정경일", position: "강사",
    education: "Hongik University, Service Design, M.F.A.",
    image: "/images/faculty/jung-kyungil.jpg",
  },
  {
    slug: "choi-changu", nameEn: "Choi Changu", nameKo: "최찬구", position: "강사",
    education: "CEO, UNGSoft (Media & Video Design)",
    image: "/images/faculty/choi-changu.jpg",
  },
  {
    slug: "hong-seungpyo", nameEn: "Hong Seungpyo", nameKo: "홍승표", position: "강사",
    education: "Keimyung University, Photographic Design, M.F.A.",
    image: "/images/faculty/hong-seungpyo.jpg",
  },
  {
    slug: "hwang-hye", nameEn: "Hwang Hye", nameKo: "황혜", position: "강사",
    education: "Hongik University, Design, Ph.D. program (in progress)",
    image: "/images/faculty/hwang-hye.jpg",
  },
  {
    slug: "pyeon-yunsang", nameEn: "Yunsang Pyeon", nameKo: "편윤생",
    education: "학사조교",
    image: "/images/faculty/pyeon-yunsang.jpg",
  },
];

export const FACULTY: Faculty[] = LIST.map((f) => ({ ...f, detail: FACULTY_DETAILS[f.slug] }));
