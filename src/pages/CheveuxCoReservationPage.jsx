import { useCallback, useId, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheveuxCoBookingForm } from '../components/salon/CheveuxCoBookingForm.jsx'
import { CheveuxCoCalendar } from '../components/salon/CheveuxCoCalendar.jsx'

const CREME = '#F5F5DC'
const SAGE = '#6b8f71'
const SAGE_MUTE = '#8faa93'
const INK = '#2c382e'

const SERIF = '"Spectral", Georgia, serif'
const TYPE = '"Courier Prime", "Courier New", monospace'

export default function CheveuxCoReservationPage() {
  const navigate = useNavigate()
  const titleId = useId()
  const [selectedDate, setSelectedDate] = useState(null)
  const [syncedDate, setSyncedDate] = useState(null)

  const handlePickDate = useCallback((d) => {
    setSelectedDate(d)
    const iso = d.toISOString().slice(0, 10)
    setSyncedDate(iso)
  }, [])

  const backToSalon = () => {
    navigate('/portfolio', { state: { openProject: 'cheveux-co' } })
  }

  return (
    <div
      className="min-h-[100dvh] antialiased selection:bg-[#c8d9c4] selection:text-[#2c382e]"
      style={{ backgroundColor: CREME, color: INK, fontFamily: SERIF, fontWeight: 300 }}
    >
      <style>{`
        .ccr-serif { font-family: ${SERIF}; font-weight: 300; }
        .ccr-type { font-family: ${TYPE}; }
      `}</style>

      <header className="relative z-10 flex items-start justify-between gap-4 px-6 pb-6 pt-8 md:px-14 md:pt-12">
        <button
          type="button"
          onClick={backToSalon}
          className="ccr-type rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition hover:bg-white/50"
          style={{ borderColor: `${SAGE_MUTE}99`, color: INK }}
        >
          ← Retour au salon
        </button>
        <Link
          to="/portfolio"
          className="ccr-type text-[10px] uppercase tracking-[0.28em] underline-offset-4 hover:underline"
          style={{ color: `${SAGE}dd` }}
        >
          Portfolio
        </Link>
      </header>

      <main className="relative z-0 mx-auto max-w-2xl px-6 pb-28 pt-4 md:max-w-3xl md:px-10">
        <h1
          id={titleId}
          className="ccr-serif text-center text-[clamp(1.65rem,4.5vw,2.35rem)] font-light leading-snug tracking-tight"
          style={{ color: `${INK}ee` }}
        >
          Réserver votre parenthèse
        </h1>
        <p className="ccr-type mx-auto mt-6 max-w-md text-center text-[11px] uppercase tracking-[0.32em]" style={{ color: `${SAGE}bb` }}>
          Cheveux & Co — Rennes
        </p>
        <p className="mx-auto mt-8 max-w-lg text-center text-[15px] leading-[1.9]" style={{ color: `${INK}99` }}>
          Une demande discrète : nous vous rappelons pour confirmer le créneau. Expertise humaine, sans bruit inutile.
        </p>

        <motion.div
          className="mx-auto mt-16 max-w-md"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="ccr-type mb-8 text-center text-[10px] uppercase tracking-[0.35em]" style={{ color: `${SAGE}aa` }}>
            Choisir un jour (optionnel)
          </p>
          <div className="flex justify-center">
            <CheveuxCoCalendar
              selectedDate={selectedDate}
              onSelectDate={handlePickDate}
              sage={SAGE}
              ink={INK}
              sageMute={SAGE_MUTE}
            />
          </div>
          <p className="ccr-type mt-8 text-center text-[10px] leading-relaxed" style={{ color: `${INK}66` }}>
            La date sélectionnée se reporte dans le formulaire ci-dessous.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-xl">
          <CheveuxCoBookingForm syncedDate={syncedDate} />
        </div>
      </main>
    </div>
  )
}
