/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zeronine-homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zeronine-homepage/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 