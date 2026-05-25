#!/usr/bin/env node

const SITE_URL = process.env.SITE_URL ?? 'https://1rojadirecta.top';
const sitemapUrl = new URL('/sitemap.xml', SITE_URL).toString();
const pingUrl = new URL('https://www.bing.com/ping');
pingUrl.searchParams.set('sitemap', sitemapUrl);

const dryRun = process.argv.includes('--dry-run');

if (dryRun) {
  console.log(`[bing] Dry run: ${pingUrl.toString()}`);
  process.exit(0);
}

try {
  const response = await fetch(pingUrl, {
    method: 'GET',
    headers: {
      'User-Agent': '1rojadirecta-top-bing-ping/1.0',
    },
  });

  if (response.status === 410) {
    console.warn('[bing] Sitemap ping endpoint returned 410. Bing now prefers IndexNow, which is handled separately by the deploy workflow.');
    process.exit(0);
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  console.log(`[bing] Ping OK for ${sitemapUrl} — ${response.status}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[bing] Ping failed: ${message}`);
  process.exit(1);
}