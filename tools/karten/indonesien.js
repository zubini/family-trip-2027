// Karte Singapur, Malaysia (Tioman) und Indonesien (Übersicht). Koordinaten als [Breite, Länge].
const orte = {
  SG: [1.35, 103.82], MS: [2.43, 103.84], TI: [2.82, 104.17], SEN: [1.05, 103.95], DPS: [-8.75, 115.17], UBD: [-8.51, 115.26], AMD: [-8.34, 115.65], GA: [-8.36, 116.08],
  BGL: [-8.37, 116.12], LOP: [-8.76, 116.28], LBJ: [-8.49, 119.88], KOM: [-8.58, 119.50],
  SAN: [-8.69, 115.26], LEM: [-8.68, 115.45], JIM: [-8.79, 115.16]
};
const wege = [
  ['bus', 'Singapur – Mersing (Bus, hin und zurück)', ['SG', [1.46, 103.76], [1.73, 103.90], [2.20, 103.88], 'MS']],
  ['ferry', 'Mersing – Pulau Tioman', ['MS', [2.58, 104.02], 'TI']],
  ['air', 'Singapur – Bali (Hin- und Rückflug)', ['SG', 'DPS']],
  ['car', 'Flughafen Bali – Ubud', ['DPS', [-8.64, 115.22], 'UBD']],
  ['car', 'Ubud – Sidemen – Amed', ['UBD', [-8.48, 115.42], [-8.40, 115.58], 'AMD']],
  ['ferry', 'Amed – Gili Air (Schnellboot)', ['AMD', [-8.30, 115.85], 'GA']],
  ['ferry', 'Gili Air – Bangsal', ['GA', 'BGL']],
  ['car', 'Bangsal – Flughafen Lombok', ['BGL', [-8.55, 116.20], 'LOP']],
  ['air', 'Lombok – Labuan Bajo', ['LOP', 'LBJ']],
  ['ferry', 'Bootstouren im Komodo-Nationalpark', ['LBJ', [-8.62, 119.72], 'KOM']],
  ['air', 'Labuan Bajo – Bali', ['LBJ', [-8.15, 117.6], 'DPS']],
  ['car', 'Flughafen – Sanur', ['DPS', 'SAN']],
  ['ferry', 'Sanur – Nusa Lembongan (Schnellboot)', ['SAN', [-8.70, 115.36], 'LEM']],
  ['car', 'Flughafen – Jimbaran', ['DPS', 'JIM']],
  ['car', 'Flughafen Singapur – Sentosa', ['SG', 'SEN']]
];
module.exports = {
  reise: 'indonesien', orte, wege,
  titel: 'Übersichtskarte der Reiseroute von Singapur nach Tioman, Bali, zu den Gili-Inseln und nach Flores und zurück',
  projektion: 'eq', parallel: -4, laenge: [101.8, 121.2], breitengrad: [-10.0, 3.6], breite: 1000,
  laender: ['SGP', 'IDN'],
  stationen: [[1, 'SG', 'l'], [2, 'TI', 'r'], [6, 'LBJ', 'u'], [9, 'SEN', 'd']],
  beschriftungen: [['Java', -7.2, 110.0, 'cn'], ['Malaysia', 2.3, 102.6, 'cn'], ['Borneo', -1.0, 113.0, 'cn'], ['Sumatra', -2.5, 103.5, 'cn'], ['Flores', -8.95, 120.6, 'cn'], ['Javasee', -5.0, 111.5, 'sea'], ['Indischer Ozean', -9.6, 108.0, 'sea']],
  hinweise: [['Bali und Gili-Inseln: siehe Detailkarte', [-9.6, 115.6], 'middle'], ['Ankunft aus Zürich und Rückflug ✈', [0.75, 104.4], 'start']]
};
