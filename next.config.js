// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide the development indicator "N" in the bottom-left corner
  devIndicators: false,
  reactStrictMode: true,
  // Performance optimizations
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
