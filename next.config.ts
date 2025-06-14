/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zeronine-homepage',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/zeronine-homepage/',
};

export default nextConfig;
