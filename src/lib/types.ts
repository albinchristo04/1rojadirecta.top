// ─── Raw JSON types ────────────────────────────────────────────────────────────
export interface RawChannel {
  id: string;
  lang: string;
}

export interface RawEvent {
  date: string;         // "DD-MM-YYYY"
  time: string;         // "HH:MM"
  datetime: string;     // "DD-MM-YYYY HH:MM"
  league: string;
  teams: string;        // "Team1 - Team2"
  channels: RawChannel[];
  raw_line: string;
}

export interface RawData {
  extractor: string;
  website: string;
  last_updated: string;
  total_events: number;
  events: RawEvent[];
}

// ─── Normalized types ─────────────────────────────────────────────────────────
export interface Channel {
  id: string;
  lang: string;
}

export interface Match {
  // Identity
  slug: string;
  team1: string;
  team2: string;
  league: string;
  leagueSlug: string;
  leagueLabel: string;
  sport: string;

  // Timing
  date: string;         // "DD-MM-YYYY"
  time: string;         // "HH:MM" UTC
  utcDatetime: string;  // ISO string

  // Channels
  channels: Channel[];

  // SEO
  title: string;        // "Team1 vs Team2 en Vivo - League"
  description: string;
}

export interface SportHub {
  sport: string;
  label: string;
  slug: string;
  matches: Match[];
}

export interface LeagueHub {
  league: string;
  leagueSlug: string;
  leagueLabel: string;
  sport: string;
  matches: Match[];
}

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}
