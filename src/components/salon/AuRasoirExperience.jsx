/**
 * Au Rasoir — néo-brutalisme garage, grille dense, navigation collée en bas.
 * Aucun composant partagé avec Cheveux & Co.
 */
import { useCallback } from 'react'

const CHARCOAL = '#141210'
const CARBON = '#0d0c0b'
const ORANGE = '#c2541a'
const ORANGE_HOT = '#e06928'
const CHALK = '#e8e4dc'

const IMPACT = '"Bebas Neue", Impact, sans-serif'
const MONO = '"JetBrains Mono", ui-monospace, monospace'

const SC = '/stock-photos/salon-coiffure'

const DEFAULT_ARDOISE = [
  {
    rubrique: 'Ça coupe',
    lignes: [
      { plat: 'Le fade qui parle cash', prix: '38€', fil: 'Machine calibrée, finition pierre. Pas de jazz.' },
      { plat: 'Dégradé “cinquième étage”', prix: '42€', fil: 'Hauteur osseuse marquée au crayon gras.' },
      { plat: 'Nuque au rasoir', prix: '+12€', fil: 'Serviette chaude si tu signes le formulaire.' },
    ],
  },
  {
    rubrique: 'Barbe & fer',
    lignes: [
      { plat: 'Barbe cartographiée', prix: '28€', fil: 'Lignes au guide ; huile maison, odeur de bois brûlé.' },
      { plat: 'Royal sans blabla', prix: '46€', fil: 'Coupe + barbe, une seule pause café.' },
    ],
  },
  {
    rubrique: 'Autres profils',
    lignes: [
      { plat: 'Carré femme — fil d’acier', prix: '52€', fil: 'Sec au peigne, Gaspédal au dos pour les longueurs.' },
      { plat: 'Gamin sous surveillance', prix: '24€', fil: 'Mercredi & samedi matin. Parents silencieux exigés.' },
    ],
  },
]

