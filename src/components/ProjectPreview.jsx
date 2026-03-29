import { TrstnMark } from './TrstnMark.jsx'

/**
 * Aperçu carte portfolio : abstraction floue — uniquement la palette du site,
 * sans reproduire la mise en page réelle du projet.
 */
export function ProjectPreview({ site }) {
  const p = site?.primaryColor ?? '#1c1c1e'
  const s = site?.secondaryColor ?? '#78716c'
  const surf = site?.surfaceColor ?? p

  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-t-2xl">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, ${p} 0%, ${surf} 42%, ${s} 100%)`,
        }}
        aria-hidden
      />
      {/* Halos flous — lisibilité couleur sans détail UI */}
      <div
        className="pointer-events-none absolute -left-[20%] top-[-10%] h-[85%] w-[70%] rounded-full opacity-[0.55] mix-blend-screen blur-3xl"
        style={{ backgroundColor: s }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[15%] -right-[15%] h-[75%] w-[65%] rounded-full opacity-[0.45] mix-blend-multiply blur-3xl"
        style={{ backgroundColor: p }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[25%] top-[35%] h-[40%] w-[45%] rounded-full opacity-[0.35] blur-2xl"
        style={{ backgroundColor: surf }}
        aria-hidden
      />
      <div
        className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-b from-white/[0.07] to-black/[0.12]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <TrstnMark className="absolute bottom-2 right-2 z-20 opacity-75" />
    </div>
  )
}
