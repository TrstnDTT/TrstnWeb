/**
 * Contenus longs pour les mini-sites Perceur / Tattoo (Atelier 1920, Neo-Ink, Le Labo).
 * Fusionné dans BUSINESS_RICH — textes uniques par établissement.
 */

const TP = '/stock-photos/tattoo-piercing'

export const ATELIER_1920_EXT = {
  clientProcessSteps: [
    {
      title: 'Consultation',
      icon: '◇',
      copy:
        'Nous prenons le temps d’écouter l’histoire derrière le motif : échelle sur le corps, lisibilité à distance, et ce que la peau peut supporter sans trahir le trait dans dix ans. Aucune pression commerciale : si le projet doit mûrir, on repousse la séance.',
    },
    {
      title: 'Dessin & stencyl',
      icon: '✎',
      copy:
        'Le dessin final est calibré au calque puis transféré en stencyl autocollant : grain de la zone, tension musculaire et plis sont anticipés. Pour les aplats old school, nous préférons un stencil dense qui guide le shader sans « baver » sur les contours.',
    },
    {
      title: 'Séance',
      icon: '○',
      copy:
        'Machine à bobines ou hand-poked selon le motif : le dermographe traditionnel impose un rythme où chaque coup d’aiguille est entendu. Pauses, hydratation, repositionnement — la séance reste un rituel maîtrisé, jamais une course contre la montre.',
    },
    {
      title: 'Cicatrisation',
      icon: '◈',
      copy:
        'Nous orientons vers une cicatrisation en milieu humide : film secondaire ou pansement hydrocolloïde selon zone, lavage doux sans friction, crème sans parfum. Suivi J+7 pour ajuster les soins si la peau réagit — le noir traditionnel doit vieillir en patine, pas en bouillie grise.',
    },
  ],
  hygieneLuxury: {
    intro:
      'L’atelier applique un protocole d’hygiène hospitalière adapté au geste artisanal : tout ce qui touche la peau est traçable, tout ce qui est réutilisable est stérilisé selon la norme en vigueur.',
    points: [
      {
        title: 'Stérilisation & traçabilité',
        detail:
          'Pochettes stériles ouvertes devant vous, lots enregistrés. Autoclave classe B avec cycle chimique et physique ; indicateurs intégrateurs archivés. Les tubes et poignées sont barrières ou enveloppes à usage unique.',
      },
      {
        title: 'Aiguilles à usage unique',
        detail:
          'Chaque module est scellé ; l’aiguille ne sort de son emballage qu’au moment de la pose. Aucun réemploi, aucun affûtage « maison » : nous refusons les pratiques qui économisent quelques centimes au détriment de votre derme.',
      },
      {
        title: 'Encres REACH & pigments déclarés',
        detail:
          'Nos encres respectent le règlement REACH sur les substances pigmentaires : pas de mélanges opaques non étiquetés, transparence sur les charges minérales et les diluants stériles utilisés pour les dégradés.',
      },
    ],
  },
  zoomPortfolio: {
    intro:
      'Gros plans sur le grain de peau : ce n’est pas le décor qui compte, mais la façon dont l’encre s’assoit dans le stratum — micro-contrastes, bords nets, aplats sans craquelure prématurée.',
    items: [
      { src: `${TP}/mandala-robin.jpg`, alt: 'Grain de peau et lignes mandala, précision du trait', span: 'md:col-span-2 md:row-span-2' },
      { src: `${TP}/thomas-pineiro-tattoo.webp`, alt: 'Détail réalisme, texture dermique et ombrage', span: 'md:col-span-1' },
      { src: `${TP}/neotraditional-tattoo-mask-graffiti.webp`, alt: 'Contour néo-traditionnel, aplats et bords francs', span: 'md:col-span-1' },
      { src: `${TP}/piercing.jpg`, alt: 'Proximité peau — référence lumière et relief', span: 'md:col-span-1 md:row-span-2' },
      { src: `${TP}/piercing.webp`, alt: 'Macro texture cutanée autour du motif', span: 'md:col-span-2' },
    ],
  },
  materialHeritage: {
    intro:
      'Ici, le matériel n’est pas un gadget : c’est la prolongation du geste. Les machines à bobines — parfois appelées « coil » — gardent le rythme des studios du siècle dernier : un battement mécanique qu’on règle à l’oreille autant qu’au volt.',
    paragraphs: [
      'Les bobines traditionnelles tirent leur énergie d’un champ magnétique : le ressort rappelle l’aiguille, le condensateur amortit la frappe. Nous les entretenons comme des instruments : alignement des axes, graissage minimal, contacts propres — jamais de machine « fatiguée » qui arrache la peau.',
      'Le respect des anciens codes ne veut pas dire archaïsme aveugle : nous couplons parfois une rotative silencieuse pour les fins dégradés, mais les contours et les aplats historiques restent le domaine du coil quand le client souhaite cette empreinte sonore et tactile.',
    ],
    bullets: [
      {
        label: 'Bobines calibrées',
        text: 'Réglage de la course d’aiguille et de la tension pour limiter la micro-traumatisation répétée.',
      },
      {
        label: 'Dermographe & manche lourd',
        text: 'Équilibre du poids pour les longues séances : le poignet du tatoueur reste stable, le trait droit.',
      },
      {
        label: 'Rituels d’atelier',
        text: 'Préparation du poste, silence pendant les passages critiques, respect du rythme du modèle — héritage des shops où l’on signait d’un motif pour la vie.',
      },
    ],
  },
  tattooArtistsNarrative: [
    {
      name: 'Marc Delmas',
      role: 'Dotwork & traditionnel américain',
      story:
        'Marc a grandi parmi les planches gravées du XVIIIe siècle : son grand-père reliait des traités d’architecture, et l’enfant voyait dans les hachures de cuivre une cartographie du contraste. Aujourd’hui, il transpose cette lecture en dotwork : chaque point est une note, jamais une approximation. Il dit qu’un mandala n’est pas « décoratif » : c’est une mesure du temps qu’on accepte de rester immobile. À l’Atelier 1920, il a imposé le hand-poked pour les motifs où la machine ferait trop « propre » — il cherche la légère irrégularité qui donne âme au noir.',
    },
    {
      name: 'Sophie Arnaud',
      role: 'Old school & lettrage — héritage des flashs muraux',
      story:
        'Ancienne illustratrice de presse, Sophie a troqué la deadline du journal contre le temps du cuir. Elle puise dans les archives du lettrage américain et les chromos publicitaires des années 30 : roses épanouies, panthères au regard fixe, bannières dont les fauteuils de cinéma se souviennent encore. Son geste est celui du pinceau reconstitué en aiguille : aplats rouges brique sans surcouche, verts forêt qui vieillissent en velours. Elle raconte chaque flash comme une phrase qu’on ne peut écrire qu’une fois sur la peau.',
    },
  ],
}

