import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { SITE } from '../constants.js'

/**
 * Page d’accueil (style proche de l’ancien site Next : Inter, fond clair slate, hero + À propos).
 */
export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#about') {
      requestAnimationFrame(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link
            to="/"
            className="text-[15px] font-semibold tracking-tight text-slate-900 transition hover:opacity-80"
          >
            {SITE.title}
          </Link>
          <nav
            className="flex items-center gap-5 text-[13px] font-medium text-slate-600 sm:gap-8"
            aria-label="Navigation accueil"
          >
            <a href="#hero" className="transition hover:text-slate-900">
              Accueil
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              À propos
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-[12px] font-semibold text-white transition hover:bg-slate-800"
            >
              <LayoutGrid className="h-3.5 w-3.5 opacity-90" aria-hidden />
              Projets
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-100 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {SITE.home.heroEyebrow}
            </motion.p>
            <motion.h1
              className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-[2.5rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {SITE.home.heroTitle}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-600 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {SITE.home.heroLead}
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800"
              >
                {SITE.home.ctaProjects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              {SITE.about.title}
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              {SITE.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <p className="mt-10 text-center text-[12px] text-slate-500">
              Propulsé par <span className="font-medium text-slate-700">{SITE.title}</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
