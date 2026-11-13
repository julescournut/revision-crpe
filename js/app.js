'use strict';

/* ================= Utilitaires ================= */
const $ = (selector, root = document) => root.querySelector(selector);
const app = $('#app');
const DAILY_GOAL = 50;
const LEITNER_INTERVALS = [0, 1, 3, 7, 16, 30]; // jours avant de revoir une carte, par boîte (1 à 5)

const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = (list) => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const hash = (text) => {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (Math.imul(31, h) + text.charCodeAt(i)) | 0;
  return 'h' + (h >>> 0).toString(36);
};
const today = () => new Date().toLocaleDateString('sv-SE'); // AAAA-MM-JJ, heure locale
const daysBetween = (from, to) => Math.round((new Date(to) - new Date(from)) / 86400000);
const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString('sv-SE');
};

QUESTIONS.forEach((q) => { q.id = hash(q.q); });
FLASHCARDS.forEach((card) => { card.id = hash(card.f); });

/* ================= État persistant ================= */
const STORAGE_KEY = 'revision-crpe-v1';
const defaultState = () => ({
  xp: 0,
  streak: 0,
  lastActiveDay: null,
  daily: { day: today(), xp: 0 },
  badges: [],
  subjects: {},
  quizSubjectsDone: [],
  wrong: [],
  cards: {},
  cardsReviewed: 0,
  best: { calc: 0, tf: 0 },
  chaptersRead: [],
});

let state = load();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState(), ...saved } : defaultState();
  } catch (error) {
    return defaultState();
  }
}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { /* stockage indisponible : on continue sans sauvegarde */ }
}

function refreshDay() {
  if (state.daily.day !== today()) state.daily = { day: today(), xp: 0 };
}

function markActivity() {
  const day = today();
  if (state.lastActiveDay === day) return;
  const gap = state.lastActiveDay ? daysBetween(state.lastActiveDay, day) : null;
  state.streak = gap === 1 ? state.streak + 1 : 1;
  state.lastActiveDay = day;
  if (state.streak >= 3) unlock('streak3');
  if (state.streak >= 7) unlock('streak7');
}

function addXp(amount) {
  refreshDay();
  markActivity();
  const goalBefore = state.daily.xp >= DAILY_GOAL;
  state.xp += amount;
  state.daily.xp += amount;
  if (!goalBefore && state.daily.xp >= DAILY_GOAL) {
    toast('🎯 Objectif du jour atteint !');
    confetti();
  }
  if (state.xp >= 1000) unlock('xp1000');
  save();
  renderStats();
}

function unlock(id) {
  if (state.badges.includes(id)) return;
  state.badges.push(id);
  const badge = BADGES.find((b) => b.id === id);
  save();
  setTimeout(() => toast(`${badge.emoji} Badge débloqué : ${badge.name}`), 600);
}

function levelInfo(xp) {
  const level = Math.floor(Math.sqrt(xp / 50)) + 1;
  const start = 50 * (level - 1) ** 2;
  const end = 50 * level ** 2;
  return { level, progress: (xp - start) / (end - start), toNext: end - xp };
}

function currentStreak() {
  if (!state.lastActiveDay) return 0;
  return daysBetween(state.lastActiveDay, today()) <= 1 ? state.streak : 0;
}

/* ================= Interface commune ================= */
function renderStats() {
  const { level } = levelInfo(state.xp);
  $('#stats').innerHTML = `
    <span class="pill streak" title="Jours d’affilée">🔥 ${currentStreak()}</span>
    <span class="pill xp" title="Points d’expérience">⭐ ${state.xp}</span>
    <span class="pill level" title="Niveau">Niv. ${level}</span>`;
}

