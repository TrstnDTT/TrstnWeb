/**
 * Le Chai Moderne — vin & tapas, bento, timeline, Bayonne.
 * Images : site.chaiAssets — défauts Unsplash ; remplacer par PicFolder/bar via public/.
 */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { SITE } from '../../constants.js'

const BG = '#f7f5f0'
const INK = '#1a1a1a'
const OAK = '#c4a882'
const ease = [0.22, 1, 0.36, 1]

const softPhoto = 'saturate(0.92) brightness(1.04) contrast(0.98)'

/** Image de secours stable (bouteilles / bar) si une URL distante échoue. */
const WINE_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=82'

function SafeChaiImg({ src, alt = '', className, style }) {
  const [u, setU] = useState(src)
  useEffect(() => setU(src), [src])
  return (
    <img
      src={u}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setU(WINE_IMG_FALLBACK)}
    />
  )
}

function WineBentoCard({ bottle, i }) {
  const [hover, setHover] = useState(false)
  const [imgSrc, setImgSrc] = useState(bottle.image)
  useEffect(() => {
    setImgSrc(bottle.image)
  }, [bottle.image])
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: i * 0.06, ease }}
      className="group relative overflow-hidden rounded-[8px] border-[0.5px] border-black/[0.12] bg-white shadow-[0_2px_24px_-8px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#ebe8e3]">
        <img
          src={imgSrc}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          style={{ filter: softPhoto }}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgSrc(WINE_IMG_FALLBACK)}
        />
      </div>
      <div className="border-t-[0.5px] border-black/[0.08] px-4 py-4">
        <p className="font-['Cormorant_Garamond',Georgia,serif] text-[1.15rem] text-[#1a1a1a]">{bottle.name}</p>
        <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-black/40">{bottle.region}</p>
      </div>
      <div
        className={[
          'pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 transition-opacity duration-500',
          hover ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        <p className="font-['Cormorant_Garamond',Georgia,serif] text-[15px] leading-snug text-white/95">{bottle.tasting}</p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/60">{bottle.origin}</p>
      </div>
    </motion.article>
  )
}

