/**
 * Le Labo de Peau — réservation plein écran : date → bijou de pose → coordonnées.
 */
import { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { SITE } from '../../constants.js'
import { getSiteById } from '../../data.js'
import { SafeImg } from '../../components/mini/SafeImg.jsx'
import { LABO_PALETTE } from '../../data/laboPeauContent.js'

const P = '/perceur'
const { anthracite: INK, surgical: PANEL_BG, gold: GOLD } = LABO_PALETTE
const SERIF = '"Playfair Display", Georgia, serif'
const SANS = '"Inter", system-ui, sans-serif'

const ZONES = [
  { id: 'lobe', label: 'Lobe' },
  { id: 'helix', label: 'Helix' },
  { id: 'conch', label: 'Conch' },
  { id: 'septum', label: 'Septum' },
  { id: 'nostril', label: 'Nez' },
  { id: 'autre', label: 'Autre' },
]

const METALS = ["L'Or Éternel (14k / 18k)", 'Titane grade médical', 'Cristaux — au choix en cabine']

const STEPS = [
  { id: 1, label: 'Date' },
  { id: 2, label: 'Bijou de pose' },
  { id: 3, label: 'Vos infos' },
]

function formatDayFr(d) {
  return d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
}

function getNextFortnight() {
  const out = []
  const start = new Date()
  start.setHours(12, 0, 0, 0)
  for (let i = 0; i < 14; i++) {
    const x = new Date(start)
    x.setDate(start.getDate() + i)
    out.push(x)
  }
  return out
}

export default function OrEtPeauBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()
  const formId = useId()
  const [step, setStep] = useState(1)
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [zone, setZone] = useState('')
  const [metal, setMetal] = useState(METALS[1])
  const [jewelryStyle, setJewelryStyle] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const site = useMemo(() => getSiteById(siteId), [siteId])
  const days = useMemo(() => getNextFortnight(), [])

  useEffect(() => {
    if (!site) return
    const prev = document.title
    document.title = `Réservation — ${site.name}`
    return () => {
      document.title = prev
    }
  }, [site])

  const mailtoHref = useMemo(() => {
    if (!site) return '#'
    const dateStr = selectedDate ? formatDayFr(selectedDate) : '—'
    const body = [
      `— LE LABO DE PEAU — demande`,
      ``,
      `Date souhaitée : ${dateStr}`,
      `Bijou de pose : ${jewelryStyle === 'simple' ? 'Simple' : jewelryStyle === 'brillant' ? 'Brillant' : '—'}`,
      ``,
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      `Zone : ${zone || '—'}`,
      `Métal : ${metal}`,
      ``,
      `Précisions :`,
      note,
    ].join('\n')
    return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`Réservation — ${site.name}`)}&body=${encodeURIComponent(body)}`
  }, [nom, email, zone, metal, jewelryStyle, note, site, selectedDate])

  if (!site) return null

  const canNext1 = selectedDate != null
  const canNext2 = jewelryStyle === 'simple' || jewelryStyle === 'brillant'
  const canSubmit = nom.trim() && zone && canNext1 && canNext2

  const onSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  const goNext = () => setStep((s) => Math.min(3, s + 1))
  const goPrev = () => setStep((s) => Math.max(1, s - 1))

  const stepContent = (
    <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div
          key="s1"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] uppercase tracking-[0.45em]" style={{ color: `${GOLD}cc` }}>
            Étape 1 — Calendrier
          </p>
          <h2 id={formId} className="mt-4 text-[clamp(1.35rem,3vw,1.85rem)] font-normal leading-tight text-[#121212]" style={{ fontFamily: SERIF }}>
            Choisissez un jour
          </h2>
          <p className="mt-3 text-[13px] font-light leading-relaxed text-[#121212]/60">
            Les créneaux précis sont confirmés par le studio.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {days.map((d) => {
              const sel = selectedDate && d.toDateString() === selectedDate.toDateString()
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  onClick={() => setSelectedDate(d)}
                  className={[
                    'rounded-lg border px-2 py-3 text-left text-[11px] font-light transition-colors',
                    sel
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#121212]'
                      : 'border-[#121212]/12 bg-white text-[#121212]/80 hover:border-[#121212]/25',
                  ].join(' ')}
                >
                  <span className="block capitalize opacity-80">{formatDayFr(d)}</span>
                </button>
              )
            })}
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="s2"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] uppercase tracking-[0.45em]" style={{ color: `${GOLD}cc` }}>
            Étape 2 — Bijou de pose
          </p>
          <h2 className="mt-4 text-[clamp(1.35rem,3vw,1.85rem)] font-normal leading-tight text-[#121212]" style={{ fontFamily: SERIF }}>
            Choisissez votre bijou de pose
          </h2>
          <p className="mt-3 text-[13px] font-light leading-relaxed text-[#121212]/60">
            Simple : discret et efficace. Brillant : pierre ou éclat visible.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setJewelryStyle('simple')}
              className={[
                'rounded-2xl border px-6 py-10 text-left transition-all',
                jewelryStyle === 'simple'
                  ? 'border-[#D4AF37] bg-[#D4AF37]/08 shadow-[0_0_0_1px_rgba(212,175,55,0.25)]'
                  : 'border-[#121212]/12 bg-white hover:border-[#121212]/22',
              ].join(' ')}
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#121212]/45">Option A</p>
              <p className="mt-3 text-[1.25rem] font-normal text-[#121212]" style={{ fontFamily: SERIF }}>
                Simple
              </p>
              <p className="mt-2 text-[13px] font-light text-[#121212]/58">
                Stud épuré, finition mate ou poli — cicatrisation prioritaire.
              </p>
            </button>
            <button
              type="button"
              onClick={() => setJewelryStyle('brillant')}
              className={[
                'rounded-2xl border px-6 py-10 text-left transition-all',
                jewelryStyle === 'brillant'
                  ? 'border-[#D4AF37] bg-[#D4AF37]/08 shadow-[0_0_0_1px_rgba(212,175,55,0.25)]'
                  : 'border-[#121212]/12 bg-white hover:border-[#121212]/22',
              ].join(' ')}
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#121212]/45">Option B</p>
              <p className="mt-3 flex items-center gap-2 text-[1.25rem] font-normal text-[#121212]" style={{ fontFamily: SERIF }}>
                Brillant <Sparkles className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
              </p>
              <p className="mt-2 text-[13px] font-light text-[#121212]/58">
                Cristal ou pierre sertie — plus de présence au portrait.
              </p>
            </button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          key="s3"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] uppercase tracking-[0.45em]" style={{ color: `${GOLD}cc` }}>
            Étape 3 — Coordonnées
          </p>
          <h2 className="mt-4 text-[clamp(1.35rem,3vw,1.85rem)] font-normal leading-tight text-[#121212]" style={{ fontFamily: SERIF }}>
            Finaliser la demande
          </h2>
          <form className="mt-10 space-y-8" onSubmit={onSubmit} aria-labelledby={formId}>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-45">Nom</label>
              <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="mt-3 w-full border-0 border-b border-[#121212]/18 bg-transparent py-2 text-[15px] font-light text-[#121212] outline-none focus:border-[#D4AF37]/60"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-45">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-3 w-full border-0 border-b border-[#121212]/18 bg-transparent py-2 text-[15px] font-light text-[#121212] outline-none focus:border-[#D4AF37]/60"
                autoComplete="email"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-45">Zone souhaitée</span>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {ZONES.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setZone(id)}
                    className={[
                      'border px-3 py-3 text-[10px] uppercase tracking-[0.15em] transition-colors',
                      zone === id
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#121212]'
                        : 'border-[#121212]/12 bg-white text-[#121212]/75 hover:border-[#121212]/22',
                    ].join(' ')}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="metal-labo" className="text-[10px] uppercase tracking-[0.3em] opacity-45">
                Préférence métal
              </label>
              <select
                id="metal-labo"
                value={metal}
                onChange={(e) => setMetal(e.target.value)}
                className="mt-4 w-full border border-[#121212]/12 bg-white px-4 py-3 text-[14px] font-light text-[#121212] outline-none focus:ring-1 focus:ring-[#D4AF37]/35"
              >
                {METALS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-45">Précisions</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
                className="mt-4 w-full border border-[#121212]/12 bg-white px-4 py-3 text-[14px] font-light leading-relaxed text-[#121212] outline-none focus:ring-1 focus:ring-[#D4AF37]/35"
                placeholder="Allergies, horaires, référence bijou…"
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full border py-4 text-[10px] uppercase tracking-[0.32em] transition-all disabled:opacity-35"
              style={{ borderColor: GOLD, backgroundColor: 'rgba(212,175,55,0.15)', color: INK }}
            >
              Envoyer la demande
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100dvh]"
      style={{ background: PANEL_BG, color: INK, fontFamily: SANS }}
    >
      <div className="flex min-h-[100dvh] flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-[32vh] lg:min-h-[100dvh]">
          <SafeImg
            src={`${P}/piercingg.webp`}
            alt="Piercing studio — ambiance clinique et bijou, Le Labo de Peau"
            width={1200}
            height={1600}
            priority
            className="h-full min-h-[32vh] w-full object-cover lg:min-h-[100dvh]"
            style={{ filter: 'grayscale(15%) contrast(1.05) brightness(1.04) saturate(0.9)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/15 lg:via-transparent lg:to-[#FAFAFA]" />
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-10">
            <p className="text-[9px] uppercase tracking-[0.45em] opacity-70">Le Labo de Peau</p>
            <p className="mt-2 max-w-xs text-[clamp(1.15rem,2.5vw,1.5rem)] font-normal leading-snug text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
              Réservation — calme, clarté, protocole.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-[#FAFAFA] px-6 pb-12 pt-8 text-[#121212] lg:px-14 lg:pb-16 lg:pt-14">
          <header className="mb-8 flex items-center justify-between lg:mb-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] opacity-50 transition-opacity hover:opacity-100"
              style={{ color: '#121212' }}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Retour
            </button>
            <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.28em] opacity-40 hover:opacity-80" style={{ color: '#121212' }}>
              Portfolio
            </Link>
          </header>

          {/* Indicateur d’étapes */}
          <div className="mb-10 flex gap-2">
            {STEPS.map((s) => (
              <div key={s.id} className="flex flex-1 flex-col gap-1">
                <div
                  className={`h-0.5 rounded-full ${step >= s.id ? 'bg-[#D4AF37]' : 'bg-[#121212]/12'}`}
                  aria-hidden
                />
                <span className="text-[8px] uppercase tracking-[0.2em] opacity-45">{s.label}</span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <>
              <div className="mx-auto w-full max-w-lg flex-1">{stepContent}</div>
              <div className="mx-auto mt-10 flex w-full max-w-lg items-center justify-between gap-4 border-t border-[#121212]/10 pt-8">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={step <= 1}
                  className="flex items-center gap-1 text-[10px] uppercase tracking-[0.28em] text-[#121212]/45 disabled:opacity-25"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                  Précédent
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2)}
                    className="flex items-center gap-1 border border-[#D4AF37] bg-[#D4AF37]/10 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-[#121212] transition hover:bg-[#D4AF37]/20 disabled:opacity-35"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : null}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto flex max-w-lg flex-1 flex-col justify-center pb-16 text-center"
            >
              <p className="text-[9px] uppercase tracking-[0.45em] opacity-40">Le Labo de Peau</p>
              <p className="mt-8 text-[clamp(1.35rem,3vw,1.75rem)] font-normal leading-snug text-[#121212]" style={{ fontFamily: SERIF }}>
                Demande prête — ouvrez votre messagerie pour l’envoyer au studio.
              </p>
              <a
                href={mailtoHref}
                className="mt-10 inline-block border border-[#121212]/20 bg-[#FAFAFA] px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-[#121212]"
              >
                Ouvrir l’e-mail
              </a>
              <button type="button" onClick={() => navigate('/portfolio')} className="mt-8 text-[11px] text-[#121212]/50 hover:text-[#121212]">
                Retour au portfolio
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
