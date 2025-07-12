 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com', // Add this line for Pexels images
      // Add any other external image domains here, e.g., 'example.com', 'another-cdn.net'
    ],
  },
};

module.exports = nextConfig;