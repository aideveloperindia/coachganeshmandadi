/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
    unoptimized: true, // For local development - bypasses Next.js image optimization
  },
  // Exclude Backup1 folder from build to avoid TypeScript errors
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /Backup1/,
    });
    
    // Increase memory limit for large images
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          maxSize: 244000, // 244KB
        },
      };
    }
    
    return config;
  },
  // Disable strict mode to avoid double rendering issues
  reactStrictMode: false,
}

module.exports = nextConfig
