/**
 * Gastronomique — calque « maison étoilée » : rail vertical, hero plein écran,
 * ordre Maison → Menus → Galerie → Citations → FAQ → Contact (pas le même squelette que ProjectView).
 */
import { motion } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import {
  BusinessFooter,
  SectionDetailedMenu,
  SectionFAQ,
} from '../project/businessSections.jsx'

const rail = [
  { href: '#hero', label: 'Entrée' },
  { href: '#maison', label: 'Maison' },
  { href: '#menus', label: 'Menus' },
  { href: '#galerie', label: 'Salle' },
  { href: '#paroles', label: 'Citations' },
  { href: '#faq', label: 'Questions' },
  { href: '#contact', label: 'Réservation' },
]

export function RestaurantGastronomyExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#contact' }
  const ctaSecondary = site.ctaSecondary ?? { label: 'Accès', href: '#footer-business' }
  const list = site.testimonials ?? []
  const gallery = site.gallery ?? []

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden"
      style={{
        backgroundColor: p,
        color: t,
        fontFamily: site.fontFamilyBody,
      }}
    >
      <style>{`
        .rg-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <nav
        className="fixed bottom-0 left-0 right-0 z-[880] flex justify-center gap-1 overflow-x-auto border-t border-white/10 bg-[#070d18]/90 px-2 py-2 backdrop-blur-md lg:bottom-auto lg:left-0 lg:top-0 lg:h-full lg:w-[4.25rem] lg:flex-col lg:justify-center lg:overflow-y-auto lg:border-r lg:border-t-0 lg:px-0 lg:py-24"
        aria-label="Sections"
      >
        {rail.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rg-h shrink-0 rounded-full px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/45 transition hover:text-white lg:rounded-none lg:px-0 lg:py-3 lg:text-[8px] lg:leading-tight lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main className="pb-16 pt-14 lg:pl-[4.25rem] lg:pb-0 lg:pt-0">
        <section
          id="hero"
          className="relative min-h-[92dvh] lg:min-h-[100dvh]"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 80% 10%, ${s}18 0%, transparent 45%), linear-gradient(160deg, ${site.primaryColor} 0%, ${p} 55%, #070d18 100%)`,
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-24 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-12 lg:pb-28 lg:pt-32">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="hidden h-48 w-px lg:block"
                style={{ background: `linear-gradient(180deg, ${s}, transparent)` }}
                aria-hidden
              />
              <p
                className="mt-8 text-[10px] font-medium uppercase tracking-[0.5em] lg:mt-12"
                style={{ color: s }}
              >
                {site.tagline}
              </p>
            </div>
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rg-h text-4xl font-light leading-[1.08] tracking-tight md:text-5xl lg:text-[3.15rem]"
                style={{ color: t }}
              >
                {headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 max-w-xl text-base font-light leading-relaxed md:text-lg"
                style={{ color: t, opacity: 0.88 }}
              >
                {site.hero.subline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <a
                  href={ctaPrimary.href}
                  className="border px-10 py-3 text-[11px] font-normal uppercase tracking-[0.25em] transition hover:opacity-90"
                  style={{ borderColor: s, color: t }}
                >
                  {ctaPrimary.label}
                </a>
                <a
                  href={ctaSecondary.href}
                  className="text-[11px] uppercase tracking-[0.25em] underline decoration-1 underline-offset-8 transition hover:opacity-90"
                  style={{ color: s }}
                >
                  {ctaSecondary.label}
                </a>
              </motion.div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 lg:left-[calc(4.25rem+2rem)] lg:translate-x-0"
            style={{ background: `linear-gradient(180deg, ${s}88, transparent)` }}
            aria-hidden
          />
        </section>

        <section
          id="maison"
          className="scroll-mt-20 border-t border-white/[0.07] px-6 py-24 lg:px-16"
          style={{ backgroundColor: '#0a1220' }}
        >
          <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.4em]" style={{ color: s }}>
                {site.about.title}
              </p>
              <div className="rg-h mt-6 text-2xl font-light italic leading-snug md:text-3xl" style={{ color: t }}>
                Une table, une équipe, un fil rouge.
              </div>
            </div>
            <div className="space-y-6 text-sm font-light leading-relaxed md:text-base" style={{ color: t, opacity: 0.9 }}>
              {site.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="menus" className="scroll-mt-20 px-6 py-24 lg:px-16" style={{ backgroundColor: p }}>
          <SectionDetailedMenu site={site} />
        </section>

        <section id="galerie" className="scroll-mt-20 px-0 py-16" style={{ backgroundColor: site.primaryColor }}>
          <div className="px-6 lg:px-16">
            <p className="rg-h text-center text-[10px] uppercase tracking-[0.45em]" style={{ color: s }}>
              La salle
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px md:grid-cols-4">
            {gallery.map((g, i) => (
              <figure key={i} className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(145deg, ${p}cc, ${s}44, ${site.primaryColor})`,
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/35 px-3 py-2 text-center text-[10px] font-light leading-snug" style={{ color: t }}>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="paroles" className="scroll-mt-20 px-6 py-24 lg:px-20" style={{ backgroundColor: '#080f1a' }}>
          <p className="rg-h text-center text-[10px] uppercase tracking-[0.45em]" style={{ color: s }}>
            Sur le carnet d’hôtes
          </p>
          <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3">
            {list.map((av, i) => (
              <blockquote key={i} className="relative border-l-2 pl-6" style={{ borderColor: `${s}66` }}>
                <span className="rg-h absolute -left-1 -top-2 text-4xl font-light opacity-30" style={{ color: s }}>
                  «
                </span>
                <p className="text-sm font-light leading-relaxed" style={{ color: t }}>
                  {av.text}
                </p>
                <footer className="mt-4 text-[11px] font-medium uppercase tracking-wider" style={{ color: s }}>
                  — {av.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 px-6 py-20 lg:px-16" style={{ backgroundColor: p }}>
          <SectionFAQ site={site} />
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-white/10 px-6 py-24 lg:px-16" style={{ backgroundColor: '#0a1220' }}>
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
            <div>
              <h2 className="rg-h text-2xl font-light md:text-3xl" style={{ color: t }}>
                {site.contact.sectionTitle}
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed opacity-80" style={{ color: t }}>
                Nous répondons sous 24 h les jours d’ouverture.
              </p>
            </div>
            <ContactForm contact={site.contact} site={site} />
          </div>
        </section>

        <section
          id="footer-business"
          className="scroll-mt-20 px-6 py-16 lg:px-16"
          style={{ backgroundColor: p }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="rg-h text-lg font-light" style={{ color: t }}>
              {site.location.sectionTitle}
            </h2>
            <p className="mt-2 text-sm opacity-80" style={{ color: t }}>
              {site.location.hours}
            </p>
            <div className="mt-10">
              <FakeMap location={site.location} site={site} />
            </div>
          </div>
        </section>

        <BusinessFooter site={site} />
      </main>
    </div>
  )
}