export const NEO_INK_EXT = {
  clientProcessSteps: [
    {
      title: 'Consultation data-driven',
      icon: '▸',
      copy:
        'Brief structuré : morphologie scannée, photos HD sous plusieurs angles, contraintes professionnelles (uniforme, UV). Nous traduisons votre intention en gabarit vectoriel avant toute discussion de prix au cm².',
    },
    {
      title: 'Dessin vectoriel & stencyl HD',
      icon: '◆',
      copy:
        'Le motif est finalisé sur tablette : courbes Bézier, épaisseurs nominales, points d’ancrage exportés vers le stencyl thermique. Les zones de dilution sont annotées pour le shader — zéro improvisation floue sur une géométrie qui doit tenir la grille.',
    },
    {
      title: 'Séance rotative',
      icon: '◎',
      copy:
        'Rotatives à régulation électronique : cadence stable pour les lignes laser, shaders en passes croisées pour éviter les cratères. Monitoring de la peau : si le derme signale la fatigue, on fragmente la séance — la précision prime sur la performance.',
    },
    {
      title: 'Cicatrisation pilotée',
      icon: '◇',
      copy:
        'Protocole post-séance avec rappels numériques : cicatrisation en milieu humide, interdiction des UV, contrôle des micro-crevasses sur noir dense. Ajustement du rendu à distance si une zone capricieuse demande une retouche ciblée.',
    },
  ],
  hygieneLuxury: {
    intro:
      'Neo-Ink traite l’hygiène comme une couche logicielle : aucun raccourci, journaux d’autoclave consultables, pigments conformes REACH avec fiches techniques archivées.',
    points: [
      {
        title: 'Chaîne stérile numérotée',
        detail:
          'Aiguilles cartouches fermées, ouverture au dernier moment ; traçabilité lot par lot. Surfaces désinfectées entre chaque client, film protecteur sur le planning pour les zones à fort contact.',
      },
      {
        title: 'Encres & diluants tracés',
        detail:
          'Palette étiquetée REACH : pas de mélange « secret » dans un gobelet — chaque flacon a son lot et sa date. Diluants stériles pour les dégradés, jamais d’eau du robinet dans les caps.',
      },
      {
        title: 'EPI & barrières',
        detail:
          'Gants nitrile changés à chaque étape critique, masques si besoin, recyclage des déchets piquants conforme. Le client voit le protocole : transparence totale.',
      },
    ],
  },
  zoomPortfolio: {
    intro:
      'Portfolio « zoom » : macro sur le filet de peau, intersections géométriques, transitions noir & gris sans banding — la preuve que le futur a une texture.',
    items: [
      { src: `${TP}/mandala-robin.jpg`, alt: 'Macro mandala — précision géométrique sur grain fin', span: 'md:col-span-1 md:row-span-2' },
      { src: `${TP}/thomas-pineiro-tattoo.webp`, alt: 'Réalisme — pores et volumes sous shader', span: 'md:col-span-2' },
      { src: `${TP}/neotraditional-tattoo-mask-graffiti.webp`, alt: 'Néo-trad — aplats et arêtes nettes', span: 'md:col-span-1' },
      { src: `${TP}/mandala-robin.jpg`, alt: 'Répétition motif — homogénéité du trait', span: 'md:col-span-2' },
      { src: `${TP}/piercingg.webp`, alt: 'Contraste lumière / ombre sur relief cutané', span: 'md:col-span-1' },
    ],
  },
  digitalExperience: {
    headline: 'L’expérience digitale — du pixel à la peau',
    intro:
      'Le projet naît sur tablette : stylet calibré, calques séparés pour les volumes, export vers la réalité augmentée. Vous superposez le motif sur votre avant-bras ou votre mollet via l’application dédiée : rotation, échelle, test sous la lumière du jour avant le premier contact avec l’aiguille.',
    paragraphs: [
      'La RA ne remplace pas le regard du tatoueur : elle accélère la décision. Vous validez l’angle, la lisibilité sur votre garde-robe, l’interaction avec un tatouage existant. En cabine, nous recalibrons le stencil sur la courbure réelle — la simulation a réduit les allers-retours frustrants.',
      'Pour les pièces XL, nous synchronisons la maquette 3D avec le fichier stencil double couche : la première couche pose les repères, la seconde verrouille les zones de remplissage. C’est du workflow industriel appliqué au derme.',
    ],
    bullets: [
      'Conception sur tablette & export vectoriel DPI peau',
      'Réalité augmentée : prévisualisation in situ (iOS / Android)',
      'Synchronisation stencil — fichier maquette pour retouches millimétriques',
    ],
  },
  cyberArtistsNarrative: [
    {
      name: 'Jordan « Jax » Meyer',
      specialty: 'Géométrie & mandalas XL',
      story:
        'Issu du dessin industriel, Jordan voit la peau comme une feuille de CAO : axes, contraintes, tolérances. Il a abandonné les plans d’usine pour des mandalas qui défient la perspective — chaque segment est une équation de tension. Il travaille exclusivement à la rotative pour des aplats d’une densité qu’il compare au « remplissage G-code » : pas de trou, pas de surcouche inutile. Son studio ressemble à une salle blanche : néon froid, silence, et le bourdonnement régulier de la machine qui confirme que la géométrie tient.',
    },
    {
      name: 'Inès Carvalho',
      specialty: 'Réalisme noir & gris — maître des volumes',
      story:
        'Inès sculpte à l’ombre. Ancienne portraitiste pour éditeurs scientifiques, elle a appris à rendre la matière sans couleur : poils, métal, eau. Sur la peau, elle traduit la photographie en couches de gris qui respectent le grain — jamais de gris boueux qui masquent le sujet. Elle exige le raw HD, deux rendez-vous de validation, et une séance où le modèle peut s’endormir : son travail est lent, méditatif, presque chirurgical. Elle dit que le réalisme n’est pas une copie : c’est une présence qui continue de respirer sous la lumière.',
    },
  ],
}

