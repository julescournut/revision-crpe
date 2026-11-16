/* Jeu « Natures des mots » : trois modes d'entraînement aux classes grammaticales, sur le corpus de js/grammaire.js.
Chargé avant app.js ; les utilitaires d'app.js ($, app, state, shuffle…) ne sont utilisés qu'à l'exécution. */

const NATURE_MODES = {
  eclair: { emoji: '⚡', title: 'Nature éclair · 60 s', text: 'Un mot est surligné : choisis sa classe parmi les 9. Le jeu insiste sur les classes où tu te trompes le plus.' },
  chasse: { emoji: '🔎', title: 'Chasse aux mots', text: 'Touche tous les mots d’une classe donnée dans la phrase : tous les pronoms, toutes les prépositions…' },
  analyse: { emoji: '🧩', title: 'Analyse complète', text: 'Comme à l’écrit du concours : donne la nature précise de chaque mot d’une phrase (article défini, pronom relatif…).' },
};
const NATURE_SUBTYPES = {
  nom: ['NC', 'NP'],
  det: ['DA', 'DI', 'DP', 'DC', 'DPOS', 'DDEM', 'DIND', 'DNUM', 'DINT', 'DEXC'],
  pro: ['PPER', 'PPOS', 'PDEM', 'PREL', 'PINT', 'PIND'],
  conj: ['CC', 'CS'],
};
const NATURE_PLURALS = { nom: 'noms', det: 'déterminants', adj: 'adjectifs', pro: 'pronoms', verbe: 'verbes', adv: 'adverbes', prep: 'prépositions', conj: 'conjonctions', interj: 'interjections' };

// Touches calquées sur le pavé numérique : la grille 3 × 3 se lit 7 8 9 / 4 5 6 / 1 2 3.
const numpadKey = (index) => (2 - Math.floor(index / 3)) * 3 + (index % 3) + 1;
const familyOf = (tag) => NATURE_TAGS[tag].family;
const familyInfo = (id) => NATURE_FAMILIES.find((f) => f.id === id);
const natureExplain = (token) => token.note || NATURE_TAGS[token.tag].why;

function natureStats() {
  return state.natures || (state.natures = {});
}

function recordNature(family, ok) {
  const stats = natureStats();
  const entry = stats[family] || (stats[family] = { ok: 0, total: 0 });
  entry.total++;
  if (ok) entry.ok++;
}

function natureAccuracy(family) {
  const entry = natureStats()[family];
  return entry && entry.total ? entry.ok / entry.total : null;
}

/* Tire une classe en privilégiant celles qui sont mal réussies ou peu travaillées. */
function weakFamilyPick(families) {
  const weights = families.map((id) => {
    const accuracy = natureAccuracy(id);
    return accuracy === null ? 1.5 : 0.5 + 2 * (1 - accuracy);
  });
  let roll = Math.random() * weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < families.length; i++) { roll -= weights[i]; if (roll <= 0) return families[i]; }
  return families[families.length - 1];
}

function sentenceHtml(tokens, render) {
  return natureSentenceText(tokens, (token, i) => (token.tag ? render(token, i) : escapeHtml(token.word)));
}

function renderNatures(mode) {
  if (mode === 'eclair') return natureEclair();
  if (mode === 'chasse') return natureChasse();
  if (mode === 'analyse') return natureAnalyse();
  return natureHub();
}

