import { MapPin } from 'lucide-react'

export function FakeMap({ location, site }) {
  const fullAddress = `${location.street}, ${location.postalCode} ${location.city}, ${location.country}`
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 md:aspect-[21/9]"
      style={{ borderColor: `${s}55`, backgroundColor: p }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 49%, ${t}22 49%, ${t}22 51%, transparent 51%), linear-gradient(0deg, transparent 49%, ${t}22 49%, ${t}22 51%, transparent 51%)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="max-w-sm rounded-lg border px-4 py-4 text-center backdrop-blur-[2px] md:px-6"
          style={{ borderColor: `${s}66`, color: t, backgroundColor: `${p}ee` }}
        >
          <MapPin className="mx-auto mb-2 h-8 w-8" style={{ color: s }} strokeWidth={1.5} aria-hidden />
          <p className="text-[10px] font-medium uppercase tracking-wider opacity-75">
            {location.mapArea}
          </p>
          <p className="mt-2 text-xs leading-snug md:text-sm">{fullAddress}</p>
          <p className="mt-1 text-[10px] opacity-60">Carte fictive — démonstration</p>
        </div>
      </div>
    </div>
  )
}
