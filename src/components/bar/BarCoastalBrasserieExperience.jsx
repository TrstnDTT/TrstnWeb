/**
 * Brasserie méditerranéenne — Nuit & Jour : sable chaud, mer, double temporalité
 * (café le matin / tapas le soir), sans le squelette bar technique ni néon.
 */
import { motion } from 'framer-motion'
import { Coffee, Moon } from 'lucide-react'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import { BusinessFooter, SectionFAQ } from '../project/businessSections.jsx'

export function BarCoastalBrasserieExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#cote-contact' }
  const ctaSecondary = site.ctaSecondary ?? { label: 'Voir la mer', href: '#footer-business' }
  const menu = site.menuSections ?? []
  const avis = site.testimonials ?? []
  const shots = site.gallery ?? []

  const isDaySection = (title) =>
    /café|matin|extraits|brunch|jus|espresso|v60|flat/i.test(title)

  return (
    <div
      className="min-h-[100dvh]"
      style={{
        color: t,
        fontFamily: site.fontFamilyBody,
        backgroundColor: p,
        backgroundImage: `linear-gradient(180deg, #fef9f3 0%, ${p} 28%, #f0e8de 100%)`,
      }}
    >
      <style>{`
        .bc-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <header className="border-b border-[#2a2118]/10 px-5 pb-10 pt-20 text-center md:px-12 md:pt-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#6b5c4d]">{site.tagline}</p>
        <h1 className="bc-h mt-4 text-3xl font-medium text-[#2a2118] md:text-4xl">{site.name}</h1>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-[#5c4d42]">
          <a href="#cote-hero" className="hover:text-[#2a5d4a]">
            Accueil
          </a>
          <a href="#cote-double" className="hover:text-[#2a5d4a]">
            Jour & nuit
          </a>
          <a href="#cote-carte" className="hover:text-[#2a5d4a]">
            Carte
          </a>
          <a href="#cote-contact" className="hover:text-[#2a5d4a]">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="cote-hero" className="scroll-mt-24 px-5 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl gap-6 overflow-hidden rounded-3xl border border-[#c4a574]/35 shadow-xl md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center bg-gradient-to-br from-[#fff7ec] to-[#f5e6d3] p-8 md:p-12"
            >
              <div className="flex items-center gap-2 text-[#b8860b]">
                <Coffee className="h-5 w-5" aria-hidden />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Jour</span>
              </div>
              <p className="bc-h mt-4 text-xl leading-snug text-[#3d3428] md:text-2xl">Cafés extraits, brunch du port.</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5c4d42]">Lumière large, terrasse au sel.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="flex flex-col justify-center bg-gradient-to-br from-[#1e3d38] to-[#2a5d4a] p-8 text-[#f5f0e8] md:p-12"
            >
              <div className="flex items-center gap-2 text-[#e8a87c]">
                <Moon className="h-5 w-5" aria-hidden />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Nuit</span>
              </div>
              <p className="bc-h mt-4 text-xl leading-snug md:text-2xl">Tapas, spritz, même équipe.</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">Le soleil couchant sur la Promenade.</p>
            </motion.div>
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="bc-h text-lg leading-relaxed text-[#3d3428] md:text-xl">{headline}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#5c4d42]">{site.hero.subline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={ctaPrimary.href}
                className="bc-h rounded-full bg-[#2a5d4a] px-8 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#fef9f3] shadow-md transition hover:bg-[#234a42]"
              >
                {ctaPrimary.label}
              </a>
              <a href={ctaSecondary.href} className="text-xs font-medium uppercase tracking-wider text-[#8b6914] underline decoration-2 underline-offset-4">
                {ctaSecondary.label}
              </a>
            </div>
          </div>
        </section>

        <section id="cote-double" className="scroll-mt-24 px-5 py-14 md:px-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#d4c4b0]/80 bg-white/60 p-8 shadow-inner md:p-12">
            <h2 className="bc-h text-center text-2xl text-[#2a2118]">{site.about.title}</h2>
            <div className="mt-8 space-y-5 text-center text-sm leading-relaxed text-[#4a4036] md:text-base">
              {site.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="cote-carte" className="scroll-mt-24 px-5 py-16 md:px-12">
          <h2 className="bc-h text-center text-2xl text-[#2a2118] md:text-3xl">Ce qu’on sert</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[#6b5c4d]">Une carte qui suit le soleil.</p>
          <div className="mx-auto mt-14 max-w-3xl space-y-16">
            {menu.map((sec, si) => {
              const day = isDaySection(sec.title)
              return (
                <div
                  key={si}
                  className="rounded-2xl border p-8 shadow-sm md:p-10"
                  style={{
                    borderColor: day ? 'rgba(42, 93, 74, 0.25)' : 'rgba(232, 168, 124, 0.45)',
                    backgroundColor: day ? 'rgba(255, 252, 248, 0.95)' : 'rgba(30, 61, 56, 0.06)',
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    {day ? (
                      <Coffee className="h-4 w-4 text-[#2a5d4a]" aria-hidden />
                    ) : (
                      <Moon className="h-4 w-4 text-[#c45c3e]" aria-hidden />
                    )}
                    <h3 className="bc-h text-center text-lg font-medium text-[#2a2118]">{sec.title}</h3>
                  </div>
                  <ul className="mt-8 space-y-6">
                    {sec.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex flex-col gap-1 border-b border-[#2a2118]/10 pb-6 last:border-0 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <div>
                          <p className="bc-h text-base font-medium text-[#2a2118]">{item.name}</p>
                          {item.ingredients && (
                            <p className="mt-1 text-sm text-[#5c4d42]">{item.ingredients}</p>
                          )}
                        </div>
                        <span className="bc-h shrink-0 text-base tabular-nums text-[#2a5d4a]">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="scroll-mt-24 px-5 py-12 md:px-12">
          <h2 className="bc-h text-center text-xl text-[#2a2118]">Sur la Promenade</h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {shots.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-[#d4c4b0]/60 bg-white shadow-sm">
                <div
                  className="aspect-[4/3] w-full"
                  style={{
                    background: `linear-gradient(135deg, #e8f4f1, ${s}66, #fef9f3)`,
                  }}
                />
                <figcaption className="px-2 py-2 text-center text-[10px] leading-tight text-[#5c4d42]">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="scroll-mt-24 rounded-t-[2rem] px-5 py-14 md:px-12" style={{ backgroundColor: '#e8dfd4' }}>
          <h2 className="bc-h text-center text-xl text-[#2a2118]">Ils en parlent</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {avis.map((a, i) => (
              <div key={i} className="rounded-xl bg-white/80 p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-[#4a4036]">« {a.text} »</p>
                <p className="mt-3 text-[11px] font-semibold text-[#2a5d4a]">{a.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-mt-24 px-5 py-12 md:px-12">
          <div className="mx-auto max-w-2xl">
            <SectionFAQ site={site} />
          </div>
        </section>

        <section id="cote-contact" className="scroll-mt-24 px-5 py-16 md:px-12">
          <div className="mx-auto max-w-xl">
            <h2 className="bc-h text-center text-2xl text-[#2a2118]">{site.contact.sectionTitle}</h2>
            <div className="mt-10">
              <ContactForm contact={site.contact} site={site} />
            </div>
          </div>
        </section>

        <section id="footer-business" className="scroll-mt-24 px-5 py-12 md:px-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#d4c4b0]/60 bg-white/70 p-8">
            <h2 className="bc-h text-lg text-[#2a2118]">{site.location.sectionTitle}</h2>
            <p className="mt-2 text-sm text-[#5c4d42]">{site.location.hours}</p>
            <div className="mt-6">
              <FakeMap location={site.location} site={site} />
            </div>
          </div>
        </section>

        <BusinessFooter site={site} />
      </main>
    </div>
  )
}
