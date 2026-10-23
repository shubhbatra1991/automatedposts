
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Mongoose external to the server bundle
  serverExternalPackages: ["mongoose"],

  // Only allow Google profile images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
