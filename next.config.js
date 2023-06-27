/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    port: process.env.PORT || 3000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/uc/**",
      },
    ],
  },
};

module.exports = nextConfig;
