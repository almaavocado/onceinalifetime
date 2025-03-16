/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['onceinalifetime.s3.us-west-1.amazonaws.com'],
    },
    experimental: {
      appDir: true,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; img-src 'self' https://onceinalifetime.s3.us-west-1.amazonaws.com; script-src 'self'; style-src 'self' 'unsafe-inline';",
            },
          ],
        },
      ];
    },
    metadata: {
      metadataBase: 'https://onceinalifetime15.com', // Replace with your actual domain
    },
  };
  
  export default nextConfig;