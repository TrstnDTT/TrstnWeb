/**
 * Fast food — calque « comptoir urbain » : bandeau défilant, header compact,
 * menu en premier plan, barre d’action fixe en bas (comme une app de commande).
 */
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import {
  BusinessFooter,
  SectionDetailedMenu,
  SectionFAQ,
  SectionGallery,
  SectionTestimonials,
} from '../project/businessSections.jsx'

export function RestaurantFastFoodExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#contact' }
  const [drawer, setDrawer] = useState(false)

  const nav = [
    { href: '#top', label: 'Top' },
    { href: '#feu', label: 'Menu' },
    { href: '#avis', label: 'Avis' },
    { href: '#galerie', label: 'Photos' },
    { href: '#faq', label: 'Infos' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div
      className="min-h-[100dvh] pb-24"
      style={{
        backgroundColor: p,
        color: t,
        fontFamily: site.fontFamilyBody,
      }}
    >
      <style>{`
        .rf-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <div
        className="fixed left-0 right-0 top-0 z-[860] overflow-hidden border-b-2 py-2"
        style={{ borderColor: s, backgroundColor: site.primaryColor }}
      >
        <motion.div
          className="flex whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: t }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {Array(2)
            .fill(
              'Smash du jour · frites triple cuisson · sauce maison · ouvert 7j/7 · click & collect · ',
            )
            .map((chunk, i) => (
              <span key={i} className="inline-block px-4">
                {chunk}
              </span>
            ))}
        </motion.div>
      </div>

      <header
        id="top"
        className="fixed left-0 right-0 top-9 z-[850] flex items-center justify-between gap-3 border-b px-4 py-3 backdrop-blur-md md:px-8"
        style={{
          borderColor: `${s}44`,
          backgroundColor: `${p}ee`,
        }}
      >
        <div className="min-w-0">
          <p className="rf-h truncate text-lg font-black uppercase italic leading-none tracking-tight md:text-xl" style={{ color: t }}>
            {site.name}
          </p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider opacity-80" style={{ color: s }}>
            {site.tagline}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={ctaPrimary.href}
            className="rf-h hidden rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-wide shadow-lg sm:inline-flex"
            style={{ backgroundColor: s, color: site.primaryColor }}
          >
            {ctaPrimary.label}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 md:hidden"
            style={{ borderColor: s, color: t }}
            onClick={() => setDrawer((v) => !v)}
            aria-label="Menu"
          >
            {drawer ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[840] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setDrawer(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="ml-auto flex h-full w-[min(100%,18rem)] flex-col gap-1 border-l p-6 pt-24"
              style={{ backgroundColor: p, borderColor: `${s}44` }}
              onClick={(e) => e.stopPropagation()}
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide"
                  style={{ color: t }}
                  onClick={() => setDrawer(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-28">
        <section
          className="relative overflow-hidden px-5 pb-10 pt-6 md:px-10 md:pb-14"
          style={{
            background: `linear-gradient(135deg, ${site.primaryColor} 0%, ${p} 40%, ${s}22 100%)`,
          }}
        >
          <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: s }} aria-hidden />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="relative z-[1]"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" style={{ color: s }} aria-hidden />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: s }}>
                Aujourd’hui au feu
              </span>
            </div>
            <h1 className="rf-h mt-4 text-3xl font-black uppercase italic leading-[0.95] tracking-tight md:text-5xl lg:text-6xl" style={{ color: t }}>
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed md:text-base" style={{ color: t, opacity: 0.92 }}>
              {site.hero.subline}
            </p>
          </motion.div>
        </section>

        <nav className="sticky top-[7.25rem] z-[30] hidden border-b py-2 md:block" style={{ borderColor: `${s}33`, backgroundColor: `${p}f2` }}>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 px-6">
            {nav.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-wider opacity-80 transition hover:opacity-100"
                style={{ color: t }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="feu" className="scroll-mt-32 px-5 py-12 md:px-10 md:py-16">
          <SectionDetailedMenu site={site} />
        </section>

        <section id="avis" className="scroll-mt-24 px-5 py-12 md:px-10" style={{ backgroundColor: `${site.primaryColor}33` }}>
          <SectionTestimonials site={site} />
        </section>

        <section id="galerie" className="scroll-mt-24 px-5 py-12 md:px-10">
          <SectionGallery site={site} />
        </section>

        <section id="faq" className="scroll-mt-24 px-5 py-12 md:px-10">
          <SectionFAQ site={site} />
        </section>

        <section id="contact" className="scroll-mt-24 px-5 py-12 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="rf-h text-2xl font-black uppercase italic md:text-3xl" style={{ color: t }}>
              {site.contact.sectionTitle}
            </h2>
            <div className="mt-8">
              <ContactForm contact={site.contact} site={site} />
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 px-5 py-10 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="rf-h text-lg font-black uppercase" style={{ color: t }}>
              {site.location.sectionTitle}
            </h2>
            <p className="mt-2 text-sm opacity-85" style={{ color: t }}>
              {site.location.hours}
            </p>
            <div className="mt-6">
              <FakeMap location={site.location} site={site} />
            </div>
          </div>
        </section>

        <BusinessFooter site={site} />
      </main>

      <div
        className="fixed bottom-0 left-0 right-0 z-[870] flex items-center justify-between gap-3 border-t-2 px-4 py-3 backdrop-blur-lg md:hidden"
        style={{
          borderColor: s,
          backgroundColor: `${p}f5`,
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-80" style={{ color: t }}>
          Combo à partir de 12€
        </span>
        <a
          href={ctaPrimary.href}
          className="rf-h shrink-0 rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-wide shadow-lg"
          style={{ backgroundColor: s, color: site.primaryColor }}
        >
          {ctaPrimary.label}
        </a>
      </div>
    </div>
  )
}
