/**
 * Visuels Bar Comptoir — URLs Unsplash normalisées (w ≤ 1200).
 * Remplacer par des fichiers locaux dans public/bar-basque/ si besoin.
 */
import { unsplashPhoto, UNSPLASH_FALLBACK_BAR } from '../lib/unsplash.js'

const U = (id, w) => unsplashPhoto(id, { w: Math.min(w, 1200), q: 80 })

export const BAR_BASQUE_IMAGES = {
  hero: UNSPLASH_FALLBACK_BAR,
  menuContext: U('1414235077428-338989a2e8c0', 900),
  gallery: [
    U('1544025162-d76694265947', 1200),
    U('1519708227418-c8fd9a32b7a2', 1200),
    U('1517248135467-4c7edcad34c4', 1200),
  ],
  catMer: U('1519708227418-c8fd9a32b7a2', 1200),
  catTerre: U('1544025162-d76694265947', 1200),
  catCave: U('1506377247377-2a5b3b417ebb', 1200),
  catSpiritueux: U('1553361371-9b22f78e8b1d', 1200),
  pintxoTheatre: U('1517248135467-4c7edcad34c4', 1000),
  steak: U('1544025162-d76694265947', 1000),
  fish: U('1519708227418-c8fd9a32b7a2', 1000),
  pintxoInterieur: U('1517248135467-4c7edcad34c4', 1000),
  pintxoCafe: U('1509042239860-f550ce710b93', 1000),
  menuPlate: U('1540189549336-e6e99c3679fe', 1000),
}
