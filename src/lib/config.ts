// ─── Site Config ──────────────────────────────────────────────────────────────
export const SITE_URL = 'https://1rojadirecta.top';
export const SITE_NAME = '1RojaDirecta';
export const SITE_TAGLINE = 'Roja Directa · Tarjeta Roja TV · Pirlo TV';
export const SITE_DESCRIPTION = 'Ver deportes en vivo gratis. Fútbol, MLB, NBA, NHL en directo con múltiples canales sin registro.';

// ─── Data ─────────────────────────────────────────────────────────────────────
export const DATA_URL = 'https://sportsonline.ppvtv.top/api/matches.json';
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

export interface CompetitionHub {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
}

export const COMPETITION_HUBS: CompetitionHub[] = [
  {
    slug: 'liga-mx',
    label: 'Liga MX',
    title: 'Liga MX En Vivo Hoy - Ver Fútbol Mexicano Gratis | 1RojaDirecta',
    description: 'Ver Liga MX en vivo gratis en español. América, Chivas, Cruz Azul, Pumas, Tigres y más. Todos los partidos disponibles hoy en 1RojaDirecta.',
    intro: 'Página en español dedicada a búsquedas de Liga MX en vivo, horarios, canales y dónde ver fútbol mexicano gratis desde cualquier país de Latinoamérica.',
    keywords: ['liga mx', 'liga mx en vivo', 'futbol mexicano', 'america en vivo', 'chivas en vivo', 'cruz azul en vivo'],
  },
  {
    slug: 'copa-libertadores',
    label: 'Copa Libertadores',
    title: 'Copa Libertadores En Vivo - Ver Partidos Hoy Gratis | 1RojaDirecta',
    description: 'Ver Copa Libertadores en vivo gratis. Boca, River, Flamengo, Palmeiras y los clubes más buscados de Sudamérica en una sola página en español.',
    intro: 'Hub pensado para búsquedas en español sobre Copa Libertadores en vivo, partidos de hoy, canales disponibles y seguimiento de clubes sudamericanos.',
    keywords: ['copa libertadores', 'libertadores en vivo', 'partidos de libertadores', 'boca juniors en vivo', 'river plate en vivo', 'flamengo en vivo'],
  },
  {
    slug: 'copa-sudamericana',
    label: 'Copa Sudamericana',
    title: 'Copa Sudamericana En Vivo - Ver Fútbol Sudamericano Gratis | 1RojaDirecta',
    description: 'Ver Copa Sudamericana en vivo gratis en español. Partidos de hoy, horarios y enlaces rápidos para el público latinoamericano.',
    intro: 'Contenido orientado a usuarios que buscan Copa Sudamericana en vivo en español, con una vista rápida de todos los partidos disponibles del momento.',
    keywords: ['copa sudamericana', 'sudamericana en vivo', 'partidos sudamericana', 'liga sudamericana', 'futbol sudamericano', 'ver sudamericana'],
  },
  {
    slug: 'liga-profesional-argentina',
    label: 'Liga Profesional Argentina',
    title: 'Liga Argentina En Vivo Hoy - Ver Fútbol Argentino Gratis | 1RojaDirecta',
    description: 'Ver Liga Profesional Argentina en vivo. Boca, River, Racing, Independiente, San Lorenzo y más en una página creada para búsquedas en español.',
    intro: 'Sección enfocada en fútbol argentino en vivo, pensada para búsquedas de usuarios de Argentina, Uruguay, Chile, Paraguay y resto de Latinoamérica.',
    keywords: ['liga argentina', 'liga profesional argentina', 'futbol argentino en vivo', 'boca en vivo', 'river en vivo', 'racing en vivo'],
  },
  {
    slug: 'brasileirao',
    label: 'Brasileirão',
    title: 'Brasileirão En Vivo - Ver Liga de Brasil Gratis | 1RojaDirecta',
    description: 'Ver Brasileirao en vivo gratis. Flamengo, Palmeiras, Corinthians, Sao Paulo y más clubes brasileños con acceso rápido en español.',
    intro: 'Landing page en español para búsquedas sobre Brasileirao en vivo, partidos de Brasil hoy, horarios y cobertura de clubes más populares.',
    keywords: ['brasileirao', 'liga de brasil', 'futbol brasileno en vivo', 'flamengo en vivo', 'palmeiras en vivo', 'corinthians en vivo'],
  },
  {
    slug: 'copa-argentina',
    label: 'Copa Argentina',
    title: 'Copa Argentina En Vivo - Ver Partidos Hoy Gratis | 1RojaDirecta',
    description: 'Ver Copa Argentina en vivo gratis en español. Cruces, horarios y todos los partidos disponibles hoy en un solo lugar.',
    intro: 'Página creada para búsquedas de Copa Argentina en vivo, con enfoque informativo en español y acceso rápido a los encuentros disponibles del día.',
    keywords: ['copa argentina', 'copa argentina en vivo', 'partidos copa argentina', 'futbol argentino hoy', 'river copa argentina', 'boca copa argentina'],
  },
  {
    slug: 'liga-betplay',
    label: 'Liga BetPlay',
    title: 'Liga BetPlay En Vivo - Ver Fútbol Colombiano Gratis | 1RojaDirecta',
    description: 'Ver Liga BetPlay en vivo gratis. Millonarios, Nacional, América de Cali, Junior y más fútbol colombiano en español.',
    intro: 'Hub optimizado para búsquedas sobre Liga BetPlay en vivo, pensado para usuarios de Colombia y toda Latinoamérica que buscan fútbol en español.',
    keywords: ['liga betplay', 'futbol colombiano en vivo', 'millonarios en vivo', 'nacional en vivo', 'america de cali en vivo', 'junior en vivo'],
  },
  {
    slug: 'liga-pro-ecuador',
    label: 'Liga Pro Ecuador',
    title: 'Liga Pro Ecuador En Vivo - Ver Fútbol Ecuatoriano Gratis | 1RojaDirecta',
    description: 'Ver Liga Pro Ecuador en vivo gratis. Barcelona SC, Emelec, LDU Quito e Independiente del Valle con cobertura en español.',
    intro: 'Página orientada a búsquedas de Liga Pro Ecuador en vivo, horarios, canales y seguimiento de equipos ecuatorianos más consultados.',
    keywords: ['liga pro ecuador', 'futbol ecuatoriano en vivo', 'barcelona sc en vivo', 'emelec en vivo', 'ldu quito en vivo', 'independiente del valle en vivo'],
  },
  {
    slug: 'primera-division-chile',
    label: 'Primera División Chile',
    title: 'Liga Chilena En Vivo - Ver Primera División Gratis | 1RojaDirecta',
    description: 'Ver Primera División de Chile en vivo gratis. Colo-Colo, Universidad de Chile, Católica y más fútbol chileno en español.',
    intro: 'Sección hecha para búsquedas sobre liga chilena en vivo, partidos de hoy y cobertura de clubes más populares para el público hispanohablante.',
    keywords: ['liga chilena', 'primera division chile', 'colo colo en vivo', 'universidad de chile en vivo', 'catolica en vivo', 'futbol chileno en vivo'],
  },
  {
    slug: 'liga-1-peru',
    label: 'Liga 1 Perú',
    title: 'Liga 1 Perú En Vivo - Ver Fútbol Peruano Gratis | 1RojaDirecta',
    description: 'Ver Liga 1 Perú en vivo gratis. Alianza Lima, Universitario, Sporting Cristal y más fútbol peruano en español.',
    intro: 'Página pensada para búsquedas de Liga 1 Perú en vivo, horarios y dónde ver partidos de equipos peruanos desde una interfaz 100% en español.',
    keywords: ['liga 1 peru', 'futbol peruano en vivo', 'alianza lima en vivo', 'universitario en vivo', 'sporting cristal en vivo', 'liga peruana'],
  },
  {
    slug: 'liga-uruguaya',
    label: 'Liga Uruguaya',
    title: 'Liga Uruguaya En Vivo - Ver Fútbol de Uruguay Gratis | 1RojaDirecta',
    description: 'Ver Liga Uruguaya en vivo gratis. Peñarol, Nacional y más fútbol de Uruguay con acceso rápido en español.',
    intro: 'Hub editorial para búsquedas sobre Liga Uruguaya en vivo, con foco en Peñarol, Nacional y el tráfico hispanohablante de la región.',
    keywords: ['liga uruguaya', 'futbol uruguayo en vivo', 'penarol en vivo', 'nacional uruguay en vivo', 'campeonato uruguayo', 'liga auf'],
  },
  {
    slug: 'concacaf-champions-cup',
    label: 'Concacaf Champions Cup',
    title: 'Concacaf Champions Cup En Vivo - Ver Partidos Gratis | 1RojaDirecta',
    description: 'Ver Concacaf Champions Cup en vivo en español. Clubes de México, Estados Unidos y Centroamérica con acceso rápido a los partidos de hoy.',
    intro: 'Página creada para búsquedas sobre Concacaf Champions Cup en vivo, con fuerte orientación a México, Centroamérica y comunidad hispana en Estados Unidos.',
    keywords: ['concacaf champions cup', 'concachampions en vivo', 'liga mx concacaf', 'futbol concacaf', 'club america concacaf', 'chivas concacaf'],
  },
];

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
