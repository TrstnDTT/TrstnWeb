import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Home, Info } from 'lucide-react'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { ProjectExperience } from '../components/templates/ProjectExperience.jsx'
import { CATEGORIES, SITE, getCategoryById } from '../constants.js'
import { getSiteById } from '../data.js'

/** Fond galerie & accent unique (détails discrets). */
const GALLERY = {
  bg: '#121210',
  borderOuter: 'rgba(255, 255, 255, 0.05)',
  borderInner: 'rgba(255, 255, 255, 0.09)',
  text: '#e6e4df',
  textMuted: 'rgba(230, 228, 223, 0.55)',
  accent: '#b8a074',
}

const fontSyne = { fontFamily: '"Syne", system-ui, sans-serif' }
const fontPlayfair = { fontFamily: '"Playfair Display", Georgia, serif' }

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

/**
 * Placement éditorial asymétrique (2 colonnes, md+).
 * Sur une seule colonne (mobile), ne pas fixer gridColumn > 1 — sinon colonnes
 * implicites + overflow-x-hidden masquent les cartes hors écran.
 */
function getCardGridStyle(index, total, asymmetric) {
  if (!asymmetric) {
    return {}
  }
  if (total === 1) {
    return { gridColumn: '1 / -1', maxWidth: 'min(36rem, 100%)', justifySelf: 'start' }
  }
  if (total === 2) {
    if (index === 0) return { gridColumn: 1, gridRow: 1 }
    return { gridColumn: 2, gridRow: 1, marginTop: '6rem' }
  }
  if (total === 3) {
    if (index === 0) return { gridColumn: 1, gridRow: 1 }
    if (index === 1) return { gridColumn: 2, gridRow: 1, marginTop: '5rem' }
    return { gridColumn: 1, gridRow: 2, maxWidth: 'min(92%, 42rem)' }
  }
  const col = (index % 2) + 1
  const row = Math.floor(index / 2) + 1
  const marginTop = index % 2 === 1 && index > 0 ? '3.5rem' : undefined
  return { gridColumn: col, gridRow: row, marginTop }
}

const categoryRegionVariants = {
  initial: { opacity: 0, y: 52, filter: 'blur(12px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      opacity: { duration: 0.5, delay: 0.06 },
      filter: { duration: 0.65, delay: 0.04 },
      y: {
        type: 'spring',
        damping: 38,
        stiffness: 86,
        mass: 1.15,
      },
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(14px)',
    transition: { duration: 0.48, ease: [0.4, 0, 0.2, 1] },
  },
}

const MOBILE_NAV_TRANSITION = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

function usePortfolioMobileNav(enabled = true, ignoreScrollUntilRef) {
  const [hidden, setHidden] = useState(false)
  const [navH, setNavH] = useState(0)
  const navRef = useRef(null)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useLayoutEffect(() => {
    if (!enabled) {
      setNavH(0)
      return
    }
    const el = navRef.current
    if (!el) return

    const measure = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setNavH(0)
        return
      }
      setNavH(el.offsetHeight)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) {
      setHidden(false)
      return
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        ticking.current = false
        if (!window.matchMedia('(max-width: 767px)').matches) {
          setHidden(false)
          return
        }
        const y = window.scrollY || document.documentElement.scrollTop
        if (ignoreScrollUntilRef?.current && Date.now() < ignoreScrollUntilRef.current) {
          lastY.current = y
          return
        }
        const delta = y - lastY.current
        const threshold = 6

        if (y < 16) {
          setHidden(false)
        } else if (delta > threshold) {
          setHidden(true)
        } else if (delta < -threshold) {
          setHidden(false)
        }
        lastY.current = y
      })
    }

    lastY.current = window.scrollY || 0
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled, ignoreScrollUntilRef])

  return { hidden, navH, navRef }
}

