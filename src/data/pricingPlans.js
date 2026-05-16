export const PRICING_PLANS = [
  {
    id: 'essential',
    name: 'PACK ESSENTIEL',
    subtitle: 'Site vitrine',
    tagline: 'Pour les artisans & commerçants qui veulent être vus.',
    depositLabel: "149,99€ d'acompte",
    recurringLabel: '30€/mois (engagement 12 mois)',
    description: 'Une base solide pour être visible en ligne sans complexité inutile.',
    features: [
      'Site vitrine one-page optimisé',
      'Présence Google & SEO national ciblé',
      'Maintenance et sécurité garanties',
    ],
    ctaLabel: 'Choisir ce pack',
  },
  {
    id: 'boost',
    name: 'PACK BOOST',
    subtitle: 'Croissance',
    tagline: 'Pour les business qui veulent passer au niveau supérieur.',
    depositLabel: "299,99€ d'acompte",
    recurringLabel: '60€/mois (engagement 12 mois)',
    description: 'Un site complet et une stratégie pour dominer votre secteur en ligne.',
    features: [
      'Site multi-pages complet',
      'Stratégie SEO avancée pour dominer votre secteur',
      'Suivi mensuel de performance et coaching',
    ],
    ctaLabel: 'Choisir ce pack',
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'PACK ÉLITE',
    subtitle: 'Sur-mesure',
    tagline: 'Pour un projet ambitieux avec un accompagnement premium.',
    depositLabel: 'Sur devis',
    recurringLabel: 'Accompagnement personnalisé',
    description: 'Stratégie, contenus et exécution alignés sur vos objectifs business.',
    features: ['Stratégie complète', 'Shooting photo', 'SEO agressif & suivi rapproché'],
    ctaLabel: 'Parler de mon projet',
    isContactOnly: true,
  },
]

export const REASSURANCE_BADGES = [
  'Paiement sécurisé via Stripe',
  'Engagement 12 mois',
  'Accompagnement à distance partout en France',
]
