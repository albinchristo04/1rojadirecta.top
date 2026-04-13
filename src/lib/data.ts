import type { RawData, RawEvent, Match } from './types';
import { LEAGUE_MAP, DATA_URL } from './config';
import { parseTeams, matchSlug, toSlug } from './slugs';

// ─── Fetch & cache ─────────────────────────────────────────────────────────────
let _cache: Match[] | null = null;

export async function fetchMatches(): Promise<Match[]> {
  if (_cache) return _cache;

  let raw: RawData;
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.json() as RawData;
  } catch (e) {
    console.error('[data] Fetch failed, returning empty list:', e);
    return [];
  }

  const matches = raw.events.map(normalizeEvent).filter(Boolean) as Match[];
  _cache = matches;
  return matches;
}

// ─── Normalize a raw event into a Match ────────────────────────────────────────
function normalizeEvent(ev: RawEvent): Match | null {
  const [team1, team2] = parseTeams(ev.teams);
  if (!team1 || !team2) return null;

  const leagueInfo = LEAGUE_MAP[ev.league] ?? {
    slug: toSlug(ev.league),
    sport: 'futbol',
    label: ev.league,
  };

  const slug = matchSlug(team1, team2);

  // Parse datetime to ISO — data is in UTC (server time is UTC)
  // Format: "DD-MM-YYYY HH:MM"
  const [datePart, timePart] = ev.datetime.split(' ');
  const [dd, mm, yyyy] = datePart.split('-');
  const [hh, min] = (timePart ?? '00:00').split(':');
  const utcDatetime = `${yyyy}-${mm}-${dd}T${hh.padStart(2,'0')}:${min.padStart(2,'0')}:00Z`;

  const title = `${team1} vs ${team2} en Vivo - ${leagueInfo.label} | 1RojaDirecta`;
  const description = `Ver ${team1} vs ${team2} en vivo hoy. ${leagueInfo.label} — ${dd}/${mm}/${yyyy} a las ${timePart} UTC. ${ev.channels.length} canales disponibles. ¿Dónde mirar? Aquí gratis.`;

  return {
    slug,
    team1,
    team2,
    league: ev.league,
    leagueSlug: leagueInfo.slug,
    leagueLabel: leagueInfo.label,
    sport: leagueInfo.sport,
    date: ev.date,
    time: ev.time,
    utcDatetime,
    channels: ev.channels,
    title,
    description,
  };
}

// ─── Query helpers ─────────────────────────────────────────────────────────────

export function groupBySport(matches: Match[]): Record<string, Match[]> {
  const groups: Record<string, Match[]> = {};
  for (const m of matches) {
    if (!groups[m.sport]) groups[m.sport] = [];
    groups[m.sport].push(m);
  }
  return groups;
}

export function groupByLeague(matches: Match[]): Record<string, Match[]> {
  const groups: Record<string, Match[]> = {};
  for (const m of matches) {
    const key = m.leagueSlug;
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  }
  return groups;
}

export function getUniqueSports(matches: Match[]): string[] {
  return [...new Set(matches.map(m => m.sport))];
}

export function getUniqueLeagueSlugs(matches: Match[]): string[] {
  return [...new Set(matches.map(m => m.leagueSlug))];
}

export function getMatchesForSport(matches: Match[], sport: string): Match[] {
  return matches.filter(m => m.sport === sport);
}

export function getMatchesForLeague(matches: Match[], leagueSlug: string): Match[] {
  return matches.filter(m => m.leagueSlug === leagueSlug);
}

export function getMatchBySlug(matches: Match[], slug: string): Match | undefined {
  return matches.find(m => m.slug === slug);
}

export function getTeamMatches(matches: Match[], teamSlug: string): Match[] {
  return matches.filter(m => {
    const { toSlug: _ts } = { toSlug };
    const t1 = toSlug(m.team1);
    const t2 = toSlug(m.team2);
    return t1 === teamSlug || t2 === teamSlug;
  });
}
