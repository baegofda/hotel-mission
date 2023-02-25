/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: { prettier: false, svgo: true, svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] }, titleProp: true },
      test: /\.svg$/,
    });
    return config;
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
