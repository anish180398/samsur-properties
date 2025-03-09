import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.ctfassets.net',
    }],
  },
  reactStrictMode: true,
  // Suppress hydration warnings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  }
};

export default config;
