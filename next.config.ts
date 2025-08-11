import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.oyoroomscdn.com',
      },
      {
        protocol: 'https',
        hostname: 'htl-img-res-new.s3.ap-south-1.amazonaws.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    scrollRestoration: true,
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*'],
    },
  },

  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

