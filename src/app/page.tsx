import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { IntroScene } from "@/components/motion/IntroScene";
import { Curriculum } from "@/components/sections/Curriculum";
import { Exhibition } from "@/components/sections/Exhibition";
import { Faculties } from "@/components/sections/Faculties";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Networks } from "@/components/sections/Networks";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main className="flex-1">
        {/* 배너+소개는 스크롤보다 느리게 움직이고, 아래 흰 영역이 위로 덮으며 올라옴 */}
        <IntroScene>
          <Hero />
          <Intro />
        </IntroScene>
        <div className="relative z-[1] bg-white">
          <Container className="flex flex-col gap-20 py-10 md:gap-[100px] md:pt-[60px] md:pb-[100px]">
            <Curriculum />
            <Faculties />
          </Container>
          <Container className="pt-10 pb-10 md:pt-0 md:pb-[100px]">
            <Exhibition />
          </Container>
          {/* Figma: PC(6:328)는 NETWORKS 섹션 숨김, 모바일(6:2071)은 유지 */}
          <Container className="pt-10 md:pt-0 lg:hidden">
            <Networks />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
