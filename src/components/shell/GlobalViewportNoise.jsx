/**
 * Grain « papier / argentique » sur tout le viewport via backdrop-filter url(#noise).
 * pointer-events: none — ne bloque pas l’interaction.
 */
export function GlobalViewportNoise() {
  return (
    <div
      className="trstn-viewport-noise pointer-events-none fixed inset-0 z-[52] mix-blend-soft-light"
      aria-hidden
      tabIndex={-1}
    />
  )
}
