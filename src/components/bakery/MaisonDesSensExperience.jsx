/**
 * LA MAISON DES SENS — hotspots, un produit au centre, verre & silence.
 */
import { useCallback, useState } from 'react'

const BLANC = '#faf9f7'
const CASSE = '#f0eeeb'
const ENCRE = '#2c2c2c'
const SERIF = '"Cormorant Garamond", Georgia, serif'

const SENS = [
  {
    id: 'a',
    nom: 'Baguette de tradition croustillante',
    vers:
      'Elle se tient droite comme une phrase de Bossuet ; sous le doigt, la grigne résiste puis cède — alvéolage régulier, mémoire du levain de la veille.',
    detail:
      'Autolyse douze minutes, pointage en deux temps, fermentation contrôlée à 24 °C. La croûte chante avant la mie.',
  },
  {
    id: 'b',
    nom: 'Pain au levain T80',
    vers:
      'Mie ocre, bulles étirées comme du velours froissé : le silence du four quand la buée retombe.',
    detail:
      'Hydratation 78 %, pétrissage lent, grigne ouverte en « oreille » — le son du refroidissement est une mesure.',
  },
  {
    id: 'c',
    nom: 'Éclair au chocolat noir 70 %',
    vers:
      'Glaçage miroir sans cri : le cacao parle bas, la pâte à choux ne se vante pas.',
    detail:
      'Crème pâtissière infusée, tempérage à la main — précision de joaillier, jamais d’affichage tapageur.',
  },
]

const SON_CROUTE = [
  'Premier contact : un craquement sec, proche du pas sur une allée de gravier fin — la surface refuse la mollesse.',
  'Puis la fracture : feuille morte froissée, celle qu’on ramasse sans briser la nervure.',
  'Enfin la mie : soupir presque inaudible, comme un livre qu’on referme sur un vers aimé.',
]

function RetourSens({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed right-6 top-6 z-[1000] rounded-full border border-white/40 bg-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.4em] backdrop-blur-md transition hover:bg-white/50"
      style={{ fontFamily: SERIF, color: ENCRE }}
      aria-label="Retour au portfolio"
    >
      quitter
    </button>
  )
}

export function MaisonDesSensExperience({ site, onBack }) {
  const [actif, setActif] = useState(0)
  const [oreille, setOreille] = useState(false)
  const produits = site.maisonSensProduits?.length ? site.maisonSensProduits : SENS

  const suivant = useCallback(() => {
    setActif((i) => (i + 1) % produits.length)
  }, [produits.length])

  const p = produits[actif]

  return (
    <div
      className="relative min-h-[100dvh] overflow-hidden"
      style={{
        background: `linear-gradient(165deg, ${BLANC} 0%, ${CASSE} 100%)`,
        color: ENCRE,
        fontFamily: SERIF,
      }}
    >
      <RetourSens onBack={onBack} />

      <p className="absolute left-6 top-8 max-w-[10rem] text-[9px] uppercase tracking-[0.55em] opacity-50">
        {site.tagline}
      </p>

      {/* Hotspots — pas de barre de navigation classique */}
      <div className="pointer-events-auto absolute left-4 top-1/2 z-[20] flex -translate-y-1/2 flex-col gap-6 md:left-10">
        {produits.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActif(i)}
            className="relative h-4 w-4 rounded-full border transition"
            style={{
              borderColor: actif === i ? ENCRE : `${ENCRE}33`,
              backgroundColor: actif === i ? ENCRE : 'transparent',
              boxShadow: actif === i ? '0 0 0 4px rgba(44,44,44,0.12)' : '0 8px 24px -8px rgba(0,0,0,0.08)',
            }}
            aria-label={`Point d’intérêt ${i + 1}`}
            aria-pressed={actif === i}
          />
        ))}
      </div>

      <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-32 pt-24 md:flex-row md:gap-16 md:px-20">
        <div
          className="relative z-[10] flex max-w-md flex-1 flex-col items-center justify-center text-center"
          style={{
            boxShadow: '0 32px 80px -40px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8)',
          }}
        >
          <div
            className="w-full rounded-[2.5rem] border border-white/60 bg-white/50 px-10 py-16 backdrop-blur-md md:px-14 md:py-20"
            style={{ borderRadius: '2.5rem' }}
          >
            <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-medium italic leading-snug" style={{ letterSpacing: '0.02em' }}>
              {p.nom}
            </h1>
            <button
              type="button"
              onClick={suivant}
              className="mt-10 text-[10px] uppercase tracking-[0.35em] opacity-50 transition hover:opacity-100"
            >
              autre regard →
            </button>
          </div>
        </div>

        <aside
          className="relative z-[10] mt-12 max-w-sm flex-1 md:mt-0"
          style={{
            boxShadow: '0 24px 60px -35px rgba(0,0,0,0.1)',
          }}
        >
          <div className="rounded-3xl border border-white/70 bg-white/40 px-8 py-10 backdrop-blur-sm">
            <p className="text-[15px] italic leading-[1.95]" style={{ fontWeight: 500 }}>
              {p.vers}
            </p>
            <p className="mt-8 text-[13px] leading-[1.85] opacity-85">{p.detail}</p>

            <div className="mt-10 border-t border-black/5 pt-8">
              <button
                type="button"
                onClick={() => setOreille((o) => !o)}
                className="w-full text-left text-[11px] uppercase tracking-[0.25em] underline-offset-4 transition hover:opacity-70"
                style={{ fontStyle: 'normal' }}
              >
                L’oreille du pain {oreille ? '▼' : '→'}
              </button>
              {oreille && (
                <div className="mt-6 space-y-4 text-[13px] italic leading-[1.9] opacity-90">
                  {SON_CROUTE.map((s, i) => (
                    <p key={i}>{s}</p>
                  ))}
                </div>
              )}
            </div>

            <a
              href={`mailto:accueil@maison-des-sens.fr?subject=${encodeURIComponent('Réserver une dégustation')}`}
              className="mt-10 inline-block text-[10px] uppercase tracking-[0.4em] opacity-70 hover:opacity-100"
            >
              Réserver une dégustation
            </a>
          </div>
        </aside>
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[9px] tracking-[0.2em] opacity-40">
        {site.location?.city} — {site.location?.hours}
      </p>
    </div>
  )
}
