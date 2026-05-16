import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { ShellLegalFooter } from '../components/shell/ShellLegalFooter.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { TrstnWebLogo } from '../components/shell/TrstnWebLogo.jsx'
import { HOME_FEATURED_SITE_IDS, SITE } from '../constants.js'
import { useShellTheme } from '../context/useShellTheme.js'
import { getSiteById } from '../data.js'
import { SITE_METADATA } from '../seo.js'

/** Courbes « fluides » — lourd, organique, pas mécanique */
const easeLux = [0.22, 1, 0.36, 1]

/** Grain film — même motif que le shell portfolio, opacité papier */
const FILM_GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const fontBtnSerif = {
  fontFamily: "'Lora', Georgia, serif",
  fontStyle: 'italic',
  fontWeight: 400,
}

const fontValeurSerif = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
}

const VALEUR_PILLARS = [
  {
    title: 'Accompagnement national.',
    body: 'Un partenaire à vos côtés, même à distance, pour développer votre activité partout en France.',
  },
  {
    title: 'Rétention.',
    body: 'Vos prospects partent ailleurs ? Nous les retenons avec des interfaces premium.',
  },
  {
    title: 'Performance.',
    body: 'Des parcours orientés conversion pour transformer vos visiteurs en clients.',
  },
]

/** CTA principal — léger effet magnétique (réduit si prefers-reduced-motion). */
function HomeMagneticCta({ to, children, className }) {
  const wrap = useRef(null)
  const [off, setOff] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  const move = useCallback(
    (e) => {
      if (reduce) return
      const el = wrap.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      setOff({ x: (e.clientX - cx) * 0.1, y: (e.clientY - cy) * 0.1 })
    },
    [reduce],
  )

  const leave = useCallback(() => {
    if (!reduce) setOff({ x: 0, y: 0 })
  }, [reduce])

  return (
    <div ref={wrap} className="w-full" onMouseMove={move} onMouseLeave={leave}>
      <Link
        to={to}
        className={className}
        style={{
          transform: reduce ? undefined : `translate(${off.x}px, ${off.y}px)`,
          transition: reduce ? undefined : 'transform 0.2s ease-out',
        }}
      >
        {children}
      </Link>
    </div>
  )
}

