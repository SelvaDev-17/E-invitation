import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/E-invitation",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
