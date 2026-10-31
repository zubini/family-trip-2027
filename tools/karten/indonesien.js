// Karte Singapur und Indonesien (Übersicht). Koordinaten als [Breite, Länge].
const orte = {
  SG: [1.35, 103.82], SEN: [1.05, 103.95], DPS: [-8.75, 115.17], UBD: [-8.51, 115.26], AMD: [-8.34, 115.65], GA: [-8.36, 116.08],
  BGL: [-8.37, 116.12], KUT: [-8.89, 116.28], LOP: [-8.76, 116.28], LBJ: [-8.49, 119.88], KOM: [-8.58, 119.50],
  SAN: [-8.69, 115.26], LEM: [-8.68, 115.45], YIA: [-7.90, 110.06], JOG: [-7.80, 110.37], JIM: [-8.79, 115.16]
};
const wege = [
  ['air', 'Singapur – Bali', ['SG', [-2.5, 109.5], 'DPS']],
  ['car', 'Flughafen Bali – Ubud', ['DPS', [-8.64, 115.22], 'UBD']],
  ['car', 'Ubud – Sidemen – Amed', ['UBD', [-8.48, 115.42], [-8.40, 115.58], 'AMD']],
  ['ferry', 'Amed – Gili Air (Schnellboot)', ['AMD', [-8.30, 115.85], 'GA']],
  ['ferry', 'Gili Air – Bangsal', ['GA', 'BGL']],
  ['car', 'Bangsal – Kuta (Lombok)', ['BGL', [-8.55, 116.13], [-8.72, 116.24], 'KUT']],
  ['air', 'Lombok – Labuan Bajo', ['LOP', [-8.35, 118.0], 'LBJ']],
  ['ferry', 'Bootstouren im Komodo-Nationalpark', ['LBJ', [-8.62, 119.72], 'KOM']],
  ['air', 'Labuan Bajo – Bali', ['LBJ', [-8.25, 117.5], 'DPS']],
  ['car', 'Flughafen – Sanur', ['DPS', 'SAN']],
  ['ferry', 'Sanur – Nusa Lembongan (Schnellboot)', ['SAN', [-8.70, 115.36], 'LEM']],
  ['air', 'Bali – Yogyakarta und zurück', ['DPS', [-8.1, 112.6], 'YIA']],
  ['car', 'Flughafen Yogyakarta – Stadt', ['YIA', 'JOG']],
  ['car', 'Flughafen – Jimbaran', ['DPS', 'JIM']],
  ['air', 'Bali – Singapur', ['DPS', [-3.5, 111.0], 'SEN']]
];
module.exports = {
  reise: 'indonesien', orte, wege,
  titel: 'Übersichtskarte der Reiseroute von Singapur nach Bali, Lombok, Flores und Java und zurück',
  projektion: 'eq', parallel: -4, laenge: [101.8, 121.2], breitengrad: [-10.0, 2.6], breite: 1000,
  laender: ['SGP', 'IDN'],
  stationen: [[1, 'SG', 'u'], [6, 'LBJ', 'u'], [8, 'JOG', 'u'], [10, 'SEN', 'd']],
  beschriftungen: [['Java', -7.2, 108.8, 'cn'], ['Borneo', -1.0, 113.0, 'cn'], ['Sumatra', -2.5, 103.5, 'cn'], ['Flores', -8.95, 120.6, 'cn'], ['Javasee', -5.0, 111.5, 'sea'], ['Indischer Ozean', -9.6, 108.0, 'sea']],
  hinweise: [['Bali und Lombok: siehe Detailkarte', [-9.6, 115.6], 'middle'], ['Ankunft aus Zürich und Rückflug ✈', [1.6, 104.6], 'start']]
};
