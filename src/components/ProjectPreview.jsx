import { TrstnMark } from './TrstnMark.jsx'

/** Icônes « main levée » pour la boulangerie (traits irréguliers) */
function SketchWheat({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M16 28V6M16 10c-2-2-4-2-5 0s0 4 2 5M16 14c2-2 4-2 5 0s0 4-2 5M16 18c-2-2-4-2-5 0s0 4 2 5M16 22c2-2 4-2 5 0s0 4-2 5" />
    </svg>
  )
}

function SketchCroissant({ className }) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 16c4-8 12-14 20-12 6 2 10 8 12 14M8 14c3-4 8-6 14-5M12 12c4-2 9-1 12 2" />
    </svg>
  )
}

function PhotoBlock({ className, label }) {
  return (
    <div
      className={`flex flex-col justify-end bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-700 p-2 ${className}`}
    >
      <span className="text-[7px] font-medium uppercase tracking-wider text-white/90">
        {label}
      </span>
    </div>
  )
}

/* ——— Restaurant : fine dining / fast-food / bistro ——— */

function RestaurantMinimalist({ title }) {
  return (
    <div className="flex h-full flex-col bg-[#fafaf9] font-[Inter,sans-serif] text-neutral-500">
      <header className="flex items-center justify-between border-b border-neutral-200/80 px-4 py-3">
        <span className="text-[9px] font-light tracking-[0.35em] text-neutral-800">
          {title}
        </span>
        <nav className="flex gap-3 text-[7px] font-light tracking-wide text-neutral-400">
          <span>Menu</span>
          <span>Vins</span>
          <span>Réserver</span>
        </nav>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10">
        <p className="text-center text-[8px] font-light uppercase tracking-[0.45em] text-neutral-400">
          Table gastronomique
        </p>
        <div className="mt-8 h-px w-12 bg-neutral-300" />
        <p className="mt-8 max-w-[12rem] text-center text-[7px] font-light leading-relaxed text-neutral-400">
          Une assiette, un instant, une lumière douce.
        </p>
      </div>
    </div>
  )
}

function RestaurantBento({ title }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-orange-50 to-amber-50 p-2 font-[Inter,sans-serif]">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-[10px] font-bold uppercase tracking-tight text-orange-600">
          {title}
        </span>
        <span className="rounded-full bg-red-500 px-2 py-0.5 text-[7px] font-bold text-white">
          MENU
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-1.5">
        <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 p-3 shadow-lg shadow-orange-500/30">
          <span className="text-[8px] font-black uppercase italic text-white drop-shadow">
            Du jour !
          </span>
          <span className="text-[18px] font-black leading-none text-white">9€</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-2 shadow-md">
          <span className="text-[20px]">🍔</span>
          <span className="mt-1 text-[6px] font-bold text-neutral-600">Combo</span>
        </div>
        <div className="col-span-1 flex items-center justify-center rounded-2xl bg-red-500 text-[7px] font-bold text-white">
          Drive
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-2xl bg-white text-[7px] font-medium text-neutral-500 shadow">
          Commander en ligne →
        </div>
      </div>
    </div>
  )
}

function RestaurantEditorial({ title }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#1a1510] font-[Cormorant_Garamond,serif]">
      <div
        className="absolute -right-4 top-0 h-24 w-20 rotate-6 rounded-sm bg-gradient-to-br from-amber-800/80 to-stone-900 shadow-xl"
        aria-hidden
      />
      <div className="absolute bottom-6 left-0 right-0 translate-y-2">
        <div className="relative z-10 px-4">
          <h2 className="font-[Cormorant_Garamond,serif] text-[22px] italic leading-[0.95] text-amber-100/95">
            {title}
          </h2>
          <p className="mt-1 max-w-[85%] text-[8px] leading-snug text-amber-200/60">
            Ardoise du marché · vins au verre
          </p>
        </div>
      </div>
      <div className="absolute left-3 top-10 z-20 w-24 border-l-2 border-amber-600/50 pl-2">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-500">
          Bistro
        </p>
        <p className="mt-2 text-[7px] leading-relaxed text-stone-400">
          Chaque soir une table près du zinc.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,120,60,0.15),transparent_50%)]"
        aria-hidden
      />
    </div>
  )
}

