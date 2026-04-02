/**
 * Brutalisme chic — long-scroll, vision tech, stencil numérique, protocole rapport, FAQ, réservation.
 * Palette : #000000 / #222222 / #F0F0F0 — galerie masonry, hero mix-blend-difference, glitch section.
 */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'
import { SafeImg } from '../mini/SafeImg.jsx'
import { MagnetCtaButton } from './MagnetCtaButton.jsx'
import { TattooFaqGrid } from './TattooFaqGrid.jsx'
import { TattooProtocolReport } from './TattooProtocolReport.jsx'
import { TattooVisionSection } from './TattooVisionSection.jsx'
import { tattooLuxuryBtn } from './tattooUi.js'

const P = '/perceur'
const BLACK = '#000000'
const TECH = '#222222'
const SURGICAL = '#F0F0F0'

const imgTone = 'grayscale-[35%] sepia-[6%] contrast-[1.06]'

const DEFAULT_ZOOM = {
  intro:
    'Portfolio « zoom » : macro sur le filet de peau, intersections géométriques — la preuve que le futur a une texture.',
  items: [
    {
      src: `${P}/mandala-robin.jpg`,
      alt: 'Macro mandala',
      needle: '3RL',
      time: '5h',
      ink: 'Carbon Black',
      layout: 'tall',
    },
  ],
}

const LAYOUT_CLASS = {
  tall: 'col-span-12 md:col-span-5 md:row-span-2 min-h-[min(300px,44vh)] md:min-h-[min(400px,52vh)]',
  wide: 'col-span-12 md:col-span-7 md:row-span-2 min-h-[min(260px,36vh)] md:min-h-[min(360px,46vh)]',
  square: 'col-span-6 md:col-span-4 md:row-span-1 min-h-[min(200px,30vh)] md:min-h-[min(260px,36vh)]',
  banner: 'col-span-6 md:col-span-8 md:row-span-1 min-h-[min(180px,26vh)] md:min-h-[min(220px,30vh)]',
}

function TechnicalGridBg({ reduceMotion }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -inset-[100%] opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(${TECH} 0.5px, transparent 0.5px),
            linear-gradient(90deg, ${TECH} 0.5px, transparent 0.5px)
          `,
          backgroundSize: '48px 48px',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -24, 0],
                y: [0, 18, 0],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neo-wire" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 H80 M40 0 V80" fill="none" stroke={TECH} strokeWidth="0.4" />
            <circle cx="40" cy="40" r="28" fill="none" stroke={TECH} strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neo-wire)" />
      </svg>
      <div
        className="absolute bottom-8 left-4 font-mono text-[9px] leading-relaxed tracking-wider text-[#F0F0F0]/25 md:left-10"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        <GpsTicker reduceMotion={reduceMotion} />
      </div>
    </div>
  )
}

function GpsTicker({ reduceMotion }) {
  const [line, setLine] = useState(() => coordsLine())
  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => setLine(coordsLine()), 4200)
    return () => window.clearInterval(id)
  }, [reduceMotion])
  return (
    <span className="block max-w-[min(100%,280px)] whitespace-pre-line select-none">{line}</span>
  )
}

function coordsLine() {
  const lat = (43.2 + Math.random() * 0.08).toFixed(5)
  const lon = (-1.8 + Math.random() * 0.06).toFixed(5)
  const z = (12 + Math.random() * 88).toFixed(1)
  return `SCAN · N ${lat}° E ${lon}°\nDEPTH ${z}µ · GRID LOCK`
}

function SectionGlitchFlash({ token, reduceMotion }) {
  if (reduceMotion) return null
  return (
    <AnimatePresence mode="sync">
      {token > 0 && (
        <motion.div
          key={token}
          className="pointer-events-none fixed inset-0 z-[180] mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.14, 0.03, 0.11, 0],
            x: [0, -3, 2, -1, 0],
            filter: ['none', 'contrast(1.4)', 'none', 'contrast(1.2)', 'none'],
          }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, transparent, ${SURGICAL}22, transparent)` }}
        />
      )}
    </AnimatePresence>
  )
}

