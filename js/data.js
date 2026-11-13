const COURS = {}; // rempli par les fichiers js/cours/*.js

/* Contenus de révision. Chaque question : s = matière, q = énoncé, c = choix, a = index de la bonne réponse, e = explication. */

const SUBJECTS = {
  francais: { label: 'Français', emoji: '📚', color: 'var(--c-francais)', epreuve: 'Écrit 1 · Oral 1' },
  maths: { label: 'Mathématiques', emoji: '📐', color: 'var(--c-maths)', epreuve: 'Écrit 1 · Oral 1' },
  histoire: { label: 'Histoire-géo & EMC', emoji: '🌍', color: 'var(--c-histoire)', epreuve: 'Écrit 2' },
  sciences: { label: 'Sciences & techno', emoji: '🔬', color: 'var(--c-sciences)', epreuve: 'Écrit 2' },
  systeme: { label: 'Système éducatif', emoji: '🏫', color: 'var(--c-systeme)', epreuve: 'Oral 2 (entretien)' },
  eps: { label: 'EPS', emoji: '🏃', color: 'var(--c-eps)', epreuve: 'Oral 2 (partie EPS)' },
};

const QUESTIONS = [
  // ---------- Français ----------
  { s: 'francais', q: 'Dans « Les enfants jouent dans la cour », quelle est la fonction de « dans la cour » ?', c: ['Complément de phrase (circonstanciel de lieu)', 'Complément d’objet indirect', 'Complément du nom', 'Attribut du sujet'], a: 0, e: 'Il est supprimable et déplaçable : « Dans la cour, les enfants jouent ». C’est un complément de phrase (complément circonstanciel).' },
  { s: 'francais', q: 'Quelle est la nature de « leur » dans « Je leur parle » ?', c: ['Pronom personnel', 'Déterminant possessif', 'Adverbe', 'Pronom possessif'], a: 0, e: 'Placé devant le verbe et remplaçant « à eux / à elles », « leur » est un pronom personnel, toujours invariable.' },
  { s: 'francais', q: 'Dans « Elle semble fatiguée », quelle est la fonction de « fatiguée » ?', c: ['Attribut du sujet', 'Épithète', 'COD', 'Complément du nom'], a: 0, e: '« Sembler » est un verbe attributif (comme être, paraître, devenir, rester…). « Fatiguée » exprime une qualité du sujet.' },
  { s: 'francais', q: 'Pourquoi écrit-on « Les fleurs que j’ai cueillies » ?', c: ['Le COD « que » (= les fleurs) est placé avant l’auxiliaire avoir', 'Le participe passé s’accorde toujours avec le sujet', 'Le participe passé employé avec avoir s’accorde toujours', 'C’est une exception liée au verbe cueillir'], a: 0, e: 'Avec avoir, le participe passé s’accorde avec le COD seulement si celui-ci est placé avant le verbe.' },
  { s: 'francais', q: 'Combien de phonèmes compte le mot « chat » ?', c: ['2', '3', '4', '1'], a: 0, e: '« chat » se prononce [ʃa] : deux phonèmes, /ʃ/ et /a/, pour quatre lettres.' },
  { s: 'francais', q: 'À quel groupe appartient le verbe « partir » ?', c: ['3e groupe', '2e groupe', '1er groupe', 'Il n’a pas de groupe'], a: 0, e: 'Le 2e groupe regroupe les verbes en -ir qui font -issant au participe présent (finir → finissant). « Partir » fait « partant » : 3e groupe.' },
  { s: 'francais', q: 'Quel est le mode du verbe dans « Il faut qu’il vienne » ?', c: ['Subjonctif', 'Indicatif', 'Conditionnel', 'Impératif'], a: 0, e: '« Il faut que » est toujours suivi du subjonctif.' },
  { s: 'francais', q: '« Porte-monnaie » est un mot…', c: ['Composé', 'Dérivé', 'Emprunté', 'Siglé'], a: 0, e: 'Un mot composé associe deux mots existants. Un mot dérivé ajoute un préfixe ou un suffixe à un radical (ex. : re-faire, jardin-ier).' },
  { s: 'francais', q: 'Quelle figure de style dans « Cette faucille d’or dans le champ des étoiles » (Hugo) ?', c: ['Métaphore', 'Comparaison', 'Personnification', 'Hyperbole'], a: 0, e: 'La lune est assimilée à une faucille sans outil de comparaison (comme, tel…) : c’est une métaphore.' },
  { s: 'francais', q: 'Quelle est la bonne orthographe à l’imparfait ?', c: ['Nous criions', 'Nous crions', 'Nous criyons', 'Nous criiont'], a: 0, e: 'Radical « cri- » + terminaison « -ions » de l’imparfait : nous criions (deux i).' },
  { s: 'francais', q: 'Dans « Le livre que tu lis est passionnant », « que tu lis » est une…', c: ['Proposition subordonnée relative', 'Proposition subordonnée conjonctive', 'Proposition indépendante', 'Proposition interrogative indirecte'], a: 0, e: 'Introduite par le pronom relatif « que » qui reprend l’antécédent « livre », elle complète le nom.' },
  { s: 'francais', q: 'Le mot « école » vient du grec scholê, qui signifiait…', c: ['Loisir', 'Obligation', 'Maître', 'Lecture'], a: 0, e: 'Scholê désignait le temps libre consacré à l’étude et à la réflexion.' },
  { s: 'francais', q: 'La conscience phonologique, c’est…', c: ['La capacité à percevoir et manipuler les unités sonores de la langue orale', 'La connaissance du nom des lettres', 'La capacité à lire à voix haute avec fluidité', 'La maîtrise de l’orthographe lexicale'], a: 0, e: 'Elle porte sur l’oral (syllabes, rimes, phonèmes) et prépare l’apprentissage du principe alphabétique.' },
  { s: 'francais', q: 'Dans « Chaque élève lit », quelle est la nature de « chaque » ?', c: ['Déterminant indéfini', 'Pronom indéfini', 'Adjectif qualificatif', 'Adverbe'], a: 0, e: '« Chaque » introduit un nom : c’est un déterminant. « Chacun » serait le pronom correspondant.' },
  { s: 'francais', q: 'L’ensemble des sens que peut prendre un même mot s’appelle…', c: ['Son champ sémantique', 'Son champ lexical', 'Sa famille de mots', 'Son étymologie'], a: 0, e: 'Le champ lexical, lui, regroupe des mots différents qui se rapportent à un même thème.' },
  { s: 'francais', q: 'Complète : « ___ enfants sont les miens. »', c: ['Ces', 'Ses', 'C’est', 'S’est'], a: 0, e: '« Ces » est un déterminant démonstratif (on peut dire « ces enfants-là »).' },
  { s: 'francais', q: 'Passé simple de « aller » à la 3e personne du pluriel ?', c: ['Ils allèrent', 'Ils allaient', 'Ils allirent', 'Ils allarent'], a: 0, e: 'Les verbes en -er font -èrent au passé simple : ils allèrent, ils chantèrent.' },
  { s: 'francais', q: 'Dans « Il mange une pomme », « une pomme » est…', c: ['COD', 'COI', 'Attribut du sujet', 'Complément de phrase'], a: 0, e: 'Il répond à « il mange quoi ? », sans préposition : complément d’objet direct.' },

  // ---------- Maths ----------
  { s: 'maths', q: '3/4 + 1/6 = ?', c: ['11/12', '4/10', '4/24', '5/6'], a: 0, e: 'Dénominateur commun 12 : 9/12 + 2/12 = 11/12.' },
  { s: 'maths', q: 'Combien font 20 % de 45 ?', c: ['9', '4,5', '20', '2,25'], a: 0, e: '10 % de 45 = 4,5 donc 20 % = 9.' },
  { s: 'maths', q: 'Un article à 80 € augmente de 25 % puis baisse de 20 %. Son prix final ?', c: ['80 €', '84 €', '76 €', '85 €'], a: 0, e: '80 × 1,25 = 100, puis 100 × 0,8 = 80. Les coefficients multiplicateurs se multiplient : 1,25 × 0,8 = 1.' },
  { s: 'maths', q: 'PGCD(84 ; 126) = ?', c: ['42', '21', '14', '6'], a: 0, e: '84 = 2² × 3 × 7 et 126 = 2 × 3² × 7. Facteurs communs : 2 × 3 × 7 = 42.' },
  { s: 'maths', q: 'Lequel de ces nombres est premier ?', c: ['97', '91', '87', '51'], a: 0, e: '91 = 7 × 13, 87 = 3 × 29, 51 = 3 × 17. 97 n’est divisible par aucun premier jusqu’à 9 (√97 < 10).' },
  { s: 'maths', q: 'Aire d’un disque de rayon 3 cm ?', c: ['9π cm²', '6π cm²', '3π cm²', '9 cm²'], a: 0, e: 'A = π × r² = π × 9 ≈ 28,3 cm². (6π serait le périmètre.)' },
  { s: 'maths', q: '1,25 h correspond à…', c: ['1 h 15 min', '1 h 25 min', '1 h 2 min 30 s', '1 h 12 min'], a: 0, e: '0,25 h = un quart d’heure = 15 min. Piège classique : les durées ne sont pas décimales.' },
  { s: 'maths', q: 'Un train parcourt 150 km en 1 h 30. Sa vitesse moyenne ?', c: ['100 km/h', '115 km/h', '150 km/h', '130 km/h'], a: 0, e: 'v = d / t = 150 / 1,5 = 100 km/h.' },
  { s: 'maths', q: 'Un triangle rectangle a des côtés de l’angle droit de 6 cm et 8 cm. Hypoténuse ?', c: ['10 cm', '14 cm', '12 cm', '9 cm'], a: 0, e: 'Pythagore : 6² + 8² = 36 + 64 = 100, donc 10 cm.' },
  { s: 'maths', q: 'Lequel est divisible par 9 ?', c: ['3 456', '2 345', '1 234', '5 555'], a: 0, e: 'Un nombre est divisible par 9 si la somme de ses chiffres l’est : 3+4+5+6 = 18.' },
  { s: 'maths', q: '0,00045 en écriture scientifique ?', c: ['4,5 × 10⁻⁴', '45 × 10⁻⁵', '4,5 × 10⁻⁵', '4,5 × 10⁴'], a: 0, e: 'La mantisse doit être entre 1 et 10 : on décale la virgule de 4 rangs vers la droite.' },
  { s: 'maths', q: 'Médiane de la série 3 ; 7 ; 8 ; 12 ; 20 ?', c: ['8', '10', '7', '12'], a: 0, e: 'Série ordonnée de 5 valeurs : la médiane est la 3e. (La moyenne vaut 10.)' },
  { s: 'maths', q: 'Somme des angles intérieurs d’un hexagone ?', c: ['720°', '540°', '360°', '1 080°'], a: 0, e: '(n − 2) × 180° = 4 × 180° = 720°.' },
  { s: 'maths', q: '3 cahiers coûtent 4,50 €. Combien coûtent 7 cahiers ?', c: ['10,50 €', '9 €', '12 €', '10 €'], a: 0, e: 'Passage à l’unité : 1 cahier = 1,50 €, donc 7 × 1,50 = 10,50 €.' },
  { s: 'maths', q: 'Quel est le NOMBRE de centaines dans 45 678 ?', c: ['456', '6', '45', '600'], a: 0, e: 'Le chiffre des centaines est 6, mais le nombre de centaines est 456 (45 678 = 456 centaines et 78 unités).' },
  { s: 'maths', q: 'Sur une carte au 1/25 000, 4 cm représentent…', c: ['1 km', '10 km', '100 m', '2,5 km'], a: 0, e: '4 × 25 000 = 100 000 cm = 1 000 m = 1 km.' },
  { s: 'maths', q: '3,2 m² = ? cm²', c: ['32 000', '320', '3 200', '320 000'], a: 0, e: '1 m² = 100 cm × 100 cm = 10 000 cm².' },
  { s: 'maths', q: 'Combien de litres dans 1 m³ ?', c: ['1 000', '100', '10 000', '10'], a: 0, e: '1 L = 1 dm³ et 1 m³ = 1 000 dm³.' },
  { s: 'maths', q: 'On lance deux dés. Probabilité d’obtenir une somme de 7 ?', c: ['1/6', '1/12', '7/36', '1/11'], a: 0, e: '6 issues favorables (1-6, 2-5, 3-4, 4-3, 5-2, 6-1) sur 36 : 6/36 = 1/6.' },
  { s: 'maths', q: '0,375 = ?', c: ['3/8', '3/7', '37/100', '5/8'], a: 0, e: '0,375 = 375/1000 = 3/8 (on simplifie par 125).' },
  { s: 'maths', q: 'Résoudre 3x − 5 = 16', c: ['x = 7', 'x = 11/3', 'x = 21', 'x = 3'], a: 0, e: '3x = 21 donc x = 7.' },
  { s: 'maths', q: 'Périmètre d’un rectangle de 7 cm sur 4 cm ?', c: ['22 cm', '28 cm', '11 cm', '28 cm²'], a: 0, e: 'P = 2 × (7 + 4) = 22 cm. (28 cm² est son aire.)' },

  // ---------- Histoire-géo & EMC ----------
  { s: 'histoire', q: 'Les lois Ferry rendent l’école primaire obligatoire et laïque en…', c: ['1882', '1789', '1905', '1945'], a: 0, e: 'Loi du 28 mars 1882 (obligation et laïcité), après la gratuité en 1881.' },
  { s: 'histoire', q: 'La loi de séparation des Églises et de l’État date de…', c: ['1905', '1882', '1958', '1789'], a: 0, e: 'Loi du 9 décembre 1905 : la République ne reconnaît ni ne subventionne aucun culte.' },
  { s: 'histoire', q: 'En quelle année les Françaises votent-elles pour la première fois ?', c: ['1945', '1918', '1936', '1968'], a: 0, e: 'Le droit de vote est accordé par l’ordonnance d’avril 1944 ; premier vote aux municipales d’avril 1945.' },
  { s: 'histoire', q: 'L’esclavage est définitivement aboli en France en…', c: ['1848', '1794', '1815', '1905'], a: 0, e: 'Décret du 27 avril 1848, porté par Victor Schœlcher. Une première abolition de 1794 avait été annulée en 1802.' },
  { s: 'histoire', q: 'La Déclaration des droits de l’homme et du citoyen est adoptée le…', c: ['26 août 1789', '14 juillet 1789', '4 août 1789', '21 septembre 1792'], a: 0, e: 'Le 4 août 1789, c’est l’abolition des privilèges.' },
  { s: 'histoire', q: 'Charlemagne est couronné empereur en…', c: ['800', '496', '987', '1066'], a: 0, e: 'À Rome, le jour de Noël 800.' },
  { s: 'histoire', q: 'Christophe Colomb atteint l’Amérique en…', c: ['1492', '1515', '1453', '1610'], a: 0, e: '1492 est souvent retenue comme repère de la fin du Moyen Âge.' },
  { s: 'histoire', q: 'L’armistice de la Première Guerre mondiale est signé le…', c: ['11 novembre 1918', '8 mai 1945', '28 juin 1919', '6 juin 1944'], a: 0, e: 'Le traité de Versailles est signé le 28 juin 1919 ; le 8 mai 1945 marque la fin de la guerre en Europe.' },
  { s: 'histoire', q: 'Le mur de Berlin tombe en…', c: ['1989', '1991', '1961', '1975'], a: 0, e: 'Le 9 novembre 1989. Il avait été construit en 1961.' },
  { s: 'histoire', q: 'La Constitution de la Ve République date de…', c: ['1958', '1946', '1962', '1875'], a: 0, e: 'Adoptée par référendum le 28 septembre 1958, promulguée le 4 octobre.' },
  { s: 'histoire', q: 'Quel est le plus long fleuve de France ?', c: ['La Loire', 'La Seine', 'Le Rhône', 'La Garonne'], a: 0, e: 'Environ 1 000 km, entièrement en France.' },
  { s: 'histoire', q: 'Combien de régions compte la France métropolitaine depuis 2016 ?', c: ['13', '22', '18', '27'], a: 0, e: '13 régions métropolitaines, 18 en comptant les 5 régions d’outre-mer.' },
  { s: 'histoire', q: 'La grotte de Lascaux se trouve…', c: ['En Dordogne', 'En Ardèche', 'Dans les Pyrénées', 'En Bretagne'], a: 0, e: 'La grotte Chauvet, elle, est en Ardèche.' },
  { s: 'histoire', q: 'Quel méridien sert de référence pour la longitude 0° ?', c: ['Greenwich', 'Paris', 'L’équateur', 'Le tropique du Cancer'], a: 0, e: 'L’équateur est la référence de la latitude 0°.' },
  { s: 'histoire', q: 'La Convention internationale des droits de l’enfant est adoptée par l’ONU en…', c: ['1989', '1948', '1959', '2005'], a: 0, e: 'Le 20 novembre 1989. 1948 est l’année de la Déclaration universelle des droits de l’homme.' },
  { s: 'histoire', q: 'La loi de 2004 à l’école porte sur…', c: ['L’interdiction des signes religieux ostensibles', 'L’instruction obligatoire à 3 ans', 'La scolarisation des élèves handicapés', 'La gratuité des fournitures'], a: 0, e: 'Loi du 15 mars 2004, en application du principe de laïcité dans les écoles, collèges et lycées publics.' },
  { s: 'histoire', q: 'Le traité de Rome, fondateur de la CEE, est signé en…', c: ['1957', '1951', '1992', '1945'], a: 0, e: '1951 : traité de Paris (CECA). 1992 : traité de Maastricht (Union européenne).' },

  // ---------- Sciences ----------
  { s: 'sciences', q: 'Le passage direct de l’état solide à l’état gazeux s’appelle…', c: ['Sublimation', 'Vaporisation', 'Fusion', 'Condensation'], a: 0, e: 'Fusion : solide → liquide. Vaporisation : liquide → gaz. Liquéfaction : gaz → liquide.' },
  { s: 'sciences', q: 'Qu’est-ce qui cause l’alternance des saisons ?', c: ['L’inclinaison de l’axe de rotation de la Terre', 'La variation de distance Terre-Soleil', 'La rotation de la Terre sur elle-même', 'Les phases de la Lune'], a: 0, e: 'Conception erronée fréquente : la distance. L’hiver boréal correspond d’ailleurs à peu près au moment où la Terre est la plus proche du Soleil.' },
  { s: 'sciences', q: 'L’alternance jour/nuit est due à…', c: ['La rotation de la Terre sur elle-même', 'La révolution de la Terre autour du Soleil', 'La rotation du Soleil autour de la Terre', 'L’inclinaison de l’axe terrestre'], a: 0, e: 'Une rotation complète en 24 h environ.' },
  { s: 'sciences', q: 'Pourquoi la Lune présente-t-elle des phases ?', c: ['On voit plus ou moins sa face éclairée par le Soleil selon sa position', 'L’ombre de la Terre la cache en partie', 'Elle produit plus ou moins de lumière', 'Les nuages la masquent'], a: 0, e: 'L’ombre de la Terre sur la Lune, c’est une éclipse de Lune, phénomène rare.' },
  { s: 'sciences', q: 'Quelle planète est la plus proche du Soleil ?', c: ['Mercure', 'Vénus', 'Mars', 'La Terre'], a: 0, e: 'Ordre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.' },
  { s: 'sciences', q: 'À la lumière, une plante chlorophyllienne absorbe… et rejette…', c: ['du CO₂ / du O₂', 'du O₂ / du CO₂', 'de l’azote / du CO₂', 'de l’eau / du CO₂'], a: 0, e: 'C’est la photosynthèse. Elle respire aussi (jour et nuit), en consommant du O₂.' },
  { s: 'sciences', q: 'Où ont lieu les échanges gazeux respiratoires ?', c: ['Dans les alvéoles pulmonaires', 'Dans la trachée', 'Dans le cœur', 'Dans les bronches'], a: 0, e: 'Le dioxygène passe de l’air au sang à travers la paroi très fine des alvéoles.' },
  { s: 'sciences', q: 'L’essentiel de l’absorption des nutriments se fait dans…', c: ['L’intestin grêle', 'L’estomac', 'Le gros intestin', 'L’œsophage'], a: 0, e: 'Ses replis et villosités offrent une très grande surface d’échange avec le sang.' },
  { s: 'sciences', q: 'L’araignée est-elle un insecte ?', c: ['Non, elle a 8 pattes : c’est un arachnide', 'Oui, comme tous les petits animaux', 'Oui, elle a 6 pattes', 'Non, c’est un crustacé'], a: 0, e: 'Les insectes ont 6 pattes et un corps en 3 parties (tête, thorax, abdomen).' },
  { s: 'sciences', q: 'La baleine est…', c: ['Un mammifère', 'Un poisson', 'Un amphibien', 'Un reptile'], a: 0, e: 'Elle respire avec des poumons et allaite ses petits.' },
  { s: 'sciences', q: 'Dans une chaîne alimentaire, les producteurs primaires sont…', c: ['Les végétaux chlorophylliens', 'Les herbivores', 'Les décomposeurs', 'Les carnivores'], a: 0, e: 'Ils fabriquent leur matière organique à partir de matière minérale et de lumière.' },
  { s: 'sciences', q: 'Lequel n’est généralement PAS nécessaire à la germination d’une graine ?', c: ['La lumière', 'L’eau', 'Une température adaptée', 'Le dioxygène'], a: 0, e: 'La graine utilise ses réserves. La lumière devient nécessaire ensuite, pour la croissance de la plantule.' },
  { s: 'sciences', q: 'Quel matériau est un bon conducteur électrique ?', c: ['Le cuivre', 'Le bois sec', 'Le plastique', 'Le verre'], a: 0, e: 'Les métaux conduisent le courant ; c’est pour cela que les fils sont en cuivre gainé de plastique (isolant).' },
  { s: 'sciences', q: 'L’unité de mesure d’une force est…', c: ['Le newton', 'Le kilogramme', 'Le joule', 'Le watt'], a: 0, e: 'Le poids est une force (en N) ; la masse se mesure en kg.' },
  { s: 'sciences', q: 'Avec « répéter 4 fois : avancer de 50, tourner de 90° », le lutin trace…', c: ['Un carré', 'Un triangle', 'Un rectangle non carré', 'Un cercle'], a: 0, e: '4 côtés égaux et 4 angles droits.' },
  { s: 'sciences', q: 'À pression atmosphérique normale, l’eau pure bout à…', c: ['100 °C', '90 °C', '0 °C', '120 °C'], a: 0, e: 'Et elle gèle à 0 °C. En altitude, la pression baisse et l’eau bout à une température plus basse.' },

  // ---------- Système éducatif ----------
  { s: 'systeme', q: 'Le cycle 2 regroupe…', c: ['CP, CE1, CE2', 'GS, CP, CE1', 'CE2, CM1, CM2', 'CM1, CM2, 6e'], a: 0, e: 'Cycle 1 : maternelle. Cycle 2 : apprentissages fondamentaux. Cycle 3 : consolidation (CM1, CM2, 6e). Cycle 4 : 5e à 3e.' },
  { s: 'systeme', q: 'Le cycle 3 regroupe…', c: ['CM1, CM2, 6e', 'CE2, CM1, CM2', 'CM2, 6e, 5e', 'CE1, CE2, CM1'], a: 0, e: 'Il fait le lien entre l’école et le collège (conseil école-collège).' },
  { s: 'systeme', q: 'Depuis la rentrée 2019, l’instruction est obligatoire à partir de…', c: ['3 ans', '6 ans', '2 ans', '5 ans'], a: 0, e: 'Loi pour une école de la confiance (2019). Elle s’étend jusqu’à 16 ans, complétée par l’obligation de formation jusqu’à 18 ans.' },
  { s: 'systeme', q: 'Combien de domaines compte le socle commun de connaissances, de compétences et de culture ?', c: ['5', '7', '3', '4'], a: 0, e: '1 : les langages pour penser et communiquer ; 2 : méthodes et outils pour apprendre ; 3 : formation de la personne et du citoyen ; 4 : systèmes naturels et techniques ; 5 : représentations du monde et activité humaine.' },
  { s: 'systeme', q: 'La Charte de la laïcité à l’école compte…', c: ['15 articles', '10 articles', '20 articles', '5 articles'], a: 0, e: 'Publiée en 2013, elle doit être affichée dans les écoles et établissements publics.' },
  { s: 'systeme', q: 'Pour un élève en situation de handicap reconnu par la MDPH, on met en place un…', c: ['PPS', 'PPRE', 'PAP', 'PAI'], a: 0, e: 'PPS : projet personnalisé de scolarisation. PAP : troubles des apprentissages sans recours à la MDPH. PAI : maladie chronique, allergie. PPRE : difficultés scolaires.' },
  { s: 'systeme', q: 'Que signifie RASED ?', c: ['Réseau d’aides spécialisées aux élèves en difficulté', 'Réseau d’accompagnement scolaire et éducatif départemental', 'Regroupement d’aide à la scolarité des élèves déficients', 'Référent académique de suivi des élèves en difficulté'], a: 0, e: 'Il réunit des enseignants spécialisés et des psychologues de l’Éducation nationale.' },
  { s: 'systeme', q: 'Le conseil d’école se réunit au moins…', c: ['Une fois par trimestre', 'Une fois par an', 'Une fois par mois', 'Une fois par période de vacances'], a: 0, e: 'Il réunit enseignants, représentants des parents, maire ou son représentant, DDEN, IEN…' },
  { s: 'systeme', q: 'Durée hebdomadaire d’enseignement pour les élèves à l’école élémentaire ?', c: ['24 heures', '26 heures', '27 heures', '21 heures'], a: 0, e: '24 h par semaine sur 36 semaines, soit 864 h par an.' },
  { s: 'systeme', q: 'La loi pour l’égalité des droits et des chances des personnes handicapées date de…', c: ['2005', '1975', '2013', '2019'], a: 0, e: 'Loi du 11 février 2005 : droit à la scolarisation en milieu ordinaire, au plus près du domicile.' },
  { s: 'systeme', q: 'Le supérieur hiérarchique direct d’un professeur des écoles est…', c: ['L’IEN de circonscription', 'Le directeur d’école', 'Le maire', 'Le recteur'], a: 0, e: 'Le directeur d’école n’est pas le supérieur hiérarchique de ses collègues. L’inspecteur de l’Éducation nationale (IEN) évalue et accompagne.' },
  { s: 'systeme', q: 'Le référentiel de compétences des métiers du professorat et de l’éducation date de…', c: ['2013', '2005', '2019', '1989'], a: 0, e: 'Arrêté du 1er juillet 2013 : 14 compétences communes et 5 spécifiques aux professeurs.' },

  // ---------- EPS ----------
  { s: 'eps', q: 'Combien de champs d’apprentissage en EPS aux cycles 2 et 3 ?', c: ['4', '5', '3', '6'], a: 0, e: 'Produire une performance optimale ; adapter ses déplacements à des environnements variés ; s’exprimer devant les autres par une prestation artistique et/ou acrobatique ; conduire et maîtriser un affrontement collectif ou interindividuel.' },
  { s: 'eps', q: 'La danse relève du champ d’apprentissage…', c: ['S’exprimer devant les autres par une prestation artistique et/ou acrobatique', 'Adapter ses déplacements à des environnements variés', 'Produire une performance optimale', 'Conduire un affrontement'], a: 0, e: 'Comme le cirque, la gymnastique ou les rondes et jeux dansés.' },
  { s: 'eps', q: 'L’orientation ou la natation relèvent du champ…', c: ['Adapter ses déplacements à des environnements variés', 'Produire une performance optimale', 'S’exprimer devant les autres', 'Conduire un affrontement'], a: 0, e: 'Ce champ prend en compte la sécurité et la lecture d’un milieu inhabituel.' },
  { s: 'eps', q: 'En EPS, le « temps d’engagement moteur » désigne…', c: ['Le temps où l’élève est réellement en activité physique', 'La durée totale de la séance', 'Le temps d’échauffement', 'Le temps de consignes'], a: 0, e: 'Un indicateur clé de qualité d’une séance : limiter les files d’attente et les consignes trop longues.' },
];

