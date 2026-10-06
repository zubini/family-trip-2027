// Sucht zu den ersten vier Bildern jeder Station (Felder «suche» und «stichwort») und zu den Titelbildern
// passende Fotos auf Unsplash und
// schreibt sie fest nach data/bilder-unsplash.js. Die Seite zeigt diese Fotos mit Nennung des Fotografen;
// wo nichts Passendes gefunden wurde, sucht sie wie bisher auf Wikimedia Commons.
//
//   UNSPLASH_ACCESS_KEY=… node tools/bilder-unsplash.js [reise …] [--neu]
//
// Ohne Angabe werden alle Reisen bearbeitet. Bereits gesuchte Bilder werden übersprungen, auch die ohne
// Treffer; --neu sucht die ohne Treffer nochmals. Ein unpassendes Foto in data/bilder-unsplash.js durch
// {"nein": ["<id>"]} ersetzen: dann zeigt die Seite das Commons-Bild, und --neu sucht ein anderes Foto.
// Fotos mit "locker": true nennen nur den Ort der Station, nicht das Motiv: von Hand prüfen. Läuft normalerweise in der GitHub-Action «Unsplash-Bilder»,
// die den Schlüssel als Repository-Secret hat. Der Schlüssel gehört nie ins Repo.
//
// Demo-Schlüssel erlauben 50 Anfragen pro Stunde. Pro Bild braucht es eine Suche und, bei einem Treffer,
// eine Meldung an Unsplash (Pflicht laut API-Richtlinien), also bis 8 Anfragen pro Station. Das Werkzeug hört
// rechtzeitig auf und macht beim nächsten Lauf weiter. Die übrigen Bilder kommen immer von Wikimedia Commons.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const ZIEL = path.join(root, 'data', 'bilder-unsplash.js');
const KEY = process.env.UNSPLASH_ACCESS_KEY;
const UTM = 'utm_source=familienreise_2027&utm_medium=referral';

if (!KEY) { console.error('UNSPLASH_ACCESS_KEY fehlt.'); process.exit(1); }

const args = process.argv.slice(2);
const neu = args.includes('--neu');
global.window = global;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const m of html.matchAll(/<script src="(data\/[^"]+\.js)"><\/script>/g)) {
  if (!/start|quellen|bilder-unsplash/.test(m[1])) require(path.join(root, m[1]));
}
const reisen = args.filter(a => !a.startsWith('--'));
const keys = reisen.length ? reisen : Object.keys(global.REISEN);

// Bisherige Treffer laden (Schlüssel = «suche»; 0 = gesucht, aber nichts Passendes gefunden)
let bisher = {};
if (fs.existsSync(ZIEL)) { global.UNSPLASH = null; require(ZIEL); bisher = global.UNSPLASH || {}; }
const benutzt = new Set(Object.values(bisher).filter(b => b && b.id).map(b => b.id));
Object.values(bisher).forEach(b => { if (b && b.nein) b.nein.forEach(id => benutzt.add(id)); });

// Orte einer Station für lockere Treffer, z.B. «Caminito del Rey (El Chorro)» -> Caminito del Rey, El Chorro
function ortsnamen(s) {
  const teile = s.name.replace(/[()]/g, '|').split(/\||\/| und /).map(t => t.trim()).filter(t => t && !/^(Start|Schluss|Finale)$/.test(t));
  return s.ersatzsuche ? teile.concat(s.ersatzsuche.split('|')) : teile;
}

// Bilder in Reihenfolge der Seite: Titelbild, dann die ersten vier Bilder jeder Galerie
const PRO_STATION = 4;
const auftraege = [];
for (const k of keys) {
  const R = global.REISEN[k];
  if (!R) { console.error('Unbekannte Reise: ' + k); process.exit(1); }
  if (R.titelbild && R.titelbild.suche) auftraege.push({ b: R.titelbild, orte: [] });
  // Bilder mit fester Commons-«datei» sind von Hand ausgewählt und werden nicht auf Unsplash gesucht
  for (const s of R.stationen) s.bilder.slice(0, PRO_STATION).filter(b => b.suche && !b.datei).forEach(b => auftraege.push({ b, orte: ortsnamen(s), titel: b.titel }));
}

