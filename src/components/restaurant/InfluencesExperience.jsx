/**
 * Influences — inspiré du restaurant Influences à Bayonne (restaurant-influences.fr).
 * Thème shell : clair = midi lumineux ; sombre = dîner intimiste.
 */
import { useCallback, useId, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CalendarClock, HeartHandshake, MessageCircle, Sparkles, Wine } from 'lucide-react'
import { useShellTheme } from '../../context/ShellThemeContext.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

/** Or chaleureux — accord mets & vins */
const GOLD = '#c9a961'
const PLAYFAIR = '"Playfair Display", Georgia, serif'
const easeLux = [0.22, 1, 0.36, 1]

/** Ambiance salle feutrée (démo visuelle) */
const HERO_IMG =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=82'

function phoneToTelHref(phone) {
  if (!phone || typeof phone !== 'string') return undefined
  const d = phone.replace(/\s/g, '')
  if (d.startsWith('0')) return `tel:+33${d.slice(1)}`
  return `tel:${d}`
}

function Grain({ mode }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        opacity: mode === 'light' ? 0.04 : 0.065,
        mixBlendMode: mode === 'light' ? 'multiply' : 'overlay',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  )
}

function DishRow({ item, expanded, onToggle, palette, priceFont }) {
  const detail = item.ingredients?.trim()
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: palette.border }}>
      <button
        type="button"
        onClick={() => detail && onToggle()}
        className={`w-full text-left ${detail ? 'cursor-pointer' : 'cursor-default'}`}
        aria-expanded={detail ? expanded : undefined}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 py-4 md:py-5">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="text-[1.08rem] font-medium leading-snug md:text-[1.2rem]"
                style={{ fontFamily: PLAYFAIR, color: palette.text }}
              >
                {item.name}
              </h3>
              {item.badge ? (
                <span
                  className="rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    borderColor: `${GOLD}55`,
                    color: GOLD,
                    backgroundColor: palette.badgeBg,
                  }}
                >
                  {item.badge}
                </span>
              ) : null}
            </div>
          </div>
          <span
            className="shrink-0 tabular-nums text-[0.98rem] font-medium md:text-[1.05rem]"
            style={{ fontFamily: priceFont, color: palette.muted }}
          >
            {item.price}
          </span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {expanded && detail ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeLux }}
            className="overflow-hidden pb-4 text-[13px] leading-relaxed md:text-[14px]"
            style={{ fontFamily: priceFont, color: palette.muted }}
          >
            {detail}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function StarRow({ rating = 5, gold }) {
  return (
    <p className="text-[12px] tracking-[0.2em]" style={{ color: gold }} aria-label={`${rating} étoiles sur 5`}>
      {'★'.repeat(rating)}
    </p>
  )
}