function getCardRevealVariants(reduced) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: (i) => ({
        opacity: 1,
        transition: { delay: 0.06 + i * 0.05, duration: 0.35 },
      }),
    }
  }
  return {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.14 + i * 0.1,
        type: 'spring',
        damping: 36,
        stiffness: 200,
        mass: 0.85,
      },
    }),
  }
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeProject, setActiveProject] = useState(null)
  const navScrollIgnoreUntil = useRef(0)
  const { hidden: navHiddenScroll, navH, navRef } = usePortfolioMobileNav(
    !activeProject,
    navScrollIgnoreUntil,
  )
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false,
  )
  const mobileNavHidden = prefersReducedMotion ? false : navHiddenScroll

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const fn = () => setIsMobile(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const cardReveal = useMemo(
    () => getCardRevealVariants(prefersReducedMotion),
    [prefersReducedMotion],
  )
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

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  useEffect(() => {
    navScrollIgnoreUntil.current = Date.now() + 480
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [activeCategory])

  useEffect(() => {
    if (activeProject) {
      document.documentElement.style.scrollSnapType = ''
      return
    }
    document.documentElement.style.scrollSnapType = 'y proximity'
    return () => {
      document.documentElement.style.scrollSnapType = ''
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

  const reducedCategoryVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.35 } },
        exit: { opacity: 0, transition: { duration: 0.25 } },
      }
    : categoryRegionVariants

  const mobileContentTopPad =
    navH > 0 ? navH + 12 : 104

  return (
    <>
      {!activeProject && (
        <div
          className="trstn-ui trstn-shell relative min-h-screen text-[#e6e4df]"
          style={{ backgroundColor: GALLERY.bg }}
        >
          <motion.aside
            ref={navRef}
            className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0d0d0c]/95 backdrop-blur-xl will-change-transform md:inset-x-auto md:bottom-0 md:left-0 md:top-0 md:h-full md:w-[min(11rem,22vw)] md:border-b-0 md:border-r md:border-white/[0.07] md:backdrop-blur-none"
            aria-label="Navigation des secteurs"
            initial={false}
            animate={
              prefersReducedMotion || !isMobile
                ? { y: 0 }
                : { y: mobileNavHidden ? '-100%' : 0 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : MOBILE_NAV_TRANSITION
            }
          >
            <div className="flex max-h-[100svh] flex-col px-4 py-5 md:h-full md:px-5 md:py-10">
              <div className="mb-8 shrink-0 border-b border-white/[0.05] pb-6">
                <p
                  className="text-[1.05rem] font-semibold leading-none tracking-[-0.06em] text-white/90"
                  style={fontSyne}
                >
                  TrstnWeb
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  {SITE.subtitle}
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] text-zinc-500 transition-[letter-spacing] duration-300 hover:tracking-[0.28em] hover:text-zinc-300"
                >
                  <Home className="h-3 w-3 opacity-70" strokeWidth={1.5} aria-hidden />
                  Accueil
                </Link>
                <Link
                  to="/#about"
                  className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] text-zinc-500 transition-[letter-spacing] duration-300 hover:tracking-[0.28em] hover:text-zinc-300"
                >
                  <Info className="h-3 w-3 opacity-70" strokeWidth={1.5} aria-hidden />
                  À propos
                </Link>
              </div>

              <nav
                className="scrollbar-thin flex gap-1 overflow-x-auto pb-2 md:flex-1 md:flex-col md:overflow-y-auto md:pb-0"
                role="navigation"
              >
                {CATEGORIES.map((cat, idx) => {
                  const n = String(idx + 1).padStart(2, '0')
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className="group relative flex min-w-0 shrink-0 items-baseline gap-2.5 py-3 pl-1 pr-2 text-left md:w-full"
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span
                        className="absolute bottom-2 left-0 top-2 w-px bg-white/35 transition-opacity duration-300"
                        style={{ opacity: isActive ? 1 : 0 }}
                        aria-hidden
                      />
                      <span
                        className="w-7 shrink-0 text-right text-[11px] tabular-nums leading-none transition-colors duration-300"
                        style={{
                          ...fontPlayfair,
                          color: isActive ? GALLERY.accent : 'rgba(161, 161, 170, 0.85)',
                        }}
                      >
                        {n}
                      </span>
                      <span
                        className="min-w-0 truncate text-[13px] font-semibold tracking-[-0.02em] text-zinc-400 transition-[letter-spacing] duration-300 group-hover:tracking-[0.12em]"
                        style={fontSyne}
                      >
                        {cat.label}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.aside>

          <main className="relative min-h-[100svh] overflow-x-hidden overflow-y-visible md:pl-[min(11rem,22vw)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="region"
                aria-label={`Projets — ${active.label}`}
                className={[
                  'relative z-10 w-full px-5 pb-32 sm:px-10 md:px-14 md:pb-40 lg:px-20 md:pt-16',
                  prefersReducedMotion
                    ? 'max-md:pt-[calc(6.5rem+env(safe-area-inset-top))]'
                    : [
                        'max-md:pt-0',
                        'max-md:transition-[padding-top]',
                        'max-md:duration-[480ms]',
                        'max-md:ease-[cubic-bezier(0.25,1,0.3,1)]',
                      ].join(' '),
                ].join(' ')}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={reducedCategoryVariants}
                style={
                  !prefersReducedMotion && isMobile
                    ? { paddingTop: mobileNavHidden ? 12 : mobileContentTopPad }
                    : undefined
                }
              >
                <div className="relative mx-auto max-w-6xl">
                  <header
                    id="portfolio-top"
                    className="mb-20 max-w-xl scroll-mt-28 md:mb-28 md:scroll-mt-24"
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.32em] text-zinc-500"
                      style={{ color: GALLERY.accent }}
                    >
                      {active.label}
                    </p>
                    <h2
                      className="mt-4 text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-white/95 sm:text-[2.1rem] md:text-[2.35rem]"
                      style={fontPlayfair}
                    >
                      Réalisations sélectionnées
                    </h2>
                    <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-zinc-500 md:text-base">
                      {SITE.footer}
                    </p>
                  </header>

                  <ul className="m-0 grid list-none grid-cols-1 gap-16 p-0 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
                    {active.projects.map((project, i) => {
                      const shell = getSiteById(project.siteId)?.portfolio
                      const gridStyle = getCardGridStyle(
                        i,
                        active.projects.length,
                        !isMobile,
                      )

                      return (
                        <motion.li
                          key={`${active.id}-${project.title}`}
                          className="list-none max-md:snap-center max-md:snap-always relative z-0"
                          style={gridStyle}
                          custom={i}
                          variants={cardReveal}
                          initial="hidden"
                          animate="show"
                        >
                          <motion.article
                            data-project-card
                            role="button"
                            tabIndex={0}
                            aria-label={`Ouvrir le projet ${project.title}`}
                            className="group relative z-0 flex h-full cursor-pointer flex-col overflow-hidden bg-[rgba(255,255,255,0.02)] text-left outline-none ring-offset-2 ring-offset-[#121210] focus-visible:ring-2 focus-visible:ring-white/25 will-change-transform"
                            style={{
                              boxShadow: `
                                0 0 0 1px ${GALLERY.borderOuter},
                                inset 0 0 0 1px ${GALLERY.borderInner}
                              `,
                            }}
                            whileHover={
                              prefersReducedMotion
                                ? undefined
                                : { y: -2, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                            }
                            onClick={(e) => openProject(project.siteId, e)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                openProject(project.siteId, e)
                              }
                            }}
                          >
                            <ProjectPreview site={getSiteById(project.siteId)} />
                            <div className="flex flex-1 flex-col px-6 pb-8 pt-6 md:px-7 md:pb-9">
                              {shell?.portfolioTagline && (
                                <p
                                  className="mb-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500"
                                  style={{ color: GALLERY.accent }}
                                >
                                  {shell.portfolioTagline}
                                </p>
                              )}
                              <h3
                                className="text-[1.35rem] font-medium leading-snug tracking-[-0.02em] text-white sm:text-[1.45rem]"
                                style={fontPlayfair}
                              >
                                {project.title}
                              </h3>
                              <p className="trstn-label mt-3 flex-1 text-[14px] leading-relaxed text-zinc-500 md:text-[15px]">
                                {project.description}
                              </p>
                              <div className="mt-8">
                                <span
                                  className="group inline-flex items-baseline gap-2 text-[13px] tracking-[0.04em] text-zinc-400 transition-[letter-spacing] duration-300 group-hover:tracking-[0.08em] group-hover:text-zinc-200"
                                  style={fontPlayfair}
                                  aria-hidden
                                >
                                  <span className="font-normal italic">Voir le projet</span>
                                  <span className="text-[1.1em] font-normal transition-transform duration-300 group-hover:translate-x-0.5">
                                    →
                                  </span>
                                </span>
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

          <p
            className="pointer-events-none fixed bottom-5 right-6 z-40 select-none text-[9px] font-medium uppercase tracking-[0.42em] text-zinc-600"
            style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
            aria-hidden
          >
            TrstnWeb
          </p>
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
