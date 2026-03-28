import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

/**
 * Retour — couleurs alignées sur l’identité du site + anneau portfolio (tokens).
 */
export function BackButton({ onClick, site }) {
  const p = site?.surfaceColor ?? site?.primaryColor ?? '#0a0a0c'
  const t = site?.textColor ?? '#fafafa'
  const ring = site?.portfolio?.backButtonRing ?? 'rgba(255,255,255,0.14)'

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="fixed left-3 top-3 z-[1000] flex items-center gap-2 rounded-full border px-3 py-2.5 text-xs font-medium backdrop-blur-xl md:left-5 md:top-5 md:px-4 md:text-sm"
      style={{
        borderColor: ring,
        backgroundColor: `${p}e6`,
        color: t,
        boxShadow: `0 0 0 1px ${ring}, 0 12px 40px -16px rgba(0,0,0,0.55)`,
      }}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      aria-label="Retour au portfolio"
    >
      <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
      <span className="hidden sm:inline">Retour au portfolio</span>
      <span className="sm:hidden">Retour</span>
    </motion.button>
  )
}
