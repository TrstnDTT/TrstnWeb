/**
 * Atelier 1920 — speakeasy tattoo, flex-col centré, gravures, curseur aiguille.
 * Aucun composant partagé avec Neo-Ink ni Le Labo.
 */
import { useCallback, useEffect, useState } from 'react'

const VELVET = '#1a0f0c'
const WOOD = '#3d2918'
const BRASS = '#c9a227'
const PARCH = '#ede4d3'
const DISPLAY = '"Bodoni Moda", Georgia, serif'
const BODY = '"Crimson Text", Georgia, serif'

/** Photos locales : PicFolder/TattooPiercing → public/stock-photos/tattoo-piercing */
const TP = '/stock-photos/tattoo-piercing'

const FLASH_DEFAULT = [
  { src: `${TP}/mandala-robin.jpg`, alt: 'Tatouage mandala détaillé sur peau, lignes fines et ombrages' },
  { src: `${TP}/neotraditional-tattoo-mask-graffiti.webp`, alt: 'Masque néo-traditionnel, style graffiti et aplats colorés' },
  { src: `${TP}/thomas-pineiro-tattoo.webp`, alt: 'Composition tattoo réaliste, travail d’artiste en studio' },
  { src: `${TP}/piercing.jpg`, alt: 'Piercing en cours de pose, matériel stérile visible' },
  { src: `${TP}/piercing.webp`, alt: 'Gros plan sur bijou et zone percée' },
  { src: `${TP}/piercingg.webp`, alt: 'Détail piercing, reflets métalliques sur peau' },
  { src: `${TP}/nosepiercing.webp`, alt: 'Piercing nasal, bijou discret et anatomie du nez' },
  { src: `${TP}/nosepiercing2.webp`, alt: 'Vue rapprochée piercing nez, finition bijou' },
  { src: `${TP}/mandala-robin.jpg`, alt: 'Tatouage mandala — variation lumière et contraste' },
]

function FiligreeRule() {
  return (
    <div className="flex w-full max-w-lg justify-center py-10" aria-hidden="true">
      <svg viewBox="0 0 420 32" className="h-8 w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M210 16 L210 28" stroke={BRASS} strokeWidth="0.6" opacity="0.9" />
        <path
          d="M0 16h160 M260 16h160 M160 16c20-10 30-10 50 0s30 10 50 0 30-10 50 0"
          stroke={BRASS}
          strokeWidth="0.5"
          opacity="0.75"
        />
        <circle cx="210" cy="16" r="3.5" stroke={BRASS} strokeWidth="0.6" fill="none" />
        <path d="M190 8l10 16 20-32 20 32 10-16" stroke={PARCH} strokeWidth="0.35" opacity="0.35" />
      </svg>
    </div>
  )
}

