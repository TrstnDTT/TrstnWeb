/**
 * Créneaux fictifs pour la démo réservation Cheveux & Co (salon fermé le dimanche).
 */

const DEFAULT_SLOTS = ['09:30', '10:45', '14:00', '16:15', '17:30']

/**
 * Date du calendrier local au format YYYY-MM-DD.
 * Ne pas utiliser toISOString().slice(0,10) : en UTC cela peut reculer d’un jour (ex. Europe).
 * @param {Date} d
 */
export function toLocalDateStringISO(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** @param {Date} date */
export function getMockSlotsForDate(date) {
  const d = new Date(date)
  const day = d.getDay()
  if (day === 0) return []
  if (day === 6) return ['09:30', '11:00', '14:30', '16:00']
  if (day === 1) return ['10:00', '11:30', '14:00', '16:15', '18:00']
  return DEFAULT_SLOTS
}

/**
 * Grille calendrier : lundi en premier, cases null = hors mois (non utilisé ici, mois plein).
 * @param {number} year
 * @param {number} month 0–11
 */
export function getMonthGrid(year, month) {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const daysInMonth = last.getDate()
  const pad = (first.getDay() + 6) % 7
  const cells = []
  for (let i = 0; i < pad; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day))
  }
  return cells
}
