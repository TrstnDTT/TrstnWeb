/**
 * Données du portfolio : catégories sectorielles et projets (textes en français).
 * Chaque catégorie définit une identité visuelle (variables CSS) pour la zone principale.
 *
 * Chaque projet : `siteId` → fusion dans `getSiteById()` (`siteIdentity.js` : couleurs, typo, layoutStructure).
 */

/** Accueil mobile : carrousel d’aperçus (siteId → getSiteById). */
export const HOME_FEATURED_SITE_IDS = [
  'table-constance',
  'pain-dore',
  'bar-basque',
  'neo-ink-studio',
  'cheveux-co',
]

export const SITE = {
  title: 'TrstnWeb',
  subtitle: 'Sites web sur mesure — accompagnement à distance partout en France',
  /** CTA principal vers la page contact (navigation, hero). */
  ctaContact: 'Lancer ma croissance',
  /** Libellé court (tab bar mobile). */
  ctaContactShort: 'Croissance',
  /** E-mail affiché pour les prises de contact. */
  contactEmail: 'decoberttristan@gmail.com',
  /** Page contact — localisation & réseau (URL publique). */
  contact: {
    locationLabel: 'France',
    instagramUrl: 'https://www.instagram.com/',
  },
  /** Pied de page — marque + infos légales (France / LSSI). */
  legal: {
    /** Lien court dans le footer. */
    mentionsLinkLabel: 'Mentions légales',
    /** Texte affiché sous la marque (une ligne). */
    tagline: 'Studio web — sites sur mesure en React pour commerces et indépendants partout en France.',
    copyright: (year) => `© ${year} TrstnWeb. Tous droits réservés.`,
    editor:
      'Éditeur du site : Tristan Decobert — activité de prestation de services numériques (France).',
    contactLine: (email) => `Contact : ${email}`,
    hosting:
      'Hébergement : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — https://vercel.com',
    dataNotice:
      'Données personnelles : traitées uniquement pour répondre à vos demandes ; droits d’accès et de rectification sur simple demande auprès du contact ci-dessus.',
  },
  footer:
    'Votre vitrine ne doit pas seulement être belle : elle doit transformer l’attention en rendez-vous — partout en France, avec des parcours pensés pour convertir à distance.',
  /** Page d’accueil (/) — méthode PAS + H1 SEO. */
  home: {
    heroH1: 'Propulsez votre activité partout en France avec des sites web sur mesure.',
    /**
     * Premier paragraphe sous le H1 — doit contenir le nom de marque TrstnWeb (SEO / cohérence).
     */
    heroIntro:
      'TrstnWeb conçoit des sites web sur mesure pour artisans et commerçants partout en France, avec un accompagnement à distance clair et réactif. Sans vitrine digitale à la hauteur de votre savoir-faire, les prospects partent ailleurs : nous les retenons avec des interfaces premium et des parcours orientés conversion.',
    heroEyebrow: 'TrstnWeb',
    heroLead:
      'Une infrastructure éclair pour capturer chaque client avant qu’il ne s’échappe — mini-sites sur-mesure, pensés pour la rétention de lead et la prise de contact.',
    ctaProjects: 'Voir les références',
    ctaDiscover: 'Découvrir les univers',
    carouselHint: 'Faites défiler pour voir ce qui vous attend.',
    bottomPitch:
      'Problème : invisible ou interchangeable en ligne. Agitation : vous perdez des rendez-vous chaque semaine. Solution : TrstnWeb orchestre design, performance et parcours pour transformer le trafic en file d’attente de clients.',
    bottomCta: 'Découvrir la méthode',
  },
  /** Page portfolio — en-tête liste. */
  portfolio: {
    eyebrow: 'Preuves sociales',
    headline: 'Des vitrines qui convertissent, secteur par secteur',
    intro:
      'Chaque projet est un laboratoire de site web sur mesure : navigation fluide, preuves visuelles, appels à l’action clairs — pour que votre commerce ne soit plus une option parmi d’autres.',
  },
  /** Texte « À propos » — PAS + promesse business. */
  about: {
    title: 'À propos',
    paragraphs: [
      'Problème : beaucoup de commerçants partout en France ont un site « qui existe » mais qui ne vend pas. Agitation : chaque visiteur qui rebondit est un panier ou un rendez-vous perdu. Solution : j’orchestre React, identité visuelle et copy pour que votre page travaille comme un commercial silencieux.',
      'Je ne vends pas de la vitesse pour la vitesse : je mets une infrastructure éclair au service de la rétention de lead — avant que le prospect ne file vers Google Maps ou le concurrent. Design, intégration et animations : tout est assumé en solo, avec la même exigence sur chaque site sur mesure.',
    ],
    /** Blocs h2 + corps (page À propos). */
    sections: [
      {
        id: 'acte-1',
        eyebrow: 'Problème',
        title: 'Visible, mais pas convaincant',
        body:
          'Un site lent ou générique fait fuir avant le message. Vous payez en visibilité ce que vous perdez en confiance — et en paniers.',
      },
      {
        id: 'acte-2',
        eyebrow: 'Agitation',
        title: 'Chaque seconde compte',
        body:
          'Vos concurrents sont à un clic. Sans rétention de lead et sans parcours clair, le trafic ne devient jamais rendez-vous.',
      },
      {
        id: 'acte-3',
        eyebrow: 'Solution',
        title: 'Une vitrine qui travaille pour vous',
        body:
          'React, design d’élite et infrastructure éclair : on transforme l’attention en prise de contact mesurable, pas en vanity metrics.',
      },
    ],
  },
  /** Page contact — hero. */
  contactPage: {
    headline: 'Votre croissance commence par une conversation',
    lead:
      'Décrivez votre commerce et votre objectif : nous bâtissons à distance un plan de site web sur mesure aligné sur vos revenus — idéal pour développer votre activité partout en France.',
  },
}

