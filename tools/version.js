// Hängt beim Veröffentlichen an jede eigene CSS-, JS- und Kartendatei einen Hash ihres Inhalts an
// (z.B. css/basis.css?v=3f9a1c2e). So lädt der Browser geänderte Dateien sofort neu, ohne Hard-Reload.
// Läuft nur in der GitHub-Action vor dem Hochladen; die index.html im Repo bleibt unverändert.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.join(__dirname, '..');
const hash = buf => crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);

const datei = path.join(root, 'index.html');
let html = fs.readFileSync(datei, 'utf8');
html = html.replace(/(href|src)="((?:css|js|data)\/[^"?]+)"/g, (m, attr, f) => `${attr}="${f}?v=${hash(fs.readFileSync(path.join(root, f)))}"`);
// Karten werden von js/app.js eingefügt: eine gemeinsame Version über alle SVG-Dateien
const karten = fs.readdirSync(path.join(root, 'karten')).filter(f => f.endsWith('.svg')).sort()
  .map(f => fs.readFileSync(path.join(root, 'karten', f)));
html = html.replace('<html lang="de">', `<html lang="de" data-v="${hash(Buffer.concat(karten))}">`);
fs.writeFileSync(datei, html);
console.log('Versionen gesetzt:', (html.match(/\?v=/g) || []).length, 'Dateien plus Karten');
