import Image from "next/image";
import Link from "next/link";
import { NETWORKS_HREF } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Networks() {
  return (
    <section aria-labelledby="networks" className="scroll-mt-4">
      <Link href={NETWORKS_HREF} className="group flex flex-col gap-2.5">
        <SectionHeading id="networks" title="NETWORKS" />
        <div className="relative aspect-[370/202] w-full overflow-hidden md:aspect-[1579/594]">
          <Image
            src="/images/common/networks.png"
            alt="한동대학교 느헤미야홀 전경"
            fill
            sizes="(min-width: 1280px) 1579px, 100vw"
            className="object-cover object-center md:object-[50%_10%] transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute right-[15px] bottom-[15px] border border-white px-3 py-2 font-telegraf text-[16px] leading-none tracking-[-0.03em] text-white md:right-10 md:bottom-[35px] md:text-[24px]">
            CCD Networks
          </span>
        </div>
      </Link>
    </section>
  );
}
