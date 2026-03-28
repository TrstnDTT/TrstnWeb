import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Croissant,
  PenTool,
  Scissors,
  UtensilsCrossed,
  Wine,
} from 'lucide-react'
import { ProjectPreview } from './components/ProjectPreview.jsx'
import { ProjectExperience } from './components/templates/ProjectExperience.jsx'
import { CATEGORIES, SITE, getCategoryById } from './constants.js'
import { getSiteById } from './data.js'

const ICONS = {
  restaurant: UtensilsCrossed,
  boulangerie: Croissant,
  salon: Scissors,
  bar: Wine,
  tattoo: PenTool,
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

function App() {
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
        <div className="trstn-shell min-h-screen bg-[#050506] text-zinc-300">
          <aside
            className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-zinc-950/90 backdrop-blur-xl md:inset-x-auto md:bottom-0 md:left-0 md:w-64 md:border-b-0 md:border-r md:border-white/[0.08]"
            aria-label="Navigation des secteurs"
          >
            <div className="flex max-h-[100svh] flex-col px-4 py-4 md:h-full md:px-5 md:py-8">
              <div className="mb-4 shrink-0 md:mb-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {SITE.title}
                </p>
                <h1 className="mt-1 font-medium tracking-tight text-zinc-100">
                  {SITE.subtitle}
                </h1>
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
                        'group flex min-w-0 shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm md:w-full',
                        isActive
                          ? 'bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]'
                          : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200',
                      ].join(' ')}
                      aria-current={isActive ? 'true' : undefined}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
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
                      <span className="truncate font-medium">{cat.label}</span>
                    </motion.button>
                  )
                })}
              </nav>

              <p className="mt-6 hidden text-[10px] leading-relaxed text-zinc-600 md:block">
                Propulsé par <span className="text-zinc-500">TrstnWeb</span>
              </p>
            </div>
          </aside>

          <main className="min-h-screen md:pl-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="region"
                aria-label={`Projets — ${active.label}`}
                className="relative min-h-screen overflow-hidden px-4 pb-16 pt-[calc(7.5rem+env(safe-area-inset-top))] sm:px-8 md:px-12 md:pb-20 md:pt-16 lg:px-16"
                style={{
                  background: `linear-gradient(165deg, ${t.gradientFrom} 0%, ${t.gradientVia} 48%, ${t.gradientTo} 100%)`,
                  fontFamily: t.fontBody,
                  color: t.textBody,
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={viewportEnter}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.85]"
                  style={{
                    background: `radial-gradient(ellipse 90% 55% at 50% -15%, ${t.glow}, transparent 55%)`,
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full blur-3xl md:right-10"
                  style={{ background: t.accentMuted }}
                  aria-hidden
                />

                <div className="relative mx-auto max-w-5xl">
                  <header className="mb-12 max-w-2xl md:mb-16">
                    <motion.p
                      className="text-[11px] font-medium uppercase tracking-[0.28em]"
                      style={{ color: t.accent }}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                    >
                      {active.label}
                    </motion.p>
                    <motion.h2
                      className="mt-3 text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl md:text-[2.65rem]"
                      style={{ fontFamily: t.fontDisplay, color: t.textHeading }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.45 }}
                    >
                      Réalisations sélectionnées
                    </motion.h2>
                    <motion.p
                      className="mt-4 max-w-lg text-[15px] leading-relaxed md:text-base"
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
                            <ProjectPreview
                              categoryId={active.id}
                              layoutStyle={
                                getSiteById(project.siteId)?.previewKey ??
                                'minimalist'
                              }
                              title={project.title}
                            />
                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                              {shell?.portfolioTagline && (
                                <p
                                  className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] opacity-80"
                                  style={{ color: t.accent }}
                                >
                                  {shell.portfolioTagline}
                                </p>
                              )}
                              <h3
                                className="text-lg font-normal leading-snug tracking-tight sm:text-xl"
                                style={{
                                  fontFamily: t.fontDisplay,
                                  color: t.textHeading,
                                }}
                              >
                                {project.title}
                              </h3>
                              <p className="mt-2 flex-1 text-[13px] leading-relaxed md:text-[14px]">
                                {project.description}
                              </p>
                              <div className="mt-5">
                                <motion.button
                                  type="button"
                                  onClick={(e) => openProject(project.siteId, e)}
                                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide sm:w-auto"
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
            className="fixed inset-0 z-[100] overflow-hidden bg-[#030304]"
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

export default App
