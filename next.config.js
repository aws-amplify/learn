/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;
