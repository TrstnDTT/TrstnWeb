/**
 * Contenu narratif unique pour chaque mini-site (18 expériences).
 * Clé `id` alignée sur `siteId` dans `constants.js`.
 * Identité visuelle & contenus métiers fusionnés depuis `siteIdentity.js` dans getSiteById().
 * Six projets calés sur l’ancien trstnportfolio : voir `data/legacyPortfolioSource.js`.
 */

import { BUSINESS_RICH } from './data/businessRich.js'
import { PORTFOLIO_TOKENS } from './data/portfolioTokens.js'
import { SITE_IDENTITIES } from './data/siteIdentity.js'

export { BUSINESS_RICH, PORTFOLIO_TOKENS, SITE_IDENTITIES }

export const SITES = [
  /* —— Restaurant —— */
  {
    id: 'table-constance',
    categoryId: 'restaurant',
    name: 'La Table Constance',
    tagline: 'Gastronomie contemporaine',
    hero: {
      headline: 'L’instant suspendu entre deux services.',
      subline:
        'Carte en quatre temps, cave vivante et cuisine ouverte sur la salle — le calme du beau geste.',
      cta: 'Réserver',
    },
    about: {
      title: 'Notre maison',
      paragraphs: [
        'La Table Constance porte le prénom de notre grand-mère cuisinière : exigence du produit, humilité du geste, générosité dans l’assiette. Chaque saison réécrit une page du menu.',
        'Nous travaillons des petits producteurs, des pêcheries du matin et des vignerons qui partagent notre goût pour l’authenticité. Ici, le silence compte autant que le plat.',
      ],
    },
    contact: {
      sectionTitle: 'Réservation & message',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Date souhaitée, allergies, occasion…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Nous trouver',
      street: '17 rue Constance',
      city: 'Paris',
      postalCode: '75018',
      country: 'France',
      hours: 'Mar–Sam · déjeuner & dîner (fermé dim. & lun.)',
      mapArea: 'Montmartre',
    },
    social: { instagramLabel: 'La Table Constance' },
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
  {
    id: 'carre-rouge',
    categoryId: 'restaurant',
    name: 'Le Carré Rouge',
    tagline: 'Smash & street',
    hero: {
      headline: 'Le goût qui dépasse le carré.',
      subline:
        'Burgers smash, frites triple cuisson et sauces maison — à emporter, en salle ou au drive.',
      cta: 'Commander',
    },
    about: {
      title: 'Notre énergie',
      paragraphs: [
        'Le Carré Rouge, c’est une équipe qui tourne vite et sourit fort. Pains du boulanger du coin, bœuf français haché minute, garnisons qui changent chaque semaine.',
        'Pas de chichis : recettes honnêtes, prix lisibles, chaîne du froid nickel. Idéal pour le déjeuner express ou le dîner entre amis.',
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
  /* —— Boulangerie —— */
  {
    id: 'pain-dore',
    categoryId: 'boulangerie',
    name: 'La Boulangerie Traditionnelle',
    tagline: 'Rustique & chaleureux',
    hero: {
      headline: 'La Boulangerie Traditionnelle',
      subline:
        'Depuis 1952, l’art du pain artisanal — pétri, fermenté et cuit chaque matin (BakeryClassic / bakery-classic).',
      cta: 'Découvrir nos produits',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'Fondée en 1952 par la famille Martin, La Boulangerie Traditionnelle perpétue depuis trois générations l’art du pain artisanal. Notre grand-père a transmis ses secrets de fabrication à ses enfants, qui les ont transmis à leur tour.',
        'Mission : offrir chaque jour le meilleur du pain artisanal, avec des ingrédients de qualité et des méthodes traditionnelles. Le pain est un lien entre les générations et un symbole de convivialité.',
      ],
    },
    contact: {
      sectionTitle: 'Nous écrire',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Commande spéciale…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '12 rue du Pain',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
      hours: 'Lun-Sam: 6h-20h, Dim: 7h-13h',
      mapArea: 'Centre',
    },
    social: { instagramLabel: 'Coulisses du fournil' },
  },
  {
    id: 'pain-passion',
    categoryId: 'boulangerie',
    name: 'Pain & Passion',
    tagline: 'Boulangerie moderne',
    hero: {
      headline: 'Où la tradition rencontre le design.',
      subline:
        'Fournil lumineux, contrastes nets et produits artisanaux — variante « bakery-modern » du meta-portfolio.',
      cta: 'Voir la carte',
    },
    about: {
      title: 'Notre vision',
      paragraphs: [
        'Pain & Passion est née d’une vision moderne de la boulangerie artisanale. Deux fondateurs combinent techniques traditionnelles et innovations pour des produits uniques.',
        'Mission : réinventer l’expérience boulangère dans un lieu accueillant — tradition et modernité dans le même pétrin.',
      ],
    },
    contact: {
      sectionTitle: 'Écrire',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Commande, allergies…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '45 avenue des Arts',
      city: 'Paris',
      postalCode: '75013',
      country: 'France',
      hours: 'Mar-Dim: 7h-19h',
      mapArea: '13e',
    },
    social: { instagramLabel: 'Pain & Passion' },
  },
  {
    id: 'artisan-grain',
    categoryId: 'artisans-services',
    name: 'Ébénisterie Tradition',
    tagline: 'L’art du bois noble',
    hero: {
      headline: 'Ébénisterie Tradition',
      subline: 'L’art du bois noble depuis trois générations — mobilier sur-mesure et restauration (trstnportfolio / ServiceWoodworker).',
      cta: 'Demander un devis',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'Ébénisterie Tradition a été créé par un maître artisan qui a appris le métier auprès de son grand-père. Après 20 ans d’expérience, il a décidé d’ouvrir son propre atelier pour transmettre son savoir-faire.',
        'Mission : créer des meubles et objets en bois d’exception, alliant savoir-faire traditionnel et besoins contemporains. Chaque pièce de bois a une âme ; nous révélons cette beauté avec passion et respect du matériau.',
      ],
    },
    contact: {
      sectionTitle: 'Contact atelier',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Projet, dimensions, essence souhaitée…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '25 rue des Artisans',
      city: 'Lyon',
      postalCode: '69001',
      country: 'France',
      hours: 'Mar-Sam: 9h-18h',
      mapArea: 'Presqu’île',
    },
    social: { instagramLabel: 'Réalisations atelier' },
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
    categoryId: 'photographie',
    name: 'Pure Gallery',
    tagline: 'Portfolio minimal',
    hero: {
      headline: 'Photography',
      subline:
        'Minimalisme absolu — les images parlent d’elles-mêmes (PhotoMinimalist / sitesInfo photo-minimalist).',
      cta: 'Prendre rendez-vous',
    },
    about: {
      title: 'La galerie',
      paragraphs: [
        'Pure Gallery a été créé par un photographe qui croyait que la beauté réside dans la simplicité. Frustré par les portfolios surchargés, il a créé un espace où les images parlent d’elles-mêmes.',
        'Mission : présenter la photographie dans sa forme la plus pure, sans distractions. Moins c’est plus : chaque image brille de sa propre lumière.',
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Type de projet',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Studio',
      street: 'Studio 5, rue de la Photographie',
      city: 'Paris',
      postalCode: '75003',
      country: 'France',
      hours: 'Sur rendez-vous',
      mapArea: 'Marais',
    },
    social: { instagramLabel: 'Séries & prints' },
  },
  {
    id: 'atelier-m',
    categoryId: 'salon',
    name: 'Urban Cuts',
    tagline: 'Barbier × street',
    hero: {
      headline: 'URBAN CUTS',
      subline: 'Real Men. Real Cuts. — barbier moderne (BarberUrban / barber-urban).',
      cta: 'Réserver',
    },
    about: {
      title: 'Notre vision',
      paragraphs: [
        'Urban Cuts a ouvert ses portes avec une vision claire : redéfinir l’expérience du barbier moderne. Un espace où tradition et street culture se rencontrent.',
        'Mission : offrir des coupes de qualité dans une ambiance décontractée et moderne. Chaque homme mérite une coupe qui reflète sa personnalité ; nous combinons techniques classiques et tendances contemporaines.',
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
      street: '125 Brooklyn Ave',
      city: 'New York',
      postalCode: '11211',
      country: 'USA',
      hours: 'Mon-Sun: 9AM-9PM',
      mapArea: 'Brooklyn',
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
  {
    id: 'au-rasoir',
    categoryId: 'salon',
    name: 'Au Rasoir',
    tagline: 'Barber shop minimal',
    hero: {
      headline: 'Précision au millimètre.',
      subline:
        'Chaise unique face au miroir, lames stériles à l’œil, réservation en ligne — barber shop épuré pour celles et ceux qui veulent le silence avant la coupe.',
      cta: 'Prendre rendez-vous',
    },
    about: {
      title: 'Notre promesse',
      paragraphs: [
        'Au Rasoir, pas de playlist imposée : casque optionnel, bruit blanc ou conversation courte. Nous avons conçu le salon comme un atelier : lumière zénithale, outils rangés, une coupe à la fois.',
        'Barbiers et coiffeuses partagent la même exigence : peignes désinfectés entre chaque client, finitions au rasoir sur demande, conseils d’entretien sans catalogue produit.',
      ],
    },
    contact: {
      sectionTitle: 'Écrire',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Créneau souhaité, coupe ou barbe…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Le salon',
      street: '8 rue du Faubourg Poissonnière',
      city: 'Paris',
      postalCode: '75010',
      country: 'France',
      hours: 'Mar–Sam · 10h–20h',
      mapArea: '10e',
    },
    social: { instagramLabel: 'Au Rasoir Paris' },
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
  {
    id: 'bar-basque',
    categoryId: 'bar',
    name: 'Bar Basque',
    tagline: 'Café, cuisine & bières',
    hero: {
      headline:
        'Café, Cuisine, Bière. Bar Basque — Un lieu de rencontres humaines.',
      subline: '',
      cta: 'Réserver une table',
    },
    about: {
      title: 'L’esprit du lieu',
      paragraphs: [
        'Bienvenue au Bar Basque, où le savoir-faire artisanal de la cuisine rencontre la convivialité d’un café de quartier. Depuis 2018, nous priorisons un accueil soigné et des produits locaux. Que ce soit pour un expresso matinal, un déjeuner d’affaires ou une soirée bières entre amis, nous avons pensé à chaque détail pour votre confort.',
      ],
    },
    contact: {
      sectionTitle: 'Réservation',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      submitLabel: 'Réserver',
    },
    location: {
      sectionTitle: 'Nous trouver',
      street: '1 rue d’Espagne',
      city: 'Bayonne',
      postalCode: '64100',
      country: 'France',
      hours: 'Lun–Dim · 8h00 – 1h00',
      mapArea: 'Centre',
    },
    social: { instagramLabel: 'Bar Basque' },
  },
  /* —— Tattoo / piercing —— */
  {
    id: 'aiguille-noire',
    categoryId: 'tattoo',
    name: 'INK & IRON',
    tagline: 'Piercing & tattoo',
    hero: {
      headline: 'Une équipe stable, un shop calme, une hygiène stricte.',
      subline:
        'Ici on prend le temps : conseils, placement, composition bijoux, et suivi aftercare — résultat propre et durable (TattooNoir / tattoo-noir).',
      cta: 'Soumettre un projet',
    },
    about: {
      title: 'Le studio',
      paragraphs: [
        'INK & IRON est né d’une obsession : un studio où l’esthétique est forte, mais où l’hygiène et la pédagogie sont encore plus irréprochables. Après des années en guest spots, l’équipe a posé ses machines à deux pas de République.',
        'Mission : proposer tatouages et piercings de haute qualité dans un cadre sécurisé, avec une vraie direction artistique. Un bon tattoo, c’est un design qui vous ressemble, une exécution propre, et un studio qui rassure du brief à la cicatrisation.',
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
      street: '18 rue du Trait',
      city: 'Paris',
      postalCode: '75011',
      country: 'France',
      hours: 'Mar-Sam: 11h-20h • Piercing sans RDV: 14h-18h',
      mapArea: 'République',
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
  /* —— Événementiel (legacy event-wedding / sitesInfo) —— */
  {
    id: 'maison-lumiere',
    categoryId: 'evenementiel',
    name: 'Rêves & Unions',
    tagline: 'Organisation de mariages',
    hero: {
      headline: 'Rêves & Unions',
      subline:
        'Créer des mariages magiques et mémorables qui reflètent l’amour de chaque couple (EventWedding / event-wedding).',
      cta: 'Demander un rendez-vous',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'Rêves & Unions a été créé par deux sœurs passionnées d’événements. Après avoir organisé leurs propres mariages, elles ont décidé de transformer leur passion en métier pour aider d’autres couples à réaliser leurs rêves.',
        'Mission : créer des mariages magiques et mémorables qui reflètent parfaitement la personnalité et l’amour de chaque couple. Chaque couple mérite un mariage unique ; notre équipe travaille sans relâche pour transformer vos rêves en réalité.',
      ],
    },
    contact: {
      sectionTitle: 'Parler de votre projet',
      nameLabel: 'Nom complet',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Date souhaitée, nombre d’invités…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Agence',
      street: '15 avenue des Mariages',
      city: 'Paris',
      postalCode: '75016',
      country: 'France',
      hours: 'Lun-Ven: 9h-18h, Sam: 10h-16h',
      mapArea: '16e',
    },
    social: { instagramLabel: 'Inspirations mariage' },
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
