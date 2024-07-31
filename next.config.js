/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.BASEPATH,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    prependData: process.env.BASEPATH
      ? `$basepath: '${process.env.BASEPATH}';`
      : `$basepath: '';`,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    BASEPATH: process.env.BASEPATH,
  },
};

module.exports = nextConfig;
