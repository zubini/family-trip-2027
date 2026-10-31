// Karte Singapur und Malaysia (Ostküste). Koordinaten als [Breite, Länge].
const orte = {
  SG: [1.35, 103.82], SEN: [1.25, 103.83], MLK: [2.19, 102.25], KL: [3.14, 101.69], KTH: [4.38, 102.40], KBS: [5.83, 102.56],
  PER: [5.91, 102.74], MER: [5.53, 103.03], RED: [5.78, 103.01], CHE: [4.13, 103.39], MS: [2.43, 103.84], TI: [2.82, 104.17]
};
module.exports = {
  reise: 'malaysia', orte,
  titel: 'Karte der Reiseroute von Singapur über Malakka, Kuala Lumpur und Taman Negara an die Ostküste Malaysias und zurück',
  projektion: 'eq', parallel: 3.5, laenge: [100.9, 104.9], breitengrad: [0.95, 6.35], breite: 760,
  laender: ['SGP', 'MYS'],
  wege: [
    ['bus', 'Singapur – Malakka', ['SG', [1.46, 103.76], [1.85, 103.20], 'MLK']],
    ['bus', 'Malakka – Kuala Lumpur', ['MLK', [2.60, 101.95], 'KL']],
    ['car', 'Kuala Lumpur – Jerantut – Kuala Tahan', ['KL', [3.30, 102.00], [3.94, 102.36], 'KTH']],
    ['car', 'Kuala Tahan – Gua Musang – Kuala Besut', ['KTH', [4.85, 101.96], [5.40, 102.20], 'KBS']],
    ['ferry', 'Kuala Besut – Perhentian', ['KBS', 'PER']],
    ['car', 'Kuala Besut – Merang', ['KBS', [5.65, 102.80], 'MER']],
    ['ferry', 'Merang – Redang', ['MER', 'RED']],
    ['car', 'Merang – Kuala Terengganu – Cherating', ['MER', [5.33, 103.14], [4.75, 103.42], 'CHE']],
    ['car', 'Cherating – Kuantan – Mersing', ['CHE', [3.81, 103.33], [3.15, 103.45], 'MS']],
    ['ferry', 'Mersing – Tioman', ['MS', [2.58, 104.02], 'TI']],
    ['bus', 'Mersing – Singapur', ['MS', [2.20, 103.88], [1.73, 103.90], [1.46, 103.76], 'SEN']]
  ],
  stationen: [[1, 'SG', 'l'], [2, 'MLK', 'l'], [3, 'KL', 'l'], [4, 'KTH', 'l'], [5, 'PER', 'r'], [6, 'RED', 'r'], [7, 'CHE', 'r'], [8, 'TI', 'r'], [9, 'SEN', 'r']],
  beschriftungen: [['Malaysia', 4.6, 101.6, 'cn'], ['Südchinesisches Meer', 4.3, 104.3, 'sea'], ['Strasse von Malakka', 2.9, 101.1, 'sea']],
  hinweise: [['Ankunft aus Zürich und Rückflug ✈', [1.05, 103.0], 'end']]
};
