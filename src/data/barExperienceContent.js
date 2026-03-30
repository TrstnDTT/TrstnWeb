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
    'Mixologie sous néons — zeste torréfié, shaker à sec, bassline jusqu’à 4 h.',
  ctaPrimary: { label: 'Line-up DJ', href: '#ns-dj' },
  ctaSecondary: { label: 'Signatures', href: '#ns-signatures' },
  mixologieIntro:
    'Chaque profil aromatique est une colonne du menu : les Signatures pour l’audace, les Intemporels pour la précision du classique, les mocktails pour la complexité sans alcool — distillats botaniques, amertume maîtrisée, fraîcheur volontaire.',
  signatures: [
    {
      name: 'Spectre UV',
      price: '16 €',
      ingredients: 'Gin infusé shiso, liqueur violette, acidulé yuzu, glace sphère.',
      degustation: 'Floral capiteux, amertume légère en queue, frais et long en bouche.',
    },
    {
      name: 'Shaker Froid #7',
      price: '15 €',
      ingredients: 'Rhum agricole, sirop betterave clarifié, bitters cacao, citron vert.',
      degustation: 'Sucré salé complexe, texture satinée, finale épicée.',
    },
    {
      name: 'Tanin Express',
      price: '15 €',
      ingredients: 'Whisky tourbé, vermouth maison, écorce d’orange brûlée.',
      degustation: 'Fumée noble, amertume longue, accord cigarillo (sans cigare).',
    },
    {
      name: 'Nébuleuse Violette',
      price: '14 €',
      ingredients: 'Vodka infusée lavande, crème de mûre, prosecco sec.',
      degustation: 'Bulles fines, fruité noir, rafraîchissant malgré la densité.',
    },
  ],
  intemporels: [
    {
      name: 'Negroni fumé',
      price: '13 €',
      ingredients: 'Gin, Campari, vermouth rouge, écorce torréfiée au chalumeau.',
      degustation: 'Amertume équilibrée, note boisée, glace cubique unique.',
    },
    {
      name: 'Moscow Mule épicé',
      price: '12 €',
      ingredients: 'Vodka, ginger beer artisanale, lime, infusion piment doux.',
      degustation: 'Piquant maîtrisé, très frais, bulles longues.',
    },
    {
      name: 'Old Fashioned au sirop d’érable',
      price: '14 €',
      ingredients: 'Bourbon 8 ans, bitters angostura, zeste orange, sirop maison.',
      degustation: 'Sucro-amère profond, chaleur boisée, finale douce.',
    },
    {
      name: 'Margarita salée au romarin',
      price: '13 €',
      ingredients: 'Tequila reposado, triple sec, lime, bord de verre sel & romarin.',
      degustation: 'Acidité vive, herbacée, salinité qui prolonge.',
    },
  ],
  mocktails: [
    {
      name: 'Forêt 0 %',
      price: '10 €',
      ingredients: 'Distillat botanique sans alcool, sapin, concombre, tonic.',
      degustation: 'Vert profond, frais, amertume légère de quinine.',
    },
    {
      name: 'Rubis sans alcool',
      price: '10 €',
      ingredients: 'Hibiscus, framboise, vinaigre de cidre, eau gazeuse.',
      degustation: 'Floral, acidulé, bulles propres — comme un spritz sans vin.',
    },
    {
      name: 'Amber Spice',
      price: '11 €',
      ingredients: 'Kombucha maison, gingembre, agrumes, mousse de pois chiche.',
      degustation: 'Épicé chaud, mousse légère, finale citronnée.',
    },
  ],
  djSetsSemaine: [
    { day: 'Jeudi', artist: 'Nina K. · house mélodique', hours: '22h – 2h' },
    { day: 'Vendredi', artist: 'Collectif Orbit · techno liquide', hours: '23h – 4h' },
    { day: 'Samedi', artist: 'Guest + résident Neon Shaker', hours: '23h – 4h' },
  ],
  neonStoryBlocks: [
    {
      title: 'Le comptoir comme laboratoire',
      text: 'Derrière le verre : balance de précision, zestes réservés au frigo à herbes, shakers à parois doubles pour le contrôle thermique. Rien n’est versé tant que la dilution n’est pas validée au compte-gouttes.',
    },
    {
      title: 'La nuit comme territoire',
      text: 'Le néon ne remplace pas la lumière : il la découpe. Entre deux sets, le staff rince les verres au son blanc des enceintes — rythme club, pas rythme fast-food.',
    },
  ],
  testimonials: [
    {
      name: 'Alex R.',
      rating: 5,
      text: 'Le verre fume sous le néon — le shaker ne s’arrête jamais au bon moment.',
    },
    {
      name: 'Julie T.',
      rating: 5,
      text: 'Mocktail aussi sérieux que le cocktail d’à côté — enfin.',
    },
  ],
  openingHours: {
    lundi: 'Fermé',
    mardi: 'Fermé',
    mercredi: '18h00 – 2h00',
    jeudi: '18h00 – 3h00',
    vendredi: '18h00 – 4h00',
    samedi: '18h00 – 4h00',
    dimanche: 'Fermé',
  },
}

