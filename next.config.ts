import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
      "frame-src https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
        ],
      },
    ];
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
