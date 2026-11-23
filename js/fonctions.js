/* Corpus de phrases découpées en groupes fonctionnels : alimente le jeu « Fonctions dans la phrase » et les tests du chapitre « Les fonctions dans la phrase ».
Chargé après js/grammaire.js (réutilise natureSentenceText pour recomposer le texte).

Format d'une phrase : { s, n }.
- s : les mots séparés par des espaces. Un groupe s'ouvre par {CODE (voir FONCTION_TAGS) et se ferme par } collé à son dernier mot ; les groupes s'emboîtent
  (un complément du nom dans un COD). Un complément de phrase précise sa valeur : {CP:temps. {V …} marque le verbe, qui n'est pas interrogé.
  Mêmes conventions que js/grammaire.js : _ pour une locution, un mot qui finit par ’ se colle au suivant.
- n : remarques facultatives, par groupe (texte du groupe en minuscules). Elles servent d'explication.
Seuls les groupes balisés sont interrogés : ne pas mettre de proposition subordonnée dont les fonctions internes ne sont pas balisées.
*/

const FONCTION_FAMILIES = [
  { id: 'S', label: 'Sujet', short: 'Sujet', emoji: '👤', test: 'Il commande l’accord du verbe : on l’encadre par « c’est… qui ».', pronoun: 'il, elle, ils, elles', example: 'Le chat dort. → C’est le chat qui dort.' },
  { id: 'COD', label: 'COD', short: 'COD', emoji: '🎯', test: 'Construit sans préposition, il répond à « qui ? » ou « quoi ? » après le verbe ; ni supprimable ni déplaçable.', pronoun: 'le, la, les ; en (avec du, de la, des)', example: 'Elle lit un livre. → Elle le lit.' },
  { id: 'COI', label: 'COI', short: 'COI', emoji: '↪️', test: 'Introduit par une préposition (à, de) exigée par le verbe ; ni supprimable ni déplaçable.', pronoun: 'lui, leur, y, en', example: 'Il parle à Paul. → Il lui parle.' },
  { id: 'COS', label: 'COS', short: 'COS', emoji: '🎁', test: 'Second complément d’objet d’un verbe qui a déjà un COD (donner quelque chose à quelqu’un).', pronoun: 'lui, leur', example: 'Je donne un livre à Paul. → Je lui donne un livre.' },
  { id: 'AS', label: 'Attribut du sujet', short: 'Attr. du sujet', emoji: '🪞', test: 'Après un verbe attributif (être, sembler, paraître, devenir, rester…), il qualifie le sujet.', pronoun: 'le (invariable)', example: 'Elle semble fatiguée. → Elle le semble.' },
  { id: 'ACOD', label: 'Attribut du COD', short: 'Attr. du COD', emoji: '🏅', test: 'Après trouver, juger, rendre, nommer, élire…, il qualifie le COD par l’intermédiaire du verbe.', pronoun: 'se supprime : le sens du verbe change', example: 'Je trouve ce film excellent.' },
  { id: 'CP', label: 'Complément de phrase', short: 'Compl. de phrase', emoji: '🧭', test: 'Supprimable et déplaçable, il indique les circonstances : temps, lieu, cause, but, manière, moyen…', pronoun: 'aucun pronom obligatoire', example: 'Demain, nous irons au parc. / Nous irons au parc demain.' },
  { id: 'CAG', label: 'Complément d’agent', short: 'Compl. d’agent', emoji: '🙋', test: 'Dans une phrase passive, il désigne qui fait l’action ; introduit par « par » (parfois « de »), il redevient sujet à l’actif.', pronoun: 'redevient sujet à l’actif', example: 'Le chat est caressé par Léa. → Léa caresse le chat.' },
  { id: 'CDN', label: 'Complément du nom', short: 'Compl. du nom', emoji: '🔗', test: 'Relié à un nom par une préposition (de, à, en…), il fait partie du groupe nominal.', pronoun: 'se supprime avec le nom qu’il complète', example: 'le livre de Marie, un gâteau au chocolat' },
  { id: 'EPI', label: 'Épithète', short: 'Épithète', emoji: '🎨', test: 'Adjectif placé directement à côté du nom, sans verbe attributif ni virgule.', pronoun: 'se supprime', example: 'un grand arbre, des roses rouges' },
  { id: 'APP', label: 'Apposition', short: 'Apposition', emoji: '📌', test: 'Détachée par des virgules, elle désigne la même réalité que le nom ou le pronom qu’elle accompagne.', pronoun: 'se supprime', example: 'Paris, capitale de la France, attire les touristes.' },
];

