/**
 * Bar Basque — storytelling vertical profond, carte par catégories, grain argentique.
 */
import { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BAR_BASQUE_IMAGES } from '../../constants/barBasqueImages.js'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

const easeSlow = [0.22, 1, 0.36, 1]
const ROUGE = '#9B2335'
const BOIS = '#1f1410'
const CREME = '#F5F0E8'
const BOIS_CLAIR = '#3D2914'

const GRAIN =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

const fadeSlow = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.35, ease: easeSlow },
  },
}

function MenuRow({ name, price, detail, bodyFont }) {
  return (
    <div className="border-b border-white/[0.07] py-5 last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-[16px] font-medium text-[#FAF0E6] md:text-[17px]" style={{ fontFamily: bodyFont }}>
          {name}
        </span>
        <span className="shrink-0 tabular-nums text-[15px] text-[#c9a87c]">{price}</span>
      </div>
      {detail ? <p className="mt-2 text-[14px] leading-relaxed text-[#FAF0E6]/72">{detail}</p> : null}
    </div>
  )
}

export function BarBasqueExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)

  const heading = site.fontFamilyHeading ?? '"Syne", system-ui, sans-serif'
  const body = site.fontFamilyBody ?? '"Lora", Georgia, serif'
  const hand = site.fontHandwritten ?? '"Caveat", cursive'

  const assets = site.barBasqueAssets ?? {
    hero: BAR_BASQUE_IMAGES.hero,
    menuContext: BAR_BASQUE_IMAGES.menuContext,
    gallery: [],
  }

  const esprit = site.espritZinc ?? { title: '', lead: '', paragraphs: [] }
  const menuIntro = site.menuIntro ?? ''
  const categories = site.menuCategories ?? []
  const vignettes = site.pintxosVignettes ?? []

  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const vFade = reduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : fadeSlow

  const anchors = [
    { id: 'bb-hero', label: 'Accueil' },
    { id: 'bb-esprit', label: 'Esprit' },
    { id: 'bb-carte', label: 'Carte' },
    { id: 'bb-cote-mer', label: 'Mer' },
    { id: 'bb-cote-terre', label: 'Terre' },
    { id: 'bb-cave', label: 'Cave' },
    { id: 'bb-spiritueux', label: 'Spiritueux' },
    { id: 'bb-vignettes', label: 'Assiettes' },
    { id: 'bb-faq', label: 'FAQ' },
    { id: 'bb-reservation', label: 'Réserver' },
  ]

  return (
    <div
      ref={rootRef}
      className="relative min-h-full overflow-x-hidden antialiased"
      style={{ backgroundColor: BOIS, color: CREME, fontFamily: body }}
    >
      <style>{`
        .bb-h { font-family: ${heading}; font-weight: 800; letter-spacing: -0.03em; }
      `}</style>

      <BarExperienceChrome
        progress={progress}
        anchors={anchors}
        accentColor={ROUGE}
        dark
        backSlot={<BackButton variant="inline" onClick={onBack} site={site} />}
      />

      <motion.section
        id="bb-hero"
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        variants={vFade}
        className="relative flex min-h-[100dvh] flex-col justify-end scroll-mt-2"
      >
        <div className="absolute inset-0 overflow-hidden">
          <SafeImg
            src={assets.hero}
            fallback={BAR_BASQUE_IMAGES.hero}
            alt=""
            width={900}
            height={500}
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ filter: 'contrast(1.05) saturate(0.92)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-overlay"
            style={{ backgroundImage: GRAIN }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${BOIS}66 0%, ${BOIS}bb 38%, ${BOIS}f0 100%)`,
            }}
          />
        </div>

        <div className="relative z-[1] px-5 pb-20 pt-44 sm:px-10 md:pb-28 md:pt-48">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em]" style={{ color: `${CREME}99` }}>
            {site.tagline}
          </p>
          <h1 className="bb-h mt-6 max-w-4xl text-[clamp(1.85rem,5vw,3rem)] leading-[1.08]" style={{ color: CREME }}>
            {site.hero?.headline}
          </h1>
          {site.hero?.subline ? (
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed" style={{ color: `${CREME}b0` }}>
              {site.hero.subline}
            </p>
          ) : null}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openModal}
              className="bb-h min-h-[48px] rounded-[4px] border border-white/15 bg-white/[0.08] px-8 py-3.5 text-[13px] backdrop-blur-md transition hover:bg-white/[0.12]"
              style={{ color: CREME }}
            >
              {site.hero?.cta ?? 'Réserver au zinc'}
            </button>
            <a
              href="#bb-carte"
              className="bb-h inline-flex min-h-[48px] items-center border-b border-dotted px-1 text-[12px] uppercase tracking-[0.2em] opacity-90 hover:opacity-100"
              style={{ color: ROUGE, borderColor: `${ROUGE}88` }}
            >
              La carte
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="bb-esprit"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
        variants={vFade}
        className="scroll-mt-[7.5rem] md:scroll-mt-32 px-5 py-24 sm:px-10 md:py-32"
        style={{ backgroundColor: BOIS_CLAIR }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.45em]" style={{ color: `${CREME}77` }}>
            Mémoire du lieu
          </p>
          <h2 className="bb-h mt-5 text-[clamp(1.5rem,3.2vw,2rem)]" style={{ color: CREME }}>
            {esprit.title}
          </h2>
          <p className="mt-8 text-[17px] leading-[1.95]" style={{ color: `${CREME}cc` }}>
            {esprit.lead}
          </p>
          {(esprit.paragraphs ?? []).map((p, i) => (
            <p key={i} className="mt-6 text-[17px] leading-[1.95]" style={{ color: `${CREME}b8` }}>
              {p}
            </p>
          ))}
        </div>
      </motion.section>

      <section
        id="bb-carte"
        className="scroll-mt-[7.5rem] md:scroll-mt-32 px-5 py-16 sm:px-10"
        style={{ backgroundColor: BOIS }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bb-h text-[clamp(1.25rem,2.5vw,1.65rem)]" style={{ color: CREME }}>
            Notre carte
          </h2>
          <p className="mt-6 text-[16px] leading-[1.9]" style={{ color: `${CREME}aa` }}>
            {menuIntro}
          </p>
        </div>
      </section>

      {categories.map((cat, ci) => {
        const sectionBg = ci % 2 === 0 ? BOIS : BOIS_CLAIR
        return (
        <motion.section
          key={cat.id}
          id={cat.id}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
          variants={vFade}
          className="scroll-mt-[7.5rem] md:scroll-mt-32"
          style={{ backgroundColor: sectionBg }}
        >
          <div className="relative h-[42vh] min-h-[220px] w-full overflow-hidden md:h-[48vh]">
            <SafeImg
              src={cat.headerImage}
              fallback={BAR_BASQUE_IMAGES.hero}
              alt=""
              className="h-full w-full object-cover"
              style={{ filter: 'contrast(1.03) saturate(0.95)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(0deg, ${sectionBg}f0 0%, transparent 55%)`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-10">
              <h2 className="bb-h text-[clamp(1.65rem,4vw,2.5rem)] text-white drop-shadow-md">{cat.title}</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-10 md:py-20">
            <p className="text-[16px] leading-[1.95] italic" style={{ color: `${CREME}b5`, fontFamily: body }}>
              {cat.intro}
            </p>

            {cat.items ? (
              <div className="mt-12">
                {cat.items.map((it) => (
                  <MenuRow key={it.name} name={it.name} price={it.price} detail={it.detail} bodyFont={body} />
                ))}
              </div>
            ) : null}

            {cat.vinsRouges ? (
              <div className="mt-12 space-y-10">
                <div>
                  <h3 className="bb-h text-[11px] uppercase tracking-[0.35em]" style={{ color: ROUGE }}>
                    Rouges
                  </h3>
                  <div className="mt-6">
                    {cat.vinsRouges.map((v) => (
                      <MenuRow key={v.name} name={v.name} price={v.price} detail={v.note} bodyFont={body} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="bb-h text-[11px] uppercase tracking-[0.35em]" style={{ color: ROUGE }}>
                    Blancs
                  </h3>
                  <div className="mt-6">
                    {cat.vinsBlancs.map((v) => (
                      <MenuRow key={v.name} name={v.name} price={v.price} detail={v.note} bodyFont={body} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="bb-h text-[11px] uppercase tracking-[0.35em]" style={{ color: ROUGE }}>
                    Cidres & Txakoli
                  </h3>
                  <div className="mt-6">
                    {cat.cidresTxakoli.map((v) => (
                      <MenuRow key={v.name} name={v.name} price={v.price} detail={v.note} bodyFont={body} />
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.section>
        )
      })}

      <motion.section
        id="bb-vignettes"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={vFade}
        className="scroll-mt-[7.5rem] md:scroll-mt-32 px-4 py-24 sm:px-8 md:py-32"
        style={{ backgroundColor: BOIS }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="bb-h text-center text-[clamp(1.35rem,2.8vw,1.85rem)]" style={{ color: CREME }}>
            En assiettes & sur le zinc
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[14px]" style={{ color: `${CREME}88` }}>
            Vignettes du service — prix indicatifs, saison ajustée.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vignettes.map((px) => (
              <div
                key={px.src + px.name}
                className="group overflow-hidden rounded-[4px] border border-white/[0.08]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SafeImg
                    src={px.src}
                    fallback={BAR_BASQUE_IMAGES.steak}
                    alt={px.name}
                    className="h-full w-full object-cover transition duration-[1.1s] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="bb-h text-[15px] text-[#FAF0E6]">{px.name}</p>
                    <span className="text-[13px] text-[#c9a87c]">{px.price}</span>
                  </div>
                  <p className="mt-2 text-[17px] leading-snug text-[#FAF0E6]/80" style={{ fontFamily: hand, fontWeight: 500 }}>
                    {px.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-5xl border-t border-white/[0.08] px-4 pt-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_min(300px,34%)] lg:items-start">
            <div>
              <h3 className="bb-h text-[12px] uppercase tracking-[0.28em]" style={{ color: ROUGE }}>
                Ambiance carte
              </h3>
              <p className="mt-4 text-[15px] leading-[1.85]" style={{ color: `${CREME}aa` }}>
                Le menu papier change ; l’esprit reste : produits tracés, cuisson maîtrisée, vin qui ne ment pas.
              </p>
            </div>
            <div className="overflow-hidden rounded-[4px] border border-white/[0.1]">
              <SafeImg
                src={assets.menuContext}
                fallback={BAR_BASQUE_IMAGES.menuContext}
                alt="Carte et comptoir"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="bb-faq"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={vFade}
        className="scroll-mt-[7.5rem] md:scroll-mt-32 px-5 py-20 sm:px-10 md:py-28"
        style={{ backgroundColor: BOIS_CLAIR }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="bb-h text-center text-[clamp(1.25rem,2.5vw,1.5rem)]" style={{ color: CREME }}>
            Questions fréquentes
          </h2>
          <ul className="mt-12 space-y-10">
            {(site.faq ?? []).map((f) => (
              <li key={f.q}>
                <p className="bb-h text-[14px]" style={{ color: ROUGE }}>
                  {f.q}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: `${CREME}b0` }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        id="bb-reservation"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={vFade}
        className="scroll-mt-[7.5rem] md:scroll-mt-32 px-5 py-24 sm:px-10"
        style={{ backgroundColor: BOIS }}
      >
        <div className="mx-auto max-w-xl text-center">
          <h2 className="bb-h text-[clamp(1.25rem,2.5vw,1.65rem)]" style={{ color: CREME }}>
            Réservation
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: `${CREME}99` }}>
            Une table au zinc — nous confirmons par mail.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="bb-h mt-10 inline-flex min-h-[48px] w-full max-w-sm items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.07] px-8 py-3.5 text-[13px] backdrop-blur-md transition hover:bg-white/[0.11] sm:w-auto"
          >
            Ouvrir le formulaire
          </button>
        </div>
      </motion.section>

      <footer
        className="border-t border-white/[0.06] px-5 py-16 text-center sm:px-10"
        style={{ backgroundColor: BOIS_CLAIR }}
      >
        <p className="text-[12px]" style={{ color: `${CREME}99` }}>
          {site.location?.street}, {site.location?.city} — {site.location?.hours}
        </p>
        {(site.testimonials ?? []).length > 0 ? (
          <div className="mx-auto mt-10 max-w-lg space-y-4 text-[14px] italic" style={{ color: `${CREME}88` }}>
            {site.testimonials.slice(0, 2).map((t) => (
              <p key={t.name}>« {t.text} » — {t.name}</p>
            ))}
          </div>
        ) : null}
      </footer>

      <ReservationMailtoModal
        open={modalOpen}
        onClose={closeModal}
        venueName="Bar Basque"
        accentColor={ROUGE}
        fontFamilyBody={body}
        fontFamilyHeading={heading}
      />
    </div>
  )
}
