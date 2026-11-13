/* Cours de sciences et technologie. Format d'un chapitre : voir js/cours/francais.js. */
COURS.sciences = [
  {
    id: 'matiere',
    title: 'La matière et ses états',
    intro: 'Tout ce qui nous entoure est de la matière, qui se présente sous trois états : solide, liquide, gazeux. Comprendre comment elle change d’état, se mélange et se conserve est la base de la physique-chimie à l’école.',
    blocks: [
      { t: 'h', text: 'Les trois états' },
      { t: 'table', head: ['État', 'Forme', 'Volume', 'Compressible ?'], rows: [
        ['Solide', 'Propre, qui ne change pas seule', 'Propre', 'Non'],
        ['Liquide', 'Celle du récipient ; la surface libre est plane et horizontale', 'Propre (il s’écoule)', 'Quasiment pas'],
        ['Gaz', 'Celle du récipient, qu’il remplit entièrement', 'Occupe tout l’espace disponible', 'Oui'],
      ] },
      { t: 'p', text: 'Une poudre (sable, farine) est faite de petits grains solides : elle peut s’écouler comme un liquide, mais elle reste un solide. Un gaz comme l’air est invisible, mais il est bien de la matière : il a une masse et on peut le comprimer dans une seringue fermée.' },

      { t: 'h', text: 'Les changements d’état' },
      { t: 'table', head: ['Changement', 'Passage'], rows: [
        ['Fusion', 'solide → liquide'],
        ['Solidification', 'liquide → solide'],
        ['Vaporisation (ébullition ou évaporation)', 'liquide → gaz'],
        ['Liquéfaction (condensation liquide)', 'gaz → liquide'],
        ['Sublimation', 'solide → gaz'],
        ['Condensation solide', 'gaz → solide'],
      ] },
      { t: 'p', text: 'À la pression atmosphérique normale, l’eau fond à **0 °C** et bout à **100 °C**. Pendant qu’un corps pur change d’état, sa température reste constante : un mélange d’eau et de glace reste à 0 °C tant qu’il reste de la glace.' },
      { t: 'example', title: 'Un verre d’eau glacée « qui transpire »', items: [
        'Le verre froid se couvre de gouttelettes. Elles ne traversent pas le verre : c’est la vapeur d’eau de l’air de la pièce qui se liquéfie au contact de la paroi froide.',
        'Preuve : le phénomène se produit à l’extérieur du verre, même si le verre est parfaitement étanche.',
      ] },

      { t: 'h', text: 'Masse et volume' },
      { t: 'p', text: 'La **masse** se mesure avec une balance (en g, kg) ; le **volume** mesure la place occupée (en mL, L, cm³). Ce sont deux grandeurs différentes : un kilo de plumes et un kilo de plomb ont la même masse, mais pas le même volume.' },
      { t: 'p', text: 'Pour l’eau, retiens que **1 L d’eau a une masse d’environ 1 kg** (1 mL pèse environ 1 g). Cette équivalence est propre à l’eau : 1 L d’huile ou de sable ne pèse pas 1 kg.' },
      { t: 'example', title: 'La masse se conserve, pas le volume', items: [
        'Tu pèses un gobelet contenant des glaçons, tu le laisses fondre, tu repèses : la masse est identique. Rien n’a été perdu ni ajouté.',
        'En revanche, le volume change : l’eau qui gèle occupe un peu plus de place (environ 10 % de plus, valeur arrondie). C’est pourquoi une bouteille pleine éclate au congélateur, et pourquoi les glaçons flottent.',
      ] },

      { t: 'h', text: 'Mélanges et dissolution' },
      { t: 'p', text: 'Un **mélange** réunit plusieurs substances. Il est **homogène** si l’on ne distingue qu’un seul aspect à l’œil nu (eau sucrée, eau salée), **hétérogène** si l’on distingue plusieurs constituants (eau et huile, eau et sable, eau et sirop non mélangé).' },
      { t: 'p', text: 'Quand le sucre ou le sel « disparaît » dans l’eau, on dit qu’il se **dissout** : l’eau est le solvant, le sucre le soluté. La dissolution a une limite : au-delà d’une certaine quantité, le solide ne se dissout plus et reste au fond (la solution est **saturée**).' },
      { t: 'example', title: 'Peser une dissolution', items: [
        'Pose sur une balance un verre contenant 200 g d’eau et un sucre de 5 g à côté : 205 g au total.',
        'Verse le sucre dans l’eau, remue : le sucre n’est plus visible, mais la balance indique toujours 205 g. La masse totale se conserve.',
      ] },

      { t: 'h', text: 'Séparer les constituants d’un mélange' },
      { t: 'list', items: [
        '**Décantation** : on laisse reposer ; le solide le plus lourd se dépose au fond (boue dans l’eau), puis on verse doucement le liquide.',
        '**Filtration** : on passe le mélange dans un filtre (papier, café). Elle retient les grains solides, mais pas ce qui est dissous.',
        '**Évaporation** : on chauffe ou on laisse sécher ; l’eau part dans l’air et le solide dissous (sel) reste. On récupère le sel, pas l’eau.',
      ] },
      { t: 'tip', text: 'Pour une eau sale contenant aussi du sel, l’ordre logique est : décantation, filtration (les grains), puis évaporation (le sel dissous).' },

      { t: 'trap', text: 'Conceptions fréquentes : « le sucre a disparu, donc il n’y a plus rien » (faux : la masse se conserve et on retrouve le goût sucré) ; « la glace fondue pèse moins » (faux) ; « la filtration permet de retirer le sel de l’eau salée » (faux : le sel dissous traverse le filtre) ; « les bulles de l’eau qui bout sont de l’air » (faux : c’est de la vapeur d’eau).' },

      { t: 'key', items: [
        'Trois états : solide (forme propre), liquide (prend la forme du récipient), gaz (remplit tout l’espace).',
        'Fusion, solidification, vaporisation, liquéfaction, sublimation : eau à 0 °C et 100 °C.',
        '1 L d’eau a une masse d’environ 1 kg ; la masse se conserve lors d’un changement d’état ou d’une dissolution.',
        'Homogène : un seul aspect ; hétérogène : plusieurs. Décantation, filtration, évaporation séparent selon le cas.',
      ] },
      { t: 'check', q: 'Comment appelle-t-on le passage de l’état liquide à l’état gazeux ?', a: 'La vaporisation (par ébullition à 100 °C pour l’eau, ou par évaporation à plus basse température).' },
      { t: 'check', q: 'Peut-on séparer le sucre de l’eau sucrée par filtration ?', a: 'Non : le sucre est dissous et traverse le filtre. On peut le récupérer par évaporation de l’eau.' },
      { t: 'check', q: 'On dissout 20 g de sel dans 500 g d’eau. Quelle est la masse de l’eau salée obtenue ?', a: '520 g : la masse se conserve lors d’une dissolution.' },
    ],
  },

  {
    id: 'vivant',
    title: 'Le vivant, sa diversité et sa classification',
    intro: 'Les êtres vivants partagent des caractéristiques communes mais présentent une grande diversité. On les range en groupes emboîtés d’après les attributs qu’ils possèdent.',
    blocks: [
      { t: 'h', text: 'Qu’est-ce qui caractérise le vivant ?' },
      { t: 'p', text: 'Un être vivant naît, se nourrit, grandit, se reproduit et meurt. Il échange en permanence de la matière avec son milieu : il prélève ce dont il a besoin et rejette des déchets. Les plantes font aussi partie du vivant, bien qu’elles ne se déplacent pas.' },
      { t: 'p', text: 'Un objet inerte peut bouger (une voiture) ou « grandir » (un cristal) sans être vivant : le mouvement ou la croissance ne suffisent pas, c’est l’ensemble des caractéristiques qui compte.' },

      { t: 'h', text: 'Classer : des groupes emboîtés' },
      { t: 'p', text: 'Classer, c’est regrouper les êtres vivants d’après des **attributs qu’ils possèdent en commun**. Chaque groupe est inclus dans un groupe plus vaste, comme des poupées russes.' },
      { t: 'example', title: 'Une classification emboîtée', items: [
        'Les **vertébrés** ont un squelette interne avec une colonne vertébrale. Parmi eux, les **mammifères** ont des poils et des mamelles, les **oiseaux** des plumes et un bec.',
        'Les **arthropodes** ont un squelette externe et des pattes articulées. Parmi eux, les **insectes** ont six pattes et le corps en trois parties (tête, thorax, abdomen) ; les arachnides (araignées) ont huit pattes.',
        'Un chat est donc un mammifère, donc un vertébré, donc un animal.',
      ] },
      { t: 'example', title: 'La chauve-souris et la baleine', items: [
        'La chauve-souris vole, mais elle a des poils et allaite ses petits : c’est un mammifère, pas un oiseau.',
        'La baleine vit dans l’eau, mais elle a des mamelles et respire par des poumons : c’est aussi un mammifère, pas un poisson.',
        'Le milieu de vie ou le mode de déplacement ne sont pas de bons critères : on classe sur des attributs précis.',
      ] },
      { t: 'trap', text: 'On ne classe pas d’après ce que les êtres n’ont pas. « Sans pattes » ou « invertébrés » ne forment pas un groupe cohérent : un serpent, un ver et une méduse n’ont presque rien en commun. Le critère d’un groupe doit être un attribut partagé, pas une absence.' },

      { t: 'h', text: 'Développement et reproduction' },
      { t: 'p', text: 'La **reproduction sexuée** repose sur la rencontre de cellules reproductrices mâle et femelle (la **fécondation**), qui donne un œuf. Chez les animaux, certains sont **ovipares** (le développement se fait dans un œuf pondu : oiseaux, insectes) et d’autres **vivipares** (le petit se développe dans le corps de la mère : la plupart des mammifères). Chez les plantes à fleurs, la pollinisation conduit à la formation de graines.' },
      { t: 'p', text: 'Certains animaux subissent une **métamorphose** : le jeune ne ressemble pas à l’adulte.' },
      { t: 'example', title: 'Deux métamorphoses', items: [
        'Papillon : œuf, chenille (larve), chrysalide, papillon adulte.',
        'Grenouille : œuf, têtard (qui respire avec des branchies et nage), puis grenouille adulte avec poumons et pattes.',
      ] },

      { t: 'h', text: 'Relations alimentaires et écosystème' },
      { t: 'p', text: 'Un **écosystème** réunit un milieu (le biotope : sol, eau, climat) et l’ensemble des êtres vivants qui y vivent (la biocénose), liés par des relations, notamment alimentaires.' },
      { t: 'list', items: [
        '**Producteurs** : les végétaux verts fabriquent leur propre matière à partir de lumière, d’eau, de sels minéraux et de dioxyde de carbone.',
        '**Consommateurs** : les animaux se nourrissent d’autres êtres vivants (herbivores, carnivores, omnivores).',
        '**Décomposeurs** : champignons et bactéries dégradent les êtres morts et les déchets, et libèrent des sels minéraux qui servent aux végétaux.',
      ] },
      { t: 'p', text: 'Une **chaîne alimentaire** relie ces êtres : *salade → escargot → grive*. La flèche signifie « est mangé par ». Plusieurs chaînes imbriquées forment un **réseau alimentaire**, car un animal a en général plusieurs aliments et plusieurs prédateurs.' },
      { t: 'tip', text: 'Dans une chaîne alimentaire, la flèche va de l’être mangé vers celui qui le mange, c’est le sens du transfert de matière.' },

      { t: 'trap', text: 'Conception fréquente : « les plantes se nourrissent de la terre ». En réalité, elles absorbent de l’eau et des sels minéraux par les racines, mais fabriquent leur matière en grande partie grâce à la lumière et au dioxyde de carbone de l’air. Autre erreur : croire que la flèche d’une chaîne alimentaire indique « qui mange qui » dans le sens inverse.' },

      { t: 'key', items: [
        'Vivant : naître, se nourrir, grandir, se reproduire, mourir.',
        'Classer, c’est regrouper selon des attributs partagés, en groupes emboîtés.',
        'Jamais de critère par absence ; le milieu de vie ne suffit pas (baleine, chauve-souris).',
        'Producteurs, consommateurs, décomposeurs ; la flèche signifie « est mangé par ».',
      ] },
      { t: 'check', q: 'Pourquoi la chauve-souris est-elle un mammifère et non un oiseau ?', a: 'Elle a des poils et allaite ses petits (mamelles), alors que les oiseaux ont des plumes. Voler n’est pas un critère de classement.' },
      { t: 'check', q: 'Dans la chaîne « herbe → lapin → renard », qui est le producteur et que signifie la flèche ?', a: 'L’herbe est le producteur. La flèche signifie « est mangé par ».' },
      { t: 'check', q: 'Que devient un animal mort dans un écosystème ?', a: 'Il est dégradé par les décomposeurs (champignons, bactéries) ; la matière est restituée au sol sous forme de sels minéraux réutilisables par les végétaux.' },
    ],
  },

  {
    id: 'corps-humain',
    title: 'Le corps humain et la santé',
    intro: 'Nos organes fonctionnent ensemble : ils transforment les aliments, échangent des gaz avec l’air, distribuent le tout par le sang et nous permettent de bouger. Un mode de vie sain préserve ce fonctionnement.',
    blocks: [
      { t: 'h', text: 'La digestion et l’absorption' },
      { t: 'p', text: 'Les aliments sont de gros morceaux : ils doivent être transformés en éléments très petits, les **nutriments**, qui peuvent passer dans le sang. C’est la **digestion**.' },
      { t: 'steps', items: [
        '**Bouche** : les dents broient, la salive humidifie et commence la transformation.',
        '**Œsophage** : un tube musclé qui pousse les aliments vers l’estomac par contractions.',
        '**Estomac** : les aliments y sont brassés avec des liquides digestifs.',
        '**Intestin grêle** : la digestion s’achève et les nutriments traversent sa paroi pour passer dans le sang : c’est l’**absorption**.',
        '**Gros intestin** : de l’eau est absorbée ; les déchets non digérés sont évacués par l’anus.',
      ] },
      { t: 'trap', text: 'Les aliments ne passent pas entiers dans le sang : seuls les nutriments, issus de leur transformation, traversent la paroi de l’intestin grêle. Les boissons ne vont pas non plus « dans les poumons » : l’air et les aliments suivent deux voies distinctes, un petit clapet (l’épiglotte) protège les voies respiratoires.' },

      { t: 'h', text: 'La respiration' },
      { t: 'p', text: 'L’air entre par le nez ou la bouche, passe par la trachée, les bronches, puis atteint les **alvéoles** des poumons. À travers leur fine paroi se font les **échanges gazeux** : le **dioxygène** de l’air passe dans le sang, le **dioxyde de carbone** (CO₂) fait le chemin inverse et est rejeté à l’expiration.' },
      { t: 'p', text: 'Les poumons ne se gonflent pas seuls : le diaphragme et les muscles de la cage thoracique agrandissent la cage, l’air entre ; ils se relâchent, l’air sort.' },
      { t: 'example', title: 'L’air inspiré et l’air expiré', items: [
        'Air inspiré : environ 21 % de dioxygène et très peu de CO₂ (valeurs arrondies).',
        'Air expiré : environ 16 % de dioxygène et environ 4 % de CO₂. L’air expiré est donc appauvri en dioxygène et enrichi en CO₂ : on n’expire pas de l’air « sans oxygène ».',
        'On met en évidence le CO₂ de l’air expiré en soufflant dans de l’eau de chaux avec une paille : elle se trouble.',
      ] },

      { t: 'h', text: 'La circulation sanguine' },
      { t: 'p', text: 'Le **cœur**, un muscle creux, fait circuler le sang dans des vaisseaux. Les **artères** emportent le sang loin du cœur, les **veines** le ramènent vers le cœur, et les **capillaires**, très fins, permettent les échanges avec les organes.' },
      { t: 'p', text: 'Le sang apporte aux organes le dioxygène et les nutriments, et reprend le CO₂ et des déchets. Il passe deux fois par le cœur à chaque tour : la **petite circulation** (cœur, poumons, cœur) et la **grande circulation** (cœur, organes, cœur).' },
      { t: 'trap', text: 'Une artère ne transporte pas toujours du sang riche en dioxygène : l’artère qui va du cœur aux poumons transporte du sang pauvre en dioxygène. Le critère est le sens par rapport au cœur, pas le contenu.' },

      { t: 'h', text: 'Le mouvement' },
      { t: 'p', text: 'Le squelette soutient le corps et protège des organes (le crâne protège le cerveau, la cage thoracique le cœur et les poumons). Les os sont reliés entre eux par des **articulations**, maintenues par des ligaments. Les **muscles** sont attachés aux os par des **tendons**.' },
      { t: 'p', text: 'Un muscle ne sait que se contracter (se raccourcir) : il tire sur l’os, jamais il ne pousse. Pour plier puis tendre le bras, deux muscles travaillent en opposition : le biceps plie le coude, le triceps l’étend.' },
      { t: 'example', title: 'Observer ses muscles', items: [
        'Pose la main sur le biceps, puis plie le bras en serrant le poing : le muscle durcit et gonfle car il se raccourcit.',
        'Tends ensuite le bras : le biceps se relâche et c’est le muscle de l’arrière du bras qui travaille.',
      ] },

      { t: 'h', text: 'Hygiène de vie' },
      { t: 'list', items: [
        '**Alimentation** variée et équilibrée : fruits, légumes, féculents, protéines, avec modération pour le sucre, le sel et les graisses ; boire de l’eau.',
        '**Activité physique** régulière, qui entretient le cœur, les muscles et les os.',
        '**Sommeil** suffisant : les enfants en ont nettement besoin de plus que les adultes.',
        '**Hygiène** : lavage des mains, brossage des dents.',
      ] },

      { t: 'key', items: [
        'Digestion : bouche, œsophage, estomac, intestin grêle (absorption), gros intestin.',
        'Poumons : le dioxygène passe dans le sang, le CO₂ est rejeté.',
        'Artères : du cœur vers les organes ; veines : retour au cœur.',
        'Muscles attachés aux os par les tendons ; un muscle tire, il ne pousse pas.',
      ] },
      { t: 'check', q: 'Où se fait l’absorption des nutriments dans le sang ?', a: 'Principalement dans l’intestin grêle, à travers sa paroi.' },
      { t: 'check', q: 'Quel gaz l’organisme rejette-t-il à l’expiration en plus grande quantité que dans l’air inspiré ?', a: 'Le dioxyde de carbone (CO₂).' },
      { t: 'check', q: 'Quelle est la différence entre un tendon et une articulation ?', a: 'Le tendon relie un muscle à un os ; l’articulation est la zone où deux os se rejoignent et peuvent bouger l’un par rapport à l’autre.' },
    ],
  },

  {
    id: 'terre-univers',
    title: 'La Terre dans l’Univers',
    intro: 'La Terre est une planète parmi huit qui tournent autour du Soleil. Ses deux mouvements, la rotation sur elle-même et la révolution autour du Soleil, expliquent les jours, les années et les saisons.',
    blocks: [
      { t: 'h', text: 'Le système solaire' },
      { t: 'p', text: 'Le **Soleil** est une étoile : il produit lui-même de la lumière. Autour de lui tournent huit planètes, de la plus proche à la plus éloignée : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Les quatre premières sont rocheuses (telluriques), les quatre autres sont des planètes géantes. Les planètes ne produisent pas de lumière : elles renvoient celle du Soleil. La **Lune** est le satellite naturel de la Terre.' },

      { t: 'h', text: 'Rotation, jour et nuit' },
      { t: 'p', text: 'La Terre tourne sur elle-même, autour de son axe, en environ **24 heures**. À tout moment, la moitié de la Terre tournée vers le Soleil est éclairée (jour), l’autre est dans l’ombre (nuit). Le Soleil ne tourne pas autour de la Terre : son lever et son coucher sont un mouvement apparent dû à la rotation de la Terre.' },
      { t: 'example', title: 'Modéliser avec une lampe et un globe', items: [
        'Dans une pièce sombre, une lampe représente le Soleil et un globe la Terre. Une moitié du globe est éclairée en permanence.',
        'En faisant tourner lentement le globe, un point repéré (la France) passe de la zone éclairée à la zone sombre : c’est l’alternance jour et nuit.',
      ] },
      { t: 'example', title: 'Ombres et position du Soleil', items: [
        'L’ombre d’un bâton planté droit (un gnomon) est toujours à l’opposé du Soleil.',
        'Le matin et le soir, le Soleil est bas : l’ombre est longue. Au milieu de la journée, le Soleil est au plus haut : l’ombre est la plus courte. Le moment où le Soleil est le plus haut s’appelle le midi solaire ; il ne coïncide pas forcément avec 12 h à la montre.',
      ] },

      { t: 'h', text: 'Révolution, année et saisons' },
      { t: 'p', text: 'La Terre tourne aussi autour du Soleil : c’est la **révolution**, qui dure environ **365 jours et un quart**. D’où une année bissextile de 366 jours tous les quatre ans pour rattraper ce quart de jour.' },
      { t: 'p', text: 'Son axe de rotation est **incliné** d’environ 23,5° et garde la même direction pendant toute la révolution. Selon l’endroit de l’orbite, l’hémisphère nord ou l’hémisphère sud est davantage tourné vers le Soleil : l’été, les jours sont plus longs, le Soleil monte plus haut dans le ciel, ses rayons arrivent plus directement et chauffent davantage. Les saisons des deux hémisphères sont opposées.' },
      { t: 'trap', text: 'Les saisons ne sont pas dues à la distance Terre-Soleil. La Terre est même un peu plus proche du Soleil en janvier qu’en juillet, alors que c’est l’hiver dans l’hémisphère nord. C’est l’inclinaison de l’axe qui est responsable.' },

      { t: 'h', text: 'La Lune : phases et éclipses' },
      { t: 'p', text: 'La Lune tourne autour de la Terre en un peu moins d’un mois. Elle est toujours éclairée sur la moitié tournée vers le Soleil, mais, selon sa position, nous en voyons une partie plus ou moins grande : ce sont les **phases** (nouvelle lune, premier quartier, pleine lune, dernier quartier). Le cycle complet dure environ 29,5 jours.' },
      { t: 'list', items: [
        '**Éclipse de Soleil** : la Lune se place entre le Soleil et la Terre, et masque le Soleil. Elle a lieu à la nouvelle lune.',
        '**Éclipse de Lune** : la Terre se place entre le Soleil et la Lune, et la Lune entre dans l’ombre de la Terre. Elle a lieu à la pleine lune.',
      ] },
      { t: 'p', text: 'Il n’y a pas d’éclipse à chaque lunaison, car l’orbite de la Lune est légèrement inclinée : les trois astres ne sont alignés que de temps en temps.' },
      { t: 'trap', text: 'Les phases de la Lune ne sont pas dues à l’ombre de la Terre. L’ombre de la Terre sur la Lune ne se produit que lors d’une éclipse de Lune, phénomène rare.' },

      { t: 'h', text: 'Volcans et séismes' },
      { t: 'p', text: 'L’enveloppe externe de la Terre est découpée en grandes plaques rigides qui se déplacent très lentement. À leurs frontières, ces mouvements accumulent des contraintes : quand une roche se rompt brutalement, c’est un **séisme**. Un **volcan** est une ouverture par laquelle du **magma** venu de l’intérieur de la Terre remonte et sort sous forme de **lave**, de cendres et de gaz lors d’une éruption. Volcans et séismes se concentrent souvent aux frontières de plaques.' },

      { t: 'key', items: [
        'Rotation en environ 24 h : jour et nuit. Révolution en environ 365,25 jours : année.',
        'Saisons : inclinaison de l’axe (environ 23,5°), pas distance au Soleil.',
        'Phases de la Lune : Soleil, Lune, Terre vus sous différents angles ; éclipses : alignement.',
        'Ombre : à l’opposé du Soleil, la plus courte quand il est au plus haut.',
      ] },
      { t: 'check', q: 'Pourquoi fait-il plus chaud en été qu’en hiver dans l’hémisphère nord ?', a: 'À cause de l’inclinaison de l’axe : en été, cet hémisphère est tourné vers le Soleil, les jours sont plus longs et les rayons plus directs. La distance Terre-Soleil n’est pas en cause.' },
      { t: 'check', q: 'Dans quel ordre sont alignés Soleil, Terre et Lune lors d’une éclipse de Lune ?', a: 'Soleil, Terre, Lune : la Terre est entre les deux et son ombre atteint la Lune.' },
    ],
  },

  {
    id: 'energie-techno',
    title: 'Énergie, électricité et objets techniques',
    intro: 'L’énergie se présente sous plusieurs formes et se transforme d’une forme à l’autre. L’électricité en est l’exemple le plus manipulé à l’école, avec les circuits simples et les objets techniques qui en dépendent.',
    blocks: [
      { t: 'h', text: 'Sources d’énergie' },
      { t: 'table', head: ['Renouvelables', 'Non renouvelables'], rows: [
        ['Soleil, vent, eau (hydraulique), biomasse (bois), chaleur de la Terre (géothermie)', 'Pétrole, gaz, charbon (énergies fossiles) ; uranium (nucléaire)'],
      ] },
      { t: 'p', text: 'Une source est **renouvelable** si elle se reconstitue à l’échelle d’une vie humaine ou n’est pas épuisée par son usage (le vent, le rayonnement du Soleil). Elle est **non renouvelable** si les réserves, formées en millions d’années, s’épuisent. Les énergies fossiles rejettent du dioxyde de carbone (CO₂) quand on les brûle, gaz à effet de serre.' },

      { t: 'h', text: 'Formes et conversions' },
      { t: 'p', text: 'On distingue notamment les énergies **chimique** (aliments, carburants, piles), **thermique** (chaleur), **lumineuse**, **électrique**, **mécanique** (mouvement) et nucléaire. L’énergie ne se crée pas et ne disparaît pas : elle **se convertit**.' },
      { t: 'example', title: 'Des chaînes de conversion', items: [
        'Panneau photovoltaïque : énergie lumineuse → énergie électrique.',
        'Ampoule : énergie électrique → énergie lumineuse, mais aussi thermique (une ampoule à filament chauffe beaucoup : cette chaleur n’est pas utile).',
        'Éolienne : mouvement du vent → électricité. Moteur électrique : électricité → mouvement.',
      ] },

      { t: 'h', text: 'Le circuit électrique simple' },
      { t: 'p', text: 'Pour qu’une lampe brille, il faut un circuit **fermé**, sans coupure, qui comprend un **générateur** (pile, prise) et un **récepteur** (lampe, moteur, buzzer), reliés par des fils conducteurs. Un **interrupteur** ouvre ou ferme le circuit. Une lampe ne s’allume que si le circuit forme une boucle complète qui passe par ses deux bornes.' },
      { t: 'table', head: ['Montage', 'Caractéristique', 'Si une lampe est dévissée'], rows: [
        ['En série', 'Un seul chemin pour le courant', 'Le circuit est coupé : tout s’éteint'],
        ['En dérivation', 'Plusieurs branches', 'Les autres lampes restent allumées'],
      ] },
      { t: 'p', text: 'Les prises d’une maison sont montées en dérivation : éteindre une lampe n’éteint pas le frigo.' },
      { t: 'p', text: 'Un matériau **conducteur** laisse passer le courant (métaux, graphite de la mine de crayon, eau salée). Un **isolant** ne le laisse pas passer (plastique, verre, bois sec, caoutchouc, air).' },
      { t: 'example', title: 'Tester un matériau', items: [
        'Construis un circuit simple (pile plate, lampe, fils) et ouvre-le à un endroit. Branche le matériau à tester entre les deux bouts.',
        'La lampe s’allume avec une pièce de métal ou une mine de crayon : conducteur. Elle reste éteinte avec une gomme ou du plastique : isolant.',
      ] },

      { t: 'h', text: 'Sécurité et court-circuit' },
      { t: 'p', text: 'Un **court-circuit** se produit quand un fil relie directement les deux bornes d’un générateur sans récepteur : un courant très important circule, les fils et la pile chauffent, avec un risque de brûlure ou d’incendie. Les piles utilisées en classe ne présentent pas de danger d’électrocution, mais la tension du secteur (230 V) est dangereuse : on ne manipule jamais la prise ni de l’eau près de l’électricité.' },
      { t: 'trap', text: 'Conceptions fréquentes : « le courant part de la pile et se consomme dans la lampe » (faux : il circule en boucle fermée et il n’est pas « usé » par la lampe) ; « un seul fil suffit pour allumer une lampe » (faux : il faut une boucle complète) ; « la pile contient de l’électricité qui sort comme un liquide ».' },

      { t: 'h', text: 'Les objets techniques' },
      { t: 'p', text: 'Un objet technique est fabriqué pour répondre à un besoin. Sa **fonction d’usage** dit à quoi il sert (une lampe de poche éclaire). Son **fonctionnement** décrit comment il le fait : quelle énergie il utilise, quels constituants jouent quel rôle (pile, interrupteur, ampoule, boîtier). Les objets **évoluent** avec les besoins, les matériaux et les techniques : de la lampe à huile à la lampe à incandescence, puis aux LED, qui consomment moins pour une même lumière.' },

      { t: 'key', items: [
        'Renouvelables : Soleil, vent, eau, biomasse ; fossiles et uranium : non renouvelables.',
        'L’énergie se convertit d’une forme à une autre, elle ne se perd pas.',
        'Circuit fermé : générateur, récepteur, fils ; série (un chemin), dérivation (branches).',
        'Métaux conducteurs, plastique et verre isolants ; court-circuit et secteur dangereux.',
      ] },
      { t: 'check', q: 'Dans un circuit en série avec deux lampes, que se passe-t-il si on dévisse une lampe ?', a: 'Le circuit est ouvert, donc l’autre lampe s’éteint aussi.' },
      { t: 'check', q: 'Quelle conversion d’énergie réalise un panneau photovoltaïque ?', a: 'Il convertit de l’énergie lumineuse en énergie électrique.' },
      { t: 'check', q: 'Pourquoi un fil relié directement aux deux bornes d’une pile est-il dangereux ?', a: 'C’est un court-circuit : un courant très fort circule, le fil et la pile chauffent, avec un risque de brûlure ou d’incendie.' },
    ],
  },

  {
    id: 'programmation',
    title: 'Algorithmique et programmation à l’école',
    intro: 'Programmer, c’est donner à une machine une suite d’instructions précises pour résoudre un problème. À l’école, on apprend d’abord à raisonner sur ces suites, avec ou sans ordinateur.',
    blocks: [
      { t: 'h', text: 'Algorithme et programme' },
      { t: 'p', text: 'Un **algorithme** est une suite finie d’instructions, dans un ordre précis, qui permet de résoudre un problème (une recette de cuisine en est un exemple). Un **programme** est la traduction d’un algorithme dans un langage compréhensible par une machine. À l’école, la programmation concerne les cycles 2 et 3.' },

      { t: 'h', text: 'Les briques de base' },
      { t: 'list', items: [
        '**Séquence** : instructions exécutées l’une après l’autre, dans l’ordre.',
        '**Boucle** : répéter des instructions un nombre de fois donné, ou indéfiniment.',
        '**Condition** : choisir une action selon une situation (*si* il y a un obstacle *alors* tourner, *sinon* avancer).',
        '**Événement** : une action déclenche un programme (clic sur le drapeau vert, touche pressée, contact entre deux objets).',
        '**Variable** : une « boîte » qui porte un nom et dont la valeur peut changer (un score qui augmente de 1 à chaque pomme attrapée).',
      ] },
      { t: 'trap', text: 'L’ordre des instructions compte : « avancer puis tourner » ne donne pas le même trajet que « tourner puis avancer ». Une machine fait exactement ce qu’on lui écrit, pas ce qu’on voulait dire. Quand le résultat est inattendu, on cherche le **bogue** dans le programme (on parle de débogage).' },

      { t: 'h', text: 'Activités débranchées' },
      { t: 'p', text: 'Une activité **débranchée** se fait sans ordinateur. Elle permet de comprendre les notions avant de les coder.' },
      { t: 'example', title: 'Le robot humain sur quadrillage', items: [
        'Un élève joue le robot, un autre le programmeur. Sur un quadrillage au sol, le programmeur écrit avec des cartes (avancer, tourner à gauche, tourner à droite) le chemin pour atteindre une case.',
        'On exécute le programme à la lettre. S’il échoue, on repère l’instruction fautive : c’est du débogage. Pour simplifier, on introduit ensuite une carte « répéter 3 fois ».',
      ] },

      { t: 'h', text: 'Exemples avec Scratch' },
      { t: 'p', text: 'Scratch est un langage visuel par blocs que l’on assemble. Le lutin (le personnage) se déplace sur la scène, et un bloc « stylo » lui permet de tracer son trajet.' },
      { t: 'example', title: 'Tracer un carré', items: [
        'Quand le drapeau est cliqué, stylo en position d’écriture, puis répéter 4 fois : avancer de 100 pas, tourner de 90 degrés.',
        'Sans boucle, il faudrait écrire 8 instructions ; avec la boucle, 2 suffisent. Quatre angles droits de 90° font 360°, un tour complet.',
      ] },
      { t: 'example', title: 'Tracer un triangle équilatéral', items: [
        'Répéter 3 fois : avancer de 100 pas, tourner de 120 degrés.',
        'Le lutin fait un tour complet (360°) en trois virages : 360 ÷ 3 = 120. Les trois côtés ayant la même longueur, le triangle est équilatéral.',
      ] },
      { t: 'example', title: 'Un lutin qui rebondit', items: [
        'Quand le drapeau est cliqué, répéter indéfiniment : avancer de 10 pas, puis rebondir si le bord est atteint.',
        'On y retrouve un événement (le drapeau), une boucle (répéter indéfiniment) et une condition (rebondir si le bord est atteint).',
      ] },
      { t: 'trap', text: 'Pour le triangle équilatéral, l’angle de rotation n’est pas 60° (angle intérieur du triangle) mais 120°. Le lutin tourne de l’angle extérieur, c’est-à-dire de ce qu’il lui faut pour changer de direction. Confusion classique chez les élèves et les candidats.' },
      { t: 'tip', text: 'Pour un polygone régulier à n côtés, l’angle de rotation est 360 ÷ n : 4 côtés → 90°, 3 côtés → 120°, 6 côtés → 60°.' },

      { t: 'key', items: [
        'Algorithme : suite finie d’instructions ordonnées ; programme : sa traduction en langage informatique.',
        'Séquence, boucle, condition, événement, variable.',
        'On peut apprendre sans ordinateur (activités débranchées).',
        'Polygone régulier à n côtés : répéter n fois (avancer, tourner de 360 ÷ n degrés).',
      ] },
      { t: 'check', q: 'Quel angle de rotation faut-il pour tracer un hexagone régulier ?', a: '60 degrés (360 ÷ 6), à répéter 6 fois avec un déplacement de même longueur.' },
      { t: 'check', q: 'Dans le programme « répéter indéfiniment : avancer de 10 pas, rebondir si le bord est atteint », quelle instruction est une condition ?', a: '« Rebondir si le bord est atteint » : l’action ne se déclenche que lorsque le lutin touche le bord.' },
    ],
  },

  {
    id: 'demarche-investigation',
    title: 'La démarche d’investigation et l’enseignement des sciences',
    intro: 'En sciences, l’élève apprend en cherchant : il formule des idées, les met à l’épreuve par des expériences et en tire des conclusions. Le professeur guide cette démarche et structure les savoirs construits.',
    blocks: [
      { t: 'h', text: 'Partir des conceptions initiales' },
      { t: 'p', text: 'Avant tout enseignement, les élèves (et les adultes) ont déjà des idées sur le monde, parfois erronées mais tenaces : ce sont les **conceptions initiales**. Les ignorer, c’est les laisser intactes. On les fait d’abord exprimer, puis on les confronte à l’expérience.' },
      { t: 'example', title: 'Conceptions fréquentes', items: [
        '« Les plantes se nourrissent de terre. »',
        '« Les saisons viennent de la distance entre la Terre et le Soleil. »',
        '« Le sucre disparaît dans l’eau. »',
        '« Les phases de la Lune sont dues à l’ombre de la Terre. »',
      ] },

      { t: 'h', text: 'Les étapes de la démarche' },
      { t: 'steps', items: [
        '**Situation de départ** qui suscite un questionnement : une observation, un objet, un phénomène étonnant.',
        '**Formulation de questions et d’hypothèses** par les élèves, souvent à l’écrit et avant toute manipulation.',
        '**Conception d’un protocole** pour tester une hypothèse.',
        '**Investigation** : expérimentation, observation, modélisation, recherche documentaire.',
        '**Confrontation et conclusion** : on compare les résultats aux hypothèses, on en discute.',
        '**Trace écrite** et structuration des connaissances, validées par le professeur.',
      ] },
      { t: 'p', text: 'Ces étapes ne sont pas toujours dans cet ordre rigide : on peut revenir en arrière si les résultats sont inattendus.' },

      { t: 'h', text: 'Expérimenter correctement' },
      { t: 'p', text: 'Pour savoir si un facteur joue un rôle, on fait **varier un seul paramètre à la fois** et on garde tous les autres identiques. On met en place une **expérience témoin**, c’est-à-dire une situation de référence à laquelle on compare les autres. Si on change deux choses en même temps, on ne sait plus à laquelle attribuer la différence.' },
      { t: 'p', text: 'D’autres outils complètent l’expérience : l’**observation** (à l’œil nu, à la loupe, avec un dessin légendé), la **modélisation** (une maquette, un schéma, une lampe et une balle pour représenter les phases de la Lune) et la **recherche documentaire** (livres, documentaires), qui permet de répondre aux questions qu’on ne peut pas tester en classe.' },

      { t: 'h', text: 'Garder des traces' },
      { t: 'p', text: 'Le **cahier d’expériences** est un outil personnel de l’élève, qui y note la question, ses hypothèses, le protocole (en dessin et en mots), les observations datées et ses conclusions, avec ses propres mots au début. La **trace écrite** finale est issue d’un travail collectif : elle formule ce qu’on a appris, avec le vocabulaire précis. Elle est contrôlée par le professeur pour garantir sa justesse.' },

      { t: 'h', text: 'Exemple complet : la germination' },
      { t: 'example', title: 'De quoi une graine a-t-elle besoin pour germer ?', items: [
        'Situation et conceptions : on fait semer des haricots. Les élèves pensent qu’il faut de la terre, de l’eau, de la lumière. On les note comme hypothèses.',
        'Protocole : quatre boîtes avec des graines sur du coton. Boîte A (témoin) : coton humide, lumière, pièce tempérée. B : coton sec, le reste identique. C : coton humide, placard sombre, le reste identique. D : coton humide, au réfrigérateur, le reste identique. Une seule variation par rapport au témoin à chaque fois.',
        'Résultats attendus avec haricots ou lentilles : A et C germent, B ne germe pas, D ne germe pas ou très lentement.',
        'Conclusion : l’eau et une température convenable sont nécessaires. Ni la terre ni la lumière ne le sont pour la germination de ces graines : la graine contient ses propres réserves. La lumière devient indispensable plus tard, pour la croissance de la jeune plante verte.',
      ] },
      { t: 'trap', text: 'Erreurs de conception d’une expérience : changer plusieurs paramètres à la fois, oublier le témoin, ne pas prévoir plusieurs graines (un seul échec peut venir d’une graine défectueuse), ou conclure sur un seul résultat. Autre piège : croire qu’une hypothèse non validée est un échec, alors qu’elle est un résultat.' },

      { t: 'key', items: [
        'On part des conceptions initiales des élèves pour les confronter à l’expérience.',
        'Étapes : questionnement, hypothèses, protocole, investigation, conclusion, trace écrite.',
        'Un seul paramètre varie à la fois ; on compare toujours à un témoin.',
        'Le cahier d’expériences est personnel ; la trace écrite est collective et validée.',
      ] },
      { t: 'check', q: 'Pourquoi ne faut-il faire varier qu’un seul paramètre à la fois ?', a: 'Pour pouvoir attribuer la différence observée à ce paramètre. Si deux paramètres changent, on ne sait pas lequel est responsable.' },
      { t: 'check', q: 'Quel est le rôle de l’expérience témoin ?', a: 'C’est la situation de référence, sans modification, à laquelle on compare les autres expériences.' },
      { t: 'check', q: 'Quelle est la différence entre le cahier d’expériences et la trace écrite ?', a: 'Le cahier d’expériences est personnel et retrace la recherche de l’élève avec ses mots ; la trace écrite est la formulation collective des connaissances, validée par le professeur.' },
    ],
  },
];