const FONCTION_LABELS = Object.fromEntries(FONCTION_FAMILIES.map((f) => [f.id, f.label]));
const CP_VALUES = ['temps', 'lieu', 'cause', 'but', 'manière', 'moyen', 'opposition'];

/* Fonctions voisines, utilisées comme mauvaises réponses plausibles. */
const FONCTION_CONFUSIONS = {
  S: ['COD', 'APP', 'CP'], COD: ['COI', 'AS', 'CP'], COI: ['COD', 'CDN', 'CP'], COS: ['COI', 'COD', 'CDN'],
  AS: ['COD', 'EPI', 'ACOD'], ACOD: ['AS', 'EPI', 'COD'], CP: ['COI', 'COD', 'CDN'], CAG: ['CP', 'COI', 'CDN'],
  CDN: ['COI', 'CP', 'EPI'], EPI: ['AS', 'APP', 'ACOD'], APP: ['EPI', 'S', 'AS'],
};

const FONCTION_SENTENCES = [
  { s: '{CP:temps Le matin} , {S la {EPI petite} Léa} {V offre} {COD un bouquet {CDN de fleurs}} {COS à sa mère} .', n: { 'à sa mère': 'Le verbe a déjà un COD (un bouquet de fleurs) : ce second complément d’objet est un COS (elle lui offre un bouquet).' } },
  { s: '{S Mon voisin} , {APP médecin {CDN de campagne}} , {V semble} {AS épuisé} .', n: { 'épuisé': '« sembler » est attributif : « épuisé » qualifie le sujet « mon voisin » (il le semble).' } },
  { s: '{S Les élèves} {V ont élu} {COD Samir} {ACOD délégué} .', n: { 'délégué': 'Il qualifie « Samir », COD du verbe « élire » : attribut du COD.', samir: 'Construit sans préposition, il se remplace par « le » : les élèves l’ont élu délégué.' } },
  { s: '{S Pierre} {V lit} {COD un roman} {CP:lieu dans le train} .', n: { 'dans le train': 'Supprimable et déplaçable (Dans le train, Pierre lit un roman) : complément de phrase de lieu.' } },
  { s: '{S Le directeur} {V reste} {AS calme} {CP:opposition malgré les critiques} .', n: { calme: '« rester » est un verbe attributif : « calme » qualifie le sujet.', 'malgré les critiques': 'Supprimable et déplaçable, il marque une opposition : complément de phrase.' } },
  { s: '{S Les élèves} {V écoutent} {COD la maîtresse} .', n: { 'la maîtresse': 'Sans préposition, il se remplace par « la » (les élèves l’écoutent) : COD.' } },
  { s: '{S Les élèves} {V parlent} {COI à la maîtresse} .', n: { 'à la maîtresse': 'Introduit par « à », il se remplace par « lui » (les élèves lui parlent) : COI.' } },
  { s: '{S Il} {V mange} {COD du pain} {CP:temps chaque matin} .', n: { 'du pain': '« du » est ici un article partitif, pas une préposition : le groupe se construit directement et se remplace par « en » (il en mange). C’est un COD.' } },
  { s: '{CP:lieu Dans le jardin} {V poussent} {S des roses {EPI rouges}} .', n: { 'des roses rouges': 'Sujet inversé, placé après le verbe : ce sont des roses rouges qui poussent. Le verbe s’accorde avec lui.' } },
  { s: '{S Mentir} {V est} {AS un {EPI vilain} défaut} .', n: { mentir: 'Un infinitif peut être sujet : c’est mentir qui est un vilain défaut.', 'un vilain défaut': 'Après le verbe attributif « être », ce groupe nominal qualifie le sujet : attribut du sujet.' } },
  { s: '{S Le chat} {V est caressé} {CAG par Léa} .', n: { 'par léa': 'La phrase est passive : à l’actif, « Léa » redevient sujet (Léa caresse le chat). C’est le complément d’agent.' } },
  { s: '{S Elle} {V pense} {COI à ses vacances} .', n: { 'à ses vacances': 'Introduit par « à » et désignant une chose, il se remplace par « y » (elle y pense) : COI.' } },
  { s: '{S Il} {V parle} {COI de son voyage} {CP:temps depuis une heure} .', n: { 'de son voyage': 'Introduit par « de », exigé par le verbe, il se remplace par « en » (il en parle) : COI.', 'depuis une heure': 'Supprimable et déplaçable, il indique la durée : complément de phrase de temps.' } },
  { s: '{S Je} {V trouve} {COD ce film} {ACOD excellent} .', n: { excellent: '« trouver » n’est pas attributif, mais « excellent » qualifie le COD « ce film » à travers le verbe : attribut du COD.' } },
  { s: '{S Paris} , {APP capitale {CDN de la France}} , {V attire} {COD les touristes} .' },
  { s: '{CP:manière Avec patience} , {S la maîtresse} {V explique} {COD la règle} .' },
  { s: '{S Je} {COI lui} {V parle} .', n: { lui: 'Pronom placé devant le verbe : il remplace « à + une personne » (je parle à Paul). C’est un COI.' } },
  { s: '{S Nous} {COS leur} {V offrons} {COD un cadeau} .', n: { leur: 'Il remplace « à nos amis » et le verbe a déjà un COD (un cadeau) : COS. Pronom personnel, il reste invariable.' } },
  { s: '{S Je} {COD le} {COS lui} {V donne} .', n: { le: 'Il remplace la chose donnée (je donne le livre) : COD.', lui: 'Il remplace la personne à qui l’on donne (à Paul) ; le verbe a déjà un COD : COS.' } },
  { s: '{S Il} {COD en} {V mange} {CP:temps tous les jours} .', n: { en: '« en » remplace un COD introduit par un article partitif ou indéfini (il mange des pommes → il en mange) : COD.' } },
  { s: '{S Ma sœur} {V devient} {AS une {EPI excellente} nageuse} .', n: { 'une excellente nageuse': '« devenir » est attributif : le groupe nominal qualifie le sujet. Ce n’est pas un COD.' } },
  { s: '{S Le ciel} {V paraît} {AS menaçant} {CP:temps ce soir} .' },
  { s: '{S Le maire} {V a nommé} {COD Mme Diallo} {ACOD directrice {CDN de l’ école}} .', n: { 'directrice de l’école': 'Il qualifie « Mme Diallo », COD du verbe « nommer » : attribut du COD.' } },
  { s: '{CP:cause À cause du verglas} , {S le maire} {V a fermé} {COD la route} .', n: { 'à cause du verglas': 'Supprimable et déplaçable, il donne la cause : complément de phrase.' } },
  { s: '{S Il} {V s’ entraîne} {CP:but pour gagner {COD la course}} .', n: { 'pour gagner la course': 'Supprimable et déplaçable, il indique le but : complément de phrase. À l’intérieur, « la course » est le COD de l’infinitif « gagner ».', 'la course': 'COD de l’infinitif « gagner » : gagner quoi ? la course (pour la gagner).' } },
  { s: '{S Il} {V ouvre} {COD la porte} {CP:moyen avec une clé} .', n: { 'avec une clé': 'Supprimable et déplaçable, il indique le moyen : complément de phrase.' } },
  { s: '{S La souris} {V est mangée} {CAG par le chat {EPI affamé}} .', n: { 'par le chat affamé': 'Phrase passive : à l’actif, on dirait « le chat affamé mange la souris ». C’est le complément d’agent.' } },
  { s: '{S Le livre {CDN de Marie}} {V est} {AS passionnant} .', n: { 'de marie': 'Il complète le nom « livre », pas le verbe : complément du nom.' } },
  { s: '{S Un {EPI grand} arbre} {V ombrage} {COD la cour {CDN de récréation}} .' },
  { s: '{S Ce gâteau {CDN au chocolat}} {V semble} {AS délicieux} .', n: { 'au chocolat': '« au » = à + le. Le groupe complète le nom « gâteau » : complément du nom.' } },
  { s: '{S Elle} {V téléphone} {COI à sa grand-mère} {CP:temps chaque dimanche} .', n: { 'à sa grand-mère': 'Introduit par « à », exigé par le verbe, il se remplace par « lui » (elle lui téléphone) : COI.' } },
  { s: '{S Les enfants} {V obéissent} {COI à leurs parents} .', n: { 'à leurs parents': 'On obéit à quelqu’un : le complément se remplace par « leur » (ils leur obéissent). COI.' } },
  { s: '{S Elle} {V est partie} {CP:temps hier soir} .', n: { elle: 'Dans « est partie », « est » est l’auxiliaire du passé composé de partir : il n’y a pas d’attribut ici.' } },
  { s: '{S Qui sème {COD le vent}} {V récolte} {COD la tempête} .', n: { 'qui sème le vent': 'Une proposition peut être sujet : c’est « qui sème le vent » qui récolte la tempête.', 'le vent': 'COD du verbe « sème », à l’intérieur de la proposition sujet.' } },
  { s: '{S Le professeur} {V rend} {COD les copies} {COS aux élèves} .', n: { 'aux élèves': '« aux » = à + les. Le verbe a déjà un COD (les copies) : COS (il leur rend les copies).' } },
  { s: '{S Léa} {V raconte} {COD une histoire} {COS à son {EPI petit} frère} .' },
  { s: '{CP:temps Chaque été} , {S nous} {V passons} {COD nos vacances} {CP:lieu à la montagne} .' },
  { s: '{S On} {V a élu} {COD ce chanteur} {ACOD artiste {CDN de l’ année}} .', n: { on: 'Le pronom indéfini « on » est sujet : c’est on qui a élu.' } },
  { s: '{S Les invités} {V restent} {AS silencieux} .' },
  { s: '{S Cette maison} {V a été construite} {CAG par mon grand-père} {CP:temps en 1950} .', n: { 'par mon grand-père': 'Phrase passive : à l’actif, mon grand-père a construit cette maison. Complément d’agent.' } },
  { s: '{S Mon frère} , {APP un {EPI grand} sportif} , {V court} {COD le marathon} .' },
  { s: '{S L’ élève} {V a oublié} {COD son cahier {CDN de mathématiques}} .' },
  { s: '{S Les oiseaux} {V chantent} {CP:lieu dans les arbres} .' },
  { s: '{CP:temps Demain} , {S nous} {V partirons} {CP:temps à l’ aube} .', n: { 'à l’aube': 'Une phrase peut contenir plusieurs compléments de phrase : celui-ci précise le moment du départ.' } },
  { s: '{S Tu} {V ressembles} {COI à ton père} .', n: { 'à ton père': 'On ressemble à quelqu’un : le complément est exigé par le verbe et se remplace par « lui » (tu lui ressembles). COI.' } },
  { s: '{S La maîtresse} {V félicite} {COD les élèves {EPI sages}} .' },
  { s: '{CP:lieu Sur la plage} , {S les enfants} {V construisent} {COD un château {CDN de sable}} .' },
  { s: '{S Le gardien} {V juge} {COD cette porte} {ACOD dangereuse} .' },
  { s: '{S Mon oncle} {V est} {AS pilote {CDN de ligne}} .', n: { 'pilote de ligne': 'Après « être », le nom qualifie le sujet : attribut du sujet (il l’est).' } },
  { s: '{S Le chien {CDN du voisin}} {V aboie} {CP:temps toute la nuit} .', n: { 'du voisin': '« du » = de + le : le groupe complète le nom « chien ». Complément du nom.' } },
];

