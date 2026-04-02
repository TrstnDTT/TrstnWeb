/**
 * Contenus longs & cartes détaillées — mini-sites Bar (fusionné dans BUSINESS_RICH).
 */

export const BAR_BASQUE_BUSINESS = {
  valueProposition:
    'Pintxos au comptoir, terroir sud-ouest, zinc patiné — le Pays basque sans carte postale.',
  ctaPrimary: { label: 'Réserver au zinc', href: '#bb-reservation' },
  ctaSecondary: { label: 'La cave', href: '#bb-cave' },
  espritZinc: {
    title: "L'Esprit du Zinc",
    lead:
      'Fiction sincère : en 1924, un marin de Saint-Jean-de-Luz laisse un zinc dans une remise. Quatre générations plus tard, le même zinc accueille Bayonne — bois sombre, lumière rousse, verres qui tintent comme avant l’heure.',
    paragraphs: [
      'Nous travaillons avec des producteurs d’Espelette, de Saint-Jean-Pied-de-Port et du littoral : pas de carte « fusion », pas de tapas générique — seulement ce que le marché autorise avec fierté.',
      'Le service est volontairement lent quand il le faut : un pintxo se déguste debout au comptoir ou assis face au bois ; le vin se choisit après une question sur le tanin, jamais après une photo Instagram.',
      'Ici, le bruit est celui des assiettes et des tireuses — pas celui des playlists imposées. Bienvenue au Bar Basque : luxe discret, tradition tenue, table jamais oubliée.',
    ],
  },
  menuIntro:
    'Chaque section est une promesse de provenance : la mer d’un côté, la montagne de l’autre, la cave au centre — comme sur une carte géographique qu’on aurait mangée.',
  menuCategories: [
    {
      id: 'bb-cote-mer',
      title: 'Côté Mer',
      headerImage: '/bar-basque/cat-mer.jpeg',
      intro:
        'Sélectionnés chez nos pêcheurs de Saint-Jean-de-Luz et Ciboure : poisson line-caught quand la météo le permet, anchois de Getaria en conserve d’exception, chipirons traités comme des bijoux — plancha fumante, zeste, rien d’autre.',
      items: [
        {
          name: 'Gambas à la plancha',
          price: '14 €',
          detail: 'Gambas roses G14, ail confit, piment d’Espelette — huile à la cuillère.',
        },
        {
          name: 'Chipirons à la luzienne',
          price: '12 €',
          detail: 'Encornets frais, oignon fondant, persil, jus de cuisson corsé.',
        },
        {
          name: 'Anchois de Getaria (boîte prestige)',
          price: '11 €',
          detail: 'Filets maigres, sel de salicornes, pain grillé au levain du boulanger du coin.',
        },
        {
          name: 'Txangurro gratiné',
          price: '13 €',
          detail: 'Chair de tourteau, béchamel légère, gratin doré — classique san Sebastián.',
        },
        {
          name: 'Moules marinière basque',
          price: '13 €',
          detail: 'Vin blanc sec local, échalotes, persillade — pain pour la sauce.',
        },
      ],
    },
    {
      id: 'bb-cote-terre',
      title: 'Côté Terre',
      headerImage: '/bar-basque/cat-terre.jpg',
      intro:
        'Viandes du Pays basque et charcuteries d’Ibaïama : le cochon nourri comme il faut, le jambon coupé épais, les croquetas qui tiennent la ligne — sélectionnés chez nos artisans de montagne et de vallée.',
      items: [
        {
          name: 'Jambon Ibaïama — assiette',
          price: '16 €',
          detail: 'Tranches à la main, copeaux de gras fondant, poivrons grillés en garniture.',
        },
        {
          name: 'Croquetas de chorizo ibérique',
          price: '9 €',
          detail: 'Béchamel serrée, panure croustillante, mayonnaise au piment doux.',
        },
        {
          name: 'Os à moelle grillé',
          price: '12 €',
          detail: 'Sel de guérande, pain toasté, persillade — à partager sans complexe.',
        },
        {
          name: 'Axoa de veau',
          price: '18 €',
          detail: 'Piperade maison, veau du pays, mijoté long — plat signature du dimanche.',
        },
        {
          name: 'Planche mixte charcuterie',
          price: '22 €',
          detail: 'Lomo, chorizo, saucisson basque, cornichons maison — pour 2 minimum.',
        },
      ],
    },
    {
      id: 'bb-cave',
      title: 'La Cave',
      headerImage: '/bar-basque/cat-cave.jpg',
      intro:
        'Irouléguy en rouge et en blanc, Txakoli de Getaria, cidre Kupela en bouteille — tout est servi à température de cave, jamais trop froid : le tanin a besoin d’air, le zeste aussi.',
      vinsRouges: [
        { name: 'Irouléguy « Hegoxa »', price: '8 € / verre', note: 'Tannat & Manseng noir — fruits noirs, structure longue.' },
        { name: 'Irouléguy « Tradition »', price: '38 € / bouteille', note: 'Élevage 12 mois — épices douces, finale sur le ceriseau.' },
        { name: 'Madiran (coup de cœur)', price: '9 € / verre', note: 'Tannat pur — carré, pour les viandes grillées.' },
      ],
      vinsBlancs: [
        { name: 'Irouléguy blanc', price: '7 € / verre', note: 'Gros Manseng — floral, belle acidité pour poissons gras.' },
        { name: 'Jurançon sec', price: '8 € / verre', note: 'Minéral, notes de miel sec — accord pintxo fromager.' },
      ],
      cidresTxakoli: [
        { name: 'Txakoli Getaria', price: '6 € / verre', note: 'Effervescence naturelle, salinité, apéro idéal.' },
        { name: 'Cidre Kupela brut', price: '18 € / bouteille 75 cl', note: 'Pommes amères du pays — bulles fines, finale sèche.' },
        { name: 'Cidre demi-sec « paysan »', price: '6 € / 25 cl', note: 'Rondeur fruitée, pour les fromages de brebis.' },
      ],
    },
    {
      id: 'bb-spiritueux',
      title: 'Spiritueux locaux',
      headerImage: '/bar-basque/pintxo-cafe.webp',
      intro:
        'Patxaran artisanal vieilli en cave, gin infusé au genévrier du piémont et zestes d’agrumes locaux — digestifs pour finir debout au zinc ou assis pour le dernier verre.',
      items: [
        {
          name: 'Patxaran maison (4 cl)',
          price: '8 €',
          detail: 'Prune sauvage, macération lente — sirops industriels interdits ici.',
        },
        {
          name: 'Gin basque « Harri »',
          price: '11 €',
          detail: 'Botaniques : genièvre, thym sauvage, zeste de citron caviar — tonic ou sec.',
        },
        {
          name: 'Eau-de-vie de poire du pays',
          price: '9 €',
          detail: 'Traitement en petite cuivre — longue finale poire mûre.',
        },
        {
          name: 'Digestif maison herbes du maquis',
          price: '7 €',
          detail: 'Infusion secrète — demandez au sommelier du jour.',
        },
      ],
    },
  ],
  pintxosVignettes: [
    {
      src: '/bar-basque/pintxo-theatre.jpg',
      name: 'Brocheta de chipirón',
      ingredients: 'Calamar snacké, ail doux, piment d’Espelette, huile d’olive fruitée.',
      price: '8 €',
    },
    {
      src: '/bar-basque/SteakDish.png',
      name: 'Solomillo & piperade',
      ingredients: 'Bœuf charolais, poivrons confits, oignon doux — tanin du rouge du pays en accord.',
      price: '18 €',
    },
    {
      src: '/bar-basque/FishDish.png',
      name: 'Poisson du marché',
      ingredients: 'Ligne du jour, citron confit, herbes du maquis basque.',
      price: '16 €',
    },
    {
      src: '/bar-basque/pintxo-interieur.jpg',
      name: 'Gilda revisitée',
      ingredients: 'Anchois cantabriques, olive manzanilla, piparra croquante.',
      price: '7 €',
    },
    {
      src: '/bar-basque/pintxo-cafe.webp',
      name: 'Tartine chorizo & tomate',
      ingredients: 'Chorizo ibérique grillé, tomate confite, pain cinq céréales.',
      price: '9 €',
    },
    {
      src: '/bar-basque/Menu.png',
      name: 'Assiette végétale du marché',
      ingredients: 'Légumes de producteur, œuf mollet, vinaigre de cidre.',
      price: '14 €',
    },
  ],
  testimonials: [
    {
      name: 'Maïté L.',
      rating: 5,
      text: 'Le zinc résonne encore quand on pose le verre — rare aujourd’hui.',
    },
    {
      name: 'Hugo P.',
      rating: 5,
      text: 'Pintxos qui tiennent debout : pas de mise en scène inutile.',
    },
    {
      name: 'Carla M.',
      rating: 5,
      text: 'La cave expliquée sans jargon : on sort avec une bouteille et une histoire.',
    },
  ],
  gallery: [{ caption: 'Façade — vue d’ensemble' }, { caption: 'Comptoir' }, { caption: 'Assiette signature' }],
  faq: [
    {
      q: 'Réservation obligatoire ?',
      a: 'Conseillée le vendredi et samedi soir ; le reste du temps, venez au feeling.',
    },
    {
      q: 'Menus enfants ?',
      a: 'Demi-portions sur demande — même exigence de produit.',
    },
    {
      q: 'Groupes ?',
      a: 'Au-delà de 8 personnes, menu dégustation sur devis.',
    },
  ],
  openingHours: {
    lundi: 'Fermé',
    mardi: '11h30 – 23h30',
    mercredi: '11h30 – 23h30',
    jeudi: '11h30 – 23h30',
    vendredi: '11h30 – 1h00',
    samedi: '11h30 – 1h00',
    dimanche: '11h30 – 22h00',
  },
}

