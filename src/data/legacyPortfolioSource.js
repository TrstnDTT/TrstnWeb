/**
 * Données alignées sur l’ancien meta-portfolio (Next.js).
 * Source locale : …/trstnportfolio — sitesConfig.ts, sitesInfo.ts.
 *
 * Templates JSX intégrés (un par catégorie, componentKey) :
 *   bakery-classic → src/legacy/templates/bakery/BakeryClassic.jsx
 *   tattoo-noir → …/tattoo/TattooNoir.jsx
 *   barber-urban → …/barber/BarberUrban.jsx
 *   event-wedding → …/events/EventWedding.jsx
 *   photo-minimalist → …/photography/PhotoMinimalist.jsx
 *   service-woodworker → …/services/ServiceWoodworker.jsx
 */

/** Mapping id TrstnWeb → id variante dans sitesConfig / sitesInfo */
export const LEGACY_VARIANT_IDS = {
  'pain-dore': 'bakery-classic',
  'atelier-m': 'barber-urban',
  'maison-lumiere': 'event-wedding',
  'studio-eclipse': 'photo-minimalist',
  'artisan-grain': 'service-woodworker',
}

/**
 * Thèmes alignés sur sitesConfig.ts (ThemeConfig) — utilisés par les templates JSX copiés.
 */
export const LEGACY_THEMES = {
  'bakery-classic': {
    name: 'Classic Bakery',
    primaryColor: '#D4A574',
    secondaryColor: '#8B6F47',
    accentColor: '#F4E4C1',
    backgroundColor: '#FFF8E7',
    textColor: '#4A3728',
    fontFamily: 'Georgia, serif',
    headingFont: 'Georgia, serif',
    borderRadius: 'lg',
    style: 'rustic',
  },
  'tattoo-noir': {
    name: 'Noir Studio',
    primaryColor: '#111111',
    secondaryColor: '#6B7280',
    accentColor: '#E8DFD4',
    backgroundColor: '#F6F1EA',
    textColor: '#141414',
    fontFamily: '"Merriweather", Georgia, serif',
    headingFont: '"Oswald", system-ui, sans-serif',
    borderRadius: 'sm',
    style: 'bold',
  },
  'barber-urban': {
    name: 'Barbier urbain',
    primaryColor: '#C41E3A',
    secondaryColor: '#0A0A0A',
    accentColor: '#FAFAFA',
    backgroundColor: '#1A1A1A',
    textColor: '#FAFAFA',
    fontFamily: '"Oswald", system-ui, sans-serif',
    headingFont: '"Bebas Neue", sans-serif',
    borderRadius: 'none',
    style: 'bold',
  },
  'event-wedding': {
    name: 'Wedding Dreams',
    primaryColor: '#E8B4BC',
    secondaryColor: '#C9A0A7',
    accentColor: '#FFF5F7',
    backgroundColor: '#FFFBFC',
    textColor: '#5A4A4E',
    fontFamily: '"Crimson Text", Georgia, serif',
    headingFont: '"Great Vibes", cursive',
    borderRadius: 'xl',
    style: 'elegant',
  },
  'photo-minimalist': {
    name: 'Minimalist Gallery',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#F5F5F5',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    fontFamily: '"Inter", system-ui, sans-serif',
    headingFont: '"Inter", system-ui, sans-serif',
    borderRadius: 'none',
    style: 'minimal',
  },
  'service-woodworker': {
    name: 'Artisan Woodworker',
    primaryColor: '#8B4513',
    secondaryColor: '#D2691E',
    accentColor: '#F5DEB3',
    backgroundColor: '#FAF8F3',
    textColor: '#3E2723',
    fontFamily: '"Merriweather", Georgia, serif',
    headingFont: '"Bitter", Georgia, serif',
    borderRadius: 'md',
    style: 'rustic',
  },
}

/** Site TrstnWeb qui affiche un template legacy plein écran */
export const LEGACY_TEMPLATE_SITE_IDS = new Set(Object.keys(LEGACY_VARIANT_IDS))

/** @param {string} siteId ex. pain-dore */
export function getLegacyTheme(siteId) {
  const vid = LEGACY_VARIANT_IDS[siteId]
  if (!vid) return null
  return LEGACY_THEMES[vid] ?? null
}

/** True si ce projet affiche un template JSX copié depuis trstnportfolio. */
export function hasLegacyTemplate(siteId) {
  return Boolean(LEGACY_VARIANT_IDS[siteId] && getLegacyTheme(siteId))
}
