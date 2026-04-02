/**
 * L’Atelier Sucré — pâtisserie boutique : grille aérée, socles type vitrine, transitions scale + blur.
 */
import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SITE } from '../../constants.js'
import { ATELIER_SUCRE_DEFAULT, ATELIER_SUCRE_PALETTE } from '../../data/atelierSucreContent.js'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'

const { blush: BLUSH, white: WHITE, roseGold: ROSE_GOLD, ink: INK, mist: MIST } = ATELIER_SUCRE_PALETTE
const SANS = '"Outfit", system-ui, sans-serif'

function useMapsUrl(site) {
  return useMemo(() => {
    const loc = site?.location
    if (!loc?.street) return '#'
    const q = `${loc.street}, ${loc.postalCode} ${loc.city}, ${loc.country}`
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
  }, [site])
}

function PedestalCard({ children, className = '' }) {
  return (
    <div
      className={[
        'rounded-[2rem] bg-white p-5 shadow-[0_28px_56px_-20px_rgba(44,38,36,0.1)] ring-1 ring-[#2C2624]/[0.05]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function Reveal({ children, delay = 0 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AtelierSucreExperience({ site, onBack }) {
  const reduce = useReducedMotion()
  const mapsUrl = useMapsUrl(site)

  const data = useMemo(() => {
    const o = site?.atelierSucre ?? {}
    return {
      ...ATELIER_SUCRE_DEFAULT,
      ...o,
      collectionSaison: {
        ...ATELIER_SUCRE_DEFAULT.collectionSaison,
        ...(o.collectionSaison ?? {}),
        items: o.collectionSaison?.items ?? ATELIER_SUCRE_DEFAULT.collectionSaison.items,
      },
      ingredientRare: { ...ATELIER_SUCRE_DEFAULT.ingredientRare, ...(o.ingredientRare ?? {}) },
      barTartes: {
        ...ATELIER_SUCRE_DEFAULT.barTartes,
        ...(o.barTartes ?? {}),
        items: o.barTartes?.items ?? ATELIER_SUCRE_DEFAULT.barTartes.items,
      },
    }
  }, [site?.atelierSucre])

  const heroImage = data.heroImage
  const headline = data.headline ?? site?.name ?? "L'Atelier Sucré"
  const subline = data.subline ?? site?.hero?.subline ?? ''

  const shellSite = useMemo(
    () => ({
      ...site,
      surfaceColor: BLUSH,
      textColor: INK,
      portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(201, 162, 126, 0.35)' },
    }),
    [site],
  )

  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('Création sur mesure — ' + headline)}`

  return (
    <div
      className="relative min-h-full overflow-x-hidden overflow-y-auto pb-24"
      style={{
        background: `linear-gradient(180deg, ${WHITE} 0%, ${BLUSH} 40%, ${MIST} 100%)`,
        color: INK,
        fontFamily: SANS,
        fontWeight: 300,
      }}
    >
      <header className="sticky top-0 z-[100] border-b border-[#2C2624]/[0.06] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <BackButton variant="inline" onClick={onBack} site={shellSite} />
          <p className="min-w-0 flex-1 text-right text-[11px] font-extralight uppercase tracking-[0.45em] text-[#2C2624]/45">
            {headline}
          </p>
        </div>
      </header>

      {/* Hero minimal */}
      <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <Reveal>
          <p className="text-[10px] font-extralight uppercase tracking-[0.55em] text-[#2C2624]/40">{data.kicker}</p>
          <h1 className="mt-8 text-[clamp(2rem,6vw,3.5rem)] font-extralight leading-[1.05] tracking-[0.02em] text-[#2C2624]">
            {headline}
          </h1>
          {subline ? (
            <p className="mx-auto mt-10 max-w-xl text-center text-[15px] font-light leading-[1.85] tracking-wide text-[#2C2624]/55 md:text-[16px]">
              {subline}
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-16 aspect-[21/10] max-h-[min(52vh,520px)] w-full overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-28px_rgba(44,38,36,0.18)]">
            <SafeImg
              src={heroImage}
              alt=""
              className="h-full w-full object-cover"
              style={{ filter: 'saturate(0.95) contrast(1.02)' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Collection saison — product grid */}
      <section className="mx-auto mt-28 max-w-6xl px-5">
        <Reveal>
          <p className="text-[10px] font-extralight uppercase tracking-[0.5em] text-[#C9A27E]">{data.collectionSaison.kicker}</p>
          <h2 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-extralight tracking-[0.12em] text-[#2C2624]">
            {data.collectionSaison.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[14px] font-light leading-[1.9] tracking-wide text-[#2C2624]/50">
            {data.collectionSaison.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {data.collectionSaison.items.map((item, i) => (
            <Reveal key={item.name} delay={0.05 * i}>
              <PedestalCard className="flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#FAFAFA]">
                  <SafeImg src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="mt-6 flex flex-1 flex-col text-center">
                  <h3 className="text-[15px] font-light leading-snug tracking-wide text-[#2C2624]">{item.name}</h3>
                  <p className="mt-2 text-[12px] font-extralight uppercase tracking-[0.2em] text-[#2C2624]/40">
                    {item.note}
                  </p>
                </div>
              </PedestalCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ingrédient rare — bande éditoriale */}
      <section className="mt-32 border-y border-[#2C2624]/[0.06] bg-white/60 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="text-[10px] font-extralight uppercase tracking-[0.5em] text-[#C9A27E]">{data.ingredientRare.kicker}</p>
              <h2 className="mt-5 text-[clamp(1.45rem,2.8vw,1.85rem)] font-extralight tracking-[0.14em]">
                {data.ingredientRare.title}
              </h2>
              <p className="mt-3 text-[13px] font-medium tracking-[0.08em] text-[#2C2624]/80">{data.ingredientRare.name}</p>
              <p className="mt-6 text-[15px] font-light leading-[1.95] tracking-wide text-[#2C2624]/55">{data.ingredientRare.body}</p>
              <p className="mt-6 font-mono text-[11px] font-light tracking-wide text-[#C9A27E]/90">{data.ingredientRare.detail}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_36px_72px_-32px_rgba(44,38,36,0.2)] lg:aspect-square">
              <SafeImg src={data.ingredientRare.image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bar à tartes — cercles */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <p className="text-[10px] font-extralight uppercase tracking-[0.5em] text-[#C9A27E]">{data.barTartes.kicker}</p>
          <h2 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-extralight tracking-[0.12em]">{data.barTartes.title}</h2>
          <p className="mt-5 max-w-xl text-[14px] font-light leading-[1.9] text-[#2C2624]/50">{data.barTartes.intro}</p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-x-12">
          {data.barTartes.items.map((t, i) => (
            <Reveal key={t.name} delay={0.06 * i}>
              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full shadow-[0_20px_48px_-16px_rgba(44,38,36,0.15)] ring-1 ring-[#2C2624]/[0.04]">
                  <motion.div
                    className="h-full w-full"
                    initial={reduce ? false : { scale: 0.92, opacity: 0.85 }}
                    whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SafeImg src={t.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </motion.div>
                </div>
                <p className="mt-8 max-w-[160px] text-[12px] font-extralight uppercase tracking-[0.28em] text-[#2C2624]/55">
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#2C2624]/[0.06] px-5 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
          <a
            href={mailto}
            className="rounded-full border border-[#2C2624]/10 bg-white px-10 py-4 text-[11px] font-light uppercase tracking-[0.35em] text-[#2C2624]/75 shadow-sm transition hover:border-[#C9A27E]/40"
          >
            Réserver
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-extralight uppercase tracking-[0.3em] text-[#2C2624]/45 transition hover:text-[#2C2624]"
          >
            <MapPin className="h-4 w-4" style={{ color: ROSE_GOLD }} aria-hidden />
            Itinéraire
          </a>
        </div>
      </footer>
    </div>
  )
}
