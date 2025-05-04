// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// const isProd = process.env.NODE_ENV === 'production';
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     unoptimized: true, // Disable default image optimization
//   },
//   assetPrefix: isProd ? '/aft-calculator/' : '',
//   basePath: isProd ? '/aft-calculator' : '',
//   trailingSlash: true,
//   output: 'export'
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  // assetPrefix: isProd ? '/aft-calculator/' : '',
  // basePath: isProd ? '/aft-calculator' : '',
  output: 'export',
};

module.exports = nextConfig
