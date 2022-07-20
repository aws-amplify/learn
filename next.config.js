const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: '@import "_variables.scss";',
  },
  basePath: "/learn",
};

module.exports = nextConfig;