/* Affirmations pour le jeu Vrai / Faux éclair. */
const TRUE_FALSE = [
  { t: 'Un carré est un rectangle particulier.', v: true, e: 'Il a 4 angles droits : c’est un rectangle (et aussi un losange).' },
  { t: 'Tout nombre décimal est un nombre entier.', v: false, e: 'C’est l’inverse : tout entier est décimal (5 = 5,0), mais 2,5 n’est pas entier.' },
  { t: '1/3 est un nombre décimal.', v: false, e: '1/3 = 0,333… a une écriture décimale illimitée : c’est un rationnel non décimal.' },
  { t: 'Multiplier par un nombre agrandit toujours.', v: false, e: 'Multiplier par 0,5 divise par 2. Conception erronée héritée des entiers.' },
  { t: '0,5 est plus grand que 0,25.', v: true, e: '0,5 = 0,50 > 0,25. Croire que « plus il y a de chiffres, plus c’est grand » est une erreur fréquente.' },
  { t: 'Le chiffre des dizaines de 3 482 est 8.', v: true, e: '3 482 = 3 milliers, 4 centaines, 8 dizaines, 2 unités.' },
  { t: 'Un triangle peut avoir deux angles droits.', v: false, e: 'La somme des angles vaut 180°, il ne resterait rien pour le troisième.' },
  { t: 'Le périmètre et l’aire varient toujours dans le même sens.', v: false, e: 'On peut augmenter le périmètre tout en diminuant l’aire (rectangle très allongé).' },
  { t: '« Et » est une conjonction de coordination.', v: true, e: 'Mais, ou, et, donc, or, ni, car.' },
  { t: '« Est » (verbe être) et « et » sont des homophones.', v: true, e: 'Ils se prononcent de la même façon mais s’écrivent différemment.' },
  { t: 'Un adverbe s’accorde avec le verbe.', v: false, e: 'L’adverbe est invariable.' },
  { t: 'Dans « une belle maison », « belle » est épithète.', v: true, e: 'Adjectif placé directement à côté du nom, sans verbe.' },
  { t: 'L’imparfait de l’indicatif exprime toujours une action terminée.', v: false, e: 'Il exprime souvent une action en cours, une habitude ou une description dans le passé.' },
  { t: '« Ou » sans accent indique un choix.', v: true, e: 'On peut le remplacer par « ou bien ». « Où » avec accent indique le lieu ou le temps.' },
  { t: 'La Terre tourne autour du Soleil en 24 heures.', v: false, e: '24 h, c’est la rotation sur elle-même. La révolution autour du Soleil dure environ 365,25 jours.' },
  { t: 'La chauve-souris est un oiseau.', v: false, e: 'C’est un mammifère : elle allaite ses petits et a des poils.' },
  { t: 'Un objet lourd tombe plus vite qu’un objet léger dans le vide.', v: false, e: 'Dans le vide, tous les objets tombent à la même vitesse. Dans l’air, c’est la résistance de l’air qui fait la différence.' },
  { t: 'Le sang circule dans un circuit fermé.', v: true, e: 'Cœur, artères, capillaires, veines, retour au cœur.' },
  { t: 'Un pull « tient chaud » parce qu’il produit de la chaleur.', v: false, e: 'Il isole : il limite les pertes de chaleur du corps.' },
  { t: 'La Marseillaise a été écrite en 1792.', v: true, e: 'Par Rouget de Lisle, à Strasbourg ; hymne national depuis 1879 (et déjà en 1795).' },
  { t: 'Le Mont Blanc est le point culminant de la France métropolitaine.', v: true, e: 'Environ 4 805 m (son altitude varie selon l’épaisseur de neige).' },
  { t: 'La laïcité interdit aux élèves toute expression religieuse à l’école.', v: false, e: 'Elle interdit les signes et tenues manifestant ostensiblement une appartenance religieuse (loi de 2004) ; elle garantit la liberté de conscience.' },
  { t: 'Le directeur d’école est le supérieur hiérarchique des enseignants.', v: false, e: 'Le supérieur hiérarchique est l’IEN de circonscription.' },
  { t: 'La maternelle correspond au cycle 1.', v: true, e: 'Cycle des apprentissages premiers : PS, MS, GS.' },
  { t: 'La 6e fait partie du cycle 3.', v: true, e: 'Cycle 3 : CM1, CM2, 6e.' },
  { t: 'Le PAP nécessite une décision de la MDPH.', v: false, e: 'Le PAP est proposé par l’équipe pédagogique après avis du médecin scolaire. C’est le PPS qui relève de la MDPH.' },
  { t: 'L’évaluation formative sert à attribuer une note finale.', v: false, e: 'Elle accompagne l’apprentissage en cours. L’évaluation sommative fait le bilan.' },
  { t: 'Relire ses cours plusieurs fois est la méthode de révision la plus efficace.', v: false, e: 'Les études montrent que s’auto-tester et espacer les révisions sont bien plus efficaces que la relecture.' },
];

/* Cartes mémoire (répétition espacée). */
const FLASHCARDS = [
  { s: 'systeme', f: 'Zone proximale de développement', b: 'Écart entre ce que l’élève réussit seul et ce qu’il réussit avec l’aide d’un adulte ou d’un pair (Vygotski).' },
  { s: 'systeme', f: 'Étayage', b: 'Ensemble des interactions d’aide de l’adulte qui permettent à l’enfant de réussir une tâche qu’il ne réussirait pas seul (Bruner).' },
  { s: 'systeme', f: 'Conflit sociocognitif', b: 'Confrontation de points de vue entre pairs qui oblige chacun à réorganiser ses connaissances.' },
  { s: 'systeme', f: 'Métacognition', b: 'Connaissance et contrôle de l’élève sur ses propres processus d’apprentissage (« comment j’ai fait ? »).' },
  { s: 'systeme', f: 'Différenciation pédagogique', b: 'Adapter contenus, supports, démarches ou aides aux besoins des élèves, pour viser les mêmes objectifs.' },
  { s: 'systeme', f: 'Évaluation diagnostique', b: 'En début d’apprentissage, pour connaître les acquis et représentations des élèves.' },
  { s: 'systeme', f: 'Évaluation formative', b: 'Pendant l’apprentissage, pour réguler ; l’élève et l’enseignant savent où il en est.' },
  { s: 'systeme', f: 'Évaluation sommative', b: 'En fin d’apprentissage, bilan des acquis.' },
  { s: 'systeme', f: 'Transposition didactique', b: 'Transformation d’un savoir savant en savoir à enseigner puis enseigné (Chevallard).' },
  { s: 'systeme', f: 'Contrat didactique', b: 'Attentes implicites réciproques entre enseignant et élèves à propos du savoir (Brousseau). Ex. : « l’âge du capitaine ».' },
  { s: 'systeme', f: 'Obstacle épistémologique', b: 'Connaissance antérieure qui fonctionne bien dans un domaine mais fait obstacle à un nouveau savoir (Bachelard).' },
  { s: 'systeme', f: 'Représentations initiales', b: 'Conceptions que l’élève a déjà avant l’apprentissage ; on les fait émerger pour les faire évoluer.' },
  { s: 'systeme', f: 'PPRE', b: 'Programme personnalisé de réussite éducative : actions ciblées pour un élève qui risque de ne pas maîtriser les attendus.' },
  { s: 'systeme', f: 'APC', b: 'Activités pédagogiques complémentaires : en petits groupes, en plus des 24 h d’enseignement.' },
  { s: 'systeme', f: 'Conseil des maîtres', b: 'Réunit l’équipe pédagogique de l’école, présidé par le directeur ; organise la vie pédagogique.' },
  { s: 'francais', f: 'Phonème', b: 'Plus petite unité sonore distinctive de la langue orale. Ex. : /p/ et /b/ distinguent « pain » et « bain ».' },
  { s: 'francais', f: 'Graphème', b: 'Lettre ou groupe de lettres qui transcrit un phonème. Ex. : « ch », « eau », « o ».' },
  { s: 'francais', f: 'Morphème', b: 'Plus petite unité porteuse de sens. Ex. : « re-dout-able ».' },
  { s: 'francais', f: 'Principe alphabétique', b: 'Compréhension que les lettres de l’écrit codent les sons de l’oral.' },
  { s: 'francais', f: 'Fluence', b: 'Capacité à lire un texte avec rapidité, exactitude et expressivité.' },
  { s: 'francais', f: 'Modèle simple de la lecture', b: 'Lecture = décodage × compréhension (Gough et Tunmer). Si l’un est nul, la lecture l’est aussi.' },
  { s: 'francais', f: 'Polysémie', b: 'Propriété d’un mot qui a plusieurs sens. Ex. : « une feuille » (d’arbre, de papier).' },
  { s: 'francais', f: 'Complément du nom', b: 'Groupe qui complète un nom, souvent introduit par une préposition. Ex. : la robe « de ma sœur ».' },
  { s: 'francais', f: 'Épithète', b: 'Adjectif directement relié au nom, sans verbe. Ex. : un « grand » arbre.' },
  { s: 'francais', f: 'Discours indirect libre', b: 'Paroles rapportées sans verbe introducteur ni guillemets, avec les temps et personnes du récit.' },
  { s: 'maths', f: 'Nombre décimal', b: 'Nombre qui peut s’écrire comme une fraction décimale a/10ⁿ. Ex. : 2,75 = 275/100.' },
  { s: 'maths', f: 'Nombre rationnel', b: 'Quotient de deux entiers (dénominateur non nul). Ex. : 1/3.' },
  { s: 'maths', f: 'Nombre premier', b: 'Entier qui a exactement deux diviseurs : 1 et lui-même. 1 n’est pas premier.' },
  { s: 'maths', f: 'Fraction irréductible', b: 'Fraction dont numérateur et dénominateur n’ont pas d’autre diviseur commun que 1.' },
  { s: 'maths', f: 'Proportionnalité', b: 'Deux grandeurs sont proportionnelles si l’on passe de l’une à l’autre en multipliant toujours par le même nombre.' },
  { s: 'maths', f: 'Médiane', b: 'Valeur qui partage une série ordonnée en deux groupes de même effectif.' },
  { s: 'maths', f: 'Théorème de Pythagore', b: 'Dans un triangle rectangle, le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés.' },
  { s: 'maths', f: 'Théorème de Thalès', b: 'Deux droites sécantes coupées par deux parallèles déterminent des longueurs proportionnelles.' },
  { s: 'maths', f: 'Numération de position', b: 'La valeur d’un chiffre dépend de son rang : dans 333, chaque 3 vaut 300, 30 ou 3.' },
  { s: 'histoire', f: 'Laïcité', b: 'Principe de séparation de l’État et des cultes, de neutralité de l’État et de liberté de conscience.' },
  { s: 'histoire', f: 'Devise de la République', b: 'Liberté, Égalité, Fraternité.' },
  { s: 'sciences', f: 'Photosynthèse', b: 'Production de matière organique par les végétaux chlorophylliens à partir d’eau, de CO₂ et de lumière, avec rejet de O₂.' },
  { s: 'sciences', f: 'Démarche d’investigation', b: 'Questionnement, hypothèses, expérimentation/observation, résultats, conclusion, structuration du savoir.' },
  { s: 'eps', f: 'Les 4 champs d’apprentissage (C2-C3)', b: 'Performance optimale · Déplacements en environnements variés · Prestation artistique/acrobatique · Affrontement collectif ou interindividuel.' },
];

