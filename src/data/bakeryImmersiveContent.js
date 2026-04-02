/**
 * Contenu partagé — mini-sites boulangerie (carte du matin, fournil, visuels).
 * Les sites peuvent surcharger via `site.bakeryImmersive` (fusion dans l’expérience).
 */

import { UNSPLASH_BAKERY } from '../lib/unsplash.js'

export const BAKERY_IMMERSIVE_PALETTE = {
  creme: '#FDFBF7',
  ink: '#1A1A1A',
  gold: '#C5A059',
}

/** Hero — croûte / feuilletage, filtres chauds côté CSS. */
export const BAKERY_HERO_IMAGE = UNSPLASH_BAKERY.hero

export const BAKERY_FOURNIL_DEFAULT = {
  title: 'Le Fournil',
  kicker: 'Expertise & matière',
  paragraphs: [
    'Le levain naturel est nourri chaque jour comme un compagnon de travail : même température d’eau, même farine des Landes et du piémont basque, même écoute du grondement du pétrin.',
    'Le pétrissage est lent — on laisse le gluten s’organiser sans le brusquer ; les fournées s’enchaînent au rythme du four à pierre, entre vapeur et chaleur tenue.',
    'Nos farines partent d’artisans meuniers du Pays basque et des Landes : blés anciens, T80 et complètes, pour des croûtes qui sonnent juste et des mies qui se déchirent sans s’effriter.',
  ],
}

/** Carte du matin — onglets [Viennoiseries, Pains, Pâtisseries]. */
export const BAKERY_MORNING_MENU_DEFAULT = {
  viennoiseries: [
    {
      name: 'Croissant au beurre Charentes-Poitou',
      price: '1,50 €',
      description: 'Tourage patient, feuilletage doré, beurre AOP.',
      image: UNSPLASH_BAKERY.croissant,
    },
    {
      name: 'Pain au chocolat (Chocolatine)',
      price: '1,70 €',
      description: 'Barres 64 %, pâte feuilletée du jour.',
      image: UNSPLASH_BAKERY.painChocolat,
    },
    {
      name: 'Pain aux raisins',
      price: '1,90 €',
      description: 'Crème pâtissière légère, raisins macérés, spirale serrée.',
      image: UNSPLASH_BAKERY.painRaisin,
    },
    {
      name: 'Pain au lait',
      price: '1,30 €',
      description: 'Mie filante, sucre de canne, finition dorée.',
      image: UNSPLASH_BAKERY.painLait,
    },
  ],
  pains: [
    {
      name: 'Baguette de tradition',
      price: '1,30 €',
      description: 'Pointage long, grigne ouverte, AOP farine française.',
      image: UNSPLASH_BAKERY.baguette,
    },
    {
      name: 'Pain de campagne au levain',
      price: '4,50 €',
      description: 'Fermentation 24 h, mie alvéolée, croûte épaisse.',
      image: UNSPLASH_BAKERY.painCampagne,
    },
    {
      name: 'Pavé aux céréales',
      price: '4,80 €',
      description: 'Lin, tournesol, sésame — mie dense et nourrissante.',
      image: UNSPLASH_BAKERY.pave,
    },
  ],
  patisseries: [
    {
      name: 'Tarte au citron meringuée',
      price: '5,20 €',
      description: 'Crème citron équilibrée, meringue italienne légère.',
      image: UNSPLASH_BAKERY.tarteCitron,
    },
    {
      name: 'Éclair au chocolat',
      price: '4,50 €',
      description: 'Pâte à choux croustillante, ganache fondante.',
      image: UNSPLASH_BAKERY.eclairChocolat,
    },
    {
      name: 'Gâteau Basque',
      price: '4,80 €',
      description: 'Crème ou cerise noire — signature bayonnaise.',
      image: UNSPLASH_BAKERY.gateauBasque,
    },
  ],
}

export const BAKERY_TAB_ORDER = [
  { id: 'viennoiseries', label: 'Viennoiseries' },
  { id: 'pains', label: 'Pains' },
  { id: 'patisseries', label: 'Pâtisseries' },
]
