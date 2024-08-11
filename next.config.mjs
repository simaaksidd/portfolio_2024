/** @type {import('next').NextConfig} */

 // const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    // basePath: isProd ? '/portfolio_2024' : '',
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized: true,
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
};

export default nextConfig;
