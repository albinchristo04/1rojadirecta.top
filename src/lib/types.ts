// ─── Raw JSON types ────────────────────────────────────────────────────────────
export interface RawChannel {
  label: string;
  embed_url: string;
  stable_url?: string;
  available?: boolean;
}

export interface RawMatch {
  day: string;
  index: number;
  title: string;
  time: string;
  embed_url: string;
  streams_available: number;
  channels: RawChannel[];
}

export interface RawData {
  generated: string;
  total: number;
  matches: RawMatch[];
}

// ─── Normalized types ─────────────────────────────────────────────────────────
export interface Channel {
  id: string;
  lang: string;
  label: string;
  embedUrl: string;
  stableUrl?: string;
  available: boolean;
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
