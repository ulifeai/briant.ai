/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["knex", "pg"],
  },
};

export default nextConfig;
