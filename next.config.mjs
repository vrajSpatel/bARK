/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.bing.com'],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
