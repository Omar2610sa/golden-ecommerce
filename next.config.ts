import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bayt-aljamal-dev.saber.aait-d.com",
      },
    ],
  },
};

export default nextConfig;
