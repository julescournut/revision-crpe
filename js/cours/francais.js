/* Cours de français. Format d'un chapitre : voir README (section « Cours »). */
COURS.francais = [
  {
    id: 'classes-de-mots',
    title: 'Les classes de mots (nature)',
    intro: 'La nature d’un mot (on dit aussi sa classe grammaticale) est fixe : c’est ce que le mot est, indépendamment de la phrase. C’est la base de toute l’étude de la langue au concours.',
    blocks: [
      { t: 'h', text: 'Mots variables et mots invariables' },
      { t: 'table', head: ['Variables', 'Invariables'], rows: [
        ['Nom, déterminant, adjectif, pronom, verbe', 'Adverbe, préposition, conjonction, interjection'],
      ] },
      { t: 'p', text: 'Un mot **variable** change de forme selon le genre, le nombre, la personne ou le temps. Un mot **invariable** garde toujours la même forme.' },

      { t: 'h', text: 'Le nom et le déterminant' },
      { t: 'p', text: 'Le **nom** désigne un être, une chose ou une idée. Il est commun (*une ville*) ou propre (*Lyon*). Il est presque toujours précédé d’un **déterminant**, qui en indique le genre et le nombre.' },
      { t: 'table', head: ['Déterminant', 'Exemples'], rows: [
        ['Article défini', 'le, la, les, l’ (et contractés : au, aux, du, des)'],
        ['Article indéfini', 'un, une, des'],
        ['Article partitif', 'du, de la, de l’ (*boire du lait*)'],
        ['Possessif', 'mon, ton, son, notre, votre, leur…'],
        ['Démonstratif', 'ce, cet, cette, ces'],
        ['Indéfini', 'chaque, quelques, plusieurs, aucun, tout…'],
        ['Numéral cardinal', 'deux, dix, cent…'],
        ['Interrogatif / exclamatif', 'quel, quelle, quels, quelles'],
      ] },

      { t: 'h', text: 'Le pronom' },
      { t: 'p', text: 'Le **pronom** remplace un nom, un groupe nominal ou une idée (pronom de reprise) ou désigne directement une personne de l’échange (*je, tu*).' },
      { t: 'list', items: [
        '**Personnels** : je, me, moi, tu, il, le, lui, leur, se, en, y…',
        '**Possessifs** : le mien, la tienne, les leurs…',
        '**Démonstratifs** : celui, celle-ci, cela, ça, ce…',
        '**Relatifs** : qui, que, quoi, dont, où, lequel…',
        '**Interrogatifs** : qui ? que ? lequel ?',
        '**Indéfinis** : on, personne, rien, chacun, quelqu’un…',
      ] },

      { t: 'h', text: 'Les autres classes' },
      { t: 'list', items: [
        '**Adjectif qualificatif** : précise une qualité du nom (*une maison ancienne*).',
        '**Verbe** : exprime une action ou un état, se conjugue.',
        '**Adverbe** : modifie un verbe, un adjectif, un autre adverbe ou une phrase (*très, vite, hier, heureusement*).',
        '**Préposition** : introduit un complément (*à, de, pour, par, sans, avec, dans, sur*).',
        '**Conjonction de coordination** : relie deux éléments de même fonction (*mais, ou, et, donc, or, ni, car*).',
        '**Conjonction de subordination** : introduit une proposition subordonnée (*que, quand, comme, si, lorsque, parce que*).',
        '**Interjection** : exprime une émotion (*oh, hélas, chut*).',
      ] },

      { t: 'example', title: 'Analyser la nature de chaque mot', items: [
        '*Hier*, *le* *petit* *chat* *de* *Léa* *dormait* *paisiblement*.',
        'Hier : adverbe · le : article défini · petit : adjectif qualificatif · chat : nom commun · de : préposition · Léa : nom propre · dormait : verbe · paisiblement : adverbe.',
      ] },

      { t: 'trap', text: 'Un même mot peut changer de nature selon l’emploi. *Leur* est déterminant possessif devant un nom (*leur maison*) mais pronom personnel devant un verbe (*je leur parle*). *Que* peut être pronom relatif, conjonction de subordination ou adverbe exclamatif (*Que c’est beau !*).' },
      { t: 'tip', text: 'Pour identifier un déterminant, essaie de le remplacer par un autre déterminant : *chaque élève → un élève*. Pour un pronom, cherche ce qu’il remplace.' },

      { t: 'key', items: [
        'Nature = ce que le mot est ; fonction = son rôle dans la phrase.',
        '5 classes variables, 4 classes invariables.',
        'Un déterminant accompagne un nom ; un pronom le remplace.',
      ] },
      { t: 'check', q: 'Quelle est la nature de « tout » dans « Tout homme est mortel » ?', a: 'Déterminant indéfini : il introduit le nom « homme » (on peut dire « un homme »).' },
      { t: 'check', q: 'Dans « Des pommes ? Il en mange », quelle est la nature de « en » ?', a: 'Pronom personnel : il remplace « des pommes ».' },
    ],
  },
  {
    id: 'fonctions',
    title: 'Les fonctions dans la phrase',
    intro: 'La fonction d’un mot ou d’un groupe de mots, c’est le rôle qu’il joue dans la phrase. Contrairement à la nature, elle change d’une phrase à l’autre et se découvre par des manipulations (pronominalisation, suppression, déplacement).',
    blocks: [
      { t: 'h', text: 'Le sujet et le verbe' },
      { t: 'p', text: 'Le **sujet** commande l’accord du verbe. Pour le trouver : encadre-le par **c’est… qui** (*c’est le chat qui dort*) ou pose la question **qui est-ce qui ?** devant le verbe. Il peut être un groupe nominal, un pronom, un infinitif ou une proposition. Il peut se placer après le verbe (*Dans le jardin poussent des roses*).' },

      { t: 'h', text: 'Les compléments essentiels du verbe' },
      { t: 'table', head: ['Fonction', 'Caractéristiques', 'Pronominalisation'], rows: [
        ['COD (complément d’objet direct)', 'Se construit sans préposition, après le verbe : *quoi ?* *qui ?*', 'le, la, les ; en (avec du, de la, des)'],
        ['COI (complément d’objet indirect)', 'Se construit avec une préposition (à ou de le plus souvent)', 'lui, leur, y, en ; à lui, de lui…'],
        ['COS (complément d’objet second)', 'Second complément d’un verbe qui en a déjà un', 'selon sa construction : lui, leur, le…'],
      ] },
      { t: 'p', text: 'Ces compléments ne se suppriment pas (ou alors le sens du verbe change) et ne se déplacent pas librement. Le COS se rencontre après des verbes comme *donner*, *offrir*, *dire* : *Je donne un livre à Paul* (*un livre* COD, *à Paul* COS).' },

      { t: 'h', text: 'L’attribut' },
      { t: 'p', text: 'L’**attribut du sujet** suit un **verbe attributif** : *être, sembler, paraître, devenir, rester, demeurer, avoir l’air, passer pour*. Il qualifie le sujet : *Elle semble fatiguée*. On peut le remplacer par **le** : *Elle l’est*. L’**attribut du COD** qualifie le COD, à la suite de verbes comme *trouver, juger, rendre, nommer, élire* : *Je trouve ce film excellent* (*excellent* qualifie *ce film*).' },

      { t: 'h', text: 'Les compléments non essentiels et les expansions du nom' },
      { t: 'p', text: 'Le **complément de phrase** (on disait autrefois « complément circonstanciel ») indique le temps, le lieu, la cause, la manière, etc. Il est **supprimable** et **déplaçable** : *Demain, nous irons au parc* / *Nous irons au parc demain*.' },
      { t: 'list', items: [
        '**Complément du nom** : relié au nom par une préposition (*le livre de Marie*).',
        '**Épithète** : adjectif directement rattaché au nom, sans verbe attributif (*un grand arbre*).',
        '**Apposition** : mot ou groupe placé à côté d’un nom ou d’un pronom, en général séparé par des virgules (*Paris, capitale de la France, attire les touristes*).',
      ] },

      { t: 'example', title: 'Analyser les fonctions', items: [
        '*Le matin, la petite Léa offre un bouquet de fleurs à sa mère.*',
        'Le matin : complément de phrase (temps) · la petite Léa : sujet (petite : épithète) · un bouquet de fleurs : COD (de fleurs : complément du nom) · à sa mère : COS.',
        '*Mon voisin, médecin de campagne, semble épuisé.*',
        'Mon voisin : sujet · médecin de campagne : apposition · semble : verbe attributif · épuisé : attribut du sujet.',
        '*Les élèves ont élu Samir délégué.*',
        'Samir : COD · délégué : attribut du COD.',
      ] },

      { t: 'trap', text: 'Ne confonds pas l’attribut et le COD : *Elle semble heureuse* ne contient pas de COD, car *sembler* est attributif. De même, dans *Il mange du pain*, *du* est un article partitif et non une préposition : *du pain* est COD, alors que *Il parle à Paul* est un COI. Enfin, un sujet peut se trouver après le verbe : cherche toujours « qui est-ce qui ? ».' },
      { t: 'tip', text: 'Procède dans l’ordre : repère le verbe conjugué, trouve son sujet, puis teste chaque groupe restant : supprimable et déplaçable ? complément de phrase. Sinon, pronominalise-le pour distinguer COD, COI et attribut.' },

      { t: 'key', items: [
        'La fonction se démontre par des manipulations : pronominalisation, suppression, déplacement.',
        'COD sans préposition ; COI avec préposition ; COS = second complément d’objet.',
        'L’attribut suit un verbe attributif et se remplace par « le ».',
        'Le complément de phrase se supprime et se déplace.',
      ] },
      { t: 'check', q: 'Quelle est la fonction de « fatigué » dans « Je trouve mon frère fatigué » ?', a: 'Attribut du COD : il qualifie « mon frère », COD du verbe « trouve ».' },
      { t: 'check', q: 'Quelle est la fonction de « à ses amis » dans « Elle parle à ses amis » ?', a: 'COI : le complément est introduit par la préposition « à » et se remplace par « lui » ou « leur » (Elle leur parle).' },
      { t: 'check', q: 'Comment distinguer un complément de phrase d’un COD ?', a: 'Le complément de phrase peut être supprimé et déplacé sans que la phrase perde son sens ; le COD ne le peut pas et se pronominalise par le, la, les.' },
    ],
  },
  {
    id: 'phrase-complexe',
    title: 'La phrase simple et la phrase complexe',
    intro: 'Une phrase se construit autour d’un ou plusieurs verbes conjugués. Savoir compter les propositions et reconnaître leurs liens est la clé de l’analyse de la phrase complexe.',
    blocks: [
      { t: 'h', text: 'Proposition, phrase simple, phrase complexe' },
      { t: 'p', text: 'Une **proposition** s’organise autour d’un verbe conjugué. Une **phrase simple** compte une seule proposition ; une **phrase complexe** en compte plusieurs. Pour les compter, relève les verbes conjugués.' },

      { t: 'h', text: 'Trois façons de relier des propositions' },
      { t: 'list', items: [
        '**Juxtaposition** : propositions séparées par une ponctuation (virgule, point-virgule, deux-points), sans mot de liaison : *Il pleut, nous restons à la maison.*',
        '**Coordination** : propositions reliées par une conjonction de coordination (*mais, ou, et, donc, or, ni, car*) ; elles sont de même niveau : *Il pleut et nous restons à la maison.*',
        '**Subordination** : une proposition subordonnée dépend d’une proposition principale. Elle est introduite par un pronom relatif ou une conjonction de subordination : *Nous restons parce qu’il pleut.*',
      ] },

      { t: 'h', text: 'Les subordonnées à connaître' },
      { t: 'table', head: ['Type', 'Introduite par', 'Exemple'], rows: [
        ['Relative', 'pronom relatif (qui, que, dont, où, lequel)', 'Le livre **que je lis** est passionnant.'],
        ['Conjonctive complétive', 'que', 'Je pense **que tu as raison**.'],
        ['Interrogative indirecte', 'si, où, quand, pourquoi, qui…', 'Je me demande **si tu viendras**.'],
        ['Circonstancielle de temps', 'quand, lorsque, dès que, avant que…', '**Quand la cloche sonne**, nous rentrons.'],
        ['Circonstancielle de cause', 'parce que, puisque, comme', 'Il reste au lit **parce qu’il est malade**.'],
        ['Circonstancielle de conséquence', 'si bien que, de sorte que, tellement… que', 'Il a tellement couru **qu’il est épuisé**.'],
        ['Circonstancielle de but', 'pour que, afin que (subjonctif)', 'Je parle fort **pour que tu m’entendes**.'],
        ['Circonstancielle de concession', 'bien que, quoique (subjonctif), même si', 'Il sort **bien qu’il pleuve**.'],
        ['Circonstancielle de condition', 'si, à condition que', '**Si tu viens**, nous irons au cinéma.'],
      ] },
      { t: 'p', text: 'La **relative** complète un nom ou un pronom (son antécédent). La **complétive** est le plus souvent COD du verbe de la principale. L’**interrogative indirecte** rapporte une question sans point d’interrogation et sans inversion du sujet. Les circonstancielles sont des compléments de phrase.' },

      { t: 'h', text: 'Types et formes de phrases' },
      { t: 'p', text: 'Les quatre **types** : déclaratif, interrogatif, injonctif (ordre, conseil) et exclamatif. Chaque phrase possède aussi des **formes** : positive ou négative, active ou passive, emphatique ou non, impersonnelle ou non. Une phrase est donc à la fois d’un type et d’une combinaison de formes : *Ne mange-t-il pas de pain ?* est interrogative, négative, active.' },

      { t: 'example', title: 'Compter et nommer les propositions', items: [
        '*Elle ouvre la porte, regarde dehors et sourit.*',
        'Trois verbes conjugués, donc trois propositions : *ouvre* et *regarde* sont juxtaposées ; *et sourit* est coordonnée.',
        '*Quand la pluie cesse, les enfants qui jouaient dans la cour rentrent parce qu’ils ont faim.*',
        'Principale : les enfants… rentrent · subordonnée circonstancielle de temps : quand la pluie cesse · subordonnée relative : qui jouaient dans la cour · subordonnée circonstancielle de cause : parce qu’ils ont faim.',
      ] },

      { t: 'trap', text: 'Après **si** de condition, on n’emploie jamais le futur ni le conditionnel : on dit *Si tu viens, je serai content* (et non *Si tu viendras*). Autre piège : *que* est tantôt pronom relatif (*le livre que je lis*, il remplace un nom), tantôt conjonction introduisant une complétive (*je sais que tu lis*). Teste en cherchant un antécédent.' },
      { t: 'tip', text: 'Une proposition insérée dans une autre (comme la relative de l’exemple ci-dessus) compte comme une proposition à part entière : ne l’oublie pas dans ton décompte.' },

      { t: 'key', items: [
        'Une proposition = un verbe conjugué.',
        'Juxtaposition : ponctuation ; coordination : conjonction de coordination ; subordination : dépendance.',
        'Quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif.',
      ] },
      { t: 'check', q: 'Combien de propositions dans « Je sais que tu viendras demain » et de quel type est la subordonnée ?', a: 'Deux : la principale « Je sais » et la subordonnée conjonctive complétive « que tu viendras demain », COD de « sais ».' },
      { t: 'check', q: 'Quelle différence entre « Il demande où je vais » et « Où vas-tu ? » ?', a: 'La première est une interrogative indirecte (subordonnée, sans point d’interrogation, ordre sujet-verbe). La seconde est une phrase interrogative directe, avec inversion et point d’interrogation.' },
    ],
  },
  {
    id: 'conjugaison',
    title: 'Le verbe et la conjugaison',
    intro: 'Le verbe se conjugue : sa forme varie selon la personne, le nombre, le temps et le mode. Comprendre comment les formes se construisent évite d’avoir à tout apprendre par cœur.',
    blocks: [
      { t: 'h', text: 'Groupes, radical et terminaison' },
      { t: 'p', text: 'Un verbe se compose d’un **radical** (qui porte le sens) et d’une **terminaison** (qui porte la personne, le temps, le mode). Dans *chantons*, le radical est *chant-* et la terminaison *-ons*. On classe les verbes en trois groupes.' },
      { t: 'table', head: ['Groupe', 'Critère', 'Exemples'], rows: [
        ['1er', 'infinitif en -er (sauf aller)', 'chanter, manger'],
        ['2e', 'infinitif en -ir, participe présent en -issant', 'finir (finissant), grandir'],
        ['3e', 'tous les autres, dont aller', 'aller, partir, prendre, voir'],
      ] },

      { t: 'h', text: 'Modes et temps' },
      { t: 'list', items: [
        '**Modes personnels** (verbe accompagné d’un sujet) : indicatif, subjonctif, impératif et conditionnel (selon les grammaires, le conditionnel est classé comme un mode ou comme un temps de l’indicatif).',
        '**Modes impersonnels** : infinitif et participe (le gérondif est le participe présent précédé de *en*).',
        '**Temps simples** : un seul mot (*je chante*). **Temps composés** : auxiliaire + participe passé (*j’ai chanté*).',
      ] },
      { t: 'p', text: 'Chaque temps composé se forme avec l’auxiliaire conjugué au temps simple correspondant : **passé composé** = présent + participe passé ; **plus-que-parfait** = imparfait ; **futur antérieur** = futur ; **passé antérieur** = passé simple ; **conditionnel passé** = conditionnel présent. Les auxiliaires sont **avoir** et **être**. *Être* s’emploie notamment avec les verbes pronominaux et avec des verbes comme *aller, venir, arriver, partir, naître, mourir, tomber*.' },

      { t: 'h', text: 'Quelques valeurs à distinguer' },
      { t: 'list', items: [
        '**Présent** : moment de la parole (*il pleut*), habitude (*je me lève à sept heures*), vérité générale (*la Terre tourne*), récit au présent de narration.',
        '**Imparfait** : action qui dure ou se répète, description, arrière-plan du récit (*il pleuvait*).',
        '**Passé simple** : action brève et achevée, premier plan du récit écrit (*il ouvrit la porte*).',
        '**Futur** : action à venir (*je mangerai*). **Conditionnel présent** : hypothèse, politesse (*je voudrais*), futur dans le passé (*il disait qu’il viendrait*).',
      ] },

      { t: 'example', title: 'Reconnaître temps et valeurs', items: [
        '*Il ouvrit la porte et vit un chat qui dormait.*',
        'ouvrit, vit : passé simple (actions de premier plan) · dormait : imparfait (arrière-plan, description).',
        '*Hier, il pleuvait et nous sommes rentrés.*',
        'pleuvait : imparfait · sommes rentrés : passé composé, auxiliaire être au présent + participe passé accordé avec le sujet.',
        '*Quand tu auras fini, tu viendras.*',
        'auras fini : futur antérieur (action achevée avant une autre) · viendras : futur simple.',
      ] },

      { t: 'trap', text: 'Ne confonds pas futur et conditionnel : *je mangerai* (-rai) et *je mangerais* (-rais) se distinguent à l’oreille par le son final. *Aller* appartient au 3e groupe malgré son infinitif en -er. À l’impératif, les verbes du 1er groupe n’ont pas de -s à la 2e personne du singulier (*mange !*), sauf devant *en* ou *y* (*manges-en*).' },
      { t: 'tip', text: 'Pour identifier un mode ou un temps, remplace la personne : un verbe qu’on peut conjuguer (*je chante, tu chantes*) est à un mode personnel ; l’infinitif et le participe ne varient pas en personne.' },

      { t: 'key', items: [
        'Verbe = radical + terminaison ; trois groupes.',
        'Temps composé = auxiliaire (avoir ou être) + participe passé.',
        'Imparfait : arrière-plan ; passé simple : premier plan.',
        'Futur : -rai, -ras… ; conditionnel : -rais, -rait…',
      ] },
      { t: 'check', q: 'À quel groupe appartient « finir » et pourquoi ?', a: 'Au 2e groupe : infinitif en -ir et participe présent en -issant (finissant).' },
      { t: 'check', q: 'Comment forme-t-on le plus-que-parfait ?', a: 'Avec l’auxiliaire avoir ou être à l’imparfait, suivi du participe passé : « il avait chanté », « elle était partie ».' },
      { t: 'check', q: 'Quel temps pour une action brève de premier plan dans un récit écrit ?', a: 'Le passé simple, par opposition à l’imparfait qui exprime l’arrière-plan.' },
    ],
  },
  {
    id: 'accords',
    title: 'Orthographe grammaticale',
    intro: 'L’orthographe grammaticale repose sur des accords et sur des mots qui se prononcent de la même façon. Chaque règle se vérifie par un test simple.',
    blocks: [
      { t: 'h', text: 'Accords dans le groupe nominal' },
      { t: 'p', text: 'Le déterminant et l’adjectif s’accordent en genre et en nombre avec le nom : *les petites filles curieuses*. Les adjectifs de couleur tirés d’un nom restent invariables (*des robes orange, des yeux marron*) ; les adjectifs de couleur composés aussi (*des rubans bleu clair*).' },

      { t: 'h', text: 'Accord du verbe avec son sujet' },
      { t: 'p', text: 'Le verbe s’accorde avec le **sujet**, même inversé (*Viennent les beaux jours*) ou éloigné (*Les enfants de ma voisine, qui habite en face, jouent dehors*). Repère le sujet avec *c’est… qui*, sans te laisser tromper par un nom proche du verbe. Des sujets reliés par *et* donnent en général un verbe au pluriel.' },

      { t: 'h', text: 'Le participe passé' },
      { t: 'list', items: [
        '**Avec être** : accord avec le sujet (*elles sont arrivées*).',
        '**Avec avoir** : accord avec le COD seulement si ce COD est placé **avant** le verbe (*les pommes que j’ai mangées* ; mais *j’ai mangé les pommes*).',
        '**Employé seul** (sans auxiliaire) : il s’accorde comme un adjectif avec le nom (*des fenêtres fermées*).',
        '**Verbes pronominaux** : le plus souvent, accord avec le COD s’il est placé avant (*elle s’est lavée*, mais *elle s’est lavé les mains*).',
      ] },
      { t: 'tip', text: 'Pour savoir si un participe se termine par -é ou par -er, remplace-le par un verbe du 3e groupe : *vendre / vendu*. Si *vendu* convient, c’est un participe ; si *vendre* convient, c’est un infinitif.' },

      { t: 'h', text: 'Les homophones grammaticaux' },
      { t: 'table', head: ['Homophones', 'Test de remplacement'], rows: [
        ['a / à', 'a = avait ; à = préposition (invariable)'],
        ['et / est', 'est = était'],
        ['son / sont', 'sont = étaient'],
        ['on / ont', 'ont = avaient'],
        ['ou / où', 'ou = ou bien ; où indique le lieu ou le temps'],
        ['ces / ses', 'ses = les siens ; ces = déterminant démonstratif (ces livres-ci)'],
        ['c’est / s’est', 'c’est = cela est ; s’est = s’était'],
        ['leur / leurs', 'devant un verbe, « leur » est invariable (je leur parle) ; devant un nom, déterminant qui prend un s si le nom est pluriel'],
        ['quand / quant / qu’en', 'quand = lorsque ; quant à = en ce qui concerne ; qu’en = que + en'],
      ] },

      { t: 'example', title: 'Justifier un accord', items: [
        '*Les fleurs que Léa a cueillies sont arrivées à la maison.*',
        'cueillies : COD « que » (= les fleurs, féminin pluriel) placé avant « a cueilli » · arrivées : auxiliaire être, accord avec le sujet « les fleurs ».',
        '*Quant à Paul, il a oublié ses clés quand il est parti.*',
        'quant à = en ce qui concerne · a : verbe avoir (avait) · ses : les siens · quand : lorsque.',
      ] },

      { t: 'trap', text: 'Le participe passé employé avec avoir ne s’accorde pas avec le sujet : *les efforts qu’il a faits* (accord avec « que », COD placé avant) mais *il a fait des efforts*. Autre piège : accorder le verbe avec le nom qui le précède immédiatement au lieu du vrai sujet, ou écrire « leurs » devant un verbe.' },

      { t: 'key', items: [
        'Verbe : accord avec le sujet, même inversé ou éloigné.',
        'Participe passé avec être : sujet ; avec avoir : COD placé avant ; seul : comme un adjectif.',
        'Pour un homophone, essaie toujours le remplacement.',
      ] },
      { t: 'check', q: 'Accorde : « Les lettres qu’elle a (écrire) ».', a: '« Les lettres qu’elle a écrites » : le COD « que » (les lettres) est placé avant, le participe prend donc le féminin pluriel.' },
      { t: 'check', q: 'Orthographe : « Ils (son / sont) partis. »', a: '« sont » : on peut le remplacer par « étaient » (ils étaient partis).' },
      { t: 'check', q: 'Dans « Je leur parle », « leur » prend-il un s si on parle à plusieurs personnes ?', a: 'Non : « leur » est ici un pronom personnel placé devant un verbe, il est invariable.' },
    ],
  },
  {
    id: 'lexique',
    title: 'Le lexique',
    intro: 'Le lexique, c’est l’ensemble des mots d’une langue. Au concours, on attend que tu saches expliquer comment un mot est formé, quel sens il porte et à quel registre il appartient.',
    blocks: [
      { t: 'h', text: 'La formation des mots' },
      { t: 'list', items: [
        '**Dérivation** : ajout d’un préfixe ou d’un suffixe à un radical (*défaire*, *lenteur*).',
        '**Composition** : association de deux mots existants (*porte-monnaie*, *chou-fleur*, *portefeuille*).',
        '**Emprunt** : mot pris à une autre langue (*sandwich*, de l’anglais ; *pizza*, de l’italien ; *algèbre*, de l’arabe).',
        '**Troncation** : raccourcissement d’un mot (*prof*, *métro*, *vélo*).',
        '**Siglaison** : mot formé des initiales d’une expression (*SNCF*, qu’on épelle ; *ONU*, qu’on prononce comme un mot, appelé acronyme).',
      ] },
      { t: 'p', text: 'Une **famille de mots** rassemble les mots qui partagent un même radical : *terre, terrain, terrasse, enterrer, atterrir*.' },

      { t: 'h', text: 'Les relations de sens' },
      { t: 'list', items: [
        '**Synonymes** : mots de sens proches, de même nature (*rapide, vite*) ; ils ne sont presque jamais parfaitement interchangeables.',
        '**Antonymes** : mots de sens opposés (*grand, petit*).',
        '**Polysémie** : un mot a plusieurs sens liés (*le pied d’une personne, d’une table, d’une montagne*).',
        '**Homonymie** : mots de même prononciation (homophones : *mer, mère, maire*) ou de même orthographe (homographes) mais de sens différents.',
      ] },
      { t: 'p', text: 'Un mot est employé au **sens propre** quand il garde son sens premier (*dévorer un steak*) et au **sens figuré** quand il est employé par analogie (*dévorer un livre*).' },

      { t: 'h', text: 'Champs et registres' },
      { t: 'p', text: 'Le **champ lexical** est l’ensemble des mots d’un texte qui se rapportent à un même thème, toutes natures confondues (*mer, vague, navire, voile* pour la navigation). Le **champ sémantique** est l’ensemble des sens d’un mot polysémique. Les **registres de langue** se distinguent en familier (*bagnole*), courant (*voiture*) et soutenu (*automobile*).' },

      { t: 'h', text: 'Étymologie latine et grecque' },
      { t: 'table', head: ['Racine', 'Sens', 'Exemples'], rows: [
        ['latin aqua', 'eau', 'aquatique, aquarium'],
        ['latin scribere', 'écrire', 'inscription, manuscrit'],
        ['grec phone', 'voix, son', 'téléphone, phonétique'],
        ['grec graphein', 'écrire', 'télégraphe, orthographe'],
        ['grec bios', 'vie', 'biologie, biographie'],
        ['grec chronos', 'temps', 'chronomètre, chronologie'],
      ] },
      { t: 'p', text: 'Un même mot latin a parfois donné deux mots français : un mot hérité par la voie populaire et un mot emprunté plus tard par les lettrés (*frêle* et *fragile*).' },

      { t: 'example', title: 'Analyser la formation d’un mot', items: [
        '*reconstruction*',
        'Préfixe re- (de nouveau) + radical construct- (construire) + suffixe -ion : mot dérivé.',
        '*malheureusement*',
        'Préfixe mal- + adjectif heureux (féminin heureuse) + suffixe -ment : adverbe formé par dérivation.',
      ] },

      { t: 'trap', text: 'Ne confonds pas champ lexical et champ sémantique, ni polysémie et homonymie : dans la polysémie, les sens restent liés (*pied*) ; dans l’homonymie, il s’agit de mots distincts qui se ressemblent (*mer, mère*). Un synonyme n’est presque jamais interchangeable dans tous les contextes.' },

      { t: 'key', items: [
        'Cinq procédés de formation : dérivation, composition, emprunt, troncation, siglaison.',
        'Champ lexical = mots d’un thème ; champ sémantique = sens d’un mot.',
        'Trois registres : familier, courant, soutenu.',
      ] },
      { t: 'check', q: 'Que signifie la racine grecque « graphein » ? Donne deux mots.', a: 'Elle signifie écrire : télégraphe, orthographe, photographie…' },
      { t: 'check', q: 'Quelle est la différence entre sens propre et sens figuré ?', a: 'Le sens propre est le sens premier du mot ; le sens figuré en dérive par comparaison (« dévorer un livre »).' },
    ],
  },
  {
    id: 'lecture',
    title: 'Phonologie et apprentissage de la lecture',
    intro: 'Apprendre à lire, c’est relier ce qu’on entend à ce qu’on voit, puis comprendre ce qu’on a décodé. Ces notions sont indispensables pour enseigner la lecture au cycle 2.',
    blocks: [
      { t: 'h', text: 'Phonème, graphème, syllabe' },
      { t: 'p', text: 'Le **phonème** est la plus petite unité sonore qui distingue deux mots (*pain* et *bain* ne diffèrent que par /p/ et /b/). Le **graphème** est la plus petite unité écrite qui note un phonème : une lettre ou un groupe de lettres (*ou, ch, an, eau*). La **syllabe orale** est un groupe de sons prononcé en une émission de voix (*cho-co-lat*, trois syllabes) ; la syllabe écrite sert à couper un mot en fin de ligne.' },
      { t: 'table', head: ['Mot', 'Phonèmes', 'Graphèmes'], rows: [
        ['chat', '2 : /ʃ/ /a/', 'ch, a (et un t muet)'],
        ['fleur', '4 : /f/ /l/ /œ/ /r/', 'f, l, eu, r'],
        ['oiseau', '4 : /w/ /a/ /z/ /o/', 'oi, s, eau (3 graphèmes pour 4 phonèmes)'],
      ] },

      { t: 'h', text: 'Le principe alphabétique et la conscience phonologique' },
      { t: 'p', text: 'Le **principe alphabétique** : les lettres représentent les sons de la langue. La **conscience phonologique** est la capacité à repérer et manipuler les unités sonores (syllabes, rimes, phonèmes) sans écrire. Les **correspondances graphèmes-phonèmes** ne sont pas biunivoques en français : un phonème peut s’écrire de plusieurs façons (/o/ : *o, au, eau*) et un graphème peut noter des sons différents (*s* dans *soleil* et dans *rose*).' },

      { t: 'h', text: 'Les deux voies de lecture' },
      { t: 'list', items: [
        '**Voie indirecte (assemblage)** : on convertit les graphèmes en phonèmes puis on assemble. Elle permet de lire un mot nouveau.',
        '**Voie directe (adressage)** : on reconnaît le mot globalement, sans le décoder. Elle suppose que le mot soit déjà mémorisé et permet de lire vite, y compris des mots irréguliers (*monsieur*).',
      ] },

      { t: 'h', text: 'Un modèle simple de la lecture' },
      { t: 'p', text: 'Selon le **modèle simple de la lecture** (Gough et Tunmer), la compréhension en lecture résulte du produit **décodage × compréhension du langage oral**. Si l’un des deux facteurs est nul, la compréhension en lecture l’est aussi. La **fluence** (lire avec exactitude, rapidité et expression) montre que le décodage est devenu automatique et libère l’attention pour comprendre.' },

      { t: 'example', title: 'Compter les sons', items: [
        '*Combien de phonèmes dans « bateau » ?*',
        'Quatre : /b/ /a/ /t/ /o/, notés par les graphèmes b, a, t, eau.',
        '*Combien de syllabes dans « maman » ?*',
        'Deux : ma-man.',
      ] },

      { t: 'trap', text: 'On ne compte pas les phonèmes en comptant les lettres : *chat* a quatre lettres mais deux phonèmes, *taxi* a quatre lettres et cinq phonèmes en comptant /ks/. Ne confonds pas non plus la lettre (écrite), le phonème (oral) et le graphème (unité écrite qui note un phonème).' },
      { t: 'tip', text: 'Pour compter les phonèmes d’un mot, prononce-le lentement sans penser à son orthographe et compte les sons distincts.' },

      { t: 'h', text: 'Ce que cela implique pour l’enseignant' },
      { t: 'list', items: [
        'Enseigner de manière explicite, progressive et systématique les correspondances graphèmes-phonèmes.',
        'Entraîner la conscience phonologique et l’écriture de mots.',
        'Faire lire souvent à voix haute pour installer la fluence.',
        'Travailler la compréhension dès le début : vocabulaire, textes lus à l’oral par l’enseignant, questionnement.',
      ] },

      { t: 'key', items: [
        'Phonème = son ; graphème = écrit ; syllabe = groupe de sons.',
        'Lecture = décodage × compréhension du langage oral.',
        'Assemblage pour les mots nouveaux, adressage pour les mots connus.',
      ] },
      { t: 'check', q: 'Dans « oiseau », combien y a-t-il de phonèmes et de graphèmes ?', a: 'Quatre phonèmes (/w/ /a/ /z/ /o/) et trois graphèmes (oi, s, eau).' },
      { t: 'check', q: 'Pourquoi un élève très bon décodeur peut-il ne pas comprendre un texte ?', a: 'Parce que la lecture est le produit du décodage et de la compréhension du langage : un vocabulaire pauvre ou une mauvaise compréhension orale limite la compréhension, même avec un décodage parfait.' },
    ],
  },
  {
    id: 'analyse-texte',
    title: 'Analyser un texte',
    intro: 'Analyser un texte, c’est repérer qui parle, comment les paroles sont rapportées et par quels procédés l’auteur produit des effets sur le lecteur.',
    blocks: [
      { t: 'h', text: 'L’énonciation' },
      { t: 'p', text: 'L’énonciation répond à : **qui** parle, **à qui**, **quand**, **où** ? Un discours est ancré dans la situation d’énonciation (*je, tu, ici, maintenant*, présent). Un récit s’en détache (3e personne, passé simple, imparfait). Distingue l’**auteur** (personne réelle) du **narrateur** (voix qui raconte) : le narrateur peut être un personnage de l’histoire (récit à la 1re personne) ou rester extérieur.' },

      { t: 'h', text: 'Le point de vue narratif' },
      { t: 'list', items: [
        '**Interne** : on perçoit l’histoire à travers un personnage (ses sensations, ses pensées).',
        '**Externe** : le narrateur ne décrit que ce qui se voit et s’entend, sans accès aux pensées.',
        '**Omniscient** : le narrateur sait tout, y compris les pensées de tous les personnages.',
      ] },

      { t: 'h', text: 'Les discours rapportés' },
      { t: 'table', head: ['Discours', 'Marques', 'Exemple'], rows: [
        ['Direct', 'guillemets ou tirets, verbe introducteur, paroles telles quelles', 'Il dit : « Je viens demain. »'],
        ['Indirect', 'subordonnée, pas de guillemets, pronoms, temps et indicateurs adaptés', 'Il dit qu’il viendra le lendemain.'],
        ['Indirect libre', 'ni verbe introducteur ni guillemets ; mêle voix du narrateur et du personnage', 'Elle sortit. Comment pouvait-il lui dire cela ?'],
      ] },

      { t: 'h', text: 'Les figures de style' },
      { t: 'list', items: [
        '**Comparaison** : rapproche deux éléments avec un outil de comparaison (*rapide comme l’éclair*).',
        '**Métaphore** : comparaison sans outil (*cet homme est un lion*).',
        '**Personnification** : donner des traits humains à un animal, une chose, une idée (*la lune sourit*).',
        '**Hyperbole** : exagération (*je te l’ai répété mille fois*).',
        '**Litote** : dire moins pour faire entendre plus (*ce n’est pas mauvais* pour *c’est très bon*).',
        '**Euphémisme** : atténuer une réalité pénible (*il nous a quittés* pour *il est mort*).',
        '**Antithèse** : opposition de deux idées (*Elle rit le jour, elle pleure la nuit*).',
        '**Oxymore** : association de deux mots contradictoires (*un silence assourdissant*).',
        '**Anaphore** : répétition d’un mot en début de phrases ou de vers successifs.',
        '**Gradation** : énumération en intensité croissante ou décroissante (*il a peur, il tremble, il hurle*).',
      ] },

      { t: 'example', title: 'Identifier un procédé', items: [
        '*Le vent hurlait dans la nuit.*',
        'Personnification : le verbe « hurler » prête une voix humaine ou animale au vent.',
        '*Cet homme est un lion.*',
        'Métaphore : l’homme est assimilé à un lion (courage, force) sans outil de comparaison. Avec « comme » (*fort comme un lion*), ce serait une comparaison.',
        '*Il dit : « Je pars demain. » / Il dit qu’il partait le lendemain.*',
        'Discours direct, puis discours indirect : les pronoms, le temps du verbe et l’indicateur de temps changent.',
      ] },

      { t: 'trap', text: 'Ne confonds pas auteur et narrateur, ni le point de vue (interne, externe, omniscient) et la personne grammaticale. Autre piège : repérer une figure sans l’interpréter. Nommer une métaphore ne suffit pas : il faut dire ce qu’elle apporte au texte.' },

      { t: 'h', text: 'Repères pour la réflexion rédigée' },
      { t: 'steps', items: [
        'Lis le texte plusieurs fois, crayon en main, et note ce qui t’interpelle (voix, temps verbaux, procédés).',
        'Dégage une idée directrice par paragraphe, que tu énonces dans une phrase claire.',
        'Appuie chaque idée sur une citation courte du texte, puis commente-la : procédé, sens, effet sur le lecteur.',
        'Organise ta réponse en paragraphes distincts, avec une introduction et une conclusion brèves.',
        'Relis-toi pour contrôler l’orthographe et la syntaxe : la correction de la langue compte.',
      ] },

      { t: 'key', items: [
        'Énonciation : qui, à qui, quand, où.',
        'Trois points de vue : interne, externe, omniscient.',
        'Trois discours rapportés : direct, indirect, indirect libre.',
        'Repérer une figure, c’est bien ; en interpréter l’effet, c’est mieux.',
      ] },
      { t: 'check', q: 'Quelle différence entre une comparaison et une métaphore ?', a: 'La comparaison comporte un outil de comparaison (comme, tel, ressembler) ; la métaphore n’en comporte pas.' },
      { t: 'check', q: 'Quelle est la marque du discours indirect libre ?', a: 'Il n’y a ni verbe introducteur ni guillemets : les paroles ou pensées du personnage se mêlent à la narration (ex : « Comment pouvait-il lui dire cela ? »).' },
      { t: 'check', q: 'Dans « une obscure clarté », quelle figure ?', a: 'Un oxymore : deux mots de sens contraires sont associés.' },
    ],
  },
];
