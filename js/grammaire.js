/* Corpus de phrases annotées mot par mot : alimente le jeu « Natures des mots » et les tests du chapitre « Classes de mots ».

Format d'une phrase : { s, n }.
- s : les mots séparés par des espaces, chacun suivi de /CODE (voir NATURE_TAGS). Un mot sans code (ponctuation) n'est pas analysé.
  Une locution s'écrit avec _ (parce_que, a_mangé, le_mien) ; un mot qui finit par ’ se colle au suivant ; un mot qui commence par - se colle au précédent.
- n : remarques facultatives, par mot (« leur ») ou par occurrence (« le#2 » = second « le » de la phrase). Elles servent d'explication.
*/

const NATURE_FAMILIES = [
  { id: 'nom', label: 'Nom', emoji: '🏷️', variable: true, test: 'On peut placer un déterminant devant : le courage, un rire.', examples: 'chat, Léa, liberté' },
  { id: 'det', label: 'Déterminant', emoji: '👉', variable: true, test: 'Il précède un nom et se remplace par un autre déterminant : chaque élève → un élève.', examples: 'le, un, du, mon, ce, chaque, deux, quel' },
  { id: 'adj', label: 'Adjectif', emoji: '🎨', variable: true, test: 'On peut ajouter « très » devant et le mettre au féminin : très ancien, ancienne.', examples: 'petit, rouge, premier' },
  { id: 'pro', label: 'Pronom', emoji: '🔁', variable: true, test: 'Il remplace un nom ou un groupe nominal, ou désigne une personne de l’échange.', examples: 'je, leur, celui-ci, qui, le mien, rien' },
  { id: 'verbe', label: 'Verbe', emoji: '⚙️', variable: true, test: 'Il se conjugue : change le temps de la phrase (il dort → il dormait).', examples: 'dormir, est, a mangé' },
  { id: 'adv', label: 'Adverbe', emoji: '🎚️', variable: false, test: 'Invariable, il modifie un verbe, un adjectif, un adverbe ou la phrase.', examples: 'vite, très, hier, ne… pas, où ?' },
  { id: 'prep', label: 'Préposition', emoji: '🔗', variable: false, test: 'Invariable, elle introduit un complément (souvent un groupe nominal).', examples: 'à, de, pour, avec, dans, en, sans' },
  { id: 'conj', label: 'Conjonction', emoji: '🤝', variable: false, test: 'Invariable, elle relie : coordination (mais, ou, et, donc, or, ni, car) ou subordination (que, quand, si…).', examples: 'mais, car, que, lorsque' },
  { id: 'interj', label: 'Interjection', emoji: '❗', variable: false, test: 'Invariable, elle exprime une émotion ou un ordre, souvent suivie de « ! ».', examples: 'oh, hélas, chut, bravo' },
];

