/**
 * Neo-Ink Studio — brutaliste, néon, géométrie & réalisme, guest-spots dynamiques.
 */
import { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Zap } from 'lucide-react'
import { BackButton } from '../mini/BackButton.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

const VOID = '#030303'
const NEON = '#39ff14'
const OSWALD = '"Oswald", system-ui, sans-serif'
const GROTESK = '"Space Grotesk", system-ui, sans-serif'

const ease = [0.16, 1, 0.3, 1]

export function NeoInkStudioExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const [modalOpen, setModalOpen] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const glow = useTransform(scrollYProgress, [0, 1], [1, 0.35])
  const shift = useTransform(scrollYProgress, [0, 1], [0, -40])

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const artists = site.cyberArtists ?? []
  const guests = site.guestSpots ?? []

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden antialiased selection:bg-[#39ff14] selection:text-black"
      style={{ backgroundColor: VOID, color: '#f0fff0', fontFamily: GROTESK }}
    >
      <style>{`
        .neo-h { font-family: ${OSWALD}; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
      `}</style>

      <BackButton onClick={onBack} site={site} />

      <ReservationMailtoModal
        open={modalOpen}
        onClose={closeModal}
        venueName={site.name}
        accentColor={NEON}
        fontFamilyBody={GROTESK}
        fontFamilyHeading={OSWALD}
      />

      <section ref={heroRef} className="relative min-h-[92dvh] w-full">
        <motion.div style={{ opacity: glow }} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${NEON}33, transparent 70%)`,
            }}
          />
        </motion.div>
        <motion.div style={{ y: reduceMotion ? 0 : shift }} className="relative z-[2] flex min-h-[92dvh] flex-col justify-end px-5 pb-16 pt-28 md:px-16 md:pb-24">
          <div className="w-full max-w-[100vw]">
            <p className="neo-h flex items-center gap-2 text-[11px] md:text-xs" style={{ color: NEON }}>
              <Zap className="h-4 w-4" aria-hidden />
              {site.tagline}
            </p>
            <h1 className="neo-h mt-6 max-w-[18ch] text-[clamp(2.5rem,12vw,7rem)] leading-[0.92] tracking-tight text-white">
              {site.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-snug md:text-2xl" style={{ color: '#b8ffb8' }}>
              {site.hero?.headline}
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed md:text-base" style={{ color: 'rgba(200,255,200,0.72)' }}>
              {site.hero?.subline}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openModal}
                className="neo-h rounded-none border-2 bg-[#39ff14] px-8 py-4 text-[13px] text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ borderColor: NEON, boxShadow: `0 0 32px ${NEON}44` }}
              >
                Réserver une consultation
              </button>
              <a
                href="#guest-spot"
                className="neo-h inline-flex items-center border-2 border-white/20 px-8 py-4 text-[13px] text-white/90 transition-colors hover:border-[#39ff14]/60"
              >
                Guest-spot
              </a>
            </div>
          </div>
        </motion.div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #030303, transparent)' }}
        />
      </section>

      <section className="relative z-[2] w-full border-y py-20 md:py-28" style={{ borderColor: `${NEON}22` }}>
        <div className="mx-auto max-w-6xl px-5 md:px-12">
          <h2 className="neo-h text-3xl text-white md:text-4xl">Géométrie · Réalisme · Gros format</h2>
          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed md:text-lg" style={{ color: 'rgba(200,255,200,0.75)' }}>
            {site.about?.paragraphs?.[0]}
          </p>
        </div>
      </section>

      <section className="w-full px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              initial={reduceMotion ? false : { opacity: 0, x: i % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="border-l-4 pl-6 md:pl-8"
              style={{ borderColor: NEON }}
            >
              <h3 className="neo-h text-xl text-white md:text-2xl">{a.name}</h3>
              <p className="mt-2 text-[12px] uppercase tracking-widest" style={{ color: `${NEON}cc` }}>
                {a.specialty}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'rgba(220,255,220,0.82)' }}>
                {a.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="guest-spot" className="scroll-mt-24 border-t py-20 md:py-28" style={{ borderColor: `${NEON}22`, background: '#050805' }}>
        <div className="mx-auto max-w-6xl px-5 md:px-12">
          <h2 className="neo-h text-3xl text-[#39ff14] md:text-4xl">Guest-spot — calendrier live</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed" style={{ color: 'rgba(200,255,200,0.7)' }}>
            Artistes invités, styles pointus, créneaux limités. Réservez tôt : les créneaux partent sur prévisualisation
            Instagram.
          </p>
          <ul className="mt-12 space-y-4">
            {guests.map((g, i) => (
              <motion.li
                key={`${g.artist}-${g.date}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex flex-col gap-2 border-b border-white/10 py-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <span className="neo-h text-lg text-white">{g.artist}</span>
                  <span className="ml-3 text-[13px]" style={{ color: `${NEON}aa` }}>
                    {g.style}
                  </span>
                </div>
                <div className="neo-h text-[13px] tracking-wider" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {g.date} · {g.city}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: `linear-gradient(90deg, transparent, ${NEON}14, transparent)` }} />
        <div className="relative mx-auto max-w-6xl px-5 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <img
              src="https://images.pexels.com/photos/3740287/pexels-photo-3740287.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Tatouage géométrique et lignes fines sur avant-bras, rendu net"
              className="aspect-[4/3] w-full object-cover md:aspect-video"
              style={{ filter: 'contrast(1.1) saturate(1.15)' }}
              loading="lazy"
            />
            <div>
              <h2 className="neo-h text-2xl text-white md:text-3xl">Précision digitale, peau réelle</h2>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: 'rgba(200,255,200,0.78)' }}>
                {site.about?.paragraphs?.[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-16 text-center" style={{ borderColor: `${NEON}22` }}>
        <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: 'rgba(200,255,200,0.45)' }}>
          {site.location?.city} — {site.location?.hours}
        </p>
        <button
          type="button"
          onClick={openModal}
          className="neo-h mt-8 inline-block border-2 px-10 py-4 text-[12px]"
          style={{ borderColor: NEON, color: NEON }}
        >
          Réserver une consultation
        </button>
      </footer>
    </div>
  )
}
