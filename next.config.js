/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Disable ESLint during builds (optional - can be enabled later)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Continue build even if there are TypeScript errors (optional)
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig

