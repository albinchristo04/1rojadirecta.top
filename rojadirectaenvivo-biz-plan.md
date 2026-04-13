# 1rojadirecta.top — Full Build & SEO Plan v3

> **Context:** Primary domain `1rojadirecta.top` (active build target).
> Sister to `rojadirectaenvivo.top` — completely independent footprint.
> This domain targets everything `.top` missed, plus doubles down on what the GSC data proved works.
> `.top` hit ~14,400 clicks in month 1. `1rojadirecta.top` is built to beat that by month 2.

---

## What .top Taught Us (GSC Data — Month 1)

| Finding | Data Signal | Action on .biz |
|---------|------------|----------------|
| "Tarjeta roja" is a second brand we accidentally rank for | 600+ clicks from tarjeta-roja-* variants with zero targeting | Dedicated `/tarjeta-roja/` hub + title tags updated |
| MLB/beisbol is the #1 sport by query density | 4 of top 20 queries are MLB-related, pos 3.8 on head term | MLB gets its own section with team pages from day 1 |
| "Dónde mirar X contra Y" — impressions but no clicks | 606 impressions at pos 6, only 10 clicks (1.65% CTR) | FAQ schema + featured snippet targeting on all match pages |
| Pirlo TV at pos 73 still drove 213 clicks | Users scrolled 7 pages and still clicked | `/pirlo-tv/` as a first-class page, not just a keyword |
| Spain (4,273) + Mexico (2,635) = 48% of all traffic | Clear geographic concentration | Liga MX and La Liga hubs built from day 1 |
| Accent/typo variants rank at pos 15–18 with 500+ impr | "roja dirécta", "rojadirécta mlb" etc | All variants baked into meta, schema, and page copy |
| "Roja directa pirlo" — 752 impressions, pos 11, 9.8% CTR | Triple brand combo underserved | Dedicated brand-combo page `/roja-directa-pirlo-tv/` |

---

## Domain & Stack

**Domain:** `1rojadirecta.top`
**Stack:** Astro (static site generator) + Cloudflare Pages
**Language:** Spanish only
**Content:** 100% programmatic (zero manual)
**Data Source:** `https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json`
**Rebuild:** Every 3 hours via GitHub Actions cron
**Relationship to rojadirectaenvivo.top:** Completely independent. No cross-linking. No shared footprint. Different Cloudflare account if possible.

---

## Keyword Strategy

### Tier 1 — Head Terms (500K–5M monthly searches)
- `pirlo tv` (5M) — .top ranking at pos 73, massive opportunity
- `futbol tv`, `futbol en vivo`, `futbol en la tv` (500K each)
- `la roja directa`, `roja directa en vivo` (500K each)
- `tarjeta roja tv` — new addition, proven in .top data

### Tier 2 — Mid Terms (50K monthly searches)
- `pirlo tv futbol en vivo`, `roja directa hd`, `futbol en vivo hoy`
- `pirlo tv en vivo`, `roja directa pirlo tv`, `copa libertadores hoy`
- `liga campeones`, `directa futbol`, `futbol hoy en vivo`
- `tarjeta roja en vivo`, `tarjeta roja pirlo tv` — proven converters on .top
- `roja directa pirlo` — 752 impressions/mo on .top, barely targeted

### Tier 3 — Long-tail (5K monthly searches)
- `roja directa nba`, `champions en vivo`, `copa sudamericana en vivo`
- Team-specific: `roja directa [team]`, `[team] en vivo`
- `roja directa [team] mlb` — MLB team combos (Yankees, Dodgers, Padres, Red Sox)
- `dónde mirar [team1] contra [team2]` — featured snippet targets
- `roja dirécta [sport]` — accent variant cluster (proven on .top)

### Trending (900–9900% growth)
- Copa Libertadores terms, Copa Sudamericana terms, Champions League terms
- Liga MX matchday terms (America, Chivas, Cruz Azul)
- La Liga matchday terms (Real Madrid, Atletico, Barcelona)

---

## Page Types & URL Structure

### 1. Home Page (`/`)
**Target keywords:** `roja directa en vivo`, `futbol en vivo`, `la roja directa`, `pirlo tv`, `tarjeta roja tv`

**Content:**
- Hero: "Partidos en vivo hoy — Roja Directa · Tarjeta Roja TV · Pirlo TV"
- Today's matches grouped by league with countdown timers
- Priority sections: MLB (top), Futbol (second), NBA/NHL below
- "Actualizado: {datetime}" freshness timestamp
- Internal links to all hubs, league pages, today's match pages
- `WebSite` schema with `SearchAction`

---

### 2. Sport Hub Pages

| URL | Target Keywords | Priority |
|-----|----------------|----------|
| `/futbol/` | `futbol tv`, `futbol en vivo hoy` | High |
| `/beisbol/` | `roja directa mlb`, `tarjeta roja mlb`, `beisbol en vivo` | **#1 Priority** |
| `/nba/` | `roja directa nba`, `nba en vivo` | High |
| `/nhl/` | `nhl en vivo`, `roja directa hockey` | Medium |
| `/mlb/` | `mlb en vivo`, `ver mlb gratis`, `mlb libre en vivo` | **#1 Priority** |
| `/baloncesto/` | `baloncesto en vivo` | Medium |
| `/motogp/` | `roja directa motogp`, `rojadirecta motogp` | Medium |

> Note: `/mlb/` and `/beisbol/` are separate. `/mlb/` targets English-language MLB search intent from US Hispanics. `/beisbol/` targets Spanish-language search intent from Latin America. Both proven in .top data.

---

### 3. League Hub Pages

| URL | JSON League Name | Target Keywords | Priority |
|-----|-----------------|----------------|----------|
| `/champions-league/` | Ligue Des Champions | `champions en vivo`, `liga campeones` | High |
| `/copa-libertadores/` | Copa Libertadores | `copa libertadores en vivo hoy` | High |
| `/copa-sudamericana/` | Copa Sudamericana | `copa sudamericana en vivo` | High |
| `/liga-mx/` | Liga MX | `liga mx en vivo`, `america en vivo hoy` | **#1 Priority** |
| `/laliga/` | La Liga | `laliga en vivo`, `real madrid en vivo` | **#1 Priority** |
| `/copa-argentina/` | Copa Argentina | `copa argentina en vivo` | Medium |
| `/liga-ecuador/` | Ecuador Ligapro | `liga ecuador en vivo` | Medium |
| `/concacaf/` | Concacaf Champions Cup | `concacaf en vivo` | Medium |

