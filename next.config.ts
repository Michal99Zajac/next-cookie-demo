import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    redirects: async () => [
        {
            source: '/auth/:path*',
            destination: '/app/profile',
            has: [
                {
                    type: 'cookie',
                    key: 'session'
                }
            ],
            permanent: false
        },
        {
            source: '/app/:path*',
            destination: '/auth/login',
            missing: [
                {
                    key: 'session',
                    type: 'cookie'
                }
            ],
            permanent: false
        }
    ]
};

export default nextConfig;