/* ---------- Accueil du jeu ---------- */
function natureHub() {
  const stats = natureStats();
  const worked = NATURE_FAMILIES.filter((f) => stats[f.id] && stats[f.id].total >= 3);
  const weakest = [...worked].sort((a, b) => natureAccuracy(a.id) - natureAccuracy(b.id)).slice(0, 2).filter((f) => natureAccuracy(f.id) < 0.8);
  app.innerHTML = `
    <div class="section-head"><h1>🔤 Natures des mots</h1><a href="#/cours/francais/classes-de-mots">Revoir le cours →</a></div>
    <p class="muted">${NATURE_CORPUS.length} phrases analysées mot par mot, avec les pièges classiques du concours (leur, que, du, des, tout, en, où…). Chaque erreur est expliquée.</p>
    <div class="grid grid-3">
      ${Object.entries(NATURE_MODES).map(([id, m]) => `
        <a class="card link-card" href="#/natures/${id}">
          <span class="emoji">${m.emoji}</span><h3>${m.title}</h3>
          <p class="muted">${m.text}</p>
          ${id === 'eclair' && state.best.natures ? `<small class="muted">Record : ${state.best.natures}</small>` : ''}
        </a>`).join('')}
    </div>

    <section class="section">
      <div class="section-head"><h2>Ma maîtrise par classe</h2>${weakest.length ? `<span class="muted">À travailler : ${weakest.map((f) => f.label.toLowerCase()).join(', ')}</span>` : ''}</div>
      <div class="card nature-mastery">
        ${NATURE_FAMILIES.map((f) => {
          const entry = stats[f.id];
          const accuracy = natureAccuracy(f.id);
          const percent = accuracy === null ? 0 : Math.round(accuracy * 100);
          const level = accuracy === null ? '' : accuracy >= 0.85 ? 'good' : accuracy >= 0.6 ? 'mid' : 'low';
          return `<div class="mastery-row">
            <span>${f.emoji} ${f.label}</span>
            <div class="bar ${level}"><span style="width:${percent}%"></span></div>
            <small class="muted">${entry && entry.total ? `${percent} % · ${entry.total}` : 'pas encore vu'}</small>
          </div>`;
        }).join('')}
      </div>
    </section>

    <section class="section">
      <h2>Mémo des 9 classes</h2>
      <div class="table-wrap"><table class="exam-table nature-memo">
        <thead><tr><th>Classe</th><th>Variable ?</th><th>Comment la reconnaître</th><th>Exemples</th></tr></thead>
        <tbody>${NATURE_FAMILIES.map((f) => `<tr><td><strong>${f.emoji} ${f.label}</strong></td><td>${f.variable ? 'Oui' : 'Non'}</td><td>${escapeHtml(f.test)}</td><td><em>${escapeHtml(f.examples)}</em></td></tr>`).join('')}</tbody>
      </table></div>
      <p class="muted">Astuce mémoire : les 4 classes invariables tiennent dans « APCI » (adverbe, préposition, conjonction, interjection) ; tout le reste varie.</p>
    </section>`;
}

/* ---------- Mode éclair : un mot surligné, 9 classes ---------- */
function natureEclair() {
  const byFamily = {};
  NATURE_CORPUS.forEach((tokens, s) => tokens.forEach((t, i) => { if (t.tag) (byFamily[familyOf(t.tag)] = byFamily[familyOf(t.tag)] || []).push([s, i]); }));
  const families = NATURE_FAMILIES.map((f) => f.id).filter((id) => byFamily[id]);
  let score = 0;
  let current = null;
  let locked = false;
  let previous = '';
  const misses = [];
  let onKey = null;

  const nextItem = () => {
    let s; let i;
    const family = weakFamilyPick(families);
    const list = byFamily[family];
    for (let attempt = 0; attempt < 5; attempt++) {
      [s, i] = list[Math.floor(Math.random() * list.length)];
      if (`${s}-${i}` !== previous) break;
    }
    previous = `${s}-${i}`;
    return { tokens: NATURE_CORPUS[s], index: i, token: NATURE_CORPUS[s][i] };
  };

  const stopTimer = timedGame({
    seconds: 60,
    intro: `
      <div class="play card result">
        <div class="big">⚡</div><h2>Nature éclair · 60 secondes</h2>
        <p class="muted">Un mot est surligné dans une phrase : donne sa classe.<span class="keyboard-only"> Clavier : pavé numérique, les touches suivent la position des boutons (<kbd>7</kbd> en haut à gauche, <kbd>3</kbd> en bas à droite).</span> Record : ${state.best.natures || 0}.</p>
        <button class="btn" id="start">C’est parti !</button>
      </div>`,
    onStart() {
      app.innerHTML = `
        <div class="play">
          <div class="play-top"><a class="icon-btn" href="#/natures" title="Quitter">✕</a><div style="flex:1"></div><div class="combo">✅ <span id="score">0</span></div><div class="timer" id="timer">⏱ 60</div></div>
          <div class="card nature-card"><div class="nature-sentence" id="sentence"></div></div>
          <div class="family-grid">
            ${NATURE_FAMILIES.map((f, i) => `<button class="choice family-btn" data-family="${f.id}"><span class="key">${numpadKey(i)}</span>${f.label}</button>`).join('')}
          </div>
          <p class="nature-hint" id="hint">&nbsp;</p>
        </div>`;
      const show = () => {
        current = nextItem();
        locked = false;
        app.querySelectorAll('.family-btn').forEach((b) => { b.disabled = false; b.className = 'choice family-btn'; });
        $('#sentence').innerHTML = sentenceHtml(current.tokens, (token, i) => (i === current.index ? `<mark>${escapeHtml(token.word)}</mark>` : escapeHtml(token.word)));
      };
      const answer = (family) => {
        if (locked || !current) return;
        locked = true;
        const expected = familyOf(current.token.tag);
        const ok = family === expected;
        recordNature(expected, ok);
        const buttons = [...app.querySelectorAll('.family-btn')];
        buttons.find((b) => b.dataset.family === expected).classList.add('correct');
        if (ok) {
          score++;
          $('#score').textContent = score;
          $('#hint').innerHTML = `✓ ${escapeHtml(NATURE_TAGS[current.token.tag].label)}`;
          setTimeout(show, 450);
        } else {
          buttons.find((b) => b.dataset.family === family).classList.add('wrong', 'shake');
          misses.push(current);
          $('#hint').innerHTML = `<strong>« ${escapeHtml(current.token.word)} » : ${escapeHtml(NATURE_TAGS[current.token.tag].label.toLowerCase())}.</strong> ${escapeHtml(natureExplain(current.token))}`;
          setTimeout(show, 2600);
        }
      };
      app.querySelectorAll('.family-btn').forEach((b) => b.addEventListener('click', () => answer(b.dataset.family)));
      onKey = (event) => { if (/^[1-9]$/.test(event.key)) answer(NATURE_FAMILIES.find((_, i) => numpadKey(i) === Number(event.key)).id); };
      document.addEventListener('keydown', onKey);
      show();
    },
    onEnd() {
      if (onKey) document.removeEventListener('keydown', onKey);
      const record = score > (state.best.natures || 0);
      if (record) state.best.natures = score;
      unlock('first');
      if (score) addXp(score * 3); else save();
      if (record && score) confetti();
      app.innerHTML = `
        <div class="play card result">
          <div class="big">${record && score ? '🏆' : '⚡'}</div>
          <h2>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}</h2>
          <p class="muted">${record && score ? 'Nouveau record !' : `Record : ${state.best.natures || 0}`}</p>
          <span class="pill xp">⭐ +${score * 3} XP</span>
          <div class="btn-row" style="justify-content:center"><a class="btn" href="#/natures/eclair" id="again">Rejouer</a><a class="btn ghost" href="#/natures">Autres modes</a></div>
          ${misses.length ? `<div class="review-list"><h3>À retenir</h3>${misses.map((m) => `<div class="review-item">${sentenceHtml(m.tokens, (token, i) => (i === m.index ? `<mark>${escapeHtml(token.word)}</mark>` : escapeHtml(token.word)))}<br>✅ <strong>${escapeHtml(NATURE_TAGS[m.token.tag].label)}</strong><br><span class="muted">${escapeHtml(natureExplain(m.token))}</span></div>`).join('')}</div>` : ''}
        </div>`;
      $('#again').addEventListener('click', (event) => { event.preventDefault(); router(); });
    },
  });
  cleanup = () => { stopTimer(); if (onKey) document.removeEventListener('keydown', onKey); };
}

