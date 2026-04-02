/**
 * Or & Peau — long-scroll, vision, morphologie, bar à bijoux, protocole, FAQ, réservation.
 */
import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SITE } from '../../constants.js'
import { BackButton } from '../mini/BackButton.jsx'
import { MagnetCtaButton } from './MagnetCtaButton.jsx'
import { TattooFaqGrid } from './TattooFaqGrid.jsx'
import { TattooProtocolReport } from './TattooProtocolReport.jsx'
import { TattooVisionSection } from './TattooVisionSection.jsx'
import { tattooLuxuryBtn } from './tattooUi.js'

const P = '/perceur'
const imgTone = 'grayscale-[25%] sepia-[18%] contrast-[1.04]'

const FAQ_OR = [
  {
    q: 'Douleur',
    a: 'Le geste est bref, la veille anatomique longue : nous refusons les angles qui mentent. Une piqûre honnête, une pose stable — l’orfèvrerie cutanée commence par le respect des nerfs.',
  },
  {
    q: 'Soins',
    a: 'Protocole illustré, titane traçable, ligne directe si la zone réagit. Asepsie rigoureuse comme en cabinet : rien n’est laissé au hasard après la pose.',
  },
  {
    q: 'Prix',
    a: 'Le bijou et le temps d’anatomie sont facturés ensemble — pas de marge sur votre morphologie. Devis après cartographie, jamais de surprise sur le métal.',
  },
]

