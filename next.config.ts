import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow three.js / @react-three/fiber to be bundled correctly
  transpilePackages: ["three"],
};

export default nextConfig;
