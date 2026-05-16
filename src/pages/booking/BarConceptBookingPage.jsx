/**
 * Réservation plein écran — bars luxe (Apothicaire du Verre / Chai Moderne).
 * Typographie serif, glow discret au survol.
 */
import { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { SITE } from '../../constants.js'
import { getSiteById } from '../../data.js'

const BAR_IDS = new Set(['neon-shaker', 'zinc-des-amis'])

const SERIF = '"Cormorant Garamond", Georgia, serif'
const SANS = '"Inter", system-ui, sans-serif'

const APO = {
  bg: '#14100c',
  ink: '#f5ede0',
  accent: '#c9a86c',
  muted: 'rgba(245, 237, 224, 0.55)',
}

const CHAI = {
  bg: '#f7f5f0',
  ink: '#1a1a1a',
  accent: '#8b7355',
  muted: 'rgba(26, 26, 26, 0.55)',
}

export default function BarConceptBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()
  const formId = useId()
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [personnes, setPersonnes] = useState('')
  const [sent, setSent] = useState(false)

  const site = useMemo(() => getSiteById(siteId), [siteId])
  const isApothicaire = siteId === 'neon-shaker'
  const T = isApothicaire ? APO : CHAI

  useEffect(() => {
    if (!siteId || !BAR_IDS.has(siteId)) {
      navigate('/portfolio', { replace: true })
    }
  }, [siteId, navigate])

  useEffect(() => {
    if (!site) return
    const prev = document.title
    document.title = `Réservation — ${site.name}`
    return () => {
      document.title = prev
    }
  }, [site])

  const mailtoHref = useMemo(() => {
    if (!site || !siteId || !BAR_IDS.has(siteId)) return '#'
    const body = [
      `Réservation — ${site.name}`,
      '',
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      personnes ? `Personnes / moment : ${personnes}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')
    return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`Réservation — ${site.name}`)}&body=${encodeURIComponent(body)}`
  }, [nom, email, message, personnes, site, siteId])

  if (!site || !siteId || !BAR_IDS.has(siteId)) return null

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const successApo =
    'Votre demande est reçue — nous préparons la table, les bougies et le silence du verre.'
  const successChai =
    'Merci : nous vous confirmons votre créneau avec une sélection adaptée au chai.'

  const grain =
    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100dvh] antialiased"
      style={{
        backgroundColor: T.bg,
        color: T.ink,
        fontFamily: SERIF,
        fontWeight: 300,
      }}
    >
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: grain,
          mixBlendMode: isApothicaire ? 'overlay' : 'multiply',
          opacity: isApothicaire ? 0.06 : 0.05,
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-8 md:px-14 md:py-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-[11px] uppercase tracking-[0.28em] transition-opacity hover:opacity-100"
          style={{ fontFamily: SANS, color: T.muted, opacity: 0.85 }}
        >
          ← Retour
        </button>
        <Link
          to="/portfolio"
          className="text-[11px] uppercase tracking-[0.26em] transition-opacity hover:opacity-100"
          style={{ fontFamily: SANS, color: T.muted, opacity: 0.75 }}
        >
          Portfolio
        </Link>
      </header>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.main
            key="f"
            exit={{ opacity: 0, y: -6 }}
            className="relative z-10 mx-auto max-w-lg px-6 pb-28 pt-4 md:max-w-xl md:px-10"
          >
            <p className="text-center text-[10px] uppercase tracking-[0.45em]" style={{ fontFamily: SANS, color: T.accent, opacity: 0.9 }}>
              {site.name}
            </p>
            <h1
              id={formId}
              className="mt-10 text-center text-[clamp(1.65rem,4.5vw,2.35rem)] leading-[1.2] tracking-tight"
              style={{ color: T.ink }}
            >
              {isApothicaire ? 'Une table à la lueur des bougies' : 'Réserver au Chai Moderne'}
            </h1>
            <p className="mx-auto mt-8 max-w-md text-center text-[16px] leading-[1.85]" style={{ color: T.muted }}>
              {isApothicaire
                ? 'Une demande confidentielle : nous revenons vers vous pour confirmer l’instant et le nombre de couverts.'
                : 'Indiquez votre créneau souhaité — nous vous proposons la sélection de verres et tapas en accord.'}
            </p>

            <form onSubmit={onSubmit} className="mt-16 space-y-10" aria-labelledby={formId}>
              <div>
                <label className="text-[12px] uppercase tracking-[0.22em]" style={{ fontFamily: SANS, color: T.muted }}>
                  Nom
                </label>
                <input
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="mt-3 w-full border-0 border-b bg-transparent py-2 text-[18px] outline-none transition-[border-color,box-shadow] duration-500"
                  style={{
                    borderColor: isApothicaire ? 'rgba(245,237,224,0.2)' : 'rgba(26,26,26,0.15)',
                    color: T.ink,
                  }}
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.22em]" style={{ fontFamily: SANS, color: T.muted }}>
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-3 w-full border-0 border-b bg-transparent py-2 text-[18px] outline-none transition-[border-color,box-shadow] duration-500"
                  style={{
                    borderColor: isApothicaire ? 'rgba(245,237,224,0.2)' : 'rgba(26,26,26,0.15)',
                    color: T.ink,
                  }}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.22em]" style={{ fontFamily: SANS, color: T.muted }}>
                  Personnes & moment
                </label>
                <input
                  value={personnes}
                  onChange={(e) => setPersonnes(e.target.value)}
                  placeholder="ex. Vendredi 20h30 — 4 personnes"
                  className="mt-3 w-full border-0 border-b bg-transparent py-2 text-[18px] outline-none placeholder:opacity-40"
                  style={{
                    borderColor: isApothicaire ? 'rgba(245,237,224,0.2)' : 'rgba(26,26,26,0.15)',
                    color: T.ink,
                  }}
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.22em]" style={{ fontFamily: SANS, color: T.muted }}>
                  Précisions
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-4 w-full rounded-[8px] border-[0.5px] px-5 py-4 text-[16px] leading-relaxed outline-none transition-[box-shadow] duration-500"
                  style={{
                    borderColor: isApothicaire ? 'rgba(245,237,224,0.12)' : 'rgba(26,26,26,0.1)',
                    backgroundColor: isApothicaire ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)',
                    color: T.ink,
                  }}
                  placeholder="Allergies, occasion, préférences de vins…"
                />
              </div>
              <button
                type="submit"
                className="bar-lux-glow w-full rounded-[8px] border-[0.5px] py-4 text-[13px] uppercase tracking-[0.2em] transition duration-500"
                style={{
                  fontFamily: SANS,
                  borderColor: isApothicaire ? `${T.accent}55` : 'rgba(26,26,26,0.15)',
                  backgroundColor: isApothicaire ? `${T.accent}22` : '#fff',
                  color: T.ink,
                }}
              >
                Envoyer la demande
              </button>
            </form>
          </motion.main>
        ) : (
          <motion.div
            key="s"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 mx-auto max-w-lg px-6 pb-28 pt-8 text-center md:px-10"
          >
            <p className="text-[17px] leading-relaxed" style={{ color: T.muted }}>
              {isApothicaire ? successApo : successChai}
            </p>
            <a
              href={mailtoHref}
              className="bar-lux-glow mt-12 inline-block rounded-[8px] border-[0.5px] px-10 py-3.5 text-[13px] uppercase tracking-[0.18em] transition duration-500"
              style={{
                fontFamily: SANS,
                borderColor: `${T.accent}66`,
                color: T.ink,
                backgroundColor: isApothicaire ? `${T.accent}18` : '#fff',
              }}
            >
              Ouvrir l’e-mail
            </a>
            <button
              type="button"
              onClick={() => navigate('/portfolio')}
              className="mt-10 block w-full text-[13px] transition hover:opacity-100"
              style={{ fontFamily: SANS, color: T.muted, opacity: 0.75 }}
            >
              Retour au portfolio
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .bar-lux-glow:hover {
          box-shadow: 0 0 40px -8px ${isApothicaire ? 'rgba(201, 168, 108, 0.45)' : 'rgba(196, 168, 130, 0.5)'};
        }
      `}</style>
    </motion.div>
  )
}
