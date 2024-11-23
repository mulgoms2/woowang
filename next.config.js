/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enableCache: true,
    }
  },
};

module.exports = nextConfig;