function useSectionGlitchSpy(sections) {
  const [active, setActive] = useState('hero')
  const [glitchToken, setGlitchToken] = useState(0)
  const currentRef = useRef('hero')

  useEffect(() => {
    const els = sections.map((id) => document.querySelector(`[data-section="${id}"]`)).filter(Boolean)
    if (!els.length) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!hit?.target) return
        const next = hit.target.getAttribute('data-section')
        if (!next || next === currentRef.current) return
        currentRef.current = next
        setActive(next)
        setGlitchToken((t) => t + 1)
      },
      { root: null, rootMargin: '-42% 0px -42% 0px', threshold: [0, 0.05, 0.15, 0.35, 0.55] }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  return { active, glitchToken }
}

function CrosshairFrame({ children, className = '' }) {
  const corner = 'absolute border-[#F0F0F0]/55 pointer-events-none'
  const sz = 'h-2.5 w-2.5'
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 border-[0.5px] border-[#222222]/90"
        aria-hidden
      />
      <span className={`${corner} ${sz} left-0 top-0 border-l-[0.5px] border-t-[0.5px]`} />
      <span className={`${corner} ${sz} right-0 top-0 border-r-[0.5px] border-t-[0.5px]`} />
      <span className={`${corner} ${sz} bottom-0 left-0 border-b-[0.5px] border-l-[0.5px]`} />
      <span className={`${corner} ${sz} bottom-0 right-0 border-b-[0.5px] border-r-[0.5px]`} />
    </div>
  )
}

function CyberMasonryItem({ item, index }) {
  const layout = item.layout && LAYOUT_CLASS[item.layout] ? item.layout : 'square'
  const cls = LAYOUT_CLASS[layout]
  const needle = item.needle ?? '—'
  const time = item.time ?? '—'
  const ink = item.ink ?? '—'

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 420, damping: 38 }}
      className={cls}
    >
      <CrosshairFrame className="h-full min-h-[inherit] bg-[#111]">
        <div className="relative h-full min-h-[inherit] w-full">
          <SafeImg
            src={item.src}
            alt={item.alt || ''}
            width={1200}
            height={900}
            className={`h-full min-h-[inherit] w-full object-cover ${imgTone}`}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-95" />
          <div className="absolute inset-0 flex items-end justify-center p-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100 md:p-4">
            <p className="max-w-[95%] text-center font-mono text-[9px] leading-snug tracking-wide text-[#F0F0F0]/90 md:text-[10px]">
              [AIGUILLE: {needle} | ENCRE: {String(ink).toUpperCase()} | TEMPS: {String(time).replace(/\s/g, '')}]
            </p>
          </div>
        </div>
      </CrosshairFrame>
    </motion.div>
  )
}

