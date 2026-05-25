#!/usr/bin/env node
/**
 * IndexNow submission script.
 * Submits refreshed site URLs to Bing via IndexNow after each deploy.
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE = 'https://1rojadirecta.top';
const HOST = '1rojadirecta.top';
const DATA_URL = 'https://sportsonline.ppvtv.top/api/matches.json';
const KEY_LOCATION = `${SITE}/${INDEXNOW_KEY}.txt`;

const COMPETITION_HUBS = [
  'liga-mx',
  'copa-libertadores',
  'copa-sudamericana',
  'liga-profesional-argentina',
  'brasileirao',
  'copa-argentina',
  'liga-betplay',
  'liga-pro-ecuador',
  'primera-division-chile',
  'liga-1-peru',
  'liga-uruguaya',
  'concacaf-champions-cup',
];

const STATIC_URLS = [
  '/',
  '/futbol/',
  '/mlb/',
  '/beisbol/',
  '/nba/',
  '/nhl/',
  '/motogp/',
  '/tarjeta-roja/',
  '/pirlo-tv/',
  '/roja-directa-pirlo-tv/',
  '/tarjeta-roja-pirlo-tv/',
  '/buscar/',
].map(path => `${SITE}${path}`);

if (!INDEXNOW_KEY) {
  console.warn('[indexnow] INDEXNOW_KEY not set — skipping submission');
  process.exit(0);
}

function toSlug(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function parseTeams(title) {
  const separators = [' x ', ' - ', ' vs ', ' v '];
  for (const separator of separators) {
    const idx = title.indexOf(separator);
    if (idx !== -1) {
      return [
        title.slice(0, idx).trim(),
        title.slice(idx + separator.length).trim(),
      ];
    }
  }

  return [title.trim(), ''];
}

async function run() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);
  const data = await res.json();

  const urls = new Set([...STATIC_URLS]);

  for (const hub of COMPETITION_HUBS) {
    urls.add(`${SITE}/${hub}/`);
  }

  for (const match of data.matches ?? []) {
    const [team1, team2] = parseTeams(match.title ?? '');
    if (!team1 || !team2) continue;

    const slug = `${toSlug(team1)}-vs-${toSlug(team2)}`;

    urls.add(`${SITE}/partido/${slug}/`);
    urls.add(`${SITE}/ver/${slug}/`);
    urls.add(`${SITE}/en-vivo/${slug}/`);
    urls.add(`${SITE}/equipo/${toSlug(team1)}/`);
    urls.add(`${SITE}/equipo/${toSlug(team2)}/`);
  }

  const allUrls = [...urls];
  const batches = [];
  for (let i = 0; i < allUrls.length; i += 100) {
    batches.push(allUrls.slice(i, i + 100));
  }

  for (const batch of batches) {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log(`[indexnow] Submitted ${batch.length} URLs — Status: ${r.status}`);
  }

  console.log(`[indexnow] Total submitted: ${allUrls.length} URLs`);
}

run().catch(err => {
  console.error('[indexnow] Error:', err.message);
  process.exit(1);
});
