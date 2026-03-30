/**
 * Neo-Ink Studio — bento CSS grid, néon cyan, monospace, glitch au survol.
 * Parallax titres + cartes illuminées au scroll (framer-motion).
 * Aucun composant partagé avec Atelier 1920 ni Le Labo.
 */
import { useCallback, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VOID = '#000000'
const NEON = '#22d3ee'
const GLOW = '#67e8f9'
const MONO = '"IBM Plex Mono", ui-monospace, monospace'

const TP = '/stock-photos/tattoo-piercing'

const DEFAULT_SIM = {
  headline: 'Maquette numérique avant la première piqûre.',
  body:
    'Relief simulé, stencil calibré au millimètre, validation écran avant peau. Chaque ligne est tracée comme du code versionné.',
  services: ['Tracé fin DPI peau', 'Warp mesh sur volumes', 'Export stencil double couche'],
}

function NeoRetour({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed left-3 top-3 z-[1001] border border-[#22d3ee]/50 bg-black px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#ecfeff] hover:bg-[#22d3ee]/20"
      style={{ fontFamily: MONO }}
      aria-label="Retour au portfolio"
    >
      [ ← ]
    </button>
  )
}

function ScrollGlow({ children, className = '', id }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0.75, boxShadow: '0 0 0 rgba(34,211,238,0)' }}
      whileInView={{
        opacity: 1,
        boxShadow: '0 0 0 1px rgba(34,211,238,0.35), 0 0 28px rgba(34,211,238,0.12)',
      }}
      viewport={{ once: false, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  )
}

const NAV = [
  ['neo-top', '00_TOP'],
  ['neo-process', '01_FLOW'],
  ['neo-hygiene', '02_SAFE'],
  ['neo-zoom', '03_ZOOM'],
  ['neo-digital', '04_AR'],
  ['neo-precision', '05_TEXT'],
  ['neo-sim', '06_3D'],
  ['neo-artists', '07_CREW'],
  ['neo-guest', '08_GUEST'],
  ['neo-book', '09_BOOK'],
]

export function NeoInkStudioExperience({ site, onBack }) {
  const sim = site.simulation3d ?? DEFAULT_SIM
  const artists = site.cyberArtistsNarrative?.length ? site.cyberArtistsNarrative : site.cyberArtists ?? []
  const guests = site.guestSpots ?? []
  const digital = site.digitalExperience
  const processSteps = site.clientProcessSteps ?? []
  const hygiene = site.hygieneLuxury
  const zoom = site.zoomPortfolio

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 48])
  const heroOp = useTransform(scrollYProgress, [0, 0.8], [1, 0.35])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden scroll-smooth selection:bg-[#22d3ee] selection:text-black"
      style={{ backgroundColor: VOID, color: '#ecfeff', fontFamily: MONO, fontSize: '13px' }}
    >
      <style>{`
        @keyframes neo-glitch {
          0% { transform: translate(0); text-shadow: 0 0 #22d3ee; }
          20% { transform: translate(-2px, 1px); text-shadow: 2px 0 #f472b6, -2px 0 #22d3ee; }
          40% { transform: translate(2px, -1px); text-shadow: -1px 0 #22d3ee; }
          60% { transform: translate(-1px, 2px); text-shadow: 1px 0 #67e8f9; }
          100% { transform: translate(0); text-shadow: none; }
        }
        .neo-glitch-hover:hover {
          animation: neo-glitch 0.35s linear 1;
        }
      `}</style>

      <NeoRetour onBack={onBack} />

      <nav
        className="fixed right-3 top-3 z-[1000] flex max-h-[75dvh] flex-col items-end gap-1 overflow-y-auto pr-0.5 md:right-5 md:top-5"
        aria-label="Sections"
      >
        {NAV.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="border border-white/10 bg-black/80 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#67e8f9]/90 hover:border-[#22d3ee] hover:text-[#22d3ee]"
            style={{ fontFamily: MONO }}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="grid auto-rows-min grid-cols-6 gap-2 p-3 pt-16 md:gap-3 md:p-4 md:pt-20">
        <div
          ref={heroRef}
          id="neo-top"
          className="relative col-span-6 min-h-[42dvh] overflow-hidden border border-white/10 md:col-span-4 md:row-span-2 md:min-h-[52dvh]"
        >
          <img
            src={`${TP}/neotraditional-tattoo-mask-graffiti.webp`}
            alt="Tatouage néo-traditionnel masque, aplats et contours graphiques"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <motion.div style={{ y: heroY, opacity: heroOp }} className="relative flex h-full flex-col justify-end p-5 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.45em]" style={{ color: GLOW }}>
              {site.tagline}
            </p>
            <h1 className="neo-glitch-hover mt-4 max-w-[14ch] text-[clamp(1.75rem,5.5vw,3.2rem)] font-medium leading-[0.95] tracking-tight text-white">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-white/80">{site.hero?.headline}</p>
          </motion.div>
        </div>

        <div className="col-span-6 flex flex-col justify-between border border-white/10 bg-[#050505] p-4 md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#22d3ee]/70">Statut</p>
          <p className="mt-3 text-[11px] leading-relaxed text-white/65">{site.hero?.subline}</p>
          <a
            href={`mailto:pipeline@neoink-marseille.fr?subject=${encodeURIComponent('Lancer le projet — Neo-Ink')}`}
            className="mt-4 inline-block border-2 border-[#22d3ee] bg-[#22d3ee] px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-black hover:bg-transparent hover:text-[#22d3ee]"
          >
            Lancer le projet
          </a>
        </div>

        <ScrollGlow id="neo-process" className="col-span-6 scroll-mt-24 border border-white/10 bg-[#050505] p-5 md:col-span-6">
          <motion.h2
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: NEON }}
            initial={{ y: 12, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
          >
            Le processus
          </motion.h2>
          <p className="mt-3 max-w-2xl text-[11px] leading-relaxed text-white/55">
            Consultation → dessin vectoriel → séance rotative → cicatrisation pilotée. Chaque phase est documentée.
          </p>
          <ol className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <li key={step.title} className="border border-white/10 bg-black/80 p-4">
                <span className="text-[#22d3ee]/90" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="ml-2 text-[10px] text-white/35">0{i + 1}</span>
                <p className="mt-2 text-[12px] font-medium text-white/90">{step.title}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/55">{step.copy}</p>
              </li>
            ))}
          </ol>
        </ScrollGlow>

        <ScrollGlow id="neo-hygiene" className="col-span-6 scroll-mt-24 border border-white/10 bg-[#050505] p-5 md:col-span-3">
          <motion.h2
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: NEON }}
            initial={{ y: 12, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Hygiène &amp; sécurité
          </motion.h2>
          {hygiene?.intro && <p className="mt-4 text-[11px] leading-relaxed text-white/65">{hygiene.intro}</p>}
          <ul className="mt-4 space-y-3 border-l-2 border-[#22d3ee]/40 pl-4">
            {(hygiene?.points ?? []).map((pt) => (
              <li key={pt.title}>
                <p className="text-[11px] font-medium text-white/85">{pt.title}</p>
                <p className="mt-1 text-[10px] leading-relaxed text-white/50">{pt.detail}</p>
              </li>
            ))}
          </ul>
        </ScrollGlow>

        <ScrollGlow id="neo-zoom" className="col-span-6 scroll-mt-24 border border-white/10 bg-[#050505] p-5 md:col-span-3">
          <motion.h2
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: NEON }}
            initial={{ y: 12, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Zoom portfolio
          </motion.h2>
          {zoom?.intro && <p className="mt-4 text-[11px] leading-relaxed text-white/60">{zoom.intro}</p>}
          <div className="mt-4 grid grid-flow-dense grid-cols-2 gap-2 md:grid-cols-3">
            {(zoom?.items ?? []).map((item, i) => (
              <div key={`${item.src}-${i}`} className={`overflow-hidden border border-white/10 ${item.span ?? ''}`}>
                <img src={item.src} alt={item.alt} className="h-full min-h-[100px] w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </ScrollGlow>

        <ScrollGlow id="neo-digital" className="col-span-6 scroll-mt-24 border border-[#22d3ee]/50 bg-gradient-to-br from-[#0a0a0a] to-black p-5 md:col-span-6">
          <motion.h2
            className="text-[11px] uppercase tracking-[0.4em] text-[#67e8f9]"
            initial={{ y: 20, opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            L’expérience digitale
          </motion.h2>
          {digital && (
            <>
              <p className="mt-4 text-[13px] font-medium text-white/90">{digital.headline}</p>
              <p className="mt-3 text-[12px] leading-relaxed text-white/65">{digital.intro}</p>
              {(digital.paragraphs ?? []).map((p, i) => (
                <p key={i} className="mt-3 text-[12px] leading-relaxed text-white/65">
                  {p}
                </p>
              ))}
              <ul className="mt-4 space-y-2 border-l-2 border-[#22d3ee]/50 pl-4 text-[11px] text-white/55">
                {(digital.bullets ?? []).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </ScrollGlow>

        <div id="neo-precision" className="col-span-6 scroll-mt-24 border border-white/10 bg-[#080808] p-5 md:col-span-3">
          <motion.h2
            className="neo-glitch-hover text-[11px] uppercase tracking-[0.4em]"
            style={{ color: NEON }}
            initial={{ y: 16, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            La précision
          </motion.h2>
          <div className="mt-4 space-y-3 text-[12px] leading-relaxed text-white/72">
            {site.about?.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div id="neo-sim" className="col-span-6 scroll-mt-24 border border-[#22d3ee]/35 bg-gradient-to-br from-[#0a0a0a] to-black p-5 md:col-span-3">
          <h2 className="neo-glitch-hover text-[11px] uppercase tracking-[0.4em] text-[#67e8f9]">
            Simulation 3D de votre projet
          </h2>
          <p className="mt-4 text-[13px] font-medium text-white/90">{sim.headline}</p>
          <p className="mt-3 text-[12px] leading-relaxed text-white/65">{sim.body}</p>
          <ul className="mt-4 space-y-2 border-l-2 border-[#22d3ee]/50 pl-4 text-[11px] text-white/55">
            {(sim.services ?? []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <ScrollGlow id="neo-artists" className="col-span-6 scroll-mt-24 md:col-span-4">
          <h2 className="neo-glitch-hover mb-3 px-1 text-[11px] uppercase tracking-[0.4em]" style={{ color: NEON }}>
            L’artiste — récits
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {artists.map((a) => (
              <div key={a.name} className="border border-white/10 bg-[#060606] p-4">
                <p className="text-sm font-medium text-white">{a.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#22d3ee]/80">{a.specialty}</p>
                <p className="mt-3 text-[11px] leading-relaxed text-white/60">{a.story ?? a.bio}</p>
              </div>
            ))}
          </div>
        </ScrollGlow>

        <div id="neo-guest" className="col-span-6 flex flex-col gap-2 scroll-mt-24 md:col-span-2">
          <div className="flex-1 border border-white/10 bg-[#050505] p-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Guests</p>
            <ul className="mt-3 space-y-2 text-[10px] leading-snug text-white/70">
              {guests.slice(0, 4).map((g) => (
                <li key={`${g.artist}-${g.date}`}>
                  <span className="text-[#22d3ee]/90">{g.artist}</span> · {g.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden border border-white/10">
            <img
              src={`${TP}/mandala-robin.jpg`}
              alt="Tatouage mandala détaillé, référence géométrique et précision"
              className="h-32 w-full object-cover opacity-80 md:h-40"
              loading="lazy"
            />
          </div>
        </div>

        <footer id="neo-book" className="col-span-6 scroll-mt-28 border border-white/10 bg-black px-5 py-6 text-center md:px-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">{site.location?.city}</p>
          <p className="mt-2 text-[12px] text-white/60">{site.location?.hours}</p>
          <p className="mt-1 text-[11px] text-white/45">{site.location?.street}</p>
        </footer>
      </div>
    </div>
  )
}
