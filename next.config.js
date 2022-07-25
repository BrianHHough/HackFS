/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MORALIS_SERVER_URL: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    NEXT_PUBLIC_MORALIS_APP_ID: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
    NEXT_PUBLIC_COVALENT_API_KEY: process.env.NEXT_PUBLIC_COVALENT_API_KEY,
    ANKR_POLYGON_MUMBAI_RPC: process.env.ANKR_POLYGON_MUMBAI_RPC,
  },
  images: {
    domains: ['gateway.pinata.cloud', 'openseauserdata.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          
        ]
      },
    ]
  }
}
