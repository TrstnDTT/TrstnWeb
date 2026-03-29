/**
 * Speakeasy / cocktail club — Velvet Room : nuit profonde, cuivre, Cinzel,
 * hero cinéma, navigation discrète, carte en colonne noble.
 */
import { motion } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import { BusinessFooter, SectionFAQ } from '../project/businessSections.jsx'

const sections = [
  { id: '#speakeasy-hero', label: 'Entrée' },
  { id: '#speakeasy-esprit', label: 'Esprit' },
  { id: '#speakeasy-carte', label: 'Carte' },
  { id: '#speakeasy-scene', label: 'Scène' },
  { id: '#speakeasy-mots', label: 'Mots' },
  { id: '#speakeasy-contact', label: 'Réserver' },
]

export function BarSpeakeasyExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#speakeasy-contact' }
  const ctaSecondary = site.ctaSecondary ?? { label: 'Horaires', href: '#footer-business' }
  const menu = site.menuSections ?? []
  const avis = site.testimonials ?? []
  const shots = site.gallery ?? []

  return (
    <div
      className="min-h-[100dvh]"
      style={{
        backgroundColor: site.primaryColor,
        color: t,
        fontFamily: site.fontFamilyBody,
      }}
    >
      <style>{`
        .bs-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <nav
        className="fixed right-3 top-1/2 z-[880] hidden -translate-y-1/2 flex-col gap-5 lg:flex"
        aria-label="Sections"
      >
        {sections.map((item) => (
          <a
            key={item.id}
            href={item.id}
            className="group flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.35em] text-white/35 transition hover:text-white"
          >
            <span
              className="h-px w-4 bg-current opacity-40 transition group-hover:w-6 group-hover:opacity-100"
              style={{ color: s }}
            />
            {item.label}
          </a>
        ))}
      </nav>

      <main>
        <section
          id="speakeasy-hero"
          className="relative flex min-h-[100dvh] flex-col justify-end px-6 pb-20 pt-28 md:px-16 md:pb-28"
          style={{
            background: `radial-gradient(ellipse 90% 80% at 50% 120%, ${p} 0%, transparent 55%), linear-gradient(195deg, ${site.primaryColor} 0%, #04090f 100%)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
          <div className="relative z-[1] max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.55em] text-white/50">{site.tagline}</p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bs-h mt-8 text-4xl font-normal leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[3.5rem]"
            >
              {headline}
            </motion.h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
              {site.hero.subline}
            </p>
            <div className="mt-14 flex flex-wrap gap-5">
              <a
                href={ctaPrimary.href}
                className="bs-h border border-white/25 bg-white/[0.06] px-10 py-3 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:border-white/40"
              >
                {ctaPrimary.label}
              </a>
              <a href={ctaSecondary.href} className="text-[11px] uppercase tracking-[0.28em] transition" style={{ color: s }}>
                {ctaSecondary.label}
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-10 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-white/30 md:left-16 md:translate-x-0"
            aria-hidden
          />
        </section>

        <section id="speakeasy-esprit" className="scroll-mt-20 px-6 py-24 md:px-16" style={{ backgroundColor: p }}>
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.4em]" style={{ color: s }}>
                {site.about.title}
              </p>
              <div className="bs-h mt-6 text-2xl leading-snug text-white/95 md:text-3xl">
                Jazz, verre juste, silence entre deux gorgées.
              </div>
            </div>
            <div className="space-y-6 text-sm font-light leading-relaxed text-white/78 lg:col-span-8 lg:pt-2 lg:text-base">
              {site.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="speakeasy-carte" className="scroll-mt-20 border-y border-white/[0.06] px-6 py-24 md:px-16" style={{ backgroundColor: site.primaryColor }}>
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-[10px] uppercase tracking-[0.5em] text-white/45">Carte</p>
            <h2 className="bs-h mt-4 text-center text-3xl text-white md:text-4xl">Signatures & partages</h2>
            <div className="mx-auto mt-8 h-px max-w-[4rem]" style={{ backgroundColor: s }} />
            <div className="mt-16 space-y-16">
              {menu.map((sec, si) => (
                <div key={si}>
                  <h3 className="bs-h text-center text-sm font-normal uppercase tracking-[0.25em] text-white/55">
                    {sec.title}
                  </h3>
                  <ul className="mt-10 space-y-8">
                    {sec.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex flex-col gap-2 border-b border-white/[0.08] pb-8 last:border-0 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <div>
                          <p className="bs-h text-lg text-white md:text-xl">{item.name}</p>
                          {item.ingredients && (
                            <p className="mt-1 text-sm font-light text-white/65">{item.ingredients}</p>
                          )}
                        </div>
                        <span className="bs-h shrink-0 text-lg tabular-nums" style={{ color: s }}>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="speakeasy-scene" className="scroll-mt-20 px-0 py-12" style={{ backgroundColor: '#050a12' }}>
          <p className="px-6 text-center text-[10px] uppercase tracking-[0.45em] text-white/40 md:px-16">Ambiance</p>
          <div className="mt-8 flex gap-4 overflow-x-auto px-6 pb-4 pt-2 md:gap-6 md:px-16 [scrollbar-width:thin]">
            {shots.map((g, i) => (
              <figure
                key={i}
                className="relative w-[min(85vw,280px)] shrink-0 overflow-hidden rounded-sm border border-white/10"
              >
                <div
                  className="aspect-[3/4] w-full"
                  style={{
                    background: `linear-gradient(160deg, ${p}aa, ${s}44, ${site.primaryColor})`,
                  }}
                />
                <figcaption className="border-t border-white/10 px-3 py-2 text-center text-[10px] font-light text-white/65">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="speakeasy-mots" className="scroll-mt-20 px-6 py-24 md:px-16" style={{ backgroundColor: p }}>
          <h2 className="bs-h text-center text-2xl text-white md:text-3xl">Ce qu’on murmure</h2>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            {avis.map((a, i) => (
              <blockquote
                key={i}
                className="border-t-2 pt-6"
                style={{ borderColor: `${s}66` }}
              >
                <p className="text-sm font-light leading-relaxed text-white/80">« {a.text} »</p>
                <footer className="mt-4 text-[11px] uppercase tracking-wider text-white/45">— {a.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="scroll-mt-20 px-6 py-16 md:px-16" style={{ backgroundColor: site.primaryColor }}>
          <div className="mx-auto max-w-2xl">
            <SectionFAQ site={site} />
          </div>
        </section>

        <section id="speakeasy-contact" className="scroll-mt-20 px-6 py-24 md:px-16" style={{ backgroundColor: '#04080e' }}>
          <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2">
            <div>
              <h2 className="bs-h text-2xl text-white md:text-3xl">{site.contact.sectionTitle}</h2>
              <p className="mt-4 text-sm font-light text-white/55">
                Privatisation, cabines, groupes : détaillez votre soirée.
              </p>
            </div>
            <ContactForm contact={site.contact} site={site} />
          </div>
        </section>

        <section id="footer-business" className="scroll-mt-20 px-6 py-16 md:px-16" style={{ backgroundColor: p }}>
          <div className="mx-auto max-w-3xl">
            <h2 className="bs-h text-lg text-white">{site.location.sectionTitle}</h2>
            <p className="mt-2 text-sm text-white/65">{site.location.hours}</p>
            <div className="mt-8">
              <FakeMap location={site.location} site={site} />
            </div>
          </div>
        </section>

        <BusinessFooter site={site} />
      </main>
    </div>
  )
}
