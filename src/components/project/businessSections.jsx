import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

function SectionDetailedMenuDefault({ site }) {
  const sections = site.menuSections
  if (!sections?.length) return null
  const t = site.textColor
  const s = site.secondaryColor

  return (
    <div className="mx-auto max-w-4xl">
      <h2
        className="pv-heading text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        Carte & prestations
      </h2>
      <p className="mt-2 text-sm opacity-85" style={{ color: t }}>
        Ingrédients et durées indicatives — le détail peut varier selon arrivages.
      </p>
      <div className="mt-12 space-y-14">
        {sections.map((sec, si) => (
          <div key={si}>
            <h3
              className="border-b pb-2 text-lg font-semibold uppercase tracking-wide md:text-xl"
              style={{ borderColor: `${s}55`, color: s }}
            >
              {sec.title}
            </h3>
            <ul className="mt-6 space-y-6">
              {sec.items.map((item, ii) => (
                <li
                  key={ii}
                  className="flex flex-col gap-2 border-b pb-6 last:border-0 sm:flex-row sm:items-start sm:justify-between"
                  style={{ borderColor: `${s}33` }}
                >
                  <div className="max-w-xl">
                    <p className="text-lg font-medium" style={{ color: t }}>
                      {item.name}
                    </p>
                    {item.ingredients && (
                      <p className="mt-1 text-sm leading-relaxed opacity-85" style={{ color: t }}>
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                  <span
                    className="shrink-0 text-lg font-semibold tabular-nums"
                    style={{ color: s }}
                  >
                    {item.price ?? item.pricePerKg}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Gastronomique : colonne étroite, respiration, filets fins. */
function SectionDetailedMenuFine({ site }) {
  const sections = site.menuSections
  if (!sections?.length) return null
  const t = site.textColor
  const s = site.secondaryColor

  return (
    <div className="mx-auto max-w-xl px-1">
      <div className="text-center">
        <p
          className="text-[10px] font-medium uppercase tracking-[0.45em] opacity-75"
          style={{ color: s }}
        >
          Carte
        </p>
        <h2
          className="pv-heading mt-4 text-3xl font-light italic md:text-[2.1rem]"
          style={{ color: t, fontFamily: site.fontFamilyHeading }}
        >
          Menus & assiettes
        </h2>
        <div className="mx-auto mt-6 h-px max-w-[6rem]" style={{ backgroundColor: `${s}99` }} />
      </div>
      <div className="mt-16 space-y-20">
        {sections.map((sec, si) => (
          <div key={si}>
            <h3
              className="text-center text-[11px] font-medium uppercase tracking-[0.35em] opacity-90"
              style={{ color: s }}
            >
              {sec.title}
            </h3>
            <ul className="mt-10 space-y-10">
              {sec.items.map((item, ii) => (
                <li
                  key={ii}
                  className="border-b pb-10 last:border-0"
                  style={{ borderColor: `${s}28` }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-md">
                      <p
                        className="text-lg font-light leading-snug md:text-xl"
                        style={{ color: t, fontFamily: site.fontFamilyHeading }}
                      >
                        {item.name}
                      </p>
                      {item.ingredients && (
                        <p
                          className="mt-2 text-sm font-light leading-relaxed"
                          style={{ color: t, opacity: 0.82 }}
                        >
                          {item.ingredients}
                        </p>
                      )}
                    </div>
                    <span
                      className="shrink-0 text-base font-light tabular-nums tracking-wide md:text-lg"
                      style={{ color: s }}
                    >
                      {item.price ?? item.pricePerKg}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Bistro : ardoise unique, ton décontracté. */
function SectionDetailedMenuBistro({ site }) {
  const sections = site.menuSections
  if (!sections?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  return (
    <div className="mx-auto max-w-lg">
      <h2
        className="pv-heading text-center text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        L’ardoise du moment
      </h2>
      <p className="mt-2 text-center text-sm opacity-85" style={{ color: t }}>
        Selon le marché — on ajuste les lignes chaque matin.
      </p>
      <div
        className="mt-10 rounded-lg border-4 px-5 py-8 shadow-2xl md:px-8 md:py-12"
        style={{
          borderColor: `${s}cc`,
          backgroundColor: p,
          backgroundImage: `linear-gradient(165deg, ${p} 0%, ${site.primaryColor}ee 100%)`,
        }}
      >
        <div className="space-y-10">
          {sections.map((sec, si) => (
            <div key={si}>
              <h3
                className="border-b border-dashed pb-2 text-left text-base font-semibold uppercase tracking-[0.12em] opacity-95"
                style={{ borderColor: `${s}55`, color: s }}
              >
                {sec.title}
              </h3>
              <ul className="mt-5 space-y-5">
                {sec.items.map((item, ii) => (
                  <li key={ii} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                    <div>
                      <p className="font-medium leading-snug" style={{ color: t }}>
                        {item.name}
                      </p>
                      {item.ingredients && (
                        <p className="mt-1 text-sm opacity-85" style={{ color: t }}>
                          {item.ingredients}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 font-semibold tabular-nums" style={{ color: s }}>
                      {item.price ?? item.pricePerKg}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const fastCardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
}

/** Fast food : grille animée, punch visuel. */
function SectionDetailedMenuFast({ site }) {
  const sections = site.menuSections
  if (!sections?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  let cardIndex = 0

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            className="pv-heading text-3xl font-black uppercase italic tracking-tight md:text-4xl"
            style={{ color: t }}
          >
            Au comptoir
          </h2>
          <p className="mt-1 text-sm font-medium opacity-90" style={{ color: s }}>
            Cliquez, chopez, dégustez — tout est prêt en un éclair.
          </p>
        </div>
        <span
          className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: s, color: site.primaryColor }}
        >
          Menu midi & soir
        </span>
      </div>
      <div className="mt-12 space-y-12">
        {sections.map((sec, si) => (
          <div key={si}>
            <h3
              className="inline-block rounded-lg px-3 py-1 text-sm font-bold uppercase tracking-wide"
              style={{ backgroundColor: `${s}33`, color: t }}
            >
              {sec.title}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((item, ii) => {
                const i = cardIndex++
                return (
                  <motion.article
                    key={ii}
                    className="flex flex-col overflow-hidden rounded-2xl border-2 shadow-lg"
                    style={{ borderColor: `${s}66`, backgroundColor: p }}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fastCardVariants}
                  >
                    <div
                      className="h-2 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${site.primaryColor}, ${s}, ${site.primaryColor})`,
                      }}
                      aria-hidden
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <p
                        className="text-[10px] font-bold uppercase tracking-wider opacity-80"
                        style={{ color: s }}
                      >
                        {sec.title}
                      </p>
                      <p
                        className="mt-2 flex-1 text-base font-bold leading-tight"
                        style={{ color: t, fontFamily: site.fontFamilyHeading }}
                      >
                        {item.name}
                      </p>
                      {item.ingredients && (
                        <p className="mt-2 text-xs leading-relaxed opacity-85" style={{ color: t }}>
                          {item.ingredients}
                        </p>
                      )}
                      <p
                        className="mt-4 text-xl font-black tabular-nums"
                        style={{ color: s }}
                      >
                        {item.price ?? item.pricePerKg}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SectionDetailedMenu({ site }) {
  const sections = site.menuSections
  if (!sections?.length) return null
  const mp = site.menuPresentation
  if (mp === 'fine-dining') return <SectionDetailedMenuFine site={site} />
  if (mp === 'bistro') return <SectionDetailedMenuBistro site={site} />
  if (mp === 'fast-food') return <SectionDetailedMenuFast site={site} />
  return <SectionDetailedMenuDefault site={site} />
}

const testimonialCardClass =
  'flex flex-col rounded-2xl border p-5 shadow-sm'

export function SectionTestimonials({ site }) {
  const list = site.testimonials
  if (!list?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor
  const isFast = site.menuPresentation === 'fast-food'

  return (
    <div className="mx-auto max-w-5xl">
      <h2
        className="pv-heading text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        Avis clients
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((av, i) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-2">
                <cite className="not-italic font-semibold" style={{ color: t }}>
                  {av.name}
                </cite>
                <span className="text-sm font-bold tabular-nums" style={{ color: s }}>
                  {av.rating}/5
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-95" style={{ color: t }}>
                « {av.text} »
              </p>
            </>
          )
          if (isFast) {
            return (
              <motion.blockquote
                key={i}
                className={`${testimonialCardClass} ${isFast ? 'rounded-3xl border-2 shadow-lg' : ''}`}
                style={{
                  borderColor: `${s}55`,
                  backgroundColor: `${p}ee`,
                }}
                initial={{ opacity: 0, y: 22, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {inner}
              </motion.blockquote>
            )
          }
          return (
            <blockquote
              key={i}
              className={testimonialCardClass}
              style={{
                borderColor: `${s}44`,
                backgroundColor: `${p}cc`,
              }}
            >
              {inner}
            </blockquote>
          )
        })}
      </div>
    </div>
  )
}

export function SectionGallery({ site }) {
  const items = site.gallery
  if (!items?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  return (
    <div className="mx-auto max-w-6xl">
      <h2
        className="pv-heading text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        Galerie
      </h2>
      <p className="mt-2 text-sm opacity-80" style={{ color: t }}>
        Aperçu de l’atelier — visuels représentatifs.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((g, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-xl border"
            style={{ borderColor: `${s}44` }}
          >
            <div
              className="aspect-[4/3] w-full transition duration-500 group-hover:scale-[1.02]"
              style={{
                background: `linear-gradient(145deg, ${site.primaryColor}cc, ${s}66, ${p})`,
              }}
            />
            <figcaption
              className="border-t px-2 py-2 text-center text-[11px] leading-snug opacity-90"
              style={{ borderColor: `${s}33`, color: t }}
            >
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export function SectionFAQ({ site }) {
  const items = site.faq
  const [open, setOpen] = useState(0)
  if (!items?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  return (
    <div className="mx-auto max-w-2xl">
      <h2
        className="pv-heading text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        Questions fréquentes
      </h2>
      <div className="mt-8 space-y-2">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className="overflow-hidden rounded-xl border"
              style={{ borderColor: `${s}44`, backgroundColor: `${p}ee` }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold md:text-base"
                style={{ color: t }}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  style={{ color: s }}
                />
              </button>
              {isOpen && (
                <div
                  className="border-t px-4 py-3 text-sm leading-relaxed"
                  style={{ borderColor: `${s}33`, color: t }}
                >
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function BusinessFooter({ site }) {
  const t = site.textColor
  const s = site.secondaryColor
  const loc = site.location
  const fullAddress = `${loc.street}, ${loc.postalCode} ${loc.city}`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress + ', ' + loc.country)}`
  const oh = site.openingHours

  return (
    <footer
      id="footer-business"
      className="border-t px-5 py-12 md:px-10"
      style={{ borderColor: `${s}55`, backgroundColor: site.primaryColor }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-75" style={{ color: s }}>
            Horaires
          </p>
          {oh && (
            <ul className="mt-3 space-y-1 text-sm" style={{ color: t }}>
              <li>Lun. {oh.lundi}</li>
              <li>Mar. {oh.mardi}</li>
              <li>Mer. {oh.mercredi}</li>
              <li>Jeu. {oh.jeudi}</li>
              <li>Ven. {oh.vendredi}</li>
              <li>Sam. {oh.samedi}</li>
              <li>Dim. {oh.dimanche}</li>
            </ul>
          )}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-75" style={{ color: s }}>
            Adresse
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm underline decoration-2 underline-offset-4 transition hover:opacity-90"
            style={{ color: t }}
          >
            {fullAddress}
            <br />
            {loc.country}
          </a>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-75" style={{ color: s }}>
            Suivre
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium"
            style={{ color: s }}
          >
            Instagram →
          </a>
          <p
            className="mt-8 text-[10px] font-medium uppercase tracking-[0.35em] opacity-70"
            style={{ color: t }}
          >
            Conçu par TrstnWeb
          </p>
          <p className="mt-2 text-xs opacity-60" style={{ color: t }}>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t pt-8" style={{ borderColor: `${s}33` }}>
        <TrstnFooterVariant site={site} />
      </div>
    </footer>
  )
}

/** Variante de mention design en plus du footer business */
function TrstnFooterVariant({ site }) {
  const v = site.trstnSignature ?? 'bottom-right-caps'
  const t = site.textColor
  const s = site.secondaryColor
  if (v === 'center-italic') {
    return (
      <p className="text-center text-[8px] italic opacity-40" style={{ color: t }}>
        Designé par TrstnWeb
      </p>
    )
  }
  if (v === 'footer-bar') {
    return (
      <p className="text-center text-[8px] font-bold uppercase tracking-[0.2em] opacity-50" style={{ color: s }}>
        Designé par TrstnWeb
      </p>
    )
  }
  return (
    <p className="text-right text-[8px] font-medium uppercase tracking-[0.35em] opacity-60" style={{ color: t }}>
      Designé par TrstnWeb
    </p>
  )
}
