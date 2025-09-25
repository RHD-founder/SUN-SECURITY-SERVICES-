// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     optimizePackageImports: ["gsap", "react-icons", "lucide-react"],
//     turbo: {
//       rules: {
//         "*.svg": {
//           loaders: ["@svgr/webpack"],
//           as: "*.js",
//         },
//       },
//     },
//   },
//   images: {
//     formats: ["image/avif", "image/webp"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     minimumCacheTTL: 31536000, // 1 year
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
//   compress: true,
//   poweredByHeader: false,
//   generateEtags: true,
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },
//   // Performance optimizations
//   modularizeImports: {
//     gsap: {
//       transform: "gsap/{{member}}",
//     },
//     "react-icons": {
//       transform: "react-icons/{{member}}",
//     },
//   },
//   headers: async () => [
//     {
//       source: "/(.*)",
//       headers: [
//         {
//           key: "X-Content-Type-Options",
//           value: "nosniff",
//         },
//         {
//           key: "X-Frame-Options",
//           value: "DENY",
//         },
//         {
//           key: "X-XSS-Protection",
//           value: "1; mode=block",
//         },
//       ],
//     },
//     {
//       source: "/api/(.*)",
//       headers: [
//         {
//           key: "Cache-Control",
//           value: "public, max-age=300, s-maxage=300",
//         },
//       ],
//     },
//     {
//       source: "/_next/static/(.*)",
//       headers: [
//         {
//           key: "Cache-Control",
//           value: "public, max-age=31536000, immutable",
//         },
//       ],
//     },
//     {
//       source: "/(.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif))",
//       headers: [
//         {
//           key: "Cache-Control",
//           value: "public, max-age=31536000, immutable",
//         },
//       ],
//     },
//   ],
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.2", "*.local"],
  // 1) Keep experimental flags that are still experimental
  experimental: {
    // Leave this here (it’s still configured under experimental)
    optimizePackageImports: ["gsap", "react-icons", "lucide-react"], // many of these are pre-optimized by default
  },

  // 2) Move Turbopack config out of experimental.turbo → turbopack
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
        // Example options if needed:
        // loaders: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    },
    // Optional extras:
    // resolveAlias: { underscore: "lodash" },
    // resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
    // moduleIds: "named",
    // memoryLimit: 1024 * 1024 * 1024, // 1 GiB
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // modularizeImports is fine to keep alongside optimizePackageImports
  modularizeImports: {
    gsap: { transform: "gsap/{{member}}" },
    "react-icons": { transform: "react-icons/{{member}}" },
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
      ],
    },
    {
      source: "/api/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=300, s-maxage=300" },
      ],
    },
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/(.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif))",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig
