/* Jeu « Fonctions dans la phrase » : trois modes d'entraînement aux fonctions syntaxiques, sur le corpus de js/fonctions.js.
Chargé avant app.js ; les utilitaires d'app.js ($, app, state, shuffle…) et de js/jeux-natures.js (numpadKey) ne sont utilisés qu'à l'exécution. */

const FONCTION_MODES = {
  eclair: { emoji: '⚡', title: 'Fonction éclair · 60 s', text: 'Un groupe est surligné : donne sa fonction. Le jeu insiste sur les fonctions où tu te trompes le plus.' },
  chasse: { emoji: '✂️', title: 'Délimite le groupe', text: 'Touche tous les mots du sujet, du COD, du complément de phrase… pour apprendre à découper la phrase en groupes.' },
  analyse: { emoji: '🧩', title: 'Analyse complète', text: 'Comme à l’écrit du concours : donne la fonction de chaque groupe d’une phrase, avec la valeur des compléments de phrase.' },
};
const FONCTION_PLURALS = { S: 'sujets', COD: 'COD', COI: 'COI', COS: 'COS', AS: 'attributs du sujet', ACOD: 'attributs du COD', CP: 'compléments de phrase', CAG: 'compléments d’agent', CDN: 'compléments du nom', EPI: 'épithètes', APP: 'appositions' };
const FONCTION_ARTICLES = { S: 'du sujet', COD: 'du COD', COI: 'du COI', COS: 'du COS', AS: 'de l’attribut du sujet', ACOD: 'de l’attribut du COD', CP: 'du complément de phrase', CAG: 'du complément d’agent', CDN: 'du complément du nom', EPI: 'de l’épithète', APP: 'de l’apposition' };
// Pavé numérique : 7 8 9 / 4 5 6 / 1 2 3 pour les neuf premières, puis 0 et la touche décimale.
const fonctionKey = (index) => (index < 9 ? String(numpadKey(index)) : index === 9 ? '0' : ',');

// « cod » ou « coi » ne se lisent pas : on garde les sigles en majuscules.
const fonctionLower = (group) => { const label = fonctionLabel(group); return /^[A-Z]{2}/.test(label) ? label : label.charAt(0).toLowerCase() + label.slice(1); };

function fonctionStats() {
  return state.fonctions || (state.fonctions = {});
}

function recordFonction(tag, ok) {
  const stats = fonctionStats();
  const entry = stats[tag] || (stats[tag] = { ok: 0, total: 0 });
  entry.total++;
  if (ok) entry.ok++;
}

function fonctionAccuracy(tag) {
  const entry = fonctionStats()[tag];
  return entry && entry.total ? entry.ok / entry.total : null;
}

function weakFonctionPick(tags) {
  const weights = tags.map((tag) => {
    const accuracy = fonctionAccuracy(tag);
    return accuracy === null ? 1.5 : 0.5 + 2 * (1 - accuracy);
  });
  let roll = Math.random() * weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < tags.length; i++) { roll -= weights[i]; if (roll <= 0) return tags[i]; }
  return tags[tags.length - 1];
}

/* Phrase en HTML : verbes soulignés, un groupe éventuellement surligné, ou chaque mot rendu par `renderWord`. */
function fonctionSentenceHtml(sentence, { mark = null, renderWord = null } = {}) {
  const inVerb = (i) => sentence.verbs.some((v) => i >= v.start && i <= v.end);
  return natureSentenceText(sentence.words, (token, i) => {
    if (renderWord) return renderWord(token, i);
    let html = escapeHtml(token.word);
    if (inVerb(i)) html = `<span class="fn-verb">${html}</span>`;
    if (mark && i === mark.start) html = `<mark>${html}`;
    if (mark && i === mark.end) html = `${html}</mark>`;
    return html;
  });
}

function fonctionButtons(compact = false) {
  return `<div class="family-grid fn-grid ${compact ? 'compact' : ''}">
    ${FONCTION_FAMILIES.map((f, i) => `<button class="choice family-btn" data-tag="${f.id}">${compact ? '' : `<span class="key">${fonctionKey(i) === ',' ? '.' : fonctionKey(i)}</span>`}${f.short}</button>`).join('')}
  </div>`;
}

function renderFonctions(mode) {
  if (mode === 'eclair') return fonctionEclair();
  if (mode === 'chasse') return fonctionChasse();
  if (mode === 'analyse') return fonctionAnalyse();
  return fonctionHub();
}

/* ---------- Accueil du jeu ---------- */
function fonctionHub() {
  const stats = fonctionStats();
  const worked = FONCTION_FAMILIES.filter((f) => stats[f.id] && stats[f.id].total >= 3);
  const weakest = [...worked].sort((a, b) => fonctionAccuracy(a.id) - fonctionAccuracy(b.id)).slice(0, 2).filter((f) => fonctionAccuracy(f.id) < 0.8);
  app.innerHTML = `
    <div class="section-head"><h1>🧱 Fonctions dans la phrase</h1><a href="#/cours/francais/fonctions">Revoir le cours →</a></div>
    <p class="muted">${FONCTION_CORPUS.length} phrases découpées en groupes, avec les pièges classiques du concours (COD ou attribut, COI ou complément de phrase, sujet inversé, « du » partitif, pronoms compléments…). Chaque erreur est expliquée.</p>
    <div class="grid grid-3">
      ${Object.entries(FONCTION_MODES).map(([id, m]) => `
        <a class="card link-card" href="#/fonctions/${id}">
          <span class="emoji">${m.emoji}</span><h3>${m.title}</h3>
          <p class="muted">${m.text}</p>
          ${id === 'eclair' && state.best.fonctions ? `<small class="muted">Record : ${state.best.fonctions}</small>` : ''}
        </a>`).join('')}
    </div>

    <section class="section">
      <div class="section-head"><h2>Ma maîtrise par fonction</h2>${weakest.length ? `<span class="muted">À travailler : ${weakest.map((f) => f.label).join(', ')}</span>` : ''}</div>
      <div class="card nature-mastery">
        ${FONCTION_FAMILIES.map((f) => {
          const entry = stats[f.id];
          const accuracy = fonctionAccuracy(f.id);
          const percent = accuracy === null ? 0 : Math.round(accuracy * 100);
          const level = accuracy === null ? '' : accuracy >= 0.85 ? 'good' : accuracy >= 0.6 ? 'mid' : 'low';
          return `<div class="mastery-row">
            <span>${f.emoji} ${f.short}</span>
            <div class="bar ${level}"><span style="width:${percent}%"></span></div>
            <small class="muted">${entry && entry.total ? `${percent} % · ${entry.total}` : 'pas encore vu'}</small>
          </div>`;
        }).join('')}
      </div>
    </section>

    <section class="section">
      <h2>Mémo des fonctions</h2>
      <div class="table-wrap"><table class="exam-table nature-memo">
        <thead><tr><th>Fonction</th><th>Comment la reconnaître</th><th>Pronom ou manipulation</th><th>Exemple</th></tr></thead>
        <tbody>${FONCTION_FAMILIES.map((f) => `<tr><td><strong>${f.emoji} ${f.label}</strong></td><td>${escapeHtml(f.test)}</td><td>${escapeHtml(f.pronoun)}</td><td><em>${escapeHtml(f.example)}</em></td></tr>`).join('')}</tbody>
      </table></div>
      <p class="muted">Méthode : repère le verbe conjugué, trouve son sujet (« c’est… qui »), puis teste chaque groupe restant. Supprimable et déplaçable ? Complément de phrase. Sinon, pronominalise : le, la, les → COD ; lui, leur, y, en → COI ; le invariable après un verbe attributif → attribut.</p>
    </section>`;
}

/* ---------- Mode éclair : un groupe surligné, 11 fonctions ---------- */
function fonctionEclair() {
  const byTag = {};
  FONCTION_CORPUS.forEach((sentence, s) => sentence.groups.forEach((group, g) => (byTag[group.tag] = byTag[group.tag] || []).push([s, g])));
  const tags = FONCTION_FAMILIES.map((f) => f.id).filter((id) => byTag[id]);
  let score = 0;
  let current = null;
  let locked = false;
  let previous = '';
  const misses = [];
  let onKey = null;

  const nextItem = () => {
    let s; let g;
    const list = byTag[weakFonctionPick(tags)];
    for (let attempt = 0; attempt < 5; attempt++) {
      [s, g] = list[Math.floor(Math.random() * list.length)];
      if (`${s}-${g}` !== previous) break;
    }
    previous = `${s}-${g}`;
    return { sentence: FONCTION_CORPUS[s], group: FONCTION_CORPUS[s].groups[g] };
  };

  const stopTimer = timedGame({
    seconds: 60,
    intro: `
      <div class="play card result">
        <div class="big">⚡</div><h2>Fonction éclair · 60 secondes</h2>
        <p class="muted">Un groupe est surligné dans une phrase (le verbe est souligné) : donne sa fonction.<span class="keyboard-only"> Clavier : pavé numérique, les touches suivent la position des boutons (<kbd>7</kbd> en haut à gauche, <kbd>0</kbd> et <kbd>.</kbd> sur la dernière ligne).</span> Record : ${state.best.fonctions || 0}.</p>
        <button class="btn" id="start">C’est parti !</button>
      </div>`,
    onStart() {
      app.innerHTML = `
        <div class="play">
          <div class="play-top"><a class="icon-btn" href="#/fonctions" title="Quitter">✕</a><div style="flex:1"></div><div class="combo">✅ <span id="score">0</span></div><div class="timer" id="timer">⏱ 60</div></div>
          <div class="card nature-card"><div class="nature-sentence" id="sentence"></div></div>
          ${fonctionButtons()}
          <p class="nature-hint" id="hint">&nbsp;</p>
        </div>`;
      const show = () => {
        current = nextItem();
        locked = false;
        app.querySelectorAll('.family-btn').forEach((b) => { b.disabled = false; b.className = 'choice family-btn'; });
        $('#sentence').innerHTML = fonctionSentenceHtml(current.sentence, { mark: current.group });
      };
      const answer = (tag) => {
        if (locked || !current) return;
        locked = true;
        const expected = current.group.tag;
        const ok = tag === expected;
        recordFonction(expected, ok);
        const buttons = [...app.querySelectorAll('.family-btn')];
        buttons.find((b) => b.dataset.tag === expected).classList.add('correct');
        if (ok) {
          score++;
          $('#score').textContent = score;
          $('#hint').innerHTML = `✓ ${escapeHtml(fonctionLabel(current.group))}`;
          setTimeout(show, 450);
        } else {
          buttons.find((b) => b.dataset.tag === tag).classList.add('wrong', 'shake');
          misses.push(current);
          $('#hint').innerHTML = `<strong>« ${escapeHtml(current.group.text)} » : ${escapeHtml(fonctionLabel(current.group))}.</strong> ${escapeHtml(fonctionExplain(current.group))}`;
          setTimeout(show, 2800);
        }
      };
      app.querySelectorAll('.family-btn').forEach((b) => b.addEventListener('click', () => answer(b.dataset.tag)));
      onKey = (event) => {
        const key = event.key === '.' ? ',' : event.key;
        const index = FONCTION_FAMILIES.findIndex((_, i) => fonctionKey(i) === key);
        if (index >= 0) answer(FONCTION_FAMILIES[index].id);
      };
      document.addEventListener('keydown', onKey);
      show();
    },
    onEnd() {
      if (onKey) document.removeEventListener('keydown', onKey);
      const record = score > (state.best.fonctions || 0);
      if (record) state.best.fonctions = score;
      unlock('first');
      if (score) addXp(score * 3); else save();
      if (record && score) confetti();
      app.innerHTML = `
        <div class="play card result">
          <div class="big">${record && score ? '🏆' : '⚡'}</div>
          <h2>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}</h2>
          <p class="muted">${record && score ? 'Nouveau record !' : `Record : ${state.best.fonctions || 0}`}</p>
          <span class="pill xp">⭐ +${score * 3} XP</span>
          <div class="btn-row" style="justify-content:center"><a class="btn" href="#/fonctions/eclair" id="again">Rejouer</a><a class="btn ghost" href="#/fonctions">Autres modes</a></div>
          ${misses.length ? `<div class="review-list"><h3>À retenir</h3>${misses.map((m) => `<div class="review-item">${fonctionSentenceHtml(m.sentence, { mark: m.group })}<br>✅ <strong>${escapeHtml(fonctionLabel(m.group))}</strong><br><span class="muted">${escapeHtml(fonctionExplain(m.group))}</span></div>`).join('')}</div>` : ''}
        </div>`;
      $('#again').addEventListener('click', (event) => { event.preventDefault(); router(); });
    },
  });
  cleanup = () => { stopTimer(); if (onKey) document.removeEventListener('keydown', onKey); };
}

/* ---------- Mode délimitation : toucher tous les mots d'une fonction ---------- */
function fonctionChasse() {
  const ROUNDS = 8;
  const rounds = [];
  const used = new Set();
  const tags = FONCTION_FAMILIES.map((f) => f.id);
  for (let attempt = 0; rounds.length < ROUNDS && attempt < 200; attempt++) {
    const tag = weakFonctionPick(tags);
    const candidates = FONCTION_CORPUS.map((_, s) => s).filter((s) => !used.has(s) && FONCTION_CORPUS[s].groups.some((g) => g.tag === tag));
    if (!candidates.length) continue;
    const s = candidates[Math.floor(Math.random() * candidates.length)];
    used.add(s);
    rounds.push({ tag, sentence: FONCTION_CORPUS[s] });
  }
  let round = 0;
  let perfect = 0;
  let checked = false;
  let selected = new Set();
  let earned = 0;

  const targetsOf = (r) => r.sentence.groups.filter((g) => g.tag === r.tag);
  const isWord = (token) => !/^[.,!?;:]$/.test(token.word);

  function show() {
    checked = false;
    selected = new Set();
    const r = rounds[round];
    const count = targetsOf(r).length;
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/fonctions" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(round / rounds.length) * 100}%"></span></div>
          <div class="combo">${perfect} 🎯</div>
        </div>
        <p class="nature-instruction">Touche tous les mots ${count > 1 ? `des <strong>${count} ${FONCTION_PLURALS[r.tag]}</strong>` : `<strong>${FONCTION_ARTICLES[r.tag]}</strong>`}.</p>
        <div class="card nature-card"><div class="nature-sentence words">${fonctionSentenceHtml(r.sentence, { renderWord: (token, i) => (isWord(token) ? `<button class="w" data-i="${i}">${escapeHtml(token.word)}</button>` : escapeHtml(token.word)) })}</div></div>
        <div id="after"><div class="btn-row"><button class="btn" id="check">Valider <kbd>Entrée</kbd></button></div></div>
      </div>`;
    app.querySelectorAll('.w').forEach((b) => b.addEventListener('click', () => {
      if (checked) return;
      const i = Number(b.dataset.i);
      if (selected.has(i)) selected.delete(i); else selected.add(i);
      b.classList.toggle('selected');
    }));
    $('#check').addEventListener('click', check);
  }

  function check() {
    if (checked) return;
    checked = true;
    const r = rounds[round];
    const targets = targetsOf(r);
    const inTarget = (i) => targets.some((g) => i >= g.start && i <= g.end);
    let missed = 0;
    let intruders = 0;
    app.querySelectorAll('.w').forEach((button) => {
      const i = Number(button.dataset.i);
      const target = inTarget(i);
      const picked = selected.has(i);
      button.disabled = true;
      if (target && picked) button.classList.add('found');
      else if (target) { button.classList.add('missed'); missed++; }
      else if (picked) { button.classList.add('intruder'); intruders++; }
    });
    targets.forEach((g) => {
      let ok = true;
      for (let i = g.start; i <= g.end; i++) if (isWord(r.sentence.words[i]) && !selected.has(i)) ok = false;
      recordFonction(r.tag, ok && !intruders);
    });
    const ok = !missed && !intruders;
    if (ok) { perfect++; earned += 10; addXp(10); } else save();
    const lines = targets.map((g) => `<li><strong>« ${escapeHtml(g.text)} »</strong> : ${escapeHtml(fonctionLower(g))}. ${escapeHtml(fonctionExplain(g))}</li>`);
    const others = r.sentence.groups.filter((g) => g.tag !== r.tag && [...selected].some((i) => i >= g.start && i <= g.end) && !targets.some((t) => g.start >= t.start && g.end <= t.end));
    if (intruders && others.length) lines.push(`<li>Mots en trop : ils appartiennent à ${others.map((g) => `« ${escapeHtml(g.text)} » (${escapeHtml(fonctionLower(g))})`).join(', ')}.</li>`);
    $('#after').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ko'}">
        <strong>${ok ? 'Groupe bien délimité, bravo !' : [missed && `${missed} mot${missed > 1 ? 's' : ''} oublié${missed > 1 ? 's' : ''}`, intruders && `${intruders} mot${intruders > 1 ? 's' : ''} en trop`].filter(Boolean).join(', ')}</strong>
        <ul class="nature-lines">${lines.join('')}</ul>
      </div>
      <div class="btn-row"><button class="btn ${ok ? 'success' : ''}" id="next">${round + 1 < rounds.length ? 'Continuer' : 'Voir le résultat'} <kbd>Entrée</kbd></button></div>`;
    $('#next').addEventListener('click', next);
    $('#next').focus();
  }

  function next() {
    round++;
    if (round < rounds.length) { show(); return; }
    unlock('first');
    save();
    app.innerHTML = `
      <div class="play card result">
        <div class="big">${perfect === rounds.length ? '🏆' : perfect >= rounds.length / 2 ? '🎉' : '🌱'}</div>
        <h2>Délimitation : ${perfect} / ${rounds.length} groupes sans faute</h2>
        <p class="muted">Un groupe comprend tous ses mots, y compris ses expansions (épithète, complément du nom). Les fonctions que tu rates reviennent plus souvent.</p>
        <span class="pill xp">⭐ +${earned} XP</span>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/fonctions/chasse" id="again">Rejouer</a><a class="btn ghost" href="#/fonctions">Autres modes</a></div>
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); fonctionChasse(); });
  }

  const onKey = (event) => {
    if (event.key !== 'Enter') return;
    if (!checked && $('#check')) { event.preventDefault(); check(); }
    else if (checked && $('#next')) { event.preventDefault(); next(); }
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}

/* ---------- Mode analyse : fonction de chaque groupe ---------- */
function fonctionAnalyse() {
  const ROUNDS = 5;
  const eligible = FONCTION_CORPUS.filter((sentence) => sentence.groups.length >= 3);
  const rounds = shuffle(eligible).slice(0, ROUNDS);
  let round = 0;
  let points = 0;
  let maxPoints = 0;
  let answers = {};
  let active = 0;
  let pendingCp = false;
  let checked = false;
  let earned = 0;

  const answerLabel = (answer) => (answer ? (answer.tag === 'CP' && answer.value ? `CP (${answer.value})` : FONCTION_FAMILIES.find((f) => f.id === answer.tag).short) : '?');
  const scoreOf = (group, answer) => {
    if (!answer || answer.tag !== group.tag) return 0;
    return group.tag === 'CP' && group.value && answer.value !== group.value ? 0.5 : 1;
  };

  function show() {
    checked = false;
    answers = {};
    active = 0;
    pendingCp = false;
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/fonctions" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(round / rounds.length) * 100}%"></span></div>
          <div class="combo">${Math.round(points * 10) / 10} pts</div>
        </div>
        <p class="nature-instruction">Donne la fonction de chaque groupe. Le verbe est souligné.</p>
        <div class="card nature-card"><div class="nature-sentence" id="sentence"></div></div>
        <div class="fn-rows" id="rows"></div>
        <div id="panel" class="nature-panel"></div>
        <div id="after"><div class="btn-row"><button class="btn" id="check" disabled>Vérifier</button></div></div>
      </div>`;
    $('#check').addEventListener('click', check);
    paint();
  }

  function paint() {
    const sentence = rounds[round];
    $('#sentence').innerHTML = fonctionSentenceHtml(sentence, { mark: checked ? null : sentence.groups[active] });
    $('#rows').innerHTML = sentence.groups.map((group, g) => {
      const answer = answers[g];
      const result = scoreOf(group, answer);
      const look = checked ? (result === 1 ? 'found' : result ? 'half' : 'missed') : (g === active ? 'active' : answer ? 'tagged' : '');
      const nested = sentence.groups.some((other, o) => o !== g && other.start <= group.start && other.end >= group.end);
      return `<button class="fn-row ${look} ${nested ? 'nested' : ''}" data-g="${g}"><span>« ${escapeHtml(group.text)} »</span><small>${escapeHtml(answerLabel(answer))}</small></button>`;
    }).join('');
    app.querySelectorAll('.fn-row').forEach((b) => b.addEventListener('click', () => { if (checked) return; active = Number(b.dataset.g); pendingCp = false; paint(); }));
    if (checked) { $('#panel').innerHTML = ''; return; }
    const chosen = answers[active];
    const showCp = pendingCp || (chosen && chosen.tag === 'CP');
    $('#panel').innerHTML = `
      <p class="muted">Fonction de <strong>« ${escapeHtml(sentence.groups[active].text)} »</strong> :</p>
      ${fonctionButtons(true)}
      ${showCp ? `<p class="muted">Valeur du complément de phrase :</p><div class="subtype-row">${CP_VALUES.map((value) => `<button class="chip-btn ${chosen && chosen.value === value ? 'picked' : ''}" data-value="${value}">${value}</button>`).join('')}</div>` : ''}`;
    $('#panel').querySelectorAll('.family-btn').forEach((b) => {
      if (b.dataset.tag === (pendingCp ? 'CP' : chosen && chosen.tag)) b.classList.add('picked');
      b.addEventListener('click', () => {
        if (b.dataset.tag === 'CP') { pendingCp = true; paint(); return; }
        pendingCp = false;
        answers[active] = { tag: b.dataset.tag };
        advance();
      });
    });
    $('#panel').querySelectorAll('.chip-btn').forEach((b) => b.addEventListener('click', () => { answers[active] = { tag: 'CP', value: b.dataset.value }; pendingCp = false; advance(); }));
    $('#check').disabled = sentence.groups.some((_, g) => !answers[g]);
  }

  function advance() {
    const groups = rounds[round].groups;
    const nextIndex = groups.findIndex((_, g) => g > active && !answers[g]);
    const firstEmpty = groups.findIndex((_, g) => !answers[g]);
    if (nextIndex >= 0) active = nextIndex;
    else if (firstEmpty >= 0) active = firstEmpty;
    paint();
    if (firstEmpty < 0) $('#check').focus();
  }

  function check() {
    if (checked || $('#check').disabled) return;
    checked = true;
    const sentence = rounds[round];
    let roundPoints = 0;
    const lines = [];
    sentence.groups.forEach((group, g) => {
      const answer = answers[g];
      const result = scoreOf(group, answer);
      recordFonction(group.tag, result > 0);
      roundPoints += result;
      if (result === 1) return;
      lines.push(`<li><strong>« ${escapeHtml(group.text)} »</strong> : ${escapeHtml(fonctionLower(group))}${result ? ` (bonne fonction, valeur à revoir : pas ${escapeHtml(answer.value)})` : ` et non ${escapeHtml(answerLabel(answer))}`}. ${escapeHtml(fonctionExplain(group))}</li>`);
    });
    const roundMax = sentence.groups.length;
    points += roundPoints;
    maxPoints += roundMax;
    const gain = Math.round(roundPoints * 2);
    earned += gain;
    if (gain) addXp(gain); else save();
    paint();
    const ok = roundPoints === roundMax;
    $('#after').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ko'}">
        <strong>${ok ? 'Analyse parfaite !' : `${Math.round(roundPoints * 10) / 10} / ${roundMax}`}</strong>
        ${lines.length ? `<ul class="nature-lines">${lines.join('')}</ul>` : ''}
      </div>
      <div class="btn-row"><button class="btn ${ok ? 'success' : ''}" id="next">${round + 1 < rounds.length ? 'Phrase suivante' : 'Voir le résultat'} <kbd>Entrée</kbd></button></div>`;
    $('#next').addEventListener('click', next);
    $('#next').focus();
  }

  function next() {
    round++;
    if (round < rounds.length) { show(); return; }
    unlock('first');
    save();
    const ratio = maxPoints ? points / maxPoints : 0;
    if (ratio === 1) confetti();
    app.innerHTML = `
      <div class="play card result">
        <div class="big">${ratio === 1 ? '🏆' : ratio >= 0.75 ? '🎉' : '🌱'}</div>
        <h2>Analyse complète : ${Math.round(points * 10) / 10} / ${maxPoints}</h2>
        <p class="muted">Un complément de phrase reconnu sans la bonne valeur rapporte un demi-point : au concours, on attend « complément de phrase de temps », pas seulement « complément de phrase ».</p>
        <span class="pill xp">⭐ +${earned} XP</span>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/fonctions/analyse" id="again">Rejouer</a><a class="btn ghost" href="#/fonctions">Autres modes</a></div>
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); fonctionAnalyse(); });
  }

  const onKey = (event) => {
    if (event.key !== 'Enter') return;
    if (checked && $('#next')) { event.preventDefault(); next(); }
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}
