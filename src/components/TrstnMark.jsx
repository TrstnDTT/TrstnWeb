/**
 * Signature discrète présente sur chaque prévisualisation de projet.
 */
export function TrstnMark({ className = '' }) {
  return (
    <span
      className={`pointer-events-none select-none rounded-sm bg-black/20 px-1.5 py-0.5 text-[7px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-[2px] ${className}`}
      aria-hidden
    >
      TrstnWeb
    </span>
  )
}
