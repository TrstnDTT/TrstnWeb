import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { SITE } from '../constants.js'
import { SITE_METADATA } from '../seo.js'
import { useShellTheme } from '../context/ShellThemeContext.jsx'

export default function MentionsLegalesPage() {
  const { effectiveTheme } = useShellTheme()
  const L = effectiveTheme === 'light'
  const y = new Date().getFullYear()

  useEffect(() => {
    const prev = document.title
    document.title = `Mentions légales | ${SITE.title}`
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
    >
      <ShellThemeToggle className="fixed right-4 top-4 z-[960] md:right-8 md:top-6" />

      <header
        className={[
          'relative z-20 border-b backdrop-blur-md',
          L ? 'border-black/[0.08] bg-[#F5F5F7]/90' : 'border-white/[0.06] bg-[#050506]/90',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className={L ? 'trstn-a11y-nav-link-light text-[13px] font-medium' : 'trstn-a11y-nav-link-dark text-[13px] font-medium'}
          >
            ← Accueil {SITE.title}
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
        <h1
          className={['text-2xl font-extrabold tracking-tight', L ? 'text-[#0a0a0a]' : 'text-white'].join(' ')}
          style={{ fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif" }}
        >
          Mentions légales — {SITE.title}
        </h1>
        <p className={['mt-2 text-[13px]', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>{SITE_METADATA.description}</p>

        <section className="mt-10 space-y-6 text-[15px] leading-relaxed">
          <div>
            <h2 className={['text-[13px] font-semibold uppercase tracking-[0.2em]', L ? 'text-[#0a0a0a]' : 'text-zinc-300'].join(' ')}>
              Éditeur du site
            </h2>
            <p className={['mt-2', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>{SITE.legal.editor}</p>
            <p className={['mt-2', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>
              {SITE.legal.contactLine(SITE.contactEmail)}
            </p>
          </div>
          <div>
            <h2 className={['text-[13px] font-semibold uppercase tracking-[0.2em]', L ? 'text-[#0a0a0a]' : 'text-zinc-300'].join(' ')}>
              Propriété intellectuelle
            </h2>
            <p className={['mt-2', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>
              L’ensemble du site {SITE.title}, sa structure, les textes, visuels et démonstrations de projets sont protégés. Toute reproduction non autorisée est interdite.
            </p>
          </div>
          <div>
            <h2 className={['text-[13px] font-semibold uppercase tracking-[0.2em]', L ? 'text-[#0a0a0a]' : 'text-zinc-300'].join(' ')}>
              Hébergement
            </h2>
            <p className={['mt-2', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>{SITE.legal.hosting}</p>
          </div>
          <div>
            <h2 className={['text-[13px] font-semibold uppercase tracking-[0.2em]', L ? 'text-[#0a0a0a]' : 'text-zinc-300'].join(' ')}>
              Données personnelles
            </h2>
            <p className={['mt-2', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>{SITE.legal.dataNotice}</p>
          </div>
          <p className={['text-[12px]', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>{SITE.legal.copyright(y)}</p>
        </section>
      </main>
    </div>
  )
}