const NATURE_TAGS = {
  NC: { family: 'nom', label: 'Nom commun', why: 'Il désigne un être, une chose ou une idée et peut être précédé d’un déterminant.' },
  NP: { family: 'nom', label: 'Nom propre', why: 'Il désigne un être ou un lieu unique et prend une majuscule.' },
  DA: { family: 'det', label: 'Article défini', why: 'Le, la, les, l’ introduisent un nom déterminé, déjà connu.' },
  DI: { family: 'det', label: 'Article indéfini', why: 'Un, une, des introduisent un nom non encore identifié, que l’on peut compter.' },
  DP: { family: 'det', label: 'Article partitif', why: 'Du, de la, de l’ introduisent une quantité non comptable (boire du lait).' },
  DC: { family: 'det', label: 'Article défini contracté', why: 'Au, aux, du, des contractent une préposition et un article défini : du = de + le, au = à + le, des = de + les.' },
  DPOS: { family: 'det', label: 'Déterminant possessif', why: 'Placé devant un nom, il indique le possesseur et s’accorde avec le nom.' },
  DDEM: { family: 'det', label: 'Déterminant démonstratif', why: 'Ce, cet, cette, ces montrent ou désignent le nom qu’ils introduisent.' },
  DIND: { family: 'det', label: 'Déterminant indéfini', why: 'Il introduit un nom en indiquant une quantité ou une identité imprécise (chaque, plusieurs, aucun, tout).' },
  DNUM: { family: 'det', label: 'Déterminant numéral cardinal', why: 'Il indique le nombre exact d’êtres ou de choses désignés par le nom.' },
  DINT: { family: 'det', label: 'Déterminant interrogatif', why: 'Quel, quelle, quels, quelles introduisent un nom sur lequel porte la question.' },
  DEXC: { family: 'det', label: 'Déterminant exclamatif', why: 'Quel, quelle… introduisent un nom dans une phrase exclamative.' },
  ADJ: { family: 'adj', label: 'Adjectif qualificatif', why: 'Il précise une qualité du nom et s’accorde avec lui (on peut ajouter « très »).' },
  PPER: { family: 'pro', label: 'Pronom personnel', why: 'Il désigne une personne de l’échange (je, tu) ou remplace un groupe déjà nommé (il, le, lui, leur, en, y, se).' },
  PPOS: { family: 'pro', label: 'Pronom possessif', why: 'Le mien, la tienne, la leur… remplacent un groupe nominal en indiquant le possesseur.' },
  PDEM: { family: 'pro', label: 'Pronom démonstratif', why: 'Celui, celle-ci, ce, cela, ça remplacent ou désignent sans nom à côté.' },
  PREL: { family: 'pro', label: 'Pronom relatif', why: 'Qui, que, dont, où… reprennent un antécédent placé juste avant et introduisent une subordonnée relative.' },
  PINT: { family: 'pro', label: 'Pronom interrogatif', why: 'Qui ? que ? lequel ? remplacent l’élément sur lequel porte la question.' },
  PIND: { family: 'pro', label: 'Pronom indéfini', why: 'On, personne, rien, chacun, quelqu’un, plusieurs… désignent de façon imprécise, sans nom à côté.' },
  V: { family: 'verbe', label: 'Verbe', why: 'Il exprime une action ou un état et se conjugue (il change avec le temps).' },
  ADV: { family: 'adv', label: 'Adverbe', why: 'Invariable, il modifie un verbe, un adjectif, un autre adverbe ou la phrase.' },
  PREP: { family: 'prep', label: 'Préposition', why: 'Invariable, elle introduit un complément.' },
  CC: { family: 'conj', label: 'Conjonction de coordination', why: 'Mais, ou, et, donc, or, ni, car relient deux éléments de même fonction.' },
  CS: { family: 'conj', label: 'Conjonction de subordination', why: 'Elle introduit une proposition subordonnée, sans reprendre d’antécédent.' },
  INT: { family: 'interj', label: 'Interjection', why: 'Invariable, elle exprime une émotion ou un ordre.' },
};

/* Natures voisines, utilisées comme mauvaises réponses plausibles. */
const NATURE_CONFUSIONS = {
  NC: ['ADJ', 'V', 'ADV'], NP: ['NC', 'ADJ', 'PPER'],
  DA: ['PPER', 'DI', 'DC'], DI: ['DA', 'DP', 'DC'], DP: ['DC', 'DI', 'PREP'], DC: ['DP', 'DI', 'PREP'],
  DPOS: ['PPOS', 'PPER', 'ADJ'], DDEM: ['PDEM', 'DA', 'DIND'], DIND: ['PIND', 'ADJ', 'ADV'], DNUM: ['ADJ', 'DIND', 'NC'],
  DINT: ['DEXC', 'PINT', 'ADJ'], DEXC: ['DINT', 'ADV', 'INT'], ADJ: ['ADV', 'NC', 'V'],
  PPER: ['DA', 'DPOS', 'PREP'], PPOS: ['DPOS', 'PPER', 'PDEM'], PDEM: ['DDEM', 'PPER', 'PREL'], PREL: ['CS', 'PINT', 'ADV'],
  PINT: ['PREL', 'ADV', 'DINT'], PIND: ['DIND', 'NC', 'PPER'], V: ['NC', 'ADJ', 'ADV'],
  ADV: ['ADJ', 'PREP', 'CS'], PREP: ['ADV', 'CS', 'PPER'], CC: ['CS', 'PREP', 'ADV'], CS: ['PREL', 'CC', 'ADV'], INT: ['ADV', 'NC', 'ADJ'],
};

