/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Enable static page generation for blog posts
  output: 'export',
  // Ensure blog content is included in the build
  experimental: {
    outputFileTracingIncludes: {
      '/blog/**/*': ['content/blog/**/*'],
    },
  },
}

module.exports = nextConfig 