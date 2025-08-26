import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enables `next export` static output to ./out
  images: { unoptimized: true }, // Pages doesn't support Next Image optimizer
};

export default nextConfig;
