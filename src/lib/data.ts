import type { Channel, Match, RawData, RawMatch } from './types';
import { DATA_URL, SPORT_LABELS } from './config';
import { parseTeams, matchSlug, toSlug } from './slugs';

// ─── Fetch & cache ─────────────────────────────────────────────────────────────
let _cache: Match[] | null = null;
let _generatedAt: string | null = null;

export interface MatchFeedSnapshot {
  matches: Match[];
  generatedAt: string | null;
}

export async function fetchMatches(): Promise<Match[]> {
  const snapshot = await fetchMatchFeed();
  return snapshot.matches;
}

export async function fetchMatchFeed(): Promise<MatchFeedSnapshot> {
  if (_cache) {
    return {
      matches: _cache,
      generatedAt: _generatedAt,
    };
  }

  let raw: RawData;
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.json() as RawData;
  } catch (e) {
    console.error('[data] Fetch failed, returning empty list:', e);
    return {
      matches: _cache ?? [],
      generatedAt: _generatedAt,
    };
  }

  const matches = raw.matches
    .map(match => normalizeMatch(match, raw.generated))
    .filter(Boolean) as Match[];
  _cache = matches;
  _generatedAt = raw.generated ?? null;
  return {
    matches,
    generatedAt: _generatedAt,
  };
}

// ─── Normalize a raw event into a Match ────────────────────────────────────────
function normalizeMatch(rawMatch: RawMatch, generatedAt: string): Match | null {
  const [team1, team2] = parseTeams(rawMatch.title);
  if (!team1 || !team2) return null;

  const sport = inferSport(rawMatch.title);
  const fallbackLeague = leagueFallbackForSport(sport);

  const channels = normalizeChannels(rawMatch.channels);
  if (channels.length === 0) return null;

  const slug = matchSlug(team1, team2);
  const date = resolveMatchDate(generatedAt, rawMatch.day);
  const [dd, mm, yyyy] = date.split('-');
  const [hh, min] = (rawMatch.time ?? '00:00').split(':');
  const utcDatetime = `${yyyy}-${mm}-${dd}T${hh.padStart(2, '0')}:${min.padStart(2, '0')}:00Z`;

  const title = `${team1} vs ${team2} en Vivo - ${fallbackLeague.label} | 1RojaDirecta`;
  const description = `Ver ${team1} vs ${team2} en vivo hoy. ${fallbackLeague.label} — ${dd}/${mm}/${yyyy} a las ${rawMatch.time} UTC. ${channels.length} canales disponibles. ¿Dónde mirar? Aquí gratis.`;

  return {
    slug,
    team1,
    team2,
    league: fallbackLeague.label,
    leagueSlug: fallbackLeague.slug,
    leagueLabel: fallbackLeague.label,
    sport,
    date,
    time: rawMatch.time,
    utcDatetime,
    channels,
    title,
    description,
  };
}

function leagueFallbackForSport(sport: string): { label: string; slug: string } {
  const sportSlugMap: Record<string, string> = {
    futbol: 'futbol',
    mlb: 'mlb',
    beisbol: 'beisbol',
    nba: 'nba',
    nhl: 'nhl',
    motogp: 'motogp',
  };

  return {
    label: SPORT_LABELS[sport] ?? 'Deportes en vivo',
    slug: sportSlugMap[sport] ?? 'futbol',
  };
}

function normalizeChannels(channels: RawMatch['channels']): Channel[] {
  return channels
    .filter(channel => channel.available !== false && (channel.stable_url || channel.embed_url))
    .map((channel, index) => {
      const label = channel.label?.trim() || `CH ${index + 1}`;
      return {
        id: String(index + 1),
        lang: label.toLowerCase(),
        label,
        embedUrl: channel.embed_url,
        stableUrl: channel.stable_url,
        available: channel.available !== false,
      };
    });
}

function resolveMatchDate(generatedAt: string, dayLabel: string): string {
  const generated = new Date(generatedAt);
  if (Number.isNaN(generated.getTime())) {
    return formatDate(new Date());
  }

  const targetDay = weekdayIndex(dayLabel);
  if (targetDay === null) {
    return formatDate(generated);
  }

  const currentDay = generated.getUTCDay();
  const offset = (targetDay - currentDay + 7) % 7;
  const targetDate = new Date(Date.UTC(
    generated.getUTCFullYear(),
    generated.getUTCMonth(),
    generated.getUTCDate() + offset,
  ));

  return formatDate(targetDate);
}

function weekdayIndex(dayLabel: string): number | null {
  const normalized = dayLabel?.trim().toUpperCase();
  switch (normalized) {
    case 'SUNDAY':
      return 0;
    case 'MONDAY':
      return 1;
    case 'TUESDAY':
      return 2;
    case 'WEDNESDAY':
      return 3;
    case 'THURSDAY':
      return 4;
    case 'FRIDAY':
      return 5;
    case 'SATURDAY':
      return 6;
    default:
      return null;
  }
}

function formatDate(date: Date): string {
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getUTCFullYear());
  return `${dd}-${mm}-${yyyy}`;
}

function inferSport(title: string): string {
  const normalized = toSlug(title);
  if (normalized.includes('motogp') || normalized.includes('formula-1') || normalized.includes('grand-prix')) {
    return 'motogp';
  }
  if (normalized.includes('nba')) {
    return 'nba';
  }
  if (normalized.includes('nhl')) {
    return 'nhl';
  }
  if (normalized.includes('mlb') || normalized.includes('baseball')) {
    return 'mlb';
  }
  return 'futbol';
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
    const t1 = toSlug(m.team1);
    const t2 = toSlug(m.team2);
    return t1 === teamSlug || t2 === teamSlug;
  });
}
