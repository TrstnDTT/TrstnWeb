/**
 * Commutateur mode clair / sombre — enveloppe TrstnWeb uniquement (coin sup. droit).
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { useShellTheme } from '../../context/useShellTheme.js'

const ease = [0.22, 1, 0.36, 1]

export function ShellThemeToggle({ className = '' }) {
  const { effectiveTheme, toggleTheme } = useShellTheme()
  const light = effectiveTheme === 'light'
  const [spin, setSpin] = useState(0)
  const tariffLinkStyle = light
    ? {
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255,255,255,0.78)',
        color: '#1d1d1f',
        boxShadow: '0 8px 28px rgba(0,0,0,0.08)',
      }
    : {
        borderColor: 'rgba(212,175,55,0.34)',
        backgroundColor: 'rgba(212,175,55,0.14)',
        color: '#f8f0d5',
        boxShadow: '0 8px 30px rgba(0,0,0,0.22)',
      }

  const handleClick = () => {
    setSpin((s) => s + 180)
    toggleTheme()
  }

  return (
    <div className={['flex items-center gap-2', className].filter(Boolean).join(' ')}>
      <motion.div
        initial={false}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.22, ease }}
      >
        <Link
          to="/tarifs"
          className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border-[0.5px] px-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition-[background-color,border-color,opacity] duration-300 hover:opacity-95 sm:px-4 sm:text-[12px]"
          style={tariffLinkStyle}
        >
          <span className="sm:hidden">Tarifs</span>
          <span className="hidden sm:inline">Développer mon business</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} aria-hidden />
        </Link>
      </motion.div>
      <motion.button
        type="button"
        onClick={handleClick}
        aria-label={light ? 'Activer le mode sombre' : 'Activer le mode clair'}
        aria-pressed={light}
        initial={false}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.22, ease }}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[0.5px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-md"
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
    </div>
  )
}
