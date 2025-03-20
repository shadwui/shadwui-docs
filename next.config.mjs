import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.d\.ts$/,
      exclude: /node_modules/,
      use: [{ loader: 'ignore-loader' }]
    });
    
    return config;
  },
};

export default withMDX(config);
