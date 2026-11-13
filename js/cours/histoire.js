/* Cours d’histoire-géographie et EMC. Format d’un chapitre : voir francais.js. */
COURS.histoire = [
  {
    id: 'periodes-reperes',
    title: 'Les grandes périodes et repères',
    intro: 'L’historien découpe le temps en périodes pour s’y repérer. Ces découpages sont des conventions : elles reposent sur des événements marquants, mais personne ne s’est réveillé un matin au « Moyen Âge ».',
    blocks: [
      { t: 'h', text: 'Compter et découper le temps' },
      { t: 'p', text: 'Un **siècle** dure cent ans et se note en chiffres romains. Le **XVIe siècle** correspond aux années 1501 à 1600 : pour trouver le siècle d’une date, on prend les deux premiers chiffres et on ajoute 1 (**1789** : 17 + 1, donc le XVIIIe siècle). Un **millénaire** dure mille ans.' },
      { t: 'list', items: [
        'Chiffres romains : **I** = 1, **V** = 5, **X** = 10, **L** = 50, **C** = 100, **D** = 500, **M** = 1000.',
        'Avant Jésus-Christ (av. J.-C.), on compte à rebours : le IIe siècle av. J.-C. est **avant** le Ier siècle av. J.-C.',
        'Il n’y a pas d’année 0 : on passe de 1 av. J.-C. à l’an 1.',
      ] },
      { t: 'p', text: 'Les cinq grandes périodes sont la **Préhistoire**, l’**Antiquité**, le **Moyen Âge**, les **Temps modernes** et l’**époque contemporaine**. La Préhistoire se distingue des suivantes par l’absence d’écriture.' },

      { t: 'h', text: 'De la Préhistoire à l’Antiquité' },
      { t: 'p', text: 'Au **paléolithique** (âge de la pierre taillée), les humains sont des chasseurs-cueilleurs **nomades** : ils chassent, pêchent, cueillent, et vivent dans des abris ou des campements. Au **néolithique** (âge de la pierre polie), ils deviennent **sédentaires** : ils pratiquent l’agriculture et l’élevage, fabriquent de la poterie et fondent des villages.' },
      { t: 'p', text: 'L’**Antiquité** commence avec l’invention de l’écriture (vers 3300 av. J.-C. en Mésopotamie) et s’achève en 476 par convention. En **Gaule**, les Gaulois (peuples celtes) sont conquis par les Romains. Jules César mène la guerre des Gaules (58 à 51 av. J.-C.) ; le chef arverne **Vercingétorix** est vaincu à **Alésia en 52 av. J.-C.**. La Gaule devient ensuite romaine : routes, villes, aqueducs, langue latine.' },

      { t: 'h', text: 'Du Moyen Âge à nos jours' },
      { t: 'p', text: 'Le **Moyen Âge** va de **476** (fin de l’Empire romain d’Occident) à **1492** (arrivée de Christophe Colomb en Amérique), selon la convention la plus courante. Les **Temps modernes** vont de 1492 à **1789** (Révolution française). L’**époque contemporaine** commence en 1789 et se poursuit aujourd’hui.' },
      { t: 'table', head: ['Date', 'Événement', 'Période'], rows: [
        ['52 av. J.-C.', 'Défaite de Vercingétorix à Alésia', 'Antiquité'],
        ['476', 'Fin de l’Empire romain d’Occident', 'Antiquité / Moyen Âge'],
        ['800', 'Charlemagne couronné empereur', 'Moyen Âge'],
        ['987', 'Hugues Capet devient roi des Francs', 'Moyen Âge'],
        ['1337-1453', 'Guerre de Cent Ans', 'Moyen Âge'],
        ['1492', 'Christophe Colomb atteint l’Amérique', 'Moyen Âge / Temps modernes'],
        ['1515', 'Victoire de François Ier à Marignan', 'Temps modernes'],
        ['1643-1715', 'Règne de Louis XIV', 'Temps modernes'],
        ['1789', 'Début de la Révolution française', 'Époque contemporaine'],
        ['1914-1918', 'Première Guerre mondiale', 'Époque contemporaine'],
        ['1939-1945', 'Seconde Guerre mondiale', 'Époque contemporaine'],
      ] },

      { t: 'example', title: 'Situer une date', items: [
        'Question : à quel siècle et à quelle période appartient 1515 (Marignan) ?',
        'Réponse : 15 + 1 = 16, donc le **XVIe siècle**. Entre 1492 et 1789, c’est donc les **Temps modernes**.',
      ] },
      { t: 'example', title: 'Une date commentée : 52 av. J.-C.', items: [
        'Alésia marque la fin de l’indépendance gauloise. La date est « av. J.-C. » : plus le nombre est grand, plus on remonte loin dans le passé.',
        'Elle appartient au Ier siècle av. J.-C., et se situe donc dans l’Antiquité.',
      ] },

      { t: 'trap', text: 'Erreurs classiques : écrire que 1789 est au XVIIe siècle (c’est le XVIIIe) ; croire que les périodes ont des limites exactes (ce sont des conventions, d’autres historiens retiennent 1453 pour la fin du Moyen Âge) ; confondre « Gaulois » (avant la conquête) et « Gallo-romains » (après).' },
      { t: 'tip', text: 'Retiens une dizaine de dates piliers et accroche chaque autre événement à l’une d’elles : une frise se construit autour de repères, pas de listes.' },
      { t: 'key', items: [
        'Siècle : on prend les deux premiers chiffres de l’année et on ajoute 1.',
        'Préhistoire (sans écriture) puis Antiquité, Moyen Âge, Temps modernes, époque contemporaine.',
        'Paléolithique : nomades, chasse et cueillette. Néolithique : sédentarisation, agriculture, élevage.',
        'Repères : 52 av. J.-C., 476, 800, 987, 1492, 1789.',
      ] },
      { t: 'check', q: 'À quel siècle appartient l’année 1500 ?', a: 'Au XVe siècle : le XVe siècle va de 1401 à 1500 (et non au XVIe).' },
      { t: 'check', q: 'Quelle différence essentielle entre paléolithique et néolithique ?', a: 'Au paléolithique, les humains sont nomades et vivent de chasse et de cueillette. Au néolithique, ils deviennent sédentaires grâce à l’agriculture et à l’élevage.' },
      { t: 'check', q: 'Quel événement marque le début des Temps modernes selon la convention retenue ici, et celui de l’époque contemporaine ?', a: '1492 (arrivée de Christophe Colomb en Amérique) pour les Temps modernes ; 1789 (Révolution française) pour l’époque contemporaine.' },
    ],
  },
  {
    id: 'revolution-xixe',
    title: 'De la Révolution à la IIIe République',
    intro: 'Entre 1789 et la fin du XIXe siècle, la France abandonne la monarchie absolue, invente les droits des citoyens, s’industrialise, se dote d’une école gratuite, laïque et obligatoire, et construit un empire colonial.',
    blocks: [
      { t: 'h', text: 'La Révolution française (1789-1799)' },
      { t: 'p', text: 'En 1789, la société d’Ancien Régime est divisée en trois ordres (clergé, noblesse, tiers état) et le roi **Louis XVI** détient tous les pouvoirs. Les **États généraux**, réunis en mai 1789, tournent à l’affrontement : le tiers état se proclame **Assemblée nationale** (juin), puis prête le **serment du Jeu de paume** (20 juin).' },
      { t: 'list', items: [
        '**14 juillet 1789** : prise de la Bastille, symbole de l’arbitraire royal.',
        '**4 août 1789** : abolition des privilèges.',
        '**26 août 1789** : Déclaration des droits de l’homme et du citoyen (liberté, égalité devant la loi, souveraineté de la nation).',
        '**1791** : première Constitution, monarchie constitutionnelle ; fuite du roi à Varennes en juin.',
        '**20 septembre 1792** : victoire de Valmy ; **21 septembre 1792** : la royauté est abolie, la **Ire République** naît.',
        '**21 janvier 1793** : exécution de Louis XVI. Suit la **Terreur** (1793-1794).',
        '**1795-1799** : le Directoire, régime instable, qui s’achève par le coup d’État de Bonaparte le **18 brumaire an VIII (9 novembre 1799)**.',
      ] },

      { t: 'h', text: 'Napoléon et l’Empire' },
      { t: 'p', text: '**Napoléon Bonaparte** prend le pouvoir en 1799 (Consulat), se fait sacrer empereur en **1804** et promulgue le **Code civil** (1804), qui consacre l’égalité devant la loi et reste à la base du droit français. Il conquiert une grande partie de l’Europe, avant la défaite de **Waterloo en 1815**. Il meurt en exil à Sainte-Hélène en 1821.' },

      { t: 'h', text: 'Industrialisation, esclavage, régimes politiques' },
      { t: 'p', text: 'La **révolution industrielle** transforme le XIXe siècle : machine à vapeur, charbon, chemin de fer, usines, **exode rural** vers les villes. Une nouvelle classe, les **ouvriers**, vit souvent dans des conditions très dures ; les lois sociales viendront progressivement.' },
      { t: 'p', text: 'L’**esclavage** est aboli une première fois par la Convention en **1794**, rétabli par Napoléon en 1802, puis aboli définitivement en **1848** (décret porté par Victor Schoelcher). La France passe ensuite par la monarchie (Restauration, 1830), la IIe République (1848, suffrage universel masculin) puis le Second Empire de Napoléon III (1852-1870).' },

      { t: 'h', text: 'La IIIe République et l’école de Jules Ferry' },
      { t: 'p', text: 'Après la défaite de Sedan contre la Prusse, la République est proclamée le **4 septembre 1870**. La **IIIe République** (1870-1940) s’installe durablement et adopte de grandes libertés : presse, réunion, syndicats. Les **lois de Jules Ferry** (1881-1882) rendent l’école primaire **gratuite** (1881), puis **obligatoire et laïque** (1882). La **loi de 1905** sépare les Églises et l’État.' },
      { t: 'p', text: 'À la même époque, la France étend son empire **colonial** (Algérie conquise à partir de 1830, Indochine, Afrique). La colonisation s’accompagne de domination, de violences et d’inégalités ; elle se justifie alors par une idéologie que l’on enseigne aujourd’hui avec un regard critique.' },

      { t: 'example', title: 'Une date commentée : 26 août 1789', items: [
        'Texte fondateur : « Les hommes naissent et demeurent libres et égaux en droits. »',
        'Il proclame des droits pour tous les citoyens. Il inspirera ensuite d’autres textes, dont la Déclaration universelle des droits de l’homme (1948).',
      ] },
      { t: 'example', title: 'Une date commentée : 1882', items: [
        'Les lois Ferry rendent l’école obligatoire et laïque. Les maîtres de la République (les « hussards noirs ») doivent former des citoyens.',
        'Conséquence : l’alphabétisation progresse, et le français devient la langue commune.',
      ] },

      { t: 'trap', text: 'Ne pas confondre la **prise de la Bastille** (14 juillet 1789, événement) et la **fête de la Fédération** (14 juillet 1790). Ne pas dire que Napoléon a aboli l’esclavage : il l’a rétabli en 1802. Ne pas attribuer à Jules Ferry la loi de 1905.' },
      { t: 'key', items: [
        '1789 : début de la Révolution ; 1792 : Ire République ; 1804 : Napoléon empereur ; 1815 : Waterloo.',
        '1848 : abolition définitive de l’esclavage.',
        '1870 : IIIe République ; 1881-1882 : lois Ferry ; 1905 : séparation des Églises et de l’État.',
      ] },
      { t: 'check', q: 'Quelle date marque la proclamation de la Ire République ?', a: 'Le 21 septembre 1792 (abolition de la royauté, lendemain de Valmy).' },
      { t: 'check', q: 'Que prévoient les lois Jules Ferry de 1881-1882 pour l’école primaire ?', a: 'Gratuité (1881), puis obligation et laïcité (1882).' },
      { t: 'check', q: 'Quand l’esclavage a-t-il été aboli définitivement en France ?', a: 'En 1848, après une première abolition en 1794 que Napoléon avait annulée en 1802.' },
    ],
  },
  {
    id: 'xxe-siecle',
    title: 'Le XXe siècle',
    intro: 'Le XXe siècle est marqué par deux guerres mondiales, des génocides, la guerre froide, la décolonisation, mais aussi par la démocratisation (vote des femmes) et la construction européenne.',
    blocks: [
      { t: 'h', text: 'La Première Guerre mondiale (1914-1918)' },
      { t: 'p', text: 'Déclenchée après l’attentat de Sarajevo (28 juin 1914), la guerre oppose notamment la France, le Royaume-Uni et la Russie à l’Allemagne et à l’Autriche-Hongrie. Les soldats français, les **poilus**, vivent dans les **tranchées**, notamment lors de la bataille de **Verdun (1916)**. L’**armistice** est signé le **11 novembre 1918**.' },

      { t: 'h', text: 'La Seconde Guerre mondiale et les génocides' },
      { t: 'p', text: 'La guerre débute le **1er septembre 1939** avec l’invasion de la Pologne par l’Allemagne nazie. La France est vaincue en juin 1940. Le **18 juin 1940**, le général **de Gaulle** lance depuis Londres un appel à continuer le combat. Le maréchal Pétain instaure le **régime de Vichy**, qui collabore avec l’occupant. La **Résistance** s’organise en France (Jean Moulin unifie ses mouvements, Conseil national de la Résistance en 1943).' },
      { t: 'p', text: 'Le régime nazi organise le **génocide des Juifs d’Europe** (la **Shoah**, environ six millions de victimes) et massacre aussi les Tsiganes. Le **génocide des Arméniens** (1915) l’avait précédé. Le **6 juin 1944**, le Débarquement en Normandie ouvre la voie à la Libération. La guerre s’achève en Europe le **8 mai 1945**.' },

      { t: 'h', text: 'La France après 1945' },
      { t: 'list', items: [
        '**Droit de vote des femmes** : accordé par l’ordonnance d’avril 1944, appliqué pour la première fois aux élections de 1945.',
        '**Ve République** : Constitution de **1958** (général de Gaulle) ; élection du président au suffrage universel direct depuis 1962.',
        '**Peine de mort** abolie en **1981**.',
      ] },

      { t: 'h', text: 'Guerre froide, décolonisation, Europe' },
      { t: 'p', text: 'La **guerre froide** (de la fin des années 1940 à 1991) oppose deux blocs, États-Unis et URSS, sans affrontement direct majeur. Elle symbolise le **mur de Berlin** (construit en 1961, ouvert le **9 novembre 1989**).' },
      { t: 'p', text: 'La **décolonisation** voit les empires coloniaux se défaire : guerre d’Indochine (1946-1954), guerre d’Algérie (1954-1962, indépendance le 5 juillet 1962), indépendances africaines (dont beaucoup en 1960).' },
      { t: 'p', text: 'La **construction européenne** part de la déclaration de **Robert Schuman** (9 mai 1950), de la CECA (1951), du **traité de Rome (1957)** qui crée la Communauté économique européenne, jusqu’à l’**Union européenne** (traité de Maastricht, 1992) et l’**euro** (en circulation depuis 2002).' },

      { t: 'example', title: 'Analyser une date : 18 juin 1940', items: [
        'Qui ? Le général de Gaulle, à la radio (BBC, Londres). Quoi ? Il refuse la défaite et appelle à la résistance.',
        'Attention : ce n’est pas le début de la Résistance de masse ; l’appel est peu entendu sur le moment. Il devient un symbole fondateur.',
      ] },
      { t: 'example', title: 'Analyser une date : 9 mai 1950', items: [
        'Robert Schuman propose de mettre en commun la production de charbon et d’acier de la France et de l’Allemagne.',
        'Objectif : rendre la guerre entre les deux pays « impossible », donc la paix. C’est le point de départ de la construction européenne.',
      ] },

      { t: 'trap', text: 'Ne pas confondre l’**armistice** de 1918 (fin des combats) et le traité de **Versailles** (1919). Ne pas confondre Vichy et la France libre. Ne pas dire que le vote des femmes date de 1944 : il est décidé en 1944, exercé en 1945.' },
      { t: 'key', items: [
        '1914-1918 puis 1939-1945 : deux guerres mondiales ; Shoah et génocide arménien.',
        '18 juin 1940 : appel de de Gaulle ; 6 juin 1944 : Débarquement ; 8 mai 1945 : fin de la guerre en Europe.',
        '1958 : Ve République ; 1957 : traité de Rome ; 1992 : Union européenne ; 1962 : indépendance de l’Algérie.',
      ] },
      { t: 'check', q: 'Quelle est la date de l’armistice de la Première Guerre mondiale ?', a: 'Le 11 novembre 1918.' },
      { t: 'check', q: 'Quel texte fonde la Ve République et en quelle année ?', a: 'La Constitution de 1958, voulue par le général de Gaulle.' },
      { t: 'check', q: 'Que désigne le terme « Shoah » ?', a: 'Le génocide des Juifs d’Europe perpétré par l’Allemagne nazie, environ six millions de victimes.' },
    ],
  },
  {
    id: 'geographie-france',
    title: 'Géographie de la France',
    intro: 'La France se lit à travers son relief, ses fleuves, ses climats, ses territoires (métropole et outre-mer), son organisation administrative et les types d’espaces où vivent ses habitants.',
    blocks: [
      { t: 'h', text: 'Relief et fleuves' },
      { t: 'p', text: 'La France métropolitaine, souvent appelée l’**Hexagone**, associe plaines et bassins (Bassin parisien, Bassin aquitain) et massifs montagneux. Les massifs **anciens**, usés par l’érosion, sont le Massif central, les Vosges, l’Ardenne et le Massif armoricain. Les massifs **récents**, plus élevés, sont les **Alpes**, les **Pyrénées** et le Jura. Le **Mont Blanc**, dans les Alpes, culmine à environ 4 800 m.' },
      { t: 'table', head: ['Fleuve', 'Se jette dans'], rows: [
        ['La Loire (le plus long, environ 1 000 km)', 'L’océan Atlantique'],
        ['La Garonne', 'L’océan Atlantique (estuaire de la Gironde)'],
        ['La Seine', 'La Manche'],
        ['Le Rhône', 'La mer Méditerranée'],
        ['Le Rhin (en partie frontière avec l’Allemagne)', 'La mer du Nord (hors de France)'],
      ] },

      { t: 'h', text: 'Les climats' },
      { t: 'list', items: [
        '**Océanique** (ouest) : hivers doux, étés frais, pluies fréquentes.',
        '**Continental** ou semi-continental (est) : hivers plus froids, étés plus chauds.',
        '**Méditerranéen** (sud-est) : étés chauds et secs, pluies d’automne.',
        '**De montagne** : froid, neige, selon l’altitude.',
      ] },

      { t: 'h', text: 'Territoires et organisation administrative' },
      { t: 'p', text: 'La France comprend l’**Hexagone** et des territoires **d’outre-mer**, répartis sur plusieurs océans : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte (départements et régions d’outre-mer), puis des collectivités comme la Polynésie française, Saint-Pierre-et-Miquelon ou Wallis-et-Futuna, et la Nouvelle-Calédonie (statut particulier). Ils donnent à la France une vaste zone maritime.' },
      { t: 'p', text: 'Trois niveaux de collectivités territoriales : la **commune** (environ 35 000, dirigée par le maire et le conseil municipal), le **département** (le conseil départemental) et la **région** (le conseil régional). L’État est représenté par le **préfet**.' },

      { t: 'h', text: 'Espaces urbains, périurbains, ruraux' },
      { t: 'p', text: 'L’espace **urbain** regroupe les villes denses (habitat collectif, commerces, emplois). L’espace **périurbain** entoure la ville : maisons individuelles, habitants qui travaillent en ville et se déplacent beaucoup. L’espace **rural** est moins dense, marqué par l’agriculture, les bourgs et les villages. Une grande partie de la population vit en ville ou près d’elle.' },

      { t: 'h', text: 'Lire une carte' },
      { t: 'list', items: [
        '**Titre** : dit le sujet et le lieu.',
        '**Légende** : explique chaque couleur et chaque figuré.',
        '**Échelle** : rapport entre la carte et la réalité.',
        '**Orientation** : flèche indiquant le nord ; **source** : d’où viennent les données.',
      ] },
      { t: 'example', title: 'Calculer avec l’échelle', items: [
        'Échelle 1/50 000 : 1 cm sur la carte représente 50 000 cm, soit 500 m dans la réalité.',
        'Deux villages distants de 6 cm sur cette carte sont séparés de 3 km (6 × 500 m).',
      ] },
      { t: 'example', title: 'Situer la Loire', items: [
        'Elle prend sa source dans le Massif central, traverse le centre de la France puis se jette dans l’Atlantique, près de Nantes et de Saint-Nazaire.',
      ] },

      { t: 'trap', text: 'Ne pas confondre **département** et **région**. Ne pas dire que l’outre-mer est « à l’étranger » : ce sont des territoires français. Une carte sans titre ni légende est inexploitable : ne jamais l’analyser sans les avoir lus.' },
      { t: 'key', items: [
        'Massifs anciens (Massif central, Vosges) et récents (Alpes, Pyrénées, Jura).',
        'Quatre fleuves majeurs : Loire, Seine, Garonne, Rhône.',
        'Trois échelons : commune, département, région.',
        'Carte : titre, légende, échelle, orientation, source.',
      ] },
      { t: 'check', q: 'Dans quelle mer se jette le Rhône ?', a: 'Dans la mer Méditerranée.' },
      { t: 'check', q: 'À quoi correspond 1 cm sur une carte à l’échelle 1/25 000 ?', a: '25 000 cm, soit 250 m dans la réalité.' },
      { t: 'check', q: 'Quelle différence entre espace périurbain et espace rural ?', a: 'Le périurbain entoure la ville et en dépend (habitants qui y travaillent) ; le rural est moins dense et plus agricole, moins lié à la ville.' },
    ],
  },
  {
    id: 'emc',
    title: 'EMC et institutions',
    intro: 'L’enseignement moral et civique (EMC) transmet les valeurs de la République et fait comprendre les règles de la vie en société. Le professeur doit connaître les symboles, les institutions et savoir les faire vivre en classe.',
    blocks: [
      { t: 'h', text: 'Valeurs et symboles de la République' },
      { t: 'p', text: 'La devise **Liberté, Égalité, Fraternité** est inscrite dans la Constitution. L’article premier de la Constitution de 1958 définit la France comme une République **indivisible, laïque, démocratique et sociale**.' },
      { t: 'table', head: ['Symbole', 'Repère'], rows: [
        ['Marianne', 'Figure féminine, représentation de la République, présente dans les mairies'],
        ['Drapeau tricolore', 'Bleu, blanc, rouge'],
        ['Hymne', 'La Marseillaise, composée en 1792 par Rouget de Lisle'],
        ['Fête nationale', '14 juillet'],
        ['Devise', 'Liberté, Égalité, Fraternité'],
      ] },
      { t: 'p', text: 'Le 14 juillet commémore à la fois la prise de la Bastille (1789) et la fête de la Fédération (1790).' },

      { t: 'h', text: 'Les institutions' },
      { t: 'list', items: [
        '**Le président de la République** : chef de l’État, élu au suffrage universel direct pour cinq ans.',
        '**Le gouvernement** : dirigé par le Premier ministre, il conduit la politique de la nation.',
        '**Le Parlement** : l’**Assemblée nationale** (députés élus au suffrage universel direct) et le **Sénat** (sénateurs élus au suffrage indirect). Il vote les lois et contrôle le gouvernement.',
        '**La justice** : les juges rendent la justice, indépendamment des autres pouvoirs.',
      ] },
      { t: 'p', text: 'Ces institutions s’appuient sur la **séparation des pouvoirs**, théorisée par Montesquieu : le pouvoir **législatif** (faire la loi), le pouvoir **exécutif** (l’appliquer) et le pouvoir **judiciaire** (juger) sont distincts, pour éviter les abus.' },

      { t: 'h', text: 'Laïcité et droits de l’enfant' },
      { t: 'p', text: 'La **laïcité** repose sur la **loi de 1905** : l’État est neutre, il garantit la liberté de conscience et le libre exercice des cultes. À l’école, elle protège la liberté de chaque élève et impose la neutralité du professeur, fonctionnaire de l’État. Une charte de la laïcité est affichée dans les établissements.' },
      { t: 'p', text: 'La **Convention internationale des droits de l’enfant**, adoptée par l’ONU le **20 novembre 1989**, reconnaît à tout enfant des droits : être protégé, éduqué, soigné, s’exprimer. Le 20 novembre est aujourd’hui la journée des droits de l’enfant.' },

      { t: 'h', text: 'Pratiques en classe' },
      { t: 'p', text: 'L’EMC se vit autant qu’il s’apprend. Le **débat réglé** (règles de parole, rôles de président et d’observateur, argumentation) apprend à écouter et à défendre un avis. Le **conseil d’élèves** (ou conseil de classe coopératif) permet de décider ensemble des règles de vie.' },
      { t: 'example', title: 'Un débat réglé en cycle 3', items: [
        'Question : « Faut-il des règles dans la cour de récréation ? ». Les élèves préparent seuls des arguments, puis débattent. Un président distribue la parole, un secrétaire note, des observateurs vérifient que les règles sont respectées.',
        'Le professeur n’impose pas son opinion : il veille au cadre, aux règles et à la qualité des arguments.',
      ] },
      { t: 'example', title: 'Un conseil d’élèves', items: [
        'Chaque semaine, une boîte à idées est dépouillée : un conflit, une proposition. La classe discute, vote, et la décision est consignée.',
        'Les élèves apprennent que les règles sont discutées, décidées et respectées par tous.',
      ] },

      { t: 'trap', text: 'Confondre **neutralité** et **absence de valeurs** : l’école transmet les valeurs de la République. Confondre la laïcité (neutralité de l’État) avec une interdiction de parler des religions : on enseigne les faits religieux comme culture. Mélanger Sénat et Assemblée nationale (mode d’élection différent).' },
      { t: 'key', items: [
        'Devise : Liberté, Égalité, Fraternité ; symboles : Marianne, drapeau, Marseillaise, 14 juillet.',
        'Exécutif, législatif, judiciaire : trois pouvoirs séparés.',
        'Laïcité : loi de 1905, neutralité de l’État, liberté de conscience.',
        'Droits de l’enfant : convention du 20 novembre 1989.',
      ] },
      { t: 'check', q: 'Qui vote les lois ?', a: 'Le Parlement : l’Assemblée nationale et le Sénat.' },
      { t: 'check', q: 'Quelle loi fonde la laïcité en France ?', a: 'La loi du 9 décembre 1905 de séparation des Églises et de l’État.' },
      { t: 'check', q: 'Donne un exemple de pratique de classe qui fait vivre l’EMC.', a: 'Le débat réglé ou le conseil d’élèves, qui apprennent à argumenter, écouter, décider et respecter des règles communes.' },
    ],
  },
  {
    id: 'enseigner-hg',
    title: 'Enseigner l’histoire-géographie à l’école',
    intro: 'Enseigner l’histoire-géographie, c’est apprendre aux élèves à questionner le temps et l’espace à partir de documents, et non à réciter une leçon. Le professeur doit maîtriser une démarche et des outils.',
    blocks: [
      { t: 'h', text: 'Analyser un document' },
      { t: 'p', text: 'Avant de dire ce qu’un document « montre », on l’identifie. Questions à poser : quelle est sa **nature** (texte, tableau, photographie, carte, affiche) ? Qui en est l’**auteur** ? Quelle est sa **date** ? Quel est le **contexte** ? À qui s’adresse-t-il et dans quel but ? Que dit-il (**contenu**) et quelles en sont les **limites** ?' },
      { t: 'example', title: 'Analyser une affiche de 1914', items: [
        'Nature : une affiche de propagande, auteur : un illustrateur, date : 1914, destinataires : les civils.',
        'Contexte : début de la guerre. Elle ne décrit pas la réalité du front : elle cherche à convaincre. Son intérêt est de montrer ce que l’État voulait faire croire.',
      ] },

      { t: 'h', text: 'Histoire, mémoire et sources' },
      { t: 'p', text: 'Une **source primaire** date de la période étudiée (lettre, photo, objet). Une **source secondaire** est un travail produit après (manuel, livre d’histoire). L’**histoire** est une démarche scientifique qui confronte les sources ; la **mémoire** est le souvenir transmis, vécu ou collectif, subjectif, parfois sélectif. Les deux se complètent mais ne se confondent pas.' },
      { t: 'example', title: 'Histoire ou mémoire ?', items: [
        'Un monument aux morts, une commémoration du 11 novembre relèvent de la mémoire (on honore et on se souvient).',
        'L’étude des causes de la guerre à partir de documents relève de l’histoire.',
      ] },

      { t: 'h', text: 'Croquis et paysage' },
      { t: 'p', text: 'Pour étudier un **paysage** à partir d’une photographie : repérer les plans (premier plan, arrière-plan), distinguer les éléments naturels et ceux créés par l’homme. Le **croquis** schématise ce paysage ou un territoire : un **titre**, une **légende** ordonnée, une **orientation** (nord) et si possible une **échelle**. Chaque figuré a une couleur et une signification.' },

      { t: 'h', text: 'Démarche type d’une séance' },
      { t: 'steps', items: [
        '**Situation déclenchante** : un document ou une question qui suscite la curiosité.',
        '**Problématique** : formuler ce que l’on cherche à comprendre.',
        '**Recherche** : analyse de documents, en groupes ou seul.',
        '**Mise en commun** : confronter les réponses.',
        '**Trace écrite** : une phrase ou un schéma de synthèse, mémorisé.',
        '**Évaluation** : repères (frise), vocabulaire, analyse d’un nouveau document.',
      ] },

      { t: 'trap', text: 'Présenter un document comme une vérité sans en interroger l’auteur. Remplacer l’analyse par une lecture « à voix haute ». Donner trop de dates : privilégier quelques repères essentiels. Confondre le travail de mémoire (commémoration) et l’enseignement de l’histoire.' },
      { t: 'tip', text: 'À l’oral, annonce toujours la nature, l’auteur, la date et le contexte du document avant de commenter son contenu : c’est la preuve de méthode que le jury attend.' },
      { t: 'key', items: [
        'Analyse d’un document : nature, auteur, date, contexte, contenu, limites.',
        'Source primaire (de l’époque) et source secondaire (travail postérieur).',
        'Histoire (démarche critique) et mémoire (souvenir) sont distinctes.',
        'Séance : situation, problématique, recherche, mise en commun, trace écrite, évaluation.',
      ] },
      { t: 'check', q: 'Qu’est-ce qu’une source primaire ?', a: 'Un document produit à l’époque étudiée (lettre, photo, affiche, objet), par opposition à un ouvrage écrit après coup.' },
      { t: 'check', q: 'Quels éléments d’un croquis permettent de le lire correctement ?', a: 'Le titre, la légende, l’orientation (nord) et, si possible, l’échelle.' },
      { t: 'check', q: 'Pourquoi faut-il interroger l’auteur d’un document ?', a: 'Parce que son point de vue, son but et sa date influencent ce qu’il montre : un document n’est jamais neutre.' },
    ],
  },
];
