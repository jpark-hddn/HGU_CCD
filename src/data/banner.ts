// 더미 데이터 — USE_MOCK 모드에서 src/lib/api 가 반환. 백엔드 연결 후엔 참고용.
// 영상: 드라이브 '메인배너 (학생작품)' — 무음, H.264 재인코딩 / 07(장민희)은 원본이 가로라 회전 없음
import type { BannerVideo } from "@/types/banner";

export const BANNER_VIDEOS: BannerVideo[] = [
  {
    id: "01", credit: "박지우", 
    pc: { src: "/videos/banner/01-pc.mp4", poster: "/images/banner/01-pc.jpg" },
    mo: { src: "/videos/banner/01-mo.mp4", poster: "/images/banner/01-mo.jpg" },
  },
  {
    id: "02", /* TODO: 작가 확인 (AR2.mp4) */ 
    pc: { src: "/videos/banner/02-pc.mp4", poster: "/images/banner/02-pc.jpg" },
    mo: { src: "/videos/banner/02-mo.mp4", poster: "/images/banner/02-mo.jpg" },
  },
  {
    id: "03", credit: "박다민", 
    pc: { src: "/videos/banner/03-pc.mp4", poster: "/images/banner/03-pc.jpg" },
    mo: { src: "/videos/banner/03-mo.mp4", poster: "/images/banner/03-mo.jpg" },
  },
  {
    id: "04", credit: "정예한", 
    pc: { src: "/videos/banner/04-pc.mp4", poster: "/images/banner/04-pc.jpg" },
    mo: { src: "/videos/banner/04-mo.mp4", poster: "/images/banner/04-mo.jpg" },
  },
  {
    id: "05", credit: "김혜빈", 
    pc: { src: "/videos/banner/05-pc.mp4", poster: "/images/banner/05-pc.jpg" },
    mo: { src: "/videos/banner/05-mo.mp4", poster: "/images/banner/05-mo.jpg" },
  },
  {
    id: "06", credit: "오예서", 
    pc: { src: "/videos/banner/06-pc.mp4", poster: "/images/banner/06-pc.jpg" },
    mo: { src: "/videos/banner/06-mo.mp4", poster: "/images/banner/06-mo.jpg" },
  },
  {
    id: "07", credit: "장민희", 
    pc: { src: "/videos/banner/07-pc.mp4", poster: "/images/banner/07-pc.jpg" },
    mo: { src: "/videos/banner/07-mo.mp4", poster: "/images/banner/07-mo.jpg" },
  },
  {
    id: "08", credit: "송주희", 
    pc: { src: "/videos/banner/08-pc.mp4", poster: "/images/banner/08-pc.jpg" },
    mo: { src: "/videos/banner/08-mo.mp4", poster: "/images/banner/08-mo.jpg" },
  },
];
