/**
 * Contenu partagé — mini-sites boulangerie (carte du matin, fournil, visuels).
 * Les sites peuvent surcharger via `site.bakeryImmersive` (fusion dans l’expérience).
 */

const U = 'https://images.unsplash.com'

export const BAKERY_IMMERSIVE_PALETTE = {
  creme: '#FDFBF7',
  ink: '#1A1A1A',
  gold: '#C5A059',
}

/** Hero — croûte / feuilletage, filtres chauds côté CSS. */
export const BAKERY_HERO_IMAGE = `${U}/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=88`

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
      image: `${U}/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Pain au chocolat (Chocolatine)',
      price: '1,70 €',
      description: 'Barres 64 %, pâte feuilletée du jour.',
      image: `${U}/photo-1548848221-0c2e14a8c6c7?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Pain aux raisins',
      price: '1,90 €',
      description: 'Crème pâtissière légère, raisins macérés, spirale serrée.',
      image: `${U}/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Pain au lait',
      price: '1,30 €',
      description: 'Mie filante, sucre de canne, finition dorée.',
      image: `${U}/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=400&q=82`,
    },
  ],
  pains: [
    {
      name: 'Baguette de tradition',
      price: '1,30 €',
      description: 'Pointage long, grigne ouverte, AOP farine française.',
      image: `${U}/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Pain de campagne au levain',
      price: '4,50 €',
      description: 'Fermentation 24 h, mie alvéolée, croûte épaisse.',
      image: `${U}/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Pavé aux céréales',
      price: '4,80 €',
      description: 'Lin, tournesol, sésame — mie dense et nourrissante.',
      image: `${U}/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=82`,
    },
  ],
  patisseries: [
    {
      name: 'Tarte au citron meringuée',
      price: '5,20 €',
      description: 'Crème citron équilibrée, meringue italienne légère.',
      image: `${U}/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Éclair au chocolat',
      price: '4,50 €',
      description: 'Pâte à choux croustillante, ganache fondante.',
      image: `${U}/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=82`,
    },
    {
      name: 'Gâteau Basque',
      price: '4,80 €',
      description: 'Crème ou cerise noire — signature bayonnaise.',
      image: `${U}/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=400&q=82`,
    },
  ],
}

export const BAKERY_TAB_ORDER = [
  { id: 'viennoiseries', label: 'Viennoiseries' },
  { id: 'pains', label: 'Pains' },
  { id: 'patisseries', label: 'Pâtisseries' },
]
