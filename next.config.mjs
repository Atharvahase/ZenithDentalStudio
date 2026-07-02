/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static export — no server, no backend, hostable on any free static host.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
