/**
 * Barre de progression de lecture + ancres de menu (mini-sites bar).
 */
import { useCallback, useEffect, useState } from 'react'

/**
 * @param {React.RefObject<HTMLElement | null>} rootRef — racine du mini-site (scroll sur le parent `overflow-y-auto`).
 */
export function useMiniSiteScrollProgress(rootRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const root = rootRef.current
    const sp = root?.parentElement
    if (!sp) return

    const tick = () => {
      const { scrollTop, scrollHeight, clientHeight } = sp
      const max = Math.max(1, scrollHeight - clientHeight)
      setProgress(Math.min(1, scrollTop / max))
    }

    sp.addEventListener('scroll', tick, { passive: true })
    const ro = new ResizeObserver(tick)
    if (root) ro.observe(root)
    tick()
    return () => {
      sp.removeEventListener('scroll', tick)
      ro.disconnect()
    }
  }, [rootRef])

  return progress
}

export function BarExperienceChrome({
  progress,
  anchors,
  accentColor,
  dark = true,
  topOffset = '0px',
}) {
  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const track = dark ? 'bg-white/[0.08]' : 'bg-black/[0.08]'
  const pill = dark
    ? 'border-white/15 bg-black/40 text-[#e8e4df]/90 hover:bg-white/10'
    : 'border-black/12 bg-[#f0ebe3]/95 text-[#1a1814] hover:bg-white'

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 right-0 z-[118] h-[3px] ${track}`}
        style={{ top: topOffset }}
        aria-hidden
        tabIndex={-1}
      >
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${Math.round(progress * 10000) / 100}%`,
            backgroundColor: accentColor,
          }}
        />
      </div>
      <nav
        className={`fixed left-0 right-0 z-[117] flex gap-1.5 overflow-x-auto px-3 py-2 pl-14 [scrollbar-width:none] md:gap-2 md:px-6 md:pl-20 [&::-webkit-scrollbar]:hidden ${
          dark ? 'border-b border-white/[0.06] bg-[#0d0b0a]/92 backdrop-blur-md' : 'border-b border-black/[0.07] bg-[#e8dcc8]/95 backdrop-blur-md'
        }`}
        style={{ top: `calc(${topOffset} + 3px)` }}
        aria-label="Sections de la carte"
      >
        {anchors.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToId(id)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors md:text-[10px] md:tracking-[0.22em] ${pill}`}
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}
