/**
 * Bistro — esprit « zinc & ardoise » : fond papier, en-tête centré, pas de rail latéral.
 * Ordre : accueil court → histoire en carte → ardoise → avis en bande → galerie mosaïque → FAQ → contact.
 */
import { motion } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import {
  BusinessFooter,
  SectionDetailedMenu,
  SectionFAQ,
  SectionTestimonials,
} from '../project/businessSections.jsx'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#histoire', label: 'Histoire' },
  { href: '#ardoise', label: 'Ardoise' },
  { href: '#avis', label: 'Avis' },
  { href: '#galerie', label: 'Photos' },
  { href: '#contact', label: 'Contact' },
]

export function RestaurantBistroExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#contact' }
  const gallery = site.gallery ?? []

  return (
    <div
      className="min-h-[100dvh]"
      style={{
        color: t,
        fontFamily: site.fontFamilyBody,
        backgroundColor: '#ebe3d9',
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(44,24,16,0.03) 2px, rgba(44,24,16,0.03) 4px),
          linear-gradient(180deg, #f2ebe4 0%, #e8dfd4 100%)
        `,
      }}
    >
      <style>{`
        .rb-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <header
        id="accueil"
        className="scroll-mt-20 border-b border-[#2c1810]/15 px-5 pb-8 pt-20 text-center md:px-10 md:pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#5c4a3d]"
        >
          {site.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="rb-h mt-4 text-3xl font-semibold text-[#2c1810] md:text-4xl"
        >
          {site.name}
        </motion.h1>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-wide text-[#6b5344]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="border-b border-transparent hover:border-[#8b6914]">
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        className="mx-auto max-w-2xl px-5 py-14 text-center md:px-8"
        style={{ color: '#3d2e24' }}
      >
        <p className="rb-h text-xl font-medium leading-snug md:text-2xl">{headline}</p>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed opacity-90">{site.hero.subline}</p>
        <a
          href={ctaPrimary.href}
          className="rb-h mt-10 inline-block rounded-full border-2 border-[#8b6914] bg-[#faf6ef]/80 px-8 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2c1810] shadow-sm transition hover:bg-[#faf6ef]"
        >
          {ctaPrimary.label}
        </a>
      </section>

      <section id="histoire" className="scroll-mt-24 px-5 py-16 md:px-10">
        <div
          className="mx-auto max-w-3xl rounded-2xl border-2 border-[#c4a574]/50 bg-[#faf6ef]/90 p-8 shadow-lg md:p-12"
          style={{ borderColor: `${s}44` }}
        >
          <h2 className="rb-h text-center text-2xl text-[#2c1810]">{site.about.title}</h2>
          <div className="mt-8 space-y-5 text-center text-sm leading-relaxed text-[#4a3d32]">
            {site.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="ardoise" className="scroll-mt-24 px-5 py-12 md:px-10">
        <div className="mx-auto max-w-2xl">
          <SectionDetailedMenu site={site} />
        </div>
      </section>

      <section
        id="avis"
        className="scroll-mt-24 border-y border-[#2c1810]/20 px-5 py-16 md:px-10"
        style={{ backgroundColor: site.primaryColor }}
      >
        <SectionTestimonials site={site} />
      </section>

      <section id="galerie" className="scroll-mt-24 px-5 py-16 md:px-10">
        <h2 className="rb-h text-center text-2xl text-[#2c1810]">Quelques images</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-[#5c4a3d]">
          Ambiance du soir — les plats suivent le marché.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border-2 border-[#c4a574]/40 bg-[#faf6ef] shadow-md"
            >
              <div
                className="aspect-square w-full"
                style={{
                  background: `linear-gradient(135deg, ${p}99, ${s}55)`,
                }}
              />
              <figcaption className="px-2 py-2 text-center text-[10px] leading-tight text-[#4a3d32]">
                {g.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 px-5 py-12 md:px-10" style={{ backgroundColor: site.primaryColor }}>
        <div className="mx-auto max-w-2xl">
          <SectionFAQ site={site} />
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 py-16 md:px-10" style={{ backgroundColor: site.primaryColor }}>
        <div className="mx-auto max-w-xl">
          <h2 className="rb-h text-center text-2xl" style={{ color: t }}>
            {site.contact.sectionTitle}
          </h2>
          <div className="mt-10">
            <ContactForm contact={site.contact} site={site} />
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 px-5 py-12 md:px-10" style={{ backgroundColor: site.primaryColor }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="rb-h text-lg" style={{ color: t }}>
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
    </div>
  )
}
