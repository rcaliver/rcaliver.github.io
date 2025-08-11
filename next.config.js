module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heroui.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
}
