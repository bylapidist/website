import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypePrism from "rehype-prism-plus";

const withMDX = createMDX({
    options: {
        rehypePlugins: [rehypePrism],
    },
});

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
