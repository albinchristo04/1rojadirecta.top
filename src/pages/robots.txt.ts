import type { APIRoute } from 'astro';
import { SITE_URL } from '../lib/config';

export const GET: APIRoute = async () => {
  const content = `User-agent: *
Allow: /

# Disallow redirect pages from being the canonical discovery point
Disallow: /ver/
Disallow: /en-vivo/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