/* Fiches express par matière + liens vers des cours en ligne. */
const FICHES = {
  francais: {
    points: [
      ['Nature vs fonction', 'La nature d’un mot est fixe (nom, verbe, déterminant…). Sa fonction dépend de la phrase (sujet, COD, attribut…).'],
      ['Accord du participe passé', 'Avec être : avec le sujet. Avec avoir : avec le COD s’il est placé avant. Seul : comme un adjectif.'],
      ['Compléments', 'Complément du verbe (COD, COI) : ni supprimable ni déplaçable. Complément de phrase : supprimable et déplaçable.'],
      ['Phonologie', 'Phonème (son), graphème (écriture d’un son), syllabe orale vs syllabe écrite. Le français compte environ 36 phonèmes.'],
      ['Lexique', 'Dérivation (préfixe, suffixe), composition, polysémie, synonymie, antonymie, champ lexical, registre de langue.'],
    ],
    links: [
      ['Lumni : français au primaire', 'https://www.lumni.fr/primaire', 'Vidéos courtes, utiles pour revoir une notion et voir comment l’enseigner.'],
      ['Bescherelle', 'https://www.bescherelle.com/', 'Référence de conjugaison et de grammaire.'],
    ],
  },
  maths: {
    points: [
      ['Numération', 'Chiffre des centaines ≠ nombre de centaines. Décomposer : 4 507 = 4 × 1 000 + 5 × 100 + 7.'],
      ['Fractions et décimaux', 'Tout décimal est rationnel, l’inverse est faux (1/3). Fraction décimale : dénominateur puissance de 10.'],
      ['Proportionnalité', 'Coefficient, passage à l’unité, linéarité additive et multiplicative, produit en croix. Pourcentages = proportionnalité sur 100.'],
      ['Géométrie', 'Pythagore, Thalès, aires (disque πr², triangle b × h ÷ 2), volumes (pavé L × l × h), somme des angles (n − 2) × 180°.'],
      ['Données', 'Moyenne, médiane, étendue, probabilité = issues favorables / issues possibles (si équiprobables).'],
    ],
    links: [
      ['Khan Academy : mathématiques', 'https://fr.khanacademy.org/math', 'Cours et exercices progressifs, gratuits, pour combler des lacunes.'],
      ['Lumni : maths au primaire', 'https://www.lumni.fr/primaire', 'Pour revoir les notions telles qu’elles sont enseignées.'],
    ],
  },
  histoire: {
    points: [
      ['Repères chronologiques', 'Préhistoire (Lascaux), Antiquité (Gaule romaine), Moyen Âge (800 Charlemagne), Temps modernes (1492), Révolution (1789), XIXe (1848, 1881-1882), XXe (1914-1918, 1939-1945, 1958).'],
      ['Géographie de la France', '13 régions métropolitaines, 5 régions d’outre-mer. Fleuves : Loire, Seine, Rhône, Garonne. Massifs : Alpes, Pyrénées, Massif central, Jura, Vosges.'],
      ['EMC', 'Valeurs et symboles de la République, laïcité (1905, 2004, Charte 2013), droits de l’enfant (CIDE 1989).'],
    ],
    links: [
      ['L’histoire par l’image', 'https://www.histoire-image.org/', 'Œuvres commentées, idéal pour l’analyse de documents.'],
      ['Lumni', 'https://www.lumni.fr/primaire', 'Vidéos d’histoire et de géographie.'],
    ],
  },
  sciences: {
    points: [
      ['Matière', 'États et changements d’état, mélanges et solutions, conservation de la masse.'],
      ['Vivant', 'Classification par attributs partagés, chaînes alimentaires, photosynthèse, digestion, respiration, circulation.'],
      ['Terre et Univers', 'Rotation (jour/nuit), révolution (année), inclinaison de l’axe (saisons), phases de la Lune.'],
      ['Démarche', 'Démarche d’investigation et prise en compte des conceptions initiales des élèves.'],
    ],
    links: [
      ['Lumni', 'https://www.lumni.fr/primaire', 'Vidéos de sciences pour le primaire.'],
      ['Primàbord', 'https://primabord.eduscol.education.fr/', 'Portail du ministère pour les professeurs du premier degré.'],
    ],
  },
  systeme: {
    points: [
      ['Cycles', 'C1 : maternelle. C2 : CP-CE1-CE2. C3 : CM1-CM2-6e. C4 : 5e-3e.'],
      ['Textes clés', 'Lois Ferry (1881-1882), loi de 1905, loi handicap (2005), refondation (2013), école de la confiance (2019, instruction à 3 ans).'],
      ['Élèves à besoins particuliers', 'PPRE (difficulté scolaire), PAP (trouble des apprentissages), PAI (santé), PPS (handicap, MDPH).'],
      ['Instances', 'Conseil des maîtres, conseil de cycle, conseil d’école (une fois par trimestre au moins), conseil école-collège.'],
      ['Oral 2', 'Valeurs de la République, laïcité, service public, projection dans le métier, transition écologique, épanouissement de l’élève.'],
    ],
    links: [
      ['Primàbord', 'https://primabord.eduscol.education.fr/', 'Ressources du ministère pour le premier degré.'],
      ['Attendus de l’oral 2 (officiel)', 'https://www.devenirenseignant.gouv.fr/concours-externes-bac-3-precisions-concernant-la-seconde-epreuve-orale-d-admission-1545', 'Précisions du ministère sur la seconde épreuve d’admission.'],
    ],
  },
  eps: {
    points: [
      ['4 champs d’apprentissage', 'Performance optimale ; déplacements en environnements variés ; prestation artistique/acrobatique ; affrontement collectif ou interindividuel.'],
      ['Séance type', 'Mise en train, situation d’apprentissage, situation de référence, retour au calme et bilan.'],
      ['Indicateurs', 'Temps d’engagement moteur, sécurité, variables didactiques (espace, temps, matériel, effectif, règles).'],
    ],
    links: [
      ['Attendus partie EPS (officiel)', 'https://www.devenirenseignant.gouv.fr/concours-externes-bac-3-precisions-concernant-la-seconde-epreuve-orale-d-admission-1545', 'Ce que le jury attend sur la partie EPS de l’oral 2.'],
    ],
  },
};

