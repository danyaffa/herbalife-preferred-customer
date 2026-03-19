/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          }
        ]
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        // Cache PDFs
        source: "/(.*).pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000"
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        // Redirect www to non-www or vice versa (SEO canonical)
        source: "/index.html",
        destination: "/",
        permanent: true
      },
      {
        source: "/instructions",
        destination: "/contact",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
