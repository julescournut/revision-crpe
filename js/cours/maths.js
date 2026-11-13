/* Cours de mathématiques. Format d'un chapitre : voir js/cours/francais.js. */
COURS.maths = [
  {
    id: 'numeration',
    title: 'Numération décimale de position',
    intro: 'Notre système d’écriture des nombres repose sur dix chiffres et sur la valeur de position : un même chiffre vaut plus ou moins selon sa place. Comprendre ce principe est indispensable pour enseigner les nombres et les opérations.',
    blocks: [
      { t: 'h', text: 'Le principe de position' },
      { t: 'p', text: 'On dispose de dix chiffres (0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Chaque position correspond à une puissance de dix : **10 unités d’un rang forment 1 unité du rang suivant** (10 unités = 1 dizaine, 10 dizaines = 1 centaine, 10 centaines = 1 millier…). Le zéro sert à marquer une position vide : 7 305 n’a pas de dizaine.' },
      { t: 'table', head: ['Classe des milliers', 'Classe des unités simples'], rows: [
        ['centaines · dizaines · unités de mille', 'centaines · dizaines · unités'],
      ] },
      { t: 'p', text: 'Pour les décimaux, la position se prolonge à droite de la virgule : dixièmes, centièmes, millièmes. Dans 3,47, le 4 est le chiffre des dixièmes et le 7 celui des centièmes.' },

      { t: 'h', text: 'Chiffre de, nombre de' },
      { t: 'p', text: 'Le **chiffre des centaines** de 7 305 est 3 (le chiffre qui occupe le rang des centaines). Le **nombre de centaines** est 73 (on peut former 73 paquets de cent avec 7 305). De même, le chiffre des dizaines est 0, mais le nombre de dizaines est 730, et le nombre d’unités est 7 305.' },
      { t: 'tip', text: 'Pour trouver le nombre de dizaines, de centaines… d’un entier, supprime les chiffres à droite du rang demandé : le nombre de centaines de 7 305 s’obtient en supprimant 05.' },

      { t: 'h', text: 'Décompositions' },
      { t: 'list', items: [
        '**Additive** : 7 305 = 7 000 + 300 + 5.',
        '**Multiplicative (canonique)** : 7 305 = 7 × 1 000 + 3 × 100 + 0 × 10 + 5 × 1.',
        'Décomposition mixte avec les « échanges » : 7 305 = 6 milliers + 13 centaines + 5 unités.',
        'Décimal : 3,47 = 3 + 4/10 + 7/100 = 3 + 4 × 0,1 + 7 × 0,01.',
      ] },

      { t: 'h', text: 'Numération orale et écrite en lettres' },
      { t: 'p', text: 'L’oral ne suit pas parfaitement la logique décimale : on dit *soixante-dix* (60 + 10), *quatre-vingts* (4 × 20), *quatre-vingt-dix* (4 × 20 + 10), alors que la Belgique et la Suisse romande emploient *septante* et *nonante*. Les mots *onze* à *seize* ne se décomposent pas.' },
      { t: 'list', items: [
        '*Vingt* et *cent* prennent un **s** quand ils sont multipliés et **non suivis** d’un autre nombre : quatre-vingts, deux cents ; mais quatre-vingt-deux, deux cent un, deux cent cinquante.',
        '*Mille* est invariable : trois mille. *Million* et *milliard* sont des noms : deux millions.',
        '*Et* apparaît pour 21, 31, 41, 51, 61 et 71 (vingt et un, soixante et onze), mais pas pour 81 ni 91 (quatre-vingt-un, quatre-vingt-onze).',
        'Règle traditionnelle : trait d’union entre les mots d’un nombre inférieur à cent, sauf autour de *et* (*vingt et un*, *cent deux*). Les rectifications orthographiques de 1990, en usage dans les programmes scolaires, autorisent des traits d’union partout : *vingt-et-un*, *deux-cent-quatre-vingts*.',
      ] },

      { t: 'h', text: 'Autres bases' },
      { t: 'p', text: 'Dans une base b, on groupe par paquets de b. En **base 5**, on utilise les chiffres 0 à 4 et les rangs valent 1, 5, 25, 125… En **base 2**, seuls 0 et 1 existent et les rangs valent 1, 2, 4, 8, 16…' },
      { t: 'example', title: 'Passer d’une base à la base dix', items: [
        '342 en base 5 : 3 × 25 + 4 × 5 + 2 = 75 + 20 + 2 = 97.',
        '1101 en base 2 : 1 × 8 + 1 × 4 + 0 × 2 + 1 = 13.',
      ] },
      { t: 'example', title: 'Écrire 58 en base 5', items: [
        'Plus grande puissance de 5 contenue dans 58 : 25. 58 = 2 × 25 + 8.',
        'Le reste 8 = 1 × 5 + 3.',
        'Donc 58 = 2 × 25 + 1 × 5 + 3 : en base 5, il s’écrit 213. Vérification : 50 + 5 + 3 = 58.',
      ] },
      { t: 'example', title: 'Écrire 4 280 en lettres', items: [
        '4 280 = 4 000 + 200 + 80.',
        '*Quatre mille* (mille invariable) ; *deux cent* (suivi d’un autre nombre, donc sans s) ; *quatre-vingts* (en fin de nombre, avec s).',
        'Résultat : quatre mille deux cent quatre-vingts.',
      ] },

      { t: 'trap', text: 'Multiplier par 10 ne consiste pas à « ajouter un zéro » : cette règle est fausse pour les décimaux (2,5 × 10 = 25, pas 2,50). Dis plutôt que chaque chiffre **prend une position plus à gauche**. Autre confusion fréquente : confondre « chiffre des dizaines » et « nombre de dizaines ».' },
      { t: 'key', items: [
        'Valeur d’un chiffre = chiffre × valeur de son rang ; 10 unités d’un rang = 1 unité du rang suivant.',
        'Chiffre de = celui qui occupe le rang ; nombre de = combien de paquets on peut former.',
        'L’oral comporte des irrégularités (soixante-dix, quatre-vingts) et des règles d’accord pour vingt et cent.',
        'En base b, on groupe par b et il y a b chiffres.',
      ] },
      { t: 'check', q: 'Dans 8 462, donne le chiffre des dizaines puis le nombre de dizaines.', a: 'Le chiffre des dizaines est 6. Le nombre de dizaines est 846 (on supprime le 2 des unités).' },
      { t: 'check', q: 'Écris 91 et 200 en lettres.', a: '91 : quatre-vingt-onze (4 × 20 + 11, sans « et »). 200 : deux cents (cent multiplié et non suivi d’un autre nombre).' },
      { t: 'check', q: 'Convertis 10110 (base 2) en base dix.', a: '1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1 = 16 + 4 + 2 = 22.' },
    ],
  },
  {
    id: 'arithmetique',
    title: 'Multiples, diviseurs et nombres premiers',
    intro: 'L’arithmétique étudie les propriétés des entiers : divisibilité, nombres premiers, PGCD et PPCM. Ces outils servent à simplifier des fractions et à résoudre des problèmes de partage et de rencontre.',
    blocks: [
      { t: 'h', text: 'Division euclidienne, multiples et diviseurs' },
      { t: 'p', text: 'Pour deux entiers a et b (b non nul), il existe un unique couple (q, r) tel que **a = b × q + r avec 0 ≤ r < b**. Le reste est toujours strictement inférieur au diviseur. Exemple : 487 = 12 × 40 + 7, car 12 × 40 = 480 et 7 < 12.' },
      { t: 'p', text: 'Si r = 0, on dit que b est un **diviseur** de a et que a est un **multiple** de b. 0 est multiple de tous les entiers ; 1 divise tous les entiers.' },

      { t: 'h', text: 'Critères de divisibilité' },
      { t: 'table', head: ['Diviseur', 'Critère'], rows: [
        ['2', 'le chiffre des unités est pair (0, 2, 4, 6, 8)'],
        ['3', 'la somme des chiffres est un multiple de 3'],
        ['4', 'le nombre formé par les deux derniers chiffres est un multiple de 4'],
        ['5', 'le chiffre des unités est 0 ou 5'],
        ['9', 'la somme des chiffres est un multiple de 9'],
        ['10', 'le chiffre des unités est 0'],
      ] },
      { t: 'p', text: 'On combine les critères : un nombre est divisible par 6 s’il est divisible par 2 **et** par 3.' },
      { t: 'example', title: 'Tester la divisibilité de 4 536', items: [
        'Unités : 6, pair, donc divisible par 2. Pas 0 ni 5 : ni par 5, ni par 10.',
        'Somme des chiffres : 4 + 5 + 3 + 6 = 18, multiple de 3 et de 9 : divisible par 3 et par 9.',
        'Deux derniers chiffres : 36 = 4 × 9, donc divisible par 4. Vérification : 4 536 = 4 × 1 134.',
      ] },

      { t: 'h', text: 'Nombres premiers et décomposition' },
      { t: 'p', text: 'Un nombre premier a exactement **deux diviseurs** : 1 et lui-même. Donc 1 n’est pas premier, et 2 est le seul premier pair. Les premiers jusqu’à 50 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.' },
      { t: 'p', text: 'Le **crible d’Ératosthène** les trouve en barrant les multiples de 2, puis de 3, de 5, de 7… Pour tester un nombre N, il suffit d’essayer les premiers p tels que p² ≤ N : 131 n’est divisible ni par 2, 3, 5, 7 (131 = 7 × 18 + 5), ni par 11 (131 = 11 × 11 + 10) ; comme 13² = 169 > 131, il est premier.' },
      { t: 'p', text: 'Tout entier supérieur ou égal à 2 se décompose de façon **unique** (à l’ordre près) en produit de facteurs premiers : 360 = 2 × 180 = 2³ × 3² × 5 (car 8 × 9 × 5 = 360).' },

      { t: 'h', text: 'PGCD et PPCM' },
      { t: 'p', text: 'Le **PGCD** de deux nombres est leur plus grand diviseur commun ; le **PPCM** est leur plus petit multiple commun (non nul).' },
      { t: 'list', items: [
        '**Par décomposition** : PGCD = produit des facteurs premiers communs avec le plus petit exposant ; PPCM = produit de tous les facteurs avec le plus grand exposant.',
        '**Algorithme d’Euclide** : on divise, puis on divise le diviseur par le reste, etc. Le PGCD est le dernier reste non nul.',
        'Relation utile : PGCD(a, b) × PPCM(a, b) = a × b.',
      ] },
      { t: 'example', title: 'PGCD et PPCM de 84 et 90', items: [
        '84 = 2² × 3 × 7 et 90 = 2 × 3² × 5.',
        'PGCD : facteurs communs 2 et 3 : 2 × 3 = 6.',
        'PPCM : 2² × 3² × 5 × 7 = 4 × 9 × 35 = 1 260.',
        'Contrôle : 6 × 1 260 = 7 560 = 84 × 90.',
      ] },
      { t: 'example', title: 'Algorithme d’Euclide pour 252 et 198', items: [
        '252 = 198 × 1 + 54 ; 198 = 54 × 3 + 36 ; 54 = 36 × 1 + 18 ; 36 = 18 × 2 + 0.',
        'Le dernier reste non nul est 18 : PGCD(252, 198) = 18.',
      ] },
      { t: 'example', title: 'Problèmes types', items: [
        'Partage : 84 chocolats et 90 bonbons répartis en sachets identiques, sans reste, le plus grand nombre de sachets possible : PGCD(84, 90) = 6 sachets, avec 14 chocolats et 15 bonbons chacun.',
        'Rencontre : deux bus partent ensemble à 8 h, l’un passe toutes les 12 min, l’autre toutes les 18 min. Ils se retrouvent après PPCM(12, 18) = 36 min, soit à 8 h 36.',
      ] },

      { t: 'trap', text: 'Erreurs classiques : écrire un reste supérieur ou égal au diviseur ; croire que 1 est premier ; penser que tout nombre impair est premier (51 = 3 × 17 et 91 = 7 × 13 ne le sont pas) ; confondre diviseur et multiple ; utiliser le PGCD quand le problème demande un PPCM (partage : PGCD, coïncidence dans le temps : PPCM).' },
      { t: 'key', items: [
        'a = b × q + r avec 0 ≤ r < b.',
        'Critères : 2 (unité paire), 3 et 9 (somme des chiffres), 4 (deux derniers chiffres), 5 et 10 (dernier chiffre).',
        'Premier : exactement deux diviseurs ; 1 n’est pas premier, 2 est le seul premier pair.',
        'PGCD : exposants minimaux ; PPCM : exposants maximaux ; PGCD × PPCM = produit.',
      ] },
      { t: 'check', q: 'Décompose 150 en facteurs premiers.', a: '150 = 2 × 75 = 2 × 3 × 25 = 2 × 3 × 5². Vérification : 2 × 3 × 25 = 150.' },
      { t: 'check', q: 'Effectue la division euclidienne de 1 000 par 7.', a: '7 × 142 = 994 et 1 000 − 994 = 6 < 7. Donc 1 000 = 7 × 142 + 6.' },
      { t: 'check', q: 'Calcule le PGCD et le PPCM de 8 et 12.', a: '8 = 2³ et 12 = 2² × 3. PGCD = 2² = 4. PPCM = 2³ × 3 = 24. Contrôle : 4 × 24 = 96 = 8 × 12.' },
    ],
  },
  {
    id: 'fractions-decimaux',
    title: 'Fractions, décimaux et rationnels',
    intro: 'Une fraction est à la fois un partage et un nombre. Savoir la comparer, la calculer et la relier aux décimaux est au cœur du programme de l’école élémentaire et du concours.',
    blocks: [
      { t: 'h', text: 'Le sens de la fraction' },
      { t: 'p', text: 'La fraction a/b (b non nul) a deux sens liés. **Partage** : on partage l’unité en b parts égales et on en prend a. **Quotient** : a/b est le nombre qui, multiplié par b, donne a ; c’est le résultat de a ÷ b. Ainsi 3/4 de 20 vaut 20 ÷ 4 × 3 = 15, et 3/4 = 3 ÷ 4 = 0,75.' },

      { t: 'h', text: 'Égalité, simplification, comparaison' },
      { t: 'p', text: 'On ne change pas une fraction en multipliant ou divisant numérateur et dénominateur par un même nombre non nul : a/b = (a × k)/(b × k). Simplifier 18/24 en divisant par leur PGCD 6 donne 3/4, fraction **irréductible**.' },
      { t: 'list', items: [
        'Même dénominateur : la plus grande fraction a le plus grand numérateur.',
        'Dénominateurs différents : on réduit au même dénominateur (un multiple commun, de préférence le PPCM).',
        'On peut aussi comparer à 1 ou à 1/2 : 4/7 > 1/2 car 4 > 3,5.',
      ] },
      { t: 'example', title: 'Comparer 5/6 et 7/9', items: [
        'PPCM(6, 9) = 18.',
        '5/6 = 15/18 et 7/9 = 14/18.',
        '15 > 14 donc 5/6 > 7/9.',
      ] },

      { t: 'h', text: 'Opérations' },
      { t: 'list', items: [
        '**Addition, soustraction** : même dénominateur, on opère sur les numérateurs.',
        '**Multiplication** : numérateur × numérateur, dénominateur × dénominateur.',
        '**Division** : diviser par une fraction, c’est multiplier par son inverse.',
      ] },
      { t: 'example', title: 'Quatre calculs', items: [
        '2/3 + 3/4 = 8/12 + 9/12 = 17/12.',
        '5/6 − 1/4 = 10/12 − 3/12 = 7/12.',
        '2/3 × 9/10 = 18/30 = 3/5.',
        '3/4 ÷ 5/8 = 3/4 × 8/5 = 24/20 = 6/5.',
      ] },
      { t: 'example', title: 'Problème', items: [
        'Léa a 250 €. Elle dépense les 2/5 de cette somme, puis la moitié du reste. Que lui reste-t-il ?',
        'Première dépense : 250 ÷ 5 × 2 = 100 €. Reste : 150 €.',
        'Seconde dépense : 150 ÷ 2 = 75 €. Il lui reste 75 €.',
      ] },

      { t: 'h', text: 'Fractions décimales, décimaux, rationnels' },
      { t: 'p', text: 'Une **fraction décimale** a pour dénominateur 10, 100, 1 000… Un **nombre décimal** est un nombre qui s’écrit avec une fraction décimale, c’est-à-dire avec un nombre fini de chiffres après la virgule : 7/10 = 0,7 ; 3/4 = 75/100 = 0,75 ; 7/8 = 875/1 000 = 0,875.' },
      { t: 'p', text: 'Un **rationnel** est un nombre qui s’écrit a/b avec a entier et b entier non nul. On a les inclusions **N ⊂ D ⊂ Q** (entiers naturels, décimaux, rationnels). Une fraction irréductible est décimale si et seulement si son dénominateur n’a que 2 et 5 comme facteurs premiers : 7/20 (20 = 2² × 5) = 0,35 est décimal ; 1/3 = 0,333… et 5/12 (12 = 2² × 3) ne le sont pas : leur écriture décimale est illimitée et périodique. Des nombres comme π ou √2 ne sont même pas rationnels.' },

      { t: 'h', text: 'Conceptions erronées sur les décimaux' },
      { t: 'list', items: [
        '« 2,35 > 2,4 car 35 > 4 » : le nombre est vu comme deux entiers séparés par une virgule. Pour comparer, on aligne les rangs : 2,35 < 2,40.',
        '« Plus il y a de chiffres, plus le nombre est grand » (ou l’inverse, par analogie avec les fractions).',
        '« Entre 2,3 et 2,4, il n’y a aucun nombre » : il y en a une infinité (2,31 ; 2,35 ; 2,399…).',
        '« Multiplier agrandit, diviser rapetisse » : 8 × 0,5 = 4 < 8 et 6 ÷ 0,5 = 12 > 6.',
      ] },

      { t: 'trap', text: 'Additionner numérateurs et dénominateurs : 1/2 + 1/3 n’est pas 2/5, mais 3/6 + 2/6 = 5/6. Autre piège : croire que la fraction la plus grande est celle qui a le plus grand dénominateur, alors que 1/8 < 1/5.' },
      { t: 'key', items: [
        'a/b = partage de l’unité en b parts dont on prend a = quotient de a par b.',
        'Même valeur : on multiplie ou divise numérateur et dénominateur par le même nombre.',
        'Addition et soustraction : même dénominateur obligatoire ; division : multiplier par l’inverse.',
        'N ⊂ D ⊂ Q ; 1/3 est rationnel non décimal.',
      ] },
      { t: 'check', q: 'Simplifie 84/126 au maximum.', a: 'PGCD(84, 126) = 42. 84 ÷ 42 = 2 et 126 ÷ 42 = 3. Donc 84/126 = 2/3.' },
      { t: 'check', q: 'La fraction 7/40 est-elle un nombre décimal ? Donne son écriture.', a: '40 = 2³ × 5 : seuls 2 et 5 apparaissent, donc oui. 7/40 = 175/1 000 = 0,175.' },
      { t: 'check', q: 'Range dans l’ordre croissant : 2,4 ; 2,35 ; 2,399.', a: 'On écrit avec trois décimales : 2,400 ; 2,350 ; 2,399. Ordre croissant : 2,35 < 2,399 < 2,4.' },
    ],
  },
  {
    id: 'calcul',
    title: 'Calcul et opérations',
    intro: 'Ce chapitre rassemble les règles de calcul (priorités, propriétés, puissances), les techniques de calcul mental et posé, puis le calcul littéral et les équations qui servent à résoudre des problèmes.',
    blocks: [
      { t: 'h', text: 'Priorités opératoires' },
      { t: 'steps', items: [
        'Les calculs entre **parenthèses** (de l’intérieur vers l’extérieur).',
        'Les **puissances**.',
        'Les **multiplications et divisions**, de gauche à droite.',
        'Les **additions et soustractions**, de gauche à droite.',
      ] },
      { t: 'example', title: 'Calculer 3 + 4 × 5² − 8 ÷ 2', items: [
        'Puissance : 5² = 25.',
        'Multiplication et division : 4 × 25 = 100 et 8 ÷ 2 = 4.',
        'Additions et soustractions : 3 + 100 − 4 = 99.',
      ] },
      { t: 'p', text: 'À priorité égale, on va de gauche à droite : 24 ÷ 6 × 2 = 4 × 2 = 8 (et non 24 ÷ 12 = 2).' },

      { t: 'h', text: 'Propriétés et calcul mental' },
      { t: 'list', items: [
        '**Commutativité** : a + b = b + a et a × b = b × a (faux pour la soustraction et la division).',
        '**Associativité** : (a + b) + c = a + (b + c), idem pour la multiplication.',
        '**Distributivité** : a × (b + c) = a × b + a × c, et de même avec la soustraction.',
      ] },
      { t: 'p', text: 'Le calcul mental s’appuie sur ces propriétés et sur des faits numériques mémorisés (tables, compléments à 10, 100…).' },
      { t: 'list', items: [
        '25 × 36 = 25 × 4 × 9 = 100 × 9 = 900.',
        '99 × 47 = 100 × 47 − 47 = 4 700 − 47 = 4 653.',
        '15 × 18 = 15 × 20 − 15 × 2 = 300 − 30 = 270.',
        '35 × 14 = 70 × 7 = 490 (on double l’un, on prend la moitié de l’autre).',
        '998 + 57 = 1 000 + 57 − 2 = 1 055.',
      ] },

      { t: 'h', text: 'Techniques posées' },
      { t: 'p', text: 'L’**addition** se pose en alignant les rangs, avec retenues. La **soustraction** repose sur la conservation des écarts : on ajoute la même quantité aux deux termes sans changer la différence. La **multiplication** s’appuie sur la distributivité : 47 × 36 = 47 × 30 + 47 × 6 = 1 410 + 282 = 1 692. La **division** pose la question « combien de fois ? » rang par rang : 1 692 ÷ 36 = 47, car 36 × 47 = 1 692.' },

      { t: 'h', text: 'Puissances' },
      { t: 'p', text: 'a^n désigne le produit de n facteurs égaux à a : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Par convention a⁰ = 1 (a non nul) et a¹ = a. Règles, pour a non nul :' },
      { t: 'list', items: [
        'a^m × a^n = a^(m+n) : 2³ × 2⁴ = 2⁷ = 128.',
        'a^m ÷ a^n = a^(m−n) : 2⁷ ÷ 2⁴ = 2³ = 8.',
        '(a^m)^n = a^(m×n) : (2³)² = 2⁶ = 64.',
      ] },

      { t: 'h', text: 'Calcul littéral et équations' },
      { t: 'p', text: 'Une lettre représente un nombre. 3x signifie 3 × x. **Développer**, c’est transformer un produit en somme : 3(x + 4) = 3x + 12 ; (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6. **Factoriser**, c’est l’opération inverse : 6x + 9 = 3(2x + 3). Identités remarquables : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².' },
      { t: 'p', text: 'Pour résoudre une équation du premier degré, on effectue la même opération des deux côtés pour isoler x.' },
      { t: 'example', title: 'Résoudre 4x − 3 = x + 9', items: [
        'On retire x des deux côtés : 3x − 3 = 9.',
        'On ajoute 3 : 3x = 12.',
        'On divise par 3 : x = 4.',
        'Vérification : 4 × 4 − 3 = 13 et 4 + 9 = 13.',
      ] },
      { t: 'example', title: 'Mettre un problème en équation', items: [
        'Marc achète 4 cahiers identiques et un stylo à 2 €. Il paie 14 €. Prix d’un cahier ?',
        'Inconnue : x = prix d’un cahier en euros. Équation : 4x + 2 = 14.',
        'Résolution : 4x = 12 donc x = 3.',
        'Réponse : un cahier coûte 3 € (contrôle : 4 × 3 + 2 = 14).',
      ] },

      { t: 'trap', text: 'Erreurs classiques : calculer de gauche à droite sans respecter les priorités (3 + 4 × 5 = 23, pas 35) ; croire que 2³ = 6 (c’est 8) ; confondre (−3)² = 9 et −3² = −9 ; écrire (a + b)² = a² + b² (il manque 2ab) ; oublier de changer de signe en passant un terme de l’autre côté.' },
      { t: 'key', items: [
        'Priorités : parenthèses, puissances, × et ÷, puis + et −.',
        'La distributivité fonde le calcul mental, la multiplication posée, développer et factoriser.',
        'Équation : même opération des deux côtés, puis vérification.',
        'Mise en équation : choisir l’inconnue, écrire l’équation, résoudre, vérifier, répondre en phrase.',
      ] },
      { t: 'check', q: 'Calcule 12 + 3 × (8 − 2)² ÷ 4.', a: 'Parenthèses : 8 − 2 = 6. Puissance : 6² = 36. Puis 3 × 36 = 108, 108 ÷ 4 = 27. Enfin 12 + 27 = 39.' },
      { t: 'check', q: 'Résous 7x − 5 = 3x + 11.', a: '4x − 5 = 11, donc 4x = 16, donc x = 4. Vérification : 28 − 5 = 23 et 12 + 11 = 23.' },
      { t: 'check', q: 'Développe 2(3x − 5) puis factorise 12x + 18.', a: '2(3x − 5) = 6x − 10. 12x + 18 = 6 × 2x + 6 × 3 = 6(2x + 3).' },
    ],
  },
  {
    id: 'proportionnalite',
    title: 'Proportionnalité et pourcentages',
    intro: 'Deux grandeurs sont proportionnelles lorsque l’on passe de l’une à l’autre en multipliant toujours par le même nombre. Les pourcentages, les vitesses et les échelles en sont des applications directes.',
    blocks: [
      { t: 'h', text: 'Reconnaître une situation de proportionnalité' },
      { t: 'p', text: 'Un tableau est de proportionnalité si l’on passe de la première ligne à la seconde en multipliant par un même nombre, le **coefficient de proportionnalité**. Beaucoup de situations de la vie courante ne le sont pas : l’âge et la taille, un prix avec des frais fixes (abonnement + consommation), la durée de cuisson et la masse d’un rôti.' },

      { t: 'h', text: 'Les procédures' },
      { t: 'example', title: '5 kg de pommes coûtent 12,50 €. Prix de 8 kg ?', items: [
        '**Passage à l’unité** : 1 kg coûte 12,50 ÷ 5 = 2,50 € ; 8 kg coûtent 8 × 2,50 = 20 €.',
        '**Linéarité multiplicative** : 15 kg = 3 × 5 kg, donc 3 × 12,50 = 37,50 €.',
        '**Linéarité additive** : 7 kg = 5 kg + 2 kg ; 2 kg coûtent 5 € ; total 12,50 + 5 = 17,50 €.',
        '**Coefficient** : 12,50 ÷ 5 = 2,5 ; 8 × 2,5 = 20 €.',
        '**Produit en croix** : x = 12,50 × 8 ÷ 5 = 20 €.',
      ] },
      { t: 'p', text: 'Le choix de la procédure dépend des nombres. Le produit en croix est efficace mais cache le sens : on le présente en dernier. **Représentation graphique** : une situation de proportionnalité se représente par des points alignés avec l’origine du repère (une droite passant par l’origine).' },

      { t: 'h', text: 'Pourcentages' },
      { t: 'p', text: 'Un pourcentage est une fraction de dénominateur 100 : t % de N = N × t/100. Ainsi 15 % de 240 = 240 × 0,15 = 36. Pour trouver un taux : 18 filles sur 24 élèves représentent 18/24 = 0,75 soit 75 %.' },
      { t: 'h', text: 'Évolutions' },
      { t: 'p', text: 'Une hausse de t % se traduit par un **coefficient multiplicateur** 1 + t/100 ; une baisse de t % par 1 − t/100. Pour retrouver la valeur initiale, on divise par le coefficient.' },
      { t: 'example', title: 'Évolutions', items: [
        'Un article à 80 € augmente de 15 % : 80 × 1,15 = 92 €.',
        'Un article à 120 € baisse de 30 % : 120 × 0,70 = 84 €.',
        'Après une hausse de 20 %, un prix vaut 90 € : prix initial = 90 ÷ 1,20 = 75 €.',
        'Une hausse de 20 % puis une baisse de 20 % : 1,20 × 0,80 = 0,96, soit une baisse globale de 4 %.',
      ] },

      { t: 'h', text: 'Vitesse et échelle' },
      { t: 'p', text: 'Vitesse moyenne v = d ÷ t. Parcourir 150 km en 2 h 30 (soit 2,5 h) donne v = 60 km/h. On a aussi t = d ÷ v : 90 km à 60 km/h durent 1,5 h, soit 1 h 30. Conversion : 72 km/h = 72 000 m ÷ 3 600 s = 20 m/s.' },
      { t: 'p', text: 'Une échelle 1/25 000 signifie que 1 cm sur la carte représente 25 000 cm = 250 m dans la réalité. Donc 4 cm sur la carte représentent 4 × 250 = 1 000 m = 1 km. Inversement, 3 km réels sur une carte au 1/50 000 : 300 000 cm ÷ 50 000 = 6 cm.' },

      { t: 'trap', text: 'Une hausse de 20 % suivie d’une baisse de 20 % ne ramène pas à la valeur de départ : les pourcentages portent sur des bases différentes et ne s’additionnent pas. La vitesse moyenne n’est pas la moyenne des vitesses : 120 km à 60 km/h (2 h) puis 120 km à 40 km/h (3 h) font 240 km en 5 h, soit 48 km/h, et non 50. Enfin, 2 h 30 n’est pas 2,30 h.' },
      { t: 'key', items: [
        'Proportionnalité : on passe d’une ligne à l’autre par un coefficient constant ; graphique = droite passant par l’origine.',
        't % de N = N × t/100 ; hausse : coefficient 1 + t/100 ; baisse : 1 − t/100.',
        'Évolutions successives : on multiplie les coefficients.',
        'v = d ÷ t ; échelle 1/E : 1 cm sur le plan = E cm dans la réalité.',
      ] },
      { t: 'check', q: '6 stylos coûtent 7,80 €. Quel est le prix de 10 stylos ?', a: 'Prix d’un stylo : 7,80 ÷ 6 = 1,30 €. Pour 10 stylos : 10 × 1,30 = 13 €.' },
      { t: 'check', q: 'Un prix passe de 50 € à 42 €. Quel est le taux de variation ?', a: 'Variation : 42 − 50 = −8 €. Taux : −8 ÷ 50 = −0,16, soit une baisse de 16 %.' },
      { t: 'check', q: 'Un cycliste parcourt 135 km en 1 h 30. Quelle est sa vitesse moyenne ?', a: '1 h 30 = 1,5 h. v = 135 ÷ 1,5 = 90 km/h.' },
    ],
  },
  {
    id: 'geometrie',
    title: 'Géométrie plane',
    intro: 'La géométrie plane étudie les figures, leurs propriétés et leurs transformations. Au concours, il faut savoir démontrer et utiliser avec rigueur les propriétés des figures usuelles et les théorèmes classiques.',
    blocks: [
      { t: 'h', text: 'Vocabulaire et droites' },
      { t: 'p', text: 'Une **droite** est illimitée, une **demi-droite** a une origine, un **segment** a deux extrémités. Deux droites **perpendiculaires** forment un angle droit ; deux droites **parallèles** n’ont aucun point commun (ou sont confondues). Deux propriétés utiles : si deux droites sont perpendiculaires à une même troisième, elles sont parallèles ; si deux droites sont parallèles, toute perpendiculaire à l’une est perpendiculaire à l’autre.' },

      { t: 'h', text: 'Triangles et quadrilatères' },
      { t: 'list', items: [
        '**Isocèle** : deux côtés égaux, deux angles à la base égaux. **Équilatéral** : trois côtés égaux, trois angles de 60°. **Rectangle** : un angle droit.',
        '**Inégalité triangulaire** : chaque côté est plus petit que la somme des deux autres (un triangle de côtés 3, 4 et 8 est impossible).',
        '**Parallélogramme** : côtés opposés parallèles ; diagonales de même milieu. **Rectangle** : quatre angles droits ; diagonales égales. **Losange** : quatre côtés égaux ; diagonales perpendiculaires. **Carré** : rectangle et losange à la fois.',
        '**Trapèze** : au moins une paire de côtés parallèles.',
      ] },
      { t: 'p', text: 'Hiérarchie : tout carré est un rectangle et un losange ; tout rectangle et tout losange sont des parallélogrammes ; tout parallélogramme est un trapèze (définition « au moins une paire »).' },

      { t: 'h', text: 'Cercle et droites remarquables' },
      { t: 'p', text: 'Un cercle de centre O et de rayon r : diamètre = 2r, périmètre 2πr, aire du disque πr². Un triangle inscrit dans un cercle et dont un côté est un diamètre est rectangle (l’angle droit est opposé à ce diamètre).' },
      { t: 'list', items: [
        '**Médiatrices** : concourent au centre du cercle circonscrit.',
        '**Médianes** : concourent au centre de gravité, situé aux 2/3 de chaque médiane à partir du sommet.',
        '**Hauteurs** : concourent à l’orthocentre.',
        '**Bissectrices** : concourent au centre du cercle inscrit.',
      ] },

      { t: 'h', text: 'Pythagore et Thalès' },
      { t: 'p', text: '**Pythagore** : dans un triangle ABC rectangle en A, BC² = AB² + AC². La **réciproque** permet de prouver qu’un triangle est rectangle : si le carré du plus grand côté est égal à la somme des carrés des deux autres, le triangle est rectangle.' },
      { t: 'example', title: 'Pythagore et sa réciproque', items: [
        'Hypoténuse de côtés 6 et 8 : 6² + 8² = 36 + 64 = 100, donc hypoténuse = √100 = 10.',
        'Côté inconnu : hypoténuse 13 et un côté 5 : √(13² − 5²) = √(169 − 25) = √144 = 12.',
        'Un triangle de côtés 7, 24, 25 est-il rectangle ? 7² + 24² = 49 + 576 = 625 = 25² : oui.',
        'Côtés 5, 6, 8 : 5² + 6² = 61 et 8² = 64 : non rectangle.',
      ] },
      { t: 'p', text: '**Thalès** : M est sur (AB), N sur (AC) et (MN) // (BC). Alors AM/AB = AN/AC = MN/BC.' },
      { t: 'example', title: 'Calculs avec Thalès', items: [
        'On donne AM = 3, AB = 5, AN = 4,5 et BC = 10, avec (MN) // (BC).',
        'AM/AB = 3/5 = AN/AC, donc AC = 4,5 × 5 ÷ 3 = 7,5.',
        'MN/BC = 3/5, donc MN = 10 × 3/5 = 6.',
      ] },

      { t: 'h', text: 'Transformations' },
      { t: 'list', items: [
        '**Symétrie axiale** : l’axe est la médiatrice de [MM’].',
        '**Symétrie centrale** : O est le milieu de [MM’] (équivaut à une rotation de 180°) ; une droite a pour image une droite parallèle.',
        '**Translation** : on déplace toute la figure du même « glissement » ; l’image d’une droite lui est parallèle.',
        '**Rotation** : centre, angle et sens fixés ; OM’ = OM.',
        '**Homothétie** de centre O et de rapport k : OM’ = |k| × OM (côté opposé si k est négatif). Les angles sont conservés, les longueurs multipliées par |k|, les aires par k².',
      ] },
      { t: 'p', text: 'Symétries, translation et rotation conservent longueurs, angles et aires ; l’homothétie conserve seulement les angles et l’alignement (et multiplie les longueurs par |k|).' },

      { t: 'h', text: 'Angles' },
      { t: 'p', text: 'Somme des angles : triangle 180°, quadrilatère 360°, polygone convexe à n côtés (n − 2) × 180°. Un hexagone régulier a des angles de (6 − 2) × 180 ÷ 6 = 120°. Avec des parallèles, les angles alternes-internes et les angles correspondants sont égaux ; les angles opposés par le sommet sont toujours égaux.' },
      { t: 'example', title: 'Un angle dans un triangle', items: [
        'ABC avec A = 50° et B = 65°.',
        'C = 180° − 50° − 65° = 65°.',
        'B = C : le triangle est isocèle en A.',
      ] },

      { t: 'trap', text: 'Pythagore ne s’applique qu’à un triangle **rectangle**, et BC² = AB² + AC² suppose que BC est l’hypoténuse. Thalès exige des droites parallèles et des points alignés dans la bonne configuration. Un carré n’est pas « moins » qu’un rectangle : c’en est un cas particulier. On ne conclut jamais qu’un angle est droit « parce qu’il a l’air droit ».' },
      { t: 'key', items: [
        'Hiérarchie : carré ⊂ rectangle et losange ⊂ parallélogramme ⊂ trapèze.',
        'Pythagore : BC² = AB² + AC² (angle droit en A) ; sa réciproque démontre le caractère rectangle.',
        'Thalès : (MN) // (BC) donne AM/AB = AN/AC = MN/BC.',
        'Somme des angles : 180° (triangle), 360° (quadrilatère).',
      ] },
      { t: 'check', q: 'Un triangle de côtés 9, 12 et 15 est-il rectangle ?', a: '9² + 12² = 81 + 144 = 225 = 15². D’après la réciproque de Pythagore, il est rectangle (l’hypoténuse mesure 15).' },
      { t: 'check', q: 'Un quadrilatère a des diagonales égales qui se coupent en leur milieu. Quelle est sa nature ?', a: 'Diagonales de même milieu : parallélogramme. Diagonales égales en plus : rectangle.' },
      { t: 'check', q: 'On agrandit une figure par une homothétie de rapport 3. Par combien l’aire est-elle multipliée ?', a: 'Les longueurs sont multipliées par 3, les aires par 3² = 9.' },
    ],
  },
  {
    id: 'grandeurs-mesures',
    title: 'Grandeurs et mesures',
    intro: 'Mesurer, c’est comparer une grandeur à une unité. Ce chapitre rassemble les unités, les conversions, les formules de périmètre, d’aire et de volume, et les calculs de durées.',
    blocks: [
      { t: 'h', text: 'Unités et conversions' },
      { t: 'table', head: ['Grandeur', 'Unité principale', 'Relations utiles'], rows: [
        ['Longueur', 'mètre (m)', 'km · hm · dam · m · dm · cm · mm (de 10 en 10)'],
        ['Masse', 'gramme (g)', '1 t = 1 000 kg ; 1 kg = 1 000 g'],
        ['Contenance', 'litre (L)', '1 L = 10 dL = 100 cL = 1 000 mL'],
        ['Aire', 'mètre carré (m²)', '1 m² = 100 dm² = 10 000 cm² ; 1 ha = 10 000 m²'],
        ['Volume', 'mètre cube (m³)', '1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³'],
        ['Durée', 'seconde (s)', '1 h = 60 min = 3 600 s'],
      ] },
      { t: 'p', text: 'Dans un tableau de conversion, chaque unité de longueur occupe **1 colonne**, chaque unité d’aire **2 colonnes**, chaque unité de volume **3 colonnes**. Le lien entre volumes et contenances : **1 dm³ = 1 L**, donc 1 cm³ = 1 mL et 1 m³ = 1 000 L.' },
      { t: 'example', title: 'Conversions', items: [
        '0,75 m² en cm² : 0,75 × 10 000 = 7 500 cm².',
        '2,5 m³ en litres : 2,5 × 1 000 = 2 500 L.',
        '4,5 L en cm³ : 4,5 dm³ = 4 500 cm³.',
      ] },

      { t: 'h', text: 'Périmètres, aires, volumes usuels' },
      { t: 'table', head: ['Figure', 'Périmètre', 'Aire'], rows: [
        ['Carré de côté c', '4 × c', 'c × c'],
        ['Rectangle L × l', '2 × (L + l)', 'L × l'],
        ['Triangle (base b, hauteur h)', 'somme des côtés', 'b × h ÷ 2'],
        ['Parallélogramme', 'somme des côtés', 'b × h'],
        ['Trapèze (bases B et b, hauteur h)', 'somme des côtés', '(B + b) × h ÷ 2'],
        ['Losange (diagonales D et d)', '4 × côté', 'D × d ÷ 2'],
        ['Disque de rayon r', '2 × π × r', 'π × r²'],
      ] },
      { t: 'table', head: ['Solide', 'Volume'], rows: [
        ['Cube d’arête c', 'c³'],
        ['Pavé droit L × l × h', 'L × l × h'],
        ['Prisme droit, cylindre', 'aire de la base × hauteur (cylindre : π × r² × h)'],
        ['Pyramide, cône', 'aire de la base × hauteur ÷ 3'],
        ['Boule de rayon r', '4/3 × π × r³'],
      ] },

      { t: 'h', text: 'Périmètre et aire sont indépendants' },
      { t: 'p', text: 'Deux figures de même périmètre peuvent avoir des aires différentes : un rectangle de 6 cm sur 2 cm a pour périmètre 16 cm et pour aire 12 cm², un carré de 4 cm de côté a lui aussi 16 cm de périmètre mais 16 cm² d’aire. Si l’on multiplie toutes les longueurs par k, le périmètre est multiplié par k, l’aire par k², le volume par k³.' },
      { t: 'example', title: 'Un aquarium', items: [
        'Dimensions : 60 cm × 30 cm × 40 cm. Volume : 60 × 30 × 40 = 72 000 cm³.',
        '72 000 cm³ = 72 dm³ = 72 L.',
        'Rempli aux 3/4 : 72 ÷ 4 × 3 = 54 L.',
      ] },
      { t: 'example', title: 'Un disque de rayon 5 cm', items: [
        'Périmètre : 2 × π × 5 = 10π ≈ 31,4 cm (avec π ≈ 3,14).',
        'Aire : π × 5² = 25π ≈ 78,5 cm².',
      ] },

      { t: 'h', text: 'Calculs de durées' },
      { t: 'p', text: 'Les durées suivent le système sexagésimal (base 60), non décimal. Il faut convertir avant de calculer.' },
      { t: 'example', title: 'Durées', items: [
        '2 h 45 min + 1 h 30 min = 3 h 75 min = 4 h 15 min.',
        'De 14 h 50 à 17 h 20 : 10 min jusqu’à 15 h, puis 2 h jusqu’à 17 h, puis 20 min : 2 h 30 min.',
        '3,4 h = 3 h + 0,4 × 60 min = 3 h 24 min.',
        '5 400 s = 5 400 ÷ 3 600 h = 1,5 h = 1 h 30 min.',
      ] },

      { t: 'trap', text: 'Erreurs classiques : écrire 1 m² = 100 cm² (c’est 10 000) ; lire 1 h 30 comme 1,30 h (c’est 1,5 h) ; mélanger des unités dans un même calcul ; confondre aire (m²) et volume (m³) ; oublier de diviser par 2 pour le triangle.' },
      { t: 'key', items: [
        'Longueurs : 1 colonne par unité ; aires : 2 ; volumes : 3.',
        '1 dm³ = 1 L ; 1 m³ = 1 000 L ; 1 ha = 10 000 m².',
        'Longueurs × k : périmètre × k, aire × k², volume × k³.',
        'Durées en base 60 : convertir avant de calculer.',
      ] },
      { t: 'check', q: 'Calcule l’aire d’un trapèze de bases 10 cm et 6 cm et de hauteur 4 cm.', a: '(10 + 6) × 4 ÷ 2 = 16 × 4 ÷ 2 = 32 cm².' },
      { t: 'check', q: 'Un film commence à 20 h 45 et dure 1 h 50. À quelle heure finit-il ?', a: '20 h 45 + 1 h 50 = 21 h 95 = 22 h 35.' },
      { t: 'check', q: 'Un cube a une arête de 5 cm. Donne son volume en cm³, puis en mL.', a: '5³ = 125 cm³. Comme 1 cm³ = 1 mL, le volume est 125 mL.' },
    ],
  },
  {
    id: 'donnees-probabilites',
    title: 'Données, statistiques et probabilités',
    intro: 'Les statistiques organisent et résument des données ; les probabilités mesurent le caractère plus ou moins probable d’un événement. Les deux s’appuient sur le calcul de proportions.',
    blocks: [
      { t: 'h', text: 'Vocabulaire et fréquences' },
      { t: 'p', text: 'Une étude porte sur une **population** dont les éléments sont les individus ; le **caractère** étudié est qualitatif (couleur) ou quantitatif (note, taille). L’**effectif** d’une valeur est le nombre d’individus qui la prennent ; sa **fréquence** est effectif ÷ effectif total, exprimée en nombre ou en pourcentage. La somme des fréquences vaut 1 (100 %).' },

      { t: 'h', text: 'Moyenne, médiane, étendue' },
      { t: 'list', items: [
        '**Moyenne** : somme des valeurs ÷ nombre de valeurs. **Moyenne pondérée** : chaque valeur est multipliée par son effectif ou son coefficient, puis on divise par le total des effectifs ou des coefficients.',
        '**Médiane** : valeur qui partage la série ordonnée en deux groupes de même effectif. Effectif impair : valeur centrale ; effectif pair : moyenne des deux valeurs centrales.',
        '**Étendue** : plus grande valeur − plus petite valeur.',
      ] },
      { t: 'example', title: 'Série de notes d’une classe de 20 élèves', items: [
        'Notes (effectifs) : 8 (1) ; 10 (4) ; 12 (7) ; 14 (6) ; 16 (2). Total : 20.',
        'Somme : 8 + 40 + 84 + 84 + 32 = 248. Moyenne : 248 ÷ 20 = 12,4.',
        'Médiane : effectifs cumulés 1, 5, 12 : les 10e et 11e valeurs valent 12, donc médiane = 12.',
        'Étendue : 16 − 8 = 8. Fréquence de la note 14 : 6 ÷ 20 = 0,3 = 30 %.',
      ] },
      { t: 'example', title: 'Moyenne pondérée', items: [
        'Maths 14 (coefficient 3), français 10 (coefficient 2), histoire 8 (coefficient 1).',
        'Moyenne : (14 × 3 + 10 × 2 + 8 × 1) ÷ (3 + 2 + 1) = (42 + 20 + 8) ÷ 6 = 70 ÷ 6 ≈ 11,67.',
      ] },
      { t: 'p', text: 'La médiane résiste aux valeurs extrêmes : pour 3, 5, 6, 9 et 20, la médiane vaut 6 et la moyenne 43 ÷ 5 = 8,6. Pour 2, 4, 7, 10 (effectif pair), la médiane vaut (4 + 7) ÷ 2 = 5,5.' },

      { t: 'h', text: 'Graphiques' },
      { t: 'list', items: [
        '**Diagramme en bâtons** : valeurs discrètes ; hauteur proportionnelle à l’effectif.',
        '**Histogramme** : données regroupées en classes ; l’aire des rectangles représente l’effectif.',
        '**Diagramme circulaire** : angle = fréquence × 360° (25 % donne 90°, 40 % donne 144°).',
        '**Courbe** : évolution d’une grandeur au cours du temps.',
      ] },

      { t: 'h', text: 'Probabilités' },
      { t: 'p', text: 'Une **expérience aléatoire** a plusieurs **issues** possibles que l’on ne peut pas prévoir. Un **événement** est un ensemble d’issues. Sa probabilité est comprise entre 0 (événement impossible) et 1 (événement certain), et p(contraire de A) = 1 − p(A). En situation d’**équiprobabilité** (toutes les issues ont la même chance) : p(A) = nombre de cas favorables ÷ nombre de cas possibles.' },
      { t: 'example', title: 'Dé et urne', items: [
        'Dé à 6 faces : p(nombre premier) : issues favorables 2, 3, 5, donc 3/6 = 1/2.',
        'Urne : 3 boules rouges, 5 bleues, 2 vertes (10 boules). p(bleue) = 5/10 = 1/2.',
        'p(pas rouge) = 1 − 3/10 = 7/10.',
      ] },

      { t: 'h', text: 'Expériences à deux épreuves' },
      { t: 'p', text: 'On liste les issues avec un tableau à double entrée ou un **arbre**. Au lancer de deux dés, il y a 6 × 6 = 36 issues ; la somme 7 s’obtient avec (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) : 6 cas, donc p = 6/36 = 1/6. Dans un arbre pondéré, on **multiplie** les probabilités le long d’une branche et on **additionne** les branches qui réalisent l’événement.' },
      { t: 'example', title: 'Deux tirages sans remise', items: [
        'Urne : 3 boules rouges et 2 bleues. On tire deux boules successivement sans remise.',
        'p(RR) = 3/5 × 2/4 = 6/20 = 3/10.',
        'p(BB) = 2/5 × 1/4 = 2/20 = 1/10.',
        'Couleurs différentes : p(RB) + p(BR) = 3/5 × 2/4 + 2/5 × 3/4 = 6/20 + 6/20 = 12/20 = 3/5.',
        'Contrôle : 6/20 + 6/20 + 6/20 + 2/20 = 1.',
      ] },

      { t: 'trap', text: 'Les sommes de deux dés ne sont pas équiprobables : 7 a six fois plus de chances que 2. Une fréquence observée n’est pas une probabilité (elle s’en approche quand on répète beaucoup) ; l’expérience n’a pas de « mémoire » : après dix « pile », le suivant a toujours une chance sur deux. Moyenne et médiane ne sont pas interchangeables, et on ne peut calculer une moyenne de moyennes qu’en tenant compte des effectifs.' },
      { t: 'key', items: [
        'Fréquence = effectif ÷ total ; la somme des fréquences vaut 1.',
        'Moyenne (somme ÷ nombre), médiane (valeur centrale), étendue (max − min).',
        'Équiprobabilité : p = cas favorables ÷ cas possibles ; p(contraire) = 1 − p.',
        'Arbre : on multiplie sur une branche, on additionne entre branches.',
      ] },
      { t: 'check', q: 'Pour la série 4, 7, 7, 10, 12, donne la moyenne, la médiane et l’étendue.', a: 'Moyenne : 40 ÷ 5 = 8. Médiane : 5 valeurs, la troisième vaut 7. Étendue : 12 − 4 = 8.' },
      { t: 'check', q: 'Dans un dé à 6 faces, quelle est la probabilité d’obtenir un multiple de 3 ?', a: 'Cas favorables : 3 et 6, soit 2 cas sur 6. p = 2/6 = 1/3.' },
      { t: 'check', q: 'Un sac contient 1 jeton rouge et 3 jetons verts. On tire un jeton, on le remet, puis on en tire un second. Probabilité d’obtenir deux jetons rouges ?', a: 'Avec remise, les deux tirages sont indépendants : 1/4 × 1/4 = 1/16.' },
    ],
  },
];
