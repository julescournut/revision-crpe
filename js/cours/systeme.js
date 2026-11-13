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

      { t: 'h', text: 'Le directeur d’école : ses missions' },
      { t: 'list', items: [
        'Il **coordonne** l’équipe et préside le conseil des maîtres et le conseil d’école.',
        'Il est l’interlocuteur des **familles**, de la **commune** et des partenaires de l’école.',
        'Il veille à la **sécurité** des élèves : exercices d’évacuation, plan de mise en sûreté de l’école.',
        'Il fait le lien avec l’**IEN** de la circonscription, à qui il rend compte.',
      ] },
      { t: 'p', text: 'Le directeur est avant tout un **enseignant**. Il anime et coordonne, mais il n’est pas le chef hiérarchique de ses collègues.' },

      { t: 'h', text: 'Qui accompagne les enseignants ?' },
      { t: 'table', head: ['Acteur', 'Rôle'], rows: [
        ['IEN de circonscription', 'Inspecte, évalue, conseille ; supérieur hiérarchique direct des professeurs des écoles'],
        ['Conseiller pédagogique de circonscription (CPC)', 'Conseille et accompagne les équipes ; l’inspection reste celle de l’IEN'],
        ['Directeur d’école', 'Coordonne l’équipe, anime les instances, représente l’école'],
        ['Collègues et équipe de cycle', 'Construisent ensemble les progressions et les évaluations'],
      ] },
      { t: 'p', text: 'Les **conseillers pédagogiques** sont des enseignants expérimentés qui aident les équipes à mettre en œuvre les programmes. Ils conseillent, mais ils ne sont pas les supérieurs hiérarchiques des enseignants.' },

      { t: 'h', text: 'Qui décide de quoi : État, commune, école ?' },
      { t: 'table', head: ['Domaine', 'Qui décide'], rows: [
        ['Programmes et politique éducative', 'L’État, par le ministre'],
        ['Méthodes et démarches pédagogiques', 'L’enseignant, dans le cadre des programmes (liberté pédagogique encadrée)'],
        ['Construction, entretien, équipement des locaux', 'La commune'],
        ['Restauration scolaire et périscolaire', 'Souvent la commune'],
        ['Projet d’école', 'L’équipe, adopté en conseil d’école'],
      ] },

      { t: 'example', title: 'Qui fait quoi ? Trois cas', items: [
        'Le tableau de la classe est cassé : demande au directeur, qui s’adresse à la **mairie**, propriétaire des locaux et du mobilier.',
        'Tu hésites sur la progression en lecture au CP : tu en parles à ton équipe de cycle, au **conseiller pédagogique** ou à l’**IEN**, pas à la mairie.',
        'Un exercice d’évacuation doit être organisé : le **directeur** s’en occupe et informe l’équipe.',
      ] },
      { t: 'example', title: 'Une réunion du conseil d’école', items: [
        'Autour de la table : le directeur, les enseignants, des parents élus, un représentant de la commune et le DDEN. On y adopte le règlement intérieur et on donne un avis sur la vie de l’école.',
        'Ce n’est pas le lieu où l’on traite le cas d’un élève précis : cela relève de l’équipe éducative ou de l’équipe pédagogique.',
      ] },

      { t: 'key', items: [
        'Quatre cycles de trois ans ; 24 heures par semaine sur 36 semaines à l’école primaire.',
        'Chaîne : ministre, recteur, DASEN, IEN, enseignant. Le directeur coordonne, il ne commande pas.',
        'La commune gère les locaux et les ATSEM ; l’État gère la pédagogie.',
      ] },
      { t: 'check', q: 'Qui est le supérieur hiérarchique d’un professeur des écoles ?', a: 'L’IEN de la circonscription. Le directeur d’école n’a pas d’autorité hiérarchique sur ses collègues.' },
      { t: 'check', q: 'Quelles classes composent le cycle 3 ?', a: 'Le CM1, le CM2 et la 6e (cycle de consolidation).' },
      { t: 'check', q: 'Qui emploie les ATSEM ?', a: 'La commune.' },
    ],
    astuces: [
      'Retiens la chaîne du haut vers le bas avec la phrase « Ministre, Recteur, DASEN, IEN, Enseignant » : M, R, D, I, E.',
      'Les cycles se retiennent en dizaines de classes : cycle 1 = maternelle, cycle 2 = CP-CE1-CE2, cycle 3 = CM1-CM2-6e, cycle 4 = 5e-4e-3e.',
      'Pour le cycle 3, pense au « pont » : il passe l’école au collège, donc il contient le CM1, le CM2 et la 6e.',
      '24 heures par semaine sur 36 semaines : 24 × 36 = 864 heures. Entraîne-toi à refaire le calcul de tête.',
      'Sur le directeur, répète : il **coordonne**, il ne **commande** pas. Le supérieur hiérarchique, c’est l’IEN.',
      'Distingue ATSEM et AESH par leur employeur et leur public : l’ATSEM est employée par la commune et assiste l’enseignant de maternelle ; l’AESH accompagne un élève handicapé.',
      'La commune s’occupe de la **matière** (murs, mobilier, ATSEM, cantine), l’État de la **pédagogie** : « les murs à la mairie, les programmes à l’État ».',
      'Devant une situation concrète, demande-toi d’abord : de qui relève ce problème, de la commune, de l’école ou de l’inspection ?',
      'Le conseil d’école réunit les parents ; le conseil des maîtres ne réunit que les enseignants. Retiens le mot « parents » pour reconnaître le conseil d’école.',
      'Le conseil école-collège sert à la **continuité** CM2-6e : pense à « passerelle ».',
      'Le DDEN est un bénévole : il n’appartient ni à la commune ni à l’Éducation nationale comme salarié.',
      'À l’oral, cite les acteurs par leur nom exact (RASED, AESH, ATSEM, DASEN) : cela montre que tu connais l’institution.',
      'À l’oral, ne dis jamais « mon chef » pour le directeur : parle de « mon directeur » ou de « mon IEN » avec le bon rôle.',
      'Pour un élève en grande difficulté, pense d’abord à l’équipe, puis au RASED, avant d’envisager d’autres dispositifs.',
      'En classe, explique aux élèves qui fait quoi à l’école (directeur, ATSEM, AESH) pour qu’ils sachent à qui s’adresser.',
      'Fais un schéma en entonnoir de la hiérarchie sur une feuille : le dessiner une fois aide plus que le relire dix fois.',
    ],
    quiz: [
      { q: 'Combien de cycles compte la scolarité obligatoire ?', c: ['4', '3', '5', '6'], a: 0, e: 'Quatre cycles de trois ans : cycles 1, 2, 3 et 4.' },
      { q: 'Quelles classes composent le cycle 2 ?', c: ['CP, CE1, CE2', 'GS, CP, CE1', 'CE2, CM1, CM2', 'CM1, CM2, 6e'], a: 0, e: 'Le cycle 2 est le cycle des apprentissages fondamentaux : CP, CE1 et CE2.' },
      { q: 'Quel est le nom du cycle 1 ?', c: ['Cycle des apprentissages premiers', 'Cycle des apprentissages fondamentaux', 'Cycle de consolidation', 'Cycle des approfondissements'], a: 0, e: 'Le cycle 1 couvre la maternelle : apprentissages premiers.' },
      { q: 'Quel est le nom du cycle 3 ?', c: ['Cycle de consolidation', 'Cycle des apprentissages premiers', 'Cycle des apprentissages fondamentaux', 'Cycle des approfondissements'], a: 0, e: 'Le cycle 3 (CM1, CM2, 6e) est le cycle de consolidation.' },
      { q: 'Quel est le temps scolaire annuel à l’école primaire ?', c: ['864 heures', '936 heures', '720 heures', '1 080 heures'], a: 0, e: '24 heures par semaine sur 36 semaines : 864 heures.' },
      { q: 'Qui dirige une académie ?', c: ['Le recteur', 'Le DASEN', 'L’IEN', 'Le préfet'], a: 0, e: 'Le recteur dirige l’académie ; le DASEN dirige les services du département.' },
      { q: 'Qui est le supérieur hiérarchique direct d’un professeur des écoles ?', c: ['L’IEN de circonscription', 'Le directeur d’école', 'Le maire', 'Le DASEN'], a: 0, e: 'C’est l’IEN. Le directeur coordonne mais n’a pas d’autorité hiérarchique.' },
      { q: 'Quelle autorité hiérarchique le directeur d’école exerce-t-il sur ses collègues ?', c: ['Aucune', 'Il les évalue chaque année', 'Il décide de leur affectation', 'Il peut les sanctionner'], a: 0, e: 'Le directeur est un enseignant chargé de la direction, sans autorité hiérarchique.' },
      { q: 'Qui emploie les ATSEM ?', c: ['La commune', 'L’Éducation nationale', 'Le département', 'L’association de parents'], a: 0, e: 'Les ATSEM sont des agents territoriaux : la commune les emploie.' },
      { q: 'Quel est le rôle d’un AESH ?', c: ['Accompagner un élève en situation de handicap', 'Assister l’enseignant en maternelle', 'Inspecter les classes', 'Gérer la cantine'], a: 0, e: 'L’AESH accompagne un ou plusieurs élèves handicapés. L’ATSEM, elle, assiste l’enseignant en maternelle.' },
      { q: 'Qui est chargé des locaux de l’école primaire ?', c: ['La commune', 'Le rectorat', 'L’IEN', 'Le directeur personnellement'], a: 0, e: 'La commune construit, entretient et équipe l’école.' },
      { q: 'À quelle instance siègent des représentants des parents ?', c: ['Le conseil d’école', 'Le conseil des maîtres', 'Le conseil de cycle', 'Le conseil école-collège'], a: 0, e: 'Le conseil d’école réunit aussi parents, commune et DDEN.' },
      { q: 'Qui préside le conseil des maîtres ?', c: ['Le directeur', 'L’IEN', 'Le maire', 'Un représentant des parents'], a: 0, e: 'Le conseil des maîtres réunit tous les enseignants de l’école, sous la présidence du directeur.' },
      { q: 'Quel est le but du conseil école-collège ?', c: ['Assurer la continuité entre le CM2 et la 6e', 'Voter le règlement intérieur de l’école', 'Désigner les ATSEM', 'Fixer les rythmes scolaires'], a: 0, e: 'Il rassemble enseignants de l’école et du collège du secteur pour la continuité des apprentissages.' },
      { q: 'Qui est le DDEN ?', c: ['Un bénévole qui veille aux conditions de vie de l’enfant à l’école', 'Un inspecteur du département', 'Un agent de la commune', 'Un psychologue scolaire'], a: 0, e: 'Le délégué départemental de l’Éducation nationale est un bénévole.' },
      { q: 'Sous l’autorité de qui l’ATSEM est-elle placée pendant le temps scolaire ?', c: ['Du directeur d’école', 'De l’IEN', 'Du recteur', 'Du DDEN'], a: 0, e: 'Elle reste agent de la commune, mais pendant le temps scolaire elle est sous l’autorité du directeur.' },
      { q: 'À qui s’adresse l’équipe pour un élève en grande difficulté ayant besoin d’une aide spécialisée ?', c: ['Au RASED', 'À l’ATSEM', 'Au DDEN', 'À la commune'], a: 0, e: 'Le RASED regroupe des enseignants spécialisés et un psychologue.' },
      { q: 'Les toilettes de l’école sont hors d’usage. Qui est responsable de leur remise en état ?', c: ['La commune', 'L’IEN', 'Le rectorat', 'Le directeur sur ses fonds personnels'], a: 0, e: 'Le bâtiment relève de la commune : le directeur la prévient.' },
      { q: 'Parmi ces instances, laquelle vote le règlement intérieur de l’école ?', c: ['Le conseil d’école', 'Le conseil de cycle', 'Le conseil des maîtres', 'Le conseil école-collège'], a: 0, e: 'Le conseil d’école adopte le règlement intérieur et le projet d’école.' },
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

      { t: 'h', text: 'Gratuité, obligation, laïcité : trois principes, trois dates' },
      { t: 'table', head: ['Principe', 'Texte', 'Date'], rows: [
        ['Gratuité de l’école primaire publique', 'Loi Ferry', '1881'],
        ['Obligation d’instruction (de 6 à 13 ans) et laïcité des programmes', 'Loi Ferry', '1882'],
        ['Laïcité du personnel enseignant des écoles publiques', 'Loi Goblet', '1886'],
        ['Séparation des Églises et de l’État', 'Loi de 1905', '1905'],
      ] },
      { t: 'p', text: 'Ces trois principes se complètent : **gratuité** pour que l’argent ne soit pas un obstacle, **obligation** pour que tous les enfants soient instruits, **laïcité** pour que l’école accueille tous les enfants sans distinction de croyance.' },

      { t: 'h', text: 'Les principes inscrits dans la Constitution' },
      { t: 'list', items: [
        '**Préambule de la Constitution de 1946** : l’organisation de l’enseignement public gratuit et laïque à tous les degrés est un devoir de l’État.',
        '**Constitution de 1958, article 1** : la France est une République indivisible, laïque, démocratique et sociale.',
        '**Devise de la République** : Liberté, Égalité, Fraternité.',
      ] },

      { t: 'h', text: 'Allonger et ouvrir la scolarité' },
      { t: 'list', items: [
        '**1959** : l’obligation scolaire est portée à 16 ans.',
        '**1975** : le collège unique offre à tous les élèves le même enseignement après le primaire.',
        '**2019** : l’instruction est obligatoire dès 3 ans, et une obligation de formation est instaurée pour les jeunes de 16 à 18 ans.',
      ] },
      { t: 'p', text: 'Au fil des lois, la logique est la même : **plus d’élèves, plus longtemps, avec les mêmes chances**. Cette idée de démocratisation guide aussi l’école inclusive.' },

      { t: 'example', title: 'Associer une loi à une situation', items: [
        'Un élève en situation de handicap est inscrit dans l’école de son quartier : loi du 11 février 2005 (scolarisation en milieu ordinaire).',
        'Tous les élèves de 11 ans vont au même collège, sans filière dès l’entrée : loi Haby de 1975 (collège unique).',
        'On organise la scolarité en cycles de plusieurs années : loi Jospin de 1989.',
      ] },
      { t: 'example', title: 'Un parent dit : « L’école n’est pas obligatoire »', items: [
        'Réponse nuancée : c’est l’**instruction** qui est obligatoire, depuis 3 ans (loi de 2019). Elle est en principe donnée à l’école, et l’instruction en famille est possible seulement dans des conditions précises et sous contrôle.',
      ] },

      { t: 'key', items: [
        'Ferry : gratuité, obligation, laïcité ; 1905 : séparation des Églises et de l’État.',
        'Haby : collège unique ; Jospin : cycles ; Fillon : socle commun ; 2005 : loi handicap.',
        '2013 : refondation et référentiel de 14 compétences ; 2015 : socle en 5 domaines ; 2019 : instruction obligatoire dès 3 ans.',
      ] },
      { t: 'check', q: 'Quelle loi a créé le collège unique ?', a: 'La loi Haby de 1975.' },
      { t: 'check', q: 'Combien de domaines compte le socle commun de 2015 ?', a: 'Cinq domaines, dont le premier est « Les langages pour penser et communiquer ».' },
      { t: 'check', q: 'À partir de quel âge l’instruction est-elle obligatoire depuis 2019 ?', a: 'À partir de 3 ans, grâce à la loi pour une école de la confiance.' },
    ],
    astuces: [
      'Retiens les lois par une phrase : « Ferry rend l’école gratuite, obligatoire, laïque ; Haby unifie le collège ; Jospin met en cycles ; Fillon crée le socle. »',
      'Les dates Ferry se retiennent en deux : 1881 pour la **gratuité**, 1882 pour l’**obligation et la laïcité**. L’ordre alphabétique aide : G avant O.',
      '1905 = séparation des Églises et de l’État. Pense « 19-05 » : cinq ans après 1900, un grand principe.',
      'Haby, 1975 : « H » comme **H**omogène, le collège unique pour tous.',
      'Jospin, 1989 : « J » comme **J**eune au centre, l’élève au cœur du système, avec les cycles.',
      'Fillon, 2005, et loi sur le handicap, 2005 : deux textes la même année. Ne les mélange pas : l’un crée le socle, l’autre garantit la scolarisation des élèves handicapés.',
      'Le socle commun naît en 2005 (loi Fillon) ; le socle en cinq domaines date de 2015. Retiens « 2005 : naissance, 2015 : refonte ».',
      'Les cinq domaines du socle : demande-toi « Je communique, j’apprends, je vis avec les autres, je comprends la nature, je comprends le monde ».',
      'La refondation de l’école, c’est 2013 : le premier degré en priorité, la formation des enseignants, l’EMC.',
      'Le référentiel de compétences des enseignants compte 14 compétences : retiens « 14 » avec « 2013 », la même année que la refondation.',
      '2019 : « 3 ans, l’école de la confiance ». Ce changement de seuil est une question classique.',
      'Ne dis jamais « l’école est obligatoire » à l’oral : dis « l’instruction est obligatoire », c’est plus exact et le jury le remarque.',
      'Quand tu cites une loi à l’oral, donne toujours la date et l’apport en une phrase : « La loi Haby de 1975 crée le collège unique. »',
      'Pour relier un fait à un texte, pose-toi la question : de quoi s’agit-il, de gratuité, d’obligation, de laïcité, de handicap, de programmes ?',
      'Construis une frise sur une page, de 1881 à 2019, avec une couleur par thème (laïcité, démocratisation, inclusion) : le visuel aide la mémoire.',
      'En classe, un jeu de cartes « loi / date / apport » à reconstituer par équipes est une bonne activité pour retenir la chronologie.',
    ],
    quiz: [
      { q: 'En quelle année l’école primaire publique devient-elle gratuite ?', c: ['1881', '1882', '1905', '1975'], a: 0, e: 'La gratuité date de 1881 ; l’obligation et la laïcité de 1882 (lois Ferry).' },
      { q: 'En quelle année l’instruction devient-elle obligatoire et laïque en France ?', c: ['1882', '1881', '1905', '1989'], a: 0, e: 'Loi Ferry de 1882 : obligation et laïcité des programmes.' },
      { q: 'Quelle loi sépare les Églises et l’État ?', c: ['La loi de 1905', 'La loi Ferry de 1881', 'La loi Haby de 1975', 'La loi Jospin de 1989'], a: 0, e: 'La loi du 9 décembre 1905 sépare les Églises et l’État.' },
      { q: 'Quelle loi a créé le collège unique ?', c: ['La loi Haby (1975)', 'La loi Jospin (1989)', 'La loi Fillon (2005)', 'La loi Ferry (1882)'], a: 0, e: 'La loi Haby de 1975 donne le même enseignement à tous après l’école primaire.' },
      { q: 'Quelle loi organise la scolarité en cycles et place l’élève au centre ?', c: ['La loi Jospin (1989)', 'La loi Haby (1975)', 'La loi Fillon (2005)', 'La loi de 2019'], a: 0, e: 'La loi d’orientation de 1989, dite loi Jospin.' },
      { q: 'Quelle loi instaure le socle commun de connaissances et de compétences ?', c: ['La loi Fillon (2005)', 'La loi Jospin (1989)', 'La loi Haby (1975)', 'La loi de refondation (2013)'], a: 0, e: 'La loi Fillon de 2005 crée le socle commun.' },
      { q: 'En quelle année est publiée la loi pour l’égalité des droits et des chances des personnes handicapées ?', c: ['2005', '1989', '2013', '2019'], a: 0, e: 'La loi du 11 février 2005 reconnaît le droit à la scolarisation en milieu ordinaire.' },
      { q: 'Quelle institution la loi de 2005 sur le handicap crée-t-elle ?', c: ['Les MDPH', 'Les RASED', 'Les UPE2A', 'Les PPRE'], a: 0, e: 'Les maisons départementales des personnes handicapées, avec le projet personnalisé de scolarisation.' },
      { q: 'Quelle loi crée l’enseignement moral et civique (EMC) ?', c: ['La loi de refondation de l’école (2013)', 'La loi Fillon (2005)', 'La loi Haby (1975)', 'La loi de 1905'], a: 0, e: 'La loi de 2013 crée l’EMC et le cycle 3 CM1-CM2-6e.' },
      { q: 'Combien de domaines compte le socle commun de 2015 ?', c: ['5', '4', '7', '14'], a: 0, e: 'Cinq domaines. Le chiffre 14 correspond aux compétences du référentiel des enseignants.' },
      { q: 'Quel est le premier domaine du socle de 2015 ?', c: ['Les langages pour penser et communiquer', 'La formation de la personne et du citoyen', 'Les systèmes naturels et les systèmes techniques', 'Les représentations du monde et l’activité humaine'], a: 0, e: 'Le domaine 1 est « Les langages pour penser et communiquer ».' },
      { q: 'Combien de compétences compte le référentiel des métiers du professorat et de l’éducation ?', c: ['14', '5', '10', '20'], a: 0, e: 'Le référentiel de 2013 compte 14 compétences.' },
      { q: 'Depuis 2019, à partir de quel âge l’instruction est-elle obligatoire ?', c: ['3 ans', '2 ans', '4 ans', '6 ans'], a: 0, e: 'La loi pour une école de la confiance abaisse l’âge de 6 ans à 3 ans.' },
      { q: 'Qu’est-ce qui est obligatoire en France : l’école ou l’instruction ?', c: ['L’instruction', 'L’école', 'Les deux, sans exception', 'Aucune des deux avant 6 ans'], a: 0, e: 'L’instruction est obligatoire ; elle peut, sous conditions, être donnée hors d’un établissement.' },
      { q: 'Quelle loi de 1886 porte sur la laïcité du personnel enseignant des écoles publiques ?', c: ['La loi Goblet', 'La loi Haby', 'La loi Jospin', 'La loi Fillon'], a: 0, e: 'La loi Goblet de 1886 laïcise le personnel des écoles publiques.' },
      { q: 'Quelle phrase figure dans le préambule de la Constitution de 1946 ?', c: ['L’enseignement public gratuit et laïque à tous les degrés est un devoir de l’État', 'L’école est facultative avant 6 ans', 'Les écoles privées sont supprimées', 'L’enseignement religieux est obligatoire'], a: 0, e: 'Le préambule de 1946 fait de l’enseignement public gratuit et laïque un devoir de l’État.' },
      { q: 'La France est une République dite « indivisible, laïque, démocratique et sociale » : où est-ce écrit ?', c: ['À l’article 1 de la Constitution de 1958', 'Dans la loi Ferry de 1881', 'Dans la loi Haby de 1975', 'Dans la loi du 11 février 2005'], a: 0, e: 'C’est l’article 1 de la Constitution de 1958.' },
      { q: 'Jusqu’à quel âge s’étend l’obligation de formation instaurée en 2019 ?', c: ['18 ans', '14 ans', '15 ans', '21 ans'], a: 0, e: 'La loi de 2019 impose une obligation de formation des jeunes de 16 à 18 ans.' },
      { q: 'Laquelle de ces affirmations est fausse ?', c: ['Les lois Ferry datent de 1905', 'La loi Haby date de 1975', 'La loi Jospin date de 1989', 'La loi sur le handicap date de 2005'], a: 0, e: 'Les lois Ferry sont de 1881-1882 ; 1905 est la séparation des Églises et de l’État.' },
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

      { t: 'h', text: 'Les troubles des apprentissages : repères' },
      { t: 'table', head: ['Trouble', 'Ce qui est touché'], rows: [
        ['Dyslexie', 'L’apprentissage de la lecture'],
        ['Dysorthographie', 'L’orthographe'],
        ['Dyscalculie', 'Le calcul et le sens du nombre'],
        ['Dyspraxie', 'La coordination des gestes (écriture, découpage, tracés)'],
        ['Dysphasie', 'Le langage oral'],
        ['TDAH', 'L’attention, avec ou sans hyperactivité'],
      ] },
      { t: 'p', text: 'Ces troubles sont durables et ne dépendent ni du manque d’efforts ni du niveau d’intelligence. L’enseignant ne pose pas de diagnostic : il **repère**, alerte et met en place des aménagements.' },

      { t: 'h', text: 'Les acteurs de l’inclusion' },
      { t: 'list', items: [
        '**L’enseignant** observe, adapte et rend compte aux familles.',
        '**Le directeur** réunit l’équipe éducative et accompagne la mise en place des dispositifs.',
        '**L’enseignant référent** suit les élèves ayant un PPS et réunit l’équipe de suivi de la scolarisation.',
        '**Le médecin de l’Éducation nationale** et le **psychologue de l’Éducation nationale** apportent leur expertise.',
        '**La famille** est toujours partenaire : informée, consultée, associée aux décisions.',
        '**L’AESH** accompagne l’élève, sous la responsabilité pédagogique de l’enseignant.',
      ] },

      { t: 'h', text: 'Des adaptations de classe simples et efficaces' },
      { t: 'list', items: [
        'Donner **une consigne à la fois**, courte, lue à voix haute et reformulée par l’élève.',
        'Aérer les **supports** : police lisible et agrandie, peu d’informations par page, interlignes larges.',
        'Autoriser des **outils** : lignage adapté, ordinateur, calculatrice, schémas, matériel de manipulation.',
        'Accorder un **temps supplémentaire** ou réduire la quantité sans changer l’objectif.',
        'Évaluer la **compétence visée** : ne pas pénaliser l’orthographe dans une évaluation de mathématiques.',
      ] },

      { t: 'example', title: 'Un élève en difficulté de lecture au CE1 : PPRE', items: [
        'L’équipe repère des difficultés précises de déchiffrage. Elle fixe avec la famille des objectifs limités (lire des mots réguliers, des syllabes complexes), des activités courtes quotidiennes et une date de bilan. Le PPRE est un programme **limité dans le temps**.',
      ] },
      { t: 'example', title: 'Un élève allergique : PAI', items: [
        'Un enfant allergique à certains aliments a un PAI. Le document précise les aliments à éviter, la conduite à tenir en cas de réaction et le traitement à disposition. Tous les adultes concernés (classe, cantine, sorties) en ont connaissance.',
      ] },
      { t: 'example', title: 'Un élève dyspraxique : PAP', items: [
        'L’écriture manuscrite lui demande un effort considérable. L’équipe lui permet d’utiliser un ordinateur, réduit le copiage et lui donne des photocopies de leçon. Les attendus restent ceux de la classe.',
      ] },

      { t: 'key', items: [
        'PPRE : difficulté scolaire ; PAP : trouble des apprentissages ; PAI : santé ; PPS : handicap reconnu par la MDPH.',
        'AESH : aide humaine ; ULIS : dispositif pour les élèves en situation de handicap ; UPE2A : élèves allophones.',
        'Différencier : varier supports, durées, aides et regroupements.',
      ] },
      { t: 'check', q: 'Quel dispositif concerne un élève asthmatique ayant besoin d’un traitement à l’école ?', a: 'Le PAI (projet d’accueil individualisé).' },
      { t: 'check', q: 'Qui décide d’un PPS ?', a: 'La commission de la MDPH (maison départementale des personnes handicapées).' },
      { t: 'check', q: 'Que signifie « allophone » ?', a: 'Un élève dont la langue maternelle n’est pas le français et qui ne le maîtrise pas encore.' },
    ],
    astuces: [
      'Retiens les quatre dispositifs en une ligne : PPRE = difficulté passagère, PAP = trouble des apprentissages, PAI = santé, PPS = handicap reconnu par la MDPH.',
      'PPRE : pense « Réussite » : il y a des objectifs précis et une échéance de bilan, tu dois pouvoir dire quand il s’arrête.',
      'PAP : pense « Pédagogique » : ce sont des aménagements pédagogiques, pas de décision de la MDPH.',
      'PAI : pense « Intérieur du corps » : c’est la santé, l’allergie, l’asthme, le diabète.',
      'PPS : pense « Personne en situation de handicap » et « MDPH » : si la MDPH décide, c’est un PPS.',
      'Pour les troubles dys, décompose le préfixe « dys » (difficulté) et le radical : *dys-lexie* = lecture, *dys-calculie* = calcul, *dys-orthographie* = orthographe.',
      'Dyspraxie : pense « praxis », le geste. L’élève maîtrise mal la coordination de ses gestes, pas la compréhension.',
      'Allophone : *allo* = autre, *phone* = voix. L’élève parle une autre langue que le français.',
      'Un élève allophone n’est ni handicapé ni en échec : il a besoin de temps et d’un enseignement du français renforcé.',
      'À l’oral, parle d’« élève en situation de handicap » plutôt que de « handicapé » : le vocabulaire respectueux est attendu.',
      'Ne donne jamais un diagnostic médical à une famille : tu repères, tu décris des observations et tu orientes vers les professionnels.',
      'Quand on te demande d’adapter, réponds en trois mots : même objectif, autres moyens.',
      'Pense à la famille à chaque dispositif : elle doit être informée, associée et, pour le PPRE, d’accord.',
      'Dans une situation d’oral, commence par observer et recueillir des informations, puis échange avec l’équipe, puis avec la famille.',
      'Un élève à haut potentiel peut avoir des difficultés scolaires : ne présume pas qu’il réussit toujours.',
      'En classe, un coin « outils » (référentiels, lignes numériques, fiches méthode) en libre accès profite à tous et ne stigmatise personne.',
    ],
    quiz: [
      { q: 'Quel dispositif concerne un élève en difficulté scolaire passagère sur une compétence précise ?', c: ['Le PPRE', 'Le PAP', 'Le PAI', 'Le PPS'], a: 0, e: 'Le PPRE est un programme personnalisé de réussite éducative, limité dans le temps.' },
      { q: 'Quel dispositif est prévu pour un élève ayant un trouble des apprentissages, comme la dyslexie ?', c: ['Le PAP', 'Le PPRE', 'Le PAI', 'Le PPS'], a: 0, e: 'Le plan d’accompagnement personnalisé prévoit des aménagements pédagogiques.' },
      { q: 'Quel dispositif s’applique à un élève diabétique qui doit suivre un traitement à l’école ?', c: ['Le PAI', 'Le PAP', 'Le PPRE', 'L’UPE2A'], a: 0, e: 'Le projet d’accueil individualisé concerne les problèmes de santé durables.' },
      { q: 'Quel dispositif concerne un élève en situation de handicap reconnu ?', c: ['Le PPS', 'Le PAP', 'Le PPRE', 'Le PAI'], a: 0, e: 'Le projet personnalisé de scolarisation est décidé sur la base d’une reconnaissance par la MDPH.' },
      { q: 'Qui prend la décision concernant un PPS ?', c: ['La commission de la MDPH', 'Le directeur seul', 'L’IEN seul', 'Le conseil d’école'], a: 0, e: 'La décision relève de la MDPH.' },
      { q: 'Qui réunit l’équipe de suivi de la scolarisation ?', c: ['L’enseignant référent', 'L’ATSEM', 'Le DDEN', 'Le maire'], a: 0, e: 'L’enseignant référent suit les élèves ayant un PPS.' },
      { q: 'Qui accorde l’aide d’un AESH ?', c: ['La MDPH', 'La commune', 'Le conseil d’école', 'Le RASED'], a: 0, e: 'L’aide humaine est notifiée par la MDPH.' },
      { q: 'Que désigne l’acronyme ULIS ?', c: ['Un dispositif d’accueil d’élèves en situation de handicap dans une classe ordinaire', 'Un dispositif pour élèves allophones', 'Un plan pour élèves à haut potentiel', 'Un projet de santé'], a: 0, e: 'Les élèves d’une ULIS sont inscrits dans une classe de référence.' },
      { q: 'À qui s’adresse l’UPE2A ?', c: ['Aux élèves allophones arrivants', 'Aux élèves dyslexiques', 'Aux élèves à haut potentiel', 'Aux élèves malades'], a: 0, e: 'Unité pédagogique pour élèves allophones arrivants : apprentissage du français.' },
      { q: 'Que veut dire « allophone » ?', c: ['L’élève dont la langue maternelle n’est pas le français et qui ne le maîtrise pas encore', 'L’élève qui entend mal', 'L’élève qui parle très peu', 'L’élève très précoce'], a: 0, e: 'Un élève allophone parle une autre langue que le français.' },
      { q: 'Quel trouble touche principalement le calcul et le sens du nombre ?', c: ['La dyscalculie', 'La dysphasie', 'La dyspraxie', 'La dysorthographie'], a: 0, e: 'Dyscalculie : calcul ; dysphasie : langage oral ; dyspraxie : gestes ; dysorthographie : orthographe.' },
      { q: 'Quel trouble touche principalement la coordination des gestes ?', c: ['La dyspraxie', 'La dyslexie', 'La dyscalculie', 'La dysphasie'], a: 0, e: 'La dyspraxie perturbe l’écriture, le découpage, les tracés.' },
      { q: 'Quel trouble touche principalement le langage oral ?', c: ['La dysphasie', 'La dyslexie', 'La dyspraxie', 'La dyscalculie'], a: 0, e: 'La dysphasie concerne le langage oral.' },
      { q: 'Que signifie différencier la pédagogie ?', c: ['Même objectif, moyens variés selon les élèves', 'Objectifs différents pour chaque élève', 'Baisser les exigences pour les élèves en difficulté', 'Séparer les élèves en classes de niveaux'], a: 0, e: 'On aménage les moyens (supports, durée, aides) sans renoncer aux objectifs.' },
      { q: 'Quelle est la première réponse aux besoins d’un élève à haut potentiel ?', c: ['La différenciation pédagogique en classe', 'Le saut systématique de classe', 'Une exclusion temporaire', 'Une orientation vers l’UPE2A'], a: 0, e: 'On adapte les tâches : complexité, approfondissement, projets.' },
      { q: 'Pour un élève dyslexique, sur quoi doit porter une évaluation de compréhension de texte ?', c: ['Sur la compréhension et non sur l’orthographe', 'Sur l’orthographe en priorité', 'Sur la vitesse de lecture uniquement', 'Sur la qualité de l’écriture'], a: 0, e: 'On évalue la compétence visée, pas le trouble.' },
      { q: 'Qui est informé et associé à la mise en place d’un PPRE ?', c: ['La famille', 'Seulement l’IEN', 'Seulement le médecin', 'Aucun parent'], a: 0, e: 'La famille est informée et donne son accord.' },
      { q: 'Qui décide du PAP ?', c: ['L’équipe pédagogique avec la famille, sur avis du médecin de l’Éducation nationale', 'La MDPH', 'Le maire', 'Le DASEN seul'], a: 0, e: 'Le PAP est décidé à l’école, contrairement au PPS.' },
      { q: 'Où est inscrit en priorité un élève en situation de handicap ?', c: ['Dans l’école de son quartier', 'Dans un établissement spécialisé uniquement', 'À son domicile', 'Dans une classe à part'], a: 0, e: 'L’école inclusive repose sur la scolarisation en milieu ordinaire, avec les aménagements nécessaires.' },
      { q: 'Quelle phrase est exacte ?', c: ['Le PAP est un aménagement pédagogique pour un trouble des apprentissages', 'Le PAI concerne un handicap reconnu par la MDPH', 'Le PPS est décidé par le directeur seul', 'Le PPRE est un dispositif de santé'], a: 0, e: 'PAP = pédagogie, PAI = santé, PPS = MDPH, PPRE = difficulté scolaire.' },
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

      { t: 'h', text: 'Piaget : assimilation, accommodation et stades' },
      { t: 'p', text: 'Pour Piaget, l’enfant apprend en agissant sur son environnement. Face à une information nouvelle, deux mécanismes se combinent.' },
      { t: 'list', items: [
        '**Assimilation** : l’enfant intègre l’information nouvelle dans ce qu’il sait déjà.',
        '**Accommodation** : il modifie ses représentations quand elles ne suffisent plus à comprendre.',
        '**Équilibration** : le retour à un équilibre après un déséquilibre, qui est le moteur du progrès.',
      ] },
      { t: 'table', head: ['Stade', 'Caractéristique'], rows: [
        ['Sensori-moteur', 'L’enfant apprend par les sens et par l’action'],
        ['Préopératoire', 'Apparition du langage et de la représentation symbolique'],
        ['Opératoire concret', 'Raisonnement logique sur du concret, manipulable'],
        ['Opératoire formel', 'Raisonnement abstrait, hypothético-déductif'],
      ] },

      { t: 'h', text: 'Quelques pédagogies à connaître' },
      { t: 'table', head: ['Pédagogie', 'Idées clés'], rows: [
        ['Freinet', 'Texte libre, imprimerie, correspondance scolaire, coopération en classe'],
        ['Montessori', 'Matériel sensoriel, autonomie de l’enfant, respect de son rythme'],
        ['Pédagogie explicite', 'Objectifs clairs, modélisation par l’enseignant, pratique guidée puis autonome'],
        ['Pédagogie de projet', 'Les élèves réalisent une production réelle qui donne du sens aux apprentissages'],
      ] },
      { t: 'p', text: 'Aucune méthode n’est « la bonne » dans l’absolu : on choisit selon l’objectif, l’âge des élèves et le moment de l’apprentissage.' },

      { t: 'h', text: 'Motivation, attentes et mémorisation' },
      { t: 'list', items: [
        '**Effet Pygmalion** (Rosenthal et Jacobson) : les attentes de l’enseignant influencent la réussite des élèves.',
        '**Sentiment d’efficacité personnelle** : un élève qui se croit capable s’engage davantage ; l’enseignant peut le renforcer par des réussites progressives.',
        '**Courbe de l’oubli** (Ebbinghaus) : on oublie vite ce qui n’est pas revu ; réviser à intervalles espacés fixe mieux les connaissances.',
        '**Retour d’information** : plus il est précis, rapide et centré sur la tâche, plus il aide l’élève.',
      ] },

      { t: 'example', title: 'Une situation-problème en mathématiques', items: [
        'Pour introduire la multiplication, l’enseignant propose un problème de collection d’objets que les élèves ne savent pas encore résoudre avec une technique connue. Ils cherchent (additions répétées, dessins), confrontent leurs démarches, puis l’enseignant institutionnalise la notion.',
      ] },
      { t: 'example', title: 'Du travail en groupe aux quatre piliers', items: [
        'Attention : consigne claire et courte. Engagement actif : les élèves font des hypothèses. Retour d’information : correction collective rapide. Consolidation : retour sur la notion les jours suivants.',
      ] },
      { t: 'example', title: 'Étayage progressif', items: [
        'En lecture, l’enseignant lit d’abord avec l’élève, puis ne lit que les mots difficiles, puis laisse l’élève lire seul : l’aide se retire à mesure que l’élève progresse.',
      ] },

      { t: 'key', items: [
        'Piaget : l’élève construit ; Vygotski : on apprend avec les autres ; Bruner : étayage.',
        'Quatre piliers (Dehaene) : attention, engagement actif, retour d’information, consolidation.',
        'Trois évaluations : diagnostique, formative, sommative ; l’erreur est un outil.',
      ] },
      { t: 'check', q: 'Que désigne la zone proximale de développement ?', a: 'L’écart entre ce que l’élève sait faire seul et ce qu’il sait faire avec l’aide d’un adulte ou d’un camarade.' },
      { t: 'check', q: 'Citez les quatre piliers de l’apprentissage selon Dehaene.', a: 'L’attention, l’engagement actif, le retour d’information et la consolidation.' },
      { t: 'check', q: 'Quand a lieu une évaluation diagnostique ?', a: 'En début de séquence ou d’année, pour connaître les acquis et les difficultés des élèves.' },
    ],
    astuces: [
      'Piaget et Vygotski : « Piaget, l’élève **agit** ; Vygotski, l’élève **échange** ». Deux verbes, deux courants.',
      'Assimilation = j’**a**joute à ce que je sais ; accommodation = je **m**odifie ce que je sais. Pense au a et au m.',
      'Les quatre piliers de Dehaene se retiennent avec A-E-R-C : Attention, Engagement actif, Retour d’information, Consolidation.',
      'Pour la zone proximale de développement, imagine un escalier : trop bas, l’élève s’ennuie ; trop haut, il décroche ; la bonne marche est celle qu’il atteint avec de l’aide.',
      'Étayage : pense à l’échafaudage d’un bâtiment, qu’on retire quand il tient seul.',
      'Les trois évaluations par leur moment : **d**iagnostique au **d**épart, **f**ormative en **f**ormation, **s**ommative pour la **s**omme finale.',
      'Une évaluation formative ne se note pas forcément : elle sert à ajuster l’enseignement et à aider l’élève.',
      'L’erreur est un indice : demande à l’élève « comment as-tu fait ? » avant de dire que c’est faux.',
      'Pour la métacognition, ajoute une question rituelle en fin de séance : « Qu’as-tu appris ? Comment t’y es-tu pris ? »',
      'Le conflit sociocognitif demande des élèves qui ne sont pas d’accord : prévois des binômes ou des groupes qui peuvent avoir des réponses différentes.',
      'Au concours, appuie ton choix pédagogique sur un auteur ou un principe : « Je prévois un travail en groupe car, selon Vygotski, l’interaction aide à apprendre. »',
      'Ne dis pas « méthode magique » : montre que tu varies les démarches selon l’objectif, c’est un signe de maturité professionnelle.',
      'Pour justifier la répétition, cite la consolidation : revenir régulièrement sur une notion fixe les connaissances.',
      'Formule des critères de réussite avant l’exercice (« ton calcul est juste si tu as vérifié avec l’opération inverse ») : ils servent l’auto-évaluation.',
      'Un feedback efficace dit ce qui est réussi, ce qui reste à améliorer et comment : pense « réussite, erreur, piste ».',
      'En classe, un affichage de la démarche (« lire, chercher, essayer, vérifier ») aide les élèves à adopter une posture de chercheur.',
    ],
    quiz: [
      { q: 'Pour Piaget, comment l’enfant construit-il ses connaissances ?', c: ['En agissant sur son environnement', 'En écoutant passivement le maître', 'Par conditionnement', 'Uniquement par imitation de ses camarades'], a: 0, e: 'Piaget est le représentant du constructivisme : l’enfant construit en agissant.' },
      { q: 'Quel auteur place l’interaction sociale au cœur des apprentissages ?', c: ['Vygotski', 'Piaget', 'Skinner', 'Ebbinghaus'], a: 0, e: 'Vygotski est le théoricien du socioconstructivisme.' },
      { q: 'Que désigne la zone proximale de développement ?', c: ['L’écart entre ce que l’élève fait seul et ce qu’il fait avec de l’aide', 'Ce que l’élève sait déjà faire seul', 'Ce qui est trop difficile pour l’élève', 'La zone de la classe proche du bureau'], a: 0, e: 'C’est là que l’enseignement est le plus efficace.' },
      { q: 'À quel auteur associe-t-on la notion d’étayage ?', c: ['Bruner', 'Piaget', 'Freinet', 'Dehaene'], a: 0, e: 'Bruner désigne ainsi le soutien progressif de l’adulte.' },
      { q: 'Combien de piliers de l’apprentissage Dehaene décrit-il ?', c: ['4', '3', '5', '7'], a: 0, e: 'Attention, engagement actif, retour d’information, consolidation.' },
      { q: 'Laquelle de ces propositions n’est pas un pilier de l’apprentissage selon Dehaene ?', c: ['La compétition entre élèves', 'L’attention', 'Le retour d’information', 'La consolidation'], a: 0, e: 'Les quatre piliers sont l’attention, l’engagement actif, le retour d’information et la consolidation.' },
      { q: 'À quel moment a lieu une évaluation diagnostique ?', c: ['Au début de la séquence', 'Pendant la séquence', 'À la fin de la séquence', 'À la fin de l’année scolaire uniquement'], a: 0, e: 'Elle précède l’apprentissage pour connaître les acquis.' },
      { q: 'Quelle évaluation sert à réguler l’apprentissage en cours ?', c: ['L’évaluation formative', 'L’évaluation diagnostique', 'L’évaluation sommative', 'L’évaluation certificative nationale'], a: 0, e: 'Elle aide à progresser et à ajuster l’enseignement.' },
      { q: 'Quelle évaluation fait le bilan à la fin d’une séquence ?', c: ['L’évaluation sommative', 'L’évaluation formative', 'L’évaluation diagnostique', 'L’autoévaluation seule'], a: 0, e: 'Elle dresse le bilan des acquis.' },
      { q: 'Comment le cours considère-t-il l’erreur ?', c: ['Comme un outil qui révèle le raisonnement de l’élève', 'Comme une faute à sanctionner', 'Comme un manque d’attention', 'Comme un défaut à effacer sans en parler'], a: 0, e: 'L’erreur permet de comprendre la manière dont l’élève raisonne.' },
      { q: 'Que désigne la métacognition ?', c: ['La réflexion de l’élève sur sa façon d’apprendre', 'La mémorisation par cœur', 'La correction d’un devoir', 'Le travail en groupe'], a: 0, e: '« Comment ai-je fait ? » : l’élève prend conscience de ses stratégies.' },
      { q: 'Que provoque un conflit sociocognitif ?', c: ['Une déstabilisation des certitudes grâce à la confrontation de points de vue', 'Une dispute sans intérêt', 'Un conflit d’autorité', 'Une baisse d’attention'], a: 0, e: 'La confrontation de points de vue pousse les élèves à progresser.' },
      { q: 'Que fait l’élève lors de l’accommodation ?', c: ['Il modifie ses représentations pour intégrer une information nouvelle', 'Il intègre l’information sans rien changer', 'Il refuse l’information', 'Il mémorise par répétition'], a: 0, e: 'Assimilation : intégrer ; accommodation : transformer ses schèmes.' },
      { q: 'Quel courant s’appuie sur le stimulus, la réponse et le renforcement ?', c: ['Le behaviorisme', 'Le socioconstructivisme', 'Le constructivisme', 'La pédagogie de projet'], a: 0, e: 'Le behaviorisme repose sur le conditionnement.' },
      { q: 'Que décrit l’effet Pygmalion ?', c: ['L’influence des attentes de l’enseignant sur la réussite des élèves', 'L’influence du bruit sur l’attention', 'Le rôle de la fatigue sur la mémoire', 'L’effet de la note sur la motivation'], a: 0, e: 'Rosenthal et Jacobson ont montré cette influence.' },
      { q: 'Quelle pratique favorise la consolidation des connaissances ?', c: ['Revoir une notion à intervalles espacés', 'Ne jamais revenir sur une notion terminée', 'Tout revoir la veille de l’évaluation', 'Réduire les exercices à un seul'], a: 0, e: 'Revoir régulièrement fixe les connaissances en mémoire durable.' },
      { q: 'Quel stade précède le stade opératoire formel chez Piaget ?', c: ['Le stade opératoire concret', 'Le stade sensori-moteur', 'Le stade préopératoire', 'Le stade symbolique'], a: 0, e: 'Ordre : sensori-moteur, préopératoire, opératoire concret, opératoire formel.' },
      { q: 'Quelles pratiques sont associées à la pédagogie Freinet ?', c: ['Le texte libre et la correspondance scolaire', 'Le cours magistral uniquement', 'Le conditionnement par récompenses', 'Les évaluations sommatives quotidiennes'], a: 0, e: 'Freinet : imprimerie, texte libre, correspondance, coopération.' },
      { q: 'Quelle idée est associée à Montessori ?', c: ['L’autonomie de l’enfant avec un matériel sensoriel adapté', 'L’enseignement uniquement collectif', 'Le conditionnement opérant', 'Le cours magistral'], a: 0, e: 'Montessori met l’autonomie et le matériel au centre.' },
      { q: 'Quel est le propre d’un retour d’information efficace ?', c: ['Il est précis, rapide et centré sur la tâche', 'Il se limite à une note', 'Il est donné plusieurs semaines après', 'Il compare l’élève à ses camarades'], a: 0, e: 'Un retour précis aide l’élève à comprendre et à corriger.' },
      { q: 'Dans une situation-problème, que fait l’enseignant avant d’institutionnaliser le savoir ?', c: ['Il laisse les élèves chercher et confronter leurs démarches', 'Il donne directement la règle', 'Il fait recopier la leçon', 'Il corrige sans discussion'], a: 0, e: 'La recherche précède la synthèse, qui est conduite par l’enseignant.' },
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

      { t: 'h', text: 'Les principes de la laïcité à l’école' },
      { t: 'list', items: [
        '**Neutralité** de l’État et de ses agents à l’égard des convictions.',
        '**Liberté de conscience** : chacun croit ou ne croit pas, librement.',
        '**Égalité** de tous les élèves, quelles que soient leurs convictions.',
      ] },
      { t: 'p', text: 'La laïcité n’est pas l’interdiction de parler de religion : elle permet d’en parler comme d’un fait culturel, sans prosélytisme. Les programmes peuvent étudier les religions comme objets de connaissance.' },
      { t: 'table', head: ['Qui', 'Ce que la laïcité implique'], rows: [
        ['Enseignant, agent du service public', 'Neutralité : pas de manifestation de ses opinions ou convictions dans l’exercice de ses fonctions'],
        ['Élève du public', 'Liberté de conscience ; interdiction des signes manifestant ostensiblement une appartenance religieuse (loi de 2004)'],
        ['Parents', 'Respect du cadre scolaire et des programmes ; dialogue avec l’équipe'],
      ] },
      { t: 'p', text: 'La loi de 2004 vise les signes **ostensibles** ; les signes discrets ne sont pas concernés. Face à une situation, l’équipe privilégie d’abord le **dialogue** avec l’élève et sa famille.' },

      { t: 'h', text: 'Les textes et repères du fonctionnaire' },
      { t: 'list', items: [
        '**Loi du 13 juillet 1983** : droits et obligations des fonctionnaires.',
        '**Droits** : liberté d’opinion, droit syndical, droit de grève, formation, protection de l’administration en cas d’attaque dans l’exercice des fonctions.',
        '**Devise de la République** : Liberté, Égalité, Fraternité.',
        '**Convention internationale des droits de l’enfant (1989)** : droit à la protection, à l’éducation, à l’expression de l’enfant.',
      ] },

      { t: 'h', text: 'Prévenir et traiter le harcèlement' },
      { t: 'list', items: [
        'Le harcèlement scolaire est un **délit** depuis la loi du 2 mars 2022.',
        'Il se caractérise par des violences **répétées**, verbales, physiques ou psychologiques, y compris par les réseaux sociaux (cyberharcèlement).',
        'Le programme **pHARe** de lutte contre le harcèlement est déployé dans les écoles et les collèges, puis étendu aux lycées.',
        'Le **3018** est le numéro national pour le harcèlement et le cyberharcèlement.',
      ] },
      { t: 'steps', items: [
        'Écouter la victime sans la juger et sans minimiser.',
        'Noter les faits précis (qui, quand, où).',
        'Informer le directeur, puis les familles concernées.',
        'Agir avec l’équipe : protection de la victime, entretien avec les auteurs, rappel des règles à la classe.',
      ] },

      { t: 'example', title: 'Un élève porte un signe religieux visible', items: [
        'L’enseignant ne réagit pas seul sur le coup : il informe le directeur, qui engage le dialogue avec l’élève et sa famille pour expliquer la loi. La sanction n’est pas la première réponse.',
      ] },
      { t: 'example', title: 'Un collègue critique son administration sur les réseaux sociaux', items: [
        'Un fonctionnaire a le droit de s’exprimer, mais avec mesure : devoir de réserve, respect de la discrétion professionnelle, aucune information sur des élèves. L’enseignant peut rappeler ce cadre à son collègue, puis informer le directeur en cas de persistance.',
      ] },
      { t: 'example', title: 'Une situation d’égalité filles-garçons', items: [
        'En sport, les garçons occupent tout le terrain. L’enseignant organise des équipes mixtes, des rôles variés (joueur, arbitre, observateur) et veille à une parole équitable.',
      ] },

      { t: 'key', items: [
        'Laïcité : loi de 2004 (signes ostensibles) et Charte de 2013 (quinze articles).',
        'Obligations : neutralité, discrétion, secret professionnel, obéissance hiérarchique, devoir de réserve.',
        'Enfant en danger : information préoccupante (CRIP), signalement (procureur), 119.',
      ] },
      { t: 'check', q: 'Que prévoit la loi de 2004 ?', a: 'L’interdiction pour les élèves du public de porter des signes ou tenues manifestant ostensiblement une appartenance religieuse.' },
      { t: 'check', q: 'À qui transmet-on une information préoccupante ?', a: 'À la cellule départementale de recueil des informations préoccupantes (CRIP), au conseil départemental.' },
      { t: 'check', q: 'À qui s’applique l’obligation de neutralité à l’école ?', a: 'Aux enseignants et aux agents du service public, pas aux élèves.' },
    ],
    astuces: [
      'Retiens les cinq obligations du fonctionnaire avec « N.D.S.O.R. » : Neutralité, Discrétion, Secret professionnel, Obéissance hiérarchique, Réserve.',
      'Pour ne pas confondre : **discrétion** = ne pas dire ce que je sais par mon métier ; **réserve** = m’exprimer avec mesure en public ; **secret professionnel** = informations confidentielles protégées par la loi.',
      'La loi de 2004 interdit les signes **ostensibles** (visibles et manifestes) ; les signes discrets ne sont pas visés. Le mot clé est « ostensiblement ».',
      'La neutralité concerne les **enseignants**, jamais les élèves : c’est le piège préféré du jury.',
      'La Charte de la laïcité à l’école date de 2013 et compte quinze articles : « 2013, 15 articles ».',
      'Les trois chemins en cas de danger : information préoccupante (CRIP), signalement (procureur), numéro 119.',
      'Information préoccupante = le doute ; signalement = le danger grave. Pense « doute, CRIP ; danger, procureur ».',
      'Face à un élève qui se confie, trois interdits : promettre le secret, mener l’enquête, minimiser. Trois gestes : écouter, noter, informer.',
      'Note les propos de l’enfant avec ses mots exacts, entre guillemets, sans interprétation : c’est utile pour la suite.',
      'Le 3018 pour le harcèlement et le 119 pour l’enfance en danger : retiens leurs chiffres avec leurs usages.',
      'Pour le harcèlement, retiens les trois critères : répétition, violence (verbale, physique, psychologique), déséquilibre entre victime et auteurs.',
      'À l’oral, évite les formules absolues (« je refuserais toujours », « jamais ») : argumente avec nuance et appuie-toi sur le cadre.',
      'Dans le dialogue avec une famille, commence par l’écoute, rappelle le cadre commun et propose une suite précise (rendez-vous, information du directeur).',
      'Avant de réagir à une situation, cherche trois éléments : le principe en cause (laïcité, égalité, protection), le texte, la personne à informer.',
      'Pour l’égalité filles-garçons, pense à trois leviers : langage de l’enseignant, répartition de la parole, mixité des activités.',
      'En classe, travaille la laïcité avec des cas concrets (débat réglé, charte illustrée) : on apprend mieux par la discussion que par l’affichage seul.',
    ],
    quiz: [
      { q: 'Que prévoit la loi de 2004 ?', c: ['L’interdiction des signes manifestant ostensiblement une appartenance religieuse dans les écoles publiques', 'L’interdiction de toute expression religieuse à la maison', 'La suppression des écoles privées', 'L’interdiction pour les enseignants de parler de religion en histoire'], a: 0, e: 'La loi de 2004 vise les signes ostensibles portés par les élèves.' },
      { q: 'Combien d’articles compte la Charte de la laïcité à l’école ?', c: ['15', '10', '12', '20'], a: 0, e: 'La charte de 2013 comprend quinze articles.' },
      { q: 'Qui est tenu à la neutralité à l’école ?', c: ['Les enseignants et les agents du service public', 'Les élèves', 'Les parents d’élèves', 'Tous les visiteurs de l’école'], a: 0, e: 'Les élèves jouissent de la liberté de conscience, sous réserve des signes ostensibles.' },
      { q: 'Quelle obligation consiste à ne pas divulguer les informations connues dans l’exercice des fonctions ?', c: ['La discrétion professionnelle', 'La neutralité', 'Le devoir de réserve', 'L’obéissance hiérarchique'], a: 0, e: 'La discrétion protège les informations liées aux fonctions.' },
      { q: 'Quelle obligation impose de s’exprimer avec mesure sur la place publique ?', c: ['Le devoir de réserve', 'La discrétion professionnelle', 'Le secret professionnel', 'La neutralité'], a: 0, e: 'Devoir de réserve : mesure dans l’expression publique, notamment sur l’administration.' },
      { q: 'Le secret professionnel dispense-t-il de protéger un enfant en danger ?', c: ['Non, il faut alerter', 'Oui, toujours', 'Oui, sauf pour les enseignants', 'Seulement si les parents sont d’accord'], a: 0, e: 'La loi impose de protéger l’enfant en danger.' },
      { q: 'À qui est transmise une information préoccupante ?', c: ['À la CRIP du conseil départemental', 'Au rectorat uniquement', 'À la mairie', 'À la gendarmerie systématiquement'], a: 0, e: 'La cellule départementale de recueil des informations préoccupantes.' },
      { q: 'Qui reçoit un signalement en cas de danger grave et immédiat ?', c: ['Le procureur de la République', 'Le conseil d’école', 'Le maire', 'Le DDEN'], a: 0, e: 'Le signalement judiciaire est adressé au procureur.' },
      { q: 'Quel est le numéro national de l’enfance en danger ?', c: ['Le 119', 'Le 3018', 'Le 17', 'Le 112 uniquement'], a: 0, e: 'Le 119 est gratuit et ouvert à tous.' },
      { q: 'Quel numéro national concerne le harcèlement et le cyberharcèlement ?', c: ['Le 3018', 'Le 119', 'Le 15', 'Le 18'], a: 0, e: 'Le 3018 est dédié au harcèlement et au cyberharcèlement.' },
      { q: 'Que doit faire un enseignant à qui un élève confie une situation inquiétante ?', c: ['Écouter, ne pas promettre le secret et prévenir le directeur', 'Mener une enquête auprès de la famille', 'Promettre de garder le secret', 'Attendre la fin de l’année'], a: 0, e: 'L’enseignant n’enquête pas et ne promet pas le secret.' },
      { q: 'Depuis 2022, le harcèlement scolaire est :', c: ['Un délit', 'Une simple faute disciplinaire', 'Un incident sans qualification', 'Une contravention de première classe'], a: 0, e: 'La loi du 2 mars 2022 en fait un délit.' },
      { q: 'Quelle est la devise de la République ?', c: ['Liberté, Égalité, Fraternité', 'Travail, Famille, Patrie', 'Unité, Justice, Progrès', 'Liberté, Laïcité, Solidarité'], a: 0, e: 'La devise est « Liberté, Égalité, Fraternité ».' },
      { q: 'Quels signes la loi de 2004 interdit-elle aux élèves ?', c: ['Les signes manifestant ostensiblement une appartenance religieuse', 'Tous les signes de convictions, même discrets', 'Seulement les signes politiques', 'Aucun signe'], a: 0, e: 'Les signes discrets ne sont pas visés.' },
      { q: 'Face à un élève portant un signe ostensible, que privilégie l’équipe d’abord ?', c: ['Le dialogue avec l’élève et sa famille', 'L’exclusion immédiate', 'Le silence', 'Une sanction automatique'], a: 0, e: 'Le dialogue précède toute sanction.' },
      { q: 'Quelle obligation impose d’exécuter les instructions de la hiérarchie ?', c: ['L’obéissance hiérarchique', 'La neutralité', 'La discrétion', 'Le devoir de réserve'], a: 0, e: 'Elle comporte une exception : ordre manifestement illégal et gravement contraire à l’intérêt public.' },
      { q: 'Quel texte de 1983 fixe les droits et obligations des fonctionnaires ?', c: ['La loi du 13 juillet 1983', 'La loi de 1905', 'La loi Ferry', 'La loi Jospin'], a: 0, e: 'C’est la loi dite « droits et obligations des fonctionnaires ».' },
      { q: 'Que garantit la laïcité ?', c: ['La liberté de conscience et l’égalité de tous', 'L’interdiction de toute religion', 'La suppression des vacances religieuses', 'La neutralité des élèves'], a: 0, e: 'La laïcité garantit la liberté de conscience et l’égalité.' },
      { q: 'L’obligation d’alerter pour un enfant en danger s’impose-t-elle même sans certitude absolue ?', c: ['Oui, un doute suffit pour transmettre', 'Non, il faut être certain des faits', 'Non, seule la famille alerte', 'Oui, mais seulement un an après'], a: 0, e: 'On transmet l’information sans avoir besoin de preuve : c’est la mission des services de protection d’enquêter.' },
      { q: 'Qui est à l’origine de la Convention internationale des droits de l’enfant de 1989 ?', c: ['Les Nations unies', 'L’Union européenne', 'Le Conseil constitutionnel', 'L’Éducation nationale'], a: 0, e: 'Convention adoptée par l’Assemblée générale des Nations unies.' },
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

      { t: 'h', text: 'Préparer la présentation de 5 minutes' },
      { t: 'steps', items: [
        '**Accroche** : une phrase courte qui donne ton fil conducteur (pourquoi ce métier).',
        '**Parcours** : les étapes utiles, reliées à l’enseignement.',
        '**Expériences** : ce que tu as appris au contact d’enfants (stage, animation, soutien scolaire, engagement associatif).',
        '**Projection** : ce que tu veux construire comme enseignant, avec une idée concrète.',
      ] },
      { t: 'p', text: 'Chronomètre-toi : une présentation qui dure 3 minutes laisse du temps perdu, une qui dépasse 5 minutes sera coupée. Ne lis pas ton texte : prépare des mots-clés.' },

      { t: 'h', text: 'Les thèmes des mises en situation' },
      { t: 'table', head: ['Thème', 'Réflexe à avoir'], rows: [
        ['Valeurs de la République', 'Rappeler le principe et le texte, dialoguer, informer'],
        ['Laïcité', 'Neutralité de l’enseignant, liberté de conscience des élèves, dialogue'],
        ['Service public', 'Égalité de traitement, continuité, rôle du fonctionnaire'],
        ['Projection dans le métier', 'Concret, réaliste, appuyé sur des exemples'],
        ['Transition écologique', 'Projets concrets, éducation au développement durable'],
        ['Épanouissement de l’élève', 'Bienveillance, exigence, écoute, climat de classe'],
      ] },

      { t: 'h', text: 'Tenir l’échange avec le jury' },
      { t: 'list', items: [
        '**Écouter la question jusqu’au bout**, puis reformuler si besoin avant de répondre.',
        '**Structurer** : annoncer ses étapes (« d’abord… puis… enfin… »).',
        '**Admettre une limite** : dire « je consulterais mon directeur » est une bonne réponse, pas un aveu de faiblesse.',
        '**Rester sobre et authentique** : pas de formules apprises, pas de jargon inutile.',
      ] },

      { t: 'example', title: 'Une famille souhaite parler dans la cour', items: [
        'Analyse : demande légitime, mais le cadre doit rester clair. Action : accueillir poliment, proposer un rendez-vous dans l’école, informer le directeur si le sujet est sensible.',
      ] },
      { t: 'example', title: 'Un projet autour de la transition écologique', items: [
        'Idée : un jardin pédagogique ou un tri des déchets de classe. Élèves acteurs, objectifs d’apprentissage clairs (sciences, EMC), lien avec la commune ou des partenaires.',
      ] },
      { t: 'example', title: 'Les garçons parlent plus que les filles', items: [
        'Analyse : enjeu d’égalité. Action : répartir la parole, varier les modalités de travail, observer et rendre les élèves conscients des stéréotypes. Équipe : échanger avec les collègues.',
      ] },

      { t: 'key', items: [
        '35 minutes, 12 points : 5 minutes de présentation, 10 minutes d’échange, 20 minutes de mises en situation.',
        'Méthode : analyser, s’appuyer sur les textes, agir en équipe, informer la hiérarchie.',
        'Rester calme, nuancé et respectueux des personnes.',
      ] },
      { t: 'check', q: 'Combien de temps durent les mises en situation ?', a: '20 minutes, après 5 minutes de présentation et 10 minutes d’échange.' },
      { t: 'check', q: 'Quelles sont les quatre étapes de la méthode de traitement d’une situation ?', a: 'Analyser, s’appuyer sur les textes, agir en équipe, informer la hiérarchie.' },
    ],
    astuces: [
      'Mémorise le format avec 5-10-20 : 5 minutes de présentation, 10 minutes d’échange, 20 minutes de mises en situation. Le total est 35 minutes.',
      'L’épreuve est notée sur 12 points : les mises en situation occupent plus de la moitié du temps, prépare-les donc en priorité.',
      'La méthode en quatre temps se retient avec A-T-E-H : Analyser, Textes, Équipe, Hiérarchie.',
      'Commence toute réponse par une reformulation en une phrase : « Il s’agit d’une situation de… »',
      'Nomme le principe en cause (laïcité, égalité, protection de l’enfance) avant d’énoncer ton action : le jury attend ce réflexe.',
      'Cite le texte quand tu le connais, sinon nomme le principe : il vaut mieux un principe juste qu’un article inventé.',
      'Distingue toujours le temps de l’urgence (protéger un enfant) du temps de la discussion (dialoguer avec la famille).',
      'Quand un enfant est en danger, la réponse est immédiate : informer le directeur, rédiger une information préoccupante, signaler au procureur si le danger est grave.',
      'Face à un désaccord avec une famille : écouter, expliquer le cadre, proposer une suite, informer le directeur.',
      'Avec un collègue, parle d’abord directement, avec tact ; informe ensuite le directeur ou l’IEN si cela persiste.',
      'Ne cherche pas la réponse unique : le jury évalue ton raisonnement, ta posture et ta capacité à argumenter.',
      'Pour la présentation, prépare trois anecdotes réelles (stage, animation, engagement) et relie chacune à une compétence du métier.',
      'Évite d’opposer élèves et enseignants dans tes exemples : montre une posture bienveillante et exigeante.',
      'Entraîne-toi à voix haute, de préférence devant quelqu’un, avec un chronomètre : c’est le meilleur moyen de gérer le trac.',
      'Prévois quelques secondes de silence avant de répondre : cela montre de la réflexion plutôt que de l’hésitation.',
      'Termine chaque réponse par ce que tu fais ensuite (qui informer, quelle suite donner) : cela clôt proprement ta démarche.',
    ],
    quiz: [
      { q: 'Quelle est la durée totale de l’épreuve d’entretien de l’oral 2 ?', c: ['35 minutes', '20 minutes', '45 minutes', '60 minutes'], a: 0, e: '5 minutes de présentation, 10 d’échange, 20 de mises en situation.' },
      { q: 'Sur combien de points l’épreuve est-elle notée ?', c: ['12', '20', '10', '40'], a: 0, e: 'L’épreuve est notée sur 12 points.' },
      { q: 'Combien de temps dure la présentation initiale ?', c: ['5 minutes', '10 minutes', '20 minutes', '15 minutes'], a: 0, e: 'La présentation dure 5 minutes.' },
      { q: 'Combien de temps dure l’échange qui suit la présentation ?', c: ['10 minutes', '5 minutes', '20 minutes', '35 minutes'], a: 0, e: 'L’échange dure 10 minutes.' },
      { q: 'Combien de temps durent les mises en situation ?', c: ['20 minutes', '10 minutes', '5 minutes', '15 minutes'], a: 0, e: 'Elles durent 20 minutes.' },
      { q: 'Que doit présenter le candidat en 5 minutes ?', c: ['Son parcours et sa motivation pour le métier', 'Une leçon de grammaire', 'Une analyse de texte littéraire', 'Un problème de mathématiques'], a: 0, e: 'Il explique son parcours et sa motivation.' },
      { q: 'Quelle est la première étape de la méthode de traitement d’une situation ?', c: ['Analyser la situation', 'Informer la hiérarchie', 'Sanctionner', 'Citer un auteur de pédagogie'], a: 0, e: 'Analyser : reformuler, repérer acteurs, enjeu et principe.' },
      { q: 'Quelle est la dernière étape de la méthode en quatre temps ?', c: ['Informer la hiérarchie', 'Analyser', 'S’appuyer sur les textes', 'Agir en équipe'], a: 0, e: 'Ordre : analyser, textes, équipe, hiérarchie.' },
      { q: 'Que doit faire un candidat face à une mise en situation ?', c: ['Exposer un raisonnement structuré qui s’appuie sur les textes', 'Donner son opinion personnelle', 'Donner une seule réponse sans argument', 'Éviter de répondre'], a: 0, e: 'Le jury attend un raisonnement structuré, pas une opinion.' },
      { q: 'Un enfant confie qu’il est maltraité. Quel est le premier réflexe ?', c: ['L’écouter sans promettre le secret et prévenir le directeur', 'L’interroger longuement', 'Contacter directement les parents', 'Attendre une confirmation'], a: 0, e: 'On écoute, on note les propos, on prévient immédiatement le directeur.' },
      { q: 'En cas de danger grave et immédiat, à qui adresse-t-on un signalement ?', c: ['Au procureur de la République', 'Au conseil d’école', 'Au DDEN', 'À l’inspecteur uniquement'], a: 0, e: 'Le signalement est adressé au procureur.' },
      { q: 'Un enseignant doit-il être certain des faits pour transmettre une information préoccupante ?', c: ['Non', 'Oui', 'Seulement s’il a des preuves écrites', 'Seulement avec l’accord des parents'], a: 0, e: 'Il n’a pas besoin d’être certain ; il ne reste pas seul avec l’information.' },
      { q: 'Un collègue tient des propos contraires à la neutralité. Que fait-on d’abord ?', c: ['On en parle avec lui, avec tact', 'On le dénonce publiquement', 'On ignore la situation', 'On informe immédiatement les familles'], a: 0, e: 'Si cela persiste, on informe le directeur ou l’IEN.' },
      { q: 'Un parent refuse une activité obligatoire pour un motif religieux. Quelle réponse est attendue ?', c: ['Recevoir le parent, expliquer le caractère obligatoire et informer le directeur', 'Accepter sans discuter', 'Sanctionner l’élève', 'Ignorer la demande'], a: 0, e: 'On dialogue, on rappelle le cadre, on informe la hiérarchie si besoin.' },
      { q: 'Face à un possible harcèlement, que fait l’enseignant ?', c: ['Écouter la victime, agir en équipe et informer les familles', 'Minimiser les faits', 'Laisser les élèves régler seuls', 'Punir toute la classe'], a: 0, e: 'On ne minimise pas et on agit avec l’équipe.' },
      { q: 'Quelle erreur est à éviter dans une réponse à l’oral ?', c: ['Répondre par une opinion personnelle sans s’appuyer sur les textes', 'Annoncer sa démarche', 'Argumenter avec calme', 'Nuancer son propos'], a: 0, e: 'On répond en fonctionnaire, avec le cadre et le collectif.' },
      { q: 'Quelles deux réponses extrêmes sont à éviter ?', c: ['La réponse purement répressive et la réponse laxiste', 'La réponse structurée et la réponse nuancée', 'Le dialogue et le rappel du cadre', 'L’écoute et l’information'], a: 0, e: 'On dialogue, on rappelle le cadre, puis on agit.' },
      { q: 'Quel numéro national est celui de l’enfance en danger ?', c: ['Le 119', 'Le 3018', 'Le 15', 'Le 17'], a: 0, e: 'Le 119 est le numéro national de l’enfance en danger.' },
      { q: 'Après le directeur, qui peut-on informer si la situation le justifie ?', c: ['L’IEN', 'Le maire seul', 'Le DDEN', 'L’ATSEM'], a: 0, e: 'La chaîne hiérarchique passe par l’IEN.' },
      { q: 'Laquelle de ces thématiques fait partie des mises en situation ?', c: ['La transition écologique', 'La grammaire du texte', 'La didactique des mathématiques', 'La littérature du XIXe siècle'], a: 0, e: 'Valeurs de la République, laïcité, service public, projection dans le métier, transition écologique, épanouissement de l’élève.' },
    ],
  },
];
