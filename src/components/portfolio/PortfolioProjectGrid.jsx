import { memo, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ProjectPreview } from '../ProjectPreview.jsx'
import { getSiteById } from '../../data.js'

const fontPlayfair = { fontFamily: '"Playfair Display", Georgia, serif' }

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

function getListRevealVariants(reduced) {
  if (reduced) {
    return {
      hidden: {},
      show: {
        transition: { staggerChildren: 0.05, delayChildren: 0.02 },
      },
    }
  }
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.06 },
    },
  }
}

function getCardRevealVariants(reduced) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 0.3 },
      },
    }
  }
  return {
    hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.48,
        ease: [0.2, 1, 0.36, 1],
      },
    },
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
  const listReveal = useMemo(
    () => getListRevealVariants(prefersReducedMotion),
    [prefersReducedMotion],
  )
  const cardReveal = useMemo(
    () => getCardRevealVariants(prefersReducedMotion),
    [prefersReducedMotion],
  )

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
    <motion.ul
      className="m-0 grid list-none grid-cols-1 gap-16 p-0 md:grid-cols-2 md:gap-x-10 md:gap-y-24"
      variants={listReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -8% 0px' }}
    >
      {projects.map((project, i) => {
        const shell = getSiteById(project.siteId)?.portfolio
        const gridStyle = getCardGridStyle(i, projects.length, !isMobile)
        const isLast = i === projects.length - 1
        const snapClass = isLast
          ? 'max-md:snap-end max-md:snap-always'
          : 'max-md:snap-center max-md:snap-always'

        return (
          <motion.li
            key={`${categoryId}-${project.siteId}`}
            className={`list-none relative z-0 ${snapClass}`}
            style={gridStyle}
            variants={cardReveal}
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
              whileTap={
                isMobile && !prefersReducedMotion
                  ? { scale: 0.97, transition: { duration: 0.15 } }
                  : undefined
              }
              onClick={(e) => onOpenProject(project.siteId, e)}
              onKeyDown={(e) => handleKey(project.siteId, e)}
            >
              <div className="relative">
                {project.styleTag ? (
                  <span
                    className={[
                      'absolute left-4 top-4 z-20 max-w-[calc(100%-2rem)] rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] backdrop-blur-sm',
                      shellLight
                        ? 'border-black/[0.08] bg-white/80 text-[#6e6e73]'
                        : 'border-white/[0.12] bg-black/35 text-zinc-300',
                    ].join(' ')}
                    style={fontPlayfair}
                  >
                    Style : {project.styleTag}
                  </span>
                ) : null}
                <ProjectPreview site={getSiteById(project.siteId)} />
              </div>
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
                    'trstn-label mt-3 flex-1 text-[16px] leading-relaxed md:text-[15px]',
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
    </motion.ul>
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
