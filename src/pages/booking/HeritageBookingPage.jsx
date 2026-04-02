/**
 * L'Héritage — carnet / lettre manuscrite, ton artisanal.
 */
import { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../../constants.js'
import { getSiteById } from '../../data.js'

const PAPER = '#F4F0E8'
const INK = '#1A1A1A'
const BORDER = 'rgba(26,26,26,0.18)'

export default function HeritageBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()
  const formId = useId()
  const [nom, setNom] = useState('')
  const [histoire, setHistoire] = useState('')
  const [premierPassage, setPremierPassage] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const site = useMemo(() => getSiteById(siteId), [siteId])

  useEffect(() => {
    if (!site) return
    const prev = document.title
    document.title = `Demande — ${site.name}`
    return () => {
      document.title = prev
    }
  }, [site])

  if (!site) return null

  const mailtoHref = useMemo(() => {
    const body = [
      `— L'Héritage — demande atelier`,
      ``,
      `Nom : ${nom}`,
      `Premier passage sous l'aiguille : ${premierPassage === true ? 'Oui' : premierPassage === false ? 'Non' : '—'}`,
      ``,
      `Histoire du projet :`,
      histoire,
    ].join('\n')
    return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`Demande atelier — ${site.name}`)}&body=${encodeURIComponent(body)}`
  }, [nom, histoire, premierPassage, site.name])

  const onSubmit = (e) => {
    e.preventDefault()
    if (premierPassage === null) return
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="relative min-h-[100dvh] overflow-y-auto"
      style={{ backgroundColor: PAPER, color: INK }}
    >
      {/* Grain papier */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <header className="relative z-10 flex items-center justify-between px-5 py-6 md:px-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-[11px] italic tracking-wide opacity-60 transition-opacity hover:opacity-100"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          ← fermer le carnet
        </button>
        <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.35em] opacity-45 hover:opacity-80">
          Portfolio
        </Link>
      </header>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.main
            key="form"
            exit={{ opacity: 0, y: -8 }}
            className="relative z-10 mx-auto max-w-lg px-6 pb-32 pt-4 md:max-w-xl md:px-10"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">L'Héritage</p>
            <h1
              id={formId}
              className="mt-4 text-[clamp(1.75rem,4vw,2.35rem)] font-light italic leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Une ligne au carnet
            </h1>
            <p className="mt-4 text-[15px] font-light leading-relaxed opacity-75">
              Laissez une trace — nous répondons à la main, sans automate.
            </p>

            {/* Cadre « carnet » */}
            <form
              onSubmit={onSubmit}
              className="mt-10 space-y-8 border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_40px_-16px_rgba(26,26,26,0.15)] md:p-10"
              style={{
                borderColor: BORDER,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 12%)',
                borderRadius: '2px',
              }}
              aria-labelledby={formId}
            >
              <label className="block">
                <span className="mb-2 block text-[12px] italic opacity-70" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                  Votre nom
                </span>
                <input
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  autoComplete="name"
                  className="w-full border-0 border-b bg-transparent py-2 text-[16px] outline-none focus:border-current"
                  style={{ borderColor: BORDER, fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                />
              </label>

              <div>
                <span className="mb-3 block text-[12px] italic leading-snug opacity-75" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                  Racontez-moi l'histoire de ce projet
                </span>
                <textarea
                  value={histoire}
                  onChange={(e) => setHistoire(e.target.value)}
                  required
                  rows={8}
                  className="w-full resize-y border px-4 py-3 text-[15px] leading-[1.75] outline-none focus:ring-1 focus:ring-[#1A1A1A]/20"
                  style={{
                    borderColor: BORDER,
                    backgroundColor: 'rgba(255,255,255,0.35)',
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                  }}
                  placeholder="Le motif, le souvenir, le silence que vous voulez garder sur la peau…"
                />
              </div>

              <div>
                <span className="mb-3 block text-[12px] italic opacity-75" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                  Est-ce votre premier passage sous l'aiguille ?
                </span>
                <div className="flex gap-3">
                  {[
                    { v: true, label: 'Oui' },
                    { v: false, label: 'Non' },
                  ].map(({ v, label }) => (
                    <button
                      key={String(v)}
                      type="button"
                      onClick={() => setPremierPassage(v)}
                      className={[
                        'border px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] transition-all duration-300',
                        premierPassage === v ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F4F0E8]' : 'border-[#1A1A1A]/25 bg-transparent opacity-80 hover:border-[#1A1A1A]/45',
                      ].join(' ')}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={premierPassage === null}
                  className="w-full border border-[#1A1A1A] bg-[#1A1A1A] py-4 text-[11px] uppercase tracking-[0.28em] text-[#F4F0E8] transition-all duration-500 hover:tracking-[0.34em] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Envoyer ma demande à l'atelier
                </button>
              </div>
            </form>

            <p
              className="mx-auto mt-12 max-w-md text-center text-[12px] font-light italic leading-relaxed opacity-55"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Nous respectons la cicatrisation naturelle : aucune précipitation sur la peau — le temps du corps prime sur le calendrier du
              spectacle.
            </p>
          </motion.main>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex min-h-[70dvh] flex-col items-center justify-center px-8 pb-32 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] opacity-40">L'Héritage</p>
            <p className="mt-8 max-w-md text-[clamp(1.5rem,4vw,2rem)] font-light italic leading-snug" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Votre histoire est entre nos mains.
            </p>
            <p className="mt-6 max-w-sm text-[14px] font-light leading-relaxed opacity-65">
              Ouvrez votre messagerie pour transmettre le message — ou revenez au portfolio quand vous voulez.
            </p>
            <a
              href={mailtoHref}
              className="mt-10 border border-[#1A1A1A] bg-[#1A1A1A] px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-[#F4F0E8]"
            >
              Ouvrir l'e-mail
            </a>
            <button type="button" onClick={() => navigate('/portfolio')} className="mt-6 text-[11px] italic underline-offset-4 opacity-55 hover:opacity-100">
              Retour au portfolio
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
