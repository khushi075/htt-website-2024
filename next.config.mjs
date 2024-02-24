/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns : [
            {
                hostname:"devfolio.notion.site"
            }
        ]
    }
};

export default nextConfig;
