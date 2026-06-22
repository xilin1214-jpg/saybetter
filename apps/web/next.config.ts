import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@saybetter/core", "@saybetter/scenarios"],
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
