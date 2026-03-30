/**
 * La Boulangerie Traditionnelle — terroir, levain, farines.
 * Navigation latérale type « reliure », pas de hero / navbar / footer génériques.
 */
import { motion } from 'framer-motion'
import { Cake, Clock, Croissant, MapPin, Phone, Wheat } from 'lucide-react'

const BG = '#faf8f3'
const INK = '#3e2723'
const WHEAT = '#b8860b'
const PAPER = '#e8e0d5'
const HEADING = '"Bitter", Georgia, serif'
const BODY = '"Merriweather", Georgia, serif'

const DEF_SECTIONS = [
  {
    title: 'Pains',
    items: [
      { name: 'Baguette tradition', price: '1,30€', ingredients: 'Pointage lent, grigne ouverte' },
      { name: 'Pain de campagne', price: '4,20€', ingredients: 'Levain, autolyse 30 min' },
      { name: 'Pain aux céréales', price: '4,80€', ingredients: 'Alvéolage serré, mie tenue' },
    ],
  },
  {
    title: 'Viennoiseries',
    items: [
      { name: 'Croissant pur beurre', price: '1,40€', ingredients: 'Tourage 3×3' },
      { name: 'Pain au chocolat', price: '1,60€', ingredients: 'Barres 44 %' },
    ],
  },
  {
    title: 'Pâtisseries',
    items: [
      { name: 'Tarte aux fruits', price: '4,50€', ingredients: 'Crème d’amande, saison' },
      { name: 'Éclair au chocolat', price: '4,20€', ingredients: 'Pâte à choux, glaçage' },
    ],
  },
]

