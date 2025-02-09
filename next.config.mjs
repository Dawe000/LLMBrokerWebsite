/** @type {import('next').NextConfig} */
const nextConfig = {
  // fixes wallet connect dependency issue
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  
  // Add transpilation for llmbrokerapilib
  transpilePackages: ['llmbrokerapilib'],
  
  // Enable ESM externals
  experimental: {
    esmExternals: true
  }
};

export default nextConfig;