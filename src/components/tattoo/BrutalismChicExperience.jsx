/**
 * Brutalisme chic — long-scroll, vision tech, stencil numérique, protocole rapport, FAQ, réservation.
 */
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'
import { MagnetCtaButton } from './MagnetCtaButton.jsx'
import { TattooFaqGrid } from './TattooFaqGrid.jsx'
import { TattooProtocolReport } from './TattooProtocolReport.jsx'
import { TattooVisionSection } from './TattooVisionSection.jsx'
import { tattooLuxuryBtn } from './tattooUi.js'

const P = '/perceur'
const imgTone = 'grayscale-[40%] sepia-[8%] contrast-[1.08]'
const ACCENT = '#8f3d3d'

function HorizontalStrip() {
  const ref = useRef(null)
  const panels = [
    { src: `${P}/neotraditional-tattoo-mask-graffiti.webp`, alt: '' },
    { src: `${P}/thomas-pineiro-tattoo.webp`, alt: '' },
    { src: `${P}/mandala-robin.jpg`, alt: '' },
    { src: `${P}/piercing.jpg`, alt: '' },
  ]

  return (
    <div
      ref={ref}
      className="relative flex snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      {panels.map((p, i) => (
        <Panel key={p.src} src={p.src} alt={p.alt} index={i} scrollRef={ref} />
      ))}
    </div>
  )
}

function Panel({ src, alt, index, scrollRef }) {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({
    container: scrollRef,
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollXProgress, [0, 1], [40, -40])
  const smoothX = useSpring(x, { stiffness: 64, damping: 24 })

  return (
    <div
      ref={ref}
      className="relative h-[min(72vh,640px)] min-w-[88vw] shrink-0 snap-center overflow-hidden md:min-w-[55vw] md:max-w-3xl"
    >
      <motion.div style={{ x: smoothX }} className="h-full w-[115%] max-w-none">
        <SafeImg
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className={`h-full w-full object-cover ${imgTone}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]/80" />
    </div>
  )
}

const FAQ_BRUT = [
  {
    q: 'Douleur',
    a: 'Le shader numérique calibré réduit les passes inutiles. Chaque session est découpée : pause, hydratation, silence — la pigmentation chirurgicale mérite un corps qui ne s’affole pas.',
  },
  {
    q: 'Soins',
    a: 'Protocole post-stencil : film, lavage, crème sans parfum. Asepsie rigoureuse prolongée chez vous — nous vous donnons les gestes exacts, pas un dépliant générique.',
  },
  {
    q: 'Prix',
    a: 'Le devis intègre le temps de modélisation vectorielle et le matériel stérile réel. Pas de marge sur l’incertitude : vous savez ce que vous financez.',
  },
]

export function BrutalismChicExperience({ site, onBack }) {
  const backSite = {
    ...site,
    surfaceColor: '#0a0a0a',
    textColor: '#fafafa',
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(250,250,250,0.12)' },
  }

  const bookingTo = `/portfolio/${site?.id ?? 'neo-ink-studio'}/reservation`

  return (
    <div
      className="snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth bg-[#0D0D0D] text-white [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ fontFamily: '"IBM Plex Mono", ui-monospace, monospace', minHeight: '100dvh' }}
    >
      <BackButton onClick={onBack} site={backSite} />

      <div className="relative min-h-[100dvh] snap-start pt-24 md:pt-28">
        <p className="px-5 text-[9px] uppercase tracking-[0.5em] text-white/35 md:px-10">Brutalisme chic</p>
        <div className="relative mt-6 overflow-hidden px-5 md:px-10">
          <h1
            className="translate-x-[-2%] whitespace-pre-line select-none text-[clamp(3.5rem,18vw,12rem)] font-light leading-[0.85] tracking-tighter text-white/95"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {(() => {
              const raw = site?.hero?.headline
              if (!raw) return "Nous\nmarquons\nl'instant"
              const first = raw.split(/[—–]/)[0]?.trim() ?? raw
              const words = first.split(/\s+/).filter(Boolean).slice(0, 4)
              return words.join('\n')
            })()}
          </h1>
        </div>
        <p className="mx-auto mt-10 max-w-md px-5 font-mono text-[12px] font-light leading-relaxed text-white/55 md:px-10">
          {site?.hero?.subline ??
            'Nous marquons l’instant — pas le bruit. Studio étanche, machines calibrées, silence de coulisse.'}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 px-5 md:px-10">
          <MagnetCtaButton to={bookingTo} variant="dark">
            Prendre rendez-vous
          </MagnetCtaButton>
          <Link
            to={bookingTo}
            className={`${tattooLuxuryBtn} border border-white/15 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-white/65 hover:border-white/35`}
          >
            Poser une question
          </Link>
          <a
            href="#protocole"
            className={`${tattooLuxuryBtn} border px-5 py-2.5 text-[10px] uppercase tracking-[0.3em]`}
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Le protocole
          </a>
        </div>
      </div>

      <section className="mt-16 min-h-[72vh] snap-start md:mt-20">
        <HorizontalStrip />
      </section>

      <div id="vision" className="border-t border-white/10">
        <TattooVisionSection
          variant="dark"
          eyebrow="La vision"
          title="La peau comme fichier — précision, pas précipitation."
        >
          <p className="font-mono text-[12px] leading-relaxed">
            Nous traitons le corps comme une surface critique : aucune ligne n’est posée sans comprendre la tension musculaire, le grain, la lumière du jour.
            Pigmentation chirurgicale : le geste est mesuré, le bruit absent.
          </p>
          <p className="font-mono text-[12px] leading-relaxed">
            Expertise humaine au centre : la machine obéit au dessin, jamais l’inverse. Orfèvrerie cutanée sous néon tamisé — le luxe, c’est le contrôle.
          </p>
        </TattooVisionSection>
      </div>

      <section id="stencil" className="min-h-[min(90dvh,860px)] snap-start border-t border-white/10 px-5 py-24 md:px-12 lg:px-20">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">Technologie</p>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.65rem,3.5vw,2.35rem)] font-light leading-snug text-white/92" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Stencil numérique & design génératif — avant la première piqûre.
        </h2>
        <div className="mt-10 max-w-2xl space-y-6 font-mono text-[11px] leading-[1.95] text-white/50">
          <p>
            Votre projet passe par une grille vectorielle haute définition : courbures du membre simulées, déformation anticipée, export stencil calibré au micron.
            Le design génératif propose des variantes de trame — nous tranchons à la main ce qui reste humain.
          </p>
          <p>
            Asepsie rigoureuse sur le fichier comme sur la peau : chaque calque est nommé, chaque version archivée. Le studio garde la chaîne — de l’écran au derme.
          </p>
        </div>
      </section>

      <div id="protocole">
        <TattooProtocolReport variant="dark" studioLabel={site?.name ?? 'Brutalisme chic'} />
      </div>

      <div id="faq">
        <TattooFaqGrid variant="dark" items={FAQ_BRUT} />
      </div>

      <footer className="snap-start border-t border-white/10 px-5 py-20 md:px-10">
        <p className="font-mono text-[10px] text-white/35">
          {site?.location?.city} · {site?.location?.street}
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <MagnetCtaButton to={bookingTo} variant="dark">
            Prendre rendez-vous
          </MagnetCtaButton>
          <a
            href={`mailto:${site?.contactEmail ?? SITE.contactEmail}`}
            className={`${tattooLuxuryBtn} text-[10px] uppercase tracking-[0.28em] text-white/45 hover:text-white/85`}
          >
            Écrire
          </a>
        </div>
      </footer>
    </div>
  )
}
