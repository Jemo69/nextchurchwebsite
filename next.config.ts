import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '18nlg60l9z.ufs.sh',
                port: '',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: '8331whtezt.ufs.sh',
                port: '',
                pathname: '/f/**',
            },
        ],
    }
};

export default nextConfig;
