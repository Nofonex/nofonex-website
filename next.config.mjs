/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/:path*",
        destination: "/trabyhum",
        permanent: true,
      },
      {
        source: "/entrepreneur-package",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/pricing",
        permanent: false,
      },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/7-days-of-becoming-a-blessing", destination: "/", permanent: true },
      { source: "/blog/bridging-technical-expertise-creative-engagement", destination: "/", permanent: true },
      { source: "/blog/machine-translations-that-promise-a-lot", destination: "/language-solutions", permanent: true },
      { source: "/blog/navigating-ai-revolution-remote-workers", destination: "/language-solutions", permanent: true },
      { source: "/blog/effective-content-localization-strategies", destination: "/language-solutions", permanent: true },
      { source: "/blog/ai-translation-human-expertise", destination: "/language-solutions", permanent: true },
    ]
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client')
    }
    return config
  }
}

export default nextConfig
