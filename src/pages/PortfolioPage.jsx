import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { Home, Info, Mail } from 'lucide-react'
import { MobileCategoryRail } from '../components/portfolio/MobileCategoryRail.jsx'
import { PortfolioProjectGrid } from '../components/portfolio/PortfolioProjectGrid.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { ProjectExperience } from '../components/templates/ProjectExperience.jsx'
import { CATEGORIES, CATEGORY_CANVAS_HOVER, SITE, getCategoryById } from '../constants.js'
import { useShellTheme } from '../context/ShellThemeContext.jsx'
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

/** Variante enveloppe claire — grille & chrome uniquement (mini-sites inchangés). */
const GALLERY_LIGHT = {
  bg: '#F5F5F7',
  borderOuter: 'rgba(0, 0, 0, 0.08)',
  borderInner: 'rgba(0, 0, 0, 0.06)',
  text: '#1d1d1f',
  textMuted: 'rgba(29, 29, 31, 0.55)',
  accent: '#6b5c3e',
}

const fontSyne = { fontFamily: '"Syne", system-ui, sans-serif' }
const fontPlayfair = { fontFamily: '"Playfair Display", Georgia, serif' }
/** Titres de section portfolio — serif éditorial, moins « tech » que le corps UI. */
const fontSectionSerif = { fontFamily: '"Cormorant Garamond", Georgia, serif' }

