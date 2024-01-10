//  @type {import('next').NextConfig} 
module.exports = {
  experimental: {
    appDir: true,
    //serverActions: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
