import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, BarChart3, Cpu, Zap } from 'lucide-react'
import { ShellLegalFooter } from '../components/shell/ShellLegalFooter.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { TrstnWebLogo } from '../components/shell/TrstnWebLogo.jsx'
import { SITE } from '../constants.js'
import { useShellTheme } from '../context/useShellTheme.js'

const easeOut = [0.22, 1, 0.36, 1]
const FILM_GRAIN =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

const fontSyne = { fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif" }
const fontBody = { fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

function ParallaxSectionTitle({ children, className = '', id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [14, -10])

  return (
    <motion.h2
      ref={ref}
      id={id}
      style={{ ...fontSyne, y }}
      className={['relative', className].filter(Boolean).join(' ')}
    >
      {children}
    </motion.h2>
  )
}

const pillars = [
  {
    Icon: Cpu,
    label: 'Fondations & SEO technique',
    sub: 'Un socle propre pour être trouvé, indexé et crédible — sans dette cachée.',
  },
  {
    Icon: Zap,
    label: 'Rétention & expérience',
    sub: 'Une infrastructure éclair pour capturer chaque lead avant qu’il ne s’échappe.',
  },
  {
    Icon: BarChart3,
    label: 'Croissance mesurable',
    sub: 'Parcours et CTA alignés sur vos revenus, pas sur les tendances.',
  },
]

export default function AboutPage() {
  const { effectiveTheme } = useShellTheme()
  const L = effectiveTheme === 'light'

  useEffect(() => {
    const prev = document.title
    document.title = `À propos | ${SITE.title}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div
      className={[
        'trstn-ui min-h-[100dvh] antialiased',
        L ? 'trstn-shell-light bg-[#F5F5F7] text-[#1d1d1f]' : 'bg-[#050506] text-zinc-200',
      ].join(' ')}
      style={fontBody}
    >
      <ShellThemeToggle className="fixed right-4 top-4 z-[960] md:right-8 md:top-6" />

      <div
        className={[
          'pointer-events-none fixed inset-0 z-[1] mix-blend-overlay',
          L ? 'opacity-[0.04] mix-blend-multiply' : 'opacity-[0.03]',
        ].join(' ')}
        style={{ backgroundImage: FILM_GRAIN }}
        aria-hidden
        tabIndex={-1}
      />

      <header
        className={[
          'relative z-20 border-b backdrop-blur-md',
          L ? 'border-black/[0.08] bg-[#F5F5F7]/90' : 'border-white/[0.06] bg-[#050506]/90',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className={[
              'inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] transition-colors',
              L ? 'trstn-a11y-nav-link-light' : 'trstn-a11y-nav-link-dark',
            ].join(' ')}
            style={fontBody}
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={0.75} aria-hidden tabIndex={-1} focusable="false" />
            Accueil
          </Link>
          <span
            className={['text-[10px] uppercase tracking-[0.35em]', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(' ')}
            style={fontSyne}
          >
            <TrstnWebLogo className="inline" />
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-10 sm:px-8 md:pb-24 md:pt-14 lg:pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.h1
            variants={itemVariants}
            className={[
              'max-w-3xl text-left text-[clamp(1.85rem,4.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.04em]',
              L ? 'text-[#1d1d1f]' : 'text-white',
            ].join(' ')}
            style={fontSyne}
          >
            Votre croissance digitale, architecturée par{' '}
            <TrstnWebLogo as="span" className="inline text-inherit" />
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-14"
          >
            <div className="lg:col-span-7">
            <div className="space-y-12">
              {SITE.about.sections.map((sec) => (
                <section key={sec.id} aria-labelledby={sec.id}>
                  <ParallaxSectionTitle
                    id={sec.id}
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b8a074]"
                  >
                    {sec.eyebrow} — {sec.title}
                  </ParallaxSectionTitle>
                  <p
                    className={[
                      'mt-4 text-[15px] font-normal leading-[1.75] md:text-[16px]',
                      L ? 'text-[#424245]' : 'text-zinc-400',
                    ].join(' ')}
                  >
                    {sec.body}
                  </p>
                </section>
              ))}
            </div>

            <ul
              className={[
                'mt-14 grid grid-cols-1 gap-8 border-t pt-12 sm:grid-cols-3 sm:gap-6',
                L ? 'border-black/[0.06]' : 'border-white/[0.06]',
              ].join(' ')}
              role="list"
            >
              {pillars.map((pillar) => {
                const { label, sub } = pillar
                const PillarGlyph = pillar.Icon
                return (
                  <li key={label} className="flex flex-col gap-2">
                    <PillarGlyph
                      className={['h-6 w-6', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(' ')}
                      strokeWidth={0.5}
                      aria-hidden
                      tabIndex={-1}
                      focusable="false"
                    />
                    <p
                      className={['text-[13px] font-semibold', L ? 'text-[#1d1d1f]' : 'text-zinc-200'].join(
                        ' ',
                      )}
                      style={fontSyne}
                    >
                      {label}
                    </p>
                    <p className={['text-[12px] leading-relaxed', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(' ')}>
                      {sub}
                    </p>
                  </li>
                )
              })}
            </ul>
            </div>

          <aside className="flex flex-col gap-8 lg:col-span-5 lg:pt-2">
            <figure
              className={[
                'relative overflow-hidden rounded-sm shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]',
                L
                  ? 'border border-black/[0.08] bg-white/60'
                  : 'border border-white/[0.08] bg-zinc-900/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
              ].join(' ')}
            >
              <div
                className={[
                  'aspect-[4/5] w-full bg-gradient-to-br',
                  L
                    ? 'from-[#e8eaef] via-[#f0f1f4] to-[#e5e6ea]'
                    : 'from-zinc-800 via-[#12121a] to-[#0a0a10]',
                ].join(' ')}
                role="img"
                aria-label="Espace de travail — placeholder visuel professionnel"
              />
              <div
                className={[
                  'pointer-events-none absolute inset-0 bg-gradient-to-t',
                  L ? 'from-black/25 via-black/10 to-transparent' : 'from-black/75 via-black/35 to-black/20',
                ].join(' ')}
                aria-hidden
                tabIndex={-1}
              />
              <div
                className={['pointer-events-none absolute inset-0', L ? 'opacity-[0.05] mix-blend-multiply' : 'opacity-[0.06]'].join(
                  ' ',
                )}
                style={{ backgroundImage: FILM_GRAIN }}
                aria-hidden
                tabIndex={-1}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className={['text-[11px] uppercase tracking-[0.2em]', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(' ')}>
                  Studio
                </p>
                <p
                  className={['mt-1 text-[13px] italic leading-snug', L ? 'text-[#424245]' : 'text-zinc-300'].join(' ')}
                >
                  Conception & intégration — le détail au service du résultat.
                </p>
              </figcaption>
            </figure>

            <blockquote
              className={[
                'border-l pl-5 text-[15px] leading-relaxed',
                L
                  ? 'border-[#6b5c3e]/35 trstn-a11y-muted-light'
                  : 'border-[#b8a074]/40 trstn-a11y-muted-dark',
              ].join(' ')}
              cite={SITE.title}
            >
              <p className={['italic', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>
                « L&apos;excellence n&apos;est pas un luxe : c&apos;est la seule façon digne de votre
                marque. »
              </p>
              <footer
                className={['mt-3 text-[11px] uppercase tracking-[0.22em]', L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark'].join(
                  ' ',
                )}
              >
                — {SITE.title}
              </footer>
            </blockquote>
          </aside>
          </motion.div>

        <motion.section
          variants={itemVariants}
          className={['mt-20 border-t pt-16 text-center lg:mt-24 lg:pt-20', L ? 'border-black/[0.06]' : 'border-white/[0.06]'].join(
            ' ',
          )}
        >
          <p
            className={[
              'text-[clamp(1.15rem,2.5vw,1.45rem)] font-semibold tracking-[-0.02em]',
              L ? 'text-[#1d1d1f]' : 'text-white',
            ].join(' ')}
            style={fontSyne}
          >
            Prêt à arrêter de perdre des clients en ligne ?
          </p>
          <Link
            to="/contact"
            className={[
              'trstn-entry-btn mt-8 inline-flex items-center justify-center rounded-[6px] border px-10 py-3.5 text-[14px] backdrop-blur-sm transition-[background-color,transform] duration-300',
              L
                ? 'border-black/[0.1] bg-white/70 text-[#1d1d1f] shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:bg-white/90 hover:text-[#0a0a0a]'
                : 'border-white/[0.12] bg-white/[0.05] text-zinc-200 hover:bg-white/[0.09] hover:text-white',
            ].join(' ')}
          >
            {SITE.ctaContact}
          </Link>
        </motion.section>

        <motion.p
          variants={itemVariants}
          className={[
            'pointer-events-none mt-16 text-center text-[9px] font-medium uppercase tracking-[0.42em]',
            L ? 'trstn-a11y-muted-light' : 'trstn-a11y-muted-dark',
          ].join(' ')}
          style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
          aria-hidden
          tabIndex={-1}
        >
          {SITE.title}
        </motion.p>
        </motion.div>

        <ShellLegalFooter light={L} />
      </main>
    </div>
  )
}
