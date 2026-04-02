/**
 * Brutalisme chic — dashboard / terminal, ton technique.
 */
import { useEffect, useId, useMemo, useState, useCallback, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../../constants.js'
import { getSiteById } from '../../data.js'

const BG = '#0a0a0a'
const FG = '#e8e8ea'
const ACCENT = '#8f3d3d'
const BORDER = 'rgba(255,255,255,0.12)'

const STYLES = ['Linework', 'Dotwork', 'Blackwork']

export default function BrutalismBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()
  const formId = useId()
  const [nom, setNom] = useState('')
  const [wCm, setWCm] = useState('')
  const [hCm, setHCm] = useState('')
  const [style, setStyle] = useState(STYLES[0])
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [drag, setDrag] = useState(false)
  const fileRef = useRef(null)

  const site = useMemo(() => getSiteById(siteId), [siteId])

  useEffect(() => {
    if (!site) return
    const prev = document.title
    document.title = `Production — ${site.name}`
    return () => {
      document.title = prev
    }
  }, [site])

  if (!site) return null

  const onDrop = useCallback((e) => {
    e.preventDefault()
    setDrag(false)
    const list = Array.from(e.dataTransfer?.files ?? [])
    setFiles((prev) => [...prev, ...list].slice(0, 6))
  }, [])

  const mailtoHref = useMemo(() => {
    const body = [
      `— BRUTALISME CHIC — fiche production`,
      ``,
      `Identité : ${nom}`,
      `Dimensions estimées : ${wCm || '—'} cm × ${hCm || '—'} cm`,
      `Style : ${style}`,
      `Fichiers joints (noms) : ${files.length ? files.map((f) => f.name).join(', ') : 'aucun'}`,
    ].join('\n')
    return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`Production — ${site.name}`)}&body=${encodeURIComponent(body)}`
  }, [nom, wCm, hCm, style, files, site.name])

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[100dvh] font-mono text-[13px]" style={{ backgroundColor: BG, color: FG }}>
      {/* Grille de fond */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <header className="relative z-10 flex items-center justify-between border-b px-4 py-3 md:px-8" style={{ borderColor: BORDER }}>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">neo-ink // session</span>
        <div className="flex gap-6">
          <button type="button" onClick={() => navigate(-1)} className="text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white">
            ← abort
          </button>
          <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-white/80">
            index
          </Link>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.main
            key="form"
            exit={{ opacity: 0 }}
            className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-8 md:px-10"
          >
            <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4" style={{ borderColor: BORDER }}>
              <div>
                <h1 id={formId} className="text-[11px] uppercase tracking-[0.35em] text-white/90">
                  Fiche technique — rendu vectoriel
                </h1>
                <p className="mt-2 text-[11px] leading-relaxed text-white/45">Précision du tracé · machines rotatives dernière génération · stérile par défaut</p>
              </div>
              <div className="hidden h-8 w-8 border md:block" style={{ borderColor: ACCENT, boxShadow: `0 0 0 1px ${ACCENT}40` }} aria-hidden />
            </div>

            <form onSubmit={onSubmit} className="grid gap-0 md:grid-cols-2" aria-labelledby={formId}>
              <div className="border p-5 md:border-r-0" style={{ borderColor: BORDER }}>
                <label className="block text-[9px] uppercase tracking-[0.3em] text-white/35">identité</label>
                <input
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="mt-3 w-full border-0 border-b bg-transparent py-2 text-[14px] outline-none focus:border-b"
                  style={{ borderColor: ACCENT, color: FG }}
                  autoComplete="name"
                />
              </div>

              <div className="border p-5 md:border-l" style={{ borderColor: BORDER }}>
                <label className="block text-[9px] uppercase tracking-[0.3em] text-white/35">dimensions estimées (cm × cm)</label>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    placeholder="L"
                    value={wCm}
                    onChange={(e) => setWCm(e.target.value)}
                    required
                    className="w-full border px-3 py-2 text-[13px] outline-none focus:ring-1"
                    style={{ borderColor: BORDER, backgroundColor: '#111', color: FG }}
                  />
                  <span className="text-white/30">×</span>
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    placeholder="H"
                    value={hCm}
                    onChange={(e) => setHCm(e.target.value)}
                    required
                    className="w-full border px-3 py-2 text-[13px] outline-none focus:ring-1"
                    style={{ borderColor: BORDER, backgroundColor: '#111', color: FG }}
                  />
                </div>
              </div>

              <div className="border p-5 md:col-span-2 md:border-t-0" style={{ borderColor: BORDER }}>
                <label className="block text-[9px] uppercase tracking-[0.3em] text-white/35">style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="mt-3 w-full border px-3 py-3 text-[12px] uppercase tracking-[0.15em] outline-none"
                  style={{ borderColor: BORDER, backgroundColor: '#0d0d0d', color: FG }}
                >
                  {STYLES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="border p-6 md:col-span-2"
                style={{ borderColor: BORDER }}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDrag(true)
                }}
                onDragLeave={() => setDrag(false)}
                onDrop={onDrop}
              >
                <label className="block text-[9px] uppercase tracking-[0.3em] text-white/35">références visuelles</label>
                <div
                  className="mt-4 flex min-h-[140px] cursor-pointer flex-col items-center justify-center border border-dashed px-4 py-8 transition-colors"
                  style={{
                    borderColor: drag ? ACCENT : BORDER,
                    backgroundColor: drag ? 'rgba(143,61,61,0.08)' : 'rgba(255,255,255,0.02)',
                  }}
                  onClick={() => fileRef.current?.click()}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => setFiles((p) => [...p, ...Array.from(e.target.files ?? [])].slice(0, 6))}
                  />
                  <span className="text-center text-[11px] text-white/45">Déposez images ou PDF — ou cliquez pour parcourir</span>
                  {files.length > 0 && (
                    <ul className="mt-4 w-full max-w-md space-y-1 text-left text-[10px] text-white/55">
                      {files.map((f) => (
                        <li key={f.name + f.size}>{f.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="border p-6 md:col-span-2" style={{ borderColor: BORDER }}>
                <p className="text-[11px] leading-relaxed text-white/40">
                  <span className="text-white/60">Expertise :</span> tracé calibré au micron, rotatives à couple constant — le fichier et la peau
                  subissent la même exigence géométrique.
                </p>
                <button
                  type="submit"
                  className="mt-8 w-full border py-4 text-[10px] uppercase tracking-[0.35em] transition-all duration-500 hover:tracking-[0.42em] md:max-w-xs"
                  style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}18`, color: FG }}
                >
                  Lancer la production
                </button>
              </div>
            </form>
          </motion.main>
        ) : (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex min-h-[70dvh] flex-col items-center justify-center px-8 pb-32 text-center"
          >
            <div className="border px-8 py-10 md:max-w-lg" style={{ borderColor: ACCENT }}>
              <p className="text-[9px] uppercase tracking-[0.45em] text-white/35">statut</p>
              <p className="mt-6 text-[14px] uppercase tracking-[0.12em] text-white/90">Production lancée — fichier en file d'attente.</p>
              <p className="mt-4 text-[11px] leading-relaxed text-white/45">
                Ouvrez votre client mail pour transmettre la fiche ; nous calibrons le stencil sur vos dimensions.
              </p>
              <a
                href={mailtoHref}
                className="mt-8 inline-block border px-8 py-3 text-[10px] uppercase tracking-[0.28em]"
                style={{ borderColor: ACCENT, color: FG }}
              >
                Ouvrir la messagerie
              </a>
              <button type="button" onClick={() => navigate('/portfolio')} className="mt-6 block w-full text-[10px] uppercase tracking-[0.2em] text-white/35 hover:text-white/70">
                retour portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
