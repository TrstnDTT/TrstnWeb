/** Mention « Designé par TrstnWeb » — variante par site. */

export function TrstnSignature({ variant, site }) {
  const base = 'Designé par TrstnWeb'
  const c = site.secondaryColor
  const t = site.textColor

  switch (variant) {
    case 'center-italic':
      return (
        <p
          className="text-center text-sm italic opacity-80"
          style={{ color: t, fontFamily: site.fontFamilyBody }}
        >
          {base}
        </p>
      )
    case 'footer-bar':
      return (
        <div
          className="py-3 text-center text-[10px] font-bold uppercase tracking-[0.35em]"
          style={{
            backgroundColor: site.primaryColor,
            color: c,
            fontFamily: site.fontFamilyBody,
          }}
        >
          {base}
        </div>
      )
    case 'copper-underline':
      return (
        <div className="flex justify-end">
          <p
            className="inline-block border-b pb-1 text-right text-xs uppercase tracking-[0.25em]"
            style={{
              color: c,
              fontFamily: site.fontFamilyHeading,
              borderColor: c,
            }}
          >
            {base}
          </p>
        </div>
      )
    case 'inline-handwritten':
      return (
        <p
          className="text-center text-lg opacity-90"
          style={{ fontFamily: site.fontFamilyHeading, color: t }}
        >
          ✦ {base} ✦
        </p>
      )
    case 'inline-serif':
      return (
        <p
          className="text-center text-xs"
          style={{ fontFamily: site.fontFamilyHeading, color: t, opacity: 0.85 }}
        >
          — {base} —
        </p>
      )
    case 'mono-tight':
      return (
        <p
          className="text-left text-[10px] font-mono uppercase tracking-widest opacity-70"
          style={{ color: t }}
        >
          {base}
        </p>
      )
    case 'bottom-right-caps':
    default:
      return (
        <p
          className="text-right text-[10px] font-medium uppercase tracking-[0.35em] opacity-60"
          style={{ color: t, fontFamily: site.fontFamilyBody }}
        >
          {base}
        </p>
      )
  }
}
