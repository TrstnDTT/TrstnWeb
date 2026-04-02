/**
 * Contenu structuré — L’Atelier Sucré (pâtisserie boutique moderne).
 * Fusionné via `site.atelierSucre` dans BUSINESS_RICH.
 */

import { unsplashPhoto } from '../lib/unsplash.js'

const U = (id, w) => unsplashPhoto(id, { w: Math.min(w, 1200), q: 80 })

export const ATELIER_SUCRE_PALETTE = {
  blush: '#FDF5F6',
  white: '#FFFFFF',
  roseGold: '#C9A27E',
  ink: '#2C2624',
  mist: '#FAFAFA',
}

export const ATELIER_SUCRE_DEFAULT = {
  heroImage: U('1558961363-fa8fdf82db35', 1200),
  kicker: 'Pâtisserie boutique',
  headline: 'L’Atelier Sucré',
  subline: 'Précision, saison, silence — chaque entremets comme une pièce unique.',
  collectionSaison: {
    title: 'Collection de Saison',
    kicker: 'Éphémère',
    intro: 'Quelques semaines seulement — fruits de passage, glaçages mats, équilibre acide & sucre.',
    items: [
      {
        name: 'Tarte au citron déstructurée',
        note: 'Yuzu confit · meringue brûlée',
        image: U('1519915028121-7d3463d20b13', 900),
      },
      {
        name: 'Éclair au yuzu',
        note: 'Pâte à choux légère · crémeux agrume',
        image: U('1558961363-fa8fdf82db35', 900),
      },
      {
        name: 'Macarons (assortiment)',
        note: 'Ganache infusée · coques satinées',
        image: U('1563729784474-d77dbb933a9e', 900),
      },
      {
        name: 'Saint-Honoré revisité',
        note: 'Choux caramélisés · vanille Bourbon',
        image: U('1621303837174-89787a7d4729', 900),
      },
    ],
  },
  ingredientRare: {
    title: "L'Ingrédient Rare",
    kicker: 'Zoom matière',
    name: 'Vanille Bourbon de Madagascar',
    body:
      'Gousses longues, taux de vanilline élevé : nous infusons froid 48 h dans la crème avant montage — pas d’extrait, pas de raccourci. Le parfum doit rester linéaire, jamais sucré « artificiel ».',
    detail: 'Lot n° V-2026-03 · traçabilité pod à pod.',
    image: U('1519915028121-7d3463d20b13', 1200),
  },
  barTartes: {
    title: 'Le Bar à Tartes',
    kicker: 'Menu visuel',
    intro: 'Cercles parfaits, fonds sablés cuits bas — choisissez au comptoir vitré.',
    items: [
      {
        name: 'Citron & meringue',
        image: U('1519915028121-7d3463d20b13', 600),
      },
      {
        name: 'Pistache & griotte',
        image: U('1565958011703-44f9829ba187', 600),
      },
      {
        name: 'Chocolat grand cru',
        image: U('1578985545062-69928b1d9587', 600),
      },
      {
        name: 'Fraise Gariguette',
        image: U('1464349095431-e9a21285b5f3', 600),
      },
    ],
  },
}
