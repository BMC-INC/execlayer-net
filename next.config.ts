import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/record", destination: "/work", permanent: true }];
  },
};

export default nextConfig;
