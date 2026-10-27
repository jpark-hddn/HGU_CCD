import type { Metadata } from "next";
import { Fragment } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { ExhibitionListMobile } from "@/components/exhibitions/ExhibitionListMobile";
import { ExhibitionRow } from "@/components/exhibitions/ExhibitionRow";
import { getExhibitions } from "@/lib/api/exhibitions";

export const metadata: Metadata = {
  title: "Exhibitions | HGU CCD",
  description: "한동대학교 콘텐츠융합디자인학부 졸업 작품전 아카이브",
};

/** 전체 전시 목록 — Figma PC 6:1202 / 모바일 64:7150 */
export default async function ExhibitionsPage() {
  const exhibitions = await getExhibitions();

  return (
    <>
      <Header tone="light" />
      <main className="flex-1">
        <Container>
          {/* Mobile */}
          <div className="flex flex-col gap-5 pt-10 pb-10 md:hidden">
            <div className="flex flex-col gap-3 border-b border-line pb-0">
              <h1 className="font-telegraf text-[34px] leading-none tracking-[-0.03em]">Exhibitions</h1>
              <p className="pb-3 text-[16px] leading-none tracking-[-0.03em]">한동대학교 콘텐츠융합디자인학부 졸업 작품전</p>
            </div>
            <ExhibitionListMobile items={exhibitions} />
          </div>

          {/* Tablet+ */}
          <div className="hidden md:block">
            <h1 className="sr-only">Exhibitions — 한동대학교 콘텐츠융합디자인학부 졸업 작품전</h1>
            {exhibitions.map((item, i) => (
              <Fragment key={item.year}>
                {i > 0 && <hr className="border-0 border-t border-line" />}
                <ExhibitionRow item={item} reverse={i % 2 === 1} />
              </Fragment>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
