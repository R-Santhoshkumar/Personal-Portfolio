import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    position: "bottom-right", // optional
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
