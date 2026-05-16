/**
 * Le Chai Moderne — menu « moments de vie », âme du lieu, agenda.
 */

export const CHAI_PALETTE = {
  oak: '#D2B48C',
  ink: '#1A1A1A',
  paper: '#F9F7F2',
}

/** Google Maps — adresse vitrine (démo). */
export const CHAI_MAPS_QUERY = 'bar à vin France'

export const CHAI_SOUL = {
  title: "L'Âme du Chai",
  lead: 'Convivialité, partage, pépite locale.',
  paragraphs: [
    'Ici, le bois de la charpente raconte le temps : poutres claires, zinc au comptoir, lumière qui glisse comme sur une terrasse ombragée de centre-ville. L’accueil est direct, chaleureux, jamais guindé.',
    'On s’assoit pour un café le matin, une bière artisanale le soir, entre amis ou voyageurs de passage. Le Chai, c’est le prolongement de la rue : un lieu où l’on commande sans se presser, où chaque verre dit quelque chose du terroir.',
  ],
}

/** Module « agenda » — argument commerçant. */
export const CHAI_AGENDA_EVENTS = [
  {
    date: 'Vendredi 12 avril',
    title: 'DJ Set — grooves & vinyles',
    detail: 'Ambiance lounge, volume maîtrisé — idéal pour découvrir la carte au verre.',
  },
  {
    date: 'Samedi 20 avril',
    title: 'Retransmission rugby',
    detail: 'Grand écran, pintes artisanales, planches à partager entre deux essais.',
  },
  {
    date: 'Jeudi 25 avril',
    title: 'Dégustation du sommelier',
    detail: 'Vins de vignerons français — 4 verres, mots du vigneron, accord mets du marché.',
  },
]

/**
 * Menu immersif — « Moments de vie » (prix en sans-serif lisible côté UI).
 */
export const CHAI_MENU_MOMENTS = [
  {
    id: 'reveil',
    title: 'Le Réveil du Marché',
    subtitle: 'Du premier café aux jus du marché',
    iconKey: 'coffee',
    items: [
      { name: 'Espresso torréfié', price: '2,50€', note: 'Serré, corsé — réveil net.' },
      { name: 'Allongé', price: '3,20€', note: 'Long en bouche, douceur sans lourdeur.' },
      { name: 'Thé Grand Cru', price: '4,50€', note: 'Infusion lente, parfums précis.' },
      { name: 'Jus de fruits locaux', price: '4€', note: 'Pêche, pomme ou agrume — selon arrivage.' },
    ],
  },
  {
    id: 'pression',
    title: 'La Pression Artisanale',
    subtitle: 'Brasseurs français',
    iconKey: 'beer',
    items: [
      { name: 'IPA', price: '6€', note: 'Amertume vive, notes résineuses & agrumes.' },
      { name: 'Blonde', price: '5,50€', note: 'Équilibrée, malt doux, finale propre.' },
      { name: 'Blanche', price: '5,80€', note: 'Légère, coriandre, peu d’amertume.' },
    ],
  },
  {
    id: 'sommelier',
    title: 'Sélection du Sommelier',
    subtitle: 'Vins au verre — terroir',
    iconKey: 'wine',
    items: [
      { name: 'Rouge de vigneron', price: '6€', note: 'Terroir français — fruit noir, belle tension.' },
      { name: 'Navarre blanc', price: '5,50€', note: 'Minéral, floral, idéal tapas.' },
      { name: 'Rioja crianza', price: '6,50€', note: 'Épices douces, chêne bien intégré.' },
    ],
  },
  {
    id: 'grignoter',
    title: 'À Grignoter',
    subtitle: 'Planches & partage',
    iconKey: 'food',
    items: [
      { name: 'Planche jambon Kintoa', price: '16€', note: 'Séchage long, goût de noisette.' },
      { name: 'Fromage de brebis', price: '12€', note: 'Ossau-Iraty ou voisin — selon saison.' },
      { name: 'Olives marinées', price: '5€', note: 'Herbes du sud, huile d’olive locale.' },
    ],
  },
]
