/**
 * « Le Protocole » — mise en page type rapport médical de luxe.
 */
const ROWS_DEFAULT = [
  {
    ref: 'ASE-01',
    titre: 'Asepsie rigoureuse',
    detail:
      'Champ opératoire étendu, désinfection cutanée en cascade, barrière stérile à chaque phase. Orfèvrerie cutanée : rien ne touche la peau sans traçabilité.',
  },
  {
    ref: 'STÉ-02',
    titre: 'Stérilisation traçable',
    detail:
      'Autoclave classe B, indicateurs intégrateurs archivés. Aiguilles et consommables à usage unique — lots enregistrés, ouverture devant vous.',
  },
  {
    ref: 'REACH-2026',
    titre: 'Encres & pigments REACH 2026',
    detail:
      'Pigmentation chirurgicale : formulations conformes au règlement européen, transparence sur charges et diluants stériles. Refus des mélanges opaques non étiquetés.',
  },
]

export function TattooProtocolReport({ variant = 'light', rows = ROWS_DEFAULT, studioLabel = 'Studio' }) {
  const isDark = variant === 'dark'
  const isWarm = variant === 'warm'
  const border = isDark ? 'border-white/12' : isWarm ? 'border-[#2c2825]/12' : 'border-[#1A1A1A]/12'
  const muted = isDark ? 'text-white/45' : isWarm ? 'text-[#2c2825]/50' : 'text-[#1A1A1A]/50'
  const fg = isDark ? 'text-white/90' : isWarm ? 'text-[#2c2825]' : 'text-[#1A1A1A]'
  const bg = isDark ? 'bg-white/[0.03]' : isWarm ? 'bg-white/30' : 'bg-[#1A1A1A]/[0.02]'

  return (
    <section className={`min-h-[min(100dvh,920px)] snap-start px-5 py-24 md:px-12 lg:px-20`}>
      <div className="mx-auto max-w-4xl">
        <div className={`flex flex-wrap items-end justify-between gap-4 border-b ${border} pb-6`}>
          <div>
            <p className={`font-mono text-[9px] uppercase tracking-[0.35em] ${muted}`}>Rapport de conformité</p>
            <h2 className={`mt-2 font-mono text-[11px] uppercase tracking-[0.25em] ${fg}`}>Le protocole</h2>
          </div>
          <p className={`font-mono text-[10px] ${muted}`}>
            {studioLabel} · dossier vérifié
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          {rows.map((row) => (
            <li key={row.ref} className={`grid gap-6 border ${border} ${bg} p-6 backdrop-blur-md md:grid-cols-[minmax(0,7rem)_1fr] md:gap-10`}>
              <div>
                <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${muted}`}>{row.ref}</p>
                <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.15em] ${fg}`}>{row.titre}</p>
              </div>
              <p className={`text-[13px] font-light leading-relaxed ${muted} max-md:pt-2`}>{row.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