export function ChaiModerneBarExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef(null)
  const timelineRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 35%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  const assets = site.chaiAssets ?? {
    hero: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=85',
    terroir1: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1400&q=85',
    terroir2: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=85',
    tapas: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=85',
  }

  const wines = site.chaiWines ?? [
    {
      name: 'Rouge Irouléguy',
      region: 'Pays basque',
      origin: 'Côte des vignobles du piémont',
      tasting: 'Fruits noirs, tanin velouté, finale poivrée — accord pintxos grillés.',
      image:
        'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=82',
    },
    {
      name: 'Rioja Reserva',
      region: 'Espagne',
      origin: 'Ribera del Duero — élevage 18 mois',
      tasting: 'Cerise confite, chêne doux, belle longueur pour les viandes persillées.',
      image:
        'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=800&q=82',
    },
    {
      name: 'Blanc sec du pays',
      region: 'Sud-Ouest',
      origin: 'Gros Manseng & petit courbu',
      tasting: 'Minéralité saline, agrumes confits — idéal mer & fromages affinés.',
      image:
        'https://images.unsplash.com/photo-1566996533071-2c578080c866?auto=format&fit=crop&w=800&q=82',
    },
    {
      name: 'Champagne d’appoint',
      region: 'Marne',
      origin: 'Maison familiale — dosage brut',
      tasting: 'Bulles fines, brioche, pomme mûre — ouverture ou fin de soirée.',
      image:
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=82',
    },
  ]

  const avis = site.testimonials ?? []

  const timelineItems = site.chaiTimeline ?? [
    { title: 'L’entrée', text: 'Tapas du marché — anchois, gilda, pain de tradition.' },
    { title: 'Le partage', text: 'Planches ibériques, fromages de brebis, confitures maison.' },
    { title: 'Le verre juste', text: 'Accords au verre ou à la bouteille — conseil au comptoir.' },
    { title: 'La suite', text: 'Digestifs locaux, café filtre ou infusion du chai.' },
  ]

  const bookingTo = `/portfolio/${site?.id ?? 'zinc-des-amis'}/reservation`

  const anchors = [
    { id: 'chai-bento', label: 'SÉLECTION' },
    { id: 'chai-time', label: 'CARTE' },
    { id: 'chai-terroir', label: 'TERROIR' },
    { id: 'chai-footer', label: 'BAYONNE' },
  ]

  return (
    <div
      ref={rootRef}
      className="relative min-h-full overflow-x-hidden antialiased"
      style={{ backgroundColor: BG, color: INK, fontFamily: '"Inter", system-ui, sans-serif' }}
    >
      <BarExperienceChrome
        progress={progress}
        anchors={anchors}
        accentColor={OAK}
        dark={false}
        backSlot={<BackButton variant="inline" onClick={onBack} site={site} />}
      />

      <header
        id="chai-hero"
        className="relative scroll-mt-2 px-6 pb-16 pt-[calc(8.75rem+env(safe-area-inset-top))] md:px-16 md:pb-24 md:pt-[calc(9.5rem+env(safe-area-inset-top))]"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-black/40">{site.tagline}</p>
          <p
            className="mt-12 font-['Cormorant_Garamond',Georgia,serif] text-[clamp(1.45rem,4.2vw,2.35rem)] font-light leading-[1.25] tracking-tight text-[#1a1a1a]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {site.hero?.headline}
          </p>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-[1.85] text-black/58">{site.hero?.subline}</p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[8px] border-[0.5px] border-black/[0.1] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)]">
          <SafeChaiImg
            src={assets.hero}
            alt=""
            className="aspect-[21/9] w-full object-cover md:aspect-[2.4/1]"
            style={{ filter: softPhoto }}
          />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to={bookingTo}
            className="chai-glow rounded-[8px] border-[0.5px] border-black/15 bg-white px-10 py-3.5 text-[12px] uppercase tracking-[0.18em] text-[#1a1a1a] transition duration-500"
          >
            Réserver une table
          </Link>
        </div>
      </header>

      {/* Bento vins */}
      <section id="chai-bento" className="scroll-mt-[7.5rem] px-6 py-16 md:scroll-mt-32 md:px-16 md:py-24">
        <h2
          className="text-center font-['Cormorant_Garamond',Georgia,serif] text-[clamp(1.5rem,3vw,2rem)] font-light text-[#1a1a1a]"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          Bouteilles & origines
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-[14px] text-black/50">
          Survolez une bouteille — notes de dégustation et terroir.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {wines.map((b, i) => (
            <WineBentoCard key={b.name} bottle={b} i={i} />
          ))}
        </div>
      </section>

      {/* Timeline carte */}
      <section id="chai-time" ref={timelineRef} className="relative scroll-mt-[7.5rem] border-y-[0.5px] border-black/[0.08] bg-white/60 px-6 py-20 md:scroll-mt-32 md:px-16 md:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-['Cormorant_Garamond',Georgia,serif] text-[clamp(1.45rem,3vw,1.85rem)] font-light" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            La carte — fil conducteur
          </h2>
          <div className="relative mx-auto mt-16 max-w-lg pl-2">
            <div className="absolute bottom-0 left-[15px] top-0 w-[0.5px] bg-black/10" aria-hidden />
            <motion.div
              className="absolute bottom-0 left-[15px] top-0 w-[0.5px] origin-top bg-[#c4a882]"
              style={{ height: '100%', scaleY: reduceMotion ? 1 : lineScale }}
            />
            <ul className="space-y-12">
              {timelineItems.map((item, i) => (
                <li key={item.title} className="relative flex gap-6 pl-10">
                  <span
                    className="absolute left-[9px] top-1.5 h-3 w-3 rounded-full border-[0.5px] border-[#c4a882] bg-white"
                    style={{ boxShadow: '0 0 0 4px rgba(196,168,130,0.15)' }}
                  />
                  <div>
                    <p
                      className="font-['Cormorant_Garamond',Georgia,serif] text-[1.2rem] text-[#1a1a1a]"
                      style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                    >
                      {item.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-black/55">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Terroir */}
      <section id="chai-terroir" className="scroll-mt-[7.5rem] px-6 py-24 md:scroll-mt-32 md:px-16 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(1.5rem,3.2vw,2rem)] font-light" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            Le Terroir Sélectionné
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-black/55">
            {site.valueProposition}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[8px] border-[0.5px] border-black/[0.08]"
          >
            <SafeChaiImg src={assets.terroir1} alt="" className="aspect-[4/3] w-full object-cover" style={{ filter: softPhoto }} />
            <p className="border-t-[0.5px] border-black/[0.06] bg-white px-5 py-4 text-[13px] text-black/55">Vignes du piémont — travail de la main sur la ligne.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="overflow-hidden rounded-[8px] border-[0.5px] border-black/[0.08]"
          >
            <SafeChaiImg src={assets.terroir2} alt="" className="aspect-[4/3] w-full object-cover" style={{ filter: softPhoto }} />
            <p className="border-t-[0.5px] border-black/[0.06] bg-white px-5 py-4 text-[13px] text-black/55">Producteurs locaux — même exigence que sur l’assiette.</p>
          </motion.div>
        </div>
        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[8px] border-[0.5px] border-black/[0.08]">
          <SafeChaiImg src={assets.tapas} alt="" className="aspect-[21/9] w-full object-cover" style={{ filter: softPhoto }} />
        </div>
        {(site.about?.paragraphs ?? []).map((p) => (
          <p key={p.slice(0, 40)} className="mx-auto mt-12 max-w-2xl text-center text-[15px] leading-[1.9] text-black/55">
            {p}
          </p>
        ))}
      </section>

      {avis.length > 0 ? (
        <section className="border-t-[0.5px] border-black/[0.08] bg-white/40 px-6 py-20 md:px-16 md:py-24">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-black/40">Témoignages</p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {avis.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-[8px] border-[0.5px] border-black/[0.08] bg-white px-6 py-6 text-[14px] leading-relaxed text-black/65"
              >
                « {t.text} »
                <footer className="mt-4 text-[11px] uppercase tracking-[0.15em] text-black/40">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      <footer id="chai-footer" className="scroll-mt-[7.5rem] border-t-[0.5px] border-black/[0.08] px-6 py-16 md:scroll-mt-32 md:px-16">
        <div className="mx-auto max-w-2xl text-center text-[14px] text-black/50">
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/40">{site.location?.city}</p>
          <p className="mt-4">{site.location?.street}</p>
          <p className="mt-2">{site.location?.hours}</p>
          <a href={`mailto:${SITE.contactEmail}`} className="chai-glow mt-10 inline-block text-[#8b7355]">
            {SITE.contactEmail}
          </a>
        </div>
      </footer>

      <style>{`
        .chai-glow { transition: box-shadow 0.45s ease, color 0.35s ease; }
        .chai-glow:hover {
          box-shadow: 0 0 32px -6px rgba(196, 168, 130, 0.45);
          color: #1a1a1a;
        }
      `}</style>
    </div>
  )
}
