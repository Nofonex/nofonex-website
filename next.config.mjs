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
