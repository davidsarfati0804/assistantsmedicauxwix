import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
  async redirects() {
    return [
      // Anciennes URLs Wix → nouvelles pages
      { source: '/copie-de-accueil-1', destination: '/', permanent: true },
      { source: '/copie-de-accueil-2', destination: '/', permanent: true },
      { source: '/about-7', destination: '/assistants-medicaux', permanent: true },
      { source: '/blank', destination: '/', permanent: true },
      { source: '/copie-de-d%C3%A9marches', destination: '/avantages-demarches', permanent: true },
      { source: '/copie-de-demarches', destination: '/avantages-demarches', permanent: true },
      { source: '/book-online', destination: '/prendre-rendez-vous', permanent: true },
    ];
  },
};

export default nextConfig;
