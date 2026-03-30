/**
 * Ruban catégories mobile — horizontal, sticky, sélection au tap uniquement.
 * Soulignement animé (layoutId). Pas de sync scroll → catégorie sur le ruban.
 */
import { useEffect, useRef } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import { CATEGORIES } from '../../constants.js'

export function MobileCategoryRail({
  activeCategory,
  onSelectCategory,
  onHoverCategory,
  light,
}) {
  const btnRefs = useRef([])

  useEffect(() => {
    const idx = CATEGORIES.findIndex((c) => c.id === activeCategory)
    const btn = btnRefs.current[idx]
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeCategory])

  return (
    <div
      className={[
        'w-full border-b md:hidden',
        light ? 'border-black/[0.06] bg-[#F5F5F7]/92 backdrop-blur-xl' : 'border-white/[0.08] bg-[#121210]/92 backdrop-blur-xl',
      ].join(' ')}
    >
      <LayoutGroup>
        <div
          className="trstn-scroll-hide flex gap-1 overflow-x-auto px-1 py-2.5"
          style={{ WebkitOverflowScrolling: 'touch' }}
          role="tablist"
          aria-label="Catégories de projets"
        >
          {CATEGORIES.map((cat, i) => {
            const n = String(i + 1).padStart(2, '0')
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                ref={(el) => {
                  btnRefs.current[i] = el
                }}
                onClick={() => onSelectCategory(cat.id)}
                onTouchStart={() => onHoverCategory?.(cat.id)}
                onTouchEnd={() => onHoverCategory?.(null)}
                className={[
                  'relative shrink-0 rounded-lg px-3 py-2.5 text-left transition-colors duration-200',
                  'min-h-[44px] min-w-[min-content]',
                ].join(' ')}
              >
                {isActive ? (
                  <motion.span
                    layoutId="mobile-category-underline"
                    className={[
                      'absolute bottom-1 left-2 right-2 h-[2px] rounded-full',
                      light ? 'bg-[#1d1d1f]' : 'bg-white',
                    ].join(' ')}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span
                  className={[
                    'block text-[10px] font-medium tabular-nums leading-none tracking-[0.2em]',
                    isActive
                      ? light
                        ? 'text-[#1d1d1f]'
                        : 'text-white'
                      : 'text-zinc-400',
                  ].join(' ')}
                >
                  {n}
                </span>
                <span
                  className={[
                    'mt-1 block max-w-[42vw] truncate text-[13px] font-semibold leading-tight tracking-[-0.02em] sm:max-w-none',
                    isActive
                      ? light
                        ? 'text-[#1d1d1f]'
                        : 'text-white'
                      : 'text-zinc-400',
                  ].join(' ')}
                  style={{ fontFamily: '"Syne", system-ui, sans-serif' }}
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>
      </LayoutGroup>
    </div>
  )
}