> Liga MX and La Liga are new priorities based on Spain (#1 country) and Mexico (#2 country) in .top data.

---

### 4. New Brand-Specific Pages (Missing on .top)

These pages did not exist on .top but the GSC data proved demand for them.

#### `/tarjeta-roja/`
**Target keywords:** `tarjeta roja tv`, `tarjeta roja en vivo`, `tarjeta roja pirlo`, `tarjeta roja mlb`, `tarjeta roja directa`

**Content:**
- H1: "Tarjeta Roja TV en Vivo — Ver Partidos Gratis"
- Explanation paragraph: "Tarjeta Roja TV es otro nombre para acceder a los mismos partidos en vivo. Aqui puedes ver todos los deportes disponibles hoy."
- Full match listing (same as home, different template)
- No canonical redirect — this is a real page targeting real brand searches
- Schema: `WebPage` + `ItemList`

#### `/pirlo-tv/`
**Target keywords:** `pirlo tv`, `pirlotv`, `pirlo tv futbol en vivo`, `pirlo tv en vivo`, `pirlo tv roja directa`

**Content:**
- H1: "Pirlo TV — Futbol y Deportes en Vivo"
- Full match listing for today
- Dedicated server selector using the same channel data
- Note: .top ranked this at pos 73 and still got 213 clicks. A dedicated page will rank this at pos 10–20 minimum.

#### `/roja-directa-pirlo-tv/`
**Target keywords:** `roja directa pirlo tv`, `pirlo tv roja directa`, `roja directa pirlo`, `rojadirecta pirlo tv`

**Content:**
- H1: "Roja Directa Pirlo TV — Ver Partidos en Vivo"
- This triple-brand combo has 752 impressions/month at pos 11 on .top with zero targeting. One focused page will push it to pos 3–5.
- Match listing + player

#### `/tarjeta-roja-pirlo-tv/`
**Target keywords:** `tarjeta roja pirlo`, `tarjeta roja pirlo tv`, `pirlo tarjeta roja`

**Content:**
- Captures the three-way brand overlap search cluster
- 215+ impressions/month proven on .top, position 16 with no targeting

---

### 5. MLB Team Pages (New — .top missed entirely)

Each team gets a dedicated page under `/equipo/` with MLB-specific slug:

| URL | Team | Target Keywords |
|-----|------|----------------|
| `/equipo/new-york-yankees/` | Yankees | `roja directa yankees`, `yankees en vivo gratis` |
| `/equipo/los-angeles-dodgers/` | Dodgers | `roja directa dodgers`, `dodgers en vivo` |
| `/equipo/san-diego-padres/` | Padres | `roja directa padres`, `padres vs red sox donde ver` |
| `/equipo/boston-red-sox/` | Red Sox | `red sox vs padres en vivo`, `roja directa red sox` |
| `/equipo/houston-astros/` | Astros | `roja directa astros`, `astros en vivo` |
| `/equipo/pittsburgh-pirates/` | Pirates | `dónde mirar pittsburgh pirates` (606 impr on .top) |
| `/equipo/arizona-diamondbacks/` | Diamondbacks | `dónde mirar arizona diamondbacks` (175 impr on .top) |

---

### 6. Match Pages (`/partido/{team1}-vs-{team2}/`)

Same as .top spec with these additions:

**New: "Dónde mirar" FAQ block on every match page**
Every match page gets a hardcoded FAQ section targeting the `dónde mirar X contra Y` search pattern:

```html
<section class="faq">
  <h2>Preguntas frecuentes</h2>
  <dl>
    <dt>¿Dónde mirar {team1} contra {team2}?</dt>
    <dd>Puedes ver {team1} vs {team2} en vivo gratis aqui en RojaDirectaEnVivo.biz.
        El partido comienza a las {time}. Disponible en {n} canales.</dd>
    <dt>¿A que hora juega {team1} hoy?</dt>
    <dd>{team1} juega a las {time} contra {team2} por {league}.</dd>
    <dt>¿En que canal se transmite {team1} vs {team2}?</dt>
    <dd>El partido se transmite en {channel_list}. Ver en vivo gratis con multiples servidores.</dd>
  </dl>
</section>
```

This FAQ also gets `FAQPage` JSON-LD schema — the exact format Google uses for featured snippets.

**New: Timezone row**
```
21:00 Madrid · 15:00 CDMX · 16:00 Bogotá · 17:00 Buenos Aires · 22:00 París
```
Targets "a que hora juega X hoy" from every timezone in the user base.

---

### 7. Alternate URL Pages (`/ver/` and `/en-vivo/`)

**Two alternate clusters instead of one:**

- `/ver/{slug}/` → canonical to `/partido/{slug}/` — targets "ver X en vivo gratis"
- `/en-vivo/{slug}/` → canonical to `/partido/{slug}/` — targets "X en vivo" cluster

Three URL patterns per match × 500+ matches per rebuild = massive long-tail surface area.

---

### 8. Static Utility Pages

| URL | Purpose |
|-----|---------|
| `/404.astro` | "Este partido ya terminó" + today's matches |
| `/sitemap.xml` | Auto-generated, full crawl coverage |
| `/feed.xml` | RSS — freshness signal for Google |
| `/robots.txt` | Full crawl allowed |
| `/manifest.json` | PWA manifest |
| `/indexnow-key.txt` | IndexNow verification |

---

## Player Architecture

Same as .top:

```
https://bolaloca.my/player/{server_id}/{channel_id}
```

`server_id` = 1–4, `channel_id` from match data.

### Match Page Layout

```
┌──────────────────────────────────────────────────┐
│ Breadcrumb: Inicio > Beisbol > MLB > Yankees     │
│                                                  │
│ H1: New York Yankees vs San Diego Padres en Vivo │
│ MLB · 09 Abril 2026 · 21:00 ET / 15:00 CDMX     │
│                                                  │
│ ┌──────────────────────────────────────────┐     │
│ │          IFRAME PLAYER (16:9)            │     │
│ └──────────────────────────────────────────┘     │
│                                                  │
│ Idioma: [ES] [EN] [FR] [IT] [DE] [US] [PT]       │
│ Canal:  [12] [161] [68] [78] [87]                │
│ Servidor: [1] [2] [3] [4]                        │
│                                                  │
│ 21:00 Madrid · 15:00 CDMX · 16:00 Bogotá        │
│                                                  │
│ ── Preguntas frecuentes ──                       │
│ ¿Dónde mirar Yankees contra Padres?              │
│ ¿A qué hora juega Yankees hoy?                   │
│ ¿En qué canal se transmite este partido?         │
│                                                  │
│ ── Más Partidos Hoy ──                           │
│ • Red Sox vs Astros · 21:00                      │
│ • Cavaliers vs Hawks · 03:00                     │
└──────────────────────────────────────────────────┘
```

---

## SEO Architecture

### Title Tags

| Page Type | Pattern |
|-----------|---------|
| Home | `Roja Directa En Vivo · Tarjeta Roja TV · Pirlo TV \| 1RojaDirecta` |
| /tarjeta-roja/ | `Tarjeta Roja TV En Vivo - Ver Partidos Gratis \| 1RojaDirecta` |
| /pirlo-tv/ | `Pirlo TV En Vivo - Futbol y Deportes en Directo \| 1RojaDirecta` |
| /roja-directa-pirlo-tv/ | `Roja Directa Pirlo TV En Vivo - Partidos Gratis \| 1RojaDirecta` |
| Sport Hub | `{Sport} En Vivo Hoy - Ver {Sport} Gratis \| 1RojaDirecta` |
| /mlb/ | `MLB En Vivo - Beisbol en Directo Gratis · Roja Directa MLB \| 1RojaDirecta` |
| /liga-mx/ | `Liga MX En Vivo Hoy - Ver America, Chivas, Cruz Azul \| 1RojaDirecta` |
| /laliga/ | `La Liga En Vivo - Ver Real Madrid, Barcelona, Atletico \| 1RojaDirecta` |
| League Hub | `{League} En Vivo - Partidos Hoy Gratis \| 1RojaDirecta` |
| Match | `{Team1} vs {Team2} En Vivo - {League} · Dónde Ver \| 1RojaDirecta` |
| Team | `{Team} En Vivo - Proximos Partidos · Roja Directa \| 1RojaDirecta` |

> Key change from .top: title tags now include "Tarjeta Roja TV" on home and sport hubs. Match page titles use "Dónde Ver" phrasing to target that query cluster.

### Meta Descriptions

| Page | Pattern |
|------|---------|
| Home | "Ver deportes en vivo gratis. Roja Directa · Tarjeta Roja TV · Pirlo TV. Futbol, MLB, NBA en directo hoy con multiples canales." |
| /tarjeta-roja/ | "Tarjeta Roja TV en vivo gratis. Ver futbol, beisbol, baloncesto en directo. {n} partidos disponibles hoy." |
| /pirlo-tv/ | "Pirlo TV en vivo. Ver futbol y deportes en directo gratis. {n} partidos disponibles con multiples canales y servidores." |
| Match | "Ver {team1} vs {team2} en vivo hoy. {league} — {date} a las {time}. {n} canales disponibles. ¿Dónde mirar? Aqui gratis." |
| MLB Match | "Ver {team1} contra {team2} en vivo. MLB {date} · {time} ET / {time_mx} CDMX. Gratis en RojaDirectaEnVivo." |
| Hub | "Ver {league} en vivo. {n} partidos hoy en directo gratis. Multiples canales en espanol, ingles y portugues." |

### Heading Strategy
- One H1 per page — primary keyword exact match
- H2 for "Partidos de Hoy", "Preguntas Frecuentes", "Mas Partidos"
- H3 for individual match cards and FAQ questions
- FAQ `<dt>` elements styled as H3 equivalent for visual hierarchy

### Accent & Typo Variant Strategy

.top data shows these variants have 500+ impressions/month each with zero targeting:
- `roja dirécta` (accent on e)
- `roja dirécta tv`
- `roja dirécta mlb`
- `roja dirécta beisbol`

**Fix:** Add these to the `<meta name="keywords">` (weak signal but present), include them naturally in the programmatic SEO text blocks, and add them as alternate name in schema `alternateName` field.

```json
{
  "@type": "WebSite",
  "name": "1RojaDirecta",
  "url": "https://1rojadirecta.top",
  "alternateName": ["Roja Directa", "Tarjeta Roja TV", "Pirlo TV", "RojaDirecta", "Roja Dirécta", "1 Roja Directa"]
}
```

---

## Schema.org (JSON-LD)

### All Pages
- `BreadcrumbList`
- `WebSite` with `SearchAction` (home only)
- `Organization` with `alternateName` array (new — builds entity)

### Match Pages
```json
{
  "@type": "SportsEvent",
  "name": "{team1} vs {team2}",
  "startDate": "{ISO datetime}",
  "location": { "@type": "VirtualLocation", "url": "https://1rojadirecta.top/partido/{slug}/" },
  "organizer": { "@type": "SportsOrganization", "name": "{league}" },
  "competitor": [
    { "@type": "SportsTeam", "name": "{team1}" },
    { "@type": "SportsTeam", "name": "{team2}" }
  ]
}
```

### Match Pages — FAQPage (NEW — targets featured snippets)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde mirar {team1} contra {team2}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ver {team1} vs {team2} en vivo gratis en 1rojadirecta.top. El partido comienza a las {time}. Disponible en {n} canales."
      }
    },
    {
      "@type": "Question",
      "name": "¿A qué hora juega {team1} hoy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{team1} juega a las {time} ({time_mx} hora México, {time_co} hora Colombia) contra {team2} por {league}."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué canal se transmite {team1} vs {team2}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El partido se transmite en {channel_list}. Ver gratis con {server_count} servidores en RojaDirectaEnVivo."
      }
    }
  ]
}
```

### Hub Pages — FAQPage (NEW)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde ver {league/sport} en vivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ver {league} en vivo gratis en 1rojadirecta.top. Hoy hay {n} partidos disponibles: {match1}, {match2}..."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué partidos hay hoy de {sport}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoy hay {n} partidos de {sport}: {match_list_sentence}. Todos disponibles en directo gratis."
      }
    }
  ]
}
```

