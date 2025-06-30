import type { NextConfig } from "next";

/**
 * This tells Next.js to treat `.mdx` files as pages and components
 */
const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;