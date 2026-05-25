/**
 * Slug generation utilities.
 * Converts team/league names into URL-safe ASCII slugs.
 */

/** Remove diacritics, lowercase, replace non-alphanum with hyphens */
export function toSlug(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip combining diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')     // keep letters, digits, spaces, hyphens
    .trim()
    .replace(/\s+/g, '-')              // spaces → hyphens
    .replace(/-+/g, '-');              // collapse multiple hyphens
}

/** Generate a match slug from two team names */
export function matchSlug(team1: string, team2: string): string {
  return `${toSlug(team1)}-vs-${toSlug(team2)}`;
}

/** Parse "Team1 - Team2" string (the JSON format uses " - " as separator) */
export function parseTeams(teams: string): [string, string] {
  const separators = [' - ', ' x ', ' vs ', ' v '];

  for (const separator of separators) {
    const idx = teams.indexOf(separator);
    if (idx !== -1) {
      return [
        teams.slice(0, idx).trim(),
        teams.slice(idx + separator.length).trim(),
      ];
    }
  }

  return [teams, ''];
}
