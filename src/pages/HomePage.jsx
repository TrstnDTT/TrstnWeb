import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SITE } from '../constants.js'

/** Courbes « fluides » — lourd, organique, pas mécanique */
const easeLux = [0.22, 1, 0.36, 1]

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#about') {
      requestAnimationFrame(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  const glassBtn =
    'trstn-entry-btn flex w-full max-w-full items-center justify-center rounded-[6px] border-[0.5px] border-white/10 bg-white/[0.03] px-8 py-4 text-center text-[#fafafa] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-[transform,box-shadow,background-color] duration-500 hover:bg-white/[0.06] hover:shadow-[0_8px_40px_rgba(0,0,0,0.18)] active:scale-[0.99]'

  return (
    <div className="trstn-ui min-h-[100dvh] bg-[#050506] text-[#fafafa] antialiased">
      {/* —— Écran d’entrée plein viewport —— */}
      <section
        className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden"
        aria-label="Accueil TrstnWeb"
      >
        {/* Couche colorée (obscurcie ensuite par le verre) */}
        <div
          className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#1a0a2e_0%,#0a1628_25%,#0d2838_45%,#1a3d32_65%,#2d1f3d_85%,#1a0a2e_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_15%,rgba(180,100,255,0.35),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_75%,rgba(0,200,220,0.28),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,160,80,0.15),transparent_45%)]"
          aria-hidden
        />

        {/* Verre : blur fort + voile sombre */}
        <div
          className="absolute inset-0 backdrop-blur-[80px]"
          style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)' }}
          aria-hidden
        />

        {/* Contenu centré (flex parfait) */}
        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-16 sm:px-8">
          <div className="flex w-full max-w-[450px] flex-col items-center gap-6">
            <motion.h1
              className="text-center text-[clamp(2rem,6vw,3rem)] leading-none tracking-[-0.02em] text-[#fafafa]"
              style={{ fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif", fontWeight: 800 }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLux }}
            >
              {SITE.title}
            </motion.h1>

            <div className="flex w-full flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4, ease: easeLux }}
              >
                <Link to="/portfolio" className={glassBtn}>
                  Voir les projets
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.8, ease: easeLux }}
              >
                <a href={SITE.contactEmail} className={glassBtn}>
                  Me contacter
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.8, ease: easeLux }}
              >
                <a href="#about" className={glassBtn}>
                  À propos
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu secondaire (ancres) — en dessous du fold */}
      <section
        id="about"
        className="scroll-mt-6 border-t border-white/[0.06] bg-[#08080a] px-5 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="trstn-heading text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {SITE.about.title}
          </h2>
          <div className="trstn-label mt-8 space-y-6 text-[15px] leading-relaxed text-zinc-400 md:text-base">
            {SITE.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="trstn-label mt-12 text-center text-[12px] text-zinc-600">
            Conçu par <span className="text-zinc-500">{SITE.title}</span>
          </p>
        </div>
      </section>
    </div>
  )
}
