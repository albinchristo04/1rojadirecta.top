import type { APIRoute } from 'astro';
import { fetchMatches } from '../lib/data';
import { SITE_URL } from '../lib/config';

export const GET: APIRoute = async () => {
  const matches = await fetchMatches();
  const now = new Date().toISOString();

  // Sport hubs
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'hourly' },
    { url: '/tarjeta-roja/', priority: '0.9', changefreq: 'daily' },
    { url: '/pirlo-tv/', priority: '0.9', changefreq: 'daily' },
    { url: '/roja-directa-pirlo-tv/', priority: '0.9', changefreq: 'daily' },
    { url: '/tarjeta-roja-pirlo-tv/', priority: '0.9', changefreq: 'daily' },
    { url: '/futbol/', priority: '0.8', changefreq: 'hourly' },
    { url: '/mlb/', priority: '0.8', changefreq: 'hourly' },
    { url: '/beisbol/', priority: '0.8', changefreq: 'hourly' },
    { url: '/nba/', priority: '0.8', changefreq: 'hourly' },
    { url: '/nhl/', priority: '0.8', changefreq: 'hourly' },
    { url: '/motogp/', priority: '0.8', changefreq: 'daily' },
    { url: '/buscar/', priority: '0.5', changefreq: 'daily' },
    { url: '/sobre-nosotros/', priority: '0.4', changefreq: 'monthly' },
  ];

  // League hubs (deduplicated)
  const leagueSlugs = [...new Set(matches.map(m => m.leagueSlug))];
  const leaguePages = leagueSlugs.map(slug => ({
    url: `/${slug}/`,
    priority: '0.8',
    changefreq: 'daily',
  }));

  // Match pages
  const matchPages = matches.map(m => ({
    url: `/partido/${m.slug}/`,
    priority: '0.7',
    changefreq: 'hourly',
  }));

  // Alt URL clusters
  const verPages = matches.map(m => ({
    url: `/ver/${m.slug}/`,
    priority: '0.4',
    changefreq: 'hourly',
  }));

  const enVivoPages = matches.map(m => ({
    url: `/en-vivo/${m.slug}/`,
    priority: '0.4',
    changefreq: 'hourly',
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
  }));

  const allPages = [
    ...staticPages,
    ...leaguePages,
    ...matchPages,
    ...teamPages,
    ...verPages,
    ...enVivoPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${now.split('T')[0]}</lastmod>
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
