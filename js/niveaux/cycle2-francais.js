/* Programme de français du cycle 2 (BO n° 41 du 31 octobre 2024) : CP, CE1, CE2 */

ESSENTIELS.push({
  niveau: 'CP',
  matiere: 'francais',
  items: [
    'L’apprentissage de la lecture est l’objectif central du cycle 2 : au CP, l’étude des correspondances graphophonémiques (CGP) est systématique, intensive, structurée et quotidienne, à raison d’environ deux correspondances par semaine.',
    'À la fin du CP, les élèves sont capables de déchiffrer tous les mots et ont automatisé la lecture des plus fréquents.',
    'Repères de fluence en fin de CP : 30 mots par minute au minimum sans préparation, 50 après préparation.',
    'En écriture, l’élève apprend le geste cursive minuscule, encode puis écrit sous la dictée des mots et des phrases, et copie trois ou quatre phrases sans erreur.',
    'Les deux marqueurs de la phrase simple sont la majuscule et la ponctuation finale forte ; l’élève apprend à conjuguer être et avoir au présent de l’indicatif.',
    'Le professeur enseigne quatre corpus de vocabulaire par période au CP et fait lire 5 à 10 œuvres complètes par an.',
  ],
});

ESSENTIELS.push({
  niveau: 'CE1',
  matiere: 'francais',
  items: [
    'Au CE1, l’élève automatise le décodage et doit décoder toutes les CGP y compris les plus complexes en fin d’année.',
    'Repère de fluence en fin de CE1 : lire un texte adapté à son niveau de lecture avec une vitesse de 70 mots par minute.',
    'L’élève automatise le tracé des lettres minuscules cursives et apprend, en 2e partie d’année, le tracé des lettres majuscules cursives, par familles de gestes.',
    'À partir du CE1, trois heures d’enseignement explicite de la langue par semaine ; l’élève distingue le groupe sujet, le verbe et les compléments (sans les distinguer entre eux) et nomme les principales classes de mots.',
    'L’élève réalise les accords en genre et en nombre dans le groupe nominal et l’accord sujet-verbe (pluriel des verbes en -nt) ; il conjugue au présent, à l’imparfait, au futur puis au passé composé être, avoir et les verbes du premier groupe.',
    'Le professeur enseigne cinq corpus de vocabulaire par période au CE1.',
  ],
});

ESSENTIELS.push({
  niveau: 'CE2',
  matiere: 'francais',
  items: [
    'Au CE2, l’élève a automatisé toutes les correspondances graphophonémiques (CGP) et lit un texte nouveau en s’appuyant sur un décodage rapide.',
    'Repère de fluence en fin de CE2 : lire un texte adapté à son niveau de lecture avec une vitesse de 90 mots par minute.',
    'L’élève automatise l’écriture de toutes les lettres minuscules et majuscules en cursive et copie une dizaine de lignes sans erreur en fin d’année.',
    'En grammaire, l’adverbe s’ajoute aux classes de mots ; l’élève reconnait les marques du discours rapporté (« … ») et les compléments restent non distingués entre eux (les compléments circonstanciels sont réservés au cycle 3).',
    'Les verbes étudiés s’élargissent aux verbes irréguliers du 3e groupe : faire, aller, dire, venir, pouvoir, voir, vouloir, prendre.',
    'Le professeur enseigne six corpus de vocabulaire par période au CE2 ; l’élève lit et comprend en autonomie un texte d’une vingtaine de lignes.',
  ],
});

