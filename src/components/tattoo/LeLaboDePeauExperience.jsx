/**
 * Le Labo de Peau — plein écran & split, crème / or rose / perle, sans-serif fine.
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

  const toCatalog = useCallback(() => {
    document.getElementById('labo-catalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-[100dvh] overflow-x-hidden" style={{ fontFamily: OUTFIT, color: MINK }}>
      <LaboRetour onBack={onBack} />

      {/* 01 — Plein écran : pose magazine */}
      <section
        className="flex min-h-[100dvh] flex-col justify-center px-8 py-24 md:px-20"
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
          <p className="mx-auto mt-10 max-w-sm text-[14px] font-light leading-[1.95]" style={{ color: `${MINK}aa`, letterSpacing: '0.06em' }}>
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

      {/* 02 — Split catalogue / Titane & Or */}
      <section
        id="labo-catalogue"
        className="scroll-mt-4 grid min-h-[100dvh] grid-cols-1 md:grid-cols-2"
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

      {/* 03 — Protocole d’asepsie : 5 étapes, plein écran */}
      <section className="flex min-h-[100dvh] flex-col justify-center px-8 py-24 md:px-24" style={{ backgroundColor: CREME }}>
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

      {/* 04 — Bloc final split inverse (image + promesse) */}
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