const NATURE_SENTENCES = [
  { s: 'Hier/ADV , le/DA petit/ADJ chat/NC de/PREP Léa/NP dormait/V paisiblement/ADV .' },
  { s: 'Leurs/DPOS enfants/NC jouent/V dans/PREP la/DA cour/NC .', n: { leurs: 'Placé devant le nom « enfants », il s’accorde avec lui (leurs) : déterminant possessif.' } },
  { s: 'Je/PPER leur/PPER ai_écrit/V une/DI longue/ADJ lettre/NC .', n: { leur: 'Placé devant le verbe, il remplace « à eux » et reste invariable : pronom personnel.', ai_écrit: 'Verbe écrire au passé composé : l’auxiliaire et le participe forment une seule forme verbale.' } },
  { s: 'Il/PPER boit/V du/DP jus/NC d’/PREP orange/NC chaque/DIND matin/NC .', n: { du: 'Il désigne une quantité de jus qu’on ne compte pas : article partitif (au féminin on dirait « de la »).', 'd’': 'Il relie « orange » au nom « jus » (complément du nom) : préposition.' } },
  { s: 'Le/DA cahier/NC du/DC maître/NC est/V rouge/ADJ .', n: { du: 'Il équivaut à « de le » (le cahier de le maître) : article défini contracté.' } },
  { s: 'Le/DA livre/NC que/PREL je/PPER lis/V est/V passionnant/ADJ .', n: { que: 'Il reprend l’antécédent « livre » (je lis le livre) : pronom relatif.' } },
  { s: 'Je/PPER pense/V que/CS tu/PPER as/V raison/NC .', n: { que: 'Il n’a pas d’antécédent et introduit une subordonnée complétive : conjonction de subordination.' } },
  { s: 'Que/ADV ce/DDEM paysage/NC est/V beau/ADJ !', n: { que: 'Dans une exclamation, il signifie « comme » et porte sur l’adjectif : adverbe exclamatif.' } },
  { s: 'Plusieurs/DIND élèves/NC sont/V absents/ADJ aujourd’hui/ADV .', n: { plusieurs: 'Il introduit le nom « élèves » : déterminant indéfini.' } },
  { s: 'Plusieurs/PIND sont_partis/V avant/PREP la/DA fin/NC .', n: { plusieurs: 'Aucun nom ne le suit : il remplace un groupe nominal et il est sujet. C’est un pronom indéfini.' } },
  { s: 'Elle/PPER part/V avec/PREP son/DPOS frère/NC mais/CC elle/PPER reviendra/V demain/ADV .' },
  { s: 'Il/PPER parle/V bas/ADV pour/PREP ne/ADV pas/ADV réveiller/V le/DA bébé/NC .', n: { bas: 'Il modifie le verbe « parle » et ne varie pas (elles parlent bas) : adverbe.', ne: 'Avec « pas », il exprime la négation : adverbe de négation.', pas: 'Avec « ne », il exprime la négation : adverbe de négation.', réveiller: 'Verbe à l’infinitif : il ne se conjugue pas ici mais reste un verbe.' } },
  { s: 'Ce/DDEM mur/NC bas/ADJ entoure/V un/DI jardin/NC fleuri/ADJ .', n: { bas: 'Il qualifie le nom « mur » et s’accorde (une table basse) : adjectif qualificatif.', fleuri: 'Participe passé employé comme adjectif : il qualifie « jardin » (un jardin très fleuri).' } },
  { s: 'Elle/PPER a_tricoté/V un/DI bas/NC de/PREP laine/NC .', n: { bas: 'Il est précédé du déterminant « un » : nom commun.' } },
  { s: 'Tout/DIND homme/NC est/V mortel/ADJ .', n: { tout: 'Il introduit le nom « homme » (on peut dire « un homme ») : déterminant indéfini.' } },
  { s: 'Tout/PIND est/V prêt/ADJ pour/PREP la/DA fête/NC .', n: { tout: 'Aucun nom ne le suit et il est sujet du verbe : pronom indéfini.' } },
  { s: 'Le/DA bébé/NC est/V tout/ADV petit/ADJ .', n: { tout: 'Devant l’adjectif « petit », il signifie « très » : adverbe.' } },
  { s: 'Des/DI pommes/NC ? Il/PPER en/PPER mange/V souvent/ADV .', n: { en: 'Il remplace « des pommes » : pronom personnel (dit adverbial).' } },
  { s: 'Nous/PPER partons/V en/PREP vacances/NC en/PREP juillet/NC .', n: { en: 'Il introduit le complément « vacances » : préposition.', 'en#2': 'Il introduit le complément « juillet » : préposition.' } },
  { s: 'Les/DA enfants/NC du/DC quartier/NC les/PPER attendent/V devant/PREP l’/DA école/NC .', n: { 'les#2': 'Placé devant le verbe, il remplace un groupe nominal (attendent les amis) : pronom personnel.', du: 'Il équivaut à « de le » : article défini contracté.' } },
  { s: 'Ce/PDEM que/PREL tu/PPER dis/V me/PPER surprend/V .', n: { ce: 'Aucun nom ne le suit : il sert d’antécédent au relatif « que ». C’est un pronom démonstratif.', que: 'Il reprend l’antécédent « ce » : pronom relatif.' } },
  { s: 'C’/PDEM est/V la/DA ville/NC où/PREL je/PPER suis_né/V .', n: { où: 'Il reprend l’antécédent « ville » : pronom relatif.', 'c’': 'Forme élidée de « ce », sans nom à côté : pronom démonstratif.' } },
  { s: 'Où/ADV vas/V -tu/PPER ce/DDEM soir/NC ?', n: { où: 'Il pose une question sur le lieu, sans antécédent : adverbe interrogatif.', ce: 'Il introduit le nom « soir » : déterminant démonstratif.' } },
  { s: 'Quand/CS il/PPER pleut/V , les/DA escargots/NC sortent/V .', n: { quand: 'Il introduit une subordonnée de temps : conjonction de subordination.', il: 'Pronom personnel impersonnel : il ne remplace rien (il pleut).' } },
  { s: 'Quand/ADV pars/V -tu/PPER ?', n: { quand: 'Il pose une question sur le moment : adverbe interrogatif.' } },
  { s: 'Si/CS tu/PPER viens/V , nous/PPER irons/V au/DC cinéma/NC .', n: { si: 'Il introduit une subordonnée de condition : conjonction de subordination.', au: 'Il équivaut à « à le » : article défini contracté.' } },
  { s: 'Ce/DDEM film/NC est/V si/ADV drôle/ADJ que/CS nous/PPER avons_ri/V .', n: { si: 'Devant l’adjectif « drôle », il marque l’intensité (= tellement) : adverbe.', que: 'Il introduit une subordonnée de conséquence, sans antécédent : conjonction de subordination.' } },
  { s: 'Comme/CS il/PPER neige/V , l’/DA école/NC ferme/V plus/ADV tôt/ADV .', n: { comme: 'Il introduit une subordonnée de cause : conjonction de subordination.', ferme: 'Il se conjugue (l’école fermait) : verbe.' } },
  { s: 'Comme/ADV tu/PPER as_grandi/V !', n: { comme: 'Dans une exclamation, il marque l’intensité : adverbe exclamatif.' } },
  { s: 'Le/DA car/NC est/V en/PREP retard/NC car/CC la/DA route/NC est/V glissante/ADJ .', n: { car: 'Il est précédé du déterminant « le » : nom commun.', 'car#2': 'Il relie deux propositions et introduit une explication : conjonction de coordination.' } },
  { s: 'Le/DA son/NC du/DC piano/NC résonne/V dans/PREP son/DPOS salon/NC .', n: { son: 'Il est précédé du déterminant « le » : nom commun.', 'son#2': 'Il introduit le nom « salon » et indique le possesseur : déterminant possessif.' } },
  { s: 'Aucun/DIND élève/NC n’/ADV a_oublié/V son/DPOS cahier/NC .', n: { aucun: 'Il introduit le nom « élève » : déterminant indéfini.', 'n’': 'Forme élidée de « ne » : adverbe de négation.' } },
  { s: 'Personne/PIND n’/ADV a_répondu/V à/PREP la/DA question/NC .', n: { personne: 'Sans déterminant et sujet du verbe, il signifie « aucun être » : pronom indéfini.' } },
  { s: 'Une/DI personne/NC âgée/ADJ attend/V le/DA bus/NC .', n: { personne: 'Il est précédé du déterminant « une » : nom commun.' } },
  { s: 'Chacun/PIND range/V ses/DPOS affaires/NC .' },
  { s: 'Celui-ci/PDEM est/V à/PREP moi/PPER .' },
  { s: 'Quel/DEXC beau/ADJ temps/NC !', n: { quel: 'Il introduit le groupe « beau temps » dans une exclamation : déterminant exclamatif.' } },
  { s: 'Quelle/DINT robe/NC choisis/V -tu/PPER ?', n: { quelle: 'Il introduit le nom « robe » dans une question : déterminant interrogatif.' } },
  { s: 'Qui/PINT a_cassé/V ce/DDEM vase/NC ?', n: { qui: 'Il pose la question sur le sujet, sans antécédent : pronom interrogatif.' } },
  { s: 'L’/DA élève/NC qui/PREL lève/V la/DA main/NC répondra/V .', n: { qui: 'Il reprend l’antécédent « élève » : pronom relatif.' } },
  { s: 'Le/DA garçon/NC dont/PREL je/PPER te/PPER parle/V habite/V ici/ADV .', n: { dont: 'Il reprend l’antécédent « garçon » (je te parle du garçon) : pronom relatif.' } },
  { s: 'Oh/INT ! Le/DA joli/ADJ papillon/NC !' },
  { s: 'Hélas/INT , la/DA pluie/NC a_gâché/V notre/DPOS pique-nique/NC .' },
  { s: 'Chut/INT ! Les/DA élèves/NC travaillent/V .' },
  { s: 'Deux/DNUM chats/NC noirs/ADJ dorment/V sous/PREP la/DA table/NC .' },
  { s: 'Le/DA premier/ADJ jour/NC , Léa/NP était/V très/ADV inquiète/ADJ .', n: { premier: 'Adjectif numéral ordinal : il indique le rang et se range dans la classe des adjectifs (la première fois).' } },
  { s: 'Mentir/V est/V un/DI défaut/NC .', n: { mentir: 'Verbe à l’infinitif, ici sujet du verbe « est ».' } },
  { s: 'On/PIND frappe/V à/PREP la/DA porte/NC .', n: { on: 'Il désigne une ou plusieurs personnes indéterminées : pronom indéfini.' } },
  { s: 'Elle/PPER se/PPER lève/V tôt/ADV et/CC prend/V son/DPOS petit-déjeuner/NC .', n: { se: 'Il renvoie au sujet « elle » : pronom personnel réfléchi.' } },
  { s: 'Il/PPER faut/V lire/V ou/CC écrire/V chaque/DIND jour/NC .', n: { il: 'Pronom personnel impersonnel : il ne remplace rien (il faut).' } },
  { s: 'Je/PPER ne/ADV sais/V ni/CC lire/V ni/CC écrire/V le/DA russe/NC .', n: { russe: 'Précédé de l’article « le », il désigne la langue : nom commun.' } },
  { s: 'Tolstoï/NP est/V un/DI écrivain/NC russe/ADJ .', n: { russe: 'Il qualifie le nom « écrivain » : adjectif qualificatif.' } },
  { s: 'Lorsque/CS la/DA cloche/NC sonne/V , les/DA élèves/NC rentrent/V en/PREP classe/NC .' },
  { s: 'Il/PPER court/V vite/ADV parce_qu’/CS il/PPER est/V en/PREP retard/NC .', n: { 'parce_qu’': 'Locution conjonctive : elle introduit une subordonnée de cause.' } },
  { s: 'Elle/PPER est/V forte/ADJ mais/CC elle/PPER parle/V trop/ADV fort/ADV .', n: { forte: 'Il qualifie le sujet « elle » et s’accorde au féminin : adjectif qualificatif.', fort: 'Il modifie le verbe « parle » et ne s’accorde pas : adverbe.' } },
  { s: 'J’/PPER y/PPER pense/V souvent/ADV .', n: { y: 'Il remplace « à cela » (je pense à mes vacances) : pronom personnel (dit adverbial).' } },
  { s: 'La/DA maîtresse/NC la/PPER félicite/V .', n: { 'la#2': 'Placé devant le verbe, il remplace un groupe nominal (félicite la fillette) : pronom personnel.' } },
  { s: 'Ma/DPOS trousse/NC est/V rouge/ADJ , la_tienne/PPOS est/V bleue/ADJ .', n: { 'la_tienne': 'Il remplace « ta trousse » : pronom possessif.' } },
  { s: 'Notre/DPOS maison/NC est/V ancienne/ADJ , la_leur/PPOS est/V neuve/ADJ .', n: { 'la_leur': 'Précédé d’un article et sans nom après lui, il remplace « leur maison » : pronom possessif.' } },
  { s: 'Certains/PIND aiment/V le/DA calme/NC des/DC lacs/NC .', n: { certains: 'Aucun nom ne le suit et il est sujet : pronom indéfini.', calme: 'Précédé de l’article « le » : nom commun.', des: 'Il équivaut à « de les » (le calme de les lacs) : article défini contracté.' } },
  { s: 'Le/DA lac/NC reste/V calme/ADJ ce/DDEM matin/NC .', n: { calme: 'Il qualifie le sujet « le lac » après le verbe « reste » : adjectif qualificatif.' } },
  { s: 'Des/DI élèves/NC lisent/V les/DA contes/NC des/DC frères/NC Grimm/NP .', n: { des: 'Pluriel de « un élève » : article indéfini.', 'des#2': 'Il équivaut à « de les » (les contes de les frères) : article défini contracté.' } },
  { s: 'Elle/PPER marche/V lentement/ADV vers/PREP la/DA gare/NC .' },
  { s: 'Pendant/PREP la/DA récréation/NC , les/DA enfants/NC jouent/V au/DC ballon/NC .' },
  { s: 'Le/DA soir/NC , nous/PPER mangeons/V de_la/DP soupe/NC chaude/ADJ .', n: { 'de_la': 'Quantité de soupe qu’on ne compte pas : article partitif.' } },
  { s: 'Cette/DDEM histoire/NC , je/PPER la/PPER connais/V depuis/PREP longtemps/ADV .', n: { la: 'Placé devant le verbe, il reprend « cette histoire » : pronom personnel.' } },
  { s: 'Mon/DPOS frère/NC et/CC moi/PPER partons/V à/PREP Lyon/NP .' },
  { s: 'Elle/PPER lui/PPER a_offert/V un/DI livre/NC .', n: { lui: 'Il remplace « à son amie » : pronom personnel.' } },
  { s: 'Demain/ADV , nous/PPER visiterons/V le/DA musée/NC sans/PREP nos/DPOS parents/NC .' },
  { s: 'Le/DA chien/NC aboie/V , donc/CC quelqu’un/PIND approche/V .' },
  { s: 'Rien/PIND ne/ADV bouge/V dans/PREP la/DA forêt/NC .' },
  { s: 'Bravo/INT , tu/PPER as_réussi/V !' },
  { s: 'Les/DA fleurs/NC que/PREL tu/PPER as_cueillies/V sont/V déjà/ADV fanées/ADJ .', n: { que: 'Il reprend l’antécédent « fleurs » : pronom relatif.', fanées: 'Participe passé employé comme adjectif : il qualifie « les fleurs ».' } },
  { s: 'Le/DA directeur/NC veut/V que/CS chaque/DIND élève/NC participe/V .' },
  { s: 'Cet/DDEM oiseau/NC chante/V joyeusement/ADV sur/PREP la/DA branche/NC .' },
  { s: 'Mes/DPOS cousins/NC viendront/V ou/CC ils/PPER téléphoneront/V .' },
];