### Hub Pages — ItemList
```json
{
  "@type": "ItemList",
  "name": "Partidos de {league} en vivo",
  "numberOfItems": "{n}",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://1rojadirecta.top/partido/{slug}/" }
  ]
}
```

---

## Programmatic SEO Text Templates

### Home Page Hero
```
Ver {n} partidos en vivo hoy gratis. Roja Directa En Vivo, Tarjeta Roja TV y Pirlo TV en un solo lugar.
Futbol, MLB, NBA, NHL y más deportes en directo con multiples canales en español, inglés y portugués.
```

### Sport Hub — Futbol
```
Hoy hay {n} partidos de fútbol en vivo. Ver {match1} por {league1} a las {time1},
{match2} por {league2} a las {time2}{, y {n-2} partidos más}. Todos los partidos de fútbol
en directo gratis con canales en español, inglés, francés e italiano.
Actualizado: {build_datetime}.
```

### Sport Hub — MLB/Beisbol
```
Hoy hay {n} partidos de béisbol MLB en vivo. Ver {match1} a las {time1} ET ({time1_mx} CDMX),
{match2} a las {time2} ET. Roja Directa MLB · Tarjeta Roja MLB · Pirlo TV MLB —
todos los partidos de la Major League Baseball en directo gratis.
```

