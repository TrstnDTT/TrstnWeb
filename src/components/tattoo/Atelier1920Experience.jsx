/**
 * Atelier 1920 — dark & traditionnel, old school, hand-poked, galerie N&B.
 */
import { useCallback, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BackButton } from '../mini/BackButton.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

const BG = '#0a0908'
const LEATHER = '#6b4f3a'
const PARCHMENT = '#e8e0d5'
const PLAYFAIR = '"Playfair Display", Georgia, serif'
const CORMORANT = '"Cormorant Garamond", Georgia, serif'

const ease = [0.22, 1, 0.36, 1]

/** Pexels CDN — URLs stables (plusieurs IDs Unsplash du projet renvoient 404 côté imgix). */
const px = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const GALLERY = [
  { src: px(4611934, 900), alt: 'Artiste au travail sur un tatouage, mise au point sur la zone encrée' },
  { src: px(6144290, 900), alt: 'Machine rotative et pigments sur un poste de travail sombre' },
  { src: px(2683376, 900), alt: 'Gros plan sur des lignes de tatouage en cours de réalisation' },
  { src: px(3998429, 900), alt: 'Ambiance studio : contraste marqué, lumière dirigée sur la peau' },
  { src: px(3740287, 900), alt: 'Motif graphique net sur avant-bras, style contemporain' },
  { src: px(9941979, 900), alt: 'Détails d’un flash et feuilles de référence sur une table en bois' },
]

export function Atelier1920Experience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const artists = site.tattooArtists ?? []
  const gallery = site.tattooGallery?.length ? site.tattooGallery : GALLERY

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden antialiased"
      style={{
        backgroundColor: BG,
        backgroundImage: `
          linear-gradient(165deg, rgba(107,79,58,0.12) 0%, transparent 42%),
          linear-gradient(#0f0e0c 0%, #0a0908 100%)
        `,
        color: PARCHMENT,
        fontFamily: CORMORANT,
      }}
    >
      <style>{`
        .a1920-h { font-family: ${PLAYFAIR}; font-weight: 600; letter-spacing: 0.02em; }
      `}</style>

      <BackButton onClick={onBack} site={site} />

      <ReservationMailtoModal
        open={modalOpen}
        onClose={closeModal}
        venueName={site.name}
        accentColor={LEATHER}
        fontFamilyBody={CORMORANT}
        fontFamilyHeading={PLAYFAIR}
      />

      <header className="relative z-[2] px-5 pb-20 pt-24 md:px-12 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="a1920-h text-[10px] uppercase tracking-[0.45em]"
                style={{ color: `${PARCHMENT}99` }}
              >
                {site.tagline}
              </motion.p>
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.55, ease }}
                className="a1920-h mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]"
              >
                {site.name}
              </motion.h1>
            </div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.6, ease }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border lg:col-span-6 lg:col-start-7 lg:row-start-1"
              style={{ borderColor: `${LEATHER}55`, boxShadow: '0 40px 100px -40px rgba(0,0,0,0.85)' }}
            >
              <img
                src={px(4611934, 1400)}
                alt="Intérieur d’atelier tattoo : bois sombre, lumière chaude, ambiance feutrée"
                className="h-full w-full object-cover"
                style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                loading="eager"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(200deg, rgba(10,9,8,0.2) 0%, rgba(10,9,8,0.65) 100%)' }}
              />
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease }}
              className="max-w-xl lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:pt-4"
            >
              <p className="text-lg leading-relaxed md:text-xl" style={{ color: `${PARCHMENT}ee` }}>
                {site.hero?.headline}
              </p>
              <p className="mt-6 text-[15px] leading-[1.85] md:text-[17px]" style={{ color: `${PARCHMENT}aa` }}>
                {site.hero?.subline}
              </p>
              <button
                type="button"
                onClick={openModal}
                className="a1920-h mt-10 inline-flex items-center border-b-2 pb-1 text-[12px] uppercase tracking-[0.28em] transition-opacity hover:opacity-90"
                style={{ borderColor: LEATHER, color: PARCHMENT }}
              >
                Réserver une consultation
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="relative z-[2] border-t px-5 py-20 md:px-12" style={{ borderColor: `${LEATHER}33` }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="a1920-h text-2xl md:text-3xl">Artisanat & main</h2>
              <p className="mt-5 text-[15px] leading-[1.85]" style={{ color: `${PARCHMENT}aa` }}>
                {site.about?.paragraphs?.[0]}
              </p>
            </div>
            <div className="space-y-10 lg:col-span-7 lg:col-start-6">
              {artists.map((a, i) => (
                <motion.article
                  key={a.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease }}
                  className="border-l-2 pl-6 md:pl-8"
                  style={{ borderColor: LEATHER }}
                >
                  <h3 className="a1920-h text-xl">{a.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: `${LEATHER}cc` }}>
                    {a.role}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: `${PARCHMENT}bb` }}>
                    {a.bio}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[2] px-5 py-16 md:px-12 md:py-24" aria-labelledby="galerie-1920">
        <div className="mx-auto max-w-6xl">
          <h2 id="galerie-1920" className="a1920-h text-center text-2xl md:text-3xl">
            Mur d’atelier — noir & blanc
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[14px]" style={{ color: `${PARCHMENT}88` }}>
            Extraits de séances et de flash : grain volontaire, comme un fil Instagram éditorial.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2">
            {gallery.map((g, i) => (
              <motion.figure
                key={`${g.src}-${i}`}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.04, duration: 0.35 }}
                className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-1 md:col-span-1' : ''}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="aspect-square w-full object-cover md:aspect-[4/5]"
                  style={{ filter: 'grayscale(1) contrast(1.08)' }}
                  loading="lazy"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-[2] border-t px-5 py-16 text-center md:px-12" style={{ borderColor: `${LEATHER}33` }}>
        <p className="text-[12px] uppercase tracking-[0.25em]" style={{ color: `${PARCHMENT}66` }}>
          {site.location?.city} · {site.location?.hours}
        </p>
        <button
          type="button"
          onClick={openModal}
          className="a1920-h mt-8 inline-block rounded-sm border px-8 py-3 text-[11px] uppercase tracking-[0.22em]"
          style={{ borderColor: `${LEATHER}88`, color: PARCHMENT }}
        >
          Réserver une consultation
        </button>
      </footer>
    </div>
  )
}
