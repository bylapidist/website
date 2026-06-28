import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        cssChunking: true,
    },
    turbopack: {
        root: __dirname,
    },
    ...(basePath ? { basePath } : {}),
};

export default nextConfig;
