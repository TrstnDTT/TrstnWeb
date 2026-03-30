/**
 * Rail catégories — scroll horizontal snap + focus visuel (centre plus grand).
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIES } from '../../constants.js'

export function MobileCategoryRail({
  activeCategory,
  onSelectCategory,
  onHoverCategory,
  light,
  accentColor,
}) {
  const scrollerRef = useRef(null)
  const itemRefs = useRef([])
  const [focusIdx, setFocusIdx] = useState(() =>
    Math.max(0, CATEGORIES.findIndex((c) => c.id === activeCategory)),
  )
  const scrollSettle = useRef(0)

  const measureCenter = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return 0
    const rect = el.getBoundingClientRect()
    const mid = rect.left + rect.width / 2
    let best = 0
    let bestD = Infinity
    itemRefs.current.forEach((node, i) => {
      if (!node) return
      const r = node.getBoundingClientRect()
      const c = r.left + r.width / 2
      const d = Math.abs(c - mid)
      if (d < bestD) {
        bestD = d
        best = i
      }
    })
    setFocusIdx(best)
    return best
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => {
      window.clearTimeout(scrollSettle.current)
      measureCenter()
      scrollSettle.current = window.setTimeout(() => {
        const best = measureCenter()
        const id = CATEGORIES[best]?.id
        if (id) onSelectCategory(id)
      }, 140)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    requestAnimationFrame(() => {
      measureCenter()
    })
    return () => {
      window.clearTimeout(scrollSettle.current)
      el.removeEventListener('scroll', onScroll)
    }
  }, [measureCenter, onSelectCategory])

  useEffect(() => {
    const idx = CATEGORIES.findIndex((c) => c.id === activeCategory)
    if (idx >= 0) setFocusIdx(idx)
  }, [activeCategory])

  return (
    <div className="relative w-full md:hidden">
      <p
        className={[
          'mb-3 px-1 text-[10px] uppercase tracking-[0.32em]',
          light ? 'text-[#86868b]' : 'text-zinc-500',
        ].join(' ')}
        style={{ color: accentColor }}
      >
        Secteur
      </p>
      <div
        ref={scrollerRef}
        className="trstn-scroll-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pt-1"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {CATEGORIES.map((cat, i) => {
          const isFocus = i === focusIdx
          return (
            <motion.button
              key={cat.id}
              type="button"
              data-cat-pill
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              onClick={() => {
                onSelectCategory(cat.id)
                itemRefs.current[i]?.scrollIntoView({
                  behavior: 'smooth',
                  inline: 'center',
                  block: 'nearest',
                })
              }}
              onTouchStart={() => onHoverCategory?.(cat.id)}
              onTouchEnd={() => onHoverCategory?.(null)}
              className={[
                'shrink-0 snap-center rounded-2xl border px-5 py-3 text-left transition-colors',
                light
                  ? 'border-black/[0.08] bg-white/[0.55]'
                  : 'border-white/[0.08] bg-white/[0.04]',
              ].join(' ')}
              style={{
                minWidth: '72vw',
                maxWidth: '82vw',
              }}
              animate={{
                scale: isFocus ? 1.04 : 0.92,
                opacity: isFocus ? 1 : 0.5,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <span
                className={[
                  'block text-[10px] font-medium uppercase tracking-[0.28em]',
                  light ? 'text-[#86868b]' : 'text-zinc-500',
                ].join(' ')}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={[
                  'mt-1 block text-[16px] font-semibold leading-tight tracking-[-0.02em]',
                  light ? 'text-[#1d1d1f]' : 'text-white/90',
                ].join(' ')}
                style={{ fontFamily: '"Syne", system-ui, sans-serif' }}
              >
                {cat.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
