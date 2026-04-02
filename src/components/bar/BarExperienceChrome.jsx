/**
 * Barre de progression de lecture + ancres de menu (mini-sites bar).
 * Avec `backSlot` : en-tête fixe en colonne (retour → progression → ruban scrollable), sans chevauchement.
 */
import { useCallback } from 'react'

export function BarExperienceChrome({
  progress,
  anchors,
  accentColor,
  dark = true,
  topOffset = '0px',
  /** Bouton retour (ou bloc) — active la mise en page en-tête à deux niveaux sans chevauchement. */
  backSlot = null,
  /** Fond 100 % opaque, sans backdrop-blur — aucun contenu ne transparaît sous l’en-tête. */
  opaqueHeader = false,
}) {
  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const track = dark ? 'bg-white/[0.08]' : 'bg-black/[0.08]'
  const pill = opaqueHeader
    ? 'border-[#1a1a1a]/14 bg-white text-[#1a1a1a] hover:bg-[#D2B48C]/18'
    : dark
      ? 'border-white/15 bg-black/40 text-[#e8e4df]/90 hover:bg-white/10'
      : 'border-black/12 bg-[#f0ebe3]/95 text-[#1a1814] hover:bg-white'

  const progressBar = (
    <div className={`pointer-events-none h-[3px] w-full shrink-0 ${track}`} aria-hidden tabIndex={-1}>
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${Math.round(progress * 10000) / 100}%`,
          backgroundColor: accentColor,
        }}
      />
    </div>
  )

  const nav = (
    <nav
      className={`flex w-full min-w-0 gap-1.5 overflow-x-auto overflow-y-hidden px-3 py-2 pb-2.5 [scrollbar-width:none] md:gap-2 md:px-6 md:py-2.5 [&::-webkit-scrollbar]:hidden ${
        backSlot
          ? opaqueHeader
            ? 'border-b border-[#1a1a1a]/08 bg-[#F9F7F2]'
            : ''
          : dark
            ? 'border-b border-white/[0.06] bg-[#0d0b0a]/92 backdrop-blur-md'
            : 'border-b border-black/[0.07] bg-[#e8dcc8]/95 backdrop-blur-md'
      }`}
      style={backSlot ? { WebkitOverflowScrolling: 'touch' } : undefined}
      aria-label="Sections de la carte"
    >
      {anchors.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollToId(id)}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors md:text-[10px] md:tracking-[0.22em] ${pill}`}
        >
          {label}
        </button>
      ))}
    </nav>
  )

  if (backSlot) {
    return (
      <header
        className={`fixed left-0 right-0 z-[117] flex flex-col border-b shadow-[0_1px_0_0_rgba(0,0,0,0.04)] ${
          opaqueHeader
            ? 'border-[#1a1a1a]/10 bg-[#F9F7F2]'
            : dark
              ? 'border-white/[0.06] bg-[#0d0b0a]/95 backdrop-blur-md'
              : 'border-black/[0.07] bg-[#f7f5f0]/98 backdrop-blur-md'
        }`}
        style={{ top: topOffset }}
      >
        <div className="flex w-full min-h-0 shrink-0 items-center justify-start px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 md:py-4">
          {backSlot}
        </div>
        {progressBar}
        {nav}
      </header>
    )
  }

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 right-0 z-[118] h-[3px] ${track}`}
        style={{ top: topOffset }}
        aria-hidden
        tabIndex={-1}
      >
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${Math.round(progress * 10000) / 100}%`,
            backgroundColor: accentColor,
          }}
        />
      </div>
      <nav
        className={`fixed left-0 right-0 z-[117] flex gap-1.5 overflow-x-auto px-3 py-2 pl-14 [scrollbar-width:none] md:gap-2 md:px-6 md:pl-20 [&::-webkit-scrollbar]:hidden ${
          dark ? 'border-b border-white/[0.06] bg-[#0d0b0a]/92 backdrop-blur-md' : 'border-b border-black/[0.07] bg-[#e8dcc8]/95 backdrop-blur-md'
        }`}
        style={{ top: `calc(${topOffset} + 3px)` }}
        aria-label="Sections de la carte"
      >
        {anchors.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToId(id)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors md:text-[10px] md:tracking-[0.22em] ${pill}`}
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}
