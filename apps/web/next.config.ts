import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://*.ghyst.io https://*.vercel.app http://localhost:3000 http://localhost:3001" },
        ],
      },
    ];
  },
};

export default nextConfig;
