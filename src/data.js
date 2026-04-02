/**
 * Contenu narratif unique pour chaque mini-site (19 expériences).
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
  {
    id: 'influences',
    categoryId: 'restaurant',
    name: 'Influences',
    tagline: 'Bistronomique — Bayonne',
    hero: {
      headline: 'Restaurant bistronomique au cœur de Bayonne.',
      subline:
        'Un cadre intimiste et feutré, à deux pas du centre : assez à l’écart pour la quiétude. Faustine et Quentin ont façonné la maison — 24 couverts, pierre bayonnaise et touche contemporaine.',
      cta: 'Réserver',
    },
    about: {
      title: 'Nos influences',
      paragraphs: [
        '« On ne peut faire de cuisine si l’on n’aime pas les gens. » En salle, Faustine partage sa passion pour le vin — une matière vivante qu’elle adapte aux saisons et aux plats, avec des bouteilles choisies pour leur cohérence avec la cuisine.',
        'En cuisine, Quentin mélange ses voyages et le respect de la nature : la carte suit les producteurs locaux ; chaque plat trouve sa sauce — patience, justesse, relief. « En mélangeant les bonnes influences, on obtient l’alchimie. »',
        'Ici, l’engagement client ne se décrète pas : il se vit — écoute, conseil, fidélité au fil des repas. Même en démo portfolio, l’intention est la même : mettre l’humain au centre du parcours.',
      ],
    },
    contact: {
      sectionTitle: 'Réservation',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Date, nombre de couverts, allergies…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Nous trouver',
      street: '19 rue Vieille Boucherie',
      city: 'Bayonne',
      postalCode: '64100',
      country: 'France',
      hours: 'Soir : mar.–sam. · Midi : mer.–sam. · Fermé dim. & lun. (détail sur restaurant-influences.fr)',
      mapArea: 'Petit Bayonne',
      phone: '05 59 01 75 04',
    },
    social: { instagramLabel: 'Influences Bayonne' },
  },
  /* —— Boulangerie —— */
  {
    id: 'pain-dore',
    categoryId: 'boulangerie',
    name: 'Le Manifeste du Grain',
    tagline: 'Éditorial — Paris',
    hero: {
      headline: 'Nous refusons le pain sans histoire.',
      subline:
        'Ni photo produit ni slogan creux : seulement le mot, le geste, la température du four et l’humidité du matin — journal de bord inclus.',
      cta: 'Lecture',
    },
    about: {
      title: 'Position',
      paragraphs: [
        'Le grain n’est pas une matière neutre : il porte les contrats de culture, les silos, les prix planchers. Ici, on écrit pour déplacer la ligne — une baguette à la fois.',
        'Pointage, autolyse, grigne : le vocabulaire du métier comme preuve d’exigence contre l’uniformisation du goût.',
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
      street: '22 rue Béranger',
      city: 'Paris',
      postalCode: '75003',
      country: 'France',
      hours: 'Sur rendez-vous — lectures le samedi',
      mapArea: '3e',
    },
    social: { instagramLabel: 'Manifeste du grain' },
  },
  {
    id: 'pain-passion',
    categoryId: 'boulangerie',
    name: "L'Atelier Sucré",
    tagline: 'Pâtisserie boutique — Bordeaux',
    hero: {
      headline: 'Saison, précision, silence.',
      subline:
        'Entremets comme bijoux : vanille tracée, citron en équilibre, glaçage mat — le goût avant le spectacle.',
      cta: 'Réserver une création',
    },
    about: {
      title: 'Philosophie',
      paragraphs: [
        'Nous ne vendons pas du sucre : nous calibrons des contrastes — acidité du yuzu, fondant d’un crémeux, craquant d’un sablé cuit bas.',
        'Chaque vitrine est une collection limitée : quand la saison tourne, la recette s’efface — pour revenir quand les fruits sont dignes d’elle.',
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
      street: '40 cours de l’Intendance',
      city: 'Bordeaux',
      postalCode: '33000',
      country: 'France',
      hours: 'Mer–Dim · 9h30 – 19h30',
      mapArea: 'Chartrons',
    },
    social: { instagramLabel: 'Atelier Sucré Bordeaux' },
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
    name: 'La Boulangerie Traditionnelle',
    tagline: 'Levain & terroir — Paris 11e',
    hero: {
      headline: 'L’art du pain, chaque matin.',
      subline:
        'Depuis 1952, l’art du pain artisanal — pétri, fermenté et cuit au four à pierre. Farines bio, levain naturel, gestes transmis de génération en génération.',
      cta: 'Découvrir nos produits',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'Depuis trois générations, notre famille perpétue la tradition du pain fait à la main. Chaque matin, nos boulangers pétrissent avec passion des recettes ancestrales pour offrir le meilleur du pain artisanal.',
        'Nous utilisons uniquement des farines biologiques de qualité supérieure, du levain naturel et des ingrédients soigneusement sélectionnés — autolyse respectée, alvéolage surveillé, grigne ouverte comme il faut.',
      ],
    },
    contact: {
      sectionTitle: 'Nous écrire',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Commande groupée, allergies…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '18 rue de la Roquette',
      city: 'Paris',
      postalCode: '75011',
      country: 'France',
      hours: 'Mar–Sam : 6h30 – 20h · Dim : 7h – 13h30',
      mapArea: '11e',
    },
    social: { instagramLabel: 'Boulangerie Traditionnelle' },
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
      subline:
        'Des coupes qui assument — barbier urbain, street culture et techniques de salon (template BarberUrban).',
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
      street: '42 rue Oberkampf',
      city: 'Paris',
      postalCode: '75011',
      country: 'France',
      hours: 'Lun–dim : 9h – 21h',
      mapArea: '11e',
    },
    social: { instagramLabel: 'Portfolio coupes' },
  },
  {
    id: 'cheveux-co',
    categoryId: 'salon',
    name: 'Cheveux & Co',
    tagline: 'Maison de cheveux — Rennes',
    hero: {
      headline: "L'harmonie entre vos cheveux et votre âme.",
      subline:
        'Nous pratiquons une coiffure silencieuse : moins de bruit, plus d’attention. Chaque rendez-vous commence par le regard, pas par la tondeuse.',
      cta: 'Écrire une ligne',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        'La Maison ouverte sur la place de la République accueille trois cabines seulement — pour éviter la rumeur et garder l’air léger. Ici, on ne “refait pas une tête” : on retrouve un équilibre.',
        'Printemps 2019 : Élodie rapporte de Londres des huiles de soin oubliées par les magazines. Maël, lui, taille au mètre ruban pour des carrés qui tombent comme du papier japonais. Entre deux clientes, on prend le thé dans la même tasse que les grand-mères du quartier.',
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
    tagline: 'Atelier — Paris 10e',
    hero: {
      headline: 'Pas de chichi. Juste de l’acier et du talent.',
      subline:
        'Une chaise, un néon fatigué, des outils rangés comme chez un mécano. Tu réserves, tu t’assieds, tu repars avec une nuque nette et zéro story Instagram imposée.',
      cta: 'Craquer un créneau',
    },
    about: {
      title: 'Notre promesse',
      paragraphs: [
        'Ouvert en 2021 après six mois de travaux clandestins : murs grattés à la main, prises électriques apparentes, ventilation bruyante comme un atelier vrai.',
        'Viktor a exigé des lavabos en fonte récupérés à Saint-Ouen ; Gaspédal a refusé le logo au néon pleine lune — seulement trois tubes orange. Entre deux clients, on astique la crasse : la saleté visible, jamais l’hygiène.',
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
    id: 'bar-basque',
    categoryId: 'bar',
    name: 'Bar Basque',
    tagline: 'Pintxos, terroir & zinc',
    hero: {
      headline: 'Là où le rouge basque rencontre le bois sombre.',
      subline:
        'Entre café de quartier et table du soir : pintxos, vins du sud-ouest et cidres du pays.',
      cta: 'Réserver au zinc',
    },
    about: {
      title: 'L’Esprit du Zinc',
      paragraphs: [
        'Le Bar Basque est né d’un pari simple : faire tenir un comptoir de village dans une ville qui court. Ici, le verre s’arrête au bord du zinc, le jambon de Bayonne se coupe au couteau, et personne ne regarde l’heure.',
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
  {
    id: 'neon-shaker',
    categoryId: 'bar',
    name: "L'Apothicaire du Verre",
    tagline: 'Mixologie & alchimie — Bayonne',
    hero: {
      headline: 'L’excellence se déguste à la lueur des bougies.',
      subline:
        'Bar à cocktails feutré : bouteilles ambrées, comptoir en marbre, geste lent et précis — l’Adour n’est jamais loin.',
      cta: 'Réserver une table',
    },
    about: {
      title: 'L’Apothicaire',
      paragraphs: [
        'Ici le luxe est le silence du geste : chaque cocktail est composé comme une formule, dosée au compte-gouttes, servi dans le calme d’un soir où Bayonne respire encore le bois et le sel.',
      ],
    },
    contact: {
      sectionTitle: 'Réservation',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Créneau, nombre de couverts, occasion…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Nous trouver',
      street: '8 rue du Port-Neuf',
      city: 'Bayonne',
      postalCode: '64100',
      country: 'France',
      hours: 'Mar–Dim · 18h00 – 1h00',
      mapArea: 'Grand Bayonne',
    },
    social: { instagramLabel: 'Apothicaire du Verre' },
  },
  {
    id: 'zinc-des-amis',
    categoryId: 'bar',
    name: 'Le Chai Moderne',
    tagline: 'Vin, tapas & lumière du Sud-Ouest',
    hero: {
      headline: 'L’instant partagé',
      subline:
        'Convivialité et partage au comptoir : café le matin, bière artisanale le soir — terrasse ombragée, pépite locale au cœur de Bayonne.',
      cta: 'Voir la sélection',
    },
    about: {
      title: 'Épicurisme lumineux',
      paragraphs: [
        'Nous sélectionnons des producteurs du piémont et du littoral : le verre raconte une parcelle, l’assiette un métier. Rien d’opaque — tout est lisible, comme une grande table éclairée.',
        'Le chai prolonge la rue : bois clair, lignes nettes, accords proposés au comptoir sans jamais précipiter le choix.',
      ],
    },
    contact: {
      sectionTitle: 'Réservation',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Midi ou soir, nombre de couverts, préférences de vins…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Nous trouver',
      street: '14 rue Bernadou',
      city: 'Bayonne',
      postalCode: '64100',
      country: 'France',
      hours: 'Mer–Lun · 12h00 – 14h30 · 19h00 – 23h30',
      mapArea: 'Petit Bayonne',
    },
    social: { instagramLabel: 'Le Chai Moderne Bayonne' },
  },
  /* —— Tattoo / piercing —— */
  {
    id: 'atelier-1920',
    categoryId: 'tattoo',
    name: 'Atelier 1920',
    tagline: 'Tattoo traditionnel & hand-poked',
    hero: {
      headline: 'L’ancre, l’aiguille, et le silence du bois.',
      subline:
        'Un salon old school à Toulouse : cuir patiné, lumière tamisée, encres noires et rouges. Ici on prend le temps du hand-poked et du respect du motif classique.',
      cta: 'Entrer dans l’Atelier',
    },
    about: {
      title: 'L’atelier',
      paragraphs: [
        'Fondé sur l’idée du métier « comme avant » : machines à piston, flashs dessinés à la main, et une pièce dédiée au piquetage manuel pour les petits formats et les lignes d’une finesse rare.',
        'Chaque séance commence par un entretien — peau, tenue dans le temps, lisibilité du dessin — pour que le tattoo vieillisse avec le même caractère que le jour où il a été posé.',
      ],
    },
    contact: {
      sectionTitle: 'Consultation',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Style souhaité, zone corporelle, disponibilités…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Où nous trouver',
      street: '8 rue des Paradoux',
      city: 'Toulouse',
      postalCode: '31000',
      country: 'France',
      hours: 'Mar–Sam · 11h00 – 19h00',
      mapArea: 'Carmes',
    },
    social: { instagramLabel: 'Atelier 1920' },
  },
  {
    id: 'neo-ink-studio',
    categoryId: 'tattoo',
    name: 'Brutalisme chic',
    tagline: 'Loft secret · protocole visible',
    hero: {
      headline: 'La peau comme écran — précision chirurgicale, énergie de rue.',
      subline:
        'Studio à Marseille : gros formats, géométrie et réalisme — machines calibrées, silence de coulisse, hygiène comme architecture.',
      cta: 'Voir le protocole',
    },
    about: {
      title: 'L’approche',
      paragraphs: [
        'Nous poussons le contraste, la netteté du trait et la cohérence du projet : de la référence photo au rendu sur peau, chaque étape est calibrée.',
        'Le collectif travaille en binôme artiste / assistant pour les séances longues — confort, breaks, hygiène renforcée et suivi photo à J+30.',
      ],
    },
    contact: {
      sectionTitle: 'Booking',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Référence visuelle, taille, ville du guest…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Studio',
      street: '24 la Canebière',
      city: 'Marseille',
      postalCode: '13001',
      country: 'France',
      hours: 'Lun–Sam · 10h00 – 20h00',
      mapArea: 'Vieux-Port',
    },
    social: { instagramLabel: 'Neo-Ink Marseille' },
  },
  {
    id: 'le-labo-de-peau',
    categoryId: 'tattoo',
    name: 'Or & Peau',
    tagline: 'Bijouterie de peau',
    hero: {
      headline: 'La lumière choisit le métal avant la peau.',
      subline:
        'Cabinet à Nantes : titane implant-grade, or 18k, protocole visible — nous marquons l’instant avec la même exigence qu’un serti.',
      cta: 'Le bar à bijoux',
    },
    about: {
      title: 'Notre promesse',
      paragraphs: [
        'Nous avons conçu un espace clinique sans froideur : lumière douce, fauteuils médicaux discrets, et une équipe formée à l’anatomie et à la cicatrisation.',
        'Chaque client repart avec une fiche d’entretien illustrée, un numéro d’urgence et une invitation au contrôle à six semaines — inclus dans la prestation.',
      ],
    },
    contact: {
      sectionTitle: 'Rendez-vous',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      messageLabel: 'Zone à percer, bijou souhaité…',
      submitLabel: 'Envoyer',
    },
    location: {
      sectionTitle: 'Adresse',
      street: '3 place du Commerce',
      city: 'Nantes',
      postalCode: '44000',
      country: 'France',
      hours: 'Mar–Sam · 10h00 – 18h30',
      mapArea: 'Centre-ville',
    },
    social: { instagramLabel: 'Le Labo de Peau' },
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
