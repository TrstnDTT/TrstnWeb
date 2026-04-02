/**
 * Commutateur mode clair / sombre — enveloppe TrstnWeb uniquement (coin sup. droit).
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useShellTheme } from '../../context/useShellTheme.js'

const ease = [0.22, 1, 0.36, 1]

export function ShellThemeToggle({ className = '' }) {
  const { effectiveTheme, toggleTheme } = useShellTheme()
  const light = effectiveTheme === 'light'
  const [spin, setSpin] = useState(0)

  const handleClick = () => {
    setSpin((s) => s + 180)
    toggleTheme()
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={light ? 'Activer le mode sombre' : 'Activer le mode clair'}
      aria-pressed={light}
      initial={false}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.22, ease }}
      className={[
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[0.5px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        light
          ? {
              borderColor: 'rgba(0,0,0,0.1)',
              backgroundColor: 'rgba(255,255,255,0.72)',
              color: '#1d1d1f',
            }
          : {
              borderColor: 'rgba(255,255,255,0.12)',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: 'rgba(250,250,250,0.9)',
            }
      }
    >
      <motion.span
        className="flex items-center justify-center"
        animate={{ rotate: spin }}
        transition={{ duration: 0.45, ease }}
      >
        {light ? (
          <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden tabIndex={-1} focusable="false" />
        ) : (
          <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden tabIndex={-1} focusable="false" />
        )}
      </motion.span>
    </motion.button>
  )
}
