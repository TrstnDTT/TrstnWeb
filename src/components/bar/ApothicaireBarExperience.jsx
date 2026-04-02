/**
 * L'Apothicaire du Verre — mixologie feutrée, minimal centré, cuir, macro cocktails (Bayonne).
 * Images : site.apothicaireAssets — défauts Unsplash ; remplacer par fichiers PicFolder/bar via public/.
 */
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BarExperienceChrome, useMiniSiteScrollProgress } from './BarExperienceChrome.jsx'
import { BackButton } from '../mini/BackButton.jsx'
import { SITE } from '../../constants.js'

const LEATHER = '#14100c'
const AMBER = '#c9a86c'
const CREAM = '#f5ede0'
const ease = [0.22, 1, 0.36, 1]

const warmMacro =
  'sepia(0.12) saturate(1.18) contrast(1.12) brightness(0.94)'

function LetterReveal({ children, className = '', as: Tag = 'h2', delay = 0 }) {
  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        initial={{ letterSpacing: '0.32em', opacity: 0 }}
        whileInView={{ letterSpacing: '0.02em', opacity: 1 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </Tag>
  )
}

function ParallaxFloat({ src, alt, className, yRange = [36, -28] }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : yRange)

  return (
    <div ref={ref} className={className}>
      <motion.img src={src} alt={alt} className="h-full w-full object-cover" style={{ y, filter: warmMacro }} />
    </div>
  )
}

export function ApothicaireBarExperience({ site, onBack }) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef(null)
  const progress = useMiniSiteScrollProgress(rootRef)

  const assets = site.apothicaireAssets ?? {
    hero: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1600&q=85',
    macro: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1600&q=85',
    bar: 'https://images.unsplash.com/photo-1514362546517-6272a9329d52?w=1600&q=85',
  }

  const geste = site.artDuGeste ?? [
    {
      step: '01',
      title: 'Le dosage',
      text: 'Chaque centilitre est pesé au compte-gouttes : équilibre sucre, acidité, alcool — rien au hasard.',
    },
    {
      step: '02',
      title: 'Le shaker',
      text: 'Glace sélectionnée, dilution contrôlée, geste du poignet calibré comme un metronome feutré.',
    },
    {
      step: '03',
      title: 'La décoration',
      text: 'Zeste brûlé au moment, herbe aromatique cueillie le matin : le dernier geste avant le silence.',
    },
  ]

  const signatures = site.apothicaireSignatures ?? []
  const avis = site.testimonials ?? []

  const bookingTo = `/portfolio/${site?.id ?? 'neon-shaker'}/reservation`

  const anchors = [
    { id: 'apo-hero', label: 'Entrée' },
    { id: 'apo-geste', label: 'Le geste' },
    { id: 'apo-cartes', label: 'Créations' },
    { id: 'apo-footer', label: 'Bayonne' },
  ]

  const v = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <div
      ref={rootRef}
      className="relative min-h-full overflow-x-hidden antialiased"
      style={{
        backgroundColor: LEATHER,
        color: CREAM,
        fontFamily: '"Cormorant Garamond", Georgia, serif',
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      <BarExperienceChrome progress={progress} anchors={anchors} accentColor={AMBER} dark />

      <BackButton onClick={onBack} site={site} />

      {/* Hero — accroche + vide */}
      <header
        id="apo-hero"
        className="relative scroll-mt-2 px-6 pb-20 pt-[calc(6rem+env(safe-area-inset-top))] text-center md:px-12 md:pb-28 md:pt-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-[11px] uppercase tracking-[0.5em] text-[#c9a86c]/80"
        >
          {site.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease }}
          className="mx-auto mt-14 max-w-2xl text-[clamp(1.35rem,4.2vw,2.15rem)] font-light leading-[1.35] tracking-tight text-[#f5ede0]"
        >
          {site.hero?.headline}
        </motion.p>
        <p className="mx-auto mt-10 max-w-md text-[16px] font-light leading-relaxed text-[#e8dfd0]/75">
          {site.hero?.subline}
        </p>

        <div className="mx-auto mt-24 max-w-4xl">
          <ParallaxFloat src={assets.hero} alt="" className="aspect-[16/10] overflow-hidden rounded-sm shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]" />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            to={bookingTo}
            className="apo-glow rounded-sm border border-[#c9a86c]/35 bg-[#c9a86c]/12 px-10 py-3.5 text-[12px] uppercase tracking-[0.22em] text-[#f5ede0] transition duration-500"
          >
            Réserver
          </Link>
          <button
            type="button"
            onClick={() => document.getElementById('apo-geste')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })}
            className="rounded-sm border border-white/10 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-[#f5ede0]/75 transition hover:border-white/25"
          >
            L’art du geste
          </button>
        </div>
      </header>

      {/* Macro — minimal centré */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <LetterReveal as="h2" className="text-[clamp(1.5rem,3.5vw,2rem)] font-light text-[#f5ede0]">
            Matière & lumière
          </LetterReveal>
          <p className="mx-auto mt-12 max-w-xl text-[17px] font-light leading-[1.85] text-[#e8dfd0]/72">
            {site.valueProposition}
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col items-center">
            <ParallaxFloat
              src={assets.macro}
              alt=""
              className="aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm shadow-2xl"
              yRange={[48, -36]}
            />
            <p className="mt-10 max-w-xs text-center text-[14px] italic text-[#c9a86c]/70">Ambre, glace, silence du verre.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ParallaxFloat
              src={assets.bar}
              alt=""
              className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-2xl"
              yRange={[32, -24]}
            />
          </div>
        </div>
      </section>

      {/* L'Art du Geste */}
      <section id="apo-geste" className="scroll-mt-20 border-y border-white/[0.06] bg-black/25 px-6 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <LetterReveal className="text-[clamp(1.45rem,3.2vw,1.9rem)] font-light text-[#f5ede0]">
            L’Art du Geste
          </LetterReveal>
          <p className="mt-8 text-[15px] font-light leading-relaxed text-[#e8dfd0]/65">
            Trois temps d’une même respiration — visible depuis le comptoir en marbre.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-8">
          {geste.map((g, i) => (
            <motion.article
              key={g.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8%' }}
              variants={reduceMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : v}
              transition={{ delay: i * 0.08 }}
              className="border border-white/[0.07] bg-white/[0.02] px-8 py-10 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86c]/85">{g.step}</p>
              <h3 className="mt-6 text-[1.35rem] font-medium text-[#f5ede0]">{g.title}</h3>
              <p className="mt-5 text-[15px] font-light leading-relaxed text-[#e8dfd0]/68">{g.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Créations */}
      <section id="apo-cartes" className="scroll-mt-20 px-6 py-24 md:px-16 md:py-32">
        <LetterReveal className="mx-auto block max-w-3xl text-center text-[clamp(1.45rem,3vw,1.85rem)] font-light">
          Créations du soir
        </LetterReveal>
        <ul className="mx-auto mt-16 max-w-xl space-y-10">
          {(signatures.length
            ? signatures
            : [
                { name: 'Negroni de l’Apothicaire', price: '16 €', note: 'Amertume longue, zeste flambé.' },
                { name: 'Sour aux agrumes confits', price: '15 €', note: 'Blanc d’œuf, gin infusé bergamote.' },
                { name: 'Manhattan bord de Nive', price: '17 €', note: 'Whisky, vermouth, cerise d’exception.' },
              ]
          ).map((row) => (
            <motion.li
              key={row.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-white/[0.08] pb-8 text-center last:border-0"
            >
              <div className="flex flex-wrap items-baseline justify-center gap-3">
                <span className="text-[1.2rem] text-[#f5ede0]">{row.name}</span>
                <span className="tabular-nums text-[1.05rem] text-[#c9a86c]/90">{row.price}</span>
              </div>
              {row.note ? <p className="mt-3 text-[14px] text-[#e8dfd0]/55">{row.note}</p> : null}
            </motion.li>
          ))}
        </ul>
      </section>

      {avis.length > 0 ? (
        <section className="border-t border-white/[0.06] px-6 py-20 md:px-16 md:py-24">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Sur le zinc</p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {avis.map((t) => (
              <blockquote key={t.name} className="border border-white/[0.08] bg-white/[0.03] px-8 py-8 text-center">
                <p className="text-[15px] font-light leading-relaxed text-[#e8dfd0]/75">« {t.text} »</p>
                <footer className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#c9a86c]/80">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      <footer id="apo-footer" className="scroll-mt-20 border-t border-white/[0.06] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-2xl text-center text-[14px] font-light text-[#e8dfd0]/55">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9a86c]/70">{site.location?.city}</p>
          <p className="mt-4">{site.location?.street}</p>
          <p className="mt-2">{site.location?.hours}</p>
          <a href={`mailto:${SITE.contactEmail}`} className="apo-glow mt-10 inline-block text-[#c9a86c]">
            {SITE.contactEmail}
          </a>
        </div>
      </footer>

      <style>{`
        .apo-glow {
          transition: box-shadow 0.45s ease, border-color 0.45s ease;
        }
        .apo-glow:hover {
          box-shadow: 0 0 36px -4px rgba(201, 168, 108, 0.35);
          border-color: rgba(201, 168, 108, 0.45);
        }
      `}</style>
    </div>
  )
}
