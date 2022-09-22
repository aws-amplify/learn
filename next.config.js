/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASEPATH,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    prependData: process.env.BASEPATH
      ? `$basepath: '${process.env.BASEPATH}';`
      : "",
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    BASEPATH: process.env.BASEPATH,
  },
};

module.exports = nextConfig;