export default function HomePage() {
  const { effectiveTheme } = useShellTheme()
  const L = effectiveTheme === 'light'
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const prev = document.title
    document.title = SITE_METADATA.title
    return () => {
      document.title = prev
    }
  }, [])

  /** Ghost — bordure fine, fond transparent (références, à propos, secondaires). */
  const ghostBtn = L
    ? 'trstn-entry-btn group relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-black/[0.14] bg-transparent px-8 py-4 text-center text-[#1d1d1f] shadow-none backdrop-blur-sm transition-all duration-500 hover:border-black/[0.22] hover:bg-black/[0.03] hover:tracking-[0.2em] active:scale-[0.99]'
    : 'trstn-entry-btn group relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-white/[0.14] bg-transparent px-8 py-4 text-center text-[#f0f0f0] shadow-none backdrop-blur-sm transition-all duration-500 hover:border-white/[0.22] hover:bg-white/[0.04] hover:tracking-[0.2em] active:scale-[0.99]'

  /** CTA principal — blanc (clair) ou or #D4AF37 (sombre), texte noir. */
  const primaryCta = L
    ? 'group trstn-entry-btn relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-black/[0.06] bg-white px-8 py-4 text-center text-[#0a0a0a] shadow-[0_4px_22px_rgba(0,0,0,0.07)] transition-all duration-500 hover:tracking-[0.2em] active:scale-[0.99] trstn-home-cta-primary--light'
    : 'group trstn-entry-btn relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-[#c9a227]/45 bg-[#D4AF37] px-8 py-4 text-center text-[#0a0a0a] shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-500 hover:tracking-[0.2em] active:scale-[0.99] trstn-home-cta-primary--dark'

  const heroH1Gradient = L
    ? 'bg-gradient-to-br from-[#6e6e73] via-[#2e2e32] to-[#0a0a0c] bg-clip-text text-transparent'
    : 'bg-gradient-to-br from-[#b4b4bc] via-[#e8e8ec] to-white bg-clip-text text-transparent'

  return (
    <div
      className={[
        'trstn-ui min-h-[100dvh] antialiased',
        L ? 'trstn-home-light bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#050506] text-[#fafafa]',
      ].join(' ')}
    >
      <ShellThemeToggle className="fixed right-4 top-4 z-[300] md:right-8 md:top-6" />

      <main id="contenu-principal">
      {/* —— Mobile : app native — plein écran, carrousel, CTA unique —— */}
      <section
        className="relative block min-h-[100dvh] md:hidden"
        aria-label="Accueil TrstnWeb — mobile"
      >
        {L ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#f2f0f8_0%,#e8ecf4_30%,#eef2ea_60%,#f4f1ec_100%)]"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="absolute inset-0 backdrop-blur-[48px]"
              style={{ backgroundColor: 'rgba(245, 245, 247, 0.78)' }}
              aria-hidden
              tabIndex={-1}
            />
          </>
        ) : (
          <>
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#1a0a2e_0%,#0a1628_25%,#0d2838_45%,#1a3d32_65%,#2d1f3d_85%,#1a0a2e_100%)]"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="absolute inset-0 backdrop-blur-[48px]"
              style={{ backgroundColor: 'rgba(10, 10, 10, 0.82)' }}
              aria-hidden
              tabIndex={-1}
            />
          </>
        )}
        <div
          className={[
            'pointer-events-none absolute inset-0 z-[1] opacity-[0.035]',
            L ? 'trstn-home-grain' : '',
          ].join(' ')}
          style={{ backgroundImage: FILM_GRAIN_SVG }}
          aria-hidden
          tabIndex={-1}
        />
        <div className="relative z-10 flex min-h-[100dvh] flex-col px-5 pb-[calc(6.25rem+env(safe-area-inset-bottom))] pt-[calc(3.25rem+env(safe-area-inset-top))]">
          <div className="flex min-h-0 flex-1 flex-col justify-center py-6">
            <motion.div
              className="flex w-full flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: easeLux }}
            >
              <div className="w-full max-w-[min(18rem,88vw)]">
                <TrstnWebLogo className="trstn-heading block w-full tracking-[0.2em] sm:tracking-[0.24em]" />
              </div>
              <p
                className={[
                  'mt-5 max-w-md text-[clamp(1.05rem,4.2vw,1.35rem)] font-extrabold leading-[1.2] tracking-[-0.03em]',
                  heroH1Gradient,
                ].join(' ')}
                style={{
                  fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif",
                }}
              >
                {SITE.home.heroH1}
              </p>
            </motion.div>
          </div>
          <div className="min-h-0 shrink-0">
            <div
              className="trstn-scroll-hide flex min-h-[46vh] snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {HOME_FEATURED_SITE_IDS.map((siteId) => {
                const site = getSiteById(siteId)
                if (!site) return null
                return (
                  <article
                    key={siteId}
                    className="w-[86vw] max-w-md shrink-0 snap-center first:ml-1 last:mr-1"
                  >
                    <div
                      className={[
                        'overflow-hidden rounded-[1.65rem] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]',
                        L ? 'border border-black/[0.06]' : 'border border-white/[0.08]',
                      ].join(' ')}
                    >
                      <ProjectPreview
                        site={site}
                        className="min-h-[40vh] sm:min-h-[44vh]"
                      />
                    </div>
                    <p
                      className={[
                        'mt-4 text-center text-[16px] font-medium leading-snug',
                        L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark',
                      ].join(' ')}
                      style={fontBtnSerif}
                    >
                      {site.name}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
          <div className="mt-5 flex w-full shrink-0 flex-col">
            <HomeMagneticCta to="/tarifs" className={primaryCta}>
              <span
                className="inline-flex items-center justify-center gap-2 text-[16px] font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
              >
                <Zap className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden />
                Lancer ma croissance
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.7} aria-hidden />
              </span>
            </HomeMagneticCta>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/portfolio"
                className={[
                  'flex min-h-[46px] w-full items-center justify-center rounded-2xl border-[0.5px] text-[15px] font-medium transition-all duration-500 hover:tracking-[0.2em] active:scale-[0.98]',
                  L
                    ? 'border-black/[0.14] bg-transparent text-[#1d1d1f] hover:border-black/[0.22] hover:bg-black/[0.03]'
                    : 'border-white/[0.14] bg-transparent text-[#f0f0f0] hover:border-white/[0.22] hover:bg-white/[0.04]',
                ].join(' ')}
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
              >
                {SITE.home.ctaProjects}
              </Link>
              <Link
                to="/about"
                className={[
                  'flex min-h-[46px] w-full items-center justify-center rounded-2xl border-[0.5px] text-[15px] font-medium transition-all duration-500 hover:tracking-[0.2em] active:scale-[0.98]',
                  L
                    ? 'border-black/[0.14] bg-transparent text-[#1d1d1f] hover:border-black/[0.22] hover:bg-black/[0.03]'
                    : 'border-white/[0.14] bg-transparent text-[#f0f0f0] hover:border-white/[0.22] hover:bg-white/[0.04]',
                ].join(' ')}
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
              >
                À propos
              </Link>
            </div>
          </div>
          <p
            className={[
              'mt-5 text-center text-[15px]',
              L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark',
            ].join(' ')}
          >
            {SITE.home.carouselHint}
          </p>
        </div>
      </section>

      {/* Grain global — desktop uniquement (mobile : grain dans la section dédiée) */}
      <div
        className={[
          'pointer-events-none fixed inset-0 z-[5] hidden mix-blend-overlay md:block',
          L ? 'trstn-home-grain opacity-[0.04]' : 'opacity-[0.03]',
        ].join(' ')}
        style={{ backgroundImage: FILM_GRAIN_SVG }}
        aria-hidden
        tabIndex={-1}
      />

      <section
        className="relative hidden min-h-[100dvh] w-full flex-col overflow-hidden md:flex"
        aria-label="Accueil TrstnWeb — bureau"
      >
        {L ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#f2f0f8_0%,#e8ecf4_30%,#eef2ea_60%,#f4f1ec_100%)]"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="pointer-events-none absolute -left-[10%] -top-[5%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(180,160,120,0.12),transparent_62%)] blur-3xl"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="pointer-events-none absolute -bottom-[8%] -right-[12%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(100,120,160,0.1),transparent_58%)] blur-3xl"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="absolute inset-0 backdrop-blur-[80px]"
              style={{ backgroundColor: 'rgba(245, 245, 247, 0.72)' }}
              aria-hidden
              tabIndex={-1}
            />
          </>
        ) : (
          <>
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#1a0a2e_0%,#0a1628_25%,#0d2838_45%,#1a3d32_65%,#2d1f3d_85%,#1a0a2e_100%)]"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="pointer-events-none absolute -left-[10%] -top-[5%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(210,165,90,0.14),transparent_62%)] blur-3xl"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="pointer-events-none absolute -bottom-[8%] -right-[12%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(35,55,120,0.18),transparent_58%)] blur-3xl"
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="absolute inset-0 backdrop-blur-[80px]"
              style={{ backgroundColor: 'rgba(10, 10, 10, 0.78)' }}
              aria-hidden
              tabIndex={-1}
            />
          </>
        )}

        <div
          className={[
            'pointer-events-none absolute inset-0 z-[1]',
            L ? 'trstn-home-grain opacity-[0.035]' : 'opacity-[0.03]',
          ].join(' ')}
          style={{ backgroundImage: FILM_GRAIN_SVG }}
          aria-hidden
          tabIndex={-1}
        />

        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-16 sm:px-8">
          <div className="flex w-full max-w-[min(28rem,92vw)] flex-col items-center gap-8 text-center sm:max-w-[450px]">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeLux }}
            >
              <TrstnWebLogo className="trstn-heading block w-full tracking-[0.2em] sm:tracking-[0.26em]" />
              <h1
                className={[
                  'mt-6 max-w-lg text-center text-[clamp(1.15rem,2.8vw,1.5rem)] font-extrabold leading-[1.2] tracking-[-0.03em]',
                  heroH1Gradient,
                ].join(' ')}
                style={{
                  fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif",
                }}
              >
                {SITE.home.heroH1}
              </h1>
            </motion.div>

            <div className="flex w-full flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: easeLux }}
              >
                <HomeMagneticCta to="/tarifs" className={primaryCta}>
                  <span className="inline-flex w-full items-center justify-center gap-2">
                    <Zap className="h-4 w-4 shrink-0 md:h-[18px] md:w-[18px]" strokeWidth={1.8} aria-hidden />
                    <span
                      className="inline-block text-[15px] tracking-[0.02em] md:text-base"
                      style={fontBtnSerif}
                    >
                      Lancer ma croissance
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 md:h-[18px] md:w-[18px]" strokeWidth={1.7} aria-hidden />
                  </span>
                </HomeMagneticCta>
              </motion.div>

              <div className="mt-7 flex w-full flex-col gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.42, ease: easeLux }}
                >
                  <Link to="/portfolio" className={ghostBtn}>
                    <span className="inline-flex items-center justify-center gap-0">
                      <span
                        className="inline-block text-[15px] tracking-[0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 md:text-base"
                        style={fontBtnSerif}
                      >
                        {SITE.home.ctaProjects}
                      </span>
                      <span
                        className="inline-block max-w-0 overflow-hidden text-[15px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[1.25em] group-hover:opacity-100 md:text-base"
                        style={fontBtnSerif}
                        aria-hidden
                        tabIndex={-1}
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.52, ease: easeLux }}
                >
                  <Link to="/about" className={ghostBtn}>
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
                        tabIndex={-1}
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#050506] px-5 py-20 text-[#fafafa] sm:px-8 md:py-28"
        aria-labelledby="home-valeur-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: reduceMotion ? 0 : 0.75, ease: easeLux }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
          style={{ backgroundImage: FILM_GRAIN_SVG }}
          aria-hidden
          tabIndex={-1}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2
            id="home-valeur-heading"
            className="mx-auto max-w-3xl text-center text-[clamp(1.45rem,3.4vw,2.15rem)] font-light leading-[1.25] tracking-[-0.02em] text-[#f5f5f4]"
            style={fontValeurSerif}
          >
            L'expertise à distance au service de votre conversion.
          </h2>
          <div className="mt-14 grid gap-12 sm:gap-14 md:grid-cols-3 md:gap-10">
            {VALEUR_PILLARS.map(({ title, body }) => (
              <article key={title} className="text-center md:text-left">
                <h3
                  className="text-[clamp(1.12rem,2vw,1.32rem)] font-medium leading-snug text-[#f0ece0]"
                  style={fontValeurSerif}
                >
                  {title}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-relaxed text-white/[0.68]"
                  style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section
        className={[
          'relative hidden border-t px-5 py-16 sm:px-10 md:block',
          L ? 'border-black/[0.06] bg-[#ececee]' : 'border-white/[0.06] bg-[#08080a]',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p
            className={[
              'trstn-label max-w-lg text-[15px] leading-relaxed md:text-base',
              L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark',
            ].join(' ')}
          >
            {SITE.home.bottomPitch}
          </p>
          <Link
            to="/about"
            className={[
              'trstn-entry-btn inline-flex rounded-[6px] px-8 py-3 text-[13px] transition-colors',
              L
                ? 'border border-black/[0.1] bg-white/75 text-[#0a0a0a] shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:bg-white hover:text-black'
                : 'border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white',
            ].join(' ')}
          >
            {SITE.home.bottomCta}
          </Link>
          <p className={['trstn-label text-[12px]', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(' ')}>
            Conçu par{' '}
            <TrstnWebLogo as="span" className={L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'} />
          </p>
        </div>
      </section>

      <ShellLegalFooter light={L} />
      </main>
    </div>
  )
}