function GlitterCard({ children, className = '' }) {
  const ref = useRef(null)
  const move = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`)
  }, [])

  return (
    <div
      ref={ref}
      role="presentation"
      onMouseMove={move}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at var(--gx,50%) var(--gy,40%), rgba(255,248,235,0.55), transparent 55%), radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 40%)',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
          mixBlendMode: 'soft-light',
        }}
      />
      {children}
    </div>
  )
}

export function OrEtPeauExperience({ site, onBack }) {
  const catalog = site?.jewelryCatalog?.length
    ? site.jewelryCatalog
    : [
        { name: 'Stud titane poli', material: 'ASTM F-136', price: 'dès 38€' },
        { name: 'Anneau segmenté', material: 'Clicker titane', price: 'dès 52€' },
        { name: 'Labret or 18k', material: 'Pierre sertie', price: 'dès 95€' },
      ]

  const backSite = {
    ...site,
    surfaceColor: '#f4ede4',
    textColor: '#2c2825',
    portfolio: { ...(site?.portfolio ?? {}), backButtonRing: 'rgba(44,40,37,0.12)' },
  }

  const bookingTo = `/portfolio/${site?.id ?? 'le-labo-de-peau'}/reservation`

  return (
    <div
      className="snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        background: 'linear-gradient(165deg, #f7f1e8 0%, #ebe2d6 38%, #f3eadf 100%)',
        fontFamily: '"Inter", system-ui, sans-serif',
        minHeight: '100dvh',
      }}
    >
      <BackButton onClick={onBack} site={backSite} />

      <section className="relative flex min-h-[100dvh] snap-start flex-col justify-end px-6 pb-16 pt-28 md:px-16 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-[10px] font-light uppercase tracking-[0.5em] text-[#2c2825]/45">Or & Peau</p>
          <h1 className="mt-6 max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-extralight leading-[1.15] tracking-tight text-[#2c2825]">
            {site?.hero?.headline ?? 'La lumière choisit le métal avant la peau.'}
          </h1>
          <p className="mt-8 max-w-md text-[14px] font-light leading-relaxed text-[#2c2825]/65">
            {site?.hero?.subline ??
              'Nous marquons l’instant — avec la même exigence qu’un serti : titane, or, silence et protocole.'}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagnetCtaButton to={bookingTo} variant="warm">
              Prendre rendez-vous
            </MagnetCtaButton>
            <Link
              to={bookingTo}
              className={`${tattooLuxuryBtn} border-b border-[#2c2825]/25 pb-1 text-[10px] uppercase tracking-[0.28em] text-[#2c2825]/70`}
            >
              Poser une question
            </Link>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute right-0 top-0 h-[55%] w-[55%] max-w-md opacity-90">
          <img
            src={`${P}/nosepiercing2.webp`}
            alt=""
            width={600}
            height={800}
            className={`h-full w-full object-cover object-center ${imgTone}`}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#f7f1e8] via-transparent to-transparent" />
        </div>
      </section>

      <div id="vision">
        <TattooVisionSection
          variant="warm"
          eyebrow="La vision"
          title="Orfèvrerie cutanée — le bijou comme décision anatomique."
        >
          <p>
            Nous ne perçons pas « un lobe » : nous cartographions une forme unique. Pigmentation chirurgicale n’entre pas ici — à sa place : le métal
            le plus pur que votre morphologie tolère.
          </p>
          <p>
            Expertise humaine : chaque pose est négociée avec la réalité du cartilage, de l’épaisseur, du calendrier de vie. Nous marquons l’instant
            quand la mesure est juste — jamais avant.
          </p>
        </TattooVisionSection>
      </div>

      <section id="morphologie" className="min-h-[min(92dvh,880px)] snap-start border-y border-[#2c2825]/8 px-6 py-24 md:px-16">
        <p className="text-[10px] font-light uppercase tracking-[0.45em] text-[#2c2825]/45">Morphologie</p>
        <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.8vw,2.5rem)] font-light leading-snug text-[#2c2825]" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
          Le bijou choisi pour votre anatomie — pas pour un catalogue.
        </h2>
        <div className="mt-10 max-w-2xl space-y-6 text-[15px] font-light leading-[1.9] text-[#2c2825]/75">
          <p>
            Oreille, cartilage, nez : chaque zone impose rayon de courbure, longueur de tige, jeu du filetage. Nous mesurons, nous refusons la pose
            risquée, nous proposons l’alternative qui respecte le tissu.
          </p>
          <p>
            Asepsie rigoureuse et écoute du vivant : la peau n’est pas un support — c’est le sujet. Le bijou seconde, il ne domine pas.
          </p>
        </div>
      </section>

      <section id="bijoux" className="min-h-[min(100dvh,960px)] snap-start px-6 py-20 md:px-16">
        <div className="mb-12">
          <h2 className="text-[11px] font-light uppercase tracking-[0.45em] text-[#2c2825]/45">Le bar à bijoux</h2>
          <p className="mt-3 text-[13px] font-light text-[#2c2825]/55">Passez la souris — le grain répond.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((item) => (
            <GlitterCard
              key={item.name}
              className="rounded-2xl border border-white/50 bg-white/25 p-6 shadow-[0_24px_64px_-32px_rgba(60,48,40,0.35)] backdrop-blur-2xl transition-all duration-1000"
            >
              <div className="relative z-[1]">
                <p className="text-[15px] font-light text-[#2c2825]">{item.name}</p>
                <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-[#2c2825]/45">{item.material}</p>
                <p className="mt-6 text-[12px] font-light text-[#2c2825]/70">{item.price}</p>
              </div>
            </GlitterCard>
          ))}
        </div>
      </section>

      <section className="relative min-h-[100dvh] snap-start">
        <img
          src={`${P}/cabinet.webp`}
          alt=""
          width={1200}
          height={900}
          className={`h-full min-h-[100dvh] w-full object-cover ${imgTone}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f1e8] via-transparent to-transparent" />
        <div className="absolute bottom-12 left-6 right-6 md:left-16">
          <p className="max-w-sm text-[13px] font-light leading-relaxed text-[#2c2825]/80">
            Cabinet feutré, lumière latérale — nous ne perçons que lorsque la cartographie est claire.
          </p>
        </div>
      </section>

      <div id="protocole">
        <TattooProtocolReport variant="warm" studioLabel={site?.name ?? 'Or & Peau'} />
      </div>

      <div id="faq">
        <TattooFaqGrid variant="warm" items={FAQ_OR} />
      </div>

      <section className="flex min-h-[50dvh] snap-start flex-col justify-center px-6 py-20 md:px-16">
        <p className="text-[11px] font-light uppercase tracking-[0.35em] text-[#2c2825]/45">Rendez-vous</p>
        <p className="mt-4 text-[14px] font-light text-[#2c2825]/70">
          {site?.location?.city} — {site?.location?.street}
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <MagnetCtaButton to={bookingTo} variant="warm">
            Prendre rendez-vous
          </MagnetCtaButton>
          <a
            href={`mailto:${site?.contactEmail ?? SITE.contactEmail}`}
            className={`${tattooLuxuryBtn} text-[11px] font-light uppercase tracking-[0.35em] text-[#2c2825]/70 hover:text-[#2c2825]`}
          >
            Écrire
          </a>
        </div>
      </section>
    </div>
  )
}
