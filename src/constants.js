/**
 * Données du portfolio : catégories sectorielles et projets (textes en français).
 * Chaque catégorie définit une identité visuelle (variables CSS) pour la zone principale.
 *
 * Chaque projet : `siteId` → fusion dans `getSiteById()` (`siteIdentity.js` : couleurs, typo, layoutStructure, previewKey).
 */

export const SITE = {
  title: 'TrstnWeb',
  subtitle: 'Portfolio — identités UI/UX par secteur',
  footer:
    'Chaque vignette ouvre une expérience plein écran : même exigence que sur mes livrables client — hiérarchie, matière, mouvement.',
  /** Page d’accueil (/) — hero + accroche, aligné sur l’ancien « Meta Portfolio ». */
  home: {
    heroEyebrow: 'Portfolio',
    heroTitle: 'Sites vitrines & identités UI/UX',
    heroLead:
      'Découvrez quinze designs différents — restaurants, boulangeries, salons, bars et studios — avec des identités visuelles uniques et des parcours complets (menu, avis, FAQ, contact).',
    ctaProjects: 'Voir les projets',
  },
  /** Texte « À propos » — auteur solo (remplace l’ancien collectif étudiant). */
  about: {
    title: 'À propos',
    paragraphs: [
      'Je conçois et développe des interfaces web (React, UI soignée) orientées identité de marque et conversion. Ce portfolio regroupe 15 mini-sites « vitrines » — restaurants, boulangeries, salons, bars et studios — chacun avec une charte graphique et un contenu crédible (carte, avis, FAQ, contact).',
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
        siteId: 'maison-lumiere',
        title: 'Maison Lumière',
        description:
          'Table gastronomique : silence visuel, serif de caractère et hiérarchie menu / vins digne d’une carte imprimée.',
      },
      {
        siteId: 'carre-rouge',
        title: 'Le Carré Rouge',
        description:
          'Smash & street : grille bento saturée, CTA qui claquent et rythme de commande express.',
      },
      {
        siteId: 'atelier-sept',
        title: 'Atelier Sept',
        description:
          'Bistro du Sud : ardoise courte, bois profond et typo chaude comme une enseigne peinte à la main.',
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
        title: 'Le Pain Doré',
        description:
          'Fournil artisanal : Lora & Quicksand, tons crème / terracotta et esquisses levain comme un carnet de chef.',
      },
      {
        siteId: 'artisan-grain',
        title: 'Artisan du Grain',
        description:
          'Boulangerie bio : modules au kilo, traçabilité moulin et surfaces pierre / son — pas de vert marketing.',
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
    label: 'Salon de coiffure',
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
        siteId: 'studio-eclipse',
        title: 'Studio Éclipse',
        description:
          'Salon « loft » : Italiana + blanc cassé, lookbook et blocs photo façon shooting.',
      },
      {
        siteId: 'atelier-m',
        title: 'L’Atelier M',
        description:
          'Barbier × coiffure : Montserrat serré, grille tarifaire noire / or et cases façon app premium.',
      },
      {
        siteId: 'cheveux-co',
        title: 'Cheveux & Co',
        description:
          'Salon familial : Cormorant XXL, beige pierre et hiérarchie « enfants / adultes » lisible.',
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
          'Cocktail bar : bleu nuit / cuivre, Cinzel et silence typographique — pas une enseigne criarde.',
      },
      {
        siteId: 'zinc-bleu',
        title: 'Le Zinc Bleu',
        description:
          'Craft & DJ : grille néon fuchsia / cyan, Syne condensée et cases qui pulsent.',
      },
      {
        siteId: 'nuit-jour',
        title: 'Nuit & Jour',
        description:
          'Brasserie méditerranéenne : jour café / soir tapas, même grille, deux temporalités.',
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
        title: 'Aiguille Noire',
        description:
          'Studio tattoo : Oswald + mono, bleu nuit en accent et flashs présentés comme une galerie.',
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
]

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]
}
