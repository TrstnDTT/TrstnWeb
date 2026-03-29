/**
 * Bar Basque — lieu hybride chaleureux : café, cuisine, bières.
 * Single-page, images `/public/bar-basque/`, réservation par mailto + modal glass.
 */
import { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

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
  const assets = site.barBasqueAssets ?? {
    hero: '/bar-basque/SteakDish.png',
    menuContext: '/bar-basque/Menu.png',
    gallery: ['/bar-basque/SteakDish.png', '/bar-basque/Menu.png', '/bar-basque/FishDish.png'],
  }

  const heading = site.fontFamilyHeading ?? '"Syne", system-ui, sans-serif'
  const body = site.fontFamilyBody ?? '"Lora", Georgia, serif'

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

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

      <ReservationMailtoModal
        open={modalOpen}
        onClose={closeModal}
        venueName="Bar Basque"
        accentColor={SAGE}
        fontFamilyBody={body}
        fontFamilyHeading={heading}
      />
    </div>
  )
}
