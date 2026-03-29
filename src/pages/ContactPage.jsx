import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Mail, MapPin } from 'lucide-react'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { CONTACT_PROJECT_TYPES, SITE } from '../constants.js'
import { useShellTheme } from '../context/ShellThemeContext.jsx'

const easeLux = [0.22, 1, 0.36, 1]
const FILM_GRAIN =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

const fontSyne = { fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif" }
const fontBody = { fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }

const inputBaseDark =
  'peer w-full rounded-[4px] border-[0.5px] border-white/[0.12] bg-[rgba(255,255,255,0.03)] px-3 pb-2.5 pt-5 text-[14px] text-zinc-100 outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-white/35 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'

const inputBaseLight =
  'peer w-full rounded-[4px] border-[0.5px] border-black/[0.1] bg-white/[0.78] px-3 pb-2.5 pt-5 text-[14px] text-[#1d1d1f] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-black/25 focus:shadow-[0_2px_12px_rgba(0,0,0,0.04)] [color-scheme:light]'

const labelFloatingDark =
  'pointer-events-none absolute left-3 top-1/2 z-[1] origin-left -translate-y-1/2 text-[13px] text-zinc-500 transition-all duration-300 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-[0.72] peer-focus:text-zinc-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-[0.72]'

const labelFloatingLight =
  'pointer-events-none absolute left-3 top-1/2 z-[1] origin-left -translate-y-1/2 text-[13px] text-[#86868b] transition-all duration-300 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-[0.72] peer-focus:text-[#424245] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-[0.72]'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function InstagramGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function ContactLink({ href, children, external }) {
  const { effectiveTheme } = useShellTheme()
  const L = effectiveTheme === 'light'
  const className = L
    ? 'group inline-flex items-center gap-2 text-[14px] text-[#424245] transition-colors hover:text-[#1d1d1f]'
    : 'group inline-flex items-center gap-2 text-[14px] text-zinc-300 transition-colors hover:text-white'
  const inner = (
    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
      {children}
    </span>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    )
  }
  return (
    <a href={href} className={className}>
      {inner}
    </a>
  )
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const { effectiveTheme } = useShellTheme()
  const L = effectiveTheme === 'light'
  const inputBase = L ? inputBaseLight : inputBaseDark
  const labelFloating = L ? labelFloatingLight : labelFloatingDark

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    projectType: false,
    message: false,
  })
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  useEffect(() => {
    const prev = document.title
    document.title = `Contact — ${SITE.title}`
    return () => {
      document.title = prev
    }
  }, [])

  const emailOk = email.length === 0 ? null : emailRe.test(email.trim())
  const nameOk = name.trim().length >= 2
  const projectOk = projectType.length > 0
  const messageOk = message.trim().length >= 12

  const errors = useMemo(() => {
    const show = (field) => touched[field] || attemptedSubmit
    return {
      name: show('name') && !nameOk ? 'Indiquez au moins 2 caractères.' : null,
      email:
        show('email') && email.trim().length === 0
          ? 'L’e-mail est requis.'
          : show('email') && emailOk === false
            ? 'Format d’e-mail invalide.'
            : null,
      projectType: show('projectType') && !projectOk ? 'Choisissez un type de projet.' : null,
      message: show('message') && !messageOk ? 'Décrivez votre besoin (12 caractères min.).' : null,
    }
  }, [nameOk, emailOk, projectOk, messageOk, touched, attemptedSubmit, email])

  const formValid = nameOk && emailOk === true && projectOk && messageOk

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`[TrstnWeb] ${projectType} — ${name.trim()}`)
    const body = encodeURIComponent(
      `Nom : ${name.trim()}\nE-mail : ${email.trim()}\nType : ${projectType}\n\n${message.trim()}`,
    )
    return `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`
  }, [name, email, projectType, message])

  function handleSubmit(e) {
    e.preventDefault()
    setAttemptedSubmit(true)
    if (!formValid) return
    try {
      window.open(mailtoHref, '_blank', 'noopener,noreferrer')
    } catch {
      /* ignore */
    }
    setSubmitted(true)
  }

  const glassSubmit = L
    ? 'trstn-entry-btn group relative flex w-full items-center justify-center overflow-hidden rounded-[6px] border-[0.5px] border-black/[0.08] bg-white/80 px-8 py-4 text-center text-[15px] text-[#1d1d1f] shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-md transition-[transform,box-shadow,background-color] duration-500 hover:bg-white hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45'
    : 'trstn-entry-btn group relative flex w-full items-center justify-center overflow-hidden rounded-[6px] border-0 bg-white/[0.09] px-8 py-4 text-center text-[15px] text-[#fafafa] shadow-[0_4px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-[transform,box-shadow,background-color] duration-500 hover:bg-white/[0.13] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45'

  const projectTypeLabelClass = useMemo(
    () =>
      [
        'pointer-events-none absolute left-3 z-[1] text-[13px] transition-all duration-300',
        projectType
          ? L
            ? 'top-2 scale-[0.72] text-[#6e6e73]'
            : 'top-2 scale-[0.72] text-zinc-400'
          : L
            ? 'top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:scale-[0.72] group-focus-within:text-[#424245]'
            : 'top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:scale-[0.72] group-focus-within:text-zinc-400',
      ].join(' '),
    [projectType, L],
  )

  const ig = SITE.contact?.instagramUrl ?? 'https://www.instagram.com/'
  const locationLabel = SITE.contact?.locationLabel ?? 'France'

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
      />

      {L ? (
        <>
          <div
            className="pointer-events-none fixed inset-0 z-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#f0eef5_0%,#e8ecf2_35%,#eef0e8_65%,#f4f1ec_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed -left-[10%] -top-[5%] z-0 h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(180,160,120,0.1),transparent_62%)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed -bottom-[8%] -right-[12%] z-0 h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(100,120,160,0.08),transparent_58%)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed inset-0 z-0 backdrop-blur-[72px]"
            style={{ backgroundColor: 'rgba(245, 245, 247, 0.75)' }}
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none fixed inset-0 z-0 scale-110 bg-[conic-gradient(from_200deg_at_50%_40%,#1a0a2e_0%,#0a1628_25%,#0d2838_45%,#1a3d32_65%,#2d1f3d_85%,#1a0a2e_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed -left-[10%] -top-[5%] z-0 h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(210,165,90,0.12),transparent_62%)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed -bottom-[8%] -right-[12%] z-0 h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(35,55,120,0.16),transparent_58%)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed inset-0 z-0 backdrop-blur-[72px]"
            style={{ backgroundColor: 'rgba(8, 8, 10, 0.82)' }}
            aria-hidden
          />
        </>
      )}
      <div
        className={['pointer-events-none fixed inset-0 z-[2]', L ? 'opacity-[0.035] mix-blend-multiply' : 'opacity-[0.028]'].join(
          ' ',
        )}
        style={{ backgroundImage: FILM_GRAIN }}
        aria-hidden
      />

      <header
        className={[
          'relative z-20 border-b backdrop-blur-md',
          L ? 'border-black/[0.08] bg-[#F5F5F7]/88' : 'border-white/[0.06] bg-[#050506]/85',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className={[
              'inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] transition-colors',
              L ? 'text-[#6e6e73] hover:text-[#1d1d1f]' : 'text-zinc-500 hover:text-zinc-300',
            ].join(' ')}
            style={fontBody}
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={0.75} aria-hidden />
            Accueil
          </Link>
          <span
            className={['text-[10px] uppercase tracking-[0.35em]', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}
            style={fontSyne}
          >
            {SITE.title}
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 md:pt-14 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
          <div className="lg:col-span-5">
            <motion.h1
              className={[
                'text-left text-[clamp(1.85rem,4.2vw,2.65rem)] font-extrabold leading-[1.08] tracking-[-0.04em]',
                L ? 'text-[#1d1d1f]' : 'text-white',
              ].join(' ')}
              style={fontSyne}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: easeLux }}
            >
              Parlons de votre projet
            </motion.h1>
            <p className={['mt-5 max-w-md text-[15px] leading-relaxed', L ? 'text-[#6e6e73]' : 'text-zinc-500'].join(' ')}>
              Un brief clair, une réponse sous 24h. Partagez votre secteur et vos attentes — le
              reste, on le construit ensemble.
            </p>

            <ul className="mt-10 space-y-6" role="list">
              <li className="flex items-start gap-3">
                <Mail
                  className={['mt-0.5 h-4 w-4 shrink-0', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className={['text-[10px] uppercase tracking-[0.22em]', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}>
                    E-mail
                  </p>
                  <ContactLink href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</ContactLink>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className={['mt-0.5 h-4 w-4 shrink-0', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className={['text-[10px] uppercase tracking-[0.22em]', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}>
                    Localisation
                  </p>
                  <p className={['text-[14px]', L ? 'text-[#424245]' : 'text-zinc-400'].join(' ')}>{locationLabel}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <InstagramGlyph className={['mt-0.5 h-4 w-4 shrink-0', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')} />
                <div>
                  <p className={['text-[10px] uppercase tracking-[0.22em]', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}>
                    Instagram
                  </p>
                  <ContactLink href={ig} external>
                    Suivre sur Instagram
                  </ContactLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative min-h-[min(28rem,70vh)]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -14, filter: 'blur(4px)' }
                    }
                    transition={{ duration: 0.45, ease: easeLux }}
                  >
                    <div className="relative">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder=" "
                        className={inputBase}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        aria-invalid={errors.name ? 'true' : undefined}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                      />
                      <label htmlFor="contact-name" className={labelFloating} style={fontBody}>
                        Nom
                      </label>
                      {errors.name && (
                        <p id="err-name" className="mt-1.5 text-[12px] text-amber-500/90" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder=" "
                        className={inputBase}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        aria-invalid={errors.email ? 'true' : undefined}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                      />
                      <label htmlFor="contact-email" className={labelFloating} style={fontBody}>
                        E-mail
                      </label>
                      {email.length > 0 && emailOk === true && (
                        <p className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-emerald-500/90">
                          ✓
                        </p>
                      )}
                      {errors.email && (
                        <p id="err-email" className="mt-1.5 text-[12px] text-amber-500/90" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="group relative pt-1">
                      <select
                        id="contact-type"
                        name="projectType"
                        className={`${inputBase} cursor-pointer appearance-none pr-10 pt-5 text-[14px] ${L ? 'bg-white/[0.78]' : 'bg-[rgba(255,255,255,0.03)]'} ${projectType ? (L ? 'text-[#1d1d1f]' : 'text-zinc-100') : 'text-transparent'}`}
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, projectType: true }))}
                        aria-invalid={errors.projectType ? 'true' : undefined}
                        aria-describedby={errors.projectType ? 'err-type' : undefined}
                      >
                        <option value="" disabled hidden>
                          {' '}
                        </option>
                        {CONTACT_PROJECT_TYPES.map((t) => (
                          <option key={t} value={t} className={L ? 'bg-white text-[#1d1d1f]' : 'bg-zinc-900 text-zinc-100'}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="contact-type" className={projectTypeLabelClass} style={fontBody}>
                        Type de projet
                      </label>
                      <span
                        className={['pointer-events-none absolute right-3 top-1/2 -translate-y-1/2', L ? 'text-[#86868b]' : 'text-zinc-500'].join(
                          ' ',
                        )}
                        aria-hidden
                      >
                        ▾
                      </span>
                      {errors.projectType && (
                        <p id="err-type" className="mt-1.5 text-[12px] text-amber-500/90" role="alert">
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder=" "
                        className={`${inputBase} min-h-[140px] resize-y align-top`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                        aria-invalid={errors.message ? 'true' : undefined}
                        aria-describedby={errors.message ? 'err-msg' : undefined}
                      />
                      <label htmlFor="contact-message" className={labelFloating} style={fontBody}>
                        Message
                      </label>
                      {errors.message && (
                        <p id="err-msg" className="mt-1.5 text-[12px] text-amber-500/90" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className={glassSubmit}>
                      Envoyer la demande
                    </button>

                    <p
                      className={['pt-2 text-center text-[12px] leading-relaxed', L ? 'text-[#86868b]' : 'text-zinc-600'].join(' ')}
                      style={fontBody}
                    >
                      Chaque projet commence par une conversation.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    className={[
                      'flex min-h-[min(24rem,60vh)] flex-col items-center justify-center rounded-[6px] border-[0.5px] px-6 py-16 text-center backdrop-blur-sm',
                      L
                        ? 'border-black/[0.08] bg-white/75 shadow-[0_2px_24px_rgba(0,0,0,0.05)]'
                        : 'border-white/[0.08] bg-white/[0.03]',
                    ].join(' ')}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: easeLux }}
                  >
                    <p
                      className={[
                        'max-w-md text-[clamp(1.05rem,2.2vw,1.25rem)] font-semibold leading-snug',
                        L ? 'text-[#1d1d1f]' : 'text-zinc-100',
                      ].join(' ')}
                      style={fontSyne}
                    >
                      Merci. Votre message a été transmis à TrstnWeb. Réponse sous 24h.
                    </p>
                    <p className={['mt-4 max-w-sm text-[14px] leading-relaxed', L ? 'text-[#6e6e73]' : 'text-zinc-500'].join(' ')}>
                      Si votre messagerie ne s’est pas ouverte, écrivez directement à{' '}
                      <a
                        href={`mailto:${SITE.contactEmail}`}
                        className={
                          L
                            ? 'text-[#424245] underline decoration-black/15 underline-offset-2 transition-colors hover:text-[#1d1d1f]'
                            : 'text-zinc-300 underline decoration-white/15 underline-offset-2 transition-colors hover:text-white'
                        }
                      >
                        {SITE.contactEmail}
                      </a>
                      .
                    </p>
                    <Link
                      to="/"
                      className={
                        L
                          ? 'trstn-entry-btn mt-10 inline-flex rounded-[6px] border border-black/[0.1] bg-white/80 px-8 py-3 text-[13px] text-[#1d1d1f] shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-colors hover:bg-white'
                          : 'trstn-entry-btn mt-10 inline-flex rounded-[6px] border border-white/[0.12] bg-white/[0.05] px-8 py-3 text-[13px] text-zinc-200 backdrop-blur-sm transition-colors hover:bg-white/[0.09] hover:text-white'
                      }
                    >
                      Retour à l’accueil
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
