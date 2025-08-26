import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // enables `next export` static output to ./out
    images: { 
      unoptimized: true,  // Pages doesn't support Next Image optimizer
      path: "/"
    },
    publicRuntimeConfig: {
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // will be set by Pages
    },
};

export default nextConfig;