function NavSpine() {
  const links = [
    { href: '#trad-specialites', label: 'Spécialités' },
    { href: '#trad-histoire', label: 'Histoire' },
    { href: '#trad-venir', label: 'Venir' },
  ]
  return (
    <nav
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-full w-12 flex-col items-center justify-center gap-10 md:pointer-events-auto md:flex"
      aria-label="Sections"
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-[9px] uppercase tracking-[0.35em] opacity-55 transition hover:opacity-100"
          style={{
            fontFamily: HEADING,
            color: INK,
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}

function Retour({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed right-5 top-5 z-[100] rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.25em] shadow-sm transition hover:brightness-95"
      style={{
        fontFamily: HEADING,
        color: INK,
        backgroundColor: PAPER,
        borderColor: `${INK}22`,
      }}
      aria-label="Retour au portfolio"
    >
      quitter
    </button>
  )
}

export function BoulangerieTraditionnelleExperience({ site, onBack }) {
  const hero = site?.hero
  const about = site?.about
  const loc = site?.location
  const sections =
    site?.menuSections?.length > 0
      ? site.menuSections.map((s) => ({
          title: s.title,
          items: s.items.map((it) => ({
            name: it.name,
            price: it.price,
            ingredients: it.ingredients ?? it.note ?? '',
          })),
        }))
      : DEF_SECTIONS

  return (
    <div
      className="relative min-h-[100dvh] w-full overflow-x-hidden overflow-y-auto"
      style={{ backgroundColor: BG, color: INK, fontFamily: BODY }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, ${INK}14 1px, transparent 0)`,
          backgroundSize: '22px 22px',
        }}
      />
      <Retour onBack={onBack} />
      <NavSpine />

      <main className="relative z-[1] mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-8 md:pl-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start"
        >
          <div className="min-w-0">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.35em]"
              style={{
                borderColor: `${WHEAT}55`,
                backgroundColor: `${PAPER}cc`,
                fontFamily: HEADING,
              }}
            >
              <Wheat className="h-3.5 w-3.5" style={{ color: WHEAT }} aria-hidden />
              Levain naturel · Farines bio
            </p>
            <h1
              className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: HEADING }}
            >
              La Boulangerie
              <br />
              <span style={{ color: WHEAT }}>Traditionnelle</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              {hero?.subline ??
                'Depuis 1952, l’art du pain artisanal — pétri, fermenté et cuit chaque matin.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#trad-specialites"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-md transition hover:opacity-95"
                style={{ backgroundColor: WHEAT, color: BG, fontFamily: HEADING }}
              >
                Découvrir nos produits
              </a>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl border shadow-lg"
            style={{
              borderColor: `${INK}18`,
              backgroundColor: PAPER,
              boxShadow: '8px 12px 0 0 rgba(62, 39, 35, 0.06)',
              borderRadius: '1.25rem 1.75rem 1.1rem 1.4rem',
            }}
          >
            <div className="border-b px-5 py-4" style={{ borderColor: `${INK}14` }}>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-60" style={{ fontFamily: HEADING }}>
                Aujourd’hui
              </p>
              <p className="text-xl font-bold" style={{ fontFamily: HEADING }}>
                Pain du jour
              </p>
            </div>
            <div className="p-5">
              <div
                className="rounded-xl border p-4"
                style={{
                  borderColor: `${INK}22`,
                  backgroundColor: BG,
                  borderRadius: '0.85rem 1.1rem 0.95rem 1rem',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-lg">Campagne au levain</p>
                    <p className="text-sm opacity-80">Farine T80 · 24 h de fermentation</p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: WHEAT, color: BG, fontFamily: HEADING }}
                  >
                    Best-seller
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="opacity-75">Disponible</span>
                  <span className="font-bold" style={{ fontFamily: HEADING }}>
                    3,80€
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.header>

        <section id="trad-specialites" className="scroll-mt-24 pt-20">
          <h2
            className="mb-10 text-center text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ fontFamily: HEADING }}
          >
            Nos spécialités
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {sections.map((block, idx) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-lg border p-5 shadow-md"
                style={{
                  borderColor: `${INK}22`,
                  backgroundColor: BG,
                  boxShadow: '0 18px 40px -28px rgba(62, 39, 35, 0.35)',
                }}
              >
                <div className="mb-4 flex justify-center">
                  {(() => {
                    const Icon = [Wheat, Croissant, Cake][idx % 3]
                    return <Icon className="h-10 w-10" style={{ color: WHEAT }} aria-hidden />
                  })()}
                </div>
                <h3 className="mb-4 text-center text-lg font-bold" style={{ fontFamily: HEADING }}>
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {block.items.map((it) => (
                    <li key={it.name} className="border-b border-dashed pb-2 last:border-0" style={{ borderColor: `${INK}14` }}>
                      <div className="flex justify-between gap-2 font-semibold">
                        <span>{it.name}</span>
                        <span className="shrink-0 opacity-90">{it.price}</span>
                      </div>
                      {it.ingredients ? <p className="mt-1 text-xs opacity-75">{it.ingredients}</p> : null}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="trad-histoire" className="scroll-mt-24 pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl" style={{ fontFamily: HEADING }}>
                {about?.title ?? 'Notre histoire'}
              </h2>
              {(about?.paragraphs ?? []).map((p, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 shadow-xl"
              style={{
                backgroundColor: PAPER,
                boxShadow: '0 24px 50px -20px rgba(62, 39, 35, 0.35)',
                borderRadius: '1.5rem 1.1rem 1.35rem 1.2rem',
              }}
            >
              <div
                className="mb-4 flex aspect-square items-center justify-center rounded-xl"
                style={{ backgroundColor: `${WHEAT}33` }}
              >
                <Croissant className="h-24 w-24 opacity-40" style={{ color: INK }} aria-hidden />
              </div>
              <p className="text-center italic opacity-85">« Le pain, c’est la vie »</p>
            </motion.div>
          </div>
        </section>

        <section id="trad-venir" className="scroll-mt-24 pt-20">
          <h2
            className="mb-10 text-center text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ fontFamily: HEADING }}
          >
            {loc?.sectionTitle ?? 'Nous trouver'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: 'Adresse',
                info: [loc?.street, `${loc?.postalCode ?? ''} ${loc?.city ?? ''}`.trim()]
                  .filter(Boolean)
                  .join(', '),
              },
              {
                icon: Clock,
                title: 'Horaires',
                info: loc?.hours ?? 'Lun–Sam · 6h – 20h',
              },
              {
                icon: Phone,
                title: 'Accueil',
                info: 'Commandes & viennoiseries au comptoir',
              },
            ].map((row, idx) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-xl p-6 text-center shadow-md"
                style={{
                  backgroundColor: PAPER,
                  boxShadow: '0 18px 36px -24px rgba(62, 39, 35, 0.4)',
                }}
              >
                <row.icon className="mx-auto mb-3 h-8 w-8" style={{ color: WHEAT }} aria-hidden />
                <h3 className="mb-2 font-bold" style={{ fontFamily: HEADING }}>
                  {row.title}
                </h3>
                <p className="text-sm opacity-90">{row.info}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t pt-10 text-center text-xs opacity-70" style={{ borderColor: `${INK}18` }}>
          <p style={{ fontFamily: HEADING }}>
            © {new Date().getFullYear()} La Boulangerie Traditionnelle. Tous droits réservés.
          </p>
        </footer>
      </main>

      <p className="pointer-events-none fixed bottom-4 left-1/2 z-[2] -translate-x-1/2 text-[9px] uppercase tracking-[0.5em] opacity-30 md:hidden" style={{ fontFamily: HEADING }}>
        Spécialités · Histoire · Venir
      </p>
    </div>
  )
}
