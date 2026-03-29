import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SITE } from '../constants.js'

/** Courbes « fluides » — lourd, organique, pas mécanique */
const easeLux = [0.22, 1, 0.36, 1]

/** Grain film — même motif que le shell portfolio, opacité papier */
const FILM_GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const fontBtnSerif = {
  fontFamily: "'Lora', Georgia, serif",
  fontStyle: 'italic',
  fontWeight: 400,
}

export default function HomePage() {
  const glassBtnOutline =
    'trstn-entry-btn group relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-white/[0.12] bg-transparent px-8 py-4 text-center text-[#f0f0f0] shadow-none backdrop-blur-sm transition-[transform,box-shadow,background-color] duration-500 hover:border-white/[0.18] hover:bg-white/[0.04] active:scale-[0.99]'

  const glassBtnPrimary =
    'trstn-entry-btn group relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-0 bg-white/[0.09] px-8 py-4 text-center text-[#fafafa] shadow-[0_4px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-[transform,box-shadow,background-color] duration-500 hover:bg-white/[0.13] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] active:scale-[0.99]'

  return (
    <div className="trstn-ui min-h-[100dvh] bg-[#050506] text-[#fafafa] antialiased">
      {/* Grain global — texture papier / pellicule */}
      <div
        className="pointer-events-none fixed inset-0 z-[5] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: FILM_GRAIN_SVG }}
        aria-hidden
      />

      {/* —— Écran d’entrée plein viewport —— */}
      <section
        className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden"
        aria-label="Accueil TrstnWeb"
      >
        {/* Fond de base */}
        <div
          className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#1a0a2e_0%,#0a1628_25%,#0d2838_45%,#1a3d32_65%,#2d1f3d_85%,#1a0a2e_100%)]"
          aria-hidden
        />
        {/* Lueurs asymétriques — ambre haut-gauche, bleu profond bas-droite */}
        <div
          className="pointer-events-none absolute -left-[10%] -top-[5%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(210,165,90,0.14),transparent_62%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-[8%] -right-[12%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(35,55,120,0.18),transparent_58%)] blur-3xl"
          aria-hidden
        />

        {/* Verre */}
        <div
          className="absolute inset-0 backdrop-blur-[80px]"
          style={{ backgroundColor: 'rgba(10, 10, 10, 0.78)' }}
          aria-hidden
        />

        {/* Grain section hero (renforce la couche verre) */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
          style={{ backgroundImage: FILM_GRAIN_SVG }}
          aria-hidden
        />

        {/* Bloc central — centrage optique légèrement haut (~5%) */}
        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-16 sm:px-8">
          <div className="-translate-y-[5%] flex w-full max-w-[min(28rem,92vw)] flex-col items-center gap-7 sm:max-w-[450px]">
            <motion.h1
              className="w-full pl-[2px] text-left text-[clamp(2.1rem,6.2vw,3.15rem)] leading-[0.95] text-[#fafafa]"
              style={{
                fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 800,
                letterSpacing: '-0.05em',
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLux }}
            >
              {SITE.title}
            </motion.h1>

            <div className="flex w-full flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4, ease: easeLux }}
              >
                <Link to="/portfolio" className={glassBtnPrimary}>
                  <span className="inline-flex items-center justify-center gap-0">
                    <span
                      className="inline-block text-[15px] tracking-[0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 md:text-base"
                      style={fontBtnSerif}
                    >
                      Voir les projets
                    </span>
                    <span
                      className="inline-block max-w-0 overflow-hidden text-[15px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[1.25em] group-hover:opacity-100 md:text-base"
                      style={fontBtnSerif}
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.55, ease: easeLux }}
              >
                <Link to="/contact" className={glassBtnOutline}>
                  <span className="inline-flex items-center justify-center gap-0">
                    <span
                      className="inline-block text-[15px] tracking-[0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 md:text-base"
                      style={fontBtnSerif}
                    >
                      Me contacter
                    </span>
                    <span
                      className="inline-block max-w-0 overflow-hidden text-[15px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[1.25em] group-hover:opacity-100 md:text-base"
                      style={fontBtnSerif}
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.7, ease: easeLux }}
              >
                <Link to="/about" className={glassBtnOutline}>
                  <span className="inline-flex items-center justify-center gap-0">
                    <span
                      className="inline-block text-[15px] tracking-[0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 md:text-base"
                      style={fontBtnSerif}
                    >
                      À propos
                    </span>
                    <span
                      className="inline-block max-w-0 overflow-hidden text-[15px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[1.25em] group-hover:opacity-100 md:text-base"
                      style={fontBtnSerif}
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] bg-[#08080a] px-5 py-16 sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="trstn-label max-w-lg text-[15px] leading-relaxed text-zinc-400 md:text-base">
            Studio indépendant — interfaces React sur-mesure, identité et conversion. Le récit
            complet : méthode, promesse et contact.
          </p>
          <Link
            to="/about"
            className="trstn-entry-btn inline-flex rounded-[6px] border border-white/[0.1] bg-white/[0.04] px-8 py-3 text-[13px] text-zinc-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            Lire la présentation
          </Link>
          <p className="trstn-label text-[12px] text-zinc-600">
            Conçu par <span className="text-zinc-500">{SITE.title}</span>
          </p>
        </div>
      </section>
    </div>
  )
}
