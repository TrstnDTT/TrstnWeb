import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { Home, Info, Mail } from 'lucide-react'
import { MobileCategoryRail } from '../components/portfolio/MobileCategoryRail.jsx'
import { PortfolioProjectGrid } from '../components/portfolio/PortfolioProjectGrid.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { ShellLegalFooter } from '../components/shell/ShellLegalFooter.jsx'
import { TrstnWebLogo } from '../components/shell/TrstnWebLogo.jsx'
import { ProjectExperience } from '../components/templates/ProjectExperience.jsx'
import { CATEGORIES, CATEGORY_CANVAS_HOVER, SITE } from '../constants.js'
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
const fontSectionSerif = { fontFamily: '"Cormorant Garamond", Georgia, serif' }

/** Ancre stable par catégorie (ex. #category-restaurant). */
function portfolioCategoryAnchorId(categoryId) {
  return `category-${categoryId}`
}

const SS_LIST_SCROLL = 'portfolio:listScrollY'
const SS_LIST_CATEGORY = 'portfolio:listCategory'

function applyMainScrollInstant(main, y) {
  if (!main || typeof y !== 'number' || Number.isNaN(y)) return
  main.scrollTop = y
  try {
    main.scrollTo({ top: y, behavior: 'instant' })
  } catch {
    main.scrollTop = y
  }
}

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

