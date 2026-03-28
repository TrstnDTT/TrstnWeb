/**
 * Contenu narratif unique pour chaque mini-site (15 expériences).
 * Clé `id` alignée sur `siteId` dans `constants.js`.
 * Identité visuelle & contenus métiers fusionnés depuis `siteIdentity.js` dans getSiteById().
 */

import { BUSINESS_RICH } from './data/businessRich.js'
import { PORTFOLIO_TOKENS } from './data/portfolioTokens.js'
import { SITE_IDENTITIES } from './data/siteIdentity.js'

export { BUSINESS_RICH, PORTFOLIO_TOKENS, SITE_IDENTITIES }

export const SITES = [
  /* —— Restaurant —— */
  {
    id: 'maison-lumiere',
    categoryId: 'restaurant',
    name: 'Maison Lumière',
    tagline: 'Gastronomie contemporaine',
    hero: {
      headline: 'L’émotion d’une table qui compte.',
      subline:
        'Carte saisonnière, cave à vins d’exception et service attentif au cœur du Marais.',
      cta: 'Réserver une table',
    },
    about: {
      title: 'Notre maison',
      paragraphs: [
        'Maison Lumière est née d’un duo : un chef formé aux grandes maisons et une sommelière passionnée par les vins vivants. Chaque service raconte le terroir français avec une touche d’audace.',
        'Nous travaillons des producteurs choisis pour leur exigence : légumes de petite culture, poissons de ligne, viandes élevées avec soin. La brigade sculpte des assiettes précises, jamais ostentatoires.',
      ],
    },
    contact: {
      sectionTitle: 'Écrire à la maison',
      nameLabel: 'Nom complet',
      emailLabel: 'Adresse e-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Occasion, allergies, préférences',
      submitLabel: 'Envoyer la demande',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '14 rue des Archives',
      city: 'Paris',
      postalCode: '75004',
      country: 'France',
      hours: 'Mardi au samedi · 19h00 – 23h00 · Fermé dimanche et lundi',
      mapArea: 'Le Marais',
    },
    social: { instagramLabel: 'Suivre sur Instagram' },
  },
  {
    id: 'carre-rouge',
    categoryId: 'restaurant',
    name: 'Le Carré Rouge',
    tagline: 'Street food assumée',
    hero: {
      headline: 'Le goût qui dépasse le carré.',
      subline:
        'Burgers smash, frites triple cuisson et sauces maison — à emporter ou en salle.',
      cta: 'Voir le menu du jour',
    },
    about: {
      title: 'Notre énergie',
      paragraphs: [
        'Le Carré Rouge, c’est une équipe qui tourne vite et sourit fort. On choisit des pains locaux, du bœuf français haché minute et des garnisons qui changent chaque semaine.',
        'Pas de chichis : des recettes honnêtes, des prix lisibles, et une chaîne du froid irréprochable. Idéal pour le déjeuner express ou le dîner entre amis.',
      ],
    },
    contact: {
      sectionTitle: 'Une question ?',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Commande groupe, allergènes…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '88 cours Gambetta',
      city: 'Lyon',
      postalCode: '69007',
      country: 'France',
      hours: 'Tous les jours · 11h30 – 22h30',
      mapArea: 'Gerland',
    },
    social: { instagramLabel: 'Insta & promos' },
  },
  {
    id: 'atelier-sept',
    categoryId: 'restaurant',
    name: 'Atelier Sept',
    tagline: 'Bistro de quartier',
    hero: {
      headline: 'Sept jours sur sept, l’ardoise change.',
      subline:
        'Cuisine de marché, vins au verre et zinc convivial près du Vieux-Port.',
      cta: 'Réserver',
    },
    about: {
      title: 'L’atelier',
      paragraphs: [
        'Sept comme les jours de la semaine où l’on retrouve une ardoise courte, sincère, ancrée dans le Sud. Poissons du matin, herbes du marché, desserts familiaux.',
        'Nous aimons les tables rapprochées, le bruit des verres et les habitués qui demandent « comme d’habitude ». Bienvenue chez vous, ailleurs.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '3 place aux Huiles',
      city: 'Marseille',
      postalCode: '13001',
      country: 'France',
      hours: 'Lundi au dimanche · 12h00 – 14h30 · 19h00 – 23h00',
      mapArea: 'Vieux-Port',
    },
    social: { instagramLabel: 'Ardoise du jour' },
  },
  /* —— Boulangerie —— */
  {
    id: 'pain-dore',
    categoryId: 'boulangerie',
    name: 'Le Pain Doré',
    tagline: 'Fournil & levain',
    hero: {
      headline: 'Le levain doré au réveil de la ville.',
      subline:
        'Farines anciennes, fermentation lente et viennoiseries feuilletées chaque matin.',
      cta: 'Découvrir la boutique',
    },
    about: {
      title: 'Notre farine & nos mains',
      paragraphs: [
        'Depuis trois générations, nous pétrissons lentement : eau de source, levain du chef, repos de nuit pour développer les arômes. Baguettes, campagnes et pains spéciaux au gré des saisons.',
        'La viennoiserie est le fruit d’un beurre AOP et d’un tourage patient. Chaque croissant raconte une couche de plus qu’hier.',
      ],
    },
    contact: {
      sectionTitle: 'Nous écrire',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Commande spéciale, mariage…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '21 rue du Commerce',
      city: 'Nantes',
      postalCode: '44000',
      country: 'France',
      hours: 'Mardi au dimanche · 7h00 – 20h00',
      mapArea: 'Centre-ville',
    },
    social: { instagramLabel: 'Coulisses du fournil' },
  },
  {
    id: 'artisan-grain',
    categoryId: 'boulangerie',
    name: 'Artisan du Grain',
    tagline: 'Bio & traçabilité',
    hero: {
      headline: 'Du grain à la mie, sans détour.',
      subline:
        'Boulangerie bio certifiée : farines françaises, meuniers partenaires et pâtisseries végétaliennes.',
      cta: 'Commander en ligne',
    },
    about: {
      title: 'Notre engagement',
      paragraphs: [
        'Chaque sac de farine est traçable : variété de blé, moulin, date de mouture. Nous privilégions l’agriculture biologique et les circuits courts autour de Toulouse.',
        'Nos équipes forment les apprentis au respect du vivant : moins de sucre ajouté, plus de goût naturel. Le pain est un aliment, pas un produit marketing.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '5 allée du Jardin des Plantes',
      city: 'Toulouse',
      postalCode: '31000',
      country: 'France',
      hours: 'Mardi au samedi · 7h30 – 19h30',
      mapArea: 'Saint-Cyprien',
    },
    social: { instagramLabel: 'Bio & nouveautés' },
  },
  {
    id: 'four-chocolat',
    categoryId: 'boulangerie',
    name: 'Four & Chocolat',
    tagline: 'Pâtisserie & chocolat',
    hero: {
      headline: 'Quand le four rencontre le grand cru.',
      subline:
        'Entremets, chocolats bean-to-bar et ateliers dégustation dans notre laboratoire vitré.',
      cta: 'Réserver un atelier',
    },
    about: {
      title: 'Maison',
      paragraphs: [
        'Four & Chocolat unit un boulanger-pâtissier Meilleur Ouvrier de France et une chocolatière primée. Nous sélectionnons des fèves d’Équateur, Madagascar et Vietnam pour des tablettes aux profils nets.',
        'Les gâteaux de cérémonie mélangent textures aériennes et décors floraux comestibles. Chaque création est un dialogue entre technique et émotion.',
      ],
    },
    contact: {
      sectionTitle: 'Projets sur mesure',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Date d’événement, nombre de parts…',
      submitLabel: 'Demander un devis',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '40 avenue Victor Hugo',
      city: 'Bordeaux',
      postalCode: '33000',
      country: 'France',
      hours: 'Mercredi au dimanche · 9h00 – 19h30',
      mapArea: 'Chartrons',
    },
    social: { instagramLabel: 'Créations du labo' },
  },
  /* —— Salon —— */
  {
    id: 'studio-eclipse',
    categoryId: 'salon',
    name: 'Studio Éclipse',
    tagline: 'Coiffure & image',
    hero: {
      headline: 'La lumière sur votre silhouette.',
      subline:
        'Coupe architecturée, coloration sur-mesure et conseil image dans un espace minimal.',
      cta: 'Prendre rendez-vous',
    },
    about: {
      title: 'La maison',
      paragraphs: [
        'Studio Éclipse accueille une clientèle exigeante dans un loft blanc, baigné de lumière zénithale. Nos stylistes suivent les Fashion Weeks et adaptent les tendances à votre morphologie.',
        'Nous utilisons des colorations douces, des soins capillaires haut de gamme et un diagnostic photo avant chaque transformation.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Souhait de coupe / couleur',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '9 rue du Faubourg Saint-Honoré',
      city: 'Paris',
      postalCode: '75008',
      country: 'France',
      hours: 'Mardi au samedi · 9h00 – 20h00',
      mapArea: 'Faubourg',
    },
    social: { instagramLabel: 'Looks & backstage' },
  },
  {
    id: 'atelier-m',
    categoryId: 'salon',
    name: 'L’Atelier M',
    tagline: 'Salon mixte premium',
    hero: {
      headline: 'M comme métamorphose.',
      subline:
        'Barbier, coiffure femme-homme et soins cuir chevelu dans un cadre design au centre de Lille.',
      cta: 'Réserver',
    },
    about: {
      title: 'Philosophie',
      paragraphs: [
        'L’Atelier M réunit des experts capillaires et barbiers formés aux dernières techniques. Nous privilégions le diagnostic long, la coupe précise et les produits sans compromis.',
        'Espace non genré, musique sélectionnée, café offert : chaque visite est un rituel de confiance.',
      ],
    },
    contact: {
      sectionTitle: 'Écrire à l’Atelier',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Prestation souhaitée',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '12 rue de la Monnaie',
      city: 'Lille',
      postalCode: '59800',
      country: 'France',
      hours: 'Mardi au samedi · 10h00 – 19h00',
      mapArea: 'Vieux-Lille',
    },
    social: { instagramLabel: 'Portfolio coupes' },
  },
  {
    id: 'cheveux-co',
    categoryId: 'salon',
    name: 'Cheveux & Co',
    tagline: 'Salon familial',
    hero: {
      headline: 'Trois générations, une même passion.',
      subline:
        'Accueil chaleureux, tarifs transparents et conseils entre deux coupes pour toute la famille.',
      cta: 'Appeler le salon',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'Cheveux & Co, c’est d’abord une maison où l’on prend le temps d’écouter. Enfants, parents et grands-parents trouvent une oreille attentive et des coupes adaptées au quotidien.',
        'Nous formons nos jeunes coiffeurs au respect du cheveu et partageons des astuces simples pour prolonger la couleur entre deux visites.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '3 place de la République',
      city: 'Rennes',
      postalCode: '35000',
      country: 'France',
      hours: 'Mardi au samedi · 9h30 – 18h30',
      mapArea: 'République',
    },
    social: { instagramLabel: 'Actualités salon' },
  },
  /* —— Bar —— */
  {
    id: 'velvet-room',
    categoryId: 'bar',
    name: 'Velvet Room',
    tagline: 'Cocktails & live',
    hero: {
      headline: 'La nuit a un velours à elle seule.',
      subline:
        'Signatures alcoolisées, programmation jazz et cabines privées derrière rideau.',
      cta: 'Réserver une table',
    },
    about: {
      title: 'L’expérience',
      paragraphs: [
        'Velvet Room mélange l’élégance d’un speakeasy et l’énergie d’une scène live. Barmen primés, glaçons sculptés, playlist soul jusqu’à l’aube.',
        'Nous travaillons des spiritueux français, des bitters maison et des sirops infusés aux épices rares. Chaque cocktail est servi dans un verre choisi pour sa texture.',
      ],
    },
    contact: {
      sectionTitle: 'Privatisation & VIP',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Date, nombre de personnes…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '2 impasse des Lumières',
      city: 'Paris',
      postalCode: '75011',
      country: 'France',
      hours: 'Mercredi au samedi · 20h00 – 4h00',
      mapArea: 'Oberkampf',
    },
    social: { instagramLabel: 'Line-up & cocktails' },
  },
  {
    id: 'zinc-bleu',
    categoryId: 'bar',
    name: 'Le Zinc Bleu',
    tagline: 'Bières & DJ sets',
    hero: {
      headline: 'Bleu électrique, mousse dorée.',
      subline:
        'Vingt tireuses craft, DJ résidents et terrasse chauffée face au canal.',
      cta: 'Voir la carte',
    },
    about: {
      title: 'Esprit Zinc',
      paragraphs: [
        'Le Zinc Bleu est le QG des amateurs de houblon : IPAs américaines, lambics belges, stouts impériaux et collaborations françaises en rotation hebdomadaire.',
        'Ambiance club sans snobisme : son système immersif, néons bleus, staff passionné. Happy hour étudié pour découvrir sans se ruiner.',
      ],
    },
    contact: {
      sectionTitle: 'Événements',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Privatisation, anniversaire…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: 'Quai de la Loire 45',
      city: 'Paris',
      postalCode: '75019',
      country: 'France',
      hours: 'Tous les jours · 17h00 – 2h00',
      mapArea: 'Canal',
    },
    social: { instagramLabel: 'Soirées & tap takeover' },
  },
  {
    id: 'nuit-jour',
    categoryId: 'bar',
    name: 'Nuit & Jour',
    tagline: 'Brasserie-bar',
    hero: {
      headline: 'Du matin au soir, une même exigence.',
      subline:
        'Brunch lumineux, tapas du midi, cocktails au coucher du soleil sur le port de Nice.',
      cta: 'Choisir un moment',
    },
    about: {
      title: 'Concept',
      paragraphs: [
        'Nuit & Jour assume la double vie d’un lieu : terrasse ensoleillée le jour, bar à cocktails aromatiques la nuit. Cuisine méditerranéenne, vins locaux, spiritueux maison.',
        'Nous aimons les familles le week-end et les noctambules en semaine : deux cartes, une équipe soudée, vue sur la mer.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Réservation groupe',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: 'Promenade des Anglais 100',
      city: 'Nice',
      postalCode: '06000',
      country: 'France',
      hours: 'Tous les jours · 8h00 – 1h00',
      mapArea: 'Promenade',
    },
    social: { instagramLabel: 'Brunch & sunsets' },
  },
  /* —— Tattoo / piercing —— */
  {
    id: 'aiguille-noire',
    categoryId: 'tattoo',
    name: 'Aiguille Noire',
    tagline: 'Tattoo studio',
    hero: {
      headline: 'Peau. Encre. Précision.',
      subline:
        'Studio hybride : réalisme, néo-traditionnel et dotwork par des artistes invités.',
      cta: 'Demander un flash',
    },
    about: {
      title: 'Règles & hygiène',
      paragraphs: [
        'Aiguille Noire applique un protocole hospitalier : aiguilles stériles à usage unique, salles ventilées, pigments conformes UE. Chaque projet est dessiné sur mesure après entretien.',
        'Nous accueillons des guest artists internationaux et proposons une boutique de soins post-tatouage sélectionnés par nos équipes.',
      ],
    },
    contact: {
      sectionTitle: 'Projet sur mesure',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Style, zone corporelle, références…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '7 rue des Épices',
      city: 'Strasbourg',
      postalCode: '67000',
      country: 'France',
      hours: 'Sur rendez-vous · Mardi au samedi',
      mapArea: 'Centre',
    },
    social: { instagramLabel: 'Flash & guests' },
  },
  {
    id: 'lobe-aiguille',
    categoryId: 'tattoo',
    name: 'Lobe & Aiguille',
    tagline: 'Piercing & bijoux',
    hero: {
      headline: 'Percer. Choisir. Assumer.',
      subline:
        'Piercing médicalisé, bijoux titane implant-grade et suivi post-perçage inclus.',
      cta: 'Prendre rendez-vous',
    },
    about: {
      title: 'Approche',
      paragraphs: [
        'Lobe & Aiguille place l’anatomie au centre : angle, matériau, temps de cicatrisation expliqués avant toute intervention. Pas de piercing express sans consentement éclairé.',
        'Notre bijouterie propose des pièces en titane ASTM F-136, niobium et or 14k pour les lobes sensibles.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Zone souhaitée',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '22 cours Lafayette',
      city: 'Lyon',
      postalCode: '69003',
      country: 'France',
      hours: 'Mardi au samedi · 11h00 – 19h00',
      mapArea: 'Part-Dieu',
    },
    social: { instagramLabel: 'Bijoux & soins' },
  },
  {
    id: 'peau-encre',
    categoryId: 'tattoo',
    name: 'Peau & Encre',
    tagline: 'Collectif tattoo & piercing',
    hero: {
      headline: 'UN COLLECTIF. UNE SCÈNE.',
      subline:
        'Galerie, boutique d’art et ateliers tattoo / piercing sous le même toit à Montpellier.',
      cta: 'Voir les artistes',
    },
    about: {
      title: 'Collectif',
      paragraphs: [
        'Peau & Encre réunit des tatoueurs aux styles variés et une équipe piercing dédiée. Le rez-de-chaussée accueille expositions et pop-up créateurs.',
        'Nous organisons des conventions locales et des masterclass pour faire vivre la scène régionale.',
      ],
    },
    contact: {
      sectionTitle: 'Booking',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Artiste souhaité, idée de motif…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '11 rue de l’Université',
      city: 'Montpellier',
      postalCode: '34000',
      country: 'France',
      hours: 'Mercredi au dimanche · 12h00 – 20h00',
      mapArea: 'Écusson',
    },
    social: { instagramLabel: 'Événements & guests' },
  },
]

export function getSiteById(id) {
  const base = SITES.find((s) => s.id === id) ?? null
  if (!base) return null
  const identity = SITE_IDENTITIES[id]
  const business = BUSINESS_RICH[id] ?? {}
  const portfolio = PORTFOLIO_TOKENS[id] ?? {}
  if (!identity) {
    return {
      ...base,
      ...business,
      portfolio,
      primaryColor: '#1a1a1a',
      secondaryColor: '#888',
      textColor: '#fafafa',
      surfaceColor: '#2a2a2a',
      fontFamilyHeading: 'Georgia, serif',
      fontFamilyBody: 'system-ui, sans-serif',
      layoutStructure: 'menu-list',
      previewKey: 'minimalist',
      trstnSignature: 'bottom-right-caps',
      menu: {
        sectionTitle: 'Menu',
        items: [{ name: 'Plat du jour', price: '—', note: '—' }],
      },
    }
  }
  return { ...base, ...identity, ...business, portfolio }
}
