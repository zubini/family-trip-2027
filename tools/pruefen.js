// Prüft die Daten in data/*.js auf Widersprüche. Aufruf: node tools/pruefen.js
// - Seite lässt sich ohne Fehler aufbauen
// - Reiseplan und Stationen haben dieselben Daten und Nächte
// - Nächte im Plan ergeben die Nächte im Budget
// - Die Daten im Plan schliessen lückenlos aneinander an
const path = require('path');
const root = path.join(__dirname, '..');
global.window = global;
for (const f of ['start', 'asien', 'bali', 'usa', 'quellen']) require(path.join(root, 'data', f + '.js'));
const app = require(path.join(root, 'js', 'app.js'));

const fehler = [];
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
}

if (fehler.length) { console.log(fehler.join('\n')); process.exit(1); }
console.log('OK: keine Widersprüche gefunden');
