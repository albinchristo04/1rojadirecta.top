import type { APIRoute } from 'astro';
import { fetchMatches } from '../lib/data';
import { SITE_URL, SITE_NAME } from '../lib/config';

export const GET: APIRoute = async () => {
  const matches = await fetchMatches();
  const now = new Date().toUTCString();

  const items = matches.slice(0, 50).map(m => `  <item>
    <title><![CDATA[${m.team1} vs ${m.team2} en Vivo — ${m.leagueLabel}]]></title>
    <link>${SITE_URL}/partido/${m.slug}/</link>
    <guid isPermaLink="true">${SITE_URL}/partido/${m.slug}/</guid>
    <pubDate>${new Date(m.utcDatetime).toUTCString()}</pubDate>
    <description><![CDATA[Ver ${m.team1} vs ${m.team2} en vivo hoy. ${m.leagueLabel} — ${m.time} UTC. ${m.channels.length} canales disponibles gratis.]]></description>
    <category>${m.leagueLabel}</category>
  </item>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Partidos en Vivo</title>
    <link>${SITE_URL}/</link>
    <description>Ver deportes en vivo gratis. Fútbol, MLB, NBA, NHL en directo.</description>
    <language>es</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>noreply@1rojadirecta.top (1RojaDirecta)</managingEditor>
    <ttl>180</ttl>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
