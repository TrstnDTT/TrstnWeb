/**
 * FAQ — grille élégante, réponses au survol (focus-within pour clavier).
 */
const DEFAULT_FAQ = [
  {
    q: 'Douleur',
    a: 'Une présence, pas une punition. Nous cadurons le rythme, hydratons la zone, et refusons la précipitation — la pigmentation chirurgicale exige un corps qui respire.',
  },
  {
    q: 'Soins',
    a: 'Protocole illustré, ligne directe si la peau parle. Asepsie rigoureuse ne s’arrête pas à la séance : elle continue dans vos gestes du quotidien.',
  },
  {
    q: 'Prix',
    a: 'Honoraires alignés sur la complexité du motif, la zone anatomique et le temps réel — devis après entretien, jamais de surprise sur la matière.',
  },
]

export function TattooFaqGrid({ variant = 'light', items = DEFAULT_FAQ }) {
  const isDark = variant === 'dark'
  const isWarm = variant === 'warm'
  const border = isDark ? 'border-white/15' : isWarm ? 'border-[#2c2825]/15' : 'border-[#1A1A1A]/15'
  const qCol = isDark ? 'text-white/85' : isWarm ? 'text-[#2c2825]/90' : 'text-[#1A1A1A]/90'
  const aCol = isDark ? 'text-white/55' : isWarm ? 'text-[#2c2825]/65' : 'text-[#1A1A1A]/65'

  return (
    <section className="min-h-[min(90dvh,880px)] snap-start px-5 py-24 md:px-12 lg:px-20">
      <p className={`mb-12 text-[10px] uppercase tracking-[0.45em] ${qCol} opacity-45`}>Questions fréquentes</p>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.q}
            tabIndex={0}
            className={`group relative min-h-[200px] border ${border} p-6 transition-all duration-500 focus-within:ring-1 focus-within:ring-current/20 focus:outline-none md:min-h-[240px]`}
          >
            <p
              className={`text-[clamp(1.25rem,2.5vw,1.5rem)] font-light transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 ${qCol}`}
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {item.q}
            </p>
            <p
              className={`pointer-events-none absolute inset-6 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:delay-75 group-focus-within:opacity-100 group-focus-within:delay-75 ${aCol} text-[13px] font-light leading-relaxed`}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