### League Hub — Champions League
```
Champions League en vivo hoy. {n} partidos disponibles: {match1} a las {time1},
{match2} a las {time2}. Ver la UEFA Champions League (Liga de Campeones) en directo gratis
en RojaDirectaEnVivo con canales en {languages}. Actualizado {build_datetime}.
```

### League Hub — Liga MX
```
Liga MX en vivo hoy. {n} partidos disponibles. Ver {match1} a las {time1} hora México,
{match2} a las {time2}. América, Chivas, Cruz Azul, Pumas en directo gratis.
Roja Directa Liga MX — transmisiones disponibles con {server_count} servidores.
```

### Match Page
```
Ver {team1} vs {team2} en vivo por {league}. El partido comienza a las {time}
({time_mx} hora México · {time_co} hora Colombia · {time_es} hora España) del {date}.
Disponible en {channel_count} canales con {server_count} servidores por canal.
Idiomas disponibles: {languages}. Transmisión gratis sin registro.
```

---

## Data Flow & Build Pipeline

### Build-time Data Processing
1. Fetch JSON from `https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json`
2. Fallback to local `rereyano_data.json` if fetch fails
3. Parse and normalize:
   - Extract unique sports, leagues, teams from events
   - Generate URL slugs (lowercase, remove accents, hyphens)
   - Build lookup tables: matches by league, by team, by sport
   - Compute multi-timezone times for each match
   - Generate FAQ text for each match and hub
4. Pass to Astro pages via `getStaticPaths()`
5. On finish: ping Google + Bing sitemaps, POST new URLs to IndexNow

### Sport Mapping

| JSON League Name | Sport Category | Sport Slug | League Slug |
|-----------------|---------------|------------|-------------|
| Ligue Des Champions | Futbol | `/futbol/` | `/champions-league/` |
| Copa Argentina | Futbol | `/futbol/` | `/copa-argentina/` |
| Ecuador Ligapro | Futbol | `/futbol/` | `/liga-ecuador/` |
| Concacaf Champions Cup | Futbol | `/futbol/` | `/concacaf/` |
| Liga MX | Futbol | `/futbol/` | `/liga-mx/` |
| La Liga | Futbol | `/futbol/` | `/laliga/` |
| Copa Libertadores | Futbol | `/futbol/` | `/copa-libertadores/` |
| Copa Sudamericana | Futbol | `/futbol/` | `/copa-sudamericana/` |
| NBA | Baloncesto | `/nba/` | `/nba/` |
| NHL | Hockey | `/nhl/` | `/nhl/` |
| MLB | Beisbol | `/mlb/` | `/mlb/` |
| MotoGP | Motogp | `/motogp/` | `/motogp/` |

### Multi-Timezone Function (`src/lib/timezones.ts`)

```typescript
const TZ_OFFSETS: Record<string, { label: string; offset: number }> = {
  es: { label: 'Madrid', offset: +2 },
  mx: { label: 'CDMX', offset: -5 },
  co: { label: 'Bogotá', offset: -5 },
  ar: { label: 'Buenos Aires', offset: -3 },
  cl: { label: 'Santiago', offset: -3 },
  pe: { label: 'Lima', offset: -5 },
  ve: { label: 'Caracas', offset: -4 },
  us_et: { label: 'ET', offset: -4 },
};

export function getMatchTimezones(utcTime: string): string {
  // Returns: "21:00 Madrid · 15:00 CDMX · 15:00 Bogotá · 18:00 Buenos Aires"
}
```

### Slug Generation Rules
- Teams: lowercase, remove accents, replace spaces/dots with hyphens
  - `Atl. Madrid` → `atletico-madrid`
  - `New York Yankees` → `new-york-yankees`
- Leagues: manual mapping dictionary for SEO slugs
- Matches: `{team1-slug}-vs-{team2-slug}`
- Brand pages: hardcoded slugs (tarjeta-roja, pirlo-tv, etc.)

### Channel Language Labels

| Code | Display |
|------|---------|
| `es` | Español |
| `gb` | Inglés |
| `fr` | Francés |
| `it` | Italiano |
| `de` | Alemán |
| `us` | Inglés (US) |
| `pt` | Portugués |

### Configuration Constants (`src/lib/config.ts`)

```typescript
export const PLAYER_BASE_URL = 'https://bolaloca.my/player';
export const DATA_URL = 'https://raw.githubusercontent.com/albinchristo04/arda/refs/heads/main/rereyano_data.json';
export const SITE_URL = 'https://1rojadirecta.top';
export const SITE_NAME = '1RojaDirecta';
export const SITE_TAGLINE = 'Roja Directa · Tarjeta Roja TV · Pirlo TV';
export const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
export const REBUILD_INTERVAL_HOURS = 3;
```

---

## Internal Linking Architecture

### Links Added on Every Page
- Nav: Inicio · Fútbol · MLB · NBA · NHL · MotoGP · Tarjeta Roja · Pirlo TV
- Footer: all sport hubs + top league hubs + `/tarjeta-roja/` + `/pirlo-tv/`
- Breadcrumb: `Inicio > {Sport} > {League} > {Match}`

### Match Page Links
- League hub → Sport hub → Home
- Both team pages
- `/tarjeta-roja/` mentioned in body text: "También disponible en Tarjeta Roja TV"
- `/pirlo-tv/` mentioned in body text: "Ver también en Pirlo TV"
- "Más Partidos Hoy" section: 4–6 related match links

### Brand Page Links (`/tarjeta-roja/`, `/pirlo-tv/`)
- Linked from nav (always visible)
- Linked from every match page body text
- Linked from home hero section
- Cross-linked to each other

---

## Technical SEO

### Canonical URLs
- `/partido/{slug}/` → self-canonical
- `/ver/{slug}/` → canonical to `/partido/{slug}/`
- `/en-vivo/{slug}/` → canonical to `/partido/{slug}/`
- `/tarjeta-roja/` → self-canonical (not canonical to home — it is its own page)
- `/pirlo-tv/` → self-canonical

### Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://1rojadirecta.top/sitemap.xml
```

### Sitemap Priorities

| Page Type | Priority | Changefreq |
|-----------|----------|-----------|
| Home | 1.0 | hourly |
| /tarjeta-roja/ | 0.9 | daily |
| /pirlo-tv/ | 0.9 | daily |
| /roja-directa-pirlo-tv/ | 0.9 | daily |
| Sport hubs | 0.8 | daily |
| League hubs | 0.8 | daily |
| Match pages | 0.6 | hourly |
| Team pages | 0.5 | daily |
| /ver/ pages | 0.4 | hourly |
| /en-vivo/ pages | 0.4 | hourly |

### Performance
- Zero JS by default (Astro)
- One vanilla JS script for player tabs (~2KB, deferred)
- Inline critical CSS
- No images (pure CSS/text design)
- Preconnect hints on match pages:
  ```html
  <link rel="preconnect" href="https://bolaloca.my">
  <link rel="dns-prefetch" href="https://bolaloca.my">
  ```
- Target: 95+ Lighthouse

### Open Graph + Twitter Card
All pages. Match pages use a dynamic OG description incorporating team names, league, and time.

---

## Search Engine Indexing

### After Every Deploy
```bash
# Sitemap pings
curl "https://www.google.com/ping?sitemap=https://1rojadirecta.top/sitemap.xml"
curl "https://www.bing.com/ping?sitemap=https://1rojadirecta.top/sitemap.xml"

# IndexNow — submit new/changed match URLs
node scripts/indexnow-submit.js
```

### IndexNow Payload
```json
{
  "host": "1rojadirecta.top",
  "key": "<indexnow-key>",
  "keyLocation": "https://1rojadirecta.top/indexnow-key.txt",
  "urlList": [
    "https://1rojadirecta.top/partido/new-match-slug/",
    "https://1rojadirecta.top/ver/new-match-slug/",
    "https://1rojadirecta.top/en-vivo/new-match-slug/"
  ]
}
```

Script diffs current sitemap against previous (cached as `sitemap-prev.xml` artifact) to detect new URLs only.

---

## RSS Feed (`/feed.xml`)

Matches as `<item>` entries. Freshness signal — updated every 3 hours.

```xml
<item>
  <title>New York Yankees vs San Diego Padres en Vivo — MLB</title>
  <link>https://1rojadirecta.top/partido/new-york-yankees-vs-san-diego-padres/</link>
  <pubDate>{match_datetime_rfc2822}</pubDate>
  <description>Ver Yankees vs Padres en vivo hoy. MLB en directo gratis. {n} canales disponibles.</description>
</item>
```

Feed autodiscovery in `<head>`:
```html
<link rel="alternate" type="application/rss+xml" title="Partidos en Vivo" href="/feed.xml">
```

---

## Custom 404 Page

Message: "Este partido ya terminó — pero hay más en vivo ahora"
Content: Today's active matches list, links to all sport hubs, home
Purpose: Catches expired match URLs (yesterday's games), retains SEO equity via internal links.

---

## Cloudflare Configuration

### `public/_headers`
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=10800

/sitemap.xml
  Cache-Control: public, max-age=3600

/feed.xml
  Cache-Control: public, max-age=3600

/tarjeta-roja/
  Cache-Control: public, max-age=10800

/pirlo-tv/
  Cache-Control: public, max-age=10800
```

### Dashboard Settings
- Brotli compression: enabled
- HTML/CSS/JS minification: enabled
- HTTP/3: enabled
- Early Hints: enabled
- IndexNow integration: enabled (secondary signal)

---

## GitHub Actions Deploy Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy

on:
  schedule:
    - cron: '0 */3 * * *'
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}

      - name: Deploy to Cloudflare Pages
        run: npx wrangler pages deploy dist/ --project-name=1rojadirecta-top
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CF_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CF_ACCOUNT_ID }}

      - name: Ping search engines
        run: bash scripts/ping-engines.sh

      - name: Submit IndexNow
        run: node scripts/indexnow-submit.js
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
```

---

## Project Structure

```
1rojadirecta-top/
├── src/
│   ├── layouts/
│   │   └── Base.astro                  # Head, nav, footer, all SEO meta
│   ├── components/
│   │   ├── MatchCard.astro             # Match listing card
│   │   ├── Player.astro                # Iframe + channel/server controls
│   │   ├── Breadcrumb.astro            # Breadcrumb nav
│   │   ├── MatchList.astro             # Matches grouped by league
│   │   ├── FaqBlock.astro              # FAQ section + FAQPage schema
│   │   ├── TimezoneRow.astro           # Multi-timezone time display
│   │   ├── SeoText.astro               # Programmatic long-form text
│   │   ├── Nav.astro                   # Site navigation (includes Tarjeta Roja + Pirlo TV)
│   │   └── Footer.astro                # Hub links footer
│   ├── pages/
│   │   ├── index.astro                 # Home
│   │   ├── futbol.astro                # Futbol hub
│   │   ├── nba.astro                   # NBA hub
│   │   ├── nhl.astro                   # NHL hub
│   │   ├── mlb.astro                   # MLB hub (priority)
│   │   ├── beisbol.astro               # Beisbol hub (Spanish-language MLB)
│   │   ├── motogp.astro                # MotoGP hub
│   │   ├── tarjeta-roja.astro          # Tarjeta Roja brand page (NEW)
│   │   ├── pirlo-tv.astro              # Pirlo TV brand page (NEW)
│   │   ├── roja-directa-pirlo-tv.astro # Triple-brand combo page (NEW)
│   │   ├── tarjeta-roja-pirlo-tv.astro # Alt triple-brand page (NEW)
│   │   ├── [league].astro              # Dynamic league hubs
│   │   ├── partido/
│   │   │   └── [slug].astro            # Match pages
│   │   ├── ver/
│   │   │   └── [slug].astro            # Alt match pages (canonical → /partido/)
│   │   ├── en-vivo/
│   │   │   └── [slug].astro            # Alt match pages (canonical → /partido/)
│   │   ├── equipo/
│   │   │   └── [slug].astro            # Team pages
│   │   ├── 404.astro                   # Custom 404
│   │   ├── sitemap.xml.ts              # Sitemap
│   │   ├── feed.xml.ts                 # RSS feed
│   │   └── robots.txt.ts
│   ├── lib/
│   │   ├── config.ts                   # Constants
│   │   ├── data.ts                     # Fetch + parse JSON
│   │   ├── slugs.ts                    # Slug generation
│   │   ├── seo.ts                      # Title/meta/schema generators
│   │   ├── faq.ts                      # FAQ text generators
│   │   ├── timezones.ts                # Multi-timezone converter (NEW)
│   │   ├── indexnow.ts                 # IndexNow submission
│   │   └── types.ts                    # TypeScript interfaces
│   └── styles/
│       └── global.css                  # Dark theme, responsive
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── indexnow-key.txt
│   └── _headers
├── scripts/
│   ├── ping-engines.sh
│   └── indexnow-submit.js
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## PWA Manifest

