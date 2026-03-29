/**
 * Craft beer & DJ — Le Zinc Bleu : néon cyan, grille animée, bandeau défilant,
 * barre d’action fixe, énergie club sans chichis.
 */
import { useState } from 'react'
import { Menu, X, Radio } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ContactForm } from '../mini/ContactForm.jsx'
import { FakeMap } from '../mini/FakeMap.jsx'
import { BusinessFooter, SectionFAQ, SectionGallery } from '../project/businessSections.jsx'

const cardV = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function BarCraftTaproomExperience({ site, onBack }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const headline = site.valueProposition ?? site.hero.headline
  const ctaPrimary = site.ctaPrimary ?? { label: site.hero.cta, href: '#zinc-contact' }
  const [drawer, setDrawer] = useState(false)
  const menu = site.menuSections ?? []
  const avis = site.testimonials ?? []
  let idx = 0

  const nav = [
    { href: '#zinc-top', label: 'Top' },
    { href: '#zinc-carte', label: 'Fûts' },
    { href: '#zinc-avis', label: 'Avis' },
    { href: '#zinc-photos', label: 'Photos' },
    { href: '#zinc-faq', label: 'Infos' },
    { href: '#zinc-contact', label: 'Event' },
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
        .zc-h { font-family: ${site.fontFamilyHeading}; }
      `}</style>
      <BackButton onClick={onBack} site={site} />

      <div
        className="fixed left-0 right-0 top-0 z-[860] overflow-hidden border-b py-1.5"
        style={{ borderColor: `${s}55`, backgroundColor: site.primaryColor }}
      >
        <motion.div
          className="zc-h flex whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.35em]"
          style={{ color: s }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {Array(2)
            .fill('Tap takeover vendredi · 20 tireuses · happy hour 17h–20h · DJ jeudi au samedi · ')
            .map((chunk, i) => (
              <span key={i} className="inline-block px-6">
                {chunk}
              </span>
            ))}
        </motion.div>
      </div>

      <header
        id="zinc-top"
        className="fixed left-0 right-0 top-8 z-[850] flex items-center justify-between gap-3 border-b px-4 py-3 backdrop-blur-md md:px-8"
        style={{ borderColor: `${s}33`, backgroundColor: `${p}e8` }}
      >
        <div className="flex min-w-0 items-center gap-2">
          <Radio className="h-5 w-5 shrink-0" style={{ color: s }} aria-hidden />
          <div className="min-w-0">
            <p className="zc-h truncate text-base font-bold uppercase leading-none tracking-tight md:text-lg" style={{ color: t }}>
              {site.name}
            </p>
            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider opacity-80" style={{ color: s }}>
              {site.tagline}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={ctaPrimary.href}
            className="zc-h hidden rounded-md px-4 py-2 text-[10px] font-bold uppercase tracking-wide shadow-[0_0_24px_-4px] sm:inline-flex"
            style={{ backgroundColor: s, color: site.primaryColor, boxShadow: `0 0 24px -4px ${s}` }}
          >
            {ctaPrimary.label}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
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
            className="fixed inset-0 z-[840] bg-black/70 backdrop-blur-sm md:hidden"
            onClick={() => setDrawer(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="ml-auto flex h-full w-[min(100%,17rem)] flex-col gap-1 border-l p-6 pt-28"
              style={{ backgroundColor: p, borderColor: `${s}44` }}
              onClick={(e) => e.stopPropagation()}
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-bold uppercase"
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

      <main className="pt-32">
        <section
          className="relative overflow-hidden px-5 pb-12 pt-4 md:px-10"
          style={{
            background: `linear-gradient(145deg, ${site.primaryColor} 0%, ${p} 50%, ${s}12 100%)`,
          }}
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: s, opacity: 0.25 }} aria-hidden />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="relative z-[1] max-w-3xl">
            <span className="zc-h inline-block rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest" style={{ borderColor: s, color: s }}>
              Canal · Paris 19e
            </span>
            <h1 className="zc-h mt-6 text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl" style={{ color: t }}>
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed md:text-base" style={{ color: t, opacity: 0.9 }}>
              {site.hero.subline}
            </p>
          </motion.div>
        </section>

        <nav className="sticky top-[7.25rem] z-30 hidden border-b py-2 md:block" style={{ borderColor: `${s}22`, backgroundColor: `${p}f0` }}>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5 px-6">
            {nav.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="text-[10px] font-bold uppercase tracking-wider opacity-80 hover:opacity-100" style={{ color: t }}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="zinc-esprit" className="scroll-mt-28 px-5 py-12 md:px-10">
          <div className="mx-auto max-w-3xl rounded-2xl border p-8 md:p-10" style={{ borderColor: `${s}44`, backgroundColor: `${site.primaryColor}99` }}>
            <h2 className="zc-h text-xl font-bold uppercase md:text-2xl" style={{ color: t }}>
              {site.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-base" style={{ color: t, opacity: 0.88 }}>
              {site.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="zinc-carte" className="scroll-mt-28 px-5 py-10 md:px-10">
          <h2 className="zc-h text-center text-2xl font-black uppercase italic md:text-3xl" style={{ color: t }}>
            Carte des fûts
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm opacity-85" style={{ color: t }}>
            Rotation hebdo — demandez l’ardoise au comptoir.
          </p>
          <div className="mx-auto mt-12 max-w-6xl space-y-14">
            {menu.map((sec, si) => (
              <div key={si}>
                <h3 className="zc-h text-sm font-black uppercase tracking-[0.2em]" style={{ color: s }}>
                  {sec.title}
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.items.map((item, ii) => {
                    const i = idx++
                    return (
                      <motion.article
                        key={ii}
                        custom={i}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-30px' }}
                        variants={cardV}
                        className="overflow-hidden rounded-xl border-2 shadow-lg"
                        style={{ borderColor: `${s}55`, backgroundColor: p }}
                      >
                        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${s}, ${site.primaryColor}, ${s})` }} aria-hidden />
                        <div className="p-4">
                          <p className="zc-h text-lg font-bold leading-tight" style={{ color: t }}>
                            {item.name}
                          </p>
                          {item.ingredients && (
                            <p className="mt-2 text-xs leading-relaxed opacity-85" style={{ color: t }}>
                              {item.ingredients}
                            </p>
                          )}
                          <p className="zc-h mt-4 text-xl font-black tabular-nums" style={{ color: s }}>
                            {item.price}
                          </p>
                        </div>
                      </motion.article>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="zinc-avis" className="scroll-mt-28 px-5 py-12 md:px-10" style={{ backgroundColor: `${site.primaryColor}44` }}>
          <h2 className="zc-h text-center text-xl font-black uppercase" style={{ color: t }}>
            La salle réagit
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {avis.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border-2 p-4"
                style={{ borderColor: `${s}44`, backgroundColor: p }}
              >
                <p className="text-sm leading-relaxed" style={{ color: t }}>
                  {a.text}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-wider" style={{ color: s }}>
                  {a.name} · {a.rating}/5
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="zinc-photos" className="scroll-mt-28 px-5 py-10 md:px-10">
          <SectionGallery site={site} />
        </section>

        <section id="zinc-faq" className="scroll-mt-28 px-5 py-10 md:px-10">
          <SectionFAQ site={site} />
        </section>

        <section id="zinc-contact" className="scroll-mt-28 px-5 py-12 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="zc-h text-2xl font-black uppercase italic" style={{ color: t }}>
              {site.contact.sectionTitle}
            </h2>
            <div className="mt-8">
              <ContactForm contact={site.contact} site={site} />
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 px-5 py-10 md:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="zc-h text-lg font-bold uppercase" style={{ color: t }}>
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
        style={{ borderColor: s, backgroundColor: `${p}f2` }}
      >
        <span className="text-[9px] font-bold uppercase tracking-wider opacity-80" style={{ color: t }}>
          Pinte dès 7,50€
        </span>
        <a
          href={ctaPrimary.href}
          className="zc-h shrink-0 rounded-md px-5 py-2.5 text-[10px] font-black uppercase tracking-wide"
          style={{ backgroundColor: s, color: site.primaryColor }}
        >
          {ctaPrimary.label}
        </a>
      </div>
    </div>
  )
}
