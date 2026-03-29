/**
 * Bar Basque — lieu hybride chaleureux : café, cuisine, bières.
 * Single-page, images `/public/bar-basque/`, réservation par mailto + modal glass.
 */
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Check, X } from 'lucide-react'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'

const easeLux = [0.22, 1, 0.36, 1]

const BG = '#121210'
const BG_DEEP = '#1A1A17'
const TEXT = '#FAF0E6'
const TERRA = '#C36B46'
const SAGE = '#889C81'

const maskChild = {
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
  show: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.88, ease: easeLux },
  },
}

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
}

function MenuRow({ name, price, bodyFont }) {
  return (
    <div
      className="flex items-end gap-2"
      style={{ fontFamily: bodyFont, lineHeight: 1.85 }}
    >
      <span className="min-w-0 shrink text-[15px] text-[#FAF0E6] md:text-[16px]">{name}</span>
      <span
        className="mb-[0.4em] min-h-[1px] min-w-[12px] flex-1 border-b border-dotted border-[#FAF0E6]/22"
        aria-hidden
      />
      <span className="shrink-0 tabular-nums text-[15px] text-[#FAF0E6]/95 md:text-[16px]">
        {price}
      </span>
    </div>
  )
}

function ParallaxFigure({ src, alt, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [18, -18])

  return (
    <motion.figure ref={ref} style={{ y }} className={className}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </motion.figure>
  )
}

