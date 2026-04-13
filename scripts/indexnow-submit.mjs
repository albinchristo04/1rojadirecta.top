#!/usr/bin/env node
/**
 * IndexNow submission script
 * Submits all current match URLs to Bing/IndexNow after each deploy.
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE = 'https://1rojadirecta.top';
const HOST = '1rojadirecta.top';
const DATA_URL = 'https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json';

if (!INDEXNOW_KEY) {
  console.warn('[indexnow] INDEXNOW_KEY not set — skipping submission');
  process.exit(0);
}

async function toSlug(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function run() {
  // Fetch current match data
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);
  const data = await res.json();

  const urls = [];

  for (const ev of data.events) {
    const teamsStr = ev.teams;
    const idx = teamsStr.indexOf(' - ');
    if (idx === -1) continue;
    const t1 = teamsStr.slice(0, idx).trim();
    const t2 = teamsStr.slice(idx + 3).trim();
    const slug = `${await toSlug(t1)}-vs-${await toSlug(t2)}`;

    urls.push(`${SITE}/partido/${slug}/`);
    urls.push(`${SITE}/ver/${slug}/`);
    urls.push(`${SITE}/en-vivo/${slug}/`);
  }

  // Batch into groups of 100 (IndexNow limit)
  const batches = [];
  for (let i = 0; i < urls.length; i += 100) {
    batches.push(urls.slice(i, i + 100));
  }

  for (const batch of batches) {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/indexnow-key.txt`,
      urlList: batch,
    };

    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log(`[indexnow] Submitted ${batch.length} URLs — Status: ${r.status}`);
  }

  console.log(`[indexnow] Total submitted: ${urls.length} URLs`);
}

run().catch(err => {
  console.error('[indexnow] Error:', err.message);
  process.exit(1);
});
