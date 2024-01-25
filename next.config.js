/** @type {import('next').NextConfig} */

const { webpack } = require('next/dist/compiled/webpack/webpack');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(node)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