function FaqRow({ item, index, isOpen, onToggle, palette, priceFont, headingFont }) {
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: palette.border }}>
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-4 text-left"
        onClick={() => onToggle(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-semibold leading-snug" style={{ fontFamily: headingFont, color: palette.text }}>
          {item.q}
        </span>
        <span className="shrink-0 pt-0.5 text-[18px] leading-none opacity-55" aria-hidden>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeLux }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-[13px] leading-relaxed md:text-[14px]" style={{ fontFamily: priceFont, color: palette.muted }}>
              {item.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function InfluencesExperience({ site, onBack }) {
  const { theme: shellTheme } = useShellTheme()
  const reduceMotion = useReducedMotion()
  const mode = shellTheme === 'light' ? 'light' : 'dark'
  const headingFont = site.fontFamilyHeading ?? '"Syne", system-ui, sans-serif'
  const priceFont = site.fontFamilyBody ?? '"Plus Jakarta Sans", system-ui, sans-serif'

  const rose = site.secondaryColor ?? '#b88a90'

  const palette = useMemo(() => {
    if (mode === 'light') {
      return {
        bg: '#f7f3f0',
        surface: 'rgba(255, 255, 255, 0.82)',
        text: '#1a1518',
        muted: 'rgba(26, 21, 24, 0.62)',
        border: 'rgba(0, 0, 0, 0.07)',
        heroMask: 'rgba(255, 248, 245, 0.5)',
        shadow: '0 24px 70px -36px rgba(0, 0, 0, 0.1)',
        boardBorder: 'rgba(184, 138, 144, 0.22)',
        badgeBg: 'rgba(201, 169, 97, 0.12)',
        fabBg: 'rgba(255, 255, 255, 0.9)',
        fabBorder: 'rgba(184, 138, 144, 0.25)',
        fabShadow: '0 14px 44px -18px rgba(0, 0, 0, 0.12)',
        lineAccent: `${rose}55`,
      }
    }
    return {
      bg: '#141018',
      surface: 'rgba(28, 24, 32, 0.94)',
      text: '#f7f4f2',
      muted: 'rgba(247, 244, 242, 0.58)',
      border: `${rose}33`,
      heroMask: 'rgba(20, 16, 24, 0.55)',
      shadow: '0 36px 100px -40px rgba(0, 0, 0, 0.72)',
      boardBorder: `${rose}40`,
      badgeBg: 'rgba(201, 169, 97, 0.12)',
      fabBg: 'rgba(30, 26, 34, 0.95)',
      fabBorder: `${rose}45`,
      fabShadow: '0 18px 56px -22px rgba(0, 0, 0, 0.6)',
      lineAccent: `${rose}66`,
    }
  }, [mode, rose])

  const sections = site.menuSections ?? []
  const expertise = site.humanExpertise ?? []
  const engagement = site.clientEngagement ?? []
  const hallmark = site.hallmarkQuote
  const faqItems = site.faq ?? []
  const testimonials = site.testimonials ?? []
  const [openKey, setOpenKey] = useState(null)
  const [faqOpen, setFaqOpen] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const boardId = useId()
  const expertiseId = useId()
  const relationId = useId()
  const temoinsId = useId()
  const faqId = useId()

  const toggle = useCallback((key) => {
    setOpenKey((p) => (p === key ? null : key))
  }, [])

  return (
    <div
      className="relative min-h-[100dvh] overflow-x-hidden antialiased"
      style={{ backgroundColor: palette.bg, color: palette.text, fontFamily: priceFont }}
    >
      <style>{`
        .inf-h { font-family: ${headingFont}; font-weight: 700; letter-spacing: 0.03em; }
      `}</style>
      <Grain mode={mode} />

      <BackButton onClick={onBack} site={site} />

      <ReservationMailtoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        venueName={site.name}
        accentColor={GOLD}
        fontFamilyBody={priceFont}
        fontFamilyHeading={headingFont}
      />

      <header className="relative z-[2] px-5 pb-14 pt-24 md:px-10 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inf-h flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.4em] md:text-[11px]"
            style={{ color: palette.muted }}
          >
            <Wine className="h-3.5 w-3.5 opacity-75" strokeWidth={2} aria-hidden />
            {site.tagline}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5, ease: easeLux }}
            className="inf-h relative z-[1] mt-6 text-center text-[1.75rem] tracking-tight md:mt-7 md:text-4xl"
          >
            {site.name}
          </motion.h1>

          {/* Séparateur dans le flux — évite le chevauchement avec le titre (ancienne ligne absolue) */}
          <div
            className="mx-auto mt-9 h-px w-full max-w-[12rem] md:mt-10 md:max-w-[16rem]"
            style={{
              background: `linear-gradient(90deg, transparent, ${palette.lineAccent}, transparent)`,
            }}
            aria-hidden
          />

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.55, ease: easeLux }}
              className="relative overflow-hidden rounded-sm"
              style={{ boxShadow: palette.shadow }}
            >
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background: `linear-gradient(160deg, ${palette.heroMask} 0%, transparent 50%)`,
                }}
              />
              <img
                src={HERO_IMG}
                alt="Salle de restaurant chaleureuse, tables dressées"
                className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: easeLux }}
            >
              <h2 className="inf-h text-2xl leading-tight md:text-[1.65rem]" style={{ color: palette.text }}>
                {site.hero?.headline}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] md:text-base" style={{ color: palette.muted }}>
                {site.hero?.subline}
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {hallmark ? (
        <section
          className="relative z-[2] mx-auto max-w-3xl px-5 pb-12 md:px-10 md:pb-16"
          aria-label="Citation"
        >
          <motion.blockquote
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: easeLux }}
            className="border-l-2 pl-6 md:pl-8"
            style={{ borderColor: rose }}
          >
            <p className="text-[1.15rem] leading-snug md:text-[1.35rem]" style={{ fontFamily: PLAYFAIR, color: palette.text }}>
              {hallmark.quote}
            </p>
            <footer className="mt-3 text-[12px] uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
              {hallmark.context}
            </footer>
          </motion.blockquote>
        </section>
      ) : null}

      {expertise.length > 0 ? (
        <section
          id="expertise"
          className="relative z-[2] scroll-mt-24 px-5 pb-16 md:px-10 md:pb-20"
          aria-labelledby={expertiseId}
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.32em]" style={{ color: GOLD }}>
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                Expertise humaine
              </p>
              <h2 id={expertiseId} className="inf-h mt-3 text-xl md:text-2xl">
                Le geste, le temps, le vivant
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed md:text-sm" style={{ color: palette.muted }}>
                Pas de promesse creuse : trois façons de décrire ce qui anime la maison au quotidien.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
              {expertise.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: easeLux }}
                  className="rounded-sm p-5 md:p-6"
                  style={{
                    backgroundColor: palette.surface,
                    border: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.07)' : `${rose}40`}`,
                  }}
                >
                  <h3 className="inf-h text-[13px] uppercase tracking-[0.18em]" style={{ color: GOLD }}>
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-relaxed md:text-[14px]" style={{ color: palette.muted }}>
                    {p.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {engagement.length > 0 ? (
        <section
          id="relation"
          className="relative z-[2] scroll-mt-24 px-5 pb-16 md:px-10 md:pb-24"
          aria-labelledby={relationId}
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.32em]" style={{ color: rose }}>
                <HeartHandshake className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                Relation & clientèle
              </p>
              <h2 id={relationId} className="inf-h mt-3 text-xl md:text-2xl">
                Une table à votre image
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
              {engagement.map((block, i) => (
                <motion.div
                  key={block.role}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.42, ease: easeLux }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                    {block.role}
                  </p>
                  <p className="inf-h mt-2 text-lg md:text-xl" style={{ color: palette.text }}>
                    {block.lead}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.75]" style={{ color: palette.muted }}>
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>
            {site.trustLine ? (
              <p
                className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed md:text-[14px]"
                style={{ color: palette.muted }}
              >
                <MessageCircle className="mb-2 inline-block h-4 w-4 align-middle opacity-70" style={{ color: GOLD }} aria-hidden />{' '}
                {site.trustLine}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {site.about?.paragraphs?.length ? (
        <section className="relative z-[2] px-5 pb-16 md:px-10 md:pb-20" aria-labelledby="influences-about">
          <div className="mx-auto max-w-2xl">
            <h2 id="influences-about" className="inf-h text-center text-lg md:text-xl">
              {site.about.title}
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-[1.8]" style={{ color: palette.muted }}>
              {site.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="carte" className="relative z-[2] scroll-mt-24 px-5 pb-28 md:px-10 md:pb-36" aria-labelledby={boardId}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.32em]" style={{ color: GOLD }}>
              Saison & producteurs
            </p>
            <h2 id={boardId} className="inf-h mt-3 text-xl md:text-2xl">
              La carte
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed md:text-sm" style={{ color: palette.muted }}>
              Extraits indicatifs — la carte réelle évolue au fil des arrivages. Touchez un plat pour le détail.
            </p>
          </div>

          <div
            className="mt-11 rounded-sm border px-5 py-3 md:px-8 md:py-5"
            style={{
              borderColor: palette.boardBorder,
              backgroundColor: palette.surface,
              backdropFilter: 'blur(14px)',
              boxShadow: mode === 'light' ? palette.shadow : undefined,
            }}
          >
            {sections.map((section, si) => (
              <div
                key={section.title}
                className={si > 0 ? 'mt-6 border-t pt-10' : ''}
                style={si > 0 ? { borderTopColor: palette.border } : undefined}
              >
                <h3 className="inf-h mb-1 text-[11px] uppercase tracking-[0.26em]" style={{ color: GOLD }}>
                  {section.title}
                </h3>
                {(section.items ?? []).map((item, ii) => {
                  const key = `${si}-${ii}`
                  return (
                    <DishRow
                      key={item.name}
                      item={item}
                      expanded={openKey === key}
                      onToggle={() => toggle(key)}
                      palette={palette}
                      priceFont={priceFont}
                    />
                  )
                })}
              </div>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mx-auto mt-12 flex items-center justify-center gap-2 rounded-full border px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-transform hover:scale-[1.02]"
            style={{
              borderColor: `${GOLD}50`,
              color: palette.text,
              backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.06)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarClock className="h-4 w-4" style={{ color: GOLD }} strokeWidth={1.75} aria-hidden />
            Réserver
          </motion.button>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section
          id="temoignages"
          className="relative z-[2] scroll-mt-24 px-5 pb-20 md:px-10 md:pb-28"
          aria-labelledby={temoinsId}
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.32em]" style={{ color: GOLD }}>
                Ils en parlent
              </p>
              <h2 id={temoinsId} className="inf-h mt-3 text-xl md:text-2xl">
                Confiance & retours
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed md:text-sm" style={{ color: palette.muted }}>
                Des mots de clients qui soulignent l’écoute autant que l’assiette — la preuve d’un engagement qui dure.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: easeLux }}
                  className="flex flex-col rounded-sm p-5 md:p-6"
                  style={{
                    backgroundColor: palette.surface,
                    border: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.06)' : `${rose}35`}`,
                  }}
                >
                  <StarRow rating={t.rating ?? 5} gold={GOLD} />
                  <blockquote className="mt-4 flex-1 text-[13px] leading-relaxed md:text-[14px]" style={{ color: palette.muted }}>
                    « {t.text} »
                  </blockquote>
                  <figcaption className="inf-h mt-5 text-[12px] uppercase tracking-[0.15em]" style={{ color: palette.text }}>
                    {t.name}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faqItems.length > 0 ? (
        <section
          id="faq-influences"
          className="relative z-[2] scroll-mt-24 px-5 pb-20 md:px-10 md:pb-28"
          aria-labelledby={faqId}
        >
          <div className="mx-auto max-w-2xl">
            <h2 id={faqId} className="inf-h text-center text-xl md:text-2xl">
              Questions fréquentes
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[13px] leading-relaxed" style={{ color: palette.muted }}>
              Transparence sur l’accueil, la taille de la salle et les réservations — pour que vous arriviez déjà rassuré.
            </p>
            <div
              className="mt-10 rounded-sm border px-4 py-2 md:px-6 md:py-4"
              style={{
                borderColor: palette.boardBorder,
                backgroundColor: palette.surface,
              }}
            >
              {faqItems.map((item, index) => (
                <FaqRow
                  key={item.q}
                  item={item}
                  index={index}
                  isOpen={faqOpen === index}
                  onToggle={setFaqOpen}
                  palette={palette}
                  priceFont={priceFont}
                  headingFont={headingFont}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="relative z-[2] scroll-mt-24 px-5 pb-32 md:px-10 md:pb-36"
        aria-labelledby="influences-infos"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: rose }}>
            La maison
          </p>
          <h2 id="influences-infos" className="inf-h mt-3 text-lg md:text-xl">
            Bayonne
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed" style={{ color: palette.muted }}>
            {site.location?.street}, {site.location?.postalCode} {site.location?.city}
          </p>
          {site.location?.phone ? (
            <p className="mt-3">
              <a
                href={phoneToTelHref(site.location.phone)}
                className="text-[15px] font-medium underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: GOLD }}
              >
                {site.location.phone}
              </a>
            </p>
          ) : null}
          <p className="mx-auto mt-5 max-w-lg text-[13px] leading-relaxed md:text-sm" style={{ color: palette.muted }}>
            {site.location?.hours}
          </p>
          <p className="mt-8 text-[11px] leading-relaxed opacity-75" style={{ color: palette.muted }}>
            24 couverts · Démonstration portfolio — site officiel :{' '}
            <a
              href="https://restaurant-influences.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: GOLD }}
            >
              restaurant-influences.fr
            </a>
          </p>
        </div>
      </section>

      <motion.button
        type="button"
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-5 z-[900] flex items-center gap-2 rounded-full border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md md:bottom-8 md:right-8 md:px-5"
        style={{
          backgroundColor: palette.fabBg,
          borderColor: palette.fabBorder,
          color: palette.text,
          boxShadow: palette.fabShadow,
        }}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4, ease: easeLux }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Réserver une table"
      >
        <CalendarClock className="h-4 w-4" style={{ color: GOLD }} strokeWidth={1.75} aria-hidden />
        <span className="hidden sm:inline">Réserver</span>
      </motion.button>
    </div>
  )
}
