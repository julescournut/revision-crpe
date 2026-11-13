/* Cours d’EPS. Format d’un chapitre : voir francais.js. */
COURS.eps = [
  {
    id: 'finalites-champs',
    title: 'Finalités de l’EPS et champs d’apprentissage',
    intro: 'L’éducation physique et sportive (EPS) est une discipline à part entière : elle ne se réduit ni à « se dépenser » ni à la pratique d’un sport. Les programmes des cycles 2 et 3 l’organisent en quatre champs d’apprentissage.',
    blocks: [
      { t: 'h', text: 'Les finalités de l’EPS' },
      { t: 'p', text: 'L’EPS vise la **formation d’un citoyen** cultivé, lucide, autonome et physiquement et socialement éduqué. Concrètement, elle poursuit plusieurs buts : développer les **ressources** de l’élève (motrices, mais aussi affectives, cognitives et sociales), lui faire accéder au **patrimoine culturel** que sont les pratiques physiques et sportives, et l’amener à adopter une **vie physique régulière** favorable à sa santé.' },
      { t: 'p', text: 'Les élèves pratiquent des **activités physiques, sportives et artistiques (APSA)**. Une APSA n’est pas une fin en soi : c’est un support pour faire apprendre des compétences.' },

      { t: 'h', text: 'Les quatre champs d’apprentissage' },
      { t: 'p', text: 'Les programmes des cycles 2 et 3 proposent quatre champs, au cours desquels les élèves doivent être confrontés, sur l’ensemble du cycle, à des activités variées.' },
      { t: 'table', head: ['Champ d’apprentissage', 'Ce qu’on apprend', 'Exemples d’APSA'], rows: [
        ['1. Produire une performance optimale, mesurable à une échéance donnée', 'Aller plus vite, plus haut, plus loin, plus longtemps ; mesurer et comparer à soi-même', 'Course de vitesse, course de durée, relais, saut en longueur, lancer, natation (performance)'],
        ['2. Adapter ses déplacements à des environnements variés', 'S’orienter, gérer l’incertitude du milieu et sa sécurité', 'Course d’orientation, escalade, natation (aisance aquatique), vélo, roller, parcours'],
        ['3. S’exprimer devant les autres par une prestation artistique et/ou acrobatique', 'Créer, présenter, être spectateur et critique', 'Danse, gymnastique, acrosport, arts du cirque'],
        ['4. Conduire et maîtriser un affrontement collectif ou interindividuel', 'Coopérer, s’opposer, choisir des stratégies', 'Jeux collectifs (handball, basket, football, rugby), jeux de raquettes (badminton, tennis de table), jeux de combat (lutte, judo)'],
      ] },

      { t: 'h', text: 'Pourquoi plusieurs champs ?' },
      { t: 'p', text: 'Chaque champ développe des compétences différentes. La course de durée apprend à gérer son effort ; l’escalade à maîtriser une peur ; la danse à construire un projet collectif ; le jeu collectif à coopérer et à respecter une règle. Un élève doit donc rencontrer les **quatre champs** au cours d’un cycle.' },

      { t: 'example', title: 'Classer une activité', items: [
        'Une classe de CM1 pratique la course d’orientation avec une carte de l’école. Champ 2 : les élèves s’adaptent à un environnement, lisent une carte, prennent des décisions de trajet.',
        'Si l’on mesure le temps mis à parcourir un trajet imposé, on bascule vers le champ 1 (performance mesurable).',
      ] },
      { t: 'example', title: 'Une même APSA, plusieurs champs', items: [
        'La natation peut relever du champ 1 (nager plus vite sur une distance) ou du champ 2 (s’adapter au milieu aquatique, entrer dans l’eau, se déplacer en profondeur).',
        'Le choix du champ dépend de l’objectif visé pour l’élève, pas de l’activité seule.',
      ] },

      { t: 'trap', text: 'Confondre APSA (support) et compétence visée : « faire du handball » n’est pas un objectif d’apprentissage. Penser qu’une APSA appartient à un seul champ : tout dépend du projet pédagogique. Réduire l’EPS à la performance sportive : elle vise aussi la santé, l’expression et la citoyenneté.' },
      { t: 'tip', text: 'À l’oral, pars toujours du champ d’apprentissage et de la compétence visée avant de nommer l’activité.' },
      { t: 'key', items: [
        'L’EPS forme un citoyen autonome, instruit, en bonne santé.',
        'Quatre champs : performance ; environnements variés ; expression artistique ou acrobatique ; affrontement.',
        'Une APSA est un support d’apprentissage, pas une fin en soi.',
        'Chaque élève rencontre les quatre champs au cours d’un cycle.',
      ] },
      { t: 'check', q: 'Dans quel champ classer la danse ?', a: 'Dans le champ 3 : s’exprimer devant les autres par une prestation artistique et/ou acrobatique.' },
      { t: 'check', q: 'Que signifie APSA ?', a: 'Activités physiques, sportives et artistiques : ce sont les supports des apprentissages en EPS.' },
      { t: 'check', q: 'Pourquoi le handball relève-t-il du champ 4 ?', a: 'Parce qu’il s’agit d’un affrontement collectif : les élèves coopèrent avec leur équipe et s’opposent à l’autre, en respectant des règles.' },
    ],
  },
  {
    id: 'seance-eps',
    title: 'Construire une séance et un module d’apprentissage',
    intro: 'Une séance d’EPS n’est pas une suite de jeux : elle part d’un objectif d’apprentissage, d’une situation adaptée, et elle organise le temps pour que chaque élève soit actif et progresse.',
    blocks: [
      { t: 'h', text: 'Module et séance' },
      { t: 'p', text: 'Un **module d’apprentissage** regroupe plusieurs séances (souvent autour d’une dizaine, sans règle officielle) autour d’une même APSA et d’un même **objectif d’apprentissage**. Cette durée est nécessaire : un élève ne progresse pas en une seule séance. Le module commence par une **évaluation diagnostique** et s’achève par une **évaluation finale**.' },
      { t: 'p', text: 'Une **séance** se structure ainsi : accueil et consignes, **mise en activité** (échauffement adapté à l’activité), **corps de séance** (situations d’apprentissage), **retour au calme** et **bilan** (ce que l’on a appris).' },

      { t: 'h', text: 'Situation de référence et variables didactiques' },
      { t: 'p', text: 'La **situation de référence** est une situation simple et complète, proposée en début et en fin de module, qui permet d’observer le niveau des élèves et de mesurer les progrès. À partir d’elle, l’enseignant ajuste la difficulté grâce aux **variables didactiques** : ce qu’on modifie pour changer le problème posé à l’élève.' },
      { t: 'list', items: [
        '**Espace** : agrandir ou réduire le terrain, éloigner la cible.',
        '**Temps** : durée de l’épreuve, temps de réflexion, rapidité imposée.',
        '**Matériel** : taille et poids du ballon, hauteur du but, type d’engin.',
        '**Effectif** : jouer à 2 contre 1, 3 contre 3, en groupes réduits.',
        '**Règles** : nombre de passes, interdiction de courir avec le ballon, points bonus.',
      ] },

      { t: 'h', text: 'Engagement moteur, différenciation, évaluation' },
      { t: 'p', text: 'Le **temps d’engagement moteur** est la part de la séance où l’élève est réellement en activité. Pour l’augmenter : organiser le matériel à l’avance, limiter les files d’attente, multiplier les ateliers, réduire les temps d’explication. La **différenciation** permet de proposer des tâches adaptées à des niveaux différents (parcours à plusieurs difficultés, cibles plus ou moins éloignées, aides).' },
      { t: 'p', text: 'L’**évaluation** repose sur des **critères de réussite** connus des élèves : par exemple « je lance la balle et elle atteint la cible ». Elle peut être diagnostique, formative (pendant les apprentissages), puis sommative en fin de module.' },
      { t: 'p', text: 'Enfin, les élèves endossent des **rôles sociaux** : **arbitre** (applique la règle), **observateur** (remplit une fiche d’observation), **chronométreur**, **coach**, **aide** ou **pareur** en gymnastique. Ces rôles développent des compétences citoyennes et aident l’élève à comprendre l’activité.' },

      { t: 'example', title: 'Séance de jeu collectif en CM1 (balle au capitaine / passes)', items: [
        'Objectif : se démarquer pour recevoir la balle. Situation de référence : 3 contre 3, but = faire cinq passes consécutives.',
        'Si les élèves perdent la balle trop vite, on joue avec une règle simplifiée (interdit de se déplacer avec la balle) ou on élargit le terrain (variable espace). Si c’est trop facile, on réduit l’espace. Chaque équipe a un observateur qui compte les passes réussies.',
      ] },
      { t: 'example', title: 'Gagner du temps d’engagement', items: [
        'Plutôt qu’une seule file pour sauter, on installe quatre ateliers de saut, avec des consignes écrites au tableau : tous les élèves sont actifs en même temps.',
      ] },

      { t: 'trap', text: 'Confondre variable didactique (ce qui change la difficulté d’apprentissage) et simple changement d’exercice. Remplir la séance d’activités sans objectif commun. Oublier d’évaluer, ou évaluer sans critères connus des élèves. Laisser des élèves « remplaçants » trop longtemps sans rôle.' },
      { t: 'key', items: [
        'Module : plusieurs séances, un objectif, évaluation de début et de fin.',
        'Variables didactiques : espace, temps, matériel, effectif, règles.',
        'Maximiser le temps d’engagement moteur de chaque élève.',
        'Rôles sociaux : arbitre, observateur, coach, chronométreur.',
      ] },
      { t: 'check', q: 'Donne trois variables didactiques possibles dans un jeu de lancer.', a: 'La distance de la cible (espace), la taille ou le poids de l’objet lancé (matériel), le temps imparti ou le nombre d’essais (temps).' },
      { t: 'check', q: 'Comment augmenter le temps d’engagement moteur ?', a: 'Préparer le matériel à l’avance, multiplier les ateliers, limiter les files d’attente et les explications trop longues.' },
      { t: 'check', q: 'Pourquoi donner un rôle d’observateur à un élève ?', a: 'Il apprend à analyser l’action et à utiliser des critères, et il comprend mieux l’activité qu’il pratique.' },
    ],
  },
  {
    id: 'securite-natation',
    title: 'Sécurité et natation',
    intro: 'La sécurité est une exigence permanente en EPS, et la natation en piscine est une activité à fort enjeu. Savoir nager est un objectif central de l’école primaire.',
    blocks: [
      { t: 'h', text: 'Les règles de sécurité en EPS' },
      { t: 'p', text: 'Toute séance exige un **espace adapté**, un **matériel vérifié**, des **consignes claires** et une **surveillance constante** des élèves. L’enseignant reste responsable de sa classe. Il connaît les élèves ayant un problème de santé et respecte les certificats médicaux.' },
      { t: 'list', items: [
        'Vérifier l’espace (sol, obstacles) et le matériel avant la séance.',
        'Poser des consignes de sécurité simples et les faire respecter.',
        'Prévoir un échauffement et de l’eau à disposition.',
        'Connaître le protocole d’alerte et de secours de l’école.',
        'Adapter l’effort aux possibilités de l’enfant.',
      ] },

      { t: 'h', text: 'Natation : un cadre réglementé' },
      { t: 'p', text: 'La natation scolaire est strictement encadrée par les **textes officiels** (programmes et circulaires). En piscine, l’enseignement est assuré par l’enseignant, avec l’aide d’**intervenants qualifiés** et agréés (maîtres-nageurs) et éventuellement de parents agréés. La **surveillance** de la sécurité est assurée par du personnel qualifié, et les **taux d’encadrement** sont fixés par les textes : il faut les consulter, car ils peuvent évoluer. Un **agrément** et une **autorisation** de l’institution sont nécessaires pour les intervenants extérieurs.' },
      { t: 'p', text: 'Avant la séance, on vérifie la présence du personnel, les conditions de la piscine, et l’on fait l’appel des élèves, à l’entrée et à la sortie de l’eau.' },

      { t: 'h', text: 'Aisance aquatique et savoir nager' },
      { t: 'p', text: 'L’**aisance aquatique** est la capacité d’un élève à se sentir à l’aise dans l’eau : entrer, s’immerger, se déplacer, flotter, sans peur ni appui. Au cycle 2, c’est l’objectif central. Au cycle 3, on vise à **savoir nager** : se déplacer dans l’eau et assurer sa sécurité, selon les exigences des textes officiels (une attestation du savoir-nager est délivrée à l’école).' },
      { t: 'p', text: 'Les compétences se construisent progressivement : entrer dans l’eau (sauter, plonger), s’immerger, se laisser flotter, se déplacer sur le ventre et sur le dos, rester en eau profonde.' },

      { t: 'example', title: 'Une séance au cycle 2', items: [
        'Objectif : entrer dans l’eau en sécurité et s’immerger. Situation : sauter dans l’eau depuis le bord, puis aller chercher un objet immergé, en petits groupes surveillés.',
        'Évolution : on augmente la profondeur (variable espace) ou on réduit l’aide (flotteurs enlevés progressivement).',
      ] },
      { t: 'example', title: 'Gestion d’une classe à la piscine', items: [
        'Les élèves sont répartis en groupes de niveau (non-nageurs, débutants, nageurs), chacun encadré par un adulte. Un comptage est fait à chaque changement de bassin ou de zone.',
      ] },

      { t: 'trap', text: 'Penser que l’enseignant n’est plus responsable de ses élèves à la piscine, dès lors qu’un maître-nageur est présent. Confondre « aisance aquatique » (être à l’aise dans l’eau) et « savoir nager » (se déplacer en sécurité sur une distance). Annoncer un taux d’encadrement sans l’avoir vérifié dans les textes en vigueur.' },
      { t: 'tip', text: 'À l’oral, formule les règles de sécurité en les liant à la situation décrite plutôt qu’en liste générale : c’est la preuve que tu les comprends.' },
      { t: 'key', items: [
        'Sécurité : espace, matériel, consignes, surveillance, connaissance des élèves.',
        'Natation : encadrement et agrément fixés par les textes officiels, à consulter.',
        'Aisance aquatique (cycle 2) puis savoir nager (cycle 3).',
        'L’enseignant garde la responsabilité pédagogique et la responsabilité de sa classe.',
      ] },
      { t: 'check', q: 'Quelle différence entre aisance aquatique et savoir nager ?', a: 'L’aisance aquatique est l’aisance dans l’eau (entrer, s’immerger, flotter, se déplacer). Savoir nager suppose de se déplacer et d’assurer sa sécurité sur une distance.' },
      { t: 'check', q: 'Qui assure l’enseignement de la natation à la piscine ?', a: 'L’enseignant, aidé d’intervenants qualifiés et agréés (maîtres-nageurs) et éventuellement de parents agréés, dans le cadre fixé par les textes officiels.' },
    ],
  },
  {
    id: 'oral-eps',
    title: 'Réussir la partie EPS de l’oral 2',
    intro: 'L’épreuve d’EPS de l’oral demande d’analyser une situation, de proposer une progression et de justifier ses choix. Elle teste la capacité du futur professeur à raisonner, pas à réciter.',
    blocks: [
      { t: 'h', text: 'Le format de l’épreuve' },
      { t: 'p', text: 'D’après la page officielle du concours (consultée en novembre 2026), cette partie est notée sur **8 points**. La **préparation dure 10 minutes**, puis l’épreuve dure **20 minutes** : un **exposé de 8 minutes maximum**, suivi d’un **échange** avec le jury. Les modalités peuvent évoluer d’une session à l’autre : vérifie la page officielle avant le concours.' },

      { t: 'h', text: 'Méthode en trois temps' },
      { t: 'steps', items: [
        '**Analyser la situation** : identifier l’APSA, le champ d’apprentissage, le cycle, l’objectif, les difficultés des élèves et les enjeux de sécurité.',
        '**Proposer une progression** : un ou plusieurs ajustements (variables didactiques), du simple au complexe, avec une évaluation.',
        '**Justifier ses choix** : pourquoi cette situation, cette règle, ce matériel, en lien avec les programmes et le développement de l’enfant.',
      ] },

      { t: 'h', text: 'Ce que le jury attend' },
      { t: 'list', items: [
        'Une **maîtrise du vocabulaire** : champ d’apprentissage, APSA, variable didactique, situation de référence, engagement moteur.',
        'Une **prise en compte de la sécurité** et de la gestion de la classe.',
        'Des **élèves actifs** : organisation, rôles sociaux, différenciation.',
        'Une **posture réfléchie** : on peut ajuster ses choix pendant l’échange.',
      ] },

      { t: 'h', text: 'Exemple de trame d’exposé' },
      { t: 'steps', items: [
        '**Présentation (1 min)** : l’APSA, le cycle, le champ d’apprentissage, la compétence visée.',
        '**Analyse (2 min)** : ce que les élèves savent faire et ce qui leur pose problème ; la sécurité.',
        '**Proposition (3 min)** : situation(s), progression sur plusieurs séances, variables, rôles.',
        '**Évaluation (1 min)** : critères de réussite, observation.',
        '**Conclusion (1 min)** : bilan rapide et ouverture.',
      ] },

      { t: 'example', title: 'Début d’exposé sur un jeu collectif (cycle 3)', items: [
        '« Je propose une séance de jeu collectif en CM2, relevant du champ d’apprentissage 4, dont l’objectif est de progresser pour se démarquer et recevoir la balle. Les élèves jouent à 3 contre 3 avec pour but d’enchaîner cinq passes. Je repère ici une difficulté : les joueurs courent avec la balle et ne passent pas. »',
        '« Ma réponse : introduire une règle (interdiction de courir avec la balle) et agrandir le terrain. Je justifie ces choix car ils obligent à passer, donc à se démarquer. »',
      ] },
      { t: 'example', title: 'Réponse à une question du jury', items: [
        'Question : « Comment feriez-vous pour un élève en difficulté ? » Réponse : j’adapte la tâche (cible plus proche, ballon plus gros), je lui confie un rôle adapté et je lui propose des critères de réussite simples.',
      ] },

      { t: 'trap', text: 'Réciter un cours sans lien avec la situation donnée. Proposer des situations sans parler des élèves ni de sécurité. Dépasser le temps d’exposé : le jury s’intéresse à l’échange. Oublier de nommer le champ d’apprentissage et le cycle.' },
      { t: 'tip', text: 'Entraîne-toi avec un chronomètre sur des situations variées (course, danse, jeux collectifs, natation) : le but est que la trame devienne un réflexe.' },
      { t: 'key', items: [
        'Format (page officielle, novembre 2026) : 8 points, 10 min de préparation, 20 min dont 8 min d’exposé maximum puis échange.',
        'Méthode : analyser, proposer, justifier.',
        'Toujours parler de sécurité, de rôles, de variables didactiques, d’évaluation.',
      ] },
      { t: 'check', q: 'Quelles sont les trois étapes de la méthode de l’exposé ?', a: 'Analyser la situation, proposer une progression, justifier ses choix.' },
      { t: 'check', q: 'Que faire si un élève ne progresse pas dans une situation ?', a: 'Modifier une variable didactique (espace, règle, matériel…), différencier la tâche, ou revoir le critère de réussite.' },
      { t: 'check', q: 'Pourquoi chronométrer son exposé à l’entraînement ?', a: 'Pour tenir dans les 8 minutes maximum et garder du temps pour l’échange avec le jury.' },
    ],
  },
];