/* Découpe une phrase en mots analysés. */
function parseNatureSentence(entry) {
  const counts = {};
  const tokens = entry.s.split(' ').filter(Boolean).map((raw) => {
    const slash = raw.lastIndexOf('/');
    const hasTag = slash > 0 && NATURE_TAGS[raw.slice(slash + 1)];
    const word = (hasTag ? raw.slice(0, slash) : raw);
    const key = word.toLowerCase();
    const occurrence = hasTag ? (counts[key] = (counts[key] || 0) + 1) : 0;
    const notes = entry.n || {};
    return {
      word: word.replace(/_/g, ' '),
      key,
      tag: hasTag ? raw.slice(slash + 1) : null,
      occurrence,
      note: hasTag ? (notes[`${key}#${occurrence}`] || (occurrence === 1 ? notes[key] : null)) : null,
    };
  });
  tokens.forEach((token) => { token.total = counts[token.key] || 0; });
  return tokens;
}

/* Recompose le texte de la phrase (espaces, élisions, traits d'union). */
function natureSentenceText(tokens, render = (token) => token.word) {
  let html = '';
  tokens.forEach((token, i) => {
    const previous = tokens[i - 1];
    const glued = !previous || previous.word.endsWith('’') || token.word.startsWith('-') || /^[.,]$/.test(token.word);
    html += (glued ? '' : (/^[!?;:]$/.test(token.word) ? ' ' : ' ')) + render(token, i);
  });
  return html;
}

