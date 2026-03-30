/**
 * Le Labo de Peau — minimalisme médical, bijoux titane/or, protocole d’hygiène visible.
 */
import { useCallback, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Droplets, Shield, Sparkles } from 'lucide-react'
import { BackButton } from '../mini/BackButton.jsx'
import { ReservationMailtoModal } from '../mini/ReservationMailtoModal.jsx'

const PAPER = '#faf8f5'
const INK = '#1c1b19'
const GOLD = '#b8956a'
const ITALIANA = '"Italiana", Georgia, serif'
const INTER = '"Inter", system-ui, sans-serif'

const ease = [0.25, 0.46, 0.45, 0.94]

const PROTO_ICONS = [Shield, Droplets, Sparkles, CheckCircle2]

export function LeLaboDePeauExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const jewelry = site.jewelryCatalog ?? []
  const protocol = site.hygieneProtocol ?? []

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden antialiased"
      style={{ backgroundColor: PAPER, color: INK, fontFamily: INTER, fontWeight: 300 }}
    >
      <style>{`
        .labo-h { font-family: ${ITALIANA}; font-weight: 400; letter-spacing: 0.06em; }
        .labo-strong { font-weight: 500; letter-spacing: 0.02em; }
      `}</style>

      <BackButton onClick={onBack} site={site} />

      <ReservationMailtoModal
        open={modalOpen}
        onClose={closeModal}
        venueName={site.name}
        accentColor={GOLD}
        fontFamilyBody={INTER}
        fontFamilyHeading={ITALIANA}
      />

      <header className="relative z-[2] px-6 pb-32 pt-32 md:px-16 md:pb-40 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.55em]" style={{ color: `${INK}55` }}>
            {site.tagline}
          </p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="labo-h mt-10 text-[clamp(2rem,6vw,3.25rem)] leading-[1.15]"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease }}
            className="labo-strong mx-auto mt-12 max-w-xl text-[15px] leading-[1.9] md:text-[17px]"
            style={{ color: `${INK}cc` }}
          >
            {site.hero?.headline}
          </motion.p>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-8 max-w-lg text-[14px] leading-[1.85]"
            style={{ color: `${INK}99` }}
          >
            {site.hero?.subline}
          </motion.p>
          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            <a
              href="#catalogue"
              className="labo-h inline-block border-b border-current pb-1 text-[11px] uppercase tracking-[0.35em] transition-opacity hover:opacity-70"
              style={{ color: GOLD }}
            >
              Voir le catalogue bijoux
            </a>
            <button
              type="button"
              onClick={openModal}
              className="labo-h rounded-full border px-10 py-3 text-[11px] uppercase tracking-[0.3em] transition-colors"
              style={{ borderColor: `${INK}22`, color: INK }}
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-[2] px-6 py-24 md:px-16 md:py-32" style={{ background: '#fff' }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="labo-h text-2xl md:text-3xl">Clinique du geste</h2>
          {site.about?.paragraphs?.map((p, i) => (
            <p key={i} className="mt-10 text-[15px] leading-[2] md:text-[16px]" style={{ color: `${INK}88` }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="catalogue" className="scroll-mt-24 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="labo-h text-center text-2xl md:text-3xl">Catalogue bijoux</h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-[14px] leading-relaxed" style={{ color: `${INK}77` }}>
            Titane ASTM F-136 implant-grade, or 18k pour pièces premium — pièces sélectionnées pour l’intégrité
            cutanée et le confort long terme.
          </p>
          <div className="mt-16 space-y-0 border-t" style={{ borderColor: `${INK}12` }}>
            {jewelry.map((row, i) => (
              <motion.div
                key={row.name}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="flex flex-col gap-2 border-b py-8 md:flex-row md:items-baseline md:justify-between md:gap-8"
                style={{ borderColor: `${INK}10` }}
              >
                <div>
                  <p className="labo-strong text-[15px] md:text-base">{row.name}</p>
                  <p className="mt-1 text-[13px]" style={{ color: `${INK}66` }}>
                    {row.material}
                  </p>
                </div>
                <p className="labo-h shrink-0 text-[13px] tracking-[0.2em]" style={{ color: GOLD }}>
                  {row.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-32" style={{ background: '#f3f0eb' }} aria-labelledby="protocole-hygiene">
        <div className="mx-auto max-w-5xl">
          <h2 id="protocole-hygiene" className="labo-h text-center text-2xl md:text-3xl">
            Protocole d’hygiène
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-[14px] leading-relaxed" style={{ color: `${INK}77` }}>
            Chaque étape est visible, traçable et expliquée avant la pose. Zéro zone d’ombre sur la stérilité.
          </p>
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {protocol.map((step, i) => {
              const Icon = PROTO_ICONS[i % PROTO_ICONS.length]
              return (
                <motion.article
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45, ease }}
                  className="text-center md:text-left"
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full md:mx-0"
                    style={{ border: `1px solid ${GOLD}55`, color: GOLD }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden />
                  </div>
                  <p className="labo-h mt-6 text-[11px] uppercase tracking-[0.28em]" style={{ color: `${GOLD}dd` }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="labo-strong mt-2 text-lg">{step.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.85]" style={{ color: `${INK}77` }}>
                    {step.detail}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-20 text-center md:px-16" style={{ borderColor: `${INK}08` }}>
        <p className="text-[12px] tracking-[0.15em]" style={{ color: `${INK}55` }}>
          {site.location?.street}, {site.location?.postalCode} {site.location?.city}
        </p>
        <p className="mt-3 text-[12px]" style={{ color: `${INK}44` }}>
          {site.location?.hours}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="#catalogue"
            className="labo-h text-[11px] uppercase tracking-[0.3em]"
            style={{ color: GOLD }}
          >
            Catalogue
          </a>
          <button type="button" onClick={openModal} className="labo-h text-[11px] uppercase tracking-[0.3em] underline-offset-4 hover:underline" style={{ color: INK }}>
            Prendre rendez-vous
          </button>
        </div>
      </footer>
    </div>
  )
}
