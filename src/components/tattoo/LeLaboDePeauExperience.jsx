/**
 * Le Labo de Peau — plein écran & split, crème / or rose / perle, sans-serif fine.
 * Guide bijoux, anatomie, processus, hygiène, zoom portfolio.
 * Aucun composant partagé avec Atelier 1920 ni Neo-Ink.
 */
import { useCallback } from 'react'

const CREME = '#fefaf7'
const BLANC = '#fffcf9'
const ROSE_OR = '#c9a088'
const PERLE = '#c4c1bd'
const MINK = '#4a4544'
const OUTFIT = '"Outfit", system-ui, sans-serif'

const TP = '/stock-photos/tattoo-piercing'

const NAV = [
  ['labo-hero', 'Accueil'],
  ['labo-catalogue', 'Catalogue'],
  ['labo-guide', 'Bijoux'],
  ['labo-anatomie', 'Anatomie'],
  ['labo-process', 'Processus'],
  ['labo-hygiene', 'Hygiène'],
  ['labo-zoom', 'Zoom'],
  ['labo-protocole', 'Protocole'],
  ['labo-equipe', 'Équipe'],
]

function LaboRetour({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed left-5 top-5 z-[1000] text-[10px] uppercase tracking-[0.45em] text-[#4a4544]/70 transition hover:text-[#c9a088]"
      style={{ fontFamily: OUTFIT, fontWeight: 300 }}
      aria-label="Retour au portfolio"
    >
      ← retour
    </button>
  )
}

export function LeLaboDePeauExperience({ site, onBack }) {
  const jewelry = site.jewelryCatalog ?? []
  const protocol = site.hygieneProtocol ?? []
  const guide = site.jewelryGuide
  const anatomy = site.anatomyPiercings ?? []
  const processSteps = site.clientProcessSteps ?? []
  const hygiene = site.hygieneLuxury
  const zoom = site.zoomPortfolio
  const team = site.piercingTeamNarrative?.length ? site.piercingTeamNarrative : site.piercingTeam ?? []

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const toCatalog = useCallback(() => {
    document.getElementById('labo-catalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-[100dvh] overflow-x-hidden scroll-smooth" style={{ fontFamily: OUTFIT, color: MINK }}>
      <LaboRetour onBack={onBack} />

      <nav
        className="fixed right-4 top-20 z-[999] hidden max-h-[70dvh] flex-col gap-1 overflow-y-auto md:flex"
        aria-label="Sections du Labo"
      >
        {NAV.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="border border-[#c4c1bd]/40 bg-[#fefaf7]/95 px-3 py-1.5 text-left text-[9px] uppercase tracking-[0.28em] text-[#4a4544]/80 shadow-sm backdrop-blur-sm transition hover:border-[#c9a088]/50 hover:text-[#4a4544]"
            style={{ fontWeight: 300 }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* 01 — Plein écran */}
      <section
        id="labo-hero"
        className="scroll-mt-4 flex min-h-[100dvh] flex-col justify-center px-8 py-24 md:px-20"
        style={{ backgroundColor: CREME }}
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[9px] uppercase tracking-[0.65em]" style={{ color: `${PERLE}`, fontWeight: 300 }}>
            {site.tagline}
          </p>
          <h1
            className="mt-14 text-[clamp(2rem,5.5vw,3.5rem)] font-extralight leading-[1.12]"
            style={{ letterSpacing: '0.08em', fontWeight: 200 }}
          >
            {site.name}
          </h1>
          <p className="mx-auto mt-16 max-w-md font-light leading-[2.1]" style={{ fontWeight: 300, letterSpacing: '0.04em' }}>
            {site.hero?.headline}
          </p>
          <p className="mx-auto mt-10 max-w-sm text-[14px] font-light leading-[1.95]" style={{ color: `${MINK}aa`, letterSpacing: '0.06em', fontWeight: 300 }}>
            {site.hero?.subline}
          </p>
          <div className="mt-20 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={toCatalog}
              className="rounded-full border border-[#c9a088]/40 bg-transparent px-12 py-3 text-[10px] uppercase tracking-[0.42em] transition hover:bg-[#c9a088]/12"
              style={{ fontWeight: 300, color: ROSE_OR }}
            >
              La sécurité &amp; l’éclat
            </button>
            <a
              href={`mailto:concierge@lelabodepeau-nantes.fr?subject=${encodeURIComponent('Réserver mon bijou')}`}
              className="text-[10px] uppercase tracking-[0.38em] underline underline-offset-8 transition hover:opacity-70"
              style={{ fontWeight: 300, color: MINK }}
            >
              Réserver mon bijou
            </a>
          </div>
        </div>
      </section>

      {/* 02 — Catalogue */}
      <section
        id="labo-catalogue"
        className="scroll-mt-24 grid min-h-[min(100dvh,auto)] grid-cols-1 md:grid-cols-2"
        style={{ backgroundColor: BLANC }}
      >
        <div className="order-2 flex flex-col justify-center px-8 py-20 md:order-1 md:px-16 md:py-28">
          <h2 className="text-[10px] uppercase tracking-[0.55em]" style={{ color: ROSE_OR, fontWeight: 300 }}>
            Catalogue
          </h2>
          <p className="mt-8 max-w-md font-extralight leading-[1.9]" style={{ letterSpacing: '0.12em', fontWeight: 200 }}>
            Titane implant-grade &amp; or 18&nbsp;carats
          </p>
          <p className="mt-8 max-w-sm text-[13px] font-light leading-[2]" style={{ color: `${MINK}aa`, letterSpacing: '0.05em', fontWeight: 300 }}>
            Pièces sélectionnées pour la tolérance cutanée et le poli miroir sous loup gemmologique — pas de nickel,
            pas de « bijoux fantaisie » en cabine.
          </p>
          <div className="mt-14 space-y-0" style={{ borderTop: `1px solid ${PERLE}66` }}>
            {jewelry.map((row) => (
              <div
                key={row.name}
                className="flex flex-col gap-1 border-b py-9 md:flex-row md:items-baseline md:justify-between md:gap-12"
                style={{ borderColor: `${PERLE}55` }}
              >
                <div>
                  <p className="text-[15px] font-light tracking-wide" style={{ fontWeight: 300 }}>
                    {row.name}
                  </p>
                  <p className="mt-1 text-[12px] font-light" style={{ color: `${PERLE}`, letterSpacing: '0.08em', fontWeight: 300 }}>
                    {row.material}
                  </p>
                </div>
                <p className="shrink-0 text-[12px] tracking-[0.25em]" style={{ color: ROSE_OR, fontWeight: 300 }}>
                  {row.price}
                </p>
              </div>
            ))}
          </div>
          <a
            href={`mailto:concierge@lelabodepeau-nantes.fr?subject=${encodeURIComponent('Réservation bijou F-136 / or')}`}
            className="mt-14 inline-block w-max rounded-full px-10 py-3 text-center text-[10px] uppercase tracking-[0.38em] text-white transition hover:opacity-90"
            style={{ backgroundColor: ROSE_OR, fontWeight: 300 }}
          >
            Réserver mon bijou
          </a>
        </div>
        <div className="order-1 min-h-[45vh] md:order-2 md:min-h-[100dvh]">
          <img
            src={`${TP}/piercingg.webp`}
            alt="Cabinet de piercing, ambiance claire et matériel stérile"
            className="h-full w-full object-cover"
            style={{ filter: 'saturate(0.92) brightness(1.02)' }}
            loading="lazy"
          />
        </div>
      </section>

      {/* 03 — Guide des bijoux */}
      <section id="labo-guide" className="scroll-mt-24 px-8 py-24 md:px-24" style={{ backgroundColor: CREME }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Guide des bijoux
          </h2>
          {guide?.intro && (
            <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] font-light leading-[2.05]" style={{ letterSpacing: '0.06em', fontWeight: 300 }}>
              {guide.intro}
            </p>
          )}
          <div className="mt-16 space-y-12">
            {(guide?.alloys ?? []).map((a) => (
              <article
                key={a.name}
                className="border border-[#c4c1bd]/50 bg-[#fffcf9]/80 px-8 py-10"
                style={{ borderStyle: 'double', borderWidth: '3px' }}
              >
                <h3 className="text-[16px] font-light tracking-[0.15em]" style={{ fontWeight: 300 }}>
                  {a.name}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.35em]" style={{ color: ROSE_OR, fontWeight: 300 }}>
                  {a.subtitle}
                </p>
                <p className="mt-6 text-[13px] font-light leading-[2.05]" style={{ color: `${MINK}b5`, letterSpacing: '0.05em', fontWeight: 300 }}>
                  {a.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Anatomie */}
      <section id="labo-anatomie" className="scroll-mt-24 px-8 py-24 md:px-16" style={{ backgroundColor: BLANC }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Anatomie — schéma d’orientation
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-center text-[13px] font-light leading-[1.95]" style={{ color: `${MINK}aa`, fontWeight: 300 }}>
            Chaque zone impose un temps de cicatrisation et des contraintes de sommeil ou d’écouteurs. Ce tableau résume
            nos emplacements les plus demandés — la validation finale reste sur votre morphologie.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
            <div
              className="relative mx-auto aspect-[3/4] w-full max-w-xs border-2 border-dashed md:max-w-none"
              style={{ borderColor: `${PERLE}99` }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <svg viewBox="0 0 200 280" className="h-full max-h-[320px] w-auto opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="100" cy="120" rx="72" ry="100" stroke={PERLE} strokeWidth="1.2" />
                  <path d="M100 20v40M40 100h120" stroke={ROSE_OR} strokeWidth="0.6" opacity="0.5" />
                  <circle cx="130" cy="85" r="4" stroke={ROSE_OR} fill="none" />
                  <circle cx="100" cy="55" r="4" stroke={ROSE_OR} fill="none" />
                  <circle cx="85" cy="115" r="5" stroke={ROSE_OR} fill="none" />
                  <text x="138" y="88" fill={MINK} fontSize="8" fontFamily="system-ui">
                    Helix
                  </text>
                  <text x="104" y="52" fill={MINK} fontSize="8" fontFamily="system-ui">
                    Forward
                  </text>
                  <text x="92" y="118" fill={MINK} fontSize="8" fontFamily="system-ui">
                    Conch
                  </text>
                </svg>
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-center text-[9px] uppercase tracking-[0.3em]" style={{ color: `${PERLE}` }}>
                Pavillon — repères indicatifs
              </p>
            </div>

            <ul className="space-y-0" style={{ borderTop: `1px solid ${PERLE}55` }}>
              {anatomy.map((row) => (
                <li
                  key={row.name}
                  className="border-b py-8"
                  style={{ borderColor: `${PERLE}44` }}
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-[15px] font-light tracking-[0.12em]" style={{ fontWeight: 300 }}>
                      {row.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: ROSE_OR, fontWeight: 300 }}>
                      Cicatrisation ~ {row.healing}
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] font-light" style={{ color: `${PERLE}`, fontWeight: 300 }}>
                    {row.zone}
                  </p>
                  <p className="mt-4 text-[13px] font-light leading-[1.95]" style={{ color: `${MINK}b0`, fontWeight: 300 }}>
                    {row.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 — Processus */}
      <section id="labo-process" className="scroll-mt-24 px-8 py-24 md:px-24" style={{ backgroundColor: CREME }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Le processus
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-center text-[13px] font-light leading-[1.95]" style={{ color: `${MINK}aa`, fontWeight: 300 }}>
            De la consultation au suivi : transparence totale sur le geste et la cicatrisation en milieu humide pour les
            zones autorisées.
          </p>
          <ol className="mt-16 space-y-12">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-6 md:gap-10">
                <span
                  className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm"
                  style={{ borderColor: `${ROSE_OR}66`, color: ROSE_OR, fontWeight: 300 }}
                  aria-hidden="true"
                >
                  {step.icon}
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: PERLE, fontWeight: 300 }}>
                    Étape {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-[15px] font-light tracking-[0.15em]" style={{ fontWeight: 300 }}>
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[13px] font-light leading-[2.05]" style={{ color: `${MINK}b0`, fontWeight: 300 }}>
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — Hygiène */}
      <section id="labo-hygiene" className="scroll-mt-24 px-8 py-24 md:px-20" style={{ backgroundColor: BLANC }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Hygiène &amp; sécurité
          </h2>
          {hygiene?.intro && (
            <p className="mx-auto mt-10 max-w-xl text-center text-[13px] font-light leading-[2]" style={{ color: `${MINK}aa`, fontWeight: 300 }}>
              {hygiene.intro}
            </p>
          )}
          <ul className="mt-14 space-y-10">
            {(hygiene?.points ?? []).map((pt) => (
              <li key={pt.title}>
                <h3 className="text-[15px] font-light tracking-[0.18em]" style={{ fontWeight: 300 }}>
                  {pt.title}
                </h3>
                <p className="mt-4 text-[13px] font-light leading-[2.05]" style={{ color: `${MINK}b0`, fontWeight: 300 }}>
                  {pt.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 07 — Zoom portfolio */}
      <section id="labo-zoom" className="scroll-mt-24 px-4 py-20 md:px-12" style={{ backgroundColor: CREME }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Zoom portfolio
          </h2>
          {zoom?.intro && (
            <p className="mx-auto mt-8 max-w-xl text-center text-[13px] font-light leading-[1.95]" style={{ color: `${MINK}aa`, fontWeight: 300 }}>
              {zoom.intro}
            </p>
          )}
          <div className="mt-12 grid grid-flow-dense grid-cols-2 gap-2 md:grid-cols-4">
            {(zoom?.items ?? []).map((item, i) => (
              <div key={`${item.src}-${i}`} className={`overflow-hidden ${item.span ?? ''}`}>
                <img src={item.src} alt={item.alt} className="h-full min-h-[120px] w-full object-cover md:min-h-[160px]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Protocole détaillé */}
      <section id="labo-protocole" className="scroll-mt-24 flex min-h-[min(100dvh,auto)] flex-col justify-center px-8 py-24 md:px-24" style={{ backgroundColor: CREME }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            Protocole d’asepsie
          </h2>
          <p
            className="mx-auto mt-10 max-w-lg text-center font-extralight leading-[1.95]"
            style={{ letterSpacing: '0.14em', fontWeight: 200 }}
          >
            Cinq étapes visibles. Rassurant, luxueux, féminin dans l’exigence.
          </p>
          <ol className="mt-20 space-y-16">
            {protocol.map((step, i) => (
              <li key={step.title} className="flex gap-8 md:gap-14">
                <span
                  className="mt-1 shrink-0 font-extralight tabular-nums"
                  style={{ color: ROSE_OR, fontSize: 'clamp(2rem,4vw,2.75rem)', letterSpacing: '0.02em', fontWeight: 200 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15px] font-light tracking-[0.2em]" style={{ fontWeight: 300 }}>
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[13px] font-light leading-[2.05]" style={{ color: `${MINK}b0`, letterSpacing: '0.06em', fontWeight: 300 }}>
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 09 — Équipe narrative */}
      <section id="labo-equipe" className="scroll-mt-24 px-8 py-24 md:px-20" style={{ backgroundColor: BLANC }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[10px] uppercase tracking-[0.6em]" style={{ color: PERLE, fontWeight: 300 }}>
            L’artiste — récits
          </h2>
          <div className="mt-14 space-y-14">
            {team.map((m) => (
              <article key={m.name}>
                <h3 className="text-[17px] font-light tracking-[0.1em]" style={{ fontWeight: 300 }}>
                  {m.name}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.35em]" style={{ color: ROSE_OR, fontWeight: 300 }}>
                  {m.role}
                </p>
                <p className="mt-6 text-[14px] font-light leading-[2.1]" style={{ letterSpacing: '0.06em', fontWeight: 300 }}>
                  {m.story ?? m.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Bloc final */}
      <section className="grid min-h-[85dvh] grid-cols-1 md:grid-cols-2" style={{ backgroundColor: BLANC }}>
        <div className="hidden min-h-[40vh] md:block md:min-h-full">
          <img
            src={`${TP}/nosepiercing2.webp`}
            alt="Gros plan sur piercing et bijou fin, finition métal et peau"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-20 md:px-16">
          {site.about?.paragraphs?.map((p, i) => (
            <p key={i} className="mb-10 last:mb-0 text-[14px] font-light leading-[2.1]" style={{ letterSpacing: '0.07em', fontWeight: 300 }}>
              {p}
            </p>
          ))}
          <p className="mt-6 text-[11px] uppercase tracking-[0.35em]" style={{ color: PERLE, fontWeight: 300 }}>
            {site.location?.street} · {site.location?.postalCode} {site.location?.city}
          </p>
          <p className="mt-3 text-[11px] tracking-[0.2em]" style={{ color: `${MINK}99`, fontWeight: 300 }}>
            {site.location?.hours}
          </p>
        </div>
      </section>
    </div>
  )
}
