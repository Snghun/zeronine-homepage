/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/zeronine-homepage',
  assetPrefix: '/zeronine-homepage/',
};

module.exports = nextConfig; 