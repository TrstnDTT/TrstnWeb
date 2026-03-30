/**
 * Atelier 1920 — speakeasy tattoo, flex-col centré, gravures, curseur aiguille.
 * Aucun composant partagé avec Neo-Ink ni Le Labo.
 */
import { useEffect, useState } from 'react'

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

export function Atelier1920Experience({ site, onBack }) {
  const [finePointer, setFinePointer] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const sync = () => setFinePointer(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const encres = site.organicInks?.length ? site.organicInks : []
  const artists = site.tattooArtists ?? []
  const gallery = site.tattooGallery?.length ? site.tattooGallery : FLASH_DEFAULT

  return (
    <div
      className={`atelier1920-root min-h-[100dvh] overflow-x-hidden ${finePointer ? 'cursor-none' : ''}`}
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

      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-28 pt-24 md:px-10 md:pt-32">
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
          className="mt-12 rounded-full border-2 px-10 py-3 text-center text-[11px] uppercase tracking-[0.28em] transition hover:border-[#e8d9b0]"
          style={{ borderColor: BRASS, color: PARCH, fontFamily: DISPLAY }}
        >
          Entrer dans l’Atelier
        </a>

        <FiligreeRule />

        <section className="w-full" aria-labelledby="heritage-h">
          <h2 id="heritage-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            L’héritage
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-[11px] uppercase tracking-[0.35em]" style={{ color: `${BRASS}aa` }}>
            Noble · historique · artisanal
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {site.about?.paragraphs?.map((para, i) => (
              <p key={i} className="text-justify text-[15px] leading-[1.95]" style={{ color: `${PARCH}b8` }}>
                {para}
              </p>
            ))}
          </div>
          {artists.length > 0 && (
            <div className="mt-12 flex flex-col gap-10 border-t border-white/10 pt-12">
              {artists.map((a) => (
                <div key={a.name} className="text-center md:text-left">
                  <p style={{ fontFamily: DISPLAY, fontSize: '1.15rem' }}>{a.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: BRASS }}>
                    {a.role}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed" style={{ color: `${PARCH}99` }}>
                    {a.bio}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <FiligreeRule />

        <section className="w-full" aria-labelledby="encres-h">
          <h2 id="encres-h" className="text-center text-xl md:text-2xl" style={{ fontFamily: DISPLAY }}>
            Nos encres organiques
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-[14px] leading-relaxed" style={{ color: `${PARCH}99` }}>
            Pigments choisis comme on choisit un millésime : transparence sur la composition, test cutané avant
            pose des rouges et verts historiques.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {encres.map((e) => (
              <div
                key={e.name}
                className="rounded-2xl border px-6 py-6"
                style={{ borderColor: `${WOOD}cc`, backgroundColor: 'rgba(0,0,0,0.18)' }}
              >
                <h3 className="text-lg" style={{ fontFamily: DISPLAY, color: `${PARCH}ee` }}>
                  {e.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.85]" style={{ color: `${PARCH}b3` }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FiligreeRule />

        <section className="w-full" aria-labelledby="flash-h">
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
                className="overflow-hidden rounded-full border"
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

        <footer className="w-full pb-8 text-center">
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
