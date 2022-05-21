const withPWA = require("next-pwa");

module.exports = withPWA({
  basePath: '/portfolio',
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
})
