import { useEffect, useState } from 'react'

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
