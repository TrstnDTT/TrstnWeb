/**
 * Neon Shaker — encyclopédie du cocktail : scroll vertical profond, néons, mixologie.
 */
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'

const VOID = '#0a0512'
const VIOLET = '#7c3aed'
const CYAN = '#38bdf8'
const easeFast = [0.4, 0, 0.2, 1]

const panelIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: easeFast },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeFast } },
}

function DrinkCard({ name, price, ingredients, degustation, glassClass, i, reduceMotion }) {
  const variants = reduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : panelIn
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-5%' }}
      variants={variants}
      className={glassClass}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="ns-h text-[17px] text-white">{name}</p>
        <span className="tabular-nums text-[15px]" style={{ color: `${CYAN}cc` }}>
          {price}
        </span>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-violet-200/85">{ingredients}</p>
      <p className="mt-4 border-t border-white/[0.08] pt-4 text-[12px] uppercase tracking-[0.2em] text-white/50">
        Dégustation
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-white/75">{degustation}</p>
    </motion.div>
  )
}

export function NeonShakerExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)

  const heading = site.fontFamilyHeading ?? '"Space Grotesk", system-ui, sans-serif'
  const body = site.fontFamilyBody ?? '"DM Sans", system-ui, sans-serif'
  const assets = site.neonShakerAssets ?? {
    hero: '/neon-shaker/hero-bar.jpeg',
    mixologie: '/neon-shaker/mixologie.jpg',
    shaker: '/neon-shaker/shaker-zone.jpg',
  }

  const signatures = site.signatures ?? []
  const intemporels = site.intemporels ?? []
  const mocktails = site.mocktails ?? []
  const mixologieIntro = site.mixologieIntro ?? ''
  const storyBlocks = site.neonStoryBlocks ?? []
  const djs = site.djSetsSemaine ?? []
  const testimonials = site.testimonials ?? []
  const hours = site.openingHours ?? {}

  const glass =
    'rounded-2xl border border-white/[0.12] bg-white/[0.06] px-6 py-6 shadow-[0_8px_40px_rgba(124,58,237,0.12)] backdrop-blur-xl'

  const introVariants = reduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : fadeUp

  const anchors = [
    { id: 'ns-hero', label: 'Accueil' },
    { id: 'ns-encyclopedie', label: 'Carte' },
    { id: 'ns-signatures', label: 'Signatures' },
    { id: 'ns-intemporels', label: 'Classiques' },
    { id: 'ns-mocktails', label: 'Sans alcool' },
    { id: 'ns-lab', label: 'Labo' },
    { id: 'ns-dj', label: 'DJ' },
    { id: 'ns-temoignages', label: 'Avis' },
  ]

  return (
    <div
      ref={rootRef}
      className="relative min-h-full overflow-x-hidden antialiased"
      style={{ backgroundColor: VOID, color: '#e8e6ff', fontFamily: body }}
    >
      <style>{`
        .ns-h { font-family: ${heading}; font-weight: 600; letter-spacing: -0.04em; }
      `}</style>

      <BarExperienceChrome progress={progress} anchors={anchors} accentColor={VIOLET} dark />

      <BackButton onClick={onBack} site={site} />

      {/* Hero */}
      <section
        id="ns-hero"
        className="relative flex min-h-[100dvh] scroll-mt-2 flex-col justify-end"
      >
        <div className="absolute inset-0">
          <img
            src={assets.hero}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'saturate(1.1) contrast(1.05)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(120deg, ${VOID}ee 0%, transparent 45%, ${VOID}cc 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-transparent to-transparent opacity-90" />
        </div>
        <div className="relative z-[1] px-6 pb-28 pt-28 md:max-w-2xl md:pb-24 md:pl-16 md:pt-36">
          <p className="text-[10px] uppercase tracking-[0.5em]" style={{ color: `${CYAN}cc` }}>
            {site.tagline}
          </p>
          <h1 className="ns-h mt-6 text-[clamp(2rem,6vw,3.5rem)] leading-[0.95] text-white">
            {site.hero?.headline}
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-white/75">{site.hero?.subline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => document.getElementById('ns-signatures')?.scrollIntoView({ behavior: 'smooth' })}
              className="ns-h inline-flex min-h-[44px] items-center rounded-full border border-violet-500/50 bg-violet-600/25 px-6 text-[12px] text-white backdrop-blur-md transition hover:bg-violet-500/35"
            >
              Les Signatures
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('ns-dj')?.scrollIntoView({ behavior: 'smooth' })}
              className="ns-h inline-flex min-h-[44px] items-center rounded-full border border-cyan-500/40 px-6 text-[12px] text-cyan-100/90 backdrop-blur-sm transition hover:border-cyan-400/60"
            >
              Line-up DJ
            </button>
          </div>
        </div>
      </section>

      {/* Intro encyclopédie */}
      <section
        id="ns-encyclopedie"
        className="scroll-mt-20 px-6 py-24 md:px-16 md:py-32"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 30% 0%, ${VIOLET}18 0%, transparent 55%), ${VOID}`,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={introVariants}
          className="mx-auto max-w-3xl"
        >
          <h2 className="ns-h text-[11px] uppercase tracking-[0.45em]" style={{ color: VIOLET }}>
            L’encyclopédie du verre
          </h2>
          <p className="ns-h mt-8 text-[clamp(1.4rem,3vw,1.85rem)] leading-snug text-white/95">{mixologieIntro}</p>
          {(site.about?.paragraphs ?? []).map((p) => (
            <p key={p.slice(0, 40)} className="mt-8 text-[16px] leading-[1.9] text-white/72">
              {p}
            </p>
          ))}
          <p className="mt-10 text-[15px] leading-[1.9] text-white/55">
            Trois colonnes aromatiques : créations maison, classiques recalibrés, mocktails aussi exigeants qu’un
            stirred — zeste, dilution, température : tout est noté au shaker.
          </p>
        </motion.div>
      </section>

      {/* Signatures */}
      <section id="ns-signatures" className="scroll-mt-20">
        <div className="relative h-[38vh] min-h-[200px] w-full overflow-hidden md:h-[42vh]">
          <img src={assets.mixologie} alt="" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-[#0a0512]/40 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-16">
            <h2 className="ns-h text-[clamp(1.5rem,3.5vw,2.25rem)] text-white drop-shadow-lg">Les Signatures</h2>
            <p className="mt-3 max-w-xl text-[14px] text-white/75">
              Créations maison — ingrédients complexes, équilibre au compte-gouttes.
            </p>
          </div>
        </div>
        <div
          className="space-y-5 px-6 py-16 md:px-16 md:py-24"
          style={{
            background: `linear-gradient(180deg, #0a0512 0%, #12081a 100%)`,
          }}
        >
          <div className="mx-auto max-w-2xl space-y-5">
            {signatures.map((d, i) => (
              <DrinkCard key={d.name} {...d} glassClass={glass} i={i} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </section>

      {/* Intemporels */}
      <section id="ns-intemporels" className="scroll-mt-20">
        <div className="relative h-[38vh] min-h-[200px] w-full overflow-hidden md:h-[42vh]">
          <img src={assets.shaker} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-[#0a0512]/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-16">
            <h2 className="ns-h text-[clamp(1.5rem,3.5vw,2.25rem)] text-white drop-shadow-lg">Les Intemporels</h2>
            <p className="mt-3 max-w-xl text-[14px] text-white/75">
              Classiques revisités — fumée, épices, sirop maison : la mémoire du bar, pas du manuel.
            </p>
          </div>
        </div>
        <div className="space-y-5 bg-[#0d0614] px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-5">
            {intemporels.map((d, i) => (
              <DrinkCard key={d.name} {...d} glassClass={glass} i={i} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </section>

      {/* Mocktails */}
      <section
        id="ns-mocktails"
        className="scroll-mt-20 px-6 py-20 md:px-16 md:py-28"
        style={{
          background: `radial-gradient(ellipse 70% 40% at 80% 20%, ${CYAN}12 0%, transparent 50%), #0a0512`,
        }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="ns-h text-[11px] uppercase tracking-[0.4em]" style={{ color: CYAN }}>
            Sans alcool — mocktails
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">
            Distillats botaniques 0 %, kombuchas maison, bitters sans alcool : même architecture aromatique qu’un
            cocktail « plein » — jamais du jus dilué.
          </p>
          <div className="mt-12 space-y-5">
            {mocktails.map((d, i) => (
              <DrinkCard key={d.name} {...d} glassClass={glass} i={i} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </section>

      {/* Lab story blocks */}
      <section id="ns-lab" className="scroll-mt-20 border-y border-white/[0.06] bg-[#08030f] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-20">
          {storyBlocks.map((block) => (
            <motion.div
              key={block.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={introVariants}
            >
              <h3 className="ns-h text-[clamp(1.15rem,2vw,1.45rem)] text-white">{block.title}</h3>
              <p className="mt-6 text-[15px] leading-[1.95] text-white/60">{block.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-2xl border border-white/10">
          <img src={assets.mixologie} alt="" className="h-64 w-full object-cover md:h-80" />
        </div>
      </section>

      {/* DJ */}
      <section
        id="ns-dj"
        className="scroll-mt-20 px-6 py-24 md:px-16 md:py-32"
        style={{
          background: `linear-gradient(165deg, ${VOID} 0%, #12081f 40%, ${VOID} 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[min(400px,38%)_1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-cyan-500/20">
            <img src={assets.shaker} alt="" className="aspect-square w-full object-cover lg:aspect-[4/5]" />
          </div>
          <div>
            <h2 className="ns-h text-[11px] uppercase tracking-[0.4em]" style={{ color: CYAN }}>
              DJ sets de la semaine
            </h2>
            <ul className="mt-12 space-y-8">
              {djs.map((d) => (
                <li
                  key={d.day + d.artist}
                  className="flex flex-col gap-2 border-b border-white/[0.08] pb-8 last:border-0 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <p className="ns-h text-[16px] text-white">{d.day}</p>
                    <p className="mt-1 text-[14px] text-white/70">{d.artist}</p>
                  </div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-violet-300/90">{d.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="ns-temoignages" className="scroll-mt-20 px-6 py-20 md:px-16 md:py-28">
        <h2 className="ns-h text-center text-[11px] uppercase tracking-[0.4em] text-white/45">Sur le zinc</h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-8"
            >
              <p className="text-[15px] leading-relaxed text-white/75">« {t.text} »</p>
              <footer className="mt-6 text-[12px] uppercase tracking-[0.2em] text-violet-300/80">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-6 py-16 md:px-16" style={{ backgroundColor: '#08030f' }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">{site.location?.city}</p>
          <p className="mt-4 text-[14px] text-white/65">{site.location?.street}</p>
          <p className="mt-2 text-[13px] text-white/50">{site.location?.hours}</p>
          {Object.keys(hours).length > 0 ? (
            <dl className="mt-10 grid gap-2 text-[13px] text-white/55 sm:grid-cols-2">
              {Object.entries(hours).map(([day, h]) => (
                <div key={day} className="flex justify-between gap-4 border-b border-white/[0.05] py-2 capitalize">
                  <dt>{day}</dt>
                  <dd className="text-white/75">{h}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="mt-12 flex flex-wrap gap-4">
            {site.ctaPrimary ? (
              <a
                href={site.ctaPrimary.href}
                className="ns-h rounded-full border border-violet-500/40 bg-violet-600/20 px-5 py-2.5 text-[11px] text-white transition hover:bg-violet-600/30"
              >
                {site.ctaPrimary.label}
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  )
}
