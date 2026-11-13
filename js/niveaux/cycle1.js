// Cycle 1 (BO n° 41 du 31 octobre 2024). Le texte officiel indique la progressivité par âge
// (avant 4 ans, à partir de 4 ans, à partir de 5 ans) et non par section : niveau 'MAT'.
// L’âge de référence figure entre parenthèses à la fin du domaine.

ESSENTIELS.push({
  niveau: 'MAT',
  matiere: 'francais',
  items: [
    'L’enseignement du vocabulaire est prioritaire à l’école maternelle : il doit être explicite, progressif et structuré, avec 2 corpus de mots par période en petite et moyenne sections puis 3 en grande section.',
    'Une maitrise suffisante de la langue repose sur l’usage d’au moins 2 500 mots en fin de grande section.',
    'À l’issue de l’école maternelle, les élèves prononcent avec exactitude l’ensemble des trente-six phonèmes de la langue française.',
    'Le passage de l’oral à l’écrit se prépare par la conscience phonologique, le principe alphabétique, le geste d’écriture et la dictée à l’adulte.',
    'Le professeur lit une histoire et/ou un texte documentaire au moins une fois par jour, et les élèves mémorisent un texte par semaine en moyenne et en grande section.',
  ],
});

ESSENTIELS.push({
  niveau: 'MAT',
  matiere: 'maths',
  items: [
    'Le nombre s’obtient en ajoutant un au nombre précédent, et une quantité ne dépend ni de la nature ni de l’organisation spatiale des objets.',
    'La comptine numérique est travaillée de un à six avant 4 ans, de un à douze à partir de 4 ans, jusqu’à trente à partir de 5 ans.',
    'Le nombre exprime une quantité (fonction cardinale) mais aussi un rang ou une position (fonction ordinale) : la bande numérique est construite jusqu’à dix à partir de 5 ans.',
    'À l’école maternelle, les problèmes sont tous de nature arithmétique et leur résolution ne comporte qu’une seule étape.',
    'Le programme comprend aussi les solides et formes planes, la longueur et la masse, et les motifs organisés (les motifs évolutifs ne sont travaillés qu’à partir de cinq ans).',
  ],
});