export const NEON_SHAKER_BUSINESS = {
  valueProposition:
    'L’Apothicaire assume la lenteur du luxe : chaque cocktail est une démonstration — dosage, glace, zeste — sous la lumière tamisée du Nive.',
  ctaPrimary: { label: 'Réservation', href: '/portfolio/neon-shaker/reservation' },
  ctaSecondary: { label: 'L’art du geste', href: '#apo-geste' },
  artDuGeste: [
    {
      step: '01',
      title: 'Le dosage',
      text: 'Chaque centilitre est pesé au compte-gouttes : équilibre sucre, acidité, alcool — rien au hasard.',
    },
    {
      step: '02',
      title: 'Le shaker',
      text: 'Glace sélectionnée, dilution contrôlée, geste du poignet calibré comme un métronome feutré.',
    },
    {
      step: '03',
      title: 'La décoration',
      text: 'Zeste brûlé au moment, herbe aromatique cueillie le matin : le dernier geste avant le silence.',
    },
  ],
  apothicaireSignatures: [
    { name: 'Negroni de l’Apothicaire', price: '16 €', note: 'Amertume longue, zeste flambé au comptoir en marbre.' },
    { name: 'Sour aux agrumes confits', price: '15 €', note: 'Blanc d’œuf, gin infusé bergamote, glace sculptée.' },
    { name: 'Manhattan bord de Nive', price: '17 €', note: 'Whisky, vermouth maison, cerise d’exception.' },
  ],
  testimonials: [
    {
      name: 'Élise M.',
      rating: 5,
      text: 'On sent la main avant le goût — rare aujourd’hui.',
    },
    {
      name: 'Julien P.',
      rating: 5,
      text: 'Bayonne a enfin un bar où le silence compte autant que le verre.',
    },
  ],
  openingHours: {
    lundi: 'Fermé',
    mardi: 'Fermé',
    mercredi: '18h00 – 1h00',
    jeudi: '18h00 – 1h00',
    vendredi: '18h00 – 1h00',
    samedi: '18h00 – 1h00',
    dimanche: '18h00 – 1h00',
  },
}

