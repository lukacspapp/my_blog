/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  productionBrowserSourceMaps: true,

  experimental: {
    appDir: true
  },

  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  output: 'standalone',

  images: {
    domains: [
      "media.graphassets.com",
      "avatars.githubusercontent.com"
    ]
  }

}

module.exports = nextConfig
