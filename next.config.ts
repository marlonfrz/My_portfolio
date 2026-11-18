import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
