/**
 * LE MANIFESTE DU GRAIN — scroll horizontal, éditorial brutal, journal manuscrit.
 * Pas de schéma Navbar / Hero / Footer.
 */
import { useCallback, useRef } from 'react'

const BETON = '#a8a49c'
const ENCRE = '#1a1a1a'
const PAPIER = '#c9c4bb'
const DISPLAY = '"Anton", system-ui, sans-serif'
const CORPS = '"Syne", system-ui, sans-serif'
const MAIN = '"Caveat", cursive'

const PANELS = [
  {
    id: 'i',
    titre: 'GRAIN',
    ligne:
      'Le pain n’est pas une denrée : c’est une décision politique du matin. Nous refusons la farine sans nom et le pétrin qui ment.',
    mots: 'Pointage · autolyse · détente — la chaîne du geste avant celle du prix.',
  },
  {
    id: 'ii',
    titre: 'ALVÉOLE',
    ligne:
      'L’alvéolage ne se photographie pas : il se devine à la lampe rasante. Grigne ouverte, membrane fine : la mie parle avant la bouche.',
    mots: 'Grigne — lévitation de la croûte — humidité relative du cellule en fermentation.',
  },
  {
    id: 'iii',
    titre: 'FOUR',
    ligne:
      'Chaleur saturée, pas chaleur brûlante. Le four à sole impose une courbe : le temps n’est pas compressible.',
    mots: 'Bouche à 245 °C ; vapeur à la seconde du chargement.',
  },
]

function CroquisAbstrait() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden="true">
      <path
        d="M40 120 Q180 40 320 100 T600 80 M80 280 Q200 200 400 260 M120 400 Q250 320 500 380"
        stroke={ENCRE}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="480" cy="180" r="60" stroke={ENCRE} strokeWidth="1.5" fill="none" strokeDasharray="4 8" />
    </svg>
  )
}

export function ManifesteGrainExperience({ site, onBack }) {
  const scrollerRef = useRef(null)
  const journal = site.manifestJournal ?? {
    lignes: [
      '6h12 — humidité 64 %, le levain a l’odeur de yaourt et de pomme.',
      '6h40 — four à 238 °C ; pierre qui chante avant la première bouchée.',
      '7h05 — grigne qui s’ouvre comme une coquille : satisfaction du boulanger.',
    ],
  }

  const scrollTo = useCallback((index) => {
    const el = scrollerRef.current
    if (!el) return
    const w = el.clientWidth
    el.scrollTo({ left: index * w, behavior: 'smooth' })
  }, [])

  return (
    <div
      className="relative h-[100dvh] overflow-hidden"
      style={{
        backgroundColor: BETON,
        backgroundImage: `linear-gradient(135deg, ${PAPIER} 0%, ${BETON} 45%, #9d9890 100%)`,
        color: ENCRE,
        fontFamily: CORPS,
      }}
    >
      <style>{`
        .mg-display { font-family: ${DISPLAY}; letter-spacing: -0.02em; }
        .mg-main { font-family: ${MAIN}; }
      `}</style>

      <button
        type="button"
        onClick={onBack}
        className="fixed left-5 top-5 z-[1000] text-[10px] uppercase tracking-[0.35em] underline-offset-4 hover:underline"
        style={{ color: ENCRE }}
      >
        fermer
      </button>

      <nav
        className="fixed bottom-8 left-1/2 z-[999] flex -translate-x-1/2 gap-6 text-[11px] uppercase tracking-[0.45em] md:gap-10"
        aria-label="Sections manifeste"
      >
        {['I', 'II', 'III', 'IV'].map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => scrollTo(i)}
            className="transition hover:opacity-70"
            style={{ color: ENCRE }}
          >
            {label}
          </button>
        ))}
      </nav>

      <div
        ref={scrollerRef}
        className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {PANELS.map((p, i) => (
          <section
            key={p.id}
            className="relative flex h-full min-w-[100vw] shrink-0 snap-start flex-col justify-center px-6 py-16 md:px-16"
          >
            <CroquisAbstrait />
            <div
              className="relative z-[1] mx-auto max-w-[95vw] border-[3px] border-[#2a2a2a] bg-[#b8b3aa]/40 p-6 md:p-10"
              style={{
                borderRadius: '2.2rem 0.4rem 1.8rem 1.1rem / 1rem 2.8rem 0.6rem 2rem',
                boxShadow: '8px 12px 0 rgba(0,0,0,0.15)',
              }}
            >
              <p className="mg-display text-[clamp(3.5rem,18vw,9rem)] leading-[0.85]">{p.titre}</p>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.75] md:text-[17px]" style={{ fontWeight: 600 }}>
                {p.ligne}
              </p>
              <p className="mt-6 text-[12px] uppercase tracking-[0.12em] opacity-80">{p.mots}</p>
            </div>
          </section>
        ))}

        <section className="relative flex h-full min-w-[100vw] shrink-0 snap-start flex-col justify-center px-6 py-12 md:px-20">
          <div className="mx-auto w-full max-w-2xl">
            <h2 className="mg-display text-[clamp(2rem,8vw,4rem)]">Journal de bord du boulanger</h2>
            <div
              className="mt-12 space-y-8 border-l-4 border-[#2a2a2a] pl-8"
              style={{ borderRadius: '0 1rem 0.5rem 0' }}
            >
              {journal.lignes?.map((l, idx) => (
                <p key={idx} className="mg-main text-[clamp(1.5rem,4vw,2.25rem)] leading-snug text-[#2a2a2a]">
                  {l}
                </p>
              ))}
            </div>
            <p className="mt-16 max-w-lg text-[13px] leading-[1.85] opacity-90">
              {site.hero?.subline}
            </p>
            <a
              href={`mailto:manifeste@grain-paris.fr?subject=${encodeURIComponent('Lecture — Manifeste du grain')}`}
              className="mt-10 inline-block border-b-2 border-[#1a1a1a] pb-1 text-[11px] uppercase tracking-[0.3em]"
            >
              Écrire au rédacteur
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
