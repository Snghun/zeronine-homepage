/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/0.9percent' : '',
  // 로컬 개발 환경에서는 basePath와 assetPrefix를 제거
  // basePath: '/zeronine-homepage',
  // assetPrefix: '/zeronine-homepage/',
  trailingSlash: true,
};

module.exports = nextConfig; 