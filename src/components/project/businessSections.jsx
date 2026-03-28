import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function SectionDetailedMenu({ site }) {
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

export function SectionTestimonials({ site }) {
  const list = site.testimonials
  if (!list?.length) return null
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  return (
    <div className="mx-auto max-w-5xl">
      <h2
        className="pv-heading text-2xl font-semibold md:text-3xl"
        style={{ color: t }}
      >
        Avis clients
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((av, i) => (
          <blockquote
            key={i}
            className="flex flex-col rounded-2xl border p-5 shadow-sm"
            style={{
              borderColor: `${s}44`,
              backgroundColor: `${p}cc`,
            }}
          >
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
          </blockquote>
        ))}
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
            Propulsé par TrstnWeb
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
