/**
 * Blocs de contenu modulaires — assemblage selon site.layoutStructure
 */

export function BlockMenuList({ site, cssVar }) {
  const m = site.menu
  if (!m?.items?.length) return null
  return (
    <div className="mx-auto max-w-2xl">
      <h2
        className="text-2xl font-semibold md:text-3xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        {m.sectionTitle}
      </h2>
      <ul className="mt-10 space-y-0 divide-y" style={{ borderColor: `${site.secondaryColor}55` }}>
        {m.items.map((row, i) => (
          <li
            key={i}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p
                className="text-lg leading-snug"
                style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
              >
                {row.name}
              </p>
              {row.note && (
                <p className="text-sm opacity-75" style={{ color: cssVar.text }}>
                  {row.note}
                </p>
              )}
            </div>
            <span
              className="shrink-0 text-lg font-medium tabular-nums"
              style={{ color: site.secondaryColor }}
            >
              {row.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BlockMenuCards({ site, cssVar }) {
  const m = site.menu
  if (!m?.items?.length) return null
  return (
    <div className="mx-auto max-w-5xl">
      <h2
        className="text-center text-2xl font-semibold md:text-3xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        {m.sectionTitle}
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {m.items.map((row, i) => (
          <article
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border shadow-lg"
            style={{
              borderColor: `${site.secondaryColor}66`,
              backgroundColor: cssVar.surface,
            }}
          >
            <div
              className="aspect-[4/3] w-full bg-gradient-to-br opacity-90"
              style={{
                backgroundImage: `linear-gradient(135deg, ${site.primaryColor}cc, ${site.secondaryColor}99, ${site.primaryColor})`,
              }}
              aria-hidden
            />
            <div className="flex flex-1 flex-col p-4">
              <p
                className="text-xs font-medium uppercase tracking-wider opacity-80"
                style={{ color: site.secondaryColor }}
              >
                {row.note}
              </p>
              <p
                className="mt-2 flex-1 text-base font-semibold leading-snug"
                style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
              >
                {row.name}
              </p>
              <p
                className="mt-3 text-lg font-bold tabular-nums"
                style={{ color: site.secondaryColor }}
              >
                {row.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function BlockArdoise({ site, cssVar }) {
  const m = site.menu
  if (!m?.items?.length) return null
  return (
    <div className="mx-auto max-w-lg text-center">
      <div
        className="rounded-lg border-4 px-6 py-10 shadow-2xl md:px-10 md:py-14"
        style={{
          borderColor: site.secondaryColor,
          backgroundColor: site.primaryColor,
          color: cssVar.text,
          fontFamily: site.fontFamilyBody,
        }}
      >
        <h2
          className="text-xl font-semibold uppercase tracking-[0.2em] md:text-2xl"
          style={{ fontFamily: site.fontFamilyHeading, color: site.secondaryColor }}
        >
          {m.sectionTitle}
        </h2>
        <div className="mt-8 space-y-6 text-left">
          {m.items.map((row, i) => (
            <div
              key={i}
              className="border-b pb-4 last:border-0"
              style={{ borderColor: `${site.secondaryColor}44` }}
            >
              <div className="flex justify-between gap-4">
                <span className="font-medium">{row.name}</span>
                <span className="shrink-0 font-semibold tabular-nums">{row.price}</span>
              </div>
              {row.note && (
                <p className="mt-1 text-sm opacity-80">{row.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BlockBreadsWeight({ site, cssVar }) {
  const breads = site.breads ?? []
  const vienno = site.viennoiseries ?? []
  return (
    <div className="mx-auto max-w-2xl">
      <h2
        className="text-3xl md:text-4xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        Pains au poids
      </h2>
      <p className="mt-2 text-sm opacity-80" style={{ color: cssVar.text }}>
        Prix au kilogramme — pesée à la coupe
      </p>
      <div
        className="mt-8 overflow-hidden rounded-2xl border-2"
        style={{ borderColor: site.secondaryColor, backgroundColor: cssVar.surface }}
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: `${site.secondaryColor}33` }}>
              <th className="px-4 py-3 font-semibold">Pain</th>
              <th className="px-4 py-3 font-semibold">Prix / kg</th>
              <th className="px-4 py-3 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {breads.map((row, i) => (
              <tr key={i} className="border-t" style={{ borderColor: `${site.secondaryColor}44` }}>
                <td className="px-4 py-3" style={{ color: cssVar.text }}>
                  {row.name}
                </td>
                <td className="px-4 py-3 font-medium tabular-nums" style={{ color: site.secondaryColor }}>
                  {row.pricePerKg}
                </td>
                <td className="px-4 py-3 opacity-80">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {vienno.length > 0 && (
        <div className="mt-10">
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
          >
            Viennoiseries
          </h3>
          <ul className="mt-4 space-y-2">
            {vienno.map((v, i) => (
              <li
                key={i}
                className="flex justify-between border-b pb-2"
                style={{ borderColor: `${site.secondaryColor}55` }}
              >
                <span style={{ color: cssVar.text }}>{v.name}</span>
                <span className="tabular-nums font-medium" style={{ color: site.secondaryColor }}>
                  {v.price} · {v.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function BlockCoffeeCarte({ site, cssVar }) {
  const coffees = site.coffees ?? []
  const evening = site.menuEvening
  return (
    <div className="mx-auto max-w-3xl">
      <h2
        className="text-2xl font-bold md:text-3xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        Carte des cafés
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {coffees.map((c, i) => (
          <div
            key={i}
            className="rounded-xl border-2 p-5"
            style={{ borderColor: site.secondaryColor, backgroundColor: cssVar.surface }}
          >
            <p className="text-lg font-bold" style={{ color: cssVar.text }}>
              {c.name}
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums" style={{ color: site.secondaryColor }}>
              {c.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed opacity-90" style={{ color: cssVar.text }}>
              {c.note}
            </p>
          </div>
        ))}
      </div>
      {evening?.items?.length > 0 && (
        <div className="mt-14">
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
          >
            {evening.sectionTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {evening.items.map((row, i) => (
              <li key={i} className="flex justify-between gap-4">
                <span style={{ color: cssVar.text }}>{row.name}</span>
                <span style={{ color: site.secondaryColor }}>{row.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function BlockFlashGallery({ site, cssVar }) {
  const flashes = site.flashes ?? []
  const hygiene = site.hygiene
  return (
    <div className="mx-auto max-w-4xl">
      <h2
        className="text-2xl font-bold uppercase tracking-wide md:text-3xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        Galerie de flashs
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flashes.map((f, i) => (
          <div
            key={i}
            className="border-2 p-4"
            style={{ borderColor: site.secondaryColor, backgroundColor: cssVar.surface }}
          >
            <div
              className="mb-3 aspect-square w-full bg-gradient-to-br opacity-80"
              style={{
                backgroundImage: `linear-gradient(145deg, ${site.primaryColor}, ${site.secondaryColor}88)`,
              }}
              aria-hidden
            />
            <p className="font-bold" style={{ color: cssVar.text }}>
              {f.title}
            </p>
            <p className="text-xs opacity-75">{f.format}</p>
            <p className="mt-2 font-semibold" style={{ color: site.secondaryColor }}>
              {f.price}
            </p>
          </div>
        ))}
      </div>
      {hygiene && (
        <div
          className="mt-14 border-l-4 pl-5"
          style={{ borderColor: site.secondaryColor }}
        >
          <h3
            className="text-lg font-bold uppercase"
            style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
          >
            {hygiene.title}
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed" style={{ color: cssVar.text }}>
            {hygiene.lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function BlockTarifsGrid({ site, cssVar }) {
  const m = site.menu
  if (!m?.items?.length) return null
  return (
    <div className="mx-auto max-w-4xl">
      <h2
        className="text-2xl font-bold uppercase tracking-tight md:text-3xl"
        style={{ fontFamily: site.fontFamilyHeading, color: cssVar.text }}
      >
        {m.sectionTitle}
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {m.items.map((row, i) => (
          <div
            key={i}
            className="flex flex-col border-2 p-5"
            style={{ borderColor: site.secondaryColor, backgroundColor: cssVar.surface }}
          >
            <p className="text-xs font-bold uppercase opacity-80">{row.note}</p>
            <p
              className="mt-2 flex-1 text-lg font-bold leading-tight"
              style={{ color: cssVar.text }}
            >
              {row.name}
            </p>
            <p className="mt-4 text-2xl font-black tabular-nums" style={{ color: site.secondaryColor }}>
              {row.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MainContentBlock({ site, cssVar }) {
  const ls = site.layoutStructure
  switch (ls) {
    case 'menu-cards':
      return <BlockMenuCards site={site} cssVar={cssVar} />
    case 'ardoise':
      return <BlockArdoise site={site} cssVar={cssVar} />
    case 'breads-weight':
      return <BlockBreadsWeight site={site} cssVar={cssVar} />
    case 'coffee-cart':
      return <BlockCoffeeCarte site={site} cssVar={cssVar} />
    case 'flash-gallery':
      return <BlockFlashGallery site={site} cssVar={cssVar} />
    case 'tarifs-grid':
      return <BlockTarifsGrid site={site} cssVar={cssVar} />
    case 'menu-list':
    default:
      return <BlockMenuList site={site} cssVar={cssVar} />
  }
}