let toastTimer;
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function confetti() {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const colors = ['#4f5bd5', '#1fa971', '#f2a516', '#e0524b', '#8b55d6', '#e5713b'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.5,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    vy: 2 + Math.random() * 4,
    vx: -2 + Math.random() * 4,
    r: Math.random() * Math.PI,
    vr: -0.2 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
  let frame = 0;
  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (++frame < 180) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

const subjectStyle = (key) => `style="--subject:${SUBJECTS[key] ? SUBJECTS[key].color : 'var(--c-melange)'}"`;

function mastery(key) {
  const stats = state.subjects[key];
  if (!stats || !stats.answered) return 0;
  return Math.round((stats.correct / stats.answered) * 100);
}

function dueCards(subject) {
  const day = today();
  return FLASHCARDS.filter((card) => (!subject || card.s === subject) && state.cards[card.id] && state.cards[card.id].due <= day);
}

/* ================= Routeur ================= */
let cleanup = null;
const routes = {
  '': renderHome,
  jeux: renderGames,
  quiz: renderQuiz,
  erreurs: () => renderQuiz('erreurs'),
  cartes: renderCards,
  calcul: renderCalc,
  vraifaux: renderTrueFalse,
  cours: renderCourses,
  niveaux: renderLevels,
  'quel-niveau': renderLevelQuiz,
  annales: renderAnnales,
  methode: renderMethod,
};

function router() {
  if (cleanup) { cleanup(); cleanup = null; }
  const [route, param, sub] = location.hash.replace(/^#\/?/, '').split('/');
  (routes[route] || renderHome)(param, sub);
  document.querySelectorAll('#nav a').forEach((link) => {
    const target = link.dataset.route;
    const section = ['quiz', 'erreurs', 'cartes', 'calcul', 'vraifaux', 'quel-niveau'].includes(route) ? 'jeux' : route;
    link.classList.toggle('active', target === (section || ''));
  });
  window.scrollTo(0, 0);
  renderStats();
}

/* ================= Accueil ================= */
function renderHome() {
  refreshDay();
  const { level, progress, toNext } = levelInfo(state.xp);
  const goal = Math.min(100, Math.round((state.daily.xp / DAILY_GOAL) * 100));
  const due = dueCards().length;
  const subjects = Object.keys(SUBJECTS);

  app.innerHTML = `
    <section class="hero">
      <div class="card hero-main">
        <h1>Bonjour 👋</h1>
        <p>${state.daily.xp >= DAILY_GOAL ? 'Objectif du jour atteint, bravo ! Une petite série de plus ?' : 'Quelques minutes par jour suffisent. On s’y met ?'}</p>
        <strong>Objectif du jour : ${Math.min(state.daily.xp, DAILY_GOAL)} / ${DAILY_GOAL} XP</strong>
        <div class="goal-bar"><span style="width:${goal}%"></span></div>
        <div class="btn-row">
          <a class="btn light" href="#/quiz/melange">▶ Quiz mélangé</a>
          <a class="btn light" href="#/cartes">🃏 Cartes du jour${due ? ` (${due})` : ''}</a>
        </div>
      </div>
      <div class="card">
        <h2>Niveau ${level}</h2>
        <div class="goal-bar"><span style="width:${Math.round(progress * 100)}%;background:var(--primary)"></span></div>
        <p class="muted">${toNext} XP avant le niveau ${level + 1}</p>
        <div class="grid grid-2">
          <div><strong style="font-size:1.6rem">🔥 ${currentStreak()}</strong><br><span class="muted">jours d’affilée</span></div>
          <div><strong style="font-size:1.6rem">🃏 ${state.cardsReviewed}</strong><br><span class="muted">cartes révisées</span></div>
        </div>
        ${state.wrong.length ? `<div class="btn-row"><a class="btn ghost" href="#/erreurs">🔁 Revoir mes ${state.wrong.length} erreur${state.wrong.length > 1 ? 's' : ''}</a></div>` : ''}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Réviser par matière</h2><a href="#/cours">Voir les fiches →</a></div>
      <div class="grid grid-3">
        ${subjects.map((key) => `
          <a class="card link-card subject-card" ${subjectStyle(key)} href="#/quiz/${key}">
            <span class="emoji">${SUBJECTS[key].emoji}</span>
            <h3>${SUBJECTS[key].label}</h3>
            <span class="muted">${SUBJECTS[key].epreuve} · ${QUESTIONS.filter((q) => q.s === key).length} questions</span>
            <div class="bar"><span style="width:${mastery(key)}%"></span></div>
            <small class="muted">Réussite : ${mastery(key)} %</small>
          </a>`).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Badges</h2><span class="muted">${state.badges.length} / ${BADGES.length}</span></div>
      <div class="badges">
        ${BADGES.map((b) => `
          <div class="card badge ${state.badges.includes(b.id) ? '' : 'locked'}">
            <div class="emoji">${b.emoji}</div><strong>${b.name}</strong><small>${b.desc}</small>
          </div>`).join('')}
      </div>
    </section>`;
}

/* ================= Jeux ================= */
function renderGames() {
  const due = dueCards().length;
  app.innerHTML = `
    <h1>Jeux de révision</h1>
    <p class="muted">Chaque jeu fait travailler la mémoire en t’obligeant à retrouver la réponse : c’est ce qui fait retenir.</p>
    <div class="grid grid-2">
      <a class="card link-card" href="#/quiz/melange">
        <span class="emoji">🎯</span><h3>Quiz mélangé</h3>
        <p class="muted">10 questions de toutes les matières, avec l’explication après chaque réponse. Les combos rapportent des points bonus.</p>
      </a>
      <a class="card link-card" href="#/cartes">
        <span class="emoji">🃏</span><h3>Cartes mémoire${due ? ` · ${due} à revoir` : ''}</h3>
        <p class="muted">Répétition espacée : une carte bien sue revient plus tard, une carte ratée revient demain.</p>
      </a>
      <a class="card link-card" href="#/calcul">
        <span class="emoji">🧮</span><h3>Calcul mental · 60 s</h3>
        <p class="muted">Un maximum de calculs en une minute. Record actuel : ${state.best.calc}.</p>
      </a>
      <a class="card link-card" href="#/quel-niveau">
        <span class="emoji">🎲</span><h3>À quel niveau ?</h3>
        <p class="muted">Un objectif du programme s’affiche : retrouve la classe, du CP au CM2. Parfait pour préparer l’oral 1.</p>
      </a>
      <a class="card link-card" href="#/vraifaux">
        <span class="emoji">⚡</span><h3>Vrai ou faux éclair · 45 s</h3>
        <p class="muted">Débusque les idées reçues (et les pièges du concours). Record actuel : ${state.best.tf}.</p>
      </a>
    </div>
    <section class="section">
      <h2>Quiz par matière</h2>
      <div class="grid grid-3">
        ${Object.keys(SUBJECTS).map((key) => `
          <a class="card link-card subject-card" ${subjectStyle(key)} href="#/quiz/${key}">
            <span class="tag">${SUBJECTS[key].epreuve}</span>
            <h3 style="margin-top:10px">${SUBJECTS[key].emoji} ${SUBJECTS[key].label}</h3>
            <div class="bar"><span style="width:${mastery(key)}%"></span></div>
          </a>`).join('')}
        ${state.wrong.length ? `<a class="card link-card" href="#/erreurs"><span class="emoji">🔁</span><h3>Mes erreurs (${state.wrong.length})</h3><p class="muted">Les questions ratées, jusqu’à ce qu’elles soient réussies.</p></a>` : ''}
      </div>
    </section>`;
}

/* ================= Quiz ================= */
function renderQuiz(subject = 'melange') {
  let pool;
  if (subject === 'erreurs') pool = QUESTIONS.filter((q) => state.wrong.includes(q.id));
  else if (SUBJECTS[subject]) pool = QUESTIONS.filter((q) => q.s === subject);
  else { subject = 'melange'; pool = QUESTIONS; }

  if (!pool.length) {
    app.innerHTML = `<div class="play card result"><div class="big">🎉</div><h2>Aucune erreur à revoir</h2><p class="muted">Joue un quiz pour alimenter cette liste.</p><a class="btn" href="#/quiz/melange">Lancer un quiz</a></div>`;
    return;
  }

  const questions = shuffle(pool).slice(0, 10).map((q) => {
    const order = shuffle(q.c.map((_, i) => i));
    return { ...q, choices: order.map((i) => q.c[i]), answer: order.indexOf(q.a) };
  });
  const title = subject === 'erreurs' ? 'Mes erreurs' : subject === 'melange' ? 'Quiz mélangé' : SUBJECTS[subject].label;
  let index = 0;
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let earned = 0;
  let answered = false;
  const missed = [];

  function show() {
    answered = false;
    const q = questions[index];
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/jeux" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(index / questions.length) * 100}%"></span></div>
          <div class="combo">${combo >= 2 ? `🔥 x${combo}` : ''}</div>
        </div>
        <span class="tag" ${subjectStyle(q.s)}>${SUBJECTS[q.s].label}</span>
        <div class="question">${escapeHtml(q.q)}</div>
        <div class="choices">
          ${q.choices.map((choice, i) => `<button class="choice" data-i="${i}"><span class="key">${i + 1}</span>${escapeHtml(choice)}</button>`).join('')}
        </div>
        <div id="after"></div>
      </div>`;
    app.querySelectorAll('.choice').forEach((button) => button.addEventListener('click', () => pick(Number(button.dataset.i))));
  }

  function pick(choiceIndex) {
    if (answered) return;
    answered = true;
    const q = questions[index];
    const ok = choiceIndex === q.answer;
    const buttons = app.querySelectorAll('.choice');
    buttons.forEach((b) => { b.disabled = true; });
    buttons[q.answer].classList.add('correct');

    const stats = state.subjects[q.s] || (state.subjects[q.s] = { answered: 0, correct: 0 });
    stats.answered++;
    if (ok) {
      stats.correct++;
      score++;
      combo++;
      maxCombo = Math.max(maxCombo, combo);
      const gain = 10 + (combo >= 3 ? 5 : 0);
      earned += gain;
      addXp(gain);
      state.wrong = state.wrong.filter((id) => id !== q.id);
      buttons[q.answer].classList.add('pop');
      if (combo >= 5) unlock('combo5');
    } else {
      combo = 0;
      buttons[choiceIndex].classList.add('wrong', 'shake');
      if (!state.wrong.includes(q.id)) state.wrong.push(q.id);
      missed.push(q);
    }
    save();

    const praise = ['Bien joué !', 'Excellent !', 'Parfait !', 'Bravo !', 'Exactement !'];
    $('#after').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ko'}">
        <strong>${ok ? praise[Math.floor(Math.random() * praise.length)] + (combo >= 3 ? ' +5 bonus combo' : '') : 'Pas tout à fait…'}</strong>
        ${ok ? '' : `Réponse : ${escapeHtml(q.choices[q.answer])}. `}${escapeHtml(q.e)}
      </div>
      <div class="btn-row"><button class="btn ${ok ? 'success' : ''}" id="next">${index + 1 < questions.length ? 'Continuer' : 'Voir le résultat'} <kbd>Entrée</kbd></button></div>`;
    $('#next').addEventListener('click', next);
    $('#next').focus();
  }

  function next() {
    index++;
    if (index < questions.length) show();
    else finish();
  }

  function finish() {
    unlock('first');
    if (score === questions.length && questions.length >= 10) { unlock('perfect'); confetti(); }
    if (SUBJECTS[subject] && !state.quizSubjectsDone.includes(subject)) {
      state.quizSubjectsDone.push(subject);
      if (Object.keys(SUBJECTS).every((key) => state.quizSubjectsDone.includes(key))) unlock('allsubjects');
    }
    save();
    const ratio = score / questions.length;
    const emoji = ratio === 1 ? '🏆' : ratio >= 0.7 ? '🎉' : ratio >= 0.4 ? '💪' : '🌱';
    const message = ratio === 1 ? 'Sans faute !' : ratio >= 0.7 ? 'Très bon score.' : ratio >= 0.4 ? 'C’est en bonne voie.' : 'Chaque erreur est une occasion d’apprendre.';
    app.innerHTML = `
      <div class="play card result">
        <div class="big">${emoji}</div>
        <h2>${title} : ${score} / ${questions.length}</h2>
        <p class="muted">${message}</p>
        <div class="result-stats">
          <span class="pill xp">⭐ +${earned} XP</span>
          <span class="pill streak">🔥 Meilleur combo : ${maxCombo}</span>
        </div>
        <div class="btn-row" style="justify-content:center">
          <a class="btn" href="#/quiz/${subject}" id="again">Rejouer</a>
          ${missed.length ? '<a class="btn ghost" href="#/erreurs">Revoir mes erreurs</a>' : ''}
          <a class="btn ghost" href="#/jeux">Autres jeux</a>
        </div>
        ${missed.length ? `<div class="review-list"><h3>À retenir</h3>${missed.map((q) => `
          <div class="review-item"><strong>${escapeHtml(q.q)}</strong><br>✅ ${escapeHtml(q.c[q.a])}<br><span class="muted">${escapeHtml(q.e)}</span></div>`).join('')}</div>` : ''}
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); renderQuiz(subject); });
  }

  const onKey = (event) => {
    if (!answered && /^[1-4]$/.test(event.key)) pick(Number(event.key) - 1);
    else if (answered && event.key === 'Enter' && $('#next')) { event.preventDefault(); next(); }
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}

/* ================= Cartes mémoire (système de Leitner) ================= */
function renderCards(subject) {
  if (subject && !SUBJECTS[subject]) subject = undefined;
  const fresh = FLASHCARDS.filter((card) => (!subject || card.s === subject) && !state.cards[card.id]);
  const session = shuffle([...dueCards(subject), ...shuffle(fresh).slice(0, 8)]);
  const boxCounts = [1, 2, 3, 4, 5].map((box) => FLASHCARDS.filter((card) => state.cards[card.id] && state.cards[card.id].box === box).length);
  const filters = `
    <div class="tabs">
      <a class="tab ${!subject ? 'active' : ''}" href="#/cartes">Toutes</a>
      ${[...new Set(FLASHCARDS.map((c) => c.s))].map((key) => `<a class="tab ${subject === key ? 'active' : ''}" ${subjectStyle(key)} href="#/cartes/${key}">${SUBJECTS[key].emoji} ${SUBJECTS[key].label}</a>`).join('')}
    </div>
    <div class="boxes">${boxCounts.map((count, i) => `<div class="box">${count}<small>Boîte ${i + 1}</small></div>`).join('')}</div>`;

  if (!session.length) {
    app.innerHTML = `<div class="play"><h1>Cartes mémoire</h1>${filters}<div class="card result"><div class="big">✅</div><h2>Rien à revoir aujourd’hui</h2><p class="muted">Les cartes reviendront au bon moment. Reviens demain !</p><a class="btn" href="#/jeux">Autres jeux</a></div></div>`;
    return;
  }

  let index = 0;
  let known = 0;
  let flipped = false;

  function show() {
    flipped = false;
    const card = session[index];
    const info = state.cards[card.id];
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/jeux" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(index / session.length) * 100}%"></span></div>
          <div class="combo">${index + 1}/${session.length}</div>
        </div>
        ${filters}
        <div class="flashcard" id="card">
          <div class="flashcard-inner">
            <div class="flashcard-face"><span class="tag" ${subjectStyle(card.s)}>${SUBJECTS[card.s].label}${info ? ` · boîte ${info.box}` : ' · nouvelle'}</span><p class="term" style="margin-top:16px">${escapeHtml(card.f)}</p><span class="hint">Formule ta réponse dans ta tête, puis clique ou appuie sur <kbd>Espace</kbd></span></div>
            <div class="flashcard-face back"><strong class="muted">${escapeHtml(card.f)}</strong><p class="def">${escapeHtml(card.b)}</p></div>
          </div>
        </div>
        <div class="btn-row" id="grade" style="justify-content:center;visibility:hidden">
          <button class="btn danger" data-grade="0">À revoir <kbd>1</kbd></button>
          <button class="btn success" data-grade="1">Je savais <kbd>2</kbd></button>
        </div>
      </div>`;
    $('#card').addEventListener('click', flip);
    app.querySelectorAll('[data-grade]').forEach((b) => b.addEventListener('click', () => grade(b.dataset.grade === '1')));
  }

  function flip() {
    flipped = !flipped;
    $('#card').classList.toggle('flipped', flipped);
    if (flipped) $('#grade').style.visibility = 'visible';
  }

  function grade(knew) {
    if (!flipped) return;
    const card = session[index];
    const current = state.cards[card.id] ? state.cards[card.id].box : 0;
    const box = knew ? Math.min(5, current + 1) : 1;
    state.cards[card.id] = { box, due: addDays(today(), knew ? LEITNER_INTERVALS[box] : 1) };
    state.cardsReviewed++;
    if (knew) known++;
    if (state.cardsReviewed >= 50) unlock('cards50');
    addXp(knew ? 3 : 1);
    index++;
    if (index < session.length) show();
    else finish();
  }

  function finish() {
    unlock('first');
    save();
    app.innerHTML = `
      <div class="play card result">
        <div class="big">🃏</div>
        <h2>Session terminée : ${known} / ${session.length} sues</h2>
        <p class="muted">Les cartes ratées reviendront demain, les autres plus tard. C’est la répétition espacée qui ancre durablement.</p>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/jeux">Autres jeux</a><a class="btn ghost" href="#/">Accueil</a></div>
      </div>`;
  }

  const onKey = (event) => {
    if (event.key === ' ') { event.preventDefault(); flip(); }
    else if (flipped && (event.key === '1' || event.key === '2')) grade(event.key === '2');
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}

/* ================= Jeux chronométrés ================= */
function timedGame({ seconds, intro, onStart, onEnd }) {
  let left = seconds;
  let timer;
  app.innerHTML = intro;
  $('#start').addEventListener('click', start);

  function start() {
    onStart();
    timer = setInterval(() => {
      left--;
      const el = $('#timer');
      if (el) { el.textContent = `⏱ ${left}`; el.classList.toggle('low', left <= 10); }
      if (left <= 0) { clearInterval(timer); onEnd(); }
    }, 1000);
  }
  return () => clearInterval(timer);
}

function calcQuestion() {
  const r = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const generators = [
    () => { const a = r(12, 89), b = r(12, 89); return [`${a} + ${b}`, a + b]; },
    () => { const a = r(40, 150), b = r(11, a - 1); return [`${a} − ${b}`, a - b]; },
    () => { const a = r(3, 12), b = r(3, 12); return [`${a} × ${b}`, a * b]; },
    () => { const b = r(3, 9), q = r(3, 12); return [`${b * q} ÷ ${b}`, q]; },
    () => { const a = r(1, 99); return [`100 − ${a}`, 100 - a]; },
    () => { const a = r(2, 99) / 10; const m = [10, 100][r(0, 1)]; return [`${String(a).replace('.', ',')} × ${m}`, Math.round(a * m)]; },
    () => { const p = [10, 25, 50, 20][r(0, 3)]; const n = r(1, 20) * 20; return [`${p} % de ${n}`, (p * n) / 100]; },
    () => { const d = [2, 3, 4, 5][r(0, 3)]; const n = d * r(2, 12); const k = r(1, d - 1); return [`${k}/${d} de ${n}`, (k * n) / d]; },
    () => { const a = r(2, 9) * 25; return [`${a} × 4`, a * 4]; },
  ];
  return generators[r(0, generators.length - 1)]();
}

function renderCalc() {
  let score = 0;
  let current;
  cleanup = timedGame({
    seconds: 60,
    intro: `
      <div class="play card result">
        <div class="big">🧮</div><h2>Calcul mental · 60 secondes</h2>
        <p class="muted">Tape ta réponse puis <kbd>Entrée</kbd>. Additions, tables, pourcentages, fractions d’une quantité… Record : ${state.best.calc}.</p>
        <button class="btn" id="start">C’est parti !</button>
      </div>`,
    onStart() {
      app.innerHTML = `
        <div class="play">
          <div class="play-top"><a class="icon-btn" href="#/jeux" title="Quitter">✕</a><div style="flex:1"></div><div class="combo">✅ <span id="score">0</span></div><div class="timer" id="timer">⏱ 60</div></div>
          <div class="calc" id="calc"></div>
          <input class="calc-input" id="answer" inputmode="decimal" autocomplete="off" aria-label="Ta réponse">
          <p class="muted" style="text-align:center;margin-top:12px" id="hint">&nbsp;</p>
        </div>`;
      const input = $('#answer');
      const nextQuestion = () => { current = calcQuestion(); $('#calc').textContent = `${current[0]} = ?`; input.value = ''; input.className = 'calc-input'; input.focus(); };
      input.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || input.value.trim() === '') return;
        const value = Number(input.value.replace(',', '.').replace(/\s/g, ''));
        if (value === current[1]) {
          score++;
          $('#score').textContent = score;
          input.className = 'calc-input ok';
          $('#hint').innerHTML = '&nbsp;';
          setTimeout(nextQuestion, 150);
        } else {
          input.className = 'calc-input ko shake';
          $('#hint').textContent = `${current[0]} = ${String(current[1]).replace('.', ',')}`;
          setTimeout(nextQuestion, 900);
        }
      });
      nextQuestion();
    },
    onEnd() {
      const record = score > state.best.calc;
      if (record) state.best.calc = score;
      if (score >= 20) unlock('calc20');
      unlock('first');
      if (score) addXp(score * 3); else save();
      if (record && score) confetti();
      app.innerHTML = `
        <div class="play card result">
          <div class="big">${record && score ? '🏆' : '🧮'}</div>
          <h2>${score} calcul${score > 1 ? 's' : ''} réussi${score > 1 ? 's' : ''}</h2>
          <p class="muted">${record && score ? 'Nouveau record !' : `Record : ${state.best.calc}`}</p>
          <span class="pill xp">⭐ +${score * 3} XP</span>
          <div class="btn-row" style="justify-content:center"><a class="btn" href="#/calcul" id="again">Rejouer</a><a class="btn ghost" href="#/jeux">Autres jeux</a></div>
        </div>`;
      $('#again').addEventListener('click', (event) => { event.preventDefault(); router(); });
    },
  });
}

function renderTrueFalse() {
  let score = 0;
  let deck = [];
  let current;
  let locked = false;
  const misses = [];
  let onKey = null;

  const stopTimer = timedGame({
    seconds: 45,
    intro: `
      <div class="play card result">
        <div class="big">⚡</div><h2>Vrai ou faux éclair · 45 secondes</h2>
        <p class="muted">Réponds le plus vite possible. Clavier : <kbd>←</kbd> faux, <kbd>→</kbd> vrai. Record : ${state.best.tf}.</p>
        <button class="btn" id="start">C’est parti !</button>
      </div>`,
    onStart() {
      app.innerHTML = `
        <div class="play">
          <div class="play-top"><a class="icon-btn" href="#/jeux" title="Quitter">✕</a><div style="flex:1"></div><div class="combo">✅ <span id="score">0</span></div><div class="timer" id="timer">⏱ 45</div></div>
          <div class="card"><div class="tf-statement" id="statement"></div></div>
          <div class="tf-buttons" style="margin-top:16px">
            <button class="btn danger" data-v="0">✗ Faux</button>
            <button class="btn success" data-v="1">✓ Vrai</button>
          </div>
          <p class="muted" style="text-align:center;margin-top:16px;min-height:3em" id="hint"></p>
        </div>`;
      const nextStatement = () => {
        if (!deck.length) deck = shuffle(TRUE_FALSE);
        current = deck.pop();
        locked = false;
        $('#hint').textContent = '';
        $('#statement').textContent = current.t;
      };
      const answer = (value) => {
        if (locked) return;
        locked = true;
        if (value === current.v) {
          score++;
          $('#score').textContent = score;
          $('#hint').textContent = '';
          setTimeout(nextStatement, 150);
        } else {
          misses.push(current);
          $('#statement').parentElement.classList.add('shake');
          $('#hint').textContent = `Raté, c’était ${current.v ? 'vrai' : 'faux'}. ${current.e}`;
          setTimeout(() => { $('#statement').parentElement.classList.remove('shake'); nextStatement(); }, 2500);
        }
      };
      app.querySelectorAll('[data-v]').forEach((b) => b.addEventListener('click', () => answer(b.dataset.v === '1')));
      onKey = (event) => {
        if (event.key === 'ArrowRight') answer(true);
        if (event.key === 'ArrowLeft') answer(false);
      };
      document.addEventListener('keydown', onKey);
      nextStatement();
    },
    onEnd() {
      if (onKey) document.removeEventListener('keydown', onKey);
      const record = score > state.best.tf;
      if (record) state.best.tf = score;
      if (score >= 15) unlock('tf15');
      unlock('first');
      if (score) addXp(score * 3); else save();
      if (record && score) confetti();
      app.innerHTML = `
        <div class="play card result">
          <div class="big">${record && score ? '🏆' : '⚡'}</div>
          <h2>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}</h2>
          <p class="muted">${record && score ? 'Nouveau record !' : `Record : ${state.best.tf}`}</p>
          <span class="pill xp">⭐ +${score * 3} XP</span>
          <div class="btn-row" style="justify-content:center"><a class="btn" href="#/vraifaux" id="again">Rejouer</a><a class="btn ghost" href="#/jeux">Autres jeux</a></div>
          ${misses.length ? `<div class="review-list"><h3>À retenir</h3>${misses.map((m) => `<div class="review-item"><strong>${escapeHtml(m.t)}</strong> ${m.v ? '✅ Vrai' : '❌ Faux'}<br><span class="muted">${escapeHtml(m.e)}</span></div>`).join('')}</div>` : ''}
        </div>`;
      $('#again').addEventListener('click', (event) => { event.preventDefault(); router(); });
    },
  });
  cleanup = () => { stopTimer(); if (onKey) document.removeEventListener('keydown', onKey); };
}

/* ================= Cours ================= */
const inline = (text) => escapeHtml(text)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>');

function renderBlock(block) {
  switch (block.t) {
    case 'h': return `<h3>${inline(block.text)}</h3>`;
    case 'p': return `<p>${inline(block.text)}</p>`;
    case 'list': return `<ul>${block.items.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`;
    case 'steps': return `<ol>${block.items.map((item) => `<li>${inline(item)}</li>`).join('')}</ol>`;
    case 'table': return `<div class="table-wrap"><table class="exam-table">${block.head ? `<thead><tr>${block.head.map((cell) => `<th>${inline(cell)}</th>`).join('')}</tr></thead>` : ''}<tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    case 'example': return `<div class="callout example"><strong>✏️ Exemple${block.title ? ` : ${inline(block.title)}` : ''}</strong>${block.items.map((item) => `<p>${inline(item)}</p>`).join('')}</div>`;
    case 'trap': return `<div class="callout trap"><strong>⚠️ Piège</strong><p>${inline(block.text)}</p></div>`;
    case 'tip': return `<div class="callout tip"><strong>💡 Astuce</strong><p>${inline(block.text)}</p></div>`;
    case 'key': return `<div class="callout key"><strong>📌 À retenir</strong><ul>${block.items.map((item) => `<li>${inline(item)}</li>`).join('')}</ul></div>`;
    case 'check': return `<details class="check"><summary>🤔 ${inline(block.q)}</summary><p>${inline(block.a)}</p></details>`;
    default: return '';
  }
}

function renderCourses(subject, chapterId) {
  if (!SUBJECTS[subject]) subject = 'francais';
  const chapters = COURS[subject] || [];
  const read = state.chaptersRead || (state.chaptersRead = []);
  const key = (chapter) => `${subject}/${chapter.id}`;
  const doneCount = chapters.filter((chapter) => read.includes(key(chapter))).length;
  const index = Math.max(0, chapters.findIndex((chapter) => chapter.id === chapterId));
  const chapter = chapters[index];
  const fiche = FICHES[subject];
  const checks = chapter ? chapter.blocks.filter((block) => block.t === 'check') : [];

  app.innerHTML = `
    <h1>Cours</h1>
    <div class="tabs">
      ${Object.keys(SUBJECTS).map((k) => `<a class="tab ${k === subject ? 'active' : ''}" ${subjectStyle(k)} href="#/cours/${k}">${SUBJECTS[k].emoji} ${SUBJECTS[k].label}</a>`).join('')}
    </div>
    <div class="course-layout">
      <aside class="card course-nav" ${subjectStyle(subject)}>
        <strong>${SUBJECTS[subject].emoji} ${SUBJECTS[subject].label}</strong>
        <div class="bar"><span style="width:${chapters.length ? (doneCount / chapters.length) * 100 : 0}%"></span></div>
        <small class="muted">${doneCount} / ${chapters.length} chapitres compris</small>
        <ol>
          ${chapters.map((c, i) => `<li><a class="${i === index ? 'active' : ''}" href="#/cours/${subject}/${c.id}">${read.includes(key(c)) ? '✅' : `<span class="num">${i + 1}</span>`} ${escapeHtml(c.title)}</a></li>`).join('')}
        </ol>
        ${fiche && fiche.links.length ? `<h4>Pour aller plus loin</h4><ul class="res-list">${fiche.links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a></li>`).join('')}</ul>` : ''}
      </aside>
      ${chapter ? `
      <article class="card fiche" ${subjectStyle(subject)}>
        <span class="tag">${SUBJECTS[subject].epreuve} · chapitre ${index + 1} / ${chapters.length}</span>
        <h2 style="margin-top:10px">${escapeHtml(chapter.title)}</h2>
        <p class="lead">${inline(chapter.intro)}</p>
        ${chapter.blocks.filter((block) => block.t !== 'check').map(renderBlock).join('')}
        ${checks.length ? `<div class="checks"><h3>🧠 Teste-toi</h3><p class="muted">Cherche la réponse dans ta tête avant de l’afficher.</p>${checks.map(renderBlock).join('')}</div>` : ''}
        <div class="btn-row chapter-actions">
          ${read.includes(key(chapter)) ? '<span class="pill" style="background:var(--success-soft);color:#11603f">✅ Chapitre compris</span>' : '<button class="btn success" id="understood">J’ai compris · +10 XP</button>'}
          <a class="btn ghost" href="#/quiz/${subject}">🎯 Quiz ${SUBJECTS[subject].label}</a>
        </div>
        <div class="chapter-nav">
          ${index > 0 ? `<a href="#/cours/${subject}/${chapters[index - 1].id}">← ${escapeHtml(chapters[index - 1].title)}</a>` : '<span></span>'}
          ${index < chapters.length - 1 ? `<a href="#/cours/${subject}/${chapters[index + 1].id}">${escapeHtml(chapters[index + 1].title)} →</a>` : ''}
        </div>
      </article>` : '<article class="card"><p class="muted">Les chapitres de cette matière arrivent bientôt.</p></article>'}
    </div>`;

  const button = $('#understood');
  if (button) button.addEventListener('click', () => {
    read.push(key(chapter));
    addXp(10);
    if (subject && chapters.every((c) => read.includes(key(c)))) { toast(`🎓 Tous les chapitres de ${SUBJECTS[subject].label} sont compris !`); confetti(); }
    save();
    const next = chapters[index + 1];
    location.hash = next ? `#/cours/${subject}/${next.id}` : `#/cours/${subject}/${chapter.id}`;
    if (!next) router();
  });
}

/* ================= Niveaux ================= */
const LEVEL_MATIERES = [['francais', 'Français'], ['maths', 'Mathématiques']];

function attendusFor(levelId, matiere) {
  const level = LEVELS.find((l) => l.id === levelId);
  if (level && level.cycle === 1) {
    // Le programme de maternelle raisonne par âge : correspondance indicative avec les sections.
    const band = { PS: 'à aborder avant 4 ans', MS: 'à partir de 4 ans', GS: 'à partir de 5 ans' }[levelId];
    const own = ATTENDUS.filter((a) => a.niveau === 'MAT' && a.matiere === matiere && a.domaine.endsWith(`(${band})`))
      .map((a) => ({ ...a, domaine: a.domaine.replace(/\s*\([^)]*\)\s*$/, '') }));
    return { own, shared: [], band };
  }
  return { own: ATTENDUS.filter((a) => a.niveau === levelId && a.matiere === matiere), shared: [] };
}