/* Annales et ressources officielles (liens vérifiés). */
const RESOURCES = [
  {
    title: 'Le concours (officiel)',
    emoji: '🏛️',
    items: [
      ['Épreuves du CRPE externe bac+3', 'https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380', 'Format, durées, coefficients, notes éliminatoires.'],
      ['Programme des épreuves bac+3', 'https://www.devenirenseignant.gouv.fr/le-programme-des-epreuves-des-concours-externes-bac3-de-recrutement-de-professeurs-des-ecoles-1382', 'Ce qu’il faut maîtriser, domaine par domaine.'],
      ['Précisions sur l’oral 2 (EPS + entretien)', 'https://www.devenirenseignant.gouv.fr/concours-externes-bac-3-precisions-concernant-la-seconde-epreuve-orale-d-admission-1545', 'Attendus et conseils aux candidats.'],
      ['Vidéo : l’oral de français ou de maths', 'https://www.devenirenseignant.gouv.fr/crpe-bac-3-epreuve-orale-de-francais-ou-de-mathematiques-1661', 'Présentation de la première épreuve orale.'],
      ['Épreuves du CRPE bac+5 (transitoire)', 'https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac-5-de-recrutement-de-professeurs-des-ecoles-1009', 'Organisé pour les sessions 2026 et 2027.'],
    ],
  },
  {
    title: 'Sujets et rapports de jury',
    emoji: '📝',
    items: [
      ['Sujets officiels du CRPE', 'https://www.devenirenseignant.gouv.fr/ressources?f%5B0%5D=contest_taxonomy%3A199&f%5B1%5D=resources_type%3A43', 'Exemples de sujets bac+3 (écrits et oraux) et sujets des sessions passées.'],
      ['Rapports de jury du CRPE', 'https://www.devenirenseignant.gouv.fr/ressources?f%5B0%5D=contest_taxonomy%3A199&f%5B1%5D=resources_type%3A298', 'À lire absolument : les erreurs fréquentes et les attentes du jury.'],
    ],
  },
  {
    title: 'Annales corrigées',
    emoji: '✅',
    items: [
      ['Annales du CRPE corrigées (maths)', 'https://pi.ac3j.fr/crpe/', 'Sujets de maths corrigés par groupement, sessions récentes.'],
      ['Exemple : corrigé maths 2025, groupement 2', 'https://pi.ac3j.fr/wp-content/uploads/Traces/CRPE2025G2.pdf', 'PDF de corrigé détaillé.'],
      ['Annales CRPE digiSchool', 'https://www.digischool.fr/concours/annales/crpe', 'Sujets par matière ; une partie des contenus est payante.'],
    ],
  },
  {
    title: 'Préparer le concours',
    emoji: '🎓',
    items: [
      ['CNED : tout savoir sur le CRPE bac+3', 'https://www.cned.fr/l-actualite-de-la-formation/blog-devenir-professeur/reussir-le-crpe-tout-savoir-sur-le-concours-externe-niveau-bac-3-licence', 'Présentation du concours et conseils.'],
      ['Primàbord', 'https://primabord.eduscol.education.fr/', 'Le portail ministériel du professeur des écoles.'],
    ],
  },
];

