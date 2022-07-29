/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['openweathermap.org']
//   }
// }

// module.exports = nextConfig


const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['openweathermap.org']
  }
});