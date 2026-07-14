// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Importante para Docker/Render
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necesario en Render free
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Permitir CORS en API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;