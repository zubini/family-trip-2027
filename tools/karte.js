// Zeichnet die Routenkarten (karten/*.svg) aus den Kartenbeschreibungen in tools/karten/*.js.
//
//   node tools/karte.js            alle Karten neu zeichnen
//   node tools/karte.js japan      nur tools/karten/japan.js -> karten/japan.svg
//
// Namen und Daten der Stationen kommen aus data/<reise>.js, Küstenlinien aus tools/geo/.
// Aufbau einer Kartenbeschreibung: siehe README, Abschnitt «Karten», und die Beispiele in tools/karten/
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const DEF_DIR = path.join(__dirname, 'karten');
const GEO = path.join(__dirname, 'geo', 'laender.geo.json');

const STIL = {
  bus: ['#1F9A8F', 3.2, ''], car: ['#1F9A8F', 3.2, ''], train: ['#0F4C55', 3.6, ''],
  ferry: ['#E08A12', 3, '7 6'], air: ['#7A5CC7', 2.6, '2 7']
};
const NAME = { bus: 'Bus, Minivan oder Taxi', car: 'Mietwagen', train: 'Zug', ferry: 'Fähre oder Boot', air: 'Flug' };
const STYLE = `<style>
@import url("https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,600;0,700;0,800;1,400&amp;display=swap");
.lr{fill:#F4F1E4;stroke:#B9B39A;stroke-width:.8}
.lo{fill:#ECECE6;stroke:#C9C9BF;stroke-width:.8}
.cn{font:600 15px "Figtree",system-ui,sans-serif;fill:#9A9580;letter-spacing:.05em}
.sea{font:italic 14px "Figtree",system-ui,sans-serif;fill:#6E98A6}
.sl{font:700 13px "Figtree",system-ui,sans-serif;fill:#1C2B2D;paint-order:stroke;stroke:#fff;stroke-width:3.5px;stroke-linejoin:round}
.tl{font:600 11.5px "Figtree",system-ui,sans-serif;fill:#5B6B6E;paint-order:stroke;stroke:#fff;stroke-width:3px}
.nm{font:800 12px "Figtree",system-ui,sans-serif;fill:#fff}
.nm2{font:800 10px "Figtree",system-ui,sans-serif;fill:#fff}
.fl{font:600 12px "Figtree",system-ui,sans-serif;fill:#5B6B6E;paint-order:stroke;stroke:#fff;stroke-width:3px}
</style>`;

const f1 = n => n.toFixed(1);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Projektion: 'eq' (Länge/Breite gestreckt, für kleine Gebiete; mit «parallel» = mittlerer Breitengrad
// wird die Verzerrung abseits des Äquators ausgeglichen) oder 'albers' (USA)
function projektion(def) {
  let roh;
  if (def.projektion === 'albers') {
    const r = Math.PI / 180, p1 = 29.5 * r, p2 = 45.5 * r, pl0 = 37.5 * r, l0 = -96 * r;
    const n = (Math.sin(p1) + Math.sin(p2)) / 2, C = Math.cos(p1) ** 2 + 2 * n * Math.sin(p1);
    const r0 = Math.sqrt(C - 2 * n * Math.sin(pl0)) / n;
    roh = (lat, lon) => {
      const rho = Math.sqrt(C - 2 * n * Math.sin(lat * r)) / n, th = n * (lon * r - l0);
      return [rho * Math.sin(th), -(r0 - rho * Math.cos(th))];
    };
  } else {
    const k = Math.cos((def.parallel || 0) * Math.PI / 180);
    roh = (lat, lon) => [lon * k, -lat];
  }
  const [lon0, lon1] = def.laenge, [lat0, lat1] = def.breitengrad;
  const xs = [], ys = [];
  for (let i = 0; i <= 20; i++) for (let j = 0; j <= 20; j++) {
    const [x, y] = roh(lat0 + (lat1 - lat0) * i / 20, lon0 + (lon1 - lon0) * j / 20);
    xs.push(x); ys.push(y);
  }
  const mnx = Math.min(...xs), mny = Math.min(...ys);
  const S = def.breite / (Math.max(...xs) - mnx);
  const H = (Math.max(...ys) - mny) * S;
  return { W: Math.round(def.breite), H: Math.round(H), p: (lat, lon) => { const [x, y] = roh(lat, lon); return [(x - mnx) * S, (y - mny) * S]; } };
}

// Liegt der Punkt (px, py) im Polygon? (Strahlverfahren)
function imRing(ring, px, py) {
  let drin = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > py) !== (yj > py) && px < (xj - xi) * (py - yi) / (yj - yi) + xi) drin = !drin;
  }
  return drin;
}

