/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  productionBrowserSourceMaps: true,

  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  output: 'standalone',

  images: {
    domains: [
      "media.graphassets.com",
      "avatars.githubusercontent.com",
      "platform-lookaside.fbsbx.com"
    ]
  }

}

module.exports = nextConfig
