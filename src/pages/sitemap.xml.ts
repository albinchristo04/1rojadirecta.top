import type { APIRoute } from 'astro';
import { fetchMatchFeed } from '../lib/data';
import { COMPETITION_HUBS, SITE_URL } from '../lib/config';

export const GET: APIRoute = async () => {
  const { matches, generatedAt } = await fetchMatchFeed();
  const now = new Date().toISOString();
  const feedLastmod = toLastmod(generatedAt) ?? now.split('T')[0];
  const staticLastmod = now.split('T')[0];

  // Sport hubs
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/tarjeta-roja/', priority: '0.9', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/pirlo-tv/', priority: '0.9', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/roja-directa-pirlo-tv/', priority: '0.9', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/tarjeta-roja-pirlo-tv/', priority: '0.9', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/futbol/', priority: '0.8', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/mlb/', priority: '0.8', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/beisbol/', priority: '0.8', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/nba/', priority: '0.8', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/nhl/', priority: '0.8', changefreq: 'hourly', lastmod: feedLastmod },
    { url: '/motogp/', priority: '0.8', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/buscar/', priority: '0.5', changefreq: 'daily', lastmod: feedLastmod },
    { url: '/sobre-nosotros/', priority: '0.4', changefreq: 'monthly', lastmod: staticLastmod },
  ];

  const competitionPages = COMPETITION_HUBS.map(hub => ({
    url: `/${hub.slug}/`,
    priority: '0.85',
    changefreq: 'daily',
    lastmod: feedLastmod,
  }));

  // Match pages
  const matchPages = matches.map(m => ({
    url: `/partido/${m.slug}/`,
    priority: '0.7',
    changefreq: 'hourly',
    lastmod: feedLastmod,
  }));

  // Alt URL clusters
  const verPages = matches.map(m => ({
    url: `/ver/${m.slug}/`,
    priority: '0.4',
    changefreq: 'hourly',
    lastmod: feedLastmod,
  }));

  const enVivoPages = matches.map(m => ({
    url: `/en-vivo/${m.slug}/`,
    priority: '0.4',
    changefreq: 'hourly',
    lastmod: feedLastmod,
  }));

  // Team pages
  const teamSlugs = new Set<string>();
  for (const m of matches) {
    const { toSlug } = await import('../lib/slugs');
    teamSlugs.add(toSlug(m.team1));
    teamSlugs.add(toSlug(m.team2));
  }
  const teamPages = [...teamSlugs].map(slug => ({
    url: `/equipo/${slug}/`,
    priority: '0.5',
    changefreq: 'daily',
    lastmod: feedLastmod,
  }));

  const allPages = [
    ...staticPages,
    ...competitionPages,
    ...matchPages,
    ...teamPages,
    ...verPages,
    ...enVivoPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

function toLastmod(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().split('T')[0];
}