function ladeReise(name) {
  global.window = global;
  require(path.join(root, 'data', name + '.js'));
  return global.REISEN[name];
}

function kurzname(n) { return n.split(' / ')[0].replace(/\s*\(.*\)/g, ''); }

function zeichne(def) {
  const app = require(path.join(root, 'js', 'app.js'));
  const reise = def.reise ? ladeReise(def.reise) : null;
  const { W, H, p } = projektion(def);
  const ort = o => typeof o === 'string' ? (def.orte[o] || (() => { throw new Error('Unbekannter Ort: ' + o); })()) : o;
  const pt = o => p(...ort(o));
  const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
  const out = [`<svg viewBox="0 0 ${W} ${H}" overflow="hidden" role="img" aria-labelledby="mt" xmlns="http://www.w3.org/2000/svg"><title id="mt">${esc(def.titel)}</title>`];
  out.push(STYLE.trim());
  out.push(`<rect width="${W}" height="${H}" fill="#D7E9EE"/>`);

  // Land: hervorgehobene Länder hell, Rest grau
  const hervor = def.laender || [];
  for (const f of geo.features) {
    const g = f.geometry;
    const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
    for (const poly of polys) {
      const ring = poly[0].map(([x, y]) => p(y, x));
      // Zeichnen, wenn ein Punkt im Ausschnitt liegt oder der Ausschnitt ganz im Land liegt (z.B. Detailkarte mitten in den USA)
      const innen = ring.some(([x, y]) => x >= -60 && x <= W + 60 && y >= -60 && y <= H + 60);
      if (!innen && !imRing(ring, W / 2, H / 2)) continue;
      const d = poly.map(r => 'M' + r.map(([x, y]) => p(y, x).map(v => Math.round(v)).join(',')).join(' L') + 'Z').join('');
      out.push(`<path class="${hervor.includes(f.properties.A3) ? 'lr' : 'lo'}" fill-rule="evenodd" d="${d}"/>`);
    }
  }
  // Beschriftungen von Ländern (cn) und Meeren (sea): [Text, Breite, Länge, Klasse, Drehung]
  for (const [t, lat, lon, cls, rot] of def.beschriftungen || []) {
    const [x, y] = p(lat, lon);
    out.push(`<text class="${cls}" x="${f1(x)}" y="${f1(y)}" text-anchor="middle"${rot ? ` transform="rotate(${rot} ${f1(x)} ${f1(y)})"` : ''}>${esc(t)}</text>`);
  }
  // Wege: [Verkehrsmittel, Bezeichnung, [Orte oder Koordinaten]]
  for (const [m, t, punkte] of def.wege) {
    if (!STIL[m]) throw new Error('Unbekanntes Verkehrsmittel: ' + m);
    const [col, w, da] = STIL[m];
    const pts = punkte.map(o => pt(o).map(f1).join(',')).join(' ');
    out.push(`<polyline points="${pts}" fill="none" stroke="#fff" stroke-width="${f1(w + 3)}" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>`);
    out.push(`<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="${f1(w)}" stroke-linecap="round" stroke-linejoin="round"${da ? ` stroke-dasharray="${da}"` : ''}><title>${NAME[m]}: ${esc(t)}</title></polyline>`);
  }
  // Zwischenübernachtungen: [Name, Ort, Abstand Beschriftung nach unten]
  for (const [name, o, dy] of def.zwischenstopps || []) {
    const [x, y] = pt(o);
    out.push(`<g><title>Zwischenübernachtung ${esc(name)}</title><circle cx="${f1(x)}" cy="${f1(y)}" r="6" fill="#fff" stroke="#718096" stroke-width="2.5"/></g>`);
    out.push(`<text class="tl" x="${f1(x + 10)}" y="${f1(y + 4 + (dy || 0))}">${esc(name)}</text>`);
  }
  // Umstiege: [Name, Ort, Seite 'l' oder 'r']
  for (const [name, o, al] of def.umstiege || []) {
    const [x, y] = pt(o);
    out.push(`<g><title>Umstieg: ${esc(name)}</title><circle cx="${f1(x)}" cy="${f1(y)}" r="4.5" fill="#fff" stroke="#718096" stroke-width="2"/></g>`);
    out.push(`<text class="tl" x="${f1(x + (al === 'r' ? 9 : -9))}" y="${f1(y + 4)}" text-anchor="${al === 'r' ? 'start' : 'end'}">${esc(name)}</text>`);
  }
  // Stationen: [Nummer, Ort, Seite der Beschriftung l/r/u/d, eigener Name (optional)]
  for (const [nr, o, al, eigenerName] of def.stationen) {
    const [x, y] = pt(o);
    const st = reise && /^\d+$/.test(String(nr)) ? reise.stationen.find(s => s.nr === +nr) : null;
    if (reise && /^\d+$/.test(String(nr)) && !st) throw new Error(`Station ${nr} fehlt in data/${def.reise}.js`);
    const name = eigenerName || (st ? kurzname(st.name) : '');
    const wann = st ? `${app.datum(st.datum)}, ${parseInt(st.naechte, 10)} ${parseInt(st.naechte, 10) === 1 ? 'Nacht' : 'Nächte'}` : '';
    const n = String(nr);
    if (def.klein) {
      out.push(`<g><title>${n}. ${esc(name)}: ${wann}</title><circle cx="${f1(x)}" cy="${f1(y)}" r="5.5" fill="#0F4C55" stroke="#fff" stroke-width="2"/></g>`);
      continue;
    }
    const R = n.length <= 2 ? 12 : 19;
    out.push(`<g><title>${n}. ${esc(name)}: ${wann}</title><circle cx="${f1(x)}" cy="${f1(y)}" r="${R}" fill="#0F4C55" stroke="#fff" stroke-width="2.5"/>` +
      `<text class="${n.length <= 2 ? 'nm' : 'nm2'}" x="${f1(x)}" y="${f1(y + (n.length <= 2 ? 4.2 : 3.6))}" text-anchor="middle">${n}</text></g>`);
    const tx = al === 'r' ? x + R + 5 : al === 'l' ? x - R - 5 : x;
    const ty = al === 'r' || al === 'l' ? y + 5 : al === 'u' ? y - R - 6 : y + R + 15;
    out.push(`<text class="sl" x="${f1(tx)}" y="${f1(ty)}" text-anchor="${al === 'r' ? 'start' : al === 'l' ? 'end' : 'middle'}">${esc(name)}</text>`);
  }
  // Freie Hinweise, z.B. Ankunft und Rückflug: [Text, Ort, Ausrichtung start/middle/end, dx, dy]
  for (const [t, o, anc, dx, dy] of def.hinweise || []) {
    const [x, y] = pt(o);
    out.push(`<text class="fl" x="${f1(x + (dx || 0))}" y="${f1(y + (dy || 0))}" text-anchor="${anc || 'middle'}">${esc(t)}</text>`);
  }
  out.push('</svg>');
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + out.join('\n') + '\n';
}

function alleNamen() {
  return fs.readdirSync(DEF_DIR).filter(f => f.endsWith('.js') && !f.startsWith('_')).map(f => f.slice(0, -3)).sort();
}

function ladeDefinition(name) { return require(path.join(DEF_DIR, name + '.js')); }

module.exports = { zeichne, ladeDefinition, alleNamen };

if (require.main === module) {
  const namen = process.argv.slice(2).length ? process.argv.slice(2) : alleNamen();
  for (const name of namen) {
    const svg = zeichne(ladeDefinition(name));
    fs.writeFileSync(path.join(root, 'karten', name + '.svg'), svg);
    console.log('karten/' + name + '.svg geschrieben');
  }
}
