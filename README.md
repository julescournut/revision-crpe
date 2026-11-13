# Révision CRPE

Site de révision pour le concours de recrutement de professeurs des écoles (CRPE), version externe bac+3.

## Lancer en local

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Puis ouvrir http://127.0.0.1:8765/. Aucune dépendance, aucun build : HTML, CSS et JavaScript natifs.

## Contenu

- **Jeux** : quiz par matière ou mélangé (explication après chaque réponse, combos), cartes mémoire en répétition espacée (système de Leitner à 5 boîtes), calcul mental en 60 s, vrai/faux éclair en 45 s.
- **Cours** : chapitres par matière (essentiel, exemples, pièges, à retenir, questions « Teste-toi »), suivi des chapitres compris.
- **Niveaux** : objectifs d’apprentissage et exemples de réussite de la PS au CM2 en français et en maths, tirés des programmes officiels (cycles 1 et 2 : BO n° 41 du 31 octobre 2024 ; cycle 3 : BO n° 16 du 17 avril 2025), et jeu « À quel niveau ? ».
- **Annales** : tableau des épreuves, sujets et rapports de jury officiels, annales corrigées.
- **Progression** : XP, niveaux, objectif quotidien, série de jours, badges. Stockée dans le `localStorage` du navigateur.

## Ajouter du contenu

Jeux et ressources : `js/data.js` (`QUESTIONS`, `TRUE_FALSE`, `FLASHCARDS`, `FICHES` pour les liens « Pour aller plus loin », `RESOURCES`). La bonne réponse d'une question est l'index `a` dans `c` ; l'ordre des choix est mélangé à l'affichage.

La progression d'une question ou d'une carte est indexée sur un hash de son texte : modifier l'énoncé remet sa progression à zéro.

## Cours

Un fichier par matière dans `js/cours/` remplit `COURS.<matière>` avec une liste de chapitres `{ id, title, intro, blocks }`. Le chapitre `classes-de-mots` de `js/cours/francais.js` sert de modèle complet.

Blocs disponibles : `h` (sous-titre), `p`, `list`, `steps`, `table` (`head`, `rows`), `example` (`title`, `items`), `trap`, `tip`, `key` (`items`), `check` (`q`, `a` : question « Teste-toi », regroupées en fin de chapitre). Mise en forme dans le texte : `**gras**` et `*italique*` seulement, donc pas d'astérisque pour multiplier (utiliser ×).

## Niveaux

`js/niveaux/*.js` remplit `ATTENDUS` (`{ niveau, matiere, domaine, items: [{ o, ex }] }`) et `ESSENTIELS` (`{ niveau, matiere, items }`). Format de référence : `js/niveaux/exemple-format.txt`. La maternelle est en `niveau: 'MAT'` avec la tranche d’âge du programme en fin de `domaine` ; la page l’associe à PS, MS ou GS à titre indicatif.
