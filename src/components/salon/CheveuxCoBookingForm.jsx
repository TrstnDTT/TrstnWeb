/**
 * Formulaire de RDV Cheveux & Co — EmailJS, champs alignés sur le template (name, surname, phone, date, time, message).
 */
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { getMockSlotsForDate } from '../../data/cheveuxCoBookingMock.js'

const CREME = '#F5F5DC'
const SAGE = '#6b8f71'
const SAGE_MUTE = '#8faa93'
const INK = '#2c382e'

const SERIF = '"Spectral", Georgia, serif'
const TYPE = '"Courier Prime", "Courier New", monospace'

function formatDateFr(iso) {
  if (!iso) return ''
  const parts = iso.split('-').map(Number)
  if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return String(iso)
  const [y, m, d] = parts
  return new Date(y, m - 1, d).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatTimeDisplay(t) {
  if (!t) return ''
  return t.replace(':', ' h ')
}

const inputClass =
  'ccr-form-input w-full min-h-[48px] rounded-none border-[0.5px] bg-white/[0.06] px-4 py-3 text-[15px] outline-none transition-[border-color,background-color] duration-200 placeholder:text-[#2c382e]/35 focus:border-[#6b8f71]/55 focus:bg-white/[0.12] sm:min-h-[44px]'

/** @param {{ syncedDate: string | null }} props */
export function CheveuxCoBookingForm({ syncedDate }) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [summary, setSummary] = useState({ name: '', date: '', time: '' })

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  useEffect(() => {
    if (syncedDate) setDate(syncedDate)
  }, [syncedDate])

  const slotsForDate = useMemo(() => {
    if (!date) return []
    const parts = date.split('-').map(Number)
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return []
    const [y, mo, d] = parts
    return getMockSlotsForDate(new Date(y, mo - 1, d))
  }, [date])

  useEffect(() => {
    if (!time) return
    if (slotsForDate.length > 0 && !slotsForDate.includes(time)) setTime('')
  }, [slotsForDate, time])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!date) {
      setError('Indiquez une date de rendez-vous.')
      return
    }
    if (slotsForDate.length === 0) {
      setError('Ce jour le salon est fermé. Choisissez une autre date.')
      return
    }
    if (!time) {
      setError('Choisissez un créneau horaire.')
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      setError(
        'Configuration EmailJS incomplète : renseignez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans votre fichier .env',
      )
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          surname,
          phone,
          date,
          time,
          message,
        },
        { publicKey },
      )
      setSummary({ name, date, time })
      setSubmitted(true)
    } catch {
      setError("L'envoi a échoué. Réessayez dans un instant ou écrivez-nous à bonjour@cheveux-co-rennes.fr.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.25rem] border-[0.5px] px-8 py-12 text-center shadow-[0_20px_60px_-28px_rgba(44,56,46,0.35)] backdrop-blur-xl"
        style={{
          borderColor: `${SAGE_MUTE}55`,
          backgroundColor: 'rgba(255,255,255,0.18)',
        }}
      >
        <p className="text-[17px] leading-[1.85]" style={{ fontFamily: SERIF, fontWeight: 300, color: `${INK}ee` }}>
          Merci {summary.name}, votre demande pour le {formatDateFr(summary.date)} à {formatTimeDisplay(summary.time)} a bien été
          transmise à Cheveux & Co. Nous vous rappellerons pour confirmer.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[1.25rem] border-[0.5px] p-8 shadow-[0_24px_80px_-32px_rgba(44,56,46,0.28)] backdrop-blur-xl md:p-10"
      style={{
        borderColor: `${SAGE_MUTE}44`,
        backgroundColor: 'rgba(255,255,255,0.14)',
      }}
      noValidate={false}
    >
      <style>{`
        .ccr-form-input { font-family: ${SERIF}; font-weight: 300; color: ${INK}; }
        .ccr-form-input::placeholder { font-weight: 300; }
        .ccr-form-label { font-family: ${TYPE}; }
      `}</style>

      <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
        <div className="md:col-span-1">
          <label htmlFor="name" className="ccr-form-label mb-2 block text-[10px] uppercase tracking-[0.28em]" style={{ color: `${SAGE}dd` }}>
            Prénom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="given-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Camille"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="surname" className="ccr-form-label mb-2 block text-[10px] uppercase tracking-[0.28em]" style={{ color: `${SAGE}dd` }}>
            Nom
          </label>
          <input
            id="surname"
            name="surname"
            type="text"
            autoComplete="family-name"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={inputClass}
            placeholder="Dupont"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="phone" className="ccr-form-label mb-2 block text-[10px] uppercase tracking-[0.28em]" style={{ color: `${SAGE}dd` }}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="06 00 00 00 00"
          />
        </div>
        <div className="w-full md:col-span-2">
          <label htmlFor="date" className="ccr-form-label mb-2 block text-[10px] uppercase tracking-[0.28em]" style={{ color: `${SAGE}dd` }}>
            Date du rendez-vous
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
              setTime('')
            }}
            className={`${inputClass} block w-full max-w-full`}
          />
        </div>
        <div className="md:col-span-2" role="group" aria-labelledby="ccr-time-label">
          <span
            id="ccr-time-label"
            className="ccr-form-label mb-3 block text-[10px] uppercase tracking-[0.28em]"
            style={{ color: `${SAGE}dd` }}
          >
            Créneau souhaité
          </span>
          {!date ? (
            <p className="text-[14px] leading-relaxed" style={{ color: `${INK}88`, fontFamily: SERIF, fontWeight: 300 }}>
              Choisissez d’abord une date pour voir les horaires disponibles.
            </p>
          ) : slotsForDate.length === 0 ? (
            <p className="text-[14px] leading-relaxed" style={{ color: `${INK}88`, fontFamily: SERIF, fontWeight: 300 }}>
              Fermé ce jour-là — sélectionnez une autre date.
            </p>
          ) : (
            <div className="flex w-full flex-wrap gap-2 sm:gap-3">
              {slotsForDate.map((slot) => {
                const active = time === slot
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    aria-pressed={active}
                    className="ccr-form-label min-h-[48px] min-w-[5.5rem] flex-1 rounded-full border-[0.5px] px-4 py-2.5 text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 sm:min-w-[6rem] sm:flex-none"
                    style={{
                      borderColor: active ? SAGE : `${SAGE_MUTE}99`,
                      backgroundColor: active ? `${SAGE}20` : 'transparent',
                      color: INK,
                    }}
                  >
                    {slot.replace(':', ' h ')}
                  </button>
                )
              })}
            </div>
          )}
          <input type="hidden" name="time" value={time} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="ccr-form-label mb-2 block text-[10px] uppercase tracking-[0.28em]" style={{ color: `${SAGE}dd` }}>
            Message ou précision
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} min-h-[120px] resize-y py-3`}
            placeholder="Allergies, longueur souhaitée, préférence de styliste…"
          />
        </div>
      </div>

      {error ? (
        <p className="mt-8 text-center text-[13px] leading-relaxed text-red-700/95" style={{ fontFamily: TYPE }}>
          {error}
        </p>
      ) : null}

      <div className="mt-10 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="ccr-form-label min-h-[48px] w-full max-w-md rounded-full border-[0.5px] px-10 py-3.5 text-[11px] uppercase tracking-[0.26em] transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-55"
          style={{
            borderColor: `${SAGE}99`,
            backgroundColor: loading ? `${SAGE}22` : `${CREME}66`,
            color: INK,
          }}
        >
          {loading ? 'Chargement…' : 'Confirmer mon rendez-vous'}
        </button>
      </div>
    </motion.form>
  )
}
