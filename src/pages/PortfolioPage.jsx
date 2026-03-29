import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Camera,
  Croissant,
  Hammer,
  Home,
  Info,
  PartyPopper,
  PenTool,
  Scissors,
  UtensilsCrossed,
  Wine,
} from 'lucide-react'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { ProjectExperience } from '../components/templates/ProjectExperience.jsx'
import { CATEGORIES, SITE, getCategoryById } from '../constants.js'
import { getSiteById } from '../data.js'

const ICONS = {
  restaurant: UtensilsCrossed,
  boulangerie: Croissant,
  salon: Scissors,
  bar: Wine,
  tattoo: PenTool,
  evenementiel: PartyPopper,
  photographie: Camera,
  'artisans-services': Hammer,
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.09,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const viewportEnter = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
}

function computeOpenOrigin(event) {
  if (typeof window === 'undefined') return { x: 50, y: 42 }
  const card = event?.currentTarget?.closest?.('[data-project-card]')
  if (!card) return { x: 50, y: 42 }
  const r = card.getBoundingClientRect()
  const cx = r.left + r.width / 2
  const cy = r.top + r.height / 2
  return {
    x: (cx / window.innerWidth) * 100,
    y: (cy / window.innerHeight) * 100,
  }
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeProject, setActiveProject] = useState(null)
  const [openOrigin, setOpenOrigin] = useState(null)
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)

  const active = useMemo(
    () => getCategoryById(activeCategory),
    [activeCategory],
  )
  const activeSite = useMemo(
    () => (activeProject ? getSiteById(activeProject) : null),
    [activeProject],
  )
  const t = active.theme

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const openProject = (siteId, event) => {
    setOpenOrigin(computeOpenOrigin(event))
    setActiveProject(siteId)
  }

  const closeProject = () => {
    setActiveProject(null)
    setOpenOrigin(null)
  }

  const shellOrigin = openOrigin ?? { x: 50, y: 42 }

  const projectOverlayInitial = prefersReducedMotion
    ? { opacity: 0 }
    : { scale: 0.9, opacity: 0.94, borderRadius: 22 }
  const projectOverlayAnimate = prefersReducedMotion
    ? { opacity: 1 }
    : { scale: 1, opacity: 1, borderRadius: 0 }
  const projectOverlayExit = prefersReducedMotion
    ? { opacity: 0 }
    : { scale: 0.97, opacity: 0, borderRadius: 18 }

  return (
    <>
      {!activeProject && (
        <div className="trstn-ui trstn-shell min-h-screen bg-[#050506] text-zinc-300">
          <aside
            className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0a0a0a] backdrop-blur-xl md:inset-x-auto md:bottom-0 md:left-0 md:w-64 md:border-b-0 md:border-r md:border-white/[0.08]"
            aria-label="Navigation des secteurs"
          >
            <div className="flex max-h-[100svh] flex-col px-4 py-4 md:h-full md:px-5 md:py-8">
              <div className="mb-6 shrink-0 border-b border-white/[0.06] pb-6 md:mb-10 md:pb-8">
                <p className="trstn-heading text-[1.35rem] leading-none tracking-[-0.07em] text-white">
                  TrstnWeb
                </p>
                <p className="trstn-label mt-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {SITE.subtitle}
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 md:mb-6">
                <Link
                  to="/"
                  className="trstn-label inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Home className="h-3.5 w-3.5 opacity-80" strokeWidth={1.75} aria-hidden />
                  Accueil
                </Link>
                <Link
                  to="/#about"
                  className="trstn-label inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Info className="h-3.5 w-3.5 opacity-80" strokeWidth={1.75} aria-hidden />
                  À propos
                </Link>
              </div>

              <nav
                className="scrollbar-thin flex gap-1 overflow-x-auto pb-1 md:flex-1 md:flex-col md:overflow-y-auto md:pb-0"
                role="navigation"
              >
                {CATEGORIES.map((cat) => {
                  const Icon = ICONS[cat.id]
                  const isActive = activeCategory === cat.id
                  return (
                    <motion.button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={[
                        'group relative flex min-w-0 shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 pb-3 text-left text-sm md:w-full',
                        isActive ? 'text-white' : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200',
                      ].join(' ')}
                      aria-current={isActive ? 'true' : undefined}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="trstn-sidebar-active-line"
                          className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-white md:left-2 md:right-2"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                          aria-hidden
                        />
                      )}
                      <span
                        className={[
                          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors',
                          isActive
                            ? 'border-white/20 bg-white/[0.06] text-white'
                            : 'border-white/[0.06] bg-white/[0.02] text-zinc-500 group-hover:border-white/10 group-hover:text-zinc-300',
                        ].join(' ')}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="trstn-heading truncate">{cat.label}</span>
                    </motion.button>
                  )
                })}
              </nav>

              <p className="trstn-label mt-6 hidden text-[10px] leading-relaxed text-zinc-600 md:block">
                Propulsé par <span className="text-zinc-500">TrstnWeb</span>
              </p>
            </div>
          </aside>

          <main
            className="relative min-h-[100svh] overflow-x-hidden md:pl-64"
            style={{
              background: `linear-gradient(165deg, ${t.gradientFrom} 0%, ${t.gradientVia} 48%, ${t.gradientTo} 100%)`,
              color: t.textBody,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.85]"
              style={{
                background: `radial-gradient(ellipse 90% 55% at 50% -15%, ${t.glow}, transparent 55%)`,
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-24 top-1/3 z-0 h-72 w-72 rounded-full blur-3xl md:right-10"
              style={{ background: t.accentMuted }}
              aria-hidden
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="region"
                aria-label={`Projets — ${active.label}`}
                className="relative z-10 w-full px-4 pb-16 pt-6 max-md:pt-[calc(7.5rem+env(safe-area-inset-top))] sm:px-8 md:px-12 md:pb-20 md:pt-12 lg:px-16"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={viewportEnter}
              >
                <div className="relative mx-auto max-w-5xl">
                  <header id="portfolio-top" className="mb-12 max-w-2xl scroll-mt-28 md:mb-16 md:scroll-mt-24">
                    <motion.p
                      className="trstn-label text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: t.accent }}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                    >
                      {active.label}
                    </motion.p>
                    <motion.h2
                      className="trstn-heading mt-3 text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-[2.65rem]"
                      style={{ color: t.textHeading }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.45 }}
                    >
                      Réalisations sélectionnées
                    </motion.h2>
                    <motion.p
                      className="trstn-label mt-4 max-w-lg text-[15px] leading-relaxed md:text-base"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18, duration: 0.45 }}
                    >
                      {SITE.footer}
                    </motion.p>
                  </header>

                  <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {active.projects.map((project, i) => {
                      const shell = getSiteById(project.siteId)?.portfolio
                      const baseShadow = '0 24px 48px -28px rgba(0,0,0,0.65)'
                      const hoverShadow = shell?.cardGlow
                        ? `${baseShadow}, ${shell.cardGlow}`
                        : baseShadow

                      return (
                        <motion.li
                          key={`${active.id}-${project.title}`}
                          className="list-none"
                          custom={i}
                          variants={cardVariants}
                          initial="hidden"
                          animate="show"
                        >
                          <motion.article
                            data-project-card
                            className="flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-md"
                            style={{
                              backgroundColor: t.surface,
                              borderColor: shell?.cardBorder ?? t.border,
                            }}
                            whileHover={{
                              y: -6,
                              boxShadow: hoverShadow,
                            }}
                            transition={{
                              duration: 0.38,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <ProjectPreview site={getSiteById(project.siteId)} />
                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                              {shell?.portfolioTagline && (
                                <p
                                  className="trstn-label mb-2 text-[10px] uppercase tracking-[0.2em] opacity-80"
                                  style={{ color: t.accent }}
                                >
                                  {shell.portfolioTagline}
                                </p>
                              )}
                              <h3
                                className="trstn-heading text-lg leading-snug tracking-[-0.02em] sm:text-xl"
                                style={{ color: t.textHeading }}
                              >
                                {project.title}
                              </h3>
                              <p className="trstn-label mt-2 flex-1 text-[13px] leading-relaxed md:text-[14px]">
                                {project.description}
                              </p>
                              <div className="mt-5">
                                <motion.button
                                  type="button"
                                  onClick={(e) => openProject(project.siteId, e)}
                                  className="trstn-label group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide sm:w-auto"
                                  style={{
                                    backgroundColor: t.accent,
                                    color: '#0a0a0c',
                                    boxShadow: `0 8px 24px -8px ${t.accentMuted}`,
                                  }}
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.97 }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 450,
                                    damping: 28,
                                  }}
                                >
                                  Voir le projet
                                  <ArrowRight
                                    className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                                    strokeWidth={2}
                                    aria-hidden
                                  />
                                </motion.button>
                              </div>
                            </div>
                          </motion.article>
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      )}

      <AnimatePresence>
        {activeProject && activeSite && (
          <motion.div
            key={activeSite.id}
            className="fixed inset-0 z-[100] isolate overflow-hidden bg-[#030304]"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transformOrigin: `${shellOrigin.x}% ${shellOrigin.y}%`,
                    willChange: 'transform, opacity',
                  }
            }
            initial={projectOverlayInitial}
            animate={projectOverlayAnimate}
            exit={projectOverlayExit}
            transition={{
              duration: prefersReducedMotion ? 0.22 : 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <ProjectExperience site={activeSite} onBack={closeProject} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
