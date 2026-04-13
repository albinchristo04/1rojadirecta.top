/**
 * Multi-timezone converter.
 * All match times in JSON are UTC-based (server in Europe/UTC zone).
 * We display key timezones relevant to our audience.
 */

export interface TzEntry {
  label: string;
  offsetHours: number;  // UTC offset (may be fractional, use minutes for safety)
  offsetMinutes: number;
}

const TIMEZONES: TzEntry[] = [
  { label: 'Madrid',        offsetHours: 2,   offsetMinutes: 120  }, // CEST (summer)
  { label: 'CDMX',         offsetHours: -5,  offsetMinutes: -300 }, // CDT
  { label: 'Bogotá',       offsetHours: -5,  offsetMinutes: -300 },
  { label: 'Buenos Aires', offsetHours: -3,  offsetMinutes: -180 },
  { label: 'ET',           offsetHours: -4,  offsetMinutes: -240 }, // EDT
];

/** Parse "HH:MM" UTC string and return a formatted timezone row.
 *  @param utcTime "HH:MM" or full ISO string
 *  @returns "21:00 Madrid · 15:00 CDMX · 15:00 Bogotá · 18:00 Buenos Aires · 17:00 ET"
 */
export function getTimezoneRow(utcTime: string): string {
  // Accept either "HH:MM" or ISO "...THH:MM:SSZ"
  const timeStr = utcTime.includes('T') ? utcTime.split('T')[1].slice(0, 5) : utcTime.slice(0, 5);
  const [hStr, mStr] = timeStr.split(':');
  const utcMinutes = parseInt(hStr, 10) * 60 + parseInt(mStr, 10);

  return TIMEZONES.map(({ label, offsetMinutes }) => {
    let local = utcMinutes + offsetMinutes;
    // Wrap within 0–1440
    local = ((local % 1440) + 1440) % 1440;
    const h = Math.floor(local / 60).toString().padStart(2, '0');
    const m = (local % 60).toString().padStart(2, '0');
    return `${h}:${m} ${label}`;
  }).join(' · ');
}

/** Return just a single timezone time string */
export function getLocalTime(utcTime: string, offsetMinutes: number): string {
  const timeStr = utcTime.includes('T') ? utcTime.split('T')[1].slice(0, 5) : utcTime.slice(0, 5);
  const [hStr, mStr] = timeStr.split(':');
  const utcMins = parseInt(hStr, 10) * 60 + parseInt(mStr, 10);
  const local = ((utcMins + offsetMinutes) % 1440 + 1440) % 1440;
  const h = Math.floor(local / 60).toString().padStart(2, '0');
  const m = (local % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}
