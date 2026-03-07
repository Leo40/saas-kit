import { type NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** Enable analyzer when ANALYZE=true is set in env */
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = bundleAnalyzer({
  // productionBrowserSourceMaps: true,

  // Performance optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack-specific optimizations
  turbopack: {
    // Optimize module resolution
    resolveAlias: {
      // Add any necessary aliases here
    },
    // Memory optimization
    // memoryLimit: 4096,
  },

  // Optimize static generation
  poweredByHeader: false,

  // Headers for better caching and performance
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },

  // Enable compression
  compress: true,

  // Optimize images aggressively
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable strict mode
  reactStrictMode: true,

  // Optimize for production
  productionBrowserSourceMaps: false, // Disable in production for better performance

  // Hide indicator
  devIndicators: false,
});

export default nextConfig;