```json
{
  "name": "1RojaDirecta",
  "short_name": "1RojaDirecta",
  "description": "Roja Directa · Tarjeta Roja TV · Pirlo TV — Ver deportes en vivo gratis",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#e63946",
  "lang": "es",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## What .biz Does Differently vs .top (Summary)

| Feature | .top | .biz |
|---------|------|------|
| Tarjeta Roja page | No | Yes — `/tarjeta-roja/` |
| Pirlo TV page | No | Yes — `/pirlo-tv/` |
| Brand combo pages | No | Yes — 2 pages |
| MLB team pages | No | Yes — 7 teams |
| Liga MX hub | No | Yes |
| La Liga hub | No | Yes |
| FAQ schema on match pages | No | Yes — FAQPage JSON-LD |
| "Dónde mirar" FAQ text | No | Yes — on every match |
| Multi-timezone display | No | Yes — 7 timezones |
| Alternate match URLs | /ver/ only | /ver/ + /en-vivo/ |
| Nav includes brand pages | No | Yes |
| Title tags include Tarjeta Roja | No | Yes |
| alternateName in schema | No | Yes — 5 variants |
| Accent typo variants in copy | No | Yes |

---

## Realistic Traffic Projection

Based on .top's month-1 performance (14,400 clicks) and the gaps being filled:

| Month | Projected Clicks | Driver |
|-------|-----------------|--------|
| Month 1 | 8,000–12,000 | New domain trust lag, but faster indexing with IndexNow + brand pages indexed immediately |
| Month 2 | 15,000–22,000 | Brand pages rank, MLB team pages pick up, Liga MX and La Liga hubs indexed |
| Month 3 | 25,000–40,000 | FAQ schema stealing featured snippets, Pirlo TV page ranking, full long-tail surface live |
| Month 6 | 50,000–80,000 | Domain age helping, all three URL clusters (/partido/ /ver/ /en-vivo/) indexed |

> These projections assume zero backlink building. Even 10–20 quality links from Spanish football forums or Reddit posts would accelerate month 2–3 significantly.

---

## Upgraded SEO Targeting — 1rojadirecta.top Strategy

> **Goal:** Move beyond keyword stuffing into entity-based topical authority. Google is rewarding sites that *own a topic*, not just pages that *mention keywords*. This section outlines the upgraded targeting approach for `1rojadirecta.top`.

---

### 1. Entity SEO — Build a Named Brand

Google's evolving algorithm needs to recognize `1RojaDirecta` (or `1 Roja Directa`) as a **distinct entity** in the Knowledge Graph, similar to how it recognizes "Pirlo TV" or "Tarjeta Roja" as real named entities.

#### Actions

| Action | Implementation |
|--------|---------------|
| Entity disambiguation page | `/sobre-nosotros/` page with `AboutPage` schema clearly stating: "1RojaDirecta es un sitio de retransmisión en vivo de deportes..." |
| `Organization` schema on every page | `@type: Organization`, `name: "1RojaDirecta"`, `url: "https://1rojadirecta.top"`, `sameAs: []` |
| Google Search Console verification | Verify `1rojadirecta.top` in GSC immediately to establish ownership signal |
| Schema `sameAs` array | Point to social profiles (Twitter/X, Reddit threads, YouTube) to build entity co-occurrence |

```json
{
  "@type": "Organization",
  "name": "1RojaDirecta",
  "url": "https://1rojadirecta.top",
  "logo": "https://1rojadirecta.top/icon-512.png",
  "description": "Ver deportes en vivo gratis. Fútbol, MLB, NBA, NHL en directo.",
  "sameAs": [
    "https://twitter.com/1rojadirecta",
    "https://www.reddit.com/r/rojadirecta"
  ],
  "alternateName": ["1 Roja Directa", "Roja Directa", "Tarjeta Roja TV", "Pirlo TV", "Roja Dirécta"]
}
```

---

### 2. Topical Authority Map — Sports Content Clusters

Instead of isolated pages, build **content clusters** where a pillar page links to all supporting pages and vice versa. Google ranks clusters, not pages.

#### Cluster Architecture

```
FúTBOL CLUSTER
├── /futbol/                  (Pillar — all football matches today)
├── /laliga/                  (Sub-pillar)
├── /champions-league/        (Sub-pillar)
├── /liga-mx/                 (Sub-pillar)
├── /copa-libertadores/       (Sub-pillar)
├── /partido/{slug}/          (Match pages — link back to league + sport)
└── /futbol/partidos-hoy/     (NEW: daily digest page, auto-regenerated)

MLB CLUSTER
├── /mlb/                     (Pillar)
├── /beisbol/                 (Spanish-intent pillar)
├── /equipo/{team}/           (Team pages)
├── /partido/{team1}-vs-{team2}  (Match pages)
└── /mlb/temporada-2026/      (NEW: season hub — targets "MLB 2026" terms)

