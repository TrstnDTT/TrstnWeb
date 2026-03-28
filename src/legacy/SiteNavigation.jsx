/**
 * Remplace le SiteNavigation Next (routes /site/[id]/about) par des ancres
 * dans le template intégré (full page).
 */
import { motion } from 'framer-motion'
import { User, Mail } from 'lucide-react'

export function SiteNavigation({
  theme,
  className = '',
  aboutHref = '#legacy-about',
  contactHref = '#legacy-contact',
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:gap-4 ${className} w-full sm:w-auto`}>
      <motion.a
        href={aboutHref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition-all touch-manipulation sm:w-auto"
        style={{
          backgroundColor: theme.primaryColor,
          color: theme.backgroundColor,
        }}
      >
        <User className="h-5 w-5 shrink-0" />
        <span>À propos</span>
      </motion.a>
      <motion.a
        href={contactHref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-semibold shadow-lg transition-all touch-manipulation sm:w-auto"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.primaryColor,
          borderColor: theme.primaryColor,
        }}
      >
        <Mail className="h-5 w-5 shrink-0" />
        <span>Contact</span>
      </motion.a>
    </div>
  )
}
