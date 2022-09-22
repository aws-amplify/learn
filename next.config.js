const BASEPATH = process.env.BASEPATH;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: BASEPATH,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    BASEPATH: process.env.BASEPATH,
  },
};

module.exports = nextConfig;