export const ZINC_DES_AMIS_BUSINESS = {
  valueProposition:
    'Le Chai Moderne ne propose pas une carte opaque : chaque bouteille est choisie chez des vignerons du piémont et du littoral — Irouléguy, Rioja, Sud-Ouest — pour dire le terroir sans le masquer.',
  ctaPrimary: { label: 'Réservation', href: '/portfolio/zinc-des-amis/reservation' },
  ctaSecondary: { label: 'Sélection', href: '#chai-bento' },
  chaiTimeline: [
    { title: 'L’entrée', text: 'Tapas du marché — anchois, gilda, pain de tradition bayonnaise.' },
    { title: 'Le partage', text: 'Planches ibériques, fromages de brebis, confitures maison du Pays basque.' },
    { title: 'Le verre juste', text: 'Accords au verre ou à la bouteille — conseil au comptoir, jamais imposé.' },
    { title: 'La suite', text: 'Digestifs locaux, café filtre, infusion du chai.' },
  ],
  testimonials: [
    {
      name: 'Inès D.',
      rating: 5,
      text: 'Le survol des bouteilles avec les notes : enfin un chai qui respecte le client.',
    },
    {
      name: 'Marc L.',
      rating: 5,
      text: 'Lumineux sans froid — on se croirait entre Bordeaux et la montagne.',
    },
  ],
  openingHours: {
    lundi: 'Fermé',
    mardi: '12h00 – 14h30 · 19h00 – 23h00',
    mercredi: '12h00 – 14h30 · 19h00 – 23h30',
    jeudi: '12h00 – 14h30 · 19h00 – 23h30',
    vendredi: '12h00 – 14h30 · 19h00 – 23h30',
    samedi: '12h00 – 15h00 · 19h00 – 23h30',
    dimanche: '12h00 – 15h00 · 19h00 – 22h30',
  },
}
