/**
 * Cheveux & Co — magazine organique, sidebar flex, diagnostic interactif.
 * Aucun composant partagé avec Au Rasoir.
 */
import { useCallback, useState } from 'react'

const CREME = '#F5F5DC'
const SAGE = '#6b8f71'
const SAGE_MUTE = '#8faa93'
const INK = '#2c382e'

const SERIF = '"Spectral", Georgia, serif'
const TYPE = '"Courier Prime", "Courier New", monospace'

/** PicFolder/SalonDeCoiffure → public/stock-photos/salon-coiffure */
const SC = '/stock-photos/salon-coiffure'

const DEFAULT_PILLARS = [
  {
    id: 'texture',
    title: 'Texture',
    verse: 'La matière obéit quand on lui parle doucement.',
    detail:
      'Nous écoutons le crêpage, la porosité, la mémoire des défrisages. Chaque geste — diffuseur, air froid, coupe à sec — est choisi pour que la fibre reste vivante entre deux rendez-vous.',
  },
  {
    id: 'couleur',
    title: 'Couleur',
    verse: 'La lumière du siècle précédent sur vos épaules.',
    detail:
      'Patines végétales, balayages semblables à des rayons de fin d’après-midi, corrections sans heurt. Élodie pose la couleur comme on écrit une phrase : avec des virgules, jamais de cri.',
  },
  {
    id: 'volume',
    title: 'Volume',
    verse: 'L’espace entre vos mèches respire enfin.',
    detail:
      'Dégradés graphiques ou dégradés fantômes : le volume est architecture. Nous travaillons la masse pour que le visage s’ouvre, sans surcouches de brushing artificiel.',
  },
  {
    id: 'sante',
    title: 'Santé',
    verse: 'L’harmonie entre vos cheveux et votre âme.',
    detail:
      'Cuirs chevelus sensibilisés, chutes saisonnières, manques apparents : nous signalons, on vous oriente sans panique. Ici, le beau passe par le calme et le temps long.',
  },
]

function CheveuxBackButton({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed right-4 top-4 z-[1000] rounded-full border px-4 py-2.5 text-[11px] tracking-[0.12em] shadow-sm backdrop-blur-md transition hover:opacity-90 md:right-8 md:top-8"
      style={{
        borderColor: `${SAGE}55`,
        backgroundColor: `${CREME}ee`,
        color: INK,
        fontFamily: TYPE,
      }}
      aria-label="Retour au portfolio"
    >
      ← Retour
    </button>
  )
}

