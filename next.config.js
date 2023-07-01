const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['naszsklep-api.vercel.app'],
    format: ['image/avif', 'image/webp']
  },
};

module.exports = nextConfig;