/** @type {import('next').NextConfig} */

const server = process.env.SERVER;

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${server}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