function RasoirBack({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed left-3 top-3 z-[1000] border-4 bg-[#1a1816] px-4 py-3 text-[10px] uppercase tracking-widest shadow-[8px_8px_0_0_#c2541a] md:left-6 md:top-6"
      style={{
        borderColor: CHALK,
        color: CHALK,
        fontFamily: MONO,
        boxShadow: `8px 8px 0 0 ${ORANGE}`,
      }}
      aria-label="Retour au portfolio"
    >
      ⟵ Portfolio
    </button>
  )
}

export function AuRasoirExperience({ site, onBack }) {
  const menuBlocks = Array.isArray(site.ardoiseMenu) && site.ardoiseMenu.length ? site.ardoiseMenu : DEFAULT_ARDOISE
  const crew = site.garageCrew ?? []

  const scrollTo = useCallback((hash) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div
      className="min-h-[100dvh] pb-28 antialiased selection:bg-[#c2541a] selection:text-white"
      style={{ backgroundColor: CHARCOAL, color: CHALK, fontFamily: MONO, fontWeight: 400 }}
    >
      <style>{`
        .ar-impact { font-family: ${IMPACT}; letter-spacing: 0.06em; }
        .ar-mono { font-family: ${MONO}; }
      `}</style>

      <RasoirBack onBack={onBack} />

      {/* Conteneur grille complexe (12 col) */}
      <div
        id="top-rasoir"
        className="grid auto-rows-min grid-cols-12 gap-3 scroll-mt-0 px-3 pb-8 pt-20 md:gap-4 md:px-5 md:pb-10 md:pt-24"
        style={{ background: `linear-gradient(165deg, ${CARBON} 0%, ${CHARCOAL} 40%)` }}
      >
        <header className="relative col-span-12 grid grid-cols-12 gap-3 md:gap-4 lg:min-h-[320px]">
          <div
            className="col-span-12 flex flex-col justify-between border-4 p-6 md:col-span-7 md:p-10"
            style={{
              borderColor: CHALK,
              backgroundColor: '#1a1816',
              boxShadow: `12px 12px 0 0 rgba(194,84,26,0.35)`,
            }}
          >
            <p className="ar-mono text-[10px] uppercase tracking-[0.35em]" style={{ color: ORANGE_HOT }}>
              {site.tagline}
            </p>
            <h1 className="ar-impact mt-8 text-[clamp(2.8rem,9vw,5.5rem)] leading-[0.92] text-white">{site.name}</h1>
            <p className="ar-impact mt-6 text-lg tracking-wide md:text-2xl" style={{ color: ORANGE }}>
              {site.hero?.headline}
            </p>
            <p className="ar-mono mt-8 max-w-xl text-[13px] leading-relaxed md:text-[15px]" style={{ color: `${CHALK}cc` }}>
              {site.hero?.subline}
            </p>
          </div>
          <div
            className="col-span-12 overflow-hidden border-4 md:col-span-5"
            style={{ borderColor: ORANGE, boxShadow: `10px 10px 0 0 ${CARBON}` }}
          >
            <img
              src={`${SC}/industry_barber.jpg`}
              alt="Atelier barbier industriel, fauteuil et miroir, ambiance brute"
              className="h-full min-h-[200px] w-full object-cover md:min-h-full"
              loading="eager"
              style={{ filter: 'contrast(1.08) saturate(0.85)' }}
            />
          </div>
        </header>

        <section className="col-span-12 grid grid-cols-12 gap-3 border-4 border-dashed p-5 md:gap-4 md:p-8" style={{ borderColor: `${ORANGE}66`, background: '#100f0e' }}>
          <div className="col-span-12 lg:col-span-5">
            <h2 className="ar-impact text-3xl text-white md:text-4xl">Pas de chichi.</h2>
            <p className="ar-mono mt-4 text-[12px] uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
              Juste de l’acier et du talent.
            </p>
          </div>
          <div className="col-span-12 space-y-5 lg:col-span-7 lg:pl-8">
            {site.about?.paragraphs?.map((p, i) => (
              <p key={i} className="text-[14px] leading-[1.85]" style={{ color: `${CHALK}b3` }}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <section id="ardoise" className="col-span-12 scroll-mt-8">
          <div className="border-4 p-2" style={{ borderColor: CHALK, background: CARBON, boxShadow: `16px 16px 0 0 ${ORANGE}` }}>
            <div className="border-4 border-white/10 px-4 py-10 md:px-12 md:py-14" style={{ background: '#252220' }}>
              <h2 className="ar-impact text-center text-4xl text-[#f5f0e8] md:text-5xl">MENU À L’ARDOISE</h2>
              <p className="ar-mono mt-4 text-center text-[11px] uppercase tracking-[0.4em]" style={{ color: `${CHALK}77` }}>
                Prix affichés. Supplément attitude : 0€.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-3">
                {menuBlocks.map((col) => (
                  <div key={col.rubrique} className="flex flex-col gap-6">
                    <h3 className="ar-impact border-b-4 pb-2 text-2xl" style={{ borderColor: ORANGE, color: ORANGE_HOT }}>
                      {col.rubrique}
                    </h3>
                    <ul className="space-y-8">
                      {col.lignes.map((row) => (
                        <li key={row.plat} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2">
                          <div>
                            <p className="ar-impact text-lg text-white">{row.plat}</p>
                            <p className="ar-mono mt-2 text-[12px] leading-snug" style={{ color: `${CHALK}99` }}>
                              {row.fil}
                            </p>
                          </div>
                          <p className="ar-mono text-right text-base font-medium tabular-nums" style={{ color: CHALK }}>
                            {row.prix}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="equipe" className="col-span-12 scroll-mt-8">
          <h2 className="ar-impact mb-6 text-3xl text-white md:text-4xl">L’atelier humain</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {crew.map((person) => (
              <article
                key={person.name}
                className="border-4 p-6"
                style={{
                  borderColor: CHALK,
                  backgroundColor: '#1a1816',
                  boxShadow: `6px 6px 0 0 ${ORANGE}`,
                }}
              >
                <p className="ar-impact text-xl text-white">{person.name}</p>
                <p className="ar-mono mt-2 text-[10px] uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
                  {person.role}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed" style={{ color: `${CHALK}bb` }}>
                  {person.story}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer id="bas" className="col-span-12 grid grid-cols-12 gap-3 border-4 p-6 md:gap-4 md:p-10" style={{ borderColor: ORANGE, background: CARBON }}>
          <div className="col-span-12 md:col-span-8">
            <p className="ar-mono text-[12px] uppercase tracking-widest" style={{ color: ORANGE }}>
              Adresse brute
            </p>
            <p className="ar-impact mt-4 text-2xl text-white">
              {site.location?.street}
            </p>
            <p className="ar-mono mt-2 text-[14px]" style={{ color: `${CHALK}aa` }}>
              {site.location?.postalCode} {site.location?.city} — {site.location?.hours}
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-4">
            <a
              href={`mailto:booking@au-rasoir-paris.fr?subject=${encodeURIComponent('Créneau — Au Rasoir')}`}
              className="ar-impact inline-block border-4 bg-[#c2541a] px-6 py-4 text-center text-xl text-white transition hover:brightness-110"
              style={{ borderColor: CHALK, boxShadow: `6px 6px 0 0 #0d0c0b` }}
            >
              CRAQUER UN CRÉNEAU
            </a>
          </div>
        </footer>
      </div>

      {/* Navigation sticky bas de page */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[999] grid grid-cols-4 border-t-4 border-[#c2541a] bg-[#0d0c0b] md:grid-cols-4"
        style={{ boxShadow: `0 -8px 0 0 ${CARBON}` }}
        aria-label="Navigation salon"
      >
        {[
          ['#top-rasoir', 'Accueil'],
          ['#ardoise', 'Ardoise'],
          ['#equipe', 'Crew'],
          ['#bas', 'Plan'],
        ].map(([href, label]) => (
          <button
            key={href}
            type="button"
            onClick={() => scrollTo(href)}
            className="ar-mono border-r-4 py-4 text-[9px] uppercase tracking-[0.15em] transition last:border-r-0 hover:bg-[#c2541a] hover:text-white md:text-[10px]"
            style={{ borderColor: '#2a2826', color: CHALK, fontFamily: MONO }}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}
