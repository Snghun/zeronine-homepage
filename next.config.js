/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/zeronine-homepage',
  trailingSlash: true,
};

module.exports = nextConfig; 