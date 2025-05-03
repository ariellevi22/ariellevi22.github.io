import { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "dist",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    eslint: {
        dirs: [
            "app",
            "assets",
            "components",
            "containers",
            "global",
            "public",
            "theme",
            "types",
            "utils",
            "views",
        ],
    },
};

export default nextConfig;
