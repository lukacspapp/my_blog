/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  productionBrowserSourceMaps: true,

  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ]
  }

}

module.exports = nextConfig
