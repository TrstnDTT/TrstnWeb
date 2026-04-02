/**
 * Carte complète — Le Chai Moderne (page longue, style éditorial).
 */
import { Link } from 'react-router-dom'
import { Coffee, Beer, Wine, UtensilsCrossed } from 'lucide-react'
import { CHAI_MENU_MOMENTS, CHAI_PALETTE } from '../data/chaiModerneContent.js'

const { paper: BG, ink: INK, oak: OAK } = CHAI_PALETTE
const SERIF = '"Cormorant Garamond", Georgia, serif'

const ICONS = {
  coffee: Coffee,
  beer: Beer,
  wine: Wine,
  food: UtensilsCrossed,
}

export default function ChaiModerneCartePage() {
  return (
    <div className="min-h-[100dvh] pb-16" style={{ background: BG, color: INK, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <header className="sticky top-0 z-10 border-b border-[#1a1a1a]/10 bg-[#F9F7F2]/98 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
          <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.28em] text-[#1a1a1a]/50 transition hover:text-[#1a1a1a]">
            ← Portfolio
          </Link>
          <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: OAK }}>
            Carte complète
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <p className="text-center text-[10px] uppercase tracking-[0.45em] text-[#1a1a1a]/45">Le Chai Moderne · Bayonne</p>
        <h1 className="mt-6 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-tight" style={{ fontFamily: SERIF }}>
          Moments de vie
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-[14px] leading-relaxed text-[#1a1a1a]/55">
          Prix indicatifs — partage, convivialité, pépite locale. Le comptoir vous guide au besoin.
        </p>

        <div className="mt-16 space-y-20">
          {CHAI_MENU_MOMENTS.map((block) => {
            const Icon = ICONS[block.iconKey] ?? Coffee
            return (
              <section key={block.id} className="border-t border-[#1a1a1a]/10 pt-12 first:border-0 first:pt-0">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" style={{ color: OAK }} strokeWidth={1.35} aria-hidden />
                  <div>
                    <h2 className="text-[1.5rem] font-normal" style={{ fontFamily: SERIF }}>
                      {block.title}
                    </h2>
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[#1a1a1a]/45">{block.subtitle}</p>
                  </div>
                </div>
                <table className="mt-8 w-full text-left text-[14px]">
                  <tbody>
                    {block.items.map((row) => (
                      <tr key={row.name} className="border-b border-[#1a1a1a]/08">
                        <td className="py-4 pr-4 align-top">
                          <span className="font-medium">{row.name}</span>
                          <p className="mt-1 text-[13px] font-light leading-snug text-[#1a1a1a]/52">{row.note}</p>
                        </td>
                        <td className="w-24 shrink-0 py-4 text-right font-semibold tabular-nums text-[#1a1a1a]/90">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )
          })}
        </div>

        <p className="mt-20 text-center text-[12px] leading-relaxed text-[#1a1a1a]/45">
          Allergènes et origine des produits sur demande au comptoir — terrasse ombragée selon saison.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/portfolio/zinc-des-amis/reservation"
            className="rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F9F7F2]"
          >
            Réserver une table
          </Link>
          <Link
            to="/portfolio"
            className="rounded-lg border border-[#1a1a1a]/15 bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]"
          >
            Retour au portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
