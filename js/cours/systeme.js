/* Cours du système éducatif. Format d'un chapitre : voir js/cours/francais.js. */
COURS.systeme = [
  {
    id: 'organisation-ecole',
    title: 'L’organisation de l’école',
    intro: 'L’école française est un service public national organisé en cycles, avec des acteurs aux rôles bien distincts. À l’oral, il faut savoir qui décide de quoi et à qui s’adresser en cas de difficulté.',
    blocks: [
      { t: 'h', text: 'Les cycles et le temps scolaire' },
      { t: 'p', text: 'La scolarité obligatoire est découpée en **quatre cycles** de trois ans, qui permettent de laisser du temps aux apprentissages.' },
      { t: 'table', head: ['Cycle', 'Nom', 'Classes'], rows: [
        ['Cycle 1', 'Apprentissages premiers', 'Petite, moyenne et grande section de maternelle'],
        ['Cycle 2', 'Apprentissages fondamentaux', 'CP, CE1, CE2'],
        ['Cycle 3', 'Consolidation', 'CM1, CM2 et 6e'],
        ['Cycle 4', 'Approfondissements', '5e, 4e et 3e'],
      ] },
      { t: 'p', text: 'À l’école primaire, le temps scolaire est de **24 heures par semaine** sur **36 semaines**, soit 864 heures par an. La semaine est répartie sur quatre jours ou quatre jours et demi selon le choix de l’organisation locale.' },

      { t: 'h', text: 'La chaîne hiérarchique' },
      { t: 'steps', items: [
        'Le **ministre** de l’Éducation nationale définit la politique éducative et les programmes.',
        'Le **recteur** dirige l’académie.',
        'Le **DASEN** (directeur académique des services de l’Éducation nationale) dirige les services du département.',
        'L’**IEN de circonscription** (inspecteur de l’Éducation nationale) encadre et inspecte les enseignants du premier degré. C’est le supérieur hiérarchique direct du professeur des écoles.',
        'Le **directeur d’école** est un enseignant chargé de la direction : il coordonne l’équipe, mais n’a pas d’autorité hiérarchique sur ses collègues.',
      ] },

      { t: 'h', text: 'Les autres acteurs autour de l’élève' },
      { t: 'list', items: [
        '**ATSEM** : agent territorial spécialisé des écoles maternelles, employé par la commune, il assiste l’enseignant en maternelle.',
        '**AESH** : accompagnant d’élèves en situation de handicap, il aide un ou plusieurs élèves dont le handicap est reconnu.',
        '**RASED** : réseau d’aides spécialisées aux élèves en difficulté, composé d’enseignants spécialisés et d’un psychologue.',
        '**Psychologue de l’Éducation nationale** : il intervient auprès des élèves, des familles et des équipes.',
        '**DDEN** : délégué départemental de l’Éducation nationale, bénévole, il veille aux bonnes conditions de vie de l’enfant à l’école.',
      ] },

      { t: 'h', text: 'Le rôle de la commune' },
      { t: 'p', text: 'La **commune** a la charge des locaux : elle construit, entretient et équipe l’école. Elle emploie aussi les ATSEM et organise souvent la cantine et le périscolaire. Elle ne décide pas de la pédagogie : celle-ci relève de l’État et des enseignants.' },

      { t: 'h', text: 'Les instances de l’école' },
      { t: 'table', head: ['Instance', 'Qui y siège', 'Rôle'], rows: [
        ['Conseil des maîtres', 'Tous les enseignants de l’école, présidé par le directeur', 'Organisation pédagogique, projet d’école, répartition des élèves'],
        ['Conseil de cycle', 'Les enseignants du cycle', 'Suivi des progrès des élèves, programmation, évaluations'],
        ['Conseil d’école', 'Directeur, enseignants, représentants des parents, représentant de la commune, DDEN', 'Vote le règlement intérieur, adopte le projet d’école, donne son avis sur la vie de l’école'],
        ['Conseil école-collège', 'Enseignants de l’école et du collège du secteur', 'Assurer la continuité des apprentissages entre le CM2 et la 6e'],
      ] },

      { t: 'example', title: 'Qui contacter ?', items: [
        'Les toilettes de l’école sont hors d’usage : c’est la **commune** qui est responsable du bâtiment, on alerte le directeur qui prévient la mairie.',
        'Un élève de ta classe dépasse largement les attentes et une question pédagogique se pose : tu en parles à l’équipe, puis à l’**IEN** si besoin.',
        'Un élève en grande difficulté a besoin d’une aide spécialisée : on sollicite le **RASED**.',
      ] },
      { t: 'example', title: 'Un conflit dans l’équipe', items: [
        'Deux enseignants ne s’accordent pas sur l’organisation du cycle. Le directeur anime la discussion au **conseil des maîtres**, mais ne peut pas imposer sa décision. Si le désaccord persiste, il informe l’IEN.',
      ] },

      { t: 'trap', text: 'Le directeur n’est **pas** le supérieur hiérarchique des enseignants : c’est l’IEN de circonscription. De même, l’ATSEM n’est pas un agent de l’Éducation nationale, mais un agent de la commune, placé pendant le temps scolaire sous l’autorité du directeur.' },
      { t: 'trap', text: 'Ne pas confondre l’AESH (accompagne un élève handicapé) et l’ATSEM (assiste l’enseignant en maternelle, pour tous les élèves).' },

      { t: 'key', items: [
        'Quatre cycles de trois ans ; 24 heures par semaine sur 36 semaines à l’école primaire.',
        'Chaîne : ministre, recteur, DASEN, IEN, enseignant. Le directeur coordonne, il ne commande pas.',
        'La commune gère les locaux et les ATSEM ; l’État gère la pédagogie.',
      ] },
      { t: 'check', q: 'Qui est le supérieur hiérarchique d’un professeur des écoles ?', a: 'L’IEN de la circonscription. Le directeur d’école n’a pas d’autorité hiérarchique sur ses collègues.' },
      { t: 'check', q: 'Quelles classes composent le cycle 3 ?', a: 'Le CM1, le CM2 et la 6e (cycle de consolidation).' },
      { t: 'check', q: 'Qui emploie les ATSEM ?', a: 'La commune.' },
    ],
  },
  {
    id: 'textes-fondateurs',
    title: 'Les grands textes et l’histoire de l’école',
    intro: 'L’école d’aujourd’hui est le produit de plus d’un siècle de lois. Connaître les principaux textes, leur date et leur apport permet de situer ses pratiques dans une histoire.',
    blocks: [
      { t: 'h', text: 'Les lois fondatrices (XIXe et début XXe)' },
      { t: 'list', items: [
        '**Lois Ferry (1881-1882)** : l’école primaire publique devient gratuite (1881), puis obligatoire et laïque (1882). L’instruction morale et civique remplace l’instruction religieuse dans les programmes.',
        '**Loi de 1905** : séparation des Églises et de l’État. L’État est neutre à l’égard des religions et garantit la liberté de conscience.',
      ] },

      { t: 'h', text: 'Démocratiser l’école (1975 à 2005)' },
      { t: 'list', items: [
        '**Loi Haby (1975)** : création du **collège unique**, où tous les élèves suivent le même enseignement après l’école primaire.',
        '**Loi Jospin (1989)** : met l’élève au centre du système éducatif et organise la scolarité en **cycles**.',
        '**Loi Fillon (2005)** : instaure le **socle commun** de connaissances et de compétences que tout élève doit maîtriser à la fin de la scolarité obligatoire.',
        '**Loi du 11 février 2005** sur l’égalité des droits et des chances des personnes handicapées : droit à la scolarisation en milieu ordinaire, création des MDPH et du projet personnalisé de scolarisation.',
      ] },

      { t: 'h', text: 'Les textes récents' },
      { t: 'list', items: [
        '**Loi de refondation de l’école de la République (2013)** : priorité donnée au premier degré, nouvelle formation des enseignants, création de l’enseignement moral et civique (EMC) et du cycle 3 CM1-CM2-6e.',
        '**Socle commun de connaissances, de compétences et de culture (2015)**, en vigueur depuis la rentrée 2016, organisé en **cinq domaines**.',
        '**Loi pour une école de la confiance (2019)** : abaisse l’âge de l’instruction obligatoire à **3 ans**.',
      ] },
      { t: 'p', text: 'Les cinq domaines du socle de 2015 :' },
      { t: 'steps', items: [
        'Les langages pour penser et communiquer.',
        'Les méthodes et outils pour apprendre.',
        'La formation de la personne et du citoyen.',
        'Les systèmes naturels et les systèmes techniques.',
        'Les représentations du monde et l’activité humaine.',
      ] },

      { t: 'h', text: 'Le référentiel de compétences des enseignants' },
      { t: 'p', text: 'Le **référentiel des compétences professionnelles des métiers du professorat et de l’éducation** date de 2013 et compte **14 compétences**. Certaines sont communes à tous les personnels (faire partager les valeurs de la République, agir en éducateur responsable), d’autres propres aux professeurs (maîtriser la didactique, construire et animer des situations d’apprentissage, évaluer les élèves).' },

      { t: 'example', title: 'Relier une situation à un texte', items: [
        'Une famille demande pourquoi son enfant de 3 ans doit absolument être inscrit : c’est la loi pour une école de la confiance de 2019 qui a rendu l’instruction obligatoire dès 3 ans.',
        'Un parent s’étonne qu’il n’y ait pas de cours de religion à l’école publique : on s’appuie sur les lois Ferry (laïcité des programmes) et sur la loi de 1905.',
      ] },
      { t: 'example', title: 'Retenir la chronologie', items: [
        '1881-1882 Ferry, 1905 séparation, 1975 Haby, 1989 Jospin, 2005 Fillon et loi handicap, 2013 refondation, 2015 socle en 5 domaines, 2019 école de la confiance.',
      ] },

      { t: 'trap', text: 'Les lois Ferry ne datent pas de 1905 : 1881-1882 pour la gratuité, l’obligation et la laïcité de l’école publique ; 1905 est la séparation des Églises et de l’État. Autre confusion fréquente : la loi Fillon crée le socle commun en 2005, mais le socle en cinq domaines date de 2015.' },
      { t: 'trap', text: 'L’instruction est obligatoire, pas l’école : les familles peuvent, sous conditions et contrôle, instruire leur enfant autrement que dans un établissement scolaire.' },

      { t: 'key', items: [
        'Ferry : gratuité, obligation, laïcité ; 1905 : séparation des Églises et de l’État.',
        'Haby : collège unique ; Jospin : cycles ; Fillon : socle commun ; 2005 : loi handicap.',
        '2013 : refondation et référentiel de 14 compétences ; 2015 : socle en 5 domaines ; 2019 : instruction obligatoire dès 3 ans.',
      ] },
      { t: 'check', q: 'Quelle loi a créé le collège unique ?', a: 'La loi Haby de 1975.' },
      { t: 'check', q: 'Combien de domaines compte le socle commun de 2015 ?', a: 'Cinq domaines, dont le premier est « Les langages pour penser et communiquer ».' },
      { t: 'check', q: 'À partir de quel âge l’instruction est-elle obligatoire depuis 2019 ?', a: 'À partir de 3 ans, grâce à la loi pour une école de la confiance.' },
    ],
  },
  {
    id: 'ecole-inclusive',
    title: 'L’école inclusive et les élèves à besoins particuliers',
    intro: 'Tous les élèves ont le droit d’être scolarisés dans l’école de leur quartier, avec les aménagements nécessaires. Le professeur doit connaître les dispositifs et savoir adapter son enseignement.',
    blocks: [
      { t: 'h', text: 'Les quatre dispositifs à ne pas confondre' },
      { t: 'table', head: ['Dispositif', 'Pour qui', 'Qui décide', 'Contenu'], rows: [
        ['PPRE (programme personnalisé de réussite éducative)', 'Élève en difficulté passagère sur des compétences précises (lecture, calcul…)', 'L’équipe enseignante, avec information et accord de la famille', 'Objectifs précis, actions ciblées sur une durée limitée'],
        ['PAP (plan d’accompagnement personnalisé)', 'Élève avec un trouble des apprentissages (troubles dys, par exemple)', 'L’équipe pédagogique avec la famille, sur avis du médecin de l’Éducation nationale', 'Aménagements pédagogiques (police agrandie, temps supplémentaire, outils numériques)'],
        ['PAI (projet d’accueil individualisé)', 'Élève avec un problème de santé durable (allergie, asthme, diabète…)', 'Le directeur avec la famille et le médecin de l’Éducation nationale', 'Conduite à tenir, traitement, régime alimentaire adapté'],
        ['PPS (projet personnalisé de scolarisation)', 'Élève en situation de handicap', 'La commission de la **MDPH** (maison départementale des personnes handicapées)', 'Aménagements, matériel adapté, aide humaine (AESH), orientation éventuelle en ULIS'],
      ] },
      { t: 'p', text: 'Le suivi d’un élève avec un PPS est assuré par une équipe de suivi de la scolarisation, réunie par l’**enseignant référent** de l’élève.' },

      { t: 'h', text: 'Les aides et les structures' },
      { t: 'list', items: [
        '**AESH** : accompagnant d’élèves en situation de handicap. Son aide est accordée par la MDPH, et il travaille sous la responsabilité pédagogique de l’enseignant.',
        '**ULIS** : dispositif qui accueille, dans une classe ordinaire, des élèves en situation de handicap avec un enseignant spécialisé. L’élève est inscrit dans une classe de référence et participe aux activités autant que possible.',
        '**UPE2A** : unité pédagogique pour élèves allophones arrivants, pour les élèves qui ne parlent pas encore le français. L’élève est inscrit dans une classe ordinaire et bénéficie d’un enseignement renforcé du français.',
      ] },

      { t: 'h', text: 'Les élèves à haut potentiel' },
      { t: 'p', text: 'Les élèves à haut potentiel (EHP, parfois dits intellectuellement précoces) ont des besoins spécifiques : ils peuvent s’ennuyer, être en décalage avec leurs camarades ou, parfois, être en difficulté scolaire. La réponse passe d’abord par la **différenciation** : tâches plus complexes, approfondissement, projets.' },

      { t: 'h', text: 'Différencier concrètement en classe' },
      { t: 'list', items: [
        'Varier les **supports** (texte, image, manipulation) et les **modalités** (individuel, binômes, groupes).',
        'Adapter la **durée** ou la **quantité** : même objectif, moins d’exercices ou plus de temps.',
        'Proposer des **aides** : référentiels affichés, fiches méthode, matériel de manipulation.',
        'Former des **groupes de besoins** flexibles, qui évoluent selon les progrès.',
      ] },

      { t: 'example', title: 'Un élève dyslexique', items: [
        'Les consignes sont lues à voix haute, le texte est écrit en police agrandie et aérée, l’évaluation porte sur la compréhension et non sur l’orthographe. Les objectifs restent les mêmes : seuls les moyens changent.',
      ] },
      { t: 'example', title: 'Un élève allophone', items: [
        'Il suit la majorité des cours dans sa classe (arts, sport, mathématiques avec supports visuels) et bénéficie, quelques heures par semaine, de l’UPE2A pour apprendre le français. Les camarades peuvent servir de tuteurs.',
      ] },

      { t: 'trap', text: 'Confondre PAP et PPS : le PAP est un aménagement pédagogique pour un trouble des apprentissages, décidé à l’école ; le PPS concerne un handicap reconnu par la MDPH. Ne pas non plus confondre PAI (santé) et PPRE (difficulté scolaire).' },
      { t: 'trap', text: 'Adapter n’est pas baisser les exigences : on aménage les moyens pour atteindre les mêmes objectifs, on ne renonce pas aux apprentissages.' },

      { t: 'key', items: [
        'PPRE : difficulté scolaire ; PAP : trouble des apprentissages ; PAI : santé ; PPS : handicap reconnu par la MDPH.',
        'AESH : aide humaine ; ULIS : dispositif pour les élèves en situation de handicap ; UPE2A : élèves allophones.',
        'Différencier : varier supports, durées, aides et regroupements.',
      ] },
      { t: 'check', q: 'Quel dispositif concerne un élève asthmatique ayant besoin d’un traitement à l’école ?', a: 'Le PAI (projet d’accueil individualisé).' },
      { t: 'check', q: 'Qui décide d’un PPS ?', a: 'La commission de la MDPH (maison départementale des personnes handicapées).' },
      { t: 'check', q: 'Que signifie « allophone » ?', a: 'Un élève dont la langue maternelle n’est pas le français et qui ne le maîtrise pas encore.' },
    ],
  },
  {
    id: 'apprendre-enseigner',
    title: 'Apprendre et enseigner',
    intro: 'Les pratiques de classe reposent sur des conceptions de l’apprentissage. Connaître les grands courants et les apports des sciences cognitives permet de justifier ses choix pédagogiques.',
    blocks: [
      { t: 'h', text: 'Les grands courants' },
      { t: 'table', head: ['Courant', 'Idée centrale', 'Pratique en classe'], rows: [
        ['Transmissif', 'Le maître sait et transmet à l’élève qui écoute', 'Cours magistral, exercices d’application'],
        ['Behaviorisme', 'On apprend par conditionnement : stimulus, réponse, renforcement', 'Petites étapes, récompenses, répétition'],
        ['Constructivisme (Piaget)', 'L’élève construit ses connaissances en agissant, par assimilation et accommodation', 'Situations-problèmes, manipulation, recherche'],
        ['Socioconstructivisme (Vygotski)', 'On apprend avec les autres, grâce à l’interaction sociale et au langage', 'Travail de groupe, débats, tutorat'],
      ] },

      { t: 'h', text: 'Des notions à connaître' },
      { t: 'list', items: [
        '**Zone proximale de développement** (Vygotski) : écart entre ce que l’élève sait faire seul et ce qu’il sait faire avec l’aide d’un adulte ou d’un pair. C’est là que l’enseignement est le plus efficace.',
        '**Étayage** (Bruner) : soutien de l’adulte qui aide l’élève à réussir une tâche, puis se retire progressivement.',
        '**Conflit sociocognitif** : la confrontation de points de vue différents entre élèves déstabilise leurs certitudes et les pousse à progresser.',
      ] },

      { t: 'h', text: 'Les apports des sciences cognitives' },
      { t: 'p', text: 'Stanislas Dehaene décrit **quatre piliers de l’apprentissage**.' },
      { t: 'steps', items: [
        '**L’attention** : elle sélectionne les informations à traiter, il faut donc la capter et la guider.',
        '**L’engagement actif** : l’élève doit faire des hypothèses, se tromper, tester, plutôt que subir.',
        '**Le retour d’information** : l’élève a besoin d’un retour rapide et clair sur ses réussites et ses erreurs.',
        '**La consolidation** : revoir, s’exercer, dormir, pour transférer ce qui est appris vers une mémoire durable.',
      ] },

      { t: 'h', text: 'Évaluer, accueillir l’erreur, développer la métacognition' },
      { t: 'list', items: [
        '**Évaluation diagnostique** : en début de séquence, pour savoir où en sont les élèves.',
        '**Évaluation formative** : pendant l’apprentissage, pour réguler et aider à progresser.',
        '**Évaluation sommative** : en fin de séquence, pour faire le bilan des acquis.',
        '**L’erreur** n’est pas une faute mais un outil : elle révèle la manière dont l’élève raisonne.',
        '**Métacognition** : amener l’élève à réfléchir à sa façon d’apprendre (« comment ai-je fait ? »).',
      ] },
      { t: 'p', text: 'La **gestion de classe** repose sur des règles claires, des routines, un climat de confiance et des consignes explicites : un cadre sécurisant est une condition des apprentissages.' },

      { t: 'example', title: 'Conflit sociocognitif en mathématiques', items: [
        'Deux élèves trouvent des résultats différents pour le même problème. Plutôt que de donner la réponse, l’enseignant les invite à confronter leurs méthodes, puis à les expliquer à la classe.',
      ] },
      { t: 'example', title: 'Un retour d’information efficace', items: [
        'Au lieu d’une note seule, l’enseignant écrit : « Tu as bien identifié les données du problème ; l’erreur vient du calcul de la deuxième étape. Reprends-la en vérifiant avec une opération inverse. »',
      ] },

      { t: 'trap', text: 'Évaluation formative et sommative ne s’opposent pas selon le contenu mais selon leur moment et leur but : l’une aide à apprendre, l’autre fait le bilan. Autre confusion : constructivisme (Piaget, l’élève agit seul sur le savoir) et socioconstructivisme (Vygotski, l’interaction sociale est centrale).' },

      { t: 'key', items: [
        'Piaget : l’élève construit ; Vygotski : on apprend avec les autres ; Bruner : étayage.',
        'Quatre piliers (Dehaene) : attention, engagement actif, retour d’information, consolidation.',
        'Trois évaluations : diagnostique, formative, sommative ; l’erreur est un outil.',
      ] },
      { t: 'check', q: 'Que désigne la zone proximale de développement ?', a: 'L’écart entre ce que l’élève sait faire seul et ce qu’il sait faire avec l’aide d’un adulte ou d’un camarade.' },
      { t: 'check', q: 'Citez les quatre piliers de l’apprentissage selon Dehaene.', a: 'L’attention, l’engagement actif, le retour d’information et la consolidation.' },
      { t: 'check', q: 'Quand a lieu une évaluation diagnostique ?', a: 'En début de séquence ou d’année, pour connaître les acquis et les difficultés des élèves.' },
    ],
  },
  {
    id: 'valeurs-ethique',
    title: 'Valeurs de la République, laïcité et posture du fonctionnaire',
    intro: 'Le professeur est un fonctionnaire de l’État : il transmet les valeurs de la République et doit adopter une posture professionnelle irréprochable. Ce chapitre rassemble les textes et les réflexes à connaître pour l’entretien.',
    blocks: [
      { t: 'h', text: 'La laïcité à l’école' },
      { t: 'p', text: 'La laïcité garantit la liberté de conscience et l’égalité de tous, quelles que soient leurs convictions. À l’école, elle s’appuie sur deux textes essentiels.' },
      { t: 'list', items: [
        '**Loi de 2004** : interdit aux élèves des écoles, collèges et lycées publics le port de signes ou de tenues par lesquels ils manifestent ostensiblement une appartenance religieuse.',
        '**Charte de la laïcité à l’école (2013)** : elle rappelle les principes de la laïcité en quinze articles. Elle est affichée dans les écoles.',
      ] },

      { t: 'h', text: 'Droits et obligations du fonctionnaire' },
      { t: 'list', items: [
        '**Neutralité** : l’enseignant ne manifeste aucune opinion politique ou religieuse dans l’exercice de ses fonctions.',
        '**Discrétion professionnelle** : ne pas divulguer les informations dont il a connaissance dans l’exercice de ses fonctions.',
        '**Secret professionnel** : certaines informations confidentielles ne doivent pas être révélées, sauf cas prévus par la loi (par exemple pour protéger un enfant en danger).',
        '**Obéissance hiérarchique** : exécuter les instructions de sa hiérarchie, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public.',
        '**Devoir de réserve** : s’exprimer avec mesure sur la place publique, en particulier sur son administration.',
      ] },

      { t: 'h', text: 'Protéger l’enfant et lutter contre le harcèlement' },
      { t: 'list', items: [
        '**Information préoccupante** : un doute sur la situation d’un enfant est transmis à la cellule départementale de recueil des informations préoccupantes (CRIP) du conseil départemental.',
        '**Signalement** : en cas de danger grave ou immédiat, le directeur ou l’enseignant s’adresse au procureur de la République.',
        '**Le 119** : numéro national d’enfance en danger, gratuit et ouvert à tous.',
        '**Harcèlement** : il est puni par la loi. L’enseignant repère, écoute la victime, informe le directeur et la famille et agit avec l’équipe. Un numéro national, le 3018, existe pour le harcèlement et le cyberharcèlement.',
      ] },

      { t: 'h', text: 'Familles, égalité et transition écologique' },
      { t: 'p', text: 'Les **parents** sont partenaires de l’école : rencontres, cahier de liaison, représentants au conseil d’école. Les échanges restent courtois et respectueux, et le rôle de chacun est rappelé. L’école promeut l’**égalité entre les filles et les garçons** (lutte contre les stéréotypes, mixité des activités, parole équitable). Elle forme aussi à la **transition écologique** par l’éducation au développement durable, avec des projets concrets (tri, jardin, économies d’énergie).' },

      { t: 'example', title: 'Un parent demande une dispense', items: [
        'Il refuse que sa fille participe au cours de natation pour motif religieux. L’enseignant rappelle le caractère obligatoire de l’enseignement, dialogue avec la famille et informe le directeur ; la hiérarchie tranche en cas de blocage.',
      ] },
      { t: 'example', title: 'Un élève confie une situation inquiétante', items: [
        'L’enseignant écoute sans promettre le secret, ne mène pas d’enquête lui-même, note les propos exacts de l’enfant et prévient immédiatement le directeur, qui transmet une information préoccupante ou un signalement.',
      ] },

      { t: 'trap', text: 'Le secret professionnel ne dispense pas de protéger un enfant en danger : il y a obligation d’alerter. Autre erreur : croire que la neutralité s’applique aux élèves ; ce sont les enseignants qui sont tenus à la neutralité, les élèves ayant la liberté de conscience (sauf signes ostensibles).' },
      { t: 'trap', text: 'Ne pas promettre le secret à un enfant qui se confie : on ne peut pas garder pour soi une situation de danger.' },

      { t: 'key', items: [
        'Laïcité : loi de 2004 (signes ostensibles) et Charte de 2013 (quinze articles).',
        'Obligations : neutralité, discrétion, secret professionnel, obéissance hiérarchique, devoir de réserve.',
        'Enfant en danger : information préoccupante (CRIP), signalement (procureur), 119.',
      ] },
      { t: 'check', q: 'Que prévoit la loi de 2004 ?', a: 'L’interdiction pour les élèves du public de porter des signes ou tenues manifestant ostensiblement une appartenance religieuse.' },
      { t: 'check', q: 'À qui transmet-on une information préoccupante ?', a: 'À la cellule départementale de recueil des informations préoccupantes (CRIP), au conseil départemental.' },
      { t: 'check', q: 'À qui s’applique l’obligation de neutralité à l’école ?', a: 'Aux enseignants et aux agents du service public, pas aux élèves.' },
    ],
  },
  {
    id: 'oral-entretien',
    title: 'Réussir l’entretien de l’oral 2',
    intro: 'L’entretien porte sur les valeurs de la République, le service public et la projection dans le métier. Ce chapitre donne le format, une méthode et des exemples pour traiter les mises en situation.',
    blocks: [
      { t: 'h', text: 'Le format de l’épreuve' },
      { t: 'p', text: 'L’épreuve dure **35 minutes** et est notée sur **12 points**.' },
      { t: 'steps', items: [
        '**Présentation** de 5 minutes : le candidat explique son parcours et sa motivation pour le métier.',
        '**Échange** de 10 minutes avec le jury à partir de cette présentation.',
        '**Mises en situation** pendant 20 minutes : des situations professionnelles autour des valeurs de la République, de la laïcité, du service public, de la projection dans le métier, de la transition écologique et de l’épanouissement de l’élève.',
      ] },

      { t: 'h', text: 'Une méthode en quatre temps' },
      { t: 'steps', items: [
        '**Analyser** : reformuler la situation, repérer les acteurs, l’enjeu et le principe en cause.',
        '**S’appuyer sur les textes** : citer la loi ou le principe concerné (laïcité, obligations du fonctionnaire, protection de l’enfance).',
        '**Agir en équipe** : dialoguer avec l’élève, la famille, les collègues, le directeur.',
        '**Informer la hiérarchie** : directeur, puis IEN si la situation le justifie.',
      ] },
      { t: 'tip', text: 'Annonce ta démarche, argumente avec calme, nuance : le jury attend moins une réponse unique qu’un raisonnement structuré qui s’appuie sur les textes.' },

      { t: 'h', text: 'Des mises en situation traitées' },
      { t: 'example', title: 'Un parent conteste une activité pour motif religieux', items: [
        'Analyse : refus d’une activité obligatoire au nom d’une conviction. Textes : laïcité, obligation scolaire, programmes nationaux.',
        'Action : recevoir le parent, expliquer le caractère obligatoire et les objectifs pédagogiques, rester respectueux. Équipe : prévenir le directeur. Hiérarchie : l’IEN si le désaccord persiste.',
      ] },
      { t: 'example', title: 'Un élève est victime de moqueries répétées', items: [
        'Analyse : possible harcèlement. Texte : le harcèlement est puni par la loi.',
        'Action : écouter la victime, ne pas minimiser, agir en équipe pour repérer les auteurs, informer les familles, rappeler les règles à la classe. Hiérarchie : directeur, qui peut saisir les dispositifs de l’académie.',
      ] },
      { t: 'example', title: 'Un enfant confie qu’il est maltraité', items: [
        'Analyse : danger possible pour l’enfant. Textes : obligation de protéger, information préoccupante, signalement au procureur en cas de danger grave.',
        'Action : écouter sans interroger ni promettre le secret, noter les paroles, prévenir immédiatement le directeur. Avec le directeur, rédiger une information préoccupante transmise à la CRIP du département ; en cas de danger grave et immédiat, signalement au procureur. L’enseignant n’a pas besoin d’être certain des faits pour transmettre, et ne reste jamais seul avec cette information. Le 119 est le numéro national de l’enfance en danger.',
      ] },
      { t: 'example', title: 'Un collègue tient des propos contraires à la neutralité', items: [
        'Analyse : manquement à l’obligation de neutralité. Textes : obligations du fonctionnaire.',
        'Action : en parler d’abord avec le collègue, avec tact. Si cela persiste, informer le directeur ou l’IEN. On ne règle pas la situation seul.',
      ] },

      { t: 'trap', text: 'Ne pas répondre par une opinion personnelle (« moi, je pense que… ») ni par une décision isolée : le jury attend une réponse de fonctionnaire, qui s’appuie sur les textes et sur le collectif. Autre erreur : oublier d’informer la hiérarchie.' },
      { t: 'trap', text: 'Éviter la réponse purement répressive (sanctionner d’emblée) ou la réponse laxiste (ne rien faire) : on dialogue, on rappelle le cadre, puis on agit.' },

      { t: 'key', items: [
        '35 minutes, 12 points : 5 minutes de présentation, 10 minutes d’échange, 20 minutes de mises en situation.',
        'Méthode : analyser, s’appuyer sur les textes, agir en équipe, informer la hiérarchie.',
        'Rester calme, nuancé et respectueux des personnes.',
      ] },
      { t: 'check', q: 'Combien de temps durent les mises en situation ?', a: '20 minutes, après 5 minutes de présentation et 10 minutes d’échange.' },
      { t: 'check', q: 'Quelles sont les quatre étapes de la méthode de traitement d’une situation ?', a: 'Analyser, s’appuyer sur les textes, agir en équipe, informer la hiérarchie.' },
    ],
  },
];
