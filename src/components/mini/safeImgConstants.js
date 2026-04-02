import { unsplashPhoto, UNSPLASH_FALLBACK_GENERIC } from '../../lib/unsplash.js'

/** Repli générique (pain / boulangerie). */
export const DEFAULT_IMG_FALLBACK = UNSPLASH_FALLBACK_GENERIC

/** Salon coiffure — si /stock-photos/ absent. */
export const SALON_IMG_FALLBACK = unsplashPhoto('1560066984-138dadb4c035', { w: 1200, q: 80 })

/** Barbier — si assets locaux absents. */
export const BARBER_IMG_FALLBACK = unsplashPhoto('1503951914875-452162b0f3f1', { w: 1200, q: 80 })
