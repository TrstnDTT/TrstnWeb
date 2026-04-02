import { useContext } from 'react'
import { ShellThemeContext } from './shellThemeContext.js'

export function useShellTheme() {
  const ctx = useContext(ShellThemeContext)
  if (!ctx) {
    throw new Error('useShellTheme must be used within ShellThemeProvider')
  }
  return ctx
}
