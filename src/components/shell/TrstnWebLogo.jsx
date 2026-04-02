/**
 * Marque « TrstnWeb » — micro-glitch 150 ms au montage et au changement de thème shell.
 */
import { useLayoutEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { SITE } from '../../constants.js'
import { useShellTheme } from '../../context/useShellTheme.js'

export function TrstnWebLogo({ className = '', as = 'span', children, ...rest }) {
  const Component = as
  const { theme } = useShellTheme()
  const prefersReducedMotion = useReducedMotion()
  const [glitch, setGlitch] = useState(false)

  useLayoutEffect(() => {
    if (prefersReducedMotion) return
    const t1 = window.setTimeout(() => setGlitch(true), 0)
    const t2 = window.setTimeout(() => setGlitch(false), 150)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [theme, prefersReducedMotion])

  return (
    <Component
      className={[glitch ? 'trstn-logo-glitch' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? SITE.title}
    </Component>
  )
}
