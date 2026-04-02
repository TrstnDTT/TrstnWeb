/**
 * Le Labo de Peau — mini-site piercing premium (hero macro, bar à bijoux, carte des actes, confiance).
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Heart, Sparkles } from 'lucide-react'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'
import {
  LABO_AFTERCARE_DIGITAL,
  LABO_MATERIALS,
  LABO_PIERCING_ACTS,
  LABO_ZERO_RISK,
} from '../../data/laboPeauContent.js'

const P = '/perceur'
const SERIF = '"Playfair Display", Georgia, serif'
const SANS = '"Inter", system-ui, sans-serif'

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12%' },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
}

function ComfortDots({ level }) {
  return (
    <div className="flex gap-1.5" aria-label={`Confort ${level} sur 3`} role="img">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i <= level ? 'bg-[#D4AF37]' : 'bg-[#FAFAFA]/18'}`}
        />
      ))}
    </div>
  )
}

export function OrEtPeauExperience({ site, onBack }) {
  const [materialId, setMaterialId] = useState(LABO_MATERIALS[0].id)
  const selectedMaterial = LABO_MATERIALS.find((m) => m.id === materialId) ?? LABO_MATERIALS[0]

  const backSite = {
    ...site,
    surfaceColor: '#121212',
    textColor: '#FAFAFA',
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(212,175,55,0.25)' },
  }

  const bookingTo = `/portfolio/${site?.id ?? 'le-labo-de-peau'}/reservation`

  const nav = [
    { href: '#bar', label: 'Bar à bijoux' },
    { href: '#carte', label: 'Carte des actes' },
    { href: '#confiance', label: 'Confiance' },
    { href: '#soin', label: 'Soin' },
  ]

  return (
    <div
      className="relative overflow-x-hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        background: '#121212',
        color: '#FAFAFA',
        fontFamily: SANS,
        minHeight: '100dvh',
      }}
    >
      <style>{`
        @keyframes labo-glimmer-sweep {
          0% { transform: translateX(-130%) skewX(-14deg); opacity: 0; }
          12% { opacity: 0.55; }
          100% { transform: translateX(130%) skewX(-14deg); opacity: 0; }
        }
        .labo-glimmer-sweep {
          animation: labo-glimmer-sweep 3.2s ease-in-out infinite;
        }
        @keyframes labo-sparkle {
          0%, 100% { opacity: 0.35; filter: brightness(1); }
          50% { opacity: 0.95; filter: brightness(1.15); }
        }
        .labo-sparkle {
          animation: labo-sparkle 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Header 100 % opaque — aucun contenu ne transparaît */}
      <header
        className="fixed inset-x-0 top-0 z-[1000] border-b border-[#D4AF37]/25 bg-[#121212]"
        style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:gap-6 md:px-8">
          <BackButton onClick={onBack} site={backSite} variant="inline" />
          <span
            className="hidden min-w-0 truncate text-[9px] font-medium uppercase tracking-[0.35em] text-[#D4AF37] sm:inline md:text-[10px]"
            style={{ fontFamily: SERIF }}
          >
            LE LABO DE PEAU
          </span>
          <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Sections">
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[9px] uppercase tracking-[0.28em] text-[#FAFAFA]/55 transition-colors hover:text-[#D4AF37]"
              >
                {label}
              </a>
            ))}
          </nav>
          <Link
            to={bookingTo}
            className="ml-auto shrink-0 border border-[#D4AF37]/40 px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 md:ml-0"
          >
            Réserver
          </Link>
        </div>
      </header>

      {/* Hero — zoom arrière + scintillement */}
      <section id="hero" className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.16 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.85, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <SafeImg
              src={`${P}/nosepiercing2.webp`}
              alt="Macro bijou et peau — Le Labo de Peau"
              width={1200}
              height={1600}
              className="labo-sparkle h-full w-full object-cover object-center brightness-[0.92] contrast-[1.05]"
              loading="eager"
            />
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/55 to-[#121212]/30"
            aria-hidden
          />
          <div
            className="labo-glimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative z-[1] px-6 pb-16 pt-8 md:px-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.55em] text-[#D4AF37]/90">Piercing & bijou</p>
            <h1
              className="mt-6 max-w-4xl text-[clamp(2.35rem,9vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-[#FAFAFA]"
              style={{ fontFamily: SERIF }}
            >
              LE LABO DE PEAU
            </h1>
            <p className="mt-8 max-w-lg text-[14px] font-light leading-relaxed text-[#FAFAFA]/72">
              {site?.hero?.subline ??
                'Protocole chirurgical, bijou comme décision anatomique — le luxe, c’est le geste juste et la cicatrisation respectée.'}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={bookingTo}
                className="inline-block border border-[#D4AF37] bg-[#D4AF37] px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#121212] transition hover:brightness-110"
              >
                Réserver une séance
              </Link>
              <a
                href="#carte"
                className="inline-flex items-center border-b border-[#FAFAFA]/25 pb-1 text-[9px] uppercase tracking-[0.32em] text-[#FAFAFA]/55 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Voir la carte
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bar à bijoux */}
      <motion.section
        id="bar"
        className="border-t border-[#FAFAFA]/08 px-6 py-20 md:px-16 md:py-28"
        {...sectionMotion}
      >
        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]/85">Le bar à bijoux</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal leading-snug text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
          Trois langues — une seule exigence : votre peau.
        </h2>
        <p className="mt-4 max-w-xl text-[14px] font-light leading-relaxed text-[#FAFAFA]/58">
          Touchez un matériau pour afficher ses avantages — sans jargon technique seul.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LABO_MATERIALS.map((m) => {
            const active = materialId === m.id
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMaterialId(m.id)}
                className={[
                  'rounded-2xl border px-6 py-7 text-left transition-all duration-300',
                  active
                    ? 'border-[#D4AF37] bg-[#1a1a1a] shadow-[0_0_0_1px_rgba(212,175,55,0.2)]'
                    : 'border-[#FAFAFA]/10 bg-[#161616] hover:border-[#FAFAFA]/22',
                ].join(' ')}
              >
                <p className="text-[17px] text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
                  {m.title}
                </p>
                <p className="mt-2 text-[12px] font-light text-[#FAFAFA]/50">{m.tagline}</p>
              </button>
            )
          })}
        </div>

        <motion.div
          key={selectedMaterial.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl border border-[#D4AF37]/20 bg-[#181818] px-6 py-8 md:px-10"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">Pourquoi ce choix</p>
          <ul className="mt-5 space-y-3">
            {selectedMaterial.advantages.map((line) => (
              <li key={line} className="flex items-start gap-3 text-[14px] font-light leading-relaxed text-[#FAFAFA]/88">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-[#FAFAFA]/08 pt-6 text-[12px] font-light italic leading-relaxed text-[#FAFAFA]/45">
            {selectedMaterial.note}
          </p>
        </motion.div>
      </motion.section>

      {/* Carte des actes */}
      <motion.section
        id="carte"
        className="border-t border-[#FAFAFA]/08 bg-[#0e0e0e] px-6 py-20 md:px-16 md:py-28"
        {...sectionMotion}
      >
        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]/85">Carte des actes</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
          Prix indicatifs — style lisible, zéro jargon.
        </h2>

        <div className="mt-14 space-y-16">
          {LABO_PIERCING_ACTS.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#FAFAFA]/40">{cat.label}</h3>
              {/* Mobile : carrousel tactile */}
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:snap-none md:grid-cols-2 md:gap-4 lg:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="min-w-[min(88vw,320px)] shrink-0 snap-center rounded-xl border border-[#FAFAFA]/10 bg-[#121212] px-5 py-5 md:min-w-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[15px] font-light text-[#FAFAFA]">{item.name}</p>
                      <p className="shrink-0 text-[13px] font-medium text-[#D4AF37]">{item.price}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[#FAFAFA]/08 pt-4 text-[11px] text-[#FAFAFA]/55">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#D4AF37]/80" strokeWidth={1.5} aria-hidden />
                        Cicatrisation : {item.healing}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5 text-[#D4AF37]/80" strokeWidth={1.5} aria-hidden />
                        Confort
                        <ComfortDots level={item.comfort} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Protocole Zéro Risque */}
      <motion.section
        id="confiance"
        className="border-t border-[#FAFAFA]/08 px-6 py-20 md:px-16 md:py-28"
        {...sectionMotion}
      >
        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]/85">Confiance & hygiène</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
          Protocole Zéro Risque
        </h2>
        <p className="mt-4 max-w-xl text-[14px] font-light text-[#FAFAFA]/55">
          L’argument qui rassure le client — et qui fait gagner du temps à l’équipe : tout est traçable, tout est expliqué.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {LABO_ZERO_RISK.map((z) => (
            <div key={z.title} className="rounded-2xl border border-[#FAFAFA]/10 bg-[#161616] px-6 py-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/35 text-[#D4AF37]">
                <span className="text-lg leading-none">◇</span>
              </div>
              <p className="mt-6 text-[15px] font-medium text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
                {z.title}
              </p>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-[#FAFAFA]/58">{z.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Guide de soin digital */}
      <motion.section
        id="soin"
        className="border-t border-[#FAFAFA]/08 bg-[#0e0e0e] px-6 py-20 md:px-16 md:py-28"
        {...sectionMotion}
      >
        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]/85">Après l’acte</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal text-[#FAFAFA]" style={{ fontFamily: SERIF }}>
          Le guide de soin digital
        </h2>
        <p className="mt-4 max-w-xl text-[14px] font-light text-[#FAFAFA]/55">
          Consultable sur téléphone : moins de questions répétées en cabine, plus de clarté pour le client.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {LABO_AFTERCARE_DIGITAL.map((b) => (
            <div key={b.title} className="rounded-xl border border-[#FAFAFA]/10 bg-[#121212] px-5 py-6">
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#D4AF37]">{b.title}</p>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-[#FAFAFA]/72">{b.body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="border-t border-[#FAFAFA]/08 px-6 py-20 md:px-16">
        <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]/85">Rendez-vous</p>
        <p className="mt-4 text-[14px] font-light text-[#FAFAFA]/65">
          {site?.location?.city} — {site?.location?.street}
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            to={bookingTo}
            className="inline-block border border-[#D4AF37] bg-[#D4AF37] px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#121212] transition hover:brightness-110"
          >
            Réservation plein écran
          </Link>
          <a
            href={`mailto:${site?.contactEmail ?? SITE.contactEmail}`}
            className="inline-flex items-center border-b border-[#FAFAFA]/25 pb-1 text-[9px] uppercase tracking-[0.32em] text-[#FAFAFA]/55 hover:text-[#D4AF37]"
          >
            Écrire au studio
          </a>
        </div>
      </section>
    </div>
  )
}
