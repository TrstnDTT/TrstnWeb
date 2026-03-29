/**
 * Hero visuel carte — abstraction couleur (texture « matière »), format portrait galerie.
 */
export function ProjectPreview({ site, className = '' }) {
  const p = site?.primaryColor ?? '#1c1c1e'
  const s = site?.secondaryColor ?? '#78716c'
  const surf = site?.surfaceColor ?? p

  return (
    <div
      className={`relative aspect-[3/4] w-full min-h-[220px] overflow-hidden sm:min-h-[260px] md:min-h-[300px] ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, ${p} 0%, ${surf} 42%, ${s} 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[20%] top-[-10%] h-[85%] w-[70%] rounded-full opacity-[0.5] mix-blend-screen blur-3xl"
        style={{ backgroundColor: s }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[15%] -right-[15%] h-[75%] w-[65%] rounded-full opacity-[0.4] mix-blend-multiply blur-3xl"
        style={{ backgroundColor: p }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-white/[0.05] to-black/[0.15]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </div>
  )
}
