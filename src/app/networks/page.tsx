import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { NETWORK_GROUPS } from "@/data/site";

export const metadata: Metadata = {
  title: "Networks | HGU CCD",
  description: "한동대학교 콘텐츠융합디자인학부 공식 채널과 관련 링크 모음",
};

function NetworkLink({ href, label }: { href: string; label: string }) {
  const className = "underline decoration-from-font hover:opacity-60";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {label}
    </a>
  );
}

/** 링크 허브 — Figma PC 6:817 / 모바일 6:1619 */
export default function NetworksPage() {
  return (
    <>
      <Header tone="light" />
      <main className="flex-1">
        <div className="relative aspect-[402/582] w-full overflow-hidden bg-neutral-200 md:aspect-[1919/706]">
          <Image
            src="/images/common/networks.png"
            alt="한동대학교 느헤미야홀 전경"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-[50%_26%]"
          />
        </div>
        <Container className="flex flex-col gap-10 pt-10 pb-10 md:pt-[60px] md:pb-[100px]">
          <h1 className="font-telegraf text-[34px] leading-none tracking-[-0.03em]">Networks</h1>
          {NETWORK_GROUPS.map((group) => (
            <section
              key={group.title}
              aria-label={group.title}
              className="flex gap-5 border-t border-line font-telegraf text-[20px] leading-[2]"
            >
              <h2 className="w-1/2 shrink-0 md:w-[400px]">{group.title}</h2>
              <ul className="min-w-0 flex-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <NetworkLink {...link} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
