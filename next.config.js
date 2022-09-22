/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/learn",
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;
