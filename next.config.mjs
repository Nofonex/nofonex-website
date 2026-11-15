/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/:path*",
        destination: "/",
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
      { source: "/blog/machine-translations-that-promise-a-lot", destination: "/", permanent: true },
      { source: "/blog/navigating-ai-revolution-remote-workers", destination: "/", permanent: true },
      { source: "/blog/effective-content-localization-strategies", destination: "/", permanent: true },
      { source: "/blog/ai-translation-human-expertise", destination: "/", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      // BeFoWo was previously called BeamFoWo (conventions/NAMING.md, 2026-10-12)
      { source: "/beamfowo", destination: "/befowo", permanent: true },
      { source: "/beamfowo/:path*", destination: "/befowo", permanent: true },
      // Language Solutions removed from the site (owner, 2026-11-15)
      { source: "/language-solutions/:path*", destination: "/", permanent: true },
      { source: "/language-solutions", destination: "/", permanent: true },
      { source: "/subbyage/:path*", destination: "/", permanent: true },
      { source: "/subbyage", destination: "/", permanent: true },
      { source: "/trabyage/:path*", destination: "/", permanent: true },
      { source: "/trabyage", destination: "/", permanent: true },
      { source: "/trabyhum/:path*", destination: "/", permanent: true },
      { source: "/trabyhum", destination: "/", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
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
