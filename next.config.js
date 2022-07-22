/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['openweathermap.org']
  }
  // experimental: {
  //   images: {
  //     domains:["openweathermap.org"],
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: 'openweathermap.org',
  //         pathname: '/img/wn/*@2x.png',
  //       },
  //     ],
  //   },
  // }
}

module.exports = nextConfig
