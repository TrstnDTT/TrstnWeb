import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { hasLegacyTemplate } from '../../data/legacyPortfolioSource.js'
import { LegacyProjectShell } from '../../legacy/LegacyProjectShell.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import { MainContentBlock } from './projectBlocks.jsx'
import {
  BusinessFooter,
  SectionDetailedMenu,
  SectionFAQ,
  SectionGallery,
  SectionTestimonials,
} from './businessSections.jsx'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}

function heroVariants(reduceMotion, mood) {
  const stagger =
    mood === 'fast' ? 0.07 : mood === 'fine' ? 0.14 : 0.09
  const delay = mood === 'fast' ? 0.04 : mood === 'fine' ? 0.1 : 0.06
  const y = mood === 'fine' ? 18 : mood === 'fast' ? 32 : 26
  return {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: reduceMotion ? 0 : stagger,
          delayChildren: reduceMotion ? 0 : delay,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : y },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduceMotion ? 0.2 : mood === 'fine' ? 0.65 : mood === 'fast' ? 0.42 : 0.52,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  }
}

function buildNav(menuLabel) {
  return [
    { href: '#hero', label: 'Accueil' },
    { href: '#carte', label: menuLabel },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ]
}

export function ProjectView({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const heroMood = site.heroMood ?? 'default'
  const hv = heroVariants(reduceMotion, heroMood)
  const [open, setOpen] = useState(false)

  if (hasLegacyTemplate(site.id)) {
    return <LegacyProjectShell site={site} onBack={onBack} />
  }
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const cssVar = { text: t, surface: p }

  const menuNavLabel =
    site.menuPresentation === 'fine-dining'
      ? 'Menus'
      : site.layoutStructure === 'flash-gallery'
        ? 'Galerie'
        : site.layoutStructure === 'breads-weight'
          ? 'Pains'
          : site.layoutStructure === 'coffee-cart'
            ? 'Cafés'
            : site.layoutStructure === 'tarifs-grid'
              ? 'Tarifs'
              : 'Carte'

  const nav = buildNav(menuNavLabel)

  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#contact' }
  const ctaSecondary = site.ctaSecondary ?? { label: 'Nous trouver', href: '#footer-business' }

  const hasRichMenu = Array.isArray(site.menuSections) && site.menuSections.length > 0

  const rootStyle = {
    backgroundColor: p,
    color: t,
    fontFamily: site.fontFamilyBody,
    minHeight: '100vh',
  }

  return (
    <div style={rootStyle}>
      <style>{`
        .pv-heading { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <header
        className="fixed left-0 right-0 top-0 z-[900] border-b backdrop-blur-md"
        style={{
          borderColor: `${s}44`,
          backgroundColor: `${p}ee`,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a
            href="#hero"
            className="pv-heading max-w-[14rem] truncate text-base font-semibold md:text-lg"
            style={{ color: t }}
          >
            {site.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[10px] font-medium uppercase tracking-[0.15em] opacity-85"
                style={{ color: t }}
                whileHover={{ opacity: 1, y: -1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
            style={{ borderColor: `${s}66`, color: t }}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[850] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-80 max-w-[min(100%,20rem)] flex-col overflow-y-auto border-l shadow-2xl"
              style={{
                borderColor: `${s}44`,
                backgroundColor: p,
                color: t,
              }}
              onClick={(e) => e.stopPropagation()}
              aria-hidden={!open}
            >
              <div className="border-b px-6 pb-4 pt-20" style={{ borderColor: `${s}33` }}>
                <p className="pv-heading text-lg font-semibold">{site.name}</p>
                <p className="mt-1 text-xs opacity-70">{site.tagline}</p>
              </div>
              <nav className="flex flex-col px-2 py-4" aria-label="Menu mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-4 py-3.5 text-sm font-medium transition hover:opacity-90"
                    style={{ color: t }}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section
          id="hero"
          className={[
            'relative overflow-hidden px-5 pt-12 md:px-10',
            heroMood === 'fine' ? 'pb-20 md:pb-28 md:pt-20' : 'pb-16 md:pb-24 md:pt-16',
            heroMood === 'fast' ? 'md:pt-14' : '',
          ].join(' ')}
          style={{
            background:
              heroMood === 'fine'
                ? `radial-gradient(ellipse 80% 60% at 50% -10%, ${s}22 0%, transparent 52%), linear-gradient(175deg, ${site.primaryColor} 0%, ${p} 58%, ${site.primaryColor}ee 100%)`
                : heroMood === 'bistro'
                  ? `linear-gradient(168deg, ${site.primaryColor} 0%, ${p} 48%, ${site.primaryColor}cc 100%)`
                  : heroMood === 'fast'
                    ? `linear-gradient(135deg, ${site.primaryColor} 0%, ${p} 35%, ${s}33 90%), linear-gradient(165deg, ${p} 0%, ${site.primaryColor} 70%)`
                    : `linear-gradient(165deg, ${site.primaryColor} 0%, ${p} 55%)`,
          }}
        >
          {heroMood === 'fast' && !reduceMotion && (
            <motion.div
              className="pointer-events-none absolute -right-8 top-8 h-28 w-28 rounded-full opacity-40 blur-2xl md:right-[12%]"
              style={{ backgroundColor: s }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
          )}
          <motion.div
            className="relative z-[1]"
            initial="hidden"
            animate="show"
            variants={hv.container}
          >
            <motion.p
              className={[
                'font-medium uppercase opacity-80',
                heroMood === 'fine' ? 'text-[11px] tracking-[0.42em]' : 'text-[10px] tracking-[0.3em]',
              ].join(' ')}
              style={{ color: s }}
              variants={hv.item}
            >
              {site.tagline}
            </motion.p>
            <motion.h1
              className={[
                'pv-heading mt-4 max-w-4xl leading-[1.12] tracking-tight',
                heroMood === 'fine'
                  ? 'text-3xl font-light md:text-5xl lg:text-[3.25rem]'
                  : heroMood === 'fast'
                    ? 'text-3xl font-black uppercase italic md:text-5xl lg:text-6xl'
                    : 'text-3xl font-semibold md:text-5xl lg:text-6xl',
              ].join(' ')}
              style={{ color: t }}
              variants={hv.item}
            >
              {headline}
            </motion.h1>
            <motion.p
              className={[
                'mt-6 max-w-2xl leading-relaxed opacity-95',
                heroMood === 'fine' ? 'text-base font-light md:text-lg' : 'text-base md:text-lg',
              ].join(' ')}
              style={{ color: t }}
              variants={hv.item}
            >
              {site.hero.subline}
            </motion.p>
            <motion.div
              className={heroMood === 'fine' ? 'mt-14 flex flex-wrap gap-4' : 'mt-10 flex flex-wrap gap-3'}
              variants={hv.item}
            >
              <motion.a
                href={ctaPrimary.href}
                className={[
                  'inline-block px-8 py-3 text-xs uppercase tracking-wider',
                  heroMood === 'fine' ? 'font-normal' : 'font-semibold',
                  heroMood === 'fast' ? 'rounded-full font-bold' : '',
                ].join(' ')}
                style={{
                  backgroundColor: s,
                  color: site.primaryColor,
                  fontFamily: site.fontFamilyBody,
                }}
                whileHover={{ scale: heroMood === 'fast' ? 1.06 : 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={
                  heroMood === 'fast'
                    ? { type: 'spring', stiffness: 520, damping: 22 }
                    : { type: 'spring', stiffness: 450, damping: 28 }
                }
              >
                {ctaPrimary.label}
              </motion.a>
              <motion.a
                href={ctaSecondary.href}
                className={[
                  'inline-block border-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider',
                  heroMood === 'fast' ? 'rounded-full' : '',
                ].join(' ')}
                style={{
                  borderColor: s,
                  color: t,
                  fontFamily: site.fontFamilyBody,
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              >
                {ctaSecondary.label}
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="carte"
          className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24"
          style={{ backgroundColor: p }}
          {...fade}
        >
          {hasRichMenu ? (
            <SectionDetailedMenu site={site} />
          ) : (
            <MainContentBlock site={site} cssVar={cssVar} />
          )}
        </motion.section>

        <motion.section
          id="avis"
          className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24"
          style={{ backgroundColor: `${site.primaryColor}22` }}
          {...fade}
        >
          <SectionTestimonials site={site} />
        </motion.section>

        <motion.section
          id="galerie"
          className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24"
          style={{ backgroundColor: p }}
          {...fade}
        >
          <SectionGallery site={site} />
        </motion.section>

        <motion.section
          id="faq"
          className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24"
          style={{ backgroundColor: `${site.primaryColor}18` }}
          {...fade}
        >
          <SectionFAQ site={site} />
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24"
          style={{ backgroundColor: p }}
          {...fade}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="pv-heading text-2xl font-semibold md:text-3xl" style={{ color: t }}>
              {site.contact.sectionTitle}
            </h2>
            <div className="mt-10">
              <ContactForm contact={site.contact} site={site} />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="localisation"
          className="scroll-mt-24 px-5 py-12 md:px-10 md:py-16"
          style={{ backgroundColor: `${site.primaryColor}14` }}
          {...fade}
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="pv-heading text-xl font-semibold md:text-2xl" style={{ color: t }}>
              {site.location.sectionTitle}
            </h2>
            <p className="mt-2 text-sm opacity-85" style={{ color: t }}>
              {site.location.hours}
            </p>
            <div className="mt-8">
              <FakeMap location={site.location} site={site} />
            </div>
          </div>
        </motion.section>

        <BusinessFooter site={site} />
      </main>
    </div>
  )
}