export const LEBO_PEAU_EXT = {
  clientProcessSteps: [
    {
      title: 'Consultation anatomique',
      icon: '◇',
      copy:
        'Nous cartographions l’oreille ou le visage : épaisseur du cartilage, vascularisation, bijoux existants. Certains emplacements sont refusés si l’anatomie risque la migration ou la déchirure — le luxe, c’est aussi le « non » argumenté.',
    },
    {
      title: 'Choix du bijou & stérile',
      icon: '✦',
      copy:
        'Titane F-136 ou or 14k/18k : longueur de tige, diamètre de boule ou disque, passage de filetage interne. Le bijou reste scellé jusqu’à l’ouverture sur plateau — vous validez la référence avant déballage.',
    },
    {
      title: 'Perçage à l’aiguille',
      icon: '○',
      copy:
        'Aiguille américaine stérile homologuée, sans pistolet : le trajet est contrôlé, le choc tissulaire réduit. Lubrifiant médical si muqueuse autorisée. Le geste est lent, expliqué, avec points de repère miroir à trois angles.',
    },
    {
      title: 'Cicatrisation & suivi',
      icon: '◈',
      copy:
        'Fiche illustrée : saline stérile, évitement des rotations inutiles, sommeil sur l’oreille non percée. Contrôle J+7 : nous surveillons hyperplasie, déplacement du trou, signaux d’allergie — la cicatrisation du cartilage se joue sur des semaines, pas des jours.',
    },
  ],
  hygieneLuxury: {
    intro:
      'Au Labo, l’hygiène est le produit de luxe : cabine ventilée, stérilité traçable, encadrement des alliages comme en bijouterie clinique.',
    points: [
      {
        title: 'Stérilisation & autoclave',
        detail:
          'Instruments ou emballages stériles ouverts sous vos yeux ; autoclave classe B avec journaux d’incubation. Les pinces et mandrins suivent un cycle documenté — rien ne revient « à peu près » propre.',
      },
      {
        title: 'Aiguilles & consommables',
        detail:
          'Une aiguille, un piercing : canules ou aiguilles à bec, emballage intact. Gants stériles par phase, désinfection cutanée en cascade, refus du perçage si la peau présente une lésion active.',
      },
      {
        title: 'Matériaux & REACH',
        detail:
          'Titane implant-grade certifié, or sans nickel libre problématique pour nos montures : conformité avec les exigences européennes sur les alliages destinés au contact prolongé avec la peau.',
      },
    ],
  },
  zoomPortfolio: {
    intro:
      'Gros plans : poli miroir du titane, sertissage de l’or, peau calme autour du trou — la précision du geste se lit au millimètre.',
    items: [
      { src: `${TP}/nosepiercing.webp`, alt: 'Macro nez — bijou fin et peau', span: 'md:col-span-2' },
      { src: `${TP}/nosepiercing2.webp`, alt: 'Détail arcade — alignement et lumière', span: 'md:col-span-1 md:row-span-2' },
      { src: `${TP}/piercingg.webp`, alt: 'Texture peau & reflet métal', span: 'md:col-span-1' },
      { src: `${TP}/piercing.webp`, alt: 'Proximité piercing — netteté du trou', span: 'md:col-span-2' },
      { src: `${TP}/piercing.jpg`, alt: 'Cabinet — stérilité et calme', span: 'md:col-span-1' },
    ],
  },
  jewelryGuide: {
    intro:
      'Tout bijou n’est pas égal : le métal dicte la tolérance, le poli dicte la friction, le carat dicte la couleur. Voici comment nous orientons la pièce vers votre anatomie et votre style.',
    alloys: [
      {
        name: 'Titane ASTM F-136',
        subtitle: 'Référence implant',
        detail:
          'Alliage titane grade implant, biocompatible, léger et résistant à la corrosion. Idéal pour un premier piercing ou un port 24/7 : anodisation au volt pour des teintes bronze, rose ou vert émeraude sans revêtement allergisant. C’est notre métal par défaut pour cartilage et nez.',
      },
      {
        name: 'Or 14 carats',
        subtitle: 'Équilibre durabilité & teinte',
        detail:
          'Titane d’or avec un alliage plus « tenace » pour les pièces soumises aux chocs (lobe, certaines boucles). Couleur champagne à jaune selon le rapport cuivre/argent. Nous le réservons aux lobes matures ou aux clients qui préfèrent la chaleur de l’or sans le budget du 18k.',
      },
      {
        name: 'Or 18 carats',
        subtitle: 'Luxe & coloris noble',
        detail:
          'Plus riche en or fin, teinte plus profonde, excellent pour les hélix curated et les studs visibles. Sertissage pierre possible avec chute de lumière maîtrisée. Contre-indication : sport de contact violent sur la zone — nous recommandons alors le titane pour la phase de cicatrisation.',
      },
    ],
  },
  anatomyPiercings: [
    {
      name: 'Helix',
      zone: 'Cartilage supérieur de l’oreille',
      healing: '6 à 12 mois',
      note: 'Sommeil sur oreiller en trou ; éviter casque serré les premières semaines.',
    },
    {
      name: 'Tragus',
      zone: 'Cartilage antérieur, face au conduit',
      healing: '4 à 9 mois',
      note: 'Écouteurs intra-auriculaires à espacer ; pas de pression répétée sur le capuchon.',
    },
    {
      name: 'Conch',
      zone: 'Cuvette centrale du pavillon',
      healing: '6 à 12 mois',
      note: 'Bijou initial souvent plus long pour laisser le gonflement descendre ; suivi serré J+14.',
    },
    {
      name: 'Flat',
      zone: 'Plat supérieur du pavillon',
      healing: '6 à 10 mois',
      note: 'Zone exposée aux brosses cheveux — protocole saline strict.',
    },
    {
      name: 'Forward helix',
      zone: 'Branche avant vers le visage',
      healing: '5 à 9 mois',
      note: 'Anatomie variable : nous refusons si l’épaisseur du cartilage est insuffisante.',
    },
  ],
  piercingTeamNarrative: [
    {
      name: 'Camille Renard',
      role: 'Pierceuse senior — cartilage & arcade',
      story:
        'Infirmière d’abord, artisan du trou ensuite : Camille a appris sur le terrain que la peur se dissout quand le geste est nommé. Elle perce comme on cartographie : repères au stylo stérile, validation miroir, respiration synchronisée avec la cliente. Elle refuse les modes TikTok qui sacrifient l’anatomie : « un conch n’est pas un accessoire, c’est une décision de six mois minimum. » Son cabinet sent la saline et le savon neutre — pas le parfum, jamais.',
    },
    {
      name: 'Thomas El-Khoury',
      role: 'Bijoutier clinique — titane & or',
      story:
        'Thomas venait des benches de prototypage joaillier : il façonnait des maquettes pour des maisons parisiennes avant de comprendre que le vrai luxe était la pièce qui dort dans le tissu sans protester. Au microscope, il vérifie filetages, jeu axial et poli miroir. Il parle de « tolérance mécanique » comme d’un son : un bijou mal dimensionné, c’est une vibration qui finit par migrer. Chaque monture F-136 ou or 18k quitte son banc avec une identité — numéro de lot, stérilisation, trace jusqu’à votre oreille.',
    },
  ],
}
