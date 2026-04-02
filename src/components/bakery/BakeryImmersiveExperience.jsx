/**
 * Mini-site boulangerie immersif — hero chaud, Le Fournil, carte du matin à onglets, barre d’action fixe.
 * Partagé par les trois projets catégorie Boulangerie.
 */
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ShoppingBag } from 'lucide-react'
import { SITE } from '../../constants.js'
import {
  BAKERY_FOURNIL_DEFAULT,
  BAKERY_HERO_IMAGE,
  BAKERY_IMMERSIVE_PALETTE,
  BAKERY_MORNING_MENU_DEFAULT,
  BAKERY_TAB_ORDER,
} from '../../data/bakeryImmersiveContent.js'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'

const { creme: CREME, ink: INK, gold: GOLD } = BAKERY_IMMERSIVE_PALETTE
const SERIF = '"Cormorant Garamond", Georgia, serif'
const SANS = '"Inter", system-ui, sans-serif'

const listParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
}

function useMapsUrl(site) {
  return useMemo(() => {
    const loc = site?.location
    if (!loc?.street) return '#'
    const q = `${loc.street}, ${loc.postalCode} ${loc.city}, ${loc.country}`
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
  }, [site])
}

export function BakeryImmersiveExperience({ site, onBack }) {
  const [tab, setTab] = useState('viennoiseries')
  const mapsUrl = useMapsUrl(site)

  const heroImage = site?.bakeryImmersive?.heroImage ?? BAKERY_HERO_IMAGE
  const fournil = { ...BAKERY_FOURNIL_DEFAULT, ...site?.bakeryImmersive?.fournil }
  const morningMenu = site?.bakeryImmersive?.morningMenu ?? BAKERY_MORNING_MENU_DEFAULT

  const items = morningMenu[tab] ?? []

  const shellSite = useMemo(
    () => ({
      ...site,
      surfaceColor: CREME,
      textColor: INK,
      portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(26,26,26,0.16)' },
    }),
    [site],
  )

  const mailOrder = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('Commande pour demain — ' + (site?.name ?? 'Boulangerie'))}`

  const headline = site?.hero?.headline ?? site?.name ?? 'Boulangerie artisanale'
  const subline =
    site?.hero?.subline ??
    'Farines des Landes et du Pays basque, levain vivant, four à pierre — chaque matin.'

  return (
    <div
      className="relative min-h-full overflow-x-hidden overflow-y-auto pb-28"
      style={{ backgroundColor: CREME, color: INK, fontFamily: SANS }}
    >
      <style>{`
        .bakery-serif { font-family: ${SERIF}; }
      `}</style>

      {/* Header fixe — fond opaque + safe area (aucun « trou ») */}
      <header
        className="fixed left-0 right-0 top-0 z-[100] border-b shadow-sm"
        style={{
          backgroundColor: CREME,
          borderColor: `${INK}14`,
          boxShadow: '0 1px 0 0 rgba(26,26,26,0.06)',
        }}
      >
        <div
          className="mx-auto flex max-w-3xl items-center gap-3 px-4 pb-3 pt-[max(0.5rem,env(safe-area-inset-top))]"
        >
          <BackButton variant="inline" onClick={onBack} site={shellSite} />
          <p className="bakery-serif min-w-0 flex-1 truncate text-[15px] font-semibold tracking-tight text-[#1A1A1A]">
            {site?.name}
          </p>
        </div>
      </header>

      <div
        className="mx-auto max-w-3xl px-4 pt-[calc(3.5rem+env(safe-area-inset-top))]"
      >
        {/* Hero */}
        <section className="relative mt-2 overflow-hidden rounded-2xl border border-[#1A1A1A]/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
          <div className="relative min-h-[min(72dvh,520px)] w-full">
            <SafeImg
              src={heroImage}
              fallback={BAKERY_HERO_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                filter: 'sepia(0.12) saturate(1.2) contrast(1.06) brightness(1.02)',
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/88 via-[#C5A059]/25 to-amber-100/10"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-amber-100/90">Artisanat & matin</p>
              <h1 className="bakery-serif mt-3 text-[clamp(1.75rem,5vw,2.35rem)] font-light leading-[1.15] text-[#FDFBF7]">
                {headline}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#FDFBF7]/92">{subline}</p>
            </div>
          </div>
        </section>

        {/* Le Fournil */}
        <section id="fournil" className="mt-14 scroll-mt-28">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em]" style={{ color: GOLD }}>
            {fournil.kicker}
          </p>
          <h2 className="bakery-serif mt-3 text-2xl font-light text-[#1A1A1A] sm:text-[1.75rem]">{fournil.title}</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-[#1A1A1A]/88">
            {fournil.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>

        {/* La Carte du matin — onglets */}
        <section id="carte-matin" className="mt-16 scroll-mt-28 pb-12">
          <h2 className="bakery-serif text-2xl font-light text-[#1A1A1A]">La Carte du matin</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#1A1A1A]/75">
            Prix indicatifs — vitrine renouvelée chaque lever du jour.
          </p>

          <div
            className="mt-6 flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Catégories du menu"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {BAKERY_TAB_ORDER.map(({ id, label }) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(id)}
                  className={[
                    'shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors',
                    active
                      ? 'border-[#C5A059] bg-[#1A1A1A] text-[#FDFBF7]'
                      : 'border-[#1A1A1A]/12 bg-[#FDFBF7] text-[#1A1A1A]/75 hover:border-[#C5A059]/50',
                  ].join(' ')}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <motion.ul
            key={tab}
            className="mt-8 space-y-2"
            variants={listParent}
            initial="hidden"
            animate="show"
          >
            {items.map((row) => (
              <motion.li
                key={row.name}
                variants={listItem}
                className="flex gap-4 rounded-xl border border-[#1A1A1A]/8 bg-white/60 p-3 shadow-sm backdrop-blur-sm"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-[#1A1A1A]/10 sm:h-[72px] sm:w-[72px] sm:rounded-xl">
                  <SafeImg
                    src={row.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="bakery-serif text-[17px] font-medium leading-snug text-[#1A1A1A]">{row.name}</h3>
                    <span className="shrink-0 text-[14px] font-semibold tabular-nums" style={{ color: GOLD }}>
                      {row.price}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#1A1A1A]/72">{row.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      {/* Bottom bar — CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#1A1A1A]/10 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3"
        style={{
          backgroundColor: CREME,
          boxShadow: '0 -8px 28px -12px rgba(0,0,0,0.12)',
        }}
      >
        <div className="mx-auto flex max-w-3xl gap-3">
          <a
            href={mailOrder}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1A1A1A]/15 bg-[#1A1A1A] px-4 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FDFBF7] transition hover:bg-[#2a2a2a]"
          >
            <ShoppingBag className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            Commander pour demain
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.14em] transition hover:bg-[#1A1A1A]/5"
            style={{ borderColor: `${GOLD}66`, color: INK }}
          >
            <MapPin className="h-4 w-4 shrink-0" style={{ color: GOLD }} aria-hidden />
            Localiser
          </a>
        </div>
      </div>
    </div>
  )
}