/* ---------- Mode chasse : trouver tous les mots d'une classe ---------- */
function natureChasse() {
  const ROUNDS = 8;
  const rounds = [];
  const used = new Set();
  for (let attempt = 0; rounds.length < ROUNDS && attempt < 200; attempt++) {
    const family = weakFamilyPick(NATURE_FAMILIES.map((f) => f.id).filter((id) => id !== 'interj' || Math.random() < 0.3));
    const candidates = NATURE_CORPUS.map((tokens, s) => s).filter((s) => !used.has(s) && NATURE_CORPUS[s].some((t) => t.tag && familyOf(t.tag) === family));
    if (!candidates.length) continue;
    const s = candidates[Math.floor(Math.random() * candidates.length)];
    used.add(s);
    rounds.push({ family, tokens: NATURE_CORPUS[s] });
  }
  let round = 0;
  let perfect = 0;
  let checked = false;
  let selected = new Set();
  let earned = 0;

  function show() {
    checked = false;
    selected = new Set();
    const r = rounds[round];
    const count = r.tokens.filter((t) => t.tag && familyOf(t.tag) === r.family).length;
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/natures" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(round / rounds.length) * 100}%"></span></div>
          <div class="combo">${perfect} 🎯</div>
        </div>
        <p class="nature-instruction">Touche ${count > 1 ? `les <strong>${count} ${NATURE_PLURALS[r.family]}</strong>` : `le seul <strong>${familyInfo(r.family).label.toLowerCase()}</strong>`} de la phrase.</p>
        <div class="card nature-card"><div class="nature-sentence words">${sentenceHtml(r.tokens, (token, i) => `<button class="w" data-i="${i}">${escapeHtml(token.word)}</button>`)}</div></div>
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
    const lines = [];
    let errors = 0;
    r.tokens.forEach((t, i) => {
      if (!t.tag) return;
      const target = familyOf(t.tag) === r.family;
      const picked = selected.has(i);
      const button = app.querySelector(`.w[data-i="${i}"]`);
      button.disabled = true;
      if (target) recordNature(r.family, picked);
      else if (picked) recordNature(familyOf(t.tag), false);
      if (target && picked) button.classList.add('found');
      else if (target) { button.classList.add('missed'); errors++; lines.push(`<li>Oublié : <strong>« ${escapeHtml(t.word)} »</strong>, ${escapeHtml(NATURE_TAGS[t.tag].label.toLowerCase())}. ${escapeHtml(natureExplain(t))}</li>`); }
      else if (picked) { button.classList.add('intruder'); errors++; lines.push(`<li>Intrus : <strong>« ${escapeHtml(t.word)} »</strong> (${escapeHtml(NATURE_TAGS[t.tag].label.toLowerCase())}). ${escapeHtml(natureExplain(t))}</li>`); }
    });
    const ok = errors === 0;
    if (ok) { perfect++; earned += 10; addXp(10); } else save();
    $('#after').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ko'}">
        <strong>${ok ? 'Tout trouvé, bravo !' : `${errors} erreur${errors > 1 ? 's' : ''}`}</strong>
        ${lines.length ? `<ul class="nature-lines">${lines.join('')}</ul>` : ''}
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
        <h2>Chasse aux mots : ${perfect} / ${rounds.length} phrases sans faute</h2>
        <p class="muted">Les classes que tu rates reviennent plus souvent à la partie suivante.</p>
        <span class="pill xp">⭐ +${earned} XP</span>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/natures/chasse" id="again">Rejouer</a><a class="btn ghost" href="#/natures">Autres modes</a></div>
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); natureChasse(); });
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

