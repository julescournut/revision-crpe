/* Générateurs de questions aléatoires pour les tests de chapitre.
Chaque générateur renvoie { q, c, a, e } comme une question écrite à la main (a = 0, l'ordre des choix est mélangé à l'affichage).
Les choix sont dédoublonnés : un générateur fournit assez de mauvaises réponses candidates. */

(function registerGenerators() {
  const r = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const round = (n) => Math.round(n * 1e6) / 1e6;
  const fmt = (n) => {
    const [int, dec] = String(round(n)).split('.');
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return dec ? `${grouped},${dec}` : grouped;
  };
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const frac = (p, q) => { const g = gcd(p, q); return [p / g, q / g]; };
  const fracText = ([p, q]) => (q === 1 ? String(p) : `${p}/${q}`);

  /* Assemble une question : la bonne réponse puis les trois premières mauvaises réponses distinctes. */
  function question(q, correct, wrongs, e) {
    const choices = [String(correct)];
    wrongs.map(String).forEach((w) => { if (choices.length < 4 && !choices.includes(w)) choices.push(w); });
    if (choices.length < 4) return null;
    return { q, c: choices, a: 0, e };
  }
  const numeric = (q, value, wrongValues, e, unit = '') => question(
    q,
    fmt(value) + unit,
    wrongValues.filter((w) => w > 0 && round(w) !== round(value) && (String(round(w)).split('.')[1] || '').length < 6).map((w) => fmt(w) + unit),
    e,
  );
  const register = (key, generators) => {
    GENERATORS[key] = generators.map((generator) => () => {
      for (let attempt = 0; attempt < 20; attempt++) {
        const result = generator();
        if (result) return result;
      }
      return null;
    });
  };

  /* ---------- Maths : numération ---------- */
  register('maths/numeration', [
    () => {
      const n = r(10000, 99999);
      const [unit, size] = pick([['dizaines', 10], ['centaines', 100], ['milliers', 1000]]);
      const digit = Math.floor(n / size) % 10;
      return numeric(`Combien y a-t-il de ${unit} dans ${fmt(n)} ?`, Math.floor(n / size),
        [digit, Math.floor(n / (size * 10)), Math.floor(n / (size / 10 || 1)), Math.floor(n / size) + 1],
        `Le nombre de ${unit} s’obtient en ne gardant que les chiffres jusqu’au rang des ${unit} : ${fmt(Math.floor(n / size))}. Le chiffre des ${unit}, lui, est ${digit}.`);
    },
    () => {
      const digits = shuffleDigits();
      const n = Number(digits.slice(0, 5).join(''));
      const [rank, position] = pick([['dizaines', 3], ['centaines', 2], ['milliers', 1], ['dizaines de mille', 0]]);
      const others = digits.slice(0, 5).filter((_, i) => i !== position);
      return question(`Quel est le chiffre des ${rank} dans ${fmt(n)} ?`, digits[position], others,
        `On lit les rangs de droite à gauche : unités, dizaines, centaines, milliers, dizaines de mille. Le chiffre des ${rank} est ${digits[position]}.`);
    },
    () => {
      const thousands = r(2, 8);
      const hundreds = r(11, 19);
      const units = r(1, 9);
      const value = thousands * 1000 + hundreds * 100 + units;
      return numeric(`Quel nombre est égal à ${thousands} milliers, ${hundreds} centaines et ${units} unités ?`, value,
        [Number(`${thousands}${hundreds}0${units}`), Number(`${thousands}${hundreds}${units}`), thousands * 1000 + hundreds * 10 + units, value + 1000],
        `${hundreds} centaines = ${fmt(hundreds * 100)} : on fait une retenue sur les milliers. ${fmt(thousands * 1000)} + ${fmt(hundreds * 100)} + ${units} = ${fmt(value)}.`);
    },
    () => {
      const a = r(1, 4); const b = r(0, 4); const c = r(0, 4);
      const value = a * 25 + b * 5 + c;
      return numeric(`Quel nombre s’écrit « ${a}${b}${c} » en base cinq ?`, value,
        [a * 100 + b * 10 + c, a * 5 + b * 5 + c, a * 15 + b * 5 + c, value + 5],
        `En base cinq, les rangs valent 25, 5 et 1 : ${a} × 25 + ${b} × 5 + ${c} = ${value}.`);
    },
    () => {
      const digits = shuffleDigits().filter((d) => d !== 0);
      const n = Number(`${digits[0]}.${digits[1]}${digits[2]}${digits[3]}`);
      const [rank, index] = pick([['dixièmes', 1], ['centièmes', 2], ['millièmes', 3]]);
      return question(`Quel est le chiffre des ${rank} dans ${fmt(n)} ?`, digits[index], [digits[0], ...digits.slice(1, 4).filter((_, i) => i + 1 !== index)],
        `Après la virgule : dixièmes, centièmes, millièmes. Le chiffre des ${rank} est ${digits[index]}.`);
    },
  ]);

  function shuffleDigits() {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = digits.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [digits[i], digits[j]] = [digits[j], digits[i]]; }
    if (digits[0] === 0) digits.push(digits.shift());
    return digits;
  }

  /* ---------- Maths : arithmétique ---------- */
  const PRIMES = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
  const FAKE_PRIMES = [51, 57, 87, 91, 111, 117, 119, 129, 133, 141, 143, 153, 161, 169, 171, 177, 187, 189, 203, 209, 221];
  register('maths/arithmetique', [
    () => {
      const divisor = pick([3, 4, 5, 6, 9, 25]);
      const n = divisor * r(40, 1100);
      const others = [2, 3, 4, 5, 6, 9, 10, 25].filter((d) => d !== divisor && n % d !== 0);
      const rules = { 3: 'la somme de ses chiffres est un multiple de 3', 4: 'le nombre formé par ses deux derniers chiffres est un multiple de 4', 5: 'il se termine par 0 ou 5', 6: 'il est divisible à la fois par 2 et par 3', 9: 'la somme de ses chiffres est un multiple de 9', 25: 'il se termine par 00, 25, 50 ou 75' };
      return question(`Par lequel de ces nombres ${fmt(n)} est-il divisible ?`, divisor, others.slice(0, 3).length === 3 ? shuffleList(others).slice(0, 3) : [],
        `${fmt(n)} est divisible par ${divisor} car ${rules[divisor]}.`);
    },
    () => {
      const g = pick([4, 6, 8, 9, 12, 14, 15, 18, 21, 24]);
      const x = r(2, 9); const y = r(2, 9);
      if (x === y || gcd(x, y) !== 1) return null;
      const a = g * x; const b = g * y;
      return numeric(`Quel est le PGCD de ${a} et ${b} ?`, g, [g * x * y, g * 2, g / 2, g / 3, Math.abs(a - b), Math.min(a, b)].filter(Number.isInteger),
        `${a} = ${g} × ${x} et ${b} = ${g} × ${y}, avec ${x} et ${y} premiers entre eux : le PGCD est ${g} (le PPCM serait ${g * x * y}).`);
    },
    () => {
      const prime = pick(PRIMES);
      const fakes = shuffleList(FAKE_PRIMES).slice(0, 3);
      const factor = (n) => { for (let d = 2; d * d <= n; d++) if (n % d === 0) return `${n} = ${d} × ${n / d}`; return ''; };
      return question('Lequel de ces nombres est premier ?', prime, fakes,
        `${prime} n’a que deux diviseurs, 1 et lui-même. Les autres se décomposent : ${fakes.map(factor).join(' ; ')}.`);
    },
    () => {
      const b = r(6, 25); const q = r(12, 60); const rest = r(1, b - 1);
      const a = b * q + rest;
      return numeric(`Quel est le reste de la division euclidienne de ${a} par ${b} ?`, rest, [q, b - rest, rest + 1, rest - 1],
        `${a} = ${b} × ${q} + ${rest}, avec ${rest} < ${b} : le quotient est ${q} et le reste ${rest}.`);
    },
  ]);

  function shuffleList(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
    return copy;
  }

  /* ---------- Maths : fractions et décimaux ---------- */
  register('maths/fractions-decimaux', [
    () => {
      const base = r(1, 9); const x = r(3, 8);
      const best = base + x / 10;
      const traps = [base + (x - 1) / 10 + r(11, 99) / 1000, base + (x - 1) / 10 + r(1, 9) / 100, base + x / 100 + r(1, 9) / 1000, base + (x - 1) / 10 + r(101, 999) / 10000];
      return question('Quel est le plus grand nombre ?', fmt(best), traps.map(fmt),
        `On compare chiffre à chiffre en partant des dixièmes : ${fmt(best)} a ${x} dixièmes, les autres moins. Le nombre de chiffres après la virgule ne compte pas.`);
    },
    () => {
      const [p, q] = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 8], [3, 8], [5, 8], [7, 4], [3, 20], [7, 25], [9, 20], [5, 2]]);
      return question(`Quelle est l’écriture décimale de ${p}/${q} ?`, fmt(p / q), [`${p},${q}`, fmt((p / q) * 10), fmt(p / q / 10), fmt(p / q + 1)],
        `${p}/${q} = ${p} ÷ ${q} = ${fmt(p / q)}.`);
    },
    () => {
      const [p, q] = frac(r(1, 7), r(2, 9));
      if (q === 1) return null;
      const k = r(2, 6);
      return question(`Quelle fraction est égale à ${p}/${q} ?`, `${p * k}/${q * k}`, [`${p + k}/${q + k}`, `${p * k}/${q}`, `${p}/${q * k}`, `${q * k}/${p * k}`],
        `On multiplie le numérateur et le dénominateur par le même nombre (${k}) : ${p}/${q} = ${p * k}/${q * k}. Ajouter le même nombre en haut et en bas ne conserve pas la valeur.`);
    },
    () => {
      const b = pick([3, 4, 5, 6, 8]); const d = pick([2, 3, 4, 6, 10].filter((x) => x !== b));
      const a = r(1, b - 1); const c = r(1, d - 1);
      const result = frac(a * d + c * b, b * d);
      const naive = frac(a + c, b + d);
      if (naive[0] * result[1] === result[0] * naive[1]) return null;
      return question(`Combien font ${a}/${b} + ${c}/${d} ?`, fracText(result), [fracText(naive), fracText(frac(a + c, b * d)), fracText(frac(a * c, b * d)), fracText(frac(a * d + c * b + 1, b * d))],
        `On réduit au même dénominateur : ${a}/${b} + ${c}/${d} = ${a * d}/${b * d} + ${c * b}/${b * d} = ${fracText(result)}. On n’additionne jamais les dénominateurs.`);
    },
    () => {
      const n = r(101, 9999) / 100;
      const [op, factor] = pick([['×', 10], ['×', 100], ['×', 1000], ['÷', 10], ['÷', 100]]);
      const value = op === '×' ? n * factor : n / factor;
      const wrongs = [value * 10, value / 10, op === '×' ? n * factor / 100 : n * factor];
      return numeric(`Combien font ${fmt(n)} ${op} ${fmt(factor)} ?`, value, wrongs,
        `${op === '×' ? 'Multiplier' : 'Diviser'} par ${fmt(factor)} décale chaque chiffre de ${String(factor).length - 1} rang${factor > 10 ? 's' : ''} vers la ${op === '×' ? 'gauche' : 'droite'} : on ne « rajoute pas de zéros ».`);
    },
  ]);

  /* ---------- Maths : calcul ---------- */
  register('maths/calcul', [
    () => {
      const a = r(2, 20); const b = r(2, 9); const c = r(2, 9);
      return numeric(`Combien vaut ${a} + ${b} × ${c} ?`, a + b * c, [(a + b) * c, a + b + c, a * b + c],
        `La multiplication est prioritaire : ${b} × ${c} = ${b * c}, puis ${a} + ${b * c} = ${a + b * c}.`);
    },
    () => {
      const a = r(30, 90); const b = r(2, 9); const c = r(2, 9);
      if (a - b * c <= 0) return null;
      return numeric(`Combien vaut ${a} − ${b} × ${c} ?`, a - b * c, [(a - b) * c, a - b - c, a - b + c],
        `On calcule d’abord le produit : ${b} × ${c} = ${b * c}, puis ${a} − ${b * c} = ${a - b * c}.`);
    },
    () => {
      const a = r(12, 89);
      const [m, delta] = pick([[99, -1], [101, 1], [9, -1], [11, 1]]);
      const value = a * m;
      return numeric(`Calcul réfléchi : combien font ${a} × ${m} ?`, value, [value + 10, value - 10, a * (m - delta) - 1, value + a],
        `${a} × ${m} = ${a} × ${m - delta} ${delta < 0 ? '−' : '+'} ${a} = ${fmt(a * (m - delta))} ${delta < 0 ? '−' : '+'} ${a} = ${fmt(value)}.`);
    },
    () => {
      const x = r(2, 9) * 100 - r(1, 4); const y = r(2, 9) * 10 + pick([-1, 1, 2]);
      const estimate = Math.round(x / 100) * 100 * Math.round(y / 10) * 10;
      return numeric(`Quel est l’ordre de grandeur de ${x} × ${y} ?`, estimate, [estimate / 10, estimate * 10, estimate / 2],
        `On arrondit chaque facteur : ${x} ≈ ${Math.round(x / 100) * 100} et ${y} ≈ ${Math.round(y / 10) * 10}, donc environ ${fmt(estimate)}.`);
    },
    () => {
      const a = r(2, 9); const b = r(2, 9); const c = r(2, 5);
      return numeric(`Combien vaut (${a} + ${b}) × ${c} − ${a} ?`, (a + b) * c - a, [a + b * c - a, (a + b) * (c - a), (a + b) * c + a, (a + b) * c, a + b * c],
        `Les parenthèses d’abord : ${a + b} × ${c} = ${(a + b) * c}, puis ${(a + b) * c} − ${a} = ${(a + b) * c - a}.`);
    },
  ]);

  /* ---------- Maths : proportionnalité ---------- */
  register('maths/proportionnalite', [
    () => {
      const p = pick([5, 10, 15, 20, 25, 30, 40, 75]); const n = r(2, 30) * 20;
      return numeric(`Combien vaut ${p} % de ${n} ?`, (p * n) / 100, [p, n / p, (p * n) / 10, n - (p * n) / 100],
        `${p} % de ${n} = ${n} × ${p} / 100 = ${fmt((p * n) / 100)}.`);
    },
    () => {
      const price = r(4, 30) * 10; const p = pick([10, 20, 25, 30, 50]);
      const up = Math.random() < 0.5;
      const value = up ? price * (1 + p / 100) : price * (1 - p / 100);
      return numeric(`Un article coûte ${price} €. Son prix ${up ? 'augmente' : 'baisse'} de ${p} %. Quel est son nouveau prix ?`, value,
        [up ? price + p : price - p, price * p / 100, up ? price * (1 - p / 100) : price * (1 + p / 100)],
        `${up ? 'Augmenter' : 'Baisser'} de ${p} %, c’est multiplier par ${fmt(up ? 1 + p / 100 : 1 - p / 100)} : ${price} × ${fmt(up ? 1 + p / 100 : 1 - p / 100)} = ${fmt(value)} €.`, ' €');
    },
    () => {
      const unit = pick([1.5, 2, 2.5, 3, 4, 0.8, 1.2]); const k = r(3, 8); let m = r(5, 15);
      if (m === k) m++;
      return numeric(`${k} cahiers coûtent ${fmt(unit * k)} €. Combien coûtent ${m} cahiers ?`, unit * m,
        [unit * k + (m - k), unit * m + unit, unit * k * m, unit * (m - 1)],
        `Un cahier coûte ${fmt(unit * k)} ÷ ${k} = ${fmt(unit)} €, donc ${m} cahiers coûtent ${m} × ${fmt(unit)} = ${fmt(unit * m)} €.`, ' €');
    },
    () => {
      const v = pick([45, 60, 72, 80, 90, 120]); const t = pick([10, 15, 20, 30, 40, 45, 50, 90]);
      const d = (v * t) / 60;
      if (!Number.isInteger(d)) return null;
      return numeric(`Une voiture roule à ${v} km/h pendant ${t} min. Quelle distance parcourt-elle ?`, d,
        [(v * t) / 100, v * (t / 100) * 10, d * 2, v - t],
        `${t} min = ${fmt(t / 60)} h (et non ${fmt(t / 100)} h). Distance = ${v} × ${t} / 60 = ${fmt(d)} km.`, ' km');
    },
    () => {
      const scale = pick([10000, 20000, 25000, 50000, 100000]); const cm = r(2, 9);
      const meters = (cm * scale) / 100;
      return numeric(`Sur une carte à l’échelle 1/${fmt(scale)}, deux villages sont à ${cm} cm l’un de l’autre. Quelle est la distance réelle ?`, meters,
        [meters / 10, meters * 10, cm * scale],
        `${cm} cm sur la carte représentent ${cm} × ${fmt(scale)} = ${fmt(cm * scale)} cm en réalité, soit ${fmt(meters)} m.`, ' m');
    },
  ]);

  /* ---------- Maths : géométrie ---------- */
  register('maths/geometrie', [
    () => {
      const a = r(25, 80); const b = r(25, 80);
      if (a + b >= 170) return null;
      const c = 180 - a - b;
      return numeric(`Dans un triangle, deux angles mesurent ${a}° et ${b}°. Combien mesure le troisième ?`, c, [360 - a - b, 90 - (a + b) / 2, c + 10, c - 10],
        `La somme des angles d’un triangle vaut 180° : 180 − ${a} − ${b} = ${c}°.`, '°');
    },
    () => {
      const [n, name] = pick([[5, 'pentagone'], [6, 'hexagone'], [8, 'octogone'], [10, 'décagone']]);
      return numeric(`Quelle est la somme des angles d’un ${name} ?`, (n - 2) * 180, [n * 180, 360, (n - 1) * 180, n * 90],
        `Un polygone à ${n} côtés se découpe en ${n - 2} triangles depuis un sommet : (${n} − 2) × 180 = ${(n - 2) * 180}°.`, '°');
    },
    () => {
      const [n, name] = pick([[3, 'triangle équilatéral'], [4, 'carré'], [5, 'pentagone régulier'], [6, 'hexagone régulier']]);
      return numeric(`Combien d’axes de symétrie possède un ${name} ?`, n, [n * 2, n - 1, n + 1, 1],
        `Un polygone régulier à ${n} côtés possède ${n} axes de symétrie.`);
    },
    () => {
      const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10]]); const k = pick([1, 2, 3]);
      return numeric(`Un triangle rectangle a des côtés de l’angle droit de ${a * k} cm et ${b * k} cm. Combien mesure son hypoténuse ?`, c * k,
        [(a + b) * k, (b + 1) * k, (a * b * k) / 2, (c + 1) * k],
        `Théorème de Pythagore : ${a * k}² + ${b * k}² = ${a * a * k * k} + ${b * b * k * k} = ${c * c * k * k} = ${c * k}².`, ' cm');
    },
  ]);

  /* ---------- Maths : grandeurs et mesures ---------- */
  const LENGTHS = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  register('maths/grandeurs-mesures', [
    () => {
      const from = r(0, 5); const to = Math.min(6, from + r(1, 3));
      const up = Math.random() < 0.5;
      const [i, j] = up ? [from, to] : [to, from];
      const n = r(12, 950) / 10;
      const value = n * 10 ** (j - i);
      return numeric(`Combien font ${fmt(n)} ${LENGTHS[i]} en ${LENGTHS[j]} ?`, value, [value * 10, value / 10, n * 10 ** (i - j)],
        `On passe de ${LENGTHS[i]} à ${LENGTHS[j]} en ${Math.abs(j - i)} rang${Math.abs(j - i) > 1 ? 's' : ''} du tableau de conversion : on ${j > i ? 'multiplie' : 'divise'} par ${fmt(10 ** Math.abs(j - i))}.`, ` ${LENGTHS[j]}`);
    },
    () => {
      const n = r(2, 95) / 10;
      const [from, to, factor] = pick([['m²', 'cm²', 10000], ['m²', 'dm²', 100], ['dm²', 'cm²', 100], ['km²', 'ha', 100], ['ha', 'm²', 10000]]);
      return numeric(`Combien font ${fmt(n)} ${from} en ${to} ?`, n * factor, [n * Math.sqrt(factor), n * factor * 10, n * factor / 10],
        `Pour les aires, chaque unité vaut 100 fois la suivante : 1 ${from} = ${fmt(factor)} ${to}.`, ` ${to}`);
    },
    () => {
      const n = r(2, 95) / 10;
      const [from, to, factor] = pick([['L', 'cL', 100], ['L', 'mL', 1000], ['dm³', 'L', 1], ['m³', 'L', 1000], ['cm³', 'mL', 1]]);
      const wrongs = factor === 1 ? [n * 1000, n / 1000, n * 10] : [n * factor / 10, n * factor * 10, n * factor * 1000];
      return numeric(`Combien font ${fmt(n)} ${from} en ${to} ?`, n * factor, wrongs,
        `À retenir : 1 dm³ = 1 L, 1 cm³ = 1 mL, 1 m³ = 1 000 L, 1 L = 100 cL = 1 000 mL. Donc ${fmt(n)} ${from} = ${fmt(n * factor)} ${to}.`, ` ${to}`);
    },
    () => {
      const h = r(1, 4); const quarter = pick([0.25, 0.5, 0.75, 0.1, 0.2]);
      const minutes = Math.round(quarter * 60);
      const label = (hh, mm) => `${hh} h ${String(mm).padStart(2, '0')} min`;
      return question(`Combien font ${fmt(h + quarter)} h en heures et minutes ?`, label(h, minutes),
        [label(h, Math.round(quarter * 100)), label(h, Math.round(quarter * 10)), label(h, minutes + 10)].filter((w) => w !== label(h, minutes)),
        `La partie décimale est une fraction d’heure : ${fmt(quarter)} h = ${fmt(quarter)} × 60 = ${minutes} min.`);
    },
    () => {
      const L = r(4, 15); const l = r(2, L - 1);
      const area = Math.random() < 0.5;
      return area
        ? numeric(`Quelle est l’aire d’un rectangle de ${L} cm sur ${l} cm ?`, L * l, [2 * (L + l), L + l, L * l * 2], `Aire = longueur × largeur = ${L} × ${l} = ${L * l} cm².`, ' cm²')
        : numeric(`Quel est le périmètre d’un rectangle de ${L} cm sur ${l} cm ?`, 2 * (L + l), [L * l, L + l, 2 * L + l], `Périmètre = 2 × (longueur + largeur) = 2 × ${L + l} = ${2 * (L + l)} cm.`, ' cm');
    },
  ]);

  /* ---------- Maths : données et probabilités ---------- */
  register('maths/donnees-probabilites', [
    () => {
      const values = Array.from({ length: 5 }, () => r(4, 20));
      const sum = values.reduce((a, b) => a + b, 0);
      const fix = (5 - (sum % 5)) % 5;
      values[4] += fix;
      const total = sum + fix;
      const sorted = [...values].sort((a, b) => a - b);
      return numeric(`Quelle est la moyenne de la série ${values.join(' ; ')} ?`, total / 5, [sorted[2], total / 4, total / 5 + 1, total],
        `Moyenne = somme ÷ effectif = ${total} ÷ 5 = ${fmt(total / 5)}.`);
    },
    () => {
      const size = pick([5, 7]);
      const values = Array.from({ length: size }, () => r(1, 30));
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[(size - 1) / 2];
      const mean = values.reduce((a, b) => a + b, 0) / size;
      return numeric(`Quelle est la médiane de la série ${values.join(' ; ')} ?`, median, [values[(size - 1) / 2], Math.round(mean), sorted[(size - 1) / 2 + 1], sorted[(size - 1) / 2 - 1]],
        `On range d’abord la série : ${sorted.join(' ; ')}. La valeur du milieu (la ${(size + 1) / 2}e) est ${median}.`);
    },
    () => {
      const red = r(2, 8); const blue = r(2, 8); const green = r(1, 6);
      const total = red + blue + green;
      const answer = frac(red, total);
      const options = [frac(red, blue + green), frac(1, 3), frac(red + 1, total), frac(blue, total), frac(green, total)]
        .filter((f) => f[0] * answer[1] !== answer[0] * f[1]).map(fracText);
      return question(`Une urne contient ${red} boules rouges, ${blue} bleues et ${green} vertes. On tire une boule au hasard. Quelle est la probabilité qu’elle soit rouge ?`, fracText(answer), options,
        `Probabilité = issues favorables ÷ issues possibles = ${red}/${total}${answer[1] !== total ? ` = ${fracText(answer)}` : ''}.`);
    },
    () => {
      const [event, favorable] = pick([['un nombre pair', 3], ['un multiple de 3', 2], ['un nombre premier', 3], ['un nombre supérieur à 4', 2], ['un 6', 1], ['un diviseur de 6', 4]]);
      const answer = frac(favorable, 6);
      const options = [frac(1, 6), frac(1, 2), frac(1, 3), frac(2, 3), frac(favorable, 5)].filter((f) => f[0] * answer[1] !== answer[0] * f[1]).map(fracText);
      return question(`On lance un dé équilibré à six faces. Quelle est la probabilité d’obtenir ${event} ?`, fracText(answer), options,
        `${favorable} issue${favorable > 1 ? 's' : ''} favorable${favorable > 1 ? 's' : ''} sur 6 : ${favorable}/6${answer[1] !== 6 ? ` = ${fracText(answer)}` : ''}.`);
    },
    () => {
      const values = Array.from({ length: 6 }, () => r(3, 45));
      const max = Math.max(...values); const min = Math.min(...values);
      if (max === min) return null;
      return numeric(`Quelle est l’étendue de la série ${values.join(' ; ')} ?`, max - min, [max, max + min, values[values.length - 1] - values[0]],
        `Étendue = plus grande valeur − plus petite valeur = ${max} − ${min} = ${max - min}.`);
    },
  ]);

  /* ---------- Français : conjugaison ---------- */
  const VERBS = ['chanter', 'parler', 'danser', 'marcher', 'regarder', 'donner', 'porter', 'sauter', 'gagner', 'jouer'];
  const PERSONS = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  const AVOIR = { present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], futur: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'], conditionnel: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'] };
  const TENSES = {
    'présent de l’indicatif': { form: (radical, p) => radical + ['e', 'es', 'e', 'ons', 'ez', 'ent'][p], rule: 'Radical + -e, -es, -e, -ons, -ez, -ent (1er groupe).', near: ['présent du subjonctif', 'imparfait de l’indicatif', 'passé simple de l’indicatif'] },
    'imparfait de l’indicatif': { form: (radical, p) => radical + ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'][p], rule: 'Radical + -ais, -ais, -ait, -ions, -iez, -aient.', near: ['conditionnel présent', 'passé simple de l’indicatif', 'présent du subjonctif'] },
    'futur simple de l’indicatif': { form: (radical, p) => `${radical}er${['ai', 'as', 'a', 'ons', 'ez', 'ont'][p]}`, rule: 'Infinitif + -ai, -as, -a, -ons, -ez, -ont (je chanterai).', near: ['conditionnel présent', 'passé simple de l’indicatif', 'présent de l’indicatif'] },
    'passé simple de l’indicatif': { form: (radical, p) => radical + ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'][p], rule: 'Radical + -ai, -as, -a, -âmes, -âtes, -èrent (1er groupe). Ne pas confondre « je chantai » et « je chanterai ».', near: ['futur simple de l’indicatif', 'imparfait de l’indicatif', 'présent de l’indicatif'] },
    'conditionnel présent': { form: (radical, p) => `${radical}er${['ais', 'ais', 'ait', 'ions', 'iez', 'aient'][p]}`, rule: 'Radical du futur (infinitif) + terminaisons de l’imparfait : je chanterais.', near: ['futur simple de l’indicatif', 'imparfait de l’indicatif', 'présent du subjonctif'] },
    'présent du subjonctif': { form: (radical, p) => radical + ['e', 'es', 'e', 'ions', 'iez', 'ent'][p], que: true, rule: 'Que + radical + -e, -es, -e, -ions, -iez, -ent.', near: ['présent de l’indicatif', 'imparfait de l’indicatif', 'conditionnel présent'] },
    'passé composé de l’indicatif': { aux: 'present', rule: 'Auxiliaire au présent + participe passé (j’ai chanté).', near: ['plus-que-parfait de l’indicatif', 'passé simple de l’indicatif', 'futur antérieur de l’indicatif'] },
    'plus-que-parfait de l’indicatif': { aux: 'imparfait', rule: 'Auxiliaire à l’imparfait + participe passé (j’avais chanté).', near: ['passé composé de l’indicatif', 'imparfait de l’indicatif', 'conditionnel passé'] },
    'futur antérieur de l’indicatif': { aux: 'futur', rule: 'Auxiliaire au futur simple + participe passé (j’aurai chanté).', near: ['futur simple de l’indicatif', 'conditionnel passé', 'passé composé de l’indicatif'] },
    'conditionnel passé': { aux: 'conditionnel', rule: 'Auxiliaire au conditionnel présent + participe passé (j’aurais chanté).', near: ['futur antérieur de l’indicatif', 'plus-que-parfait de l’indicatif', 'conditionnel présent'] },
  };
  const GROUPS = [
    ['finir', '2e', 'participe présent en -issant (finissant) : 2e groupe.'], ['grandir', '2e', 'grandissant : 2e groupe.'], ['choisir', '2e', 'choisissant : 2e groupe.'], ['réussir', '2e', 'réussissant : 2e groupe.'],
    ['partir', '3e', 'partant (et non « partissant ») : 3e groupe malgré l’infinitif en -ir.'], ['courir', '3e', 'courant : 3e groupe.'], ['ouvrir', '3e', 'ouvrant : 3e groupe, même s’il se conjugue au présent comme un verbe en -er.'], ['venir', '3e', 'venant : 3e groupe.'], ['dormir', '3e', 'dormant : 3e groupe.'],
    ['aller', '3e', 'seul verbe en -er du 3e groupe (je vais, j’irai).'], ['prendre', '3e', 'tous les verbes en -re sont du 3e groupe.'], ['voir', '3e', 'tous les verbes en -oir sont du 3e groupe.'],
    ['manger', '1er', 'infinitif en -er (sauf aller) : 1er groupe.'], ['envoyer', '1er', 'infinitif en -er : 1er groupe, malgré son futur irrégulier (j’enverrai).'], ['appeler', '1er', 'infinitif en -er : 1er groupe.'],
  ];
  register('francais/conjugaison', [
    () => {
      const verb = pick(VERBS); const radical = verb.slice(0, -2);
      const name = pick(Object.keys(TENSES)); const tense = TENSES[name];
      const p = r(0, 5);
      const verbForm = tense.aux ? `${AVOIR[tense.aux][p]} ${radical}é` : tense.form(radical, p);
      const startsWithVowel = /^[aeiouéâ]/.test(verbForm);
      let subject = PERSONS[p];
      if (p === 0 && startsWithVowel) subject = 'j’';
      const text = `${tense.que ? (p === 2 || p === 5 ? 'qu’' : 'que ') : ''}${subject}${subject.endsWith('’') ? '' : ' '}${verbForm}`;
      return question(`« ${text} » : à quel temps le verbe ${verb} est-il conjugué ?`, name, tense.near,
        `${name.charAt(0).toUpperCase() + name.slice(1)} : ${tense.rule.charAt(0).toLowerCase() + tense.rule.slice(1)}`);
    },
    () => {
      const [verb, group, why] = pick(GROUPS);
      return question(`À quel groupe appartient le verbe « ${verb} » ?`, `${group} groupe`, ['1er groupe', '2e groupe', '3e groupe', 'Aucun groupe (auxiliaire)'].filter((g) => g !== `${group} groupe`),
        `${verb} : ${why}`);
    },
  ]);
})();
