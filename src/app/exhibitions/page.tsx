import type { Metadata } from "next";
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
          <div className="pt-10 pb-[100px] md:hidden">
            <h1 className="sr-only">Exhibitions — 한동대학교 콘텐츠융합디자인학부 졸업 작품전</h1>
            <ExhibitionListMobile items={exhibitions} />
          </div>

          {/* Tablet+ */}
          <div className="hidden md:block">
            <h1 className="sr-only">Exhibitions — 한동대학교 콘텐츠융합디자인학부 졸업 작품전</h1>
            {exhibitions.map((item) => <ExhibitionRow key={item.year} item={item} />)}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
