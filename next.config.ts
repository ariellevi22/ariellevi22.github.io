import { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "dist",
    trailingSlash: true,
    images: {
        unoptimized: true,
        qualities: [80, 100],
    },
};

export default nextConfig;
