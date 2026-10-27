import { getBannerVideos } from "@/lib/api/banner";
import { HeroPlayer } from "./HeroPlayer";

/**
 * 메인 배너 — 학생 작품 영상을 순서대로 재생.
 * 768px 이상: 1919 × 706 (세로 작품은 90° 회전본) / 미만: 402 × 582 (원본 비율)
 */
export async function Hero() {
  const videos = await getBannerVideos();
  if (videos.length === 0) return null;

  return (
    <section aria-label="메인 배너 — 학생 작품" className="relative w-full overflow-hidden bg-black">
      <div className="relative aspect-[402/582] w-full md:aspect-[1919/706]">
        <HeroPlayer videos={videos} />
      </div>
    </section>
  );
}