function renderLevels(levelId) {
  const level = LEVELS.find((l) => l.id === levelId) || LEVELS.find((l) => l.id === 'CP');
  const source = LEVEL_SOURCES[level.cycle];
  const cycles = [[1, 'Maternelle (cycle 1)'], [2, 'Cycle 2'], [3, 'Cycle 3']];
  const domainBlock = (group, open) => `
    <details class="domain" ${open ? 'open' : ''}>
      <summary>${escapeHtml(group.domaine)} <span class="muted">· ${group.items.length}</span></summary>
      <ul class="attendus">
        ${group.items.map((item) => `<li><strong>${escapeHtml(item.o)}</strong>${item.ex ? `<span class="muted">Exemple de réussite : ${escapeHtml(item.ex)}</span>` : ''}</li>`).join('')}
      </ul>
    </details>`;

  app.innerHTML = `
    <h1>Ce que l’élève doit savoir, niveau par niveau</h1>
    <p class="muted">Objectifs d’apprentissage et exemples de réussite tirés des programmes officiels de français et de mathématiques. Indispensable pour l’oral 1 : situer une notion dans la scolarité et choisir un niveau cohérent.</p>
    <div class="level-picker">
      ${cycles.map(([cycle, label]) => `
        <div class="level-group"><small class="muted">${label}</small>
          <div class="tabs">${LEVELS.filter((l) => l.cycle === cycle).map((l) => `<a class="tab ${l.id === level.id ? 'active' : ''}" href="#/niveaux/${l.id}">${l.id}</a>`).join('')}</div>
        </div>`).join('')}
    </div>
    <div class="btn-row" style="margin:0 0 20px"><a class="btn ghost" href="#/quel-niveau">🎲 Jouer à « À quel niveau ? »</a></div>
    <h2>${escapeHtml(level.label)}</h2>
    <div class="grid grid-2" style="align-items:start">
      ${LEVEL_MATIERES.map(([matiere, label]) => {
        const essentials = ESSENTIELS.filter((e) => (e.niveau === level.id || (level.cycle === 1 && e.niveau === 'MAT')) && e.matiere === matiere).flatMap((e) => e.items);
        const { own, shared, band } = attendusFor(level.id, matiere);
        const subject = SUBJECTS[matiere];
        return `
        <section class="card level-card" ${subjectStyle(matiere)}>
          <span class="tag">${subject.emoji} ${label}</span>
          ${band ? `<p class="muted" style="margin:10px 0 0;font-size:.92rem">Le programme de maternelle fixe les objectifs par âge : ici, ceux « ${escapeHtml(band)} » (correspondance indicative avec la ${escapeHtml(level.label.toLowerCase())}).</p>` : ''}
          ${essentials.length ? `<div class="callout key"><strong>📌 L’essentiel ${level.cycle === 1 ? 'en maternelle' : `en ${escapeHtml(level.id)}`}</strong><ul>${essentials.map((e) => `<li>${escapeHtml(e)}</li>`).join('')}</ul></div>` : ''}
          ${own.map((group, i) => domainBlock(group, i === 0)).join('')}
          ${shared.length ? `<h3 style="margin-top:20px">Sur toute la maternelle</h3>${shared.map((group) => domainBlock(group, false)).join('')}` : ''}
          ${!own.length && !shared.length ? '<p class="muted">Contenu en préparation.</p>' : ''}
        </section>`;
      }).join('')}
    </div>
    <p class="muted" style="margin-top:20px;font-size:.9rem">Source : ${escapeHtml(source.label)} : ${source.urls.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>`).join(' · ')}.
    Les autres domaines (sciences, histoire-géographie, EMC, arts, EPS, langues) sont définis par cycle et non par année.</p>`;
}

/* Jeu « À quel niveau ? » : retrouver la classe d’un objectif d’apprentissage. */
function renderLevelQuiz() {
  const order = LEVELS.filter((l) => l.cycle > 1).map((l) => l.id); // la maternelle raisonne par âge, pas par classe
  const pool = [];
  ATTENDUS.filter((a) => order.includes(a.niveau)).forEach((group) => group.items.forEach((item) => pool.push({ ...item, niveau: group.niveau, matiere: group.matiere, domaine: group.domaine })));
  if (pool.length < 4) {
    app.innerHTML = '<div class="play card result"><div class="big">⏳</div><h2>Contenu en préparation</h2><a class="btn" href="#/jeux">Autres jeux</a></div>';
    return;
  }
  const rounds = shuffle(pool).slice(0, 10).map((item) => {
    const index = order.indexOf(item.niveau);
    const start = Math.max(0, Math.min(order.length - 4, index - 1 - Math.floor(Math.random() * 2)));
    return { ...item, choices: order.slice(start, start + 4) };
  });
  let round = 0;
  let score = 0;
  let answered = false;

  function show() {
    answered = false;
    const r = rounds[round];
    app.innerHTML = `
      <div class="play">
        <div class="play-top">
          <a class="icon-btn" href="#/jeux" title="Quitter">✕</a>
          <div class="progress"><span style="width:${(round / rounds.length) * 100}%"></span></div>
          <div class="combo">${score} ✅</div>
        </div>
        <span class="tag" ${subjectStyle(r.matiere)}>${SUBJECTS[r.matiere].label} · ${escapeHtml(r.domaine)}</span>
        <p class="muted" style="margin:14px 0 0">À quel niveau cet objectif est-il fixé par le programme ?</p>
        <div class="question">${escapeHtml(r.o)}</div>
        <div class="choices level-choices">
          ${r.choices.map((c, i) => `<button class="choice" data-level="${c}"><span class="key">${i + 1}</span>${escapeHtml(LEVELS.find((l) => l.id === c).label)}</button>`).join('')}
        </div>
        <div id="after"></div>
      </div>`;
    app.querySelectorAll('.choice').forEach((b) => b.addEventListener('click', () => pick(b.dataset.level)));
  }

  function pick(levelId) {
    if (answered) return;
    answered = true;
    const r = rounds[round];
    const ok = levelId === r.niveau;
    const buttons = [...app.querySelectorAll('.choice')];
    buttons.forEach((b) => { b.disabled = true; if (b.dataset.level === r.niveau) { b.classList.add('correct'); if (ok) b.classList.add('pop'); } });
    if (!ok) buttons.find((b) => b.dataset.level === levelId).classList.add('wrong', 'shake');
    if (ok) { score++; addXp(10); }
    $('#after').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ko'}">
        <strong>${ok ? 'Bien vu !' : `C’était en ${escapeHtml(r.niveau)}.`}</strong>
        ${r.ex ? `Exemple de réussite : ${escapeHtml(r.ex)}` : ''}
      </div>
      <div class="btn-row"><button class="btn ${ok ? 'success' : ''}" id="next">${round + 1 < rounds.length ? 'Continuer' : 'Voir le résultat'} <kbd>Entrée</kbd></button>
      <a class="btn ghost" href="#/niveaux/${r.niveau}">Voir le niveau ${escapeHtml(r.niveau)}</a></div>`;
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
        <div class="big">${score >= 8 ? '🏆' : score >= 5 ? '🎉' : '🌱'}</div>
        <h2>À quel niveau ? ${score} / ${rounds.length}</h2>
        <p class="muted">Pour progresser, parcours les niveaux et compare ce qui change d’une année à l’autre.</p>
        <span class="pill xp">⭐ +${score * 10} XP</span>
        <div class="btn-row" style="justify-content:center"><a class="btn" href="#/quel-niveau" id="again">Rejouer</a><a class="btn ghost" href="#/niveaux">Voir les niveaux</a></div>
      </div>`;
    $('#again').addEventListener('click', (event) => { event.preventDefault(); renderLevelQuiz(); });
  }

  const onKey = (event) => {
    const r = rounds[round];
    if (!answered && r && /^[1-4]$/.test(event.key)) pick(r.choices[Number(event.key) - 1]);
    else if (answered && event.key === 'Enter' && $('#next')) { event.preventDefault(); next(); }
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => document.removeEventListener('keydown', onKey);
  show();
}

/* ================= Annales ================= */
function renderAnnales() {
  app.innerHTML = `
    <h1>Annales et ressources officielles</h1>
    <p class="muted">Faire des sujets en conditions réelles, puis lire le corrigé et le rapport du jury : c’est la meilleure préparation aux écrits.</p>
    <div class="card" style="overflow-x:auto">
      <h2>Le CRPE externe bac+3 en un coup d’œil</h2>
      <table class="exam-table">
        <thead><tr><th>Épreuve</th><th>Contenu</th><th>Durée</th><th>Coef.</th><th>À savoir</th></tr></thead>
        <tbody>${EXAMS.map((row) => `<tr>${row.map((cell, i) => `<td>${i === 0 ? `<strong>${escapeHtml(cell)}</strong>` : escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
      <p class="muted" style="margin:12px 0 0;font-size:.9rem">Source : devenirenseignant.gouv.fr (consulté en novembre 2026). Vérifie toujours la page officielle avant le concours.</p>
    </div>
    <div class="grid grid-2 section" style="margin-top:16px">
      ${RESOURCES.map((group) => `
        <div class="card">
          <h2>${group.emoji} ${escapeHtml(group.title)}</h2>
          <ul class="res-list">
            ${group.items.map(([label, url, desc]) => `<li><a href="${url}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a><p>${escapeHtml(desc)}</p></li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`;
}

/* ================= Méthode ================= */
function renderMethod() {
  const methods = [
    ['🧠', 'Se tester plutôt que relire', 'Chercher une réponse dans sa mémoire la renforce bien plus qu’une relecture. C’est le principe des quiz et des cartes.'],
    ['📆', 'Espacer les révisions', 'Revoir une notion juste avant de l’oublier, à intervalles croissants (1 jour, 3 jours, 1 semaine…). Les cartes mémoire le font pour toi.'],
    ['🔀', 'Mélanger les matières', 'Alterner les types de questions oblige à identifier la bonne méthode à chaque fois, comme le jour du concours.'],
    ['💬', 'Expliquer avec ses mots', 'Après chaque réponse, lis l’explication et reformule-la. Se demander « pourquoi ? » consolide les liens entre les notions.'],
    ['⏱️', 'Des sessions courtes et régulières', '15 à 20 minutes par jour valent mieux qu’une longue séance par semaine. L’objectif du jour et la série 🔥 sont là pour ça.'],
    ['📝', 'S’entraîner en conditions réelles', 'Une fois les bases en place, faire des sujets complets chronométrés et lire les rapports de jury.'],
  ];
  app.innerHTML = `
    <h1>Comment réviser efficacement</h1>
    <p class="muted">Ce site s’appuie sur les techniques d’apprentissage jugées les plus efficaces par la recherche en psychologie cognitive (synthèse de Dunlosky et al., 2013), et sur les mécaniques des applications d’apprentissage : objectif quotidien, série de jours, niveaux, badges.</p>
    <div class="grid grid-3">
      ${methods.map(([emoji, title, text]) => `<div class="card"><span class="emoji">${emoji}</span><h3>${title}</h3><p class="muted" style="margin:0">${text}</p></div>`).join('')}
    </div>
    <section class="section card">
      <h2>Ma routine conseillée</h2>
      <ol>
        <li><strong>5 min</strong> : les cartes du jour (répétition espacée).</li>
        <li><strong>5 min</strong> : un quiz mélangé, puis relire les explications des erreurs.</li>
        <li><strong>5 min</strong> : une fiche express, puis le quiz de la matière correspondante.</li>
        <li><strong>1 min</strong> : un calcul mental ou un vrai/faux pour finir sur une note ludique.</li>
        <li><strong>Chaque semaine</strong> : un sujet d’annale en temps limité.</li>
      </ol>
      <div class="btn-row">
        <a class="btn" href="#/cartes">Commencer par les cartes</a>
        <button class="btn ghost" id="reset">Réinitialiser ma progression</button>
      </div>
    </section>`;
  let confirmReset = false;
  $('#reset').addEventListener('click', (event) => {
    if (!confirmReset) {
      confirmReset = true;
      event.target.textContent = 'Clique encore pour confirmer';
      event.target.classList.replace('ghost', 'danger');
      return;
    }
    state = defaultState();
    save();
    toast('Progression réinitialisée');
    router();
  });
}

window.addEventListener('hashchange', router);
refreshDay();
router();
