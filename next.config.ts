import type { NextConfig } from "next";

/** 백엔드가 주는 이미지 URL 허용 — API 서버 + IMAGE_BASE_URLS(S3 등) */
const remotePatterns = [process.env.API_BASE_URL, ...(process.env.IMAGE_BASE_URLS ?? "").split(",")]
  .map((url) => url?.trim())
  .filter((url): url is string => !!url)
  .map((url) => {
    const { protocol, hostname, port } = new URL(url);
    return { protocol: protocol.replace(":", "") as "http" | "https", hostname, port };
  });

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: { remotePatterns },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
