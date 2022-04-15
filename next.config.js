/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['www.vinamilk.com.vn', 'vinamilk.com.vn'],
  },
}

module.exports = nextConfig
