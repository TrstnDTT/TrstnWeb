/**
 * Marque « TrstnWeb » — micro-glitch 150 ms au montage et au changement de thème shell.
 */
import { useLayoutEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { SITE } from '../../constants.js'
import { useShellTheme } from '../../context/ShellThemeContext.jsx'

export function TrstnWebLogo({ className = '', as: Comp = 'span', children, ...rest }) {
  const { theme } = useShellTheme()
  const prefersReducedMotion = useReducedMotion()
  const [glitch, setGlitch] = useState(false)

  useLayoutEffect(() => {
    if (prefersReducedMotion) return
    setGlitch(true)
    const id = window.setTimeout(() => setGlitch(false), 150)
    return () => window.clearTimeout(id)
  }, [theme, prefersReducedMotion])

  return (
    <Comp
      className={[glitch ? 'trstn-logo-glitch' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? SITE.title}
    </Comp>
  )
}
