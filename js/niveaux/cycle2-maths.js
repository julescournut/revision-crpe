/* Programme de mathématiques du cycle 2 (BO n° 41 du 31 octobre 2024) : CP, CE1, CE2 */

ESSENTIELS.push({
  niveau: 'CP',
  matiere: 'maths',
  items: [
    'Nombres entiers jusqu’à cent : jusqu’à cinquante-neuf au plus tard en période 2, jusqu’à cent au plus tard en période 3 ; aspects décimal (groupes de dix) et positionnel (unités, dizaines).',
    'Écriture en lettres des nombres jusqu’à cinquante maitrisée à la fin du CP ; nombres ordinaux jusqu’à « vingtième ».',
    'Addition et soustraction (soustraction opération inverse de l’addition), addition posée introduite en période 4 ou 5 ; sens de la multiplication par les additions itérées (mot « fois »).',
    'Calcul mental sur les nombres jusqu’à 100 : tables d’addition dans les deux sens, doubles et moitiés usuels ; fluence attendue en fin de CP : neuf résultats en trois minutes.',
    'Résolution de problèmes additifs de type parties-tout (une étape), additifs en deux étapes et multiplicatifs en une étape (champ numérique inférieur ou égal à 30), au moins dix problèmes par semaine.',
    'Mesures : mètre et centimètre (1 m = 100 cm), heures entières sur une horloge, monnaie en euros entiers (montants inférieurs ou égaux à cent) ; pas de calculatrice au cycle 2.',
  ],
});

ESSENTIELS.push({
  niveau: 'CE1',
  matiere: 'maths',
  items: [
    'Nombres entiers jusqu’à mille : la centaine est abordée dès le début de la période 1 et les nombres jusqu’à mille au plus tard en période 2 ; relations entre unités, dizaines et centaines.',
    'Fractions d’un tout (inférieures ou égales à 1) de dénominateur 2, 3, 4, 5, 6, 8 ou 10 : écrire, lire, comparer, additionner et soustraire des fractions de même dénominateur.',
    'Addition posée régulièrement utilisée dès le début d’année, algorithme de soustraction posée introduit en période 3 au plus tard ; symbole « × » lu « fois », commutativité de la multiplication, parité.',
    'Tables d’addition et de multiplication dans les deux sens ; fluence attendue en fin de CE1 : douze résultats en trois minutes (calcul mental sur les nombres jusqu’à 1 000).',
    'Mesures : 1 m = 100 cm, 1 km = 1 000 m, 1 kg = 1 000 g, 100 centimes = 1 €, écriture à virgule des sommes d’argent, heure et quarts d’heure (1 heure = 60 minutes).',
    'Résolution de problèmes : parties-tout, comparaison additive, deux étapes additives, multiplicatifs en une étape et mixtes en deux étapes, avec schémas en barre.',
  ],
});

ESSENTIELS.push({
  niveau: 'CE2',
  matiere: 'maths',
  items: [
    'Nombres entiers jusqu’à 10 000, atteints au plus tard en période 2 ; calculs menés sur des nombres et résultats inférieurs ou égaux à 10 000.',
    'Fractions inférieures ou égales à 1, de dénominateur inférieur ou égal à douze : égalités de fractions, bande-unité graduée, comparaison, addition et soustraction.',
    'Additions et soustractions posées (nombres jusqu’à 10 000 et montants en euros à virgule), multiplication posée introduite en période 4 au plus tard, division comme opération inverse de la multiplication (symbole « ÷ »).',
    'Fluence attendue en fin de CE2 : quinze résultats en trois minutes en calcul mental ; quinze égalités à trou d’addition et douze de multiplication en une minute.',
    'Mesures : 1 cm = 10 mm, 1 m = 1 000 mm, 1 t = 1 000 kg, 1 L = 10 dL = 100 cL ; périmètre d’un polygone ; pas de tableaux de conversion au cycle 2.',
    'Résolution de problèmes : additifs et multiplicatifs, mixtes en deux ou trois étapes, comparaison multiplicative (« fois plus »), produits cartésiens ; géométrie : losange, pyramide, patron du cube, axes de symétrie.',
  ],
});

