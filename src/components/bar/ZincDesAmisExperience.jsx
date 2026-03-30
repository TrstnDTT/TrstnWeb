/**
 * Le Zinc des Amis — bistrot populaire : ardoise, grignotages, boissons du peuple, scroll profond.
 */
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'

const KRAFT = '#dcd3c4'
const ENCRE = '#0d0c0a'
const ACCENT = '#9a7b4a'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function MenuLine({ name, price, detail }) {
  return (
    <div className="border-b border-[#1a1814]/15 py-5 last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-[16px] font-medium text-[#1a1814]">{name}</span>
        <span className="shrink-0 tabular-nums text-[15px] text-[#5c4a38]">{price}</span>
      </div>
      {detail ? <p className="mt-2 text-[14px] leading-relaxed text-[#3d3a36]">{detail}</p> : null}
    </div>
  )
}

export function ZincDesAmisExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)

  const heading = site.fontFamilyHeading ?? '"Anton", system-ui, sans-serif'
  const body = site.fontFamilyBody ?? '"IBM Plex Sans", system-ui, sans-serif'
  const assets = site.zincDesAmisAssets ?? {
    facade: '/zinc-des-amis/zinc-facade.jpg',
    ambiance: '/zinc-des-amis/ambiance.jpg',
    habitues: '/zinc-des-amis/habitues.webp',
  }

  const zincIntro = site.zincIntro ?? ''
  const ardoise = site.ardoiseMidi ?? {
    titre: 'Ardoise du midi',
    entree: { nom: '', detail: '' },
    plat: { nom: '', detail: '', prix: '—' },
    dessert: { nom: '', detail: '' },
    formule: '',
    vin: '',
  }
  const grignoter = site.grignoter ?? []
  const boissonsPeuple = site.boissonsPeuple ?? []
  const temoignages = site.habituesTemoignages ?? []
  const avisSite = site.testimonials ?? []
  const hours = site.openingHours ?? {}

  const v = reduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : rise

  const anchors = [
    { id: 'zd-hero', label: 'Accueil' },
    { id: 'zd-ardoise', label: 'Midi' },
    { id: 'zd-grignoter', label: 'Grignoter' },
    { id: 'zd-boissons', label: 'Boissons' },
    { id: 'zd-ambiance', label: 'Salle' },
    { id: 'zd-habitues', label: 'Habitués' },
    { id: 'zd-infos', label: 'Horaires' },
  ]

  return (
    <div
      ref={rootRef}
      className="relative min-h-full overflow-x-hidden"
      style={{ backgroundColor: KRAFT, color: ENCRE, fontFamily: body }}
    >
      <style>{`
        .zd-h { font-family: ${heading}; font-weight: 400; letter-spacing: 0.02em; text-transform: uppercase; }
        .zd-stencil { letter-spacing: 0.14em; font-weight: 700; }
      `}</style>

      <BarExperienceChrome progress={progress} anchors={anchors} accentColor={ACCENT} dark={false} />

      <BackButton onClick={onBack} site={site} />

      {/* Hero */}
      <header id="zd-hero" className="relative scroll-mt-2 px-5 pb-10 pt-28 sm:px-10 md:px-16 md:pb-14 md:pt-32">
        <motion.div initial="hidden" animate="show" variants={v} className="mx-auto max-w-5xl">
          <p className="zd-stencil text-[10px] text-[#3d3a36]">Bistrot — {site.location?.city}</p>
          <h1 className="zd-h mt-6 text-[clamp(2.75rem,12vw,7rem)] leading-[0.9] text-[#1a1814]" style={{ fontWeight: 400 }}>
            {site.name}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[#2a2824]">{site.hero?.headline}</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#4a4540]">{site.valueProposition}</p>
        </motion.div>
      </header>

      <div id="zd-facade" className="border-y-4 border-[#1a1814]">
        <img
          src={assets.facade}
          alt="Façade du bistrot"
          className="h-[40vh] w-full object-cover md:h-[50vh]"
          style={{ filter: 'contrast(1.05) sepia(0.08)' }}
        />
      </div>

      {/* Intro longue */}
      <section className="px-5 py-20 sm:px-10 md:px-16 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={v}
          className="mx-auto max-w-2xl"
        >
          <h2 className="zd-h text-[11px] tracking-[0.35em] text-[#5c564c]">Le mot du patron</h2>
          <p className="mt-10 text-[16px] leading-[1.95] text-[#2f2c28]">{zincIntro}</p>
          {(site.about?.paragraphs ?? []).map((p) => (
            <p key={p.slice(0, 32)} className="mt-8 text-[16px] leading-[1.95] text-[#2f2c28]">
              {p}
            </p>
          ))}
          <p className="mt-10 text-[15px] leading-[1.9] text-[#5a534a]">
            Pas de carte à dix pages : une ardoise qui change, des prix affichés au feutre, et le même pichet qui
            revient quand la bouteille est bonne — c’est tout le programme.
          </p>
        </motion.div>
      </section>

      {/* Ardoise du midi */}
      <motion.section
        id="zd-ardoise"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={v}
        className="scroll-mt-20 border-y border-[#1a1814]/20 bg-[#cfc4b6]/40 px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="zd-h text-[12px] tracking-[0.35em] text-[#5c564c]">Ardoise du Midi</h2>
          <p className="mt-4 text-[13px] text-[#6b6458]">Entrée · plat · dessert — la semaine fait le reste.</p>
          <div
            className="mt-12 border-[3px] border-dashed border-[#1a1814] p-8 md:p-12"
            style={{
              background:
                'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(26,24,20,0.04) 8px, rgba(26,24,20,0.04) 9px)',
              boxShadow: 'inset 0 0 0 1px rgba(26,24,20,0.08)',
            }}
          >
            <p className="zd-h text-[clamp(1.25rem,3vw,1.75rem)] leading-tight text-[#1a1814]">{ardoise.titre}</p>

            <div className="mt-10 space-y-10">
              <div>
                <p className="zd-h text-[10px] tracking-[0.3em] text-[#6b6458]">Entrée</p>
                <p className="zd-h mt-3 text-[1.35rem] text-[#1a1814]">{ardoise.entree?.nom}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3d3a36]">{ardoise.entree?.detail}</p>
              </div>
              <div>
                <p className="zd-h text-[10px] tracking-[0.3em] text-[#6b6458]">Plat</p>
                <p className="zd-h mt-3 text-[1.35rem] text-[#1a1814]">{ardoise.plat?.nom}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3d3a36]">{ardoise.plat?.detail}</p>
                {ardoise.plat?.prix ? (
                  <p className="zd-h mt-4 text-[1.75rem] text-[#1a1814]">{ardoise.plat.prix}</p>
                ) : null}
              </div>
              <div>
                <p className="zd-h text-[10px] tracking-[0.3em] text-[#6b6458]">Dessert</p>
                <p className="zd-h mt-3 text-[1.35rem] text-[#1a1814]">{ardoise.dessert?.nom}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3d3a36]">{ardoise.dessert?.detail}</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-[#1a1814]/25 pt-10">
              {ardoise.formule ? (
                <p className="text-[16px] font-medium text-[#1a1814]">{ardoise.formule}</p>
              ) : null}
              {ardoise.vin ? <p className="text-[14px] leading-snug text-[#4a4540]">{ardoise.vin}</p> : null}
            </div>
          </div>
        </div>
      </motion.section>

      {/* À grignoter */}
      <section id="zd-grignoter" className="scroll-mt-20 px-5 py-20 sm:px-10 md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="zd-h text-[12px] tracking-[0.35em] text-[#5c564c]">À grignoter</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4a4540]">
            Quand le ventre gargouille avant l’heure du plat : tout se partage au couteau ou à la main — saucisson
            entier, fromages de brebis, terrine qui sent le dimanche.
          </p>
          <div className="mt-12">
            {grignoter.map((g) => (
              <MenuLine key={g.name} name={g.name} price={g.price} detail={g.detail} />
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-0 md:grid-cols-2">
        <img
          src={assets.ambiance}
          alt="Ambiance salle"
          className="h-64 w-full object-cover md:h-80"
          style={{ filter: 'grayscale(0.12)' }}
        />
        <div className="flex items-center bg-[#c9beb0] px-8 py-12 md:px-12">
          <p className="text-[15px] leading-[1.9] text-[#2f2c28]">
            Bois usé, zinc qui raye encore, bruit des verres : pas de musique pour cacher le vide — juste la radio du
            patron et les nouvelles du quartier.
          </p>
        </div>
      </div>

      {/* Boissons du peuple */}
      <section
        id="zd-boissons"
        className="scroll-mt-20 border-t border-[#1a1814]/15 bg-[#d2c9bc] px-5 py-20 sm:px-10 md:px-16 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="zd-h text-[12px] tracking-[0.35em] text-[#5c564c]">Boissons du peuple</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#4a4540]">
            Demi tiré comme il faut, kir sans chichi, café serré au comptoir — les prix restent ceux d’avant les
            ardoises Instagram.
          </p>
          <div className="mt-12">
            {boissonsPeuple.map((b) => (
              <MenuLine key={b.name} name={b.name} price={b.price} detail={b.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance / salle */}
      <section id="zd-ambiance" className="scroll-mt-20 px-5 py-16 sm:px-10 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="zd-h text-center text-[11px] tracking-[0.35em] text-[#5c564c]">La salle</h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.9] text-[#3d3a36]">
            Tables serrées, pas de réservation pour une place au zinc : premier arrivé, premier servi. Les habitués
            gardent leur tabouret sans badge — on reconnaît le regard.
          </p>
          <img
            src={assets.ambiance}
            alt=""
            className="mt-14 h-72 w-full object-cover md:h-[28rem]"
            style={{ filter: 'sepia(0.06)' }}
          />
        </div>
      </section>

      {/* Habitués */}
      <motion.section
        id="zd-habitues"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={v}
        className="scroll-mt-20 px-5 py-20 sm:px-10 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="zd-h text-center text-[clamp(1.75rem,5vw,3rem)] text-[#1a1814]">Le coin des habitués</h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[14px] text-[#5a534a]">
            Témoignages — papier journal, pas de filtre.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {temoignages.map((t) => (
              <blockquote
                key={t.name}
                className="border border-[#1a1814]/20 bg-[#ebe4d9] p-6 shadow-[4px_4px_0_0_#1a1814]"
              >
                <p className="text-[14px] leading-relaxed italic text-[#2a2620]">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#6b6458]">— {t.name}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-sm border border-[#1a1814]/15">
            <img src={assets.habitues} alt="Clients au comptoir" className="w-full object-cover" />
          </div>

          {avisSite.length > 0 ? (
            <div className="mt-16 border-t border-[#1a1814]/15 pt-16">
              <h3 className="zd-h text-center text-[11px] tracking-[0.3em] text-[#6b6458]">Avis Google</h3>
              <div className="mx-auto mt-10 max-w-xl space-y-6">
                {avisSite.map((a) => (
                  <blockquote key={a.name} className="text-center">
                    <p className="text-[15px] leading-relaxed text-[#2f2c28]">« {a.text} »</p>
                    <footer className="mt-3 text-[12px] text-[#6b6458]">— {a.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </motion.section>

      {/* Horaires & footer */}
      <footer id="zd-infos" className="scroll-mt-20 border-t-2 border-[#1a1814] bg-[#cfc4b6]/50 px-5 py-16 sm:px-10 md:px-16">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <h2 className="zd-h text-[11px] tracking-[0.35em] text-[#5c564c]">Horaires & accès</h2>
          {Object.keys(hours).length > 0 ? (
            <dl className="mt-10 grid gap-2 text-left text-[14px] text-[#3d3a36] sm:grid-cols-2">
              {Object.entries(hours).map(([day, h]) => (
                <div key={day} className="flex justify-between gap-4 border-b border-[#1a1814]/10 py-2 capitalize">
                  <dt>{day}</dt>
                  <dd className="text-[#1a1814]">{h}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <p className="mt-10 text-[12px] uppercase tracking-[0.25em] text-[#5a534a]">
            {site.location?.street} · {site.location?.postalCode} {site.location?.city}
          </p>
          <p className="mt-3 text-[13px] text-[#3d3a36]">{site.location?.hours}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            {site.ctaPrimary ? (
              <a
                href={site.ctaPrimary.href}
                className="zd-h inline-block rounded-sm border-2 border-[#1a1814] bg-[#ebe4d9] px-5 py-2.5 text-[11px] tracking-[0.15em] text-[#1a1814] transition hover:bg-[#1a1814] hover:text-[#ebe4d9]"
              >
                {site.ctaPrimary.label}
              </a>
            ) : null}
            {site.ctaSecondary ? (
              <a
                href={site.ctaSecondary.href}
                className="zd-h inline-block rounded-sm border-2 border-transparent px-5 py-2.5 text-[11px] tracking-[0.15em] text-[#3d3a36] underline-offset-4 hover:underline"
              >
                {site.ctaSecondary.label}
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  )
}
