/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.ctfassets.net',
    }],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 