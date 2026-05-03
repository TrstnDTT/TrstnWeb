export const PRICING_PLANS = [
  {
    id: 'essential',
    name: 'ESSENTIEL',
    subtitle: 'Site Vitrine',
    depositLabel: "149,99€ d'acompte",
    recurringLabel: '30€/mois pendant 12 mois',
    description: 'Un site premium prêt a convertir les recherches locales en clients.',
    features: ['Design premium', 'Responsive', 'SEO local', 'Hebergement'],
    ctaLabel: 'Choisir ce plan',
  },
  {
    id: 'boost',
    name: 'BOOST',
    subtitle: 'Croissance',
    depositLabel: "299,99€ d'acompte",
    recurringLabel: '50€/mois',
    description: 'Le plan favori pour accelerer votre acquisition locale en continu.',
    features: [
      'Tout le plan Essentiel',
      'Google Business Profile',
      '1h de modifs / mois',
    ],
    ctaLabel: 'Choisir ce plan',
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'ELITE',
    subtitle: 'Sur-mesure',
    depositLabel: 'Sur devis',
    recurringLabel: 'Accompagnement personnalise',
    description: 'Une strategie complete pour dominer votre zone de chalandise.',
    features: ['Strategie complete', 'Shooting photo', 'SEO agressif'],
    ctaLabel: 'Parler de mon projet',
    isContactOnly: true,
  },
]

export const REASSURANCE_BADGES = [
  'Paiement 100% securise',
  'Sans engagement apres 12 mois',
  'Support local a Bayonne',
]
