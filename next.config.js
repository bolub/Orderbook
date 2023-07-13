/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.moralis.io/**",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
