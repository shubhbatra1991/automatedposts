/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable the /app router
  // appDir: true,

  // expose these packages to React Server Components
  serverExternalPackages: ["mongoose"],

  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;