export const ZINC_DES_AMIS_BUSINESS = {
  valueProposition:
    'Le plat du jour au feutre, le pichet qui traîne, les habitués qui racontent le quartier.',
  ctaPrimary: { label: 'L’ardoise', href: '#zd-ardoise' },
  ctaSecondary: { label: 'À grignoter', href: '#zd-grignoter' },
  zincIntro:
    'Une carte qui tient sur un clipboard — pas de pages à tourner : l’ardoise du midi change, les prix restent ceux du peuple, le café est servi comme avant les écrans.',
  ardoiseMidi: {
    titre: 'Ardoise du midi — mercredi',
    entree: { nom: 'Salade de lentilles au lard paysan', detail: 'Vinaigre de cidre, herbes du potager.' },
    plat: {
      nom: 'Épaule d’agneau confite sept heures',
      detail: 'Haricots tarbais, jus corsé, herbes fraîches.',
      prix: '18 €',
    },
    dessert: { nom: 'Crème renversée au caramel', detail: 'Vanille bourbon, pas trop sucrée.' },
    formule: 'Entrée + plat + dessert : 24 €',
    vin: 'Pichet du jour (rouge Côtes de Bordeaux) : 12 €',
  },
  grignoter: [
    {
      name: 'Saucisson entier à partager',
      price: '14 €',
      detail: 'Pur porc, ail, poivre — coupé au couteau au comptoir.',
    },
    {
      name: 'Planche fromages de brebis',
      price: '16 €',
      detail: 'Ossau-Iraty, brebis des Pyrénées, confiture de cerise noire.',
    },
    {
      name: 'Terrine maison & cornichons',
      price: '9 €',
      detail: 'Pain de campagne toasté, moutarde à l’ancienne.',
    },
    {
      name: 'Chips maison & aioli',
      price: '6 €',
      detail: 'Pommes Agria, sel fin, sauce à l’ail doux.',
    },
  ],
  boissonsPeuple: [
    { name: 'Demi de pression', price: '4 €', detail: 'Bière locale, mousse crémeuse.' },
    { name: 'Kir vin blanc', price: '4,50 €', detail: 'Crème de cassis maison, muscadet du coin.' },
    { name: 'Café comptoir', price: '2 €', detail: 'Expresso serré, tasse préchauffée.' },
    { name: 'Vin au pichet (25 cl)', price: '8 €', detail: 'Rouge du patron — même bouteille qu’hier si elle est bonne.' },
    { name: 'Pastis', price: '4 €', detail: 'Ricard ou Pastis 51 — glaçon unique, comme il faut.' },
    { name: 'Diabolo menthe', price: '3,50 €', detail: 'Pour les drivers et les nostalgiques du collège.' },
  ],
  habituesTemoignages: [
    {
      name: 'Marie, libraire',
      text: 'J’entre, je ne lis pas la carte. Le plat du jour suffit — et le pichet aussi.',
    },
    {
      name: 'Sofiane, vélo',
      text: 'Le zinc des amis, c’est le seul endroit où mon téléphone reste dans la poche.',
    },
    {
      name: 'Robert, retraité',
      text: 'Quarante ans le même tabouret. Le café a changé de torréfaction, pas le silence du verre.',
    },
  ],
  testimonials: [
    {
      name: 'Inès D.',
      rating: 5,
      text: 'Brut, honnête, efficace — comme un bon bistrot doit l’être.',
    },
  ],
  openingHours: {
    lundi: 'Fermé',
    mardi: '11h30 – 23h30',
    mercredi: '11h30 – 23h30',
    jeudi: '11h30 – 23h30',
    vendredi: '11h30 – 0h30',
    samedi: '11h30 – 0h30',
    dimanche: 'Fermé',
  },
}
