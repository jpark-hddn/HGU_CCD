import Image from "next/image";

export function ExhibitionPoster({ src, alt, width, height, mobile = false }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobile?: boolean;
}) {
  return (
    <div
      className="exhibition-poster relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="exhibition-poster-frame absolute inset-0 overflow-hidden bg-neutral-900">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={mobile ? "100vw" : "(min-width: 1280px) 600px, 50vw"}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