/* Épreuves du CRPE externe bac+3 (source : devenirenseignant.gouv.fr, page consultée en novembre 2026). */
const EXAMS = [
  ['Écrit 1', 'Français + mathématiques', '4 h', '5', 'Deux parties sur 10. Éliminatoire : ≤ 2,5 sur une partie.'],
  ['Écrit 2', '3 domaines au choix parmi 4 : HG-EMC, sciences et techno, arts, langue vivante', '4 h', '3', 'Éliminatoire : ≤ 5/20.'],
  ['Oral 1', 'Leçon de français OU de maths (choix à l’inscription)', '1 h de prép. + 45 min', '5', '0 éliminatoire. Durée modifiée à partir de 2027.'],
  ['Oral 2', 'EPS (8 pts) + entretien (12 pts)', '55 min', '3', '0 à une partie éliminatoire.'],
];

const BADGES = [
  { id: 'first', emoji: '🌱', name: 'Premier pas', desc: 'Terminer un premier jeu' },
  { id: 'perfect', emoji: '💯', name: 'Sans faute', desc: '10/10 à un quiz' },
  { id: 'combo5', emoji: '🔥', name: 'En feu', desc: 'Combo de 5 bonnes réponses' },
  { id: 'streak3', emoji: '📅', name: 'Régulier', desc: '3 jours d’affilée' },
  { id: 'streak7', emoji: '🗓️', name: 'Inarrêtable', desc: '7 jours d’affilée' },
  { id: 'calc20', emoji: '🧮', name: 'Calculatrice', desc: '20 points en calcul mental' },
  { id: 'tf15', emoji: '⚡', name: 'Éclair', desc: '15 points au Vrai / Faux' },
  { id: 'cards50', emoji: '🃏', name: 'Mémoire d’éléphant', desc: '50 cartes révisées' },
  { id: 'allsubjects', emoji: '🌈', name: 'Touche-à-tout', desc: 'Un quiz dans chaque matière' },
  { id: 'xp1000', emoji: '🏆', name: 'Millier', desc: 'Atteindre 1 000 XP' },
];