function DoubleFrame({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border-4 border-double p-6 md:p-8 ${className}`}
      style={{ borderColor: `${BRASS}99`, backgroundColor: 'rgba(0,0,0,0.2)' }}
    >
      {children}
    </div>
  )
}

function CrossNeedleCursor({ active }) {
  const [p, setP] = useState({ x: -100, y: -100 })
  useEffect(() => {
    if (!active) return undefined
    const m = (e) => setP({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', m, { passive: true })
    return () => window.removeEventListener('pointermove', m)
  }, [active])
  if (!active) return null
  return (
    <div
      className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ left: p.x, top: p.y }}
      aria-hidden="true"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-md">
        <g transform="rotate(45 16 16)" stroke={BRASS} strokeWidth="1.1" fill="none">
          <line x1="16" y1="4" x2="16" y2="28" />
          <line x1="4" y1="16" x2="28" y2="16" />
          <circle cx="16" cy="16" r="2.2" fill={PARCH} opacity="0.4" />
        </g>
      </svg>
    </div>
  )
}

function RetourSpeakeasy({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed left-4 top-4 z-[9999] rounded-sm border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition hover:bg-white/5"
      style={{
        borderColor: `${BRASS}88`,
        backgroundColor: `${VELVET}ee`,
        backdropFilter: 'blur(8px)',
        color: PARCH,
        fontFamily: BODY,
      }}
      aria-label="Retour au portfolio"
    >
      ← Sortir
    </button>
  )
}

const NAV = [
  ['atelier-intro', 'Entrée'],
  ['atelier-heritage', 'Héritage'],
  ['atelier-process', 'Processus'],
  ['atelier-hygiene', 'Hygiène'],
  ['atelier-zoom', 'Zoom'],
  ['atelier-materiel', 'Matériel'],
  ['atelier-encres', 'Encres'],
  ['atelier-flash', 'Flashs'],
]

export function Atelier1920Experience({ site, onBack }) {
  const [finePointer, setFinePointer] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const sync = () => setFinePointer(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const encres = site.organicInks?.length ? site.organicInks : []
  const gallery = site.tattooGallery?.length ? site.tattooGallery : FLASH_DEFAULT
  const artists = site.tattooArtistsNarrative?.length ? site.tattooArtistsNarrative : site.tattooArtists ?? []
  const processSteps = site.clientProcessSteps ?? []
  const hygiene = site.hygieneLuxury
  const zoom = site.zoomPortfolio
  const materiel = site.materialHeritage

  return (
    <div
      className={`atelier1920-root min-h-[100dvh] overflow-x-hidden scroll-smooth ${finePointer ? 'cursor-none' : ''}`}
      style={{
        backgroundColor: VELVET,
        backgroundImage: `
          radial-gradient(ellipse 120% 80% at 50% -20%, ${WOOD}99 0%, transparent 55%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")
        `,
        color: PARCH,
        fontFamily: BODY,
        fontSize: '17px',
      }}
    >
      <CrossNeedleCursor active={finePointer} />
      <RetourSpeakeasy onBack={onBack} />

      <nav
        className="fixed right-3 top-14 z-[9997] hidden max-h-[70dvh] flex-col gap-1 overflow-y-auto pr-1 md:flex"
        aria-label="Sections de l’atelier"
      >
        {NAV.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="border border-white/10 bg-black/50 px-2.5 py-1.5 text-left text-[9px] uppercase tracking-[0.2em] text-[#ede4d3]/80 backdrop-blur-sm transition hover:border-[#c9a227]/60 hover:text-[#ede4d3]"
            style={{ fontFamily: DISPLAY }}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-28 pt-24 md:px-10 md:pt-32">
        <div id="atelier-intro" className="scroll-mt-28 w-full">
          <p
            className="text-center text-[10px] uppercase tracking-[0.5em]"
            style={{ color: `${BRASS}dd`, fontFamily: DISPLAY }}
          >
            {site.tagline}
          </p>
          <h1
            className="mt-10 text-center text-[clamp(2.1rem,6.5vw,3.4rem)] font-normal leading-[1.05]"
            style={{ fontFamily: DISPLAY, color: PARCH }}
          >
            {site.name}
          </h1>
          <p className="mt-8 max-w-lg text-center font-light italic leading-relaxed" style={{ color: `${PARCH}dd` }}>
            {site.hero?.headline}
          </p>
          <p className="mt-6 max-w-md text-center text-[15px] leading-[1.85]" style={{ color: `${PARCH}aa` }}>
            {site.hero?.subline}
          </p>

          <a
            href={`mailto:sceller@atelier1920-toulouse.fr?subject=${encodeURIComponent('Entrer dans l’Atelier — prise de contact')}`}
            className="mt-12 block rounded-full border-2 px-10 py-3 text-center text-[11px] uppercase tracking-[0.28em] transition hover:border-[#e8d9b0]"
            style={{ borderColor: BRASS, color: PARCH, fontFamily: DISPLAY }}
          >
            Entrer dans l’Atelier
          </a>
        </div>

        <FiligreeRule />

        <section id="atelier-heritage" className="scroll-mt-28 w-full" aria-labelledby="heritage-h">
          <h2 id="heritage-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            L’héritage
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-[11px] uppercase tracking-[0.35em]" style={{ color: `${BRASS}aa` }}>
            Noble · historique · artisanal
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {site.about?.paragraphs?.map((para, i) => (
              <DoubleFrame key={i}>
                <p className="text-justify text-[15px] leading-[1.95]" style={{ color: `${PARCH}b8` }}>
                  {para}
                </p>
              </DoubleFrame>
            ))}
          </div>

          {artists.length > 0 && (
            <div className="mt-14 flex flex-col gap-12 border-t border-double border-white/15 pt-14">
              <h3 className="text-center text-lg md:text-xl" style={{ fontFamily: DISPLAY }}>
                L’artiste — récits
              </h3>
              {artists.map((a) => (
                <DoubleFrame key={a.name} className="text-center md:text-left">
                  <p style={{ fontFamily: DISPLAY, fontSize: '1.2rem' }}>{a.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: BRASS }}>
                    {a.role}
                  </p>
                  <p className="mt-5 text-[14px] leading-[1.95]" style={{ color: `${PARCH}aa` }}>
                    {a.story ?? a.bio}
                  </p>
                </DoubleFrame>
              ))}
            </div>
          )}
        </section>

        <FiligreeRule />

        <section id="atelier-process" className="scroll-mt-28 w-full" aria-labelledby="process-h">
          <h2 id="process-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Le processus
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-[13px] leading-relaxed" style={{ color: `${PARCH}99` }}>
            Consultation, dessin, séance, cicatrisation — un chemin clair, sans jargon inutile. Chaque étape mérite son
            silence.
          </p>
          <ol className="mt-12 flex flex-col gap-8">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <DoubleFrame>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-double text-lg"
                      style={{ borderColor: `${BRASS}88`, color: BRASS, fontFamily: DISPLAY }}
                      aria-hidden="true"
                    >
                      {step.icon}
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: `${BRASS}aa` }}>
                        Étape {i + 1}
                      </p>
                      <h3 className="mt-1 text-lg" style={{ fontFamily: DISPLAY }}>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.9]" style={{ color: `${PARCH}b3` }}>
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </DoubleFrame>
              </li>
            ))}
          </ol>
        </section>

        <FiligreeRule />

        <section id="atelier-hygiene" className="scroll-mt-28 w-full" aria-labelledby="hygiene-h">
          <h2 id="hygiene-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Hygiène &amp; sécurité
          </h2>
          {hygiene?.intro && (
            <p className="mx-auto mt-6 max-w-lg text-center text-[14px] leading-relaxed" style={{ color: `${PARCH}aa` }}>
              {hygiene.intro}
            </p>
          )}
          <ul className="mt-10 flex flex-col gap-6">
            {(hygiene?.points ?? []).map((pt) => (
              <DoubleFrame key={pt.title}>
                <h3 className="text-base" style={{ fontFamily: DISPLAY, color: `${PARCH}ee` }}>
                  {pt.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.85]" style={{ color: `${PARCH}b3` }}>
                  {pt.detail}
                </p>
              </DoubleFrame>
            ))}
          </ul>
        </section>

        <FiligreeRule />

        <section id="atelier-zoom" className="scroll-mt-28 w-full" aria-labelledby="zoom-h">
          <h2 id="zoom-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Zoom portfolio
          </h2>
          {zoom?.intro && (
            <p className="mx-auto mt-5 max-w-md text-center text-[14px] leading-relaxed" style={{ color: `${PARCH}99` }}>
              {zoom.intro}
            </p>
          )}
          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {(zoom?.items ?? []).map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className={`overflow-hidden rounded-lg border-4 border-double ${item.span ?? ''}`}
                style={{ borderColor: `${WOOD}aa` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full min-h-[140px] w-full object-cover md:min-h-[180px]"
                  style={{ filter: 'sepia(0.08) contrast(1.06)' }}
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </section>

        <FiligreeRule />

        <section id="atelier-materiel" className="scroll-mt-28 w-full" aria-labelledby="mat-h">
          <h2 id="mat-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Le matériel
          </h2>
          {materiel?.intro && (
            <p className="mx-auto mt-6 max-w-lg text-center text-[14px] leading-relaxed" style={{ color: `${PARCH}aa` }}>
              {materiel.intro}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-6">
            {(materiel?.paragraphs ?? []).map((p, i) => (
              <DoubleFrame key={i}>
                <p className="text-justify text-[15px] leading-[1.95]" style={{ color: `${PARCH}b5` }}>
                  {p}
                </p>
              </DoubleFrame>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {(materiel?.bullets ?? []).map((b) => (
              <li key={b.label}>
                <DoubleFrame>
                  <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: BRASS }}>
                    {b.label}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.85]" style={{ color: `${PARCH}b0` }}>
                    {b.text}
                  </p>
                </DoubleFrame>
              </li>
            ))}
          </ul>
        </section>

        <FiligreeRule />

        <section id="atelier-encres" className="scroll-mt-28 w-full" aria-labelledby="encres-h">
          <h2 id="encres-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Nos encres organiques
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-[14px] leading-relaxed" style={{ color: `${PARCH}99` }}>
            Pigments choisis comme on choisit un millésime : transparence sur la composition, test cutané avant pose des
            rouges et verts historiques.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {encres.map((e) => (
              <DoubleFrame key={e.name}>
                <h3 className="text-lg" style={{ fontFamily: DISPLAY, color: `${PARCH}ee` }}>
                  {e.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.85]" style={{ color: `${PARCH}b3` }}>
                  {e.desc}
                </p>
              </DoubleFrame>
            ))}
          </div>
        </section>

        <FiligreeRule />

        <section id="atelier-flash" className="scroll-mt-28 w-full" aria-labelledby="flash-h">
          <h2 id="flash-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Galerie de flashs
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-center text-[12px]" style={{ color: `${PARCH}88` }}>
            Grille dense : mêmes proportions que les murs de nos aïeux à la Nation.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-1 sm:gap-1.5">
            {gallery.map((g, i) => (
              <div
                key={`${g.src || g.alt}-${i}`}
                className="overflow-hidden rounded-full border-4 border-double"
                style={{ borderColor: `${WOOD}99` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="aspect-square w-full object-cover"
                  style={{ filter: 'sepia(0.12) contrast(1.05)' }}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </section>

        <FiligreeRule />

        <footer id="atelier-footer" className="w-full scroll-mt-28 pb-8 text-center">
          <p className="text-[12px] uppercase tracking-[0.25em]" style={{ color: `${PARCH}66` }}>
            {site.location?.street} · {site.location?.postalCode} {site.location?.city}
          </p>
          <p className="mt-2 text-[11px]" style={{ color: `${PARCH}55` }}>
            {site.location?.hours}
          </p>
        </footer>
      </div>
    </div>
  )
}
