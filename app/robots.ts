import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['*', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot'], allow: '/', disallow: ['/api/'] },
      { userAgent: ['CCBot', 'Bytespider'], disallow: '/' },
    ],
    sitemap: 'https://assistants-medicaux.com/sitemap.xml',
  };
}
