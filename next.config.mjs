/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENABLE_GA: process.env.NEXT_PUBLIC_ENABLE_GA,
  },
};

export default nextConfig;
