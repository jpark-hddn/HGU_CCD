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
  const item = /^\d{4}$/.test(year) ? await getExhibition(Number(year)) : null;
  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-black">
        <ExhibitionDetail item={item} />
      </main>
      <Footer dark />
    </>
  );
}
