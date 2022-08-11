/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/learn",
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;
