/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/learn",
  env: {
    SITE_URL: process.env.SITE_URL,
  },
  async rewrites() {
    return [
      {
        source: "/learn/api",
        destination: "/api"
      }
    ]
  }
};

module.exports = nextConfig;