/** Teinte de fond du canvas portfolio au survol d’une catégorie (sidebar). */
export const CATEGORY_CANVAS_HOVER = {
  light: {
    restaurant: '#FFF5F0',
    boulangerie: '#FFF7ED',
    salon: '#FFF8FA',
    bar: '#F0F9F6',
    tattoo: '#111827',
    evenementiel: '#FFF5F8',
    photographie: '#F4F4F5',
    'artisans-services': '#FFF4E8',
  },
  dark: {
    restaurant: '#1a1412',
    boulangerie: '#1c1710',
    salon: '#161014',
    bar: '#0e1618',
    tattoo: '#111827',
    evenementiel: '#161014',
    photographie: '#131313',
    'artisans-services': '#1a140e',
  },
}

export const CATEGORIES = [
  {
    id: 'restaurant',
    label: 'Restaurant',
    theme: {
      fontDisplay: '"Cormorant Garamond", Georgia, serif',
      fontBody: '"DM Sans", system-ui, sans-serif',
      gradientFrom: '#1c1214',
      gradientVia: '#120c0e',
      gradientTo: '#0a0607',
      accent: '#d4a574',
      accentMuted: 'rgba(212, 165, 116, 0.35)',
      surface: 'rgba(255, 245, 238, 0.04)',
      border: 'rgba(212, 165, 116, 0.25)',
      textHeading: '#faf6f1',
      textBody: 'rgba(250, 246, 241, 0.72)',
      glow: 'rgba(212, 165, 116, 0.12)',
    },
    projects: [
      {
        siteId: 'table-constance',
        title: 'La Table Constance',
        description:
          'Expérience dédiée : rail de navigation, hero plein écran, Maison avant le menu, citations en exergue — pas le même squelette que les autres.',
        styleTag: 'Gastronomique luxe',
      },
      {
        siteId: 'atelier-sept',
        title: 'Atelier Sept',
        description:
          'Expérience dédiée : fond papier, en-tête centré, histoire en carte puis ardoise — tout le zinc sans la grille ProjectView.',
        styleTag: 'Éditorial bistro',
      },
      {
        siteId: 'carre-rouge',
        title: 'Le Carré Rouge',
        description:
          'Expérience dédiée : bandeau défilant, header comptoir, barre d’action fixe en bas — rythme appli de commande.',
        styleTag: 'Fast casual',
      },
      {
        siteId: 'influences',
        title: 'Influences',
        description:
          'Inspiré d’un restaurant français — expertise humaine, relation clientèle, témoignages et FAQ ; carte interactive et réservation.',
        styleTag: 'Territoire & accueil',
      },
    ],
  },
  {
    id: 'boulangerie',
    label: 'Boulangerie',
    theme: {
      fontDisplay: '"Fraunces", Georgia, serif',
      fontBody: '"Nunito Sans", system-ui, sans-serif',
      gradientFrom: '#1a1510',
      gradientVia: '#12100c',
      gradientTo: '#0a0906',
      accent: '#e8c48b',
      accentMuted: 'rgba(232, 196, 139, 0.4)',
      surface: 'rgba(255, 248, 235, 0.05)',
      border: 'rgba(200, 165, 110, 0.3)',
      textHeading: '#fff9ed',
      textBody: 'rgba(255, 249, 237, 0.75)',
      glow: 'rgba(232, 196, 139, 0.1)',
    },
    projects: [
      {
        siteId: 'pain-dore',
        title: 'Le Manifeste du Grain',
        description:
          'Éditorial brutal : scroll horizontal, titres géants Anton, journal manuscrit, sans hero classique.',
        styleTag: 'Brutaliste',
      },
      {
        siteId: 'pain-passion',
        title: "L'Atelier Sucré",
        description:
          'Pâtisserie boutique : grille produit aérée, socles vitrine, transitions scale & blur, pastel & or rose.',
        styleTag: 'High-fashion grid',
      },
      {
        siteId: 'four-chocolat',
        title: 'La Boulangerie Traditionnelle',
        description:
          'Terroir & levain : navigation en reliure, spécialités au détail, histoire de famille.',
        styleTag: 'Artisanal classique',
      },
    ],
  },
  {
    id: 'salon',
    label: 'Salon de coiffure & barber',
    theme: {
      fontDisplay: '"Italiana", Georgia, serif',
      fontBody: '"Raleway", system-ui, sans-serif',
      gradientFrom: '#141016',
      gradientVia: '#0e0c12',
      gradientTo: '#08070a',
      accent: '#e8b4bc',
      accentMuted: 'rgba(232, 180, 188, 0.35)',
      surface: 'rgba(255, 250, 252, 0.04)',
      border: 'rgba(232, 180, 188, 0.28)',
      textHeading: '#fdf8fa',
      textBody: 'rgba(253, 248, 250, 0.72)',
      glow: 'rgba(232, 180, 188, 0.12)',
    },
    projects: [
      {
        siteId: 'atelier-m',
        title: 'Urban Cuts',
        description:
          'Ancien portfolio — barber-urban : salon barbier street, noir / rouge / blanc, template BarberUrban.',
        styleTag: 'Street & néon',
      },
      {
        siteId: 'cheveux-co',
        title: 'Cheveux & Co',
        description:
          'Salon de coiffure familial : Cormorant, beige pierre, tarifs enfants / adultes lisibles.',
        styleTag: 'Salon lumineux',
      },
      {
        siteId: 'au-rasoir',
        title: 'Au Rasoir',
        description:
          'Barber shop minimal : noir & or fin, file d’attente virtuelle, typo sans serif serrée.',
        styleTag: 'Noir & or',
      },
    ],
  },
  {
    id: 'bar',
    label: 'Bar',
    theme: {
      fontDisplay: '"Cinzel", Georgia, serif',
      fontBody: '"Space Grotesk", system-ui, sans-serif',
      gradientFrom: '#0c1418',
      gradientVia: '#080e12',
      gradientTo: '#05090c',
      accent: '#7eb8a8',
      accentMuted: 'rgba(126, 184, 168, 0.35)',
      surface: 'rgba(240, 252, 248, 0.04)',
      border: 'rgba(126, 184, 168, 0.28)',
      textHeading: '#f0fcf8',
      textBody: 'rgba(240, 252, 248, 0.72)',
      glow: 'rgba(126, 184, 168, 0.1)',
    },
    projects: [
      {
        siteId: 'bar-basque',
        title: 'Bar Comptoir',
        description:
          'L’ancre du portfolio : storytelling vertical, bouchées au survol, cave — rouge profond, bois sombre, blanc cassé.',
        styleTag: 'Terroir & zinc',
      },
      {
        siteId: 'neon-shaker',
        title: "L'Apothicaire du Verre",
        description:
          'Mixologie feutrée en centre-ville : minimal centré, macro cocktails, cuir & marbre — reveal des titres, parallaxe douce, art du geste.',
        styleTag: 'Nuit & expertise',
      },
      {
        siteId: 'zinc-des-amis',
        title: 'Le Chai Moderne',
        description:
          'Vin & tapas : bento ultra-propre, survol des bouteilles avec notes, timeline de carte, terroir sélectionné — loft clair & chêne.',
        styleTag: 'Lumineux & raffiné',
      },
    ],
  },
  {
    id: 'tattoo',
    label: 'Perceur / Tattoo',
    theme: {
      fontDisplay: '"Oswald", system-ui, sans-serif',
      fontBody: '"Barlow", system-ui, sans-serif',
      gradientFrom: '#140c10',
      gradientVia: '#0e080c',
      gradientTo: '#080406',
      accent: '#e85d75',
      accentMuted: 'rgba(232, 93, 117, 0.4)',
      surface: 'rgba(255, 245, 248, 0.04)',
      border: 'rgba(232, 93, 117, 0.3)',
      textHeading: '#fff5f7',
      textBody: 'rgba(255, 245, 247, 0.75)',
      glow: 'rgba(232, 93, 117, 0.12)',
    },
    projects: [
      {
        siteId: 'atelier-1920',
        title: 'Atelier 1920',
        description:
          'Dark & traditionnel : bois, cuir, Playfair, galerie N&B, hand-poked — démo « L’Encre Noire ».',
        styleTag: 'Atelier heritage',
      },
      {
        siteId: 'neo-ink-studio',
        title: 'Neo-Ink Studio',
        description:
          'Brutaliste néon : pleine largeur, scroll, guest-spots, géométrie & réalisme — démo « Cyber-Skin ».',
        styleTag: 'Brutaliste néon',
      },
      {
        siteId: 'le-labo-de-peau',
        title: 'Le Labo de Peau',
        description:
          'Minimal médical : blanc, or, catalogue bijoux titane/or, protocole d’hygiène — démo « Pureté ».',
        styleTag: 'Clinique premium',
      },
    ],
  },
  {
    id: 'evenementiel',
    label: 'Événementiel',
    theme: {
      fontDisplay: '"Great Vibes", cursive',
      fontBody: '"Cormorant Garamond", Georgia, serif',
      gradientFrom: '#1a1216',
      gradientVia: '#120e12',
      gradientTo: '#0a080c',
      accent: '#e8b4bc',
      accentMuted: 'rgba(232, 180, 188, 0.38)',
      surface: 'rgba(255, 251, 252, 0.06)',
      border: 'rgba(232, 180, 188, 0.28)',
      textHeading: '#fff8fb',
      textBody: 'rgba(255, 248, 251, 0.75)',
      glow: 'rgba(232, 180, 188, 0.14)',
    },
    projects: [
      {
        siteId: 'maison-lumiere',
        title: 'Rêves & Unions',
        description:
          'Données trstnportfolio (event-wedding) : ambiance romantique pour mariages de rêve.',
        styleTag: 'Romantique couture',
      },
    ],
  },
  {
    id: 'photographie',
    label: 'Photographie',
    theme: {
      fontDisplay: '"Inter", system-ui, sans-serif',
      fontBody: '"Inter", system-ui, sans-serif',
      gradientFrom: '#141414',
      gradientVia: '#0e0e0e',
      gradientTo: '#080808',
      accent: '#e5e5e5',
      accentMuted: 'rgba(229, 229, 229, 0.25)',
      surface: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.12)',
      textHeading: '#fafafa',
      textBody: 'rgba(250, 250, 250, 0.72)',
      glow: 'rgba(255, 255, 255, 0.08)',
    },
    projects: [
      {
        siteId: 'studio-eclipse',
        title: 'Pure Gallery',
        description:
          'Données trstnportfolio (photo-minimalist) : minimalisme absolu, focus sur les images.',
        styleTag: 'Galerie minimaliste',
      },
    ],
  },
  {
    id: 'artisans-services',
    label: 'Artisans & services',
    theme: {
      fontDisplay: '"Cormorant Garamond", Georgia, serif',
      fontBody: '"Lora", Georgia, serif',
      gradientFrom: '#1a120c',
      gradientVia: '#120c08',
      gradientTo: '#0a0906',
      accent: '#d2691e',
      accentMuted: 'rgba(210, 105, 30, 0.35)',
      surface: 'rgba(250, 248, 243, 0.05)',
      border: 'rgba(139, 69, 19, 0.38)',
      textHeading: '#fff5eb',
      textBody: 'rgba(255, 245, 235, 0.75)',
      glow: 'rgba(210, 105, 30, 0.12)',
    },
    projects: [
      {
        siteId: 'artisan-grain',
        title: 'Ébénisterie Tradition',
        description:
          'Données trstnportfolio (service-woodworker) : textures bois, tons terreux, authenticité.',
        styleTag: 'Matériau & métier',
      },
    ],
  },
]

/** Types de projet — formulaire contact (dropdown). */
export const CONTACT_PROJECT_TYPES = [
  'Restaurant',
  'Bar',
  'Boutique',
  'Boulangerie',
  'Salon / Coiffure',
  'Hôtel',
  'Autre',
]

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]
}
