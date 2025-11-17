import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "18nlg60l9z.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "8331whtezt.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