const norm = t => String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[_\-]/g, ' ');
function passt(foto, stichwort) {
  const text = norm([foto.alt_description, foto.description, foto.location && foto.location.name,
    foto.location && foto.location.city, ...(foto.tags || []).map(t => t.title)].join(' '));
  return stichwort.split('|').some(w => text.includes(norm(w).trim()));
}

let rest = 50;
async function api(url) {
  const r = await fetch(url, { headers: { Authorization: 'Client-ID ' + KEY, 'Accept-Version': 'v1' } });
  rest = parseInt(r.headers.get('x-ratelimit-remaining') || '0', 10);
  if (!r.ok) throw new Error(r.status + ' ' + url);
  return r.json();
}

function speichern() {
  const zeilen = Object.keys(bisher).sort().map(k => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(bisher[k]));
  fs.writeFileSync(ZIEL, '// Von tools/bilder-unsplash.js erzeugt, nicht von Hand ändern (ausser zum Entfernen eines unpassenden Fotos).\n' +
    '// Schlüssel = «suche» des Bildes; 0 = auf Unsplash nichts Passendes, die Seite sucht dann auf Wikimedia Commons.\n' +
    '// {"nein": [ids]} = abgelehnte Fotos (nicht passend), ebenfalls Commons.\n' +
    'window.UNSPLASH = {\n' + zeilen.join(',\n') + '\n};\n');
}

(async () => {
  let neuGefunden = 0, ohne = 0;
  for (const { b, orte, titel } of auftraege) {
    const alt = bisher[b.suche];
    if (b.suche in bisher && ((alt && alt.url) || !neu)) continue;
    // Zuerst ein Foto, das das Motiv nennt (genau). Sonst eines vom Ort der Station (locker, wird von Hand geprüft).
    // Zweite Suche nur, wenn die erste nichts Genaues bringt.
    const alternativen = b.suche.split('|');
    const suchen = [alternativen[0], alternativen[1] || (titel && orte[0] ? titel + ' ' + orte[0] : null)].filter(Boolean);
    let treffer = null, locker = null;
    for (const q of suchen) {
      if (rest < 4) break;
      const d = await api('https://api.unsplash.com/search/photos?per_page=20&orientation=landscape&content_filter=high&query=' + encodeURIComponent(q));
      const frei = d.results.filter(f => !benutzt.has(f.id) && f.width >= 1600);
      treffer = frei.find(f => passt(f, b.stichwort || q));
      if (treffer) break;
      if (!locker && orte.length) locker = frei.find(f => passt(f, orte.join('|')));
    }
    if (!treffer && locker) { treffer = locker; treffer.locker = true; }
    if (rest < 4 && !treffer) { console.log('Anfragen für diese Stunde aufgebraucht, nächster Lauf macht weiter.'); break; }
    if (treffer) {
      await api(treffer.links.download_location); // Pflichtmeldung an Unsplash, dass das Foto verwendet wird
      benutzt.add(treffer.id);
      bisher[b.suche] = {
        id: treffer.id,
        url: treffer.urls.raw,
        name: treffer.user.name,
        profil: treffer.user.links.html + '?' + UTM,
        seite: treffer.links.html + '?' + UTM,
        farbe: treffer.color
      };
      if (treffer.locker) bisher[b.suche].locker = true;
      if (alt && alt.nein) bisher[b.suche].nein = alt.nein;
      neuGefunden++;
    } else { bisher[b.suche] = alt && alt.nein ? { nein: alt.nein } : 0; ohne++; }
    speichern();
  }
  const offen = auftraege.filter(a => !(a.b.suche in bisher)).length;
  console.log(`Neu gefunden: ${neuGefunden}, ohne passendes Foto: ${ohne}, noch offen: ${offen}`);
})().catch(e => { speichern(); console.error(e.message); process.exit(1); });