export function BarBasqueExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const modalTitleId = useId()
  const assets = site.barBasqueAssets ?? {
    hero: '/bar-basque/SteakDish.png',
    menuContext: '/bar-basque/Menu.png',
    gallery: ['/bar-basque/SteakDish.png', '/bar-basque/Menu.png', '/bar-basque/FishDish.png'],
  }

  const heading = site.fontFamilyHeading ?? '"Syne", system-ui, sans-serif'
  const body = site.fontFamilyBody ?? '"Lora", Georgia, serif'

  const [modalOpen, setModalOpen] = useState(false)
  const [resName, setResName] = useState('')
  const [resEmail, setResEmail] = useState('')
  const [resWhen, setResWhen] = useState('')
  const [resGuests, setResGuests] = useState('2')
  const [resSuccess, setResSuccess] = useState(false)

  const openModal = useCallback(() => {
    setModalOpen(true)
    setResSuccess(false)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setResSuccess(false)
  }, [])

  useEffect(() => {
    if (!modalOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [modalOpen])

  const handleReserve = (e) => {
    e.preventDefault()
    const n = resName.trim()
    const em = resEmail.trim()
    const when = resWhen.trim()
    const g = resGuests.trim()
    if (!n || !em || !when) return
    const to = SITE.contactEmail
    const subject = encodeURIComponent('[Bar Basque] Demande de réservation')
    const bodyText = encodeURIComponent(
      `Nom : ${n}\nE-mail : ${em}\nDate / heure souhaitées : ${when}\nNombre de personnes : ${g || '—'}\n`,
    )
    try {
      window.open(`mailto:${to}?subject=${subject}&body=${bodyText}`, '_blank', 'noopener,noreferrer')
    } catch {
      /* ignore */
    }
    setResSuccess(true)
  }

  const variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : maskChild

  const stagger = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.25 } } }
    : containerStagger

  const headline =
    site.hero?.headline ??
    'Café, Cuisine, Bière. Bar Basque — Un lieu de rencontres humaines.'

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden antialiased"
      style={{ backgroundColor: BG, color: TEXT, fontFamily: body }}
    >
      <style>{`
        .bb-h { font-family: ${heading}; font-weight: 800; letter-spacing: -0.03em; }
      `}</style>

      <BackButton onClick={onBack} site={site} />

      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        variants={stagger}
        className="relative z-0"
      >
        {/* —— Hero —— */}
        <motion.section
          id="bb-hero"
          variants={variants}
          className="relative flex min-h-[min(92dvh,820px)] flex-col justify-end"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={assets.hero}
              alt=""
              className="h-[118%] w-full scale-105 object-cover blur-[3px] brightness-[0.72]"
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${BG_DEEP}55 0%, ${BG}cc 45%, ${BG}f2 100%)`,
              }}
              aria-hidden
            />
          </div>

          <div className="relative z-[1] px-5 pb-16 pt-28 sm:px-10 md:pb-24 md:pt-32">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#FAF0E6]/55">
              {site.tagline}
            </p>
            <h1 className="bb-h mt-5 max-w-4xl text-[clamp(1.65rem,4.5vw,2.75rem)] leading-[1.12] text-[#FAF0E6]">
              {headline}
            </h1>
            <div className="mt-10">
              <button
                type="button"
                onClick={openModal}
                className="bb-h inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-[6px] border-[0.5px] border-white/[0.14] bg-white/[0.07] px-8 py-3.5 text-[13px] text-[#FAF0E6] shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition-[background-color,transform] duration-300 hover:bg-white/[0.11] active:scale-[0.99]"
              >
                Réserver une table
              </button>
            </div>
          </div>
        </motion.section>

        {/* —— About —— */}
        <motion.section
          id="bb-about"
          variants={variants}
          className="scroll-mt-20 px-5 py-20 sm:px-10 md:py-28"
          style={{ backgroundColor: BG_DEEP }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="bb-h text-[clamp(1.35rem,3vw,1.85rem)] text-[#FAF0E6]" style={{ color: TERRA }}>
              {site.about?.title ?? 'Notre maison'}
            </h2>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.85] text-[#FAF0E6]/78 md:text-[17px]">
              {(site.about?.paragraphs ?? []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* —— Menu —— */}
        <motion.section
          id="bb-menu"
          variants={variants}
          className="scroll-mt-20 px-5 py-20 sm:px-10 md:py-28"
          style={{ backgroundColor: BG }}
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="bb-h text-center text-[clamp(1.5rem,3.2vw,2rem)] text-[#FAF0E6]">Le Menu</h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-[14px] leading-relaxed text-[#FAF0E6]/55">
              Carte indicatives — produits locaux & saisons.
            </p>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_min(300px,34%)] lg:gap-14">
              <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
                <div>
                  <h3
                    className="bb-h text-[12px] uppercase tracking-[0.28em]"
                    style={{ color: TERRA }}
                  >
                    Côté Café
                  </h3>
                  <div className="mt-6 space-y-5">
                    <MenuRow name="Expresso" price="3€" bodyFont={body} />
                    <MenuRow name="Flat White" price="4,50€" bodyFont={body} />
                  </div>
                </div>
                <div>
                  <h3
                    className="bb-h text-[12px] uppercase tracking-[0.28em]"
                    style={{ color: TERRA }}
                  >
                    Côté Bières & Vins
                  </h3>
                  <div className="mt-6 space-y-5">
                    <MenuRow name="Bière artisanale pression (0,5 L)" price="6€" bodyFont={body} />
                    <MenuRow name="Verre d’Irouléguy" price="7€" bodyFont={body} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3
                    className="bb-h text-[12px] uppercase tracking-[0.28em]"
                    style={{ color: TERRA }}
                  >
                    Côté Cuisine
                  </h3>
                  <div className="mt-6 space-y-5">
                    <MenuRow
                      name="Axoa de veau traditionnel — plat signature"
                      price="18€"
                      bodyFont={body}
                    />
                    <MenuRow
                      name="Planche mixte de charcuterie basque"
                      price="22€"
                      bodyFont={body}
                    />
                    <p className="pt-2 text-[12px] uppercase tracking-[0.2em] text-[#FAF0E6]/45">
                      Petit creux
                    </p>
                    <MenuRow name="Croquetas maison" price="9€" bodyFont={body} />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[4px] border-[0.5px] border-white/[0.12] lg:sticky lg:top-28 lg:self-start">
                <img
                  src={assets.menuContext}
                  alt="Ambiance carte et comptoir"
                  className="aspect-[3/4] w-full object-cover md:aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* —— Galerie —— */}
        <motion.section
          id="bb-galerie"
          variants={variants}
          className="scroll-mt-20 px-5 py-20 sm:px-10 md:py-28"
          style={{ backgroundColor: BG_DEEP }}
        >
          <h2 className="bb-h text-center text-[clamp(1.35rem,2.8vw,1.75rem)] text-[#FAF0E6]">
            Galerie
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-[13px] text-[#FAF0E6]/50">
            Quelques images du quotidien au Bar Basque.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {assets.gallery.map((src, i) => (
              <div
                key={src + i}
                className="overflow-hidden rounded-[4px] border-[0.5px] border-white/[0.12] bg-[#0c0c0a]"
              >
                <ParallaxFigure
                  src={src}
                  alt={
                    i === 0
                      ? 'Plat chaud — cuisine basque'
                      : i === 1
                        ? 'Carte et sélection au comptoir'
                        : 'Poisson du marché'
                  }
                  className="aspect-[4/3] w-full sm:aspect-[3/4]"
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* —— Réservation —— */}
        <motion.section
          id="bb-reservation"
          variants={variants}
          className="scroll-mt-20 px-5 py-20 sm:px-10 md:py-28"
          style={{ backgroundColor: BG }}
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="bb-h text-[clamp(1.35rem,2.8vw,1.75rem)] text-[#FAF0E6]">Réservation</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#FAF0E6]/65">
              Indiquez vos préférences — nous vous confirmons par retour d’e-mail.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="bb-h mt-10 inline-flex min-h-[48px] w-full max-w-sm items-center justify-center rounded-[6px] border-[0.5px] border-white/[0.14] bg-white/[0.07] px-8 py-3.5 text-[13px] text-[#FAF0E6] backdrop-blur-md transition-[background-color] hover:bg-white/[0.1] sm:w-auto"
            >
              Ouvrir le formulaire
            </button>
          </div>
        </motion.section>

        {/* Footer signature */}
        <motion.footer
          variants={variants}
          className="border-t border-white/[0.06] px-5 py-12 text-center sm:px-10"
          style={{ backgroundColor: BG_DEEP }}
        >
          <p className="text-[12px] leading-relaxed text-[#FAF0E6]/45">
            {site.location?.street}, {site.location?.city} — {site.location?.hours}
          </p>
          <p className="mt-6 text-[11px] tracking-[0.08em] text-[#FAF0E6]/38">
            Conçu avec soin par{' '}
            <span className="text-[#FAF0E6]/55" style={{ fontFamily: heading }}>
              TrstnWeb
            </span>{' '}
            pour le Bar Basque.
          </p>
        </motion.footer>
      </motion.div>

      {/* Modal réservation */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[1100] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              aria-label="Fermer"
              onClick={closeModal}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              className="relative z-[1] w-full max-w-md overflow-hidden rounded-[8px] border-[0.5px] border-white/[0.14] bg-[#1A1A17]/92 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: easeLux }}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 id={modalTitleId} className="bb-h text-lg text-[#FAF0E6]">
                  Réserver une table
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full p-1 text-[#FAF0E6]/50 transition-colors hover:text-[#FAF0E6]"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              {!resSuccess ? (
                <form onSubmit={handleReserve} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="bb-nom" className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50">
                      Nom
                    </label>
                    <input
                      id="bb-nom"
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      required
                      className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none ring-0 transition-[border-color] focus:border-white/35"
                      style={{ fontFamily: body }}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="bb-email" className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50">
                      E-mail
                    </label>
                    <input
                      id="bb-email"
                      type="email"
                      value={resEmail}
                      onChange={(e) => setResEmail(e.target.value)}
                      required
                      className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35"
                      style={{ fontFamily: body }}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="bb-when" className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50">
                      Date & heure souhaitées
                    </label>
                    <input
                      id="bb-when"
                      type="datetime-local"
                      value={resWhen}
                      onChange={(e) => setResWhen(e.target.value)}
                      required
                      className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35 [color-scheme:dark]"
                      style={{ fontFamily: body }}
                    />
                  </div>
                  <div>
                    <label htmlFor="bb-guests" className="block text-[11px] uppercase tracking-[0.2em] text-[#FAF0E6]/50">
                      Nombre de personnes
                    </label>
                    <input
                      id="bb-guests"
                      type="number"
                      min={1}
                      max={24}
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="mt-2 w-full rounded-[4px] border-[0.5px] border-white/[0.14] bg-white/[0.04] px-3 py-2.5 text-[15px] text-[#FAF0E6] outline-none focus:border-white/35"
                      style={{ fontFamily: body }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bb-h mt-2 w-full rounded-[6px] border-0 bg-white/[0.1] py-3.5 text-[13px] text-[#FAF0E6] backdrop-blur-sm transition-[background-color] hover:bg-white/[0.14]"
                  >
                    Réserver
                  </button>
                </form>
              ) : (
                <div className="mt-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05]">
                    <Check className="h-6 w-6" strokeWidth={1.75} style={{ color: SAGE }} aria-hidden />
                  </div>
                  <p className="mt-6 text-[15px] leading-relaxed text-[#FAF0E6]/85" style={{ fontFamily: body }}>
                    Merci. Votre demande de réservation a été envoyée au Bar Basque.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bb-h mt-8 text-[12px] uppercase tracking-[0.2em] text-[#FAF0E6]/55 hover:text-[#FAF0E6]"
                  >
                    Fermer
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
