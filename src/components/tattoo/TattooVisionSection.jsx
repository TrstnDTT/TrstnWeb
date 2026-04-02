/**
 * Section « La Vision » — manifeste serif massif.
 */
export function TattooVisionSection({ eyebrow = 'La vision', title, children, variant = 'light' }) {
  const shell =
    variant === 'dark'
      ? {
          eyebrow: 'text-white/40',
          title: 'text-white/95',
          body: 'text-white/65',
          titleFont: { fontFamily: '"Playfair Display", Georgia, serif' },
        }
      : variant === 'warm'
        ? {
            eyebrow: 'text-[#2c2825]/45',
            title: 'text-[#2c2825]',
            body: 'text-[#2c2825]/78',
            titleFont: { fontFamily: '"Cormorant Garamond", Georgia, serif' },
          }
        : {
            eyebrow: 'text-[#1A1A1A]/50',
            title: 'text-[#1A1A1A]',
            body: 'text-[#1A1A1A]/88',
            titleFont: { fontFamily: '"Cormorant Garamond", Georgia, serif' },
          }

  return (
    <section className="min-h-[min(100dvh,900px)] snap-start px-5 py-24 md:px-12 lg:px-20">
      <p className={`text-[10px] uppercase tracking-[0.5em] ${shell.eyebrow}`}>{eyebrow}</p>
      {title ? (
        <h2
          className={`mt-8 max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-[1.12] ${shell.title}`}
          style={shell.titleFont}
        >
          {title}
        </h2>
      ) : null}
      <div className={`mt-12 max-w-3xl space-y-8 text-[clamp(1.05rem,2.1vw,1.2rem)] font-light leading-[1.85] ${shell.body}`}>
        {children}
      </div>
    </section>
  )
}
