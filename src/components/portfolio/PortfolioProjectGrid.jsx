import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectPreview } from '../ProjectPreview.jsx'
import { getSiteById } from '../../data.js'

const fontPlayfair = { fontFamily: '"Playfair Display", Georgia, serif' }

function ProjectCardSkeleton({ siteId }) {
  const site = getSiteById(siteId)
  const p = site?.primaryColor ?? '#1c1c1e'
  const s = site?.secondaryColor ?? '#3f3f46'
  return (
    <div
      className="relative aspect-[3/4] w-full min-h-[220px] overflow-hidden sm:min-h-[260px] md:min-h-[300px]"
      aria-hidden
    >
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `linear-gradient(155deg, ${p} 0%, ${p} 42%, ${s} 100%)`,
        }}
      />
      <div className="absolute inset-x-4 top-1/3 h-4 rounded bg-white/[0.06]" />
      <div className="absolute inset-x-4 top-[42%] h-3 w-2/3 rounded bg-white/[0.04]" />
    </div>
  )
}

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

function getCardRevealVariants(reduced) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: (i) => ({
        opacity: 1,
        transition: { delay: 0.04 + i * 0.03, duration: 0.28 },
      }),
    }
  }
  return {
    hidden: { opacity: 0, y: 16 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04 + i * 0.04,
        duration: 0.38,
        ease: [0.2, 1, 0.36, 1],
      },
    }),
  }
}

function PortfolioProjectGridInner({
  categoryId,
  projects,
  isMobile,
  prefersReducedMotion,
  shellLight = false,
  onOpenProject,
  gallery,
}) {
  const [visibleCount, setVisibleCount] = useState(1)
  const cardReveal = useMemo(
    () => getCardRevealVariants(prefersReducedMotion),
    [prefersReducedMotion],
  )

  useEffect(() => {
    setVisibleCount(1)
    let raf2 = 0
    let t = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setVisibleCount((c) => Math.max(c, 2))
        t = window.setTimeout(() => setVisibleCount(projects.length), 0)
      })
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      clearTimeout(t)
    }
  }, [categoryId, projects.length])

  const handleKey = useCallback(
    (siteId, e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onOpenProject(siteId, e)
      }
    },
    [onOpenProject],
  )

  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-16 p-0 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
      {projects.map((project, i) => {
        const shell = getSiteById(project.siteId)?.portfolio
        const gridStyle = getCardGridStyle(i, projects.length, !isMobile)
        const showBody = i < visibleCount
        const isLast = i === projects.length - 1
        const snapClass = isLast
          ? 'max-md:snap-end max-md:snap-always'
          : 'max-md:snap-center max-md:snap-always'

        return (
          <motion.li
            key={`${categoryId}-${project.siteId}`}
            className={`list-none relative z-0 ${snapClass}`}
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
              className={[
                'group relative z-0 flex h-full cursor-pointer flex-col overflow-hidden text-left outline-none ring-offset-2 will-change-transform',
                shellLight
                  ? 'bg-white/[0.72] ring-offset-[#F5F5F7] focus-visible:ring-2 focus-visible:ring-black/15'
                  : 'bg-[rgba(255,255,255,0.02)] ring-offset-[#121210] focus-visible:ring-2 focus-visible:ring-white/25',
              ].join(' ')}
              style={{
                boxShadow: `
                  0 0 0 1px ${gallery.borderOuter},
                  inset 0 0 0 1px ${gallery.borderInner}
                `,
                transform: 'translateZ(0)',
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -2, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
              }
              onClick={(e) => onOpenProject(project.siteId, e)}
              onKeyDown={(e) => handleKey(project.siteId, e)}
            >
              {showBody ? (
                <ProjectPreview site={getSiteById(project.siteId)} />
              ) : (
                <ProjectCardSkeleton siteId={project.siteId} />
              )}
              <div className="flex flex-1 flex-col px-6 pb-8 pt-6 md:px-7 md:pb-9">
                {shell?.portfolioTagline && (
                  <p
                    className={[
                      'mb-2 text-[10px] uppercase tracking-[0.24em]',
                      shellLight ? 'text-[#86868b]' : 'text-zinc-500',
                    ].join(' ')}
                    style={{ color: gallery.accent }}
                  >
                    {shell.portfolioTagline}
                  </p>
                )}
                <h3
                  className={[
                    'text-[1.35rem] font-medium leading-snug tracking-[-0.02em] sm:text-[1.45rem]',
                    shellLight ? 'text-[#1d1d1f]' : 'text-white',
                  ].join(' ')}
                  style={fontPlayfair}
                >
                  {project.title}
                </h3>
                <p
                  className={[
                    'trstn-label mt-3 flex-1 text-[14px] leading-relaxed md:text-[15px]',
                    shellLight ? 'text-[#6e6e73]' : 'text-zinc-500',
                  ].join(' ')}
                >
                  {project.description}
                </p>
                <div className="mt-8">
                  <span
                    className={[
                      'group inline-flex items-baseline gap-2 text-[13px] tracking-[0.04em] transition-[letter-spacing] duration-300 group-hover:tracking-[0.08em]',
                      shellLight
                        ? 'text-[#86868b] group-hover:text-[#1d1d1f]'
                        : 'text-zinc-400 group-hover:text-zinc-200',
                    ].join(' ')}
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
  )
}

export const PortfolioProjectGrid = memo(
  PortfolioProjectGridInner,
  (prev, next) =>
    prev.categoryId === next.categoryId &&
    prev.isMobile === next.isMobile &&
    prev.prefersReducedMotion === next.prefersReducedMotion &&
    prev.projects === next.projects &&
    prev.onOpenProject === next.onOpenProject &&
    prev.gallery.borderOuter === next.gallery.borderOuter &&
    prev.shellLight === next.shellLight,
)