/* ——— Boulangerie : tons chauds + esquisse ——— */

function BoulangerieMinimalist({ title }) {
  return (
    <div className="flex h-full flex-col bg-[#f4ead8] px-4 py-5 text-[#6b4423]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-[Fraunces,serif] text-[13px] font-medium text-[#5c3d2e]">
            {title}
          </h2>
          <p className="mt-1 text-[7px] font-light tracking-wide text-[#8b6914]/80">
            Levain & farines anciennes
          </p>
        </div>
        <SketchWheat className="h-10 w-10 text-[#b8956a]/70" />
      </div>
      <div className="mt-6 flex flex-1 flex-col items-center justify-center">
        <SketchCroissant className="h-14 w-24 text-[#a67c52]/80" />
        <div className="mt-4 h-px w-16 bg-[#c4a574]/50" />
        <p className="mt-3 text-center text-[7px] font-light leading-relaxed text-[#7d5a3c]/90">
          Fournil ouvert dès 7h
        </p>
      </div>
    </div>
  )
}

function BoulangerieBento({ title }) {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-3 gap-1.5 bg-[#e8dcc8] p-2">
      <div className="row-span-2 flex flex-col justify-between rounded-2xl bg-[#c17f59] p-3 text-[#fff5eb] shadow-lg">
        <SketchCroissant className="h-8 w-14 text-white/40" />
        <div>
          <p className="font-[Fraunces,serif] text-[12px]">{title}</p>
          <p className="mt-1 text-[7px] opacity-90">Viennoiseries</p>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-[#f5ebe0] p-2 text-center shadow">
        <span className="text-[6px] uppercase tracking-wider text-[#8b6914]">
          Pain
        </span>
        <span className="mt-1 text-[11px] font-bold text-[#5c3d2e]">100%</span>
        <span className="text-[6px] text-[#8b7355]">bio</span>
      </div>
      <div className="flex items-center justify-center rounded-2xl bg-[#d4a574]/40 text-[8px] font-medium text-[#4a3020]">
        Click & collect
      </div>
      <div className="col-span-2 flex items-center gap-2 rounded-2xl bg-[#faf3e8] px-3 py-2 shadow-inner">
        <SketchWheat className="h-8 w-8 shrink-0 text-[#b8956a]" />
        <p className="text-[7px] leading-snug text-[#6b4423]">
          Farine T65 · meule de pierre
        </p>
      </div>
    </div>
  )
}

function BoulangerieEditorial({ title }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#0f1f18]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,61,47,0.9)_0%,#0a1210_60%)]" />
      <div className="absolute -right-6 top-4 h-32 w-28 rotate-3 bg-gradient-to-b from-[#c9a227]/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        <p className="font-[Fraunces,serif] text-[20px] leading-[0.95] text-[#e8d5b7]">
          {title}
        </p>
        <div className="space-y-2">
          <p className="max-w-[70%] text-[7px] leading-relaxed text-emerald-100/50">
            Pâtisserie d’exception — chocolat grand cru
          </p>
          <div className="inline-block border border-[#c9a227]/40 px-2 py-1 text-[6px] uppercase tracking-[0.25em] text-[#c9a227]">
            Maison
          </div>
        </div>
      </div>
    </div>
  )
}

/* ——— Salon : mode Vogue / photo / éditorial ——— */

function SalonMinimalist({ title }) {
  return (
    <div className="flex h-full gap-0 bg-white font-[Inter,sans-serif]">
      <div className="flex w-[42%] flex-col justify-between border-r border-neutral-200 py-5 pl-4 pr-2">
        <div>
          <p className="text-[8px] font-light tracking-[0.4em] text-neutral-400">
            {title}
          </p>
          <p className="mt-6 text-[6px] font-light uppercase tracking-[0.3em] text-neutral-800">
            Lookbook
          </p>
        </div>
        <p className="text-[6px] text-neutral-400">Réserver</p>
      </div>
      <PhotoBlock
        className="flex-1 min-h-0"
        label="Shooting · hiver"
      />
    </div>
  )
}

function SalonBento({ title }) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-neutral-950 p-2">
      <div className="mb-2 flex shrink-0 items-center justify-between px-1">
        <span className="text-[9px] font-medium tracking-tight text-white">{title}</span>
        <span className="text-[6px] text-rose-300/80">Paris</span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5">
        <PhotoBlock className="min-h-0 rounded-xl" label="Coupe" />
        <div className="flex min-h-0 flex-col gap-1.5">
          <PhotoBlock className="min-h-0 flex-1 rounded-xl" label="Color" />
          <div className="flex min-h-[2.5rem] flex-1 items-center justify-center rounded-xl bg-rose-950/50 text-[7px] text-rose-100/80">
            RDV
          </div>
        </div>
        <div className="col-span-2 flex shrink-0 items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-[6px] text-neutral-400">
          <span>Équipe</span>
          <span>Tarifs →</span>
        </div>
      </div>
    </div>
  )
}

