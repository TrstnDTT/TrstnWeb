/**
 * Or & Peau — split-screen conciergerie, ton bijou / soin.
 */
import { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Circle, Ear, Minus, Sparkles } from 'lucide-react'
import { SITE } from '../../constants.js'
import { getSiteById } from '../../data.js'
import { SafeImg } from '../../components/mini/SafeImg.jsx'

const P = '/perceur'
const INK = '#2c2825'
const BORDER = 'rgba(44,40,37,0.15)'
const GOLD = '#c9a56a'

const ZONES = [
  { id: 'helix', label: 'Helix', Icon: Ear },
  { id: 'lobe', label: 'Lobe', Icon: Circle },
  { id: 'septum', label: 'Septum', Icon: Minus },
  { id: 'autre', label: 'Autre', Icon: Sparkles },
]

const METALS = ['Or jaune 18k', 'Or rose', 'Titane F-136']

export default function OrEtPeauBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()
  const formId = useId()
  const [nom, setNom] = useState('')
  const [zone, setZone] = useState('')
  const [metal, setMetal] = useState(METALS[0])
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const site = useMemo(() => getSiteById(siteId), [siteId])

  useEffect(() => {
    if (!site) return
    const prev = document.title
    document.title = `Soin — ${site.name}`
    return () => {
      document.title = prev
    }
  }, [site])

  if (!site) return null

  const mailtoHref = useMemo(() => {
    const body = [
      `— OR & PEAU — demande`,
      ``,
      `Nom : ${nom}`,
      `Zone souhaitée : ${zone || '—'}`,
      `Métal : ${metal}`,
      ``,
      `Précisions :`,
      note,
    ].join('\n')
    return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`Réservation soin — ${site.name}`)}&body=${encodeURIComponent(body)}`
  }, [nom, zone, metal, note, site.name])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!zone) return
    setSubmitted(true)
  }

  const visualPanel = (
    <div className="relative min-h-[38vh] md:min-h-[100dvh]">
      <SafeImg
        src={`${P}/piercingg.webp`}
        alt=""
        width={1200}
        height={1600}
        className="h-full min-h-[38vh] w-full object-cover md:min-h-[100dvh]"
        style={{ filter: 'sepia(0.15) saturate(0.92) contrast(1.05)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#f7f1e8]/90 md:bg-gradient-to-r md:from-black/25 md:via-transparent md:to-[#f7f1e8]/95" />
      <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-8">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/85">Or & Peau</p>
        <p className="mt-3 max-w-xs font-light leading-relaxed text-white/95" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
          Le métal avant la pose — la lumière avant le geste.
        </p>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100dvh]"
      style={{
        background: 'linear-gradient(165deg, #f7f1e8 0%, #ebe2d6 45%, #f0e8dc 100%)',
        color: INK,
      }}
    >
      <div className="flex min-h-[100dvh] flex-col md:grid md:grid-cols-2">
        <div className="order-1 md:order-none">{visualPanel}</div>

        <div
          className="order-2 flex flex-col px-6 pb-28 pt-10 md:order-none md:px-14 md:pb-16 md:pt-16"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          <header className="mb-8 flex items-center justify-between md:mb-12">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-[10px] uppercase tracking-[0.35em] opacity-50 transition-opacity hover:opacity-100"
            >
              ← Retour
            </button>
            <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-80">
              Portfolio
            </Link>
          </header>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.main key="f" exit={{ opacity: 0 }} className="mx-auto w-full max-w-md flex-1">
                <p className="text-[9px] uppercase tracking-[0.5em] opacity-40">Conciergerie</p>
                <h1 id={formId} className="mt-4 text-[clamp(1.5rem,3.5vw,2rem)] font-extralight leading-tight tracking-tight">
                  Votre instant
                </h1>
                <p className="mt-5 text-[14px] font-light leading-relaxed opacity-65">
                  Espace aéré, réponses précises — nous cartographions avant de percer.
                </p>

                <form onSubmit={onSubmit} className="mt-12 space-y-12" aria-labelledby={formId}>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] opacity-45">Nom</label>
                    <input
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                      className="mt-3 w-full border-0 border-b border-[#2c2825]/20 bg-transparent py-2 text-[15px] font-light outline-none focus:border-[#2c2825]/50"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] opacity-45">Zone souhaitée</span>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {ZONES.map(({ id, label, Icon }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setZone(id)}
                          className={[
                            'flex flex-col items-center gap-2 border px-2 py-4 transition-all duration-300',
                            zone === id
                              ? 'border-[#2c2825] bg-white/55 shadow-sm'
                              : 'border-[#2c2825]/12 bg-white/25 hover:bg-white/40',
                          ].join(' ')}
                        >
                          <Icon className="h-6 w-6 opacity-70" strokeWidth={1.25} aria-hidden />
                          <span className="text-[9px] uppercase tracking-[0.18em]">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="metal-or" className="text-[10px] uppercase tracking-[0.35em] opacity-45">
                      Choix du métal
                    </label>
                    <select
                      id="metal-or"
                      value={metal}
                      onChange={(e) => setMetal(e.target.value)}
                      className="mt-4 w-full border border-[#2c2825]/15 bg-white/40 px-4 py-3 text-[14px] font-light outline-none focus:ring-1 focus:ring-[#c9a56a]/40"
                      style={{ color: INK }}
                    >
                      {METALS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] opacity-45">Une précision ?</label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={4}
                      className="mt-4 w-full border border-[#2c2825]/15 bg-white/35 px-4 py-3 text-[14px] font-light leading-relaxed outline-none focus:ring-1 focus:ring-[#c9a56a]/35"
                      placeholder="Allergies, créneaux, cicatrisation…"
                    />
                  </div>

                  <div className="rounded-lg border border-[#2c2825]/12 bg-white/25 p-5 text-[12px] font-light leading-relaxed opacity-90">
                    <span className="font-medium text-[#2c2825]">Expertise :</span> asepsie chirurgicale en cabine, matériel traçable,
                    accompagnement post-perçage personnalisé — fiche illustrée et suivi à la demande.
                  </div>

                  <button
                    type="submit"
                    disabled={!zone}
                    className="w-full border py-4 text-[10px] uppercase tracking-[0.32em] transition-all duration-500 hover:tracking-[0.38em] disabled:opacity-35"
                    style={{ borderColor: GOLD, backgroundColor: 'rgba(201,165,106,0.2)', color: INK }}
                  >
                    Réserver mon instant de soin
                  </button>
                </form>
              </motion.main>
            ) : (
              <motion.div
                key="s"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto flex max-w-md flex-1 flex-col justify-center pb-16 text-center"
              >
                <p className="text-[9px] uppercase tracking-[0.45em] opacity-40">Or & Peau</p>
                <p className="mt-8 text-[clamp(1.35rem,3vw,1.75rem)] font-light leading-snug" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                  Votre instant est noté — nous préparons le plateau et le silence du geste.
                </p>
                <p className="mt-6 text-[13px] font-light leading-relaxed opacity-65">
                  Ouvrez votre messagerie pour envoyer la demande complète.
                </p>
                <a
                  href={mailtoHref}
                  className="mt-10 inline-block border border-[#2c2825]/25 bg-white/40 px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-[#2c2825]"
                >
                  Ouvrir l'e-mail
                </a>
                <button type="button" onClick={() => navigate('/portfolio')} className="mt-8 text-[11px] opacity-50 hover:opacity-100">
                  Retour au portfolio
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
