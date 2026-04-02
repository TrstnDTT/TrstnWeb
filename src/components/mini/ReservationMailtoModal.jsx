/**
 * Modal glass — réservation par mailto (Nom, e-mail, date/heure, couverts).
 * Réutilisable (Bar Basque, La Table Constance, etc.).
 */
import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { SITE } from '../../constants.js'

const easeLux = [0.22, 1, 0.36, 1]

export function ReservationMailtoModal({
  open,
  onClose,
  venueName,
  accentColor = '#889C81',
  fontFamilyBody,
  fontFamilyHeading,
}) {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const titleId = `${baseId}-title`

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [when, setWhen] = useState('')
  const [guests, setGuests] = useState('2')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!open) return
    // Align form state with dialog open; avoids stale success after closing/reopening.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset tied to `open`, not external subscription
    setSuccess(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    const n = name.trim()
    const em = email.trim()
    const w = when.trim()
    if (!n || !em || !w) return
    const subject = encodeURIComponent(`[${venueName}] Demande de réservation`)
    const bodyText = encodeURIComponent(
      `Nom : ${n}\nE-mail : ${em}\nDate / heure souhaitées : ${w}\nNombre de personnes : ${guests.trim() || '—'}\n`,
    )
    try {
      window.open(
        `mailto:${SITE.contactEmail}?subject=${subject}&body=${bodyText}`,
        '_blank',
        'noopener,noreferrer',
      )
    } catch {
      /* ignore */
    }
    setSuccess(true)
  }

  const headingStyle = fontFamilyHeading ? { fontFamily: fontFamilyHeading } : undefined
  const bodyStyle = fontFamilyBody ? { fontFamily: fontFamilyBody } : undefined

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[1100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            aria-label="Fermer"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] w-full max-w-md overflow-hidden rounded-[8px] border-[0.5px] border-white/[0.14] bg-[#1A1A17]/92 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: easeLux }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="text-lg font-semibold text-[#FAF0E6]"
                style={headingStyle}
              >
                Réserver une table
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1 text-[#FAF0E6]/50 transition-colors hover:text-[#FAF0E6]"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor={`${baseId}-nom`}
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50"
                  >
                    Nom
                  </label>
                  <input
                    id={`${baseId}-nom`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none ring-0 transition-[border-color] focus:border-white/35"
                    style={bodyStyle}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`${baseId}-email`}
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50"
                  >
                    E-mail
                  </label>
                  <input
                    id={`${baseId}-email`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35"
                    style={bodyStyle}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`${baseId}-when`}
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50"
                  >
                    Date & heure souhaitées
                  </label>
                  <input
                    id={`${baseId}-when`}
                    type="datetime-local"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    required
                    className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35 [color-scheme:dark]"
                    style={bodyStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`${baseId}-guests`}
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50"
                  >
                    Nombre de personnes
                  </label>
                  <input
                    id={`${baseId}-guests`}
                    type="number"
                    min={1}
                    max={24}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35"
                    style={bodyStyle}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-[6px] border-0 bg-white/[0.1] py-3.5 text-[13px] font-medium text-[#FAF0E6] backdrop-blur-sm transition-[background-color] hover:bg-white/[0.14]"
                  style={headingStyle}
                >
                  Réserver
                </button>
              </form>
            ) : (
              <div className="mt-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05]">
                  <Check className="h-6 w-6" strokeWidth={1.75} style={{ color: accentColor }} aria-hidden />
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-[#FAF0E6]/85" style={bodyStyle}>
                  Merci. Votre demande de réservation a été envoyée au {venueName}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 text-[12px] font-medium uppercase tracking-[0.2em] text-[#FAF0E6]/55 hover:text-[#FAF0E6]"
                  style={headingStyle}
                >
                  Fermer
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
