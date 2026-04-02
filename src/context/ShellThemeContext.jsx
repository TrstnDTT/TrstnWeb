import { useCallback, useEffect, useMemo, useState } from 'react'

import { ShellThemeContext } from './shellThemeContext.js'

const STORAGE_KEY = 'trstnweb-shell-theme'

/**
 * Thème enveloppe TrstnWeb uniquement (accueil, portfolio grille, à propos, contact).
 * Les mini-sites plein écran ne sont pas enveloppés — pas de fuite du mode clair.
 */
export function ShellThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  /** Mini-site ouvert : forcer le rendu shell « sombre » si du chrome réapparaît (filet de sécurité). */
  const [projectViewOpen, setProjectViewOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeState(next === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const effectiveTheme = useMemo(
    () => (projectViewOpen ? 'dark' : theme),
    [projectViewOpen, theme],
  )

  const value = useMemo(
    () => ({
      theme,
      effectiveTheme,
      setTheme,
      toggleTheme,
      setProjectViewOpen,
      projectViewOpen,
      isLight: effectiveTheme === 'light',
    }),
    [theme, effectiveTheme, setTheme, toggleTheme, setProjectViewOpen, projectViewOpen],
  )

  return <ShellThemeContext.Provider value={value}>{children}</ShellThemeContext.Provider>
}
