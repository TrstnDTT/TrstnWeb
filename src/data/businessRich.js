/**
 * Contenu business complet par projet — avis, FAQ, horaires, galeries, menus détaillés.
 * Phrases uniques par établissement (pas de copier-coller entre sites).
 */

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
    gallery: [
      { caption: 'Salle : nappes ivoire, lumière tamisée' },
      { caption: 'Passage cuisine vers la salle' },
      { caption: 'Carte des vins au verre' },
      { caption: 'Chef en finalisation au comptoir' },
    ],
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
      'Textes issus de sitesInfo bakery-classic : trois générations, pain artisanal, ingrédients de qualité.',
    ctaPrimary: { label: 'Commander', href: '#contact' },
    ctaSecondary: { label: 'Horaires & accès', href: '#footer-business' },
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
    valueProposition:
      'Pain & Passion (sitesInfo bakery-modern) : artisanat, lieu clair, carte qui évolue chaque semaine.',
    ctaPrimary: { label: 'Commander', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire', href: '#footer-business' },
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
        text: 'Enfin une boulangerie qui assume le design sans sacrifier le goût.',
      },
      {
        name: 'Élodie R.',
        rating: 5,
        text: 'Le comptoir vitré sur le labo : on voit tout, ça rassure.',
      },
      {
        name: 'Hugo P.',
        rating: 5,
        text: 'Pain aux graines à tomber — je repasse le mercredi.',
      },
    ],
    gallery: [
      { caption: 'Fournil ouvert sur la salle' },
      { caption: 'Carte ardoise & néon discret' },
      { caption: 'Viennoiseries empilées' },
      { caption: 'Baristas & boulangers' },
    ],
    faq: [
      {
        q: 'Proposez-vous du sans gluten ?',
        a: 'Un pain dédié le vendredi sur commande ; liste d’allergènes à la caisse.',
      },
      {
        q: 'Livrez-vous les entreprises ?',
        a: 'Oui, petit-déjeuner d’équipe en Île-de-France, devis en ligne.',
      },
      {
        q: 'Avez-vous une place assise ?',
        a: 'Une dizaine de places, dont bar face au pétrin.',
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
      'Laboratoire vitré, fèves tracées, entremets qui tiennent la route jusqu’au dernier café.',
    ctaPrimary: { label: 'Demander un devis gâteau', href: '#contact' },
    ctaSecondary: { label: 'Venir sur place', href: '#footer-business' },
    menuSections: [
      {
        title: 'Pâtisserie',
        items: [
          {
            name: 'Éclair Venezuela 72 %',
            price: '7,50€',
            ingredients: 'Ganache montée, glaçage brillant, pâte à choux craquante',
          },
          {
            name: 'Tarte citron meringuée',
            price: '6,80€',
            ingredients: 'Crème citron confite, meringue italienne',
          },
        ],
      },
      {
        title: 'Chocolat de dégustation',
        items: [
          {
            name: 'Tablette Madagascar',
            price: '8€',
            ingredients: 'Fruité rouge, acidité légère',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Camille D.',
        rating: 5,
        text: 'Marriage de textures : l’éclair ne s’affaisse pas, même après transport.',
      },
      {
        name: 'Pierre-Olivier M.',
        rating: 5,
        text: 'Dégustation guidée au comptoir : on repart avec des notes comme pour un vin.',
      },
      {
        name: 'Nora S.',
        rating: 5,
        text: 'Gâteau de mariage commandé ici : invités encore en train d’en parler.',
      },
    ],
    gallery: [
      { caption: 'Vitrine pâtissière' },
      { caption: 'Tempérage du chocolat' },
      { caption: 'Entremets en cours de montage' },
      { caption: 'Salle avec vue sur le labo' },
    ],
    faq: [
      {
        q: 'Combien de temps à l’avance pour un gâteau événement ?',
        a: 'Deux semaines minimum en haute saison ; une semaine hors vacances scolaires.',
      },
      {
        q: 'Proposez-vous des ateliers ?',
        a: 'Oui, un samedi par mois, 6 places, réservation en ligne.',
      },
      {
        q: 'Avez-vous des créations sans lactose ?',
        a: 'Une ligne limitée le mercredi ; liste des ingrédients remise à l’achat.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '09h00 – 19h30',
      mercredi: '09h00 – 19h30',
      jeudi: '09h00 – 19h30',
      vendredi: '09h00 – 19h30',
      samedi: '09h00 – 19h30',
      dimanche: '09h30 – 13h30',
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
      'Urban Cuts (sitesInfo barber-urban) : street culture × techniques classiques.',
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
      'Trois générations sur la place : tarifs affichés, tondu sans surprise, conseils entre deux visites.',
    ctaPrimary: { label: 'Appeler le salon', href: '#contact' },
    ctaSecondary: { label: 'Nous rendre visite', href: '#footer-business' },
    menuSections: [
      {
        title: 'Forfaits famille',
        items: [
          {
            name: 'Coupe enfant (-12 ans)',
            price: '18€',
            ingredients: 'Durée ~25 min',
          },
          {
            name: 'Coupe + shampoing adulte',
            price: '32€',
            ingredients: 'Durée ~40 min',
          },
        ],
      },
      {
        title: 'Coloration',
        items: [
          {
            name: 'Mèches ou couleur + coupe',
            price: 'dès 65€',
            ingredients: 'Devis au salon selon longueur',
          },
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
      'Barber shop minimal au cœur du 10e : une chaise, des outils stériles, réservation en ligne — entre salon de coiffure et barbier de précision.',
    ctaPrimary: { label: 'Prendre rendez-vous', href: '#contact' },
    ctaSecondary: { label: 'Itinéraire', href: '#footer-business' },
    menuSections: [
      {
        title: 'Barbier',
        items: [
          {
            name: 'Coupe homme fade ou dégradé',
            price: '38€',
            ingredients: 'Durée ~40 min',
          },
          {
            name: 'Contour barbe + huile',
            price: '28€',
            ingredients: 'Durée ~25 min',
          },
        ],
      },
      {
        title: 'Coiffure',
        items: [
          {
            name: 'Coupe femme courte ou carré',
            price: '52€',
            ingredients: 'Brushing léger inclus',
          },
          {
            name: 'Coupe enfant (-10 ans)',
            price: '24€',
            ingredients: 'Sur rendez-vous mercredi & samedi matin',
          },
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
  'velvet-room': {
    valueProposition:
      'Cocktails au verre choisi pour la texture, jazz jusqu’à l’aube, cabines velours derrière rideau.',
    ctaPrimary: { label: 'Réserver une table', href: '#contact' },
    ctaSecondary: { label: 'Voir l’emplacement', href: '#footer-business' },
    menuSections: [
      {
        title: 'Signatures',
        items: [
          {
            name: 'Velvet Old Fashioned',
            price: '16€',
            ingredients: 'Bourbon 8 ans, bitters maison, zestes brûlés',
          },
          {
            name: 'French 75 revisité',
            price: '15€',
            ingredients: 'Gin local, effervescent, citron confit',
          },
        ],
      },
      {
        title: 'Partages',
        items: [
          {
            name: 'Plateau fromages affinés (2 pers.)',
            price: '24€',
            ingredients: 'Sélection du caviste du jour',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Isabelle Q.',
        rating: 5,
        text: 'Le verre à cocktail n’est pas un gadget : le Old Fashioned tient la route deux gorgées.',
      },
      {
        name: 'Fabien E.',
        rating: 5,
        text: 'Cabine pour quatre : parfait pour conclure un dossier sans crier.',
      },
      {
        name: 'Léa T.',
        rating: 5,
        text: 'Playlist soul, volume juste — on entend encore le shaker en sortant.',
      },
    ],
    gallery: [
      { caption: 'Bar en laiton brossé' },
      { caption: 'Rideaux velours bordeaux' },
      { caption: 'Scène jazz discrets projecteurs' },
      { caption: 'Glaçons sculptés au comptoir' },
    ],
    faq: [
      {
        q: 'Code vestimentaire le week-end ?',
        a: 'Tenue soignée appréciée ; shorts et claquettes refusés après 22h.',
      },
      {
        q: 'Puis-je privatiser une cabine ?',
        a: 'Oui, forfait boissons à partir de 350 € pour 2 h, hors week-end férié.',
      },
      {
        q: 'Avez-vous une carte sans alcool ?',
        a: 'Oui, trois signatures mocktails à base d’infusions maison.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: 'Fermé',
      mercredi: '20h00 – 04h00',
      jeudi: '20h00 – 04h00',
      vendredi: '20h00 – 04h00',
      samedi: '20h00 – 04h00',
      dimanche: 'Fermé',
    },
  },
  'zinc-bleu': {
    valueProposition:
      'Vingt pressions qui tournent, terrace face au canal, happy hour qui ne sacrifie pas le houblon.',
    ctaPrimary: { label: 'Réserver une table', href: '#contact' },
    ctaSecondary: { label: 'S’y rendre', href: '#footer-business' },
    menuSections: [
      {
        title: 'Pressions',
        items: [
          {
            name: 'IPA Houblon Nord',
            price: '7,50€',
            ingredients: 'Pinte · IBU modérée, finale résineuse',
          },
          {
            name: 'Stout café torréfié',
            price: '8€',
            ingredients: 'Pinte · Notes cacao, mousse crémeuse',
          },
        ],
      },
      {
        title: 'Assiettes',
        items: [
          {
            name: 'Planche charcuterie & pickles',
            price: '16€',
            ingredients: 'À partager, cornichons maison',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Matthieu C.',
        rating: 5,
        text: 'Rotation des fûts affichée au mur — on sait pourquoi la pinte change chaque semaine.',
      },
      {
        name: 'Julie B.',
        rating: 4,
        text: 'Un peu bruyant quand le DJ monte, mais la terrasse sauve la soirée.',
      },
      {
        name: 'Omar S.',
        rating: 5,
        text: 'Meilleure IPA du canal pour moi — amertume longue sans sécher la gorge.',
      },
    ],
    gallery: [
      { caption: 'Tireuses alignées sous néons bleus' },
      { caption: 'Terrasse chauffée face à l’eau' },
      { caption: 'Ardoise des bières du jour' },
      { caption: 'Intérieur brut métal et bois' },
    ],
    faq: [
      {
        q: 'Peut-on goûter avant de commander une pinte ?',
        a: 'Oui, 2 cl offerts sur les références du jour avant 21h.',
      },
      {
        q: 'Les groupes sont-ils acceptés ?',
        a: 'Au-delà de 8 personnes, prévenez-nous pour bloquer des tabourets hauts.',
      },
      {
        q: 'Avez-vous des options sans gluten ?',
        a: 'Deux bières sans gluten en bouteille, liste à la carte.',
      },
    ],
    openingHours: {
      lundi: '17h00 – 02h00',
      mardi: '17h00 – 02h00',
      mercredi: '17h00 – 02h00',
      jeudi: '17h00 – 02h00',
      vendredi: '17h00 – 02h30',
      samedi: '16h00 – 02h30',
      dimanche: '16h00 – 01h00',
    },
  },
  'nuit-jour': {
    valueProposition:
      'Du flat white du matin au spritz du soir : une même équipe, deux cartes, vue mer.',
    ctaPrimary: { label: 'Réserver', href: '#contact' },
    ctaSecondary: { label: 'Voir sur la carte', href: '#footer-business' },
    menuSections: [
      {
        title: 'Cafés & extraits',
        items: [
          {
            name: 'Espresso',
            price: '2,50€',
            ingredients: 'Notes chocolat noir, corps dense',
          },
          {
            name: 'Flat White',
            price: '4,50€',
            ingredients: 'Lait micro-mousse, équilibre noisette',
          },
          {
            name: 'V60 Colombia',
            price: '5€',
            ingredients: 'Floral jasmin, acidité citron vert',
          },
        ],
      },
      {
        title: 'Soir — partages',
        items: [
          {
            name: 'Assiette tapas méditerranéennes',
            price: '19€',
            ingredients: 'Poivrons, anchois, huile d’olive locale',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Chantal R.',
        rating: 5,
        text: 'Le V60 est servi avec une carte des arômes : rare sur la Promenade.',
      },
      {
        name: 'Steve K.',
        rating: 5,
        text: 'Brunch dimanche : jus pressé à l’orange qui vaut le détour à lui seul.',
      },
      {
        name: 'Manon P.',
        rating: 4,
        text: 'Un peu de vent en terrasse, mais le spritz compense la bise.',
      },
    ],
    gallery: [
      { caption: 'Lever de soleil sur la terrasse' },
      { caption: 'Machine espresso chromée' },
      { caption: 'Bar la nuit, lumières tamisées' },
      { caption: 'Assiettes tapas colorées' },
    ],
    faq: [
      {
        q: 'Le brunch est-il servi toute l’année ?',
        a: 'Oui le dimanche 10h–15h ; carte réduite en janvier.',
      },
      {
        q: 'Réservation obligatoire en été ?',
        a: 'Conseillée pour la terrasse mer ; intérieur souvent dispo sans.',
      },
      {
        q: 'Proposez-vous des grains à emporter ?',
        a: 'Oui, trois origines en rotation, moulus sur demande.',
      },
    ],
    openingHours: {
      lundi: '08h00 – 01h00',
      mardi: '08h00 – 01h00',
      mercredi: '08h00 – 01h00',
      jeudi: '08h00 – 01h00',
      vendredi: '08h00 – 01h00',
      samedi: '08h00 – 01h00',
      dimanche: '08h00 – 01h00',
    },
  },
  'aiguille-noire': {
    valueProposition:
      'INK & IRON (sitesInfo tattoo-noir) : hygiène, direction artistique, transparence.',
    ctaPrimary: { label: 'Demander un projet', href: '#contact' },
    ctaSecondary: { label: 'Consignes & accès', href: '#footer-business' },
    menuSections: [
      {
        title: 'Styles & formats',
        items: [
          {
            name: 'Blackwork floral',
            price: 'dès 180€',
            ingredients: 'Format 15×20 cm, séance unique ou deux passages',
          },
          {
            name: 'Lettrage script',
            price: 'dès 120€',
            ingredients: 'Poignet, retouches incluses 3 mois',
          },
        ],
      },
      {
        title: 'Soins & suivi',
        items: [
          {
            name: 'Kit pansement + crème',
            price: '12€',
            ingredients: 'Filme second peau, notice illustrée',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Roxane M.',
        rating: 5,
        text: 'Projet sur plusieurs mois : chaque passage, la pièce respire un peu plus.',
      },
      {
        name: 'Gaspard L.',
        rating: 5,
        text: 'Hygiène visible : jeunes fermés, pigments étiquetés — ça rassure.',
      },
      {
        name: 'Nina K.',
        rating: 5,
        text: 'Guest artist annoncé deux mois à l’avance : j’ai pu bloquer congés.',
      },
    ],
    gallery: [
      { caption: 'Postes de travail sous hotte' },
      { caption: 'Rouleaux de flash au mur' },
      { caption: 'Espace stérilisation vitré' },
      { caption: 'Salon d’attente discret' },
    ],
    faq: [
      {
        q: 'Quel âge minimum pour se faire tatouer ?',
        a: '18 ans révolus, pièce d’identité obligatoire, sans exception.',
      },
      {
        q: 'Puis-je venir avec un dessin trouvé en ligne ?',
        a: 'Oui, l’artiste l’adapte pour éviter le copier-coller et respecter l’anatomie.',
      },
      {
        q: 'Que faire si la zone rougit après trois jours ?',
        a: 'Contactez-nous avec photo ; nous orientons vers un professionnel de santé si besoin.',
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
  },
  'lobe-aiguille': {
    valueProposition:
      'Titane implant-grade, angle anatomique expliqué avant toute piqûre, bijouterie derrière vitre blindée.',
    ctaPrimary: { label: 'Prendre rendez-vous', href: '#contact' },
    ctaSecondary: { label: 'Trouver le studio', href: '#footer-business' },
    menuSections: [
      {
        title: 'Piercing',
        items: [
          {
            name: 'Lobe + soin',
            price: '45€',
            ingredients: 'Titane ASTM F-136, suivi 15 jours inclus',
          },
          {
            name: 'Hélix / flat',
            price: '55€',
            ingredients: 'Bijou premium, durée ~40 min',
          },
        ],
      },
      {
        title: 'Bijoux',
        items: [
          {
            name: 'Or 14k (pièce seule)',
            price: 'dès 45€',
            ingredients: 'Choix au présentoir stérile',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Éva D.',
        rating: 5,
        text: 'Schéma de l’oreille dessiné avant : je savais où allait l’aiguille.',
      },
      {
        name: 'Théo P.',
        rating: 5,
        text: 'Douleur courte, explications longues — exactement ce que je voulais.',
      },
      {
        name: 'Lina S.',
        rating: 4,
        text: 'Un peu d’attente le samedi, mais la stérilité du plateau rassure.',
      },
    ],
    gallery: [
      { caption: 'Vitrine bijoux sous lumière neutre' },
      { caption: 'Fiche d’information anatomique' },
      { caption: 'Chaise inclinable médicalisée' },
      { caption: 'Poste de stérilisation visible' },
    ],
    faq: [
      {
        q: 'Puis-je me faire percer si je suis mineur ?',
        a: 'Oreilles uniquement avec autorisation parentale et présence du titulaire de l’autorité parentale.',
      },
      {
        q: 'Combien de temps sans nager après un nombril ?',
        a: 'Six semaines minimum ; feuille récapitulative remise à la sortie.',
      },
      {
        q: 'Acceptez-vous les bijoux ramenés de l’extérieur ?',
        a: 'Non, uniquement notre sélection certifiée pour garantir la qualité du métal.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '11h00 – 19h00',
      mercredi: '11h00 – 19h00',
      jeudi: '11h00 – 19h00',
      vendredi: '11h00 – 19h00',
      samedi: '11h00 – 19h00',
      dimanche: 'Fermé',
    },
  },
  'peau-encre': {
    valueProposition:
      'Collectif : conventions, guests internationaux, galerie street-art au rez-de-chaussée.',
    ctaPrimary: { label: 'Réserver une place', href: '#contact' },
    ctaSecondary: { label: 'Plan Montpellier', href: '#footer-business' },
    menuSections: [
      {
        title: 'Événements',
        items: [
          {
            name: 'Pass journée convention',
            price: '15€',
            ingredients: 'Accès animations, stands invités',
          },
          {
            name: 'Flash guest (liste mensuelle)',
            price: 'variable',
            ingredients: 'Annoncé sur nos réseaux chaque 1er du mois',
          },
        ],
      },
      {
        title: 'Shop',
        items: [
          {
            name: 'Sérigraphie édition limitée',
            price: '35€',
            ingredients: 'Format A3, numérotée',
          },
        ],
      },
    ],
    testimonials: [
      {
        name: 'Wesley H.',
        rating: 5,
        text: 'Ambiance festival sans la boue : stands propres, file fluide.',
      },
      {
        name: 'Amélie C.',
        rating: 5,
        text: 'J’ai pris un print plutôt qu’un tattoo : qualité papier au top.',
      },
      {
        name: 'Idriss B.',
        rating: 4,
        text: 'Son un peu fort dans la cour intérieure, mais l’organisation compense.',
      },
    ],
    gallery: [
      { caption: 'Mur de flash invités' },
      { caption: 'Galerie street-art rez-de-chaussée' },
      { caption: 'Queue convention sous chapiteau' },
      { caption: 'Stand sérigraphie en direct' },
    ],
    faq: [
      {
        q: 'Les mineurs peuvent-ils assister à la convention ?',
        a: 'Oui avec adulte ; zones tattoo réservées aux majeurs munis de pièce d’identité.',
      },
      {
        q: 'Remboursement si l’artiste annule ?',
        a: 'Oui, intégralité du pass ou report sur la prochaine date annoncée.',
      },
      {
        q: 'Puis-je apporter mon matériel de dessin ?',
        a: 'Oui pour la partie galerie ; côté tattoo, matériel du studio uniquement.',
      },
    ],
    openingHours: {
      lundi: 'Fermé',
      mardi: '12h00 – 20h00',
      mercredi: '12h00 – 20h00',
      jeudi: '12h00 – 20h00',
      vendredi: '12h00 – 21h00',
      samedi: '11h00 – 21h00',
      dimanche: '12h00 – 19h00',
    },
  },
}
