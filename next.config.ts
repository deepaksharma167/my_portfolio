import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/my_portfolio",
  trailingSlash: true,
};

export default nextConfig;
