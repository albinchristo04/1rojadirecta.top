import type { Match } from './types';

/** Generate FAQ text block for a match page */
export function matchFaqText(m: Match): { q: string; a: string }[] {
  return [
    {
      q: `¿Dónde mirar ${m.team1} contra ${m.team2}?`,
      a: `Puedes ver ${m.team1} vs ${m.team2} en vivo gratis aquí en 1rojadirecta.top. El partido comienza a las ${m.time} UTC. Disponible en ${m.channels.length} canales sin registro.`,
    },
    {
      q: `¿A qué hora juega ${m.team1} hoy?`,
      a: `${m.team1} juega a las ${m.time} UTC contra ${m.team2} por ${m.leagueLabel}. Consulta el horario en tu zona en la fila de husos horarios de esta página.`,
    },
    {
      q: `¿En qué canal se transmite ${m.team1} vs ${m.team2}?`,
      a: `El partido se transmite en ${m.channels.length} canales disponibles. Puedes cambiar entre las fuentes activas directamente desde esta página sin necesidad de registro.`,
    },
  ];
}

/** Generate FAQ text for a hub (sport or league) */
export function hubFaqText(label: string, matches: Match[]): { q: string; a: string }[] {
  const list = matches.slice(0, 4).map(m => `${m.team1} vs ${m.team2}`).join(', ');
  return [
    {
      q: `¿Dónde ver ${label} en vivo?`,
      a: `Ver ${label} en vivo gratis en 1rojadirecta.top. Hoy hay ${matches.length} partidos disponibles: ${list}${matches.length > 4 ? ` y más` : ''}.`,
    },
    {
      q: `¿Qué partidos hay hoy de ${label}?`,
      a: `Hoy hay ${matches.length} partidos de ${label} en directo: ${list}${matches.length > 4 ? ` y ${matches.length - 4} partidos más` : ''}. Todos gratis sin registro.`,
    },
    {
      q: `¿Cómo ver ${label} sin cable gratis?`,
      a: `Entra en 1rojadirecta.top, busca ${label} en el menú y haz clic en cualquier partido. Elige un canal disponible. Sin registro, sin descargas, sin pago.`,
    },
    {
      q: `¿Es legal ver ${label} gratis en internet?`,
      a: `1RojaDirecta ofrece enlaces de retransmisión pública de eventos deportivos. El usuario es responsable de verificar la legislación de su país.`,
    },
  ];
}

/** Generate Pirlo TV / Tarjeta Roja brand page FAQ */
export function brandFaqText(brand: string, matchCount: number): { q: string; a: string }[] {
  return [
    {
      q: `¿Qué es ${brand}?`,
      a: `${brand} es una plataforma de retransmisión deportiva en directo que ofrece fútbol, béisbol MLB, baloncesto NBA, hockey NHL y más deportes gratis.`,
    },
    {
      q: `¿Cómo funciona ${brand}?`,
      a: `Entra en 1rojadirecta.top, busca el partido que quieres ver y selecciona un canal. ${brand} ofrece ${matchCount} partidos disponibles hoy con múltiples fuentes activas.`,
    },
    {
      q: `¿Cuál es la diferencia entre Tarjeta Roja TV y Pirlo TV?`,
      a: `Tarjeta Roja TV y Pirlo TV son dos nombres para acceder a los mismos canales de retransmisión deportiva. Ambos están disponibles en 1rojadirecta.top.`,
    },
    {
      q: `¿En qué países funciona 1RojaDirecta?`,
      a: `1RojaDirecta funciona en España, México, Colombia, Argentina, Venezuela, Chile, Perú y todos los países hispanohablantes. También disponible para la comunidad latina en Estados Unidos.`,
    },
  ];
}
