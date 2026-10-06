// Prüft die Daten in data/*.js auf Widersprüche. Aufruf: node tools/pruefen.js
// - Seite lässt sich ohne Fehler aufbauen
// - Reiseplan und Stationen haben dieselben Daten und Nächte
// - Nächte im Plan ergeben die Nächte im Budget
// - Die Daten im Plan schliessen lückenlos aneinander an
// - Jede Station hat genau 6 Bilder
// - Budget: Posten ergeben ungefähr das Total, Stationskosten decken alle Nächte ab
// - Karten: Daten in den Tooltips der Stationen stimmen mit den Stationen überein
// - Karten: karten/*.svg sind aktuell (sonst: node tools/karte.js)
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
global.window = global;
// Datendateien in der Reihenfolge, wie index.html sie lädt
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const dateien = [...index.matchAll(/<script src="(data\/[^"]+\.js)"/g)].map(m => m[1]);
for (const f of dateien) require(path.join(root, f));
const app = require(path.join(root, 'js', 'app.js'));
const fehlerUnsplash = Object.entries(global.UNSPLASH || {}).filter(([k, f]) => f && !(f.url && f.name && f.profil)).map(([k]) => k);

const fehler = [];
fehlerUnsplash.forEach(k => fehler.push(`data/bilder-unsplash.js: Eintrag «${k}» ohne Bildadresse oder Fotograf`));
try { app.seite(START, REISEN, QUELLEN); } catch (e) { fehler.push('Seite lässt sich nicht aufbauen: ' + e.message); }

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
// "29. Juni–1. Juli" -> [Startdatum, Enddatum]
function spanne(t) {
  const m = t.match(/^(\d+)\.(?: (\S+))?–(\d+)\. (\S+)$/);
  if (!m) return null;
  const d = (tag, mon) => new Date(2027, MONATE.indexOf(mon), +tag);
  return [d(m[1], m[2] || m[4]), d(m[3], m[4])];
}
const tage = (a, b) => Math.round((b - a) / 864e5);

for (const [k, R] of Object.entries(REISEN)) {
  let summe = 0, ende = null;
  for (const z of R.plan) {
    const s = spanne(z.datum);
    if (!s) { fehler.push(`${k}: Datum im Plan nicht lesbar: "${z.datum}"`); continue; }
    if (tage(s[0], s[1]) !== z.naechte) fehler.push(`${k}: "${z.name}" ${z.datum} sind ${tage(s[0], s[1])} Nächte, im Plan stehen ${z.naechte}`);
    if (ende && tage(ende, s[0]) !== 0) fehler.push(`${k}: Lücke oder Überschneidung vor "${z.name}" (${z.datum})`);
    ende = s[1];
    summe += z.naechte;
    const nr = (z.name.match(/^(\d+)\./) || [])[1];
    if (nr) {
      const st = R.stationen.find(x => x.nr === +nr);
      if (!st) { fehler.push(`${k}: Station ${nr} fehlt`); continue; }
      if (st.datum !== z.datum) fehler.push(`${k}: Station ${nr} hat Datum "${st.datum}", Plan "${z.datum}"`);
      if (parseInt(st.naechte, 10) !== z.naechte) fehler.push(`${k}: Station ${nr} hat "${st.naechte}", Plan ${z.naechte} Nächte`);
    }
  }
  if (summe !== R.budget.naechte) fehler.push(`${k}: Plan ergibt ${summe} Nächte, Budget rechnet mit ${R.budget.naechte}`);
  R.stationen.forEach((s, i) => { if (s.nr !== i + 1) fehler.push(`${k}: Station an Position ${i + 1} hat Nummer ${s.nr}`); });
  R.stationen.forEach(s => { if (s.bilder.length !== 6) fehler.push(`${k}: Station ${s.nr} hat ${s.bilder.length} statt 6 Bilder`); });

  // Budget: Summe der Planwerte ≈ Total (Total ist gerundet, 1 % Toleranz)
  const zahl = x => parseInt(String(x).replace(/\D/g, ''), 10);
  const b = R.budget, posten = b.posten.filter(p => !/Total/.test(p[0]));
  const summePlan = posten.reduce((a, p) => a + zahl(p[2]), 0);
  if (Math.abs(summePlan - zahl(b.total)) > zahl(b.total) * 0.01)
    fehler.push(`${k}: Budget-Posten ergeben ${summePlan} CHF, Total ist ${b.total}`);
  const [lo, hi] = b.spanne.split('–').map(zahl);
  const sLo = posten.reduce((a, p) => a + zahl(p[1].split('–')[0]), 0), sHi = posten.reduce((a, p) => a + zahl(p[1].split('–')[1]), 0);
  if (Math.abs(sLo - lo) > lo * 0.01 || Math.abs(sHi - hi) > hi * 0.01)
    fehler.push(`${k}: Budget-Spannen ergeben ${sLo}–${sHi} CHF, angegeben ist ${b.spanne}`);
  const proTag = (b.proTag.match(/ca\. ([\d’]+) CHF pro Tag/) || [])[1];
  if (proTag && Math.abs(zahl(proTag) - zahl(b.total) / b.naechte) > 15)
    fehler.push(`${k}: «${proTag} CHF pro Tag» passt nicht zu ${b.total} CHF / ${b.naechte} Nächte`);
  const stNaechte = b.stationen.reduce((a, s) => a + zahl((s[0].match(/\((\d+)\)\s*$/) || [0, 0])[1]), 0);
  if (stNaechte !== b.naechte) fehler.push(`${k}: Stationskosten im Budget decken ${stNaechte} Nächte ab, nicht ${b.naechte}`);

  // Karten: Tooltips wie «3. Kuala Lumpur: Sa, 26.06.2027 – Di, 29.06.2027, 3 Nächte»
  for (const kt of R.karte.karten) {
    const svg = fs.readFileSync(path.join(root, kt.datei), 'utf8');
    for (const m of svg.matchAll(/<title>(\d+)\. ([^:<]+): ([^<]+), (\d+) (?:Nächte|Nacht)<\/title>/g)) {
      const st = R.stationen.find(x => x.nr === +m[1]);
      if (!st) { fehler.push(`${kt.datei}: Station ${m[1]} gibt es nicht`); continue; }
      if (m[3] !== app.datum(st.datum) || +m[4] !== parseInt(st.naechte, 10))
        fehler.push(`${kt.datei}: Tooltip Station ${m[1]} «${m[3]}, ${m[4]} Nächte» passt nicht zu ${st.datum}, ${st.naechte}`);
    }
  }
}

// Karten: aus den Beschreibungen in tools/karten/ neu zeichnen und mit den Dateien vergleichen
const karte = require(path.join(__dirname, 'karte.js'));
for (const name of karte.alleNamen()) {
  try {
    const datei = path.join(root, 'karten', name + '.svg');
    if (!fs.existsSync(datei) || fs.readFileSync(datei, 'utf8') !== karte.zeichne(karte.ladeDefinition(name)))
      fehler.push(`karten/${name}.svg ist veraltet: node tools/karte.js ${name}`);
  } catch (e) { fehler.push(`tools/karten/${name}.js: ${e.message}`); }
}
for (const [k, R] of Object.entries(REISEN)) for (const kt of R.karte.karten)
  if (!fs.existsSync(path.join(root, kt.datei))) fehler.push(`${k}: Karte ${kt.datei} fehlt`);

if (fehler.length) { console.log(fehler.join('\n')); process.exit(1); }
console.log('OK: keine Widersprüche gefunden');