function usePortfolioScrollSpy(mainRef, setActiveCategory, isMobile) {
  const ticking = useRef(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const main = mainRef.current
    if (!main) return
    const { scrollTop, scrollHeight, clientHeight } = main
    const max = Math.max(0, scrollHeight - clientHeight)
    setScrollProgress(max <= 0 ? 0 : Math.min(100, (scrollTop / max) * 100))
  }, [mainRef])

  /** Bureau : catégorie active suivie par position du « centre » de lecture. */
  const updateActiveDesktop = useCallback(() => {
    if (isMobile) return
    const main = mainRef.current
    if (!main) return
    const { clientHeight } = main
    const centerY = main.getBoundingClientRect().top + clientHeight * 0.38
    let bestId = CATEGORIES[0]?.id
    let bestDist = Infinity
    for (const cat of CATEGORIES) {
      const el = document.getElementById(portfolioCategoryAnchorId(cat.id))
      if (!el) continue
      const r = el.getBoundingClientRect()
      const mid = (r.top + r.bottom) / 2
      const d = Math.abs(mid - centerY)
      if (d < bestDist) {
        bestDist = d
        bestId = cat.id
      }
    }
    if (bestId) setActiveCategory((prev) => (prev === bestId ? prev : bestId))
  }, [mainRef, setActiveCategory, isMobile])

  useEffect(() => {
    const main = mainRef.current
    if (!main || !isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        const strong = entries.filter((e) => e.intersectionRatio >= 0.6)
        if (strong.length === 0) return
        const best = strong.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b,
        )
        const id = best.target.getAttribute('data-category-id')
        if (id) setActiveCategory((prev) => (prev === id ? prev : id))
      },
      {
        root: main,
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
        rootMargin: '0px',
      },
    )

    CATEGORIES.forEach((cat) => {
      const el = document.getElementById(portfolioCategoryAnchorId(cat.id))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isMobile, mainRef, setActiveCategory])

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const tick = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        ticking.current = false
        updateProgress()
        if (!isMobile) updateActiveDesktop()
      })
    }

    tick()
    main.addEventListener('scroll', tick, { passive: true })
    const ro = new ResizeObserver(() => tick())
    ro.observe(main)
    return () => {
      main.removeEventListener('scroll', tick)
      ro.disconnect()
    }
  }, [mainRef, updateProgress, updateActiveDesktop, isMobile])

  return scrollProgress
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const location = useLocation()
  const navigate = useNavigate()
  const { effectiveTheme, setProjectViewOpen } = useShellTheme()
  const L = effectiveTheme === 'light'
  const [activeProject, setActiveProject] = useState(null)
  const mainScrollRef = useRef(null)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
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

  /** Position du `<main>` liste avant ouverture mini-site (le main est démonté sous l’overlay). */
  const listScrollRestoreRef = useRef(null)

  const scrollProgress = usePortfolioScrollSpy(mainScrollRef, setActiveCategory, isMobile)

  const activeSite = useMemo(
    () => (activeProject ? getSiteById(activeProject) : null),
    [activeProject],
  )

  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow
    const prevBody = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [])

  useEffect(() => {
    setProjectViewOpen(!!activeProject)
    return () => setProjectViewOpen(false)
  }, [activeProject, setProjectViewOpen])

  useEffect(() => {
    if (!activeProject) {
      document.title = `Portfolio | ${SITE.title}`
    }
  }, [activeProject])

  /** Retour depuis la page réservation Cheveux & Co : rouvrir le mini-site. */
  useEffect(() => {
    const id = location.state?.openProject
    if (typeof id !== 'string') return
    setActiveProject(id)
    navigate('/portfolio', { replace: true, state: {} })
  }, [location.state, navigate])

  const openProject = useCallback(
    (siteId, event) => {
      const main = mainScrollRef.current
      const y = main?.scrollTop ?? 0
      listScrollRestoreRef.current = y
      try {
        sessionStorage.setItem(SS_LIST_SCROLL, String(y))
        sessionStorage.setItem(SS_LIST_CATEGORY, activeCategory)
      } catch {
        /* quota / mode privé */
      }
      setOpenOrigin(computeOpenOrigin(event))
      setActiveProject(siteId)
    },
    [activeCategory],
  )

  const closeProject = useCallback(() => {
    setActiveProject(null)
    setOpenOrigin(null)
  }, [])

  /**
   * Restaure la liste là où l’utilisateur était (mémoire de scroll).
   * useLayoutEffect : avant paint pour éviter le flash en haut de page.
   * sessionStorage : reprise après rafraîchissement pendant l’overlay.
   */
  useLayoutEffect(() => {
    if (activeProject) return
    const main = mainScrollRef.current
    if (!main) return

    let y = listScrollRestoreRef.current
    if (y == null || y === undefined) {
      try {
        const raw = sessionStorage.getItem(SS_LIST_SCROLL)
        if (raw != null) y = Number(raw)
      } catch {
        /* ignore */
      }
    }
    if (y == null || Number.isNaN(y)) return

    applyMainScrollInstant(main, y)

    try {
      const cat = sessionStorage.getItem(SS_LIST_CATEGORY)
      if (cat && CATEGORIES.some((c) => c.id === cat)) {
        setActiveCategory(cat)
      }
      sessionStorage.removeItem(SS_LIST_SCROLL)
      sessionStorage.removeItem(SS_LIST_CATEGORY)
    } catch {
      /* ignore */
    }

    listScrollRestoreRef.current = null

    requestAnimationFrame(() => {
      const m = mainScrollRef.current
      if (m) applyMainScrollInstant(m, y)
    })
  }, [activeProject])

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

  const galleryTokens = L ? GALLERY_LIGHT : GALLERY

  const scrollToCategory = useCallback(
    (id) => {
      const el = document.getElementById(portfolioCategoryAnchorId(id))
      if (!el || !mainScrollRef.current) return
      setActiveCategory(id)
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    },
    [prefersReducedMotion],
  )

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
            'trstn-ui trstn-shell relative flex h-[100dvh] w-full flex-col overflow-hidden overscroll-none md:flex-row',
            L ? 'trstn-shell-light text-[#1d1d1f]' : 'text-[#e6e4df]',
          ].join(' ')}
          initial={false}
          animate={{ backgroundColor: canvasBg }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShellThemeToggle className="fixed right-4 top-4 z-[55] max-md:top-[max(1rem,env(safe-area-inset-top))] md:right-8 md:top-6" />

          <motion.aside
            layout={false}
            className={[
              'hidden transform-gpu [backface-visibility:hidden] md:fixed md:inset-x-auto md:bottom-0 md:left-0 md:top-0 md:z-50 md:flex md:h-full md:w-[min(11rem,22vw)] md:flex-col md:border-b-0 md:backdrop-blur-none',
              L
                ? 'md:border-r md:border-black/[0.08] md:bg-[#F5F5F7]/95 md:backdrop-blur-xl'
                : 'md:border-r md:border-white/[0.07] md:bg-[#0d0d0c]/95 md:backdrop-blur-xl',
            ].join(' ')}
            aria-label="Navigation des secteurs"
          >
            <div className="relative flex h-full max-h-[100svh] flex-col px-4 py-5 md:max-h-none md:px-5 md:py-10">
              <div
                className={[
                  'mb-6 h-1 w-full shrink-0 overflow-hidden rounded-full transition-[height] duration-300 md:mb-8',
                  L ? 'bg-black/[0.06]' : 'bg-white/[0.08]',
                ].join(' ')}
                aria-hidden
                tabIndex={-1}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-100 ease-out"
                  style={{
                    backgroundColor: galleryTokens.accent,
                    width: `${scrollProgress}%`,
                  }}
                />
              </div>

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
                  <TrstnWebLogo className="inline" />
                </p>
                <p
                  className={['mt-2 text-[10px] uppercase tracking-[0.28em]', L ? 'text-[#0a0a0a]' : 'text-white'].join(
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
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing,color] duration-300 hover:tracking-[0.28em]',
                    L ? 'trstn-a11y-nav-link-light' : 'trstn-a11y-nav-link-dark',
                  ].join(' ')}
                >
                  <Home className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden tabIndex={-1} focusable="false" />
                  Accueil
                </Link>
                <Link
                  to="/about"
                  className={[
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing,color] duration-300 hover:tracking-[0.28em]',
                    L ? 'trstn-a11y-nav-link-light' : 'trstn-a11y-nav-link-dark',
                  ].join(' ')}
                >
                  <Info className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden tabIndex={-1} focusable="false" />
                  À propos
                </Link>
                <Link
                  to="/contact"
                  className={[
                    'inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 border-b border-transparent pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-[letter-spacing,color] duration-300 hover:tracking-[0.28em]',
                    L ? 'trstn-a11y-nav-link-light' : 'trstn-a11y-nav-link-dark',
                  ].join(' ')}
                >
                  <Mail className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden tabIndex={-1} focusable="false" />
                  {SITE.ctaContact}
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
                      onClick={() => scrollToCategory(cat.id)}
                      onMouseEnter={() => setHoverCategoryId(cat.id)}
                      className="group relative flex min-w-0 shrink-0 items-baseline gap-2.5 py-3 pl-1 pr-2 text-left md:w-full"
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span
                        className={[
                          'absolute bottom-2 left-0 top-2 w-px transition-opacity duration-300 ease-in-out',
                          L ? 'bg-[#1d1d1f]/22' : 'bg-white/35',
                        ].join(' ')}
                        style={{ opacity: isActive ? 1 : 0 }}
                        aria-hidden
                        tabIndex={-1}
                      />
                      <span
                        className="w-7 shrink-0 text-right text-[11px] tabular-nums leading-none transition-colors duration-300 ease-in-out"
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
                          'min-w-0 truncate text-[13px] font-semibold tracking-[-0.02em] transition-[letter-spacing,color] duration-300 ease-in-out group-hover:tracking-[0.12em]',
                          isActive
                            ? L
                              ? 'text-[#1d1d1f]'
                              : 'text-white'
                            : L
                              ? 'trstn-a11y-muted-light group-hover:text-[#1d1d1f]'
                              : 'trstn-a11y-muted-dark group-hover:text-zinc-200',
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

          <main
            ref={mainScrollRef}
            className={[
              'relative z-10 min-h-0 w-full flex-1 touch-pan-y overflow-x-hidden overflow-y-auto overscroll-y-contain md:pl-[min(11rem,22vw)]',
              'max-md:snap-y max-md:snap-proximity',
            ].join(' ')}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div
              className={[
                'sticky top-0 z-50 w-full md:static',
                'mt-0 max-md:pt-[env(safe-area-inset-top)] md:pt-0',
                L
                  ? 'max-md:border-b max-md:border-black/[0.08] max-md:bg-[#F5F5F7] max-md:shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
                  : 'max-md:border-b max-md:border-white/[0.08] max-md:bg-[#121210] max-md:shadow-[0_4px_14px_-6px_rgba(0,0,0,0.45)]',
              ].join(' ')}
            >
              <div
                className={[
                  'pointer-events-none h-[3px] w-full shrink-0 md:hidden',
                  L ? 'bg-black/[0.08]' : 'bg-white/[0.1]',
                ].join(' ')}
                aria-hidden
                tabIndex={-1}
              >
                <div
                  className="h-full transition-[width] duration-100 ease-out"
                  style={{
                    backgroundColor: galleryTokens.accent,
                    width: `${scrollProgress}%`,
                  }}
                />
              </div>
              <div className="px-3 pb-0 pt-0 sm:px-5 md:px-0">
                <MobileCategoryRail
                  activeCategory={activeCategory}
                  onSelectCategory={scrollToCategory}
                  onHoverCategory={setHoverCategoryId}
                  light={L}
                  flushUnderHeader
                />
              </div>
            </div>

            <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-10 md:px-14 md:pb-32 md:pt-16 lg:px-20">
              <header
                id="portfolio-top"
                className="mb-14 max-w-xl scroll-mt-[calc(7rem+env(safe-area-inset-top))] max-md:snap-start md:mb-20 md:scroll-mt-24"
              >
                <p
                  className={['text-[11px] uppercase tracking-[0.32em]', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(
                    ' ',
                  )}
                  style={{ color: galleryTokens.accent }}
                >
                  {SITE.portfolio.eyebrow}
                </p>
                <h2
                  className={[
                    'mt-4 text-[2rem] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[2.25rem] md:text-[2.5rem]',
                    L ? 'text-[#1a1a1a]' : 'text-white/[0.96]',
                  ].join(' ')}
                  style={fontSectionSerif}
                >
                  {SITE.portfolio.headline}
                </h2>
                <p
                  className={[
                    'mt-6 max-w-lg text-[16px] leading-relaxed md:text-base',
                    L ? 'text-[#0a0a0a]' : 'text-white',
                  ].join(' ')}
                >
                  {SITE.portfolio.intro}
                </p>
              </header>

              {CATEGORIES.map((cat) => (
                <motion.section
                  key={cat.id}
                  id={portfolioCategoryAnchorId(cat.id)}
                  data-category-id={cat.id}
                  className={[
                    'max-md:snap-start',
                    'scroll-mt-[calc(7.5rem+env(safe-area-inset-top))] md:scroll-mt-28',
                  ].join(' ')}
                  initial={prefersReducedMotion ? false : { opacity: 0.82, filter: 'blur(8px)' }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, filter: 'blur(0px)' }}
                  viewport={
                    prefersReducedMotion
                      ? undefined
                      : { once: false, amount: 0.12, margin: '-8% 0px -8% 0px' }
                  }
                  transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
                >
                  <header className="mb-10 max-w-xl md:mb-14">
                    <h2
                      className={[
                        'text-[11px] font-medium uppercase tracking-[0.32em]',
                        L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark',
                      ].join(' ')}
                      style={{ color: galleryTokens.accent }}
                    >
                      {cat.label}
                    </h2>
                  </header>

                  <PortfolioProjectGrid
                    categoryId={cat.id}
                    projects={cat.projects}
                    isMobile={isMobile}
                    prefersReducedMotion={prefersReducedMotion}
                    onOpenProject={openProject}
                    gallery={galleryTokens}
                    shellLight={L}
                    firstCardScrollMargin={cat.id === CATEGORIES[0].id}
                  />
                </motion.section>
              ))}
            </div>

            <ShellLegalFooter light={L} className="mt-8 px-5 sm:px-10 md:px-14 lg:px-20" />
          </main>

          <p
            className={[
              'pointer-events-none fixed bottom-5 right-6 z-40 hidden select-none text-[9px] font-medium uppercase tracking-[0.42em] md:block',
              L ? 'text-[#0a0a0a]' : 'text-white',
            ].join(' ')}
            style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
            aria-hidden
            tabIndex={-1}
          >
            <TrstnWebLogo className="inline" />
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