/* ------------------------------ CP ------------------------------ */

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Nombres et numération',
  items: [
    { o: 'Comparer et dénombrer des collections en les organisant, construire des collections de cardinal donné.', ex: 'Face à une collection composée de trois barres de dix cubes et quatre cubes isolés, l’élève reconnait qu’il y a trente-quatre cubes et verbalise : « Trois dizaines et quatre unités, cela fait trente-quatre ».' },
    { o: 'Connaitre la suite écrite et la suite orale des nombres jusqu’à cent.', ex: 'L’élève sait compter, à l’oral et à l’écrit, de un en un, de deux en deux et de dix en dix en partant de n’importe quel nombre, et à rebours de un en un en partant de n’importe quel nombre.' },
    { o: 'Connaitre et utiliser diverses représentations d’un nombre et passer de l’une à l’autre.', ex: 'L’élève associe matériel (trois barres et cinq cubes), écriture en chiffres (35), nom à l’oral, unités de numération, décomposition additive 30 + 5 et écriture en lettres ; à la fin du CP, il maitrise l’écriture en lettres des nombres jusqu’à cinquante.' },
    { o: 'Connaitre la valeur des chiffres en fonction de leur position (unités, dizaines).', ex: 'L’élève sait expliquer, en s’appuyant sur la numération, pourquoi 23 n’est pas le même nombre que 32 bien que les écritures soient composées des mêmes chiffres.' },
    { o: 'Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles =, < et >, et les ordonner dans l’ordre croissant ou décroissant.', ex: 'L’élève sait placer le symbole qui convient (= ou < ou >) entre deux nombres, par exemple entre 49 et 53, et ordonner cinq nombres dans l’ordre croissant et dans l’ordre décroissant.' },
    { o: 'Savoir placer des nombres sur une demi-droite graduée de un en un.', ex: 'L’élève sait associer un nombre à un point sur une demi-droite graduée, en faisant le lien avec la distance qui sépare ce point de l’origine du repère.' },
    { o: 'Connaitre et comprendre les nombres ordinaux jusqu’à « vingtième » et repérer un rang dans une liste.', ex: 'L’élève dit « La voiture blanche est la quatrième voiture » ; dans la liste 2, 6, 10, 14, 18, il dit que 10 est en troisième position et que le quatrième nombre est 14.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Les quatre opérations',
  items: [
    { o: 'Comprendre le sens de l’addition et de la soustraction.', ex: 'La soustraction est comprise comme l’opération inverse de l’addition : on a 32 + 15 = 47, donc 47 - 32 = 15 et 47 - 15 = 32. L’ordre des termes n’a pas d’importance pour l’addition, mais il en a pour la soustraction.' },
    { o: 'Comprendre et utiliser les symboles « + », « - » et « = ».', ex: 'L’élève sait que le symbole « = » ne peut être placé qu’entre deux termes égaux : pour calculer 47 + 8, l’écriture « 47 + 3 = 50 + 5 = 55 » est incorrecte.' },
    { o: 'Poser et effectuer des additions en colonnes (introduites en période 4 ou 5).', ex: 'L’élève sait poser une addition de deux ou trois nombres à un ou deux chiffres, en positionnant les unités sous les unités et les dizaines sous les dizaines, par exemple 45 + 37 ou 28 + 8 + 56.' },
    { o: 'Comprendre le sens de la multiplication.', ex: 'Pour trois paquets de 20 biscuits, l’élève comprend et dit que « Jan a trois fois vingt biscuits » et écrit 20 + 20 + 20 (le mot « fois » dans le cadre d’additions itérées).' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Calcul mental',
  items: [
    { o: 'Connaitre dans les deux sens les tables d’addition.', ex: 'L’élève complète des « égalités à trou » du type 4 + … = 12 ; 5 + 3 = … ; 10 = 7 + … (nombres entre 0 et 10). À la fin du CP, il peut compléter huit égalités de ce type en une minute.' },
    { o: 'Connaitre les doubles et les moitiés de nombres usuels.', ex: 'L’élève donne les doubles des nombres de 1 à 10 et des dizaines entières 20, 30, 40 et 50, les moitiés des nombres pairs de 2 à 20 et des dizaines entières 40, 60, 80 et 100. À la fin du CP, il complète huit égalités de ce type en une minute.' },
    { o: 'Ajouter ou soustraire 1, 2, 10, ou 20, 30, 40, 50, 60, 70, 80 ou 90 à un nombre en s’appuyant sur la numération.', ex: 'Pour 76 - 30 : « 30, c’est 3 dizaines. 7 dizaines – 3 dizaines = 4 dizaines. Donc 76 - 30 = 46. »' },
    { o: 'Trouver le complément d’un nombre à la dizaine supérieure.', ex: 'Pour le complément de 74 à la dizaine supérieure, l’élève utilise le complément à 10 de 4, qui est 6.' },
    { o: 'Ajouter un nombre inférieur à 9 à un nombre, et ajouter 9 à un nombre.', ex: 'Pour 47 + 8, l’élève ajoute 3 pour aller à 50, puis encore 5, car 8 c’est 3 + 5 : 55. Pour ajouter 9, il ajoute 10 puis soustrait 1.' },
    { o: 'Ajouter deux nombres inférieurs à 100 en les décomposant.', ex: 'Pour 47 + 28, l’élève additionne les dizaines entre elles (60) et les unités entre elles (15), puis les deux résultats : 75.' },
    { o: 'Déterminer la moitié d’un nombre pair et soustraire un nombre inférieur à 10 à un nombre entier de dizaines.', ex: 'Moitié de 46 : 46 = 40 + 6, moitié de 40 = 20, moitié de 6 = 3, donc 23. Pour 50 - 6, il « casse » une dizaine : 4 dizaines et 10 unités, il reste 44.' },
    { o: 'Atteindre la fluence attendue en calcul mental fondé sur la numération ou des procédures apprises.', ex: 'La fluence attendue en fin de CP est la restitution de neuf résultats en trois minutes, sur des nombres et résultats inférieurs ou égaux à cent.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Résolution de problèmes',
  items: [
    { o: 'Résoudre des problèmes additifs en une étape du type parties-tout.', ex: 'Pour « Anna avait 43 cerises. Elle en a mangé 18 », l’élève représente 43 par quatre barres de dix cubes et trois cubes isolés, « casse » une barre, entoure dix-huit cubes et dénombre les cubes restants : 25. Il traite les problèmes de transformation (ajout, retrait) comme des parties-tout.' },
    { o: 'Résoudre des problèmes additifs en deux étapes (champ numérique inférieur ou égal à 30).', ex: 'Il y avait 29 enfants dans un bus ; au premier arrêt 12 descendent, au deuxième 7 montent : combien y a-t-il d’enfants dans le bus maintenant ?' },
    { o: 'Résoudre des problèmes multiplicatifs en une étape, recherche de la valeur d’un tout (champ numérique inférieur ou égal à 30).', ex: 'Pour « Paul apporte 3 paquets de biscuits. Il y a 7 biscuits dans chaque paquet », l’élève représente les biscuits par des croix et les dénombre, ou utilise des additions itérées.' },
    { o: 'Résoudre des problèmes de partage équitable : chercher le nombre de parts.', ex: 'Pour 24 élèves répartis en équipes de 4, l’élève représente vingt-quatre croix et fait des groupements de quatre croix pour symboliser les équipes.' },
    { o: 'Résoudre des problèmes de partage équitable : chercher la valeur d’une part.', ex: '3 enfants se partagent 18 images : l’élève répartit dix-huit images ou jetons en trois paquets de six, en les distribuant un à un.' },
    { o: 'Appliquer le modèle de résolution en quatre phases (comprendre, modéliser, calculer, répondre) avec régulation.', ex: 'L’élève reformule l’histoire du problème avec ses propres mots et se demande, par exemple : « Le nombre de jetons rouges trouvé est supérieur au nombre total de jetons, est-ce possible ? ». Au moins dix problèmes par semaine, dans le champ numérique jusqu’à cent.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : longueurs et masses',
  items: [
    { o: 'Utiliser le lexique spécifique associé aux longueurs et comparer des objets ou des segments selon leur longueur.', ex: 'L’élève comprend et utilise long, court, près, loin ; il compare deux objets déplaçables en les superposant, et ordonne jusqu’à cinq baguettes ou cinq bandelettes selon leur longueur.' },
    { o: 'Savoir mesurer la longueur d’un segment en utilisant une règle graduée.', ex: 'L’élève utilise une règle graduée en centimètres pour mesurer des segments ou construire des segments d’une longueur donnée.' },
    { o: 'Connaitre et utiliser les unités mètre et centimètre (m et cm), savoir qu’un mètre est égal à cent centimètres, connaitre quelques longueurs de référence.', ex: 'L’élève sait dire si la longueur d’une trousse est plutôt 2 cm, 20 cm ou 1 m, et estimer la hauteur de la porte, la largeur de la classe ou la longueur du couloir.' },
    { o: 'Utiliser le lexique associé aux masses et comparer des objets selon leur masse.', ex: 'L’élève comprend et utilise lourd, léger ; il compare deux ou trois objets en les soupesant et les ordonne par ordre croissant avec une balance du type Roberval (comparaison deux à deux).' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : monnaie',
  items: [
    { o: 'Utiliser le lexique spécifique lié à la monnaie.', ex: 'L’élève comprend et utilise : plus cher, moins cher, rendre la monnaie, billet, pièce, somme, reste, euros.' },
    { o: 'Comparer les valeurs de deux ensembles de pièces et de billets.', ex: 'L’élève compare du point de vue de la valeur et non du nombre de pièces ou de billets ; il sait que dix pièces de 1 € ont la même valeur qu’un billet de 10 €.' },
    { o: 'Déterminer la valeur en euro d’un ensemble de pièces et de billets et constituer une somme d’argent donnée.', ex: 'L’élève produit 48 € en utilisant le moins de pièces possible et le moins de billets possible (montants toujours inférieurs ou égaux à cent euros entiers).' },
    { o: 'Simuler des achats en manipulant des pièces et des billets fictifs, rendre la monnaie.', ex: 'Pour payer plusieurs objets, l’élève peut les payer séparément, ou chercher d’abord leur valeur totale ; on peut aussi donner plus que la valeur due et le vendeur rend la monnaie.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : repérage dans le temps',
  items: [
    { o: 'Lire sur une horloge à aiguilles une heure donnée en heures entières.', ex: 'L’élève sait lire des heures entières (par exemple trois heures, neuf heures, mais aussi midi) montrées sur un cadran à aiguilles.' },
    { o: 'Positionner les aiguilles d’une horloge correspondant à une heure donnée (uniquement des heures entières inférieures ou égales à douze).', ex: 'L’élève sait positionner les aiguilles d’un cadran correspondant à une heure donnée du matin ou de l’après-midi.' },
    { o: 'Associer une heure à un moment de la journée.', ex: 'L’élève sait associer des actions familières (se lever, aller à l’école, déjeuner, etc.) à des heures affichées sur des horloges.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Espace et géométrie : solides',
  items: [
    { o: 'Reconnaitre les solides usuels suivants : cube, boule, cône, cylindre, pavé.', ex: 'L’élève sait dire qu’une boite à chaussures a la forme d’un pavé, qu’une boite de conserve a la forme d’un cylindre et qu’une balle de tennis a la forme d’une boule. Au CP, le cube n’est pas considéré comme un pavé.' },
    { o: 'Décrire un cube ou un pavé en utilisant le terme « face » ; connaitre le nombre et la nature des faces d’un cube et d’un pavé.', ex: 'Un cube ou un pavé lui étant donné, l’élève sait le nommer et le décrire en parlant de ses faces : nombre de faces et nature des faces (carré ou rectangle).' },
    { o: 'Construire des cubes et des pavés.', ex: 'À partir d’un modèle, l’élève assemble les différentes faces d’un cube ou d’un pavé pour le reproduire.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Espace et géométrie : géométrie plane',
  items: [
    { o: 'Reconnaitre et nommer des formes planes (disque, carré, rectangle et triangle) dans un assemblage et dans son environnement proche.', ex: 'L’élève décrit des relations entre formes planes : « Il y a deux triangles qui forment un rectangle. »' },
    { o: 'Donner une première description du carré, du rectangle, du triangle en utilisant les termes « sommet » et « côté ».', ex: 'L’élève nomme la figure, la justifie en donnant son nombre de côtés et en mentionnant les longueurs de côtés égales pour le carré et le rectangle ; il donne le nombre de sommets et de côtés d’un polygone.' },
    { o: 'Repérer visuellement des alignements, utiliser la règle pour repérer ou vérifier des alignements et comme instrument de tracé.', ex: 'L’élève dit si trois points sont alignés en utilisant la règle quand la réponse n’est pas évidente, et trace une droite passant par deux points (horizontale, verticale ou oblique).' },
    { o: 'Construire un carré, un rectangle, un triangle ou un assemblage de ces figures sur du papier quadrillé ou pointé.', ex: 'L’élève sait compléter un rectangle dont deux côtés consécutifs sont déjà tracés, et compléter un carré dont un côté est déjà tracé.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Espace et géométrie : repérage dans l’espace',
  items: [
    { o: 'Connaitre et utiliser le vocabulaire lié aux positions relatives.', ex: 'L’élève comprend et utilise : gauche, droite ; sur, sous, entre, devant, derrière, au-dessus, en dessous.' },
    { o: 'Situer des personnes ou des objets les uns par rapport aux autres ou par rapport à d’autres repères dans la classe.', ex: 'L’élève sait retrouver un objet ou un élève dont la position dans la classe a été décrite oralement, et repérer la position de ses camarades sur un plan de la classe.' },
    { o: 'Construire et utiliser des représentations de la classe pour localiser, mémoriser et communiquer un emplacement.', ex: 'L’élève sait retrouver un objet caché dont la position est indiquée sur un plan.' },
    { o: 'Construire et reproduire des assemblages de solides à partir d’un modèle en trois dimensions ou de représentations planes.', ex: 'L’élève construit des assemblages de cubes et de pavés à partir d’un modèle physique en trois dimensions ou d’une photographie.' },
    { o: 'Utiliser et produire une suite d’instructions qui codent un déplacement en utilisant un vocabulaire spatial précis.', ex: 'L’élève comprend et utilise : avancer, reculer, tourner à droite, tourner à gauche, monter, descendre. Les déplacements à programmer comprennent au maximum dix instructions, dont deux virages.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'maths',
  domaine: 'Organisation et gestion de données',
  items: [
    { o: 'Collecter des données et présenter ces données sous forme d’un tableau ou d’un diagramme en barres.', ex: 'L’élève effectue un recueil de données pour des populations de moins de quarante individus (enquête portant sur de deux à cinq valeurs d’un caractère qualitatif), les organise dans un tableau et construit un diagramme en barres restituant les résultats.' },
    { o: 'Interpréter, lire et communiquer sur les données disponibles.', ex: 'L’élève utilise les expressions « le plus », « le moins », « le plus grand », « le plus petit », « autant que », « plus que » ou « moins que ».' },
    { o: 'Construire et compléter un tableau à double entrée.', ex: 'L’élève sait qu’un tableau à double entrée permet de représenter tous les couples possibles à partir de deux critères (par exemple la forme et la couleur) et qu’une ligne et une colonne permettent d’identifier le contenu de la case située à leur intersection.' },
  ],
});

/* ------------------------------ CE1 ------------------------------ */

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Nombres et numération',
  items: [
    { o: 'Dénombrer des collections en les organisant, construire des collections de cardinal donné, connaitre et utiliser la relation entre unités, dizaines et centaines.', ex: 'L’élève dénombre des collections en utilisant des groupes de dix ou de cent, y compris avec des nombres supérieurs à dix pour une unité de numération (par exemple 2 centaines, 27 dizaines et 14 unités). Il propose quatre commandes différentes pour obtenir exactement 235 timbres vendus par plaques de cent, carnets de dix ou à l’unité.' },
    { o: 'Connaitre la suite écrite et la suite orale des nombres jusqu’à mille.', ex: 'L’élève sait écrire en chiffres un nombre dicté, lire un nombre écrit en chiffres et l’écrire en lettres.' },
    { o: 'Connaitre et utiliser diverses représentations d’un nombre et la valeur des chiffres en fonction de leur position.', ex: 'Pour 635 : matériel (six plaques, trois barres et cinq cubes), unités de numération (6 centaines et 3 dizaines et 5 unités ou 63 dizaines et 5 unités ou 635 unités), décomposition (6 × 100) + (3 × 10) + (5 × 1), décomposition 600 + 30 + 5, écriture en lettres.' },
    { o: 'Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles (=, <, >) et les ordonner.', ex: 'L’élève sait ordonner dans l’ordre croissant ou décroissant un ensemble pouvant aller jusqu’à cinq nombres, par exemple : 234, 243, 239, 300 et 229, et compléter une bande numérique lacunaire.' },
    { o: 'Comprendre et savoir utiliser les expressions « égal à », « supérieur à », « inférieur à », « compris entre … et … ».', ex: 'L’élève utilise ces expressions pour comparer et encadrer des nombres jusqu’à mille.' },
    { o: 'Savoir placer des nombres sur une demi-droite graduée.', ex: 'L’élève sait placer un nombre, ou déterminer le nombre correspondant à un point sur une demi-droite graduée de un en un, ou de dix en dix, ou de cent en cent, en lien avec la distance à l’origine.' },
    { o: 'Connaitre les nombres ordinaux jusqu’à cent et les utiliser dans l’étude de suites.', ex: 'Dans une étape du Tour de France parcourue par 167 cyclistes, l’élève sait dire combien de cyclistes sont arrivés avant le quarante-huitième coureur.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Fractions',
  items: [
    { o: 'Savoir interpréter, représenter, écrire et lire les fractions 1/2, 1/3, 1/4, 1/5, 1/6, 1/8 et 1/10.', ex: 'L’élève comprend que la fraction 1/8 d’une ficelle, d’une bande de papier ou d’une figure correspond à une part du tout lors du partage de ce tout en huit parts égales. Il sait partager une bouteille d’eau en quatre parts égales dans quatre verres et dire qu’il y a un quart du contenu dans chaque verre.' },
    { o: 'Savoir interpréter, représenter, écrire et lire des fractions inférieures ou égales à 1.', ex: 'L’élève sait que trois huitièmes s’écrit 3/8, que c’est 1/8 + 1/8 + 1/8 ou trois fois un huitième, et il sait expliquer pourquoi 5/5 = 1.' },
    { o: 'Connaitre et utiliser les mots « dénominateur » et « numérateur ».', ex: 'L’élève représente la fraction 2/5 par un tout partagé en 5 parts égales dont il colorie 2 parts ; le dénominateur indique le nombre total de parts égales et le numérateur le nombre de parts coloriées.' },
    { o: 'Comparer des fractions ayant le même dénominateur, et des fractions dont le numérateur est 1.', ex: 'L’élève sait dire et expliquer pourquoi 2/5 est plus petit que 3/5 en s’appuyant sur les parts d’un tout, et pourquoi 1/5 est plus petit que 1/3 en s’appuyant sur deux partages distincts d’un même tout.' },
    { o: 'Additionner et soustraire des fractions de même dénominateur.', ex: 'L’élève sait calculer 2/3 - 1/3 ou 1/5 + 2/5 en s’appuyant sur des manipulations, des représentations et la verbalisation, et sait que 2/5 + 3/5 = 1.' },
    { o: 'Trouver le complément d’une fraction d’un tout par rapport à ce tout.', ex: 'Lucie a colorié les 3/10 d’une figure en bleu et le reste en rouge : l’élève sait quelle fraction de la figure est coloriée en rouge.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Les quatre opérations',
  items: [
    { o: 'Poser et effectuer des additions et des soustractions en colonnes.', ex: 'L’élève sait poser une addition de deux ou de trois nombres à un, deux ou trois chiffres, par exemple 245 + 437 ou 218 + 48 ou 76 + 7 + 568. Il connait un algorithme de soustraction posée (« par cassage » ou « par compensation »).' },
    { o: 'Comprendre et utiliser le symbole « × ».', ex: 'Le symbole « × » est lu « fois » ; l’élève présente « 7 × 20 biscuits = 140 biscuits » et sait que cela correspond à ajouter 20 sept fois. La présence des unités dans les calculs est fortement encouragée.' },
    { o: 'Comprendre et savoir que la multiplication est commutative.', ex: 'Un potager de huit colonnes de quatre salades contient 8 × 4 salades, mais aussi quatre rangées de huit salades, soit 4 × 8 : l’ordre des facteurs n’a pas d’importance dans une multiplication.' },
    { o: 'Connaitre la notion de parité d’un nombre.', ex: 'L’élève sait dire si un nombre est pair ou impair.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Calcul mental',
  items: [
    { o: 'Connaitre dans les deux sens les tables d’addition.', ex: 'L’élève complète des « égalités à trou » du type 4 + … = 12 ; 5 + 3 = … ; 10 = 7 + …. À la fin du CE1, il sait compléter douze égalités de ce type en une minute.' },
    { o: 'Connaitre dans les deux sens les tables de multiplication (apprentissage progressif sur toute l’année).', ex: 'L’élève complète des égalités du type 4 × … = 12 ; 5 × 3 = … ; 10 = 2 × … (A et B compris entre 0 et 10). À la fin du CE1, il peut compléter huit égalités de ce type en une minute.' },
    { o: 'Connaitre des faits multiplicatifs usuels (doubles, moitiés, multiples de 25).', ex: 'L’élève donne les doubles des nombres de 1 à 15, les moitiés des nombres pairs de 2 à 30, les moitiés des centaines entières 200, 300, 400, 500, 600 et 1 000, et connait 1 × 25 = 25, 2 × 25 = 50, 3 × 25 = 75 et 4 × 25 = 100. À la fin du CE1, il complète huit égalités de ce type en une minute.' },
    { o: 'Ajouter ou soustraire un nombre entier de dizaines ou de centaines à un nombre.', ex: 'L’élève s’appuie sur la numération pour calculer rapidement 234 + 60 ; 541 - 20 ; 354 + 500 ; 765 - 200, et des additions avec retenue comme 746 + 80.' },
    { o: 'Multiplier par 10 un nombre inférieur à 100.', ex: 'L’élève sait que, lors d’une multiplication par 10, une unité devient une dizaine et une dizaine devient une centaine : 10 × 72 = 720.' },
    { o: 'Ajouter 9, 19 ou 29 à un nombre, soustraire 9 à un nombre, soustraire un nombre inférieur à 9 à un nombre.', ex: 'Pour 523 - 7, l’élève retire 3 pour atteindre la dizaine inférieure 520, puis encore 4, car 7 = 3 + 4 : 516. Il ajoute 9, 19 ou 29 en ajoutant 10, 20 ou 30 puis en retranchant 1.' },
    { o: 'Déterminer la moitié d’un nombre pair et calculer le produit d’un nombre compris entre 11 et 19 par un nombre inférieur à 10 (distributivité).', ex: 'Moitié de 470 : 470 = 400 + 70, 200 + 35 = 235. Produit : 13 × 7 = (10 + 3) × 7 = 10 × 7 + 3 × 7 = 70 + 21 = 91.' },
    { o: 'Atteindre la fluence attendue en calcul mental fondé sur la numération ou des procédures apprises.', ex: 'La fluence attendue en fin de CE1 est la restitution de douze résultats en trois minutes, sur des nombres et résultats inférieurs ou égaux à 1 000.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Résolution de problèmes',
  items: [
    { o: 'Résoudre des problèmes additifs en une étape de type parties-tout, y compris de transformation (ajout, retrait).', ex: 'L’élève s’appuie, si cela lui est utile, sur un schéma en barre : pour « Dans mes deux coffres, j’ai 227 billes. J’en ai 113 dans mon coffre vert. Combien en ai-je dans mon coffre rouge ? », il construit le schéma et le traduit par une soustraction.' },
    { o: 'Résoudre des problèmes additifs de comparaison en une étape.', ex: 'Quand deux des trois éléments (valeur de chacune des deux parties, écart) sont donnés, l’élève cherche le troisième, avec si besoin un schéma à deux barres : « Léo a 188 billes. Lucie en a 75 de plus que Léo. Combien Lucie a-t-elle de billes ? »' },
    { o: 'Résoudre des problèmes additifs en deux étapes.', ex: 'À la pâtisserie, madame Martin achète une tarte à 17 € et un gâteau à 26 € et donne un billet de 50 € : l’élève peut réaliser un schéma pour chaque étape (achats 43 €, puis monnaie à rendre).' },
    { o: 'Résoudre des problèmes multiplicatifs en une étape (valeur du tout, nombre de parts, valeur d’une part).', ex: 'L’élève s’appuie, selon la période et les nombres, sur des manipulations, des représentations symboliques, des schémas en barre ou son calcul mental : par exemple « Un client achète 10 paquets de 25 gâteaux » ou 60 élèves en équipes de 5.' },
    { o: 'Résoudre des problèmes mixtes en deux étapes (une étape additive et une étape multiplicative).', ex: 'Abi achète sept litres d’huile à deux euros le litre et donne vingt euros au vendeur : combien le vendeur va-t-il lui rendre ?' },
    { o: 'Appliquer le modèle de résolution en quatre phases avec régulation.', ex: 'La phase « Calculer » peut être traitée par manipulation de matériel multibase, schéma, calcul mental ou opération posée. Au moins dix problèmes par semaine, dans le champ numérique jusqu’à mille.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : longueurs et masses',
  items: [
    { o: 'Connaitre et utiliser les unités mètre, centimètre, kilomètre (m, cm, km) et les relations entre les unités de longueur.', ex: 'L’élève sait que 1 m = 100 cm et 1 km = 1 000 m, et que 1 m + 46 cm = 146 cm.' },
    { o: 'Savoir mesurer la longueur d’un segment avec une règle graduée, comparer des longueurs.', ex: 'L’élève sait encadrer la longueur d’un segment par deux nombres entiers de centimètres : « La longueur du segment est entre huit et neuf centimètres. »' },
    { o: 'Connaitre quelques longueurs de référence et estimer la longueur d’un objet du quotidien.', ex: 'L’élève sait dire si la longueur d’une trousse est plutôt 2 cm, 20 cm ou 2 m.' },
    { o: 'Identifier l’objet le plus léger ou le plus lourd, et comparer des masses.', ex: 'L’élève identifie l’objet le plus léger (ou le plus lourd) parmi trois ou quatre objets en les soupesant ou avec une balance de type Roberval, et pèse des objets pour déterminer leur masse en gramme ou en kilogramme.' },
    { o: 'Connaitre et utiliser les unités gramme et kilogramme (g, kg) et savoir que 1 kg est égal à 1 000 g.', ex: 'L’élève sait ordonner quatre masses, par exemple 1 kg et 300 g ; 1 000 g ; 50 kg ; 2 kg et 100 g. Un paquet de sucre pèse 1 kg et un sachet de levure pèse environ 10 g.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : monnaie',
  items: [
    { o: 'Connaitre le lien entre les euros et les centimes.', ex: 'L’élève doit savoir qu’une pièce d’un euro a la même valeur que cent pièces d’un centime (100 centimes = 1 €), et sait constituer une somme de 1 € de différentes manières.' },
    { o: 'Comparer les valeurs en euro de deux ensembles de pièces et de billets.', ex: 'L’élève comprend que trois pièces de 2 € valent plus que 50 pièces de 10 centimes, et que 12 € c’est plus que 60 centimes bien que 12 soit plus petit que 60.' },
    { o: 'Déterminer la valeur en euro et centime d’un ensemble de pièces et de billets, et constituer une somme d’argent donnée.', ex: 'L’élève exprime la valeur d’un ensemble en euro et en centime d’euro, avec un nombre final de centimes strictement inférieur à 100 ou en utilisant l’écriture à virgule, et ordonne quatre prix quelles que soient leurs écritures.' },
    { o: 'Simuler des achats en manipulant des pièces et des billets fictifs, rendre la monnaie.', ex: 'L’élève sait rendre la monnaie lors d’un achat ; l’absence de pièces de un euro peut contraindre à utiliser des pièces de 10, 20 ou 50 centimes.' },
    { o: 'Connaitre le sens de l’écriture à virgule d’une somme d’argent.', ex: '2 € et 5 centimes s’écrit 2,05 € ; 2 € et 50 centimes s’écrit 2,50 € ; 85 centimes = 0,85 € ; 17 € = 17,00 € ; 345 centimes = 300 centimes + 45 centimes = 3 € + 45 centimes = 3,45 €.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : repérage dans le temps et durées',
  items: [
    { o: 'Lire l’heure sur une horloge à aiguilles (heures entières, heures et demi-heure, heures et quarts d’heure).', ex: 'Sachant qu’on parle d’un instant de l’après-midi, l’élève lit qu’il est « 2 heures et quart » ou « 14 heures et 15 minutes » et sait que sur une horloge digitale il est écrit « 14 : 15 ».' },
    { o: 'Positionner les aiguilles d’une horloge correspondant à une heure donnée.', ex: 'L’élève positionne les aiguilles pour une heure exprimée en heures entières inférieures à vingt-quatre, en heures et demi-heure et en heures et quarts d’heure.' },
    { o: 'Connaitre, utiliser et distinguer les heures du matin et celles de l’après-midi.', ex: 'L’élève comprend et utilise les expressions « trois heures du matin », « trois heures de l’après-midi ».' },
    { o: 'Connaitre les unités de mesure de durée, heure et minute, et les symboles associés (h et min).', ex: 'L’élève connait 1 heure = 60 minutes ; 1 demi-heure = 30 minutes ; 1 quart d’heure = 15 minutes, et sait que deux quarts d’heure font une demi-heure et que quatre quarts d’heure font une heure.' },
    { o: 'Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (dans une même journée).', ex: 'L’élève détermine la durée entre 8 h 30 min et 8 h 45 min et celle entre 15 h 45 min et 16 h 15 min, dit laquelle est la plus longue, et sait que 8 heures est la durée entre midi et 20 h.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Espace et géométrie : solides',
  items: [
    { o: 'Reconnaitre les solides usuels : cube, boule, cône, pyramide, cylindre, pavé.', ex: 'Un ensemble de solides étant donné, l’élève identifie lesquels sont des pyramides, des boules, des cubes, des cylindres, des pavés ou des cônes, et les repère dans son environnement.' },
    { o: 'Décrire un cube, un pavé ou une pyramide en utilisant les termes « face », « sommet » et « arête ».', ex: 'Un pavé, un cube ou une pyramide à base carrée lui étant donné, l’élève le nomme, décrit ses faces (carrés, rectangles, triangles) et donne le nombre de ses arêtes et de ses sommets.' },
    { o: 'Connaitre le nombre et la nature des faces d’un cube ou d’un pavé.', ex: 'L’élève sait dénombrer les faces, les arêtes et les sommets d’un polyèdre qui lui est présenté.' },
    { o: 'Construire un cube, un pavé droit ou une pyramide.', ex: 'À partir d’un modèle, l’élève reproduit un polyèdre en assemblant ses faces ou ses arêtes et ses sommets.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Espace et géométrie : géométrie plane',
  items: [
    { o: 'Utiliser le vocabulaire géométrique approprié.', ex: 'L’élève utilise à bon escient : carré, rectangle, triangle, triangle rectangle, côté, sommet, angle, disque, cercle, centre ; point, droite, segment, milieu d’un segment ; angle droit, angle aigu, angle obtus.' },
    { o: 'Reconnaitre, nommer et décrire un cercle, un carré, un rectangle, un triangle, un triangle rectangle ; connaitre les propriétés des angles et des égalités de longueur pour les carrés et les rectangles.', ex: 'L’élève sait dire qu’un rectangle a quatre sommets, quatre angles droits, quatre côtés et que les côtés opposés ont la même longueur ; « Ce n’est pas un rectangle car l’un de ses angles n’est pas droit. »' },
    { o: 'Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle et un cercle ou un assemblage de ces figures.', ex: 'Sur du papier quadrillé, pointé ou uni, l’élève complète ou trace un carré, un rectangle, un triangle ou un triangle rectangle avec une règle (graduée ou non) et une équerre.' },
    { o: 'Utiliser la règle pour vérifier des alignements et l’équerre pour vérifier qu’un angle est droit.', ex: 'L’élève identifie et trace des angles droits avec un gabarit, puis avec une équerre, et dit si un angle est aigu (plus petit qu’un angle droit) ou obtus (plus grand qu’un angle droit).' },
    { o: 'Utiliser la règle graduée, l’équerre et le compas comme instruments de tracé.', ex: 'L’élève sait tracer un cercle avec un compas, tracer le cercle de centre un point donné et passant par un autre point donné, et trouver le milieu d’un segment (par pliage).' },
    { o: 'Connaitre et utiliser le code pour les angles droits.', ex: 'L’élève sait indiquer qu’un angle est droit en utilisant le code usuel.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Espace et géométrie : repérage dans l’espace',
  items: [
    { o: 'Connaitre et utiliser le vocabulaire lié aux positions relatives.', ex: 'L’élève comprend et utilise : à gauche, à droite ; sur, sous, entre, devant, derrière, au-dessus, en dessous ; près, loin.' },
    { o: 'Construire et utiliser des représentations d’un espace familier pour localiser, mémoriser ou communiquer un emplacement.', ex: 'L’élève produit un plan de l’école sur lequel il positionne sa classe, la cantine, etc., et représente sur un plan ou une photo aérienne des lieux connus (école, mairie, bibliothèque, piscine, boulangerie).' },
    { o: 'Construire des assemblages de cubes et de pavés.', ex: 'L’élève construit des assemblages à partir d’un modèle physique en trois dimensions ou d’une représentation plane (photographie ou perspective cavalière).' },
    { o: 'Comprendre, utiliser et produire une suite d’instructions qui codent un déplacement en utilisant un vocabulaire spatial précis.', ex: 'L’élève sait coder un déplacement qu’un autre élève doit tracer sur un plan ; avec un robot, il dispose de « avancer de », « pivoter d’un quart de tour à droite », « pivoter d’un quart de tour à gauche ». Au maximum quinze instructions, dont quatre virages.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'maths',
  domaine: 'Organisation et gestion de données',
  items: [
    { o: 'Produire un tableau ou un diagramme en barres pour présenter des données recueillies.', ex: 'L’élève mène une enquête sur un caractère qualitatif pouvant prendre de deux à cinq valeurs, recueille les données pour une population de moins de cent individus, compile les résultats dans un tableau et produit un diagramme en barres dont l’axe vertical est gradué de un en un.' },
    { o: 'Lire et interpréter les données d’un diagramme en barres.', ex: 'L’élève répond à des questions comme « Quelle est la couleur la plus fréquente ? » ou « Combien d’élèves viennent à pied à l’école ? ».' },
    { o: 'Lire et interpréter les données d’un tableau à double entrée.', ex: 'L’élève répond à des questions dont les réponses figurent dans un tableau à double entrée, par exemple « Combien de garçons viennent à l’école en vélo ? ».' },
  ],
});

/* ------------------------------ CE2 ------------------------------ */

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Nombres et numération',
  items: [
    { o: 'Dénombrer des collections, construire des collections de cardinal donné, connaitre et utiliser les relations entre les unités de numération.', ex: 'L’élève dénombre des collections avec des groupes de dix, de cent ou de mille, y compris avec des nombres supérieurs à dix pour une unité (par exemple 17 unités, 8 dizaines, 32 centaines et 2 milliers). Une entreprise ayant besoin de 1 235 filtres achète uniquement des lots de cent : il sait combien de lots acheter.' },
    { o: 'Connaitre la suite écrite et la suite orale des nombres jusqu’à dix-mille.', ex: 'L’élève sait écrire en chiffres un nombre dicté, lire un nombre écrit en chiffres et l’écrire en lettres.' },
    { o: 'Connaitre et utiliser diverses représentations d’un nombre et la valeur des chiffres en fonction de leur position.', ex: 'Pour 4 635 : matériel de numération, écriture en chiffres, nom à l’oral, unités de numération (4 milliers et 6 centaines et 3 dizaines et 5 unités ou 463 dizaines et 5 unités), décomposition (4 × 1 000) + (6 × 100) + (3 × 10) + (5 × 1), puis 4 000 + 600 + 30 + 5.' },
    { o: 'Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles (=, <, >) et les ordonner.', ex: 'L’élève sait ordonner un ensemble pouvant aller jusqu’à cinq nombres, par exemple : 6 234, 6 243, 6 239, 6 300 et 5 229.' },
    { o: 'Savoir placer des nombres sur une demi-droite graduée.', ex: 'L’élève sait placer un nombre ou déterminer le nombre correspondant à un point sur une portion de demi-droite graduée de un en un, de dix en dix, de cent en cent ou de mille en mille.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Fractions',
  items: [
    { o: 'Savoir établir des égalités de fractions inférieures ou égales à 1.', ex: 'L’élève sait expliquer pourquoi six huitièmes d’un tout est égal à trois quarts de ce tout : « Si, pour un même tout, je fais des parts deux fois plus petites et si je prends deux fois plus de parts, alors j’en prends la même quantité ».' },
    { o: 'Partager une unité de longueur en fractions d’unité et mesurer des longueurs non entières par rapport à cette unité.', ex: 'L’élève sait construire par pliage une règle graduée en quarts d’unité, et une règle graduée en dixièmes d’unité en s’appuyant sur un quadrillage.' },
    { o: 'Mesurer et tracer des longueurs en fractions d’unité.', ex: 'L’élève donne des résultats comme « La longueur du segment est égale à trois quarts d’unité » ou « deux unités et un quart d’unité », et trace des segments de longueur 1/2 unité ; 1 unité + 1/5 d’unité ; 2 unités + 3/5 d’unité avec une règle graduée en dixièmes.' },
    { o: 'Comparer des fractions inférieures à 1.', ex: 'L’élève compare des fractions de même dénominateur (5/12 et 7/12), de même numérateur (5/12 et 5/8), ou dont l’un des dénominateurs est multiple de l’autre (7/12 et 5/6), et justifie sa réponse.' },
    { o: 'Additionner et soustraire des fractions.', ex: 'L’élève sait additionner et soustraire des fractions de même dénominateur, ou dont le dénominateur de l’une est un multiple du dénominateur de l’autre ; il résout le problème du gâteau dont Marc mange un dixième, Ange trois dixièmes et Saïd deux dixièmes (fraction restante).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Les quatre opérations',
  items: [
    { o: 'Comprendre et utiliser les mots « terme », « somme » et « différence ».', ex: '« La somme de 12 et de 25 est 37. », « 12 et 25 sont les termes de l’addition 12 + 25. », « La différence entre 60 et 37 est 23. »' },
    { o: 'Poser et effectuer des additions et des soustractions en colonnes.', ex: 'L’élève sait traiter les additions et les soustractions posées avec des nombres entiers inférieurs ou égaux à 10 000 et avec des nombres décimaux pour des problèmes liés à la monnaie.' },
    { o: 'Comprendre et utiliser les mots « facteur », « produit » et « multiple ».', ex: '« Le produit de 3 et de 25 est 75. », « 3 et 25 sont les facteurs de la multiplication 3 × 25. », « 75 est un multiple de 25. », « les nombres pairs sont des multiples de 2 ».' },
    { o: 'Comprendre le sens de la division et utiliser le symbole « ÷ ».', ex: 'L’élève comprend que la division est l’opération inverse de la multiplication : on a 7 × 13 = 91, donc 91 ÷ 7 = 13 et 91 ÷ 13 = 7.' },
    { o: 'Poser et effectuer des multiplications d’un nombre à deux ou trois chiffres par un nombre à un ou deux chiffres (algorithme introduit en période 4 au plus tard).', ex: 'L’élève sait calculer 16 × 548 ou 548 × 16 en posant l’opération avec le nombre ayant le moins de chiffres sur la deuxième ligne.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Calcul mental',
  items: [
    { o: 'Connaitre dans les deux sens les tables d’addition.', ex: 'L’élève complète des « égalités à trou » du type 4 + … = 12 ; 5 + 3 = … ; 10 = 7 + …. À la fin du CE2, il peut compléter quinze égalités de ce type en une minute.' },
    { o: 'Connaitre dans les deux sens les tables de multiplication.', ex: 'L’élève complète des égalités du type 7 × … = 42 ; 9 × 6 = … ; 70 = 7 × …. À la fin du CE2, il peut compléter douze égalités de ce type en une minute.' },
    { o: 'Connaitre des faits multiplicatifs usuels (doubles, moitiés, multiples de 25, décompositions de 60).', ex: 'L’élève donne les doubles des nombres de 1 à 20, les moitiés des nombres pairs de 2 à 40, les moitiés des centaines entières 200, 300, 400, 500, 600, 800, 1 000 et 1 200, connait les multiples de 25 et les décompositions de 60 : 1 × 60, 2 × 30, 3 × 20, 4 × 15, 5 × 12 et 6 × 10. Douze égalités de ce type en une minute à la fin du CE2.' },
    { o: 'Multiplier un nombre entier par 10 ou 100.', ex: 'L’élève sait que, lors d’une multiplication par 10, une unité devient une dizaine, une dizaine une centaine et une centaine un millier : 10 × 724 = 7 240.' },
    { o: 'Ajouter 8, 9, 18, 19, 28, 29, 38 ou 39 à un nombre, et soustraire 9, 19, 29 ou 39 à un nombre.', ex: 'Pour ajouter 38 à un nombre, l’élève lui ajoute 40 puis retranche 2 ; pour soustraire 29, il retranche 30, puis ajoute 1.' },
    { o: 'Multiplier un nombre entier par 4 ou par 8, et un nombre inférieur à 10 par un nombre entier de dizaines.', ex: '4 × 37 : 2 × 37 = 74 et 2 × 74 = 148. 8 × 27 : 54, 108 puis 216. 9 × 40 = 9 × (4 × 10) = (9 × 4) × 10 = 36 × 10 = 360.' },
    { o: 'Calculer le produit d’un nombre compris entre 11 et 99 par un nombre inférieur à 10 en décomposant le plus grand des deux facteurs (distributivité).', ex: '23 × 7 = (20 + 3) × 7 = (20 × 7) + (3 × 7) = 140 + 21 = 161 ; l’élève utilise aussi la décomposition dans l’autre sens : « 7 fois 23, c’est 7 fois 20 plus 7 fois 3. »' },
    { o: 'Atteindre la fluence attendue en calcul mental fondé sur la numération ou des procédures apprises.', ex: 'La fluence attendue en fin de CE2 est la restitution de quinze résultats en trois minutes, sur des nombres et résultats inférieurs ou égaux à 10 000.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Résolution de problèmes',
  items: [
    { o: 'Résoudre des problèmes additifs en une étape de types parties-tout et comparaison.', ex: 'L’élève s’appuie, si nécessaire, sur des schémas en barre ou des schémas avec déplacement sur un axe ; il résout des problèmes avec des nombres entiers supérieurs à 1 000, des prix écrits avec une virgule, et des additions ou soustractions de fractions de même dénominateur.' },
    { o: 'Résoudre des problèmes additifs en deux étapes.', ex: 'Pour « Léo a 188 billes. Lucie en a 75 de plus que Léo. Combien les deux enfants ont-ils de billes en tout ? », l’élève calcule d’abord le nombre de billes de Lucie, puis le nombre total.' },
    { o: 'Résoudre des problèmes multiplicatifs en une étape.', ex: 'Seuls les élèves en difficulté manipulent encore du matériel tangible ; pour « six dictionnaires payés 72 €. Quel est le prix d’un dictionnaire ? », l’élève s’appuie sur un schéma en barre et sa connaissance des tables de multiplication.' },
    { o: 'Résoudre des problèmes mixtes en deux ou trois étapes.', ex: 'Dans un restaurant, il y a 4 tables de 6 personnes et 7 tables de 4 personnes : combien ce restaurant peut-il recevoir de clients ?' },
    { o: 'Résoudre des problèmes de comparaison multiplicative en une étape.', ex: 'L’élève distingue « fois plus » et « fois moins » de « de plus » et « de moins » : une trottinette coute quatre fois plus cher qu’un casque à 32 €, combien coute-t-elle ?' },
    { o: 'Résoudre des problèmes mettant en jeu des produits cartésiens.', ex: 'Avec trois pantalons et sept teeshirts, l’élève produit un tableau faisant apparaitre les vingt-et-une solutions ; avec deux chapeaux, trois teeshirts et deux pantalons, il produit un arbre faisant apparaitre les douze solutions.' },
    { o: 'Travailler dans le champ numérique adapté à la structure du problème.', ex: 'Champ numérique jusqu’à 10 000, mais plus la structure est complexe, plus il est réduit : les problèmes à plus de deux étapes ou atypiques portent sur un champ inférieur à 100. Au moins dix problèmes par semaine.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : longueurs, masses et contenances',
  items: [
    { o: 'Connaitre et utiliser les unités mètre, décimètre, centimètre, millimètre, kilomètre et leurs relations.', ex: 'L’élève sait que 1 cm = 10 mm et 1 m = 1 000 mm, et effectue des conversions : 3 cm + 4 mm = 34 mm ; 16 m = 1 600 cm = 160 dm ; 5 km + 750 m = 5 750 m (sans tableau de conversion).' },
    { o: 'Mesurer, tracer un segment de longueur donnée, estimer une longueur ou une distance.', ex: 'Les longueurs peuvent être données sous différentes formes : 6 cm ; 5 cm et 3 mm ; 72 mm.' },
    { o: 'Savoir ce qu’est le périmètre d’une figure plane, comparer le périmètre de plusieurs polygones au compas et le déterminer avec une règle graduée.', ex: 'L’élève sait que le périmètre est la longueur du contour, et reporte au compas les côtés d’un polygone sur une droite. Pour le carré et le rectangle, aucune formule n’est enseignée.' },
    { o: 'Connaitre et utiliser les unités gramme, kilogramme et tonne (g, kg, t) et leurs relations.', ex: '1 kg = 1 000 g donc 3 kg = 3 000 g ; 5 462 g = 5 kg + 462 g ; 1 t = 1 000 kg donc 2 t = 2 000 kg ; 5 350 kg = 5 t 350 kg.' },
    { o: 'Comparer les contenances de différents objets.', ex: 'L’élève identifie le récipient de plus grande (ou plus petite) contenance parmi deux ou trois par transvasements, ou en les mesurant avec un étalon (nombre de verres).' },
    { o: 'Connaitre et utiliser les unités litre, décilitre et centilitre (L, dL et cL) ; savoir que 1 L est égal à 10 dL et à 100 cL.', ex: 'L’élève effectue des conversions : 1 L = 10 dL ; 1 L = 100 cL ; 780 cL = 700 cL + 80 cL = 7 L + 80 cL, et estime la contenance d’un verre, d’une bouteille, d’un arrosoir.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : monnaie',
  items: [
    { o: 'Simuler des achats en manipulant des pièces et des billets fictifs, rendre la monnaie.', ex: 'L’élève rend la monnaie par ajouts successifs : sur 5 € pour un achat de 3,68 €, « Le complément à 100 de 68 est 32, donc je rends 32 centimes pour arriver à 4 €, plus 1 € pour arriver à 5 € ».' },
    { o: 'Poser et effectuer des additions de montants en euro.', ex: 'L’élève sait poser et effectuer 4,56 € + 15,30 € ; 43,45 € + 68 € ; 43,45 € + 68 centimes ; 143 € + 3,67 € + 54 centimes (addition posée de montants à virgule au plus tard en période 2).' },
    { o: 'Poser et effectuer des soustractions de montants en euro.', ex: 'L’élève sait poser et effectuer 74,56 € - 15,30 € ; 143,45 € - 68 € ; 74,36 € - 12,50 € (soustraction posée de montants à virgule au plus tard en période 4).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Grandeurs et mesures : repérage dans le temps et durées',
  items: [
    { o: 'Lire l’heure sur une horloge à aiguilles ou un affichage digital.', ex: 'L’élève lit huit heures et demie, dix heures trente-cinq, sept heures moins le quart, quatre heures moins vingt, quinze heures quarante-deux, midi, etc.' },
    { o: 'Positionner les aiguilles d’une horloge correspondant à une heure donnée en heures entières ou en heures et minutes.', ex: 'L’élève positionne les aiguilles des heures et des minutes de cinq heures et quart, deux heures et demie, treize heures vingt, quatre heures moins le quart ou six heures dix-huit minutes.' },
    { o: 'Comparer et mesurer des durées écoulées entre deux instants affichés sur une horloge (dans une même journée).', ex: 'L’élève détermine la durée entre 8 h 30 min et 8 h 50 min et entre 15 h 40 min et 16 h 5 min et dit laquelle est la plus longue ; il sait le nombre de minutes dans deux heures et vingt minutes et utilise un axe chronologique orienté.' },
    { o: 'Résoudre des problèmes à une ou deux étapes impliquant des durées.', ex: 'Lucie est partie à 8 h 30 et rentrée à 12 h 30 : elle est sortie pendant 4 heures. Le train part à 7 h 10, met 1 h 30 jusqu’à la première gare puis 40 minutes de plus : à quelle heure arrive-t-il à la deuxième gare ?' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Espace et géométrie : solides',
  items: [
    { o: 'Nommer un cube, une boule, un pavé, un cône, une pyramide ou un cylindre.', ex: 'Un ensemble de solides étant donné, l’élève identifie lesquels sont des pyramides, des boules, des cubes, des cylindres, des pavés ou des cônes, y compris à partir d’une représentation en perspective.' },
    { o: 'Décrire un cube, un pavé ou une pyramide en utilisant les termes « face », « sommet » et « arête », et connaitre la nature des faces d’une pyramide.', ex: 'L’élève nomme le solide et justifie sa nature en indiquant le nombre et la nature de ses faces et le nombre de ses sommets et de ses arêtes. Il sait que les faces d’une pyramide sont des triangles ayant un sommet commun, à l’exception éventuelle de la base, un polygone ayant trois côtés ou plus.' },
    { o: 'Construire un cube, un pavé ou une pyramide.', ex: 'L’élève assemble les faces à partir d’un modèle en trois dimensions ou d’une représentation plane, ou construit le solide à partir de tiges à assembler.' },
    { o: 'Construire un cube à partir d’un patron.', ex: 'L’élève sait dire si un assemblage de polygones est ou non un patron d’un cube en argumentant sur le nombre, la nature et la position des faces ; la réponse est ensuite vérifiée par des pliages effectifs.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Espace et géométrie : géométrie plane',
  items: [
    { o: 'Utiliser le vocabulaire géométrique approprié.', ex: 'L’élève utilise à bon escient : polygone, triangle, quadrilatère, pentagone et hexagone ; carré, rectangle, losange, triangle rectangle ; diagonale, longueur et largeur du rectangle ; disque, cercle, centre, rayon, diamètre ; angle droit, angle aigu, angle obtus.' },
    { o: 'Reconnaitre, nommer et décrire le carré, le rectangle, le triangle, le triangle rectangle et le losange ; connaitre leurs propriétés sur les angles et les égalités de longueur.', ex: 'L’élève sait dire qu’un losange a quatre sommets et quatre côtés de même longueur, qu’un quadrilatère est un polygone ayant quatre côtés et quatre sommets, et justifier : « Ce n’est pas un carré car l’un de ses angles n’est pas un angle droit ».' },
    { o: 'Reproduire ou construire un carré, un rectangle, un triangle, un triangle rectangle et un cercle ou des assemblages de ces figures sur tout support, avec une règle graduée, une équerre ou un compas.', ex: 'L’élève construit sur papier uni un rectangle de longueur 7 cm et de largeur 3 cm, ou un carré de côté 6 cm et un cercle de rayon 4 cm ayant pour centre un des sommets du carré, ou un triangle rectangle dont les côtés de l’angle droit mesurent 10 cm et 4 cm.' },
    { o: 'Connaitre et utiliser le codage d’un angle droit et celui qui indique que des segments ont la même longueur.', ex: 'L’élève sait indiquer sur un rectangle les codes pour les quatre angles droits et des codes signalant l’égalité des longueurs des côtés opposés.' },
    { o: 'Reconnaitre si une figure possède un ou plusieurs axes de symétrie en utilisant des pliages ou du papier calque.', ex: 'L’élève repère et trace les éventuels axes de symétrie sur des représentations planes d’objets usuels (cœur, carreau, pique, trèfle, cerf-volant, rectangle, panneaux routiers, lettres majuscules).' },
    { o: 'Compléter, sur une feuille quadrillée ou pointée, une figure simple pour la rendre symétrique par rapport à un axe donné.', ex: 'L’élève complète une figure pour la rendre symétrique en s’appuyant sur le pliage, puis sur une feuille quadrillée ou pointée (l’axe étant vertical ou horizontal).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'maths',
  domaine: 'Organisation et gestion de données',
  items: [
    { o: 'Produire un tableau ou un diagramme en barres pour présenter des données recueillies.', ex: 'L’élève mène une enquête, compile les résultats dans un tableau et produit un diagramme en barres avec, pour l’axe vertical, une échelle adaptée aux données. Les caractères peuvent être qualitatifs ou quantitatifs discrets (nombre de frères et sœurs, âge).' },
    { o: 'Lire et interpréter les données d’un tableau à double entrée ou d’un diagramme en barres.', ex: 'L’élève trouve dans un tableau ou sur un diagramme les réponses à des questions du type « Quelle est la couleur la plus fréquente ? » ou « Combien d’élèves viennent à pied à l’école ? ».' },
    { o: 'Résoudre des problèmes en utilisant les données d’un tableau à double entrée ou d’un diagramme en barres.', ex: 'L’élève sait compléter un tableau à double entrée partiellement rempli, et, pour les 175 élèves de l’école Poséidon répartis dans quatre villes, compléter le graphique avec la barre de l’effectif manquant (Deltaville).' },
  ],
});