BRAND CLUSTER
├── /pirlo-tv/                (Pillar)
├── /tarjeta-roja/            (Pillar)
├── /roja-directa-pirlo-tv/   (Combo page)
└── /tarjeta-roja-pirlo-tv/   (Combo page)
```

**Rule:** Every match page must link upward (league → sport → home) AND link to the brand pages in body text. This creates a closed link loop that passes PageRank to the highest-value pages.

---

### 3. Keyword Gap Targeting — New Clusters Not Covered

Based on `.top` GSC data and competitor analysis, these keyword gaps remain unaddressed:

#### 3a. "Como ver" Intent Cluster
| Keyword | Monthly Volume | Target Page |
|---------|---------------|-------------|
| `como ver mlb gratis` | 12,000 | `/mlb/` with dedicated section |
| `como ver champions league gratis` | 8,000 | `/champions-league/` |
| `como ver la liga en vivo gratis` | 5,000 | `/laliga/` |
| `como ver mlb sin cable` | 3,500 | `/mlb/` |

**Fix:** Add a "¿Cómo ver [league/sport] gratis?" H2 section to every league hub page. Uses FAQ schema. Targets "como ver" queries Google treats separately from "ver en vivo" queries.

#### 3b. Date-Specific Query Cluster
| Pattern | Example | Volume |
|---------|---------|--------|
| `partidos de hoy [sport]` | `partidos de hoy mlb` | 40,000/day peak |
| `partidos mlb hoy` | — | 25,000/day peak |
| `partidos de futbol hoy en vivo` | — | 90,000/day peak |
| `que partidos hay hoy` | — | 50,000/day peak |

**Fix:** Home page H1 must include today's date dynamically: `"Partidos en Vivo Hoy — {day} de {month} de {year}"`. Build time inject via Astro.

```astro
---
const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
---
<h1>Partidos en Vivo Hoy — {today}</h1>
```

#### 3c. "Gratis" + "Sin Registro" Intent Cluster
Users searching for free streams use specific trust signals in queries:

| Keyword | Monthly Est. | Action |
|---------|-------------|--------|
| `ver futbol en vivo gratis sin registro` | 30,000 | Add "sin registro" in home meta + hero |
| `ver mlb gratis online` | 15,000 | Add to MLB hub title tag |
| `ver nba gratis hoy` | 8,000 | Add to NBA hub title tag |
| `futbol en vivo sin pagar` | 5,000 | Add to /futbol/ body copy |

**Fix:** Update all sport hub title tags to include "gratis" (already done) and add "sin registro" to the home page meta description and hero copy.

#### 3d. Emerging Sport Trend Keywords (2026)
| Keyword | Growth Signal | Target Page |
|---------|--------------|-------------|
| `liga mx apertura 2026` | Seasonal peak | `/liga-mx/temporada-2026/` |
| `mundial de clubes 2025` | Trending now | `/mundial-clubes/` new page |
| `concacaf nations league` | High impression share | Expand `/concacaf/` page |
| `series del caribe 2026` | Seasonal | `/serie-del-caribe/` new page |
| `eurocopa qualificacion` | Growing | `/eurocopa/` new page |

---

### 4. SERP Feature Targeting — Beyond Blue Links

Google serves multiple SERP features for sports queries. Each one needs a dedicated targeting strategy.

#### 4a. Featured Snippets ("Position 0")
**Target query type:** "¿Dónde ver X?", "¿A qué hora juega X?", "¿Qué canal transmite X?"

**Current approach:** FAQPage JSON-LD on match pages ✓

**Upgrade:** Add a dedicated answer box at the TOP of each match page (above the player), formatted as a direct answer:

```html
<div class="answer-box" itemscope itemtype="https://schema.org/FAQPage">
  <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
    <h2 itemprop="name">¿Dónde ver {team1} vs {team2} en vivo?</h2>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <p itemprop="text">
        Ver <strong>{team1} vs {team2}</strong> en vivo gratis en 1rojadirecta.top.
        El partido comienza a las <strong>{time} ET</strong> ({time_mx} CDMX · {time_es} Madrid).
        Disponible en {n} canales sin registro.
      </p>
    </div>
  </div>
