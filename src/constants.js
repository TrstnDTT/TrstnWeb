/**
 * Données du portfolio : catégories sectorielles et projets (textes en français).
 * Chaque catégorie définit une identité visuelle (variables CSS) pour la zone principale.
 *
 * Chaque projet : `siteId` → fusion dans `getSiteById()` (`siteIdentity.js` : couleurs, typo, layoutStructure).
 */

export const SITE = {
  title: 'TrstnWeb',
  subtitle: 'Portfolio — identités UI/UX par secteur',
  /** E-mail affiché pour « Me contacter » sur l’accueil (glass). */
  contactEmail: 'decoberttristan@gmail.com',
  footer:
    'Chaque vignette ouvre une expérience plein écran : même exigence que sur mes livrables client — hiérarchie, matière, mouvement.',
  /** Page d’accueil (/) — hero + accroche, aligné sur l’ancien « Meta Portfolio ». */
  home: {
    heroEyebrow: 'Portfolio',
    heroTitle: 'Sites vitrines & identités UI/UX',
    heroLead:
      'Dix-huit mini-sites : trois restaurants et trois bars en expériences dédiées (speakeasy, craft néon, brasserie côte). Boulangeries et salons / barber complètent le panorama.',
    ctaProjects: 'Voir les projets',
  },
  /** Texte « À propos » — auteur solo (remplace l’ancien collectif étudiant). */
  about: {
    title: 'À propos',
    paragraphs: [
      'Je conçois et développe des interfaces web (React, UI soignée) orientées identité de marque et conversion. Six expériences sont alignées sur le projet local trstnportfolio (sitesConfig / sitesInfo) ; les autres suivent la même exigence (parcours complet, avis, FAQ, contact).',
      'Tout est réalisé en solo : design, prototypage, intégration et animations. Ouvrez un projet pour parcourir l’expérience plein écran ; chaque univers reste distinct, avec la même exigence de finition.',
    ],
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
      },
      {
        siteId: 'atelier-sept',
        title: 'Atelier Sept',
        description:
          'Expérience dédiée : fond papier, en-tête centré, histoire en carte puis ardoise — tout le zinc sans la grille ProjectView.',
      },
      {
        siteId: 'carre-rouge',
        title: 'Le Carré Rouge',
        description:
          'Expérience dédiée : bandeau défilant, header comptoir, barre d’action fixe en bas — rythme appli de commande.',
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
        title: 'La Boulangerie Traditionnelle',
        description:
          'Ancien portfolio — bakery-classic : rustique, tons beige / doré, template BakeryClassic.',
      },
      {
        siteId: 'pain-passion',
        title: 'Pain & Passion',
        description:
          'Ancien portfolio — bakery-modern : contraste chaud / blanc, Inter & Playfair, boulangerie actuelle.',
      },
      {
        siteId: 'four-chocolat',
        title: 'Four & Chocolat',
        description:
          'Laboratoire chocolat : Playfair, vert profond et barres or comme une couverture magazine.',
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
          'Ancien portfolio — barber-urban : barber shop street, noir / rouge / blanc, template BarberUrban.',
      },
      {
        siteId: 'cheveux-co',
        title: 'Cheveux & Co',
        description:
          'Salon de coiffure familial : Cormorant, beige pierre, tarifs enfants / adultes lisibles.',
      },
      {
        siteId: 'au-rasoir',
        title: 'Au Rasoir',
        description:
          'Barber shop minimal : noir & or fin, file d’attente virtuelle, typo sans serif serrée.',
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
        siteId: 'velvet-room',
        title: 'Velvet Room',
        description:
          'Expérience speakeasy : hero cinéma, rail latéral cuivre, galerie bandeau — jazz & velours.',
      },
      {
        siteId: 'zinc-bleu',
        title: 'Le Zinc Bleu',
        description:
          'Expérience craft : néon cyan, marquee, grille de fûts animée, barre fixe — énergie canal.',
      },
      {
        siteId: 'nuit-jour',
        title: 'Nuit & Jour',
        description:
          'Expérience brasserie : split jour/nuit, sable & mer, cartes en cartouches — Nice sans néon.',
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
        siteId: 'aiguille-noire',
        title: 'INK & IRON',
        description:
          'Tattoo sobre : studio clair, Oswald + serif, hygiène lisible — esprit INK & IRON.',
      },
      {
        siteId: 'lobe-aiguille',
        title: 'Lobe & Aiguille',
        description:
          'Piercing médicalisé : bento gris / corail, titane et grilles tarifaires sans bruit.',
      },
      {
        siteId: 'peau-encre',
        title: 'Peau & Encre',
        description:
          'Collectif : Bebas en bannière, rouge profond et blocs qui se croisent comme une affiche.',
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
      },
    ],
  },
]

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]
}
