/**
 * URLs Unsplash normalisées (images.unsplash.com/photo-* uniquement — pas de source.unsplash.com).
 * Largeur max 1200px et q=80 pour limiter le poids côté Vercel.
 */

export const UNSPLASH_HOST = 'https://images.unsplash.com'

/**
 * @param {string} photoSlug — identifiant après `photo-` (ex. "1555507036-ab1f4038808a")
 */
export function unsplashPhoto(photoSlug, { w = 1200, q = 80 } = {}) {
  const capW = Math.min(Math.max(Number(w) || 1200, 1), 1200)
  const capQ = Math.min(Math.max(Number(q) || 80, 1), 95)
  return `${UNSPLASH_HOST}/photo-${photoSlug}?auto=format&fit=crop&q=${capQ}&w=${capW}`
}

/** Réécrit une URL Unsplash existante : auto, fit, q, w ≤ 1200. */
export function normalizeUnsplashUrl(url) {
  if (!url || typeof url !== 'string' || !url.includes('images.unsplash.com/photo-')) return url
  try {
    const u = new URL(url)
    if (!u.pathname.startsWith('/photo-')) return url
    const wRaw = u.searchParams.get('w')
    const qRaw = u.searchParams.get('q')
    const capW = Math.min(parseInt(wRaw || '1200', 10), 1200)
    const capQ = Math.min(Math.max(parseInt(qRaw || '80', 10), 1), 95)
    u.searchParams.set('auto', 'format')
    u.searchParams.set('fit', 'crop')
    u.searchParams.set('q', String(capQ))
    u.searchParams.set('w', String(capW))
    return u.toString()
  } catch {
    return url
  }
}

/** Repli générique (pain / boulangerie) — vérifié HTTP 200. */
export const UNSPLASH_FALLBACK_GENERIC = unsplashPhoto('1509440159596-0249088772ff', { w: 1200, q: 80 })

/** Repli bar / salle — intérieur restaurant (remplace anciennes URL 404). */
export const UNSPLASH_FALLBACK_BAR = unsplashPhoto('1517248135467-4c7edcad34c4', { w: 1200, q: 80 })

/** Boulangerie — mots-clés : bakery, fresh-bread, croissant, golden-crust */
export const UNSPLASH_BAKERY = {
  hero: unsplashPhoto('1509440159596-0249088772ff', { w: 1200 }),
  croissant: unsplashPhoto('1555507036-ab1f4038808a', { w: 600 }),
  painChocolat: unsplashPhoto('1578985545062-69928b1d9587', { w: 600 }),
  painRaisin: unsplashPhoto('1567620905732-2d1ec7ab7445', { w: 600 }),
  painLait: unsplashPhoto('1608198093002-ad4e005484ec', { w: 600 }),
  baguette: unsplashPhoto('1549931319-a545dcf3bc73', { w: 600 }),
  painCampagne: unsplashPhoto('1517433670267-08bbd4be890f', { w: 600 }),
  pave: unsplashPhoto('1509440159596-0249088772ff', { w: 600 }),
  tarteCitron: unsplashPhoto('1519915028121-7d3463d20b13', { w: 600 }),
  eclairChocolat: unsplashPhoto('1558961363-fa8fdf82db35', { w: 600 }),
  gateauBasque: unsplashPhoto('1621303837174-89787a7d4729', { w: 600 }),
}

/** Le Chai Moderne — chaleur, bois, bar (filtre warm appliqué côté composant). */
export const UNSPLASH_CHAI = {
  hero: unsplashPhoto('1497935586351-b67a49e012bf', { w: 1200 }),
  still1: unsplashPhoto('1510812431401-41d2bd2722f3', { w: 1200 }),
  still2: unsplashPhoto('1543007630-9710e4a00a20', { w: 1200 }),
  bookingSide: unsplashPhoto('1510812431401-41d2bd2722f3', { w: 1200 }),
}

/** Apothicaire / néon shaker — cocktails, macro bar */
export const UNSPLASH_APOTHICAIRE = {
  hero: unsplashPhoto('1551538827-9c037cb4f32a', { w: 1200 }),
  macro: unsplashPhoto('1543007630-9710e4a00a20', { w: 1200 }),
  bar: unsplashPhoto('1517248135467-4c7edcad34c4', { w: 1200 }),
}

/** Le Labo de Peau — piercing, bijou, clinique (filtre froid côté OrEtPeauExperience). */
export const UNSPLASH_LABO = {
  hero: unsplashPhoto('1497935586351-b67a49e012bf', { w: 1200 }),
}