</div>
```

#### 4b. Video Carousel (Google Discover + Video SERP)
**Add `VideoObject` schema to match pages:**

```json
{
  "@type": "VideoObject",
  "name": "{team1} vs {team2} en Vivo — {league}",
  "description": "Ver {team1} vs {team2} en vivo gratis. {league} — {date}.",
  "thumbnailUrl": "https://1rojadirecta.top/og/{slug}.png",
  "uploadDate": "{ISO date}",
  "contentUrl": "https://1rojadirecta.top/partido/{slug}/",
  "embedUrl": "https://bolaloca.my/player/1/{channel_id}"
}
```

> Even though the video is an iframe, declaring VideoObject schema signals to Google that this page serves live video content. This is the pattern used by every major Spanish sports streaming site.

#### 4c. People Also Ask (PAA) — Expansion
PAA boxes appear for sports queries at very high rates. Target them by adding 5–7 questions per hub page (not just match pages):

**Hub Page FAQ additions:**
- "¿Qué es Roja Directa?" → brand awareness question
- "¿Es legal ver fútbol gratis?" → high-volume query, trust signal
- "¿Cómo funciona 1RojaDirecta?" → entity question
- "¿Cuál es la diferencia entre Tarjeta Roja TV y Pirlo TV?" → brand comparison
- "¿En qué países funciona 1RojaDirecta?" → geo-intent query

#### 4d. Sitelinks Searchbox
Already planned via `WebSite` schema with `SearchAction`. Ensure the search endpoint returns match results:

```json
{
  "@type": "WebSite",
  "url": "https://1rojadirecta.top",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://1rojadirecta.top/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

Build `/buscar` as a static page that dynamically filters the current match list client-side (no server required).

---

### 5. Geographic SEO Targeting

Traffic from `.top` is 48% Spain + Mexico. Expand to capture the full Spanish-speaking market.

#### Target Country Breakdown (Revised)

| Country | % Target | Primary Keywords | Content Adjustment |
|---------|----------|-----------------|--------------------|
| Mexico | 25% | `partidos mexicanos hoy`, `liga mx en vivo` | CDMX timezone prominent, Liga MX #1 |
| Spain | 23% | `laliga en vivo`, `champions en vivo` | Madrid timezone, La Liga #1 |
| USA (Latam diaspora) | 15% | `mlb en vivo`, `deportes en vivo` | ET timezone, MLB #1 |
| Colombia | 10% | `futbol colombiano`, `copa sudamericana` | Bogotá timezone |
| Argentina | 8% | `copa libertadores`, `futbol argentino` | Buenos Aires tz |
| Venezuela | 5% | `beisbol venezolano`, `mlb libre` | Caracas tz |
| Chile/Peru | 5% | `copa sudamericana`, `futbol chile` | Santiago/Lima tz |
| Other | 9% | General terms | — |

#### hreflang — Single Language, But Regional Variants
Since the site is Spanish-only, use `hreflang="es"` for maximum coverage. Do NOT split into `es-MX` / `es-ES` variants — this fragments PageRank with no benefit for a programmatic site.

```html
<link rel="alternate" hreflang="es" href="https://1rojadirecta.top/partido/{slug}/" />
<link rel="alternate" hreflang="x-default" href="https://1rojadirecta.top/partido/{slug}/" />
```

---

### 6. Content Velocity Strategy

Freshness is a ranking factor for sports queries. Google's QDF (Query Deserves Freshness) algorithm boosts pages that update when the query surges.

#### Rebuild Schedule (Revised)

| Trigger | Action | Rationale |
|---------|--------|----------|
| Cron every 3 hours | Full site rebuild | Baseline freshness |
| 30 min before any match start | Targeted rebuild of that match page | QDF boost during peak search |
| Match ends (score finalized) | Update match page title to include result | Captures "resultado X vs Y" queries |
| 07:00 UTC daily | Home page + sport hubs forced rebuild | Targets morning "partidos de hoy" searches |

**Implementation:** Add a GitHub Actions workflow step that reads the JSON data and triggers targeted rebuilds 30 minutes before any match, using `workflow_dispatch` + event filtering.

#### "Último Momento" Section (NEW)
Add a live-looking "Últimas Actualizaciones" section to the home page that renders the last 5 matches added/updated. This gives Google crawlers fresh content on every visit:

```astro
<section class="updates">
  <h2>Últimas Actualizaciones</h2>
  <p>Actualizado: {new Date().toISOString()} — {totalMatches} partidos disponibles hoy</p>
  <!-- Match list auto-generated from data -->
</section>
```

---

### 7. Backlink & Off-Page Signals

Programmatic sites need external validation to break through the initial trust deficit.

#### Priority Link Targets

| Source | Method | Value |
|--------|--------|-------|
| Reddit r/futbol, r/beisbol | Post match threads with link | Brand awareness + nofollow signal |
| Spanish football forums (forocoches.net, etc.) | Genuine match discussion posts | Followed links from authority domains |
| YouTube channel | Create channel, post match alerts with site link | Entity co-occurrence + Google-owned property |
| Twitter/X | Post daily match schedules with link | Social signal, Google indexes X |
| Wikipedia "Ver deporten en línea" pages | Add to relevant external links sections | High-DA followed links |
| Sports aggregator sites | Submit to free sports link directories | Tier-2 link building |

#### Minimum Viable Link Target
- 5 external links from DA 30+ domains in month 1
- 15 external links from DA 20+ domains in month 2
- 1 Wikipedia citation if brand pages rank in top 10 for brand terms

---

### 8. Technical SEO Upgrades (New Items)

#### 8a. Dynamic OG Images
Generate match-specific Open Graph images at build time for social sharing:

```
Build: Generate /og/{slug}.png for every match page
Content: Team names, league logo, kickoff time, "EN VIVO" badge
Size: 1200×630px
Format: WebP (smaller, faster)
Benefit: Click-through rate +15–30% when shared on WhatsApp/Telegram
```

#### 8b. Core Web Vitals — Hard Targets

| Metric | Target | Current Risk | Fix |
|--------|--------|-------------|-----|
| LCP | < 1.2s | Iframe from bolaloca.my may delay | Lazy-load player, show placeholder first |
| CLS | < 0.05 | Player resize on tab change | Pre-size iframe container with aspect-ratio CSS |
| INP | < 100ms | Server selector JS | Minimal vanilla JS, no framework |
| TTFB | < 200ms | Cloudflare edge caching | Cache-Control: max-age=10800 ✓ |

#### 8c. Structured Data Validator Audit
Before each deploy, run:
```bash
npx @google/structured-data-testing-tool validate dist/ --recursive
```
Fail the build if any critical schema errors are found.

#### 8d. Search Console API Integration
Automate GSC URL inspection after each deploy:
```javascript
// scripts/gsc-inspect.js
// Uses Google Search Console API to request indexing for new pages
// Runs after every deploy, targets pages added in this build cycle
```

---

### 9. Competitive Differentiation

To outrank established competitors (`rojadirecta.tv`, `pirlotvonline.net`, etc.) for brand-adjacent terms:

| Competitor Weakness | Our Response |
|--------------------|--------------|
| No FAQ schema on match pages | Implement FAQPage JSON-LD on 100% of match pages |
| No brand combo pages | `/roja-directa-pirlo-tv/` and `/tarjeta-roja-pirlo-tv/` owned exclusively |
| No MLB team pages | 7 MLB team pages targeting team-specific queries competitors ignore |
| No multi-timezone display | Our timezone row answers "a qué hora" for all markets |
| No freshness signal (old timestamps) | Rebuild every 3 hours with visible "Actualizado" timestamp |
| No RSS feed | RSS at `/feed.xml` gives syndication signal |
| No sitelinks searchbox | WebSite schema with SearchAction deployed |
| No IndexNow integration | Real-time URL submission on every new match |

---

### 10. KPI Targets & Measurement

#### Month-by-Month KPIs

| Month | Sessions | Clicks (GSC) | Indexed Pages | Featured Snippets | Key Milestone |
|-------|----------|-------------|--------------|------------------|---------------|
| M1 | 15,000 | 10,000 | 500+ | 0–5 | Brand pages indexed, MLB team pages live |
| M2 | 35,000 | 25,000 | 1,000+ | 5–20 | Pirlo TV page ranking top 20, Liga MX hub live |
| M3 | 65,000 | 45,000 | 2,000+ | 20–50 | Featured snippets for "dónde mirar" queries |
| M6 | 120,000 | 85,000 | 5,000+ | 50–100 | Full topical authority established |

#### GSC Alerts to Set Up
- Average position < 3 for `pirlo tv` → celebrate
- CTR < 2% for any page with > 1,000 impressions → fix title tag
- Coverage errors > 50 → investigate build pipeline
- Core Web Vitals failures > 10% → run Lighthouse audit

#### Weekly Review Checklist
- [ ] GSC impressions vs clicks delta (CTR trending up?)
- [ ] New pages indexed within 48h of deploy? (IndexNow working?)
- [ ] Featured snippets won this week?
- [ ] Rank check: `pirlo tv`, `tarjeta roja tv`, `roja directa mlb`
- [ ] Crawl errors in GSC > 0?
- [ ] Core Web Vitals: any pages flagged?

---

## Design Decisions

1. **Tarjeta Roja as first-class brand** — not a footnote. Users search it as if it were a separate site. Treat it that way.
2. **Pirlo TV page is the long-term bet** — 5M monthly searches, .top proved demand even at pos 73. This is the highest-ceiling page on the domain.
3. **MLB over football for initial quick wins** — competition for La Liga/Champions terms is brutal. MLB "roja directa" terms are top 5 in the data and low competition.
4. **Three URL clusters per match** — `/partido/`, `/ver/`, `/en-vivo/` triple the long-tail surface area for zero extra development cost.
5. **Multi-timezone is a content differentiator** — no competitor does this. "A qué hora juega X" is a massive cluster and a timezone row answers it for all 7 user markets at once.
6. **FAQ schema is the featured snippet play** — the "dónde mirar" queries prove demand exists. FAQ JSON-LD is the correct technical response to Google's knowledge panel showing above us.
7. **No cross-linking to .top** — completely separate footprint. If one gets DMCA'd or deindexed, the other survives.