// ===== Langage oral et écrit : Acquérir le langage oral =====

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Enrichir son vocabulaire (à aborder avant 4 ans)',
  items: [
    { o: 'Comprendre, mémoriser, réemployer les mots des corpus enseignés (2 par période).', ex: 'L’élève comprend et utilise les réseaux lexicaux de la vie familiale, des activités récurrentes de la classe, des relations avec les autres, des activités scolaires et des albums lus en classe.' },
    { o: 'Comprendre, mémoriser, réemployer les mots des corpus enseignés : trouver un objet nommé et reconnaitre un objet sous différentes formes.', ex: 'L’élève trouve un objet présent nommé par le professeur en contexte (« Peux-tu me donner la colle ? ») et reconnait et nomme un objet présenté sous différentes formes.' },
    { o: 'Organiser les mots en catégorie et en réseau.', ex: 'L’élève retrouve un intrus, attribue un objet à une catégorie et range des jeux familiers par catégorie (les couverts de la dinette).' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Enrichir son vocabulaire (à partir de 4 ans)',
  items: [
    { o: 'Comprendre, mémoriser, réemployer les mots des corpus enseignés (2 par période).', ex: 'L’élève comprend et utilise les mots qui décrivent son environnement immédiat, les mots spécifiques des projets et des domaines travaillés en classe, et les mots des histoires entendues.' },
    { o: 'Organiser les mots en catégorie et en réseau.', ex: 'L’élève trouve un intrus dans une catégorie et trouve des synonymes.' },
    { o: 'Organiser les mots en réseau en s’appuyant sur des noms déjà connus.', ex: 'L’élève s’appuie sur des noms qu’il connait déjà pour comprendre un mot nouveau : animal/animalerie.' },
    { o: 'Découvrir les mots polysémiques.', ex: 'L’élève différencie la glace dans laquelle on se regarde et la glace que l’on mange.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Enrichir son vocabulaire (à partir de 5 ans)',
  items: [
    { o: 'Comprendre, mémoriser, réemployer les mots des corpus enseignés (3 par période).', ex: 'L’élève comprend et utilise les mots des émotions, des sentiments et des états mentaux des personnages de fiction, les mots qui entretiennent une proximité phonique (poule/roule/boule/moule) et les mots qui vont permettre de s’emparer des apprentissages du CP.' },
    { o: 'Distinguer le sens propre du sens figuré (sans que ces notions ne soient enseignées).', ex: 'L’élève comprend le sens de dévorer un gâteau et de dévorer un livre.' },
    { o: 'Construire des dérivations (sans que ces notions ne soient enseignées).', ex: 'L’élève construit arroser → arrosage ; gentil → gentiment → gentillesse.' },
    { o: 'S’appuyer sur des verbes et des noms connus pour comprendre et essayer de construire un nouveau mot.', ex: 'L’élève rapproche jambe et enjamber.' },
    { o: 'Chercher des hyperonymes des réseaux étudiés et inférer le sens d’un mot inconnu.', ex: 'L’élève sait que véhicule est un hyperonyme de voiture, bus, vélo, et animal un hyperonyme de chat, chien, grenouille.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Développer sa syntaxe (à aborder avant 4 ans)',
  items: [
    { o: 'Diversifier les pronoms employés.', ex: 'L’élève comprend et utilise il-elle/ils-elles (« Il mange le gâteau », « Elle est partie »), puis plus tard dans l’année le pronom je : « Moi, je mange le gâteau. »' },
    { o: 'Construire à l’oral un système de temps de plus en plus efficace.', ex: 'L’élève utilise le présent dans la première partie de l’année, puis en fin d’année un système à trois temps : présent/passé composé/présent à valeur de futur proche (aller).' },
    { o: 'Formuler des énoncés de plus en plus complexes.', ex: 'L’élève coordonne des propositions grâce à de premiers connecteurs : et/et puis : « Il monte sur le banc et puis il lance le ballon et puis il saute. »' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Développer sa syntaxe (à partir de 4 ans)',
  items: [
    { o: 'Diversifier les pronoms employés.', ex: 'L’élève utilise le pronom tu (« Toi, tu manges le gâteau ») et le pronom on (« On a été chez mamie et on a mangé le gâteau »).' },
    { o: 'Construire à l’oral un système de temps de plus en plus efficace.', ex: 'L’élève utilise l’imparfait et le passé composé (« Moi, j’étais dans la cour. J’ai fait du vélo ») et le conditionnel (« Moi, je serais un voleur et toi, tu serais un gendarme »).' },
    { o: 'Formuler des énoncés de plus en plus complexes avec de nouveaux connecteurs temporels et spatiaux.', ex: 'L’élève utilise d’abord/ensuite/après/pendant : « D’abord j’ai lancé le ballon et après j’ai sauté dans le cerceau. »' },
    { o: 'Formuler des énoncés de plus en plus complexes en subordonnant les propositions.', ex: 'L’élève utilise parce que/que/qui : « Moi, je n’ai pas mon manteau parce qu’il est resté dans la voiture. »' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Développer sa syntaxe (à partir de 5 ans)',
  items: [
    { o: 'Diversifier les pronoms employés.', ex: 'L’élève utilise les pronoms nous et vous : « Avec les CP, nous avons mangé un gâteau », « Vous, vous mangez un gâteau et pas nous. »' },
    { o: 'Construire à l’oral un système de temps de plus en plus efficace : imparfait, plus-que-parfait et imparfait à valeur de futur dans le passé.', ex: '« Moi, j’étais sur un toboggan. J’avais fait de la balançoire et j’allais faire du vélo. »' },
    { o: 'Construire à l’oral un système de temps de plus en plus efficace : futur simple et système à deux temps futur/futur antérieur.', ex: '« Quand on ira chez les correspondants, on aura déjà été au spectacle et on pourra leur raconter l’histoire. »' },
    { o: 'Formuler des énoncés de plus en plus complexes avec de nouveaux introducteurs de complexité : où/quand/pour que/si/comme, etc.', ex: '« Le chevreau s’est caché dans l’horloge pour que le loup ne le voie pas. » ; « Comme il fait chaud, elle va boire de l’eau. »' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Articuler distinctement (à aborder avant 4 ans)',
  items: [
    { o: 'Articuler distinctement les couples de consonnes proches suivants : t/k, f/s, m/n.', ex: 'À partir d’un imagier composé de paires distinctives, l’élève prononce correctement cour/tour, cube/tube, cassé/café, pouce/pouf, nain/main.' },
    { o: 'Commencer à percevoir les distinctions entre des mots proches phonologiquement.', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Articuler distinctement (à partir de 4 ans)',
  items: [
    { o: 'Distinguer et produire correctement les nasales : é/in, a/an, o/on.', ex: 'À partir d’un imagier composé de paires distinctives, l’élève prononce correctement ville/fil, dessert/désert, poison/poisson, pépé/bébé, doigt/toit, gare/car et les mots à phonèmes proches : boule/poule.' },
    { o: 'Articuler distinctement les couples de consonnes proches suivants : f/v, s/z, p/b, t/d, k/g.', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Articuler distinctement (à partir de 5 ans)',
  items: [
    { o: 'Prononcer correctement les couples de consonnes proches suivants : ch/s, ch/j, ch/z.', ex: 'À partir d’un imagier composé de paires distinctives, l’élève prononce correctement chaud/seau, mouche/mousse, bijou/bisou, manche/mange.' },
    { o: 'Prononcer correctement les doubles consonnes : br/cr/bl/pl/sl.', ex: '' },
    { o: 'À l’issue de l’école maternelle, prononcer avec exactitude l’ensemble des trente-six phonèmes qui composent la langue française.', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire des discours variés (à aborder avant 4 ans)',
  items: [
    { o: 'Entrer en communication verbale avec un adulte ou un autre élève.', ex: 'L’élève ose parler pour exprimer un besoin ou prendre part à la vie de la classe, et s’exprime lorsqu’il est sollicité.' },
    { o: 'Dire ce qu’on fait.', ex: '' },
    { o: 'Dire ce qu’on a fait et, peu à peu, ce qu’on va faire.', ex: 'L’élève dit : « Moi, je fais du toboggan. J’ai joué à la balançoire et je vais faire du vélo. »' },
    { o: 'Prendre part à l’oralisation d’un court texte mémorisé.', ex: 'L’élève participe à un moment collectif d’oralisation d’une comptine, d’une chanson, d’un court poème ou d’un bref extrait d’un album mémorisé.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire des discours variés (à partir de 4 ans)',
  items: [
    { o: 'Dire ce qu’on va faire.', ex: 'L’élève dit : « Après la récréation, on va aller dans la salle de motricité et on va rouler sur le tapis. »' },
    { o: 'Dire comment on a fait ou comment on va faire.', ex: 'L’élève dit : « Sur la grande affiche, on a collé les papiers et après on a mis la peinture avec les doigts. On a tapoté doucement. »' },
    { o: 'Oraliser un court texte mémorisé.', ex: 'L’élève récite une comptine, une chanson, un court poème ou un bref extrait d’album qui a été mémorisé.' },
    { o: 'Participer à des échanges en restant dans le propos.', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire des discours variés (à partir de 5 ans)',
  items: [
    { o: 'Décrire une action ou une activité qui a été menée par un autre élève.', ex: 'L’élève dit : « Pour acheter les fruits du gouter, il faudrait compter les élèves de la classe. »' },
    { o: 'Se faire comprendre, par le truchement du langage, d’un adulte qui ne connait rien à la situation évoquée.', ex: 'L’élève se décentre suffisamment et identifie les informations qu’il doit communiquer pour qu’un interlocuteur qui n’a pas vécu la situation puisse la comprendre.' },
    { o: 'Participer à une conversation avec un adulte ou des pairs et reformuler son propos s’il n’a pas été compris.', ex: '' },
    { o: 'Émettre une hypothèse.', ex: 'L’élève dit : « Si on voulait de la peinture verte, il faudrait mélanger du jaune avec du bleu. »' },
  ],
});

// ===== Passer de l’oral à l’écrit : se préparer à apprendre à lire =====

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Acquérir les habiletés phonologiques et le principe alphabétique (à aborder avant 4 ans)',
  items: [
    { o: 'Identifier les sons de la langue, lors de situations d’écoute proposées par le professeur.', ex: 'L’élève discrimine et identifie des sons familiers, localise le son (la source), et compare, apparie et reproduit les sons.' },
    { o: 'Identifier un mot donné à l’oral dans une phrase, dans un texte.', ex: '' },
    { o: 'Scander les syllabes d’un mot.', ex: 'L’élève prononce son prénom, puis une comptine en scandant les syllabes, ou frappe les syllabes d’un mot dans ses mains.' },
    { o: 'Dire des comptines courtes comprenant des phonèmes proches.', ex: '' },
    { o: 'Reconnaitre et nommer certaines lettres de son prénom écrit en capitales.', ex: 'L’élève retrouve l’étiquette de son prénom (lettres capitales) parmi d’autres et l’utilise pour marquer sa présence ou évoquer une production.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Acquérir les habiletés phonologiques et le principe alphabétique (à partir de 4 ans)',
  items: [
    { o: 'Utiliser la voix parlée, chantée et les possibilités vocales (imitation de sons, onomatopées) afin d’expérimenter différents sons ; entendre, discriminer des phonèmes.', ex: 'L’élève discrimine et identifie les sons de la langue, les localise dans une suite, reproduit des sons (onomatopées) et des intonations.' },
    { o: 'Manipuler les syllabes d’un mot (ajout, suppression, permutation, répétition, fusion, substitution).', ex: 'À l’oral et sans support écrit, l’élève dénombre les syllabes de mots familiers, compare les mots selon le nombre de syllabes et les classe.' },
    { o: 'Nommer les lettres de son prénom et quelques lettres de mots connus.', ex: 'L’élève épèle son prénom ou un mot connu afin qu’un tiers puisse le composer.' },
    { o: 'Connaitre la correspondance entre les lettres scriptes majuscules et minuscules et les lettres cursives minuscules.', ex: 'L’élève compose un mot connu en commençant par la première lettre et en respectant l’ordre des lettres (même graphie, puis graphies différentes).' },
    { o: 'Donner les valeurs sonores de quelques lettres de mots simples connus.', ex: 'L’élève utilise le nom de quelques lettres connues pour représenter les sons entendus (les voyelles).' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Acquérir les habiletés phonologiques et le principe alphabétique (à partir de 5 ans)',
  items: [
    { o: 'Utiliser les possibilités sonores de la voix ; augmenter sa mémoire auditive et sa capacité de concentration.', ex: 'L’élève discrimine et identifie les sons de la langue, les localise dans une suite et les mémorise, et différencie les sons proches : on/en/un.' },
    { o: 'Supprimer, ajouter, remplacer, inverser, substituer, fusionner les syllabes d’un mot.', ex: 'L’élève fusionne les syllabes d’attaque de POISSON et la syllabe finale de SOURIS pour obtenir un pseudo-mot POIRIS.' },
    { o: 'Repérer et produire des rimes et des assonances ; entendre, discriminer, manipuler des phonèmes.', ex: 'L’élève trouve le son /f/ dans une liste de mots, localise un phonème dans un mot et trouve l’intrus à l’initiale entre sac/Sacha/cartable.' },
    { o: 'Connaitre le nom des lettres de l’alphabet et leurs différentes graphies (capitale, minuscules scriptes, cursives).', ex: 'L’élève reconnait et nomme toutes les lettres d’un mot écrit dans les trois graphies, et épèle les lettres d’un mot connu afin qu’un tiers puisse l’écrire.' },
    { o: 'Distinguer des lettres visuellement proches (b/d, c/e/o, p/q) grâce à leur écriture cursive et les nommer correctement.', ex: '' },
    { o: 'Connaitre le nom des lettres de l’alphabet et leur valeur sonore hormis les occlusives ; discriminer des mots auditivement proches.', ex: 'L’élève discrimine et identifie les mots auditivement proches : poule/boule/roule/moule/coule/foule.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'S’éveiller à la diversité linguistique (à aborder avant 4 ans)',
  items: [
    { o: 'Écouter des chants, des comptines, des histoires connues dans des versions en français et en langue étrangère.', ex: 'L’élève manifeste son intérêt pour d’autres langues que la sienne.' },
    { o: 'Écouter des chants, des comptines, des histoires connues dans des versions en français et en langue étrangère : répéter des sons, des mots.', ex: 'L’élève prend plaisir à s’exercer, à répéter des sons, des mots, voire des phrases très simples.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'S’éveiller à la diversité linguistique (à partir de 4 ans)',
  items: [
    { o: 'Participer à des jeux dans une autre langue : jeux de doigts, rondes, jeux dansés, mimes, jeux de cour, jeux de cartes.', ex: 'L’élève distingue des sons nouveaux en les comparant avec des sons de la langue française et mémorise des chants et des comptines dans une autre langue.' },
    { o: 'Comparer des histoires lues en français et dans une autre langue.', ex: 'L’élève mémorise quelques mots isolés, mais aussi des consignes simples permettant de réaliser une activité ou des tournures usuelles permettant de saluer et de se présenter.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Écouter et comprendre différentes formes d’écrits (à aborder avant 4 ans)',
  items: [
    { o: 'Repérer les outils fonctionnels utilisés quotidiennement en classe (étiquette du prénom, emploi du temps, affiches, etc.).', ex: 'L’élève associe un écrit connu à son utilisation : « C’est pour chanter, raconter/écouter des histoires, le dire aux parents, faire un gâteau. »' },
    { o: 'Reconnaitre quelques écrits utilisés et produits en classe (comptines, recettes, carnet de lecteur).', ex: '' },
    { o: 'Reconnaitre un personnage, le nommer et le situer dans les illustrations.', ex: 'L’élève identifie les livres dans lesquels se retrouve un même personnage.' },
    { o: 'Comprendre des histoires où l’enchainement des actions peut être rattaché à des expériences connues de la vie quotidienne (le bain, le coucher, etc.).', ex: 'L’élève utilise une marotte et raconte ce que le personnage fait dans chacun des albums.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Écouter et comprendre différentes formes d’écrits (à partir de 4 ans)',
  items: [
    { o: 'Reconnaitre, nommer et identifier la fonction de différents écrits rencontrés dans la vie courante.', ex: 'L’élève comprend la fonction et la destination d’une lettre d’information aux parents, des étiquettes de rangement dans la classe, de l’affichage du menu de la cantine.' },
    { o: 'Prendre conscience de la notion de destinataire et de contenu de la requête adressée par un écrit.', ex: '' },
    { o: 'Identifier et utiliser quotidiennement des outils fonctionnels pour se repérer, s’organiser, ranger.', ex: 'L’élève identifie les livres présents dans la classe et leur usage.' },
    { o: 'Identifier et décrire le personnage principal et les personnages secondaires.', ex: '' },
    { o: 'Comprendre des histoires dont les actions sont organisées autour d’une structure répétitive (rencontres successives) et commencer à comprendre les informations implicites (émotions, états et sentiments des personnages).', ex: 'À l’aide d’un support (marotte, décor, boite à histoires, tapis d’histoires), l’élève raconte l’histoire entendue plusieurs fois, en structurant son propos selon les caractéristiques des personnages et l’enchainement des évènements.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Écouter et comprendre différentes formes d’écrits (à partir de 5 ans)',
  items: [
    { o: 'Différencier les types d’écrits et associer un écrit à un projet d’écriture ou de communication.', ex: 'L’élève identifie la fonction d’un écrit (ex. : une recette de cuisine), liée aux raisons que l’on peut avoir de l’utiliser.' },
    { o: 'Repérer et dégager la structure et l’organisation (mise en page, typographie) de formes d’écrits fréquemment utilisés en classe (lettre, recette, conte, écrit documentaire, notice de fabrication).', ex: 'L’élève utilise le vocabulaire approprié pour parler des écrits (page, paragraphe, ligne, majuscule, ponctuation).' },
    { o: 'Construire les caractéristiques des personnages archétypaux (loup, princesse, ogre, sorcière, renard, fée, etc.).', ex: '' },
    { o: 'Comprendre les émotions, les intentions et les sentiments qui animent les personnages.', ex: 'L’élève explique les motivations des personnages (vouloir grandir, être le plus fort), leurs émotions (être en colère, avoir peur) et leurs relations avec autrui (l’amitié, l’entraide, la ruse).' },
    { o: 'Établir un lien entre la lecture effectuée et sa propre expérience.', ex: 'L’élève transpose les émotions ressenties par les personnages à sa propre expérience et raconte une histoire connue, dans son intégralité et sans support.' },
  ],
});

// ===== Passer de l’oral à l’écrit : se préparer à apprendre à écrire =====

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Apprendre le geste d’écriture (à aborder avant 4 ans)',
  items: [
    { o: 'Participer aux activités de motricité générale, de motricité fine et aux exercices de graphismes.', ex: 'L’élève exerce sa dextérité par des activités manuelles (reproduire des formes en pâte à modeler).' },
    { o: 'Guider son geste par le regard lorsqu’il trace ou écrit.', ex: 'L’élève produit librement des tracés continus ou discontinus.' },
    { o: 'Prendre des repères spatiaux sur le support utilisé pour tracer.', ex: 'L’élève trace quelques formes de base : traits verticaux, traits horizontaux, points, boucles et cercles.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Apprendre le geste d’écriture (à partir de 4 ans)',
  items: [
    { o: 'Adopter une posture adaptée au geste d’écriture.', ex: '' },
    { o: 'Adopter une préhension correcte du stylo et s’entrainer à ne pas le lever en écrivant.', ex: '' },
    { o: 'Utiliser de façon coordonnée les quatre articulations qui servent à tenir et guider le crayon (épaule, coude, poignet, doigts).', ex: '' },
    { o: 'Tracer des lettres capitales.', ex: 'L’élève copie en lettres capitales son prénom et/ou d’autres mots du répertoire de mots familiers de la classe.' },
    { o: 'S’initier aux tracés de l’écriture cursive.', ex: 'L’élève se repère sur un support d’écriture (aller de gauche à droite).' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Apprendre le geste d’écriture (à partir de 5 ans)',
  items: [
    { o: 'Tenir correctement son stylo par la pince des doigts et utiliser de façon coordonnée les quatre articulations (épaule, coude, poignet, doigts).', ex: '' },
    { o: 'Travailler la ligature entre deux lettres.', ex: '' },
    { o: 'Tracer des lettres en écriture cursive, les enchainer.', ex: 'L’élève mémorise et automatise le tracé des lettres en cursive et leur enchainement pour écrire son prénom sans modèle.' },
    { o: 'Écrire un mot orthographiquement transparent en cursive.', ex: 'L’élève écrit un mot orthographiquement transparent en cursive avec ou sans modèle.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire de premiers écrits (à aborder avant 4 ans)',
  items: [
    { o: 'Percevoir que l’écrit encode l’oral.', ex: 'L’élève demande à l’adulte d’écrire, de légender un dessin, et comprend que le dessin se distingue de l’écriture.' },
    { o: 'Utiliser un support écrit connu.', ex: 'L’élève récite une comptine apprise en identifiant le support écrit dont elle est issue.' },
    { o: 'Mimer la posture et les gestes d’écriture de l’adulte lors de la production de traces qui s’apparentent à de l’écriture.', ex: 'L’élève trace des signes sur une feuille en indiquant au professeur qu’il a écrit.' },
    { o: 'Tracer volontairement des signes abstraits dont on comprend qu’il ne s’agit pas de dessins, mais de lettres.', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire de premiers écrits (à partir de 4 ans)',
  items: [
    { o: 'Comprendre que lorsque l’adulte lit un même écrit plusieurs fois, ce qu’il lit est toujours identique, et que l’écrit code des sons.', ex: 'L’élève utilise le nom de quelques lettres connues pour représenter les sons entendus.' },
    { o: 'Proposer au professeur, lors d’une activité de dictée à l’adulte, le contenu d’un court message, stabiliser un énoncé oral et le mémoriser pour pouvoir ensuite le dicter au professeur.', ex: 'L’élève participe à l’activité de dictée à l’adulte et s’engage dans des essais d’écriture.' },
    { o: 'Comparer la longueur d’un texte écrit et la durée du texte entendu.', ex: '' },
    { o: 'Savoir que le sens de la lecture est de gauche à droite et de haut en bas.', ex: '' },
    { o: 'Chercher parmi les outils à sa disposition des modèles qui seront réutilisés dans un essai d’écriture.', ex: 'L’élève écrit un mot transparent avec l’appui d’un modèle, sur commande du professeur, et joue avec la langue en inventant des pseudo-mots.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'francais',
  domaine: 'Produire de premiers écrits (à partir de 5 ans)',
  items: [
    { o: 'Segmenter l’oral en mots, les mots en syllabes, quelques syllabes en phonèmes.', ex: 'L’élève repère un mot transparent dans une phrase écrite que le professeur vient de lire.' },
    { o: 'Comprendre que l’écrit encode l’oral et que les sons de la langue sont codés par des lettres.', ex: 'L’élève reformule son propos afin d’arriver à un message syntaxiquement correct qui sera dicté, et module le débit de sa parole pour l’ajuster au geste d’écriture.' },
    { o: 'Suivre la trace écrite des yeux lors d’une relecture par l’adulte d’un message produit lors d’une dictée à l’adulte.', ex: 'L’élève repère un oubli volontaire par le professeur d’un mot lors d’une activité de dictée à l’adulte.' },
    { o: 'Mémoriser la graphie d’un mot transparent, en s’appuyant sur la connaissance des lettres et la conscience phonologique, et le retranscrire sur un support.', ex: 'L’élève propose l’écriture d’un mot transparent et explicite la stratégie utilisée (copie de morceaux de mots, tracé de lettres connues, recours au principe alphabétique).' },
    { o: 'Réinvestir ses premières connaissances relatives au principe alphabétique pour produire un écrit.', ex: 'L’élève utilise quelques rapports phonie-graphie parmi les plus simples à percevoir : quelques voyelles simples et quelques consonnes fricatives (s, f, v, z, r) et liquides (l).' },
    { o: 'Comprendre qu’il existe une norme pour écrire (ponctuation, majuscules, mise en page, etc.) et persévérer pour mener la production d’écrit à son terme : préparation, énonciation et révision.', ex: '' },
  ],
});

// ===== Premiers outils mathématiques =====

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Exprimer une quantité par un nombre (à aborder avant 4 ans)',
  items: [
    { o: 'Comprendre qu’une quantité d’objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale.', ex: 'L’élève reconnait puis réalise des collections de même cardinal (d’abord deux objets, puis trois, voire quatre) mais de caractéristiques différentes ou organisées de manières différentes dans l’espace.' },
    { o: 'Comprendre que si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant dans la suite orale des noms des nombres.', ex: 'Si l’enseignant a demandé une voiture puis dit « J’en voulais deux », l’élève donne une voiture supplémentaire.' },
    { o: 'Dénombrer une collection d’objets (jusqu’à trois, voire quatre).', ex: 'L’élève dénombre la quantité de chaises autour d’une table, en déplaçant les objets un à un pour construire le principe de cardinalité.' },
    { o: 'Constituer une collection (jusqu’à trois, voire quatre objets) d’un cardinal donné.', ex: 'L’élève répond à la demande : « Donne-moi trois voitures ».' },
    { o: 'Comparer des quantités.', ex: 'L’élève compare globalement six crayons placés dans un pot transparent à deux crayons placés dans un autre, avec les locutions « plus que » et « moins que ».' },
    { o: 'Composer et décomposer des nombres (deux, trois, voire quatre) et les verbaliser.', ex: 'L’élève verbalise « un et un font deux ; deux et un font trois » et « trois, c’est un et deux ; trois c’est deux et un ».' },
    { o: 'Associer une quantité, le nom d’un nombre et une écriture chiffrée.', ex: 'L’élève nomme le nombre (inférieur ou égal à trois, voire quatre) correspondant à une quantité d’objets ou à une représentation analogique et vice versa.' },
    { o: 'Connaitre la comptine numérique de un à six.', ex: 'L’élève récite de façon ordonnée et segmentée la comptine jusqu’à six, en partant de un.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Exprimer une quantité par un nombre (à partir de 4 ans)',
  items: [
    { o: 'Poursuivre la compréhension qu’une quantité d’objets ne dépend ni de leur nature ni de leur organisation spatiale.', ex: 'L’élève reconnait et réalise des collections d’objets de même cardinal (jusqu’à six) mais de caractéristiques ou d’organisation spatiale différentes.' },
    { o: 'Parcourir une collection en passant une et une seule fois par chacun de ses éléments.', ex: 'Dans une boite de douze œufs fermée et vide percée de douze fentes, l’élève met un jeton, et un seul, dans chaque fente sans oublier d’alvéole.' },
    { o: 'Dénombrer une collection d’objets (jusqu’à six).', ex: 'L’élève utilise le principe de cardinalité pour dénombrer par énumération et va chercher, en un seul trajet, juste ce qu’il faut de verres pour qu’il n’y ait pas d’assiette sans verre ni de verre sans assiette.' },
    { o: 'Constituer une collection d’un cardinal donné (jusqu’à six objets).', ex: 'L’élève réalise des collections contenant la même quantité d’objets qu’une collection donnée, qu’une représentation analogique donnée ou dont la quantité est énoncée oralement.' },
    { o: 'Comparer des quantités.', ex: 'L’élève compare quatre voitures sur une table et six vélos sur l’autre en dénombrant chacune des collections : « il y a donc plus de vélos que de voitures ».' },
    { o: 'Composer et décomposer des nombres inférieurs ou égaux à six.', ex: 'L’élève réalise des compositions et des décompositions avec les doigts d’une ou des deux mains et verbalise les décompositions des nombres de deux à six.' },
    { o: 'Écrire en chiffres les nombres de un à six.', ex: 'L’élève s’initie à l’écriture des nombres dans des situations de communication.' },
    { o: 'Connaitre la comptine numérique de un à douze.', ex: 'L’élève récite la comptine numérique de un à douze de façon ordonnée et segmentée.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Exprimer une quantité par un nombre (à partir de 5 ans)',
  items: [
    { o: 'Poursuivre la compréhension qu’une quantité d’objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale.', ex: 'L’élève reconnait et réalise des collections de même cardinal (jusqu’à dix, voire au-delà), dont le cardinal est donné par une représentation analogique, par le nom du nombre ou par son écriture chiffrée.' },
    { o: 'Dénombrer une collection d’objets (jusqu’à dix, voire au-delà).', ex: 'Devant huit objets organisés en deux constellations de quatre, l’élève compte de un en un, ou surcompte à partir de quatre, ou verbalise « ça fait huit parce que quatre et quatre font huit ».' },
    { o: 'Constituer une collection d’un cardinal donné (jusqu’à dix, voire au-delà).', ex: 'L’élève réalise une collection dont la quantité d’objets est représentée par son écriture chiffrée, ou en réunissant des collections plus petites.' },
    { o: 'Comparer des quantités.', ex: 'L’élève utilise les locutions « plus que », « moins que », « autant que » et compare des quantités données par leur écriture chiffrée ou par le nom des nombres.' },
    { o: 'Composer et décomposer des nombres inférieurs ou égaux à dix, voire au-delà.', ex: 'L’élève verbalise les doubles (« deux et deux font quatre », « deux fois trois font six », « cinq et cinq font dix ») et les décompositions des nombres compris entre deux et dix.' },
    { o: 'Surcompter (c’est-à-dire compter de un en un à partir d’un nombre donné).', ex: '« Pour ajouter quatre et cinq, je mets cinq dans ma tête et je compte quatre sur mes doigts à partir de cinq : six, sept, huit, neuf. Donc quatre et cinq font neuf. »' },
    { o: 'Écrire en chiffres les nombres de un à dix.', ex: 'L’élève écrit des nombres dans des situations de communication.' },
    { o: 'Connaitre et utiliser la comptine numérique jusqu’à trente.', ex: 'L’élève récite la comptine de un à trente, jusqu’à un nombre donné, en partant d’un nombre autre que un, à rebours de dix à un, et de deux en deux jusqu’à vingt en partant de un et de deux.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Exprimer un rang ou une position par un nombre (à partir de 4 ans)',
  items: [
    { o: 'Comprendre la notion de rang.', ex: 'L’élève repère le rang d’un objet dans une suite ordonnée de cardinal inférieur ou égal à six en montrant le premier, le deuxième, le troisième, jusqu’au sixième élément.' },
    { o: 'Déterminer l’effet d’un déplacement sur une position.', ex: 'À partir d’une position initiale, l’élève détermine la position résultant d’un avancement ou d’un recul d’une ou de deux unités, en surcomptant (« cinq, six » à partir du quatre).' },
    { o: 'Se familiariser avec le début de la bande numérique.', ex: 'L’élève positionne des représentations (constellation de points, doigts, écriture chiffrée) des nombres inférieurs ou égaux à six dans les premières cases de la bande numérique et complète une bande numérique lacunaire.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Exprimer un rang ou une position par un nombre (à partir de 5 ans)',
  items: [
    { o: 'Comprendre la notion de rang d’un objet.', ex: 'L’élève repère le premier, le dernier, le deuxième et l’avant-dernier d’une suite ordonnée, et le rang d’un élément dans une suite d’au plus dix éléments.' },
    { o: 'Comprendre la notion de rang d’un objet : changer le point de départ ou le sens du parcours.', ex: 'L’élève décrit oralement la position d’un escargot caché sous l’une de dix cartes alignées : « l’escargot est sous la sixième carte en partant du disque bleu ».' },
    { o: 'Déterminer l’effet d’un déplacement sur une position.', ex: 'L’élève verbalise la procédure permettant de déterminer la position résultant d’un avancement ou d’un recul à partir d’une position initiale.' },
    { o: 'Comprendre le lien entre un ajout et un avancement et celui entre un retrait et un recul.', ex: 'L’élève exploite les compositions et les décompositions des nombres jusqu’à dix.' },
    { o: 'Construire la bande numérique jusqu’à dix.', ex: 'L’élève positionne des représentations des nombres inférieurs ou égaux à dix dans les premières cases de la bande numérique, y place un objet à une position donnée et la complète quand elle est lacunaire.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Utiliser les nombres pour résoudre des problèmes (à aborder avant 4 ans)',
  items: [
    { o: 'Rechercher le tout ou une partie dans un problème de parties-tout.', ex: 'L’élève manifeste sa compréhension du problème en réalisant l’action décrite par l’énoncé avec du matériel figuratif.' },
    { o: 'Rechercher le tout ou une partie dans un problème de parties-tout : ajout.', ex: 'Si une valise contient deux peluches et que l’enseignant en ajoute une devant l’élève et ferme la valise, l’élève répond à « Combien y a-t-il de peluches dans la valise maintenant ? »' },
    { o: 'Rechercher le tout ou une partie dans un problème de parties-tout : retrait.', ex: 'Dans une boite opaque contenant quatre crayons dont l’enseignant retire deux devant l’élève, l’élève dit combien il y a de crayons dans la boite maintenant.' },
    { o: 'Utiliser ses doigts pour compter, surcompter ou décompter.', ex: 'L’élève perçoit visuellement la solution quand les quantités mises en jeu sont petites.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Utiliser les nombres pour résoudre des problèmes (à partir de 4 ans)',
  items: [
    { o: 'Rechercher le tout ou une partie dans un problème de parties-tout.', ex: 'L’élève dénombre une collection, la mémorise, puis trouve la quantité dissimulée sous un chapeau par l’enseignant.' },
    { o: 'Rechercher le tout ou une partie dans un problème de parties-tout : retrait.', ex: 'Pour « Lilou avait cinq kiwis et elle en a mangé deux », l’élève dit « je recule de deux à partir de cinq : quatre ; trois » ou « cinq, c’est deux et trois, il lui reste trois kiwis ».' },
    { o: 'Trouver une position finale à partir d’une position initiale et d’un déplacement sur une piste du type du jeu de l’oie ou sur la bande numérique.', ex: 'L’élève précise la case d’arrivée à partir d’une case de départ et du résultat d’un lancer de dé sur un jeu de plateau, avec des contraintes qui imposent de reculer.' },
    { o: 'Rechercher le tout dans un problème de groupements.', ex: 'Devant trois boites opaques contenant chacune deux crayons, l’élève trouve le nombre total de crayons.' },
    { o: 'Rechercher la valeur d’une part dans un problème de partage équitable.', ex: 'Avec six gâteaux à partager équitablement entre deux poupées, l’élève trouve le nombre de gâteaux que va recevoir chaque poupée.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Utiliser les nombres pour résoudre des problèmes (à partir de 5 ans)',
  items: [
    { o: 'Déterminer le tout ou une partie dans un problème de parties-tout (d’abord deux parties, puis éventuellement trois).', ex: 'Si trois cubes rouges, un cube bleu et deux cubes verts sont mis dans une boite opaque, l’élève détermine le nombre total de cubes.' },
    { o: 'Déterminer la quantité d’objets ayant été ajoutée ou retirée à une collection à partir de ses quantités initiale et finale.', ex: 'Si huit élèves veulent un vélo alors que seulement deux vélos sont sortis, l’élève précise le nombre de vélos qu’il faut sortir pour que chacun ait un vélo.' },
    { o: 'Déterminer la position finale (respectivement initiale) à partir de la position initiale (respectivement finale) et d’un déplacement.', ex: '' },
    { o: 'Déterminer le cardinal d’une collection à partir de celui d’une autre collection et de l’écart entre les deux.', ex: 'L’élève résout « Pierre a cinq billes. Il a trois billes de moins que Julie. Combien Julie a-t-elle de billes ? », énoncé en discordance avec l’opération à effectuer.' },
    { o: 'Déterminer le tout dans un problème de groupement d’objets.', ex: 'Avec quatre assiettes sur une table, l’élève va chercher en un seul voyage la quantité exacte de gâteaux pour qu’il y ait deux gâteaux dans chaque assiette.' },
    { o: 'Déterminer la valeur d’une part dans un problème de partage équitable (avec éventuellement un reste).', ex: 'L’élève, qui dispose de dix jetons, détermine combien de gâteaux va recevoir chacune de deux poupées.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer les solides et les formes planes (à aborder avant 4 ans)',
  items: [
    { o: 'Reconnaitre, trier et classer des objets selon leur forme.', ex: 'L’élève reconnait visuellement et tactilement des objets de même forme qu’un objet donné et classe selon leur forme des objets qui diffèrent aussi par d’autres critères.' },
    { o: 'Percevoir l’invariance de la forme d’un objet par rapport aux déplacements qu’il peut subir.', ex: 'L’élève encastre des objets.' },
    { o: 'Reproduire des assemblages de solides ou de formes planes.', ex: 'À partir d’un modèle, l’élève reproduit un assemblage à l’échelle d’au plus quatre éléments (puzzle, pavage, assemblage de solides).' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer les solides et les formes planes (à partir de 4 ans)',
  items: [
    { o: 'Reconnaitre et classer des solides (cube, boule, pyramide à base carrée, cylindre) et des formes géométriques planes (triangle, carré, disque).', ex: 'L’élève reconnait visuellement et tactilement un solide ou une forme plane correspondant à un solide ou une forme donnés, et classe des solides et des formes planes.' },
    { o: 'Reproduire des assemblages de solides ou de formes planes (au maximum cinq).', ex: 'L’élève manipule (tourne, retourne) des solides pour les encastrer et des formes planes pour les superposer à un modèle.' },
    { o: 'Reproduire un modèle comportant jusqu’à cinq éléments.', ex: 'L’élève reproduit un modèle (puzzle, pavage, assemblage de solides) comportant jusqu’à cinq éléments.' },
    { o: 'Produire différentes empreintes d’un objet ou d’un solide.', ex: 'L’élève produit différentes empreintes d’un objet ou d’un solide et, inversement, trouve un objet ou un solide associé à une empreinte donnée.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer les solides et les formes planes (à partir de 5 ans)',
  items: [
    { o: 'Décrire quelques solides simples : cube, pavé, boule, pyramides à base carrée ou triangulaire, cylindre, cône.', ex: 'L’élève précise oralement la nature et le nombre de faces nécessaires à la réalisation d’un cube, d’une pyramide.' },
    { o: 'Reconnaitre, trier et classer des formes géométriques planes, indépendamment d’autres critères comme la couleur, la taille, l’orientation.', ex: 'L’élève reconnait visuellement et tactilement une forme géométrique correspondant à une forme donnée (carré, rectangle, triangle, disque) et trie et classe des formes géométriques.' },
    { o: 'Décrire et nommer quelques figures géométriques simples : carré, rectangle, triangle, disque.', ex: 'L’élève décrit et nomme ces formes présentées dans toutes les orientations, par exemple un triangle non équilatéral dont aucun côté n’est horizontal.' },
    { o: 'Reproduire des assemblages de solides (au maximum cinq) et de formes planes (au maximum huit).', ex: 'L’élève reproduit un modèle (puzzle, pavage, assemblage de solides) non nécessairement à l’échelle.' },
    { o: 'S’approprier la règle comme outil de tracé.', ex: 'L’élève utilise la règle pour effectuer des tracés.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer des grandeurs : la longueur, la masse (à aborder avant 4 ans)',
  items: [
    { o: 'Longueur : reconnaitre un objet de même longueur qu’un objet donné.', ex: '' },
    { o: 'Longueur : comparer des objets selon leur longueur.', ex: 'L’élève perçoit visuellement qu’un objet est plus long qu’un autre lorsque leurs longueurs sont très différentes, ou le déplace pour le mettre à la même origine quand elles diffèrent de peu.' },
    { o: 'Longueur : classer des objets selon leur longueur.', ex: 'L’élève superpose trois briques par ordre décroissant de longueur pour construire un escalier et répartit des briques en trois groupes selon leur longueur.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer des grandeurs : la longueur, la masse (à partir de 4 ans)',
  items: [
    { o: 'Longueur : comparer directement des longueurs d’objets rectilignes et verbaliser le résultat.', ex: 'L’élève utilise à bon escient les locutions « plus long que », « plus court que », « de même longueur que ».' },
    { o: 'Longueur : classer et ordonner des objets rectilignes selon leur longueur et verbaliser le résultat.', ex: 'L’élève classe selon leur longueur quatre bandes de papier différant par leur longueur et par leur couleur, ou superpose six briques par ordre décroissant de taille pour construire un escalier.' },
    { o: 'Masse : comparer les masses de deux objets.', ex: 'L’élève soupèse des objets pour les classer selon leur masse lorsque celles-ci sont très différentes, par exemple une balle de tennis et une boule de pétanque.' },
    { o: 'Masse : comparer des objets dont les masses diffèrent de peu.', ex: 'L’élève utilise une balance de type Roberval et les locutions « plus lourd que », « plus léger que », « de même masse que ».' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Explorer des grandeurs : la longueur, la masse (à partir de 5 ans)',
  items: [
    { o: 'Longueur : comparer indirectement des longueurs d’objets rectilignes.', ex: 'L’élève utilise une bande témoin pour y reporter différentes longueurs afin de les comparer.' },
    { o: 'Longueur : ordonner des objets rectilignes selon leur longueur (au maximum cinq).', ex: 'L’élève utilise une bande témoin pour y reporter différentes longueurs afin de les ordonner.' },
    { o: 'Longueur : produire un objet rectiligne de même longueur qu’un objet donné.', ex: '' },
    { o: 'Masse : ordonner les masses de trois objets et verbaliser les résultats.', ex: 'L’élève utilise une balance de type Roberval pour comparer des masses.' },
    { o: 'Masse : reconnaitre l’égalité de deux masses et verbaliser le résultat.', ex: 'L’élève réalise l’équilibre sur une balance de type Roberval et utilise la transitivité : si a ˂ b et b ˂ c alors a ˂ c.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Se familiariser avec les motifs organisés (à aborder avant 4 ans)',
  items: [
    { o: 'Mémoriser un motif répétitif très simple.', ex: 'L’élève reproduit de mémoire un motif répétitif présentant une alternance.' },
    { o: 'Reproduire un motif répétitif à l’identique.', ex: 'L’élève recopie à l’identique un motif répétitif composé de quelques éléments.' },
    { o: 'Compléter un motif.', ex: 'L’élève reproduit une partie du motif qui est cachée, anticipe les éléments cachés puis vérifie en retirant le cache.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Se familiariser avec les motifs organisés (à partir de 4 ans)',
  items: [
    { o: 'Mémoriser un motif répétitif simple.', ex: 'L’élève reproduit de mémoire, après l’avoir observée, une tour de neuf briques avec alternance d’une brique bleue et de deux briques jaunes.' },
    { o: 'Reconnaitre un motif répétitif à ses régularités.', ex: 'L’élève identifie parmi plusieurs configurations celles qui contiennent un motif répétitif et trouve un intrus parmi des éléments ne respectant pas totalement une organisation logique.' },
    { o: 'Décrire oralement des motifs répétitifs simples de différentes natures, sans nécessairement recourir au vocabulaire spécialisé.', ex: 'L’élève verbalise les éléments d’un motif répétitif simple visuel, sonore ou gestuel.' },
    { o: 'Prolonger l’amorce d’un motif répétitif et verbaliser la règle de prolongement utilisée.', ex: 'L’élève prolonge l’amorce d’un motif répétitif visuel, sonore ou gestuel en verbalisant sa structure et explique sa règle de prolongement.' },
  ],
});

ATTENDUS.push({
  niveau: 'MAT',
  matiere: 'maths',
  domaine: 'Se familiariser avec les motifs organisés (à partir de 5 ans)',
  items: [
    { o: 'Repérer et décrire oralement la structure d’un motif évolutif (par exemple relevant de la transcription formelle ABAABBAAABBB).', ex: 'L’élève verbalise un motif évolutif simple : « un carré, un disque, deux carrés, deux disques et on recommence en ajoutant un à chaque fois ».' },
    { o: 'Identifier la structure d’un motif répétitif ou évolutif indépendamment des éléments physiques qui le composent.', ex: 'L’élève transcrit un motif visuel simple avec des symboles différents de ceux qui le composent et reconnait des motifs visuels ayant la même structure.' },
    { o: 'Créer des motifs de différentes natures.', ex: 'L’élève crée un motif (visuel, sonore ou gestuel) et le décrit afin qu’un autre élève soit capable de le reproduire.' },
    { o: 'Identifier et verbaliser les règles donnant lieu à différents prolongements d’une même amorce.', ex: 'L’élève transcrit sous forme visuelle ou gestuelle un motif sonore (et vice versa).' },
  ],
});
