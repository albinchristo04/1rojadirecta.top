import type { Match } from './types';
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from './config';

// ─── Page-level SEO generators ─────────────────────────────────────────────────

export function homeTitle(): string {
  return `Roja Directa En Vivo · Tarjeta Roja TV · Pirlo TV | ${SITE_NAME}`;
}

export function homeMeta(): string {
  return `Ver deportes en vivo gratis. Roja Directa · Tarjeta Roja TV · Pirlo TV. Fútbol, MLB, NBA, NHL en directo hoy con múltiples canales sin registro.`;
}

export function sportTitle(sportLabel: string): string {
  return `${sportLabel} En Vivo Hoy - Ver ${sportLabel} Gratis Sin Registro | ${SITE_NAME}`;
}

export function sportMeta(sportLabel: string, matchCount: number): string {
  return `Ver ${sportLabel} en vivo gratis. ${matchCount} partidos disponibles hoy en directo. Múltiples canales en español, inglés y portugués. Sin registro.`;
}

export function mlbTitle(): string {
  return `MLB En Vivo - Béisbol en Directo Gratis · Roja Directa MLB | ${SITE_NAME}`;
}

export function ligaMxTitle(): string {
  return `Liga MX En Vivo Hoy - Ver América, Chivas, Cruz Azul | ${SITE_NAME}`;
}

export function laligaTitle(): string {
  return `La Liga En Vivo - Ver Real Madrid, Barcelona, Atlético | ${SITE_NAME}`;
}

export function leagueTitle(leagueLabel: string): string {
  return `${leagueLabel} En Vivo - Partidos Hoy Gratis | ${SITE_NAME}`;
}

export function leagueMeta(leagueLabel: string, matchCount: number): string {
  return `Ver ${leagueLabel} en vivo. ${matchCount} partidos hoy en directo gratis. Múltiples canales en español, inglés y portugués.`;
}

export function matchTitle(m: Match): string {
  return `${m.team1} vs ${m.team2} En Vivo - ${m.leagueLabel} · Dónde Ver | ${SITE_NAME}`;
}

export function matchMeta(m: Match): string {
  const [dd, mm, yyyy] = m.date.split('-');
  return `Ver ${m.team1} vs ${m.team2} en vivo hoy. ${m.leagueLabel} — ${dd}/${mm}/${yyyy} a las ${m.time} UTC. ${m.channels.length} canales disponibles. ¿Dónde mirar? Aquí gratis.`;
}

export function brandTitle(brand: string): string {
  return `${brand} En Vivo - Ver Partidos Gratis | ${SITE_NAME}`;
}

export function brandMeta(brand: string, matchCount: number): string {
  return `${brand} en vivo gratis. Ver fútbol, béisbol, baloncesto en directo. ${matchCount} partidos disponibles hoy sin registro.`;
}

// ─── JSON-LD schema generators ─────────────────────────────────────────────────

export function websiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    alternateName: ['1 Roja Directa', 'Roja Directa', 'Tarjeta Roja TV', 'Pirlo TV', 'RojaDirecta', 'Roja Dirécta'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/buscar/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description: 'Ver deportes en vivo gratis. Fútbol, MLB, NBA, NHL en directo.',
    alternateName: ['1 Roja Directa', 'Roja Directa', 'Tarjeta Roja TV', 'Pirlo TV'],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function sportsEventSchema(m: Match): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${m.team1} vs ${m.team2}`,
    startDate: m.utcDatetime,
    location: {
      '@type': 'VirtualLocation',
      url: `${SITE_URL}/partido/${m.slug}/`,
    },
    organizer: {
      '@type': 'SportsOrganization',
      name: m.leagueLabel,
    },
    competitor: [
      { '@type': 'SportsTeam', name: m.team1 },
      { '@type': 'SportsTeam', name: m.team2 },
    ],
  };
}

export function matchFaqSchema(m: Match): object {
  const tzRow = `${m.time} UTC · véase la hora local en la página`;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Dónde mirar ${m.team1} contra ${m.team2}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ver ${m.team1} vs ${m.team2} en vivo gratis en 1rojadirecta.top. El partido comienza a las ${m.time} UTC. Disponible en ${m.channels.length} canales sin registro.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿A qué hora juega ${m.team1} hoy?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${m.team1} juega a las ${m.time} UTC (consulta horario local en la página) contra ${m.team2} por ${m.leagueLabel}.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿En qué canal se transmite ${m.team1} vs ${m.team2}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `El partido se transmite en ${m.channels.length} canales. Puedes cambiar entre las fuentes disponibles directamente desde la página del partido.`,
        },
      },
    ],
  };
}

export function videoObjectSchema(m: Match): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${m.team1} vs ${m.team2} en Vivo — ${m.leagueLabel}`,
    description: `Ver ${m.team1} vs ${m.team2} en vivo gratis. ${m.leagueLabel} — ${m.date}.`,
    thumbnailUrl: `${SITE_URL}/og-default.png`,
    uploadDate: m.utcDatetime.split('T')[0],
    contentUrl: `${SITE_URL}/partido/${m.slug}/`,
    embedUrl: m.channels[0]?.stableUrl ?? m.channels[0]?.embedUrl ?? `${SITE_URL}/partido/${m.slug}/`,
  };
}

export function itemListSchema(matches: Match[], listName: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: matches.length,
    itemListElement: matches.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/partido/${m.slug}/`,
    })),
  };
}

export function hubFaqSchema(label: string, matches: Match[]): object {
  const matchList = matches.slice(0, 3).map(m => `${m.team1} vs ${m.team2}`).join(', ');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Dónde ver ${label} en vivo?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ver ${label} en vivo gratis en 1rojadirecta.top. Hoy hay ${matches.length} partidos disponibles: ${matchList}. Todos gratis sin registro.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Qué partidos hay hoy de ${label}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Hoy hay ${matches.length} partidos de ${label}: ${matchList}${matches.length > 3 ? ` y ${matches.length - 3} más` : ''}. Todos disponibles en directo gratis.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Cómo ver ${label} gratis?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Entra en 1rojadirecta.top, selecciona el partido de ${label} y elige un canal. Sin registro, sin pago, sin descargas.`,
        },
      },
    ],
  };
}

/** Serialize schema object to a compact JSON-LD string */
export function jsonLd(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
