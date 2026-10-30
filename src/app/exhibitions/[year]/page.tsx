import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ExhibitionDetail } from "@/components/exhibitions/ExhibitionDetail";
import { getExhibition, getExhibitions } from "@/lib/api/exhibitions";

export async function generateStaticParams() {
  const exhibitions = await getExhibitions();
  return exhibitions.map((e) => ({ year: String(e.year) }));
}

export async function generateMetadata({ params }: PageProps<"/exhibitions/[year]">): Promise<Metadata> {
  const { year } = await params;
  const item = await getExhibition(Number(year));
  if (!item) return {};
  return {
    title: `${item.name} (${item.year}) | HGU CCD`,
    description: `${item.subtitle[0]} — ${item.subtitle[1]}`,
  };
}

export default async function ExhibitionPage({ params }: PageProps<"/exhibitions/[year]">) {
  const { year } = await params;
  const [item, exhibitions] = await Promise.all([
    /^\d{4}$/.test(year) ? getExhibition(Number(year)) : Promise.resolve(null),
    getExhibitions(),
  ]);
  if (!item) notFound();
  const ordered = [...exhibitions].sort((a, b) => b.year - a.year);
  const index = ordered.findIndex((exhibition) => exhibition.year === item.year);
  const previous = index >= 0 ? ordered[index + 1] : undefined;
  const next = index > 0 ? ordered[index - 1] : undefined;

  return (
    <>
      <Header />
      <main className="exhibition-detail-page flex-1 bg-black">
        <ExhibitionDetail key={item.year} item={item} previous={previous} next={next} />
      </main>
      <Footer dark />
      {/* 하단 고정 이동 버튼이 푸터를 가리지 않도록 마지막 여백을 둔다. */}
      <div aria-hidden="true" className="h-[calc(76px+env(safe-area-inset-bottom))] bg-black lg:hidden" />
    </>
  );
}