/* ===================== CP ===================== */

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'francais',
  domaine: 'Lecture',
  items: [
    { o: 'Décoder et encoder 12 à 15 correspondances grapho-phonémiques (CGP) régulières, fréquentes et aisément prononçables en fin de période 1, puis de 25 à 30 CGP en milieu d’année.', ex: 'L’élève déchiffre les mots les plus réguliers selon la progression des CGP et automatise la lecture des mots fréquents et transparents comme le, la, ami, rire, lune.' },
    { o: 'Déchiffrer entre 15 et 30 mots par minute en milieu d’année, puis décoder 30 mots par minute au minimum fin CP, sans préparation, 50 après préparation.', ex: 'En fin d’année, l’élève lit des consignes, des phrases et de courts textes déchiffrables avec exactitude.' },
    { o: 'Lire après préparation un texte adapté à son niveau de lecture avec une vitesse de 30 mots par minute au minimum sans préparation, 50 après préparation, identifier les marques de ponctuation et amorcer une lecture expressive.', ex: 'Après préparation, l’élève repère les groupes de mots qui doivent être lus ensemble en s’appuyant sur le sens et la chaine d’accords, et modifie sa voix pour faire parler tel ou tel personnage.' },
    { o: 'Se repérer dans la chaine anaphorique (qui relie un nom à sa ou ses reprise(s) pronominale(s) ou à d’autres noms de sens équivalent) et comprendre ce qui est implicite (inférences simples).', ex: 'L’élève est capable de relier sémantiquement : le lion/il/le fauve/le roi de la savane, et de réaliser en autonomie une inférence simple : « J’ai pris mon parapluie » → Le temps est pluvieux.' },
    { o: 'Identifier les mots inconnus dans un texte et chercher à leur donner un sens, et justifier ses réponses par un retour au texte.', ex: 'L’élève commence à s’appuyer sur le contexte pour élucider le sens des mots inconnus et vérifie sa compréhension dans des échanges entre pairs, en retournant au texte si besoin.' },
    { o: 'Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d’une dizaine de lignes.', ex: 'L’élève construit la chronologie et identifie les lieux évoqués dans un récit, et repère les informations données dans un texte informatif simple.' },
    { o: 'Lire 5 à 10 œuvres complètes et variées issues du patrimoine et de la littérature de jeunesse, repérer et reconnaitre des types de personnages.', ex: 'L’élève est capable de caractériser les personnages, de les comparer, de différencier le type narratif du type informatif et de choisir un livre en fonction de ses propres centres d’intérêt.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'francais',
  domaine: 'Écriture',
  items: [
    { o: 'Apprendre à écrire en écriture cursive tous les graphèmes étudiés selon la progression en décodage et les enchainer avec fluidité dans des syllabes, mots, phrases.', ex: 'L’élève respecte la forme et la taille de la lettre, le sens de rotation du tracé et l’enchainement des lettres ; il enchaine plusieurs lettres sans lever le crayon (sauf devant les lettres rondes : a, c, d, g, o, q, x).' },
    { o: 'Encoder des syllabes simples puis des mots selon la progression des CGP ; dès la fin de la 2e période, écrire des mots dictés avec des lettres muettes apprises ; en fin d’année, écrire sous la dictée des mots et des phrases.', ex: 'Il oralise ce qu’il écrit, utilise l’analogie (il recourt au mot « vendredi » pour écrire la préposition « en ») et mobilise des connaissances orthographiques : un ballon rond-une balle ronde-des ballons ronds.' },
    { o: 'Copier des syllabes simples puis des mots avec lettres muettes, puis une phrase en lien avec les 12/15 correspondances graphophonémiques étudiées dès la fin de la période 1.', ex: 'L’élève transforme en cursive un mot puis une phrase à partir de modèles en écriture scripte, et copie un écrit placé à distance en comptabilisant le nombre de recours au modèle.' },
    { o: 'Copier trois ou quatre phrases sans erreur et de façon lisible en fin d’année, en commençant à verbaliser des stratégies de copie et à se relire après copie.', ex: 'En fin d’année, l’élève rectifie seul les oublis de mots et les erreurs de ponctuation, et verbalise et met en place des stratégies de copie (segmenter l’empan, mémorisation par exemple).' },
    { o: 'Produire des écrits courts porteurs de sens, d’une à cinq lignes, en articulation avec l’apprentissage de la lecture, dès la 2e période.', ex: 'L’élève compose des phrases à l’aide d’étiquettes mobiles qu’il sait déchiffrer et, après la lecture d’un récit à structure répétitive, écrit un nouvel épisode en respectant la structure imposée.' },
    { o: 'Commencer à acquérir une méthodologie de production écrite : planification, mise en mots avec vigilance orthographique, relectures et révisions.', ex: 'L’élève respecte les deux marqueurs de la phrase : majuscule (en capitales d’imprimerie) et ponctuation finale forte ; il est capable de s’investir dans la préparation d’un écrit : chercher des idées, respecter les consignes, recourir aux outils à sa disposition.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'francais',
  domaine: 'Oral',
  items: [
    { o: 'Comprendre un message entendu de quelques minutes et mémoriser quelques informations importantes.', ex: 'L’élève adopte une posture d’écoute pour mémoriser une consigne ou un message important et réalise l’action demandée par un discours injonctif : consigne, recette de cuisine, notice de montage, règle du jeu.' },
    { o: 'Mener une brève production orale pour rapporter, raconter, décrire ou expliquer, en utilisant quelques organisateurs du discours et en mobilisant le lexique appris.', ex: 'L’élève est capable de décrire des images ou de raconter avec ses propres mots une histoire entendue, en utilisant des connecteurs tels que parce que, alors, ensuite.' },
    { o: 'S’écouter pour progresser et proposer des reformulations, et oraliser un texte mémorisé ou préparé en tenant compte de son auditoire.', ex: 'Il restitue un poème en articulant distinctement et d’une voix audible.' },
    { o: 'Participer aux échanges en respectant les règles, en écoutant les autres et en donnant son avis.', ex: 'L’élève attend la fin d’une prise de parole pour parler et exprime une idée en lien avec le sujet en réutilisant des expressions comme : Je souhaite prendre la parole pour… ; Je suis d’accord…' },
    { o: 'Prendre conscience des écarts de niveau de langue selon les situations de communication.', ex: 'Il mesure que l’on ne parle pas de la même manière en classe et dans la cour.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'francais',
  domaine: 'Vocabulaire',
  items: [
    { o: 'Enrichir en contexte le vocabulaire appris au cycle 1 et être sensible, sans en apprendre les concepts, à la polysémie et à la différence entre sens propre et sens figuré.', ex: 'L’élève déduit du contexte d’une histoire le sens d’expressions telles que être vert de peur et distingue les différents sens d’un mot fréquent (ex. : décoller).' },
    { o: 'Commencer à mobiliser l’ordre alphabétique pour utiliser un dictionnaire adapté (papier ou numérique).', ex: '' },
    { o: 'Constituer des répertoires de mots par thème, par classe grammaticale, par famille de mots, par analogies morphologiques, et savoir proposer et justifier une catégorisation du corpus de mots étudié.', ex: 'L’élève rapproche les mots de l’univers de l’école (trousse/colle/bureau/ardoise) et comprend la notion de champ lexical ; il est capable de regrouper plusieurs mots et d’expliciter ses choix.' },
    { o: 'Savoir trouver des synonymes et des antonymes.', ex: 'L’élève est capable d’associer les mots lourd/léger, visible/invisible, en expliquant qu’il s’agit de mots de sens contraire ; il repère et opère des dérivations simples : coller/décoller/recoller.' },
    { o: 'Réemployer et mémoriser les expressions et les mots appris en fonction de contraintes de production orale ou écrite, et percevoir la différence entre deux niveaux de langue.', ex: 'Il perçoit la différence entre rigoler et rire et commence à adopter un niveau de langue courant en classe.' },
    { o: 'Mémoriser l’orthographe des mots réguliers fréquemment rencontrés et du lexique le plus couramment employé et pouvoir les écrire sous la dictée, en lien avec les CGP étudiées ; identifier et nommer les accents.', ex: 'L’élève met en mémoire les mots réguliers et fréquents en épelant, en copiant et en prenant appui sur des analogies graphophonémiques (quarante/cinquante/soixante, mais/maison) ou morphologiques (maisonnette/fillette/tablette).' },
    { o: 'Être capable de comprendre la présence d’une lettre muette finale à l’aide d’un mot de la même famille.', ex: 'Exemples du programme : chat/chaton, gros/grossir.' },
  ],
});

ATTENDUS.push({
  niveau: 'CP',
  matiere: 'francais',
  domaine: 'Grammaire et orthographe',
  items: [
    { o: 'S’approprier progressivement la notion de phrase simple et ses trois marqueurs essentiels : majuscule initiale, ponctuation finale forte et sens.', ex: 'L’élève identifie les phrases d’un court texte à partir des majuscules et des différents points, et sait ordonner et produire une phrase simple (repère la place des groupes).' },
    { o: 'S’appuyer sur la ponctuation pour reconnaitre les trois types de phrases (déclarative, interrogative et impérative) et reconnaitre les formes négative et exclamative.', ex: 'Il manipule les types de phrases déclaratives et impératives avec la forme négative et sait expliciter le changement de sens opéré par ces manipulations.' },
    { o: 'Constituer des corpus par classe de mots : noms, verbes, déterminants, adjectifs, pronoms personnels.', ex: 'L’élève commence à élaborer des critères de reconnaissance : Dans la boite des noms, on trouve des noms d’animaux, de personnes, d’objets, etc. Dans la boite des verbes, on trouve souvent des actions.' },
    { o: 'Comprendre les notions de masculin et de féminin, de singulier et de pluriel, et se familiariser avec la notion de « chaine d’accords » (déterminant/nom/adjectif).', ex: 'L’élève observe la marque du féminin (+e) : petit/petite, grand/grande, et la marque du pluriel (+s) : deux lapins, mes amis, des pommes ; il orthographie sous la dictée des groupes nominaux du type : un joli vélo/de jolis vélos.' },
    { o: 'S’initier à l’identification de la relation sujet-verbe à partir du sens et de l’observation des effets des transformations liées aux temps et aux personnes.', ex: 'Il comprend le lien sémantique entre le chat et miaule et observe les variations : le chat miaule et les chats miaulent ; il orthographie sous la dictée : La voiture roule → Les voitures roulent.' },
    { o: 'Apprendre à conjuguer être et avoir au présent de l’indicatif et commencer à les mobiliser à l’écrit, et observer les différentes formes verbales fréquentes et régulières.', ex: 'L’élève est capable de trouver l’orthographe d’une terminaison verbale en s’appuyant sur le sens et les analogies (nous → ons, vous → ez, ils → ent, tu → s).' },
  ],
});

/* ===================== CE1 ===================== */

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'francais',
  domaine: 'Lecture',
  items: [
    { o: 'Automatiser le décodage des correspondances graphophonémiques (CGP) apprises au CP et, en fin d’année, décoder toutes les CGP y compris les plus complexes.', ex: 'L’élève déchiffre et écrit sous la dictée des syllabes et des pseudo-mots comportant des CGP courantes et d’autres plus complexes (ex. : doir, stag, choust, valin, cagnou).' },
    { o: 'Identifier directement l’ensemble des mots courants et déchiffrer avec exactitude les mots nouveaux dont le décodage n’a pas encore été automatisé.', ex: 'Il lit des phrases contenant des morphèmes grammaticaux et lexicaux muets (ex. : ils chantent, le lait) de manière fluide sans vocaliser les lettres muettes.' },
    { o: 'Lire un texte adapté à son niveau de lecture avec une vitesse de 70 mots par minute en fin d’année.', ex: 'L’élève s’entraine à la lecture à voix haute dans des séances spécifiques : il repère la ponctuation et les groupes de mots qui doivent être lus ensemble (groupes de souffle respectant l’unité de sens).' },
    { o: 'Lire des textes narratifs, documentaires et prescriptifs en respectant tous les signes de ponctuation et les groupes de souffle, et lire de manière expressive.', ex: 'Il lit après préparation un texte simple en réalisant les pauses adéquates et en adoptant le ton et le rythme appropriés au sens du texte.' },
    { o: 'Dégager le sens global d’un texte lu, de façon autonome, à la suite d’une séance dédiée à la compréhension, et développer des stratégies pour élucider le sens des mots et des expressions inconnus.', ex: 'L’élève restitue les enchainements logiques et chronologiques d’un récit, est capable de donner un titre au texte et de le résumer oralement ; il prend l’habitude de consulter un dictionnaire adapté.' },
    { o: 'Se repérer dans la chaine anaphorique et s’appuyer sur le sens du texte pour résoudre des ambigüités ; comprendre ce qui est implicite dans le texte (inférences) dans des cas simples.', ex: 'Il explicite son raisonnement pour inférer et est capable d’expliciter les émotions des personnages.' },
    { o: 'Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d’une quinzaine de lignes.', ex: 'L’élève réalise ce qui est demandé dans le cas d’un texte prescriptif : une recette, l’application d’une règle du jeu.' },
    { o: 'Lire 5 à 10 œuvres complètes et variées, se familiariser aux différents genres et types de textes et relier ses lectures à son expérience personnelle (mise en réseau).', ex: 'L’élève commence à écrire à propos de ses lectures (gouts et préférences, bref résumé, autre fin) et reconnait, lors des lectures orales d’un adulte, les grandes caractéristiques d’un texte (conte, fable, poème).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'francais',
  domaine: 'Écriture',
  items: [
    { o: 'Mémoriser le tracé normé et la transcription de toutes les lettres minuscules scriptes en lettres minuscules cursives (dès la période 1).', ex: 'L’élève exerce tous les jours le geste d’écriture cursive minuscule en révisant les graphèmes par famille de gestes et transcrit de l’écriture scripte en écriture cursive.' },
    { o: 'Reconnaitre les lettres dans les quatre écritures (minuscules scripte et cursive, majuscules scripte ou cursive) et apprendre le tracé normé des lettres majuscules cursives par familles de gestes, à partir de la période 2.', ex: 'En fin d’année, il reconnait toutes les majuscules des lettres cursives et sait tracer les majuscules des lettres cursives.' },
    { o: 'Orthographier correctement les mots fréquents, réguliers puis irréguliers, et réaliser des accords en genre et en nombre dans le groupe nominal (article, nom, adjectif) et dans le groupe verbal (marque de pluriel des verbes = nt).', ex: 'L’élève réalise des dictées en lien avec l’étude des graphèmes (avec ou sans appui du cahier où ils sont consignés) et avec l’étude de la langue, et se familiarise avec divers types de dictée.' },
    { o: 'Automatiser le geste d’écriture cursive par la copie de textes en temps limité et acquérir des stratégies de copie et en mesurer l’efficacité.', ex: 'À la fin de l’année, l’élève sait transcrire cinq ou six phrases dans un cahier en enchainant plusieurs lettres sans rompre le geste, et mobiliser différentes stratégies de copie : lettre à lettre, syllabe par syllabe, mot à mot, groupe de mots par groupe de mots.' },
    { o: 'Copier quatre à cinq phrases courtes à l’issue de la période 1, cinq ou six lignes sans erreur à partir de la période 3, puis recopier sans effort une dizaine de lignes en fin d’année en respectant la ponctuation et la mise en page.', ex: '' },
    { o: 'Rédiger une phrase simple à partir d’une phrase prototypique, écrire un texte court de une à trois phrases dès la période 1, puis, en fin d’année, un texte de six ou sept phrases maximum en assurant la cohérence syntaxique et logique du texte produit.', ex: 'L’élève modifie un passage d’un texte lu en prenant appui sur un corpus de mots : Le petit chat est dans la cour de la ferme et poules/grosses/maison/cour → Les grosses poules sont dans la cour de la maison.' },
    { o: 'Insérer des connecteurs pour rendre cohérent l’enchainement de plusieurs phrases et retravailler un texte en fonction d’une ou deux contraintes d’écriture.', ex: 'Lors de l’étude d’une œuvre, l’élève écrit la suite d’un passage en séquençant les actions : D’abord … Puis … Enfin… ; il respecte les deux marqueurs de la phrase : majuscule et ponctuation finale forte.' },
    { o: 'Continuer à acquérir une méthodologie de production écrite : planification, mise en mots avec vigilance orthographique, révision après retours immédiats du professeur.', ex: 'Il se sert de « brouillons » pour écrire (listes, pistes, cartes mentales) et, à l’écoute de son texte, indique s’il y a des omissions, des incohérences et des répétitions.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'francais',
  domaine: 'Oral',
  items: [
    { o: 'Maintenir une attention active pendant quelques minutes pour repérer, mémoriser, classer ou ordonner les informations importantes entendues à l’oral.', ex: 'L’élève est capable d’écoute active : il prend le temps de comprendre les informations entendues et récapitule une leçon orale, par exemple en sciences en ordonnant les informations.' },
    { o: 'Utiliser à l’oral l’ensemble des temps verbaux pour raconter, décrire, expliquer, comparer ou exposer.', ex: 'L’élève est capable de prendre la parole en groupe : il s’adresse directement à ses camarades et se fait comprendre.' },
    { o: 'Utiliser les critères définis pour évaluer sa prestation ou celle des autres et progresser dans la production de différents types de discours.', ex: 'Il utilise des termes comme d’abord, pour commencer, ensuite, donc, par conséquent, enfin, pour terminer, pour conclure, et présente une démarche scientifique en utilisant le lexique appris.' },
    { o: 'Respecter le propos au cours des échanges au sein d’un groupe.', ex: 'L’élève exprime et justifie un accord ou un désaccord en utilisant des expressions fournies par le professeur : Je ne suis pas d’accord avec… ; Je ne partage pas l’avis de…' },
    { o: 'Adapter le registre de langue utilisé (familier, courant, soutenu) à la situation de communication proposée : conversation entre pairs, dialogue avec un adulte connu, une personnalité inconnue.', ex: 'Il participe à des jeux de rôle et adapte son registre de langue de façon appropriée (vocabulaire et syntaxe).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'francais',
  domaine: 'Vocabulaire',
  items: [
    { o: 'Enrichir les répertoires constitués au CP en y ajoutant notamment des expressions ou locutions et automatiser l’utilisation de différentes formulations, associées à un même réseau, en contexte.', ex: 'L’élève sait utiliser des formulations de sens proche, à l’oral et à l’écrit, pour éviter des répétitions : poser une question/demander quelque chose, questionner sur ou à propos de, interroger au sujet de.' },
    { o: 'S’appuyer sur la morphologie des mots pour en trouver le sens et prendre l’habitude de consulter des articles de dictionnaire adapté.', ex: 'Il enrichit sa connaissance des principaux affixes : para (parapluie), multi (multicolore), anti (antivol), eur/euse (chanteur, coiffeuse), er (boulanger, boucher).' },
    { o: 'Percevoir de grandes catégories et hiérarchiser les termes génériques, de base et spécifiques.', ex: 'L’élève perçoit le lien entre les mots aliment > laitage > fromage > gruyère et peut les classer du général vers le particulier ou inversement.' },
    { o: 'Percevoir les niveaux de langue familier, courant et soutenu et comprendre la différence entre sens propre et sens figuré.', ex: 'Dans le champ lexical des émotions (prendre ses jambes à son cou, avoir une peur bleue, être pétrifié), il comprend que le sens de ces expressions n’est pas littéral.' },
    { o: 'Trier et apparier les mots et leurs dérivés en fonction des préfixes et suffixes identifiés.', ex: 'Il identifie des contraires construits avec les préfixes in- ou dé- (visible/invisible, ranger/déranger, monter/démonter) puis en déduit la règle de formation.' },
    { o: 'Mobiliser les mots rencontrés en contexte en fonction des lectures et des activités conduites pour mieux parler, mieux comprendre et mieux écrire, et utiliser les relations établies entre les mots pour varier et adapter son expression.', ex: 'L’élève améliore sa production écrite ou orale en évitant les répétitions grâce à l’emploi de synonymes ou de termes génériques (ex. : la voiture/l’automobile/le véhicule).' },
    { o: 'Mémoriser l’orthographe des mots réguliers et irréguliers fréquemment rencontrés, tenir compte des accents, classer par analogie les mots comportant des graphèmes à prononciation variable (s, c, g) et anticiper une lettre muette finale à l’aide d’un mot de la même famille.', ex: 'Il regroupe des mots : garder/gai/gorille/gamin/élégant, girafe/gendarme/geste/agiter/gentiment ; il orthographie les mots dont la lettre muette finale s’entend dans un mot dérivé à radical régulier : chant/chanter, surpris/surprise.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE1',
  matiere: 'francais',
  domaine: 'Grammaire et orthographe',
  items: [
    { o: 'Identifier la phrase simple, en distinguer les principaux constituants et les nommer : groupe sujet (GS), verbe et compléments sans distinguer ces derniers entre eux.', ex: 'L’élève est capable d’opérer des manipulations de phrase (déplacement, suppression, ajout, substitution) : La maitresse raconte une histoire aux enfants. → Elle raconte une histoire aux enfants. → Elle la raconte aux enfants. → Elle leur raconte une histoire.' },
    { o: 'Reconnaitre et utiliser les trois types de phrases, en lien avec la ponctuation : déclarative, interrogative et impérative, et reconnaitre les formes négatives et exclamatives et savoir effectuer des transformations.', ex: 'Il progresse en lecture à voix haute en s’appuyant sur les signes de ponctuation et sur les groupes de sens ; exemple de déplacement : Elle mange tous les jours à la cantine. → Tous les jours, elle mange à la cantine.' },
    { o: 'Différencier et nommer les principales classes de mots : le déterminant, le nom commun, le nom propre, l’adjectif, le verbe, le pronom personnel sujet.', ex: 'L’élève catégorise un corpus de mots par classe grammaticale et affine les critères de reconnaissance élaborés au CP (noms propres : Astérix, Marseille, avec une majuscule ; noms communs précédés d’un déterminant : le, cette, des).' },
    { o: 'Reconnaitre le GN (déterminant/nom/adjectif) et comprendre le lien entre le déterminant, le nom et l’adjectif dans la « chaine d’accords ».', ex: 'Il utilise, en dictée, des marques d’accord pour le nom et l’adjectif épithète : pluriel en -s, féminin en -e, et commence à les mobiliser en production d’écrits ; il résout des devinettes orthographiques comme Je suis bleue : suis-je la mer ou l’océan ?' },
    { o: 'Identifier la relation sujet-verbe à partir de l’observation des effets des transformations liées au changement de temps et de personne dans des situations simples (groupe sujet + verbe).', ex: 'L’élève opère des transformations de personne (Tu parles à Léa./Léo parle à Léa.), observe les modifications et comprend les liens sémantiques et morphosyntaxiques entre le sujet et le verbe.' },
    { o: 'Identifier le radical et la terminaison d’un verbe du premier groupe conjugué et trouver son infinitif.', ex: 'Il est capable de nommer l’infinitif d’un verbe conjugué à divers temps et à différentes personnes, en s’appuyant sur le repérage d’un radical commun : ils plieront, tu as plié, vous pliez, elles plièrent → plier.' },
    { o: 'Apprendre à conjuguer au présent, à l’imparfait, au futur puis au passé composé de l’indicatif être et avoir et les verbes du premier groupe.', ex: 'L’élève orthographie des formes verbales en situation de dictée et commence à les mobiliser en situation d’expression écrite autonome.' },
  ],
});

/* ===================== CE2 ===================== */

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'francais',
  domaine: 'Lecture',
  items: [
    { o: 'Avoir automatisé toutes les correspondances graphophonémiques (CGP) et lire un texte nouveau en s’appuyant sur un décodage rapide.', ex: 'L’élève reconnait directement les mots fréquents et irréguliers et utilise la voie graphophonologique pour lire des mots inconnus en conservant une fluidité de lecture.' },
    { o: 'Repérer les lettres muettes et décoder les mots inconnus en conservant une vitesse de lecture correspondant aux objectifs de fin d’année.', ex: 'Il lit un texte avec fluidité sans vocaliser les lettres muettes et en faisant les liaisons appropriées.' },
    { o: 'Lire un texte adapté à son niveau de lecture avec une vitesse de 90 mots par minute et en respectant l’ensemble des marques de ponctuation et les liaisons.', ex: 'L’élève est capable de lire une scène de théâtre en incarnant un personnage et en jouant de l’expressivité de la ponctuation.' },
    { o: 'Manifester sa compréhension par une lecture expressive qui respecte la structure du texte, de la phrase et le sens.', ex: '' },
    { o: 'Lire et dégager le sens d’un texte narratif, poétique, documentaire ou théâtral, lu en autonomie ou lu par un adulte, en s’appuyant sur les caractéristiques de ces textes ; différencier le type narratif du type informatif et prescriptif.', ex: 'L’élève restitue les enchainements logiques et chronologiques d’un récit, est capable de donner un titre au texte et de le résumer oralement, et sait utiliser les sous-titres, titres de chapitres, mise en page en paragraphes pour mieux comprendre.' },
    { o: 'Comprendre ce qui est implicite (inférences) en s’appuyant sur des indices explicites et sur ses propres connaissances, et revenir au texte pour identifier et comprendre les éléments complexes.', ex: 'Il explicite les inférences et est capable d’expliciter les émotions et ressorts psychologiques des personnages.' },
    { o: 'Adopter une posture active par rapport au vocabulaire inconnu.', ex: 'Il prend appui sur le contexte et sur la morphologie (sens des principaux affixes) pour élucider le sens des mots inconnus et commence à utiliser des stratégies en cas de non-compréhension : relecture de la phrase, du paragraphe, recherche dans le dictionnaire.' },
    { o: 'Lire et comprendre en autonomie un texte narratif, informatif ou prescriptif d’une vingtaine de lignes, et lire de manière autonome 5 à 10 œuvres complètes et variées issues du patrimoine et de la littérature de jeunesse.', ex: 'L’élève différencie les caractéristiques des genres et types les plus courants : poésie, théâtre, récit (policier, d’aventure) ; il consigne ses expériences de lecture dans un carnet de lecteur.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'francais',
  domaine: 'Écriture',
  items: [
    { o: 'Automatiser l’écriture de toutes les lettres minuscules et majuscules en cursive dès la période 1.', ex: 'L’élève écrit et transcrit avec fluidité toutes les lettres cursives minuscules et majuscules.' },
    { o: 'Orthographier correctement les mots fréquents, réguliers et irréguliers et des phrases selon les accords étudiés dans le cadre de dictées, à la fin de l’année.', ex: 'L’élève transcrit correctement les phonèmes pouvant s’écrire à l’aide de plusieurs graphèmes (/o/, /é/, /è/, /an/, /s/) dans différents mots fréquents et orthographie les chaines d’accord dans la phrase.' },
    { o: 'Copier une dizaine de lignes sans erreur en conjuguant vitesse et exactitude et en respectant les mises en page complexes, en fin d’année.', ex: 'L’élève utilise systématiquement des stratégies de copie pour exercer la vitesse, l’exactitude, l’endurance et la mise en page ; il se relit et est capable de repérer des omissions ou erreurs orthographiques ou de ponctuation.' },
    { o: 'Écrire pour transmettre un message, une émotion, une information, etc., à un destinataire.', ex: 'L’élève écrit un message correctement orthographié pour être compris par le lecteur.' },
    { o: 'Écrire un texte d’une dizaine de lignes de différents types et relevant des différents enseignements : respecter la syntaxe, les règles orthographiques étudiées, réemployer un lexique précis et prendre en compte des contraintes d’écriture.', ex: 'Il écrit des dialogues, des récits, des poèmes en tenant compte des différentes caractéristiques des types et genres de textes, et mobilise des connecteurs temporels et logiques.' },
    { o: 'Rédiger quelques phrases qui permettent d’entrainer les automatismes appris en grammaire et orthographe.', ex: 'L’élève produit des gammes : La petite fille veut boire un chocolat./Les petits garçons veulent boire un chocolat./J’ai voulu boire un chocolat.' },
    { o: 'Relire son texte méthodiquement.', ex: 'Il utilise un brouillon pour organiser ses idées, parvient à identifier les groupes nominaux et verbaux dans son texte et éventuellement à corriger les erreurs d’accords, et améliore son texte en fonction des indications du professeur.' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'francais',
  domaine: 'Oral',
  items: [
    { o: 'Repérer, mémoriser et relier entre elles plusieurs informations importantes pour construire la cohérence d’un message entendu de plus en plus long et complexe (5 minutes maximum), en évaluant son degré de compréhension.', ex: 'L’élève écoute une interview d’un ou d’une artiste ou d’un scientifique et, après plusieurs écoutes et à la suite de consignes claires, reformule l’essentiel de ce qu’il a appris du locuteur ; il écoute une histoire et est capable d’en inventer la fin.' },
    { o: 'Mener une production orale de plus en plus longue et structurée pour raconter, expliquer, argumenter, justifier.', ex: 'L’élève produit des phrases de plus en plus complexes et mobilise un lexique de plus en plus varié et abstrait (en lien avec les séances de vocabulaire) ; il explique un raisonnement en mathématiques ou en sciences : une démarche, le choix d’une procédure, et est capable d’expliciter une erreur commise.' },
    { o: 'Maintenir l’intérêt de son auditoire lors des différentes prestations orales.', ex: 'Il présente un exposé de quelques minutes construit en classe en prenant appui sur un support ; il évite les « tics verbaux », les mots familiers, varie les connecteurs et veille au niveau de langue adopté.' },
    { o: 'Tenir compte de ce qui a déjà été dit lors des interventions au sein d’un groupe.', ex: 'L’élève est capable de reformuler ce qui a été dit par un camarade et de s’appuyer sur ce propos pour faire progresser l’échange, avec des expressions comme : Pour compléter ce qu’a dit… ; Je souhaite revenir sur ce qu’a dit…' },
    { o: 'Utiliser un registre de langue et adopter des postures adaptées aux situations proposées (jeux de rôles).', ex: '' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'francais',
  domaine: 'Vocabulaire',
  items: [
    { o: 'Enrichir les répertoires constitués au CP et au CE1 en y ajoutant notamment des expressions ou des locutions, et automatiser l’utilisation de différentes formulations, associées à un réseau, en contexte.', ex: 'L’élève sait user des associations comme : une forêt dense/épaisse/impénétrable/défricher une forêt/s’enfoncer dans la forêt/à la lisière de la forêt.' },
    { o: 'Comprendre le lien sémantique entre sens propre et sens figuré dans les cas les plus fréquents.', ex: 'Il perçoit que le verbe souffler a un sens différent dans souffler ses bougies et souffler une réponse ; il rédige des énoncés utilisant le même mot au sens propre et au sens figuré : Une forte pluie inonde la cave./Le soleil inonde la pièce.' },
    { o: 'S’appuyer sur la morphologie des mots pour en trouver le sens et consulter avec aisance des articles de dictionnaire adapté pour y vérifier le sens supposé de mots rencontrés.', ex: 'L’élève identifie un sens négatif dans les préfixes dé-, mal-, in- précédant le radical (déforestation ; malhabile ; immobile).' },
    { o: 'Percevoir de grandes catégories et hiérarchiser les termes génériques de base et spécifiques, et savoir utiliser les niveaux de langue (familier, courant et soutenu) en fonction des situations et des interlocuteurs.', ex: 'Il perçoit une gradation au sein de relations de proximité ou de synonymie (ex. : la crainte > la peur > l’épouvante).' },
    { o: 'Trier et apparier des mots et leurs dérivés en fonction des préfixes et suffixes identifiés, et se constituer un répertoire lexical personnel qui pourra forger l’autonomie visée au cycle 3.', ex: 'Il opère des dérivations en identifiant la partie commune des mots (port/portuaire/aéroport) et leur classe grammaticale (nom observation, verbe observer, adjectif observable).' },
    { o: 'Employer à bon escient et rigoureusement les mots étudiés, en référence à leur contexte d’emploi et leur éventuelle polysémie, et automatiser la restitution des mots d’un corpus étudié (fluence verbale).', ex: 'L’élève mobilise des synonymes, termes génériques ou expressions lors de divers écrits pour éviter les répétitions (ex. : le lion/le félin/le carnivore/le roi de la savane) et est capable de citer rapidement une dizaine de mots, de natures grammaticales différentes, à partir d’un mot de départ.' },
    { o: 'Écrire correctement sous la dictée les mots réguliers et irréguliers fréquemment rencontrés, tenir compte des accents et s’appuyer sur des critères morphologiques (radical, préfixe et suffixe) et analogiques pour orthographier correctement les mots.', ex: 'L’élève met en œuvre des raisonnements orthographiques fondés sur la morphologie lexicale pour orthographier des mots inconnus (ex. : il s’appuie sur beau pour orthographier beauté).' },
  ],
});

ATTENDUS.push({
  niveau: 'CE2',
  matiere: 'francais',
  domaine: 'Grammaire et orthographe',
  items: [
    { o: 'Identifier la phrase simple et reconnaitre ses principaux constituants : le groupe sujet, le verbe et les compléments sans distinguer ces derniers entre eux.', ex: 'L’élève substitue à un groupe nominal sujet un pronom personnel sujet et inversement.' },
    { o: 'Reconnaitre et produire les trois types de phrases (déclarative, interrogative et impérative) ainsi que les formes négative et exclamative.', ex: 'Il transforme des phrases de différents types à la forme négative (Jean, ferme la porte. → Jean, ne ferme pas la porte.).' },
    { o: 'Différencier et nommer les principales classes de mots : le déterminant, le nom commun, le nom propre, l’adjectif, le verbe, le pronom personnel sujet et l’adverbe.', ex: 'Il observe la différence entre les mots variables et invariables et découvre la classe grammaticale de l’adverbe ; il sait orthographier les adverbes les plus fréquents : très, si, bien, assez, aujourd’hui, demain, et les adverbes en -ment.' },
    { o: 'Utiliser la ponctuation de fin de phrase (. ! ?) et reconnaitre les marques du discours rapporté (« … »).', ex: 'Il repère dans un texte les passages au discours direct et mobilise les termes grammaticaux pour résoudre des problèmes d’orthographe, d’écriture et de lecture.' },
    { o: 'Repérer, comprendre et mettre en œuvre les marques d’accord au sein du groupe nominal.', ex: 'L’élève utilise des marques d’accords réguliers (nombre -s, genre -e), des marques d’accord de pluriels irréguliers pour les noms (-x, -al/-aux), des marques du féminin quand elles s’entendent dans les noms (lecteur/lectrice) et dans les adjectifs (joyeux/joyeuse).' },
    { o: 'Identifier, dans des situations simples, la relation sujet-verbe.', ex: 'Il opère des transformations de personne et de temps et observe les modifications (Je joue au ballon/les enfants jouent au ballon/nous avons joué au ballon).' },
    { o: 'Apprendre à conjuguer au présent, à l’imparfait, au futur et au passé composé de l’indicatif être et avoir, les verbes du premier groupe et les verbes irréguliers du 3e groupe (faire, aller, dire, venir, pouvoir, voir, vouloir, prendre).', ex: 'L’élève orthographie correctement les formes verbales étudiées en situation de dictée et d’écriture.' },
    { o: 'Identifier le radical et la terminaison d’un verbe conjugué au programme et trouver son infinitif.', ex: 'Il verbalise des raisonnements orthographiques en situation de dictée ou d’écriture et corrige des accords en fonction du signalement du professeur.' },
  ],
});
