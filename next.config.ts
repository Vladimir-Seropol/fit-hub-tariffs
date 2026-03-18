import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Next.js from picking an incorrect workspace root
    // when other lockfiles exist outside this repository.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
