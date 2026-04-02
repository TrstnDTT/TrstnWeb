/**
 * L'Héritage — long-scroll, vision, patine, archive, protocole, FAQ, réservation immersive.
 */
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'
import { MagnetCtaButton } from './MagnetCtaButton.jsx'
import { TattooFaqGrid } from './TattooFaqGrid.jsx'
import { TattooProtocolReport } from './TattooProtocolReport.jsx'
import { TattooVisionSection } from './TattooVisionSection.jsx'
import { tattooLuxuryBtn } from './tattooUi.js'

const P = '/perceur'
const imgTone =
  'grayscale-[35%] sepia-[12%] contrast-[1.06] transition-all duration-1000'
const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' }

function buildArchive(site) {
  const artists = site?.tattooArtists ?? []
  const imgs = [
    `${P}/thomas-pineiro-tattoo.webp`,
    `${P}/neotraditional-tattoo-mask-graffiti.webp`,
    `${P}/mandala-robin.jpg`,
    `${P}/piercing.webp`,
    `${P}/piercingg.webp`,
  ]
  return artists.slice(0, 5).map((a, i) => ({
    id: a.name ?? `r-${i}`,
    name: a.name,
    role: a.role,
    image: imgs[i % imgs.length],
  }))
}

export function HeritageExperience({ site, onBack }) {
  const [hoverId, setHoverId] = useState(null)
  const [openId, setOpenId] = useState(null)
  const archive = useMemo(() => {
    const a = buildArchive(site)
    if (a.length) return a
    return [
      { id: '1', name: 'Marc Delmas', role: 'Tradition & point', image: `${P}/thomas-pineiro-tattoo.webp` },
      { id: '2', name: 'Sophie Arnaud', role: 'Lettrage & aplats', image: `${P}/neotraditional-tattoo-mask-graffiti.webp` },
      { id: '3', name: 'L’atelier', role: 'Réserve — mandala', image: `${P}/mandala-robin.jpg` },
    ]
  }, [site])

  const backSite = {
    ...site,
    surfaceColor: '#F9F8F6',
    textColor: '#1A1A1A',
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(26,26,26,0.14)' },
  }

  const bookingTo = `/portfolio/${site?.id ?? 'atelier-1920'}/reservation`

  return (
    <div
      className="relative snap-y snap-proximity overflow-y-auto overflow-x-hidden pb-32 text-[#1A1A1A] [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth [&::-webkit-scrollbar]:hidden"
      style={{ backgroundColor: '#F9F8F6', fontFamily: '"Inter", system-ui, sans-serif', minHeight: '100dvh' }}
    >
      <BackButton onClick={onBack} site={backSite} />

      {/* Hero */}
      <header id="accueil" className="relative min-h-[100dvh] snap-start pt-28 md:pt-36">
        <div className="grid grid-cols-12 gap-y-12 px-5 md:px-10 lg:px-16">
          <div className="col-span-12 md:col-span-5 md:col-start-2 lg:pt-8">
            <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-[#1A1A1A]/50">L’Héritage</p>
            <h1 className="text-[clamp(2.5rem,6.5vw,4.75rem)] font-light leading-[1.05] tracking-tight" style={serif}>
              {site?.hero?.headline ?? 'Nous marquons l’instant.'}
            </h1>
            <p className="mt-8 max-w-md text-[15px] font-light leading-relaxed text-[#1A1A1A]/75">
              {site?.hero?.subline ??
                'Pas une mode : une lignée. Chaque motif respire avec le temps — comme une gravure qu’on relit au fil des années.'}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagnetCtaButton to={bookingTo}>Prendre rendez-vous</MagnetCtaButton>
              <Link
                to={bookingTo}
                className={`${tattooLuxuryBtn} border-b border-[#1A1A1A]/25 pb-1 text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/70 hover:border-[#1A1A1A]/50`}
              >
                Poser une question
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto w-full max-w-lg md:mt-12"
            >
              <div className="aspect-[4/5] overflow-hidden md:translate-x-8 md:shadow-2xl">
                <img
                  src={`${P}/thomas-pineiro-tattoo.webp`}
                  alt=""
                  width={800}
                  height={1000}
                  className={`h-full w-full object-cover ${imgTone}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section id="vision">
        <TattooVisionSection eyebrow="La vision" title="L’aiguille comme filiation — le corps comme parchemin digne." variant="light">
          <p style={serif}>
            Nous croyons à la transmission : un motif qui traverse les décennies sans trahir la peau. Pigmentation chirurgicale n’est pas un slogan
            — c’est un pacte de lenteur. Orfèvrerie cutanée : chaque ligne assume son poids, chaque noir accepte de devenir patine.
          </p>
          <p style={serif}>
            Respect du corps : refus du style imposé, refus de la précipitation. Ici, l’expertise humaine prime sur la tendance — nous marquons
            l’instant pour qu’il survive aux saisons.
          </p>
        </TattooVisionSection>
      </section>

      {/* Vieillissement de l’encre */}
      <section id="patine" className="min-h-[min(88dvh,840px)] snap-start border-y border-[#1A1A1A]/8 px-5 py-24 md:px-12 lg:px-20">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#1A1A1A]/45">Patine & long terme</p>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] font-light leading-snug text-[#1A1A1A]" style={serif}>
          Le vieillissement de l’encre, anticipé dès le premier geste.
        </h2>
        <div className="mt-10 max-w-2xl space-y-6 text-[15px] font-light leading-[1.9] text-[#1A1A1A]/78">
          <p>
            Un noir qui ne devient pas bouillie grise : dilutions stériles, aplats calibrés, ombrages pensés pour la densité du derme. Nous
            refusons les pigments opaques non traçables — seule une pigmentation chirurgicale assumée vieillit avec noblesse.
          </p>
          <p>
            Votre peau bouge, le soleil parle, la vie ajoute des rides : nous prévoyons la chute de contraste comme on prévoit une reliure qui
            s’ouvre — avec fierté, pas avec regret.
          </p>
        </div>
      </section>

      {/* L’Archive */}
      <section id="archive" className="relative min-h-[100dvh] snap-start px-5 py-24 md:px-10 lg:px-16">
        <div className="mb-16 md:ml-[8%]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-[#1A1A1A]" style={serif}>
            L’Archive
          </h2>
          <p className="mt-3 max-w-sm text-xs font-light uppercase tracking-[0.35em] text-[#1A1A1A]/45">
            Résidents — passez le curseur pour révéler
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl md:pl-[4%]">
          <ul className="divide-y divide-[#1A1A1A]/12">
            {archive.map((row) => (
              <li
                key={row.id}
                className="relative"
                onMouseEnter={() => setHoverId(row.id)}
                onMouseLeave={() => setHoverId(null)}
                onFocus={() => setHoverId(row.id)}
                onBlur={() => setHoverId(null)}
              >
                <button
                  type="button"
                  className="flex w-full flex-col items-start gap-2 py-8 text-left md:flex-row md:items-baseline md:justify-between md:gap-12"
                  onClick={() => setOpenId((v) => (v === row.id ? null : row.id))}
                >
                  <span className="text-[clamp(1.75rem,4vw,2.75rem)] font-light text-[#1A1A1A]" style={serif}>
                    {row.name}
                  </span>
                  <span className="text-[11px] font-light uppercase tracking-[0.28em] text-[#1A1A1A]/50">{row.role}</span>
                </button>

                <div className="md:hidden">
                  <AnimatePresence>
                    {(hoverId === row.id || openId === row.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pb-6"
                      >
                        <img
                          src={row.image}
                          alt=""
                          width={640}
                          height={800}
                          className={`aspect-[4/5] w-full max-w-xs object-cover ${imgTone}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {hoverId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute right-0 top-0 z-10 hidden w-[min(38vw,340px)] md:block"
              >
                <div className="aspect-[3/4] overflow-hidden shadow-2xl backdrop-blur-sm">
                  <img
                    src={archive.find((r) => r.id === hoverId)?.image}
                    alt=""
                    width={340}
                    height={453}
                    className={`h-full w-full object-cover ${imgTone}`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="protocole">
        <TattooProtocolReport variant="light" studioLabel={site?.name ?? 'L’Héritage'} />
      </section>

      <section id="faq">
        <TattooFaqGrid variant="light" />
      </section>

      <section id="contact" className="min-h-[50dvh] snap-start px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-xl md:ml-[12%]">
          <p className="text-sm font-light leading-relaxed text-[#1A1A1A]/65">
            {site?.location?.city ? `${site.location.city} · ` : ''}
            {site?.location?.hours ?? 'Sur rendez-vous'}
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <MagnetCtaButton to={bookingTo}>Prendre rendez-vous</MagnetCtaButton>
            <a
              href={`mailto:${site?.contactEmail ?? SITE.contactEmail}`}
              className={`${tattooLuxuryBtn} text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/55 hover:text-[#1A1A1A]`}
            >
              Écrire directement
            </a>
          </div>
        </div>
      </section>

      <nav
        className="fixed bottom-0 left-0 right-0 z-[200] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#1A1A1A]/10 bg-[#F9F8F6]/85 py-3.5 backdrop-blur-xl md:gap-10"
        aria-label="Navigation"
      >
        {[
          ['Accueil', '#accueil'],
          ['Vision', '#vision'],
          ['Patine', '#patine'],
          ['Archive', '#archive'],
          ['Protocole', '#protocole'],
          ['FAQ', '#faq'],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={`${tattooLuxuryBtn} text-[9px] uppercase tracking-[0.35em] text-[#1A1A1A]/50 hover:text-[#1A1A1A]`}
          >
            {label}
          </a>
        ))}
        <Link
          to={bookingTo}
          className={`${tattooLuxuryBtn} text-[9px] uppercase tracking-[0.38em] text-[#1A1A1A]`}
        >
          Réserver
        </Link>
      </nav>
    </div>
  )
}
