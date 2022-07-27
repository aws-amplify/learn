const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/learn",
  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