function parseFonctionSentence(entry) {
  const words = [];
  const groups = [];
  const open = [];
  entry.s.split(' ').filter(Boolean).forEach((raw) => {
    if (raw.startsWith('{')) {
      const [tag, value] = raw.slice(1).split(':');
      open.push({ tag, value: value || null, start: words.length });
      return;
    }
    let word = raw;
    let closes = 0;
    while (word.endsWith('}')) { word = word.slice(0, -1); closes++; }
    words.push({ word: word.replace(/_/g, ' ') });
    for (let k = 0; k < closes; k++) {
      const group = open.pop();
      group.end = words.length - 1;
      groups.push(group);
    }
  });
  groups.sort((a, b) => a.start - b.start || b.end - a.end);
  const notes = entry.n || {};
  groups.forEach((group) => {
    group.text = natureSentenceText(words.slice(group.start, group.end + 1));
    group.note = notes[group.text.toLowerCase()] || null;
  });
  return {
    words,
    text: natureSentenceText(words),
    verbs: groups.filter((g) => g.tag === 'V'),
    groups: groups.filter((g) => g.tag !== 'V'),
  };
}

const FONCTION_CORPUS = FONCTION_SENTENCES.map(parseFonctionSentence);

const fonctionLabel = (group) => (group.tag === 'CP' && group.value ? `Complément de phrase (${group.value})` : FONCTION_LABELS[group.tag]);
const fonctionExplain = (group) => group.note || FONCTION_FAMILIES.find((f) => f.id === group.tag).test;

/* Questions du chapitre « Les fonctions dans la phrase » tirées du corpus : une par groupe, sauf les sujets pronoms trop évidents. */
(function buildFonctionQuestions() {
  const tooEasy = ['je', 'tu', 'il', 'elle', 'nous'];
  const pool = [];
  FONCTION_CORPUS.forEach((sentence) => sentence.groups.forEach((group) => {
    if (group.tag === 'S' && tooEasy.includes(group.text.toLowerCase())) return;
    const twice = sentence.groups.filter((g) => g.text === group.text).length > 1;
    if (twice) return;
    pool.push({
      q: `Dans « ${sentence.text} », quelle est la fonction de « ${group.text} » ?`,
      c: [FONCTION_LABELS[group.tag], ...FONCTION_CONFUSIONS[group.tag].map((tag) => FONCTION_LABELS[tag])],
      a: 0,
      e: group.note || `${fonctionLabel(group)}. ${fonctionExplain(group)}`,
    });
  }));
  QUESTION_POOLS['francais/fonctions'] = pool;
})();
