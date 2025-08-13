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
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

}

module.exports = nextConfig
