/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: '/eschraufnagel.github.io',
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
