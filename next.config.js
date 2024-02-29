/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(node)$/,
      use: {
        loader: 'file-loader',
      },
    });

    // Define alias outside of the module.rules array
    config.resolve.alias['@'] = path.resolve(__dirname, '.');

    return config;
  },
};

module.exports = nextConfig;
