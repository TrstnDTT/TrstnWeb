import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, BarChart3, Cpu, Zap } from 'lucide-react'
import { SITE } from '../constants.js'

const easeOut = [0.22, 1, 0.36, 1]
const FILM_GRAIN =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

const fontSyne = { fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif" }
const fontBody = { fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

function ParallaxSectionTitle({ children, className = '', id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [14, -10])

  return (
    <motion.h2
      ref={ref}
      id={id}
      style={{ ...fontSyne, y }}
      className={className}
    >
      {children}
    </motion.h2>
  )
}

const pillars = [
  {
    Icon: Cpu,
    label: 'Rigueur informatique',
    sub: 'Fondations solides, code maintenable.',
  },
  {
    Icon: Zap,
    label: 'Performance React',
    sub: 'Interfaces fluides, architecture sur-mesure.',
  },
  {
    Icon: BarChart3,
    label: 'Optimisation business',
    sub: 'Conversion, présence stratégique.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    const prev = document.title
    document.title = `À propos — ${SITE.title}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div
      className="trstn-ui min-h-[100dvh] bg-[#050506] text-zinc-200 antialiased"
      style={fontBody}
    >
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: FILM_GRAIN }}
        aria-hidden
      />

      <header className="relative z-20 border-b border-white/[0.06] bg-[#050506]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500 transition-colors hover:text-zinc-300"
            style={fontBody}
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={0.75} aria-hidden />
            Accueil
          </Link>
          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-600" style={fontSyne}>
            {SITE.title}
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 md:pt-14 lg:pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-left text-[clamp(1.85rem,4.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white"
            style={fontSyne}
          >
            L&apos;Art de la conversion digitale par TrstnWeb
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-14"
          >
            <div className="lg:col-span-7">
            <div className="space-y-12">
              <section aria-labelledby="acte-1">
                <ParallaxSectionTitle
                  id="acte-1"
                  className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b8a074]"
                >
                  La passion technique
                </ParallaxSectionTitle>
                <p className="mt-4 text-[15px] font-normal leading-[1.75] text-zinc-400 md:text-[16px]">
                  Passionné par l&apos;informatique depuis des années, j&apos;ai transformé cette
                  rigueur technique en une expertise de conception web.
                </p>
              </section>

              <section aria-labelledby="acte-2">
                <ParallaxSectionTitle
                  id="acte-2"
                  className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b8a074]"
                >
                  La méthode React
                </ParallaxSectionTitle>
                <p className="mt-4 text-[15px] font-normal leading-[1.75] text-zinc-400 md:text-[16px]">
                  Spécialiste de l&apos;écosystème React, je ne conçois pas de simples sites : je
                  bâtis des architectures performantes, fluides et sur-mesure, répondant
                  précisément aux ambitions de mes clients.
                </p>
              </section>

              <section aria-labelledby="acte-3">
                <ParallaxSectionTitle
                  id="acte-3"
                  className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b8a074]"
                >
                  La promesse
                </ParallaxSectionTitle>
                <p className="mt-4 text-[15px] font-normal leading-[1.75] text-zinc-400 md:text-[16px]">
                  Mon obsession ? Un travail soigné, un rendu esthétique irréprochable et, surtout,
                  un objectif clair : catalyser votre croissance. Augmentez votre clientèle et vos
                  taux de conversion grâce à une présence en ligne attrayante, stratégique et
                  unique.
                </p>
              </section>
            </div>

            <ul
              className="mt-14 grid grid-cols-1 gap-8 border-t border-white/[0.06] pt-12 sm:grid-cols-3 sm:gap-6"
              role="list"
            >
              {pillars.map(({ Icon, label, sub }) => (
                <li key={label} className="flex flex-col gap-2">
                  <Icon
                    className="h-6 w-6 text-zinc-500"
                    strokeWidth={0.5}
                    aria-hidden
                  />
                  <p className="text-[13px] font-semibold text-zinc-200" style={fontSyne}>
                    {label}
                  </p>
                  <p className="text-[12px] leading-relaxed text-zinc-500">{sub}</p>
                </li>
              ))}
            </ul>
            </div>

          <aside className="flex flex-col gap-8 lg:col-span-5 lg:pt-2">
            <figure className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-zinc-900/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <div
                className="aspect-[4/5] w-full bg-gradient-to-br from-zinc-800 via-[#12121a] to-[#0a0a10]"
                role="img"
                aria-label="Espace de travail — placeholder visuel professionnel"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: FILM_GRAIN }}
                aria-hidden
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Studio</p>
                <p className="mt-1 text-[13px] italic leading-snug text-zinc-300">
                  Conception & intégration — le détail au service du résultat.
                </p>
              </figcaption>
            </figure>

            <blockquote
              className="border-l border-[#b8a074]/40 pl-5 text-[15px] leading-relaxed text-zinc-500"
              cite={SITE.title}
            >
              <p className="italic text-zinc-400">
                « L&apos;excellence n&apos;est pas un luxe : c&apos;est la seule façon digne de votre
                marque. »
              </p>
              <footer className="mt-3 text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                — {SITE.title}
              </footer>
            </blockquote>
          </aside>
          </motion.div>

        <motion.section
          variants={itemVariants}
          className="mt-20 border-t border-white/[0.06] pt-16 text-center lg:mt-24 lg:pt-20"
        >
          <p
            className="text-[clamp(1.15rem,2.5vw,1.45rem)] font-semibold tracking-[-0.02em] text-white"
            style={fontSyne}
          >
            Prêt à transformer votre vision ?
          </p>
          <Link
            to="/contact"
            className="trstn-entry-btn mt-8 inline-flex items-center justify-center rounded-[6px] border border-white/[0.12] bg-white/[0.05] px-10 py-3.5 text-[14px] text-zinc-200 backdrop-blur-sm transition-[background-color,transform] duration-300 hover:bg-white/[0.09] hover:text-white"
          >
            Écrire à {SITE.title}
          </Link>
        </motion.section>

        <motion.p
          variants={itemVariants}
          className="pointer-events-none mt-16 text-center text-[9px] font-medium uppercase tracking-[0.42em] text-zinc-700"
          style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
          aria-hidden
        >
          {SITE.title}
        </motion.p>
        </motion.div>
      </main>
    </div>
  )
}
