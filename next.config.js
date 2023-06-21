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
        hostname: "w0.peakpx.com",
        port: "",
        pathname: "/wallpaper/979/89/**",
      },
    ],
  },
};

module.exports = nextConfig;
