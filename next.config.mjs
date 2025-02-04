/** @type {import('next').NextConfig} */
const nextConfig = {
 typescript: {
    ignoreBuildErrors: true
 },
 eslint: {
    ignoreDuringBuilds: true
 },
 experimental: {
    suppressHydrationWarning: true,
},
};

export default nextConfig;