function MagneticCategoryLabel({ children, className, style, enabled }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.32 })
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.32 })

  const onMove = (e) => {
    if (!enabled) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const k = 0.2
    x.set((e.clientX - cx) * k)
    y.set((e.clientY - cy) * k)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (!enabled) {
    return (
      <span className={className} style={style} ref={ref}>
        {children}
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className="inline-flex min-w-0 flex-1 touch-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.span style={{ x: springX, y: springY, ...style }} className={className}>
        {children}
      </motion.span>
    </span>
  )
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

const categoryRegionVariants = {
  initial: { opacity: 0, y: 32, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      opacity: { duration: 0.38, delay: 0.04 },
      filter: { duration: 0.35 },
      y: { duration: 0.42, ease: [0.2, 1, 0.36, 1] },
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(6px)',
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  },
}

const SCROLL_NAV_THROTTLE_MS = 80
/** Zone bas de page : pas de réapparition barre sur micro-mouvements / rebond. */
const SCROLL_BOTTOM_SAFE_PX = 50
/** Scroll vers le haut requis pour réafficher la barre depuis le bas. */
const SCROLL_SIGNIFICANT_UP_PX = 18

function usePortfolioMobileNav(enabled = true, ignoreScrollUntilRef) {
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(false)
  const [navH, setNavH] = useState(0)
  const navRef = useRef(null)
  const lastY = useRef(0)
  const ticking = useRef(false)
  const lastHiddenEmit = useRef(0)

  useEffect(() => {
    hiddenRef.current = hidden
  }, [hidden])

  useLayoutEffect(() => {
    if (!enabled) {
      setNavH(0)
      return
    }
    const el = navRef.current
    if (!el) return

    let debounceId = 0
    const DEBOUNCE_MS = 120

    const applyMeasure = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setNavH(0)
        return
      }
      setNavH(el.offsetHeight)
    }

    const measure = () => {
      window.clearTimeout(debounceId)
      debounceId = window.setTimeout(applyMeasure, DEBOUNCE_MS)
    }

    applyMeasure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      window.clearTimeout(debounceId)
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
          hiddenRef.current = false
          setHidden(false)
          return
        }
        const scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        )
        const maxY = Math.max(0, scrollHeight - window.innerHeight)
        const yRaw = window.scrollY || document.documentElement.scrollTop
        const y = Math.min(Math.max(0, yRaw), maxY)

        if (ignoreScrollUntilRef?.current && Date.now() < ignoreScrollUntilRef.current) {
          lastY.current = y
          return
        }

        const delta = y - lastY.current
        lastY.current = y
        const threshold = 6
        const nearBottom =
          maxY > 0 && y >= maxY - SCROLL_BOTTOM_SAFE_PX

        let next = hiddenRef.current
        if (y < 16) {
          next = false
        } else if (delta > threshold) {
          next = true
        } else if (delta < -threshold) {
          if (nearBottom && delta > -SCROLL_SIGNIFICANT_UP_PX) {
            return
          }
          next = false
        }

        if (next === hiddenRef.current) return

        const now = Date.now()
        if (now - lastHiddenEmit.current < SCROLL_NAV_THROTTLE_MS) return
        lastHiddenEmit.current = now
        hiddenRef.current = next
        setHidden(next)
      })
    }

    const clampY = () => {
      const sh = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      )
      const maxY = Math.max(0, sh - window.innerHeight)
      const raw = window.scrollY || 0
      return Math.min(Math.max(0, raw), maxY)
    }
    lastY.current = clampY()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled, ignoreScrollUntilRef])

  return { hidden, navH, navRef }
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const { effectiveTheme, setProjectViewOpen } = useShellTheme()
  const L = effectiveTheme === 'light'
  const [activeProject, setActiveProject] = useState(null)
  const navScrollIgnoreUntil = useRef(0)
  usePortfolioMobileNav(false, navScrollIgnoreUntil)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const fn = () => setIsMobile(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const [openOrigin, setOpenOrigin] = useState(null)
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)
  const [hoverCategoryId, setHoverCategoryId] = useState(null)

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
    setProjectViewOpen(!!activeProject)
    return () => setProjectViewOpen(false)
  }, [activeProject, setProjectViewOpen])

  useEffect(() => {
    navScrollIgnoreUntil.current = Date.now() + 480
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [activeCategory])

  useEffect(() => {
    if (activeProject) {
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.overscrollBehaviorY = ''
      document.body.style.overscrollBehaviorY = ''
      return
    }
    document.documentElement.style.scrollSnapType = 'y proximity'
    document.documentElement.style.overscrollBehaviorY = 'none'
    document.body.style.overscrollBehaviorY = 'none'
    return () => {
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.overscrollBehaviorY = ''
      document.body.style.overscrollBehaviorY = ''
    }
  }, [activeProject])

  const openProject = useCallback((siteId, event) => {
    setOpenOrigin(computeOpenOrigin(event))
    setActiveProject(siteId)
  }, [])

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

  const galleryTokens = L ? GALLERY_LIGHT : GALLERY

  const handleCategorySelect = useCallback((id) => {
    setActiveCategory(id)
  }, [])

  const canvasBg = useMemo(() => {
    const palette = L ? CATEGORY_CANVAS_HOVER.light : CATEGORY_CANVAS_HOVER.dark
    if (hoverCategoryId && palette[hoverCategoryId]) {
      return palette[hoverCategoryId]
    }
    return galleryTokens.bg
  }, [hoverCategoryId, galleryTokens.bg, L])

  return (
    <>
      {!activeProject && (
        <motion.div
          className={[
            'trstn-ui trstn-shell scrollbar-thin relative min-h-screen h-auto overscroll-y-none',
            L ? 'trstn-shell-light text-[#1d1d1f]' : 'text-[#e6e4df]',
          ].join(' ')}
          initial={false}
          animate={{ backgroundColor: canvasBg }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShellThemeToggle className="fixed right-4 top-4 z-[55] md:right-8 md:top-6" />

          <motion.aside
            layout={false}
            className={[
              'hidden transform-gpu [backface-visibility:hidden] md:fixed md:inset-x-auto md:bottom-0 md:left-0 md:top-0 md:z-50 md:flex md:h-full md:w-[min(11rem,22vw)] md:flex-col md:border-b-0 md:backdrop-blur-none',
              L
                ? 'md:border-r md:border-black/[0.08] md:bg-[#F5F5F7]/95 md:backdrop-blur-xl'
                : 'md:border-r md:border-white/[0.07] md:bg-[#0d0d0c]/95 md:backdrop-blur-xl',
            ].join(' ')}
            style={{ willChange: 'transform' }}
            aria-label="Navigation des secteurs"
          >
            <div className="flex max-h-[100svh] flex-col px-4 py-5 md:h-full md:max-h-none md:px-5 md:py-10">
              <div
                className={[
                  'mb-8 shrink-0 border-b pb-6',
                  L ? 'border-black/[0.08]' : 'border-white/[0.05]',
                ].join(' ')}
              >
                <p
                  className={[
                    'text-[1.05rem] font-semibold leading-none tracking-[-0.06em]',
                    L ? 'text-[#1d1d1f]' : 'text-white/90',
                  ].join(' ')}
                  style={fontSyne}
                >
                  TrstnWeb
                </p>
                <p
                  className={['mt-2 text-[10px] uppercase tracking-[0.28em]', L ? 'text-[#86868b]' : 'text-zinc-500'].join(
                    ' ',
                  )}
                >
                  {SITE.subtitle}
                </p>
              </div>

              <div className="mb-6 hidden flex-wrap gap-2 md:flex">
                <Link
                  to="/"
                  className={[
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing] duration-300 hover:tracking-[0.28em]',
                    L
                      ? 'text-[#86868b] hover:text-[#1d1d1f]'
                      : 'text-zinc-500 hover:text-zinc-300',
                  ].join(' ')}
                >
                  <Home className="h-3 w-3 opacity-70" strokeWidth={1.5} aria-hidden />
                  Accueil
                </Link>
                <Link
                  to="/about"
                  className={[
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing] duration-300 hover:tracking-[0.28em]',
                    L
                      ? 'text-[#86868b] hover:text-[#1d1d1f]'
                      : 'text-zinc-500 hover:text-zinc-300',
                  ].join(' ')}
                >
                  <Info className="h-3 w-3 opacity-70" strokeWidth={1.5} aria-hidden />
                  À propos
                </Link>
                <Link
                  to="/contact"
                  className={[
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing] duration-300 hover:tracking-[0.28em]',
                    L
                      ? 'text-[#86868b] hover:text-[#1d1d1f]'
                      : 'text-zinc-500 hover:text-zinc-300',
                  ].join(' ')}
                >
                  <Mail className="h-3 w-3 opacity-70" strokeWidth={1.5} aria-hidden />
                  Contact
                </Link>
              </div>

              <nav
                className="scrollbar-thin flex gap-1 overflow-x-auto pb-2 md:flex-1 md:flex-col md:overflow-y-auto md:pb-0"
                role="navigation"
                onMouseLeave={() => setHoverCategoryId(null)}
              >
                {CATEGORIES.map((cat, idx) => {
                  const n = String(idx + 1).padStart(2, '0')
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      onMouseEnter={() => setHoverCategoryId(cat.id)}
                      className="group relative flex min-w-0 shrink-0 items-baseline gap-2.5 py-3 pl-1 pr-2 text-left md:w-full"
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span
                        className={[
                          'absolute bottom-2 left-0 top-2 w-px transition-opacity duration-300',
                          L ? 'bg-[#1d1d1f]/22' : 'bg-white/35',
                        ].join(' ')}
                        style={{ opacity: isActive ? 1 : 0 }}
                        aria-hidden
                      />
                      <span
                        className="w-7 shrink-0 text-right text-[11px] tabular-nums leading-none transition-colors duration-300"
                        style={{
                          ...fontPlayfair,
                          color: isActive
                            ? galleryTokens.accent
                            : L
                              ? 'rgba(100, 100, 110, 0.88)'
                              : 'rgba(161, 161, 170, 0.85)',
                        }}
                      >
                        {n}
                      </span>
                      <MagneticCategoryLabel
                        enabled={!prefersReducedMotion}
                        className={[
                          'min-w-0 truncate text-[13px] font-semibold tracking-[-0.02em] transition-[letter-spacing] duration-300 group-hover:tracking-[0.12em]',
                          L ? 'text-[#6e6e73] group-hover:text-[#1d1d1f]' : 'text-zinc-400 group-hover:text-zinc-200',
                        ].join(' ')}
                        style={fontSyne}
                      >
                        {cat.label}
                      </MagneticCategoryLabel>
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.aside>

          <main className="relative h-auto min-h-0 overflow-x-hidden overflow-y-visible md:min-h-[100svh] md:pl-[min(11rem,22vw)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="region"
                aria-label={`Projets — ${active.label}`}
                className="relative z-10 w-full px-5 pb-24 pt-[calc(4rem+env(safe-area-inset-top))] sm:px-10 md:px-14 md:pb-32 md:pt-16 lg:px-20"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={reducedCategoryVariants}
              >
                <div className="relative mx-auto max-w-6xl">
                  <MobileCategoryRail
                    activeCategory={activeCategory}
                    onSelectCategory={handleCategorySelect}
                    onHoverCategory={setHoverCategoryId}
                    light={L}
                    accentColor={galleryTokens.accent}
                  />
                  <header
                    id="portfolio-top"
                    className="mb-12 mt-8 max-w-xl scroll-mt-28 md:mb-28 md:mt-0 md:scroll-mt-24"
                  >
                    <p
                      className={['text-[11px] uppercase tracking-[0.32em]', L ? 'text-[#86868b]' : 'text-zinc-500'].join(
                        ' ',
                      )}
                      style={{ color: galleryTokens.accent }}
                    >
                      {active.label}
                    </p>
                    <h2
                      className={[
                        'mt-4 text-[2rem] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[2.25rem] md:text-[2.5rem]',
                        L ? 'text-[#1a1a1a]' : 'text-white/[0.96]',
                      ].join(' ')}
                      style={fontSectionSerif}
                    >
                      Réalisations sélectionnées
                    </h2>
                    <p
                      className={[
                        'mt-6 max-w-lg text-[16px] leading-relaxed md:text-base',
                        L ? 'text-[#6e6e73]' : 'text-zinc-500',
                      ].join(' ')}
                    >
                      {SITE.footer}
                    </p>
                  </header>

                  <PortfolioProjectGrid
                    categoryId={active.id}
                    projects={active.projects}
                    isMobile={isMobile}
                    prefersReducedMotion={prefersReducedMotion}
                    onOpenProject={openProject}
                    gallery={galleryTokens}
                    shellLight={L}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          <p
            className={[
              'pointer-events-none fixed bottom-5 right-6 z-40 hidden select-none text-[9px] font-medium uppercase tracking-[0.42em] md:block',
              L ? 'text-[#a1a1a6]' : 'text-zinc-600',
            ].join(' ')}
            style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
            aria-hidden
          >
            TrstnWeb
          </p>
        </motion.div>
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
