/**
 * Le Chai Moderne — Bayonne : ambiance chêne/papier, menu « moments de vie », agenda, barre d’action mobile.
 */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Beer, Coffee, UtensilsCrossed, Wine } from 'lucide-react'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { SITE } from '../../constants.js'
import {
  CHAI_AGENDA_EVENTS,
  CHAI_MAPS_QUERY,
  CHAI_MENU_MOMENTS,
  CHAI_PALETTE,
  CHAI_SOUL,
} from '../../data/chaiModerneContent.js'

const { paper: BG, ink: INK, oak: OAK } = CHAI_PALETTE
const ease = [0.22, 1, 0.36, 1]
const SERIF = '"Cormorant Garamond", Georgia, serif'

const softPhoto = 'saturate(0.88) brightness(1.02) contrast(1.02) grayscale(0.12)'

const WINE_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=82'

function SafeChaiImg({ src, alt = '', className, style }) {
  const [u, setU] = useState(src)
  useEffect(() => setU(src), [src])
  return (
    <img
      src={u}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setU(WINE_IMG_FALLBACK)}
    />
  )
}

const ICONS = {
  coffee: Coffee,
  beer: Beer,
  wine: Wine,
  food: UtensilsCrossed,
}

function ParallaxStill({ src, alt, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, -24])
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        <SafeChaiImg src={src} alt={alt} className="h-full w-full object-cover" style={{ filter: softPhoto }} />
      </motion.div>
    </div>
  )
}

