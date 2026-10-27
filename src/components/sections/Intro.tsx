import { Container } from "@/components/ui/Container";
import { LineReveal } from "@/components/motion/LineReveal";

/** 배너 아래 학부 소개 — 제목 → 영문 → 국문 순으로 한 줄씩 등장 */
export function Intro() {
  return (
    <section id="about" aria-label="학부 소개" className="bg-black text-white 2xl:min-h-[960px]">
      <Container className="flex flex-col gap-[100px] pt-10 pb-[90px] md:flex-row md:justify-between md:gap-[60px] md:pt-[60px] md:pb-[100px]">
        <LineReveal
          as="h1"
          index={0}
          className="font-telegraf text-[36px] leading-[1.2] tracking-[-0.02em] md:min-w-0 md:flex-1 lg:text-[40px] 2xl:w-[716px] 2xl:flex-none 2xl:text-[64px]"
        >
          <span className="underline decoration-from-font underline-offset-auto">
            The School of Content Convergence Design:
          </span>
          <br />
          Cultivating globally minded Christian design leaders who creatively solve problems and transform the world.
        </LineReveal>

        <div className="flex flex-col gap-6 md:w-[320px] md:shrink-0 lg:w-[371px] 2xl:w-[522px]">
          <LineReveal index={1} className="font-telegraf text-[16px] leading-[1.2] tracking-[-0.02em] 2xl:text-[24px]">
            The School of Content Convergence Design at Handong Global University cultivates Christian design leaders
            with global perspectives, interdisciplinary expertise, and creative problem-solving skills. Graduates pursue
            careers across broadcasting, design, new media, advertising, and video production. The school also supports
            students’ growth through design research and international exchange.
          </LineReveal>
          <LineReveal
            index={2}
            lang="ko"
            className="text-[13px] leading-[1.6] tracking-[-0.02em] lg:text-[12px] 2xl:text-[17px]"
          >
            한동대학교 콘텐츠융합디자인학부는 국제적 감각과 창의적 문제 해결 능력을 갖춘 크리스천 디자인 리더를
            양성합니다. 졸업생들은 방송, 디자인, 뉴미디어, 광고, 영상 제작 등 다양한 분야로 진출하며, 학부는 디자인
            연구와 국제 교류를 통해 학생들의 성장을 지원합니다.
          </LineReveal>
        </div>
      </Container>
    </section>
  );
}
