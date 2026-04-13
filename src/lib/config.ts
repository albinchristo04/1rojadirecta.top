// ─── Site Config ──────────────────────────────────────────────────────────────
export const SITE_URL = 'https://1rojadirecta.top';
export const SITE_NAME = '1RojaDirecta';
export const SITE_TAGLINE = 'Roja Directa · Tarjeta Roja TV · Pirlo TV';
export const SITE_DESCRIPTION = 'Ver deportes en vivo gratis. Fútbol, MLB, NBA, NHL en directo con múltiples canales sin registro.';

// ─── Player ───────────────────────────────────────────────────────────────────
export const PLAYER_BASE_URL = 'https://bolaloca.my/player';
export const SERVER_COUNT = 4;

// ─── Data ─────────────────────────────────────────────────────────────────────
export const DATA_URL = 'https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json';
export const REBUILD_INTERVAL_HOURS = 3;

// ─── IndexNow ─────────────────────────────────────────────────────────────────
export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY ?? process.env?.INDEXNOW_KEY ?? '';

// ─── Sport categories ─────────────────────────────────────────────────────────
export const SPORT_LABELS: Record<string, string> = {
  futbol: 'Fútbol',
  mlb: 'MLB',
  beisbol: 'Béisbol',
  nba: 'NBA',
  nhl: 'NHL',
  motogp: 'MotoGP',
  baloncesto: 'Baloncesto',
};

// ─── League → slug + sport mapping ────────────────────────────────────────────
export const LEAGUE_MAP: Record<string, { slug: string; sport: string; label: string }> = {
  'Ligue Des Champions': { slug: 'champions-league', sport: 'futbol', label: 'Champions League' },
  'Copa Argentina':      { slug: 'copa-argentina',   sport: 'futbol', label: 'Copa Argentina' },
  'Ecuador Ligapro':     { slug: 'liga-ecuador',      sport: 'futbol', label: 'Liga Ecuador' },
  'Concacaf Champions Cup': { slug: 'concacaf',       sport: 'futbol', label: 'Concacaf Champions Cup' },
  'Liga MX':             { slug: 'liga-mx',           sport: 'futbol', label: 'Liga MX' },
  'La Liga':             { slug: 'laliga',            sport: 'futbol', label: 'La Liga' },
  'Laliga':              { slug: 'laliga',            sport: 'futbol', label: 'La Liga' },
  'Laliga 2':            { slug: 'laliga-2',          sport: 'futbol', label: 'La Liga 2' },
  'Copa Libertadores':   { slug: 'copa-libertadores', sport: 'futbol', label: 'Copa Libertadores' },
  'Copa Sudamericana':   { slug: 'copa-sudamericana', sport: 'futbol', label: 'Copa Sudamericana' },
  'Premier League':      { slug: 'premier-league',   sport: 'futbol', label: 'Premier League' },
  'Serie A':             { slug: 'serie-a',           sport: 'futbol', label: 'Serie A' },
  'Bundesliga':          { slug: 'bundesliga',        sport: 'futbol', label: 'Bundesliga' },
  'Ligue 1':             { slug: 'ligue-1',           sport: 'futbol', label: 'Ligue 1' },
  'Ligue 2':             { slug: 'ligue-2',           sport: 'futbol', label: 'Ligue 2' },
  'Super Lig':           { slug: 'super-lig',         sport: 'futbol', label: 'Super Lig' },
  'Liga Portugal':       { slug: 'liga-portugal',     sport: 'futbol', label: 'Liga Portugal' },
  'Liga AUF Uruguaya':   { slug: 'liga-uruguaya',     sport: 'futbol', label: 'Liga Uruguaya' },
  'Torneo LPF':          { slug: 'torneo-lpf',        sport: 'futbol', label: 'Torneo LPF' },
  'Campeonato Itaú Chile': { slug: 'primera-chile',   sport: 'futbol', label: 'Primera División Chile' },
  'NBA':                 { slug: 'nba',               sport: 'nba',    label: 'NBA' },
  'NHL':                 { slug: 'nhl',               sport: 'nhl',    label: 'NHL' },
  'MLB':                 { slug: 'mlb',               sport: 'mlb',    label: 'MLB' },
  'MotoGP':              { slug: 'motogp',            sport: 'motogp', label: 'MotoGP' },
};

// ─── Language labels ───────────────────────────────────────────────────────────
export const LANG_LABELS: Record<string, string> = {
  es: 'Español',
  gb: 'English',
  fr: 'Français',
  it: 'Italiano',
  de: 'Deutsch',
  us: 'English (US)',
  pt: 'Português',
  tr: 'Türkçe',
  gr: 'Ελληνικά',
};

// ─── Alternate names (schema) ─────────────────────────────────────────────────
export const ALTERNATE_NAMES = [
  '1 Roja Directa',
  'Roja Directa',
  'Tarjeta Roja TV',
  'Pirlo TV',
  'RojaDirecta',
  'Roja Dirécta',
];