const NATURE_CORPUS = NATURE_SENTENCES.map(parseNatureSentence);

const NATURE_TOO_EASY = ['je', 'j’', 'tu', '-tu', 'il', 'elle', 'nous', 'ils'];

/* Questions du chapitre « Classes de mots » tirées du corpus : une par mot intéressant (remarque, homographe, ou nature autre que nom, verbe, article défini). */
(function buildNatureQuestions() {
  const tagsByWord = {};
  NATURE_CORPUS.forEach((tokens) => tokens.forEach((t) => { if (t.tag) (tagsByWord[t.key] = tagsByWord[t.key] || new Set()).add(t.tag); }));
  const labels = Object.keys(NATURE_TAGS);
  const pool = [];
  NATURE_CORPUS.forEach((tokens) => {
    const sentence = natureSentenceText(tokens);
    tokens.forEach((t) => {
      if (!t.tag) return;
      const homograph = tagsByWord[t.key].size > 1;
      if (!t.note && (t.tag === 'DA' || (!homograph && ['NC', 'NP', 'V'].includes(t.tag)) || NATURE_TOO_EASY.includes(t.key))) return;
      const info = NATURE_TAGS[t.tag];
      const wrong = [...NATURE_CONFUSIONS[t.tag]];
      while (wrong.length < 3) {
        const extra = labels[Math.floor(Math.random() * labels.length)];
        if (extra !== t.tag && !wrong.includes(extra)) wrong.push(extra);
      }
      const which = t.total > 1 ? ` (${t.occurrence === 1 ? '1re' : `${t.occurrence}e`} occurrence)` : '';
      pool.push({
        q: `Dans « ${sentence} », quelle est la nature de « ${t.word} »${which} ?`,
        c: [info.label, ...wrong.slice(0, 3).map((tag) => NATURE_TAGS[tag].label)],
        a: 0,
        e: t.note || `${info.label} : ${info.why}`,
      });
    });
  });
  QUESTION_POOLS['francais/classes-de-mots'] = pool;
})();
