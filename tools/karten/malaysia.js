// Karte Singapur, Malaysia (Ostküste) und Bangkok. Koordinaten als [Breite, Länge].
const orte = {
  SG: [1.35, 103.82], MS: [2.43, 103.84], TI: [2.82, 104.17], CHE: [4.13, 103.39], KTH: [4.38, 102.40], KBS: [5.83, 102.56],
  PER: [5.91, 102.74], MER: [5.53, 103.03], RED: [5.78, 103.01], TGG: [5.38, 103.10], KL: [3.14, 101.69], BKK: [13.75, 100.50]
};
module.exports = {
  reise: 'malaysia', orte,
  titel: 'Karte der Reiseroute von Singapur der Ostküste Malaysias entlang nach Norden, nach Kuala Lumpur und mit dem Flugzeug nach Bangkok',
  projektion: 'eq', parallel: 7, laenge: [98.6, 105.4], breitengrad: [0.95, 14.4], breite: 620,
  laender: ['SGP', 'MYS', 'THA'],
  wege: [
    ['bus', 'Singapur – Mersing', ['SG', [1.46, 103.76], [1.73, 103.90], [2.20, 103.88], 'MS']],
    ['ferry', 'Mersing – Tioman (hin und zurück)', ['MS', [2.58, 104.02], 'TI']],
    ['car', 'Mersing – Kuantan – Cherating', ['MS', [3.15, 103.45], [3.81, 103.33], 'CHE']],
    ['car', 'Cherating – Jerantut – Kuala Tahan', ['CHE', [3.85, 103.0], [3.94, 102.36], 'KTH']],
    ['car', 'Kuala Tahan – Gua Musang – Kuala Besut', ['KTH', [4.85, 101.96], [5.40, 102.20], 'KBS']],
    ['ferry', 'Kuala Besut – Perhentian', ['KBS', 'PER']],
    ['car', 'Kuala Besut – Merang', ['KBS', [5.65, 102.80], 'MER']],
    ['ferry', 'Merang – Redang', ['MER', 'RED']],
    ['car', 'Merang – Kuala Terengganu – Kuala Lumpur (East Coast Expressway)', ['MER', 'TGG', [4.75, 103.15], [3.95, 102.95], [3.55, 102.20], 'KL']],
    ['air', 'Kuala Lumpur – Bangkok', ['KL', 'BKK']]
  ],
  stationen: [[1, 'SG', 'l'], [2, 'TI', 'r'], [3, 'CHE', 'r'], [4, 'KTH', 'l'], [5, 'PER', 'u'], [6, 'RED', 'r'], [7, 'KL', 'l'], [8, 'BKK', 'r']],
  beschriftungen: [['Malaysia', 4.9, 101.5, 'cn'], ['Thailand', 9.5, 99.3, 'cn'], ['Golf von Thailand', 10.5, 102.0, 'sea'], ['Südchinesisches Meer', 3.6, 104.7, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [1.1, 103.0], 'end'], ['Rückflug nach Zürich ✈', [14.15, 100.7], 'start']]
};