function CyberMasonryGrid({ zoom }) {
  const items = zoom?.items?.length ? zoom.items : DEFAULT_ZOOM.items
  const intro = zoom?.intro ?? DEFAULT_ZOOM.intro

  return (
    <section
      data-section="gallery"
      id="galerie"
      className="border-t border-[#F0F0F0]/10 px-4 py-10 md:px-10 md:py-16"
      style={{ background: BLACK }}
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#F0F0F0]/35">Cyber-grid</p>
        <h2
          className="mt-4 max-w-3xl text-[clamp(1.5rem,3.2vw,2.2rem)] font-light leading-snug text-[#F0F0F0]/92"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Texture & précision — le portfolio en macro.
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-[11px] leading-[1.9] text-[#F0F0F0]/45">{intro}</p>

        <motion.div
          layout
          className="mt-8 grid grid-cols-12 gap-2 md:mt-10 md:gap-3"
          style={{ gridAutoRows: 'minmax(96px, auto)' }}
        >
          {items.map((item, i) => (
            <CyberMasonryItem key={`${item.src}-${i}`} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HeroImageBand() {
  const strip = [
    { src: `${P}/neotraditional-tattoo-mask-graffiti.webp`, alt: '' },
    { src: `${P}/thomas-pineiro-tattoo.webp`, alt: '' },
    { src: `${P}/mandala-robin.jpg`, alt: '' },
  ]
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[1] flex h-[min(26vh,300px)] gap-px border-t border-[#F0F0F0]/10 bg-[#111] md:h-[min(30vh,340px)]">
      {strip.map((p, i) => (
        <div key={p.src} className="relative min-h-0 flex-1 overflow-hidden">
          <SafeImg
            src={p.src}
            alt={p.alt}
            width={900}
            height={700}
            className={`h-full w-full object-cover ${imgTone}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      ))}
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

const SPY_SECTIONS = ['hero', 'gallery', 'expertise', 'vision', 'stencil', 'protocole', 'faq', 'footer']

function HygieneExpertiseSection() {
  return (
    <section
      data-section="expertise"
      id="expertise-hygiene"
      className="border-t border-[#F0F0F0]/10 px-5 py-12 md:px-10 md:py-16"
      style={{ background: BLACK }}
    >
      <p className="text-[10px] uppercase tracking-[0.45em] text-[#F0F0F0]/35">Expertise</p>
      <h2
        className="mt-4 max-w-2xl text-[clamp(1.35rem,2.8vw,1.85rem)] font-light leading-snug text-[#F0F0F0]/92"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        Hygiène & précision
      </h2>
      <div className="mt-8 max-w-5xl columns-1 gap-x-14 gap-y-6 text-[13px] font-light leading-[1.85] text-[#F0F0F0]/55 md:columns-2 md:text-[14px]">
        <p className="break-inside-avoid [&:not(:last-child)]:mb-6">
          Chaque poste est traité comme un bloc opératoire : flux à sens unique, surstock stérile documenté, pigments
          traçables. Pas de raccourci sur la désinfection — le protocole prime sur la cadence.
        </p>
        <p className="break-inside-avoid">
          La précision du geste prolonge l’hygiène : aiguilles à usage unique, calibrage machine, pauses quand la peau
          signale la fatigue. Le rendu tient dans le temps parce que la base est irréprochable.
        </p>
      </div>
    </section>
  )
}

export function BrutalismChicExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const smoothTitleY = useSpring(titleY, { stiffness: 120, damping: 32, mass: 0.35 })

  const { glitchToken } = useSectionGlitchSpy(SPY_SECTIONS)

  const zoom = site?.zoomPortfolio ?? DEFAULT_ZOOM

  const backSite = {
    ...site,
    surfaceColor: BLACK,
    textColor: SURGICAL,
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(240,240,240,0.12)' },
  }

  const bookingTo = `/portfolio/${site?.id ?? 'neo-ink-studio'}/reservation`

  return (
    <div
      className="overflow-y-auto overflow-x-hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
        minHeight: '100dvh',
        background: BLACK,
        color: SURGICAL,
      }}
    >
      <SectionGlitchFlash token={glitchToken} reduceMotion={reduceMotion} />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[1000] flex flex-col gap-2 p-3 pt-[max(0.5rem,env(safe-area-inset-top))] md:flex-row md:items-start">
        <div className="pointer-events-auto">
          <BackButton onClick={onBack} site={backSite} variant="inline" />
        </div>
      </div>

      <section
        ref={heroRef}
        data-section="hero"
        className="relative min-h-[min(88dvh,760px)] md:min-h-[min(92dvh,820px)]"
      >
        <TechnicalGridBg reduceMotion={reduceMotion} />
        <HeroImageBand />

        <div className="relative z-[5] px-5 pb-6 pt-[max(5.5rem,env(safe-area-inset-top))] md:px-10 md:pb-8 md:pt-24">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#F0F0F0]/35">Brutalisme chic</p>
          <div className="relative mt-6 overflow-visible">
            <motion.h1
              style={{
                y: reduceMotion ? 0 : smoothTitleY,
                fontFamily: '"Playfair Display", Georgia, serif',
                mixBlendMode: 'difference',
                color: SURGICAL,
              }}
              className="translate-x-[-2%] whitespace-pre-line select-none text-[clamp(3.25rem,16vw,11rem)] font-light leading-[0.85] tracking-tighter"
            >
              {(() => {
                const raw = site?.hero?.headline
                if (!raw) return "Nous\nmarquons\nl'instant"
                const first = raw.split(/[—–]/)[0]?.trim() ?? raw
                const words = first.split(/\s+/).filter(Boolean).slice(0, 4)
                return words.join('\n')
              })()}
            </motion.h1>
          </div>
          <p className="relative z-[6] mx-auto mt-8 max-w-md font-mono text-[12px] font-light leading-relaxed text-[#F0F0F0]/55 md:mt-10">
            {site?.hero?.subline ??
              'Nous marquons l’instant — pas le bruit. Studio étanche, machines calibrées, silence de coulisse.'}
          </p>
          <div className="relative z-[6] mt-10 flex flex-wrap gap-4">
            <MagnetCtaButton to={bookingTo} variant="dark">
              Prendre rendez-vous
            </MagnetCtaButton>
            <Link
              to={bookingTo}
              className={`${tattooLuxuryBtn} border border-[#F0F0F0]/18 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-[#F0F0F0]/65 hover:border-[#F0F0F0]/40`}
            >
              Poser une question
            </Link>
            <a
              href="#protocole"
              className={`${tattooLuxuryBtn} border border-[#F0F0F0]/25 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-[#F0F0F0]/85 hover:border-[#F0F0F0]/45`}
            >
              Le protocole
            </a>
          </div>
        </div>
      </section>

      <CyberMasonryGrid zoom={zoom} />

      <HygieneExpertiseSection />

      <div data-section="vision" id="vision" className="border-t border-[#F0F0F0]/10">
        <TattooVisionSection
          variant="dark"
          editorialColumns
          snapStart={false}
          eyebrow="La vision"
          title="La peau comme écran — précision, pas précipitation."
        >
          <p className="font-mono text-[12px] leading-relaxed">
            Nous traitons le corps comme une surface critique : aucune ligne n’est posée sans comprendre la tension
            musculaire, le grain, la lumière du jour. Pigmentation chirurgicale : le geste est mesuré, le bruit absent.
          </p>
          <p className="font-mono text-[12px] leading-relaxed">
            Expertise humaine au centre : la machine obéit au dessin, jamais l’inverse. Orfèvrerie cutanée sous néon
            tamisé — le luxe, c’est le contrôle.
          </p>
        </TattooVisionSection>
      </div>

      <section
        data-section="stencil"
        id="stencil"
        className="min-h-[min(90dvh,860px)] border-t border-[#F0F0F0]/10 px-5 py-24 md:px-12 lg:px-20"
      >
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#F0F0F0]/35">Technologie</p>
        <h2
          className="mt-6 max-w-3xl text-[clamp(1.65rem,3.5vw,2.35rem)] font-light leading-snug text-[#F0F0F0]/92"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Stencil numérique & design génératif — avant la première piqûre.
        </h2>
        <div className="mt-10 max-w-4xl columns-1 gap-x-14 gap-y-6 font-mono text-[11px] leading-[1.95] text-[#F0F0F0]/50 md:columns-2">
          <p className="break-inside-avoid">
            Votre projet passe par une grille vectorielle haute définition : courbures du membre simulées, déformation
            anticipée, export stencil calibré au micron. Le design génératif propose des variantes de trame — nous
            tranchons à la main ce qui reste humain.
          </p>
          <p className="break-inside-avoid">
            Asepsie rigoureuse sur le fichier comme sur la peau : chaque calque est nommé, chaque version archivée. Le
            studio garde la chaîne — de l’écran au derme.
          </p>
        </div>
      </section>

      <div data-section="protocole" id="protocole">
        <TattooProtocolReport variant="dark" studioLabel={site?.name ?? 'Brutalisme chic'} />
      </div>

      <div data-section="faq" id="faq">
        <TattooFaqGrid variant="dark" items={FAQ_BRUT} />
      </div>

      <footer
        data-section="footer"
        className="border-t border-[#F0F0F0]/10 px-5 py-20 md:px-10"
      >
        <p className="font-mono text-[10px] text-[#F0F0F0]/35">
          {site?.location?.city} · {site?.location?.street}
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <MagnetCtaButton to={bookingTo} variant="dark">
            Prendre rendez-vous
          </MagnetCtaButton>
          <a
            href={`mailto:${site?.contactEmail ?? SITE.contactEmail}`}
            className={`${tattooLuxuryBtn} text-[10px] uppercase tracking-[0.28em] text-[#F0F0F0]/45 hover:text-[#F0F0F0]/85`}
          >
            Écrire
          </a>
        </div>
      </footer>
    </div>
  )
}
