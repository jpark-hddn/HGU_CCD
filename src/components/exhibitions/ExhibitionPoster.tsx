"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./exhibition-poster.css";

export function ExhibitionPoster({ src, alt, width, height, mobile = false }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobile?: boolean;
}) {
  const posterRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);
  const visible = useRef(false);

  const reveal = () => {
    if (loaded.current && visible.current && posterRef.current) {
      posterRef.current.dataset.revealState = "revealing";
    }
  };

  useEffect(() => {
    const poster = posterRef.current;
    if (!poster) return;
    if (!("IntersectionObserver" in window)) {
      poster.dataset.revealState = "revealing";
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.current = true;
        reveal();
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(poster);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={posterRef}
      data-reveal-state="waiting"
      className={mobile ? "exhibition-poster relative w-full" : "exhibition-poster relative w-full"}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="exhibition-poster-frame absolute inset-0 overflow-hidden bg-neutral-900">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={mobile ? "100vw" : "(min-width: 1280px) 600px, 50vw"}
          className="exhibition-poster-image object-cover"
          priority
          onLoad={() => { loaded.current = true; reveal(); }}
        />
      </div>
      <noscript><style>{".exhibition-poster-frame { clip-path: none !important; } .exhibition-poster-image { transform: none !important; }"}</style></noscript>
    </div>
  );
}