/* ---------- Mode analyse : nature précise de chaque mot ---------- */
function natureAnalyse() {
  const ROUNDS = 5;
  const eligible = NATURE_CORPUS.filter((tokens) => { const n = tokens.filter((t) => t.tag).length; return n >= 4 && n <= 9; });
  const rounds = shuffle(eligible).slice(0, ROUNDS);
  let round = 0;
  let points = 0;
  let maxPoints = 0;
  let answers = {};
  let active = null;
  let pending = null; // classe choisie dont la précision n'est pas encore donnée
  let checked = false;
  let earned = 0;

  function show() {
    checked = false;
    answers = {};
    pending = null;
    const tokens = rounds[round];
    active = tokens.findIndex((t) => t.tag);
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/natures" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(round / rounds.length) * 100}%"></span></div>
          <div class="combo">${Math.round(points * 10) / 10} pts</div>
        </div>
        <p class="nature-instruction">Donne la nature précise de chaque mot. Touche un mot pour le sélectionner.</p>
        <div class="card nature-card"><div class="nature-sentence words analyse" id="sentence"></div></div>
        <div id="panel" class="nature-panel"></div>
        <div id="after"><div class="btn-row"><button class="btn" id="check" disabled>Vérifier</button></div></div>
      </div>`;
    $('#check').addEventListener('click', check);
    paint();
  }

  function paint() {
    const tokens = rounds[round];
    $('#sentence').innerHTML = sentenceHtml(tokens, (token, i) => {
      const answer = answers[i];
      const look = checked ? (answer === token.tag ? 'found' : answer && familyOf(answer) === familyOf(token.tag) ? 'half' : 'missed') : (i === active ? 'active' : answer ? 'tagged' : '');
      return `<button class="w ${look}" data-i="${i}">${escapeHtml(token.word)}<small>${answer ? escapeHtml(NATURE_TAGS[answer].label) : '?'}</small></button>`;
    });
    app.querySelectorAll('#sentence .w').forEach((b) => b.addEventListener('click', () => { if (checked) return; active = Number(b.dataset.i); pending = null; paint(); }));
    if (checked) { $('#panel').innerHTML = ''; return; }
    const current = tokens[active];
    const chosen = answers[active];
    const family = pending || (chosen ? familyOf(chosen) : null);
    $('#panel').innerHTML = `
      <p class="muted">Nature de <strong>« ${escapeHtml(current.word)} »</strong> :</p>
      <div class="family-grid compact">${NATURE_FAMILIES.map((f) => `<button class="choice family-btn ${family === f.id ? 'picked' : ''}" data-family="${f.id}">${f.label}</button>`).join('')}</div>
      ${family && NATURE_SUBTYPES[family] ? `<p class="muted">Précise :</p><div class="subtype-row">${NATURE_SUBTYPES[family].map((tag) => `<button class="chip-btn ${chosen === tag ? 'picked' : ''}" data-tag="${tag}">${escapeHtml(NATURE_TAGS[tag].label)}</button>`).join('')}</div>` : ''}`;
    $('#panel').querySelectorAll('.family-btn').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.family;
      if (NATURE_SUBTYPES[id]) { pending = id; paint(); return; }
      pending = null;
      answers[active] = Object.keys(NATURE_TAGS).find((tag) => familyOf(tag) === id);
      advance();
    }));
    $('#panel').querySelectorAll('.chip-btn').forEach((b) => b.addEventListener('click', () => { answers[active] = b.dataset.tag; pending = null; advance(); }));
    $('#check').disabled = tokens.some((t, i) => t.tag && !answers[i]);
  }

  function advance() {
    const tokens = rounds[round];
    const nextIndex = tokens.findIndex((t, i) => t.tag && i > active && !answers[i]);
    const firstEmpty = tokens.findIndex((t, i) => t.tag && !answers[i]);
    if (nextIndex >= 0) active = nextIndex;
    else if (firstEmpty >= 0) active = firstEmpty;
    paint();
    if (firstEmpty < 0) $('#check').focus();
  }

  function check() {
    if (checked || $('#check').disabled) return;
    checked = true;
    const tokens = rounds[round];
    let roundPoints = 0;
    let roundMax = 0;
    const lines = [];
    tokens.forEach((t, i) => {
      if (!t.tag) return;
      roundMax++;
      const answer = answers[i];
      const sameFamily = familyOf(answer) === familyOf(t.tag);
      recordNature(familyOf(t.tag), sameFamily);
      if (answer === t.tag) { roundPoints++; return; }
      if (sameFamily) roundPoints += 0.5;
      lines.push(`<li><strong>« ${escapeHtml(t.word)} »</strong> : ${escapeHtml(NATURE_TAGS[t.tag].label.toLowerCase())}${sameFamily ? ' (bonne classe, précision à revoir)' : ` et non ${escapeHtml(NATURE_TAGS[answer].label.toLowerCase())}`}. ${escapeHtml(natureExplain(t))}</li>`);
    });
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
        <p class="muted">Une bonne classe sans la précision attendue rapporte un demi-point : au concours, le jury attend « déterminant possessif », pas seulement « déterminant ».</p>
        <span class="pill xp">⭐ +${earned} XP</span>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/natures/analyse" id="again">Rejouer</a><a class="btn ghost" href="#/natures">Autres modes</a></div>
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); natureAnalyse(); });
  }

  const onKey = (event) => {
    if (event.key !== 'Enter') return;
    if (checked && $('#next')) { event.preventDefault(); next(); }
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}