function SalonEditorial({ title }) {
  return (
    <div className="relative h-full bg-black font-[Playfair_Display,serif] text-white">
      <div className="absolute left-0 top-0 z-10 w-3/5 p-4">
        <h2 className="relative z-20 text-[18px] font-medium leading-[0.95] tracking-tight">
          {title}
        </h2>
        <p className="mt-3 max-w-[10rem] text-[7px] font-sans font-light leading-relaxed text-neutral-400">
          L’élégance d’un geste, la lumière d’un studio.
        </p>
      </div>
      <PhotoBlock
        className="absolute bottom-0 right-0 top-8 w-[55%] rounded-tl-2xl"
        label="Éditorial"
      />
      <div className="absolute bottom-3 left-3 z-20 border border-white/20 px-2 py-1 text-[6px] uppercase tracking-[0.35em] text-white/70">
        Collection
      </div>
    </div>
  )
}

/* ——— Bar : speakeasy / nightclub / cocktail éditorial ——— */

function BarMinimalist({ title }) {
  return (
    <div
      className="flex h-full flex-col justify-between bg-[#2a1f18] p-4 text-[#d4c4b0]"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(62,47,38,0.9) 0%, rgba(42,31,24,0.95) 100%),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)
        `,
      }}
    >
      <div>
        <p className="text-[8px] font-light tracking-[0.35em] text-[#a89078]">
          {title}
        </p>
        <p className="mt-2 text-[7px] text-[#8b7355]/90">Speakeasy · pas de vitrine</p>
      </div>
      <div className="flex items-end justify-between border-t border-[#5c4a3d]/50 pt-3">
        <span className="text-[6px] text-[#a89078]/70">Cocktails classiques</span>
        <span className="rounded border border-[#c9a227]/40 px-2 py-1 text-[6px] text-[#e8d5b7]">
          Entrer
        </span>
      </div>
    </div>
  )
}

function BarBento({ title }) {
  return (
    <div className="flex h-full flex-col bg-[#050508] p-2">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-[10px] font-bold uppercase text-transparent">
          {title}
        </span>
        <span className="text-[6px] text-cyan-400/80">23h–5h</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className="flex flex-col justify-between rounded-xl border border-fuchsia-500/40 bg-fuchsia-950/30 p-2 shadow-[0_0_20px_-5px_rgba(217,70,239,0.5)]">
          <span className="text-[7px] text-fuchsia-200/90">LINE UP</span>
          <span className="text-[14px] font-black text-white">DJ</span>
        </div>
        <div className="flex flex-col justify-between rounded-xl border border-cyan-500/40 bg-cyan-950/20 p-2 shadow-[0_0_18px_-6px_rgba(34,211,238,0.45)]">
          <span className="text-[7px] text-cyan-200/80">VIP</span>
          <span className="text-[9px] font-bold text-cyan-300">Box</span>
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20 py-3 text-[7px] font-medium tracking-wider text-white/90">
          Réserver · stroboscope
        </div>
      </div>
    </div>
  )
}

function BarEditorial({ title }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#0c1814]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="relative z-10 flex h-full flex-col p-4">
        <p className="font-[Cinzel,serif] text-[8px] uppercase tracking-[0.5em] text-emerald-600/80">
          Bar
        </p>
        <h2 className="mt-3 font-[Playfair_Display,serif] text-[17px] leading-tight text-[#ecfdf5]">
          {title}
        </h2>
        <div className="mt-auto border-l-2 border-[#c9a227] pl-3">
          <p className="text-[7px] leading-relaxed text-emerald-200/50">
            Gin infusé · glace sculptée · terrace cachée
          </p>
        </div>
      </div>
    </div>
  )
}

/* ——— Tattoo / Piercing : brutaliste ——— */

function TattooMinimalist({ title }) {
  return (
    <div className="flex h-full flex-col border-4 border-black bg-white font-[Oswald,sans-serif] text-black">
      <div className="flex items-center justify-between border-b-4 border-black px-2 py-2">
        <span className="text-[10px] font-bold uppercase tracking-tight">{title}</span>
        <span className="text-[7px] font-bold">MENU</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-3">
        <div className="h-12 w-12 border-2 border-black" />
        <p className="max-w-[11rem] text-center text-[7px] font-medium uppercase leading-relaxed tracking-wider">
          Flash · sur rendez-vous · hygiène stricte
        </p>
      </div>
    </div>
  )
}

function TattooBento({ title }) {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-3 gap-0 border-4 border-black bg-white">
      <div className="col-span-2 flex items-center justify-center border-2 border-black bg-white p-2">
        <span className="text-center text-[9px] font-black uppercase leading-none text-black">
          {title}
        </span>
      </div>
      <div className="flex items-center justify-center border-2 border-black bg-black text-[7px] font-bold text-white">
        BOOK
      </div>
      <div className="flex items-center justify-center border-2 border-black text-[14px] font-black">
        ✕
      </div>
      <div className="col-span-2 flex items-center justify-center border-2 border-black bg-neutral-100 text-[7px] font-bold uppercase">
        Galerie flash
      </div>
      <div className="col-span-3 flex items-center justify-between border-2 border-black px-3 py-2 text-[6px] font-bold uppercase tracking-widest">
        <span>Piercing</span>
        <span>Tattoo</span>
        <span>Aftercare</span>
      </div>
    </div>
  )
}

function TattooEditorial({ title }) {
  return (
    <div className="relative h-full overflow-hidden border-4 border-white bg-black font-[Oswald,sans-serif] text-white">
      <div className="absolute -left-2 top-6 z-10 w-[110%] rotate-[-3deg] border-y-4 border-white py-2">
        <p className="text-center text-[22px] font-bold uppercase leading-none tracking-tighter">
          {title}
        </p>
      </div>
      <div className="absolute bottom-8 left-4 right-4 z-10">
        <p className="text-[8px] font-bold uppercase leading-none text-white/90">
          Guest artists
        </p>
        <div className="mt-2 flex gap-2">
          <div className="h-10 flex-1 border-2 border-white bg-neutral-900" />
          <div className="h-10 flex-1 border-2 border-white bg-neutral-800" />
        </div>
      </div>
      <div className="absolute right-2 top-20 h-16 w-12 border-2 border-white bg-white/10" />
    </div>
  )
}

const REGISTRY = {
  'restaurant-minimalist': RestaurantMinimalist,
  'restaurant-bento': RestaurantBento,
  'restaurant-editorial': RestaurantEditorial,
  'boulangerie-minimalist': BoulangerieMinimalist,
  'boulangerie-bento': BoulangerieBento,
  'boulangerie-editorial': BoulangerieEditorial,
  'salon-minimalist': SalonMinimalist,
  'salon-bento': SalonBento,
  'salon-editorial': SalonEditorial,
  'bar-minimalist': BarMinimalist,
  'bar-bento': BarBento,
  'bar-editorial': BarEditorial,
  'tattoo-minimalist': TattooMinimalist,
  'tattoo-bento': TattooBento,
  'tattoo-editorial': TattooEditorial,
}

export function ProjectPreview({ categoryId, layoutStyle, title }) {
  const key = `${categoryId}-${layoutStyle}`
  const Comp = REGISTRY[key] ?? RestaurantMinimalist

  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-t-2xl">
      <Comp title={title} />
      <TrstnMark className="absolute bottom-2 right-2 z-20" />
    </div>
  )
}
