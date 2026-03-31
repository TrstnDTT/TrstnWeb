/**
 * Calendrier minimal (sans librairie) — aligné sur l’univers crème / sauge Cheveux & Co.
 */
import { useMemo, useState } from 'react'
import { getMonthGrid } from '../../data/cheveuxCoBookingMock.js'

const WEEK_DAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']

function startOfDay(d) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function isBeforeToday(date) {
  return startOfDay(date) < startOfDay(new Date())
}

function sameDay(a, b) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

/**
 * @param {{
 *   selectedDate: Date | null
 *   onSelectDate: (d: Date) => void
 *   sage: string
 *   ink: string
 *   sageMute: string
 * }} props
 */
export function CheveuxCoCalendar({ selectedDate, onSelectDate, sage, ink, sageMute }) {
  const [cursor, setCursor] = useState(() => {
    const n = new Date()
    return new Date(n.getFullYear(), n.getMonth(), 1)
  })

  const year = cursor.getFullYear()
  const month = cursor.getMonth()

  const label = useMemo(
    () =>
      cursor.toLocaleDateString('fr-FR', {
        month: 'long',
        year: 'numeric',
      }),
    [cursor],
  )

  const cells = useMemo(() => getMonthGrid(year, month), [year, month])

  const canGoPrev = useMemo(() => {
    const now = new Date()
    const startThisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    return cursor > startThisMonth
  }, [cursor])

  const goPrev = () => {
    if (!canGoPrev) return
    setCursor(new Date(year, month - 1, 1))
  }

  const goNext = () => {
    setCursor(new Date(year, month + 1, 1))
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          className="ch-cal-nav rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition disabled:cursor-not-allowed disabled:opacity-35"
          style={{ borderColor: sageMute, color: ink, fontFamily: 'inherit' }}
          aria-label="Mois précédent"
        >
          ←
        </button>
        <p
          className="min-w-0 flex-1 text-center text-[clamp(1rem,2.5vw,1.15rem)] capitalize"
          style={{ color: ink, fontWeight: 300 }}
        >
          {label}
        </p>
        <button
          type="button"
          onClick={goNext}
          className="ch-cal-nav rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition hover:bg-white/50"
          style={{ borderColor: sageMute, color: ink, fontFamily: 'inherit' }}
          aria-label="Mois suivant"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 gap-x-1 sm:gap-x-2">
        {WEEK_DAYS.map((wd) => (
          <div
            key={wd}
            className="pb-3 text-center text-[10px] uppercase tracking-[0.28em]"
            style={{ color: `${sage}aa` }}
          >
            {wd}
          </div>
        ))}
        {cells.map((cell, idx) => {
          if (!cell) {
            return <div key={`empty-${idx}`} className="aspect-square min-h-[2.5rem]" aria-hidden />
          }
          const past = isBeforeToday(cell)
          const sel = selectedDate && sameDay(cell, selectedDate)
          return (
            <button
              key={cell.toISOString()}
              type="button"
              disabled={past}
              onClick={() => !past && onSelectDate(cell)}
              className={[
                'aspect-square min-h-[2.5rem] rounded-full text-[15px] transition-colors duration-200',
                past ? 'cursor-not-allowed opacity-[0.28]' : 'hover:bg-white/70',
              ].join(' ')}
              style={{
                fontWeight: sel ? 500 : 300,
                color: past ? `${ink}44` : ink,
                backgroundColor: sel ? `${sage}22` : 'transparent',
                boxShadow: sel ? `inset 0 0 0 1px ${sage}55` : 'none',
              }}
            >
              {cell.getDate()}
            </button>
          )
        })}
      </div>

      <p className="mt-8 text-center text-[11px] leading-relaxed" style={{ color: `${ink}77` }}>
        Les jours passés ne sont pas sélectionnables. Le salon est fermé le dimanche — aucun créneau ce jour-là.
      </p>
    </div>
  )
}