export function ChaiModerneBarExperience({ site, onBack }) {
  const rootRef = useRef(null)
  const heroRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.06])
  const heroY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 48])

  const assets = site.chaiAssets ?? {
    hero: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1800&q=88',
    still1: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
    still2: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85',
  }

  const avis = site.testimonials ?? []
  const bookingTo = `/portfolio/${site?.id ?? 'zinc-des-amis'}/reservation`
  const carteTo = `/portfolio/zinc-des-amis/carte`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CHAI_MAPS_QUERY)}`

  const backSite = {
    ...site,
    surfaceColor: BG,
    textColor: INK,
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(26,26,26,0.12)' },
  }

  const anchors = [
    { id: 'chai-menu', label: 'MENU' },
    { id: 'chai-ame', label: 'ÂME' },
    { id: 'chai-agenda', label: 'AGENDA' },
    { id: 'chai-footer', label: 'BAYONNE' },
  ]

  return (
    <div
      ref={rootRef}
      className="scroll-smooth pb-28 antialiased md:pb-24"
      style={{ backgroundColor: BG, color: INK, fontFamily: '"Inter", system-ui, sans-serif' }}
    >
      <BarExperienceChrome
        progress={progress}
        anchors={anchors}
        accentColor={OAK}
        dark={false}
        opaqueHeader
        backSlot={<BackButton variant="inline" onClick={onBack} site={backSite} />}
      />

      {/* Hero cinématique + grain argentique */}
      <header
        id="chai-hero"
        ref={heroRef}
        className="relative min-h-[min(92dvh,820px)] scroll-mt-2 overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ scale: heroScale, y: heroY }}>
          <SafeChaiImg
            src={assets.hero}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: `${softPhoto}` }}
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/55 via-[#1a1a1a]/25 to-[#F9F7F2]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.42] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
          aria-hidden
        />

        <div className="relative z-[1] mx-auto flex min-h-[min(92dvh,820px)] max-w-3xl flex-col justify-end px-6 pb-20 pt-[calc(10rem+env(safe-area-inset-top))] text-center md:px-12 md:pb-28">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/70">{site.tagline}</p>
          <h1
            className="mt-8 text-[clamp(1.85rem,5.2vw,3rem)] font-light leading-[1.12] tracking-tight text-[#F9F7F2]"
            style={{ fontFamily: SERIF }}
          >
            {site.hero?.headline ?? "L'instant partagé"}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-white/88">{site.hero?.subline}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to={bookingTo}
              className="rounded-lg border border-[#F9F7F2]/35 bg-[#F9F7F2] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] transition hover:bg-white"
            >
              Réserver une table
            </Link>
            <a
              href="#chai-menu"
              className="rounded-lg border border-white/35 bg-[#1a1a1a]/35 px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F9F7F2] backdrop-blur-sm transition hover:bg-[#1a1a1a]/55"
            >
              Parcourir le menu
            </a>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/55">
            <Link to={carteTo} className="border-b border-white/30 transition hover:border-[#D2B48C] hover:text-[#D2B48C]">
              Voir la carte complète
            </Link>
          </p>
        </div>
      </header>

      {/* Menu immersif — Moments de vie */}
      <section id="chai-menu" className="scroll-mt-[7.5rem] px-6 py-16 md:scroll-mt-32 md:px-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: `${OAK}` }}>
            Moments de vie
          </p>
          <h2 className="mt-4 text-[clamp(1.5rem,3.2vw,2.1rem)] font-light text-[#1a1a1a]" style={{ fontFamily: SERIF }}>
            Le comptoir, en quatre temps
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-[#1a1a1a]/58">
            Partage, pépite locale, terrasse ombragée — une carte pensée pour s’asseoir et commander sans jargon.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-16">
          {CHAI_MENU_MOMENTS.map((block, bi) => {
            const Icon = ICONS[block.iconKey] ?? Coffee
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.55, delay: bi * 0.05, ease }}
                className="rounded-2xl border border-[#1a1a1a]/08 bg-white/70 p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.12)] md:p-8"
              >
                <div className="flex flex-wrap items-start gap-4 border-b border-[#1a1a1a]/08 pb-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]/10 bg-[#F9F7F2]"
                    style={{ color: OAK }}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.35} />
                  </span>
                  <div>
                    <h3 className="text-[1.35rem] font-normal leading-tight text-[#1a1a1a]" style={{ fontFamily: SERIF }}>
                      {block.title}
                    </h3>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[#1a1a1a]/45">{block.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-4">
                  {block.items.map((row) => (
                    <li
                      key={row.name}
                      className="flex flex-col gap-1 border-b border-[#1a1a1a]/06 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <div>
                        <span className="text-[15px] font-medium text-[#1a1a1a]">{row.name}</span>
                        <p className="mt-1 text-[13px] leading-snug text-[#1a1a1a]/52">{row.note}</p>
                      </div>
                      <span className="shrink-0 text-[14px] font-semibold tabular-nums tracking-tight text-[#1a1a1a]/90 sm:pl-6">
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <Link
            to={carteTo}
            className="inline-flex items-center justify-center rounded-lg border border-[#1a1a1a]/14 bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] transition hover:border-[#D2B48C] hover:bg-[#D2B48C]/12"
          >
            Voir la carte complète
          </Link>
        </div>
      </section>

      {/* Parallax léger — verres & bouteilles */}
      <section className="grid gap-3 px-6 md:grid-cols-2 md:px-16">
        <ParallaxStill src={assets.still1} alt="" className="aspect-[4/3] rounded-xl border border-[#1a1a1a]/08 md:aspect-[5/4]" />
        <ParallaxStill src={assets.still2} alt="" className="aspect-[4/3] rounded-xl border border-[#1a1a1a]/08 md:aspect-[5/4]" />
      </section>

      {/* L'Âme du Chai */}
      <section id="chai-ame" className="scroll-mt-[7.5rem] px-6 py-20 md:scroll-mt-32 md:px-16 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: OAK }}>
            Découverte
          </p>
          <h2 className="mt-4 text-[clamp(1.45rem,3vw,1.95rem)] font-light text-[#1a1a1a]" style={{ fontFamily: SERIF }}>
            {CHAI_SOUL.title}
          </h2>
          <p className="mt-3 text-[13px] font-medium text-[#1a1a1a]/55">{CHAI_SOUL.lead}</p>
          {CHAI_SOUL.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-[15px] leading-[1.9] text-[#1a1a1a]/62">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Agenda du Zinc */}
      <section
        id="chai-agenda"
        className="scroll-mt-[7.5rem] border-y border-[#1a1a1a]/08 bg-white/50 px-6 py-16 md:scroll-mt-32 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: OAK }}>
            À ne pas manquer
          </p>
          <h2 className="mt-4 text-[clamp(1.45rem,3vw,1.95rem)] font-light text-[#1a1a1a]" style={{ fontFamily: SERIF }}>
            L'Agenda du Zinc
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#1a1a1a]/55">
            Le fil des soirées et dégustations — pour planifier votre prochaine visite à Bayonne.
          </p>
          <ul className="mt-10 space-y-5">
            {CHAI_AGENDA_EVENTS.map((ev) => (
              <li
                key={ev.title}
                className="flex flex-col gap-2 rounded-xl border border-[#1a1a1a]/08 bg-[#F9F7F2] px-5 py-5 md:flex-row md:items-start md:gap-8 md:px-6"
              >
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                  {ev.date}
                </span>
                <div>
                  <p className="text-[1.05rem] font-normal text-[#1a1a1a]" style={{ fontFamily: SERIF }}>
                    {ev.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#1a1a1a]/55">{ev.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {avis.length > 0 ? (
        <section className="border-t border-[#1a1a1a]/08 px-6 py-16 md:px-16 md:py-20">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[#1a1a1a]/40">Témoignages</p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {avis.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-[#1a1a1a]/08 bg-white/60 px-6 py-6 text-[14px] leading-relaxed text-[#1a1a1a]/68"
              >
                « {t.text} »
                <footer className="mt-4 text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/40">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      <footer id="chai-footer" className="scroll-mt-[7.5rem] border-t border-[#1a1a1a]/08 px-6 py-14 md:scroll-mt-32 md:px-16">
        <div className="mx-auto max-w-2xl text-center text-[14px] text-[#1a1a1a]/55">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#1a1a1a]/40">{site.location?.city}</p>
          <p className="mt-4">{site.location?.street}</p>
          <p className="mt-2">{site.location?.hours}</p>
          <a href={`mailto:${SITE.contactEmail}`} className="mt-8 inline-block text-[#8b6914] underline decoration-[#D2B48C]/50 underline-offset-4 transition hover:decoration-[#D2B48C]">
            {SITE.contactEmail}
          </a>
        </div>
      </footer>

      {/* Barre d’action fixe — mobile-first */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[120] border-t border-[#1a1a1a]/10 bg-[#F9F7F2] shadow-[0_-8px_32px_-12px_rgba(0,0,0,0.12)]"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="mx-auto flex max-w-lg flex-col gap-2 px-4 py-3">
          <div className="flex gap-2">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-lg border border-[#1a1a1a]/16 bg-white py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] transition hover:border-[#D2B48C] hover:bg-[#D2B48C]/10"
            >
              S'y rendre
            </a>
            <Link
              to={bookingTo}
              className="flex flex-1 items-center justify-center rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F9F7F2] transition hover:bg-[#2a2a2a]"
            >
              Réserver une table
            </Link>
          </div>
          <Link
            to={carteTo}
            className="py-1.5 text-center text-[9px] uppercase tracking-[0.28em] text-[#1a1a1a]/45 transition hover:text-[#1a1a1a]"
          >
            Voir la carte complète
          </Link>
        </div>
      </div>
    </div>
  )
}