export function CheveuxCoExperience({ site, onBack }) {
  const pillars = site.diagnosticPillars?.length ? site.diagnosticPillars : DEFAULT_PILLARS
  const muses = site.salonMuses ?? []
  const [openId, setOpenId] = useState(() => pillars[0]?.id ?? null)

  const scrollTo = useCallback((hash) => {
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const active = pillars.find((p) => p.id === openId) ?? pillars[0]

  return (
    <div
      className="min-h-[100dvh] antialiased selection:bg-[#c8d9c4] selection:text-[#2c382e]"
      style={{ backgroundColor: CREME, color: INK, fontFamily: SERIF, fontWeight: 300 }}
    >
      <style>{`
        .ch-serif { font-family: ${SERIF}; font-weight: 300; }
        .ch-type { font-family: ${TYPE}; }
      `}</style>

      <CheveuxBackButton onBack={onBack} />

      <div className="flex min-h-[100dvh] flex-col lg:flex-row">
        {/* Sidebar — flex column, desktop only sticky */}
        <aside
          className="ch-type flex flex-col justify-between gap-8 border-[#c4cfb8] px-6 py-8 lg:sticky lg:top-0 lg:h-[100dvh] lg:w-[min(26vw,280px)] lg:shrink-0 lg:border-r lg:px-8 lg:py-12"
          style={{ backgroundColor: `${CREME}f2` }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: `${SAGE}cc` }}>
              {site.tagline}
            </p>
            <h1 className="ch-serif mt-6 text-2xl font-light leading-tight tracking-tight md:text-3xl">{site.name}</h1>
          </div>
          <nav aria-label="Sections" className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-3">
            {[
              ['#accueil', 'Accueil'],
              ['#diagnostic', 'Le diagnostic'],
              ['#maison', 'La maison'],
              ['#venir', 'Venir'],
            ].map(([href, label]) => (
              <button
                key={href}
                type="button"
                onClick={() => scrollTo(href)}
                className="rounded-full border px-5 py-2.5 text-left text-[11px] uppercase tracking-[0.18em] transition hover:bg-white/40"
                style={{ borderColor: `${SAGE_MUTE}99`, color: INK }}
              >
                {label}
              </button>
            ))}
          </nav>
          <p className="hidden text-[11px] leading-relaxed lg:block" style={{ color: `${INK}99`, fontFamily: TYPE }}>
            {site.location?.city} · {site.location?.hours}
          </p>
        </aside>

        {/* Main — flex column des sections (pas de fil infini) */}
        <main className="flex min-w-0 flex-1 flex-col">
          <section id="accueil" className="scroll-mt-6 px-6 pb-20 pt-14 md:px-14 md:pb-28 md:pt-20 lg:scroll-mt-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex min-w-0 flex-1 flex-col gap-8">
                <p className="ch-serif text-[clamp(1.75rem,4vw,2.75rem)] font-light italic leading-snug" style={{ color: `${INK}ee` }}>
                  « {site.hero?.headline} »
                </p>
                <p className="max-w-xl text-[15px] leading-[1.95]" style={{ color: `${INK}aa` }}>
                  {site.hero?.subline}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:bonjour@cheveux-co-rennes.fr?subject=${encodeURIComponent('Pause cheveux — question douce')}`}
                    className="ch-type inline-flex rounded-full border-2 px-8 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:bg-white/50"
                    style={{ borderColor: SAGE, color: INK }}
                  >
                    Écrire une ligne
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollTo('#diagnostic')}
                    className="ch-type rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] underline-offset-4 hover:underline"
                    style={{ color: SAGE }}
                  >
                    Le diagnostic
                  </button>
                </div>
              </div>
              <div className="flex shrink-0 justify-center lg:w-[min(40%,340px)]">
                <div
                  className="overflow-hidden rounded-full border-2 shadow-[0_20px_60px_-24px_rgba(60,80,60,0.45)]"
                  style={{ borderColor: `${SAGE}44` }}
                >
                  <img
                    src={`${SC}/shamppoing-coiffeur-le-salon-1024x683.jpeg`}
                    alt="Shampoing au salon, ambiance lumineuse et soins cheveux"
                    className="aspect-square w-[min(88vw,320px)] object-cover md:w-[300px]"
                    loading="eager"
                    style={{ filter: 'saturate(0.88)' }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="diagnostic"
            className="scroll-mt-8 border-t border-[#c4cfb8] px-6 py-20 md:px-14 md:py-28"
            style={{ background: 'linear-gradient(180deg, #eeead6 0%, #F5F5DC 45%)' }}
            aria-labelledby="titre-diagnostic"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="titre-diagnostic" className="ch-type text-[10px] uppercase tracking-[0.4em]" style={{ color: SAGE }}>
                Le diagnostic
              </h2>
              <p className="ch-serif mt-6 text-2xl font-light italic md:text-3xl" style={{ color: `${INK}dd` }}>
                Quatre regards avant la première cisaille.
              </p>
            </div>

            {/* Grille interactive en flex (consigne) */}
            <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-5 md:gap-8">
              {pillars.map((p) => {
                const sel = openId === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    className="ch-type flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 text-center text-[10px] uppercase tracking-[0.2em] transition md:h-44 md:w-44 md:text-[11px]"
                    style={{
                      borderColor: sel ? SAGE : `${SAGE}55`,
                      backgroundColor: sel ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.2)',
                      color: INK,
                      boxShadow: sel ? `0 12px 40px -12px ${SAGE}88` : 'none',
                    }}
                  >
                    <span className="ch-serif text-sm font-light normal-case tracking-normal md:text-base">{p.title}</span>
                  </button>
                )
              })}
            </div>

            {active && (
              <div
                className="mx-auto mt-14 max-w-xl rounded-[2rem] border px-8 py-10 text-center md:px-12"
                style={{ borderColor: `${SAGE}44`, backgroundColor: 'rgba(255,255,255,0.35)' }}
              >
                <p className="ch-serif text-lg font-light italic leading-relaxed md:text-xl" style={{ color: `${INK}cc` }}>
                  {active.verse}
                </p>
                <p className="mt-6 text-[14px] leading-[1.9]" style={{ color: `${INK}99` }}>
                  {active.detail}
                </p>
              </div>
            )}
          </section>

          <section id="maison" className="scroll-mt-8 px-6 py-20 md:px-14 md:py-24">
            <h2 className="ch-type text-center text-[10px] uppercase tracking-[0.4em]" style={{ color: SAGE }}>
              La maison
            </h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-8 text-center">
              {site.about?.paragraphs?.map((para, i) => (
                <p key={i} className="text-[15px] leading-[2]" style={{ color: `${INK}aa` }}>
                  {para}
                </p>
              ))}
            </div>

            {muses.length > 0 && (
              <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-10">
                {muses.map((m) => (
                  <div
                    key={m.name}
                    className="flex flex-col gap-4 rounded-[2rem] border border-[#c4cfb8] px-8 py-8 md:flex-row md:items-start md:gap-10"
                  >
                    <div className="flex shrink-0 md:w-48 md:flex-col md:items-center">
                      <span
                        className="ch-type inline-block rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em]"
                        style={{ borderColor: `${SAGE}66`, color: SAGE }}
                      >
                        {m.role}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="ch-serif text-xl font-light">{m.name}</h3>
                      <p className="mt-4 text-[14px] leading-[1.9]" style={{ color: `${INK}99` }}>
                        {m.anecdote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section
            id="venir"
            className="scroll-mt-8 border-t border-[#c4cfb8] px-6 py-20 md:px-14 md:py-24"
            style={{ backgroundColor: '#eeead6' }}
          >
            <div className="mx-auto max-w-lg text-center">
              <h2 className="ch-type text-[10px] uppercase tracking-[0.4em]" style={{ color: SAGE }}>
                Venir
              </h2>
              <p className="mt-8 text-[14px] leading-[1.95]" style={{ color: `${INK}aa` }}>
                {site.location?.street}, {site.location?.postalCode} {site.location?.city}
              </p>
              <p className="mt-4 ch-type text-[12px] tracking-wide" style={{ color: `${INK}88` }}>
                {site.location?.hours}
              </p>
              <a
                href={`mailto:bonjour@cheveux-co-rennes.fr?subject=${encodeURIComponent('Rendez-vous Cheveux & Co')}`}
                className="ch-type mt-10 inline-flex rounded-full border-2 px-10 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:bg-white/60"
                style={{ borderColor: SAGE, color: INK }}
              >
                Demander une silenceuse
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
