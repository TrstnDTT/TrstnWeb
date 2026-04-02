/**
 * Contenu business complet par projet — avis, FAQ, horaires, galeries, menus détaillés.
 * Phrases uniques par établissement (pas de copier-coller entre sites).
 */

import { TABLE_CONSTANCE_GALLERY } from './tableConstanceGallery.js'
import {
  BAR_BASQUE_BUSINESS,
  NEON_SHAKER_BUSINESS,
  ZINC_DES_AMIS_BUSINESS,
} from './barExperienceContent.js'
import { ATELIER_1920_EXT, NEO_INK_EXT, LEBO_PEAU_EXT } from './tattooExtendedContent.js'
import { ATELIER_SUCRE_DEFAULT } from './atelierSucreContent.js'
import { unsplashPhoto } from '../lib/unsplash.js'

export const BUSINESS_RICH = {
  'maison-lumiere': {
    valueProposition:
      'Organisation de mariages (sitesInfo event-wedding) : romance, élégance et personnalisation sur-mesure.',
    ctaPrimary: { label: 'Prendre rendez-vous', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire agence', href: '#footer-business' },
    menuSections: [
      {
        title: 'Accompagnement',
        items: [
          {
            name: 'Consultation & moodboard',
            price: 'forfait',
            ingredients: 'Brief, inspirations, budget indicatif',
          },
          {
            name: 'Coordination jour J',
            price: 'sur devis',
            ingredients: 'Timing cérémonie, prestataires, plan B',
          },
        ],
      },
      {
        title: 'Décoration & scénographie',
        items: [
          {
            name: 'Scénographie florale',
            price: 'devis',
            ingredients: 'Palette, saison, livraison matin',
          },
          {
            name: 'Papeterie & signalétique',
            price: 'devis',
            ingredients: 'Invitations, plan de table, calligraphie',
          },
        ],
      },
      {
        title: 'Réseau partenaires',
        items: [
          {
            name: 'Traiteurs & boissons',
            price: 'devis',
            ingredients: 'Sélection selon régime et nombre de convives',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Claire H.',
        rating: 5,
        text: 'L’équipe a géré nos stress sans qu’on le voie : les invités parlaient encore du décor la semaine suivante.',
      },
      {
        name: 'Marc-Antoine D.',
        rating: 5,
        text: 'Mariage à 120 personnes : plannings, rappels, zéro imprévu non anticipé.',
      },
      {
        name: 'Élodie R.',
        rating: 5,
        text: 'On voulait du sur-mesure sans bling : pile le bon ton.',
      },
    ],
    gallery: [
      { caption: 'Moodboard & échantillons' },
      { caption: 'Essai déco salle' },
      { caption: 'Table dressée jour J' },
      { caption: 'Équipe à l’écoute des mariés' },
    ],
    faq: [
      {
        q: 'Combien de mois avant pour un mariage ?',
        a: 'Au moins six mois en haute saison ; nous bloquons un premier rendez-vous découverte.',
      },
      {
        q: 'Travaillez-vous avec des traiteurs imposés ?',
        a: 'Nous recommandons un réseau testé ; vous pouvez aussi proposer le vôtre sous validation.',
      },
      {
        q: 'Intervenez-vous hors Île-de-France ?',
        a: 'Oui, avec frais de déplacement selon distance et équipe sur place.',
      },
    ],
    openingHours: {
      lundi: '9h00 – 18h00',
      mardi: '9h00 – 18h00',
      mercredi: '9h00 – 18h00',
      jeudi: '9h00 – 18h00',
      vendredi: '9h00 – 18h00',
      samedi: '10h00 – 16h00',
      dimanche: 'Fermé',
    },
  },
  'table-constance': {
    valueProposition:
      'Une salle feutrée, une cuisine visible, une carte qui respecte les saisons — gastronomie sans artifice.',
    ctaPrimary: { label: 'Réserver une table', href: '#contact' },
    ctaSecondary: { label: 'Dress code & accès', href: '#footer-business' },
    menuSections: [
      {
        title: 'Pour ouvrir',
        items: [
          {
            name: 'Huîtres fines de Belon, mignonette au poivre vert',
            price: '18€',
            ingredients: 'Demi-douzaine, citron confit',
          },
          {
            name: 'Velouté de cèpes, huile de noisette toastée',
            price: '16€',
            ingredients: 'Chapelure croustillante, herbes fraîches',
          },
        ],
      },
      {
        title: 'Les assiettes',
        items: [
          {
            name: 'Saint-jacques snackées, purée de panais, émulsion citronnée',
            price: '38€',
            ingredients: 'Coquilles bretonnes, beurre noisette',
          },
          {
            name: 'Filet de bœuf charolais, jus corsé, légumes glacés',
            price: '44€',
            ingredients: 'Maturation 21 jours, pommes soufflées',
          },
        ],
      },
      {
        title: 'Douceurs',
        items: [
          {
            name: 'Soufflé au chocolat grand cru, glace vanille bourbon',
            price: '14€',
            ingredients: 'Préparation minute en salle',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Valérie M.',
        rating: 5,
        text: 'Service discret, assiettes comme des tableaux — on entend presque la vaisselle fine.',
      },
      {
        name: 'Thomas R.',
        rating: 5,
        text: 'Accords mets-vins expliqués sans jargon : rare et précieux.',
      },
      {
        name: 'Inès L.',
        rating: 5,
        text: 'Nous avons fêté un anniversaire : table isolée, attention aux détails.',
      },
    ],
    gallery: TABLE_CONSTANCE_GALLERY,
    faq: [
      {
        q: 'Y a-t-il une tenue exigée ?',
        a: 'Tenue correcte exigée ; veste conseillée pour les messieurs le vendredi et samedi soir.',
      },
      {
        q: 'Proposez-vous un menu végétarien ?',
        a: 'Menu dégustation végétal sur réservation 48 h à l’avance.',
      },
      {
        q: 'Acceptez-vous les groupes ?',
        a: 'Au-delà de 6 personnes, privatisation partielle possible — contactez l’hôte.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '12h30 – 14h00 · 19h30 – 22h00',
      mercredi: '12h30 – 14h00 · 19h30 – 22h00',
      jeudi: '12h30 – 14h00 · 19h30 – 22h00',
      vendredi: '12h30 – 14h00 · 19h30 – 22h30',
      samedi: '12h30 – 14h00 · 19h30 – 22h30',
      dimanche: 'Fermé',
    },
  },
  'carre-rouge': {
    valueProposition:
      'Smash minute, frites croustillantes, sauces qui piquent juste — le carré qui claque à Gerland.',
    ctaPrimary: { label: 'Commander en ligne', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire', href: '#footer-business' },
    menuSections: [
      {
        title: 'Burgers',
        items: [
          {
            name: 'Smash double cheddar',
            price: '14€',
            ingredients: 'Double steak smashé, cheddar fondu, cornichons, sauce signature',
          },
          {
            name: 'Veggie halloumi',
            price: '13€',
            ingredients: 'Halloumi grillé, roquette, tomate confite, mayo citronnée',
          },
        ],
      },
      {
        title: 'Salades & bowls',
        items: [
          {
            name: 'Bowl poulet croustillant',
            price: '12,50€',
            ingredients: 'Avocat, edamame, sauce sésame, riz vinaigré',
          },
        ],
      },
      {
        title: 'Accompagnements',
        items: [
          {
            name: 'Frites triple cuisson (portion)',
            price: '4€',
            ingredients: 'Pommes Bintje, sel de Guérande',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Kevin L.',
        rating: 5,
        text: 'Le smash est irréprochable — viande encore rose au centre, pain tiède. Je reviens chaque vendredi.',
      },
      {
        name: 'Sarah M.',
        rating: 4,
        text: 'File d’attente un peu longue le midi, mais le bowl vaut le coup d’œil sur Instagram.',
      },
      {
        name: 'Hugo P.',
        rating: 5,
        text: 'Meilleur rapport qualité-prix du quartier pour un burger sans chichis.',
      },
    ],
    gallery: [
      { caption: 'Comptoir en inox, commandes rapides' },
      { caption: 'Cuisson smash sur plaque' },
      { caption: 'Salle industrielle, néons discrets' },
      { caption: 'Cornets de frites à emporter' },
    ],
    faq: [
      {
        q: 'Proposez-vous la livraison ?',
        a: 'Oui via nos partenaires après 18h ; retrait au comptoir sans frais.',
      },
      {
        q: 'Puis-je modifier les sauces ?',
        a: 'Oui : indiquez allergies ou niveau de piquant au moment de la commande.',
      },
      {
        q: 'Avez-vous des options sans gluten ?',
        a: 'Le bowl peut être servi sans frites ; demandez la liste des allergènes au comptoir.',
      },
    ],
    openingHours: {
      lundi: '11h30 – 22h30',
      mardi: '11h30 – 22h30',
      mercredi: '11h30 – 22h30',
      jeudi: '11h30 – 22h30',
      vendredi: '11h30 – 23h00',
      samedi: '11h30 – 23h00',
      dimanche: '12h00 – 21h30',
    },
  },
  influences: {
    valueProposition:
      'Bistronomie bayonnaise — « en mélangeant les bonnes influences, on obtient l’alchimie » (carte & horaires indicatifs, démo portfolio).',
    ctaPrimary: { label: 'Réserver', href: '#carte' },
    ctaSecondary: { label: 'Nous appeler', href: 'tel:+33559017504' },
    /** Piliers d’expertise humaine (démo UI — contenus alignés sur l’esprit du lieu). */
    humanExpertise: [
      {
        title: 'Sauces & patience',
        text:
          'On reconnaît un cuisinier à ses sauces : elles demandent temps, justesse et écoute du produit. Chaque plat mérite la sienne — c’est le fil rouge du travail en cuisine.',
      },
      {
        title: 'Vivant & cohérent',
        text:
          'Le vin est une matière vivante : la carte évolue avec les saisons et avec ce qui sort des fourneaux. Cohérence avant effet — pour que le verre prolonge l’émotion de l’assiette.',
      },
      {
        title: 'Producteurs d’abord',
        text:
          'La carte s’inspire de ce que les agriculteurs et artisans ont prêt à offrir — mûr, de saison, digne d’être mis en scène. Le respect du vivant guide les choix.',
      },
    ],
    /** Engagement clientèle : relation, accueil, fidélisation. */
    clientEngagement: [
      {
        role: 'Faustine — salle & vins',
        lead: 'L’accueil comme premier plat',
        text:
          'Elle accueille avec son naturel, explique la maison et ses valeurs, et vous guide dans les accords — sans jargon inutile. Ici, le conseil est une conversation : allergies, envies, occasion ; tout compte pour composer une table à votre mesure.',
      },
      {
        role: 'Quentin — cuisine',
        lead: 'Une assiette par histoire',
        text:
          'Il écoute les retours du service et ajuste : la cuisine reste en dialogue avec la salle. Habitués ou première visite, l’objectif est le même — que vous partiez avec l’envie de revenir goûter la prochaine évolution de l’ardoise.',
      },
    ],
    trustLine:
      '24 couverts : une taille humaine pour garder le contact — chaque service est une rencontre, pas une chaîne.',
    hallmarkQuote: {
      quote: '« En mélangeant les bonnes influences, on obtient l’alchimie. »',
      context: 'Le fil entre le geste en cuisine et l’émotion en salle.',
    },
    menuSections: [
      {
        title: 'Pour commencer',
        items: [
          {
            name: 'Velouté de saison, huile infusée & graines',
            price: '16€',
            ingredients: 'Légumes du potager ou des maraîchers ; texture soyeuse, herbes fraîches, croûtons ou chips selon l’humeur du marché.',
          },
          {
            name: 'Légumes du moment, condiment & herbes fraîches',
            price: '18€',
            ingredients:
              'Produits des producteurs du jour — la carte suit la nature ; dressage et sauce légère selon arrivage.',
            badge: 'Du marché',
          },
          {
            name: 'Tartare de poisson ou de bœuf, condiment acidulé',
            price: '22€',
            ingredients: 'Couteau à la minute, huile d’olive fruitée, pickles ou capres ; accord possible selon Faustine.',
          },
          {
            name: 'Foie gras poêlé, chutney de fruits & pain brioché',
            price: '26€',
            ingredients: 'Cuisson rosée, réduction douce, pain toasté maison ; le plat peut être partagé en entrée.',
          },
        ],
      },
      {
        title: 'Au cœur de l’assiette',
        items: [
          {
            name: 'Poisson de ligne, beurre ou nage parfumée',
            price: '32€',
            ingredients: 'Pêche atlantique ; citron, vin blanc ou crustacés selon l’ardoise du moment.',
          },
          {
            name: 'Saint-Jacques snackées, légumes glacés',
            price: '38€',
            ingredients: 'Cuisson courte, jus corsé, purée ou émulsion légère — selon arrivage des coquilles.',
            badge: 'Arrivage',
          },
          {
            name: 'Viande du terroir, accompagnement raciné',
            price: '36€',
            ingredients: 'Blonde d’Aquitaine ou gibier selon période ; sauce longue, garniture du marché.',
          },
          {
            name: 'Pigeon ou canette, jus réduit & légumes oubliés',
            price: '42€',
            ingredients: 'Volaille fermière ; cuisson rosée, sauce au sang ou vin rouge, tubercules rôtis.',
          },
          {
            name: 'Agneau confit, herbes du maquis & polenta',
            price: '40€',
            ingredients: 'Mijoté lent, réduction parfumée, polenta crémeuse ou écrasé de pommes de terre.',
          },
        ],
      },
      {
        title: 'Douceurs',
        items: [
          {
            name: 'Dessert gourmand maison',
            price: '14€',
            ingredients: 'Chocolat, fruits ou sablé — la carte des desserts évolue avec les saisons.',
          },
          {
            name: 'Soufflé chaud ou entremets glacé du moment',
            price: '15€',
            ingredients: 'Préparation minute ou dressage froid ; parfait pour finir sur une note légère ou intense.',
          },
          {
            name: 'Assiette de fromages affinés',
            price: '16€',
            ingredients: 'Sélection courte, confiture maison, pain aux noix ; demandez la suggestion du jour.',
          },
        ],
      },
      {
        title: 'Pour accompagner',
        items: [
          {
            name: 'Suggestion de vin au verre',
            price: '8–14€',
            ingredients: 'Carte vivante, cohérente avec les plats — Faustine conseille selon votre menu et vos envies.',
          },
          {
            name: 'Accord mets & vins (menu)',
            price: 'sur demande',
            ingredients: 'Parcours en plusieurs verres — idéal pour découvrir des petits producteurs et des cuvées d’exception.',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Raphaël',
        rating: 5,
        text: 'Une magnifique soirée — menu dégustation surprenant et délicieux. Le service était à notre écoute du début à la fin ; les accords vins racontaient la même histoire que l’assiette.',
      },
      {
        name: 'Marie-Pierre',
        rating: 5,
        text: 'Terrasse de rêve, équipe attentionnée sans être envahissante. On sent qu’on peut poser des questions : le menu est abordable et chaque plat a un vrai soin du détail.',
      },
      {
        name: 'Céline',
        rating: 5,
        text: 'Accueil tout en douceur — on ose les mélanges de saveurs parce qu’on nous rassure. Conseils œnologiques précis ; on a envie de revenir pour la prochaine carte.',
      },
    ],
    gallery: [
      { caption: 'Maison bayonnaise — salle feutrée' },
      { caption: 'Faustine en salle' },
      { caption: 'Quentin au dressage' },
      { caption: 'Carte des vins' },
    ],
    faq: [
      {
        q: 'Première visite : comment se déroule le service ?',
        a: 'Faustine présente la maison et peut adapter les accords à vos goûts ; en cuisine, chaque plat est expliqué si vous le souhaitez. N’hésitez pas à signaler allergies ou envies — c’est le cœur de l’accueil.',
      },
      {
        q: 'Menu dégustation ?',
        a: 'Proposé selon les soirs — renseignez-vous par téléphone ou sur le site officiel pour les créneaux.',
      },
      {
        q: 'Bon cadeau ?',
        a: 'L’établissement propose des cartes cadeaux via leur application dédiée (voir restaurant-influences.fr).',
      },
      {
        q: 'Pourquoi 24 couverts ?',
        a: 'Une taille volontairement humaine : garder le lien avec chaque table, le temps d’écouter et de conseiller sans précipitation.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: 'Soir (pas de service midi)',
      mercredi: 'Midi & soir',
      jeudi: 'Midi & soir',
      vendredi: 'Midi & soir',
      samedi: 'Midi & soir',
      dimanche: 'Fermé',
    },
  },
  'atelier-sept': {
    valueProposition:
      'Sept soirs sur sept, une ardoise courte qui sent le marché et le vieux port.',
    ctaPrimary: { label: 'Réserver', href: '#contact' },
    ctaSecondary: { label: 'Nous trouver', href: '#footer-business' },
    menuSections: [
      {
        title: 'Pour commencer',
        items: [
          {
            name: 'Anchoïade tiède, légumes croquants',
            price: '11€',
            ingredients: 'Légumes du jour, tapenade maison, huile d’olive AOP',
          },
        ],
      },
      {
        title: 'Plats du marché',
        items: [
          {
            name: 'Bourride sétoise revisitée',
            price: '26€',
            ingredients: 'Poissons du matin, aïoli léger, croûtons',
          },
        ],
      },
      {
        title: 'Douceurs',
        items: [
          {
            name: 'Beignets de fleurs de courgette, miel de garrigue',
            price: '9€',
            ingredients: 'Pâte légère, miel local, glace vanille',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Julien T.',
        rating: 5,
        text: 'Terrasse bruyante mais authentique — on entend le port, on goûte le sud.',
      },
      {
        name: 'Fatima K.',
        rating: 5,
        text: 'L’ardoise change vraiment chaque jour : on sent que le chef lit les étals.',
      },
      {
        name: 'Bruno C.',
        rating: 4,
        text: 'Portions généreuses ; prévoir un peu d’attente en plein été.',
      },
    ],
    gallery: [
      { caption: 'Zinc et tabourets hauts' },
      { caption: 'Ardoise manuscrite à l’entrée' },
      { caption: 'Assiette de poisson du jour' },
      { caption: 'Verres de rosé au comptoir' },
    ],
    faq: [
      {
        q: 'Prenez-vous des réservations pour le week-end ?',
        a: 'Oui, jusqu’à 8 couverts en ligne ; au-delà, appelez-nous avant midi.',
      },
      {
        q: 'Avez-vous une option végétarienne sur l’ardoise ?',
        a: 'Toujours au moins une entrée et un plat végétariens, selon arrivage.',
      },
      {
        q: 'Les chiens sont-ils acceptés en terrasse ?',
        a: 'Oui, à la seule condition de rester attachés au pied de la table.',
      },
    ],
    openingHours: {
      lundi: '12h00 – 14h30 · 19h00 – 23h00',
      mardi: '12h00 – 14h30 · 19h00 – 23h00',
      mercredi: '12h00 – 14h30 · 19h00 – 23h00',
      jeudi: '12h00 – 14h30 · 19h00 – 23h00',
      vendredi: '12h00 – 14h30 · 19h00 – 23h30',
      samedi: '12h00 – 14h30 · 19h00 – 23h30',
      dimanche: '12h00 – 14h30 · 19h00 – 23h00',
    },
  },
  'pain-dore': {
    valueProposition:
      'Manifeste éditorial : grain, alvéole, four — texte comme matière première.',
    ctaPrimary: { label: 'Écrire au rédacteur', href: '#contact' },
    ctaSecondary: { label: 'Lecture', href: '#footer-business' },
    manifestJournal: {
      lignes: [
        '6h12 — humidité 64 %, le levain sent le yaourt et la pomme verte.',
        '6h40 — four à 238 °C ; la pierre vibre avant la première bouchée.',
        '7h05 — grigne qui s’ouvre comme une coquille : le boulanger sourit sans bruit.',
      ],
    },
    menuSections: [
      {
        title: 'Pains (prix au kg)',
        items: [
          {
            name: 'Tradition T65',
            price: '4,80€/kg',
            ingredients: 'Farine de blé français, levain mère, pointe de sel marin',
          },
          {
            name: 'Complet T150',
            price: '5,20€/kg',
            ingredients: 'Son intégré, graines de lin et tournesol',
          },
          {
            name: 'Seigle & miel',
            price: '6,10€/kg',
            ingredients: 'Seigle bio, miel de châtaignier, fermentation lente',
          },
        ],
      },
      {
        title: 'Viennoiseries',
        items: [
          {
            name: 'Croissant pur beurre AOP',
            price: '1,60€',
            ingredients: 'Beurre Charentes, tourage 3 jours',
          },
          {
            name: 'Pain au chocolat',
            price: '1,70€',
            ingredients: 'Barres 64 % cacao, pâte feuilletée maison',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Anne-Sophie V.',
        rating: 5,
        text: 'La baguette croustille encore en rentrant à vélo : du vrai métier.',
      },
      {
        name: 'Thomas B.',
        rating: 5,
        text: 'Je prends le complet au poids chaque dimanche — jamais deux fois la même mie, toujours bon.',
      },
      {
        name: 'Mélanie G.',
        rating: 5,
        text: 'Accueil souriant à 7h pile, même quand la file déborde sur le trottoir.',
      },
    ],
    gallery: [
      { caption: 'Fournil : pétrin et farines' },
      { caption: 'Vitrine : viennoiseries du matin' },
      { caption: 'Baguettes alignées sous lampe chaude' },
      { caption: 'Équipe à la coupe du pain' },
    ],
    faq: [
      {
        q: 'Puis-je réserver une commande grande quantité ?',
        a: 'Oui, 48 h à l’avance pour pains sur mesure et mini-viennoiseries événement.',
      },
      {
        q: 'Travaillez-vous avec des farines sans gluten ?',
        a: 'Un pain dédié le jeudi sur commande ; croûte plus dense, goût noisette.',
      },
      {
        q: 'Acceptez-vous les titres-restaurant ?',
        a: 'Oui, papier et dématérialisés, sans minimum d’achat.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '07h00 – 20h00',
      mercredi: '07h00 – 20h00',
      jeudi: '07h00 – 20h00',
      vendredi: '07h00 – 20h00',
      samedi: '07h00 – 20h00',
      dimanche: '07h00 – 13h30',
    },
  },
  'pain-passion': {
    bakeryImmersive: {
      heroImage: unsplashPhoto('1558961363-fa8fdf82db35', { w: 1200, q: 80 }),
    },
    atelierSucre: {
      ...ATELIER_SUCRE_DEFAULT,
    },
    valueProposition:
      'Pâtisserie boutique : saison, ingrédient rare, précision de vitrine.',
    ctaPrimary: { label: 'Réserver une dégustation', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire', href: '#footer-business' },
    maisonSensProduits: [
      {
        id: 'a',
        nom: 'Baguette de tradition croustillante',
        vers:
          'Elle se tient droite comme une phrase de Bossuet ; sous le doigt, la grigne résiste puis cède — alvéolage régulier, mémoire du levain de la veille.',
        detail:
          'Autolyse douze minutes, pointage en deux temps, fermentation contrôlée à 24 °C. La croûte chante avant la mie.',
      },
      {
        id: 'b',
        nom: 'Pain au levain T80',
        vers:
          'Mie ocre, bulles étirées comme du velours froissé : le silence du four quand la buée retombe.',
        detail:
          'Hydratation 78 %, pétrissage lent, grigne ouverte en « oreille » — le son du refroidissement est une mesure.',
      },
      {
        id: 'c',
        nom: 'Éclair au chocolat noir 70 %',
        vers:
          'Glaçage miroir sans cri : le cacao parle bas, la pâte à choux ne se vante pas.',
        detail:
          'Crème pâtissière infusée, tempérage à la main — précision de joaillier.',
      },
    ],
    menuSections: [
      {
        title: 'Pains & fougasses',
        items: [
          {
            name: 'Campagne noir & sésame',
            price: '5,40€',
            ingredients: 'Encre de seiche, huile de sésame toasté',
          },
          {
            name: 'Bun brioche nature',
            price: '1,20€',
            ingredients: 'Parfait burger maison',
          },
        ],
      },
      {
        title: 'Viennoiseries',
        items: [
          {
            name: 'Croissant inversé',
            price: '2,10€',
            ingredients: 'Beurre touré à l’extérieur, croustillant',
          },
          {
            name: 'Pain suisse praliné',
            price: '2,40€',
            ingredients: 'Noisettes torréfiées',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Karim L.',
        rating: 5,
        text: 'Le citron déstructuré : équilibre chirurgical — pas trop sucré, jamais acide agressif.',
      },
      {
        name: 'Élodie R.',
        rating: 5,
        text: 'On dirait une vitrine joaillière : chaque entremets a son socle, la lumière tombe juste.',
      },
      {
        name: 'Hugo P.',
        rating: 5,
        text: 'Saint-Honoré du week-end : vanille longue en bouche — je repasse dès la prochaine collection.',
      },
    ],
    gallery: [
      { caption: 'Collection de saison — plateau marbre' },
      { caption: 'Bar à tartes — cercles du jour' },
      { caption: 'Laboratoire vitré sur salon' },
      { caption: 'Glaçages mats & fruits d’exception' },
    ],
    faq: [
      {
        q: 'Peut-on commander une pièce sur mesure ?',
        a: 'Oui, sous 72 h selon disponibilité des fruits et du chocolat grand cru.',
      },
      {
        q: 'Livrez-vous les entreprises ?',
        a: 'Oui, plateaux pâtissiers pour séminaires à Bordeaux Métropole, devis en ligne.',
      },
      {
        q: 'Avez-vous une terrasse ?',
        a: 'Quelques places face au comptoir — réservation conseillée le samedi.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '07h00 – 19h00',
      mercredi: '07h00 – 19h00',
      jeudi: '07h00 – 19h00',
      vendredi: '07h00 – 19h00',
      samedi: '07h00 – 19h00',
      dimanche: '07h00 – 13h30',
    },
  },
  'artisan-grain': {
    valueProposition:
      'Ébénisterie (sitesInfo service-woodworker) : meubles sur-mesure, restauration, essences nobles.',
    ctaPrimary: { label: 'Demander un devis', href: '#contact' },
    ctaSecondary: { label: 'Voir l’atelier', href: '#footer-business' },
    menuSections: [
      {
        title: 'Mobilier sur-mesure',
        items: [
          {
            name: 'Bibliothèques & dressings',
            price: 'devis',
            ingredients: 'Mesures, essences, finitions',
          },
          {
            name: 'Tables & bureaux',
            price: 'devis',
            ingredients: 'Chêne, noyer, merisier',
          },
        ],
      },
      {
        title: 'Aménagements',
        items: [
          {
            name: 'Escaliers & parquets',
            price: 'devis',
            ingredients: 'Pose, isolation phonique',
          },
          {
            name: 'Portes & lambris',
            price: 'devis',
            ingredients: 'Assemblages traditionnels',
          },
        ],
      },
      {
        title: 'Restauration',
        items: [
          {
            name: 'Meubles & boiseries',
            price: 'devis',
            ingredients: 'Marqueterie, vernis, dorure',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Lucie P.',
        rating: 5,
        text: 'Notre bibliothèque cintrée : joints parfaits, odeur du chêne pendant des semaines.',
      },
      {
        name: 'David R.',
        rating: 5,
        text: 'Restauration d’un secrétaire Louis XVI : on ne voit plus la rayure.',
      },
      {
        name: 'Inès A.',
        rating: 5,
        text: 'Devis détaillé avec croquis, aucune surprise à la livraison.',
      },
    ],
    gallery: [
      { caption: 'Atelier : rabot & établi' },
      { caption: 'Essences empilées' },
      { caption: 'Assemblage à tenons' },
      { caption: 'Finition à la laine d’acier' },
    ],
    faq: [
      {
        q: 'Quel délai pour un dressing sur-mesure ?',
        a: 'Comptez 10 à 14 semaines selon complexité et saison.',
      },
      {
        q: 'Intervenez-vous hors Lyon ?',
        a: 'Oui, avec frais kilométriques pour la pose.',
      },
      {
        q: 'Proposez-vous des essences locales ?',
        a: 'Priorité aux bois français ; import sur demande documentée.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '09h00 – 18h00',
      mercredi: '09h00 – 18h00',
      jeudi: '09h00 – 18h00',
      vendredi: '09h00 – 18h00',
      samedi: '09h00 – 18h00',
      dimanche: 'Fermé',
    },
  },
  'four-chocolat': {
    valueProposition:
      'Depuis trois générations : levain, farines bio, four à pierre — le pain comme le matin.',
    ctaPrimary: { label: 'Découvrir nos produits', href: '#trad-specialites' },
    ctaSecondary: { label: 'Nous trouver', href: '#trad-venir' },
    menuSections: [
      {
        title: 'Pains traditionnels',
        items: [
          {
            name: 'Baguette tradition',
            price: '1,30€',
            ingredients: 'Pointage lent, grigne ouverte',
          },
          {
            name: 'Pain de campagne',
            price: '4,20€',
            ingredients: 'Autolyse, levain du père',
          },
          {
            name: 'Pain aux céréales',
            price: '4,80€',
            ingredients: 'Alvéolage serré, mie tenue',
          },
        ],
      },
      {
        title: 'Viennoiseries',
        items: [
          {
            name: 'Croissant pur beurre',
            price: '1,40€',
            ingredients: 'Tourage 3×3, beurre AOP',
          },
          {
            name: 'Pain au chocolat',
            price: '1,60€',
            ingredients: 'Barres 44 %, croustillant',
          },
          {
            name: 'Chausson aux pommes',
            price: '2,10€',
            ingredients: 'Compote maison, cannelle',
          },
        ],
      },
      {
        title: 'Pâtisseries',
        items: [
          {
            name: 'Tarte aux fruits',
            price: '4,50€',
            ingredients: 'Crème d’amande, fruits de saison',
          },
          {
            name: 'Éclair au chocolat',
            price: '4,20€',
            ingredients: 'Pâte à choux, glaçage fondant',
          },
          {
            name: 'Mille-feuille',
            price: '5,50€',
            ingredients: 'Crème mousseline, feuilletage',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Camille D.',
        rating: 5,
        text: 'La baguette du samedi : croûte qui chante, mie qui ne s’effrite pas.',
      },
      {
        name: 'Pierre-Olivier M.',
        rating: 5,
        text: 'On sent le levain au quartier — file le dimanche, mais ça vaut.',
      },
      {
        name: 'Nora S.',
        rating: 5,
        text: 'Campagne au levain : alvéolage parfait pour les tartines du petit-déj.',
      },
    ],
    gallery: [
      { caption: 'Four à pierre' },
      { caption: 'Façonnage au banc' },
      { caption: 'Viennoiseries du matin' },
      { caption: 'Vitrine pains & pâtisseries' },
    ],
    faq: [
      {
        q: 'Proposez-vous du pain sans gluten ?',
        a: 'Une ligne dédiée le mercredi sur commande ; pas de contamination en cuisine ce jour-là.',
      },
      {
        q: 'À quelle heure sort la première fournée ?',
        a: '6h30 — baguettes et viennoiseries ; le campagne sort vers 9h.',
      },
      {
        q: 'Farines locales ?',
        a: 'Priorité aux meuniers français ; liste affichée au comptoir.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '06h30 – 20h00',
      mercredi: '06h30 – 20h00',
      jeudi: '06h30 – 20h00',
      vendredi: '06h30 – 20h00',
      samedi: '06h30 – 20h00',
      dimanche: '07h00 – 13h30',
    },
  },
  'studio-eclipse': {
    valueProposition:
      'Portfolio photo (sitesInfo photo-minimalist) : simplicité, images sans distraction.',
    ctaPrimary: { label: 'Prendre rendez-vous', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire salon', href: '#footer-business' },
    menuSections: [
      {
        title: 'Coupes & brushing',
        items: [
          {
            name: 'Coupe architecturée + brushing',
            price: '85€',
            ingredients: 'Diagnostic morphologique, finition au fer ou nature',
          },
          {
            name: 'Coupe homme précision',
            price: '52€',
            ingredients: 'Contours rasoir, finition matière',
          },
        ],
      },
      {
        title: 'Couleur & soin',
        items: [
          {
            name: 'Coloration végétale sur-mesure',
            price: 'dès 120€',
            ingredients: 'Pose longue, soin post-coloration inclus',
          },
          {
            name: 'Soin profond signature',
            price: '45€',
            ingredients: '45 min, masque réparateur, massage crânien',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Alexandra F.',
        rating: 5,
        text: 'On m’a expliqué pourquoi ma couleur tournait au cuivré — plus jamais de surprise.',
      },
      {
        name: 'Julien M.',
        rating: 5,
        text: 'Ambiance blanche, musique basse : je décroche du bureau en une heure.',
      },
      {
        name: 'Karima L.',
        rating: 5,
        text: 'Première fois que ma frange tient trois semaines sans retouche.',
      },
    ],
    gallery: [
      { caption: 'Fond blanc, silhouette nette' },
      { caption: 'Fiche coupe posée comme une légende photo' },
      { caption: 'Miroir sans cadre, reflet brut' },
      { caption: 'Portrait avant / après, même lumière' },
    ],
    faq: [
      {
        q: 'Combien de temps à prévoir pour une première coloration ?',
        a: 'Comptez 2 h30 à 3 h selon longueur ; nous bloquons la cabine entière.',
      },
      {
        q: 'Travaillez-vous sur cheveux très frisés ?',
        a: 'Oui, deux stylistes formées textures 4C sur rendez-vous spécifique.',
      },
      {
        q: 'Puis-je annuler sans frais ?',
        a: 'Jusqu’à 24 h avant ; au-delà, 50 % du forfait est conservé.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '09h00 – 20h00',
      mercredi: '09h00 – 20h00',
      jeudi: '09h00 – 20h00',
      vendredi: '09h00 – 20h00',
      samedi: '09h00 – 20h00',
      dimanche: 'Fermé',
    },
  },
  'atelier-m': {
    valueProposition:
      'Urban Cuts (barber-urban) : culture street et techniques de barbier classiques.',
    ctaPrimary: { label: 'Réserver un créneau', href: '#contact' },
    ctaSecondary: { label: 'Plan d’accès', href: '#footer-business' },
    menuSections: [
      {
        title: 'Barbier',
        items: [
          {
            name: 'Barbe dégradée & serviette chaude',
            price: '32€',
            ingredients: 'Durée ~35 min',
          },
          {
            name: 'Taille de barbe entretien',
            price: '22€',
            ingredients: 'Durée ~20 min',
          },
        ],
      },
      {
        title: 'Coiffure',
        items: [
          {
            name: 'Coupe créative + finition',
            price: '48€',
            ingredients: 'Durée ~50 min',
          },
          {
            name: 'Forfait coupe + soin cuir chevelu',
            price: '68€',
            ingredients: 'Durée ~1 h 10',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Romain G.',
        rating: 5,
        text: 'Première fois que quelqu’un me demande comment je dors avant de toucher aux tempes.',
      },
      {
        name: 'Émilie C.',
        rating: 5,
        text: 'Coupe femme au ciseau : finition nette, tenue trois semaines sans gel.',
      },
      {
        name: 'Youssef N.',
        rating: 4,
        text: 'Un peu d’attente le samedi, mais le café compense largement.',
      },
    ],
    gallery: [
      { caption: 'Fauteuils barbier vintage' },
      { caption: 'Miroirs industriels' },
      { caption: 'Étagère produits naturels' },
      { caption: 'Espace mixte fond musique jazz' },
    ],
    faq: [
      {
        q: 'Faut-il réserver pour une simple taille de barbe ?',
        a: 'Conseillé le week-end ; en semaine, passage possible sans RDV avant 17h.',
      },
      {
        q: 'Proposez-vous la première coupe enfant ?',
        a: 'Oui, mardi et jeudi matin, styliste dédiée aux moins de 10 ans.',
      },
      {
        q: 'Acceptez-vous les cartes cadeaux ?',
        a: 'Oui, valables 12 mois, utilisables barbier ou coiffure.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '10h00 – 19h00',
      mercredi: '10h00 – 19h00',
      jeudi: '10h00 – 19h00',
      vendredi: '10h00 – 19h00',
      samedi: '09h00 – 19h00',
      dimanche: 'Fermé',
    },
  },
  'cheveux-co': {
    valueProposition:
      'Coiffure magazine : diagnostic avant cisaille, maison calme face à la République.',
    ctaPrimary: { label: 'Écrire une ligne', href: '#venir' },
    ctaSecondary: { label: 'Le diagnostic', href: '#diagnostic' },
    diagnosticPillars: [
      {
        id: 'texture',
        title: 'Texture',
        verse: 'Sous les doigts, la mèche révèle son humeur du jour.',
        detail:
          'Maël passe la lumière rasante du nord sur votre nuque : il cherche la mémoire des anciens brushings, la fatigue du silicone. On choisit le séchage comme on choisit un tempo — jamais la violence.',
      },
      {
        id: 'couleur',
        title: 'Couleur',
        verse: 'Une buée de thé sur vos épaules, puis la nuance juste.',
        detail:
          'Élodie mélange les pigments dans des bols de grès. Elle raconte comment sa grand-mère teignait les foulards : même patience, même refus du “plus clair coûte plus cher”. Le balayage est une phrase entre deux respirations.',
      },
      {
        id: 'volume',
        title: 'Volume',
        verse: 'L’air doit circuler entre vous et le monde.',
        detail:
          'Nous dessinons la masse au crayon wash sur papier calque avant la coupe. Le volume est traité comme une architecture légère : poutres invisibles, courbes qui soutiennent le regard sans alourdir.',
      },
      {
        id: 'sante',
        title: 'Santé',
        verse: 'L’harmonie entre vos cheveux et votre âme.',
        detail:
          'Quand le cuir chevelu rougit, on arrête tout : massage froid, huile cameline, rendez-vous retardé sans frais. La beauté ici n’est pas une promesse — c’est une trêve négociée avec votre corps.',
      },
    ],
    salonMuses: [
      {
        name: 'Élodie Marchand',
        role: 'Coloriste — patines & silence',
        anecdote:
          'Ancienne peintre sur porcelaine, elle a découvert la coiffure après avoir sauvé une amie d’une décoloration “express” à Pigalle. À Rennes, on raconte qu’elle reconnaît une nuance à la seule odeur du développant.',
      },
      {
        name: 'Maël Le Goff',
        role: 'Architecte des coupes',
        anecdote:
          'Il mesure les lobes d’oreilles au pied à coulisse : “Un carré, c’est une niche en plâtre.” Cliente fidèle depuis 2018 : la même professeure de cello qui refuse tout fondant et revient tous les solstices.',
      },
      {
        name: 'Souad Benali',
        role: 'Réception & thé',
        anecdote:
          'Elle tient le carnet manuscrit des rendez-vous depuis l’ouverture : une écriture inclinée qui calme les retards. Offre secrète : si vous pleurez après une rupture, elle glisse un macaron dans votre manche avant la coupe.',
      },
    ],
    menuSections: [
      {
        title: 'Forfaits doux',
        items: [
          { name: 'Coupe enfant (-12 ans)', price: '18€', ingredients: 'Après l’école, mercredi prioritaire' },
          { name: 'Coupe + shampoing', price: '34€', ingredients: 'Eau filtrée, serviette tiède' },
        ],
      },
      {
        title: 'Couleur',
        items: [
          { name: 'Patine ou balayage + coupe', price: 'dès 68€', ingredients: 'Devis après diagnostic' },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Patricia L.',
        rating: 5,
        text: 'Ma mère y allait, j’y emmène mes enfants : même chaise, même bienveillance.',
      },
      {
        name: 'Nicolas W.',
        rating: 4,
        text: 'Pas le dernier cri Instagram, mais le dégradé est propre et le prix affiché tenu.',
      },
      {
        name: 'Sandrine H.',
        rating: 5,
        text: 'Conseils shampoing sans me vendre trois flacons inutiles.',
      },
    ],
    gallery: [
      { caption: 'Salon lumineux, posters années 90' },
      { caption: 'Postes face aux vitres' },
      { caption: 'Espace enfants avec tabourets bas' },
      { caption: 'Mur de photos clients souriants' },
    ],
    faq: [
      {
        q: 'Prenez-vous les réservations le samedi ?',
        a: 'Oui, mais les créneaux enfants partent vite : appelez le mardi.',
      },
      {
        q: 'Acceptez-vous les chèques CESU coiffure ?',
        a: 'Oui, avec justificatif à jour.',
      },
      {
        q: 'Puis-je venir sans rendez-vous ?',
        a: 'En semaine souvent oui ; vendredi après-midi comptez 20 min d’attente.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '09h30 – 18h30',
      mercredi: '09h30 – 18h30',
      jeudi: '09h30 – 18h30',
      vendredi: '09h30 – 18h30',
      samedi: '09h00 – 17h30',
      dimanche: 'Fermé',
    },
  },
  'au-rasoir': {
    valueProposition:
      'Garage à nuques : ardoise des tarifs, néon orange, zéro langue de bois.',
    ctaPrimary: { label: 'Craquer un créneau', href: '#bas' },
    ctaSecondary: { label: 'Menu ardoise', href: '#ardoise' },
    ardoiseMenu: [
      {
        rubrique: 'Ça coupe net',
        lignes: [
          {
            plat: 'Fade “ticket de métro”',
            prix: '38€',
            fil: 'Machine au cran qu’il faut, lignes droites comme un rail.',
          },
          {
            plat: 'Dégradé haut de façades',
            prix: '42€',
            fil: 'On marque l’os, on descend propre, finition pierre ponce.',
          },
          {
            plat: 'Nuque au rasoir',
            prix: '+12€',
            fil: 'Serviette bouillante, lame neuve, pacte de pas bouger.',
          },
        ],
      },
      {
        rubrique: 'Barbe & métal',
        lignes: [
          {
            plat: 'Barbe terrain vague',
            prix: '28€',
            fil: 'Carte IGN sur la mâchoire, huile fumée maison.',
          },
          {
            plat: 'Combo coupe + barbe “full tank”',
            prix: '58€',
            fil: 'Une seule pause, pas deux histoires.',
          },
        ],
      },
      {
        rubrique: 'Autres gabarits',
        lignes: [
          {
            plat: 'Carré femme “lame d’Imoca”',
            prix: '52€',
            fil: 'Gaspédal attaque au peigne fin, zéro brushing gadget.',
          },
          {
            plat: 'Mioche discipliné (-10 ans)',
            prix: '24€',
            fil: 'Mercredi et samedi avant 11h. Parent qui mate son téléphone : supplément regard noir gratuit.',
          },
        ],
      },
    ],
    garageCrew: [
      {
        name: 'Viktor Salic',
        role: 'Barbier — fades & râleur',
        story:
          'Formé à Trieste sur des lames d’armurerie, il a débarqué à Paris avec une valise de pierres à aiguiser. Raconte encore le client journaliste qui a dormi sur la chaise pendant une retouche : “meilleure critique qu’on m’ait faite”.',
      },
      {
        name: 'Gaspédal (Sarah H.)',
        role: 'Coupe femme & carrés',
        story:
          'Surnom hérité d’un ancien atelier moto : elle roule en vintage et coupe au ciseau comme on change une courroie — sec, juste, sans apology. Sa tante tenait un salon à Belleville dans les 90s ; elle a gardé seulement les insultes tendres et les ciseaux.',
      },
      {
        name: 'Inès Muñoz',
        role: 'Stérilisation & ordre',
        story:
          'Ancienne volontaire en bloc opératoire simulé : elle trace les cycles UV au marqueur indélébile sur le plexi. C’est elle qui a imposé le panneau “Pas de podcasts à fond” à l’entrée.',
      },
    ],
    menuSections: [
      {
        title: 'Barbier',
        items: [
          { name: 'Fade ou dégradé', price: '38€', ingredients: '~40 min, machine calibrée' },
          { name: 'Contour barbe', price: '28€', ingredients: 'Huile fumée maison' },
        ],
      },
      {
        title: 'Coiffure',
        items: [
          { name: 'Carré femme', price: '52€', ingredients: 'Ciseaux, cheveux secs' },
          { name: 'Enfant (-10 ans)', price: '24€', ingredients: 'Créneaux mer / sam matin' },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Marcus T.',
        rating: 5,
        text: 'Enfin un endroit où personne ne me parle football pendant qu’on me rase la nuque.',
      },
      {
        name: 'Léa F.',
        rating: 5,
        text: 'Carré plongeant net, zéro blabla produit — juste une lame et un miroir.',
      },
      {
        name: 'David K.',
        rating: 4,
        text: 'Un peu cher mais le calme vaut le détour un vendredi soir.',
      },
    ],
    gallery: [
      { caption: 'Fauteuil unique face baie vitrée' },
      { caption: 'Rangée de peignes sous UV' },
      { caption: 'Comptoir noir & file or' },
      { caption: 'Barbier au rasoir sur finition' },
    ],
    faq: [
      {
        q: 'Acceptez-vous les walk-in ?',
        a: 'En semaine avant 16h parfois ; week-end réservation obligatoire en ligne.',
      },
      {
        q: 'C’est mixte barbier / coiffure ?',
        a: 'Oui : deux praticiens, même charte hygiène et même grille tarifaire affichée.',
      },
      {
        q: 'Proposez-vous la barbe à l’ancienne au rasoir ?',
        a: 'Oui sur demande lors de la réservation ; supplément serviette chaude 8€.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '10h00 – 20h00',
      mercredi: '10h00 – 20h00',
      jeudi: '10h00 – 20h00',
      vendredi: '10h00 – 20h00',
      samedi: '10h00 – 20h00',
      dimanche: 'Fermé',
    },
  },
  'bar-basque': BAR_BASQUE_BUSINESS,
  'neon-shaker': NEON_SHAKER_BUSINESS,
  'zinc-des-amis': ZINC_DES_AMIS_BUSINESS,
  'atelier-1920': {
    valueProposition:
      'L’Héritage : galerie intemporelle, archive vivante — nous marquons l’instant avec la tenue du noir sur papier cassé.',
    ctaPrimary: { label: 'Entrer dans l’Atelier', href: '#contact' },
    ctaSecondary: { label: 'Instagram', href: '#' },
    organicInks: [
      {
        name: 'Noir Tradition — charbon végétal',
        desc:
          'Pigment suspendu dans une base glycérinée douce, sans additif superflu. Idéal pour les aplats old school qui doivent vieillir en douceur sur la peau claire.',
      },
      {
        name: 'Rouge Brique — oxyde de fer micronisé',
        desc:
          'Teinte tirée des encres d’imprimerie du XIXe ; tracé fin sans saignement. Nous la réservons aux contours et lettrages sur peau tolérante aux tests cutanés.',
      },
      {
        name: 'Vert Forêt — à partir de terre verte pure',
        desc:
          'Pigment minéral tamisé, réchauffé nos mélanges pour limiter la granulométrie. Conseillé pour feuillages et motifs naturels où la brillance doit rester mate.',
      },
      {
        name: 'Chair & terres pour ombrage',
        desc:
          'Dilutions stériles maison pour dégradés type gravure : trois tons du sable au taupe, posés au shader lent pour éviter la « bouillie grise » au guérison.',
      },
    ],
    tattooArtists: [
      {
        name: 'Marc Delmas',
        role: 'Dotwork & traditionnel américain',
        bio:
          'Expert en dotwork depuis dix ans, Marc a débuté à Paris avant d’ouvrir l’Atelier 1920. Il privilégie les motifs à fort contraste et les séances de hand-poked pour les lignes d’une finesse que la machine n’atteint pas toujours.',
      },
      {
        name: 'Sophie Arnaud',
        role: 'Old school & lettrage',
        bio:
          'Ancienne illustratrice de presse, Sophie compose des flashs inspirés des années 30–50 : roses, panthers, bannières. Elle accompagne les clients du premier croquis au pansement, avec une pédagogie calme.',
      },
    ],
    testimonials: [
      {
        name: 'Hugo V.',
        rating: 5,
        text: 'Ambiance de bar à whisky sans le bruit — on entend presque l’aiguille. Mon flash a dix ans et les aplats sont restés d’encre.',
      },
      {
        name: 'Léa K.',
        rating: 5,
        text: 'Le hand-poked avec Sophie : douceur surprenante, motif d’une netteté folle.',
      },
    ],
    gallery: [{ caption: 'Mur de flashs vintage' }, { caption: 'Salle hand-poked' }],
    faq: [
      {
        q: 'Proposez-vous le hand-poked pour tout le corps ?',
        a: 'Privilégiez petits et moyens formats ; au-delà, nous basculons sur machine pour garder un temps de séance raisonnable.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '11h00 – 19h00',
      mercredi: '11h00 – 19h00',
      jeudi: '11h00 – 19h00',
      vendredi: '11h00 – 20h00',
      samedi: '10h00 – 20h00',
      dimanche: 'Fermé',
    },
    ...ATELIER_1920_EXT,
  },
  'neo-ink-studio': {
    valueProposition:
      'Brutalisme chic : loft secret, protocole horizontal — précision et hygiène comme architecture.',
    ctaPrimary: { label: 'Lancer le projet', href: '#contact' },
    ctaSecondary: { label: 'Guest-spot', href: '#neo-guest' },
    simulation3d: {
      headline: 'Maquette numérique avant la première piqûre.',
      body:
        'Votre projet est modélisé en relief sur avatar calibré à votre morphologie : nous calculons la courbure de l’avant-bras, du mollet ou du dos pour anticiper la déformation des motifs géométriques. Export STL pour validation, ajustement des lignes au millimètre, puis transfert vectoriel vers le stencil autocollant. Le tatouage ne commence qu’après validation écran + papier calque sur peau.',
      services: [
        'Tracé fin vectoriel calibré DPI peau',
        'Relief simulé (ombre portée sur volumes)',
        'Export stencil double couche pour grandes pièces',
      ],
    },
    cyberArtists: [
      {
        name: 'Jordan « Jax » Meyer',
        specialty: 'Géométrie & mandalas XL',
        bio:
          'Ancien dessinateur industriel, Jordan transpose les grilles vectorielles sur la peau depuis huit ans. Il travaille exclusivement à la machine rotative pour des aplats d’encre d’une densité homogène.',
      },
      {
        name: 'Inès Carvalho',
        specialty: 'Réalisme noir & gris',
        bio:
          'Portraitiste reconnue, Inès sculpte les volumes au shader — portraits, animaux, textures. Elle exige une photo HD de référence et un second rendez-vous validation avant la grande séance.',
      },
    ],
    guestSpots: [
      { artist: 'Kai Watanabe', style: 'Irezumi contemporain', date: '12–18 avril 2026', city: 'Marseille' },
      { artist: 'Nina Frost', style: 'Blackwork abstrait', date: '3–9 mai 2026', city: 'Marseille' },
      { artist: 'Theo V.', style: 'Lettering brutal', date: 'Juin 2026', city: 'Invité surprise' },
    ],
    testimonials: [
      {
        name: 'Maya R.',
        rating: 5,
        text: 'Le guest japonais était annoncé avec un moodboard — j’ai booké en ligne en trois minutes.',
      },
    ],
    gallery: [{ caption: 'Salle néon' }, { caption: 'Séance réalisme' }],
    faq: [
      {
        q: 'Les guests sont-ils payés à l’heure ou au projet ?',
        a: 'Chaque artiste fixe son tarif ; nous vous envoyons la grille avant de bloquer l’acompte.',
      },
    ],
    openingHours: {
      lundi: '11h00 – 20h00',
      mardi: '11h00 – 20h00',
      mercredi: '11h00 – 20h00',
      jeudi: '11h00 – 20h00',
      vendredi: '11h00 – 21h00',
      samedi: '10h00 – 21h00',
      dimanche: 'Fermé',
    },
    ...NEO_INK_EXT,
  },
  'le-labo-de-peau': {
    valueProposition:
      'Or & Peau : bijouterie de peau — titane, or 18k, lumière et reflets sur chaque pose.',
    ctaPrimary: { label: 'Réserver mon bijou', href: '#catalogue' },
    ctaSecondary: { label: 'Prendre rendez-vous', href: '#contact' },
    piercingTeam: [
      {
        name: 'Camille Renard',
        role: 'Pierceuse senior — cartilage & arcade',
        bio:
          'Diplômée infirmière puis spécialisée en piercing de précision, Camille pratique depuis douze ans. Elle cartographie chaque oreille comme un bijou unique et refuse les poses à risque d’anatomie.',
      },
      {
        name: 'Thomas El-Khoury',
        role: 'Bijoutier clinique / titane & or',
        bio:
          'Ancien prototypiste joaillier, Thomas assemble nos commandes F-136 et or 18k : filetages, longueurs de tige et sertissage sont vérifiés au microscope avant stérilisation.',
      },
    ],
    jewelryCatalog: [
      { name: 'Stud titane poli — diamètre 3 / 4 mm', material: 'ASTM F-136, anodisation au choix', price: 'à partir de 38€' },
      { name: 'Anneau segmenté titane — clicker', material: 'Ouverture fluide, finition miroir', price: 'à partir de 52€' },
      { name: 'Labret or 18k — pierre sertie', material: 'Or jaune / blanc, pierres synthétiques certifiées', price: 'à partir de 95€' },
      { name: 'Hélix curated set (2 pièces)', material: 'Titane + boîte stérile double', price: 'offre 108€' },
      { name: 'Barbell industriel sur mesure', material: 'Longueur ajustée après anatomie', price: 'sur devis' },
    ],
    hygieneProtocol: [
      {
        title: 'Cabine ventilée & enrobage mains',
        detail:
          'Avant toute piqûre : lavage chirurgical, gant stérile par étape, surface traitée à la classe médicale. Aération continue — nous refusons la procédure en boîte close.',
      },
      {
        title: 'Stérilité traçable',
        detail:
          'Aiguilles cannulaires ou à bec ouvert américain, emballage intact ouvert sous vos yeux ; lots enregistrés. Autoclave classe B affiché, journaux d’incubation consultables.',
      },
      {
        title: 'Peau cartographiée',
        detail:
          'Désinfection cutanée, repérage anatomique au marqueur stérile ou à l’iode dilué selon zone, validation miroir à trois angles avant engagement.',
      },
      {
        title: 'Perçage à l’aiguille américaine',
        detail:
          'Passage guidé sans pistolet : perçage à l’aiguille américaine stérile homologuée CE, huile lubrifiante médicale sur demande pour les muqueuses autorisées.',
      },
      {
        title: 'Pose du bijou & l’éclat durable',
        detail:
          'Insertion titane F-136 ou or 18k tempéré pièce à pièce, sans choc thermique. Fiche aseptie illustrée, contrôle J+7 offert, rappel SMS des signes d’alerte.',
      },
    ],
    testimonials: [
      {
        name: 'Chloé B.',
        rating: 5,
        text: 'On m’a expliqué chaque geste — j’ai rarement autant fait confiance à une piqûre.',
      },
      {
        name: 'Arthur M.',
        rating: 5,
        text: 'Le catalogue or est sublime ; le titane pour le quotidien. Zéro migration en six mois.',
      },
    ],
    gallery: [{ caption: 'Vitrine stérile' }, { caption: 'Fiche de suivi' }],
    faq: [
      {
        q: 'Puis-je ramener mon bijou ?',
        a: 'Non — nous posons uniquement des pièces certifiées ouvertes sous vos yeux pour garantir la traçabilité.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '10h00 – 18h30',
      mercredi: '10h00 – 18h30',
      jeudi: '10h00 – 18h30',
      vendredi: '10h00 – 18h30',
      samedi: '10h00 – 18h30',
      dimanche: 'Fermé',
    },
    ...LEBO_PEAU_EXT,
  },
}
